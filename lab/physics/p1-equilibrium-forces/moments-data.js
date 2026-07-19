// Shared data + helpers for the principle-of-moments practical.
// Fixed left-hand load; the user balances it with a right-hand load.
export const LEFT = { m: 30, d: 40 }; // mass (g), distance from pivot (cm)
export const MOMENT_L = LEFT.m * LEFT.d; // 1200 g·cm

export const RIGHT_MASSES = [20, 30, 40, 60]; // g
export const RIGHT_DISTS = [20, 30, 40, 50, 60]; // cm

export function rightMoment(m, d) {
  return m * d;
}

export function isBalanced(m, d) {
  return Math.abs(rightMoment(m, d) - MOMENT_L) < 1;
}
