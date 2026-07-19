// Shared data + physics helpers for the Electric Circuits (Ohm's law) practical.
// Prep + Lab import from here. Mirrors titration/reagents.js and metals-data.js.

export const CIRCUIT_APPARATUS = [
  { id: "cell", name: "Cell / battery", needed: true, icon: "🔋" },
  { id: "resistor", name: "Resistor", needed: true, icon: "🟫" },
  { id: "ammeter", name: "Ammeter", needed: true, icon: "🔢" },
  { id: "voltmeter", name: "Voltmeter", needed: true, icon: "🔢" },
  { id: "wires", name: "Connecting wires", needed: true, icon: "🧵" },
  { id: "switch", name: "Switch", needed: false, icon: "🔘" },
  { id: "goggles", name: "Safety goggles", needed: false, icon: "🥽" },
];

// Ohm's law helpers.
//   I = V / R        P = V × I
export function circuitCurrent(V, R) {
  if (!R || R <= 0) return Infinity; // short circuit / zero resistance
  return V / R;
}

export function circuitPower(V, R) {
  const I = circuitCurrent(V, R);
  if (!isFinite(I)) return Infinity;
  return V * I;
}

// Above this current the "fuse blows" (fail state).
export const SAFE_MAX_CURRENT = 5; // A

// Preset resistors (Ω) the student can swap in.
export const RESISTOR_PRESETS = [
  { id: "2", label: "2 Ω", R: 2 },
  { id: "5", label: "5 Ω", R: 5 },
  { id: "10", label: "10 Ω", R: 10 },
  { id: "22", label: "22 Ω", R: 22 },
  { id: "47", label: "47 Ω", R: 47 },
  { id: "100", label: "100 Ω", R: 100 },
];
