// biology — Habitats
const questions = [
  // Aquatic habitat
  {
    question: "Which of the following best describes an aquatic habitat?",
    options: [
      "A. A dry land environment with little rainfall",
      "B. An environment where organisms live in water",
      "C. A region covered permanently by ice only",
      "D. A habitat found only in hot deserts"
    ],
    answer: "B",
    explanation: "An aquatic habitat is any environment in which organisms live in water, such as ponds, lakes, rivers and oceans.",
    subtopic: "Aquatic habitat"
  },
  {
    question: "The zone of an aquatic habitat where light penetrates enough for photosynthesis is called the?",
    options: [
      "A. Benthic zone",
      "B. Aphotic zone",
      "C. Euphotic or photic zone",
      "D. Abyssal zone"
    ],
    answer: "C",
    explanation: "The euphotic (photic) zone receives sufficient sunlight for photosynthetic organisms to thrive.",
    subtopic: "Aquatic habitat"
  },
  {
    question: "Organisms that drift freely in the water column of aquatic habitats are called?",
    options: [
      "A. Nekton",
      "B. Benthos",
      "C. Plankton",
      "D. Decomposers"
    ],
    answer: "C",
    explanation: "Plankton are drifting or floating organisms carried by water currents in aquatic habitats.",
    subtopic: "Aquatic habitat"
  },
  {
    question: "Fish that swim actively and independently of currents in aquatic habitats are classified as?",
    options: [
      "A. Plankton",
      "B. Nekton",
      "C. Benthos",
      "D. Neuston"
    ],
    answer: "B",
    explanation: "Nekton are actively swimming organisms such as fish and squid that move independently of water currents.",
    subtopic: "Aquatic habitat"
  },
  {
    question: "Organisms living at the bottom of an aquatic habitat are referred to as?",
    options: [
      "A. Nekton",
      "B. Plankton",
      "C. Benthos",
      "D. Periphyton"
    ],
    answer: "C",
    explanation: "Benthos are organisms that live on or in the bottom sediment of aquatic habitats.",
    subtopic: "Aquatic habitat"
  },
  {
    question: "Which abiotic factor most limits life in the deep oceanic zones of an aquatic habitat?",
    options: [
      "A. Excess oxygen",
      "B. Lack of light",
      "C. High temperature",
      "D. Low salinity"
    ],
    answer: "B",
    explanation: "Below the photic zone, light is absent, preventing photosynthesis and limiting the food base for deep life.",
    subtopic: "Aquatic habitat"
  },
  {
    question: "The abundance of life is generally greatest in aquatic habitats at?",
    options: [
      "A. The deep abyssal floor",
      "B. The surface photic zone",
      "C. The centre of the ocean basin",
      "D. Under solid ice all year"
    ],
    answer: "B",
    explanation: "The surface photic zone supports photosynthesis, forming the base of most aquatic food webs.",
    subtopic: "Aquatic habitat"
  },
  {
    question: "Which of these is an example of a small, temporary aquatic habitat?",
    options: [
      "A. Ocean",
      "B. Pond",
      "C. Sea",
      "D. Trench"
    ],
    answer: "B",
    explanation: "A pond is a small, often seasonal body of standing fresh water — a small aquatic habitat.",
    subtopic: "Aquatic habitat"
  },
  {
    question: "Dissolved oxygen in an aquatic habitat is primarily supplied by?",
    options: [
      "A. Wind erosion of rocks",
      "B. Photosynthesis and diffusion from air",
      "C. Volcanic activity",
      "D. Sediment decomposition"
    ],
    answer: "B",
    explanation: "Dissolved oxygen enters water mainly by diffusion from the atmosphere and is produced by aquatic photosynthesis.",
    subtopic: "Aquatic habitat"
  },
  {
    question: "A major threat to aquatic habitats from excess fertiliser runoff is?",
    options: [
      "A. Eutrophication",
      "B. Desertification",
      "C. Glaciation",
      "D. Salinisation"
    ],
    answer: "A",
    explanation: "Fertiliser runoff causes eutrophication, where algal blooms deplete oxygen and kill aquatic life.",
    subtopic: "Aquatic habitat"
  },

  // Terrestrial habitat
  {
    question: "A terrestrial habitat is best described as?",
    options: [
      "A. A habitat found entirely underwater",
      "B. A land-based habitat",
      "C. A region of permanent ice",
      "D. A habitat with no living organisms"
    ],
    answer: "B",
    explanation: "Terrestrial habitats are those located on land, such as forests, grasslands, deserts and mountains.",
    subtopic: "Terrestrial habitat"
  },
  {
    question: "Which terrestrial habitat is characterised by very low rainfall and sparse vegetation?",
    options: [
      "A. Rainforest",
      "B. Desert",
      "C. Savanna",
      "D. Mangrove"
    ],
    answer: "B",
    explanation: "Deserts receive very little rainfall, so only drought-adapted, sparse vegetation survives there.",
    subtopic: "Terrestrial habitat"
  },
  {
    question: "The tropical grassland with scattered trees and seasonal rainfall is the?",
    options: [
      "A. Desert",
      "B. Tundra",
      "C. Savanna",
      "D. Taiga"
    ],
    answer: "C",
    explanation: "Savanna is a tropical grassland with scattered trees and distinct wet and dry seasons.",
    subtopic: "Terrestrial habitat"
  },
  {
    question: "Which terrestrial habitat receives the highest annual rainfall and has the greatest biodiversity?",
    options: [
      "A. Desert",
      "B. Tropical rainforest",
      "C. Tundra",
      "D. Temperate grassland"
    ],
    answer: "B",
    explanation: "Tropical rainforests have high, year-round rainfall and support the richest biodiversity of any terrestrial habitat.",
    subtopic: "Terrestrial habitat"
  },
  {
    question: "Permafrost (permanently frozen soil) is characteristic of the?",
    options: [
      "A. Desert",
      "B. Savanna",
      "C. Tundra",
      "D. Rainforest"
    ],
    answer: "C",
    explanation: "Tundra is a cold terrestrial habitat with a layer of permanently frozen subsoil called permafrost.",
    subtopic: "Terrestrial habitat"
  },
  {
    question: "Which of the following is a biotic component of a terrestrial habitat?",
    options: [
      "A. Soil pH",
      "B. Temperature",
      "C. Grass plants",
      "D. Wind speed"
    ],
    answer: "C",
    explanation: "Grass plants are living (biotic) components, whereas pH, temperature and wind are abiotic factors.",
    subtopic: "Terrestrial habitat"
  },
  {
    question: "The layer of a forest habitat that forms the dense leafy covering above the ground is the?",
    options: [
      "A. Understory",
      "B. Forest floor",
      "C. Canopy",
      "D. Root zone"
    ],
    answer: "C",
    explanation: "The canopy is the upper layer of branches and leaves that intercepts most sunlight in a forest.",
    subtopic: "Terrestrial habitat"
  },
  {
    question: "Decomposition in terrestrial habitats is slowed most in?",
    options: [
      "A. Hot, moist forests",
      "B. Cold tundra",
      "C. Tropical savanna",
      "D. Temperate meadows"
    ],
    answer: "B",
    explanation: "Low temperatures in the tundra slow microbial activity, so decomposition and nutrient cycling are slow.",
    subtopic: "Terrestrial habitat"
  },
  {
    question: "Which terrestrial habitat is dominated by grasses with few trees and is maintained by fire and grazing?",
    options: [
      "A. Desert",
      "B. Temperate grassland",
      "C. Rainforest",
      "D. Tundra"
    ],
    answer: "B",
    explanation: "Temperate grasslands are dominated by grasses; fire and grazing prevent tree establishment.",
    subtopic: "Terrestrial habitat"
  },
  {
    question: "Soil type is classified as which kind of factor in a terrestrial habitat?",
    options: [
      "A. Biotic",
      "B. Abiotic",
      "C. Producer",
      "D. Consumer"
    ],
    answer: "B",
    explanation: "Soil is a non-living (abiotic) component that influences which plants and animals can live in a habitat.",
    subtopic: "Terrestrial habitat"
  },

  // Freshwater habitat
  {
    question: "Freshwater habitats are characterised by having?",
    options: [
      "A. High salt concentration",
      "B. Low salt concentration",
      "C. No water at all",
      "D. Freezing temperature year-round"
    ],
    answer: "B",
    explanation: "Freshwater habitats such as rivers, lakes and ponds have a low dissolved salt concentration.",
    subtopic: "Freshwater habitat"
  },
  {
    question: "Which of these is a flowing freshwater habitat?",
    options: [
      "A. Lake",
      "B. Pond",
      "C. River",
      "D. Swamp"
    ],
    answer: "C",
    explanation: "A river is a lotic (flowing) freshwater habitat, unlike standing (lentic) lakes and ponds.",
    subtopic: "Freshwater habitat"
  },
  {
    question: "Standing freshwater bodies such as lakes and ponds are described as?",
    options: [
      "A. Lotic",
      "B. Lentic",
      "C. Benthic",
      "D. Pelagic"
    ],
    answer: "B",
    explanation: "Lentic systems are standing-water habitats (lakes, ponds), while lotic systems are flowing waters.",
    subtopic: "Freshwater habitat"
  },
  {
    question: "The accumulation of nutrients in a freshwater lake leading to algal blooms is called?",
    options: [
      "A. Eutrophication",
      "B. Leaching",
      "C. Transpiration",
      "D. Evaporation"
    ],
    answer: "A",
    explanation: "Eutrophication of freshwater bodies enriches them with nutrients, triggering dense algal growth.",
    subtopic: "Freshwater habitat"
  },
  {
    question: "Which organism is commonly used as an indicator of clean freshwater?",
    options: [
      "A. Mosquito larva",
      "B. Mayfly nymph",
      "C. Sewage fungus",
      "D. Sludge worm"
    ],
    answer: "B",
    explanation: "Mayfly nymphs require well-oxygenated, unpolluted water and indicate good freshwater quality.",
    subtopic: "Freshwater habitat"
  },
  {
    question: "The shallow water near the edge of a freshwater lake where rooted plants grow is the?",
    options: [
      "A. Profundal zone",
      "B. Littoral zone",
      "C. Pelagic zone",
      "D. Benthic zone"
    ],
    answer: "B",
    explanation: "The littoral zone is the sunlit, shallow edge of a lake where emergent and rooted plants grow.",
    subtopic: "Freshwater habitat"
  },
  {
    question: "Which fish adaptation is typical of fast-flowing freshwater streams?",
    options: [
      "A. Large air sacs",
      "B. Streamlined body and strong fins",
      "C. Weak tail muscles",
      "D. Loss of gills"
    ],
    answer: "B",
    explanation: "Stream fish are streamlined with strong fins to hold position and swim against currents.",
    subtopic: "Freshwater habitat"
  },
  {
    question: "Seasonal turnover of water layers in temperate freshwater lakes helps to?",
    options: [
      "A. Increase salt content",
      "B. Redistribute oxygen and nutrients",
      "C. Freeze the surface",
      "D. Remove all life"
    ],
    answer: "B",
    explanation: "Seasonal turnover mixes surface and bottom waters, redistributing oxygen and nutrients throughout the lake.",
    subtopic: "Freshwater habitat"
  },
  {
    question: "Which of these is NOT a freshwater habitat?",
    options: [
      "A. Stream",
      "B. Pond",
      "C. Ocean",
      "D. Lake"
    ],
    answer: "C",
    explanation: "The ocean is a marine (saltwater) habitat, not a freshwater habitat.",
    subtopic: "Freshwater habitat"
  },
  {
    question: "An organism specially adapted to live in freshwater must avoid?",
    options: [
      "A. Water gain by osmosis",
      "B. Loss of salt by diffusion",
      "C. Both water gain and salt loss",
      "D. Photosynthesis"
    ],
    answer: "C",
    explanation: "Freshwater organisms tend to gain water and lose salts by osmosis/diffusion, so they must regulate both.",
    subtopic: "Freshwater habitat"
  },

  // Marine habitat
  {
    question: "Marine habitats are distinguished from freshwater habitats mainly by their?",
    options: [
      "A. Low temperature",
      "B. High salt content",
      "C. Lack of oxygen",
      "D. Absence of life"
    ],
    answer: "B",
    explanation: "Marine habitats have a high concentration of dissolved salts (around 3.5%), unlike freshwater.",
    subtopic: "Marine habitat"
  },
  {
    question: "Which marine zone is the sunny, shallow water over the continental shelf?",
    options: [
      "A. Abyssal zone",
      "B. Neritic zone",
      "C. Hadal zone",
      "D. Bathyal zone"
    ],
    answer: "B",
    explanation: "The neritic zone is the productive, sunlit shallow water over the continental shelf.",
    subtopic: "Marine habitat"
  },
  {
    question: "The intertidal zone of a marine habitat is the area?",
    options: [
      "A. Always submerged deep underwater",
      "B. Exposed and covered by tides alternately",
      "C. Found only at the poles",
      "D. Below the seafloor"
    ],
    answer: "B",
    explanation: "The intertidal (littoral) zone is alternately exposed and submerged as tides rise and fall.",
    subtopic: "Marine habitat"
  },
  {
    question: "Coral reefs are most commonly found in?",
    options: [
      "A. Cold, deep marine waters",
      "B. Warm, shallow, clear tropical waters",
      "C. Freshwater lakes",
      "D. Polar ice shelves"
    ],
    answer: "B",
    explanation: "Coral reefs need warm, clear, shallow tropical waters where symbiotic algae can photosynthesise.",
    subtopic: "Marine habitat"
  },
  {
    question: "Organisms living in the deepest marine trenches are in the?",
    options: [
      "A. Neritic zone",
      "B. Hadal zone",
      "C. Intertidal zone",
      "D. Pelagic zone"
    ],
    answer: "B",
    explanation: "The hadal zone includes the deepest ocean trenches, below about 6000 m.",
    subtopic: "Marine habitat"
  },
  {
    question: "The salt concentration of seawater is best described as?",
    options: [
      "A. About 0%",
      "B. About 35 parts per thousand",
      "C. About 90%",
      "D. Constantly frozen"
    ],
    answer: "B",
    explanation: "Seawater averages about 35 g of dissolved salts per kilogram (35 ppt).",
    subtopic: "Marine habitat"
  },
  {
    question: "Which adaptation helps marine bony fish prevent water loss by osmosis?",
    options: [
      "A. Drinking seawater and excreting salt",
      "B. Avoiding drinking entirely",
      "C. Storing fresh water in bladders",
      "D. Losing their gills"
    ],
    answer: "A",
    explanation: "Marine bony fish drink seawater and actively excrete excess salt through gills and kidneys.",
    subtopic: "Marine habitat"
  },
  {
    question: "Plankton form the base of most marine food webs because they?",
    options: [
      "A. Are the largest predators",
      "B. Photosynthesise or feed on detritus at the base",
      "C. Live only on the seafloor",
      "D. Cannot be eaten"
    ],
    answer: "B",
    explanation: "Phytoplankton photosynthesise and zooplankton graze on them, forming the foundation of marine food webs.",
    subtopic: "Marine habitat"
  },
  {
    question: "An estuary is a marine-influenced habitat where?",
    options: [
      "A. Freshwater rivers meet the sea",
      "B. Only deserts occur",
      "C. Ice never melts",
      "D. No tides reach"
    ],
    answer: "A",
    explanation: "Estuaries are partially enclosed where freshwater rivers mix with seawater, creating brackish conditions.",
    subtopic: "Marine habitat"
  },
  {
    question: "Mangrove swamps are coastal marine habitats characterised by?",
    options: [
      "A. Salt-tolerant trees with breathing roots",
      "B. Cacti and lizards",
      "C. Permanent ice cover",
      "D. No aquatic life"
    ],
    answer: "A",
    explanation: "Mangroves are salt-tolerant trees with pneumatophores (breathing roots) in sheltered coastal waters.",
    subtopic: "Marine habitat"
  },

  // Adaptations to habitat
  {
    question: "Plants adapted to dry habitats with reduced leaves and water storage are called?",
    options: [
      "A. Hydrophytes",
      "B. Halophytes",
      "C. Xerophytes",
      "D. Mesophytes"
    ],
    answer: "C",
    explanation: "Xerophytes are plants adapted to arid conditions, with features that conserve water.",
    subtopic: "Adaptations to habitat"
  },
  {
    question: "Plants adapted to live in water, often with air spaces for buoyancy, are?",
    options: [
      "A. Xerophytes",
      "B. Halophytes",
      "C. Hydrophytes",
      "D. Lithophytes"
    ],
    answer: "C",
    explanation: "Hydrophytes are aquatic plants with aerenchyma (air spaces) that aid buoyancy and gas exchange.",
    subtopic: "Adaptations to habitat"
  },
  {
    question: "Plants that tolerate high salt concentrations in saline habitats are called?",
    options: [
      "A. Xerophytes",
      "B. Halophytes",
      "C. Hydrophytes",
      "D. Bryophytes"
    ],
    answer: "B",
    explanation: "Halophytes survive in salty soils or seawater by excluding or excreting salt and tolerating low water potential.",
    subtopic: "Adaptations to habitat"
  },
  {
    question: "A camel's ability to tolerate body temperature fluctuations is an adaptation to?",
    options: [
      "A. Aquatic life",
      "B. Desert (terrestrial dry) habitat",
      "C. Marine salinity",
      "D. Freshwater ponds"
    ],
    answer: "B",
    explanation: "Allowing its body temperature to vary conserves water, an adaptation to hot arid desert habitats.",
    subtopic: "Adaptations to habitat"
  },
  {
    question: "Which feature is an adaptation of desert animals to reduce water loss?",
    options: [
      "A. Large, moist skin",
      "B. Concentrated urine and dry faeces",
      "C. Constant sweating",
      "D. Living only in water"
    ],
    answer: "B",
    explanation: "Desert animals produce concentrated urine and dry faeces to minimise water loss.",
    subtopic: "Adaptations to habitat"
  },
  {
    question: "Gills as a respiratory adaptation are found in organisms living in?",
    options: [
      "A. Dry deserts",
      "B. Aquatic habitats",
      "C. High mountains",
      "D. Underground burrows only"
    ],
    answer: "B",
    explanation: "Gills extract dissolved oxygen from water and are the typical respiratory organ of aquatic animals.",
    subtopic: "Adaptations to habitat"
  },
  {
    question: "Camouflage is an adaptation that helps an organism to?",
    options: [
      "A. Breathe underwater",
      "B. Avoid detection by predators or prey",
      "C. Digest cellulose",
      "D. Regulate salt"
    ],
    answer: "B",
    explanation: "Camouflage blends an organism with its surroundings, aiding predator avoidance or hunting.",
    subtopic: "Adaptations to habitat"
  },
  {
    question: "Burrowing is an adaptation commonly used by animals to escape?",
    options: [
      "A. Aquatic drowning",
      "B. Extreme heat or cold on land",
      "C. High oxygen levels",
      "D. Excess rainfall"
    ],
    answer: "B",
    explanation: "Burrowing provides shelter from temperature extremes and desiccation in terrestrial habitats.",
    subtopic: "Adaptations to habitat"
  },
  {
    question: "Aerenchyma tissue in hydrophytes mainly functions to?",
    options: [
      "A. Store sugars",
      "B. Provide buoyancy and air for submerged parts",
      "C. Absorb salts",
      "D. Repel predators"
    ],
    answer: "B",
    explanation: "Aerenchyma are air-filled spaces giving buoyancy and transporting oxygen to submerged tissues.",
    subtopic: "Adaptations to habitat"
  },
  {
    question: "Which of these is a behavioural adaptation to habitat rather than a structural one?",
    options: [
      "A. Thick fur",
      "B. Hibernation",
      "C. Webbed feet",
      "D. Gills"
    ],
    answer: "B",
    explanation: "Hibernation is a behaviour that avoids harsh conditions, unlike structural traits such as fur or gills.",
    subtopic: "Adaptations to habitat"
  }
];

module.exports = questions;
