// Data + helpers for the Rate-of-Reaction (disappearing-cross) practical.
// Sodium thiosulphate + hydrochloric acid produces solid sulphur, which clouds
// the solution until a cross drawn under the flask can no longer be seen.
//   Na₂S₂O₃(aq) + 2HCl(aq) → 2NaCl(aq) + S(s) + SO₂(g) + H₂O(l)
// Rate ∝ 1 / time, so a more concentrated acid hides the cross sooner.

export const THIOSULPHATE = { molarity: 0.100, volume: 25 }; // mL, fixed
export const ACID_VOLUME = 10; // mL, fixed
export const BASE_TIME = 30; // s for the cross to vanish at 0.10 mol/dm³
export const HIDE_AT = 0.82; // cloudiness (0→1) at which the cross is unreadable

export const ACID_CONCENTRATIONS = [
  { id: "0.05", value: 0.05, label: "0.05 mol/dm³", note: "Dilute — slow, ~60 s" },
  { id: "0.10", value: 0.10, label: "0.10 mol/dm³", note: "Standard — ~30 s" },
  { id: "0.20", value: 0.20, label: "0.20 mol/dm³", note: "Concentrated — ~15 s" },
  { id: "0.40", value: 0.40, label: "0.40 mol/dm³", note: "Very fast — ~7.5 s" },
];

export const RATE_APPARATUS = [
  { id: "flask", name: "Conical flask", needed: true, icon: "⚗️" },
  { id: "cylinder", name: "Measuring cylinder", needed: true, icon: "🧪" },
  { id: "stopwatch", name: "Stopwatch", needed: true, icon: "⏱️" },
  { id: "tile", name: "White tile + cross", needed: true, icon: "⬜" },
  { id: "thermometer", name: "Thermometer", needed: false, icon: "🌡️" },
];

// Predicted time (s) for the cross to disappear at a given acid concentration.
export function predictedTime(conc) {
  const t = (0.10 / conc) * BASE_TIME;
  return Math.round(t * 10) / 10;
}

// Rate of reaction = 1 / time  (s⁻¹)
export function rate(time) {
  return Math.round((1 / time) * 1000) / 1000;
}
