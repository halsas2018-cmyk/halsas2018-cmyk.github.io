// Shared data + helpers for the CHEMICAL BONDING topic — formation of an ionic bond.
// The Prep and Lab screens both import from here — mirrors energy/energy-data.js.

// Each pair is a metal atom + a non-metal atom. The metal loses its valence
// electron(s) to the non-metal, forming a cation (+) and an anion (−). The
// two oppositely charged ions attract electrostatically to build an ionic lattice.
export const BONDING_PAIRS = [
  {
    id: "na-cl",
    metalName: "Sodium", metalSymbol: "Na", metalColor: "#818cf8",
    metalShells: [2, 8, 1],
    metalCharge: "+1", metalIon: "Na⁺",
    nonmetalName: "Chlorine", nonmetalSymbol: "Cl", nonmetalColor: "#fb7185",
    nonmetalShells: [2, 8, 7],
    nonmetalCharge: "−1", nonmetalIon: "Cl⁻",
    transferred: 1,
    formula: "NaCl",
    compoundName: "Sodium chloride",
  },
  {
    id: "mg-o",
    metalName: "Magnesium", metalSymbol: "Mg", metalColor: "#a78bfa",
    metalShells: [2, 8, 2],
    metalCharge: "+2", metalIon: "Mg²⁺",
    nonmetalName: "Oxygen", nonmetalSymbol: "O", nonmetalColor: "#38bdf8",
    nonmetalShells: [2, 6],
    nonmetalCharge: "−2", nonmetalIon: "O²⁻",
    transferred: 2,
    formula: "MgO",
    compoundName: "Magnesium oxide",
  },
  {
    id: "k-br",
    metalName: "Potassium", metalSymbol: "K", metalColor: "#c084fc",
    metalShells: [2, 8, 8, 1],
    metalCharge: "+1", metalIon: "K⁺",
    nonmetalName: "Bromine", nonmetalSymbol: "Br", nonmetalColor: "#f59e0b",
    nonmetalShells: [2, 8, 18, 7],
    nonmetalCharge: "−1", nonmetalIon: "Br⁻",
    transferred: 1,
    formula: "KBr",
    compoundName: "Potassium bromide",
  },
];

export function getPair(id) {
  return BONDING_PAIRS.find((p) => p.id === id) || BONDING_PAIRS[0];
}

// ----- Geometry for drawing the atoms with react-native-svg -----
export const BENCH_W = 360;
export const BENCH_H = 300;
export const METAL_CENTER = { x: 96, y: 150 };
export const NONMETAL_CENTER = { x: 264, y: 150 };
export const NUC_R = 16;        // nucleus radius
export const MAX_OUTER_R = 75;  // outermost shell radius

// Radius of shell index `s` (0-based) for an atom that has `n` shells.
export function shellRadius(s, n) {
  const gap = (MAX_OUTER_R - NUC_R) / n;
  return NUC_R + (s + 1) * gap;
}

// The point at the top (12 o'clock) of the outermost shell of an atom.
export function outerTop(center, n) {
  return { x: center.x, y: center.y - shellRadius(n - 1, n) };
}
