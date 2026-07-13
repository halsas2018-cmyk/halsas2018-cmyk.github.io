// biology — Ecology of Population
const questions = [
  // ----- succession: primary/secondary/climax -----
  {
    question: "Primary succession begins on a surface that is initially lacking in?",
    options: [
      "A. Bare rock or bare land with no soil",
      "B. A previously farmed field with rich soil",
      "C. A burned forest with surviving seeds",
      "D. A pond that has dried up"
    ],
    answer: "A",
    explanation: "Primary succession starts on bare rock or bare land where no soil exists, such as after lava flow or glacier retreat.",
    subtopic: "succession: primary/secondary/climax"
  },
  {
    question: "The first organisms to colonize bare rock during primary succession are usually?",
    options: [
      "A. Large trees",
      "B. Lichens and mosses",
      "C. Grasses",
      "D. Earthworms"
    ],
    answer: "B",
    explanation: "Lichens and mosses are pioneer species; they can grow on bare rock and help break it down to form soil.",
    subtopic: "succession: primary/secondary/climax"
  },
  {
    question: "Secondary succession occurs after a disturbance in an area where?",
    options: [
      "A. There was never any soil",
      "B. Soil and some organisms still remain",
      "C. Only lichens were present",
      "D. The climate had changed completely"
    ],
    answer: "B",
    explanation: "Secondary succession follows events like fire or farming where soil and seeds remain, so it proceeds faster than primary succession.",
    subtopic: "succession: primary/secondary/climax"
  },
  {
    question: "The final, relatively stable community established at the end of succession is called the?",
    options: [
      "A. Pioneer community",
      "B. Seral stage",
      "C. Climax community",
      "D. Lithosere"
    ],
    answer: "C",
    explanation: "The climax community is the stable, self-perpetuating end stage of succession, shaped mainly by the climate.",
    subtopic: "succession: primary/secondary/climax"
  },
  {
    question: "The entire sequence of communities that develops during succession is termed a?",
    options: [
      "A. Niche",
      "B. Sere",
      "C. Habitat",
      "D. Biome"
    ],
    answer: "B",
    explanation: "A sere is the full series of seral (successional) stages from pioneer to climax community.",
    subtopic: "succession: primary/secondary/climax"
  },
  {
    question: "Each intermediate community in a succession sequence is referred to as a?",
    options: [
      "A. Climax community",
      "B. Seral stage",
      "C. Biosphere",
      "D. Population crash"
    ],
    answer: "B",
    explanation: "Seral stages are the temporary communities that appear one after another before the climax is reached.",
    subtopic: "succession: primary/secondary/climax"
  },
  {
    question: "Succession that takes place in a pond or lake is known as a?",
    options: [
      "A. Lithosere",
      "B. Hydrosere",
      "C. Psammosere",
      "D. Xerosere"
    ],
    answer: "B",
    explanation: "A hydrosere is a plant succession that begins in water bodies such as ponds and lakes.",
    subtopic: "succession: primary/secondary/climax"
  },
  {
    question: "Succession that begins on bare rock is specifically called a?",
    options: [
      "A. Hydrosere",
      "B. Psammosere",
      "C. Lithosere",
      "D. Halosere"
    ],
    answer: "C",
    explanation: "A lithosere is a primary succession that starts on bare rock surfaces.",
    subtopic: "succession: primary/secondary/climax"
  },
  {
    question: "Lichens contribute to primary succession mainly by?",
    options: [
      "A. Fixing nitrogen from the air",
      "B. Weathering rock and forming early soil",
      "C. Shading out mosses",
      "D. Producing large fruits"
    ],
    answer: "B",
    explanation: "Lichens secrete acids that weather rock and trap particles, beginning soil formation for later species.",
    subtopic: "succession: primary/secondary/climax"
  },
  {
    question: "Compared with primary succession, secondary succession is generally?",
    options: [
      "A. Slower because it starts from bare rock",
      "B. Faster because soil is already present",
      "C. Impossible after a fire",
      "D. Always aquatic"
    ],
    answer: "B",
    explanation: "Because soil and often seeds remain, secondary succession reaches later stages faster than primary succession.",
    subtopic: "succession: primary/secondary/climax"
  },
  {
    question: "The type of climax community an area eventually reaches is most strongly determined by the?",
    options: [
      "A. Local soil colour",
      "B. Prevailing climate",
      "C. Number of pioneer species only",
      "D. Presence of herbivores"
    ],
    answer: "B",
    explanation: "Climate is the overriding factor that determines the nature of the climax community in a region.",
    subtopic: "succession: primary/secondary/climax"
  },
  {
    question: "Which of these is a characteristic of a climax community?",
    options: [
      "A. It is the very first community to appear",
      "B. It is relatively stable and self-sustaining",
      "C. It contains only lichens",
      "D. It changes rapidly every year"
    ],
    answer: "B",
    explanation: "A climax community is relatively stable, diverse, and maintains itself unless the climate or site changes.",
    subtopic: "succession: primary/secondary/climax"
  },
  {
    question: "Pioneer species are best described as species that?",
    options: [
      "A. Appear only at the climax stage",
      "B. Are the first to colonize a barren habitat",
      "C. Cause succession to stop",
      "D. Are always large mammals"
    ],
    answer: "B",
    explanation: "Pioneer species are the first colonizers of a new or disturbed habitat and initiate soil and community development.",
    subtopic: "succession: primary/secondary/climax"
  },

  // ----- factors -----
  {
    question: "Population size increases when the sum of births and immigration exceeds the sum of?",
    options: [
      "A. Births and emigration",
      "B. Deaths and emigration",
      "C. Carrying capacity and death",
      "D. Predation and immigration"
    ],
    answer: "B",
    explanation: "Population change = (births + immigration) − (deaths + emigration); growth occurs when the first sum is larger.",
    subtopic: "factors"
  },
  {
    question: "The maximum number of individuals of a species that an environment can sustainably support is its?",
    options: [
      "A. Biotic potential",
      "B. Carrying capacity",
      "C. Population density",
      "D. Growth rate"
    ],
    answer: "B",
    explanation: "Carrying capacity (K) is the limit of population size an environment can support with available resources.",
    subtopic: "factors"
  },
  {
    question: "Competition, disease, and predation, whose effects intensify as population density rises, are?",
    options: [
      "A. Density-independent factors",
      "B. Density-dependent factors",
      "C. Abiotic only factors",
      "D. Climatic factors"
    ],
    answer: "B",
    explanation: "Density-dependent factors have stronger effects at higher population density, helping regulate population size.",
    subtopic: "factors"
  },
  {
    question: "A volcanic eruption that kills organisms regardless of population density is an example of a?",
    options: [
      "A. Density-dependent factor",
      "B. Density-independent factor",
      "C. Biotic factor",
      "D. Limiting nutrient"
    ],
    answer: "B",
    explanation: "Density-independent factors such as natural disasters affect populations irrespective of their density.",
    subtopic: "factors"
  },
  {
    question: "Movement of individuals INTO a population from elsewhere is called?",
    options: [
      "A. Emigration",
      "B. Immigration",
      "C. Migration out",
      "D. Natality"
    ],
    answer: "B",
    explanation: "Immigration is the arrival of new individuals into a population, increasing its size.",
    subtopic: "factors"
  },
  {
    question: "Movement of individuals OUT of a population to another area is called?",
    options: [
      "A. Immigration",
      "B. Emigration",
      "C. Natality",
      "D. Succession"
    ],
    answer: "B",
    explanation: "Emigration is the departure of individuals from a population, reducing its size.",
    subtopic: "factors"
  },
  {
    question: "The number of births per unit time in a population is referred to as?",
    options: [
      "A. Mortality",
      "B. Natality",
      "C. Emigration",
      "D. Carrying capacity"
    ],
    answer: "B",
    explanation: "Natality is the birth rate, the production of new individuals in a population over time.",
    subtopic: "factors"
  },
  {
    question: "When a population grows rapidly with no resource limits, its graph is shaped like a?",
    options: [
      "A. Straight horizontal line",
      "B. J-shaped curve",
      "C. U-shaped curve",
      "D. Circle"
    ],
    answer: "B",
    explanation: "Exponential (unlimited) growth produces a J-shaped curve before resources become limiting.",
    subtopic: "factors"
  },
  {
    question: "Population growth that levels off as it approaches carrying capacity produces a?",
    options: [
      "A. J-shaped curve",
      "B. S-shaped (sigmoid) curve",
      "C. Straight line downward",
      "D. Zig-zag curve"
    ],
    answer: "B",
    explanation: "Logistic growth slows as it nears carrying capacity, giving the S-shaped (sigmoid) curve.",
    subtopic: "factors"
  },
  {
    question: "Temperature, rainfall, and light are examples of?",
    options: [
      "A. Biotic factors",
      "B. Abiotic (physical) factors",
      "C. Density-dependent factors only",
      "D. Genetic factors"
    ],
    answer: "B",
    explanation: "Abiotic factors are the non-living physical and chemical components of the environment.",
    subtopic: "factors"
  },
  {
    question: "Predators, parasites, and competitors are examples of?",
    options: [
      "A. Abiotic factors",
      "B. Biotic factors",
      "C. Climatic factors",
      "D. Geological factors"
    ],
    answer: "B",
    explanation: "Biotic factors are the living components of the environment that affect organisms.",
    subtopic: "factors"
  },
  {
    question: "A resource whose shortage most restricts population growth is called a?",
    options: [
      "A. Climax factor",
      "B. Limiting factor",
      "C. Pioneer factor",
      "D. Sere factor"
    ],
    answer: "B",
    explanation: "A limiting factor is the resource or condition in shortest supply that caps population growth.",
    subtopic: "factors"
  },
  {
    question: "When the death rate in a population exceeds the birth rate, the population will?",
    options: [
      "A. Grow exponentially",
      "B. Remain exactly constant",
      "C. Decline in size",
      "D. Reach its climax"
    ],
    answer: "C",
    explanation: "If deaths outpace births, the net population change is negative and the population shrinks.",
    subtopic: "factors"
  },

  // ----- food preservation/storage -----
  {
    question: "Drying or desiccation preserves food mainly by?",
    options: [
      "A. Killing all bacteria with heat",
      "B. Removing water needed for microbial growth",
      "C. Adding sugar",
      "D. Sealing in air"
    ],
    answer: "B",
    explanation: "Removing moisture prevents bacteria, yeasts, and moulds from growing, so food keeps longer.",
    subtopic: "food preservation/storage"
  },
  {
    question: "Smoking food helps preserve it because the smoke contains?",
    options: [
      "A. Only water vapour",
      "B. Heat and antimicrobial chemicals",
      "C. Oxygen that kills germs",
      "D. Sweeteners"
    ],
    answer: "B",
    explanation: "Smoking applies heat and deposits antimicrobial compounds that inhibit spoilage organisms.",
    subtopic: "food preservation/storage"
  },
  {
    question: "Canning preserves food by?",
    options: [
      "A. Freezing it solid",
      "B. Heating sealed containers to kill microbes and exclude air",
      "C. Adding large amounts of salt only",
      "D. Drying it completely"
    ],
    answer: "B",
    explanation: "Canning heats food in airtight sealed containers, killing microbes and preventing recontamination.",
    subtopic: "food preservation/storage"
  },
  {
    question: "Refrigeration slows food spoilage mainly by?",
    options: [
      "A. Killing all microorganisms instantly",
      "B. Lowering temperature to reduce microbial growth",
      "C. Removing all oxygen",
      "D. Adding preservatives"
    ],
    answer: "B",
    explanation: "Cold temperatures slow enzyme activity and microbial reproduction, delaying spoilage.",
    subtopic: "food preservation/storage"
  },
  {
    question: "Salting meat or fish preserves it through the process of?",
    options: [
      "A. Fermentation",
      "B. Osmosis drawing water out of microbes",
      "C. Irradiation",
      "D. Freezing"
    ],
    answer: "B",
    explanation: "High salt concentration creates a hypertonic environment, drawing water out of microbial cells by osmosis.",
    subtopic: "food preservation/storage"
  },
  {
    question: "Food irradiation preserves food by using?",
    options: [
      "A. High salt concentration",
      "B. Ionizing radiation to kill microbes",
      "C. Boiling only",
      "D. Sunlight drying"
    ],
    answer: "B",
    explanation: "Irradiation exposes food to ionizing radiation that destroys bacteria, insects, and moulds.",
    subtopic: "food preservation/storage"
  },
  {
    question: "Pasteurization of milk involves?",
    options: [
      "A. Freezing it to −20°C",
      "B. Heating to a set temperature then cooling to kill pathogens",
      "C. Adding sugar",
      "D. Drying it into powder only"
    ],
    answer: "B",
    explanation: "Pasteurization heats milk briefly to a controlled temperature to kill harmful microbes, then cools it.",
    subtopic: "food preservation/storage"
  },
  {
    question: "Fermentation preserves some foods because the products formed, such as acid or alcohol,?",
    options: [
      "A. Encourage bacterial growth",
      "B. Inhibit spoilage and pathogenic microbes",
      "C. Add oxygen",
      "D. Melt the food"
    ],
    answer: "B",
    explanation: "Fermentation produces acids or alcohol that lower pH and suppress undesirable microorganisms.",
    subtopic: "food preservation/storage"
  },
  {
    question: "Freezing preserves food by?",
    options: [
      "A. Making microbes grow faster",
      "B. Stopping microbial activity and enzyme action at low temperature",
      "C. Adding salt",
      "D. Drying it out"
    ],
    answer: "B",
    explanation: "Freezing halts microbial metabolism and enzyme reactions, keeping food safe for long periods.",
    subtopic: "food preservation/storage"
  },
  {
    question: "High concentrations of sugar in jams preserve them by?",
    options: [
      "A. Providing food for microbes",
      "B. Creating osmotic pressure that dehydrates microbes",
      "C. Raising the temperature",
      "D. Adding oxygen"
    ],
    answer: "B",
    explanation: "Sugar draws water out of microbial cells by osmosis, preventing their growth in jams.",
    subtopic: "food preservation/storage"
  },
  {
    question: "Chemical preservatives such as benzoates are added to food to?",
    options: [
      "A. Increase microbial growth",
      "B. Inhibit the growth of spoilage organisms",
      "C. Replace canning entirely",
      "D. Add colour only"
    ],
    answer: "B",
    explanation: "Permitted chemical preservatives slow or prevent the growth of bacteria, yeasts, and moulds.",
    subtopic: "food preservation/storage"
  },
  {
    question: "A major aim of proper food storage is to?",
    options: [
      "A. Encourage rapid microbial growth",
      "B. Prevent spoilage and food poisoning",
      "C. Increase water content",
      "D. Remove all nutrients"
    ],
    answer: "B",
    explanation: "Good storage conditions reduce spoilage and the risk of foodborne illness.",
    subtopic: "food preservation/storage"
  },

  // ----- insects/pest control -----
  {
    question: "Biological control of pests relies on using?",
    options: [
      "A. Only chemical insecticides",
      "B. Natural enemies such as predators and parasites",
      "C. Fire to burn crops",
      "D. Excessive fertiliser"
    ],
    answer: "B",
    explanation: "Biological control uses predators, parasites, or pathogens to suppress pest populations naturally.",
    subtopic: "insects/pest control"
  },
  {
    question: "The ladybird beetle is used in biological control because it feeds on?",
    options: [
      "A. Grass",
      "B. Aphids",
      "C. Maize grains",
      "D. Earthworms"
    ],
    answer: "B",
    explanation: "Ladybirds are predators of aphids, making them useful for natural pest control in crops.",
    subtopic: "insects/pest control"
  },
  {
    question: "Chemical substances applied to kill insect pests are called?",
    options: [
      "A. Fertilizers",
      "B. Insecticides",
      "C. Herbicides only",
      "D. Fungicides only"
    ],
    answer: "B",
    explanation: "Insecticides are chemicals specifically formulated to kill or control insect pests.",
    subtopic: "insects/pest control"
  },
  {
    question: "Integrated Pest Management (IPM) combines?",
    options: [
      "A. Only flooding the fields",
      "B. Biological, cultural, and chemical methods in a coordinated way",
      "C. Growing one crop forever",
      "D. Ignoring pests completely"
    ],
    answer: "B",
    explanation: "IPM integrates biological, cultural, and chemical controls to manage pests economically and safely.",
    subtopic: "insects/pest control"
  },
  {
    question: "The female Anopheles mosquito is a vector that transmits?",
    options: [
      "A. Typhoid",
      "B. Malaria",
      "C. Sleeping sickness",
      "D. Cholera"
    ],
    answer: "B",
    explanation: "Anopheles mosquitoes transmit the malaria parasite (Plasmodium) between humans.",
    subtopic: "insects/pest control"
  },
  {
    question: "The tsetse fly is the vector responsible for transmitting?",
    options: [
      "A. Malaria",
      "B. Sleeping sickness (trypanosomiasis)",
      "C. Yellow fever",
      "D. Dengue"
    ],
    answer: "B",
    explanation: "Tsetse flies transmit Trypanosoma parasites that cause sleeping sickness in humans and animals.",
    subtopic: "insects/pest control"
  },
  {
    question: "Repeated use of the same insecticide can lead to?",
    options: [
      "A. Pests becoming extinct immediately",
      "B. Development of pesticide resistance in pests",
      "C. Increase in soil fertility only",
      "D. Loss of all predators"
    ],
    answer: "B",
    explanation: "Surviving pests with resistance genes reproduce, so the population becomes resistant over time.",
    subtopic: "insects/pest control"
  },
  {
    question: "Locusts are a serious agricultural pest mainly because they?",
    options: [
      "A. Help pollinate crops",
      "B. Swarm and devour large areas of vegetation",
      "C. Fix nitrogen",
      "D. Control weeds"
    ],
    answer: "B",
    explanation: "Locust swarms consume vast amounts of crop and pasture foliage, causing severe losses.",
    subtopic: "insects/pest control"
  },
  {
    question: "Some parasitic wasps control caterpillars by?",
    options: [
      "A. Eating only roots",
      "B. Laying eggs inside them so larvae consume the host",
      "C. Pollinating flowers",
      "D. Producing sugar"
    ],
    answer: "B",
    explanation: "Parasitoid wasps lay eggs in or on caterpillars; their larvae develop by feeding on the host.",
    subtopic: "insects/pest control"
  },
  {
    question: "The bacterium Bacillus thuringiensis (Bt) is used in pest control because it?",
    options: [
      "A. Fertilizes the soil",
      "B. Produces a toxin that kills certain insect larvae",
      "C. Attracts pollinators",
      "D. Cures plant viruses"
    ],
    answer: "B",
    explanation: "Bt produces crystal proteins toxic to specific insect larvae, used as a biological insecticide.",
    subtopic: "insects/pest control"
  },
  {
    question: "Crop rotation is a cultural pest-control method that works by?",
    options: [
      "A. Increasing pesticide use",
      "B. Breaking the life cycles of pests that build up on one crop",
      "C. Planting the same crop continuously",
      "D. Flooding the field"
    ],
    answer: "B",
    explanation: "Changing crops disrupts pest and disease cycles that depend on a constant host plant.",
    subtopic: "insects/pest control"
  },
  {
    question: "A major advantage of biological pest control over chemical methods is that it is usually?",
    options: [
      "A. More polluting",
      "B. Specific to the target pest and less harmful to the environment",
      "C. Faster acting in all cases",
      "D. Cheaper in every situation"
    ],
    answer: "B",
    explanation: "Natural enemies often target specific pests and leave fewer chemical residues in the environment.",
    subtopic: "insects/pest control"
  }
];

module.exports = questions;
