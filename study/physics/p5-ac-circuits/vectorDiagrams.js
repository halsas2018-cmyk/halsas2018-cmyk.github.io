export default [
  {
    heading: "Why we use phasors",
    body: "In a.c. circuits voltage and current are often out of step (phase-shifted), so you cannot add their values as ordinary numbers. Instead each sine quantity is represented by a phasor — a rotating vector whose length is the amplitude (or r.m.s.) and whose angle is the phase. At any instant the vertical projection of the phasor equals the instantaneous value. Adding phasors geometrically gives the correct resultant, just like vector addition in mechanics.",
  },
  {
    heading: "Phasor rules — the reference current",
    body: "By convention the current phasor I is drawn horizontal (the reference, at 0°). The resistor voltage V_R is in phase with I (also at 0°). The inductor voltage V_L leads I by 90° (drawn upward) and the capacitor voltage V_C lags I by 90° (drawn downward). Because V_L and V_C point in opposite directions, they partially cancel when added tip-to-tail.",
  },
  {
    heading: "Building the supply-voltage phasor",
    body: "The total supply voltage is the phasor sum V = V_R + V_L + V_C. Draw V_R along the reference, then add V_L upward and V_C downward; the net reactive part is (V_L − V_C) vertical. The resultant has magnitude V = √(V_R² + (V_L − V_C)²) and sits at angle φ above or below the reference. This right-angled triangle is the heart of a.c. analysis.",
  },
  {
    heading: "The phase angle φ",
    body: "The angle φ between the total voltage and the current is the circuit's phase difference: tan φ = (V_L − V_C)/V_R = (X_L − X_C)/R. If φ > 0 the circuit is inductive (V leads I); if φ < 0 it is capacitive (V lags I); if φ = 0 it is purely resistive. φ is also the angle whose cosine is the power factor treated in the Power subtopic. The phasor diagram makes φ visible at a glance.",
  },
  {
    heading: "The similar voltage and impedance triangles",
    body: "From the voltage triangle: V_R = V cos φ and (V_L − V_C) = V sin φ. Dividing by I gives the impedance triangle R = Z cos φ and (X_L − X_C) = Z sin φ. The two triangles are similar, so Z² = R² + (X_L − X_C)² follows directly from V² = V_R² + (V_L − V_C)². Phasor (vector) diagrams therefore turn a.c. algebra into simple right-angle trigonometry.",
  },
  {
    heading: "Capacitive vs inductive diagrams",
    body: "In a capacitive circuit V_C > V_L, so the vertical (reactive) phasor points downward and the total V lags I (φ negative). In an inductive circuit V_L > V_C and V leads I (φ positive). At resonance V_L = V_C, the vertical component vanishes and V lines up with I (φ = 0). Drawing the correct orientation of V_L and V_C is essential for obtaining the right sign of φ.",
  },
  {
    heading: "Phasors for parallel circuits",
    body: "Phasor addition also works for parallel a.c. circuits, where the supply voltage is the common reference and the branch currents are added. The resistor branch current is in phase with V; the inductor branch current lags by 90°; the capacitor branch current leads by 90°. The supply current is the phasor sum of the branches, and its angle with V again gives the power factor. The same tip-to-tail method applies.",
  },
  {
    heading: "Worked example — the voltage triangle",
    body: "In a series circuit V_R = 120 V, V_L = 160 V, V_C = 40 V (all r.m.s.). Net reactive voltage = 160 − 40 = 120 V, so total V = √(120² + 120²) ≈ 170 V. tan φ = 120/120 = 1, giving φ = 45° and the circuit is inductive (V leads I). The power factor cos φ = cos 45° ≈ 0.707. This shows how the voltage triangle yields both magnitude and phase from the three drops.",
  },
];
