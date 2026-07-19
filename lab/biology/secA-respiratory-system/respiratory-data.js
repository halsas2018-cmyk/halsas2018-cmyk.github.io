// Shared data + biology helpers for the respiratory-system practical
// (breathing model + detecting CO2 in exhaled air with limewater).
// Mirrors the titration / plant-nutrition data-file pattern.

// Apparatus for the bell-jar breathing model + limewater test.
export const BREATHING_APPARATUS = [
  { id: "belljar", name: "Bell jar (thorax)", needed: true, icon: "🔔" },
  { id: "diaphragm", name: "Rubber sheet (diaphragm)", needed: true, icon: "⬇️" },
  { id: "tube", name: "Y-tube / straw", needed: true, icon: "🔧" },
  { id: "lime1", name: "Test tube + limewater (inhaled)", needed: true, icon: "🧪" },
  { id: "lime2", name: "Test tube + limewater (exhaled)", needed: true, icon: "🧪" },
  { id: "stand", name: "Retort stand", needed: false, icon: "🗜️" },
];

// Breathing rate / condition affects how many breaths we demonstrate.
export const BREATHING_RATES = [
  { id: "rest", label: "At rest (quiet breathing)", cycles: 3, color: "#38bdf8" },
  { id: "exercise", label: "After exercise (deep & fast)", cycles: 5, color: "#ef4444" },
];

export function getRate(id) {
  return BREATHING_RATES.find((r) => r.id === id) || BREATHING_RATES[0];
}

export function breathingSummary(rate) {
  return `You ran ${rate.label.toLowerCase()} for ${rate.cycles} breaths. Exhaled air turned the limewater cloudy (milky) because it contains more carbon dioxide than inhaled air. On inhalation the diaphragm contracts and moves DOWN (flattens), increasing the chest volume so air rushes IN.`;
}

export function breathingExplanation() {
  return "Carbon dioxide turns limewater (calcium hydroxide solution) cloudy / milky by forming calcium carbonate. Inhaled (fresh) air has little CO₂, so its limewater stays clear. Exhaled air has much more CO₂, so its limewater clouds over. This proves respiration releases CO₂. During inhalation the diaphragm contracts and flattens downward, enlarging the thoracic cavity; during exhalation it relaxes and domes upward.";
}
