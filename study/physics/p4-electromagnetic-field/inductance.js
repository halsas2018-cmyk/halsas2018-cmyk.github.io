export default [
  {
    heading: "Self-inductance",
    body: "Self-inductance is a coil's opposition to any CHANGE in its own current. When current rises, the growing flux linkage induces an e.m.f. opposing the rise; when it falls, the e.m.f. tries to keep it flowing. The induced e.m.f. is E = −L (dI/dt), so an inductor is the electrical analogue of mass: just as mass resists change in velocity, inductance resists change in current.",
  },
  {
    heading: "The henry (H)",
    body: "Inductance is measured in henries (H): one henry induces 1 V when current changes at 1 A per second (1 H = 1 V·s/A). Practical coils are mill henries or micro henries. The minus sign is Lenz's law — the induced e.m.f. always fights the change in current, never aids it, so an inductor smoothly resists sudden surges rather than blocking steady current.",
  },
  {
    heading: "Energy stored",
    body: "A current-carrying inductor stores energy in its magnetic field: U = ½ L I². Example: a 2.0 H coil with 3.0 A stores U = ½ × 2.0 × 9 = 9.0 J. This energy is not lost as heat like in a resistor; it returns to the circuit when current falls, causing the spark that jumps at a switch when an inductive load is disconnected.",
  },
  {
    heading: "Mutual inductance",
    body: "Mutual inductance M describes how a changing current in one coil induces an e.m.f. in a nearby coil: E₂ = −M (dI₁/dt). The linked flux depends on the coils' geometry, separation and any iron core that concentrates the field. Mutual inductance is the exact principle behind transformers and tuned circuits, passing energy between windings with no electrical connection.",
  },
  {
    heading: "Factors affecting inductance",
    body: "A coil's inductance grows with the square of its turns (more flux linkage), with the core's cross-sectional area, and with the core permeability (iron gives far larger L than air). It falls as the coil is lengthened or the turns spread out. Winding coils together or inserting a ferrite rod raises L — why radio tuning coils use ferrite cores to pack inductance into a small space.",
  },
  {
    heading: "Uses in radio and TV",
    body: "With a capacitor, an inductor forms a resonant circuit whose frequency is f = 1/(2π√(LC)). Varying the capacitor or coil selects one station from many — how radios are tuned and TV tuners pick channels. Inductors also block high-frequency noise while passing d.c., so they appear in filters and the intermediate-frequency stages of receivers.",
  },
  {
    heading: "Uses in power supplies",
    body: "Because an inductor resists rapid current change while wasting little energy, it smooths a rectifier's ripple into steadier d.c. in power supplies; chokes (large inductors) even out current surges. The same self- and mutual-inductance principle makes the transformer the workhorse of every charger and of the national grid, stepping voltages up and down efficiently.",
  },
];
