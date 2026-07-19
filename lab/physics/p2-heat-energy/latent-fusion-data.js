// Shared data + helpers for the latent heat of fusion of ice practical.
export const C = 4.2; // specific heat capacity of water (J/g·°C)
export const WATER_MASSES = [100, 150, 200]; // g
export const WATER_TEMPS = [30, 40, 50]; // °C (initial)
export const ICE_MASSES = [20, 30, 40]; // g

// With the final temperature at 0 °C, energy lost by water = energy to melt ice:
//   m_w · C · (T_w − 0) = m_ice · L   →   L = m_w · C · T_w / m_ice
export function latentHeat(mw, tw, mice) {
  return (mw * C * tw) / mice; // J/g
}

export function lOptions(mw, tw, mice) {
  const correct = latentHeat(mw, tw, mice);
  const pool = [correct * 0.8, correct * 1.2, correct * 0.65];
  const opts = [correct, ...pool].map((v) => Math.round(v));
  return [...new Set(opts)].sort((a, b) => a - b);
}
