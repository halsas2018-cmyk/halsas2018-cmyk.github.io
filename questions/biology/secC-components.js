// biology — Ecological Components
const questions = [
  // ---------- Producers ----------
  {
    question: "Organisms that manufacture their own food from inorganic substances using sunlight are called?",
    options: [
      "A. Heterotrophs",
      "B. Autotrophs",
      "C. Saprophytes",
      "D. Parasites"
    ],
    answer: "B",
    explanation: "Autotrophs synthesize organic food from CO2 and water using light or chemical energy; green plants and algae are classic examples.",
    subtopic: "Producers"
  },
  {
    question: "In a terrestrial ecosystem, the primary producers are mainly?",
    options: [
      "A. Green plants",
      "B. Bacteria",
      "C. Earthworms",
      "D. Herbivorous insects"
    ],
    answer: "A",
    explanation: "Green plants occupy the first trophic level by carrying out photosynthesis to fix solar energy into biomass.",
    subtopic: "Producers"
  },
  {
    question: "Which pigment is primarily responsible for trapping light energy in producers?",
    options: [
      "A. Haemoglobin",
      "B. Chlorophyll",
      "C. Carotene only",
      "D. Melanin"
    ],
    answer: "B",
    explanation: "Chlorophyll absorbs red and blue light and drives the light-dependent reactions of photosynthesis in producers.",
    subtopic: "Producers"
  },
  {
    question: "Phytoplankton in an aquatic ecosystem function as?",
    options: [
      "A. Secondary consumers",
      "B. Decomposers",
      "C. Primary producers",
      "D. Tertiary consumers"
    ],
    answer: "C",
    explanation: "Phytoplankton are photosynthetic algae that form the base of most aquatic food chains as primary producers.",
    subtopic: "Producers"
  },
  {
    question: "Which of these is an example of a chemosynthetic producer?",
    options: [
      "A. Mango tree",
      "B. Nitrifying bacteria",
      "C. Mushroom",
      "D. Grasshopper"
    ],
    answer: "B",
    explanation: "Nitrifying bacteria obtain energy by oxidizing inorganic compounds and fix carbon without sunlight, a form of chemosynthesis.",
    subtopic: "Producers"
  },
  {
    question: "The energy source used by most producers on Earth is?",
    options: [
      "A. Chemical energy from rocks",
      "B. Sunlight",
      "C. Heat from the Earth's core",
      "D. Electricity"
    ],
    answer: "B",
    explanation: "The vast majority of producers are photoautotrophs that convert solar energy into chemical energy via photosynthesis.",
    subtopic: "Producers"
  },
  {
    question: "During photosynthesis, producers take in carbon dioxide and release?",
    options: [
      "A. Nitrogen",
      "B. Oxygen",
      "C. Methane",
      "D. Hydrogen sulphide"
    ],
    answer: "B",
    explanation: "Photosynthesis uses CO2 and water to produce glucose and releases oxygen as a by-product.",
    subtopic: "Producers"
  },
  {
    question: "Producers are said to occupy which trophic level?",
    options: [
      "A. First trophic level",
      "B. Second trophic level",
      "C. Third trophic level",
      "D. Fourth trophic level"
    ],
    answer: "A",
    explanation: "Because they form the base of the food chain, producers are at the first trophic level.",
    subtopic: "Producers"
  },
  {
    question: "Which statement best describes a producer?",
    options: [
      "A. It feeds on dead organic matter",
      "B. It obtains food by eating other organisms",
      "C. It converts inorganic materials into organic food",
      "D. It lives only inside other organisms"
    ],
    answer: "C",
    explanation: "Producers build organic molecules from inorganic raw materials, forming the foundation of ecosystem energy flow.",
    subtopic: "Producers"
  },
  {
    question: "Lichens on bare rock act as pioneer producers because they can?",
    options: [
      "A. Fix atmospheric nitrogen only",
      "B. Tolerate harsh conditions and photosynthesize",
      "C. Decompose rock into humus directly",
      "D. Feed on fungi"
    ],
    answer: "B",
    explanation: "Lichens are symbiotic algae-fungi associations that photosynthesize and survive extreme habitats, starting primary succession.",
    subtopic: "Producers"
  },

  // ---------- Consumers ----------
  {
    question: "Animals that feed directly on plants are known as?",
    options: [
      "A. Carnivores",
      "B. Herbivores",
      "C. Omnivores",
      "D. Decomposers"
    ],
    answer: "B",
    explanation: "Herbivores eat producers and are therefore primary consumers in a food chain.",
    subtopic: "Consumers"
  },
  {
    question: "A lion eating a zebra occupies the trophic level of a?",
    options: [
      "A. Primary consumer",
      "B. Producer",
      "C. Secondary or tertiary consumer",
      "D. Decomposer"
    ],
    answer: "C",
    explanation: "A lion preys on herbivores and sometimes other carnivores, placing it at the secondary or tertiary consumer level.",
    subtopic: "Consumers"
  },
  {
    question: "Which group of consumers feeds on both plants and animals?",
    options: [
      "A. Carnivores",
      "B. Herbivores",
      "C. Omnivores",
      "D. Detritivores"
    ],
    answer: "C",
    explanation: "Omnivores such as humans and rats consume both plant and animal matter.",
    subtopic: "Consumers"
  },
  {
    question: "Primary consumers are also referred to as?",
    options: [
      "A. First-order consumers",
      "B. Top carnivores",
      "C. Decomposers",
      "D. Autotrophs"
    ],
    answer: "A",
    explanation: "Primary consumers (herbivores) are first-order consumers because they feed directly on producers.",
    subtopic: "Consumers"
  },
  {
    question: "In the food chain grass → grasshopper → frog → snake, the frog is a?",
    options: [
      "A. Primary consumer",
      "B. Secondary consumer",
      "C. Producer",
      "D. Decomposer"
    ],
    answer: "B",
    explanation: "The frog eats the grasshopper (a primary consumer), so it is a secondary consumer.",
    subtopic: "Consumers"
  },
  {
    question: "Carnivores that feed on secondary consumers are called?",
    options: [
      "A. Primary consumers",
      "B. Tertiary consumers",
      "C. Producers",
      "D. Detritivores"
    ],
    answer: "B",
    explanation: "Tertiary consumers occupy the fourth trophic level by preying on secondary consumers.",
    subtopic: "Consumers"
  },
  {
    question: "Which of these animals is a secondary consumer?",
    options: [
      "A. Cow",
      "B. Grass",
      "C. A snake that eats frogs",
      "D. Earthworm"
    ],
    answer: "C",
    explanation: "A snake eating frogs (which ate insects) is a secondary or higher-level consumer depending on the chain.",
    subtopic: "Consumers"
  },
  {
    question: "Consumers are also known as?",
    options: [
      "A. Autotrophs",
      "B. Heterotrophs",
      "C. Producers",
      "D. Lithotrophs"
    ],
    answer: "B",
    explanation: "Consumers cannot make their own food and must ingest organic matter, so they are heterotrophs.",
    subtopic: "Consumers"
  },
  {
    question: "Apex predators are important in an ecosystem because they?",
    options: [
      "A. Produce food by photosynthesis",
      "B. Help control populations of lower trophic levels",
      "C. Decompose dead organisms",
      "D. Fix nitrogen"
    ],
    answer: "B",
    explanation: "Top predators regulate prey numbers, preventing any one species from dominating the community.",
    subtopic: "Consumers"
  },
  {
    question: "Filter-feeding consumers in aquatic ecosystems such as clams are examples of?",
    options: [
      "A. Primary producers",
      "B. Decomposers",
      "C. Primary consumers",
      "D. Tertiary consumers"
    ],
    answer: "C",
    explanation: "Clams filter phytoplankton and other small producers, placing them among the primary consumers.",
    subtopic: "Consumers"
  },

  // ---------- Decomposers ----------
  {
    question: "Organisms that break down dead organic matter into simpler substances are called?",
    options: [
      "A. Producers",
      "B. Primary consumers",
      "C. Decomposers",
      "D. Autotrophs"
    ],
    answer: "C",
    explanation: "Decomposers such as bacteria and fungi recycle nutrients by breaking down dead matter.",
    subtopic: "Decomposers"
  },
  {
    question: "Which of these are the main decomposers in most ecosystems?",
    options: [
      "A. Green plants and algae",
      "B. Bacteria and fungi",
      "C. Herbivores",
      "D. Carnivores"
    ],
    answer: "B",
    explanation: "Fungi and bacteria secrete enzymes that digest dead organic material externally and absorb the products.",
    subtopic: "Decomposers"
  },
  {
    question: "The role of decomposers in nutrient cycling is to?",
    options: [
      "A. Trap solar energy",
      "B. Return minerals to the soil for reuse by producers",
      "C. Consume living plants",
      "D. Fix atmospheric oxygen"
    ],
    answer: "B",
    explanation: "By mineralizing organic matter, decomposers release nutrients that producers take up again, closing the cycle.",
    subtopic: "Decomposers"
  },
  {
    question: "Saprophytes obtain their food by?",
    options: [
      "A. Photosynthesis",
      "B. Feeding on living hosts",
      "C. Absorbing digested products of dead organic matter",
      "D. Ingesting other animals"
    ],
    answer: "C",
    explanation: "Saprophytes (many fungi and bacteria) absorb nutrients from non-living organic debris.",
    subtopic: "Decomposers"
  },
  {
    question: "Which process describes the breakdown of complex organic compounds by decomposers?",
    options: [
      "A. Photosynthesis",
      "B. Decomposition or mineralization",
      "C. Transpiration",
      "D. Nitrogen fixation"
    ],
    answer: "B",
    explanation: "Decomposition/mineralization converts dead tissue into inorganic nutrients available to producers.",
    subtopic: "Decomposers"
  },
  {
    question: "Earthworms are often called 'nature's plough' because they?",
    options: [
      "A. Photosynthesize",
      "B. Aerate soil and help decompose organic matter",
      "C. Fix nitrogen",
      "D. Act as top predators"
    ],
    answer: "B",
    explanation: "Earthworms mix and aerate soil while fragmenting organic matter, aiding decomposition.",
    subtopic: "Decomposers"
  },
  {
    question: "Without decomposers, an ecosystem would accumulate?",
    options: [
      "A. Excess oxygen",
      "B. Dead organic matter and locked-up nutrients",
      "C. More producers",
      "D. Less carbon dioxide"
    ],
    answer: "B",
    explanation: "Nutrients would remain tied up in corpses and wastes, halting recycling and eventually starving producers.",
    subtopic: "Decomposers"
  },
  {
    question: "Wood-decay fungi mainly decompose wood by secreting enzymes that break down?",
    options: [
      "A. Proteins only",
      "B. Cellulose and lignin",
      "C. Starch in seeds",
      "D. Fats in animals"
    ],
    answer: "B",
    explanation: "Wood-decay fungi produce cellulases and ligninases to dismantle the tough cell walls of dead trees.",
    subtopic: "Decomposers"
  },
  {
    question: "Detritivores differ from decomposers in that they?",
    options: [
      "A. Make their own food",
      "B. Ingest and physically break down dead matter",
      "C. Photosynthesize",
      "D. Fix atmospheric nitrogen"
    ],
    answer: "B",
    explanation: "Detritivores (e.g., millipedes, some insects) eat detritus, whereas microbes decompose chemically.",
    subtopic: "Decomposers"
  },
  {
    question: "Which statement about decomposers is correct?",
    options: [
      "A. They are always green",
      "B. They occupy the last stage of energy flow",
      "C. They produce their own food",
      "D. They are producers"
    ],
    answer: "B",
    explanation: "Decomposers release energy from dead organisms, representing the final stage before nutrients re-enter the cycle.",
    subtopic: "Decomposers"
  },

  // ---------- Abiotic components ----------
  {
    question: "Non-living physical and chemical factors of an ecosystem are called?",
    options: [
      "A. Biotic components",
      "B. Abiotic components",
      "C. Producers",
      "D. Consumers"
    ],
    answer: "B",
    explanation: "Abiotic components include light, temperature, water, air, soil and minerals that influence living organisms.",
    subtopic: "Abiotic components"
  },
  {
    question: "Which of these is an abiotic factor?",
    options: [
      "A. Earthworm",
      "B. Temperature",
      "C. Fungus",
      "D. Grass"
    ],
    answer: "B",
    explanation: "Temperature is a non-living environmental variable affecting metabolic and growth rates of organisms.",
    subtopic: "Abiotic components"
  },
  {
    question: "Light intensity mainly affects producers by influencing?",
    options: [
      "A. Rate of decomposition",
      "B. The rate of photosynthesis",
      "C. Soil pH only",
      "D. Wind speed"
    ],
    answer: "B",
    explanation: "Photosynthetic rate rises with light up to a saturation point, controlling producer productivity.",
    subtopic: "Abiotic components"
  },
  {
    question: "Soil is considered an abiotic component because it provides?",
    options: [
      "A. Living organisms only",
      "B. Mineral nutrients, water and anchorage",
      "C. Photosynthetic pigment",
      "D. Genetic material"
    ],
    answer: "B",
    explanation: "Soil is a non-living medium supplying minerals, water and support to rooted plants.",
    subtopic: "Abiotic components"
  },
  {
    question: "Which abiotic factor most limits life in a desert ecosystem?",
    options: [
      "A. Excess light",
      "B. Low water availability",
      "C. High oxygen",
      "D. Rich soil"
    ],
    answer: "B",
    explanation: "Scarcity of water is the chief limiting factor for life in deserts.",
    subtopic: "Abiotic components"
  },
  {
    question: "The pH of soil and water is an example of an abiotic?",
    options: [
      "A. Biological factor",
      "B. Chemical factor",
      "C. Biotic factor",
      "D. Producer"
    ],
    answer: "B",
    explanation: "pH is a chemical property of the environment that affects nutrient availability and organism survival.",
    subtopic: "Abiotic components"
  },
  {
    question: "Wind can affect an ecosystem by?",
    options: [
      "A. Performing photosynthesis",
      "B. Influencing transpiration and seed dispersal",
      "C. Decomposing organic matter",
      "D. Fixing carbon"
    ],
    answer: "B",
    explanation: "Wind increases transpiration rates and aids in dispersing seeds and pollen.",
    subtopic: "Abiotic components"
  },
  {
    question: "Which of the following is NOT an abiotic component?",
    options: [
      "A. Air",
      "B. Water",
      "C. Bacteria",
      "D. Sunlight"
    ],
    answer: "C",
    explanation: "Bacteria are living organisms and thus form part of the biotic component.",
    subtopic: "Abiotic components"
  },
  {
    question: "Oxygen dissolved in water is an important abiotic factor for?",
    options: [
      "A. Aquatic animals' respiration",
      "B. Plant photosynthesis only",
      "C. Soil formation",
      "D. Wind speed"
    ],
    answer: "A",
    explanation: "Dissolved oxygen is required by fish and other aquatic animals for aerobic respiration.",
    subtopic: "Abiotic components"
  },
  {
    question: "Salinity is a key abiotic factor that strongly influences?",
    options: [
      "A. Organisms in freshwater and marine ecosystems",
      "B. Only terrestrial plants",
      "C. Decomposers exclusively",
      "D. Producers' colours"
    ],
    answer: "A",
    explanation: "Salt concentration affects osmoregulation and distribution of organisms in aquatic habitats.",
    subtopic: "Abiotic components"
  },

  // ---------- Ecosystem structure ----------
  {
    question: "An ecosystem is best defined as?",
    options: [
      "A. A group of the same species",
      "B. A community of living organisms interacting with their non-living environment",
      "C. Only the abiotic components",
      "D. A single food chain"
    ],
    answer: "B",
    explanation: "An ecosystem includes both biotic communities and the abiotic factors with which they interact.",
    subtopic: "Ecosystem structure"
  },
  {
    question: "The biotic components of an ecosystem consist of?",
    options: [
      "A. Producers, consumers and decomposers",
      "B. Light, water and soil",
      "C. Temperature and air",
      "D. Rocks and minerals"
    ],
    answer: "A",
    explanation: "Living parts are classified into producers, consumers and decomposers.",
    subtopic: "Ecosystem structure"
  },
  {
    question: "A population in ecology refers to?",
    options: [
      "A. All species in an area",
      "B. Members of the same species living in a given area",
      "C. The non-living environment",
      "D. All producers only"
    ],
    answer: "B",
    explanation: "A population is a group of interbreeding individuals of one species in a particular place.",
    subtopic: "Ecosystem structure"
  },
  {
    question: "The natural home or environment of an organism is called its?",
    options: [
      "A. Niche",
      "B. Habitat",
      "C. Population",
      "D. Biome"
    ],
    answer: "B",
    explanation: "A habitat is the place where an organism lives and meets its needs.",
    subtopic: "Ecosystem structure"
  },
  {
    question: "The biosphere includes?",
    options: [
      "A. Only the oceans",
      "B. All parts of Earth where life exists",
      "C. Only the atmosphere",
      "D. Only the soil"
    ],
    answer: "B",
    explanation: "The biosphere encompasses all living organisms and the zones they inhabit on land, water and air.",
    subtopic: "Ecosystem structure"
  },
  {
    question: "A large regional community characterized by climate and dominant vegetation is a?",
    options: [
      "A. Population",
      "B. Biome",
      "C. Niche",
      "D. Habitat"
    ],
    answer: "B",
    explanation: "Biomes such as tropical rainforest or savanna are broad ecological units shaped by climate.",
    subtopic: "Ecosystem structure"
  },
  {
    question: "Trophic levels in an ecosystem represent?",
    options: [
      "A. Different habitats",
      "B. Positions in a food chain based on feeding relationships",
      "C. Types of soil",
      "D. Stages of decomposition"
    ],
    answer: "B",
    explanation: "Each trophic level is a step in the energy flow, from producers up through consumer levels.",
    subtopic: "Ecosystem structure"
  },
  {
    question: "Energy flow through an ecosystem is best described as?",
    options: [
      "A. Cyclic and reusable",
      "B. Linear and unidirectional",
      "C. Stored permanently by producers",
      "D. Produced by decomposers"
    ],
    answer: "B",
    explanation: "Energy enters as sunlight, passes one-way through trophic levels and is lost as heat.",
    subtopic: "Ecosystem structure"
  },
  {
    question: "A food web is more realistic than a food chain because it shows?",
    options: [
      "A. A single linear path",
      "B. The many interconnected feeding relationships in a community",
      "C. Only producers",
      "D. Abiotic factors"
    ],
    answer: "B",
    explanation: "Most organisms eat and are eaten by several species, so food webs capture this complexity.",
    subtopic: "Ecosystem structure"
  },
  {
    question: "Which of these correctly orders ecosystem levels from smallest to largest?",
    options: [
      "A. Biosphere > biome > ecosystem > community > population",
      "B. Population > community > ecosystem > biome > biosphere",
      "C. Ecosystem > population > community > biome > biosphere",
      "D. Biome > biosphere > ecosystem > population > community"
    ],
    answer: "B",
    explanation: "Organization scales upward: population, community, ecosystem, biome, then the whole biosphere.",
    subtopic: "Ecosystem structure"
  }
];

module.exports = questions;
