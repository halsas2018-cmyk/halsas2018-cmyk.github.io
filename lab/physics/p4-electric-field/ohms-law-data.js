// Data + helpers for the Ohm's Law & Resistance practical.
// Students vary voltage across a resistor, record the current, and
// verify V = I×R by watching an I–V graph build up live.

export const ACCENT = "#0ea5e9"; // sky-500

export const APPARATUS = [
  { id: "battery",   name: "Battery / power supply", needed: true,  icon: "🔋" },
  { id: "ammeter",   name: "Ammeter",                 needed: true,  icon: "🔌" },
  { id: "voltmeter", name: "Voltmeter",               needed: true,  icon: "📊" },
  { id: "resistor",  name: "Resistor (wire/coil)",    needed: true,  icon: "〰️" },
  { id: "switch",    name: "Switch",                  needed: true,  icon: "🔘" },
  { id: "leads",     name: "Connecting wires",        needed: false, icon: "🧵" },
];

// Resistor options
export const RESISTORS = [
  { id: "5",  value: 5,  label: "5 Ω" },
  { id: "10", value: 10, label: "10 Ω" },
  { id: "20", value: 20, label: "20 Ω" },
  { id: "50", value: 50, label: "50 Ω" },
];

// Voltage steps the student "dials in" during the experiment (V)
export const VOLTAGE_STEPS = [0, 1, 2, 3, 4, 5, 6];

// Ohm's law: I = V / R  (A)
export function current(V, R) {
  if (R === 0) return Infinity;
  return Math.round((V / R) * 1000) / 1000;
}

// Add small Gaussian noise to simulate a real ammeter reading
export function noisyCurrent(V, R, sigma = 0.004) {
  const idealI = current(V, R);
  const noise = (Math.random() - 0.5) * 2 * sigma;
  return Math.round((idealI + noise) * 1000) / 1000;
}

// Acceptable error for the final resistance estimate (10 %)
export function resistanceTolerance(R) {
  return Math.max(0.5, Math.round(R * 0.1 * 10) / 10);
}

// Estimate R from student's first and last non-zero readings  R = V / I
export function estimatedR(readings) {
  const valid = readings.filter((r) => r.V > 0 && r.I > 0);
  if (valid.length < 2) return null;
  // least-squares slope through origin: sum(V*I) / sum(I^2)
  const sumVI = valid.reduce((s, r) => s + r.V * r.I, 0);
  const sumI2 = valid.reduce((s, r) => s + r.I * r.I, 0);
  if (sumI2 === 0) return null;
  return Math.round((sumVI / sumI2) * 100) / 100;
}
