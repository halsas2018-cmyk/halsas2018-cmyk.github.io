// One-off: confirm every study index.js + its cards resolve in plain Node,
// via a minimal hand-rolled ESM->CJS transform (no babel preset needed).
const fs = require("fs");
const path = require("path");
const parser = require("@babel/parser");

const STUDY = path.join(__dirname, "..", "study");
const cache = {};

let gen;
try { gen = require("@babel/generator").default; } catch (e) { gen = null; }

function transpile(code) {
  const ast = parser.parse(code, { sourceType: "module", plugins: ["jsx"] });
  const imports = [];
  const out = [];
  for (const n of ast.program.body) {
    if (n.type === "ImportDeclaration") {
      const src = n.source.value;
      for (const sp of n.specifiers) imports.push({ local: sp.local.name, source: src });
    } else if (n.type === "ExportDefaultDeclaration") {
      out.push(`module.exports.default = ${gen(n.declaration).code};`);
    }
    // other statements (none expected) ignored
  }
  return { code: out.join("\n"), imports };
}

function load(file) {
  if (cache[file]) return cache[file];
  const code = fs.readFileSync(file, "utf8");
  const { code: js, imports } = transpile(code);
  const module = { exports: {} };
  const resolved = {};
  for (const imp of imports) {
    let target = path.resolve(path.dirname(file), imp.source);
    if (!target.endsWith(".js")) target += ".js";
    resolved[imp.local] = load(target).default; // default import binding
  }
  const req = (p) => {
    let t = path.resolve(path.dirname(file), p);
    if (!t.endsWith(".js")) t += ".js";
    return load(t);
  };
  const fn = new Function("require", "module", "exports", ...Object.keys(resolved), js);
  fn(req, module, module.exports, ...Object.values(resolved));
  cache[file] = module.exports;
  return module.exports;
}

let ok = 0, fail = 0;
const fails = [];
for (const subj of ["chemistry", "biology", "physics"]) {
  const dir = path.join(STUDY, subj);
  for (const t of fs.readdirSync(dir)) {
    const idx = path.join(dir, t, "index.js");
    if (!fs.existsSync(idx)) continue;
    try {
      const def = load(idx).default;
      const keys = Object.keys(def);
      let cards = 0;
      for (const k of keys) {
        const arr = def[k];
        if (!Array.isArray(arr)) throw new Error(`key "${k}" not an array`);
        cards += arr.length;
      }
      ok++;
    } catch (e) {
      fail++;
      fails.push(`${subj}/${t}: ${e.message}`);
    }
  }
}
console.log(`Loaded OK: ${ok} topic indexes | FAILED: ${fail}`);
for (const f of fails) console.log("  FAIL " + f);
