// Shared data + helpers for the qualitative ion-tests practical
// (flame tests for cations, precipitate tests for anions).

export const CATIONS = [
  { id: "na", name: "Sodium (Na⁺)", flame: "#fb923c", flameName: "persistent orange-yellow", note: "Sodium gives a strong orange-yellow flame." },
  { id: "k", name: "Potassium (K⁺)", flame: "#c084fc", flameName: "lilac", note: "Potassium gives a lilac flame (view through cobalt glass)." },
  { id: "ca", name: "Calcium (Ca²⁺)", flame: "#e07a5f", flameName: "brick-red", note: "Calcium gives a brick-red flame." },
  { id: "cu", name: "Copper (Cu²⁺)", flame: "#22c55e", flameName: "blue-green", note: "Copper gives a blue-green flame." },
  { id: "li", name: "Lithium (Li⁺)", flame: "#ef4444", flameName: "crimson red", note: "Lithium gives a crimson red flame." },
];

export const ANIONS = [
  { id: "cl", name: "Chloride (Cl⁻)", reagent: "Silver nitrate", result: "white precipitate (AgCl)", pptColor: "#f8fafc", note: "Cl⁻ + AgNO₃ → white AgCl precipitate." },
  { id: "so4", name: "Sulfate (SO₄²⁻)", reagent: "Barium chloride", result: "white precipitate (BaSO₄)", pptColor: "#f8fafc", note: "SO₄²⁻ + BaCl₂ → white BaSO₄ precipitate." },
  { id: "co3", name: "Carbonate (CO₃²⁻)", reagent: "Dilute acid", result: "effervescence of CO₂", pptColor: "#94a3b8", note: "CO₃²⁻ + acid → CO₂ bubbles (turns limewater milky)." },
];

// 3 options (target + 2 distractors) for the identify step, deterministically ordered.
export function optionsFor(target, pool) {
  const others = pool.filter((x) => x.id !== target.id);
  const picks = [target, others[0], others[1]];
  return picks.slice().sort((a, b) => (a.id > b.id ? 1 : -1));
}
