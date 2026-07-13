// physics — Electrical Conduction through Liquids
const questions = [
  {
    question: "Electrical conduction through a liquid (electrolyte) is carried by?",
    options: [
      "A. Moving ions",
      "B. Free electrons only",
      "C. Holes only",
      "D. Photons"
    ],
    answer: "A",
    explanation: "In electrolytes, current is carried by the migration of positive and negative ions.",
    subtopic: "Conductors"
  },
  {
    question: "A liquid that conducts electricity by ion movement is called an?",
    options: [
      "A. Electrolyte",
      "B. Insulator",
      "C. Semiconductor",
      "D. Dielectric"
    ],
    answer: "A",
    explanation: "An electrolyte is a liquid (or solution) containing mobile ions that conduct current.",
    subtopic: "Conductors"
  },
  {
    question: "Pure water is a poor conductor because it contains?",
    options: [
      "A. Very few ions",
      "B. Many free electrons",
      "C. Many holes",
      "D. Much salt"
    ],
    answer: "A",
    explanation: "Pure (distilled) water has almost no dissociated ions, so it barely conducts.",
    subtopic: "Conductors"
  },
  {
    question: "When current passes through copper(II) sulphate solution, copper is deposited at the?",
    options: [
      "A. Cathode (negative electrode)",
      "B. Anode (positive electrode)",
      "C. Walls of the container",
      "D. Surface of the solution"
    ],
    answer: "A",
    explanation: "Positive Cu²⁺ ions migrate to the cathode, gain electrons and plate out as copper metal.",
    subtopic: "Conductors"
  },
  {
    question: "During electrolysis, positive ions are called?",
    options: [
      "A. Cations",
      "B. Anions",
      "C. Electrons",
      "D. Neutrons"
    ],
    answer: "A",
    explanation: "Cations are positively charged ions; they move toward the cathode.",
    subtopic: "Conductors"
  },
  {
    question: "During electrolysis, negative ions are called?",
    options: [
      "A. Anions",
      "B. Cations",
      "C. Protons",
      "D. Electrons"
    ],
    answer: "A",
    explanation: "Anions are negatively charged ions; they migrate toward the anode.",
    subtopic: "Conductors"
  },
  {
    question: "The process of decomposing a substance using electricity is called?",
    options: [
      "A. Electrolysis",
      "B. Electromagnetism",
      "C. Magnetism",
      "D. Induction"
    ],
    answer: "A",
    explanation: "Electrolysis is the chemical decomposition of an electrolyte by an electric current.",
    subtopic: "Conductors"
  },
  {
    question: "The positive electrode in electrolysis is the?",
    options: [
      "A. Anode",
      "B. Cathode",
      "C. Electrolyte",
      "D. Insulator"
    ],
    answer: "A",
    explanation: "The anode is the positive electrode; anions are attracted to it.",
    subtopic: "Conductors"
  },
  {
    question: "The negative electrode in electrolysis is the?",
    options: [
      "A. Cathode",
      "B. Anode",
      "C. Electrolyte",
      "D. Conductor"
    ],
    answer: "A",
    explanation: "The cathode is the negative electrode; cations are attracted to it.",
    subtopic: "Conductors"
  },
  {
    question: "At the anode, negatively charged ions typically undergo?",
    options: [
      "A. Oxidation (lose electrons)",
      "B. Reduction (gain electrons)",
      "C. No change",
      "D. Neutralisation only"
    ],
    answer: "A",
    explanation: "Anions lose electrons at the anode — oxidation occurs there.",
    subtopic: "Conductors"
  },
  {
    question: "At the cathode, positively charged ions typically undergo?",
    options: [
      "A. Reduction (gain electrons)",
      "B. Oxidation (lose electrons)",
      "C. No change",
      "D. Vaporisation"
    ],
    answer: "A",
    explanation: "Cations gain electrons at the cathode — reduction occurs there.",
    subtopic: "Conductors"
  },
  {
    question: "Electrolysis of acidified water produces hydrogen at the cathode and?",
    options: [
      "A. Oxygen at the anode",
      "B. Nitrogen at the anode",
      "C. Chlorine at the cathode",
      "D. Carbon at the cathode"
    ],
    answer: "A",
    explanation: "Water electrolysis yields H₂ at the cathode and O₂ at the anode in a 2:1 volume ratio.",
    subtopic: "Conductors"
  },
  {
    question: "In the electrolysis of brine (NaCl solution), chlorine gas is evolved at the?",
    options: [
      "A. Anode",
      "B. Cathode",
      "C. Walls",
      "D. Surface"
    ],
    answer: "A",
    explanation: "Cl⁻ ions are oxidised at the anode to form Cl₂ gas.",
    subtopic: "Conductors"
  },
  {
    question: "Faraday's first law of electrolysis states that the mass deposited is proportional to?",
    options: [
      "A. The quantity of electricity (charge) passed",
      "B. The temperature only",
      "C. The volume of solution",
      "D. The colour of the electrolyte"
    ],
    answer: "A",
    explanation: "m ∝ Q (charge), where Q = It — more charge deposits more mass.",
    subtopic: "Conductors"
  },
  {
    question: "The quantity of electricity Q is calculated as?",
    options: [
      "A. I × t",
      "B. I / t",
      "C. V × R",
      "D. P × t"
    ],
    answer: "A",
    explanation: "Charge Q = current I × time t, measured in coulombs.",
    subtopic: "Conductors"
  },
  {
    question: "Faraday's second law states that for the same charge, masses deposited are proportional to?",
    options: [
      "A. Chemical equivalent weights",
      "B. Atomic colours",
      "C. Solution volumes",
      "D. Temperatures"
    ],
    answer: "A",
    explanation: "Equal charge deposits masses proportional to (molar mass / valency), the equivalent weight.",
    subtopic: "Conductors"
  },
  {
    question: "The electrochemical equivalent of a substance has units of?",
    options: [
      "A. kg/C (or g/C)",
      "B. C/kg",
      "C. A/s",
      "D. V/m"
    ],
    answer: "A",
    explanation: "Electrochemical equivalent z = m/Q, so its unit is mass per unit charge (kg/C).",
    subtopic: "Conductors"
  },
  {
    question: "One faraday of charge is equal to?",
    options: [
      "A. 96500 C (≈ 1 mole of electrons)",
      "B. 1 C",
      "C. 9.8 C",
      "D. 3 × 10⁸ C"
    ],
    answer: "A",
    explanation: "One faraday ≈ 96 500 C, the charge of one mole of electrons (F = Nₐe).",
    subtopic: "Conductors"
  },
  {
    question: "Electroplating uses electrolysis to?",
    options: [
      "A. Coat an object with a thin metal layer",
      "B. Generate electricity",
      "C. Boil the solution",
      "D. Cool the metal"
    ],
    answer: "A",
    explanation: "A metal ion is reduced onto the cathode (the object) to form a thin coating.",
    subtopic: "Conductors"
  },
  {
    question: "In electroplating, the object to be coated is made the?",
    options: [
      "A. Cathode",
      "B. Anode",
      "C. Electrolyte",
      "D. Insulator"
    ],
    answer: "A",
    explanation: "The object is the cathode so metal ions deposit onto its surface.",
    subtopic: "Conductors"
  },
  {
    question: "A voltameter (coulometer) is used to?",
    options: [
      "A. Measure electric charge by electrolysis",
      "B. Measure temperature",
      "C. Generate light",
      "D. Store charge"
    ],
    answer: "A",
    explanation: "By weighing deposited metal, a voltameter determines the total charge passed.",
    subtopic: "Conductors"
  },
  {
    question: "Conduction in liquids differs from metals because liquids conduct by?",
    options: [
      "A. Ions, not free electrons",
      "B. Electrons only",
      "C. Protons",
      "D. Photons"
    ],
    answer: "A",
    explanation: "Metals conduct via free electrons; liquid electrolytes conduct via moving ions.",
    subtopic: "Conductors"
  },
  {
    question: "The process at electrodes that involves gain of electrons is called?",
    options: [
      "A. Reduction",
      "B. Oxidation",
      "C. Ionisation",
      "D. Vaporisation"
    ],
    answer: "A",
    explanation: "Reduction is the gain of electrons (at the cathode).",
    subtopic: "Conductors"
  },
  {
    question: "The process at electrodes that involves loss of electrons is called?",
    options: [
      "A. Oxidation",
      "B. Reduction",
      "C. Condensation",
      "D. Neutralisation"
    ],
    answer: "A",
    explanation: "Oxidation is the loss of electrons (at the anode).",
    subtopic: "Conductors"
  },
  {
    question: "If the current is doubled but time is halved, the mass deposited is?",
    options: [
      "A. The same",
      "B. Doubled",
      "C. Halved",
      "D. Quadrupled"
    ],
    answer: "A",
    explanation: "m ∝ Q = It; (2I)(t/2) = It = same charge, so same mass.",
    subtopic: "Conductors"
  },
  {
    question: "The valency of an ion affects the mass deposited because charge depends on?",
    options: [
      "A. Number of electrons transferred per ion",
      "B. Ion colour",
      "C. Solution volume",
      "D. Container shape"
    ],
    answer: "A",
    explanation: "A z+ ion needs z electrons to discharge, so valency enters the equivalent weight.",
    subtopic: "Conductors"
  },
  {
    question: "An electrolyte must be in the form of?",
    options: [
      "A. A molten salt or a solution of ions",
      "B. A solid metal",
      "C. A gas only",
      "D. A vacuum"
    ],
    answer: "A",
    explanation: "Ions must be free to move, so the electrolyte is a molten salt or an ionic solution.",
    subtopic: "Conductors"
  },
  {
    question: "During electrolysis of molten sodium chloride, sodium is produced at the?",
    options: [
      "A. Cathode",
      "B. Anode",
      "C. Walls",
      "D. Surface"
    ],
    answer: "A",
    explanation: "Na⁺ cations are reduced to sodium metal at the cathode.",
    subtopic: "Conductors"
  },
  {
    question: "A solution that does NOT conduct electricity is called a?",
    options: [
      "A. Non-electrolyte",
      "B. Strong electrolyte",
      "C. Electrolyte",
      "D. Conductor"
    ],
    answer: "A",
    explanation: "A non-electrolyte (e.g. sugar solution) has no mobile ions and does not conduct.",
    subtopic: "Conductors"
  },
  {
    question: "The conductivity of an electrolyte increases with?",
    options: [
      "A. Higher ion concentration",
      "B. Lower ion concentration",
      "C. Lower temperature only",
      "D. Removing the electrodes"
    ],
    answer: "A",
    explanation: "More dissolved ions give more charge carriers, so conductivity rises.",
    subtopic: "Conductors"
  },
  {
    question: "In a copper refining tank, impure copper is the anode and pure copper is the?",
    options: [
      "A. Cathode",
      "B. Electrolyte",
      "C. Insulator",
      "D. Container"
    ],
    answer: "A",
    explanation: "Impure copper dissolves at the anode and pure copper deposits on the cathode.",
    subtopic: "Conductors"
  },
  {
    question: "The standard potential difference that drives electrolysis comes from an?",
    options: [
      "A. External DC source",
      "B. Magnet",
      "C. Thermometer",
      "D. Mirror"
    ],
    answer: "A",
    explanation: "Electrolysis requires an external direct-current supply to force non-spontaneous reactions.",
    subtopic: "Conductors"
  },
  {
    question: "Overvoltage (overpotential) is the extra voltage needed because of?",
    options: [
      "A. Kinetic/electrode polarisation effects",
      "B. The colour of the metal",
      "C. Container mass",
      "D. Light intensity"
    ],
    answer: "A",
    explanation: "Overpotential is the excess voltage above the theoretical value due to polarisation at electrodes.",
    subtopic: "Conductors"
  },
  {
    question: "Electrolysis of dilute H₂SO₄ gives hydrogen at the cathode and oxygen at the anode in the volume ratio?",
    options: [
      "A. 2 : 1",
      "B. 1 : 2",
      "C. 1 : 1",
      "D. 3 : 1"
    ],
    answer: "A",
    explanation: "2H₂O → 2H₂ + O₂, so hydrogen : oxygen volumes are 2 : 1.",
    subtopic: "Conductors"
  },
  {
    question: "Polarisation in a simple cell is reduced by adding?",
    options: [
      "A. A depolariser (e.g. MnO₂)",
      "B. More water only",
      "C. Oil",
      "D. Sugar"
    ],
    answer: "A",
    explanation: "A depolariser removes the hydrogen layer at the electrode, sustaining the current.",
    subtopic: "Conductors"
  },
  {
    question: "Ions move through the electrolyte because of the?",
    options: [
      "A. Electric field between the electrodes",
      "B. Gravity only",
      "C. Light pressure",
      "D. Sound waves"
    ],
    answer: "A",
    explanation: "The applied field exerts forces on charged ions, driving them toward the opposite electrode.",
    subtopic: "Conductors"
  },
  {
    question: "A salt bridge in electrochemistry allows?",
    options: [
      "A. Ion flow to complete the circuit",
      "B. Electron flow only",
      "C. Light to pass",
      "D. Gas to escape"
    ],
    answer: "A",
    explanation: "The salt bridge carries ions, completing the circuit without mixing the half-cells.",
    subtopic: "Conductors"
  },
  {
    question: "Which of the following is a good conductor of electricity in liquid form?",
    options: [
      "A. Copper(II) sulphate solution",
      "B. Distilled water",
      "C. Sugar solution",
      "D. Kerosene"
    ],
    answer: "A",
    explanation: "Copper(II) sulphate dissociates into mobile ions and conducts well.",
    subtopic: "Conductors"
  },
  {
    question: "The mass m deposited in electrolysis is given by m = ZIt, where Z is the?",
    options: [
      "A. Electrochemical equivalent",
      "B. Electrode area",
      "C. Voltage",
      "D. Resistance"
    ],
    answer: "A",
    explanation: "Z is the electrochemical equivalent; m = ZIt follows Faraday's first law.",
    subtopic: "Conductors"
  },
  {
    question: "If 2 A flows for 5 minutes, the total charge passed is?",
    options: [
      "A. 600 C",
      "B. 10 C",
      "C. 2.5 C",
      "D. 300 C"
    ],
    answer: "A",
    explanation: "Q = It = 2 A × (5 × 60 s) = 2 × 300 = 600 C.",
    subtopic: "Conductors"
  },
  {
    question: "Semiconductors have electrical conductivity between that of?",
    options: [
      "A. Conductors and insulators",
      "B. Two insulators",
      "C. Two conductors only",
      "D. A metal and a gas"
    ],
    answer: "A",
    explanation: "Semiconductors (e.g. silicon) conduct better than insulators but worse than metals.",
    subtopic: "Semiconductors"
  },
  {
    question: "The most common elemental semiconductors are?",
    options: [
      "A. Silicon and germanium",
      "B. Copper and iron",
      "C. Wood and plastic",
      "D. Sodium and chlorine"
    ],
    answer: "A",
    explanation: "Silicon (Si) and germanium (Ge) are the classic elemental semiconductors.",
    subtopic: "Semiconductors"
  },
  {
    question: "At absolute zero, a pure semiconductor behaves like an?",
    options: [
      "A. Insulator",
      "B. Perfect conductor",
      "C. Superconductor",
      "D. Magnet"
    ],
    answer: "A",
    explanation: "With no thermal energy to free electrons, the valence band is full and conduction stops.",
    subtopic: "Semiconductors"
  },
  {
    question: "In a pure (intrinsic) semiconductor, conduction occurs by?",
    options: [
      "A. Electrons and holes in equal numbers",
      "B. Electrons only",
      "C. Ions only",
      "D. Protons"
    ],
    answer: "A",
    explanation: "Intrinsic semiconductors generate electron–hole pairs, so n = p.",
    subtopic: "Semiconductors"
  },
  {
    question: "A missing electron in the valence band of a semiconductor is called a?",
    options: [
      "A. Hole",
      "B. Positron",
      "C. Proton",
      "D. Neutron"
    ],
    answer: "A",
    explanation: "A hole is the vacancy left when an electron is excited to the conduction band; it acts as a positive carrier.",
    subtopic: "Semiconductors"
  },
  {
    question: "Adding a small amount of pentavalent impurity (e.g. phosphorus) to silicon creates a?",
    options: [
      "A. n-type semiconductor",
      "B. p-type semiconductor",
      "C. Insulator",
      "D. Conductor only"
    ],
    answer: "A",
    explanation: "Pentavalent donors supply extra electrons, giving n-type (negative carrier) material.",
    subtopic: "Semiconductors"
  },
  {
    question: "Adding a small amount of trivalent impurity (e.g. boron) to silicon creates a?",
    options: [
      "A. p-type semiconductor",
      "B. n-type semiconductor",
      "C. Insulator",
      "D. Superconductor"
    ],
    answer: "A",
    explanation: "Trivalent acceptors create holes, giving p-type (positive carrier) material.",
    subtopic: "Semiconductors"
  },
  {
    question: "In an n-type semiconductor, the majority carriers are?",
    options: [
      "A. Electrons",
      "B. Holes",
      "C. Ions",
      "D. Protons"
    ],
    answer: "A",
    explanation: "n-type material has electrons as the majority charge carriers.",
    subtopic: "Semiconductors"
  },
  {
    question: "In a p-type semiconductor, the majority carriers are?",
    options: [
      "A. Holes",
      "B. Electrons",
      "C. Ions",
      "D. Neutrons"
    ],
    answer: "A",
    explanation: "p-type material has holes as the majority charge carriers.",
    subtopic: "Semiconductors"
  },
  {
    question: "The conductivity of a semiconductor generally increases with?",
    options: [
      "A. Rising temperature",
      "B. Falling temperature",
      "C. Removing dopants",
      "D. Cooling to 0 K"
    ],
    answer: "A",
    explanation: "More thermal energy frees more electron–hole pairs, raising conductivity as temperature rises.",
    subtopic: "Semiconductors"
  },
  {
    question: "The p–n junction is the basis of devices such as the?",
    options: [
      "A. Diode",
      "B. Resistor",
      "C. Capacitor only",
      "D. Inductor only"
    ],
    answer: "A",
    explanation: "A p–n junction forms a diode that conducts mainly in one direction.",
    subtopic: "Semiconductors"
  },
  {
    question: "A p–n junction diode conducts when it is?",
    options: [
      "A. Forward biased",
      "B. Reverse biased",
      "C. Unbiased in the dark",
      "D. Heated to melting"
    ],
    answer: "A",
    explanation: "Forward bias narrows the depletion region and lets current flow easily.",
    subtopic: "Semiconductors"
  },
  {
    question: "Light-dependent resistors (LDRs) are made from semiconductors whose resistance?",
    options: [
      "A. Falls with increasing light",
      "B. Rises with increasing light",
      "C. Is constant",
      "D. Depends on magnetism"
    ],
    answer: "A",
    explanation: "Photons free carriers, so an LDR's resistance drops as illumination increases.",
    subtopic: "Semiconductors"
  },
  {
    question: "Doping a semiconductor means?",
    options: [
      "A. Adding a small controlled impurity",
      "B. Removing all impurities",
      "C. Heating to melting",
      "D. Coating with metal"
    ],
    answer: "A",
    explanation: "Doping deliberately introduces impurity atoms to control carrier type and density.",
    subtopic: "Semiconductors"
  },
  {
    question: "The energy gap between valence and conduction bands in a semiconductor is?",
    options: [
      "A. Small (about 1 eV)",
      "B. Very large",
      "C. Zero",
      "D. Negative"
    ],
    answer: "A",
    explanation: "Semiconductors have a modest band gap (~1 eV for Si) that thermal energy can bridge.",
    subtopic: "Semiconductors"
  },
  {
    question: "Transistors are semiconductor devices used mainly as?",
    options: [
      "A. Switches and amplifiers",
      "B. Batteries",
      "C. Resistors only",
      "D. Wires"
    ],
    answer: "A",
    explanation: "Transistors control current and form the basis of switching and amplification in electronics.",
    subtopic: "Semiconductors"
  }
];

module.exports = questions;
