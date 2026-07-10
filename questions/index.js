// ─── QUESTIONS INDEX ──────────────────────────────────────────────────────────
// This file combines all subject question files into one export.
// To add a new subject:
// 1. Create a new file e.g. questions/biology.js
// 2. Import it here
// 3. Spread it into QUESTIONS below

import chemistry from "./chemistry";
import biology from "./biology";
import physics from "./physics";

const QUESTIONS = {
  ...chemistry,
  ...biology,
  ...physics,
};

export default QUESTIONS;
