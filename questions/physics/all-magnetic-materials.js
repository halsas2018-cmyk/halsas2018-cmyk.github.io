// physics — Magnetic Materials
const questions = [
  {
    question: "Which of the following materials is strongly attracted to a magnet?",
    options: [
      "A. Iron",
      "B. Wood",
      "C. Plastics",
      "D. Glass"
    ],
    answer: "A",
    explanation: "Iron is ferromagnetic and is strongly attracted to a magnet.",
    subtopic: "Ferromagnetic materials"
  },
  {
    question: "Substances which are strongly magnetised in the direction of an applied field are called?",
    options: [
      "A. Ferromagnetic materials",
      "B. Diamagnetic materials",
      "C. Insulators",
      "D. Semiconductors"
    ],
    answer: "A",
    explanation: "Ferromagnetic materials (iron, cobalt, nickel) become strongly magnetised along the applied field.",
    subtopic: "Ferromagnetic materials"
  },
  {
    question: "Which of these is NOT a ferromagnetic material?",
    options: [
      "A. Copper",
      "B. Iron",
      "C. Cobalt",
      "D. Nickel"
    ],
    answer: "A",
    explanation: "Copper is not ferromagnetic; only iron, cobalt and nickel are common ferromagnetic elements.",
    subtopic: "Ferromagnetic materials"
  },
  {
    question: "Materials that are weakly repelled by a magnetic field are called?",
    options: [
      "A. Diamagnetic",
      "B. Ferromagnetic",
      "C. Paramagnetic",
      "D. Superconducting"
    ],
    answer: "A",
    explanation: "Diamagnetic substances are weakly repelled by a magnetic field.",
    subtopic: "Ferromagnetic materials"
  },
  {
    question: "Materials that are weakly attracted by a magnetic field are called?",
    options: [
      "A. Paramagnetic",
      "B. Diamagnetic",
      "C. Ferromagnetic",
      "D. Conductors"
    ],
    answer: "A",
    explanation: "Paramagnetic substances are weakly attracted to a magnetic field (e.g. aluminium, platinum).",
    subtopic: "Ferromagnetic materials"
  },
  {
    question: "The ability of a material to retain magnetism after the magnetising field is removed is called?",
    options: [
      "A. Retentivity",
      "B. Permeability",
      "C. Susceptibility",
      "D. Conductivity"
    ],
    answer: "A",
    explanation: "Retentivity (remanence) is the residual magnetisation left when the field is removed.",
    subtopic: "Ferromagnetic materials"
  },
  {
    question: "The resistance of a magnetic material to being demagnetised is called?",
    options: [
      "A. Coercivity",
      "B. Retentivity",
      "C. Permeability",
      "D. Inductance"
    ],
    answer: "A",
    explanation: "Coercivity is the reverse field needed to reduce magnetisation to zero; high coercivity means hard to demagnetise.",
    subtopic: "Ferromagnetic materials"
  },
  {
    question: "Materials that are easily magnetised and demagnetised are called?",
    options: [
      "A. Soft magnetic materials",
      "B. Hard magnetic materials",
      "C. Diamagnetic",
      "D. Insulators"
    ],
    answer: "A",
    explanation: "Soft magnetic materials (e.g. soft iron) have low coercivity and are easily magnetised/demagnetised.",
    subtopic: "Ferromagnetic materials"
  },
  {
    question: "Materials that retain their magnetism strongly are called?",
    options: [
      "A. Hard magnetic materials",
      "B. Soft magnetic materials",
      "C. Paramagnetic",
      "D. Diamagnetic"
    ],
    answer: "A",
    explanation: "Hard magnetic materials (e.g. steel, alnico) have high retentivity and coercivity, so they make permanent magnets.",
    subtopic: "Ferromagnetic materials"
  },
  {
    question: "Soft iron is preferred for making the core of an electromagnet because it has?",
    options: [
      "A. High permeability and low retentivity",
      "B. High retentivity",
      "C. Low permeability",
      "D. High coercivity"
    ],
    answer: "A",
    explanation: "Soft iron magnetises strongly (high permeability) but loses it quickly (low retentivity), ideal for an electromagnet.",
    subtopic: "Ferromagnetic materials"
  },
  {
    question: "Steel rather than soft iron is used for permanent magnets because steel has?",
    options: [
      "A. High retentivity",
      "B. Low retentivity",
      "C. No magnetism",
      "D. High conductivity only"
    ],
    answer: "A",
    explanation: "Steel retains magnetism well (high retentivity), so it makes a good permanent magnet.",
    subtopic: "Ferromagnetic materials"
  },
  {
    question: "The region around a magnet where its influence is felt is called the?",
    options: [
      "A. Magnetic field",
      "B. Electric field",
      "C. Gravitational field",
      "D. Vacuum"
    ],
    answer: "A",
    explanation: "The magnetic field is the region around a magnet where magnetic forces act.",
    subtopic: "Ferromagnetic materials"
  },
  {
    question: "Magnetic field lines outside a bar magnet run from?",
    options: [
      "A. North pole to south pole",
      "B. South pole to north pole",
      "C. East to west",
      "D. Random directions"
    ],
    answer: "A",
    explanation: "Outside the magnet, field lines go from the north pole to the south pole.",
    subtopic: "Ferromagnetic materials"
  },
  {
    question: "The point inside a magnet where its field is zero (for a bar magnet) is near the?",
    options: [
      "A. Centre",
      "B. North pole",
      "C. South pole",
      "D. Ends"
    ],
    answer: "A",
    explanation: "The neutral point where the field cancels lies near the centre of a bar magnet (inside it).",
    subtopic: "Ferromagnetic materials"
  },
  {
    question: "The SI unit of magnetic field strength (B) is the?",
    options: [
      "A. Tesla",
      "B. Ampere",
      "C. Weber",
      "D. Henry"
    ],
    answer: "A",
    explanation: "Magnetic flux density B is measured in tesla (T).",
    subtopic: "Ferromagnetic materials"
  },
  {
    question: "The total magnetic flux through a surface is measured in?",
    options: [
      "A. Weber",
      "B. Tesla",
      "C. Ampere",
      "D. Ohm"
    ],
    answer: "A",
    explanation: "Magnetic flux is measured in weber (Wb).",
    subtopic: "Ferromagnetic materials"
  },
  {
    question: "A material with high magnetic permeability is one that?",
    options: [
      "A. Concentrates magnetic flux lines",
      "B. Blocks all flux",
      "C. Repels magnets",
      "D. Has no field"
    ],
    answer: "A",
    explanation: "High permeability means the material readily supports and concentrates magnetic flux.",
    subtopic: "Ferromagnetic materials"
  },
  {
    question: "When a ferromagnetic material is heated above its Curie temperature, it?",
    options: [
      "A. Loses its ferromagnetism",
      "B. Becomes a superconductor",
      "C. Becomes diamagnetic strongly",
      "D. Melts immediately"
    ],
    answer: "A",
    explanation: "Above the Curie temperature thermal agitation destroys the ordered domains and ferromagnetism disappears.",
    subtopic: "Ferromagnetic materials"
  },
  {
    question: "The small regions in a ferromagnetic material where atomic magnets are aligned are called?",
    options: [
      "A. Domains",
      "B. Cells",
      "C. Nuclei",
      "D. Lattices"
    ],
    answer: "A",
    explanation: "Magnetic domains are microscopic regions where atomic dipoles are spontaneously aligned.",
    subtopic: "Ferromagnetic materials"
  },
  {
    question: "An unmagnetised piece of iron has its domains arranged?",
    options: [
      "A. Randomly, so net magnetisation is zero",
      "B. All pointing north",
      "C. All pointing south",
      "D. In a single line"
    ],
    answer: "A",
    explanation: "In an unmagnetised specimen the domains are randomly oriented, giving no net magnetism.",
    subtopic: "Ferromagnetic materials"
  },
  {
    question: "Magnetising a piece of iron aligns its?",
    options: [
      "A. Domains in the field direction",
      "B. Atoms into a gas",
      "C. Electrons into pairs",
      "D. Nuclei randomly"
    ],
    answer: "A",
    explanation: "An applied field rotates and grows domains so their alignment produces net magnetisation.",
    subtopic: "Ferromagnetic materials"
  },
  {
    question: "Which of these is a method of magnetising a steel bar?",
    options: [
      "A. Stroke it with a magnet",
      "B. Heat it to red heat",
      "C. Drop it in water",
      "D. Expose it to light"
    ],
    answer: "A",
    explanation: "Single-touch or double-touch stroking with a magnet aligns domains and magnetises the bar.",
    subtopic: "Ferromagnetic materials"
  },
  {
    question: "A common way to demagnetise a magnet is to?",
    options: [
      "A. Heat it and hammer it while pointing east–west",
      "B. Cool it to 0 °C",
      "C. Expose it to light",
      "D. Put it in water"
    ],
    answer: "A",
    explanation: "Heating and hammering (with random orientation) disorders the domains and destroys magnetism.",
    subtopic: "Ferromagnetic materials"
  },
  {
    question: "An alternating current passed through a coil around a magnet, then slowly reduced to zero, will?",
    options: [
      "A. Demagnetise it",
      "B. Make it stronger",
      "C. Have no effect",
      "D. Reverse its poles permanently"
    ],
    answer: "A",
    explanation: "A decreasing AC field randomises the domains, leaving the material demagnetised.",
    subtopic: "Ferromagnetic materials"
  },
  {
    question: "The end of a freely suspended magnet that points geographically north is its?",
    options: [
      "A. North-seeking pole",
      "B. South-seeking pole",
      "C. East pole",
      "D. West pole"
    ],
    answer: "A",
    explanation: "The north-seeking pole (marked N) points toward the Earth's geographic north.",
    subtopic: "Ferromagnetic materials"
  },
  {
    question: "Like magnetic poles?",
    options: [
      "A. Repel each other",
      "B. Attract each other",
      "C. Cancel gravity",
      "D. Produce no force"
    ],
    answer: "A",
    explanation: "Like poles (N–N or S–S) repel; unlike poles attract.",
    subtopic: "Ferromagnetic materials"
  },
  {
    question: "A magnetic compass works because the Earth behaves like a?",
    options: [
      "A. Large magnet",
      "B. Large battery",
      "C. Conductor only",
      "D. Capacitor"
    ],
    answer: "A",
    explanation: "The Earth has a magnetic field, so a compass needle aligns with it like a small magnet.",
    subtopic: "Uses of magnets"
  },
  {
    question: "Magnets are used in electric generators primarily to?",
    options: [
      "A. Provide the magnetic field for electromagnetic induction",
      "B. Store electricity",
      "C. Cool the coils",
      "D. Insulate the wires"
    ],
    answer: "A",
    explanation: "A magnetic field is needed so that moving conductors cut flux and induce an emf.",
    subtopic: "Uses of magnets"
  },
  {
    question: "In an electric motor, magnets are used to?",
    options: [
      "A. Produce a field that exerts force on current-carrying coils",
      "B. Generate light",
      "C. Store charge",
      "D. Measure temperature"
    ],
    answer: "A",
    explanation: "The magnetic field interacts with current in the coil to produce torque (motion).",
    subtopic: "Uses of magnets"
  },
  {
    question: "Loudspeakers use a magnet to?",
    options: [
      "A. Move the coil and diaphragm with varying current",
      "B. Produce light",
      "C. Store energy",
      "D. Cool the coil"
    ],
    answer: "A",
    explanation: "The permanent magnet's field acts on the current-carrying voice coil, pushing the cone to make sound.",
    subtopic: "Uses of magnets"
  },
  {
    question: "Magnetic strips on credit cards store information using?",
    options: [
      "A. Magnetised regions",
      "B. Electric charge only",
      "C. Light patterns",
      "D. Sound waves"
    ],
    answer: "A",
    explanation: "The strip holds data as tiny magnetised areas whose orientation encodes the information.",
    subtopic: "Uses of magnets"
  },
  {
    question: "Magnetic resonance imaging (MRI) in hospitals makes use of?",
    options: [
      "A. Strong magnetic fields",
      "B. X-rays",
      "C. Sound waves only",
      "D. Radioactive isotopes only"
    ],
    answer: "A",
    explanation: "MRI uses strong magnetic fields and radio waves to image soft tissue.",
    subtopic: "Uses of magnets"
  },
  {
    question: "Cranes in scrapyards use electromagnets to?",
    options: [
      "A. Lift and release heavy iron/steel objects",
      "B. Cut metal",
      "C. Paint metal",
      "D. Weigh metal"
    ],
    answer: "A",
    explanation: "An energised electromagnet grips ferromagnetic scrap; switching it off releases the load.",
    subtopic: "Uses of magnets"
  },
  {
    question: "Magnetic separators in industry are used to?",
    options: [
      "A. Remove iron particles from mixtures",
      "B. Generate electricity",
      "C. Measure temperature",
      "D. Cool liquids"
    ],
    answer: "A",
    explanation: "Magnets pull out ferromagnetic contaminants from ores, food, and recycling streams.",
    subtopic: "Uses of magnets"
  },
  {
    question: "Door locks and latches often use small?",
    options: [
      "A. Permanent magnets",
      "B. Batteries only",
      "C. Resistors",
      "D. Capacitors"
    ],
    answer: "A",
    explanation: "Small permanent magnets hold doors and keep latches closed without power.",
    subtopic: "Uses of magnets"
  },
  {
    question: "Refrigerator doors stay closed using?",
    options: [
      "A. Magnetic strips in the seal",
      "B. Glue",
      "C. Nails",
      "D. Screws"
    ],
    answer: "A",
    explanation: "Flexible magnetic strips in the door gasket hold it shut against the steel body.",
    subtopic: "Uses of magnets"
  },
  {
    question: "A magnet is used in a simple electric bell to?",
    options: [
      "A. Repeatedly attract an armature, making it strike the gong",
      "B. Generate light",
      "C. Store charge",
      "D. Measure current"
    ],
    answer: "A",
    explanation: "The electromagnet pulls the striker; when contact breaks it releases, and the cycle repeats as a buzz/ring.",
    subtopic: "Uses of magnets"
  },
  {
    question: "Data on a computer hard disk is stored as?",
    options: [
      "A. Magnetised regions in a thin film",
      "B. Electric charge only",
      "C. Light pulses only",
      "D. Sound tracks"
    ],
    answer: "A",
    explanation: "Hard disks record bits as magnetised domains whose orientation represents 0s and 1s.",
    subtopic: "Uses of magnets"
  },
  {
    question: "Magnets are used in maglev trains to?",
    options: [
      "A. Levitate and propel the train without contact",
      "B. Generate fuel",
      "C. Cool the tracks",
      "D. Measure distance only"
    ],
    answer: "A",
    explanation: "Magnetic repulsion/attraction lifts the train off the track, removing friction.",
    subtopic: "Uses of magnets"
  },
  {
    question: "A compass needle is itself a?",
    options: [
      "A. Small magnet",
      "B. Conductor only",
      "C. Resistor",
      "D. Capacitor"
    ],
    answer: "A",
    explanation: "The compass needle is a magnetised piece of iron that aligns with the Earth's field.",
    subtopic: "Uses of magnets"
  },
  {
    question: "Magnetic fields are used in particle accelerators to?",
    options: [
      "A. Steer and focus charged particle beams",
      "B. Cool the particles",
      "C. Generate the particles",
      "D. Weigh the particles"
    ],
    answer: "A",
    explanation: "Magnetic fields bend the paths of moving charges, guiding them around the accelerator ring.",
    subtopic: "Uses of magnets"
  },
  {
    question: "In a transformer, the core is made of soft iron to?",
    options: [
      "A. Efficiently channel the changing magnetic flux",
      "B. Store electric charge",
      "C. Block the field",
      "D. Generate heat"
    ],
    answer: "A",
    explanation: "Soft iron's high permeability channels flux between coils and its low loss aids efficiency.",
    subtopic: "Uses of magnets"
  },
  {
    question: "Magnets are used in some types of?",
    options: [
      "A. Microphones",
      "B. Light bulbs only",
      "C. Fuses only",
      "D. Resistors only"
    ],
    answer: "A",
    explanation: "Dynamic microphones use a magnet and moving coil to convert sound vibration into an electrical signal.",
    subtopic: "Uses of magnets"
  },
  {
    question: "Magnetic filters are used to?",
    options: [
      "A. Trap ferromagnetic impurities from fluids",
      "B. Purify gases by heat",
      "C. Measure pressure",
      "D. Generate electricity"
    ],
    answer: "A",
    explanation: "Magnetic filters remove iron/steel particles from liquids such as coolants and fuels.",
    subtopic: "Uses of magnets"
  },
  {
    question: "A magnetic dipole moment points from?",
    options: [
      "A. South to north inside the magnet",
      "B. North to south outside",
      "C. East to west",
      "D. Randomly"
    ],
    answer: "A",
    explanation: "By convention the magnetic dipole moment vector points from the south pole to the north pole inside the magnet.",
    subtopic: "Ferromagnetic materials"
  },
  {
    question: "The Earth's geographic north pole corresponds to a magnetic?",
    options: [
      "A. South pole",
      "B. North pole",
      "C. Equator",
      "D. Null point"
    ],
    answer: "A",
    explanation: "The compass north-seeking pole is attracted to a magnetic south pole near Earth's geographic north.",
    subtopic: "Uses of magnets"
  },
  {
    question: "To protect a watch or card from a magnet, one may use?",
    options: [
      "A. A soft-iron shield that diverts the field",
      "B. A copper box only",
      "C. A glass cover",
      "D. A plastic sheet"
    ],
    answer: "A",
    explanation: "High-permeability (soft iron) shielding diverts magnetic flux away from the protected item.",
    subtopic: "Uses of magnets"
  },
  {
    question: "An electromagnet's strength can be increased by?",
    options: [
      "A. Increasing the current or number of turns",
      "B. Removing the core",
      "C. Decreasing the current",
      "D. Using wood as core"
    ],
    answer: "A",
    explanation: "More current or more coil turns increases the magnetomotive force and thus the field.",
    subtopic: "Uses of magnets"
  },
  {
    question: "Keeping magnets away from heat and dropping is advised because they can?",
    options: [
      "A. Lose their magnetism",
      "B. Become radioactive",
      "C. Conduct electricity",
      "D. Gain mass"
    ],
    answer: "A",
    explanation: "Heat, hammering and mechanical shock disorder domains and weaken permanent magnets.",
    subtopic: "Ferromagnetic materials"
  },
  {
    question: "The magnetic field inside a long current-carrying solenoid with a soft-iron core is?",
    options: [
      "A. Strong and nearly uniform",
      "B. Zero",
      "C. Random",
      "D. Very weak"
    ],
    answer: "A",
    explanation: "The core greatly increases the uniform field inside the solenoid.",
    subtopic: "Ferromagnetic materials"
  },
  {
    question: "A material that shows no net magnetism until placed in a field, then aligns weakly, is?",
    options: [
      "A. Paramagnetic",
      "B. Ferromagnetic",
      "C. Diamagnetic",
      "D. Superconducting"
    ],
    answer: "A",
    explanation: "Paramagnetic materials have a small positive susceptibility and align weakly with the field.",
    subtopic: "Ferromagnetic materials"
  },
  {
    question: "Permanent magnets are made from materials with?",
    options: [
      "A. High coercivity and high retentivity",
      "B. Low coercivity",
      "C. Zero retentivity",
      "D. No domains"
    ],
    answer: "A",
    explanation: "High coercivity and retentivity let a permanent magnet keep its magnetism against demagnetising influences.",
    subtopic: "Ferromagnetic materials"
  },
  {
    question: "The hysteresis loop of a ferromagnetic material shows the relationship between?",
    options: [
      "A. Magnetising field and resulting magnetisation",
      "B. Voltage and current",
      "C. Mass and volume",
      "D. Temperature and pressure"
    ],
    answer: "A",
    explanation: "A hysteresis loop plots magnetisation against applied field, illustrating retentivity and coercivity.",
    subtopic: "Ferromagnetic materials"
  },
  {
    question: "Which of the following best describes a use of magnets in everyday life?",
    options: [
      "A. Holding notes on a refrigerator door",
      "B. Generating sunlight",
      "C. Measuring mass",
      "D. Producing water"
    ],
    answer: "A",
    explanation: "Small permanent magnets are commonly used to hold notes against a steel fridge surface.",
    subtopic: "Uses of magnets"
  }
];

module.exports = questions;
