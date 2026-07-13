// physics — Electric Field
const questions = [
  {
    question: "The law that gives the force between two point charges is:",
    options: [
      "A. Newton's law of gravitation",
      "B. Coulomb's law",
      "C. Ohm's law",
      "D. Faraday's law"
    ],
    answer: "B",
    explanation: "Coulomb's law: F = kq1q2/r², the electrostatic force between two point charges.",
    subtopic: "Electrostatics"
  },
  {
    question: "The force between two charges is proportional to:",
    options: [
      "A. The product of the charges and r²",
      "B. The product of the charges and 1/r²",
      "C. The sum of the charges",
      "D. The square of the distance only"
    ],
    answer: "B",
    explanation: "F = kq1q2/r²: force is proportional to the product of charges and inversely proportional to r².",
    subtopic: "Electrostatics"
  },
  {
    question: "Like charges:",
    options: [
      "A. Attract",
      "B. Repel",
      "C. Have no force between them",
      "D. Always neutralize"
    ],
    answer: "B",
    explanation: "Like charges (both positive or both negative) repel each other.",
    subtopic: "Electrostatics"
  },
  {
    question: "Unlike charges:",
    options: [
      "A. Attract",
      "B. Repel",
      "C. Cancel gravity",
      "D. Produce no field"
    ],
    answer: "A",
    explanation: "Unlike (opposite) charges attract each other.",
    subtopic: "Electrostatics"
  },
  {
    question: "The electric field strength E at a point due to a point charge q at distance r is:",
    options: [
      "A. E = kq/r",
      "B. E = kq/r²",
      "C. E = kqr²",
      "D. E = q/r"
    ],
    answer: "B",
    explanation: "E = kq/r² (or q/(4πε₀r²)): the inverse-square law for an electric field.",
    subtopic: "Electrostatics"
  },
  {
    question: "The SI unit of electric charge is the:",
    options: [
      "A. Ampere",
      "B. Coulomb",
      "C. Volt",
      "D. Ohm"
    ],
    answer: "B",
    explanation: "Charge is measured in coulombs (C); 1 C is the charge transported by 1 A in 1 s.",
    subtopic: "Electrostatics"
  },
  {
    question: "An object that gains electrons becomes:",
    options: [
      "A. Positively charged",
      "B. Negatively charged",
      "C. Neutral",
      "D. Discharged"
    ],
    answer: "B",
    explanation: "Electrons carry negative charge; gaining electrons makes an object negatively charged.",
    subtopic: "Electrostatics"
  },
  {
    question: "An object that loses electrons becomes:",
    options: [
      "A. Negatively charged",
      "B. Positively charged",
      "C. Neutral",
      "D. Uncharged permanently"
    ],
    answer: "B",
    explanation: "Losing electrons (negative charge) leaves an excess of positive charge on the object.",
    subtopic: "Electrostatics"
  },
  {
    question: "The elementary charge e is approximately:",
    options: [
      "A. 1.6 × 10⁻¹⁹ C",
      "B. 9.8 C",
      "C. 6.67 × 10⁻¹¹ C",
      "D. 3.0 × 10⁸ C"
    ],
    answer: "A",
    explanation: "The charge of one proton (or magnitude of one electron's charge) is e ≈ 1.6 × 10⁻¹⁹ C.",
    subtopic: "Electrostatics"
  },
  {
    question: "Electric field lines around an isolated negative point charge point:",
    options: [
      "A. Away from the charge",
      "B. Toward the charge",
      "C. In closed loops",
      "D. Parallel"
    ],
    answer: "B",
    explanation: "Field lines point toward a negative charge (direction of force on a positive test charge).",
    subtopic: "Electrostatics"
  },
  {
    question: "The electric field between two parallel oppositely charged plates is:",
    options: [
      "A. Non-uniform",
      "B. Uniform",
      "C. Zero",
      "D. Circular"
    ],
    answer: "B",
    explanation: "Between large parallel plates the field is uniform (straight, parallel, equally spaced lines).",
    subtopic: "Electrostatics"
  },
  {
    question: "The electric field strength between parallel plates with potential difference V and separation d is:",
    options: [
      "A. E = Vd",
      "B. E = V/d",
      "C. E = d/V",
      "D. E = V + d"
    ],
    answer: "B",
    explanation: "E = V/d for a uniform field between parallel plates.",
    subtopic: "Electrostatics"
  },
  {
    question: "A capacitor stores energy in the form of:",
    options: [
      "A. A magnetic field",
      "B. An electric field",
      "C. Heat",
      "D. Light"
    ],
    answer: "B",
    explanation: "A capacitor stores charge and energy in the electric field between its plates.",
    subtopic: "Electrostatics"
  },
  {
    question: "The capacitance C of a capacitor is defined as:",
    options: [
      "A. C = QV",
      "B. C = Q/V",
      "C. C = V/Q",
      "D. C = Q + V"
    ],
    answer: "B",
    explanation: "Capacitance C = Q/V, charge stored per unit potential difference; unit farad (F).",
    subtopic: "Electrostatics"
  },
  {
    question: "The SI unit of capacitance is the:",
    options: [
      "A. Coulomb",
      "B. Farad",
      "C. Volt",
      "D. Ohm"
    ],
    answer: "B",
    explanation: "Capacitance is measured in farads (F), where 1 F = 1 C/V.",
    subtopic: "Electrostatics"
  },
  {
    question: "The energy stored in a charged capacitor is given by:",
    options: [
      "A. ½QV",
      "B. QV",
      "C. 2QV",
      "D. Q/V"
    ],
    answer: "A",
    explanation: "U = ½QV = ½CV² = Q²/(2C), the energy stored in a capacitor.",
    subtopic: "Electrostatics"
  },
  {
    question: "A positively charged body brought near a neutral conductor causes:",
    options: [
      "A. No effect",
      "B. Electrostatic induction (charge separation)",
      "C. Permanent magnetization",
      "D. It to glow"
    ],
    answer: "B",
    explanation: "Electrostatic induction redistributes charges in the neutral conductor (opposite charge nearer the rod).",
    subtopic: "Electrostatics"
  },
  {
    question: "The process by which a charged body attracts a neutral object is called:",
    options: [
      "A. Conduction",
      "B. Induction",
      "C. Convection",
      "D. Radiation"
    ],
    answer: "B",
    explanation: "Induction causes charge separation in the neutral body, producing an attractive force.",
    subtopic: "Electrostatics"
  },
  {
    question: "Earthing a charged conductor causes it to:",
    options: [
      "A. Gain more charge",
      "B. Lose its excess charge",
      "C. Become a magnet",
      "D. Increase in potential"
    ],
    answer: "B",
    explanation: "Connecting to Earth provides a path for excess charge to flow away, discharging the conductor.",
    subtopic: "Electrostatics"
  },
  {
    question: "A gold-leaf electroscope detects charge by:",
    options: [
      "A. Repulsion between like charges on the leaf and stem",
      "B. Magnetic attraction",
      "C. Heating",
      "D. Light emission"
    ],
    answer: "A",
    explanation: "Charge spreads to the leaf and stem; like charges repel, causing the leaf to diverge.",
    subtopic: "Electrostatics"
  },
  {
    question: "In a series circuit with two resistors R1 and R2, the total resistance is:",
    options: [
      "A. R1 + R2",
      "B. R1R2/(R1+R2)",
      "C. R1 − R2",
      "D. (R1+R2)/2"
    ],
    answer: "A",
    explanation: "In series, resistances add: R_total = R1 + R2.",
    subtopic: "Current electricity"
  },
  {
    question: "In a parallel circuit with two equal resistors R, the total resistance is:",
    options: [
      "A. 2R",
      "B. R/2",
      "C. R²",
      "D. R"
    ],
    answer: "B",
    explanation: "For two equal parallel resistors, 1/R_total = 1/R + 1/R = 2/R, so R_total = R/2.",
    subtopic: "Current electricity"
  },
  {
    question: "Ohm's law states that, at constant temperature, the current through a conductor is proportional to:",
    options: [
      "A. The resistance",
      "B. The potential difference across it",
      "C. The power",
      "D. The charge"
    ],
    answer: "B",
    explanation: "Ohm's law: V = IR, so I ∝ V for a fixed resistance.",
    subtopic: "Current electricity"
  },
  {
    question: "The relation V = IR is:",
    options: [
      "A. Faraday's law",
      "B. Ohm's law",
      "C. Coulomb's law",
      "D. Lenz's law"
    ],
    answer: "B",
    explanation: "V = IR is Ohm's law, relating voltage, current and resistance.",
    subtopic: "Current electricity"
  },
  {
    question: "The unit of electric current is the:",
    options: [
      "A. Coulomb",
      "B. Ampere",
      "C. Volt",
      "D. Ohm"
    ],
    answer: "B",
    explanation: "Current is measured in amperes (A).",
    subtopic: "Current electricity"
  },
  {
    question: "The unit of potential difference is the:",
    options: [
      "A. Ampere",
      "B. Volt",
      "C. Ohm",
      "D. Watt"
    ],
    answer: "B",
    explanation: "Potential difference (voltage) is measured in volts (V).",
    subtopic: "Current electricity"
  },
  {
    question: "The unit of electrical resistance is the:",
    options: [
      "A. Volt",
      "B. Ohm",
      "C. Ampere",
      "D. Coulomb"
    ],
    answer: "B",
    explanation: "Resistance is measured in ohms (Ω), where 1 Ω = 1 V/A.",
    subtopic: "Current electricity"
  },
  {
    question: "Electrical power dissipated in a resistor is given by:",
    options: [
      "A. P = VI",
      "B. P = V/I",
      "C. P = I/V",
      "D. P = V + I"
    ],
    answer: "A",
    explanation: "Electric power P = VI = I²R = V²/R.",
    subtopic: "Current electricity"
  },
  {
    question: "The power dissipated as heat in a resistor carrying current I with resistance R is:",
    options: [
      "A. I²R",
      "B. I/R",
      "C. R/I",
      "D. I + R"
    ],
    answer: "A",
    explanation: "Joule heating: P = I²R.",
    subtopic: "Current electricity"
  },
  {
    question: "If the resistance in a circuit is doubled while the voltage is kept constant, the current:",
    options: [
      "A. Doubles",
      "B. Halves",
      "C. Stays the same",
      "D. Quadruples"
    ],
    answer: "B",
    explanation: "From I = V/R, doubling R halves the current (V constant).",
    subtopic: "Current electricity"
  },
  {
    question: "A 2 Ω resistor has a current of 3 A through it. The voltage across it is:",
    options: [
      "A. 6 V",
      "B. 1.5 V",
      "C. 5 V",
      "D. 0.67 V"
    ],
    answer: "A",
    explanation: "V = IR = 3 × 2 = 6 V.",
    subtopic: "Current electricity"
  },
  {
    question: "A 12 V battery supplies a current of 2 A. The power delivered is:",
    options: [
      "A. 24 W",
      "B. 6 W",
      "C. 14 W",
      "D. 10 W"
    ],
    answer: "A",
    explanation: "P = VI = 12 × 2 = 24 W.",
    subtopic: "Current electricity"
  },
  {
    question: "In a series circuit, the current:",
    options: [
      "A. Is the same through every component",
      "B. Splits equally at each junction",
      "C. Is zero",
      "D. Doubles at each resistor"
    ],
    answer: "A",
    explanation: "In series, the same current flows through all components.",
    subtopic: "Current electricity"
  },
  {
    question: "In a parallel circuit, the total current is:",
    options: [
      "A. The same in each branch",
      "B. The sum of the branch currents",
      "C. Zero",
      "D. Less than any branch current"
    ],
    answer: "B",
    explanation: "Kirchhoff's current law: total current equals the sum of the currents in the parallel branches.",
    subtopic: "Current electricity"
  },
  {
    question: "Electrical conductivity is the reciprocal of:",
    options: [
      "A. Resistivity",
      "B. Resistance",
      "C. Current",
      "D. Voltage"
    ],
    answer: "A",
    explanation: "Conductivity σ = 1/ρ, where ρ is resistivity.",
    subtopic: "Current electricity"
  },
  {
    question: "The resistance of a wire is directly proportional to its:",
    options: [
      "A. Length",
      "B. Cross-sectional area",
      "C. Temperature decrease",
      "D. Colour"
    ],
    answer: "A",
    explanation: "R = ρL/A: resistance is proportional to length L and inversely proportional to area A.",
    subtopic: "Current electricity"
  },
  {
    question: "For most metals, resistance increases with:",
    options: [
      "A. Decrease in temperature",
      "B. Increase in temperature",
      "C. Decrease in length",
      "D. Increase in cross-section"
    ],
    answer: "B",
    explanation: "Metal resistivity rises with temperature, so their resistance increases as they heat up.",
    subtopic: "Current electricity"
  },
  {
    question: "A device that allows current in only one direction is a:",
    options: [
      "A. Resistor",
      "B. Diode",
      "C. Capacitor",
      "D. Inductor"
    ],
    answer: "B",
    explanation: "A diode conducts in one direction (forward bias) and blocks the other.",
    subtopic: "Current electricity"
  },
  {
    question: "A component whose resistance changes with light intensity is a:",
    options: [
      "A. Thermistor",
      "B. Light-dependent resistor (LDR)",
      "C. Diode",
      "D. Capacitor"
    ],
    answer: "B",
    explanation: "An LDR's resistance falls as light intensity increases.",
    subtopic: "Current electricity"
  },
  {
    question: "A component whose resistance changes with temperature is a:",
    options: [
      "A. Thermistor",
      "B. Fixed resistor",
      "C. Diode",
      "D. Capacitor"
    ],
    answer: "A",
    explanation: "A thermistor's resistance changes significantly with temperature.",
    subtopic: "Current electricity"
  },
  {
    question: "Kirchhoff's voltage law states that the sum of potential differences around a closed loop is:",
    options: [
      "A. Equal to the current",
      "B. Zero",
      "C. Equal to the resistance",
      "D. Infinite"
    ],
    answer: "B",
    explanation: "The algebraic sum of all voltages around a closed loop is zero (conservation of energy).",
    subtopic: "Current electricity"
  },
  {
    question: "The potential difference across each resistor in a parallel combination is:",
    options: [
      "A. Divided according to resistance",
      "B. The same for all",
      "C. Zero",
      "D. The sum of the source voltage"
    ],
    answer: "B",
    explanation: "In parallel, all branches have the same potential difference across them.",
    subtopic: "Current electricity"
  },
  {
    question: "A battery of e.m.f. 9 V and internal resistance 1 Ω supplies 2 A. The terminal voltage is:",
    options: [
      "A. 7 V",
      "B. 11 V",
      "C. 9 V",
      "D. 4.5 V"
    ],
    answer: "A",
    explanation: "V = E − Ir = 9 − (2 × 1) = 7 V.",
    subtopic: "Current electricity"
  },
  {
    question: "The electromotive force (e.m.f.) of a cell is defined as the:",
    options: [
      "A. Maximum current it can supply",
      "B. Energy per unit charge supplied by the cell",
      "C. Its internal resistance",
      "D. Its terminal voltage under load"
    ],
    answer: "B",
    explanation: "E.m.f. E is the energy converted from chemical to electrical per unit charge (J/C = V).",
    subtopic: "Current electricity"
  },
  {
    question: "The work done in moving a charge Q through a potential difference V is:",
    options: [
      "A. QV",
      "B. Q/V",
      "C. V/Q",
      "D. Q + V"
    ],
    answer: "A",
    explanation: "W = QV: work (energy) = charge × potential difference.",
    subtopic: "Current electricity"
  },
  {
    question: "A charge of 2 C moves through a p.d. of 5 V. The energy transferred is:",
    options: [
      "A. 10 J",
      "B. 2.5 J",
      "C. 7 J",
      "D. 0.4 J"
    ],
    answer: "A",
    explanation: "W = QV = 2 × 5 = 10 J.",
    subtopic: "Current electricity"
  },
  {
    question: "An ammeter is connected in:",
    options: [
      "A. Parallel with the component",
      "B. Series with the component",
      "C. Across the supply only",
      "D. It does not matter"
    ],
    answer: "B",
    explanation: "An ammeter measures current and must be in series so all current passes through it.",
    subtopic: "Current electricity"
  },
  {
    question: "A voltmeter is connected in:",
    options: [
      "A. Series with the component",
      "B. Parallel across the component",
      "C. In the battery only",
      "D. It does not matter"
    ],
    answer: "B",
    explanation: "A voltmeter measures potential difference and is connected in parallel across the points of interest.",
    subtopic: "Current electricity"
  },
  {
    question: "An ideal ammeter has:",
    options: [
      "A. Infinite resistance",
      "B. Zero resistance",
      "C. High resistance",
      "D. Variable resistance"
    ],
    answer: "B",
    explanation: "An ideal ammeter has zero resistance so it does not alter the circuit current.",
    subtopic: "Current electricity"
  },
  {
    question: "An ideal voltmeter has:",
    options: [
      "A. Zero resistance",
      "B. Infinite resistance",
      "C. 1 Ω",
      "D. Same as the circuit"
    ],
    answer: "B",
    explanation: "An ideal voltmeter has infinite resistance so it draws no current from the circuit.",
    subtopic: "Current electricity"
  },
  {
    question: "If two identical resistors are connected in series to a battery, the p.d. across each is:",
    options: [
      "A. Equal to the battery e.m.f.",
      "B. Half the battery e.m.f.",
      "C. Twice the battery e.m.f.",
      "D. Zero"
    ],
    answer: "B",
    explanation: "In series the voltage divides equally across equal resistors: each gets half the total p.d.",
    subtopic: "Current electricity"
  },
  {
    question: "A fuse protects a circuit by:",
    options: [
      "A. Increasing the current",
      "B. Melting and breaking the circuit when current is too high",
      "C. Storing charge",
      "D. Reducing the voltage"
    ],
    answer: "B",
    explanation: "A fuse is a thin wire that melts (opens the circuit) when current exceeds its rating, preventing damage.",
    subtopic: "Current electricity"
  },
  {
    question: "The resistivity ρ of a material is given by:",
    options: [
      "A. ρ = RA/L",
      "B. ρ = RAL",
      "C. ρ = RL/A",
      "D. ρ = R/(AL)"
    ],
    answer: "A",
    explanation: "From R = ρL/A, resistivity ρ = RA/L, measured in Ω·m.",
    subtopic: "Current electricity"
  },
  {
    question: "A material with very low resistance is a:",
    options: [
      "A. Conductor",
      "B. Insulator",
      "C. Semiconductor",
      "D. Dielectric"
    ],
    answer: "A",
    explanation: "Conductors (e.g. metals) have many free electrons and low resistance.",
    subtopic: "Current electricity"
  },
  {
    question: "The force on a charge q in an electric field E is:",
    options: [
      "A. F = q/E",
      "B. F = qE",
      "C. F = E/q",
      "D. F = q + E"
    ],
    answer: "B",
    explanation: "F = qE: the electrostatic force equals charge times electric field strength.",
    subtopic: "Electrostatics"
  },
  {
    question: "If the distance between two point charges is doubled, the force between them becomes:",
    options: [
      "A. Four times",
      "B. One quarter",
      "C. Double",
      "D. Half"
    ],
    answer: "B",
    explanation: "F ∝ 1/r², so doubling r makes F one quarter of its original value.",
    subtopic: "Electrostatics"
  },
  {
    question: "The electric field inside a charged hollow conductor in electrostatic equilibrium is:",
    options: [
      "A. Maximum at the centre",
      "B. Zero everywhere inside",
      "C. Equal to the surface field",
      "D. Directed outward"
    ],
    answer: "B",
    explanation: "Inside a hollow conductor charges reside on the surface, so the electric field inside is zero (electrostatic shielding).",
    subtopic: "Electrostatics"
  }
];

module.exports = questions;
