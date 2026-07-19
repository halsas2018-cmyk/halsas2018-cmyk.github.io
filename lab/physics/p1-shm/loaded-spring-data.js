// Shared data + helpers for the loaded-spring period practical.
export const K = 20; // spring constant (N/m)
export const G = 9.8; // m/s²
export const MASSES = [50, 100, 150, 200]; // grams

export function massKg(g) {
  return g / 1000;
}

// Hooke's-law extension: x = mg / k  (metres)
export function extension(mg) {
  return (massKg(mg) * G) / K;
}

// Period of a mass-spring oscillator: T = 2π√(m/k)  (seconds)
export function period(mg) {
  return 2 * Math.PI * Math.sqrt(massKg(mg) / K);
}
