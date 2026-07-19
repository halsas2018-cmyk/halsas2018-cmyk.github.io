// Shared data + chemistry helpers for the STOICH topic mass & mole practical
// (Stoichiometry: Mass & Mole Relationships). The Prep and Lab screens both
// import from here — mirrors titration/reagents.js and energy/energy-data.js.

// A few simple, balanced reactions the learner can pick from.
//   reactants[i] : { key, name, formula, Mr, stoich, color }
//   products[i]  : { name, formula, Mr, stoich, color }
// moles = mass / Mr ; the limiting reagent is the one with the smallest
// (moles / stoich). Product mass = minRatio × productStoich × productMr.
export const REACTIONS = [
  {
    id: "water",
    title: "Synthesis of water",
    balanced: "2H₂ + O₂  →  2H₂O",
    reactants: [
      { key: "H2", name: "Hydrogen", formula: "H₂", Mr: 2, stoich: 2, color: "#60a5fa" },
      { key: "O2", name: "Oxygen", formula: "O₂", Mr: 32, stoich: 1, color: "#ef4444" },
    ],
    products: [
      { name: "Water", formula: "H₂O", Mr: 18, stoich: 2, color: "#22d3ee" },
    ],
  },
  {
    id: "neutral",
    title: "Acid–alkali neutralization",
    balanced: "HCl + NaOH  →  NaCl + H₂O",
    reactants: [
      { key: "HCl", name: "Hydrochloric acid", formula: "HCl", Mr: 36.5, stoich: 1, color: "#60a5fa" },
      { key: "NaOH", name: "Sodium hydroxide", formula: "NaOH", Mr: 40, stoich: 1, color: "#f472b6" },
    ],
    products: [
      { name: "Sodium chloride", formula: "NaCl", Mr: 58.5, stoich: 1, color: "#fbbf24" },
      { name: "Water", formula: "H₂O", Mr: 18, stoich: 1, color: "#22d3ee" },
    ],
  },
  {
    id: "ammonia",
    title: "Haber process",
    balanced: "N₂ + 3H₂  →  2NH₃",
    reactants: [
      { key: "N2", name: "Nitrogen", formula: "N₂", Mr: 28, stoich: 1, color: "#a78bfa" },
      { key: "H2", name: "Hydrogen", formula: "H₂", Mr: 2, stoich: 3, color: "#60a5fa" },
    ],
    products: [
      { name: "Ammonia", formula: "NH₃", Mr: 17, stoich: 2, color: "#34d399" },
    ],
  },
];

export const STOICH_APPARATUS = [
  { id: "beaker", name: "Beaker", needed: true, icon: "🥤" },
  { id: "flask", name: "Conical flask", needed: true, icon: "⚗️" },
  { id: "bunsen", name: "Bunsen burner", needed: false, icon: "🔥" },
  { id: "thermometer", name: "Thermometer", needed: false, icon: "🌡️" },
];

function num(v) {
  const n = parseFloat(v);
  return Number.isFinite(n) && n >= 0 ? n : 0;
}

// Full stoichiometric calculation for the chosen mix.
export function computeStoich({ reaction, massA, massB }) {
  const [ra, rb] = reaction.reactants;
  const m1 = num(massA);
  const m2 = num(massB);

  const molesA = m1 / ra.Mr;
  const molesB = m2 / rb.Mr;
  const ratioA = molesA / ra.stoich;
  const ratioB = molesB / rb.stoich;

  // The limiting reagent has the smaller available mole-ratio.
  const limitingReactant = ratioA <= ratioB ? ra : rb;
  const limitingOther = ratioA <= ratioB ? rb : ra;
  const minRatio = Math.min(ratioA, ratioB);

  // Each product mass uses the same limiting minRatio.
  const productDetails = reaction.products.map((p) => ({
    ...p,
    moles: minRatio * p.stoich,
    mass: minRatio * p.stoich * p.Mr,
  }));
  const productMass = productDetails.reduce((s, p) => s + p.mass, 0);

  // How much of the *non-limiting* reactant is left unreacted (g).
  const usedLimiting = minRatio * limitingReactant.stoich * limitingReactant.Mr;
  const excessMass =
    limitingReactant === ra ? Math.max(0, m2 - minRatio * limitingOther.stoich * limitingOther.Mr)
                            : Math.max(0, m1 - minRatio * limitingOther.stoich * limitingOther.Mr);

  return {
    molesA,
    molesB,
    ratioA,
    ratioB,
    limitingKey: limitingReactant.key,
    limitingName: limitingReactant.name,
    limitingFormula: limitingReactant.formula,
    limitingReactant,
    productMass,
    productDetails,
    minRatio,
    excessMass,
    // Visual fill levels (0..1) for the apparatus — scale by mass.
    fillA: Math.max(0.18, Math.min(1, m1 / 100)),
    fillB: Math.max(0.18, Math.min(1, m2 / 100)),
    productFill: Math.max(0.18, Math.min(1, productMass / 100)),
  };
}
