export default [
  {
    heading: "Resistance in an a.c. circuit",
    body: "A resistor opposes current equally for a.c. and d.c.; its voltage and current stay exactly in phase, so V = IR holds instantaneously. Resistance R dissipates energy as heat and is measured in ohms (Ω). Unlike reactance, R does not depend on frequency. It is the only a.c. opposition that consumes real power, which is why it alone appears in the power calculations of the next subtopic.",
  },
  {
    heading: "Reactance — stored, not dissipated",
    body: "Reactance X is the opposition a capacitor or inductor offers to a.c., because these components store and release energy rather than dissipate it. Reactance causes a 90° phase shift between voltage and current but consumes no average power itself. It is measured in ohms. The two kinds — inductive X_L and capacitive X_C — oppose in opposite phase senses and so partially cancel when both are present.",
  },
  {
    heading: "Inductive reactance X_L = 2πfL",
    body: "For a coil, X_L = 2πfL = ωL, where L is inductance in henries. X_L grows with frequency: at high f the coil's back e.m.f. changes faster and blocks more current, so a coil is nearly a short at low f and nearly open at high f. Example: for L = 0.10 H at 50 Hz, X_L = 2π × 50 × 0.10 ≈ 31.4 Ω. Reactance sets the current for a given a.c. voltage across the coil: I = V/X_L.",
  },
  {
    heading: "Capacitive reactance X_C = 1/(2πfC)",
    body: "For a capacitor, X_C = 1/(2πfC) = 1/(ωC), with C in farads. X_C falls with frequency: at high f the capacitor charges and discharges rapidly and offers little opposition, while at low f (and d.c., where f = 0) it behaves as an open circuit. Example: C = 100 µF at 50 Hz gives X_C = 1/(2π × 50 × 100 × 10⁻⁶) ≈ 31.8 Ω. This inverse frequency dependence is the opposite of a coil's behaviour.",
  },
  {
    heading: "Impedance Z — the total opposition",
    body: "The total opposition to a.c. in a circuit containing R, L and C is the impedance Z, playing the role of resistance: I = V/Z. Because reactances act at 90° to resistance, they combine as Z = √(R² + (X_L − X_C)²). Z is in ohms and is always at least R. When X_L = X_C the reactances cancel inside the bracket, giving the minimum possible Z = R.",
  },
  {
    heading: "Series RLC current",
    body: "In a series RLC circuit the same current flows through all parts, but the voltage drops across R, L and C differ in phase. The net (phasor) voltage is V = IZ = I√(R² + (X_L − X_C)²). If X_L > X_C the circuit is net inductive (current lags); if X_C > X_L it is net capacitive (current leads). Only the difference (X_L − X_C) contributes to the total opposition because the two reactances oppose each other.",
  },
  {
    heading: "Frequency dependence of net reactance",
    body: "The net reactance (X_L − X_C) changes sign as frequency rises: at low f, X_C dominates (capacitive); at high f, X_L dominates (inductive). The crossover, where they are equal, is the resonant frequency treated in the Resonance subtopic. This frequency-dependent behaviour is why an RLC combination can select or reject particular frequencies — the basis of filters and tuning circuits.",
  },
  {
    heading: "Worked example — finding impedance",
    body: "A series circuit has R = 30 Ω, L = 0.20 H, C = 50 µF at f = 50 Hz. X_L = 2π × 50 × 0.20 ≈ 62.8 Ω; X_C = 1/(2π × 50 × 50 × 10⁻⁶) ≈ 63.7 Ω. Net reactance = 62.8 − 63.7 = −0.9 Ω (slightly capacitive), so Z = √(30² + (−0.9)²) ≈ 30.0 Ω. For V_rms = 240 V, I_rms = 240/30.0 = 8.0 A. The near-cancellation of X_L and X_C keeps Z close to R.",
  },
];
