// One-off audit: verifies study content coverage/shape/wiring vs constants.js.
// Run: node scripts/auditStudy.js
const fs = require("fs");
const path = require("path");
const parser = require("@babel/parser");

const ROOT = path.resolve(__dirname, "..");
const STUDY = path.join(ROOT, "study");

function parse(code) {
  return parser.parse(code, {
    sourceType: "module",
    plugins: ["jsx"],
  });
}

// ---- 1. Ground truth from constants.js ----
const constSrc = fs.readFileSync(path.join(ROOT, "constants.js"), "utf8");
const ast = parse(constSrc);
// Find SUBJECTS array
let subjectsNode = null;
for (const n of ast.program.body) {
  if (n.type === "ExportNamedDeclaration" && n.declaration && n.declaration.declarations) {
    for (const d of n.declaration.declarations) {
      if (d.id.name === "SUBJECTS") subjectsNode = d.init;
    }
  }
}
function objProps(objNode) {
  const o = {};
  for (const p of objNode.properties) {
    const key = p.key.name || p.key.value;
    o[key] = p.value;
  }
  return o;
}
const truth = {}; // subjectId -> { topicId -> [subtopics] }
for (const el of subjectsNode.elements) {
  const s = objProps(el);
  const sid = s.id.value;
  truth[sid] = {};
  for (const t of s.topics.elements) {
    const to = objProps(t);
    const tid = to.id.value;
    const subs = to.subtopics ? to.subtopics.elements.map((e) => e.value) : [];
    truth[sid][tid] = subs;
  }
}

// ---- 2. Walk study/<subject>/<topic>/index.js ----
const subjMap = { Chemistry: "chemistry", Biology: "biology", Physics: "physics" };
const problems = [];
const stats = {};

function readCardFile(fileNoExt, dir) {
  // resolve with or without .js
  let fp = path.join(dir, fileNoExt);
  if (!fp.endsWith(".js")) fp += ".js";
  if (!fs.existsSync(fp)) return { error: "MISSING FILE " + fp };
  const src = fs.readFileSync(fp, "utf8");
  let a;
  try { a = parse(src); } catch (e) { return { error: "PARSE ERROR " + e.message }; }
  // find default export array
  let arr = null;
  for (const n of a.program.body) {
    if (n.type === "ExportDefaultDeclaration") {
      if (n.declaration.type === "ArrayExpression") arr = n.declaration;
    }
  }
  if (!arr) return { error: "no default-export array" };
  const cards = [];
  for (const el of arr.elements) {
    if (el.type !== "ObjectExpression") { cards.push({ bad: true }); continue; }
    const keys = el.properties.map((p) => p.key.name || p.key.value);
    const hasH = keys.includes("heading");
    const hasB = keys.includes("body");
    let bodyText = "";
    for (const p of el.properties) {
      if ((p.key.name || p.key.value) === "body" && p.value.type === "StringLiteral") bodyText = p.value.value;
    }
    cards.push({ hasH, hasB, bodyText });
  }
  return { cards, fp };
}

