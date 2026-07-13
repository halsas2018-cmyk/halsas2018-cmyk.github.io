// Reagent + apparatus data for the titration practical, plus chemistry helpers.
// Each reagent carries its stoichiometric factor (acidity / basicity) so the
// app can compute the equivalence (endpoint) volume: Ca·Va·nₐ = Cb·Vb·n_b.

export const ACIDS = [
  { id: "hcl", name: "Hydrochloric acid", formula: "HCl", strength: "strong", molarity: 0.100, factor: 1, color: "#38bdf8", note: "Strong monoprotic acid." },
  { id: "h2so4", name: "Sulphuric acid", formula: "H₂SO₄", strength: "strong", molarity: 0.100, factor: 2, color: "#0ea5e9", note: "Strong diprotic acid — 2 H⁺ per molecule." },
  { id: "hno3", name: "Nitric acid", formula: "HNO₃", strength: "strong", molarity: 0.100, factor: 1, color: "#22d3ee", note: "Strong monoprotic acid." },
  { id: "ch3cooh", name: "Ethanoic acid", formula: "CH₃COOH", strength: "weak", molarity: 0.100, factor: 1, color: "#a3e635", note: "Weak monoprotic acid (vinegar)." },
];

export const BASES = [
  { id: "naoh", name: "Sodium hydroxide", formula: "NaOH", strength: "strong", molarity: 0.100, factor: 1, color: "#f472b6", note: "Strong monobasic alkali." },
  { id: "koh", name: "Potassium hydroxide", formula: "KOH", strength: "strong", molarity: 0.100, factor: 1, color: "#fb7185", note: "Strong monobasic alkali." },
  { id: "nh3", name: "Ammonia solution", formula: "NH₃", strength: "weak", molarity: 0.100, factor: 1, color: "#f0abfc", note: "Weak alkali (ammonium hydroxide)." },
];

export const INDICATORS = [
  {
    id: "phenolphthalein",
    name: "Phenolphthalein",
    colorInAcid: "colourless",
    colorInAlkali: "#ec4899",
    bestFor: "weak acid / strong base (and strong/strong)",
    note: "Colourless in acid → pink in alkali. Best for weak-acid/strong-base titrations.",
  },
  {
    id: "methylorange",
    name: "Methyl orange",
    colorInAcid: "#dc2626",
    colorInAlkali: "#facc15",
    bestFor: "strong acid / weak base (and strong/strong)",
    note: "Red in acid → yellow in alkali. Best for strong-acid/weak-base titrations.",
  },
  {
    id: "methylred",
    name: "Methyl red",
    colorInAcid: "#dc2626",
    colorInAlkali: "#facc15",
    bestFor: "strong / strong",
    note: "Red → yellow around the neutral point.",
  },
];

export const APPARATUS = [
  { id: "burette", name: "Burette", needed: true, icon: "🧪" },
  { id: "pipette", name: "Pipette", needed: true, icon: "🥄" },
  { id: "conical", name: "Conical flask", needed: true, icon: "⚗️" },
  { id: "indicator", name: "Indicator bottle", needed: true, icon: "🧫" },
  { id: "stand", name: "Retort stand & clamp", needed: true, icon: "🏗️" },
  { id: "tile", name: "White tile", needed: false, icon: "⬜" },
  { id: "funnel", name: "Funnel", needed: false, icon: "🔻" },
];

// Equivalence volume of acid (mL) for a chosen base volume (mL):
//   Ca·Va·nₐ = Cb·Vb·n_b   ⇒   Va = (Cb·Vb·n_b) / (Ca·nₐ)
export function equivalenceAcidVolume({ acid, base, baseVolume }) {
  const va = (base.molarity * baseVolume * base.factor) / (acid.molarity * acid.factor);
  return Math.round(va * 10) / 10;
}

// Which indicator(s) suit this acid/base pair.
export function recommendIndicator(acid, base) {
  if (acid.strength === "weak" && base.strength === "weak") {
    return { best: null, ok: [], warn: "Weak acid + weak base has NO sharp endpoint — not suitable for an indicator titration." };
  }
  if (acid.strength === "weak" && base.strength === "strong") {
    return { best: "phenolphthalein", ok: ["phenolphthalein"], warn: null };
  }
  if (acid.strength === "strong" && base.strength === "weak") {
    return { best: "methylorange", ok: ["methylorange"], warn: null };
  }
  // strong + strong
  return { best: "phenolphthalein", ok: ["phenolphthalein", "methylorange", "methylred"], warn: null };
}
