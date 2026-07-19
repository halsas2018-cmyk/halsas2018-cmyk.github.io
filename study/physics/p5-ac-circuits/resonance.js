export default [
  {
    heading: "What resonance is",
    body: "Resonance in a series RLC circuit occurs when the inductive and capacitive reactances become equal: X_L = X_C. At that point their opposing 90° voltage drops cancel, leaving only the resistor to oppose current. The impedance falls to its minimum Z = R, so the current rises to its maximum I = V/R. The circuit is then purely resistive and the voltage is in phase with the current (φ = 0).",
  },
  {
    heading: "The resonant frequency f₀ = 1/(2π√LC)",
    body: "Setting X_L = X_C gives 2πfL = 1/(2πfC), which rearranges to the resonant frequency f₀ = 1/(2π√(LC)). It depends only on L and C, not on R or the supply voltage. Example: L = 0.10 H, C = 1.0 µF gives f₀ = 1/(2π√(0.10 × 1.0 × 10⁻⁶)) ≈ 503 Hz. Because f₀ is fixed by the components, the circuit resonates at one specific frequency.",
  },
  {
    heading: "Current peaks sharply at resonance",
    body: "As frequency sweeps past f₀, the current rises to a sharp maximum at resonance and falls on either side. The curve's sharpness depends on R: a small R gives a tall, narrow peak (high selectivity); a large R gives a broad, low peak. At resonance the large current can make V_L and V_C individually much larger than the supply voltage — a phenomenon called voltage magnification. This follows from Q = V_L/V = X_L/R being large when R is small.",
  },
  {
    heading: "Voltage magnification and Q factor",
    body: "At resonance, although the net reactive voltage is zero, the coil and capacitor voltages are equal and opposite, each equal to Q × V_supply where Q = X_L/R is the quality factor. With small R, Q can be large, so V_L = V_C can greatly exceed the applied voltage. This magnification is useful in tuning but dangerous on power lines, where it can overstress insulation. The Q factor thus measures both sharpness and voltage gain.",
  },
  {
    heading: "Selectivity and radio/TV tuning",
    body: "Because the response is concentrated near f₀, a resonant circuit strongly favours one frequency and rejects others — its selectivity. A radio or TV tuner uses a variable capacitor to change C (hence f₀) so the circuit resonates with the wanted station and ignores the rest. The sharper the resonance (higher Q), the better it separates adjacent stations. This is the most important everyday application of a.c. resonance.",
  },
  {
    heading: "Conditions for resonance",
    body: "Resonance requires both an inductor and a capacitor in the same circuit; a purely resistive or RL/RC circuit cannot resonate. In series resonance the current is maximum; note that parallel resonance behaves oppositely, with the line current minimum while large currents circulate in the branches. The supply frequency must match f₀, which is why tuning means adjusting L or C to the incoming signal's frequency.",
  },
  {
    heading: "Hazards and wider uses",
    body: "Resonance is exploited in receivers, filters and metal detectors, but it can be harmful: on power-transmission lines it can build up dangerously high voltages across line inductance and capacitance, risking insulator failure. Engineers deliberately avoid resonant frequencies on the grid or add compensation. In electrical a.c. circuits it is mainly a tuning and filtering tool, distinct from the mechanical resonance of bridges and buildings.",
  },
  {
    heading: "Worked example — resonance and magnification",
    body: "A series circuit has L = 0.25 H, C = 4.0 µF, R = 10 Ω, driven at V_rms = 12 V. f₀ = 1/(2π√(0.25 × 4.0 × 10⁻⁶)) = 1/(2π × 10⁻³) ≈ 159 Hz. At resonance Z = R = 10 Ω so I_rms = 12/10 = 1.2 A (the maximum). Q = X_L/R = (2π × 159 × 0.25)/10 ≈ 25, so V_L = V_C ≈ 25 × 12 = 300 V across each component — far above the 12 V supply.",
  },
];
