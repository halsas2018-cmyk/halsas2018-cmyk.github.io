export default [
  {
    heading: "Alternating current defined",
    body: "An alternating current (a.c.) is one whose magnitude and direction both vary periodically with time, unlike direct current (d.c.) which flows steadily in one direction. Mains electricity in Nigeria and most of the world is a.c. at about 50 Hz. The driving e.m.f. is E = E₀ sin(ωt), where E₀ is the peak e.m.f. and ω the angular frequency. This sinusoidal form makes the a.c. graph a smooth wave swinging equally above and below the zero axis.",
  },
  {
    heading: "Why the sine wave arises",
    body: "The sine form comes directly from how a.c. is generated: a coil rotated at constant speed in a uniform magnetic field induces an e.m.f. that varies as sin θ (Faraday's law). With θ = ωt, the induced e.m.f. is E = E₀ sin(ωt) and the current in a resistive load is I = I₀ sin(ωt). The waveform is symmetric about zero, so its mean value over any whole number of cycles is exactly zero. This symmetry is the defining visual feature of a.c.",
  },
  {
    heading: "Period, frequency and angular frequency",
    body: "The time for one complete cycle is the period T (seconds); the number of cycles per second is the frequency f (hertz, Hz), with f = 1/T. Angular frequency ω = 2πf = 2π/T, measured in rad s⁻¹, converts cycles into radians per second. For 50 Hz mains, ω = 2π × 50 ≈ 314 rad s⁻¹. Knowing these three linked quantities lets you find the phase angle ωt at any instant.",
  },
  {
    heading: "Reading the graph — the peak",
    body: "On the E = E₀ sin(ωt) graph, the peak (or amplitude) E₀ is the greatest value reached — the height of a crest or trough from the centre line. The peak is only momentary: the e.m.f. touches it twice per cycle (once positive, once negative) and is smaller for most of the cycle. In a resistor the current peak I₀ occurs at the same instant as the voltage peak. Peaks matter for insulation and component voltage ratings, not for heating.",
  },
  {
    heading: "Zero crossings and current reversal",
    body: "The curve crosses the zero axis twice each cycle, at ωt = 0, π, 2π, …, which are the instants the e.m.f. and current pass through zero and reverse direction. Between crossings current flows one way; in the next half-cycle it flows the opposite way. Over a full cycle the net charge transported is zero (equal charge each way), so the average current over a cycle is zero. This reversal is what allows transformers and induction motors to operate.",
  },
  {
    heading: "Phase — resistor (in phase)",
    body: "In a purely resistive circuit the voltage and current reach their peaks together, so they are in phase (phase difference φ = 0). Their graphs overlap exactly and both pass through zero simultaneously. Consequently V = IR holds instantaneously: v(t) = i(t)R at every moment. This in-phase behaviour is the simplest case to draw and the reference against which other elements are compared.",
  },
  {
    heading: "Phase — inductor (V leads I by 90°)",
    body: "In a purely inductive (coil) circuit the current lags the voltage by a quarter cycle (φ = 90° or π/2). The voltage peaks a quarter-cycle before the current because the coil's self-induced back e.m.f. opposes the rise of current. On the graph the current sine wave is shifted right relative to the voltage wave. This 90° lead of V over I is the hallmark of inductive behaviour.",
  },
  {
    heading: "Phase — capacitor (V lags I by 90°)",
    body: "In a purely capacitive circuit the current leads the voltage by 90° (the voltage lags the current by π/2). The capacitor must first draw charging current before its voltage can build up, so the current peak occurs a quarter-cycle earlier. On the graph the voltage wave is shifted right relative to the current wave. Like the inductor, this quarter-cycle offset dissipates no net power.",
  },
  {
    heading: "Sketching combined V and I graphs",
    body: "An a.c. graph question often asks you to sketch V and I for a given element. Draw the zero axis and the current sine wave first; then for a resistor overlay an identical wave, for an inductor shift V left by 90° (it peaks first), and for a capacitor shift V right by 90° (it peaks later). Label the peaks E₀/I₀ and mark the period T. Accurate phase marks score the bulk of the marks even if the amplitudes are only approximate.",
  },
  {
    heading: "Worked example — instantaneous e.m.f.",
    body: "A coil in a 50 Hz a.c. supply has peak e.m.f. 340 V. The angular frequency is ω = 2πf = 2π × 50 ≈ 314 rad s⁻¹, so the instantaneous e.m.f. is E = 340 sin(314t) volts. At t = 2.0 ms, ωt = 314 × 0.002 = 0.628 rad, and E = 340 sin(0.628) ≈ 340 × 0.588 ≈ 200 V. This shows how the sine equation lets you compute the exact e.m.f. at any instant from the peak and the frequency.",
  },
];
