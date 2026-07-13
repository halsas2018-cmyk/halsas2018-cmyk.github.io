// physics — Concepts of Matter
const questions = [
  {
    question: "All matter is made up of tiny particles called?",
    options: [
      "A. Atoms",
      "B. Cells",
      "C. Molecules only",
      "D. Electrons only"
    ],
    answer: "A",
    explanation: "Matter is composed of tiny particles called atoms, which may combine to form molecules.",
    subtopic: "Structure of matter"
  },
  {
    question: "The smallest particle of an element that can take part in a chemical reaction is the?",
    options: [
      "A. Molecule",
      "B. Atom",
      "C. Ion",
      "D. Electron"
    ],
    answer: "B",
    explanation: "An atom is the smallest particle of an element that retains its chemical properties.",
    subtopic: "Structure of matter"
  },
  {
    question: "Which of the following is NOT a state of matter?",
    options: [
      "A. Solid",
      "B. Liquid",
      "C. Gas",
      "D. Energy"
    ],
    answer: "D",
    explanation: "Energy is not a state of matter; the common states are solid, liquid and gas.",
    subtopic: "Structure of matter"
  },
  {
    question: "Particles in a solid are arranged in a?",
    options: [
      "A. Random disorderly manner",
      "B. Regular fixed pattern",
      "C. Completely free motion",
      "D. Spiral arrangement only"
    ],
    answer: "B",
    explanation: "Solid particles are closely packed in a regular, fixed pattern and vibrate about fixed positions.",
    subtopic: "Structure of matter"
  },
  {
    question: "The state of matter in which particles have the highest kinetic energy is?",
    options: [
      "A. Solid",
      "B. Liquid",
      "C. Gas",
      "D. Plasma only"
    ],
    answer: "C",
    explanation: "Gas particles move freely with the highest kinetic energy among the three common states.",
    subtopic: "Structure of matter"
  },
  {
    question: "Brownian motion provides evidence that?",
    options: [
      "A. Matter is continuous",
      "B. Particles of matter are in constant random motion",
      "C. Atoms are indivisible",
      "D. Liquids are compressible"
    ],
    answer: "B",
    explanation: "Brownian motion is the random movement of suspended particles caused by collisions with molecules in constant motion.",
    subtopic: "Structure of matter"
  },
  {
    question: "A substance made up of only one type of atom is called a(n)?",
    options: [
      "A. Compound",
      "B. Mixture",
      "C. Element",
      "D. Solution"
    ],
    answer: "C",
    explanation: "An element consists of only one type of atom and cannot be broken down by ordinary chemical means.",
    subtopic: "Structure of matter"
  },
  {
    question: "Which of the following consists of two or more different atoms chemically joined?",
    options: [
      "A. Element",
      "B. Compound",
      "C. Atom",
      "D. Proton"
    ],
    answer: "B",
    explanation: "A compound is formed when two or more different elements are chemically combined.",
    subtopic: "Structure of matter"
  },
  {
    question: "The three fundamental particles of an atom are?",
    options: [
      "A. Proton, neutron, electron",
      "B. Proton, positron, electron",
      "C. Neutron, electron, photon",
      "D. Proton, neutron, nucleus"
    ],
    answer: "A",
    explanation: "An atom consists of protons and neutrons in the nucleus with electrons orbiting around it.",
    subtopic: "Structure of matter"
  },
  {
    question: "The particle in an atom with a positive charge is the?",
    options: [
      "A. Electron",
      "B. Neutron",
      "C. Proton",
      "D. Photon"
    ],
    answer: "C",
    explanation: "Protons carry a positive charge and are found in the nucleus of an atom.",
    subtopic: "Structure of matter"
  },
  {
    question: "The neutral particle found in the nucleus of an atom is the?",
    options: [
      "A. Electron",
      "B. Proton",
      "C. Neutron",
      "D. Positron"
    ],
    answer: "C",
    explanation: "Neutrons have no charge (neutral) and are located in the atomic nucleus.",
    subtopic: "Structure of matter"
  },
  {
    question: "Electrons in an atom are?",
    options: [
      "A. Positively charged and in the nucleus",
      "B. Negatively charged and orbit the nucleus",
      "C. Neutral and free",
      "D. Positively charged and orbit the nucleus"
    ],
    answer: "B",
    explanation: "Electrons are negatively charged particles that move around the nucleus in shells.",
    subtopic: "Structure of matter"
  },
  {
    question: "The atomic number of an element is equal to the number of?",
    options: [
      "A. Neutrons in the nucleus",
      "B. Protons in the nucleus",
      "C. Electrons plus neutrons",
      "D. Nucleons"
    ],
    answer: "B",
    explanation: "Atomic number equals the number of protons in the nucleus of an atom of the element.",
    subtopic: "Structure of matter"
  },
  {
    question: "The mass number of an atom is the sum of?",
    options: [
      "A. Protons and electrons",
      "B. Protons and neutrons",
      "C. Electrons and neutrons",
      "D. Neutrons only"
    ],
    answer: "B",
    explanation: "Mass number (nucleon number) is the total number of protons and neutrons in the nucleus.",
    subtopic: "Structure of matter"
  },
  {
    question: "Atoms of the same element with different mass numbers are called?",
    options: [
      "A. Isotopes",
      "B. Isomers",
      "C. Allotropes",
      "D. Ions"
    ],
    answer: "A",
    explanation: "Isotopes are atoms of the same element with the same number of protons but different numbers of neutrons.",
    subtopic: "Structure of matter"
  },
  {
    question: "Diffusion is the process by which particles of a substance move from a region of?",
    options: [
      "A. Low to high concentration",
      "B. High to low concentration",
      "C. Equal concentration",
      "D. Zero concentration"
    ],
    answer: "B",
    explanation: "Diffusion is the net movement of particles from a region of higher concentration to lower concentration.",
    subtopic: "Structure of matter"
  },
  {
    question: "Which of the following diffuses fastest?",
    options: [
      "A. A solid",
      "B. A liquid",
      "C. A gas",
      "D. A crystal"
    ],
    answer: "C",
    explanation: "Gas particles move fastest and are most spread out, so gases diffuse more rapidly than liquids or solids.",
    subtopic: "Structure of matter"
  },
  {
    question: "The force of attraction between molecules of the same substance is called?",
    options: [
      "A. Adhesion",
      "B. Cohesion",
      "C. Friction",
      "D. Tension"
    ],
    answer: "B",
    explanation: "Cohesion is the force of attraction between molecules of the same substance.",
    subtopic: "Structure of matter"
  },
  {
    question: "The force of attraction between molecules of different substances is called?",
    options: [
      "A. Cohesion",
      "B. Adhesion",
      "C. Repulsion",
      "D. Viscosity"
    ],
    answer: "B",
    explanation: "Adhesion is the force of attraction between molecules of different substances.",
    subtopic: "Structure of matter"
  },
  {
    question: "A liquid that wets a glass surface shows that?",
    options: [
      "A. Adhesion > cohesion",
      "B. Cohesion > adhesion",
      "C. Adhesion = zero",
      "D. Cohesion = zero"
    ],
    answer: "A",
    explanation: "When adhesion between liquid and glass exceeds cohesion within the liquid, the liquid wets the surface.",
    subtopic: "Structure of matter"
  },
  {
    question: "Which property explains the spherical shape of small liquid drops?",
    options: [
      "A. Viscosity",
      "B. Surface tension",
      "C. Diffusion",
      "D. Buoyancy"
    ],
    answer: "B",
    explanation: "Surface tension pulls surface molecules inward, minimising surface area and forming spherical drops.",
    subtopic: "Structure of matter"
  },
  {
    question: "The crystalline form of carbon is?",
    options: [
      "A. Diamond",
      "B. Graphite only",
      "C. Coal",
      "D. Charcoal"
    ],
    answer: "A",
    explanation: "Diamond is a crystalline allotrope of carbon with a rigid tetrahedral lattice.",
    subtopic: "Structure of matter"
  },
  {
    question: "Which of the following is an amorphous (non-crystalline) solid?",
    options: [
      "A. Salt",
      "B. Sugar",
      "C. Glass",
      "D. Diamond"
    ],
    answer: "C",
    explanation: "Glass lacks a regular long-range ordered structure and is therefore amorphous.",
    subtopic: "Structure of matter"
  },
  {
    question: "The process by which a liquid changes to a gas below its boiling point is?",
    options: [
      "A. Evaporation",
      "B. Condensation",
      "C. Sublimation",
      "D. Fusion"
    ],
    answer: "A",
    explanation: "Evaporation is the escape of molecules from the liquid surface at temperatures below boiling point.",
    subtopic: "Structure of matter"
  },
  {
    question: "The direct change from solid to gas is called?",
    options: [
      "A. Evaporation",
      "B. Sublimation",
      "C. Condensation",
      "D. Melting"
    ],
    answer: "B",
    explanation: "Sublimation is the change of state directly from solid to gas without passing through the liquid phase.",
    subtopic: "Structure of matter"
  },
  {
    question: "When a liquid is heated to its boiling point, bubbles form throughout the liquid because?",
    options: [
      "A. The liquid becomes solid",
      "B. Vapour pressure equals atmospheric pressure",
      "C. Density increases",
      "D. Cohesion increases"
    ],
    answer: "B",
    explanation: "Boiling occurs when the vapour pressure of the liquid equals the external (atmospheric) pressure.",
    subtopic: "Structure of matter"
  },
  {
    question: "The random motion of smoke particles in air observed under a microscope is called?",
    options: [
      "A. Brownian motion",
      "B. Circular motion",
      "C. Periodic motion",
      "D. Linear motion"
    ],
    answer: "A",
    explanation: "Brownian motion is the erratic, random movement of tiny suspended particles due to molecular bombardment.",
    subtopic: "Structure of matter"
  },
  {
    question: "Which of the following statements about gases is correct?",
    options: [
      "A. Gases have a fixed shape",
      "B. Gases have a fixed volume",
      "C. Gases are easily compressible",
      "D. Gas particles are stationary"
    ],
    answer: "C",
    explanation: "Gas particles are far apart, so gases can be compressed easily and take the shape and volume of their container.",
    subtopic: "Structure of matter"
  },
  {
    question: "The kinetic theory of matter states that matter is made up of?",
    options: [
      "A. Continuous substance",
      "B. Particles in constant motion",
      "C. Stationary atoms only",
      "D. Empty space only"
    ],
    answer: "B",
    explanation: "The kinetic theory describes matter as made of particles that are in continuous random motion.",
    subtopic: "Structure of matter"
  },
  {
    question: "In the kinetic theory, temperature is a measure of the average?",
    options: [
      "A. Potential energy of particles",
      "B. Kinetic energy of particles",
      "C. Mass of particles",
      "D. Size of particles"
    ],
    answer: "B",
    explanation: "Temperature is proportional to the average kinetic energy of the random motion of particles.",
    subtopic: "Structure of matter"
  },
  {
    question: "Which of the following is a mixture?",
    options: [
      "A. Water",
      "B. Salt",
      "C. Air",
      "D. Carbon dioxide"
    ],
    answer: "C",
    explanation: "Air is a mixture of gases (mainly nitrogen and oxygen) that are not chemically combined.",
    subtopic: "Structure of matter"
  },
  {
    question: "The smallest unit of a compound that retains its chemical properties is the?",
    options: [
      "A. Atom",
      "B. Molecule",
      "C. Proton",
      "D. Electron"
    ],
    answer: "B",
    explanation: "A molecule is the smallest particle of a compound that retains its chemical identity.",
    subtopic: "Structure of matter"
  },
  {
    question: "Which of these is a property of a solid?",
    options: [
      "A. It has no fixed volume",
      "B. It has a definite shape and volume",
      "C. It flows easily",
      "D. It is highly compressible"
    ],
    answer: "B",
    explanation: "Solids have both a definite shape and a definite volume because their particles are tightly packed.",
    subtopic: "Structure of matter"
  },
  {
    question: "Liquids have?",
    options: [
      "A. Definite shape but no definite volume",
      "B. No definite shape but definite volume",
      "C. No definite shape and no definite volume",
      "D. Definite shape and definite volume"
    ],
    answer: "B",
    explanation: "Liquids take the shape of their container but have a fixed volume.",
    subtopic: "Structure of matter"
  },
  {
    question: "The process of a gas changing into a liquid is called?",
    options: [
      "A. Evaporation",
      "B. Condensation",
      "C. Melting",
      "D. Sublimation"
    ],
    answer: "B",
    explanation: "Condensation is the change of state from gas to liquid, usually on cooling.",
    subtopic: "Structure of matter"
  },
  {
    question: "Which of the following best describes an atom of hydrogen?",
    options: [
      "A. One proton and one neutron",
      "B. One proton and one electron",
      "C. Two protons and one electron",
      "D. One neutron only"
    ],
    answer: "B",
    explanation: "A hydrogen atom has one proton in the nucleus and one electron orbiting it (no neutron in the common isotope).",
    subtopic: "Structure of matter"
  },
  {
    question: "The number of neutrons in an atom is obtained by?",
    options: [
      "A. Atomic number minus mass number",
      "B. Mass number minus atomic number",
      "C. Atomic number plus mass number",
      "D. Mass number only"
    ],
    answer: "B",
    explanation: "Number of neutrons = mass number − atomic number.",
    subtopic: "Structure of matter"
  },
  {
    question: "When an atom loses one or more electrons it becomes a?",
    options: [
      "A. Neutral atom",
      "B. Positive ion",
      "C. Negative ion",
      "D. Molecule"
    ],
    answer: "B",
    explanation: "Losing electrons leaves the atom with more protons than electrons, giving it a positive charge (cation).",
    subtopic: "Structure of matter"
  },
  {
    question: "When an atom gains electrons it becomes a?",
    options: [
      "A. Positive ion",
      "B. Negative ion",
      "C. Neutral atom",
      "D. Isotope"
    ],
    answer: "B",
    explanation: "Gaining electrons gives the atom more electrons than protons, producing a negative ion (anion).",
    subtopic: "Structure of matter"
  },
  {
    question: "Which of the following statements is true about the nucleus of an atom?",
    options: [
      "A. It contains electrons and is positively charged",
      "B. It contains protons and neutrons and is positively charged",
      "C. It is negatively charged",
      "D. It has no mass"
    ],
    answer: "B",
    explanation: "The nucleus contains protons (positive) and neutrons (neutral), so it carries a net positive charge and most of the mass.",
    subtopic: "Structure of matter"
  },
  {
    question: "The ability of a liquid to rise in a narrow tube is due to?",
    options: [
      "A. Viscosity",
      "B. Capillarity",
      "C. Diffusion",
      "D. Surface tension only"
    ],
    answer: "B",
    explanation: "Capillarity (capillary action) is the rise or fall of a liquid in a narrow tube due to adhesion and surface tension.",
    subtopic: "Structure of matter"
  },
  {
    question: "Which of the following is a crystalline solid?",
    options: [
      "A. Wax",
      "B. Plastic",
      "C. Common salt",
      "D. Rubber"
    ],
    answer: "C",
    explanation: "Common salt (sodium chloride) forms a regular crystalline lattice.",
    subtopic: "Structure of matter"
  },
  {
    question: "The molecules of a liquid are held together by?",
    options: [
      "A. Strong cohesive forces",
      "B. No forces",
      "C. Repulsive forces only",
      "D. Magnetic forces"
    ],
    answer: "A",
    explanation: "Liquids have moderate cohesive forces that keep molecules close but allow them to slide past one another.",
    subtopic: "Structure of matter"
  },
  {
    question: "Which statement about the spacing of particles is correct?",
    options: [
      "A. Solid particles are farthest apart",
      "B. Gas particles are farthest apart",
      "C. Liquid particles are farthest apart",
      "D. All are equally spaced"
    ],
    answer: "B",
    explanation: "Gas particles are the farthest apart, which is why gases are compressible and fill their container.",
    subtopic: "Structure of matter"
  },
  {
    question: "The change of a substance from liquid to solid is called?",
    options: [
      "A. Freezing",
      "B. Melting",
      "C. Boiling",
      "D. Evaporation"
    ],
    answer: "A",
    explanation: "Freezing is the change of state from liquid to solid at the melting/freezing point.",
    subtopic: "Structure of matter"
  },
  {
    question: "Which of the following can be separated by physical means?",
    options: [
      "A. A compound",
      "B. An element",
      "C. A mixture",
      "D. A molecule"
    ],
    answer: "C",
    explanation: "Mixtures can be separated by physical methods because their components are not chemically bonded.",
    subtopic: "Structure of matter"
  },
  {
    question: "Which of the following is an example of an element?",
    options: [
      "A. Water",
      "B. Oxygen",
      "C. Salt solution",
      "D. Carbon dioxide"
    ],
    answer: "B",
    explanation: "Oxygen is an element consisting of only one type of atom.",
    subtopic: "Structure of matter"
  },
  {
    question: "Surface tension in liquids is caused by?",
    options: [
      "A. Cohesive forces at the surface",
      "B. Adhesive forces only",
      "C. Gravity",
      "D. Magnetic forces"
    ],
    answer: "A",
    explanation: "Surface tension arises from cohesive forces pulling surface molecules inward, creating a 'skin'.",
    subtopic: "Structure of matter"
  },
  {
    question: "An atom with 11 protons and 12 neutrons has a mass number of?",
    options: [
      "A. 11",
      "B. 12",
      "C. 23",
      "D. 1"
    ],
    answer: "C",
    explanation: "Mass number = protons + neutrons = 11 + 12 = 23.",
    subtopic: "Structure of matter"
  },
  {
    question: "Which of the following statements about matter is correct?",
    options: [
      "A. Matter can be created",
      "B. Matter occupies space and has mass",
      "C. Matter has no mass",
      "D. Matter is always visible"
    ],
    answer: "B",
    explanation: "Matter is anything that has mass and occupies space (volume).",
    subtopic: "Structure of matter"
  },
  {
    question: "The term used to describe matter made of only one kind of atom is?",
    options: [
      "A. Homogeneous",
      "B. Element",
      "C. Heterogeneous",
      "D. Compound"
    ],
    answer: "B",
    explanation: "An element is a pure substance made of only one kind of atom.",
    subtopic: "Structure of matter"
  },
  {
    question: "Which of the following explains why a pin can float on water?",
    options: [
      "A. Buoyancy alone",
      "B. Surface tension supporting it",
      "C. Low density of steel",
      "D. Magnetic force"
    ],
    answer: "B",
    explanation: "Surface tension of the water surface can support light objects like a carefully placed pin.",
    subtopic: "Structure of matter"
  }
];

module.exports = questions;
