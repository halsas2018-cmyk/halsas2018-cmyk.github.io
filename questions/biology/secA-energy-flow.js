// biology — Energy Flow
const questions = [
  // ---------- food/energy relationships ----------
  {
    question: "What is the ultimate source of energy for almost all living organisms on Earth?",
    options: [
      "A. The moon",
      "B. The sun",
      "C. Geothermal vents",
      "D. Chemical bonds in rocks"
    ],
    answer: "B",
    explanation: "The sun is the primary source of energy for nearly all ecosystems; producers capture solar energy by photosynthesis.",
    subtopic: "food/energy relationships"
  },
  {
    question: "Organisms that capture solar energy and manufacture their own food are called?",
    options: [
      "A. Consumers",
      "B. Decomposers",
      "C. Producers",
      "D. Saprophytes"
    ],
    answer: "C",
    explanation: "Producers (autotrophs) such as green plants and algae convert light energy into chemical energy through photosynthesis.",
    subtopic: "food/energy relationships"
  },
  {
    question: "Which process do green plants use to trap light energy and convert it into chemical energy?",
    options: [
      "A. Respiration",
      "B. Photosynthesis",
      "C. Transpiration",
      "D. Fermentation"
    ],
    answer: "B",
    explanation: "Photosynthesis traps light energy to build glucose, storing chemical energy in the bonds of organic molecules.",
    subtopic: "food/energy relationships"
  },
  {
    question: "Animals that feed directly on producers are known as?",
    options: [
      "A. Secondary consumers",
      "B. Primary consumers",
      "C. Decomposers",
      "D. Producers"
    ],
    answer: "B",
    explanation: "Primary consumers (herbivores) eat producers and occupy the second trophic level of a food chain.",
    subtopic: "food/energy relationships"
  },
  {
    question: "In a food chain Grass → Grasshopper → Frog → Snake, the frog occupies which trophic level?",
    options: [
      "A. First trophic level",
      "B. Second trophic level",
      "C. Third trophic level",
      "D. Fourth trophic level"
    ],
    answer: "C",
    explanation: "Grass (1st), grasshopper (2nd), frog (3rd), snake (4th); the frog is a secondary consumer at the third trophic level.",
    subtopic: "food/energy relationships"
  },
  {
    question: "Which group of organisms feeds on dead organic matter and returns nutrients to the soil?",
    options: [
      "A. Producers",
      "B. Primary consumers",
      "C. Decomposers",
      "D. Carnivores"
    ],
    answer: "C",
    explanation: "Decomposers (bacteria, fungi) break down dead matter, releasing nutrients and playing a key role in energy flow.",
    subtopic: "food/energy relationships"
  },
  {
    question: "Approximately what fraction of energy is transferred from one trophic level to the next?",
    options: [
      "A. 50%",
      "B. 90%",
      "C. 10%",
      "D. 100%"
    ],
    answer: "C",
    explanation: "The 10% ecological efficiency rule states about 10% of energy passes to the next trophic level; the rest is lost.",
    subtopic: "food/energy relationships"
  },
  {
    question: "Most of the energy lost between trophic levels is lost in which form?",
    options: [
      "A. Light",
      "B. Heat",
      "C. Sound",
      "D. Electrical energy"
    ],
    answer: "B",
    explanation: "Energy is dissipated as heat during respiration and metabolic activities, in line with the second law of thermodynamics.",
    subtopic: "food/energy relationships"
  },
  {
    question: "The total dry mass of living organisms at a trophic level is referred to as?",
    options: [
      "A. Energy",
      "B. Biomass",
      "C. Carrying capacity",
      "D. Productivity"
    ],
    answer: "B",
    explanation: "Biomass is the dry weight of organic matter present at a trophic level and decreases up the food chain.",
    subtopic: "food/energy relationships"
  },
  {
    question: "Why are food chains usually limited to about four or five trophic levels?",
    options: [
      "A. Predators become too large",
      "B. Insufficient energy remains to support higher levels",
      "C. Plants stop growing",
      "D. Oxygen runs out"
    ],
    answer: "B",
    explanation: "Because only ~10% is transferred each step, energy becomes too little to sustain many higher trophic levels.",
    subtopic: "food/energy relationships"
  },
  {
    question: "An organism that obtains energy by eating both plants and animals is called a?",
    options: [
      "A. Herbivore",
      "B. Carnivore",
      "C. Omnivore",
      "D. Detritivore"
    ],
    answer: "C",
    explanation: "Omnivores feed on both producers and other consumers, occupying more than one trophic level.",
    subtopic: "food/energy relationships"
  },
  {
    question: "Which law of thermodynamics explains why energy is lost as heat and unavailable for reuse at each trophic level?",
    options: [
      "A. First law of thermodynamics",
      "B. Second law of thermodynamics",
      "C. Law of conservation of mass",
      "D. Boyle's law"
    ],
    answer: "B",
    explanation: "The second law states energy transformations increase entropy; much usable energy becomes dispersed heat.",
    subtopic: "food/energy relationships"
  },
  {
    question: "The total energy fixed by producers in an ecosystem per unit time is called?",
    options: [
      "A. Net primary productivity",
      "B. Gross primary productivity",
      "C. Secondary productivity",
      "D. Standing crop"
    ],
    answer: "B",
    explanation: "Gross primary productivity (GPP) is the total energy captured by photosynthesis before respiratory losses.",
    subtopic: "food/energy relationships"
  },
  {
    question: "Gross primary productivity minus energy lost in respiration equals?",
    options: [
      "A. Net primary productivity",
      "B. Biomass of consumers",
      "C. Secondary productivity",
      "D. Energy pyramid"
    ],
    answer: "A",
    explanation: "Net primary productivity (NPP) = GPP − respiratory losses, and represents energy available to consumers.",
    subtopic: "food/energy relationships"
  },
  {
    question: "Which of these organisms is an example of a decomposer?",
    options: [
      "A. Lion",
      "B. Grass",
      "C. Mushroom (fungus)",
      "D. Grasshopper"
    ],
    answer: "C",
    explanation: "Fungi such as mushrooms are decomposers that break down dead organic matter and recycle nutrients.",
    subtopic: "food/energy relationships"
  },
  {
    question: "The series of organisms through which energy passes by repeated feeding is called a?",
    options: [
      "A. Food web",
      "B. Food chain",
      "C. Energy pyramid",
      "D. Trophic cascade"
    ],
    answer: "B",
    explanation: "A food chain is a linear sequence showing energy transfer from producers through successive consumers.",
    subtopic: "food/energy relationships"
  },
  {
    question: "Interconnected food chains in a community form a?",
    options: [
      "A. Food web",
      "B. Pyramid of numbers",
      "C. Trophic level",
      "D. Niche"
    ],
    answer: "A",
    explanation: "A food web is the network of many overlapping food chains showing complex feeding relationships.",
    subtopic: "food/energy relationships"
  },
  {
    question: "Organisms that feed on detritus (dead plant and animal remains) are called?",
    options: [
      "A. Detritivores",
      "B. Autotrophs",
      "C. Producers",
      "D. Carnivores"
    ],
    answer: "A",
    explanation: "Detritivores such as earthworms and termites consume detritus, linking dead matter to decomposers.",
    subtopic: "food/energy relationships"
  },
  {
    question: "The position an organism occupies in a food chain is its?",
    options: [
      "A. Niche",
      "B. Habitat",
      "C. Trophic level",
      "D. Population"
    ],
    answer: "C",
    explanation: "Trophic level indicates an organism's feeding position, from producers at level 1 upward through consumers.",
    subtopic: "food/energy relationships"
  },
  {
    question: "Why is energy said to 'flow' through an ecosystem rather than cycle?",
    options: [
      "A. It is stored forever in biomass",
      "B. It enters as light and leaves mostly as heat, so it is not reused",
      "C. It moves in a circle",
      "D. Producers recycle it completely"
    ],
    answer: "B",
    explanation: "Energy enters as sunlight and is progressively lost as heat, so it flows one way and is not recycled like nutrients.",
    subtopic: "food/energy relationships"
  },
  {
    question: "Which statement about entropy and energy flow is correct?",
    options: [
      "A. Entropy decreases as energy moves up trophic levels",
      "B. Energy becomes more concentrated at higher levels",
      "C. Entropy increases as usable energy is lost as heat",
      "D. Entropy is constant throughout"
    ],
    answer: "C",
    explanation: "With each transfer, usable energy decreases and disorder (entropy) increases as heat is dissipated.",
    subtopic: "food/energy relationships"
  },
  {
    question: "Carnivores that feed on herbivores are classified as?",
    options: [
      "A. Primary consumers",
      "B. Secondary consumers",
      "C. Producers",
      "D. Decomposers"
    ],
    answer: "B",
    explanation: "Secondary consumers are carnivores that eat primary consumers (herbivores), occupying the third trophic level.",
    subtopic: "food/energy relationships"
  },
  {
    question: "The amount of energy stored at each trophic level is greatest at which level?",
    options: [
      "A. Tertiary consumers",
      "B. Secondary consumers",
      "C. Primary consumers",
      "D. Producers"
    ],
    answer: "D",
    explanation: "Producers capture the most energy via photosynthesis, so the greatest energy concentration is at the base.",
    subtopic: "food/energy relationships"
  },
  {
    question: "In deep-sea hydrothermal vent communities, the energy source is mainly?",
    options: [
      "A. Sunlight",
      "B. Chemical energy from inorganic compounds",
      "C. Wind",
      "D. Moonlight"
    ],
    answer: "B",
    explanation: "Chemosynthetic bacteria at vents use chemical energy from inorganic compounds, not sunlight, to produce food.",
    subtopic: "food/energy relationships"
  },
  {
    question: "Which of the following best describes the role of decomposers in energy flow?",
    options: [
      "A. They capture solar energy",
      "B. They release trapped energy from dead matter back to the environment",
      "C. They are the first trophic level",
      "D. They produce oxygen for producers"
    ],
    answer: "B",
    explanation: "Decomposers break down dead organisms, releasing energy and nutrients that re-enter the ecosystem.",
    subtopic: "food/energy relationships"
  },
  // ---------- pyramid of energy/numbers ----------
  {
    question: "The pyramid of energy in an ecosystem is always?",
    options: [
      "A. Inverted",
      "B. Upright",
      "C. Diamond-shaped",
      "D. Irregular"
    ],
    answer: "B",
    explanation: "Because energy decreases at each trophic level, the energy pyramid is always upright (broad at base).",
    subtopic: "pyramid of energy/numbers"
  },
  {
    question: "A pyramid of numbers may be inverted in which of these cases?",
    options: [
      "A. Grass → Grasshopper → Frog",
      "B. One tree → many insect parasites",
      "C. Lion → Zebra → Grass",
      "D. Phytoplankton → Zooplankton"
    ],
    answer: "B",
    explanation: "A single large producer (tree) can support many parasites, making the pyramid of numbers inverted.",
    subtopic: "pyramid of energy/numbers"
  },
  {
    question: "The pyramid of biomass shows the?",
    options: [
      "A. Number of organisms at each level",
      "B. Dry weight of organisms at each trophic level",
      "C. Amount of energy lost as heat",
      "D. Rate of photosynthesis"
    ],
    answer: "B",
    explanation: "A biomass pyramid displays the total dry mass of organisms present at each trophic level.",
    subtopic: "pyramid of energy/numbers"
  },
  {
    question: "In a pond ecosystem, the biomass pyramid can be inverted because?",
    options: [
      "A. Fish are heavier than plants",
      "B. Small, rapidly reproducing phytoplankton support larger zooplankton biomass",
      "C. Plants do not photosynthesize",
      "D. Decomposers dominate"
    ],
    answer: "B",
    explanation: "Phytoplankton reproduce so fast that, though small, they support a greater standing biomass of zooplankton.",
    subtopic: "pyramid of energy/numbers"
  },
  {
    question: "Which pyramid can never be inverted?",
    options: [
      "A. Pyramid of numbers",
      "B. Pyramid of biomass",
      "C. Pyramid of energy",
      "D. Pyramid of individuals"
    ],
    answer: "C",
    explanation: "Energy decreases at each transfer due to the 10% rule, so the energy pyramid is always upright.",
    subtopic: "pyramid of energy/numbers"
  },
  {
    question: "The broad base of an energy pyramid represents?",
    options: [
      "A. Tertiary consumers",
      "B. Secondary consumers",
      "C. Producers",
      "D. Decomposers"
    ],
    answer: "C",
    explanation: "Producers form the base of the energy pyramid because they contain the most captured energy.",
    subtopic: "pyramid of energy/numbers"
  },
  {
    question: "What does each bar in a pyramid of numbers represent?",
    options: [
      "A. Energy content",
      "B. Number of organisms at a trophic level",
      "C. Biomass only",
      "D. Rate of respiration"
    ],
    answer: "B",
    explanation: "The pyramid of numbers plots the number of individual organisms at each trophic level.",
    subtopic: "pyramid of energy/numbers"
  },
  {
    question: "Which of the following is a major limitation of the pyramid of numbers?",
    options: [
      "A. It ignores energy",
      "B. It counts individuals, so a few large producers may support many small consumers",
      "C. It cannot be drawn",
      "D. It always shows energy loss"
    ],
    answer: "B",
    explanation: "Counting individuals can mislead because one large organism (e.g. a tree) may support many small ones.",
    subtopic: "pyramid of energy/numbers"
  },
  {
    question: "In the food chain Tree → Caterpillar → Bird, the pyramid of numbers would likely be?",
    options: [
      "A. Upright",
      "B. Inverted (few trees, many caterpillars)",
      "C. A straight line",
      "D. Equal at all levels"
    ],
    answer: "B",
    explanation: "One tree supports many caterpillars, so the number of organisms increases upward, inverting the pyramid.",
    subtopic: "pyramid of energy/numbers"
  },
  {
    question: "The term for each step in a food chain where energy is transferred is?",
    options: [
      "A. Energy unit",
      "B. Trophic level",
      "C. Food web",
      "D. Biomass band"
    ],
    answer: "B",
    explanation: "Trophic levels are the successive steps (producer, primary consumer, etc.) in a food chain/energy pyramid.",
    subtopic: "pyramid of energy/numbers"
  },
  {
    question: "Which pyramid directly reflects the 10% ecological efficiency rule?",
    options: [
      "A. Pyramid of numbers",
      "B. Pyramid of energy",
      "C. Pyramid of age",
      "D. Pyramid of species"
    ],
    answer: "B",
    explanation: "The energy pyramid visibly narrows upward because only about 10% of energy passes to the next level.",
    subtopic: "pyramid of energy/numbers"
  },
  {
    question: "A biomass pyramid is usually upright on land because?",
    options: [
      "A. Consumers are larger than producers",
      "B. Producers have the greatest total dry mass",
      "C. Decomposers dominate biomass",
      "D. Energy increases upward"
    ],
    answer: "B",
    explanation: "On land, the combined dry mass of plants exceeds that of the consumers they support, giving an upright shape.",
    subtopic: "pyramid of energy/numbers"
  },
  {
    question: "Which statement about ecological pyramids is true?",
    options: [
      "A. All three types are always upright",
      "B. Energy pyramids are always upright but numbers/biomass may invert",
      "C. Biomass pyramids are always inverted",
      "D. Numbers pyramids are always upright"
    ],
    answer: "B",
    explanation: "Only the energy pyramid is always upright; pyramids of numbers and biomass can sometimes invert.",
    subtopic: "pyramid of energy/numbers"
  },
  {
    question: "The apex (top) of an energy pyramid is occupied by?",
    options: [
      "A. Producers",
      "B. Primary consumers",
      "C. Top carnivores / tertiary consumers",
      "D. Decomposers"
    ],
    answer: "C",
    explanation: "The smallest top of the energy pyramid holds top predators (tertiary consumers) with the least energy.",
    subtopic: "pyramid of energy/numbers"
  },
  {
    question: "Why does the energy pyramid narrow toward the top?",
    options: [
      "A. More producers are eaten",
      "B. Energy is lost as heat at each transfer (~90% per level)",
      "C. Consumers grow smaller",
      "D. Sunlight weakens"
    ],
    answer: "B",
    explanation: "About 90% of energy is lost (mostly as heat) at each trophic transfer, leaving progressively less upward.",
    subtopic: "pyramid of energy/numbers"
  },
  {
    question: "Which of these is an example of a producer at the base of a pyramid?",
    options: [
      "A. Hawk",
      "B. Grass",
      "C. Frog",
      "D. Snake"
    ],
    answer: "B",
    explanation: "Grass is a photosynthetic producer and forms the base (first trophic level) of terrestrial pyramids.",
    subtopic: "pyramid of energy/numbers"
  },
  {
    question: "A pyramid of energy is measured in units of?",
    options: [
      "A. Individuals per area",
      "B. Energy per unit area per unit time (e.g. kJ m⁻² yr⁻¹)",
      "C. Grams of dry mass",
      "D. Degrees Celsius"
    ],
    answer: "B",
    explanation: "Energy pyramids use rates of energy flow, e.g. kilojoules per square metre per year.",
    subtopic: "pyramid of energy/numbers"
  },
  {
    question: "In most ecosystems, the trophic level with the largest number of individuals is usually?",
    options: [
      "A. Tertiary consumers",
      "B. Secondary consumers",
      "C. Primary consumers or producers",
      "D. Top predators"
    ],
    answer: "C",
    explanation: "Producers and primary consumers typically have the most individuals, forming the broad base of number pyramids.",
    subtopic: "pyramid of energy/numbers"
  },
  {
    question: "What happens to the remaining ~90% of energy not passed to the next trophic level?",
    options: [
      "A. It is stored as gold",
      "B. It is lost mainly as heat through respiration and undigested waste",
      "C. It returns to the sun",
      "D. It becomes biomass of producers"
    ],
    answer: "B",
    explanation: "Most energy is lost as metabolic heat or leaves the chain as faeces/uneaten remains, not transferred upward.",
    subtopic: "pyramid of energy/numbers"
  },
  {
    question: "Compared with the energy pyramid, the pyramid of biomass in a pond is often?",
    options: [
      "A. Always upright and identical",
      "B. Inverted, because small producers support larger consumer biomass",
      "C. Diamond-shaped",
      "D. Impossible to measure"
    ],
    answer: "B",
    explanation: "In aquatic systems, rapidly replaced phytoplankton can support a larger standing biomass of consumers, inverting biomass.",
    subtopic: "pyramid of energy/numbers"
  },
  {
    question: "The shape of ecological pyramids helps illustrate that?",
    options: [
      "A. Energy increases upward",
      "B. There is progressively less energy/biomass/numbers at higher levels",
      "C. Producers are rare",
      "D. Consumers need no energy"
    ],
    answer: "B",
    explanation: "Pyramids show the steady decrease in energy, biomass, or numbers from producers up to top consumers.",
    subtopic: "pyramid of energy/numbers"
  },
  {
    question: "Which organism would appear at the second level of a terrestrial energy pyramid?",
    options: [
      "A. Grass",
      "B. Grasshopper (herbivore)",
      "C. Snake",
      "D. Hawk"
    ],
    answer: "B",
    explanation: "Primary consumers (herbivores like grasshoppers) occupy the second trophic level above producers.",
    subtopic: "pyramid of energy/numbers"
  },
  {
    question: "When a pyramid of numbers is inverted, it most likely indicates?",
    options: [
      "A. Energy is increasing",
      "B. A few large producers support many small consumers",
      "C. Producers are absent",
      "D. The ecosystem is dead"
    ],
    answer: "B",
    explanation: "An inverted number pyramid occurs when one or few large producers (e.g. a tree) support many small consumers.",
    subtopic: "pyramid of energy/numbers"
  },
  {
    question: "Using the 10% ecological efficiency rule, supporting 10 kg of carnivore biomass requires roughly how much producer biomass?",
    options: [
      "A. 10 kg",
      "B. 100 kg",
      "C. 1000 kg",
      "D. 10000 kg"
    ],
    answer: "C",
    explanation: "Two 10% transfers: 10 kg carnivore ← 100 kg herbivore ← 1000 kg producer, so about 1000 kg of producers are needed.",
    subtopic: "pyramid of energy/numbers"
  },
  {
    question: "A biomass pyramid is usually expressed in units of?",
    options: [
      "A. Kilojoules per year",
      "B. Grams (or kg) of dry mass per unit area",
      "C. Number of individuals",
      "D. Degrees Celsius"
    ],
    answer: "B",
    explanation: "Biomass pyramids measure the dry mass of organisms per unit area (e.g. g m⁻²), not energy or head count.",
    subtopic: "pyramid of energy/numbers"
  }
];

module.exports = questions;
