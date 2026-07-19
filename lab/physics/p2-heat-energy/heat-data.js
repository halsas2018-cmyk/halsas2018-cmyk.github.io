// Shared data + chemistry/physics helpers for the Specific Heat Capacity lab.
export const HEAT_APPARATUS = [
  { id: "beaker", name: "Beaker (250 mL)", needed: true, icon: "🧪" },
  { id: "thermometer", name: "Thermometer", needed: true, icon: "🌡️" },
  { id: "balance", name: "Top-pan balance", needed: true, icon: "⚖️" },
  { id: "hotplate", name: "Hot plate / Bunsen", needed: false, icon: "🔥" },
  { id: "stirrer", name: "Glass stirrer", needed: false, icon: "🥄" },
];

export const MATERIALS = [
  { id: "copper", name: "Copper", c: 390, color: "#b45309" },
  { id: "aluminium", name: "Aluminium", c: 900, color: "#94a3b8" },
  { id: "iron", name: "Iron", c: 450, color: "#64748b" },
];

export const C_WATER = 4200; // J/(kg·°C)
export const T_HOT = 100; // °C — solid heated in boiling water
export const T_INIT_WATER = 20; // °C — initial water temperature

// Forward: equilibrium final temperature given the true specific heat of the solid.
// m in kg, c in J/(kg·°C), temperatures in °C. Assumes an ideal calorimeter
// (no heat lost to the calorimeter walls).
export function computeTf({ ms, mw, cs, cw = C_WATER, tHot = T_HOT, tInit = T_INIT_WATER }) {
  const num = ms * cs * tHot + mw * cw * tInit;
  const den = ms * cs + mw * cw;
  return num / den;
}

// Reverse: specific heat of the solid from observed temperatures.
export function computeC({ ms, mw, cw = C_WATER, tHot = T_HOT, tInit, tFinal }) {
  const dTwater = tFinal - tInit;
  const dTsolid = tHot - tFinal;
  if (ms <= 0 || dTsolid <= 0) return null;
  return (mw * cw * dTwater) / (ms * dTsolid);
}
