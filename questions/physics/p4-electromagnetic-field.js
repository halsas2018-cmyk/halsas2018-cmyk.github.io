// physics — Electromagnetic Field
const questions = [
  {
    question: "Electromagnetic induction is the production of an e.m.f. in a conductor when there is a change in the:",
    options: [
      "A. Temperature of the conductor",
      "B. Magnetic flux linking the conductor",
      "C. Electric field around it",
      "D. Resistance of the conductor"
    ],
    answer: "B",
    explanation: "A changing magnetic flux through a circuit induces an e.m.f. (Faraday's law).",
    subtopic: "Electromagnetic induction"
  },
  {
    question: "Faraday's law of electromagnetic induction states that the induced e.m.f. is proportional to the rate of change of:",
    options: [
      "A. Current",
      "B. Magnetic flux",
      "C. Resistance",
      "D. Charge"
    ],
    answer: "B",
    explanation: "Faraday's law: E = −N dΦ/dt, induced e.m.f. ∝ rate of change of magnetic flux linkage.",
    subtopic: "Electromagnetic induction"
  },
  {
    question: "The magnitude of the induced e.m.f. in a coil of N turns is given by:",
    options: [
      "A. E = NΦ",
      "B. E = N dΦ/dt",
      "C. E = Φ/N",
      "D. E = N/Φ"
    ],
    answer: "B",
    explanation: "E = N(dΦ/dt): the rate of change of flux linkage (NΦ) gives the induced e.m.f.",
    subtopic: "Electromagnetic induction"
  },
  {
    question: "Lenz's law states that the direction of an induced current is such that it:",
    options: [
      "A. Aids the change producing it",
      "B. Opposes the change producing it",
      "C. Is always clockwise",
      "D. Is always zero"
    ],
    answer: "B",
    explanation: "Lenz's law: the induced current opposes the change in magnetic flux that caused it (energy conservation).",
    subtopic: "Electromagnetic induction"
  },
  {
    question: "The negative sign in Faraday's law E = −N dΦ/dt represents:",
    options: [
      "A. The magnitude only",
      "B. Lenz's law (opposition to change)",
      "C. The resistance",
      "D. The capacitance"
    ],
    answer: "B",
    explanation: "The minus sign encodes Lenz's law: the induced e.m.f. opposes the flux change.",
    subtopic: "Electromagnetic induction"
  },
  {
    question: "An e.m.f. is induced in a straight conductor moving perpendicular to a magnetic field. The induced e.m.f. is given by:",
    options: [
      "A. E = Bv",
      "B. E = BLv",
      "C. E = B/Lv",
      "D. E = B + L + v"
    ],
    answer: "B",
    explanation: "For a rod of length L moving at speed v perpendicular to B, E = BLv (= rate of flux cutting).",
    subtopic: "Electromagnetic induction"
  },
  {
    question: "A coil rotating in a uniform magnetic field produces:",
    options: [
      "A. Direct current",
      "B. Alternating e.m.f.",
      "C. No e.m.f.",
      "D. Constant e.m.f."
    ],
    answer: "B",
    explanation: "Rotating a coil changes the flux sinusoidally, inducing an alternating e.m.f. (a.c. generator).",
    subtopic: "Electromagnetic induction"
  },
  {
    question: "The direction of an induced current can be found using:",
    options: [
      "A. Ohm's law",
      "B. Fleming's right-hand rule",
      "C. Coulomb's law",
      "D. Kirchhoff's law"
    ],
    answer: "B",
    explanation: "Fleming's right-hand rule (generator rule) gives the direction of induced current: thumb = motion, first = field, second = current.",
    subtopic: "Electromagnetic induction"
  },
  {
    question: "In Fleming's right-hand rule, the thumb represents:",
    options: [
      "A. Magnetic field",
      "B. Motion of the conductor",
      "C. Induced current",
      "D. Induced e.m.f."
    ],
    answer: "B",
    explanation: "Right-hand rule: thumb = motion, first finger = field, second finger = induced current.",
    subtopic: "Electromagnetic induction"
  },
  {
    question: "A generator converts:",
    options: [
      "A. Electrical energy to mechanical energy",
      "B. Mechanical energy to electrical energy",
      "C. Heat to light",
      "D. Sound to electricity"
    ],
    answer: "B",
    explanation: "A generator (dynamo) uses electromagnetic induction to turn mechanical work into electrical energy.",
    subtopic: "Electromagnetic induction"
  },
  {
    question: "A transformer works on the principle of:",
    options: [
      "A. Electrostatic induction",
      "B. Electromagnetic induction",
      "C. Chemical reaction",
      "D. Thermoelectric effect"
    ],
    answer: "B",
    explanation: "A transformer transfers energy between coils via a changing magnetic flux (mutual induction).",
    subtopic: "Electromagnetic induction"
  },
  {
    question: "For a transformer, the ratio of the secondary to primary voltage equals the ratio of:",
    options: [
      "A. Primary to secondary turns",
      "B. Secondary to primary turns",
      "C. Primary resistances",
      "D. Secondary currents"
    ],
    answer: "B",
    explanation: "Vs/Vp = Ns/Np (ideal transformer, same flux in both coils).",
    subtopic: "Power transmission"
  },
  {
    question: "A transformer with more turns on the secondary than the primary is a:",
    options: [
      "A. Step-down transformer",
      "B. Step-up transformer",
      "C. Rectifier",
      "D. Inductor"
    ],
    answer: "B",
    explanation: "Ns > Np gives Vs > Vp, a step-up transformer.",
    subtopic: "Power transmission"
  },
  {
    question: "A transformer with fewer turns on the secondary than the primary is a:",
    options: [
      "A. Step-up transformer",
      "B. Step-down transformer",
      "C. Generator",
      "D. Motor"
    ],
    answer: "B",
    explanation: "Ns < Np gives Vs < Vp, a step-down transformer.",
    subtopic: "Power transmission"
  },
  {
    question: "For an ideal transformer, the product of voltage and current is conserved, so:",
    options: [
      "A. VpIp = VsIs",
      "B. Vp + Ip = Vs + Is",
      "C. Vp/Ip = Vs/Is",
      "D. Vp = Vs"
    ],
    answer: "A",
    explanation: "Ideal transformer: input power = output power, so VpIp = VsIs.",
    subtopic: "Power transmission"
  },
  {
    question: "In a step-up transformer, the secondary current is:",
    options: [
      "A. Greater than the primary current",
      "B. Less than the primary current",
      "C. Equal to the primary current",
      "D. Zero"
    ],
    answer: "B",
    explanation: "Since VpIp = VsIs and Vs > Vp, Is < Ip (power conserved).",
    subtopic: "Power transmission"
  },
  {
    question: "Electric power is transmitted over long distances at high voltage because it:",
    options: [
      "A. Increases the current",
      "B. Reduces the current and hence the I²R heat loss",
      "C. Reduces the voltage drop only",
      "D. Increases resistance"
    ],
    answer: "B",
    explanation: "For fixed power P = VI, high V means low I, and line loss P_loss = I²R is greatly reduced.",
    subtopic: "Power transmission"
  },
  {
    question: "The efficiency of a transformer is given by:",
    options: [
      "A. Output power / input power",
      "B. Input power / output power",
      "C. Vp/Vs",
      "D. Ns/Np"
    ],
    answer: "A",
    explanation: "Efficiency = (useful output power / input power) × 100%.",
    subtopic: "Power transmission"
  },
  {
    question: "Transformers can only operate with:",
    options: [
      "A. Direct current",
      "B. Alternating current",
      "C. Static charge",
      "D. Constant flux"
    ],
    answer: "B",
    explanation: "A changing flux is needed for induction, so transformers require a.c.; d.c. gives no sustained e.m.f. after switching.",
    subtopic: "Electromagnetic induction"
  },
  {
    question: "An inductor opposes changes in:",
    options: [
      "A. Voltage",
      "B. Current",
      "C. Resistance",
      "D. Charge"
    ],
    answer: "B",
    explanation: "An inductor stores energy in its magnetic field and opposes any change in current through it.",
    subtopic: "Inductance"
  },
  {
    question: "The inductance L of a coil is defined by the relation:",
    options: [
      "A. E = L dI/dt",
      "B. E = L/I",
      "C. E = LI",
      "D. E = L + I"
    ],
    answer: "A",
    explanation: "The self-induced e.m.f. E = −L dI/dt, where L is the inductance.",
    subtopic: "Inductance"
  },
  {
    question: "The SI unit of inductance is the:",
    options: [
      "A. Farad",
      "B. Henry",
      "C. Tesla",
      "D. Ohm"
    ],
    answer: "B",
    explanation: "Inductance is measured in henries (H), where 1 H = 1 V·s/A.",
    subtopic: "Inductance"
  },
  {
    question: "Self-inductance is the property by which a changing current in a coil induces an e.m.f.:",
    options: [
      "A. In a neighbouring coil only",
      "B. In the same coil",
      "C. Nowhere",
      "D. In the resistor"
    ],
    answer: "B",
    explanation: "Self-induction: a changing current in a coil induces an e.m.f. in that same coil opposing the change.",
    subtopic: "Inductance"
  },
  {
    question: "Mutual inductance occurs when a changing current in one coil induces an e.m.f. in a:",
    options: [
      "A. Different (neighbouring) coil",
      "B. Resistor",
      "C. Capacitor only",
      "D. Single wire"
    ],
    answer: "A",
    explanation: "Mutual induction (used in transformers) couples flux from one coil into a neighbouring coil.",
    subtopic: "Inductance"
  },
  {
    question: "The energy stored in the magnetic field of an inductor carrying current I is:",
    options: [
      "A. ½LI²",
      "B. LI",
      "C. L/I",
      "D. 2LI²"
    ],
    answer: "A",
    explanation: "Energy stored in an inductor: U = ½LI².",
    subtopic: "Inductance"
  },
  {
    question: "Eddy currents are:",
    options: [
      "A. Currents in the external circuit",
      "B. Loops of induced current in a conducting core",
      "C. Direct currents in a wire",
      "D. Static charges"
    ],
    answer: "B",
    explanation: "Eddy currents are circular induced currents set up in bulk conductors by a changing magnetic flux.",
    subtopic: "Eddy currents"
  },
  {
    question: "Eddy currents cause:",
    options: [
      "A. Energy loss as heat in transformer cores",
      "B. An increase in inductance only",
      "C. No effect",
      "D. A rise in voltage only"
    ],
    answer: "A",
    explanation: "Eddy currents dissipate energy as heat (I²R losses) in conductive cores, reducing efficiency.",
    subtopic: "Eddy currents"
  },
  {
    question: "Eddy currents in a transformer core are reduced by using a:",
    options: [
      "A. Solid iron core",
      "B. Laminated (thin insulated sheets) core",
      "C. Copper core",
      "D. Hollow core"
    ],
    answer: "B",
    explanation: "Laminations break up eddy-current paths, greatly reducing the induced loops and heating.",
    subtopic: "Eddy currents"
  },
  {
    question: "A practical use of eddy currents is in:",
    options: [
      "A. Induction heating and electromagnetic damping",
      "B. Increasing transformer losses only",
      "C. Charging batteries directly",
      "D. Producing light"
    ],
    answer: "A",
    explanation: "Eddy currents are harnessed in induction heating, braking (damping), and metal detectors.",
    subtopic: "Eddy currents"
  },
  {
    question: "Electromagnetic damping (e.g. in a moving-coil galvanometer) is caused by:",
    options: [
      "A. Friction",
      "B. Eddy currents opposing the motion",
      "C. Air resistance only",
      "D. Gravity"
    ],
    answer: "B",
    explanation: "Moving a conductor in a field induces eddy currents whose magnetic effect opposes the motion (Lenz's law).",
    subtopic: "Eddy currents"
  },
  {
    question: "The concept of an electromagnetic field combines:",
    options: [
      "A. Electric and magnetic fields",
      "B. Gravitational and electric fields",
      "C. Heat and light",
      "D. Mass and charge"
    ],
    answer: "A",
    explanation: "An electromagnetic field is the unified electric and magnetic field produced by moving charges.",
    subtopic: "Concept"
  },
  {
    question: "A changing electric field produces a:",
    options: [
      "A. Magnetic field",
      "B. Gravitational field",
      "C. Static charge",
      "D. Sound wave"
    ],
    answer: "A",
    explanation: "According to Maxwell, a changing electric field produces a magnetic field, and vice versa.",
    subtopic: "Concept"
  },
  {
    question: "A changing magnetic field produces a:",
    options: [
      "A. Electric field",
      "B. Gravitational field",
      "C. Constant current",
      "D. Permanent magnet"
    ],
    answer: "A",
    explanation: "A changing magnetic field induces an electric field (the basis of electromagnetic induction).",
    subtopic: "Concept"
  },
  {
    question: "Electromagnetic waves consist of oscillating electric and magnetic fields that are:",
    options: [
      "A. Parallel to each other and to propagation",
      "B. Perpendicular to each other and to the direction of propagation",
      "C. Parallel to each other, perpendicular to propagation",
      "D. Random"
    ],
    answer: "B",
    explanation: "In an EM wave the E and B fields are mutually perpendicular and both perpendicular to the direction of travel.",
    subtopic: "Concept"
  },
  {
    question: "Electromagnetic waves travel in vacuum at a speed of approximately:",
    options: [
      "A. 3.0 × 10⁸ m s⁻¹",
      "B. 340 m s⁻¹",
      "C. 9.8 m s⁻¹",
      "D. 1.6 × 10⁻¹⁹ m s⁻¹"
    ],
    answer: "A",
    explanation: "All electromagnetic waves travel in vacuum at c ≈ 3.0 × 10⁸ m s⁻¹.",
    subtopic: "Concept"
  },
  {
    question: "An electric motor converts:",
    options: [
      "A. Electrical energy to mechanical energy",
      "B. Mechanical energy to electrical energy",
      "C. Heat to electricity",
      "D. Light to sound"
    ],
    answer: "A",
    explanation: "A motor uses the magnetic force on a current (F = BIL) to produce rotation (mechanical work).",
    subtopic: "Concept"
  },
  {
    question: "The force that makes a current-carrying coil rotate in a motor is due to:",
    options: [
      "A. Gravity",
      "B. The magnetic force on the current in the field",
      "C. Electrostatic induction",
      "D. Friction"
    ],
    answer: "B",
    explanation: "In a motor, F = BIL on the coil sides in the magnetic field produces a torque causing rotation.",
    subtopic: "Concept"
  },
  {
    question: "The back e.m.f. in a running motor is induced by:",
    options: [
      "A. Its rotating coil cutting the magnetic field",
      "B. The battery only",
      "C. Static charge",
      "D. The resistor"
    ],
    answer: "A",
    explanation: "As the coil rotates it acts as a generator, inducing a back e.m.f. opposing the supply (Lenz's law).",
    subtopic: "Inductance"
  },
  {
    question: "When the load on a motor increases, the back e.m.f.:",
    options: [
      "A. Increases",
      "B. Decreases (coil slows, less flux cutting)",
      "C. Stays constant",
      "D. Becomes zero always"
    ],
    answer: "B",
    explanation: "Slower rotation cuts flux less rapidly, so the back e.m.f. falls and more current is drawn.",
    subtopic: "Inductance"
  },
  {
    question: "Mutual inductance is the basis of the operation of a:",
    options: [
      "A. Transformer",
      "B. Resistor",
      "C. Capacitor",
      "D. Diode"
    ],
    answer: "A",
    explanation: "Transformers rely on mutual inductance between primary and secondary coils.",
    subtopic: "Inductance"
  },
  {
    question: "The number of magnetic field lines linked with a coil is called the magnetic:",
    options: [
      "A. Flux linkage",
      "B. Charge linkage",
      "C. Current linkage",
      "D. Voltage linkage"
    ],
    answer: "A",
    explanation: "Flux linkage = NΦ (number of turns × flux), the quantity that appears in Faraday's law.",
    subtopic: "Electromagnetic induction"
  },
  {
    question: "To induce a large e.m.f. in a coil, one should:",
    options: [
      "A. Use few turns and change flux slowly",
      "B. Use many turns and change the flux rapidly",
      "C. Keep flux constant",
      "D. Remove the core"
    ],
    answer: "B",
    explanation: "E = N dΦ/dt: more turns and a faster flux change give a larger induced e.m.f.",
    subtopic: "Electromagnetic induction"
  },
  {
    question: "Moving a magnet into a stationary coil induces a current only while the magnet is:",
    options: [
      "A. Stationary inside the coil",
      "B. Moving (flux is changing)",
      "C. Outside the coil",
      "D. Heated"
    ],
    answer: "B",
    explanation: "An e.m.f. is induced only while the magnetic flux through the coil is changing (magnet moving).",
    subtopic: "Electromagnetic induction"
  },
  {
    question: "A microphone often works by electromagnetic induction when sound causes a coil to move in a:",
    options: [
      "A. Magnetic field",
      "B. Electric field only",
      "C. Vacuum",
      "D. Capacitor"
    ],
    answer: "A",
    explanation: "Sound vibrates a coil in a magnetic field, inducing an e.m.f. proportional to the motion (dynamic microphone).",
    subtopic: "Electromagnetic induction"
  },
  {
    question: "The principle that the direction of induced e.m.f. always opposes the motion that produces it is used in:",
    options: [
      "A. Eddy-current braking",
      "B. Battery charging by heat",
      "C. Static electricity",
      "D. Resistance heating"
    ],
    answer: "A",
    explanation: "Eddy-current brakes rely on Lenz's law: induced currents oppose the motion, slowing the object.",
    subtopic: "Eddy currents"
  },
  {
    question: "For efficient power transmission, the voltage is stepped up at the generating station and stepped down near the consumer using:",
    options: [
      "A. Generators only",
      "B. Transformers",
      "C. Batteries",
      "D. Inductors only"
    ],
    answer: "B",
    explanation: "Step-up transformers raise voltage for transmission (low loss) and step-down transformers lower it for safe use.",
    subtopic: "Power transmission"
  },
  {
    question: "The power loss in a transmission line of resistance R carrying current I is:",
    options: [
      "A. I²R",
      "B. IR",
      "C. V²/R",
      "D. I/R"
    ],
    answer: "A",
    explanation: "Joule loss in the line is P_loss = I²R; lowering I (via high voltage) cuts losses sharply.",
    subtopic: "Power transmission"
  },
  {
    question: "A device that converts a.c. to d.c. is a:",
    options: [
      "A. Rectifier",
      "B. Transformer",
      "C. Inductor",
      "D. Generator"
    ],
    answer: "A",
    explanation: "A rectifier (using diodes) allows current in one direction, converting a.c. to d.c.",
    subtopic: "Power transmission"
  },
  {
    question: "If the primary of an ideal transformer has 100 turns and the secondary 400 turns, and Vp = 200 V, then Vs is:",
    options: [
      "A. 50 V",
      "B. 800 V",
      "C. 200 V",
      "D. 400 V"
    ],
    answer: "B",
    explanation: "Vs = Vp (Ns/Np) = 200 × (400/100) = 800 V (step-up).",
    subtopic: "Power transmission"
  },
  {
    question: "If the primary of an ideal transformer has 400 turns and the secondary 100 turns, and Vp = 200 V, then Vs is:",
    options: [
      "A. 800 V",
      "B. 50 V",
      "C. 200 V",
      "D. 100 V"
    ],
    answer: "B",
    explanation: "Vs = Vp (Ns/Np) = 200 × (100/400) = 50 V (step-down).",
    subtopic: "Power transmission"
  },
  {
    question: "The core of a transformer is usually made of soft iron because it:",
    options: [
      "A. Has high permeability and low reluctance",
      "B. Is a good insulator",
      "C. Cannot be magnetized",
      "D. Increases eddy currents"
    ],
    answer: "A",
    explanation: "Soft iron provides an easy path for magnetic flux (high permeability), improving coupling between coils.",
    subtopic: "Power transmission"
  },
  {
    question: "The magnetic field of a long straight wire and the induced electric field together illustrate:",
    options: [
      "A. Newton's third law",
      "B. The link between electricity and magnetism (electromagnetism)",
      "C. The law of conservation of mass",
      "D. Ohm's law"
    ],
    answer: "B",
    explanation: "Currents produce magnetic fields and changing fields induce currents — the essence of electromagnetism.",
    subtopic: "Concept"
  },
  {
    question: "In a generator, the induced e.m.f. is maximum when the coil plane is:",
    options: [
      "A. Parallel to the magnetic field",
      "B. Perpendicular to the magnetic field (flux changing fastest)",
      "C. At rest",
      "D. Always constant"
    ],
    answer: "B",
    explanation: "The rate of flux change (and e.m.f.) is greatest when the coil is perpendicular to B (cutting most flux).",
    subtopic: "Electromagnetic induction"
  },
  {
    question: "Self-inductance opposes:",
    options: [
      "A. The applied voltage always",
      "B. Any change in current through the coil",
      "C. The resistance",
      "D. The capacitance"
    ],
    answer: "B",
    explanation: "By Lenz's law, the self-induced e.m.f. opposes the change (increase or decrease) in current.",
    subtopic: "Inductance"
  },
  {
    question: "An a.c. supply is necessary for a transformer because a steady d.c. gives:",
    options: [
      "A. A constant large e.m.f.",
      "B. No continuous induced e.m.f. in the secondary",
      "C. Higher voltage automatically",
      "D. Eddy currents only"
    ],
    answer: "B",
    explanation: "With steady d.c. the flux is constant, so dΦ/dt = 0 and no sustained secondary e.m.f. is induced.",
    subtopic: "Electromagnetic induction"
  }
];

module.exports = questions;
