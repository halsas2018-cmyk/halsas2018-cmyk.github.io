// One-off: append .js to extensionless relative imports in study index.js files.
// Relative imports start with ./ or ../ ; node_modules imports are left alone.
const fs = require("fs");
const path = require("path");
const STUDY = path.join(__dirname, "..", "study");

function fixFile(fp) {
  let src = fs.readFileSync(fp, "utf8");
  let changed = 0;
  src = src.replace(/(from\s+["'])(\.\.?\/[^"']+?)(["'])/g, (m, a, p, c) => {
    if (p.endsWith(".js")) return m;
    changed++;
    return a + p + ".js" + c;
  });
  if (changed) {
    fs.writeFileSync(fp, src);
    console.log(`fixed ${changed} import(s): ${fp}`);
  }
  return changed;
}

let total = 0;
for (const subj of ["chemistry", "biology", "physics"]) {
  const dir = path.join(STUDY, subj);
  for (const t of fs.readdirSync(dir)) {
    const idx = path.join(dir, t, "index.js");
    if (fs.existsSync(idx)) total += fixFile(idx);
  }
}
console.log(`\nTotal import fixes: ${total}`);
