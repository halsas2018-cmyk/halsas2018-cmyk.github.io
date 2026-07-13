// biology — Resources to Conserve
const questions = [
  // ---------------- SOIL (13) ----------------
  {
    question: "Which of the following is the removal of the soluble nutrients from the top soil by percolating water?",
    options: [
      "A. Leaching",
      "B. Erosion",
      "C. Weathering",
      "D. Crystallisation"
    ],
    answer: "A",
    explanation: "Leaching is the downward movement of dissolved minerals out of the soil by percolating rainwater.",
    subtopic: "soil"
  },
  {
    question: "The ploughing of crops along the contours of a slope to reduce run-off is called?",
    options: [
      "A. Terracing",
      "B. Contour ploughing",
      "C. Strip cropping",
      "D. Irrigation"
    ],
    answer: "B",
    explanation: "Contour ploughing follows the natural contours of the land, slowing water flow and reducing soil erosion.",
    subtopic: "soil"
  },
  {
    question: "Which soil conservation practice involves the construction of step-like ridges on steep slopes?",
    options: [
      "A. Afforestation",
      "B. Terracing",
      "C. Mulching",
      "D. Crop rotation"
    ],
    answer: "B",
    explanation: "Terracing converts steep slopes into a series of flat steps that trap water and prevent soil wash-away.",
    subtopic: "soil"
  },
  {
    question: "The dark, organic component of soil formed from decomposed plant and animal remains is called?",
    options: [
      "A. Clay",
      "B. Silt",
      "C. Humus",
      "D. Loam"
    ],
    answer: "C",
    explanation: "Humus is the decayed organic matter that improves soil structure, water-holding and fertility.",
    subtopic: "soil"
  },
  {
    question: "Planting cover crops such as legumes primarily helps the soil by?",
    options: [
      "A. Increasing acidity",
      "B. Protecting it from erosion and adding nitrogen",
      "C. Removing all moisture",
      "D. Encouraging leaching"
    ],
    answer: "B",
    explanation: "Cover crops shield the soil surface from rain impact and legumes fix atmospheric nitrogen, enriching fertility.",
    subtopic: "soil"
  },
  {
    question: "The process by which the top fertile layer of soil is worn away by wind or water is known as?",
    options: [
      "A. Erosion",
      "B. Deposition",
      "C. Infiltration",
      "D. Calcification"
    ],
    answer: "A",
    explanation: "Soil erosion is the removal and transport of the topsoil by agents such as running water and wind.",
    subtopic: "soil"
  },
  {
    question: "Which of the following soil types has the largest particle size and drains most rapidly?",
    options: [
      "A. Clay",
      "B. Silt",
      "C. Sand",
      "D. Loam"
    ],
    answer: "C",
    explanation: "Sandy soils have large, coarse particles with big air spaces, so water drains through them quickly.",
    subtopic: "soil"
  },
  {
    question: "Afforestation as a soil conservation method helps to?",
    options: [
      "A. Expose soil to wind",
      "B. Bind soil with tree roots and reduce erosion",
      "C. Increase surface run-off",
      "D. Promote leaching"
    ],
    answer: "B",
    explanation: "Tree roots bind the soil together and the canopy reduces the force of rain, lowering erosion.",
    subtopic: "soil"
  },
  {
    question: "Continuous cultivation of the same crop on a piece of land without fertiliser application leads to?",
    options: [
      "A. Soil fertility decline",
      "B. Increased humus",
      "C. Better yield",
      "D. Reduced erosion"
    ],
    answer: "A",
    explanation: "Repeated cropping removes nutrients without replacement, exhausting the soil and lowering fertility.",
    subtopic: "soil"
  },
  {
    question: "Which practice involves growing different crops in succession on the same land to maintain soil nutrients?",
    options: [
      "A. Monoculture",
      "B. Crop rotation",
      "C. Bush fallowing",
      "D. Terracing"
    ],
    answer: "B",
    explanation: "Crop rotation alternates crops with different nutrient needs, helping restore and balance soil fertility.",
    subtopic: "soil"
  },
  {
    question: "The practice of leaving farmland to rest and regenerate naturally is called?",
    options: [
      "A. Bush fallowing",
      "B. Overgrazing",
      "C. Strip cropping",
      "D. Irrigation"
    ],
    answer: "A",
    explanation: "Bush fallowing allows vegetation to regrow and soil organisms to restore fertility during the rest period.",
    subtopic: "soil"
  },
  {
    question: "Sheet, gully and wind erosion are all types of?",
    options: [
      "A. Soil formation",
      "B. Soil erosion",
      "C. Soil conservation",
      "D. Soil classification"
    ],
    answer: "B",
    explanation: "These are all forms of soil erosion differentiated by how water or wind removes the soil material.",
    subtopic: "soil"
  },
  {
    question: "Soil fertility is best maintained by the addition of?",
    options: [
      "A. Only inorganic pesticides",
      "B. Organic manure and compost",
      "C. Pure sand",
      "D. Acidic leachate"
    ],
    answer: "B",
    explanation: "Organic manure and compost add humus and nutrients, improving both fertility and soil structure.",
    subtopic: "soil"
  },

  // ---------------- WATER (12) ----------------
  {
    question: "The discharge of untreated sewage and industrial waste into rivers mainly causes?",
    options: [
      "A. Water conservation",
      "B. Water pollution",
      "C. Watershed protection",
      "D. Desalination"
    ],
    answer: "B",
    explanation: "Sewage and industrial effluents introduce harmful substances, polluting water bodies and killing aquatic life.",
    subtopic: "water"
  },
  {
    question: "A watershed is best described as?",
    options: [
      "A. A large dam for irrigation",
      "B. An area of land that drains into a river or lake",
      "C. A type of fish pond",
      "D. Underground water only"
    ],
    answer: "B",
    explanation: "A watershed is the land area that channels rainfall and runoff into a common stream, river or lake.",
    subtopic: "water"
  },
  {
    question: "The building of dams across rivers is mainly for?",
    options: [
      "A. Increasing erosion",
      "B. Water storage, irrigation and hydroelectric power",
      "C. Reducing rainfall",
      "D. Promoting flooding"
    ],
    answer: "B",
    explanation: "Dams impound water for supply, irrigation, flood control and the generation of hydroelectricity.",
    subtopic: "water"
  },
  {
    question: "Overfishing in aquatic habitats leads to?",
    options: [
      "A. Increased fish population",
      "B. Depletion of fish stocks and loss of biodiversity",
      "C. Cleaner water",
      "D. More oxygen production"
    ],
    answer: "B",
    explanation: "Catching fish faster than they reproduce depletes stocks and disrupts the aquatic food web.",
    subtopic: "water"
  },
  {
    question: "Which of the following is a method of conserving water at home and on farms?",
    options: [
      "A. Leaving taps running",
      "B. Rainwater harvesting and controlled irrigation",
      "C. Draining all wetlands",
      "D. Pumping groundwater endlessly"
    ],
    answer: "B",
    explanation: "Collecting rainwater and using efficient irrigation reduce wastage and protect freshwater supplies.",
    subtopic: "water"
  },
  {
    question: "Aquatic habitats such as rivers, lakes and wetlands are important because they?",
    options: [
      "A. Provide homes for many organisms and purify water",
      "B. Only store waste",
      "C. Prevent all rainfall",
      "D. Increase soil erosion"
    ],
    answer: "A",
    explanation: "Aquatic ecosystems support diverse life and help filter and regulate water quality.",
    subtopic: "water"
  },
  {
    question: "Eutrophication of a lake is most often caused by?",
    options: [
      "A. Excess nutrients such as nitrates from fertilisers",
      "B. Lack of sunlight",
      "C. Low temperature",
      "D. High oxygen"
    ],
    answer: "A",
    explanation: "Nutrient runoff stimulates algal blooms that deplete oxygen and kill fish — a process called eutrophication.",
    subtopic: "water"
  },
  {
    question: "Which practice helps to protect a watershed from degradation?",
    options: [
      "A. Deforestation of the catchment",
      "B. Reforestation and limiting pollution in the catchment",
      "C. Dumping waste upstream",
      "D. Channelising all streams"
    ],
    answer: "B",
    explanation: "Planting trees and controlling pollution in the catchment keeps water clean and reduces erosion and flooding.",
    subtopic: "water"
  },
  {
    question: "Oil spillage in oceans primarily harms marine life by?",
    options: [
      "A. Adding oxygen",
      "B. Coating organisms and blocking gas exchange",
      "C. Cooling the water",
      "D. Increasing light"
    ],
    answer: "B",
    explanation: "Oil films smother birds, fish and plants and prevent oxygen from entering the water.",
    subtopic: "water"
  },
  {
    question: "Groundwater is best conserved by?",
    options: [
      "A. Paving all surfaces",
      "B. Recharging aquifers through percolation and avoiding over-extraction",
      "C. Draining wetlands",
      "D. Diverting all rivers to the sea"
    ],
    answer: "B",
    explanation: "Allowing water to seep into the ground and limiting pumping keeps aquifer levels sustainable.",
    subtopic: "water"
  },
  {
    question: "Desertification near water bodies can be reduced by?",
    options: [
      "A. Overgrazing riverbanks",
      "B. Protecting vegetation along waterways",
      "C. Removing all trees",
      "D. Increasing salinity"
    ],
    answer: "B",
    explanation: "Riparian vegetation stabilises banks and retains moisture, slowing the spread of desert-like conditions.",
    subtopic: "water"
  },
  {
    question: "Treating domestic water before discharge into streams is important to?",
    options: [
      "A. Increase pollution",
      "B. Remove harmful substances and protect aquatic life",
      "C. Warm the river",
      "D. Add more algae"
    ],
    answer: "B",
    explanation: "Treatment removes pathogens and chemicals so returned water does not poison the ecosystem.",
    subtopic: "water"
  },

  // ---------------- FOREST (13) ----------------
  {
    question: "The cutting down of trees faster than they can be replaced is called?",
    options: [
      "A. Afforestation",
      "B. Deforestation",
      "C. Reforestation",
      "D. Conservation"
    ],
    answer: "B",
    explanation: "Deforestation is the permanent removal of forest cover, often for farmland, timber or fuel.",
    subtopic: "forest"
  },
  {
    question: "The planting of new trees in an area where forest previously existed is called?",
    options: [
      "A. Deforestation",
      "B. Reforestation",
      "C. Urbanisation",
      "D. Mining"
    ],
    answer: "B",
    explanation: "Reforestation restores tree cover on land that was formerly forested.",
    subtopic: "forest"
  },
  {
    question: "Planting trees in an area that was not previously forested is known as?",
    options: [
      "A. Reforestation",
      "B. Afforestation",
      "C. Logging",
      "D. Clear-felling"
    ],
    answer: "B",
    explanation: "Afforestation creates new forest where none existed before, increasing total tree cover.",
    subtopic: "forest"
  },
  {
    question: "Forests help to regulate rainfall and climate mainly because they?",
    options: [
      "A. Block the sun completely",
      "B. Release water vapour through transpiration",
      "C. Store all rainwater underground",
      "D. Prevent cloud formation"
    ],
    answer: "B",
    explanation: "Transpiration from trees returns moisture to the air, influencing local rainfall and cooling.",
    subtopic: "forest"
  },
  {
    question: "One major effect of deforestation on the atmosphere is?",
    options: [
      "A. Increased oxygen",
      "B. Increased carbon dioxide due to fewer trees absorbing it",
      "C. Reduced carbon dioxide",
      "D. Lower temperature everywhere"
    ],
    answer: "B",
    explanation: "Trees absorb CO2; removing them reduces this sink and raises atmospheric carbon dioxide.",
    subtopic: "forest"
  },
  {
    question: "A forest reserve is an area of land that is?",
    options: [
      "A. Open to unrestricted logging",
      "B. Protected for sustainable use and conservation",
      "C. Used only for mining",
      "D. Converted fully to farmland"
    ],
    answer: "B",
    explanation: "Forest reserves are legally set aside to protect trees and allow only controlled, sustainable use.",
    subtopic: "forest"
  },
  {
    question: "Forests are important habitats because they?",
    options: [
      "A. Provide shelter and food for many species",
      "B. Only produce timber",
      "C. Reduce biodiversity",
      "D. Block all animal movement"
    ],
    answer: "A",
    explanation: "Forests support a large share of terrestrial species by providing food, shelter and breeding sites.",
    subtopic: "forest"
  },
  {
    question: "Which of the following is a renewable forest product?",
    options: [
      "A. Coal",
      "B. Timber from sustainably managed forests",
      "C. Petroleum",
      "D. Iron ore"
    ],
    answer: "B",
    explanation: "Timber can be renewed through planned planting, unlike fossil fuels and minerals.",
    subtopic: "forest"
  },
  {
    question: "Soil erosion is often worsened by deforestation because?",
    options: [
      "A. Tree roots no longer bind the soil",
      "B. Rain becomes lighter",
      "C. Roots absorb more water",
      "D. Leaves fertilise the soil"
    ],
    answer: "A",
    explanation: "Without tree roots the soil is loose and easily washed or blown away.",
    subtopic: "forest"
  },
  {
    question: "Agroforestry refers to?",
    options: [
      "A. Clearing all trees for crops",
      "B. Integrating trees with crops and livestock",
      "C. Mining forest land",
      "D. Burning forests"
    ],
    answer: "B",
    explanation: "Agroforestry combines trees with agriculture, giving both produce and conservation benefits.",
    subtopic: "forest"
  },
  {
    question: "The major cause of deforestation in many West African countries is?",
    options: [
      "A. Afforestation programmes",
      "B. Subsistence farming, fuelwood collection and logging",
      "C. Increased rainfall",
      "D. Wildlife protection"
    ],
    answer: "B",
    explanation: "Small-scale farming, firewood needs and commercial logging are leading drivers of forest loss.",
    subtopic: "forest"
  },
  {
    question: "Forests contribute to the oxygen-carbon dioxide balance by?",
    options: [
      "A. Releasing carbon dioxide and absorbing oxygen",
      "B. Photosynthesis which absorbs CO2 and releases O2",
      "C. Preventing all respiration",
      "D. Storing oxygen underground"
    ],
    answer: "B",
    explanation: "Through photosynthesis trees take in CO2 and release oxygen, balancing atmospheric gases.",
    subtopic: "forest"
  },
  {
    question: "Selective logging is preferred to clear-felling because it?",
    options: [
      "A. Removes all trees at once",
      "B. Removes only some trees, preserving forest structure",
      "C. Increases erosion",
      "D. Prevents regrowth"
    ],
    answer: "B",
    explanation: "Removing individual trees keeps much of the canopy intact, limiting damage and aiding recovery.",
    subtopic: "forest"
  },

  // ---------------- WILDLIFE (12) ----------------
  {
    question: "A species whose population has fallen so low it is at risk of disappearing is called?",
    options: [
      "A. Endangered",
      "B. Abundant",
      "C. Invasive",
      "D. Domesticated"
    ],
    answer: "A",
    explanation: "Endangered species face a high risk of extinction in the wild without protection.",
    subtopic: "wildlife"
  },
  {
    question: "The illegal hunting of wild animals, especially protected ones, is called?",
    options: [
      "A. Poaching",
      "B. Grazing",
      "C. Herding",
      "D. Pollination"
    ],
    answer: "A",
    explanation: "Poaching is unlawful hunting or capturing of wildlife, often driving species toward extinction.",
    subtopic: "wildlife"
  },
  {
    question: "A game reserve is an area set aside mainly to?",
    options: [
      "A. Allow unrestricted hunting",
      "B. Protect wild animals and their habitat",
      "C. Mine minerals",
      "D. Grow cash crops"
    ],
    answer: "B",
    explanation: "Game reserves conserve wildlife populations and their habitats, often allowing limited tourism.",
    subtopic: "wildlife"
  },
  {
    question: "A national park differs from a game reserve mainly in that it is?",
    options: [
      "A. Open to mining",
      "B. Strictly protected by law with limited human use",
      "C. Used for farming",
      "D. Unprotected land"
    ],
    answer: "B",
    explanation: "National parks are legally protected areas with strict rules to conserve nature and scenery.",
    subtopic: "wildlife"
  },
  {
    question: "The permanent disappearance of a species from the earth is called?",
    options: [
      "A. Migration",
      "B. Extinction",
      "C. Hibernation",
      "D. Adaptation"
    ],
    answer: "B",
    explanation: "Extinction occurs when no living members of a species remain anywhere on Earth.",
    subtopic: "wildlife"
  },
  {
    question: "Biodiversity refers to?",
    options: [
      "A. The number of individuals in one species",
      "B. The variety of living organisms in an area",
      "C. Only plant species",
      "D. The amount of rainfall"
    ],
    answer: "B",
    explanation: "Biodiversity is the range of species, genes and ecosystems present in a region.",
    subtopic: "wildlife"
  },
  {
    question: "Captive breeding programmes help conserve wildlife by?",
    options: [
      "A. Reducing habitat",
      "B. Breeding endangered species in safe conditions for later release",
      "C. Encouraging poaching",
      "D. Removing all food"
    ],
    answer: "B",
    explanation: "Breeding animals in captivity raises numbers that can be reintroduced to the wild.",
    subtopic: "wildlife"
  },
  {
    question: "Which of the following is a major threat to wildlife conservation?",
    options: [
      "A. Habitat destruction",
      "B. Ecotourism",
      "C. Protected areas",
      "D. Breeding programmes"
    ],
    answer: "A",
    explanation: "Loss of natural habitat through farming, logging and urbanisation is the leading threat to species.",
    subtopic: "wildlife"
  },
  {
    question: "The Convention on International Trade in Endangered Species (CITES) aims to?",
    options: [
      "A. Promote wildlife trade",
      "B. Regulate and control trade in threatened species",
      "C. Allow unlimited hunting",
      "D. Remove protected areas"
    ],
    answer: "B",
    explanation: "CITES is an international agreement that restricts trade in wild plants and animals at risk.",
    subtopic: "wildlife"
  },
  {
    question: "Ecotourism supports wildlife conservation by?",
    options: [
      "A. Destroying habitats for hotels",
      "B. Generating income that funds protection",
      "C. Encouraging poaching",
      "D. Removing animals"
    ],
    answer: "B",
    explanation: "Well-managed ecotourism provides money and jobs that give communities a reason to protect wildlife.",
    subtopic: "wildlife"
  },
  {
    question: "The loss of genetic diversity in a small wildlife population makes it more vulnerable to?",
    options: [
      "A. Disease and environmental change",
      "B. Faster growth",
      "C. Increased fertility",
      "D. Stable climate"
    ],
    answer: "A",
    explanation: "Low genetic variation reduces the ability of a population to survive new diseases or changes.",
    subtopic: "wildlife"
  },
  {
    question: "Establishing wildlife corridors between protected areas helps animals by?",
    options: [
      "A. Trapping them",
      "B. Allowing safe movement and gene flow between habitats",
      "C. Isolating populations",
      "D. Removing food"
    ],
    answer: "B",
    explanation: "Corridors link fragmented habitats so animals can migrate, breed and maintain healthy populations.",
    subtopic: "wildlife"
  }
];

module.exports = questions;
