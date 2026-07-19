// Shared data + chemistry helpers for the redox (redox) practicals.
//
// Two interactive experiments live in this topic:
//   1) electroplating.js  → RedoxElectroplatingLab (electrolytic plating)
//   2) metal-displacement.js → RedoxDisplacementLab (reactivity displacement)
//
// Reactivity series used (most → least reactive):
//   K > Na > Ca > Mg > Al > C > Zn > Fe > Sn > Pb > (H) > Cu > Hg > Ag > Pt > Au
// A MORE reactive metal displaces a LESS reactive metal from its aqueous salt.
// In electrolysis the ANODE (+) is oxidised (metal dissolves); the CATHODE (−)
// is reduced (metal ions plate out). Electrons flow anode → cathode externally.

// ---- Electroplating data -------------------------------------------------
// The plating metal is the ANODE (connected to + terminal, dissolves).
// The object to be coated is the CATHODE (connected to − terminal, gets plated).
export const PLATING_METALS = [
  { id: "cu", name: "Copper", symbol: "Cu", color: "#b45309", charge: 2, factor: 1 },
  { id: "ag", name: "Silver", symbol: "Ag", color: "#d4af37", charge: 1, factor: 1 },
  { id: "ni", name: "Nickel", symbol: "Ni", color: "#9ca3af", charge: 2, factor: 1 },
  { id: "zn", name: "Zinc", symbol: "Zn", color: "#94a3b8", charge: 2, factor: 1 },
];

// Each electrolyte contains the ions of ONE plating metal (they must match).
export const ELECTROLYTES = [
  { id: "cuso4", name: "Copper(II) sulphate", formula: "CuSO₄(aq)", color: "#1d4ed8", metalId: "cu" },
  { id: "agno3", name: "Silver nitrate", formula: "AgNO₃(aq)", color: "#e0f2fe", metalId: "ag" },
  { id: "niso4", name: "Nickel(II) sulphate", formula: "NiSO₄(aq)", color: "#15803d", metalId: "ni" },
  { id: "znso4", name: "Zinc sulphate", formula: "ZnSO₄(aq)", color: "#cbd5e1", metalId: "zn" },
];

// The object to be coated (the CATHODE). It must be a conductor.
export const PLATE_OBJECTS = [
  { id: "spoon", name: "Steel spoon", symbol: "🥄" },
  { id: "ring", name: "Metal ring", symbol: "💍" },
  { id: "key", name: "Iron key", symbol: "🔑" },
];

export const ELECTROPLATING_APPARATUS = [
  { id: "beaker", name: "Beaker", needed: true, icon: "🥃" },
  { id: "dcsupply", name: "DC power supply", needed: true, icon: "🔌" },
  { id: "wires", name: "Connecting wires", needed: true, icon: "🔗" },
  { id: "anode", name: "Plating-metal bar (anode)", needed: true, icon: "🟫" },
  { id: "cathode", name: "Object (cathode)", needed: true, icon: "🥄" },
  { id: "stand", name: "Retort stand & clamp", needed: false, icon: "🏗️" },
];

// ---- Displacement data ---------------------------------------------------
// Higher `reactivity` = more reactive (further up the series).
export const DISPLACE_METALS = [
  { id: "mg", name: "Magnesium", symbol: "Mg", reactivity: 6, color: "#cbd5e1", ionColor: "#e2e8f0" },
  { id: "zn", name: "Zinc", symbol: "Zn", reactivity: 5, color: "#94a3b8", ionColor: "#e2e8f0" },
  { id: "fe", name: "Iron", symbol: "Fe", reactivity: 4, color: "#9ca3af", ionColor: "#bbf7d0" },
  { id: "pb", name: "Lead", symbol: "Pb", reactivity: 3, color: "#6b7280", ionColor: "#e2e8f0" },
  { id: "cu", name: "Copper", symbol: "Cu", reactivity: 2, color: "#b45309", ionColor: "#1d4ed8" },
  { id: "ag", name: "Silver", symbol: "Ag", reactivity: 1, color: "#d4af37", ionColor: "#e0f2fe" },
];

export const DISPLACEMENT_APPARATUS = [
  { id: "beaker", name: "Beaker", needed: true, icon: "🥃" },
  { id: "salt", name: "Salt solution", needed: true, icon: "🧪" },
  { id: "strip", name: "Metal strip", needed: true, icon: "🟦" },
  { id: "tongs", name: "Tongs", needed: false, icon: "🤏" },
];

// ---- Helpers -------------------------------------------------------------
export function electrolyteFor(metalId) {
  return ELECTROLYTES.find((e) => e.metalId === metalId) || null;
}

// The plating solution must contain ions of the SAME metal being plated.
export function isElectrolyteMatch(platingMetalId, electrolyteId) {
  const e = ELECTROLYTES.find((x) => x.id === electrolyteId);
  return !!e && e.metalId === platingMetalId;
}

// A more reactive metal displaces a less reactive one from its salt.
// `added` = the solid strip dipped in; `salt` = the cation already in solution.
export function willDisplace(added, salt) {
  return added.reactivity > salt.reactivity;
}

// Half-equation strings for the displacement of `salt` by `added`.
export function displacementEquations(added, salt) {
  const nA = added.symbol;
  const s = salt.symbol;
  return {
    overall: `${nA}(s) + ${s}²⁺(aq) → ${nA}²⁺(aq) + ${s}(s)`,
    note: `${nA} is more reactive than ${s}, so it loses electrons and pushes ${s}²⁺ ions out of solution as solid ${s}.`,
  };
}
