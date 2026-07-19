// Shared data + biology helpers for the transport practical (potometer / transpiration).
// Mirrors lab/biology/secA-cell-environment/cell-environment-data.js and
// lab/titration/reagents.js.

// Apparatus for the potometer practical (measuring transpiration / water uptake).
export const POTOMETER_APPARATUS = [
  { id: "potometer", name: "Potometer (capillary tube)", needed: true, icon: "🧪" },
  { id: "plant", name: "Leafy shoot / plant cutting", needed: true, icon: "🌿" },
  { id: "reservoir", name: "Water reservoir", needed: true, icon: "💧" },
  { id: "rubber", name: "Rubber tubing & bung", needed: true, icon: "🔧" },
  { id: "stand", name: "Clamp & stand", needed: true, icon: "🏗️" },
  { id: "marker", name: "Marker pen", needed: false, icon: "🖊️" },
  { id: "goggles", name: "Safety goggles", needed: false, icon: "🥽" },
];

// The four environmental conditions the user can choose from. Each condition has a
// representative relative transpiration RATE (mm of bubble movement per minute). Wind + light
// open stomata and replace humid air at the leaf surface, so the bubble moves FASTEST. Dark
// and high humidity keep the rate LOW. The `rate` value is the textbook-style relative value.
export const ENV_CONDITIONS = [
  { id: "bright_windy", name: "Bright + windy", short: "Bright, windy", rate: 14.0, color: "#16a34a",
    note: "Sunlight drives stomata open and wind sweeps away humid air, so water loss is highest." },
  { id: "bright_still", name: "Bright + still air", short: "Bright, still", rate: 8.5, color: "#22c55e",
    note: "Light opens stomata, but still air stays humid near the leaf, slowing the bubble a little." },
  { id: "humid", name: "Humid (still)", short: "Humid", rate: 4.0, color: "#0ea5e9",
    note: "Still, moist air means little water vapour gradient, so transpiration drops." },
  { id: "dark", name: "Dark", short: "Dark", rate: 1.5, color: "#64748b",
    note: "Stomata close in the dark and no light energy drives transpiration, so the rate is lowest." },
];

// Conditions ranked from highest to lowest transpiration rate (the textbook order).
export function rankOrder() {
  return [...ENV_CONDITIONS].sort((a, b) => b.rate - a.rate);
}

// Human-readable rank label, e.g. "1st of 4 (highest)".
export function rankLabel(conditionId) {
  const order = rankOrder();
  const idx = order.findIndex((c) => c.id === conditionId);
  if (idx < 0) return "—";
  const pos = idx + 1;
  const total = order.length;
  const superlative = pos === 1 ? " (highest)" : pos === total ? " (lowest)" : "";
  return `${pos}${ordinal(pos)} of ${total}${superlative}`;
}

function ordinal(n) {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return s[(v - 20) % 10] || s[v] || s[0];
}

export function transpirationExplanation(condition) {
  if (!condition) return "";
  return `A potometer measures the water a leafy shoot takes up, which is a close proxy for the water it loses by transpiration. In the "${condition.name}" condition the bubble moved at about ${condition.rate.toFixed(1)} mm/min. ${condition.note} This ranks ${rankLabel(condition.id)}.`;
}
