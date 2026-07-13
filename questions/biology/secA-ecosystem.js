// biology — Ecosystem
const questions = [
  {
    question: "An ecosystem is best defined as?",
    options: [
      "A. A group of organisms of the same species living together",
      "B. A community of living organisms interacting with their non-living environment",
      "C. The physical surroundings of an organism",
      "D. All the plants in a given area"
    ],
    answer: "B",
    explanation: "An ecosystem consists of the biotic community plus the abiotic environment with which it interacts.",
    subtopic: "ecological components"
  },
  {
    question: "The biotic component of an ecosystem includes?",
    options: [
      "A. Temperature and rainfall",
      "B. Soil and light",
      "C. Living organisms such as plants and animals",
      "D. Rocks and minerals"
    ],
    answer: "C",
    explanation: "Biotic components are the living parts of the ecosystem, including producers, consumers and decomposers.",
    subtopic: "ecological components"
  },
  {
    question: "Which of the following is an abiotic component of an ecosystem?",
    options: [
      "A. Fungi",
      "B. Light",
      "C. Grasshopper",
      "D. Bacteria"
    ],
    answer: "B",
    explanation: "Light is a non-living (abiotic) factor; the others are living organisms.",
    subtopic: "ecological components"
  },
  {
    question: "Green plants are referred to as producers because they?",
    options: [
      "A. Feed on other organisms",
      "B. Manufacture their own food by photosynthesis",
      "C. Break down dead organic matter",
      "D. Consume primary consumers"
    ],
    answer: "B",
    explanation: "Producers (autotrophs) synthesize organic food from inorganic materials using sunlight.",
    subtopic: "ecological components"
  },
  {
    question: "Organisms that obtain their food by feeding on other living organisms are called?",
    options: [
      "A. Producers",
      "B. Decomposers",
      "C. Consumers",
      "D. Autotrophs"
    ],
    answer: "C",
    explanation: "Consumers (heterotrophs) depend directly or indirectly on producers for food.",
    subtopic: "ecological components"
  },
  {
    question: "A herbivore that feeds directly on plants occupies which trophic level?",
    options: [
      "A. First trophic level",
      "B. Second trophic level",
      "C. Third trophic level",
      "D. Fourth trophic level"
    ],
    answer: "B",
    explanation: "Primary consumers (herbivores) form the second trophic level, above producers.",
    subtopic: "ecological components"
  },
  {
    question: "Secondary consumers are usually?",
    options: [
      "A. Plants",
      "B. Carnivores that eat herbivores",
      "C. Decomposers",
      "D. Producers"
    ],
    answer: "B",
    explanation: "Secondary consumers feed on primary consumers and are typically carnivores.",
    subtopic: "ecological components"
  },
  {
    question: "Which group of organisms feeds on dead and decaying organic matter?",
    options: [
      "A. Producers",
      "B. Primary consumers",
      "C. Decomposers",
      "D. Tertiary consumers"
    ],
    answer: "C",
    explanation: "Decomposers (saprophytes such as fungi and bacteria) break down dead matter, recycling nutrients.",
    subtopic: "ecological components"
  },
  {
    question: "Decomposers are important in an ecosystem because they?",
    options: [
      "A. Produce oxygen",
      "B. Return nutrients to the soil for reuse by plants",
      "C. Fix atmospheric nitrogen only",
      "D. Act as primary consumers"
    ],
    answer: "B",
    explanation: "By breaking down dead organisms, decomposers release minerals back into the soil for producers.",
    subtopic: "ecological components"
  },
  {
    question: "The place where an organism lives is called its?",
    options: [
      "A. Niche",
      "B. Habitat",
      "C. Population",
      "D. Community"
    ],
    answer: "B",
    explanation: "A habitat is the natural environment or address where an organism lives.",
    subtopic: "ecological components"
  },
  {
    question: "The role or function of an organism in its habitat is called its?",
    options: [
      "A. Habitat",
      "B. Niche",
      "C. Biome",
      "D. Population"
    ],
    answer: "B",
    explanation: "A niche describes the organism's job, including how it obtains food and interacts with the environment.",
    subtopic: "ecological components"
  },
  {
    question: "A group of individuals of the same species living in the same area is a?",
    options: [
      "A. Community",
      "B. Population",
      "C. Ecosystem",
      "D. Biome"
    ],
    answer: "B",
    explanation: "A population consists of all members of one species within a defined area.",
    subtopic: "ecological components"
  },
  {
    question: "All the populations of different species living and interacting in an area form a?",
    options: [
      "A. Population",
      "B. Community",
      "C. Habitat",
      "D. Biosphere"
    ],
    answer: "B",
    explanation: "A community is the assemblage of different populations interacting in a locality.",
    subtopic: "ecological components"
  },
  {
    question: "The biosphere refers to?",
    options: [
      "A. A small pond ecosystem",
      "B. The part of the earth where life exists",
      "C. A single habitat",
      "D. The soil layer only"
    ],
    answer: "B",
    explanation: "The biosphere encompasses all regions of the earth occupied by living organisms.",
    subtopic: "ecological components"
  },
  {
    question: "A large regional community of plants and animals adapted to a broad climate is a?",
    options: [
      "A. Biosphere",
      "B. Biome",
      "C. Niche",
      "D. Habitat"
    ],
    answer: "B",
    explanation: "A biome (e.g. tropical rainforest, savanna) is a major climatic community type.",
    subtopic: "ecological components"
  },
  {
    question: "A food chain represents?",
    options: [
      "A. The physical structure of a habitat",
      "B. The transfer of energy from one organism to another by feeding",
      "C. The breeding pattern of animals",
      "D. The recycling of water"
    ],
    answer: "B",
    explanation: "A food chain shows a linear sequence of who eats whom, transferring energy.",
    subtopic: "ecological components"
  },
  {
    question: "Which of the following is the correct beginning of a terrestrial food chain?",
    options: [
      "A. Grass → grasshopper → frog",
      "B. Frog → snake → hawk",
      "C. Hawk → snake → frog",
      "D. Snake → grasshopper → grass"
    ],
    answer: "A",
    explanation: "Food chains begin with a producer (grass) followed by consumers.",
    subtopic: "ecological components"
  },
  {
    question: "A network of interconnected food chains is called a?",
    options: [
      "A. Food web",
      "B. Food chain",
      "C. Pyramid of numbers",
      "D. Biome"
    ],
    answer: "A",
    explanation: "A food web shows the many feeding relationships linking multiple food chains.",
    subtopic: "ecological components"
  },
  {
    question: "In a food chain, the first trophic level is occupied by?",
    options: [
      "A. Primary consumers",
      "B. Producers",
      "C. Secondary consumers",
      "D. Decomposers"
    ],
    answer: "B",
    explanation: "Producers form the base (first trophic level) of every food chain.",
    subtopic: "ecological components"
  },
  {
    question: "Trophic levels describe?",
    options: [
      "A. The age of organisms",
      "B. The feeding positions in a food chain",
      "C. The depth of soil",
      "D. The temperature zones"
    ],
    answer: "B",
    explanation: "Each trophic level is a step in the transfer of energy and matter through feeding.",
    subtopic: "ecological components"
  },
  {
    question: "An ecological pyramid shows the relationship between?",
    options: [
      "A. Trophic levels and amount of energy, biomass or numbers",
      "B. Two competing species only",
      "C. Soil pH and plant growth",
      "D. Climate and latitude"
    ],
    answer: "A",
    explanation: "Ecological pyramids quantify energy, biomass or numbers across trophic levels.",
    subtopic: "ecological components"
  },
  {
    question: "The pyramid of energy is always upright because?",
    options: [
      "A. Energy increases at each level",
      "B. Energy is lost at each transfer and cannot be recycled",
      "C. Producers are fewest in number",
      "D. Decomposers produce energy"
    ],
    answer: "B",
    explanation: "Energy decreases at each trophic level (lost as heat), so an energy pyramid is always upright.",
    subtopic: "ecological components"
  },
  {
    question: "According to the 10% law, what fraction of energy is passed to the next trophic level?",
    options: [
      "A. 50%",
      "B. 25%",
      "C. 10%",
      "D. 100%"
    ],
    answer: "C",
    explanation: "Lindemann's 10% law states roughly 10% of energy is transferred to the next level.",
    subtopic: "ecological components"
  },
  {
    question: "The flow of energy in an ecosystem is?",
    options: [
      "A. Cyclic",
      "B. Unidirectional",
      "C. Reversible",
      "D. Random"
    ],
    answer: "B",
    explanation: "Energy flows in one direction (sun → producers → consumers) and is not cycled.",
    subtopic: "ecological components"
  },
  {
    question: "Unlike energy, nutrients in an ecosystem are?",
    options: [
      "A. Lost forever after use",
      "B. Cycled and reused",
      "C. Only found in producers",
      "D. Produced by the sun"
    ],
    answer: "B",
    explanation: "Nutrients are recycled through biogeochemical cycles rather than lost.",
    subtopic: "ecological components"
  },
  {
    question: "The maximum population size an environment can sustain is its?",
    options: [
      "A. Biosphere",
      "B. Carrying capacity",
      "C. Niche",
      "D. Community"
    ],
    answer: "B",
    explanation: "Carrying capacity is the largest population the resources of an area can support.",
    subtopic: "ecological components"
  },
  {
    question: "Autotrophs are organisms that?",
    options: [
      "A. Feed on other organisms",
      "B. Make their own food from inorganic sources",
      "C. Decompose dead matter",
      "D. Cannot photosynthesize"
    ],
    answer: "B",
    explanation: "Autotrophs (producers) synthesize organic compounds from inorganic materials.",
    subtopic: "ecological components"
  },
  {
    question: "Heterotrophs are organisms that?",
    options: [
      "A. Produce their own food",
      "B. Depend on other organisms for food",
      "C. Only live in water",
      "D. Are always producers"
    ],
    answer: "B",
    explanation: "Heterotrophs cannot make their own food and must consume others.",
    subtopic: "ecological components"
  },
  {
    question: "Which of these is a primary consumer?",
    options: [
      "A. Lion",
      "B. Grass",
      "C. Grasshopper",
      "D. Vulture"
    ],
    answer: "C",
    explanation: "A grasshopper eats plants, making it a primary (herbivorous) consumer.",
    subtopic: "ecological components"
  },
  {
    question: "A trophic level that includes both carnivores and omnivores feeding on herbivores is?",
    options: [
      "A. First trophic level",
      "B. Second trophic level",
      "C. Third trophic level",
      "D. Producer level"
    ],
    answer: "C",
    explanation: "Secondary consumers (third trophic level) eat primary consumers.",
    subtopic: "ecological components"
  },
  {
    question: "Saprophytes obtain nutrients by?",
    options: [
      "A. Photosynthesis",
      "B. Feeding on living hosts",
      "C. Absorbing dissolved matter from dead organic material",
      "D. Ingesting predators"
    ],
    answer: "C",
    explanation: "Saprophytes secrete enzymes onto dead matter and absorb the products.",
    subtopic: "ecological components"
  },
  {
    question: "Which abiotic factor most limits photosynthesis at night?",
    options: [
      "A. Soil pH",
      "B. Light",
      "C. Wind",
      "D. Altitude"
    ],
    answer: "B",
    explanation: "Without light, photosynthesis cannot occur, limiting primary production.",
    subtopic: "ecological components"
  },
  {
    question: "Temperature affects organisms mainly by influencing?",
    options: [
      "A. Their colour only",
      "B. The rate of metabolic reactions",
      "C. Their taxonomic class",
      "D. The shape of DNA"
    ],
    answer: "B",
    explanation: "Temperature strongly controls enzyme and metabolic rates in organisms.",
    subtopic: "ecological components"
  },
  {
    question: "Soil is an abiotic factor because it provides?",
    options: [
      "A. Living bacteria only",
      "B. Minerals, water and anchorage for plants",
      "C. Only dead animals",
      "D. Atmospheric gases"
    ],
    answer: "B",
    explanation: "Soil is a non-living medium supplying minerals, water and support to plants.",
    subtopic: "ecological components"
  },
  {
    question: "Water is essential to life in ecosystems because it?",
    options: [
      "A. Is a source of light",
      "B. Is the medium for metabolic reactions and transport",
      "C. Produces oxygen by itself",
      "D. Replaces soil"
    ],
    answer: "B",
    explanation: "Water is the solvent in which biochemical reactions occur and transports materials.",
    subtopic: "ecological components"
  },
  {
    question: "The ozone layer in the atmosphere protects ecosystems by?",
    options: [
      "A. Trapping heat only",
      "B. Filtering harmful ultraviolet radiation",
      "C. Producing oxygen",
      "D. Causing rainfall"
    ],
    answer: "B",
    explanation: "Ozone absorbs UV radiation that would otherwise damage living tissues.",
    subtopic: "ecological components"
  },
  {
    question: "Which statement about a community is correct?",
    options: [
      "A. It contains only one species",
      "B. It includes all interacting populations in an area",
      "C. It has no abiotic component",
      "D. It is the same as a habitat"
    ],
    answer: "B",
    explanation: "A community is the interacting collection of multiple populations in a place.",
    subtopic: "ecological components"
  },
  {
    question: "Ecological succession refers to?",
    options: [
      "A. The daily movement of animals",
      "B. The gradual change in species composition of a community over time",
      "C. The recycling of nitrogen",
      "D. The migration of birds"
    ],
    answer: "B",
    explanation: "Succession is the predictable replacement of species communities over time.",
    subtopic: "ecological components"
  },
  {
    question: "The pioneer species in primary succession are usually?",
    options: [
      "A. Large trees",
      "B. Lichens and mosses",
      "C. Carnivores",
      "D. Fish"
    ],
    answer: "B",
    explanation: "Lichens and mosses colonize bare rock first, starting primary succession.",
    subtopic: "ecological components"
  },
  {
    question: "A climax community is one that is?",
    options: [
      "A. Just beginning to form",
      "B. Stable and self-perpetuating",
      "C. Always aquatic",
      "D. Lacking producers"
    ],
    answer: "B",
    explanation: "A climax community is the relatively stable final stage of succession.",
    subtopic: "ecological components"
  },
  {
    question: "Which of the following is a carnivorous tertiary consumer?",
    options: [
      "A. Grass",
      "B. Rabbit",
      "C. Snake",
      "D. Hawk eating the snake"
    ],
    answer: "D",
    explanation: "A hawk eating a snake occupies a higher (tertiary/quaternary) consumer level.",
    subtopic: "ecological components"
  },
  {
    question: "Detritus feeders such as earthworms are classified as?",
    options: [
      "A. Producers",
      "B. Primary consumers",
      "C. Decomposers / detritivores",
      "D. Autotrophs"
    ],
    answer: "C",
    explanation: "Earthworms consume detritus and help break down organic matter.",
    subtopic: "ecological components"
  },
  {
    question: "The pyramid of numbers may be inverted in a situation where?",
    options: [
      "A. Many small parasites depend on one host",
      "B. Producers are always largest",
      "C. Energy increases upward",
      "D. There is no consumer"
    ],
    answer: "A",
    explanation: "A single host can support many parasites, inverting the numbers pyramid.",
    subtopic: "ecological components"
  },
  {
    question: "Biomass refers to?",
    options: [
      "A. The number of species",
      "B. The total mass of living material in a given area",
      "C. The amount of sunlight",
      "D. The volume of water"
    ],
    answer: "B",
    explanation: "Biomass is the dry weight of living organisms at a trophic level or area.",
    subtopic: "ecological components"
  },
  {
    question: "Nitrogen-fixing bacteria in root nodules belong to which component group?",
    options: [
      "A. Producers",
      "B. Consumers",
      "C. Decomposers / microbial biotic component",
      "D. Abiotic factor"
    ],
    answer: "C",
    explanation: "They are living microorganisms, part of the biotic decomposer/microbial component.",
    subtopic: "ecological components"
  },
  {
    question: "An organism's habitat and niche differ in that?",
    options: [
      "A. They are the same thing",
      "B. Habitat is where it lives; niche is its role",
      "C. Niche is the address only",
      "D. Habitat is the role only"
    ],
    answer: "B",
    explanation: "Habitat = address (place); niche = profession (functional role).",
    subtopic: "ecological components"
  },
  {
    question: "Which best describes a producer in an aquatic ecosystem?",
    options: [
      "A. Fish",
      "B. Phytoplankton (algae)",
      "C. Crab",
      "D. Bacteria"
    ],
    answer: "B",
    explanation: "Phytoplankton perform photosynthesis and form the base of aquatic food webs.",
    subtopic: "ecological components"
  },
  {
    question: "Energy enters nearly all ecosystems primarily from?",
    options: [
      "A. The moon",
      "B. The sun",
      "C. Geothermal vents only",
      "D. Soil minerals"
    ],
    answer: "B",
    explanation: "Solar radiation drives photosynthesis, the main energy input.",
    subtopic: "ecological components"
  },
  {
    question: "Which statement about decomposers is false?",
    options: [
      "A. They include fungi and bacteria",
      "B. They release nutrients for reuse",
      "C. They are producers",
      "D. They feed on dead matter"
    ],
    answer: "C",
    explanation: "Decomposers are not producers; they break down dead organic matter.",
    subtopic: "ecological components"
  },
  {
    question: "A food web is more realistic than a single food chain because?",
    options: [
      "A. It shows only one path of energy",
      "B. Most organisms eat and are eaten by several species",
      "C. It excludes decomposers",
      "D. It ignores producers"
    ],
    answer: "B",
    explanation: "Real organisms have multiple feeding links, forming interlocking webs.",
    subtopic: "ecological components"
  },
  {
    question: "If a pesticide accumulates at higher trophic levels, this is an example of?",
    options: [
      "A. Biomagnification",
      "B. Photosynthesis",
      "C. Transpiration",
      "D. Nitrogen fixation"
    ],
    answer: "A",
    explanation: "Biomagnification is the increasing concentration of substances up the food chain.",
    subtopic: "ecological components"
  },
  {
    question: "The term 'community' in ecology should not be confused with 'population' because?",
    options: [
      "A. They mean the same",
      "B. A community has multiple species; a population has one",
      "C. A population has multiple species",
      "D. Community is always larger than the biosphere"
    ],
    answer: "B",
    explanation: "Population = one species; community = many interacting species.",
    subtopic: "ecological components"
  },
  {
    question: "Which of the following pairs are both abiotic factors?",
    options: [
      "A. Light and soil",
      "B. Grass and light",
      "C. Frog and soil",
      "D. Bacteria and temperature"
    ],
    answer: "A",
    explanation: "Light and soil are both non-living components of the environment.",
    subtopic: "ecological components"
  },
  {
    question: "Omnivores can occupy more than one trophic level because they?",
    options: [
      "A. Only eat plants",
      "B. Eat both plants and animals",
      "C. Are producers",
      "D. Do not feed"
    ],
    answer: "B",
    explanation: "By consuming both plant and animal matter, omnivores span multiple levels.",
    subtopic: "ecological components"
  }
];

module.exports = questions;
