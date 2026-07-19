// Data + chemistry helpers for the States-of-Matter practicals:
//   (1) Diffusion of Gases  — Graham's law
//   (2) Boyle's law & Charles's law — the gas laws
// Shared by StatesDiffusionPrep / StatesDiffusionLab and
// StatesGasLawsPrep / StatesGasLawsLab. Both import from here so the
// prep wizard and the simulation always agree on the chemistry.

// ===========================================================================
// 1 · DIFFUSION OF GASES  (Graham's law)
//    rate of diffusion ∝ 1 / √(molar mass)
//    → the lighter gas (smaller molar mass) diffuses faster.
// ===========================================================================

export const DIFFUSION_GASES = [
  { id: "h2", name: "Hydrogen", formula: "H₂", molarMass: 2, color: "#a3e635", icon: "💨" },
  { id: "he", name: "Helium", formula: "He", molarMass: 4, color: "#67e8f9", icon: "🎈" },
  { id: "ch4", name: "Methane", formula: "CH₄", molarMass: 16, color: "#fcd34d", icon: "🔥" },
  { id: "nh3", name: "Ammonia", formula: "NH₃", molarMass: 17, color: "#c4b5fd", icon: "💨" },
  { id: "co2", name: "Carbon dioxide", formula: "CO₂", molarMass: 44, color: "#94a3b8", icon: "🌫️" },
  { id: "cl2", name: "Chlorine", formula: "Cl₂", molarMass: 71, color: "#86efac", icon: "🟢" },
];

export const DIFFUSION_APPARATUS = [
  { id: "jars", name: "Two gas jars", needed: true, icon: "🫙" },
  { id: "tube", name: "Connecting tube", needed: true, icon: "🔗" },
  { id: "stopwatch", name: "Stopwatch", needed: true, icon: "⏱️" },
  { id: "porous", name: "Porous barrier", needed: false, icon: "🧱" },
];

// Rate in arbitrary units = 1 / √(molar mass).
export function grahamsRate(molarMass) {
  return Math.round((1 / Math.sqrt(molarMass)) * 1000) / 1000;
}

// How many times faster the lighter gas diffuses than the heavier one.
//   rate_light / rate_heavy = √(M_heavy / M_light)
export function diffusionRatio(lighterMM, heavierMM) {
  return Math.round(Math.sqrt(heavierMM / lighterMM) * 100) / 100;
}

// Return { lighter, heavier } for two gas objects, ordered by molar mass.
export function orderByMass(a, b) {
  return a.molarMass <= b.molarMass
    ? { lighter: a, heavier: b }
    : { lighter: b, heavier: a };
}

// ===========================================================================
// 2 · BOYLE'S LAW & CHARLES'S LAW
//    Boyle  (T constant):  P₁·V₁ = P₂·V₂
//    Charles(P constant):  V₁/T₁ = V₂/T₂      (T in Kelvin = °C + 273)
// ===========================================================================

export const GAS_APPARATUS = [
  { id: "syringe", name: "Gas syringe", needed: true, icon: "💉" },
  { id: "gauge", name: "Pressure gauge", needed: true, icon: "🔧" },
  { id: "thermometer", name: "Thermometer", needed: false, icon: "🌡️" },
  { id: "bath", name: "Water bath", needed: false, icon: "🛁" },
  { id: "stopwatch", name: "Stopwatch", needed: false, icon: "⏱️" },
];

export const PRESSURE_OPTIONS = [
  { id: "1.0", value: 1.0, label: "1.0 atm" },
  { id: "2.0", value: 2.0, label: "2.0 atm" },
  { id: "3.0", value: 3.0, label: "3.0 atm" },
];

export const VOLUME_OPTIONS = [
  { id: "10", value: 10, label: "10 L" },
  { id: "20", value: 20, label: "20 L" },
  { id: "30", value: 30, label: "30 L" },
];

export const TEMP_OPTIONS = [
  { id: "0", value: 0, label: "0 °C (273 K)" },
  { id: "25", value: 25, label: "25 °C (298 K)" },
  { id: "100", value: 100, label: "100 °C (373 K)" },
];

// The four investigations the student can pick from.
export const GAS_SCENARIOS = [
  { id: "boyle_P2", law: "Boyle", changedVar: "P", findVar: "V", unit: "L", label: "Boyle: change pressure → find the new volume" },
  { id: "boyle_V2", law: "Boyle", changedVar: "V", findVar: "P", unit: "atm", label: "Boyle: change volume → find the new pressure" },
  { id: "charles_T2", law: "Charles", changedVar: "T", findVar: "V", unit: "L", label: "Charles: change temperature → find the new volume" },
  { id: "charles_V2", law: "Charles", changedVar: "V", findVar: "T", unit: "°C", label: "Charles: change volume → find the new temperature" },
];

