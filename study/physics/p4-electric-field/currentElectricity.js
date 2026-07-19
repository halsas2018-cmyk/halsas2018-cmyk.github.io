export default [
  {
    heading: "Electric current",
    body: "Electric current I is the rate of flow of charge: I = Q/t, in amperes (A), where 1 A = 1 C/s. It is carried by moving charges — electrons in metal wires. A current needs a closed conducting path and a source of e.m.f. to push charges round. Conventional current is taken as the direction positive charge would move, opposite to electron flow.",
  },
  {
    heading: "Cells and electromotive force (e.m.f.)",
    body: "A cell turns chemical energy into electrical energy, giving an e.m.f. — energy per unit charge supplied, in volts (V). The e.m.f. is the p.d. across the terminals when no current flows. Primary cells (e.g. Leclanché) are used once; secondary cells (e.g. lead-acid accumulator) recharge. A battery is several cells joined to raise the total voltage.",
  },
  {
    heading: "Types of cells",
    body: "The simple (voltaic) cell suffers defects like local action and polarisation that weaken its output. The Daniel and Leclanché cells give steadier e.m.f.; the lead-acid accumulator and alkaline-cadmium cell are rechargeable. Each suits a job: dry cells for torches, accumulators for cars. A cell's type tells you whether it can be recharged.",
  },
  {
    heading: "Ohm's law and resistance",
    body: "Ohm's law: for many conductors at constant temperature, the p.d. V across a resistor is proportional to the current I through it, V = IR. The constant R is the resistance, in ohms (Ω). A graph of V against I is a straight line through the origin for an ohmic conductor. The law predicts current when voltage and resistance are known.",
  },
  {
    heading: "Series and parallel resistor circuits",
    body: "In series the same current passes each resistor and total resistance is R = R₁ + R₂ + …; the p.d. is shared. In parallel each resistor gets the full p.d. and reciprocals add: 1/R = 1/R₁ + 1/R₂ + …. Two 6 Ω resistors in series give 12 Ω; in parallel they give 3 Ω. Series raises resistance; parallel lowers the effective resistance.",
  },
  {
    heading: "Internal resistance and lost volts",
    body: "A real cell has internal resistance r, so part of its e.m.f. E is spent inside it. The terminal p.d. is V = E − Ir, where Ir is the 'lost volts' that heat the cell. As current rises, the terminal p.d. falls. Measuring V at two currents lets you find E and r from E = V + Ir.",
  },
  {
    heading: "Resistivity and conductivity",
    body: "The resistance of a wire is R = ρL/A, where ρ is the material's resistivity, L its length and A its cross-section. Resistivity (Ω·m) measures how strongly a material opposes current; conductivity is its reciprocal. Resistance rises with length and falls with thicker wire. Copper suits cables; nichrome suits heaters.",
  },
  {
    heading: "Ohmic and non-ohmic conductors",
    body: "Ohmic conductors obey Ohm's law: their V–I graph is a straight line (e.g. metals at fixed temperature). Non-ohmic conductors do not — semiconductors such as diodes and thermistors change resistance with current or temperature. A filament lamp's curve bends because heating raises its resistance. The graph shape tells you whether a device is ohmic.",
  },
  {
    heading: "Electrical energy and power",
    body: "Electrical power is the rate of energy transfer: P = IV, and with V = IR this becomes P = I²R = V²/R, in watts (W). The energy in time t is E = Pt = IVt. A 2 A current through a 12 V device dissipates P = 24 W. These relations size fuses, batteries and wiring safely.",
  },
  {
    heading: "Heating and motor effects",
    body: "The heating effect (E = I²Rt) powers kettles, heaters and the fuse wires that melt to protect circuits. Electric motors turn electrical energy into motion using magnetic forces on a current-carrying coil. Solar cells reverse this, making electricity from light. Current electricity thus does both heating and mechanical work in daily technology.",
  },
  {
    heading: "Shunts and multipliers",
    body: "A galvanometer detects small currents; a low-resistance shunt in parallel converts it into an ammeter reading larger currents. A high-resistance multiplier in series converts the same movement into a voltmeter reading large p.d.s. The shunt carries most current; the multiplier drops most voltage. These additions turn one meter into two.",
  },
  {
    heading: "Measuring circuit quantities",
    body: "Current is read by an ammeter in series (very low resistance); p.d. by a voltmeter in parallel (very high resistance). Finer work uses a potentiometer, and resistance is found with a Wheatstone bridge or metre bridge. A cell's internal resistance is found by varying the load current. Correct meter placement is essential for accurate readings.",
  },
];