for (const [subjId, topics] of Object.entries(truth)) {
  const sdir = subjMap[subjId];
  stats[subjId] = { topics: 0, missingTopicDir: [], authoredSubs: 0, truthSubs: 0 };
  for (const [tid, subs] of Object.entries(topics)) {
    stats[subjId].truthSubs += subs.length;
    const tdir = path.join(STUDY, sdir, tid);
    const idxPath = path.join(tdir, "index.js");
    if (!fs.existsSync(idxPath)) {
      stats[subjId].missingTopicDir.push(tid);
      problems.push(`[${subjId}/${tid}] NO index.js (topic not authored)`);
      continue;
    }
    stats[subjId].topics++;
    // parse index keys + imports
    const idxSrc = fs.readFileSync(idxPath, "utf8");
    let ia;
    try { ia = parse(idxSrc); } catch (e) { problems.push(`[${subjId}/${tid}] index PARSE ERROR ${e.message}`); continue; }
    const imports = {}; // localName -> source
    let extlessImport = false;
    for (const n of ia.program.body) {
      if (n.type === "ImportDeclaration") {
        const src = n.source.value;
        if (!src.endsWith(".js")) extlessImport = true;
        for (const sp of n.specifiers) imports[sp.local.name] = src;
      }
    }
    if (extlessImport) problems.push(`[${subjId}/${tid}] index.js uses extensionless imports (Node-unverifiable; Metro-OK)`);
    // default export object keys
    let keys = [];
    let keyToLocal = {};
    for (const n of ia.program.body) {
      if (n.type === "ExportDefaultDeclaration" && n.declaration.type === "ObjectExpression") {
        for (const p of n.declaration.properties) {
          const k = p.key.value != null ? p.key.value : p.key.name;
          keys.push(k);
          keyToLocal[k] = p.value.name;
        }
      }
    }
    // Coverage: every constants subtopic must be a key
    for (const sub of subs) {
      if (!keys.includes(sub)) problems.push(`[${subjId}/${tid}] MISSING subtopic key: "${sub}"`);
    }
    // Extra keys not in constants
    for (const k of keys) {
      if (!subs.includes(k)) problems.push(`[${subjId}/${tid}] EXTRA key not in constants: "${k}"`);
    }
    // Validate each card file
    for (const k of keys) {
      const local = keyToLocal[k];
      const src = imports[local];
      if (!src) { problems.push(`[${subjId}/${tid}] key "${k}" -> no import`); continue; }
      const res = readCardFile(src, tdir);
      if (res.error) { problems.push(`[${subjId}/${tid}] "${k}": ${res.error}`); continue; }
      stats[subjId].authoredSubs++;
      const c = res.cards;
      // Cards are textbook-style lessons: spread rich explanation across many
      // cards. Expect at least 5; cap generous for dense subtopics.
      if (c.length < 5 || c.length > 18) problems.push(`[${subjId}/${tid}] "${k}": ${c.length} cards (want 5-18)`);
      let totalBody = 0;
      c.forEach((card, i) => {
        if (card.bad) problems.push(`[${subjId}/${tid}] "${k}" card ${i}: not an object`);
        else if (!card.hasH || !card.hasB) problems.push(`[${subjId}/${tid}] "${k}" card ${i}: missing heading/body`);
        else {
          totalBody += (card.bodyText || "").length;
          if ((card.bodyText || "").length < 150) problems.push(`[${subjId}/${tid}] "${k}" card ${i}: THIN (${card.bodyText.length} chars) — expand to textbook depth`);
          if (/\?\s*$/.test((card.bodyText || "").trim().split(/[.!]/)[0]) && card.bodyText.length < 60) {
            problems.push(`[${subjId}/${tid}] "${k}" card ${i}: looks Q&A-ish -> "${card.bodyText.slice(0,50)}"`);
          }
        }
      });
      if (c.length && totalBody / c.length < 180) problems.push(`[${subjId}/${tid}] "${k}": avg body ${(totalBody/c.length).toFixed(0)} chars — content too thin for textbook depth`);
    }
  }
}

// ---- 3. Registry completeness ----
const regSrc = fs.readFileSync(path.join(STUDY, "registry.js"), "utf8");
const regKeys = [...regSrc.matchAll(/"([^"]+\/[^"]+)":/g)].map((m) => m[1]);
const regSet = new Set(regKeys);
for (const [subjId, topics] of Object.entries(truth)) {
  const sdir = subjMap[subjId];
  for (const tid of Object.keys(topics)) {
    const tdir = path.join(STUDY, sdir, tid);
    if (fs.existsSync(path.join(tdir, "index.js")) && !regSet.has(`${sdir}/${tid}`)) {
      problems.push(`[registry] MISSING entry: "${sdir}/${tid}" (authored but not in registry.js)`);
    }
  }
}
// registry entries pointing to nonexistent dirs
for (const rk of regKeys) {
  const p = path.join(STUDY, rk, "index.js");
  if (!fs.existsSync(p)) problems.push(`[registry] STALE entry: "${rk}" -> no ${rk}/index.js`);
}

// ---- Report ----
console.log("=== STATS ===");
for (const [s, st] of Object.entries(stats)) {
  const total = Object.keys(truth[s]).length;
  console.log(`${s}: ${st.topics}/${total} topics authored | subtopics authored ${st.authoredSubs}/${st.truthSubs}`);
  if (st.missingTopicDir.length) console.log(`   unauthored topics: ${st.missingTopicDir.join(", ")}`);
}
console.log(`\n=== PROBLEMS (${problems.length}) ===`);
for (const p of problems) console.log(p);
if (!problems.length) console.log("None. ✅");