// The new value offered for the changed variable, per scenario.
export const CHANGED_VALUES = {
  boyle_P2: [
    { id: "1.5", value: 1.5, label: "1.5 atm" },
    { id: "2.5", value: 2.5, label: "2.5 atm" },
    { id: "4.0", value: 4.0, label: "4.0 atm" },
  ],
  boyle_V2: [
    { id: "5", value: 5, label: "5 L" },
    { id: "15", value: 15, label: "15 L" },
    { id: "40", value: 40, label: "40 L" },
  ],
  charles_T2: [
    { id: "50", value: 50, label: "50 °C (323 K)" },
    { id: "150", value: 150, label: "150 °C (423 K)" },
    { id: "200", value: 200, label: "200 °C (473 K)" },
  ],
  charles_V2: [
    { id: "15", value: 15, label: "15 L" },
    { id: "25", value: 25, label: "25 L" },
    { id: "40", value: 40, label: "40 L" },
  ],
};

export function toKelvin(c) {
  return c + 273;
}

// Compute the dependent (find) variable for a scenario.
//   init    = { P1, V1, T1c }   (T1c in °C)
//   changed = new value of the changed variable (number)
// Returns { value, unit, law, formula, changedUnit }.
export function computeGasAnswer(scenarioId, init, changed) {
  const T1 = toKelvin(init.T1c);
  switch (scenarioId) {
    case "boyle_P2": {
      const V2 = (init.P1 * init.V1) / changed;
      return {
        value: Math.round(V2 * 100) / 100,
        unit: "L",
        law: "Boyle",
        changedUnit: "atm",
        formula: `V₂ = (P₁·V₁)/P₂ = (${init.P1}×${init.V1})/${changed}`,
      };
    }
    case "boyle_V2": {
      const P2 = (init.P1 * init.V1) / changed;
      return {
        value: Math.round(P2 * 100) / 100,
        unit: "atm",
        law: "Boyle",
        changedUnit: "L",
        formula: `P₂ = (P₁·V₁)/V₂ = (${init.P1}×${init.V1})/${changed}`,
      };
    }
    case "charles_T2": {
      const T2 = toKelvin(changed);
      const V2 = (init.V1 * T2) / T1;
      return {
        value: Math.round(V2 * 100) / 100,
        unit: "L",
        law: "Charles",
        changedUnit: "°C",
        formula: `V₂ = V₁·T₂/T₁ = (${init.V1}×${T2})/${T1}`,
      };
    }
    case "charles_V2": {
      const T2k = T1 * (changed / init.V1);
      const T2c = Math.round((T2k - 273) * 10) / 10;
      return {
        value: T2c,
        unit: "°C",
        law: "Charles",
        changedUnit: "L",
        formula: `T₂ = T₁·V₂/V₁ = (${T1}×${changed})/${init.V1} → ${T2c} °C`,
      };
    }
    default:
      return { value: 0, unit: "", law: "", changedUnit: "", formula: "" };
  }
}

// Acceptable error when the student's prediction is checked against the
// true value. Keeps it fair for large numbers (e.g. 200 °C) and small ones.
export function gasTolerance(actual) {
  return Math.max(0.6, Math.round(Math.abs(actual) * 0.06 * 100) / 100);
}

// Full final state { P, V, Tc } after the change, used to animate the bench.
export function finalState(scenarioId, init, changed) {
  const T1 = toKelvin(init.T1c);
  let P = init.P1;
  let V = init.V1;
  let Tc = init.T1c;
  switch (scenarioId) {
    case "boyle_P2":
      V = (init.P1 * init.V1) / changed;
      P = changed;
      break;
    case "boyle_V2":
      V = changed;
      P = (init.P1 * init.V1) / changed;
      break;
    case "charles_T2": {
      const T2 = toKelvin(changed);
      V = (init.V1 * T2) / T1;
      Tc = changed;
      break;
    }
    case "charles_V2": {
      const T2k = T1 * (changed / init.V1);
      V = changed;
      Tc = Math.round((T2k - 273) * 10) / 10;
      break;
    }
    default:
      break;
  }
  return { P: Math.round(P * 100) / 100, V: Math.round(V * 100) / 100, Tc };
}
