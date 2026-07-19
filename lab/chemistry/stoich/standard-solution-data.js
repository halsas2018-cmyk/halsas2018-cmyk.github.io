// Shared data + helpers for preparing a standard solution.

export const SOLUTES = [
  { id: "nacl", name: "Sodium chloride", formula: "NaCl", M: 58.5, color: "#e0f2fe" },
  { id: "na2co3", name: "Sodium carbonate", formula: "Na₂CO₃", M: 106, color: "#fef3c7" },
  { id: "oxalic", name: "Oxalic acid", formula: "H₂C₂O₄·2H₂O", M: 126, color: "#dcfce7" },
];

export const FLASK_VOLS = [100, 250, 500];

// Concentration in mol dm⁻³ from mass (g), molar mass M (g/mol), volume (mL).
export function concentration(mass, M, volMl) {
  const moles = mass / M;
  const volL = volMl / 1000;
  return moles / volL;
}
