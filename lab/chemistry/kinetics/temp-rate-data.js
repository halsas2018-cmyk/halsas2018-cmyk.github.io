// Data + helpers for the Effect-of-Temperature-on-Rate (disappearing-cross) practical.
// Same Na₂S₂O₃ + HCl reaction; student changes temperature instead of concentration.
// Arrhenius-inspired rule-of-thumb: every 10 °C rise roughly doubles the rate.
//   time(T) = BASE_TIME × 2^((BASE_TEMP − T) / 10)

export const BASE_TEMP = 25;   // °C reference temperature
export const BASE_TIME = 30;   // s cross-disappear time at 25 °C, 0.10 mol/dm³ conc
export const HIDE_AT = 0.82;   // cloud fraction at which cross vanishes (same as rateData)
export const THIO_VOLUME = 25; // mL
export const ACID_VOLUME = 10; // mL
export const ACID_CONC = 0.10; // mol/dm³

// Temperature options the student picks (°C)
export const TEMP_OPTIONS = [
  { id: "10", value: 10, label: "10 °C",  note: "Cold water bath — slow reaction" },
  { id: "25", value: 25, label: "25 °C",  note: "Room temperature (baseline)" },
  { id: "40", value: 40, label: "40 °C",  note: "Warm water bath" },
  { id: "60", value: 60, label: "60 °C",  note: "Hot water bath — fast reaction" },
];

export const TEMP_APPARATUS = [
  { id: "flask",      name: "Conical flask",           needed: true,  icon: "⚗️" },
  { id: "cylinder",  name: "Measuring cylinder",       needed: true,  icon: "🧪" },
  { id: "stopwatch", name: "Stopwatch",                needed: true,  icon: "⏱️" },
  { id: "tile",      name: "White tile + cross",       needed: true,  icon: "⬜" },
  { id: "bath",      name: "Water bath / thermometer", needed: true,  icon: "🛁" },
];

// Arrhenius-inspired: roughly every 10 °C rise doubles the rate.
// time(T) = BASE_TIME × 2^((BASE_TEMP - T) / 10)
export function predictedTime(tempC) {
  const t = BASE_TIME * Math.pow(2, (BASE_TEMP - tempC) / 10);
  return Math.round(t * 10) / 10;
}

// Rate of reaction = 1 / time (s⁻¹)
export function rate(time) {
  return Math.round((1 / time) * 1000) / 1000;
}
