// Partition study topics into agent work-units.
// Run: node scripts/partitionStudy.js
// Prints one line per unit:  subject<TAB>dir1,dir2,...
// Grouping keeps each unit's subtopic count near TARGET (default 6) so that
// each agent rewrite stays within a comfortable context budget.
const fs = require("fs");
const path = require("path");
const ROOT = path.resolve(__dirname, "..");
const STUDY = path.join(ROOT, "study");
const TARGET = Number(process.argv[2] || 6);

const SUBJ = { Chemistry: "chemistry", Biology: "biology", Physics: "physics" };

function subtopicCount(dir) {
  if (!fs.existsSync(path.join(dir, "index.js"))) return 0;
  return fs.readdirSync(dir).filter((f) => f.endsWith(".js") && f !== "index.js").length;
}

for (const [sid, sdir] of Object.entries(SUBJ)) {
  const base = path.join(STUDY, sdir);
  const topics = fs.readdirSync(base).filter((t) => fs.statSync(path.join(base, t)).isDirectory());
  const units = [];
  let cur = [];
  let curN = 0;
  for (const t of topics) {
    const n = subtopicCount(path.join(base, t));
    if (curN + n > TARGET && cur.length) {
      units.push(cur);
      cur = [];
      curN = 0;
    }
    cur.push(t);
    curN += n;
    if (curN >= TARGET) {
      units.push(cur);
      cur = [];
      curN = 0;
    }
  }
  if (cur.length) units.push(cur);
  const plan = [];
  for (const u of units) {
    const dirs = u.map((t) => path.join(base, t)).join(",");
    const total = u.reduce((a, t) => a + subtopicCount(path.join(base, t)), 0);
    const line = `${sid}\t${dirs}\t(${total} subtopics)`;
    console.log(line);
    plan.push({ subject: sid, dirs: u.map((t) => path.join(base, t)), subtopics: total });
  }
  fs.writeFileSync("/tmp/study_units.json", JSON.stringify(plan, null, 2));
}
