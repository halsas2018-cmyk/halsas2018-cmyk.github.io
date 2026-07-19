export default [
  {
    heading: "Average power in a.c.",
    body: "Instantaneous power is p = vi; for a.c. this product oscillates and can even go negative (when v and i have opposite signs, energy returns to the source). The quantity that matters is the average power over a cycle, P = V_rms I_rms cos φ, where cos φ is the power factor. Only the in-phase component of current does useful work; the out-of-phase part contributes zero average power. Average power is what your meter reads in watts.",
  },
  {
    heading: "The power factor cos φ",
    body: "The power factor is cos φ, the fraction of the current that is in phase with the voltage (φ is the phase angle from the vector diagram). For a pure resistor φ = 0 and cos φ = 1, so all the power is consumed. For a pure inductor or capacitor φ = ±90° and cos φ = 0, so average power is zero — energy is only stored and returned each cycle. Real circuits have 0 < cos φ < 1, so only part of the apparent power is real.",
  },
  {
    heading: "Apparent, real and reactive power",
    body: "Apparent power S = V_rms I_rms is measured in volt-amperes (VA) — what the supply must deliver. Real (active) power P = V_rms I_rms cos φ is in watts (W) — what the load actually consumes. Reactive power Q = V_rms I_rms sin φ is in volt-amperes reactive (VAR) — the energy sloshing between source and reactive components, doing no net work. The three form a right triangle: S² = P² + Q².",
  },
  {
    heading: "Why a low power factor is wasteful",
    body: "A low power factor means a large current for a given real power, since I = P/(V cos φ). This extra current overloads generators, transformers and cables, increasing I²R losses and heating without delivering more useful power. Utilities penalise industrial customers with poor power factor and may require correction. A factory drawing 100 kW at cos φ = 0.5 needs twice the current (and cable capacity) of one at cos φ = 1.",
  },
  {
    heading: "Power-factor correction",
    body: "To raise cos φ toward 1, factories add capacitors (or synchronous condensers) that supply the reactive power locally, cancelling the lagging reactive current drawn by motors (inductive loads). This reduces the line current and the I²R losses, and can cut electricity bills. Correction moves the net phase angle toward zero without changing the real power consumed. It is a major practical use of the capacitor's leading reactance.",
  },
  {
    heading: "Power in pure R, L and C",
    body: "In a pure resistor all delivered energy is dissipated as heat, so P = V_rms I_rms = I²R and cos φ = 1. In a pure inductor or capacitor the current is ±90° from voltage, so average power is zero and energy is merely stored then returned each half-cycle. Real loads are mostly inductive (motors), giving cos φ < 1 unless corrected. This is why the power subtopic ties directly to reactance and phase.",
  },
  {
    heading: "Worked example — power and correction",
    body: "A 240 V r.m.s., 50 Hz supply feeds a motor drawing 10 A at a power factor of 0.80 lagging. Real power P = 240 × 10 × 0.80 = 1920 W. Apparent power S = 240 × 10 = 2400 VA, so reactive power Q = √(2400² − 1920²) ≈ 1440 VAR. If corrected to cos φ = 1, the same 1920 W would need only 1920/240 = 8.0 A, reducing line current by 20% and cutting cable losses.",
  },
];
