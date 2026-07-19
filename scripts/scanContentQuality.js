// One-off: scan EVERY study card body for Q&A-fragment / stub / placeholder smells.
const fs = require("fs");
const path = require("path");
const parser = require("@babel/parser");
const STUDY = path.join(__dirname, "..", "study");

function cardsOf(file) {
  const ast = parser.parse(fs.readFileSync(file, "utf8"), { sourceType: "module", plugins: ["jsx"] });
  for (const n of ast.program.body) {
    if (n.type === "ExportDefaultDeclaration" && n.declaration.type === "ArrayExpression") {
      return n.declaration.elements.map((el) => {
        const o = {};
        if (el.type !== "ObjectExpression") return o;
        for (const p of el.properties) {
          const k = p.key.name || p.key.value;
          if (p.value.type === "StringLiteral") o[k] = p.value.value;
          else if (p.value.type === "TemplateLiteral") o[k] = p.value.quasis.map((q) => q.value.cooked).join(" ");
        }
        return o;
      });
    }
  }
  return null;
}

const PLACEHOLDER = /\b(lorem ipsum|todo|tbd|placeholder|coming soon|xxx|fixme)\b/i;
const QA = /\b(Q:|A:|question:|answer:|fill in the blank|true or false|multiple choice)\b/i;
let files = 0, cards = 0;
const issues = [];

for (const subj of ["chemistry", "biology", "physics"]) {
  const dir = path.join(STUDY, subj);
  for (const t of fs.readdirSync(dir)) {
    const tdir = path.join(dir, t);
    if (!fs.statSync(tdir).isDirectory()) continue;
    for (const f of fs.readdirSync(tdir)) {
      if (!f.endsWith(".js") || f === "index.js") continue;
      const fp = path.join(tdir, f);
      let cs;
      try { cs = cardsOf(fp); } catch (e) { issues.push(`${subj}/${t}/${f}: PARSE ${e.message}`); continue; }
      if (!cs) { issues.push(`${subj}/${t}/${f}: no default array`); continue; }
      files++;
      const rel = `${subj}/${t}/${f}`;
      cs.forEach((c, i) => {
        cards++;
        const h = (c.heading || "").trim();
        const b = (c.body || "").trim();
        if (!h) issues.push(`${rel} card${i}: empty heading`);
        if (!b) { issues.push(`${rel} card${i}: empty body`); return; }
        if (PLACEHOLDER.test(b) || PLACEHOLDER.test(h)) issues.push(`${rel} card${i}: PLACEHOLDER -> "${b.slice(0,50)}"`);
        if (QA.test(b) || QA.test(h)) issues.push(`${rel} card${i}: Q&A marker -> "${b.slice(0,50)}"`);
        if (b.length < 40) issues.push(`${rel} card${i}: stub body (${b.length} chars) -> "${b}"`);
        // body that is ONLY a question (ends with ? and single sentence)
        const sentences = b.split(/[.!?]+/).filter((s) => s.trim().length > 3);
        if (b.endsWith("?") && sentences.length <= 1) issues.push(`${rel} card${i}: body is a bare question -> "${b.slice(0,60)}"`);
        if (/^h(eading)?\s*$/i.test(h)) issues.push(`${rel} card${i}: junk heading -> "${h}"`);
      });
    }
  }
}

console.log(`Scanned ${files} card files, ${cards} cards.`);
console.log(`Issues: ${issues.length}`);
for (const i of issues.slice(0, 120)) console.log("  " + i);
if (issues.length > 120) console.log(`  ...and ${issues.length - 120} more`);
