// Shared data + helpers for the BIOCHEM "Enzyme Action & Reaction Rate" practical.
// Catalase (the enzyme) catalyses the breakdown of hydrogen peroxide:
//     2 H₂O₂  ──catalase──▶  2 H₂O  +  O₂↑
// We vary temperature, pH and substrate (H₂O₂) concentration and observe the
// effect on the RATE of O₂ production (cm³ O₂ per minute). Activity rises to an
// optimum then declines — high temperature DENATURES the enzyme (rate collapses),
// the wrong pH distorts the active site, and low substrate leaves the enzyme idle.

// --- Catalase is the enzyme used in the school practical ---
export const ENZYME = { name: "Catalase", source: "liver / potato", color: "#22c55e" };

// Temperature band: low / optimum / high. High temperature denatures the enzyme.
export const TEMP_BANDS = [
  { id: "low", label: "Low (≈10 °C)", temp: 10, factor: 0.25, note: "Molecules move slowly — few successful collisions. Low rate." },
  { id: "optimum", label: "Optimum (≈37 °C)", temp: 37, factor: 1.0, note: "Near body temperature — catalase's active site fits H₂O₂ best here." },
  { id: "high", label: "High (≈80 °C)", temp: 80, factor: 0.06, note: "Enzyme DENATURES — its 3-D shape unwinds and the active site is destroyed." },
];

// pH level: acidic / neutral / alkaline. Catalase is happiest near neutral.
export const PH_LEVELS = [
  { id: "acidic", label: "Acidic (pH 3)", ph: 3, factor: 0.35, note: "Excess H⁺ ions distort the active site." },
  { id: "neutral", label: "Neutral (pH 7)", ph: 7, factor: 1.0, note: "Catalase's optimum pH is around neutral." },
  { id: "alkaline", label: "Alkaline (pH 11)", ph: 11, factor: 0.4, note: "Excess OH⁻ ions distort the active site." },
];

// Substrate concentration: how much H₂O₂ is available to react.
export const SUBSTRATE_LEVELS = [
  { id: "low", label: "Low (1% H₂O₂)", conc: 1, factor: 0.5, note: "Few substrate molecules — the enzyme is under-used." },
  { id: "medium", label: "Medium (3% H₂O₂)", conc: 3, factor: 0.8, note: "More collisions per second." },
  { id: "high", label: "High (6% H₂O₂)", conc: 6, factor: 1.0, note: "Plenty of substrate — reaction runs near its maximum." },
];

// Apparatus for the gas-syringe / gas-jar collection setup.
export const ENZ_APPARATUS = [
  { id: "tube", name: "Boiling tube", needed: true, icon: "🧪" },
  { id: "gasjar", name: "Gas jar + delivery tube", needed: true, icon: "🫙" },
  { id: "bunsen", name: "Bunsen burner", needed: true, icon: "🔥" },
  { id: "thermometer", name: "Thermometer", needed: true, icon: "🌡️" },
  { id: "stopwatch", name: "Stopwatch", needed: true, icon: "⏱️" },
  { id: "goggles", name: "Safety goggles", needed: false, icon: "🥽" },
];

// Rate (cm³ O₂ / min) at the all-optimum condition.
const BASE_RATE = 26;

export function bandObj(list, id) {
  return list.find((x) => x.id === id) || list[0];
}

// Full reaction calculation for the chosen conditions.
export function computeReaction({ tempId, phId, subId }) {
  const temp = bandObj(TEMP_BANDS, tempId);
  const ph = bandObj(PH_LEVELS, phId);
  const sub = bandObj(SUBSTRATE_LEVELS, subId);

  const rate = BASE_RATE * temp.factor * ph.factor * sub.factor; // cm³ O₂ / min
  const windowMin = 2; // we "run" the reaction for a fixed 2-minute window
  const gasVolume = rate * windowMin; // cm³ of O₂ collected in the window

  const factors = [
    { name: "temperature", obj: temp, factor: temp.factor },
    { name: "pH", obj: ph, factor: ph.factor },
    { name: "substrate concentration", obj: sub, factor: sub.factor },
  ];
  const limiting = factors.filter((f) => f.factor < 0.999).sort((a, b) => a.factor - b.factor)[0];

  let optimumNote;
  if (temp.factor <= 0.1) {
    optimumNote = `High temperature denatured catalase, so almost no O₂ was produced. To see a high rate, use the OPTIMUM temperature (≈37 °C).`;
  } else if (limiting) {
    optimumNote = `Limiting factor: ${limiting.name} (${limiting.obj.label}). Move it toward its optimum to increase the rate.`;
  } else {
    optimumNote = "All three factors are at their optimum — this is the maximum catalase rate.";
  }

  return {
    rate: Math.round(rate * 10) / 10,
    windowMin,
    gasVolume: Math.round(gasVolume * 10) / 10,
    temp,
    ph,
    sub,
    limiting,
    optimumNote,
    denatured: temp.factor <= 0.1,
  };
}

// Map a temperature (°C) to the 0..1 fill fraction used by the svgKit Thermometer.
export function tempFraction(t) {
  return Math.max(0, Math.min(1, t / 90));
}

// Map a collected O₂ volume (cm³) to the 0..1 fill fraction of the gas jar.
export function gasFraction(volume, max = 60) {
  return Math.max(0, Math.min(1, volume / max));
}
