// physics — Structure of Matter
const questions = [
  {
    question: "The kinetic theory states that matter is made up of?",
    options: [
      "A. Tiny particles in constant random motion",
      "B. Continuous unbreakable substance",
      "C. Only waves",
      "D. Static atoms only"
    ],
    answer: "A",
    explanation: "Kinetic theory models matter as particles (atoms/molecules) in continual random motion.",
    subtopic: "Kinetic theory"
  },
  {
    question: "According to the kinetic theory, the temperature of a gas is a measure of?",
    options: [
      "A. The average kinetic energy of its molecules",
      "B. The number of molecules",
      "C. The colour of the gas",
      "D. The mass of the container"
    ],
    answer: "A",
    explanation: "Absolute temperature is proportional to the average translational kinetic energy of the molecules.",
    subtopic: "Kinetic theory"
  },
  {
    question: "In an ideal gas, the molecules are assumed to have?",
    options: [
      "A. Negligible volume and no intermolecular forces",
      "B. Large volume and strong forces",
      "C. Fixed positions",
      "D. Zero speed"
    ],
    answer: "A",
    explanation: "The ideal-gas model treats molecules as point particles with elastic collisions and no forces except during collisions.",
    subtopic: "Kinetic theory"
  },
  {
    question: "The pressure exerted by a gas on its container is due to?",
    options: [
      "A. Molecules colliding with the walls",
      "B. The weight of the gas only",
      "C. Gravity pulling down",
      "D. Chemical reactions"
    ],
    answer: "A",
    explanation: "Pressure arises from the countless elastic impacts of molecules on the container walls.",
    subtopic: "Kinetic theory"
  },
  {
    question: "For a fixed mass of gas at constant volume, pressure is directly proportional to?",
    options: [
      "A. Absolute temperature",
      "B. Volume",
      "C. Molar mass",
      "D. Pressure inverse"
    ],
    answer: "A",
    explanation: "At constant volume, P ∝ T (Amontons's/Gay-Lussac's law): hotter gas means faster molecules and higher pressure.",
    subtopic: "Kinetic theory"
  },
  {
    question: "For a fixed mass of gas at constant temperature, pressure is inversely proportional to?",
    options: [
      "A. Volume",
      "B. Temperature",
      "C. Mass",
      "D. Speed"
    ],
    answer: "A",
    explanation: "Boyle's law: at constant temperature, P ∝ 1/V.",
    subtopic: "Kinetic theory"
  },
  {
    question: "The average kinetic energy of gas molecules depends only on?",
    options: [
      "A. Absolute temperature",
      "B. The type of gas container",
      "C. The gas pressure only",
      "D. The colour of the gas"
    ],
    answer: "A",
    explanation: "At a given temperature all ideal gases have the same mean molecular kinetic energy regardless of identity.",
    subtopic: "Kinetic theory"
  },
  {
    question: "At the same temperature, which gas molecules have the greatest average speed?",
    options: [
      "A. The lightest gas (e.g. hydrogen)",
      "B. The heaviest gas (e.g. radon)",
      "C. All gases move equally fast",
      "D. The densest gas"
    ],
    answer: "A",
    explanation: "Since ½mv² is the same on average, lighter molecules have higher rms speed.",
    subtopic: "Kinetic theory"
  },
  {
    question: "Brownian motion provides evidence for?",
    options: [
      "A. The existence and random motion of molecules",
      "B. The earth's rotation",
      "C. Gravitational waves",
      "D. Black holes"
    ],
    answer: "A",
    explanation: "The jittery motion of smoke/pollen particles comes from random bombardment by invisible molecules.",
    subtopic: "Kinetic theory"
  },
  {
    question: "In solids, the particles are arranged in?",
    options: [
      "A. Fixed positions, vibrating about them",
      "B. Random free flight",
      "C. Continuous straight lines",
      "D. A gas-like cloud"
    ],
    answer: "A",
    explanation: "Solid particles are held in a lattice and vibrate about fixed mean positions.",
    subtopic: "Kinetic theory"
  },
  {
    question: "In liquids, the particles?",
    options: [
      "A. Are close but can slide past one another",
      "B. Are fixed in place",
      "C. Are far apart and free",
      "D. Do not move"
    ],
    answer: "A",
    explanation: "Liquid particles are near neighbours with enough energy to move past each other, giving flow.",
    subtopic: "Kinetic theory"
  },
  {
    question: "In gases, the particles are?",
    options: [
      "A. Far apart and move randomly at high speed",
      "B. Fixed in a lattice",
      "C. Touching and static",
      "D. Arranged in rows that never move"
    ],
    answer: "A",
    explanation: "Gas molecules are widely spaced and travel in straight lines until they collide.",
    subtopic: "Kinetic theory"
  },
  {
    question: "The root-mean-square speed of gas molecules is related to temperature by?",
    options: [
      "A. v_rms = √(3kT/m)",
      "B. v_rms = 3kT/m",
      "C. v_rms = kT/m",
      "D. v_rms = √(m/3kT)"
    ],
    answer: "A",
    explanation: "From ½mv² = 3/2 kT, the rms speed is √(3kT/m).",
    subtopic: "Kinetic theory"
  },
  {
    question: "Absolute zero (0 K) corresponds to the temperature at which?",
    options: [
      "A. Ideal-gas molecules have zero kinetic energy",
      "B. Molecules move fastest",
      "C. Pressure is infinite",
      "D. Volume is infinite"
    ],
    answer: "A",
    explanation: "At 0 K the ideal-gas average kinetic energy would be zero (molecular motion ceases in the model).",
    subtopic: "Kinetic theory"
  },
  {
    question: "0 K on the Celsius scale is?",
    options: [
      "A. −273 °C",
      "B. 0 °C",
      "C. 100 °C",
      "D. 273 °C"
    ],
    answer: "A",
    explanation: "Absolute zero is −273.15 °C, often rounded to −273 °C.",
    subtopic: "Kinetic theory"
  },
  {
    question: "Evaporation causes cooling because?",
    options: [
      "A. The fastest molecules escape, leaving cooler ones behind",
      "B. Heat is added",
      "C. The liquid freezes",
      "D. Pressure increases"
    ],
    answer: "A",
    explanation: "Evaporation removes the highest-energy molecules, lowering the average energy (temperature) of the remainder.",
    subtopic: "Kinetic theory"
  },
  {
    question: "Which factor increases the rate of evaporation?",
    options: [
      "A. Higher temperature",
      "B. Lower temperature",
      "C. Lower surface area",
      "D. Higher humidity"
    ],
    answer: "A",
    explanation: "More thermal energy and more surface area speed up evaporation; high humidity slows it.",
    subtopic: "Kinetic theory"
  },
  {
    question: "Boiling occurs when the vapour pressure equals?",
    options: [
      "A. The external atmospheric pressure",
      "B. Zero",
      "C. Twice the atmospheric pressure",
      "D. The vapour density"
    ],
    answer: "A",
    explanation: "A liquid boils when its saturated vapour pressure equals the surrounding pressure.",
    subtopic: "Kinetic theory"
  },
  {
    question: "The random motion of smoke particles seen under a microscope is called?",
    options: [
      "A. Brownian motion",
      "B. Circular motion",
      "C. Uniform motion",
      "D. Tidal motion"
    ],
    answer: "A",
    explanation: "Brownian motion is the erratic path of suspended particles due to molecular collisions.",
    subtopic: "Kinetic theory"
  },
  {
    question: "Collisions between ideal-gas molecules are assumed to be?",
    options: [
      "A. Perfectly elastic",
      "B. Perfectly inelastic",
      "C. Always sticky",
      "D. Impossible"
    ],
    answer: "A",
    explanation: "Elastic collisions conserve total kinetic energy in the ideal-gas model.",
    subtopic: "Kinetic theory"
  },
  {
    question: "The number of molecules in one mole of any substance is?",
    options: [
      "A. 6.02 × 10²³ (Avogadro's number)",
      "B. 3.0 × 10⁸",
      "C. 1.0 × 10³",
      "D. 9.8 × 10¹"
    ],
    answer: "A",
    explanation: "Avogadro's number Nₐ ≈ 6.02 × 10²³ particles per mole.",
    subtopic: "Kinetic theory"
  },
  {
    question: "The kinetic theory explains gas pressure as the result of?",
    options: [
      "A. Molecular impacts on surfaces",
      "B. Magnetic forces",
      "C. Gravitational pull",
      "D. Light pressure only"
    ],
    answer: "A",
    explanation: "Each molecular collision with a wall exerts a tiny force; their sum is the macroscopic pressure.",
    subtopic: "Kinetic theory"
  },
  {
    question: "As a gas is compressed at constant temperature, its pressure rises because?",
    options: [
      "A. Molecules hit the walls more often",
      "B. Molecules move slower",
      "C. Mass increases",
      "D. Temperature rises"
    ],
    answer: "A",
    explanation: "Smaller volume means shorter distances between collisions with the walls, so more impacts per second.",
    subtopic: "Kinetic theory"
  },
  {
    question: "The internal energy of an ideal monatomic gas depends only on?",
    options: [
      "A. Temperature",
      "B. Volume",
      "C. Pressure only",
      "D. Container shape"
    ],
    answer: "A",
    explanation: "For an ideal gas there are no intermolecular potentials, so internal energy is just the molecular kinetic energy, hence depends on T.",
    subtopic: "Kinetic theory"
  },
  {
    question: "At room temperature, molecules in a gas move at roughly?",
    options: [
      "A. Hundreds of metres per second",
      "B. A few centimetres per second",
      "C. Zero speed",
      "D. The speed of light"
    ],
    answer: "A",
    explanation: "Typical molecular speeds at room temperature are of order 10²–10³ m/s.",
    subtopic: "Kinetic theory"
  },
  {
    question: "Which statement about gases is correct?",
    options: [
      "A. They have neither fixed shape nor fixed volume",
      "B. They have fixed shape and volume",
      "C. They have fixed shape only",
      "D. They cannot be compressed"
    ],
    answer: "A",
    explanation: "Gases expand to fill their container, so they have no fixed shape or volume.",
    subtopic: "Kinetic theory"
  },
  {
    question: "Diffusion is the process by which particles?",
    options: [
      "A. Spread from a region of high concentration to low concentration",
      "B. Move only upward",
      "C. Clump together",
      "D. Stop moving"
    ],
    answer: "A",
    explanation: "Diffusion is net movement down a concentration gradient due to random motion.",
    subtopic: "Diffusion"
  },
  {
    question: "The smell of perfume spreading across a room is an example of?",
    options: [
      "A. Diffusion",
      "B. Convection only",
      "C. Radiation",
      "D. Evaporation only"
    ],
    answer: "A",
    explanation: "Perfume molecules diffuse through the air from high to low concentration.",
    subtopic: "Diffusion"
  },
  {
    question: "Diffusion occurs fastest in?",
    options: [
      "A. Gases",
      "B. Solids",
      "C. Very viscous liquids",
      "D. A vacuum"
    ],
    answer: "A",
    explanation: "Gas molecules move fastest and farthest between collisions, so diffusion is quickest in gases.",
    subtopic: "Diffusion"
  },
  {
    question: "Diffusion is slowest in?",
    options: [
      "A. Solids",
      "B. Gases",
      "C. Liquids at high temperature",
      "D. Air"
    ],
    answer: "A",
    explanation: "In solids particles are locked in place, so net spreading by diffusion is extremely slow.",
    subtopic: "Diffusion"
  },
  {
    question: "The rate of diffusion increases with?",
    options: [
      "A. Higher temperature",
      "B. Lower temperature",
      "C. Larger particle mass only",
      "D. Lower concentration gradient"
    ],
    answer: "A",
    explanation: "Higher temperature means faster particles and a steeper gradient speeds diffusion.",
    subtopic: "Diffusion"
  },
  {
    question: "Graham's law states that the rate of diffusion of a gas is inversely proportional to the square root of its?",
    options: [
      "A. Molar mass (density)",
      "B. Temperature",
      "C. Pressure",
      "D. Volume"
    ],
    answer: "A",
    explanation: "Graham's law: rate ∝ 1/√M, so lighter gases diffuse faster.",
    subtopic: "Diffusion"
  },
  {
    question: "Which gas diffuses fastest among these at the same conditions?",
    options: [
      "A. Hydrogen",
      "B. Oxygen",
      "C. Carbon dioxide",
      "D. Chlorine"
    ],
    answer: "A",
    explanation: "Hydrogen has the lowest molar mass, so by Graham's law it diffuses fastest.",
    subtopic: "Diffusion"
  },
  {
    question: "Oxygen diffuses through a membrane into the blood in the?",
    options: [
      "A. Lungs",
      "B. Kidneys",
      "C. Liver",
      "D. Stomach"
    ],
    answer: "A",
    explanation: "In the lungs, O₂ diffuses from alveoli (high concentration) into the blood (low concentration).",
    subtopic: "Diffusion"
  },
  {
    question: "A sugar cube dissolving and spreading in water demonstrates?",
    options: [
      "A. Diffusion",
      "B. Nuclear fission",
      "C. Magnetism",
      "D. Combustion"
    ],
    answer: "A",
    explanation: "Sugar molecules move randomly and spread throughout the water by diffusion.",
    subtopic: "Diffusion"
  },
  {
    question: "Diffusion in gases is evidence that gas molecules?",
    options: [
      "A. Are in continuous random motion",
      "B. Are at rest",
      "C. Have fixed positions",
      "D. Repel each other strongly"
    ],
    answer: "A",
    explanation: "The spontaneous mixing of gases shows molecules are moving randomly.",
    subtopic: "Diffusion"
  },
  {
    question: "The random walk nature of diffusion means displacement grows with time roughly as?",
    options: [
      "A. √t",
      "B. t²",
      "C. 1/t",
      "D. t³"
    ],
    answer: "A",
    explanation: "In a random walk, the RMS displacement scales with √N collisions ∝ √t.",
    subtopic: "Diffusion"
  },
  {
    question: "Particles diffuse from high to low concentration until?",
    options: [
      "A. The concentration is uniform",
      "B. All particles stop",
      "C. The temperature reaches zero",
      "D. Pressure becomes infinite"
    ],
    answer: "A",
    explanation: "Net diffusion continues until equilibrium (uniform concentration) is reached; random motion continues.",
    subtopic: "Diffusion"
  },
  {
    question: "Which of the following is NOT required for diffusion to occur?",
    options: [
      "A. A vacuum",
      "B. A concentration gradient",
      "C. Random particle motion",
      "D. A medium (or space) to move through"
    ],
    answer: "A",
    explanation: "Diffusion happens in gases, liquids and within solids; it does not require a vacuum.",
    subtopic: "Diffusion"
  },
  {
    question: "Brownian motion and diffusion together support the idea that?",
    options: [
      "A. Matter is particulate and in motion",
      "B. Matter is continuous only",
      "C. Atoms do not exist",
      "D. Particles are static"
    ],
    answer: "A",
    explanation: "Both phenomena are naturally explained by a particulate, randomly moving model of matter.",
    subtopic: "Kinetic theory"
  },
  {
    question: "When a gas is heated at constant pressure, it expands because?",
    options: [
      "A. Molecules move faster and push the walls outward",
      "B. Mass decreases",
      "C. Pressure becomes zero",
      "D. Molecules disappear"
    ],
    answer: "A",
    explanation: "Charles's law: at constant pressure, higher T gives faster molecules and a larger volume.",
    subtopic: "Kinetic theory"
  },
  {
    question: "The ideal gas equation is?",
    options: [
      "A. PV = nRT",
      "B. PV = nR/T",
      "C. P + V = nRT",
      "D. PV = nR + T"
    ],
    answer: "A",
    explanation: "The ideal gas law is PV = nRT, linking pressure, volume, moles and temperature.",
    subtopic: "Kinetic theory"
  },
  {
    question: "For a fixed mass of gas, combining Boyle's and Charles's laws gives?",
    options: [
      "A. PV/T = constant",
      "B. P + V = constant",
      "C. PV = constant only at all T",
      "D. P/T = V only"
    ],
    answer: "A",
    explanation: "The combined gas law is PV/T = constant for a fixed amount of gas.",
    subtopic: "Kinetic theory"
  },
  {
    question: "The molecules of an ideal gas are best described as?",
    options: [
      "A. Point masses with no intermolecular attraction",
      "B. Large soft spheres",
      "C. Stationary points",
      "D. Charged clouds"
    ],
    answer: "A",
    explanation: "Ideal molecules are point particles interacting only via elastic collisions.",
    subtopic: "Kinetic theory"
  },
  {
    question: "Increasing the concentration gradient will?",
    options: [
      "A. Increase the rate of diffusion",
      "B. Decrease the rate of diffusion",
      "C. Stop diffusion",
      "D. Have no effect"
    ],
    answer: "A",
    explanation: "A steeper concentration difference drives faster net diffusion.",
    subtopic: "Diffusion"
  },
  {
    question: "Diffusion through a semi-permeable membrane is called?",
    options: [
      "A. Osmosis (for solvents) / dialysis (for solutes)",
      "B. Evaporation",
      "C. Condensation",
      "D. Sublimation"
    ],
    answer: "A",
    explanation: "Selective diffusion through membranes includes osmosis (solvent) and dialysis (solutes).",
    subtopic: "Diffusion"
  },
  {
    question: "A heavier gas diffuses more slowly than a lighter one because it has?",
    options: [
      "A. Lower average speed at the same temperature",
      "B. Higher temperature",
      "C. More molecules",
      "D. Lower mass"
    ],
    answer: "A",
    explanation: "At equal temperature, heavier molecules have lower rms speed, so they diffuse more slowly.",
    subtopic: "Diffusion"
  },
  {
    question: "The spreading of ink in still water is due to?",
    options: [
      "A. Diffusion",
      "B. Gravity only",
      "C. Magnetism",
      "D. Light pressure"
    ],
    answer: "A",
    explanation: "Ink particles undergo random motion and spread through the water by diffusion.",
    subtopic: "Diffusion"
  },
  {
    question: "Kinetic energy of molecules is converted to heat when they?",
    options: [
      "A. Collide inelastically with surroundings losing ordered motion",
      "B. Stop completely",
      "C. Become massless",
      "D. Turn into light"
    ],
    answer: "A",
    explanation: "Friction/viscous collisions randomise ordered motion into thermal energy (heat).",
    subtopic: "Kinetic theory"
  },
  {
    question: "At the same temperature and pressure, equal volumes of gases contain?",
    options: [
      "A. Equal numbers of molecules (Avogadro's law)",
      "B. Equal masses",
      "C. Different numbers always",
      "D. No molecules"
    ],
    answer: "A",
    explanation: "Avogadro's law: equal volumes of ideal gases at the same T and P have equal molecule counts.",
    subtopic: "Kinetic theory"
  },
  {
    question: "The motion of particles in a solid is best described as?",
    options: [
      "A. Vibration about fixed points",
      "B. Free flight across the room",
      "C. No motion at all",
      "D. Spinning only"
    ],
    answer: "A",
    explanation: "Solid particles vibrate about fixed lattice sites; they do not translate freely.",
    subtopic: "Kinetic theory"
  },
  {
    question: "Which process involves particles moving against a concentration gradient using energy?",
    options: [
      "A. Active transport",
      "B. Simple diffusion",
      "C. Brownian motion",
      "D. Boiling"
    ],
    answer: "A",
    explanation: "Active transport moves substances from low to high concentration, requiring cellular energy.",
    subtopic: "Diffusion"
  },
  {
    question: "Two gases placed in the same container will eventually?",
    options: [
      "A. Mix completely by diffusion",
      "B. Remain separated",
      "C. React always",
      "D. Become solid"
    ],
    answer: "A",
    explanation: "Random molecular motion causes the gases to interdiffuse until uniformly mixed.",
    subtopic: "Diffusion"
  },
  {
    question: "The kinetic theory successfully explains?",
    options: [
      "A. Pressure, temperature and gas laws",
      "B. Only the colour of gases",
      "C. Gravitational collapse",
      "D. Nuclear fusion"
    ],
    answer: "A",
    explanation: "Kinetic theory derives pressure, temperature relationships and the gas laws from molecular motion.",
    subtopic: "Kinetic theory"
  }
];

module.exports = questions;
