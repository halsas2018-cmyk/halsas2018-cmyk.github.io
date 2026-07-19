// Validates that every study/<subject>/<topicId>/index.js maps the EXACT
// constants.js subtopic strings. Text-based (no ESM import) so it works despite
// the extensionless imports Metro allows but Node ESM does not.
// Run: node scripts/checkStudy.js
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const constantsText = fs.readFileSync(path.join(ROOT, "constants.js"), "utf8");

// topicId -> [subtopics] from constants.js
const topics = {};
const topicRe = /id:\s*"([^"]+)"[^}]*?subtopics:\s*\[([^\]]*)\]/g;
let m;
while ((m = topicRe.exec(constantsText))) {
  const id = m[1];
  const subs = [...m[2].matchAll(/"([^"]+)"/g)].map((x) => x[1]);
  topics[id] = subs;
}

let problems = 0;
let checked = 0;
for (const subj of ["chemistry", "biology", "physics"]) {
  const subjDir = path.join(ROOT, "study", subj);
  if (!fs.existsSync(subjDir)) continue;
  for (const topicId of fs.readdirSync(subjDir)) {
    const idx = path.join(subjDir, topicId, "index.js");
    if (!fs.existsSync(idx)) continue;
    const text = fs.readFileSync(idx, "utf8");
    const keys = new Set();
    const keyRe = /(?:"([^"]+)"|([A-Za-z_$][\w$]*))\s*:/g;
    let k;
    while ((k = keyRe.exec(text))) keys.add(k[1] || k[2]);
    const expected = topics[topicId] || [];
    for (const st of expected) {
      if (!keys.has(st)) {
        console.log(`KEY MISSING  ${subj}/${topicId} -> "${st}"`);
        problems++;
      }
    }
    checked++;
  }
}

console.log(checked ? `Checked ${checked} topic indexes — ${problems} problem(s).` : "No topic indexes found.");
process.exit(problems ? 1 : 0);
