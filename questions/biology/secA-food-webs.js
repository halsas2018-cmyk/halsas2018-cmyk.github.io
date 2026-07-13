// biology — Food Webs & Trophic Levels
const questions = [
  // ---- autotrophs/heterotrophs ----
  {
    question: "An organism that can synthesize its own organic food from inorganic substances using light energy is called a/an?",
    options: [
      "A. Heterotroph",
      "B. Autotroph",
      "C. Saprophyte",
      "D. Detritivore"
    ],
    answer: "B",
    explanation: "Autotrophs manufacture their own food (e.g. by photosynthesis); heterotrophs must consume other organisms.",
    subtopic: "autotrophs/heterotrophs"
  },
  {
    question: "Which of the following groups contains organisms that are all autotrophs?",
    options: [
      "A. Mosses, algae, green plants",
      "B. Mushrooms, bacteria, earthworms",
      "C. Lions, locusts, fungi",
      "D. Vultures, yeast, protozoa"
    ],
    answer: "A",
    explanation: "Mosses, algae and green plants carry out photosynthesis and are therefore autotrophic producers.",
    subtopic: "autotrophs/heterotrophs"
  },
  {
    question: "Organisms that obtain energy by oxidizing inorganic compounds rather than light are known as?",
    options: [
      "A. Photoautotrophs",
      "B. Chemoautotrophs",
      "C. Saprophytes",
      "D. Parasites"
    ],
    answer: "B",
    explanation: "Chemoautotrophs (e.g. nitrifying bacteria) build organic matter using energy from chemical reactions.",
    subtopic: "autotrophs/heterotrophs"
  },
  {
    question: "A green plant is best described as a producer because it?",
    options: [
      "A. Eats other organisms",
      "B. Converts light energy into chemical energy stored in food",
      "C. Breaks down dead matter",
      "D. Lives on other living hosts"
    ],
    answer: "B",
    explanation: "Producers use photosynthesis to convert solar energy into chemical energy in glucose.",
    subtopic: "autotrophs/heterotrophs"
  },
  {
    question: "Which term describes an animal that feeds only on plants?",
    options: [
      "A. Carnivore",
      "B. Omnivore",
      "C. Herbivore",
      "D. Decomposer"
    ],
    answer: "C",
    explanation: "Herbivores are primary consumers that eat exclusively plant material.",
    subtopic: "autotrophs/heterotrophs"
  },
  {
    question: "An organism that feeds on both plants and animals is called a/an?",
    options: [
      "A. Herbivore",
      "B. Carnivore",
      "C. Omnivore",
      "D. Autotroph"
    ],
    answer: "C",
    explanation: "Omnivores (e.g. humans, rats) consume both plant and animal matter.",
    subtopic: "autotrophs/heterotrophs"
  },
  {
    question: "Fungi obtain their food mainly as?",
    options: [
      "A. Photosynthetic autotrophs",
      "B. Saprophytes feeding on dead organic matter",
      "C. Photosynthetic heterotrophs",
      "D. Parasitic autotrophs"
    ],
    answer: "B",
    explanation: "Most fungi are saprophytes, secreting enzymes onto dead matter and absorbing the products.",
    subtopic: "autotrophs/heterotrophs"
  },
  {
    question: "Which of the following is a heterotroph?",
    options: [
      "A. Maize plant",
      "B. Spirogyra",
      "C. Grasshopper",
      "D. Chlorophyll-bearing bacterium"
    ],
    answer: "C",
    explanation: "The grasshopper cannot make its own food and must consume plants, so it is a heterotroph.",
    subtopic: "autotrophs/heterotrophs"
  },
  {
    question: "A parasite differs from a saprophyte in that a parasite?",
    options: [
      "A. Feeds on dead organic matter",
      "B. Lives and feeds on or in a living host",
      "C. Is always a producer",
      "D. Carries out photosynthesis"
    ],
    answer: "B",
    explanation: "Parasites derive nourishment from a living host, while saprophytes feed on dead matter.",
    subtopic: "autotrophs/heterotrophs"
  },
  {
    question: "The green pigment essential for trapping light energy in autotrophs is?",
    options: [
      "A. Haemoglobin",
      "B. Chlorophyll",
      "C. Carotene only",
      "D. Melanin"
    ],
    answer: "B",
    explanation: "Chlorophyll absorbs light energy to drive the photosynthesis that makes autotrophs self-feeding.",
    subtopic: "autotrophs/heterotrophs"
  },
  {
    question: "Which of these is an example of a carnivore?",
    options: [
      "A. Cow",
      "B. Goat",
      "C. Lion",
      "D. Grasshopper"
    ],
    answer: "C",
    explanation: "Lions eat other animals and are therefore carnivores (secondary/tertiary consumers).",
    subtopic: "autotrophs/heterotrophs"
  },
  {
    question: "Autotrophs are also referred to as?",
    options: [
      "A. Consumers",
      "B. Producers",
      "C. Decomposers",
      "D. Detritivores"
    ],
    answer: "B",
    explanation: "Because they produce organic matter from inorganic sources, autotrophs are called producers.",
    subtopic: "autotrophs/heterotrophs"
  },
  {
    question: "Which statement about chemoautotrophic bacteria is true?",
    options: [
      "A. They require sunlight to make food",
      "B. They oxidize inorganic substances for energy",
      "C. They are all decomposers of wood",
      "D. They lack any metabolic activity"
    ],
    answer: "B",
    explanation: "Chemoautotrophs gain energy by oxidizing substances such as ammonia or hydrogen sulphide.",
    subtopic: "autotrophs/heterotrophs"
  },

  // ---- trophic levels ----
  {
    question: "In a terrestrial food chain, the organisms occupying the first trophic level are the?",
    options: [
      "A. Primary consumers",
      "B. Secondary consumers",
      "C. Producers",
      "D. Decomposers"
    ],
    answer: "C",
    explanation: "The first trophic level is always the producers (plants/algae) that capture solar energy.",
    subtopic: "trophic levels"
  },
  {
    question: "Grasshoppers feeding on grass occupy which trophic level?",
    options: [
      "A. First trophic level",
      "B. Second trophic level",
      "C. Third trophic level",
      "D. Fourth trophic level"
    ],
    answer: "B",
    explanation: "As herbivores eating producers, grasshoppers are primary consumers at the second trophic level.",
    subtopic: "trophic levels"
  },
  {
    question: "A frog that eats insects which fed on plants occupies the?",
    options: [
      "A. First trophic level",
      "B. Second trophic level",
      "C. Third trophic level",
      "D. Fourth trophic level"
    ],
    answer: "C",
    explanation: "Frog (carnivore) → insect (primary consumer) → plant (producer), so the frog is at the third trophic level.",
    subtopic: "trophic levels"
  },
  {
    question: "The sequence grass → grasshopper → lizard → hawk represents a?",
    options: [
      "A. Food web",
      "B. Food chain",
      "C. Pyramid of numbers",
      "D. Energy cycle"
    ],
    answer: "B",
    explanation: "A linear sequence of who-eats-whom is a food chain; a food web is the interlocking network of many chains.",
    subtopic: "trophic levels"
  },
  {
    question: "A food web is more realistic than a food chain because it shows?",
    options: [
      "A. Only one producer species",
      "B. A single straight feeding path",
      "C. Interconnected feeding relationships among many organisms",
      "D. That energy increases up the levels"
    ],
    answer: "C",
    explanation: "Food webs depict the multiple, overlapping feeding links that actually exist in communities.",
    subtopic: "trophic levels"
  },
  {
    question: "Primary consumers are found at which trophic level?",
    options: [
      "A. First",
      "B. Second",
      "C. Third",
      "D. Fourth"
    ],
    answer: "B",
    explanation: "Primary consumers (herbivores) eat producers and therefore stand at the second trophic level.",
    subtopic: "trophic levels"
  },
  {
    question: "In a trophic pyramid, the widest base is occupied by the?",
    options: [
      "A. Tertiary consumers",
      "B. Secondary consumers",
      "C. Producers",
      "D. Top carnivores"
    ],
    answer: "C",
    explanation: "Producers form the base because they are most numerous and contain the most energy.",
    subtopic: "trophic levels"
  },
  {
    question: "Which organism would normally be a secondary consumer in a pond ecosystem?",
    options: [
      "A. Phytoplankton",
      "B. Small fish eating zooplankton",
      "C. Water weed",
      "D. Decaying leaf litter"
    ],
    answer: "B",
    explanation: "Small fish eating herbivorous zooplankton are carnivores at the third trophic level (secondary consumers).",
    subtopic: "trophic levels"
  },
  {
    question: "An organism that feeds on both primary and secondary consumers would be a?",
    options: [
      "A. Producer",
      "B. Primary consumer",
      "C. Secondary or tertiary consumer depending on its prey",
      "D. Decomposer only"
    ],
    answer: "C",
    explanation: "Omnivores can sit at different trophic levels depending on what they have just eaten.",
    subtopic: "trophic levels"
  },
  {
    question: "The top carnivore in a food chain is usually at the?",
    options: [
      "A. First trophic level",
      "B. Second trophic level",
      "C. Lowest trophic level",
      "D. Highest trophic level"
    ],
    answer: "D",
    explanation: "Apex predators occupy the highest trophic level because nothing preys on them.",
    subtopic: "trophic levels"
  },
  {
    question: "Which statement correctly describes trophic levels?",
    options: [
      "A. Each level contains the same amount of energy",
      "B. Energy is lost as it moves up the levels",
      "C. Producers are at the top",
      "D. Consumers come before producers"
    ],
    answer: "B",
    explanation: "Energy decreases at each successive trophic level due to respiration and heat loss.",
    subtopic: "trophic levels"
  },
  {
    question: "In the chain phytoplankton → zooplankton → small fish → large fish, the zooplankton are?",
    options: [
      "A. Producers",
      "B. Primary consumers",
      "C. Secondary consumers",
      "D. Decomposers"
    ],
    answer: "B",
    explanation: "Zooplankton eat phytoplankton (producers), making them primary consumers.",
    subtopic: "trophic levels"
  },

  // ---- energy flow ----
  {
    question: "Approximately what fraction of energy is transferred from one trophic level to the next?",
    options: [
      "A. 90%",
      "B. 50%",
      "C. 10%",
      "D. 100%"
    ],
    answer: "C",
    explanation: "The ~10% rule (ecological efficiency) means only about a tenth of energy passes to the next level.",
    subtopic: "energy flow"
  },
  {
    question: "The loss of energy between trophic levels is mainly due to?",
    options: [
      "A. Photosynthesis increasing it",
      "B. Respiration and heat loss",
      "C. Producers multiplying",
      "D. Decomposers storing it"
    ],
    answer: "B",
    explanation: "Most ingested energy is lost as heat through respiration and as undigested waste.",
    subtopic: "energy flow"
  },
  {
    question: "According to the 10% rule, if producers contain 10,000 kJ of energy, primary consumers receive about?",
    options: [
      "A. 1,000 kJ",
      "B. 100 kJ",
      "C. 10 kJ",
      "D. 10,000 kJ"
    ],
    answer: "A",
    explanation: "Ten percent of 10,000 kJ is 1,000 kJ passed on to the next trophic level.",
    subtopic: "energy flow"
  },
  {
    question: "Energy flow through an ecosystem is said to be?",
    options: [
      "A. Cyclic",
      "B. Unidirectional",
      "C. Reversible",
      "D. Stored permanently"
    ],
    answer: "B",
    explanation: "Energy enters as sunlight and leaves as heat; it moves in one direction and is not recycled.",
    subtopic: "energy flow"
  },
  {
    question: "The ultimate source of energy for nearly all food chains is the?",
    options: [
      "A. Moon",
      "B. Sun",
      "C. Earth's core",
      "D. Wind"
    ],
    answer: "B",
    explanation: "Solar radiation drives photosynthesis, the entry point of energy into most ecosystems.",
    subtopic: "energy flow"
  },
  {
    question: "Why are there rarely more than four or five trophic levels in a food chain?",
    options: [
      "A. Too much energy at the top",
      "B. Insufficient energy remains to support another level",
      "C. Producers stop growing",
      "D. Decomposers consume all energy"
    ],
    answer: "B",
    explanation: "Because ~90% is lost at each step, too little energy remains after four levels to sustain more.",
    subtopic: "energy flow"
  },
  {
    question: "A pyramid of energy is always?",
    options: [
      "A. Inverted",
      "B. Upright",
      "C. Equal at all levels",
      "D. Circular"
    ],
    answer: "B",
    explanation: "Energy pyramids are upright because energy decreases at higher trophic levels.",
    subtopic: "energy flow"
  },
  {
    question: "Unlike energy, nutrients in an ecosystem are?",
    options: [
      "A. Lost as heat permanently",
      "B. Cycled and reused",
      "C. Never returned to soil",
      "D. Created by consumers"
    ],
    answer: "B",
    explanation: "Chemical elements are recycled through biogeochemical cycles, unlike one-way energy flow.",
    subtopic: "energy flow"
  },
  {
    question: "Gross primary productivity refers to?",
    options: [
      "A. Energy left after respiration",
      "B. Total energy fixed by producers via photosynthesis",
      "C. Energy in top carnivores",
      "D. Energy lost as heat"
    ],
    answer: "B",
    explanation: "GPP is the total rate at which producers convert solar energy into chemical energy.",
    subtopic: "energy flow"
  },
  {
    question: "Which of these represents the correct direction of energy flow?",
    options: [
      "A. Carnivore → herbivore → producer",
      "B. Producer → herbivore → carnivore",
      "C. Decomposer → producer → consumer",
      "D. Sun → carnivore → producer"
    ],
    answer: "B",
    explanation: "Energy flows upward from producers to herbivores to carnivores.",
    subtopic: "energy flow"
  },
  {
    question: "The efficiency of energy transfer between trophic levels is generally?",
    options: [
      "A. 1%",
      "B. 10%",
      "C. 75%",
      "D. 100%"
    ],
    answer: "B",
    explanation: "Ecological efficiency averages about 10%, the basis of the 10% rule.",
    subtopic: "energy flow"
  },
  {
    question: "When a lion eats a zebra, the energy stored in the zebra's body is partly?",
    options: [
      "A. Returned entirely to the sun",
      "B. Used by the lion and partly lost as heat",
      "C. Doubled in the lion",
      "D. Converted to producer energy"
    ],
    answer: "B",
    explanation: "The lion uses some energy for life processes and loses the rest as heat; only ~10% is incorporated.",
    subtopic: "energy flow"
  },

  // ---- decomposition ----
  {
    question: "The breaking down of dead organic matter into simpler substances is called?",
    options: [
      "A. Photosynthesis",
      "B. Decomposition",
      "C. Transpiration",
      "D. Respiration"
    ],
    answer: "B",
    explanation: "Decomposition is the process by which dead organisms and waste are broken down.",
    subtopic: "decomposition"
  },
  {
    question: "Which group of organisms are the principal decomposers in most ecosystems?",
    options: [
      "A. Green plants and algae",
      "B. Bacteria and fungi",
      "C. Large carnivores",
      "D. Herbivorous mammals"
    ],
    answer: "B",
    explanation: "Fungi and bacteria secrete enzymes that digest dead matter externally and absorb nutrients.",
    subtopic: "decomposition"
  },
  {
    question: "Organisms that feed on dead and decaying organic matter are called?",
    options: [
      "A. Producers",
      "B. Detritivores",
      "C. Autotrophs",
      "D. Parasites"
    ],
    answer: "B",
    explanation: "Detritivores (e.g. earthworms, millipedes) consume detritus and help fragment it.",
    subtopic: "decomposition"
  },
  {
    question: "Earthworms are described as detritivores because they?",
    options: [
      "A. Make their own food",
      "B. Ingest dead organic matter and aid its breakdown",
      "C. Photosynthesize",
      "D. Prey on living animals only"
    ],
    answer: "B",
    explanation: "Earthworms eat soil rich in decaying matter, physically breaking it down and enriching soil.",
    subtopic: "decomposition"
  },
  {
    question: "Decomposers return nutrients to the ecosystem mainly by releasing them as?",
    options: [
      "A. Complex proteins",
      "B. Simple inorganic substances (e.g. nitrates, CO2)",
      "C. Living cells",
      "D. Sunlight"
    ],
    answer: "B",
    explanation: "Saprotrophs convert organic matter into inorganic ions and gases usable by producers.",
    subtopic: "decomposition"
  },
  {
    question: "Which of the following speeds up the rate of decomposition?",
    options: [
      "A. Very low temperature",
      "B. Warm, moist, aerobic conditions",
      "C. Complete dryness",
      "D. Absence of microorganisms"
    ],
    answer: "B",
    explanation: "Microbial activity is fastest in warm, moist, oxygen-rich environments.",
    subtopic: "decomposition"
  },
  {
    question: "In a compost heap, the rise in temperature is mainly due to?",
    options: [
      "A. Solar heating only",
      "B. Heat released by respiring decomposer microorganisms",
      "C. Chemical freezing",
      "D. Plant photosynthesis"
    ],
    answer: "B",
    explanation: "Decomposers respire as they break down matter, releasing heat that warms the heap.",
    subtopic: "decomposition"
  },
  {
    question: "Saprophytes obtain their nutrition by?",
    options: [
      "A. Photosynthesis",
      "B. Absorbing digested products from dead matter",
      "C. Hunting live prey",
      "D. Living inside a host"
    ],
    answer: "B",
    explanation: "Saprophytes secrete digestive enzymes onto dead matter and absorb the soluble products.",
    subtopic: "decomposition"
  },
  {
    question: "Which of these is NOT a decomposer?",
    options: [
      "A. Mushroom",
      "B. Bacteria of decay",
      "C. Lion",
      "D. Mould"
    ],
    answer: "C",
    explanation: "Lions are consumers; mushrooms, moulds and decay bacteria are decomposers/saprophytes.",
    subtopic: "decomposition"
  },
  {
    question: "The role of decomposers is important because they?",
    options: [
      "A. Compete with producers",
      "B. Recycle nutrients, making them available to producers",
      "C. Produce most of the world's oxygen",
      "D. Form the highest trophic level"
    ],
    answer: "B",
    explanation: "By recycling elements, decomposers close nutrient cycles and sustain primary production.",
    subtopic: "decomposition"
  },
  {
    question: "Detritus consists of?",
    options: [
      "A. Living producers",
      "B. Dead plant and animal remains and faecal matter",
      "C. Only living bacteria",
      "D. Pure minerals"
    ],
    answer: "B",
    explanation: "Detritus is non-living organic debris that fuels detritus food chains.",
    subtopic: "decomposition"
  },
  {
    question: "Poor decomposition in waterlogged, anaerobic soils occurs because?",
    options: [
      "A. Temperatures are too high",
      "B. Lack of oxygen limits decomposer activity",
      "C. Too many fungi are present",
      "D. Sunlight is abundant"
    ],
    answer: "B",
    explanation: "Anaerobic conditions slow aerobic decomposers, leading to accumulation of peat/organic matter.",
    subtopic: "decomposition"
  },
  {
    question: "The end products of aerobic decomposition of a dead leaf include?",
    options: [
      "A. Glucose and oxygen",
      "B. Carbon dioxide, water and mineral salts",
      "C. Starch only",
      "D. Proteins unchanged"
    ],
    answer: "B",
    explanation: "Complete aerobic decomposition yields CO2, water and inorganic nutrients.",
    subtopic: "decomposition"
  }
];

module.exports = questions;
