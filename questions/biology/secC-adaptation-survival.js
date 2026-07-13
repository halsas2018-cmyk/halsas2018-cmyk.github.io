// biology — Adaptation for Survival
const questions = [
  {
    question: "An adaptation is a feature that enables an organism to?",
    options: [
      "A. survive and reproduce in its habitat",
      "B. become extinct",
      "C. change its DNA directly",
      "D. grow taller"
    ],
    answer: "A",
    explanation: "Adaptations improve an organism's fitness in its environment.",
    subtopic: "Ecological Adaptation"
  },
  {
    question: "Which of the following is a behavioural adaptation?",
    options: [
      "A. bird migration",
      "B. thick fur",
      "C. long roots",
      "D. green colour"
    ],
    answer: "A",
    explanation: "Migration is a behaviour; fur, roots and colour are structural/physical traits.",
    subtopic: "Behavioural Adaptation"
  },
  {
    question: "A physiological adaptation refers to a change in?",
    options: [
      "A. body shape",
      "B. internal body processes",
      "C. colour only",
      "D. movement only"
    ],
    answer: "B",
    explanation: "Physiological adaptations are functional/internal responses, such as metabolic changes.",
    subtopic: "Physiological Adaptation"
  },
  {
    question: "Hibernation in bears is an example of a?",
    options: [
      "A. structural adaptation",
      "B. behavioural adaptation",
      "C. genetic mutation",
      "D. disease"
    ],
    answer: "B",
    explanation: "Hibernation is a seasonal behaviour that conserves energy.",
    subtopic: "Behavioural Adaptation"
  },
  {
    question: "Estivation (summer dormancy) helps animals survive?",
    options: [
      "A. cold winters",
      "B. drought and heat",
      "C. predators",
      "D. floods"
    ],
    answer: "B",
    explanation: "Estivation is dormancy during hot, dry periods to avoid dessication.",
    subtopic: "Physiological Adaptation"
  },
  {
    question: "Many desert animals are nocturnal in order to avoid?",
    options: [
      "A. daytime heat",
      "B. cold",
      "C. rain",
      "D. light"
    ],
    answer: "A",
    explanation: "Being active at night reduces water loss and heat stress.",
    subtopic: "Behavioural Adaptation"
  },
  {
    question: "Estivation is commonly seen in?",
    options: [
      "A. desert snails and lungfish",
      "B. polar bears",
      "C. penguins",
      "D. whales"
    ],
    answer: "A",
    explanation: "These animals aestivate through dry seasons to survive water shortage.",
    subtopic: "Physiological Adaptation"
  },
  {
    question: "A physiological adaptation of camels is that they?",
    options: [
      "A. produce concentrated urine to conserve water",
      "B. drink seawater",
      "C. sweat profusely",
      "D. pant constantly"
    ],
    answer: "A",
    explanation: "Concentrated urine and dry faeces minimize water loss in camels.",
    subtopic: "Physiological Adaptation"
  },
  {
    question: "Bears hibernate in winter mainly to survive?",
    options: [
      "A. food scarcity and cold",
      "B. excessive heat",
      "C. floods",
      "D. predators"
    ],
    answer: "A",
    explanation: "Hibernation reduces energy needs when food is unavailable in winter.",
    subtopic: "Behavioural Adaptation"
  },
  {
    question: "The seasonal movement of birds from one region to another is triggered by?",
    options: [
      "A. random events",
      "B. seasonal changes in day length and climate",
      "C. earthquakes",
      "D. moon phases"
    ],
    answer: "B",
    explanation: "Changing photoperiod and temperature cue migratory behaviour.",
    subtopic: "Behavioural Adaptation"
  },
  {
    question: "Torpor is a temporary state of?",
    options: [
      "A. high activity",
      "B. reduced metabolic rate",
      "C. death",
      "D. rapid growth"
    ],
    answer: "B",
    explanation: "Torpor lowers metabolism and body temperature to save energy.",
    subtopic: "Physiological Adaptation"
  },
  {
    question: "The kangaroo rat survives in deserts with little drinking water because it?",
    options: [
      "A. obtains water from food and metabolism",
      "B. drinks dew only",
      "C. stores water in its bladder",
      "D. is a fish"
    ],
    answer: "A",
    explanation: "Metabolic water from seed digestion meets most of its needs.",
    subtopic: "Physiological Adaptation"
  },
  {
    question: "Some prey animals avoid predators by?",
    options: [
      "A. flocking or schooling together",
      "B. sleeping all day",
      "C. shedding skin",
      "D. growing taller"
    ],
    answer: "A",
    explanation: "Grouping reduces individual predation risk through confusion and vigilance.",
    subtopic: "Behavioural Adaptation"
  },
  {
    question: "A physiological adaptation to living at high altitude is?",
    options: [
      "A. increased red blood cell count",
      "B. fewer lungs",
      "C. less haemoglobin",
      "D. a smaller heart"
    ],
    answer: "A",
    explanation: "More red cells and haemoglobin improve oxygen transport in thin air.",
    subtopic: "Physiological Adaptation"
  },
  {
    question: "People native to high mountains tend to have?",
    options: [
      "A. lower blood pressure only",
      "B. higher haemoglobin concentration",
      "C. reduced lung capacity",
      "D. smaller chests"
    ],
    answer: "B",
    explanation: "Higher haemoglobin compensates for lower oxygen availability.",
    subtopic: "Physiological Adaptation"
  },
  {
    question: "A behavioural response to cold in some animals is?",
    options: [
      "A. huddling together for warmth",
      "B. shedding fur",
      "C. panting",
      "D. migrating to the poles"
    ],
    answer: "A",
    explanation: "Huddling reduces heat loss by sharing body warmth.",
    subtopic: "Behavioural Adaptation"
  },
  {
    question: "Ecological adaptation means fitting into a particular?",
    options: [
      "A. laboratory",
      "B. habitat and way of life",
      "C. city",
      "D. outer space"
    ],
    answer: "B",
    explanation: "Organisms adapt to the conditions and resources of their environment.",
    subtopic: "Ecological Adaptation"
  },
  {
    question: "The role and position of an organism in its habitat is called its?",
    options: [
      "A. genus",
      "B. niche",
      "C. species",
      "D. family"
    ],
    answer: "B",
    explanation: "A niche includes how an organism lives, feeds and interacts with the ecosystem.",
    subtopic: "Ecological Adaptation"
  },
  {
    question: "Camouflage primarily helps an animal?",
    options: [
      "A. become ill",
      "B. survive by avoiding detection",
      "C. mutate",
      "D. grow faster"
    ],
    answer: "B",
    explanation: "Blending with the background reduces predation or aids hunting.",
    subtopic: "Behavioural Adaptation"
  },
  {
    question: "Plants in cold temperate regions often survive winter by entering?",
    options: [
      "A. dormancy",
      "B. year-round growth",
      "C. constant flowering",
      "D. permanent leaf loss"
    ],
    answer: "A",
    explanation: "Dormancy suspends growth until conditions improve.",
    subtopic: "Physiological Adaptation"
  },
  {
    question: "Xerophytes are plants adapted to?",
    options: [
      "A. dry conditions",
      "B. aquatic life",
      "C. high salt",
      "D. cold only"
    ],
    answer: "A",
    explanation: "Xerophytes tolerate drought through water-conserving features.",
    subtopic: "Ecological Adaptation"
  },
  {
    question: "Hydrophytes are plants adapted to?",
    options: [
      "A. deserts",
      "B. aquatic environments",
      "C. mountains",
      "D. caves"
    ],
    answer: "B",
    explanation: "Hydrophytes live in water and have features like air spaces for buoyancy.",
    subtopic: "Ecological Adaptation"
  },
  {
    question: "Halophytes are plants that tolerate?",
    options: [
      "A. low salt",
      "B. high salt concentrations",
      "C. acid rain only",
      "D. freezing only"
    ],
    answer: "B",
    explanation: "Halophytes grow in saline soils such as mangroves and salt marshes.",
    subtopic: "Ecological Adaptation"
  },
  {
    question: "A physiological adaptation of many desert plants is?",
    options: [
      "A. CAM photosynthesis at night",
      "B. C3 photosynthesis only in heat",
      "C. no photosynthesis",
      "D. growing only underwater"
    ],
    answer: "A",
    explanation: "Crassulacean Acid Metabolism opens stomata at night, reducing water loss.",
    subtopic: "Physiological Adaptation"
  },
  {
    question: "Lizards regulate their body temperature behaviourally by?",
    options: [
      "A. basking in the sun",
      "B. sleeping underground constantly",
      "C. swimming",
      "D. flying"
    ],
    answer: "A",
    explanation: "Basking warms ectothermic lizards; shade-seeking cools them.",
    subtopic: "Behavioural Adaptation"
  },
  {
    question: "A behavioural adaptation to limited food supply is?",
    options: [
      "A. storing food in caches",
      "B. always overeating",
      "C. ignoring food",
      "D. eating stones"
    ],
    answer: "A",
    explanation: "Caching food helps animals survive lean periods.",
    subtopic: "Behavioural Adaptation"
  },
  {
    question: "Antifreeze proteins in Arctic fish prevent?",
    options: [
      "A. ice crystals forming in tissues",
      "B. swimming",
      "C. breathing",
      "D. eating"
    ],
    answer: "A",
    explanation: "These proteins lower the freezing point of body fluids.",
    subtopic: "Physiological Adaptation"
  },
  {
    question: "Some frogs survive being frozen by producing?",
    options: [
      "A. glucose as a cryoprotectant",
      "B. more salt",
      "C. alcohol",
      "D. oxygen gas"
    ],
    answer: "A",
    explanation: "Glucose protects cells from ice damage during freezing.",
    subtopic: "Physiological Adaptation"
  },
  {
    question: "Animals living in caves often lose?",
    options: [
      "A. pigmentation and functional eyes",
      "B. all their organs",
      "C. their DNA",
      "D. their cells"
    ],
    answer: "A",
    explanation: "In perpetual darkness, sight and colour are selected against.",
    subtopic: "Ecological Adaptation"
  },
  {
    question: "Ecological succession eventually leads to a relatively?",
    options: [
      "A. stable climax community",
      "B. constant extinction",
      "C. desert",
      "D. permanent flood"
    ],
    answer: "A",
    explanation: "Succession progresses toward a stable, self-sustaining community.",
    subtopic: "Ecological Adaptation"
  },
  {
    question: "Competition between organisms drives adaptation through?",
    options: [
      "A. natural selection",
      "B. random chance",
      "C. magic",
      "D. weather alone"
    ],
    answer: "A",
    explanation: "Better competitors leave more offspring, spreading advantageous traits.",
    subtopic: "Ecological Adaptation"
  },
  {
    question: "Predator-prey relationships drive?",
    options: [
      "A. co-adaptation of both",
      "B. extinction of all predators",
      "C. no change",
      "D. symbiosis only"
    ],
    answer: "A",
    explanation: "Predators and prey continually adapt in response to each other.",
    subtopic: "Ecological Adaptation"
  },
  {
    question: "Symbiosis is a close, long-term relationship between?",
    options: [
      "A. two species",
      "B. a single species",
      "C. rocks",
      "D. water and air"
    ],
    answer: "A",
    explanation: "Symbiosis involves interactions between two different species.",
    subtopic: "Ecological Adaptation"
  },
  {
    question: "Mutualism is an interaction that benefits?",
    options: [
      "A. one species only",
      "B. both species",
      "C. neither species",
      "D. only the environment"
    ],
    answer: "B",
    explanation: "In mutualism both partners gain, e.g. bees and flowers.",
    subtopic: "Ecological Adaptation"
  },
  {
    question: "Parasitism benefits the?",
    options: [
      "A. host",
      "B. parasite",
      "C. both equally",
      "D. neither"
    ],
    answer: "B",
    explanation: "The parasite gains at the expense of the host.",
    subtopic: "Ecological Adaptation"
  },
  {
    question: "Commensalism is a relationship that benefits?",
    options: [
      "A. both species",
      "B. one species while the other is unaffected",
      "C. neither",
      "D. the host harmfully"
    ],
    answer: "B",
    explanation: "One species benefits and the other is neither helped nor harmed.",
    subtopic: "Ecological Adaptation"
  },
  {
    question: "A physiological adaptation of fish living in water with little oxygen is?",
    options: [
      "A. gills with a large surface area",
      "B. lungs",
      "C. skin only",
      "D. no respiration"
    ],
    answer: "A",
    explanation: "Large gill surface area maximizes oxygen uptake from water.",
    subtopic: "Physiological Adaptation"
  },
  {
    question: "Schooling behaviour in fish provides?",
    options: [
      "A. protection from predators",
      "B. no benefit",
      "C. disease",
      "D. death"
    ],
    answer: "A",
    explanation: "Schools confuse predators and reduce individual risk.",
    subtopic: "Behavioural Adaptation"
  },
  {
    question: "Animals in temperate zones usually breed during?",
    options: [
      "A. winter only",
      "B. spring and summer",
      "C. midnight",
      "D. random times"
    ],
    answer: "B",
    explanation: "Warmth and food abundance in spring/summer favour offspring survival.",
    subtopic: "Behavioural Adaptation"
  },
  {
    question: "A physiological response to cold in mammals is?",
    options: [
      "A. shivering to generate heat",
      "B. sweating",
      "C. panting",
      "D. shedding fur"
    ],
    answer: "A",
    explanation: "Shivering muscle activity produces heat to maintain body temperature.",
    subtopic: "Physiological Adaptation"
  },
  {
    question: "The process by which beneficial adaptations become common is?",
    options: [
      "A. natural selection",
      "B. Lamarckism",
      "C. use and disuse",
      "D. inheritance of acquired traits"
    ],
    answer: "A",
    explanation: "Natural selection favours traits that improve survival and reproduction.",
    subtopic: "Ecological Adaptation"
  },
  {
    question: "Acclimatization is a short-term?",
    options: [
      "A. structural mutation",
      "B. physiological adjustment",
      "C. permanent change",
      "D. extinction event"
    ],
    answer: "B",
    explanation: "Acclimatization is reversible physiological change to current conditions.",
    subtopic: "Physiological Adaptation"
  },
  {
    question: "Genetic adaptations are passed from one generation to the next through?",
    options: [
      "A. learning alone",
      "B. genes",
      "C. the environment directly",
      "D. food"
    ],
    answer: "B",
    explanation: "Heritable traits are encoded in DNA and inherited.",
    subtopic: "Ecological Adaptation"
  },
  {
    question: "A behavioural adaptation shown by some social insects is?",
    options: [
      "A. swarming",
      "B. photosynthesis",
      "C. root growth",
      "D. blooming"
    ],
    answer: "A",
    explanation: "Swarming is coordinated group behaviour for movement or defence.",
    subtopic: "Behavioural Adaptation"
  },
  {
    question: "Organisms in deserts show adaptations mainly to cope with?",
    options: [
      "A. water scarcity",
      "B. flooding",
      "C. constant cold",
      "D. total darkness"
    ],
    answer: "A",
    explanation: "Conserving and obtaining water is the key desert challenge.",
    subtopic: "Ecological Adaptation"
  },
  {
    question: "The kangaroo rat's concentrated urine is a(n)?",
    options: [
      "A. structural feature",
      "B. physiological adaptation",
      "C. behavioural trait",
      "D. disease"
    ],
    answer: "B",
    explanation: "Concentrated urine is a kidney function that conserves water.",
    subtopic: "Physiological Adaptation"
  },
  {
    question: "The phrase 'survival of the fittest' means survival of those best?",
    options: [
      "A. adapted to the environment",
      "B. physically strongest",
      "C. tallest",
      "D. fastest runners"
    ],
    answer: "A",
    explanation: "Fitness means reproductive success, not just strength.",
    subtopic: "Ecological Adaptation"
  },
  {
    question: "An ecological adaptation to periodic fires is?",
    options: [
      "A. seeds that germinate after fire (serotiny)",
      "B. dying immediately",
      "C. no change",
      "D. migrating permanently"
    ],
    answer: "A",
    explanation: "Some plants release seeds only after fire clears competition.",
    subtopic: "Ecological Adaptation"
  },
  {
    question: "To avoid midday heat, many desert animals are?",
    options: [
      "A. nocturnal",
      "B. always basking",
      "C. constantly huddling",
      "D. burrowing only at night"
    ],
    answer: "A",
    explanation: "Nocturnal activity avoids the hottest part of the day.",
    subtopic: "Behavioural Adaptation"
  },
  {
    question: "Adaptations ultimately increase an organism's?",
    options: [
      "A. fitness (survival and reproduction)",
      "B. size only",
      "C. age only",
      "D. colour only"
    ],
    answer: "A",
    explanation: "Fitness is the measure of evolutionary success.",
    subtopic: "Ecological Adaptation"
  }
];

module.exports = questions;
