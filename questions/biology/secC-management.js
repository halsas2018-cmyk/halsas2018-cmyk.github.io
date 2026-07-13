// biology — Ecological Management
const questions = [
  // ---- Tolerance (10) ----
  {
    question: "The range of environmental conditions within which an organism can survive is called its?",
    options: [
      "A. Habitat",
      "B. Tolerance range",
      "C. Niche",
      "D. Ecosystem"
    ],
    answer: "B",
    explanation: "The tolerance range is the span of an environmental factor (e.g. temperature) over which an organism can survive and reproduce.",
    subtopic: "Tolerance"
  },
  {
    question: "The point within a tolerance range where an organism functions best is the?",
    options: [
      "A. Lower limit",
      "B. Upper limit",
      "C. Optimum",
      "D. Carrying capacity"
    ],
    answer: "C",
    explanation: "The optimum is the value of an environmental factor at which the organism shows maximum performance or fitness.",
    subtopic: "Tolerance"
  },
  {
    question: "Beyond the maximum limit of tolerance, an organism will?",
    options: [
      "A. Grow faster",
      "B. Die or fail to survive",
      "C. Reproduce rapidly",
      "D. Become dormant permanently"
    ],
    answer: "B",
    explanation: "Beyond the upper limit of tolerance, conditions become lethal and the organism cannot survive.",
    subtopic: "Tolerance"
  },
  {
    question: "The concept that each species has a range of tolerance for every environmental factor is central to?",
    options: [
      "A. The law of minimum",
      "B. Ecological tolerance",
      "C. Succession",
      "D. Commensalism"
    ],
    answer: "B",
    explanation: "Ecological tolerance describes how species differ in the range of conditions they can endure for each factor.",
    subtopic: "Tolerance"
  },
  {
    question: "An organism with a narrow tolerance range is described as?",
    options: [
      "A. Eurytopic",
      "B. Stenotopic",
      "C. Cosmopolitan",
      "D. Endemic"
    ],
    answer: "B",
    explanation: "Stenotopic organisms tolerate only a narrow range of an environmental factor; eurytopic ones tolerate a wide range.",
    subtopic: "Tolerance"
  },
  {
    question: "Fish such as tilapia that tolerate a wide range of salinity are described as?",
    options: [
      "A. Stenohaline",
      "B. Euryhaline",
      "C. Stenothermal",
      "D. Eurythermal"
    ],
    answer: "B",
    explanation: "Euryhaline organisms tolerate a wide range of salt concentrations, unlike stenohaline organisms which tolerate only a narrow range.",
    subtopic: "Tolerance"
  },
  {
    question: "Organisms that tolerate a wide range of temperatures are called?",
    options: [
      "A. Stenothermal",
      "B. Eurythermal",
      "C. Homeothermic",
      "D. Poikilothermic"
    ],
    answer: "B",
    explanation: "Eurythermal organisms withstand a wide temperature range; stenothermal organisms tolerate only a narrow range.",
    subtopic: "Tolerance"
  },
  {
    question: "At the lower limit of tolerance, an organism is said to be at its?",
    options: [
      "A. Optimum point",
      "B. Minimum limit",
      "C. Carrying capacity",
      "D. Threshold of development"
    ],
    answer: "B",
    explanation: "The lower limit (minimum limit) is the lowest value of a factor at which the organism can still survive.",
    subtopic: "Tolerance"
  },
  {
    question: "The zone of tolerance is best illustrated by a?",
    options: [
      "A. Pyramid of energy",
      "B. Bell-shaped population response curve",
      "C. Food chain",
      "D. Climax community"
    ],
    answer: "B",
    explanation: "A bell-shaped curve shows low survival at the limits and high performance at the optimum within the tolerance range.",
    subtopic: "Tolerance"
  },
  {
    question: "A species found only in clean, well-oxygenated water is said to have a narrow tolerance for?",
    options: [
      "A. Light",
      "B. Dissolved oxygen",
      "C. Salinity",
      "D. pH alone"
    ],
    answer: "B",
    explanation: "Such species are sensitive to low oxygen and indicate good water quality, reflecting a narrow tolerance for dissolved oxygen.",
    subtopic: "Tolerance"
  },

  // ---- Minimum and maximum limits (10) ----
  {
    question: "The minimum and maximum limits of tolerance together define an organism's?",
    options: [
      "A. Niche width",
      "B. Tolerance range",
      "C. Biome",
      "D. Trophic level"
    ],
    answer: "B",
    explanation: "The tolerance range is bounded by the minimum (lower) and maximum (upper) limits for a given factor.",
    subtopic: "Minimum and maximum limits"
  },
  {
    question: "Between the limits of tolerance and the optimum, survival is?",
    options: [
      "A. Impossible",
      "B. Possible but reduced",
      "C. At its maximum",
      "D. Identical to the optimum"
    ],
    answer: "B",
    explanation: "Just inside the limits organisms survive but at reduced vigour; performance peaks only near the optimum.",
    subtopic: "Minimum and maximum limits"
  },
  {
    question: "If the temperature rises above a fish's maximum limit, the most likely outcome is?",
    options: [
      "A. Faster growth",
      "B. Death",
      "C. Migration to colder water only",
      "D. Increased reproduction"
    ],
    answer: "B",
    explanation: "Exceeding the upper limit of tolerance is lethal, so the fish dies rather than benefits.",
    subtopic: "Minimum and maximum limits"
  },
  {
    question: "The lower limit of light for a green plant is the point below which it cannot?",
    options: [
      "A. Transpire",
      "B. Photosynthesise enough to survive",
      "C. Absorb water",
      "D. Respire"
    ],
    answer: "B",
    explanation: "Below the minimum light intensity, photosynthesis cannot meet respiratory needs and the plant cannot survive.",
    subtopic: "Minimum and maximum limits"
  },
  {
    question: "Which statement about tolerance limits is correct?",
    options: [
      "A. All species have identical limits",
      "B. Limits are fixed and never change",
      "C. Limits differ among species and factors",
      "D. Only animals have limits"
    ],
    answer: "C",
    explanation: "Tolerance limits vary between species and between different environmental factors.",
    subtopic: "Minimum and maximum limits"
  },
  {
    question: "Acclimatisation can shift an organism's?",
    options: [
      "A. Optimum permanently",
      "B. Tolerance limits somewhat",
      "C. Niche completely",
      "D. Trophic level"
    ],
    answer: "B",
    explanation: "Acclimatisation can adjust tolerance limits within limits, but does not remove them entirely.",
    subtopic: "Minimum and maximum limits"
  },
  {
    question: "The upper limit of soil pH for most crops is around?",
    options: [
      "A. 2",
      "B. 8.5",
      "C. 14",
      "D. 0"
    ],
    answer: "B",
    explanation: "Most crops tolerate soil pH up to about 8.5; strongly alkaline soils (near 14) are unsuitable.",
    subtopic: "Minimum and maximum limits"
  },
  {
    question: "A population response curve with a sharp peak indicates?",
    options: [
      "A. Wide tolerance",
      "B. Narrow tolerance",
      "C. No optimum",
      "D. Unlimited growth"
    ],
    answer: "B",
    explanation: "A sharp, narrow peak means the species performs well only across a small range, i.e. narrow tolerance.",
    subtopic: "Minimum and maximum limits"
  },
  {
    question: "When two environmental factors are both near their limits, the organism's survival is?",
    options: [
      "A. Unaffected",
      "B. Further reduced (interactive effect)",
      "C. Improved",
      "D. Determined by the law of minimum only"
    ],
    answer: "B",
    explanation: "Factors interact; being near limits for two factors compounds stress and reduces survival further.",
    subtopic: "Minimum and maximum limits"
  },
  {
    question: "The minimum limit of dissolved oxygen for most fish is about?",
    options: [
      "A. 0 mg/L",
      "B. 5 mg/L",
      "C. 20 mg/L",
      "D. 50 mg/L"
    ],
    answer: "B",
    explanation: "Most fish require at least about 5 mg/L dissolved oxygen; below this they become stressed or die.",
    subtopic: "Minimum and maximum limits"
  },

  // ---- Law of minimum (10) ----
  {
    question: "Liebig's law of minimum states that growth is limited by the?",
    options: [
      "A. Factor present in excess",
      "B. Scarcest essential factor",
      "C. Highest temperature",
      "D. Most abundant nutrient"
    ],
    answer: "B",
    explanation: "Liebig's law says that growth is controlled by the essential resource in shortest supply relative to need.",
    subtopic: "Law of minimum"
  },
  {
    question: "Liebig's law of minimum was first formulated by?",
    options: [
      "A. Charles Darwin",
      "B. Justus von Liebig",
      "C. Charles Elton",
      "D. Eugene Odum"
    ],
    answer: "B",
    explanation: "The law was proposed by the German chemist Justus von Liebig in the 19th century studying plant nutrition.",
    subtopic: "Law of minimum"
  },
  {
    question: "In a field where nitrogen is lacking but other nutrients are ample, crop yield is limited by?",
    options: [
      "A. Water",
      "B. Nitrogen",
      "C. Sunlight",
      "D. Carbon dioxide"
    ],
    answer: "B",
    explanation: "By the law of minimum, the single deficient essential nutrient (nitrogen) limits total yield.",
    subtopic: "Law of minimum"
  },
  {
    question: "According to the law of minimum, adding more of a non-limiting nutrient will?",
    options: [
      "A. Greatly increase yield",
      "B. Not increase yield",
      "C. Reduce the limiting factor",
      "D. Eliminate the optimum"
    ],
    answer: "B",
    explanation: "Extra nutrient does not help while another factor remains limiting, so yield stays the same.",
    subtopic: "Law of minimum"
  },
  {
    question: "The law of minimum is closely related to the concept of?",
    options: [
      "A. Limiting factors",
      "B. Trophic cascades",
      "C. Symbiosis",
      "D. Genetic drift"
    ],
    answer: "A",
    explanation: "Both describe how the scarcest required resource restricts a process such as growth or photosynthesis.",
    subtopic: "Law of minimum"
  },
  {
    question: "A barrel with one short stave leaks first; this analogy illustrates?",
    options: [
      "A. Succession",
      "B. Liebig's law of minimum",
      "C. Energy flow",
      "D. Carrying capacity"
    ],
    answer: "B",
    explanation: "The short-stave (barrel) analogy shows that the limiting factor sets the maximum, like the law of minimum.",
    subtopic: "Law of minimum"
  },
  {
    question: "If phosphorus is the limiting nutrient in a lake, adding nitrogen will?",
    options: [
      "A. Cure the limitation",
      "B. Not increase algal growth",
      "C. Remove all limits",
      "D. Lower the pH"
    ],
    answer: "B",
    explanation: "Phosphorus remains limiting, so adding nitrogen alone will not increase production.",
    subtopic: "Law of minimum"
  },
  {
    question: "The law of minimum applies to which kind of factors?",
    options: [
      "A. Only physical ones",
      "B. Essential resources required for growth",
      "C. Predators only",
      "D. Decomposers only"
    ],
    answer: "B",
    explanation: "It applies to any essential resource (nutrient, water, light) whose shortage limits growth.",
    subtopic: "Law of minimum"
  },
  {
    question: "Modern ecology extends the law of minimum to include?",
    options: [
      "A. Only temperature",
      "B. Both too little and too much of a factor",
      "C. Genetic limits only",
      "D. Predation exclusively"
    ],
    answer: "B",
    explanation: "Shelford's extension notes that both deficiency and excess (tolerance limits) can limit organisms.",
    subtopic: "Law of minimum"
  },
  {
    question: "In a greenhouse with ample light and CO2 but low water, plant growth is limited by?",
    options: [
      "A. Light",
      "B. Water",
      "C. CO2",
      "D. Temperature"
    ],
    answer: "B",
    explanation: "Water is the scarcest essential factor, so by the law of minimum it limits growth.",
    subtopic: "Law of minimum"
  },

  // ---- Environmental factors (10) ----
  {
    question: "Which of these is a biotic environmental factor?",
    options: [
      "A. Temperature",
      "B. Predation",
      "C. Light",
      "D. Wind"
    ],
    answer: "B",
    explanation: "Predation involves living organisms, so it is a biotic factor; temperature, light and wind are abiotic.",
    subtopic: "Environmental factors"
  },
  {
    question: "The abiotic factor most directly controlling the rate of photosynthesis at low levels is?",
    options: [
      "A. Wind speed",
      "B. Light intensity",
      "C. Soil pH",
      "D. Humidity"
    ],
    answer: "B",
    explanation: "At low intensities, light is the limiting factor for photosynthesis, as shown by response curves.",
    subtopic: "Environmental factors"
  },
  {
    question: "Temperature affects organisms mainly because it influences?",
    options: [
      "A. Soil colour",
      "B. Enzyme activity and metabolic rate",
      "C. Wind direction",
      "D. Ocean salinity"
    ],
    answer: "B",
    explanation: "Temperature changes the rate of enzyme-controlled reactions, altering metabolism and survival.",
    subtopic: "Environmental factors"
  },
  {
    question: "Which nutrient is most often a limiting factor in freshwater ecosystems?",
    options: [
      "A. Oxygen",
      "B. Phosphorus",
      "C. Sodium",
      "D. Chlorine"
    ],
    answer: "B",
    explanation: "Phosphorus is commonly the limiting nutrient in freshwater, controlling algal and plant growth.",
    subtopic: "Environmental factors"
  },
  {
    question: "Edaphic factors refer to properties of the?",
    options: [
      "A. Atmosphere",
      "B. Soil",
      "C. Hydrosphere",
      "D. Biosphere"
    ],
    answer: "B",
    explanation: "Edaphic factors are soil-related (texture, pH, nutrients) that affect plant distribution.",
    subtopic: "Environmental factors"
  },
  {
    question: "Light intensity, temperature and rainfall are examples of?",
    options: [
      "A. Biotic factors",
      "B. Climatic (abiotic) factors",
      "C. Edaphic factors",
      "D. Genetic factors"
    ],
    answer: "B",
    explanation: "These are climatic abiotic factors that strongly shape where organisms can live.",
    subtopic: "Environmental factors"
  },
  {
    question: "The pH of a habitat is an example of a?",
    options: [
      "A. Biotic factor",
      "B. Chemical abiotic factor",
      "C. Genetic factor",
      "D. Trophic factor"
    ],
    answer: "B",
    explanation: "pH is a chemical property of the environment, an abiotic factor affecting organisms.",
    subtopic: "Environmental factors"
  },
  {
    question: "Salinity as an environmental factor most affects organisms in?",
    options: [
      "A. Deserts",
      "B. Aquatic (marine/estuarine) habitats",
      "C. Mountains",
      "D. Grasslands"
    ],
    answer: "B",
    explanation: "Salinity is a key factor in water bodies, especially estuaries and oceans, affecting osmoregulation.",
    subtopic: "Environmental factors"
  },
  {
    question: "Wind can affect organisms by increasing?",
    options: [
      "A. Transpiration and evaporation",
      "B. Photosynthesis rate directly",
      "C. Genetic mutation",
      "D. Soil pH"
    ],
    answer: "A",
    explanation: "Wind removes the humid layer around leaves, raising transpiration and evaporation losses.",
    subtopic: "Environmental factors"
  },
  {
    question: "A limiting factor is best defined as one that?",
    options: [
      "A. Is always abiotic",
      "B. Restricts the rate of a process when in short supply",
      "C. Increases biodiversity",
      "D. Has no effect on growth"
    ],
    answer: "B",
    explanation: "A limiting factor slows a process (e.g. growth, photosynthesis) when it is below the needed amount.",
    subtopic: "Environmental factors"
  },

  // ---- Conservation and management (10) ----
  {
    question: "The sustainable use and protection of natural resources is called?",
    options: [
      "A. Exploitation",
      "B. Conservation",
      "C. Urbanisation",
      "D. Eutrophication"
    ],
    answer: "B",
    explanation: "Conservation aims to manage resources so they remain available for future generations.",
    subtopic: "Conservation and management"
  },
  {
    question: "Establishing game reserves primarily helps conserve?",
    options: [
      "A. Soil only",
      "B. Wildlife",
      "C. Fossil fuels",
      "D. Minerals"
    ],
    answer: "B",
    explanation: "Game reserves protect habitats and wildlife populations from overhunting and loss.",
    subtopic: "Conservation and management"
  },
  {
    question: "Afforestation is the process of?",
    options: [
      "A. Cutting down forests",
      "B. Planting trees where none existed",
      "C. Burning bush",
      "D. Mining land"
    ],
    answer: "B",
    explanation: "Afforestation establishes new forest cover, aiding carbon capture and soil protection.",
    subtopic: "Conservation and management"
  },
  {
    question: "Controlling bush burning helps conserve?",
    options: [
      "A. Only animals",
      "B. Soil fertility and biodiversity",
      "C. Fossil water",
      "D. Atmospheric oxygen only"
    ],
    answer: "B",
    explanation: "Uncontrolled burning destroys organic matter and soil life; control preserves fertility and species.",
    subtopic: "Conservation and management"
  },
  {
    question: "Which practice reduces soil erosion?",
    options: [
      "A. Overgrazing",
      "B. Contour ploughing",
      "C. Deforestation",
      "D. Monoculture on slopes"
    ],
    answer: "B",
    explanation: "Ploughing along contours slows runoff and reduces soil erosion on slopes.",
    subtopic: "Conservation and management"
  },
  {
    question: "Sustainable fishing means?",
    options: [
      "A. Catching all available fish",
      "B. Harvesting at a rate that allows stock replenishment",
      "C. Using the smallest nets",
      "D. Fishing only at night"
    ],
    answer: "B",
    explanation: "Sustainability requires taking no more than the population can replace, avoiding stock collapse.",
    subtopic: "Conservation and management"
  },
  {
    question: "Pollution control in rivers is important to maintain?",
    options: [
      "A. Higher salinity",
      "B. Water quality for aquatic life",
      "C. Faster evaporation",
      "D. Soil acidity"
    ],
    answer: "B",
    explanation: "Reducing pollutants keeps dissolved oxygen and water quality high enough for aquatic organisms.",
    subtopic: "Conservation and management"
  },
  {
    question: "The main aim of a national park is to?",
    options: [
      "A. Mine resources",
      "B. Protect ecosystems and allow regulated use",
      "C. Expand cities",
      "D. Increase grazing"
    ],
    answer: "B",
    explanation: "National parks safeguard habitats and biodiversity while permitting controlled public use.",
    subtopic: "Conservation and management"
  },
  {
    question: "Recycling waste conserves resources by?",
    options: [
      "A. Increasing landfill use",
      "B. Reducing demand for raw materials",
      "C. Burning more fuel",
      "D. Lowering biodiversity"
    ],
    answer: "B",
    explanation: "Recycling recovers materials, cutting the need to extract new raw resources.",
    subtopic: "Conservation and management"
  },
  {
    question: "Education and legislation are important tools in?",
    options: [
      "A. Deforestation",
      "B. Environmental management and conservation",
      "C. Soil erosion",
      "D. Pollution increase"
    ],
    answer: "B",
    explanation: "Laws and public awareness support enforcement and behavioural change for conservation.",
    subtopic: "Conservation and management"
  }
];

module.exports = questions;
