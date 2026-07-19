// Shared data + chemistry helpers for the ENERGY topic calorimetry practical
// (measuring the heat / enthalpy of neutralization). The Prep and Lab screens
// both import from here — mirrors titration/reagents.js and metals/metals-data.js.

// Specific heat capacity of the dilute solution (≈ water), J g⁻¹ °C⁻¹.
export const SPECIFIC_HEAT = 4.18;
// Insulated polystyrene cup capacity (mL) — exceeding this overflows the cup.
export const CUP_CAPACITY = 90;
// Starting temperature of the acid + alkali (°C).
export const INITIAL_TEMP = 25.0;

// Both reactants are 1.0 mol dm⁻³ in the school practical.
export const MOLARITY = 1.0;

export const CAL_ACIDS = [
  { id: "hcl", name: "Hydrochloric acid", formula: "HCl", strength: "strong", factor: 1, color: "#38bdf8", note: "Strong monoprotic acid (1 H⁺).", symbol: "HCl" },
  { id: "h2so4", name: "Sulphuric acid", formula: "H₂SO₄", strength: "strong", factor: 2, color: "#0ea5e9", note: "Strong diprotic acid (2 H⁺ per molecule).", symbol: "H₂SO₄" },
  { id: "ch3cooh", name: "Ethanoic acid", formula: "CH₃COOH", strength: "weak", factor: 1, color: "#a3e635", note: "Weak monoprotic acid (vinegar).", symbol: "CH₃COOH" },
];

export const CAL_BASES = [
  { id: "naoh", name: "Sodium hydroxide", formula: "NaOH", strength: "strong", factor: 1, color: "#f472b6", note: "Strong monobasic alkali (1 OH⁻).", symbol: "NaOH" },
  { id: "koh", name: "Potassium hydroxide", formula: "KOH", strength: "strong", factor: 1, color: "#fb7185", note: "Strong monobasic alkali (1 OH⁻).", symbol: "KOH" },
  { id: "nh3", name: "Ammonia solution", formula: "NH₃", strength: "weak", factor: 1, color: "#f0abfc", note: "Weak alkali (ammonium hydroxide).", symbol: "NH₃" },
];

export const CAL_APPARATUS = [
  { id: "cup", name: "Polystyrene cup", needed: true, icon: "🥤" },
  { id: "thermometer", name: "Thermometer", needed: true, icon: "🌡️" },
  { id: "rod", name: "Stirring rod", needed: true, icon: "🥢" },
  { id: "measuring", name: "Measuring cylinder", needed: true, icon: "📏" },
  { id: "goggles", name: "Safety goggles", needed: false, icon: "🥽" },
];

// Magnitude of the enthalpy of neutralization (kJ mol⁻¹), exothermic so the
// sign is negative. Strong+strong ≈ −57.1; one weak ≈ −56; weak+weak ≈ −51.
export function neutralizationEnthalpy(acid, base) {
  const weakA = acid.strength === "weak";
  const weakB = base.strength === "weak";
  if (weakA && weakB) return 51.0;
  if (weakA || weakB) return 56.0;
  return 57.1;
}

// Full calorimetry calculation for the chosen mix.
export function computeNeutralization({ acid, base, acidVol, baseVol }) {
  const molesH = (MOLARITY * acidVol) / 1000 * acid.factor;
  const molesOH = (MOLARITY * baseVol) / 1000 * base.factor;
  const molesWater = Math.min(molesH, molesOH); // moles of H₂O formed
  const totalVol = acidVol + baseVol; // mL, ≈ grams (density ≈1 g mL⁻¹)
  const dH = neutralizationEnthalpy(acid, base); // kJ mol⁻¹ magnitude
  const qJ = dH * 1000 * molesWater; // heat released (J)
  const deltaT = qJ / (totalVol * SPECIFIC_HEAT); // °C rise
  const finalTemp = INITIAL_TEMP + deltaT;
  const overflow = totalVol > CUP_CAPACITY;
  return {
    molesH,
    molesOH,
    molesWater,
    mass: totalVol,
    dH,
    qJ,
    deltaT,
    initialTemp: INITIAL_TEMP,
    finalTemp,
    overflow,
    totalVol,
  };
}

// Map a temperature (°C) to the 0..1 fill fraction used by svgKit Thermometer.
export function tempFraction(t) {
  return Math.max(0, Math.min(1, (t - 15) / 30));
}
