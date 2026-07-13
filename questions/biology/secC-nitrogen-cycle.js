// biology — Nitrogen Cycle
const questions = [
  // ---- Nitrogen fixation (9) ----
  {
    question: "Which bacterium lives in root nodules of leguminous plants and fixes atmospheric nitrogen?",
    options: [
      "A. Azotobacter",
      "B. Rhizobium",
      "C. Nitrosomonas",
      "D. Pseudomonas"
    ],
    answer: "B",
    explanation: "Rhizobium forms a mutualistic association with legume root nodules, converting atmospheric N2 into ammonia usable by the plant.",
    subtopic: "Nitrogen fixation"
  },
  {
    question: "The industrial process that fixes atmospheric nitrogen into ammonia using high temperature and pressure is the",
    options: [
      "A. Ostwald process",
      "B. Contact process",
      "C. Haber process",
      "D. Bosch process"
    ],
    answer: "C",
    explanation: "The Haber process combines N2 and H2 under high pressure and temperature in the presence of a catalyst to form ammonia.",
    subtopic: "Nitrogen fixation"
  },
  {
    question: "Free-living nitrogen-fixing bacteria found in the soil include",
    options: [
      "A. Rhizobium and Azotobacter",
      "B. Azotobacter and Clostridium",
      "C. Nitrosomonas and Nitrobacter",
      "D. Pseudomonas and Bacillus"
    ],
    answer: "B",
    explanation: "Azotobacter (aerobic) and Clostridium (anaerobic) are free-living soil bacteria that fix atmospheric nitrogen without a host plant.",
    subtopic: "Nitrogen fixation"
  },
  {
    question: "Blue-green algae, also called cyanobacteria, contribute to nitrogen fixation mainly in",
    options: [
      "A. Deep ocean trenches",
      "B. Waterlogged paddy fields and aquatic habitats",
      "C. Dry desert soils",
      "D. Acidic peat bogs"
    ],
    answer: "B",
    explanation: "Cyanobacteria such as Anabaena and Nostoc fix nitrogen in aquatic environments, especially rice paddies, enriching the water with usable nitrogen.",
    subtopic: "Nitrogen fixation"
  },
  {
    question: "Lightning fixes atmospheric nitrogen by causing nitrogen and oxygen to combine to form",
    options: [
      "A. Ammonia",
      "B. Nitric oxide which becomes nitrates in rain",
      "C. Nitrous oxide only",
      "D. Urea"
    ],
    answer: "B",
    explanation: "The high energy of lightning forms nitrogen oxides (NO, NO2) that dissolve in rain as nitrates, returning fixed nitrogen to the soil.",
    subtopic: "Nitrogen fixation"
  },
  {
    question: "The form of nitrogen that atmospheric nitrogen fixers ultimately convert N2 into is",
    options: [
      "A. Nitrate",
      "B. Nitrite",
      "C. Ammonia",
      "D. Free amino acids"
    ],
    answer: "C",
    explanation: "Biological nitrogen fixation reduces N2 to ammonia (NH3), which is then incorporated into organic compounds or further oxidised.",
    subtopic: "Nitrogen fixation"
  },
  {
    question: "Legumes are valuable in crop rotation because they",
    options: [
      "A. Deplete soil nitrates rapidly",
      "B. Add fixed nitrogen to the soil via their nodules",
      "C. Acidify the soil",
      "D. Require large amounts of fertiliser"
    ],
    answer: "B",
    explanation: "Rhizobium in legume nodules fixes atmospheric nitrogen, enriching the soil and reducing the need for synthetic fertilisers in rotation.",
    subtopic: "Nitrogen fixation"
  },
  {
    question: "The enzyme complex responsible for biological nitrogen fixation by converting N2 to NH3 is",
    options: [
      "A. Nitrogenase",
      "B. Nitrate reductase",
      "C. Amylase",
      "D. Catalase"
    ],
    answer: "A",
    explanation: "Nitrogenase catalyses the reduction of atmospheric nitrogen to ammonia and is highly sensitive to oxygen.",
    subtopic: "Nitrogen fixation"
  },
  {
    question: "Which statement about free-living nitrogen fixers is correct?",
    options: [
      "A. They must live inside root nodules",
      "B. They fix nitrogen independently of a host plant",
      "C. They only grow in acidic soils",
      "D. They cannot survive without legumes"
    ],
    answer: "B",
    explanation: "Free-living fixers such as Azotobacter and Anabaena fix nitrogen on their own without forming a symbiosis with plants.",
    subtopic: "Nitrogen fixation"
  },

  // ---- Nitrification (8) ----
  {
    question: "Nitrification is the process by which",
    options: [
      "A. Nitrates are reduced to nitrogen gas",
      "B. Ammonia is oxidised to nitrites and then nitrates",
      "C. Atmospheric nitrogen is fixed",
      "D. Proteins are broken into amino acids"
    ],
    answer: "B",
    explanation: "Nitrification oxidises ammonia first to nitrite and then to nitrate, a form readily absorbed by plant roots.",
    subtopic: "Nitrification"
  },
  {
    question: "The bacterium that oxidises ammonia to nitrite during nitrification is",
    options: [
      "A. Nitrobacter",
      "B. Nitrosomonas",
      "C. Rhizobium",
      "D. Pseudomonas"
    ],
    answer: "B",
    explanation: "Nitrosomonas carries out the first nitrification step, converting ammonium (NH4+) to nitrite (NO2-).",
    subtopic: "Nitrification"
  },
  {
    question: "The bacterium that oxidises nitrite to nitrate during nitrification is",
    options: [
      "A. Nitrosomonas",
      "B. Nitrobacter",
      "C. Azotobacter",
      "D. Clostridium"
    ],
    answer: "B",
    explanation: "Nitrobacter performs the second step, oxidising toxic nitrite to the less harmful nitrate (NO3-).",
    subtopic: "Nitrification"
  },
  {
    question: "Nitrifying bacteria are best described as",
    options: [
      "A. Anaerobic heterotrophs",
      "B. Aerobic chemoautotrophs",
      "C. Photosynthetic autotrophs",
      "D. Facultative anaerobes"
    ],
    answer: "B",
    explanation: "Nitrifiers are aerobic bacteria that obtain energy by oxidising inorganic nitrogen compounds (chemoautotrophs).",
    subtopic: "Nitrification"
  },
  {
    question: "Nitrification requires the presence of",
    options: [
      "A. Free oxygen",
      "B. Absence of oxygen",
      "C. Strong acidity only",
      "D. Low temperature only"
    ],
    answer: "A",
    explanation: "Because nitrifiers are aerobes, well-aerated (oxygen-rich) soils support efficient nitrification.",
    subtopic: "Nitrification"
  },
  {
    question: "The end product of nitrification that is most readily absorbed by plant roots is",
    options: [
      "A. Ammonia",
      "B. Nitrite",
      "C. Nitrate",
      "D. Nitrogen gas"
    ],
    answer: "C",
    explanation: "Nitrate (NO3-) is the primary form of nitrogen taken up by most plants from the soil solution.",
    subtopic: "Nitrification"
  },
  {
    question: "Waterlogged (anaerobic) soils reduce nitrification because",
    options: [
      "A. Nitrifying bacteria need oxygen",
      "B. Ammonia is absent",
      "C. Temperature is too high",
      "D. Nitrates accumulate rapidly"
    ],
    answer: "A",
    explanation: "Saturated soils lack oxygen, inhibiting the aerobic nitrifying bacteria and slowing ammonia-to-nitrate conversion.",
    subtopic: "Nitrification"
  },
  {
    question: "The overall sequence of nitrogen compounds in nitrification is",
    options: [
      "A. Nitrate → nitrite → ammonia",
      "B. Ammonia → nitrite → nitrate",
      "C. Nitrite → nitrate → ammonia",
      "D. Ammonia → nitrate → nitrite"
    ],
    answer: "B",
    explanation: "Nitrification proceeds ammonia → nitrite (Nitrosomonas) → nitrate (Nitrobacter).",
    subtopic: "Nitrification"
  },

  // ---- Assimilation (8) ----
  {
    question: "Assimilation in the nitrogen cycle refers to",
    options: [
      "A. Release of ammonia by decomposers",
      "B. Uptake of nitrates by plants and their incorporation into proteins",
      "C. Conversion of nitrates to nitrogen gas",
      "D. Fixation of atmospheric nitrogen"
    ],
    answer: "B",
    explanation: "Assimilation is when plants absorb inorganic nitrogen (mainly nitrate) and build it into organic molecules like amino acids and proteins.",
    subtopic: "Assimilation"
  },
  {
    question: "Animals obtain their nitrogen mainly by",
    options: [
      "A. Fixing atmospheric nitrogen directly",
      "B. Eating plants or other animals",
      "C. Absorbing nitrates through the skin",
      "D. Performing nitrification"
    ],
    answer: "B",
    explanation: "Animals are heterotrophs; they assimilate nitrogen by consuming plant or animal tissue containing organic nitrogen.",
    subtopic: "Assimilation"
  },
  {
    question: "Plants absorb nitrogen primarily through their",
    options: [
      "A. Leaves from the air",
      "B. Roots from the soil solution",
      "C. Stem cuticle",
      "D. Flowers"
    ],
    answer: "B",
    explanation: "Root hairs take up nitrate and ammonium ions dissolved in soil water for assimilation into organic compounds.",
    subtopic: "Assimilation"
  },
  {
    question: "Nitrogen is incorporated into plant organic molecules in the form of",
    options: [
      "A. Amino acids and proteins",
      "B. Glucose",
      "C. Cellulose only",
      "D. Starch"
    ],
    answer: "A",
    explanation: "Assimilated nitrogen becomes part of amino acids, which are polymerised into proteins and other nitrogenous compounds.",
    subtopic: "Assimilation"
  },
  {
    question: "Which of the following is a direct product of nitrogen assimilation by plants?",
    options: [
      "A. Atmospheric nitrogen",
      "B. Plant proteins",
      "C. Nitrous oxide",
      "D. Soil ammonia"
    ],
    answer: "B",
    explanation: "Plants convert absorbed inorganic nitrogen into proteins, nucleic acids, and chlorophyll during assimilation.",
    subtopic: "Assimilation"
  },
  {
    question: "The nitrogen-containing group present in all amino acids is the",
    options: [
      "A. Hydroxyl group",
      "B. Amino group",
      "C. Carboxyl group",
      "D. Phosphate group"
    ],
    answer: "B",
    explanation: "Every amino acid contains an amino group (-NH2), which is the key nitrogen component assimilated into proteins.",
    subtopic: "Assimilation"
  },
  {
    question: "A deficiency of assimilable nitrogen in plants typically causes",
    options: [
      "A. Yellowing of older leaves (chlorosis)",
      "B. Thickened cell walls",
      "C. Excess flowering",
      "D. Root swelling"
    ],
    answer: "A",
    explanation: "Nitrogen is mobile; deficiency first shows as chlorosis (yellowing) of older leaves as nitrogen is relocated to new growth.",
    subtopic: "Assimilation"
  },
  {
    question: "Through which process do nitrates enter the food chain?",
    options: [
      "A. Denitrification",
      "B. Assimilation by producers",
      "C. Ammonification",
      "D. Weathering of rocks"
    ],
    answer: "B",
    explanation: "Plants assimilate soil nitrates, becoming the base of the food chain that transfers organic nitrogen to consumers.",
    subtopic: "Assimilation"
  },

  // ---- Ammonification (8) ----
  {
    question: "Ammonification is the process whereby",
    options: [
      "A. Nitrates are converted to nitrogen gas",
      "B. Decomposers break down proteins and urea into ammonia",
      "C. Atmospheric nitrogen is fixed",
      "D. Ammonia is oxidised to nitrate"
    ],
    answer: "B",
    explanation: "Saprophytic bacteria and fungi mineralise organic nitrogen from dead matter and waste into ammonium (ammonia).",
    subtopic: "Ammonification"
  },
  {
    question: "The organisms mainly responsible for ammonification are",
    options: [
      "A. Nitrifying bacteria",
      "B. Decomposer fungi and bacteria",
      "C. Legume root nodules",
      "D. Blue-green algae"
    ],
    answer: "B",
    explanation: "Saprophytic decomposers release ammonia as they break down proteins, nucleic acids, and urea in dead organisms and excreta.",
    subtopic: "Ammonification"
  },
  {
    question: "Ammonia produced by ammonification is often converted in soil to",
    options: [
      "A. Nitrogen gas immediately",
      "B. Ammonium ions (NH4+) which can be nitrified",
      "C. Free atmospheric oxygen",
      "D. Urea"
    ],
    answer: "B",
    explanation: "In moist soil, ammonia combines with water to form ammonium ions, which nitrifying bacteria can then oxidise.",
    subtopic: "Ammonification"
  },
  {
    question: "Ammonification returns nitrogen to the soil from",
    options: [
      "A. Living leaves only",
      "B. Dead organisms, faeces, and urine",
      "C. The atmosphere only",
      "D. Root nodules only"
    ],
    answer: "B",
    explanation: "Decomposers release the nitrogen locked in dead bodies, animal waste, and fallen plant material back as ammonia.",
    subtopic: "Ammonification"
  },
  {
    question: "The breakdown of urea in soil to ammonia is an example of",
    options: [
      "A. Nitrification",
      "B. Ammonification",
      "C. Denitrification",
      "D. Nitrogen fixation"
    ],
    answer: "B",
    explanation: "Urease-producing organisms hydrolyse urea into ammonia and carbon dioxide, a classic ammonification step.",
    subtopic: "Ammonification"
  },
  {
    question: "Ammonification is important because it",
    options: [
      "A. Removes all soil nitrogen",
      "B. Recycles organic nitrogen into forms usable by the cycle",
      "C. Fixes atmospheric nitrogen",
      "D. Converts nitrate to gas"
    ],
    answer: "B",
    explanation: "By releasing ammonium, ammonification makes nitrogen from dead matter available again for nitrification and plant uptake.",
    subtopic: "Ammonification"
  },
  {
    question: "Which condition most favours rapid ammonification?",
    options: [
      "A. Very dry, frozen soil",
      "B. Warm, moist soil rich in organic matter",
      "C. Strongly acidic, sterile soil",
      "D. Deeply waterlogged anoxic clay only"
    ],
    answer: "B",
    explanation: "Decomposer activity peaks in warm, moist, organic-rich soils, speeding the release of ammonia from dead matter.",
    subtopic: "Ammonification"
  },
  {
    question: "The organic nitrogen compounds decomposed during ammonification include",
    options: [
      "A. Proteins and nucleic acids",
      "B. Glucose and starch",
      "C. Cellulose only",
      "D. Fatty acids only"
    ],
    answer: "A",
    explanation: "Proteins and nucleic acids contain nitrogen; their breakdown by decomposers releases ammonia or ammonium.",
    subtopic: "Ammonification"
  },

  // ---- Denitrification (9) ----
  {
    question: "Denitrification is the process in which",
    options: [
      "A. Ammonia is oxidised to nitrate",
      "B. Nitrates are reduced to nitrogen gas by bacteria",
      "C. Nitrogen gas is fixed into ammonia",
      "D. Proteins are decomposed"
    ],
    answer: "B",
    explanation: "Under anaerobic conditions, denitrifying bacteria use nitrate as an electron acceptor, releasing N2 or N2O to the atmosphere.",
    subtopic: "Denitrification"
  },
  {
    question: "A common denitrifying bacterium is",
    options: [
      "A. Rhizobium",
      "B. Pseudomonas",
      "C. Nitrosomonas",
      "D. Azotobacter"
    ],
    answer: "B",
    explanation: "Pseudomonas (and related genera like Paracoccus) reduce soil nitrates to nitrogen gas in oxygen-poor conditions.",
    subtopic: "Denitrification"
  },
  {
    question: "Denitrification occurs most readily in",
    options: [
      "A. Well-aerated dry soils",
      "B. Waterlogged, oxygen-poor soils",
      "C. Bright sunlight only",
      "D. Frozen tundra"
    ],
    answer: "B",
    explanation: "Lack of oxygen forces denitrifiers to use nitrate instead, so saturated, anaerobic soils lose nitrogen as gas.",
    subtopic: "Denitrification"
  },
  {
    question: "The gaseous product returned to the atmosphere by denitrification is mainly",
    options: [
      "A. Ammonia",
      "B. Nitrogen gas (N2)",
      "C. Oxygen",
      "D. Carbon dioxide"
    ],
    answer: "B",
    explanation: "Denitrification completes the cycle by converting nitrate back to inert atmospheric N2 (with some N2O).",
    subtopic: "Denitrification"
  },
  {
    question: "Denitrification is considered economically undesirable in farmland because it",
    options: [
      "A. Increases soil fertility",
      "B. Leaches valuable nitrate fertiliser from the soil",
      "C. Fixes more nitrogen",
      "D. Promotes legume growth"
    ],
    answer: "B",
    explanation: "By converting fertiliser nitrate to gas, denitrification reduces the nitrogen available to crops and wastes applied fertiliser.",
    subtopic: "Denitrification"
  },
  {
    question: "Which process reverses nitrification in the nitrogen cycle?",
    options: [
      "A. Ammonification",
      "B. Denitrification",
      "C. Assimilation",
      "D. Nitrogen fixation"
    ],
    answer: "B",
    explanation: "Denitrification reduces nitrate back toward N2, effectively undoing the oxidation carried out by nitrifiers.",
    subtopic: "Denitrification"
  },
  {
    question: "In denitrification, nitrate (NO3-) is first reduced to",
    options: [
      "A. Nitrite (NO2-)",
      "B. Ammonia",
      "C. Nitric acid",
      "D. Urea"
    ],
    answer: "A",
    explanation: "The reduction sequence is nitrate → nitrite → nitric oxide → nitrous oxide → nitrogen gas.",
    subtopic: "Denitrification"
  },
  {
    question: "Good drainage of agricultural soils helps reduce",
    options: [
      "A. Nitrogen fixation",
      "B. Denitrification losses",
      "C. Ammonification",
      "D. Assimilation"
    ],
    answer: "B",
    explanation: "Drainage introduces oxygen, discouraging anaerobic denitrifiers and keeping more nitrate in the soil for crops.",
    subtopic: "Denitrification"
  },
  {
    question: "Some denitrification also releases a greenhouse gas, which is",
    options: [
      "A. Methane",
      "B. Nitrous oxide (N2O)",
      "C. Carbon monoxide",
      "D. Ozone"
    ],
    answer: "B",
    explanation: "Nitrous oxide is an intermediate and occasional by-product of denitrification and is a potent greenhouse gas.",
    subtopic: "Denitrification"
  },

  // ---- Nitrogen cycle organisms (8) ----
  {
    question: "Which organism is a symbiotic nitrogen fixer associated with legume root nodules?",
    options: [
      "A. Azotobacter",
      "B. Rhizobium",
      "C. Nitrobacter",
      "D. Pseudomonas"
    ],
    answer: "B",
    explanation: "Rhizobium lives symbiotically inside legume nodules, fixing nitrogen in exchange for carbohydrates from the plant.",
    subtopic: "Nitrogen cycle organisms"
  },
  {
    question: "Which of these is a free-living aerobic nitrogen-fixing bacterium?",
    options: [
      "A. Nitrosomonas",
      "B. Azotobacter",
      "C. Pseudomonas",
      "D. Nitrobacter"
    ],
    answer: "B",
    explanation: "Azotobacter is a free-living aerobic soil bacterium capable of fixing atmospheric nitrogen without a host.",
    subtopic: "Nitrogen cycle organisms"
  },
  {
    question: "Cyanobacteria such as Anabaena contribute to the nitrogen cycle as",
    options: [
      "A. Denitrifiers",
      "B. Nitrogen fixers in aquatic systems",
      "C. Nitrite oxidisers",
      "D. Ammonifiers only"
    ],
    answer: "B",
    explanation: "These photosynthetic blue-green algae fix nitrogen in water bodies and wet soils, enriching them with usable nitrogen.",
    subtopic: "Nitrogen cycle organisms"
  },
  {
    question: "Nitrosomonas and Nitrobacter are classified together as",
    options: [
      "A. Nitrogen fixers",
      "B. Nitrifying bacteria",
      "C. Denitrifiers",
      "D. Decomposers"
    ],
    answer: "B",
    explanation: "Both are chemoautotrophic nitrifiers that oxidise ammonia (Nitrosomonas) and nitrite (Nitrobacter) to nitrate.",
    subtopic: "Nitrogen cycle organisms"
  },
  {
    question: "The group of organisms that carry out ammonification are mainly",
    options: [
      "A. Photosynthetic algae",
      "B. Saprophytic bacteria and fungi",
      "C. Legume nodules",
      "D. Nitrifying bacteria"
    ],
    answer: "B",
    explanation: "Saprophytic decomposers release ammonia from dead organic matter, performing ammonification.",
    subtopic: "Nitrogen cycle organisms"
  },
  {
    question: "Pseudomonas species are notable in the nitrogen cycle primarily as",
    options: [
      "A. Nitrogen fixers",
      "B. Denitrifiers",
      "C. Nitrite oxidisers",
      "D. Ammonia assimilators"
    ],
    answer: "B",
    explanation: "Pseudomonas reduces nitrate to nitrogen gas under anaerobic conditions, making it a key denitrifier.",
    subtopic: "Nitrogen cycle organisms"
  },
  {
    question: "Root nodules on legumes appear pinkish due to the presence of",
    options: [
      "A. Chlorophyll",
      "B. Leghaemoglobin, which protects nitrogenase",
      "C. Nitrate crystals",
      "D. Starch grains"
    ],
    answer: "B",
    explanation: "Leghaemoglobin in the nodule binds oxygen, protecting the oxygen-sensitive nitrogenase enzyme of Rhizobium.",
    subtopic: "Nitrogen cycle organisms"
  },
  {
    question: "Which organism plays a role in BOTH nitrogen fixation and, indirectly, the food chain as a producer?",
    options: [
      "A. Pseudomonas",
      "B. Cyanobacteria (blue-green algae)",
      "C. Nitrobacter",
      "D. Saprophytic fungi"
    ],
    answer: "B",
    explanation: "Cyanobacteria photosynthesise (acting as producers) while also fixing atmospheric nitrogen in aquatic habitats.",
    subtopic: "Nitrogen cycle organisms"
  }
];

module.exports = questions;
