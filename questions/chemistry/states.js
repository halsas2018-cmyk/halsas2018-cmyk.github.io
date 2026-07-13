const states = [
  {
    "question": "Which state of matter has a fixed volume but no fixed shape?",
    "options": [
      "A. Solid",
      "B. Liquid",
      "C. Gas",
      "D. Plasma"
    ],
    "answer": "B",
    "explanation": "Liquids have a fixed volume but take the shape of their container.",
    "subtopic": "States of matter"
  },
  {
    "question": "The temperature at which a solid becomes a liquid is called the:",
    "options": [
      "A. Boiling point",
      "B. Melting point",
      "C. Freezing point",
      "D. Sublimation point"
    ],
    "answer": "B",
    "explanation": "The melting point is the temperature at which a solid changes to a liquid.",
    "subtopic": "Phase changes"
  },
  {
    "question": "Sublimation is the direct change from:",
    "options": [
      "A. Solid to liquid",
      "B. Liquid to gas",
      "C. Solid to gas",
      "D. Gas to liquid"
    ],
    "answer": "C",
    "explanation": "Sublimation is the direct transition of a solid to a gas without passing through the liquid state.",
    "subtopic": "Sublimation"
  },
  {
    "question": "What happens to the kinetic energy of particles as temperature increases?",
    "options": [
      "A. It decreases",
      "B. It stays the same",
      "C. It increases",
      "D. It becomes zero"
    ],
    "answer": "C",
    "explanation": "As temperature increases, particles gain kinetic energy and move faster.",
    "subtopic": "Kinetic theory"
  },
  {
    "question": "In which state of matter are particles arranged in a regular lattice structure?",
    "options": [
      "A. Solid",
      "B. Liquid",
      "C. Gas",
      "D. All of the above"
    ],
    "answer": "A",
    "explanation": "Solids have a regular, ordered arrangement of particles in a lattice structure.",
    "subtopic": "Solid structure"
  },
  {
    "question": "Which state of matter has the highest kinetic energy?",
    "options": [
      "A. Solid",
      "B. Liquid",
      "C. Gas",
      "D. All have the same"
    ],
    "answer": "C",
    "explanation": "Gases have the highest kinetic energy as particles move freely and rapidly.",
    "subtopic": "Kinetic theory"
  },
  {
    "question": "The process of a liquid changing to a gas at the surface is called:",
    "options": [
      "A. Boiling",
      "B. Evaporation",
      "C. Condensation",
      "D. Sublimation"
    ],
    "answer": "B",
    "explanation": "Evaporation occurs at the surface of a liquid at any temperature.",
    "subtopic": "Evaporation"
  },
  {
    "question": "At what temperature does water boil at standard atmospheric pressure?",
    "options": [
      "A. 0°C",
      "B. 50°C",
      "C. 100°C",
      "D. 200°C"
    ],
    "answer": "C",
    "explanation": "Water boils at 100°C (373 K) at standard atmospheric pressure.",
    "subtopic": "Boiling point"
  },
  {
    "question": "Condensation is the change from:",
    "options": [
      "A. Solid to liquid",
      "B. Liquid to gas",
      "C. Gas to liquid",
      "D. Solid to gas"
    ],
    "answer": "C",
    "explanation": "Condensation is when a gas changes to a liquid.",
    "subtopic": "Condensation"
  },
  {
    "question": "Which of the following is NOT a property of gases?",
    "options": [
      "A. Definite shape",
      "B. Compressible",
      "C. Fill their container",
      "D. Low density"
    ],
    "answer": "A",
    "explanation": "Gases have no definite shape — they take the shape of their container.",
    "subtopic": "Properties of gases"
  },
  {
    "question": "The pressure exerted by a gas is caused by:",
    "options": [
      "A. The mass of the gas",
      "B. Collisions of particles with walls",
      "C. The volume of the gas",
      "D. The density of the gas"
    ],
    "answer": "B",
    "explanation": "Gas pressure is caused by particles colliding with the walls of the container.",
    "subtopic": "Gas pressure"
  },
  {
    "question": "Boyle's Law states that at constant temperature:",
    "options": [
      "A. Volume is inversely proportional to pressure",
      "B. Volume is directly proportional to pressure",
      "C. Volume is proportional to temperature",
      "D. Pressure is constant"
    ],
    "answer": "A",
    "explanation": "Boyle's Law: P × V = constant. As pressure increases, volume decreases.",
    "subtopic": "Boyle's Law"
  },
  {
    "question": "Charles's Law states that at constant pressure:",
    "options": [
      "A. Volume is inversely proportional to temperature",
      "B. Volume is directly proportional to temperature",
      "C. Pressure is inversely proportional to volume",
      "D. Temperature is constant"
    ],
    "answer": "B",
    "explanation": "Charles's Law: V/T = constant. As temperature increases, volume increases.",
    "subtopic": "Charles's Law"
  },
  {
    "question": "The absolute zero temperature is:",
    "options": [
      "A. 0°C",
      "B. -100°C",
      "C. -273°C",
      "D. -373°C"
    ],
    "answer": "C",
    "explanation": "Absolute zero is 0 K = -273°C, the theoretical lowest possible temperature.",
    "subtopic": "Absolute zero"
  },
  {
    "question": "Which of the following has the strongest intermolecular forces?",
    "options": [
      "A. Gas",
      "B. Liquid",
      "C. Solid",
      "D. All are equal"
    ],
    "answer": "C",
    "explanation": "Solids have the strongest intermolecular forces holding particles in fixed positions.",
    "subtopic": "Intermolecular forces"
  },
  {
    "question": "Diffusion is faster in:",
    "options": [
      "A. Solids",
      "B. Liquids",
      "C. Gases",
      "D. All are the same"
    ],
    "answer": "C",
    "explanation": "Diffusion is fastest in gases because particles move freely and rapidly.",
    "subtopic": "Diffusion"
  },
  {
    "question": "The triple point of a substance is the temperature and pressure where:",
    "options": [
      "A. All three states coexist",
      "B. Only solid and liquid coexist",
      "C. Only liquid and gas coexist",
      "D. The substance sublimates"
    ],
    "answer": "A",
    "explanation": "The triple point is where solid, liquid, and gas phases coexist in equilibrium.",
    "subtopic": "Triple point"
  },
  {
    "question": "Which of these is an example of sublimation?",
    "options": [
      "A. Ice melting",
      "B. Water boiling",
      "C. Dry ice turning to gas",
      "D. Water freezing"
    ],
    "answer": "C",
    "explanation": "Dry ice (solid CO2) sublimates directly from solid to gas at room temperature.",
    "subtopic": "Sublimation examples"
  },
  {
    "question": "The boiling point of a liquid increases with:",
    "options": [
      "A. Decreasing pressure",
      "B. Increasing pressure",
      "C. Increasing volume",
      "D. Decreasing temperature"
    ],
    "answer": "B",
    "explanation": "As pressure increases, more energy is needed for boiling, so boiling point increases.",
    "subtopic": "Boiling point"
  },
  {
    "question": "A liquid with weak intermolecular forces will have:",
    "options": [
      "A. A high boiling point",
      "B. A low boiling point",
      "C. A high melting point",
      "D. A high density"
    ],
    "answer": "B",
    "explanation": "Weak intermolecular forces mean less energy is needed to separate particles.",
    "subtopic": "Intermolecular forces"
  },
  {
    "question": "The kinetic theory of matter assumes that particles are:",
    "options": [
      "A. Stationary",
      "B. In constant random motion",
      "C. Attracted to each other only",
      "D. Large and heavy"
    ],
    "answer": "B",
    "explanation": "The kinetic theory states that particles are in constant random motion.",
    "subtopic": "Kinetic theory"
  },
  {
    "question": "When a gas is compressed, its pressure increases because:",
    "options": [
      "A. Particles move faster",
      "B. Particles collide more frequently",
      "C. Temperature increases",
      "D. Mass increases"
    ],
    "answer": "B",
    "explanation": "Compressing a gas reduces volume, increasing collision frequency and thus pressure.",
    "subtopic": "Gas pressure"
  },
  {
    "question": "The process of a solid changing directly to a liquid is called:",
    "options": [
      "A. Sublimation",
      "B. Melting",
      "C. Freezing",
      "D. Condensation"
    ],
    "answer": "B",
    "explanation": "Melting is the change from solid to liquid at the melting point.",
    "subtopic": "Melting"
  },
  {
    "question": "Which gas law relates pressure, volume, and temperature?",
    "options": [
      "A. Boyle's Law",
      "B. Charles's Law",
      "C. Combined Gas Law",
      "D. Avogadro's Law"
    ],
    "answer": "C",
    "explanation": "The Combined Gas Law: P₁V₁/T₁ = P₂V₂/T₂ relates all three variables.",
    "subtopic": "Gas laws"
  },
  {
    "question": "The density of a gas increases when:",
    "options": [
      "A. Temperature increases at constant pressure",
      "B. Pressure increases at constant temperature",
      "C. Volume increases",
      "D. The gas expands"
    ],
    "answer": "B",
    "explanation": "Increasing pressure compresses gas, increasing its density.",
    "subtopic": "Gas density"
  },
  {
    "question": "Which of the following substances has the highest melting point?",
    "options": [
      "A. Oxygen",
      "B. Iron",
      "C. Water",
      "D. Carbon dioxide"
    ],
    "answer": "B",
    "explanation": "Iron has a much higher melting point (1538°C) compared to the others.",
    "subtopic": "Melting point"
  },
  {
    "question": "Evaporation causes cooling because:",
    "options": [
      "A. Heat is absorbed from the surroundings",
      "B. Heat is released",
      "C. Temperature increases",
      "D. Pressure decreases"
    ],
    "answer": "A",
    "explanation": "Evaporation absorbs heat energy from the surroundings, causing cooling.",
    "subtopic": "Evaporation"
  },
  {
    "question": "The critical temperature of a gas is:",
    "options": [
      "A. The temperature at which it freezes",
      "B. The temperature above which it cannot be liquefied",
      "C. The boiling point",
      "D. The melting point"
    ],
    "answer": "B",
    "explanation": "Above the critical temperature, a gas cannot be liquefied regardless of pressure.",
    "subtopic": "Critical temperature"
  },
  {
    "question": "Which of the following is an amorphous solid?",
    "options": [
      "A. Diamond",
      "B. Salt",
      "C. Glass",
      "D. Iron"
    ],
    "answer": "C",
    "explanation": "Glass is amorphous — its particles are not arranged in a regular lattice.",
    "subtopic": "Amorphous solids"
  },
  {
    "question": "Crystalline solids differ from amorphous solids because they:",
    "options": [
      "A. Have no definite melting point",
      "B. Have a regular repeating structure",
      "C. Are always transparent",
      "D. Are soft"
    ],
    "answer": "B",
    "explanation": "Crystalline solids have a regular, repeating 3D structure (lattice).",
    "subtopic": "Crystalline solids"
  },
  {
    "question": "Which intermolecular force is the weakest?",
    "options": [
      "A. Ionic bonds",
      "B. Covalent bonds",
      "C. Van der Waals forces",
      "D. Hydrogen bonds"
    ],
    "answer": "C",
    "explanation": "Van der Waals forces (London dispersion forces) are the weakest intermolecular forces.",
    "subtopic": "Intermolecular forces"
  },
  {
    "question": "Hydrogen bonding occurs between molecules containing:",
    "options": [
      "A. H bonded to C",
      "B. H bonded to N, O, or F",
      "C. H bonded to Cl",
      "D. H bonded to S"
    ],
    "answer": "B",
    "explanation": "Hydrogen bonds form when hydrogen is bonded to highly electronegative atoms N, O, or F.",
    "subtopic": "Hydrogen bonding"
  },
  {
    "question": "Which of the following has hydrogen bonding?",
    "options": [
      "A. CH4",
      "B. H2O",
      "C. HCl",
      "D. H2S"
    ],
    "answer": "B",
    "explanation": "Water (H2O) has hydrogen bonding between molecules, giving it unusual properties.",
    "subtopic": "Hydrogen bonding"
  },
  {
    "question": "The surface tension of a liquid is caused by:",
    "options": [
      "A. Cohesive forces between molecules",
      "B. Adhesive forces",
      "C. Gravity",
      "D. Temperature"
    ],
    "answer": "A",
    "explanation": "Surface tension arises from cohesive forces between molecules at the surface.",
    "subtopic": "Surface tension"
  },
  {
    "question": "Viscosity of a liquid increases with:",
    "options": [
      "A. Decreasing temperature",
      "B. Increasing temperature",
      "C. Decreasing pressure",
      "D. Increasing volume"
    ],
    "answer": "A",
    "explanation": "Viscosity increases as temperature decreases because particles move more slowly.",
    "subtopic": "Viscosity"
  },
  {
    "question": "In a gas, particles are:",
    "options": [
      "A. Closely packed and vibrating",
      "B. Far apart and moving freely",
      "C. Fixed in position",
      "D. Packed in a lattice"
    ],
    "answer": "B",
    "explanation": "Gas particles are far apart and move freely in all directions.",
    "subtopic": "Gas structure"
  },
  {
    "question": "The molar volume of an ideal gas at STP is:",
    "options": [
      "A. 22.4 L",
      "B. 24.0 L",
      "C. 12.0 L",
      "D. 44.8 L"
    ],
    "answer": "A",
    "explanation": "At STP (0°C and 1 atm), one mole of ideal gas occupies 22.4 L.",
    "subtopic": "Molar volume"
  },
  {
    "question": "STP stands for:",
    "options": [
      "A. Standard Temperature and Pressure",
      "B. Standard Time and Pressure",
      "C. Standard Temperature and Phase",
      "D. Solid, Temperature, Pressure"
    ],
    "answer": "A",
    "explanation": "STP = Standard Temperature (0°C or 273 K) and Pressure (1 atm).",
    "subtopic": "STP"
  },
  {
    "question": "Real gases deviate from ideal behavior at:",
    "options": [
      "A. Low temperature and high pressure",
      "B. High temperature and low pressure",
      "C. Low pressure only",
      "D. High temperature only"
    ],
    "answer": "A",
    "explanation": "Real gases deviate from ideal behavior at low temperature and high pressure.",
    "subtopic": "Real gases"
  },
  {
    "question": "The process of a liquid becoming a solid is called:",
    "options": [
      "A. Melting",
      "B. Freezing",
      "C. Condensation",
      "D. Sublimation"
    ],
    "answer": "B",
    "explanation": "Freezing is the change from liquid to solid.",
    "subtopic": "Freezing"
  },
  {
    "question": "Which of the following statements is true about diffusion?",
    "options": [
      "A. It occurs only in gases",
      "B. It occurs fastest in solids",
      "C. It occurs from high to low concentration",
      "D. It is independent of temperature"
    ],
    "answer": "C",
    "explanation": "Diffusion is the net movement of particles from regions of high to low concentration.",
    "subtopic": "Diffusion"
  },
  {
    "question": "Brownian motion provides evidence for:",
    "options": [
      "A. The existence of atoms and molecules",
      "B. The density of particles",
      "C. The mass of particles",
      "D. The charge of particles"
    ],
    "answer": "A",
    "explanation": "Brownian motion supports the kinetic theory and existence of atoms.",
    "subtopic": "Brownian motion"
  },
  {
    "question": "A gas that follows all gas laws exactly is called:",
    "options": [
      "A. A real gas",
      "B. An ideal gas",
      "C. A noble gas",
      "D. A perfect gas"
    ],
    "answer": "B",
    "explanation": "An ideal gas perfectly obeys all gas laws under all conditions.",
    "subtopic": "Ideal gases"
  },
  {
    "question": "The average kinetic energy of gas particles is proportional to:",
    "options": [
      "A. Pressure",
      "B. Volume",
      "C. Temperature in Kelvin",
      "D. Number of particles"
    ],
    "answer": "C",
    "explanation": "Average kinetic energy is directly proportional to absolute temperature (K).",
    "subtopic": "Kinetic theory"
  },
  {
    "question": "Which of the following has the highest vapor pressure at a given temperature?",
    "options": [
      "A. Water",
      "B. Ethanol",
      "C. Mercury",
      "D. Glycerol"
    ],
    "answer": "B",
    "explanation": "Ethanol has weak intermolecular forces and thus high vapor pressure.",
    "subtopic": "Vapor pressure"
  },
  {
    "question": "Boiling occurs when vapor pressure equals:",
    "options": [
      "A. Atmospheric pressure",
      "B. Zero",
      "C. Half of atmospheric pressure",
      "D. Twice atmospheric pressure"
    ],
    "answer": "A",
    "explanation": "Boiling occurs when the vapor pressure equals the external (atmospheric) pressure.",
    "subtopic": "Boiling"
  },
  {
    "question": "Which of the following is NOT a characteristic of liquids?",
    "options": [
      "A. Definite volume",
      "B. Indefinite shape",
      "C. Incompressible",
      "D. Particles far apart"
    ],
    "answer": "D",
    "explanation": "Liquids have closely packed particles, not far apart like gases.",
    "subtopic": "Properties of liquids"
  },
  {
    "question": "Capillary action is due to:",
    "options": [
      "A. Cohesive forces only",
      "B. Adhesive forces only",
      "C. Both cohesive and adhesive forces",
      "D. Gravity"
    ],
    "answer": "C",
    "explanation": "Capillary action results from the balance of cohesive and adhesive forces.",
    "subtopic": "Capillary action"
  },
  {
    "question": "The meniscus of water in a glass tube is concave because:",
    "options": [
      "A. Cohesive forces are stronger than adhesive",
      "B. Adhesive forces are stronger than cohesive",
      "C. Both forces are equal",
      "D. Gravity causes it"
    ],
    "answer": "B",
    "explanation": "Water adheres to glass more strongly than it coheres to itself, creating a concave meniscus.",
    "subtopic": "Meniscus"
  },
  {
    "question": "Which of the following changes is endothermic?",
    "options": [
      "A. Freezing",
      "B. Condensation",
      "C. Sublimation",
      "D. Deposition"
    ],
    "answer": "C",
    "explanation": "Sublimation requires energy input (endothermic) to overcome intermolecular forces.",
    "subtopic": "Energy changes"
  },
  {
    "question": "Deposition is the change from:",
    "options": [
      "A. Solid to gas",
      "B. Gas to solid",
      "C. Liquid to gas",
      "D. Solid to liquid"
    ],
    "answer": "B",
    "explanation": "Deposition is the direct change from gas to solid (the reverse of sublimation).",
    "subtopic": "Deposition"
  }
];

module.exports = states;
