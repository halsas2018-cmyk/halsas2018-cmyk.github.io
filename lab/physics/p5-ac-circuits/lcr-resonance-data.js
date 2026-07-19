// Shared data + helpers for the LCR-series resonance practical.
export const L = 0.1; // H
export const C = 10e-6; // F
export const R = 10; // Ω
export const V = 10; // V (rms source)

export const F0 = 1 / (2 * Math.PI * Math.sqrt(L * C)); // resonant frequency (Hz)

export const FREQS = [50, 100, 120, 159, 180, 200, 250];

function reactX(f) {
  return 2 * Math.PI * f * L - 1 / (2 * Math.PI * f * C);
}

// Circuit current for a given frequency.
export function current(f) {
  const z = Math.sqrt(R * R + reactX(f) * reactX(f));
  return V / z;
}

export function isResonant(f) {
  return Math.abs(f - F0) <= 3;
}
