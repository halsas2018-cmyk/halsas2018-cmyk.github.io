// biology — Nutrient Cycling in Nature
const questions = [
  // ---------- Carbon cycle ----------
  {
    question: "Which process removes carbon dioxide from the atmosphere and fixes it into organic compounds?",
    options: [
      "A. Respiration",
      "B. Photosynthesis",
      "C. Combustion",
      "D. Denitrification"
    ],
    answer: "B",
    explanation: "Photosynthesis by green plants converts atmospheric CO2 into glucose and other organic compounds.",
    subtopic: "Carbon cycle"
  },
  {
    question: "The release of carbon dioxide to the atmosphere by living organisms breaking down glucose is called?",
    options: [
      "A. Photosynthesis",
      "B. Transpiration",
      "C. Respiration",
      "D. Fixation"
    ],
    answer: "C",
    explanation: "Respiration oxidises organic food to release energy and CO2 back into the atmosphere.",
    subtopic: "Carbon cycle"
  },
  {
    question: "Burning of fossil fuels mainly returns which form of carbon to the atmosphere?",
    options: [
      "A. Carbon monoxide only",
      "B. Carbon dioxide",
      "C. Elemental carbon soot",
      "D. Carbonate ions"
    ],
    answer: "B",
    explanation: "Combustion of coal, oil and gas releases stored carbon largely as carbon dioxide.",
    subtopic: "Carbon cycle"
  },
  {
    question: "Decomposition of dead organisms by bacteria and fungi releases carbon mainly as?",
    options: [
      "A. Oxygen gas",
      "B. Methane only",
      "C. Carbon dioxide",
      "D. Glucose"
    ],
    answer: "C",
    explanation: "Decomposers respire as they break down organic matter, releasing CO2 (and some methane in anaerobic conditions).",
    subtopic: "Carbon cycle"
  },
  {
    question: "Which reservoir holds the largest amount of carbon on Earth?",
    options: [
      "A. The atmosphere",
      "B. Living biomass",
      "C. Sedimentary rocks and oceans",
      "D. Freshwater lakes"
    ],
    answer: "C",
    explanation: "Most carbon is locked in sedimentary rocks (e.g. limestone) and dissolved in the oceans.",
    subtopic: "Carbon cycle"
  },
  {
    question: "Carbon enters the biotic component of the carbon cycle through?",
    options: [
      "A. Animals eating plants",
      "B. Producers fixing CO2",
      "C. Decomposers releasing CO2",
      "D. Volcanic eruption"
    ],
    answer: "B",
    explanation: "Autotrophs (producers) are the entry point, incorporating CO2 into organic molecules.",
    subtopic: "Carbon cycle"
  },
  {
    question: "Which human activity most directly increases atmospheric carbon dioxide?",
    options: [
      "A. Planting trees",
      "B. Burning fossil fuels",
      "C. Reforestation",
      "D. Using solar panels"
    ],
    answer: "B",
    explanation: "Fossil fuel combustion transfers long-buried carbon into the atmosphere as CO2.",
    subtopic: "Carbon cycle"
  },
  {
    question: "In the carbon cycle, the process that converts organic carbon back to CO2 in the soil is carried out mainly by?",
    options: [
      "A. Green plants",
      "B. Decomposers",
      "C. Herbivores",
      "D. Carnivores"
    ],
    answer: "B",
    explanation: "Soil bacteria and fungi decompose detritus, respiring and returning carbon to the air and soil.",
    subtopic: "Carbon cycle"
  },
  {
    question: "Limestone and chalk are forms of which carbon reservoir?",
    options: [
      "A. Atmospheric CO2",
      "B. Biotic carbon",
      "C. Carbonate rocks",
      "D. Dissolved ocean carbon only"
    ],
    answer: "C",
    explanation: "These sedimentary rocks store carbon as calcium carbonate over geological time.",
    subtopic: "Carbon cycle"
  },
  {
    question: "Cutting down and burning forests disrupts the carbon cycle by?",
    options: [
      "A. Increasing photosynthesis",
      "B. Reducing CO2 absorption and adding CO2",
      "C. Stopping decomposition",
      "D. Creating more oceans"
    ],
    answer: "B",
    explanation: "Deforestation removes CO2 sinks and burning releases stored carbon as CO2.",
    subtopic: "Carbon cycle"
  },
  // ---------- Water cycle ----------
  {
    question: "The process by which water changes from liquid to vapour and enters the atmosphere is?",
    options: [
      "A. Condensation",
      "B. Precipitation",
      "C. Evaporation",
      "D. Infiltration"
    ],
    answer: "C",
    explanation: "Evaporation converts liquid water to vapour using solar heat.",
    subtopic: "Water cycle"
  },
  {
    question: "Water vapour cooling and changing to liquid droplets to form clouds is called?",
    options: [
      "A. Evaporation",
      "B. Condensation",
      "C. Transpiration",
      "D. Percolation"
    ],
    answer: "B",
    explanation: "Condensation occurs when moist air cools and vapour becomes liquid droplets.",
    subtopic: "Water cycle"
  },
  {
    question: "Rain, snow and hail returning water to the Earth's surface is known as?",
    options: [
      "A. Evaporation",
      "B. Transpiration",
      "C. Precipitation",
      "D. Condensation"
    ],
    answer: "C",
    explanation: "Precipitation is any form of water falling from clouds to the ground.",
    subtopic: "Water cycle"
  },
  {
    question: "Loss of water vapour from plant leaves to the atmosphere is called?",
    options: [
      "A. Evaporation",
      "B. Transpiration",
      "C. Condensation",
      "D. Runoff"
    ],
    answer: "B",
    explanation: "Transpiration is water loss from plants, mainly through stomata.",
    subtopic: "Water cycle"
  },
  {
    question: "Water soaking into the ground to become groundwater is described as?",
    options: [
      "A. Runoff",
      "B. Infiltration",
      "C. Evaporation",
      "D. Condensation"
    ],
    answer: "B",
    explanation: "Infiltration is the downward movement of water into soil and rock.",
    subtopic: "Water cycle"
  },
  {
    question: "The main source of energy that drives the water cycle is?",
    options: [
      "A. The Moon's gravity",
      "B. The Sun",
      "C. Earth's core",
      "D. Wind"
    ],
    answer: "B",
    explanation: "Solar energy powers evaporation and drives weather that moves water.",
    subtopic: "Water cycle"
  },
  {
    question: "Surface water flowing over land into rivers and oceans is termed?",
    options: [
      "A. Infiltration",
      "B. Transpiration",
      "C. Runoff",
      "D. Condensation"
    ],
    answer: "C",
    explanation: "Runoff is water that flows across the surface rather than soaking in.",
    subtopic: "Water cycle"
  },
  {
    question: "Which process returns the most water vapour to the atmosphere globally?",
    options: [
      "A. Transpiration from plants",
      "B. Evaporation from oceans",
      "C. Respiration",
      "D. Combustion"
    ],
    answer: "B",
    explanation: "The oceans are by far the largest source of atmospheric water vapour.",
    subtopic: "Water cycle"
  },
  {
    question: "Clouds forming when warm moist air rises and cools involves which two stages?",
    options: [
      "A. Evaporation then runoff",
      "B. Condensation then precipitation",
      "C. Infiltration then transpiration",
      "D. Combustion then fixation"
    ],
    answer: "B",
    explanation: "Rising air cools, vapour condenses into clouds, which later precipitate.",
    subtopic: "Water cycle"
  },
  {
    question: "Which part of the water cycle is NOT directly driven by solar heating?",
    options: [
      "A. Evaporation",
      "B. Transpiration",
      "C. Condensation of rising air",
      "D. Lunar-induced tides"
    ],
    answer: "D",
    explanation: "Tides are driven by the gravitational pull of the Moon and Sun, not solar heating of water.",
    subtopic: "Water cycle"
  },
  // ---------- Nitrogen cycle ----------
  {
    question: "Conversion of atmospheric nitrogen gas into ammonia by bacteria is called?",
    options: [
      "A. Nitrification",
      "B. Denitrification",
      "C. Nitrogen fixation",
      "D. Ammonification"
    ],
    answer: "C",
    explanation: "Nitrogen fixation incorporates N2 into usable forms like ammonia.",
    subtopic: "Nitrogen cycle"
  },
  {
    question: "Which group of organisms can fix atmospheric nitrogen symbiotically in root nodules?",
    options: [
      "A. Rhizobium bacteria",
      "B. Fungi",
      "C. Algae",
      "D. Viruses"
    ],
    answer: "A",
    explanation: "Rhizobium lives in legume root nodules and fixes nitrogen for the plant.",
    subtopic: "Nitrogen cycle"
  },
  {
    question: "The conversion of ammonia to nitrites and then nitrates by soil bacteria is?",
    options: [
      "A. Nitrogen fixation",
      "B. Nitrification",
      "C. Denitrification",
      "D. Ammonification"
    ],
    answer: "B",
    explanation: "Nitrification oxidises ammonia first to nitrite then to nitrate.",
    subtopic: "Nitrogen cycle"
  },
  {
    question: "The process that returns nitrogen gas to the atmosphere from nitrates is?",
    options: [
      "A. Nitrification",
      "B. Fixation",
      "C. Denitrification",
      "D. Mineralisation"
    ],
    answer: "C",
    explanation: "Denitrifying bacteria reduce nitrates back to N2 gas under anaerobic conditions.",
    subtopic: "Nitrogen cycle"
  },
  {
    question: "Decomposition of proteins and urea into ammonia is called?",
    options: [
      "A. Nitrification",
      "B. Ammonification",
      "C. Fixation",
      "D. Denitrification"
    ],
    answer: "B",
    explanation: "Ammonification releases ammonia from organic nitrogen during decay.",
    subtopic: "Nitrogen cycle"
  },
  {
    question: "Leguminous plants enrich the soil with nitrogen mainly because they host?",
    options: [
      "A. Mycorrhizal fungi",
      "B. Nitrogen-fixing bacteria",
      "C. Denitrifying bacteria",
      "D. Nitrifying algae"
    ],
    answer: "B",
    explanation: "Rhizobium bacteria in nodules fix atmospheric N2 into plant-usable forms.",
    subtopic: "Nitrogen cycle"
  },
  {
    question: "Which form of nitrogen is most directly absorbed by plant roots?",
    options: [
      "A. Atmospheric N2 gas",
      "B. Nitrate and ammonium ions",
      "C. Elemental nitrogen in rock",
      "D. Nitrogen gas in water"
    ],
    answer: "B",
    explanation: "Plants take up nitrogen mainly as nitrate (NO3-) and ammonium (NH4+).",
    subtopic: "Nitrogen cycle"
  },
  {
    question: "Lightning contributes to the nitrogen cycle by?",
    options: [
      "A. Fixing N2 into oxides that fall in rain",
      "B. Denitrifying soil nitrates",
      "C. Nitrifying ammonia",
      "D. Decomposing proteins"
    ],
    answer: "A",
    explanation: "Electrical energy converts N2 and O2 into nitrogen oxides that dissolve in rain.",
    subtopic: "Nitrogen cycle"
  },
  {
    question: "Excessive use of nitrogen fertilisers can lead to?",
    options: [
      "A. Faster nitrogen fixation",
      "B. Eutrophication of water bodies",
      "C. More atmospheric N2",
      "D. Less plant growth"
    ],
    answer: "B",
    explanation: "Leached nitrates cause algal blooms and oxygen depletion in water.",
    subtopic: "Nitrogen cycle"
  },
  {
    question: "Which bacteria carry out denitrification, completing the nitrogen cycle?",
    options: [
      "A. Rhizobium",
      "B. Nitrosomonas",
      "C. Pseudomonas and similar anaerobes",
      "D. Azotobacter only in air"
    ],
    answer: "C",
    explanation: "Denitrifiers such as Pseudomonas reduce soil nitrates back to N2 gas.",
    subtopic: "Nitrogen cycle"
  },
  // ---------- Oxygen cycle ----------
  {
    question: "Free oxygen in the atmosphere is produced mainly by?",
    options: [
      "A. Respiration",
      "B. Photosynthesis",
      "C. Combustion",
      "D. Denitrification"
    ],
    answer: "B",
    explanation: "Photosynthesis splits water and releases O2 as a by-product.",
    subtopic: "Oxygen cycle"
  },
  {
    question: "Which process consumes atmospheric oxygen?",
    options: [
      "A. Photosynthesis",
      "B. Respiration and combustion",
      "C. Condensation",
      "D. Transpiration"
    ],
    answer: "B",
    explanation: "Respiration and burning use O2 to oxidise fuels and release energy.",
    subtopic: "Oxygen cycle"
  },
  {
    question: "Oxygen is returned to the atmosphere primarily through?",
    options: [
      "A. Animal respiration",
      "B. Plant photosynthesis",
      "C. Soil decomposition",
      "D. Rock weathering"
    ],
    answer: "B",
    explanation: "Aquatic and terrestrial photosynthesis is the dominant O2 source.",
    subtopic: "Oxygen cycle"
  },
  {
    question: "In the oxygen cycle, the largest reservoir of oxygen is?",
    options: [
      "A. The atmosphere",
      "B. Silicate and oxide minerals in Earth's crust",
      "C. Living organisms",
      "D. Dissolved river water"
    ],
    answer: "B",
    explanation: "Most oxygen is bound in crustal rocks and water, not free in the air.",
    subtopic: "Oxygen cycle"
  },
  {
    question: "Combustion of wood and fossil fuels affects the oxygen cycle by?",
    options: [
      "A. Producing O2",
      "B. Consuming O2 and forming CO2",
      "C. Fixing nitrogen",
      "D. Releasing nitrogen gas"
    ],
    answer: "B",
    explanation: "Burning oxidises carbon compounds, using O2 and yielding CO2.",
    subtopic: "Oxygen cycle"
  },
  {
    question: "The oxygen cycle is closely linked to the carbon cycle because?",
    options: [
      "A. Both depend on the Moon",
      "B. Photosynthesis and respiration exchange O2 and CO2",
      "C. Oxygen fixes nitrogen",
      "D. CO2 produces O2 directly"
    ],
    answer: "B",
    explanation: "Photosynthesis releases O2 while taking in CO2; respiration does the reverse.",
    subtopic: "Oxygen cycle"
  },
  {
    question: "Ozone in the upper atmosphere is important because it?",
    options: [
      "A. Traps heat only",
      "B. Absorbs harmful ultraviolet radiation",
      "C. Produces oxygen for respiration",
      "D. Causes acid rain"
    ],
    answer: "B",
    explanation: "The ozone layer shields life from damaging UV rays.",
    subtopic: "Oxygen cycle"
  },
  {
    question: "Aquatic organisms obtain oxygen mainly from?",
    options: [
      "A. Direct atmospheric N2",
      "B. Dissolved oxygen in water",
      "C. Rock minerals",
      "D. Soil nitrates"
    ],
    answer: "B",
    explanation: "Fish and aquatic life use oxygen dissolved in water, replenished by photosynthesis and diffusion.",
    subtopic: "Oxygen cycle"
  },
  {
    question: "Reduced oxygen levels in a pond after algal bloom death are caused by?",
    options: [
      "A. Increased photosynthesis",
      "B. Decomposers respiring as they break down dead algae",
      "C. More transpiration",
      "D. Nitrification stopping"
    ],
    answer: "B",
    explanation: "Bacterial decomposition of the bloom consumes dissolved O2, causing hypoxia.",
    subtopic: "Oxygen cycle"
  },
  {
    question: "Which statement about atmospheric oxygen is correct?",
    options: [
      "A. It makes up about 21% of the air",
      "B. Plants consume it during daylight",
      "C. It is produced by respiration",
      "D. It is fixed by Rhizobium"
    ],
    answer: "A",
    explanation: "Oxygen is roughly 21% of the atmosphere by volume.",
    subtopic: "Oxygen cycle"
  },
  // ---------- Phosphorus cycle ----------
  {
    question: "A major difference between the phosphorus cycle and the carbon cycle is that phosphorus?",
    options: [
      "A. Has a large atmospheric gas phase",
      "B. Lacks a significant gaseous atmospheric phase",
      "C. Is fixed by legumes",
      "D. Is released by respiration"
    ],
    answer: "B",
    explanation: "Phosphorus cycles mainly through rock, soil and water; it has no major atmospheric gas stage.",
    subtopic: "Phosphorus cycle"
  },
  {
    question: "The primary natural source of phosphate in the phosphorus cycle is?",
    options: [
      "A. Atmospheric dust",
      "B. Weathering of phosphate rocks",
      "C. Nitrogen fixation",
      "D. Lightning"
    ],
    answer: "B",
    explanation: "Phosphate is released from apatite and other rocks by weathering.",
    subtopic: "Phosphorus cycle"
  },
  {
    question: "Phosphorus is absorbed by plants mainly in the form of?",
    options: [
      "A. Elemental phosphorus gas",
      "B. Phosphate ions (PO4^3-)",
      "C. Atmospheric P2",
      "D. Phosphine gas"
    ],
    answer: "B",
    explanation: "Plants take up dissolved phosphate ions from the soil solution.",
    subtopic: "Phosphorus cycle"
  },
  {
    question: "Which process moves phosphorus from land to water bodies?",
    options: [
      "A. Transpiration",
      "B. Runoff and leaching",
      "C. Nitrification",
      "D. Denitrification"
    ],
    answer: "B",
    explanation: "Eroded phosphate-rich soil is washed by runoff into rivers and lakes.",
    subtopic: "Phosphorus cycle"
  },
  {
    question: "Phosphorus is a key component of which biological molecules?",
    options: [
      "A. Proteins and sugars only",
      "B. DNA, RNA and ATP",
      "C. Cellulose",
      "D. Haemoglobin"
    ],
    answer: "B",
    explanation: "Phosphate is part of nucleic acids and the energy carrier ATP.",
    subtopic: "Phosphorus cycle"
  },
  {
    question: "Excess phosphate entering lakes mainly causes?",
    options: [
      "A. Ozone depletion",
      "B. Eutrophication and algal blooms",
      "C. Acid rain",
      "D. Nitrogen fixation"
    ],
    answer: "B",
    explanation: "Phosphate is a limiting nutrient; excess fuels algal blooms and eutrophication.",
    subtopic: "Phosphorus cycle"
  },
  {
    question: "Birds contribute to the phosphorus cycle through?",
    options: [
      "A. Fixing atmospheric phosphorus",
      "B. Guano deposits that return phosphate to land",
      "C. Photosynthesis",
      "D. Denitrification"
    ],
    answer: "B",
    explanation: "Seabird guano concentrates phosphate, which is mined and returned to soils.",
    subtopic: "Phosphorus cycle"
  },
  {
    question: "Unlike nitrogen, phosphorus does NOT enter the atmosphere as?",
    options: [
      "A. Dissolved ions in water",
      "B. A gas under normal conditions",
      "C. Minerals in rock",
      "D. Compounds in organisms"
    ],
    answer: "B",
    explanation: "Phosphorus has no stable gaseous phase at Earth-surface temperatures.",
    subtopic: "Phosphorus cycle"
  },
  {
    question: "Phosphate rocks are formed mainly from?",
    options: [
      "A. Compressed atmospheric gas",
      "B. Accumulated marine organisms and sediments over time",
      "C. Lightning fixation",
      "D. Volcanic oxygen"
    ],
    answer: "B",
    explanation: "Sedimentary phosphate deposits originate from ancient marine life and sediments.",
    subtopic: "Phosphorus cycle"
  },
  {
    question: "A limiting nutrient for plant growth in many freshwater ecosystems is?",
    options: [
      "A. Oxygen",
      "B. Phosphorus",
      "C. Nitrogen gas directly",
      "D. Carbon dioxide"
    ],
    answer: "B",
    explanation: "Phosphorus is often the nutrient that limits primary production in fresh water.",
    subtopic: "Phosphorus cycle"
  },
];

module.exports = questions;
