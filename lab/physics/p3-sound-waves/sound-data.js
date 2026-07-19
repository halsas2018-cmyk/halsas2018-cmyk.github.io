// Shared data + physics helpers for the Sound: Frequency, Pitch & Resonance practical.
// Prep + Lab import from here. Mirrors pendulum-data.js / metals-data.js.

export const SOUND_APPARATUS = [
  { id: "fork", name: "Tuning fork", needed: true, icon: "🍴" },
  { id: "tube", name: "Resonance tube", needed: true, icon: "🧪" },
  { id: "water", name: "Water reservoir", needed: true, icon: "💧" },
  { id: "ruler", name: "Metre rule", needed: true, icon: "📏" },
  { id: "mallet", name: "Rubber mallet", needed: false, icon: "🔨" },
  { id: "goggles", name: "Safety goggles", needed: false, icon: "🥽" },
];

// Common laboratory tuning-fork frequencies (Hz).
export const FREQUENCIES = [256, 320, 384, 440, 512];

// Speed of sound in air at various temperatures (m/s).
export const SPEEDS = [330, 340, 350];

// Physical max air-column length the tube can display (m).
export const MAX_COLUMN = 1.0;

// Wavelength of a sound wave: λ = v / f.
export function wavelength(v, f) {
  if (!f) return 0;
  return v / f;
}

// First (closed-tube) resonance: air column = λ / 4.
export function firstResonantLength(v, f) {
  return wavelength(v, f) / 4;
}

// Pitch descriptor for a human-friendly read-out (higher f → higher pitch).
export function pitchLabel(f) {
  if (f <= 280) return "low";
  if (f <= 420) return "mid";
  return "high";
}
