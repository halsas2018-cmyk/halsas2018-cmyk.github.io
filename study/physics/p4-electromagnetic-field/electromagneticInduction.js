export default [
  {
    heading: "Magnetic flux and flux linkage",
    body: "Magnetic flux through an area is Φ = B A cosθ, the field passing perpendicularly through it, measured in webers (Wb, 1 Wb = 1 T·m²). For a coil of N turns the flux linkage is NΦ. Induction depends on how flux CHANGES, not on its size — a steady strong field induces nothing, which is why moving a magnet, spinning a coil, or switching a current induces voltage.",
  },
  {
    heading: "Faraday's law",
    body: "Faraday's law: the induced e.m.f. equals the rate of change of flux linkage, |E| = N |ΔΦ/Δt| (or E = −N dΦ/dt). Faster change gives a bigger voltage. Example: a 200-turn coil whose flux drops from 0.008 Wb to zero in 0.02 s induces |E| = 200 × 0.008 / 0.02 = 80 V. More turns, a stronger change or a quicker change all raise the output.",
  },
  {
    heading: "Lenz's law and energy",
    body: "Lenz's law says the induced current opposes the change that produced it — the minus sign in Faraday's law. Push a magnet's N-pole into a coil and the near face becomes N to repel it, so you must do work that becomes electrical energy. Without opposition the current would create energy from nothing, so Lenz's law is conservation of energy in action.",
  },
  {
    heading: "E.m.f. in a moving conductor",
    body: "A conductor of length L moving at speed v perpendicular to a field B cuts flux and induces E = B L v. This is Faraday's law in motion form: area swept per second is Lv, so flux cut per second is BLv. Example: a 0.25 m rod at 4.0 m/s in a 0.50 T field gives E = 0.50 × 0.25 × 4.0 = 0.50 V. Direction comes from Fleming's right-hand rule.",
  },
  {
    heading: "The motor-generator effect",
    body: "The same coil works both ways. Pass a current through it and the magnetic force turns it (a motor); rotate it instead and the changing flux induces a current (a generator). The devices are identical run in opposite directions, which is why a coasting electric train's motor acts as a generator in braking and feeds power back into the supply.",
  },
  {
    heading: "The equation E = E₀ sin ωt",
    body: "A coil spinning at angular speed ω in a uniform field gives a sinusoidal e.m.f. E = E₀ sin(ωt), where E₀ = N B A ω is the peak. The flux varies as cos(ωt), so by Faraday's law its rate of change varies as sin(ωt) — the smooth reversal that defines a.c. The 50 Hz Nigerian mains thus has ω = 2π × 50 ≈ 314 rad/s.",
  },
  {
    heading: "A.C. generators (alternators)",
    body: "An a.c. generator spins a coil between pole pieces and connects it through slip rings that let the output alternate freely. The e.m.f. rises, falls and reverses every half-turn, giving the E = E₀ sin(ωt) waveform. Power-station alternators, driven by steam, gas or hydro turbines, produce the sinusoidal voltage that feeds the grid; faster rotation raises both frequency and peak voltage.",
  },
  {
    heading: "D.C. generators",
    body: "A d.c. generator uses a split-ring commutator instead of slip rings. The commutator reverses the external connection every half-turn so the output never flips sign, becoming a pulsating direct current that many coils smooth into a near-steady supply. This is how older dynamos and car systems deliver d.c. from rotating motion.",
  },
  {
    heading: "The induction coil",
    body: "An induction coil makes a large intermittent voltage from a small d.c. supply by mutual induction. A few-turn primary, rapidly interrupted by a make-and-break contact, creates a changing flux that induces a much larger e.m.f. in a many-turn secondary. The collapsing flux at break gives a high-voltage spark used in spark plugs, gas lighters and early X-ray tubes.",
  },
  {
    heading: "Transformers",
    body: "A transformer transfers energy between coils by mutual induction, with no moving parts. A changing primary current makes a changing flux in the iron core that links the secondary and induces an e.m.f.: for an ideal one Vₚ/Vₛ = Nₚ/Nₛ and VₚIₚ = VₛIₛ. Because it needs changing flux it works only with a.c., and it is key to efficient power transmission and to phone chargers.",
  },
];
