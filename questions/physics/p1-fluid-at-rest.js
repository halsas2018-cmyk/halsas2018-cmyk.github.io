// physics — Fluids at Rest
const questions = [
  {
    question: "Which quantity is defined as mass per unit volume?",
    options: [
      "A. Relative density",
      "B. Density",
      "C. Pressure",
      "D. Upthrust"
    ],
    answer: "B",
    explanation: "Density is mass divided by volume (ρ = m/V). Relative density is a ratio, while pressure is force per unit area.",
    subtopic: "Volume/density/relative density"
  },
  {
    question: "A block has mass 200 g and volume 40 cm³. What is its density?",
    options: [
      "A. 5 g/cm³",
      "B. 8 g/cm³",
      "C. 0.2 g/cm³",
      "D. 50 g/cm³"
    ],
    answer: "A",
    explanation: "Density = mass/volume = 200 g / 40 cm³ = 5 g/cm³.",
    subtopic: "Volume/density/relative density"
  },
  {
    question: "The relative density of a liquid is the ratio of its density to the density of",
    options: [
      "A. mercury",
      "B. alcohol",
      "C. water",
      "D. air"
    ],
    answer: "C",
    explanation: "Relative density is the ratio of a substance's density to the density of water (usually at 4 °C).",
    subtopic: "Volume/density/relative density"
  },
  {
    question: "A liquid has density 800 kg/m³. What is its relative density?",
    options: [
      "A. 800",
      "B. 0.8",
      "C. 80",
      "D. 8.0"
    ],
    answer: "B",
    explanation: "Relative density = ρ_liquid / ρ_water = 800 / 1000 = 0.8. It has no unit.",
    subtopic: "Volume/density/relative density"
  },
  {
    question: "The density of water is 1 g/cm³. Express this in kg/m³.",
    options: [
      "A. 10 kg/m³",
      "B. 100 kg/m³",
      "C. 1000 kg/m³",
      "D. 10 000 kg/m³"
    ],
    answer: "C",
    explanation: "1 g/cm³ = 1000 kg/m³ because 1 g = 0.001 kg and 1 cm³ = 1×10⁻⁶ m³.",
    subtopic: "Volume/density/relative density"
  },
  {
    question: "A body of mass 500 g occupies a volume of 250 cm³. Its relative density is",
    options: [
      "A. 1",
      "B. 0.5",
      "C. 2",
      "D. 4"
    ],
    answer: "C",
    explanation: "Density = 500/250 = 2 g/cm³; relative density = 2 / 1 = 2 (since water is 1 g/cm³).",
    subtopic: "Volume/density/relative density"
  },
  {
    question: "What is the volume of 40 g of a liquid of density 0.8 g/cm³?",
    options: [
      "A. 32 cm³",
      "B. 50 cm³",
      "C. 40.8 cm³",
      "D. 80 cm³"
    ],
    answer: "B",
    explanation: "Volume = mass/density = 40 / 0.8 = 50 cm³.",
    subtopic: "Volume/density/relative density"
  },
  {
    question: "A metal has a density of 2700 kg/m³. Its density in g/cm³ is",
    options: [
      "A. 27",
      "B. 2.7",
      "C. 0.27",
      "D. 270"
    ],
    answer: "B",
    explanation: "Divide by 1000 to convert kg/m³ to g/cm³: 2700 / 1000 = 2.7 g/cm³.",
    subtopic: "Volume/density/relative density"
  },
  {
    question: "Relative density has no unit because it is",
    options: [
      "A. always less than 1",
      "B. a ratio of two densities",
      "C. measured in water only",
      "D. a force"
    ],
    answer: "B",
    explanation: "It is the ratio of the same kind of quantity (density/density), so the units cancel.",
    subtopic: "Volume/density/relative density"
  },
  {
    question: "What is the mass of 2 litres of a liquid of density 1.25 g/cm³? (1 litre = 1000 cm³)",
    options: [
      "A. 1250 g",
      "B. 2500 g",
      "C. 2000 g",
      "D. 625 g"
    ],
    answer: "B",
    explanation: "Mass = density × volume = 1.25 × 2000 = 2500 g.",
    subtopic: "Volume/density/relative density"
  },
  {
    question: "What happens to the pressure in a liquid at rest as the depth increases?",
    options: [
      "A. It decreases",
      "B. It remains constant",
      "C. It increases",
      "D. It becomes zero"
    ],
    answer: "C",
    explanation: "Hydrostatic pressure p = ρgh increases linearly with depth h.",
    subtopic: "Pressure in fluids"
  },
  {
    question: "The pressure at a depth h in a liquid of density ρ is given by",
    options: [
      "A. ρg/h",
      "B. ρgh",
      "C. ρ/hg",
      "D. mgh"
    ],
    answer: "B",
    explanation: "Hydrostatic pressure is p = ρgh, where g is acceleration due to gravity.",
    subtopic: "Pressure in fluids"
  },
  {
    question: "A fluid transmits pressure equally in all directions. This is stated by",
    options: [
      "A. Archimedes' principle",
      "B. Pascal's principle",
      "C. Boyle's law",
      "D. Newton's third law"
    ],
    answer: "B",
    explanation: "Pascal's principle states that pressure applied to an enclosed fluid is transmitted equally in all directions.",
    subtopic: "Pressure in fluids"
  },
  {
    question: "The SI unit of pressure is",
    options: [
      "A. Nm",
      "B. N/m²",
      "C. kg/m³",
      "D. J"
    ],
    answer: "B",
    explanation: "Pressure is force per unit area, so its SI unit is N/m², also called the pascal (Pa).",
    subtopic: "Pressure in fluids"
  },
  {
    question: "Calculate the pressure at the bottom of a 10 m column of water. (ρ = 1000 kg/m³, g = 10 m/s²)",
    options: [
      "A. 10 000 Pa",
      "B. 100 000 Pa",
      "C. 1 000 Pa",
      "D. 1 000 000 Pa"
    ],
    answer: "B",
    explanation: "p = ρgh = 1000 × 10 × 10 = 100 000 Pa.",
    subtopic: "Pressure in fluids"
  },
  {
    question: "Atmospheric pressure is caused by the",
    options: [
      "A. weight of the air above",
      "B. rotation of the earth",
      "C. moon's gravity",
      "D. temperature of air"
    ],
    answer: "A",
    explanation: "Atmospheric pressure results from the weight of the column of air above a surface.",
    subtopic: "Pressure in fluids"
  },
  {
    question: "For a given liquid, the pressure at a point depends on the",
    options: [
      "A. shape of the container",
      "B. total volume of liquid",
      "C. depth and density of liquid",
      "D. surface area only"
    ],
    answer: "C",
    explanation: "p = ρgh depends only on depth and liquid density, not on container shape or total volume.",
    subtopic: "Pressure in fluids"
  },
  {
    question: "A hydraulic press works on the principle of",
    options: [
      "A. Archimedes",
      "B. flotation",
      "C. Pascal",
      "D. conservation of energy"
    ],
    answer: "C",
    explanation: "It uses Pascal's principle: pressure applied to a small piston is transmitted to a larger piston, multiplying force.",
    subtopic: "Pressure in fluids"
  },
  {
    question: "In communicating vessels containing the same liquid at rest, the pressure at the same horizontal level is",
    options: [
      "A. different",
      "B. zero",
      "C. equal",
      "D. maximum at the centre"
    ],
    answer: "C",
    explanation: "At the same depth in a connected liquid at rest, the pressure is equal everywhere.",
    subtopic: "Pressure in fluids"
  },
  {
    question: "What is the gauge pressure at a depth of 5 m in water? (ρ = 1000 kg/m³, g = 10 m/s²)",
    options: [
      "A. 5000 Pa",
      "B. 50 000 Pa",
      "C. 500 Pa",
      "D. 500 000 Pa"
    ],
    answer: "B",
    explanation: "p = ρgh = 1000 × 10 × 5 = 50 000 Pa.",
    subtopic: "Pressure in fluids"
  },
  {
    question: "A body floats in a fluid when",
    options: [
      "A. its weight is greater than the upthrust",
      "B. its weight equals the upthrust",
      "C. it is denser than the fluid",
      "D. the upthrust is zero"
    ],
    answer: "B",
    explanation: "For a floating body the upward upthrust exactly balances its weight, so the net force is zero.",
    subtopic: "Equilibrium of bodies"
  },
  {
    question: "A body sinks in a liquid if its density is",
    options: [
      "A. less than the liquid's density",
      "B. equal to the liquid's density",
      "C. greater than the liquid's density",
      "D. zero"
    ],
    answer: "C",
    explanation: "If the body is denser than the liquid, its weight exceeds the maximum upthrust and it sinks.",
    subtopic: "Equilibrium of bodies"
  },
  {
    question: "For a body totally immersed in a fluid to remain in equilibrium, the",
    options: [
      "A. upthrust must exceed the weight",
      "B. weight must equal the upthrust",
      "C. upthrust must be zero",
      "D. density must be zero"
    ],
    answer: "B",
    explanation: "Equilibrium requires the net force to be zero, so weight equals the upthrust.",
    subtopic: "Equilibrium of bodies"
  },
  {
    question: "A piece of wood floats with part of it above the water surface because",
    options: [
      "A. the upthrust is greater than its weight",
      "B. its density is greater than water",
      "C. upthrust equals its weight and it displaces only its own weight of water",
      "D. wood has no weight"
    ],
    answer: "C",
    explanation: "It displaces a volume of water whose weight equals the wood's weight, leaving part above the surface.",
    subtopic: "Equilibrium of bodies"
  },
  {
    question: "A body in equilibrium in a fluid has a resultant force of",
    options: [
      "A. its weight",
      "B. the upthrust",
      "C. zero",
      "D. twice its weight"
    ],
    answer: "C",
    explanation: "Equilibrium means all forces balance, giving a net force of zero.",
    subtopic: "Equilibrium of bodies"
  },
  {
    question: "A balloon rises in air because the",
    options: [
      "A. air has no pressure",
      "B. upthrust of air on it exceeds its weight",
      "C. weight exceeds upthrust",
      "D. balloon is heavier than air"
    ],
    answer: "B",
    explanation: "The buoyant (upthrust) force from displaced air is greater than the balloon's weight, so it rises.",
    subtopic: "Equilibrium of bodies"
  },
  {
    question: "A submarine changes its depth mainly by",
    options: [
      "A. changing its shape",
      "B. adjusting ballast water to change its average density",
      "C. increasing its volume",
      "D. heating the water"
    ],
    answer: "B",
    explanation: "Taking in or expelling ballast water changes its average density relative to water, altering the upthrust balance.",
    subtopic: "Equilibrium of bodies"
  },
  {
    question: "A body floats in liquid A but sinks in liquid B. This shows that the density of",
    options: [
      "A. A is less than the body",
      "B. B is greater than the body",
      "C. A is greater than the body but B is less than the body",
      "D. both are equal to the body"
    ],
    answer: "C",
    explanation: "It floats where liquid density exceeds body density and sinks where liquid density is less than body density.",
    subtopic: "Equilibrium of bodies"
  },
  {
    question: "The apparent loss of weight of a body immersed in a fluid is equal to the",
    options: [
      "A. weight of the body in air",
      "B. upthrust",
      "C. volume of the body",
      "D. density of the fluid"
    ],
    answer: "B",
    explanation: "Apparent loss of weight equals the upthrust, which is the weight of displaced fluid.",
    subtopic: "Equilibrium of bodies"
  },
  {
    question: "A body of weight 30 N is suspended in water and appears to weigh 20 N. The upthrust is",
    options: [
      "A. 50 N",
      "B. 10 N",
      "C. 30 N",
      "D. 20 N"
    ],
    answer: "B",
    explanation: "Upthrust = loss in weight = 30 N − 20 N = 10 N.",
    subtopic: "Equilibrium of bodies"
  },
  {
    question: "Archimedes' principle states that the upthrust on a body immersed in a fluid equals the",
    options: [
      "A. weight of the body",
      "B. weight of the fluid displaced",
      "C. volume of the body",
      "D. density of the body"
    ],
    answer: "B",
    explanation: "The upthrust equals the weight of the fluid displaced by the immersed part of the body.",
    subtopic: "Archimedes' principle"
  },
  {
    question: "The apparent weight of a body immersed in a fluid is equal to its",
    options: [
      "A. weight plus upthrust",
      "B. weight minus upthrust",
      "C. upthrust only",
      "D. density"
    ],
    answer: "B",
    explanation: "Apparent weight = true weight − upthrust (the buoyant force reduces the measured weight).",
    subtopic: "Archimedes' principle"
  },
  {
    question: "A stone weighs 5 N in air and 3 N when fully immersed in water. The upthrust is",
    options: [
      "A. 8 N",
      "B. 2 N",
      "C. 5 N",
      "D. 3 N"
    ],
    answer: "B",
    explanation: "Upthrust = 5 N − 3 N = 2 N, the apparent loss of weight.",
    subtopic: "Archimedes' principle"
  },
  {
    question: "A body of volume 2×10⁻⁴ m³ is fully immersed in water (ρ = 1000 kg/m³, g = 10 m/s²). The upthrust is",
    options: [
      "A. 2 N",
      "B. 0.2 N",
      "C. 20 N",
      "D. 200 N"
    ],
    answer: "A",
    explanation: "Upthrust = ρgV = 1000 × 10 × 2×10⁻⁴ = 2 N.",
    subtopic: "Archimedes' principle"
  },
  {
    question: "A solid weighs 12 N in air and 9 N in water. Its loss of weight in water is",
    options: [
      "A. 3 N",
      "B. 12 N",
      "C. 9 N",
      "D. 21 N"
    ],
    answer: "A",
    explanation: "Loss of weight = 12 N − 9 N = 3 N, which equals the upthrust.",
    subtopic: "Archimedes' principle"
  },
  {
    question: "Using the weighing method, the relative density of a solid is given by weight in air divided by",
    options: [
      "A. weight in liquid",
      "B. loss of weight in water",
      "C. its volume",
      "D. upthrust in air"
    ],
    answer: "B",
    explanation: "RD = (weight in air) / (loss of weight in water), since loss of weight equals the weight of equal volume of water.",
    subtopic: "Archimedes' principle"
  },
  {
    question: "A solid of weight 12 N has an apparent weight of 9 N in water. Its relative density is",
    options: [
      "A. 4",
      "B. 3",
      "C. 1.33",
      "D. 0.75"
    ],
    answer: "A",
    explanation: "RD = 12 / (12 − 9) = 12 / 3 = 4.",
    subtopic: "Archimedes' principle"
  },
  {
    question: "The upthrust on a body immersed in a fluid acts in which direction?",
    options: [
      "A. Downward",
      "B. Upward",
      "C. Sideways",
      "D. Towards the centre"
    ],
    answer: "B",
    explanation: "Upthrust acts vertically upward, opposing the weight of the body.",
    subtopic: "Archimedes' principle"
  },
  {
    question: "A block of volume 0.002 m³ is fully immersed in water (ρ = 1000 kg/m³, g = 10 m/s²). The upthrust is",
    options: [
      "A. 200 N",
      "B. 20 N",
      "C. 2 N",
      "D. 0.2 N"
    ],
    answer: "B",
    explanation: "Upthrust = ρgV = 1000 × 10 × 0.002 = 20 N.",
    subtopic: "Archimedes' principle"
  },
  {
    question: "Archimedes' principle applies to",
    options: [
      "A. liquids only",
      "B. gases only",
      "C. both liquids and gases",
      "D. solids only"
    ],
    answer: "C",
    explanation: "Buoyancy acts in any fluid, so the principle applies to both liquids and gases.",
    subtopic: "Archimedes' principle"
  },
  {
    question: "The law of flotation states that a floating body displaces its own",
    options: [
      "A. volume of fluid",
      "B. weight of fluid",
      "C. mass of fluid",
      "D. density of fluid"
    ],
    answer: "B",
    explanation: "A floating body displaces a weight of fluid equal to its own weight.",
    subtopic: "Law of flotation"
  },
  {
    question: "A ship is able to float because it",
    options: [
      "A. is made of wood",
      "B. displaces water equal in weight to its own weight",
      "C. has no weight",
      "D. is denser than water"
    ],
    answer: "B",
    explanation: "Although made of dense steel, its hollow shape displaces enough water to balance its weight.",
    subtopic: "Law of flotation"
  },
  {
    question: "Ice floats on water because its density is",
    options: [
      "A. greater than water",
      "B. equal to water",
      "C. less than water",
      "D. zero"
    ],
    answer: "C",
    explanation: "Ice is less dense than water, so it displaces only part of its volume to balance its weight.",
    subtopic: "Law of flotation"
  },
  {
    question: "A body floats with 3/4 of its volume submerged. Its relative density is",
    options: [
      "A. 0.25",
      "B. 0.75",
      "C. 1.33",
      "D. 3"
    ],
    answer: "B",
    explanation: "For a floating body, relative density = fraction submerged = 3/4 = 0.75.",
    subtopic: "Law of flotation"
  },
  {
    question: "A block floats with 60% of its volume submerged in water. Its density is",
    options: [
      "A. 600 kg/m³",
      "B. 6000 kg/m³",
      "C. 400 kg/m³",
      "D. 1000 kg/m³"
    ],
    answer: "A",
    explanation: "Density = fraction submerged × water density = 0.6 × 1000 = 600 kg/m³.",
    subtopic: "Law of flotation"
  },
  {
    question: "A hydrometer is an instrument used to measure the",
    options: [
      "A. depth of liquid",
      "B. relative density of a liquid",
      "C. pressure of a liquid",
      "D. volume of a liquid"
    ],
    answer: "B",
    explanation: "A hydrometer floats to different depths and directly indicates the relative density of a liquid.",
    subtopic: "Law of flotation"
  },
  {
    question: "The bulb of a hydrometer is loaded with lead shot so that it",
    options: [
      "A. floats with its stem vertical",
      "B. sinks completely",
      "C. floats horizontally",
      "D. measures pressure"
    ],
    answer: "A",
    explanation: "The ballast lowers the centre of gravity so the hydrometer floats upright with its stem vertical.",
    subtopic: "Law of flotation"
  },
  {
    question: "In a less dense liquid, the same hydrometer will float",
    options: [
      "A. higher",
      "B. lower (deeper)",
      "C. at the same level",
      "D. sideways"
    ],
    answer: "B",
    explanation: "Less dense liquid requires a larger submerged volume to displace the same weight, so it sinks deeper.",
    subtopic: "Law of flotation"
  },
  {
    question: "A log floats with 1/4 of its volume above water. The density of the log is",
    options: [
      "A. 250 kg/m³",
      "B. 750 kg/m³",
      "C. 1000 kg/m³",
      "D. 1250 kg/m³"
    ],
    answer: "B",
    explanation: "Fraction submerged = 3/4, so density = 0.75 × 1000 = 750 kg/m³.",
    subtopic: "Law of flotation"
  },
  {
    question: "Which statement is true for a body floating in equilibrium?",
    options: [
      "A. Upthrust is greater than weight",
      "B. Upthrust equals weight",
      "C. Weight equals zero",
      "D. Density is zero"
    ],
    answer: "B",
    explanation: "Floating equilibrium requires upthrust to balance weight exactly.",
    subtopic: "Law of flotation"
  },
  {
    question: "A block of wood of density 600 kg/m³ floats in water (1000 kg/m³). The fraction of its volume above the surface is",
    options: [
      "A. 0.4",
      "B. 0.6",
      "C. 0.5",
      "D. 1.0"
    ],
    answer: "A",
    explanation: "Fraction submerged = 600/1000 = 0.6, so fraction above = 1 − 0.6 = 0.4.",
    subtopic: "Law of flotation"
  }
];

module.exports = questions;
