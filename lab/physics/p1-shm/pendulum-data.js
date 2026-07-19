// Shared data + physics helpers for the Simple Harmonic Motion (pendulum) practical.
// Prep + Lab import from here. Mirrors titration/reagents.js and metals-data.js.

export const G_DEFAULT = 9.8; // m/s²

export const PENDULUM_APPARATUS = [
  { id: "stand", name: "Retort stand", needed: true, icon: "🏗️" },
  { id: "string", name: "Thread / string", needed: true, icon: "🧵" },
  { id: "bob", name: "Pendulum bob", needed: true, icon: "⚪" },
  { id: "stopwatch", name: "Stopwatch", needed: true, icon: "⏱️" },
  { id: "protractor", name: "Protractor", needed: true, icon: "📐" },
  { id: "goggles", name: "Safety goggles", needed: false, icon: "🥽" },
];

// Period of a simple pendulum (small-angle approximation):
//   T = 2π √(L / g)
export function pendulumPeriod(L, g = G_DEFAULT) {
  return 2 * Math.PI * Math.sqrt(L / g);
}

export function pendulumFrequency(L, g = G_DEFAULT) {
  return 1 / pendulumPeriod(L, g);
}

// Large-angle correction factor (series, first term) — used to give an
// educational note when the amplitude is large.
export function largeAngleFactor(thetaDeg) {
  const x = (thetaDeg * Math.PI) / 180 / 2;
  return 1 + (x * x) / 4 + (Math.pow(x, 4)) / 64; // T_large / T_small
}

export const PENDULUM_AMPLITUDES = [
  { id: "small", label: "Small (10°)", deg: 10 },
  { id: "medium", label: "Medium (20°)", deg: 20 },
  { id: "large", label: "Large (35°)", deg: 35 },
];
