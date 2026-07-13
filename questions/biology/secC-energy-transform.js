// biology — Energy Transformation in Nature
const questions = [
  // ---- Food chains ----
  {
    question: "In the food chain grass → grasshopper → frog → snake, the grasshopper is a...",
    options: [
      "A. Producer",
      "B. Primary consumer",
      "C. Secondary consumer",
      "D. Decomposer"
    ],
    answer: "B",
    explanation: "The grasshopper eats the producer (grass), so it is a primary (first-level) consumer.",
    subtopic: "Food chains"
  },
  {
    question: "The first organism in any food chain is usually a...",
    options: [
      "A. Carnivore",
      "B. Herbivore",
      "C. Producer",
      "D. Decomposer"
    ],
    answer: "C",
    explanation: "Food chains begin with producers (autotrophs) that make their own food from sunlight.",
    subtopic: "Food chains"
  },
  {
    question: "In the chain phytoplankton → zooplankton → small fish → tuna, the tuna occupies which trophic position?",
    options: [
      "A. First trophic level",
      "B. Second trophic level",
      "C. Third trophic level",
      "D. Fourth trophic level"
    ],
    answer: "D",
    explanation: "Tuna is a tertiary/quaternary consumer at the top of this four-step chain (level 4).",
    subtopic: "Food chains"
  },
  {
    question: "A food chain always begins with...",
    options: [
      "A. A herbivore",
      "B. A carnivore",
      "C. An autotroph",
      "D. A decomposer"
    ],
    answer: "C",
    explanation: "Autotrophs (producers) capture energy first, so every food chain starts with them.",
    subtopic: "Food chains"
  },
  {
    question: "Which of the following is a correct terrestrial food chain?",
    options: [
      "A. Lion → deer → grass → bacteria",
      "B. Grass → deer → lion",
      "C. Grass → lion → deer",
      "D. Bacteria → grass → deer → lion"
    ],
    answer: "B",
    explanation: "Energy flows producer → herbivore → carnivore, so grass → deer → lion is the correct order.",
    subtopic: "Food chains"
  },
  {
    question: "In a food chain, energy flows from...",
    options: [
      "A. Consumers to producers",
      "B. Producers to consumers",
      "C. Decomposers to producers",
      "D. Tertiary to primary consumers"
    ],
    answer: "B",
    explanation: "Energy enters via producers and is passed upward to successive consumers.",
    subtopic: "Food chains"
  },
  {
    question: "The organism that feeds directly on producers is called the...",
    options: [
      "A. Primary consumer",
      "B. Secondary consumer",
      "C. Producer",
      "D. Tertiary consumer"
    ],
    answer: "A",
    explanation: "Primary consumers (herbivores) eat producers directly.",
    subtopic: "Food chains"
  },
  {
    question: "In the aquatic chain algae → tadpole → fish → heron, the heron is a...",
    options: [
      "A. Producer",
      "B. Primary consumer",
      "C. Secondary consumer",
      "D. Tertiary consumer"
    ],
    answer: "D",
    explanation: "The heron is the fourth link, making it a tertiary consumer (level 4).",
    subtopic: "Food chains"
  },
  {
    question: "A hawk eating a snake that ate a mouse that ate seeds is an example of a...",
    options: [
      "A. Food web",
      "B. Energy pyramid",
      "C. Food chain",
      "D. Nutrient cycle"
    ],
    answer: "C",
    explanation: "It is a single, linear sequence of feeding relationships — a food chain.",
    subtopic: "Food chains"
  },
  {
    question: "Decomposers in a food chain function to...",
    options: [
      "A. Produce food from sunlight",
      "B. Break down dead organisms and return nutrients to the soil",
      "C. Compete with producers",
      "D. Fix atmospheric nitrogen only"
    ],
    answer: "B",
    explanation: "Decomposers recycle dead matter, returning mineral nutrients to the ecosystem.",
    subtopic: "Food chains"
  },

  // ---- Food webs ----
  {
    question: "A food web is best described as...",
    options: [
      "A. Interconnected food chains in an ecosystem",
      "B. A single linear feeding sequence",
      "C. A pyramid of numbers",
      "D. The path of water in nature"
    ],
    answer: "A",
    explanation: "A food web is the network formed when many food chains interconnect.",
    subtopic: "Food webs"
  },
  {
    question: "Compared to a food chain, a food web...",
    options: [
      "A. Has only one path of energy",
      "B. Shows many feeding relationships and is more stable",
      "C. Excludes decomposers",
      "D. Begins with a carnivore"
    ],
    answer: "B",
    explanation: "Multiple links make a food web more stable than a single chain.",
    subtopic: "Food webs"
  },
  {
    question: "The main advantage of a food web over a food chain is that it...",
    options: [
      "A. Is simpler to draw",
      "B. Uses less energy than a chain",
      "C. Provides stability because organisms have alternative food sources",
      "D. Eliminates decomposers"
    ],
    answer: "C",
    explanation: "Alternative food sources mean the loss of one species need not collapse the system.",
    subtopic: "Food webs"
  },
  {
    question: "In a food web, if one species disappears, other species...",
    options: [
      "A. Always go extinct",
      "B. May survive because they have alternative food sources",
      "C. Immediately become producers",
      "D. Stop needing energy"
    ],
    answer: "B",
    explanation: "Because feeding links are multiple, species can switch to other foods.",
    subtopic: "Food webs"
  },
  {
    question: "Which statement about a food web is true?",
    options: [
      "A. Producers are at the top",
      "B. Arrows show the direction of energy transfer",
      "C. Energy flows in a single straight line",
      "D. Consumers never eat other consumers"
    ],
    answer: "B",
    explanation: "Arrows in a web point from the eaten organism to the eater, showing energy flow.",
    subtopic: "Food webs"
  },
  {
    question: "A food web differs from a food chain because it...",
    options: [
      "A. Contains no producers",
      "B. Only includes decomposers",
      "C. Contains multiple interconnected feeding pathways",
      "D. Transfers energy upward only"
    ],
    answer: "C",
    explanation: "The defining feature of a web is its many branching, overlapping pathways.",
    subtopic: "Food webs"
  },
  {
    question: "In a grassland food web, a snake may eat both frogs and mice. This shows that...",
    options: [
      "A. Food webs have branching feeding relationships",
      "B. Snakes are producers",
      "C. Energy cannot flow",
      "D. There is only one food chain"
    ],
    answer: "A",
    explanation: "One species feeding at several points illustrates the branching nature of a web.",
    subtopic: "Food webs"
  },
  {
    question: "The arrows in a food web represent...",
    options: [
      "A. The direction of heat loss to space",
      "B. The movement of decomposers",
      "C. The direction of energy/nutrient flow from eaten to eater",
      "D. The water cycle"
    ],
    answer: "C",
    explanation: "Each arrow points from prey to predator, indicating who eats whom.",
    subtopic: "Food webs"
  },
  {
    question: "Removing a top predator from a food web often causes...",
    options: [
      "A. Increased stability",
      "B. A trophic cascade and population imbalance",
      "C. No change at all",
      "D. Producers to disappear completely"
    ],
    answer: "B",
    explanation: "Top-down control is lost, so lower-level populations can surge and destabilise the web.",
    subtopic: "Food webs"
  },
  {
    question: "An organism that appears in several links of a food web is usually a...",
    options: [
      "A. Specialist with one food source",
      "B. Producer only",
      "C. Decomposer only",
      "D. Generalist feeding at multiple trophic levels"
    ],
    answer: "D",
    explanation: "Generalists eat across several links, so they appear at more than one trophic level.",
    subtopic: "Food webs"
  },

  // ---- Trophic levels ----
  {
    question: "The first trophic level is occupied by...",
    options: [
      "A. Primary consumers",
      "B. Secondary consumers",
      "C. Producers",
      "D. Decomposers"
    ],
    answer: "C",
    explanation: "Producers form trophic level 1, the base of the energy pyramid.",
    subtopic: "Trophic levels"
  },
  {
    question: "Primary consumers occupy which trophic level?",
    options: [
      "A. First",
      "B. Second",
      "C. Third",
      "D. Fourth"
    ],
    answer: "B",
    explanation: "Herbivores eating producers sit at trophic level 2.",
    subtopic: "Trophic levels"
  },
  {
    question: "A secondary consumer is at trophic level...",
    options: [
      "A. 1",
      "B. 2",
      "C. 3",
      "D. 4"
    ],
    answer: "C",
    explanation: "A carnivore that eats primary consumers is at level 3.",
    subtopic: "Trophic levels"
  },
  {
    question: "Tertiary consumers are found at trophic level...",
    options: [
      "A. 2",
      "B. 3",
      "C. 4",
      "D. 1"
    ],
    answer: "C",
    explanation: "Tertiary consumers (feeding on secondary consumers) occupy level 4.",
    subtopic: "Trophic levels"
  },
  {
    question: "Organisms at the same trophic level...",
    options: [
      "A. Always eat each other",
      "B. Occupy the same position in the energy-flow sequence",
      "C. Are all producers",
      "D. Are all decomposers"
    ],
    answer: "B",
    explanation: "They share the same feeding position, e.g. all herbivores are level 2.",
    subtopic: "Trophic levels"
  },
  {
    question: "Which group is always at trophic level 1?",
    options: [
      "A. Herbivores",
      "B. Carnivores",
      "C. Autotrophs (plants/algae)",
      "D. Detritivores"
    ],
    answer: "C",
    explanation: "Only autotrophs capture energy from sunlight and form the base level.",
    subtopic: "Trophic levels"
  },
  {
    question: "A lion eats a zebra that ate grass. The lion is at trophic level...",
    options: [
      "A. 1",
      "B. 2",
      "C. 3",
      "D. 4"
    ],
    answer: "C",
    explanation: "Grass (1) → zebra (2) → lion (3), so the lion is at level 3.",
    subtopic: "Trophic levels"
  },
  {
    question: "The number of trophic levels in most ecosystems is limited because...",
    options: [
      "A. Energy is lost at each transfer",
      "B. Producers are scarce",
      "C. Consumers are too few",
      "D. Decomposers take all the energy"
    ],
    answer: "A",
    explanation: "About 90% of energy is lost per step, so little remains for higher levels.",
    subtopic: "Trophic levels"
  },
  {
    question: "Omnivores can occupy...",
    options: [
      "A. Only trophic level 1",
      "B. Only trophic level 4",
      "C. More than one trophic level depending on diet",
      "D. No trophic level"
    ],
    answer: "C",
    explanation: "An omnivore may eat plants (level 2) or animals (higher levels).",
    subtopic: "Trophic levels"
  },
  {
    question: "In a trophic pyramid, biomass generally...",
    options: [
      "A. Increases upward",
      "B. Decreases from producers to top consumers",
      "C. Stays equal at every level",
      "D. Is greatest at the top"
    ],
    answer: "B",
    explanation: "Less living matter is supported at each higher level due to energy loss.",
    subtopic: "Trophic levels"
  },

  // ---- Energy flow ----
  {
    question: "On average, what percentage of energy is transferred from one trophic level to the next?",
    options: [
      "A. 90%",
      "B. 50%",
      "C. 10%",
      "D. 100%"
    ],
    answer: "C",
    explanation: "Roughly 10% passes on; the rest is lost, known as the 10% law.",
    subtopic: "Energy flow"
  },
  {
    question: "The '10% law' of energy transfer in ecosystems was proposed by...",
    options: [
      "A. Mendel",
      "B. Darwin",
      "C. Lindeman",
      "D. Pasteur"
    ],
    answer: "C",
    explanation: "Raymond Lindeman described the ~10% ecological efficiency between levels.",
    subtopic: "Energy flow"
  },
  {
    question: "Most energy is lost between trophic levels mainly in the form of...",
    options: [
      "A. Sound",
      "B. Electricity",
      "C. Light",
      "D. Heat (respiration/metabolism)"
    ],
    answer: "D",
    explanation: "Metabolic processes release energy as heat, which cannot be reused by organisms.",
    subtopic: "Energy flow"
  },
  {
    question: "Energy flow in an ecosystem is...",
    options: [
      "A. Recyclable",
      "B. Cyclic",
      "C. Unidirectional (one-way)",
      "D. Stored forever"
    ],
    answer: "C",
    explanation: "Energy enters as light and leaves as heat; it moves in one direction only.",
    subtopic: "Energy flow"
  },
  {
    question: "Why does available energy decrease up the food chain?",
    options: [
      "A. Each level loses about 90% as heat/metabolism",
      "B. Producers store extra energy",
      "C. Consumers create new energy",
      "D. Decomposers add energy"
    ],
    answer: "A",
    explanation: "Most energy is expended in life processes and lost as heat at every step.",
    subtopic: "Energy flow"
  },
  {
    question: "The second law of thermodynamics explains energy loss because...",
    options: [
      "A. Energy is created at each level",
      "B. Trophic levels gain energy",
      "C. Some energy becomes unavailable (heat) at each transfer",
      "D. Energy is continuously recycled"
    ],
    answer: "C",
    explanation: "Each transfer increases disorder, dissipating usable energy as heat.",
    subtopic: "Energy flow"
  },
  {
    question: "The ultimate source of energy for nearly all ecosystems is the...",
    options: [
      "A. Soil",
      "B. Moon",
      "C. Sun",
      "D. Decomposers"
    ],
    answer: "C",
    explanation: "Solar radiation drives photosynthesis, the entry point of energy.",
    subtopic: "Energy flow"
  },
  {
    question: "Unlike nutrients, energy in an ecosystem...",
    options: [
      "A. Cycles continuously",
      "B. Cannot be recycled and must be supplied continuously",
      "C. Increases with higher levels",
      "D. Is stored permanently in decomposers"
    ],
    answer: "B",
    explanation: "Matter cycles, but energy flows through once and must be replenished by the sun.",
    subtopic: "Energy flow"
  },
  {
    question: "A pyramid of energy shows...",
    options: [
      "A. More energy at the top",
      "B. Equal energy at all levels",
      "C. Energy decreasing from producers to consumers",
      "D. Energy increasing upward"
    ],
    answer: "C",
    explanation: "Less usable energy remains at each successive level.",
    subtopic: "Energy flow"
  },
  {
    question: "The amount of usable energy available to the next trophic level is about...",
    options: [
      "A. One-tenth",
      "B. One-half",
      "C. All of it",
      "D. Double the previous level"
    ],
    answer: "A",
    explanation: "Only about 10% (one-tenth) is transferred upward on average.",
    subtopic: "Energy flow"
  },

  // ---- Photosynthesis and respiration ----
  {
    question: "Photosynthesis converts light energy into...",
    options: [
      "A. Chemical energy stored in glucose",
      "B. Kinetic energy",
      "C. Heat only",
      "D. Electrical energy"
    ],
    answer: "A",
    explanation: "Light energy is fixed as chemical energy in the bonds of glucose.",
    subtopic: "Photosynthesis and respiration"
  },
  {
    question: "The overall process of photosynthesis produces...",
    options: [
      "A. Carbon dioxide and water",
      "B. Glucose and oxygen",
      "C. Nitrogen and oxygen",
      "D. Fat and protein only"
    ],
    answer: "B",
    explanation: "Using CO2 and water, plants make glucose and release oxygen.",
    subtopic: "Photosynthesis and respiration"
  },
  {
    question: "The primary site of photosynthesis in plants is the...",
    options: [
      "A. Chloroplast",
      "B. Root",
      "C. Mitochondrion",
      "D. Stomata"
    ],
    answer: "A",
    explanation: "Chloroplasts contain chlorophyll and carry out photosynthesis.",
    subtopic: "Photosynthesis and respiration"
  },
  {
    question: "During photosynthesis, plants take in...",
    options: [
      "A. Oxygen and glucose",
      "B. Carbon dioxide and water",
      "C. Nitrogen gas",
      "D. Heat and light only"
    ],
    answer: "B",
    explanation: "Raw materials are carbon dioxide (from air) and water (from soil).",
    subtopic: "Photosynthesis and respiration"
  },
  {
    question: "Respiration releases energy by breaking down...",
    options: [
      "A. Glucose",
      "B. Oxygen",
      "C. Carbon dioxide",
      "D. Water"
    ],
    answer: "A",
    explanation: "Glucose is oxidised in respiration to release usable energy.",
    subtopic: "Photosynthesis and respiration"
  },
  {
    question: "The organelle where most respiration occurs is the...",
    options: [
      "A. Mitochondrion",
      "B. Chloroplast",
      "C. Nucleus",
      "D. Vacuole"
    ],
    answer: "A",
    explanation: "Mitochondria are the 'powerhouses' where ATP is generated.",
    subtopic: "Photosynthesis and respiration"
  },
  {
    question: "Photosynthesis and respiration are linked because respiration uses the...",
    options: [
      "A. Light directly",
      "B. Soil minerals only",
      "C. Oxygen and glucose produced by photosynthesis",
      "D. Proteins only"
    ],
    answer: "C",
    explanation: "The products of photosynthesis (glucose, O2) are the reactants of respiration.",
    subtopic: "Photosynthesis and respiration"
  },
  {
    question: "Cellular respiration releases energy in the usable form of...",
    options: [
      "A. ATP",
      "B. Light",
      "C. New glucose",
      "D. Oxygen"
    ],
    answer: "A",
    explanation: "Energy is captured in ATP, the cell's energy currency.",
    subtopic: "Photosynthesis and respiration"
  },
  {
    question: "Unlike photosynthesis, respiration occurs...",
    options: [
      "A. Only in plants",
      "B. Only in sunlight",
      "C. In nearly all living cells",
      "D. Only inside chloroplasts"
    ],
    answer: "C",
    explanation: "All living cells respire to obtain energy, day and night.",
    subtopic: "Photosynthesis and respiration"
  },
  {
    question: "The net effect of photosynthesis is to...",
    options: [
      "A. Use up oxygen",
      "B. Produce carbon dioxide",
      "C. Store energy in organic molecules",
      "D. Release all energy as heat"
    ],
    answer: "C",
    explanation: "It captures and stores solar energy in the chemical bonds of food.",
    subtopic: "Photosynthesis and respiration"
  }
];

module.exports = questions;
