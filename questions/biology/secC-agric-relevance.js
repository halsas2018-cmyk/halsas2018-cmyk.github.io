// biology — Relevance of Biology to Agriculture
const questions = [
  // ---------- Crop improvement ----------
  {
    question: "Which of the following is a major aim of crop improvement programmes?",
    options: [
      "A. To reduce the number of varieties available",
      "B. To increase yield and quality of crops",
      "C. To eliminate the use of seeds",
      "D. To make crops depend entirely on chemicals"
    ],
    answer: "B",
    explanation: "Crop improvement seeks to develop varieties with higher yield, better quality and improved resistance so farmers produce more food.",
    subtopic: "Crop improvement"
  },
  {
    question: "The technique of growing whole plants from small pieces of plant tissue in a nutrient medium is called?",
    options: [
      "A. Grafting",
      "B. Tissue culture",
      "C. Layering",
      "D. Broadcasting"
    ],
    answer: "B",
    explanation: "Tissue culture uses sterile plant cells or tissues grown on a nutrient medium to produce many genetically identical plantlets quickly.",
    subtopic: "Crop improvement"
  },
  {
    question: "Which of these methods of crop improvement relies on choosing the best plants to produce the next generation?",
    options: [
      "A. Mass selection",
      "B. Overgrazing",
      "C. Fallowing",
      "D. Deforestation"
    ],
    answer: "A",
    explanation: "Mass selection involves identifying superior plants and using their seeds to improve the population over successive generations.",
    subtopic: "Crop improvement"
  },
  {
    question: "Genetically modified (GM) crops are produced by?",
    options: [
      "A. Crossing two local varieties only",
      "B. Inserting specific genes from other organisms",
      "C. Adding more water to the soil",
      "D. Removing all plant chromosomes"
    ],
    answer: "B",
    explanation: "GM crops carry genes inserted from another organism to give traits such as pest resistance or improved nutrition.",
    subtopic: "Crop improvement"
  },
  {
    question: "A major advantage of using certified improved seed is that it?",
    options: [
      "A. Germinates poorly",
      "B. Gives high and uniform yield",
      "C. Requires no sunlight",
      "D. Is always a wild type"
    ],
    answer: "B",
    explanation: "Certified improved seed is pure, viable and of a high-yielding variety, giving uniform stands and better harvests.",
    subtopic: "Crop improvement"
  },
  {
    question: "The use of disease-free planting materials in crop improvement helps to?",
    options: [
      "A. Increase spread of viruses",
      "B. Reduce crop losses from pathogens",
      "C. Lower photosynthesis",
      "D. Prevent flowering"
    ],
    answer: "B",
    explanation: "Healthy, pathogen-free seedlings and cuttings establish better and avoid transmitting diseases through the field.",
    subtopic: "Crop improvement"
  },
  {
    question: "Which practice improves crops by combining desirable traits from two different varieties?",
    options: [
      "A. Hybridization",
      "B. Burning",
      "C. Overcrowding",
      "D. Mono-cropping"
    ],
    answer: "A",
    explanation: "Hybridization crosses two genetically different but complementary parents to produce vigorous hybrids with combined traits.",
    subtopic: "Crop improvement"
  },
  {
    question: "Early maturing crop varieties are important in agriculture because they?",
    options: [
      "A. Take longer to harvest",
      "B. Allow more cropping cycles per year",
      "C. Need more rainfall",
      "D. Cannot be stored"
    ],
    answer: "B",
    explanation: "Early maturing varieties complete their life cycle quickly, letting farmers plant and harvest several times within a season.",
    subtopic: "Crop improvement"
  },
  {
    question: "The establishment of a gene bank for crops is done mainly to?",
    options: [
      "A. Destroy old seeds",
      "B. Conserve genetic diversity of plants",
      "C. Increase soil erosion",
      "D. Promote monoculture"
    ],
    answer: "B",
    explanation: "Gene banks store seeds and genetic material so valuable traits are preserved for future breeding programmes.",
    subtopic: "Crop improvement"
  },
  {
    question: "Which of the following is an example of a vegetative method used in crop multiplication?",
    options: [
      "A. Sowing seeds",
      "B. Cuttings",
      "C. Pollination",
      "D. Fertilization"
    ],
    answer: "B",
    explanation: "Cuttings are vegetative planting materials that develop roots and grow into new plants genetically identical to the parent.",
    subtopic: "Crop improvement"
  },
  // ---------- Pest and disease control ----------
  {
    question: "Which method of pest control uses natural enemies such as ladybirds to eat aphids?",
    options: [
      "A. Biological control",
      "B. Irrigation",
      "C. Mulching",
      "D. Burning"
    ],
    answer: "A",
    explanation: "Biological control introduces or conserves natural predators and parasites to keep pest populations below damaging levels.",
    subtopic: "Pest and disease control"
  },
  {
    question: "Growing crop varieties that are not attacked by a particular pathogen is an example of?",
    options: [
      "A. Resistant varieties",
      "B. Overcrowding",
      "C. Burning",
      "D. Fallowing"
    ],
    answer: "A",
    explanation: "Resistant varieties carry genes that reduce infection or damage, lowering the need for chemical sprays.",
    subtopic: "Pest and disease control"
  },
  {
    question: "A farmer practises crop rotation mainly to?",
    options: [
      "A. Increase pest and disease build-up",
      "B. Break the life cycle of pests and pathogens",
      "C. Reduce soil nutrients",
      "D. Encourage monoculture"
    ],
    answer: "B",
    explanation: "Changing crops denies pests and diseases their specific host continuously, interrupting their reproduction cycle.",
    subtopic: "Pest and disease control"
  },
  {
    question: "Which of these is a chemical used to kill fungi attacking crops?",
    options: [
      "A. Fungicide",
      "B. Herbicide",
      "C. Insecticide",
      "D. Fertilizer"
    ],
    answer: "A",
    explanation: "A fungicide specifically targets fungal pathogens such as those causing blight and mildew on crops.",
    subtopic: "Pest and disease control"
  },
  {
    question: "The practice of removing and burning infected plant parts helps to?",
    options: [
      "A. Spread the disease faster",
      "B. Reduce the source of infection",
      "C. Attract more insects",
      "D. Lower soil pH"
    ],
    answer: "B",
    explanation: "Destroying infected material removes the pathogen source, preventing it from spreading to healthy plants.",
    subtopic: "Pest and disease control"
  },
  {
    question: "Using neem extract to repel insects is an example of?",
    options: [
      "A. Synthetic pesticide only",
      "B. Botanical pest control",
      "C. Irrigation",
      "D. Grafting"
    ],
    answer: "B",
    explanation: "Neem and other plant-derived products are botanical pesticides that deter or kill insect pests with low toxicity.",
    subtopic: "Pest and disease control"
  },
  {
    question: "Integrated Pest Management (IPM) combines several methods in order to?",
    options: [
      "A. Rely only on chemicals",
      "B. Control pests while reducing chemical use",
      "C. Increase pest resistance",
      "D. Eliminate all insects"
    ],
    answer: "B",
    explanation: "IPM blends biological, cultural and chemical tactics to keep pests below economic thresholds with minimal chemical input.",
    subtopic: "Pest and disease control"
  },
  {
    question: "Which of the following is a vector that transmits plant viruses to crops?",
    options: [
      "A. Earthworm",
      "B. Whitefly",
      "C. Earthworm cast",
      "D. Humus"
    ],
    answer: "B",
    explanation: "Insects such as whiteflies and aphids feed on plants and transmit virus particles from infected to healthy crops.",
    subtopic: "Pest and disease control"
  },
  {
    question: "Quarantine of imported planting materials is meant to?",
    options: [
      "A. Introduce new pests",
      "B. Prevent entry of exotic pests and diseases",
      "C. Increase crop exports",
      "D. Reduce seed viability"
    ],
    answer: "B",
    explanation: "Quarantine inspection stops foreign pests and pathogens from entering a country on contaminated seeds or produce.",
    subtopic: "Pest and disease control"
  },
  {
    question: "Spraying insecticides at the wrong time often leads to?",
    options: [
      "A. Better pollination",
      "B. Pest resistance and killing of beneficial insects",
      "C. Higher soil fertility",
      "D. Faster germination"
    ],
    answer: "B",
    explanation: "Indiscriminate spraying selects for resistant pests and harms predators, worsening long-term control.",
    subtopic: "Pest and disease control"
  },
  // ---------- Soil fertility ----------
  {
    question: "Which soil organisms are mainly responsible for converting atmospheric nitrogen into forms plants can use?",
    options: [
      "A. Earthworms only",
      "B. Nitrogen-fixing bacteria in root nodules",
      "C. Beetles",
      "D. Millipedes"
    ],
    answer: "B",
    explanation: "Rhizobium and related bacteria in legume root nodules fix atmospheric nitrogen into ammonia for plant uptake.",
    subtopic: "Soil fertility"
  },
  {
    question: "Crop rotation including legumes helps maintain soil fertility by?",
    options: [
      "A. Removing all nitrogen",
      "B. Adding nitrogen through fixation",
      "C. Increasing erosion",
      "D. Lowering organic matter"
    ],
    answer: "B",
    explanation: "Legumes host nitrogen-fixing bacteria, enriching the soil with nitrogen for following non-legume crops.",
    subtopic: "Soil fertility"
  },
  {
    question: "Which practice involves leaving land without a crop for a period to restore fertility?",
    options: [
      "A. Fallowing",
      "B. Burning",
      "C. Overgrazing",
      "D. Monoculture"
    ],
    answer: "A",
    explanation: "Fallowing lets soil rest and recover nutrients and structure before being cropped again.",
    subtopic: "Soil fertility"
  },
  {
    question: "Decomposers such as bacteria and fungi improve soil fertility mainly by?",
    options: [
      "A. Compacting the soil",
      "B. Breaking down organic matter into nutrients",
      "C. Removing oxygen",
      "D. Increasing salinity"
    ],
    answer: "B",
    explanation: "Decomposers recycle dead plant and animal material into mineral nutrients plants can absorb.",
    subtopic: "Soil fertility"
  },
  {
    question: "Animal manure is added to farmland primarily to?",
    options: [
      "A. Reduce microbial activity",
      "B. Supply organic matter and nutrients",
      "C. Prevent all weeds",
      "D. Acidify the soil rapidly"
    ],
    answer: "B",
    explanation: "Manure returns organic matter and essential nutrients such as nitrogen and phosphorus to the soil.",
    subtopic: "Soil fertility"
  },
  {
    question: "Continuous cultivation without replenishing nutrients leads to?",
    options: [
      "A. Soil fertility improvement",
      "B. Nutrient depletion and low yields",
      "C. More earthworms",
      "D. Higher pH always"
    ],
    answer: "B",
    explanation: "Harvesting crops removes nutrients; without replacement the soil becomes exhausted and yields fall.",
    subtopic: "Soil fertility"
  },
  {
    question: "Cover crops are grown between main crops mainly to?",
    options: [
      "A. Expose soil to erosion",
      "B. Protect soil and add organic matter",
      "C. Increase leaching",
      "D. Kill beneficial microbes"
    ],
    answer: "B",
    explanation: "Cover crops shield the soil from erosion and, when incorporated, add organic matter that feeds the soil.",
    subtopic: "Soil fertility"
  },
  {
    question: "Green manure refers to?",
    options: [
      "A. Plastic sheets on soil",
      "B. Fresh plant material ploughed into the soil",
      "C. Inorganic salt",
      "D. Burning crop residue"
    ],
    answer: "B",
    explanation: "Green manuring incorporates freshly grown plants into the soil to release nutrients as they decompose.",
    subtopic: "Soil fertility"
  },
  {
    question: "Which element is most commonly deficient in soils used for cereal production?",
    options: [
      "A. Nitrogen",
      "B. Gold",
      "C. Lead",
      "D. Mercury"
    ],
    answer: "A",
    explanation: "Nitrogen is needed in large amounts for leaf growth and is frequently the limiting nutrient in cereals.",
    subtopic: "Soil fertility"
  },
  {
    question: "Mulching helps soil fertility and moisture by?",
    options: [
      "A. Increasing evaporation",
      "B. Reducing evaporation and adding organic matter as it decays",
      "C. Lowering microbial life",
      "D. Hardening the topsoil"
    ],
    answer: "B",
    explanation: "Mulch conserves moisture, moderates temperature and slowly contributes organic matter as it breaks down.",
    subtopic: "Soil fertility"
  },
  // ---------- Plant breeding ----------
  {
    question: "Plant breeding aims to combine desirable traits by?",
    options: [
      "A. Crossing selected parents",
      "B. Avoiding flowering",
      "C. Removing all leaves",
      "D. Burning seeds"
    ],
    answer: "A",
    explanation: "Breeders cross selected parents so offspring inherit useful combinations of traits from both.",
    subtopic: "Plant breeding"
  },
  {
    question: "Self-pollination within a pure line to maintain uniformity is called?",
    options: [
      "A. Inbreeding",
      "B. Hybridization",
      "C. Cloning",
      "D. Mutation"
    ],
    answer: "A",
    explanation: "Inbreeding through repeated selfing fixes traits and produces genetically uniform, stable lines.",
    subtopic: "Plant breeding"
  },
  {
    question: "The first generation produced by crossing two pure lines is referred to as the?",
    options: [
      "A. F1 generation",
      "B. P generation only",
      "C. Wild type",
      "D. Clone"
    ],
    answer: "A",
    explanation: "The F1 is the first filial generation from a cross and is often more vigorous than either parent.",
    subtopic: "Plant breeding"
  },
  {
    question: "Clonal propagation of crop plants ensures that offspring are?",
    options: [
      "A. Genetically different",
      "B. Genetically identical to the parent",
      "C. Always diseased",
      "D. Sterile permanently"
    ],
    answer: "B",
    explanation: "Clones are produced vegetatively, so they preserve the exact genetic makeup of the superior parent.",
    subtopic: "Plant breeding"
  },
  {
    question: "Emasculation in plant breeding is done to?",
    options: [
      "A. Prevent self-pollination before controlled crossing",
      "B. Increase pest attack",
      "C. Stop seed formation",
      "D. Reduce photosynthesis"
    ],
    answer: "A",
    explanation: "Removing anthers before they shed pollen forces the flower to receive pollen from the chosen male parent.",
    subtopic: "Plant breeding"
  },
  {
    question: "Hybrid vigour or heterosis refers to?",
    options: [
      "A. Weakness of hybrids",
      "B. Superior performance of crosses over parents",
      "C. Loss of flowers",
      "D. Sterility of pure lines"
    ],
    answer: "B",
    explanation: "Heterosis is the increased growth, yield or vigour shown by hybrids compared with their inbred parents.",
    subtopic: "Plant breeding"
  },
  {
    question: "Backcrossing is used in breeding to?",
    options: [
      "A. Introduce one trait into an established variety",
      "B. Eliminate all traits",
      "C. Produce wild plants",
      "D. Stop flowering"
    ],
    answer: "A",
    explanation: "Repeated backcrossing transfers a single desired gene while recovering the rest of the recurrent parent's genome.",
    subtopic: "Plant breeding"
  },
  {
    question: "Which tool helps plant breeders select plants with desired DNA markers?",
    options: [
      "A. Molecular markers",
      "B. Hoe only",
      "C. Rain gauge",
      "D. Compass"
    ],
    answer: "A",
    explanation: "Molecular markers let breeders identify plants carrying target genes without waiting to observe the trait.",
    subtopic: "Plant breeding"
  },
  {
    question: "A pure line in plant breeding is a population that is?",
    options: [
      "A. Highly variable",
      "B. Genetically uniform through selfing",
      "C. Always cross-pollinated",
      "D. Infected with viruses"
    ],
    answer: "B",
    explanation: "Repeated self-pollination produces a pure line whose individuals are nearly identical genetically.",
    subtopic: "Plant breeding"
  },
  {
    question: "Mutation breeding induces genetic changes using?",
    options: [
      "A. Radiation or chemicals",
      "B. Extra watering",
      "C. Hand weeding",
      "D. More sunlight"
    ],
    answer: "A",
    explanation: "Mutagens such as gamma rays or chemicals create new alleles that breeders can select for useful traits.",
    subtopic: "Plant breeding"
  },
  // ---------- Animal husbandry ----------
  {
    question: "Selective breeding in livestock is practised to?",
    options: [
      "A. Produce weaker animals",
      "B. Improve traits like milk yield and growth",
      "C. Eliminate all feeds",
      "D. Stop reproduction"
    ],
    answer: "B",
    explanation: "Mating superior animals concentrates desirable genes, improving production and disease resistance over generations.",
    subtopic: "Animal husbandry"
  },
  {
    question: "Artificial insemination in farm animals involves?",
    options: [
      "A. Natural mating only",
      "B. Placing semen into the female reproductive tract by hand",
      "C. Feeding hormones",
      "D. Removing the uterus"
    ],
    answer: "B",
    explanation: "AI deposits collected semen into the female, allowing use of superior sires without moving animals.",
    subtopic: "Animal husbandry"
  },
  {
    question: "Providing balanced ration to livestock mainly ensures?",
    options: [
      "A. Poor growth",
      "B. Proper growth, health and production",
      "C. Disease spread",
      "D. Infertility only"
    ],
    answer: "B",
    explanation: "A balanced diet supplies energy, protein, minerals and vitamins needed for growth and productivity.",
    subtopic: "Animal husbandry"
  },
  {
    question: "Vaccination of farm animals is carried out to?",
    options: [
      "A. Cause disease",
      "B. Protect against specific infections",
      "C. Reduce weight",
      "D. Stop feeding"
    ],
    answer: "B",
    explanation: "Vaccines stimulate immunity so animals resist particular pathogens, reducing outbreaks and losses.",
    subtopic: "Animal husbandry"
  },
  {
    question: "Which practice helps prevent the spread of disease in a poultry house?",
    options: [
      "A. Overcrowding",
      "B. Good hygiene and biosecurity",
      "C. Sharing equipment with sick flocks",
      "D. Poor ventilation"
    ],
    answer: "B",
    explanation: "Cleaning, disinfection and restricting movement keep pathogens out and limit transmission among birds.",
    subtopic: "Animal husbandry"
  },
  {
    question: "Crossbreeding different cattle breeds is done to obtain?",
    options: [
      "A. Less milk",
      "B. Animals combining traits of both breeds",
      "C. Infertile offspring always",
      "D. Smaller size only"
    ],
    answer: "B",
    explanation: "Crossbreeding merges strengths such as milk yield and disease tolerance from the parent breeds.",
    subtopic: "Animal husbandry"
  },
  {
    question: "Ruminants such as cattle derive much of their nutrition from?",
    options: [
      "A. Plastic",
      "B. Microbial fermentation in the rumen",
      "C. Direct sugar absorption only",
      "D. Soil ingestion"
    ],
    answer: "B",
    explanation: "Rumen microbes break down cellulose into volatile fatty acids the animal can absorb as energy.",
    subtopic: "Animal husbandry"
  },
  {
    question: "Provision of clean water to livestock is important because water?",
    options: [
      "A. Is not needed",
      "B. Is essential for digestion and temperature regulation",
      "C. Causes disease only",
      "D. Reduces feed value"
    ],
    answer: "B",
    explanation: "Water is needed for digestion, nutrient transport, waste removal and cooling of the animal body.",
    subtopic: "Animal husbandry"
  },
  {
    question: "A major benefit of keeping records in animal husbandry is to?",
    options: [
      "A. Confuse the farmer",
      "B. Track performance and breeding decisions",
      "C. Hide losses",
      "D. Avoid vaccinations"
    ],
    answer: "B",
    explanation: "Records show growth, milk, health and pedigree, guiding selection and management choices.",
    subtopic: "Animal husbandry"
  },
  {
    question: "Which of these is a method of improving fish production in aquaculture?",
    options: [
      "A. Overstocking without feeding",
      "B. Stocking improved breeds with proper feeding",
      "C. Draining the pond yearly",
      "D. Adding no oxygen"
    ],
    answer: "B",
    explanation: "Good breeds plus balanced feeding and aeration raise survival and yield in fish farming.",
    subtopic: "Animal husbandry"
  }
];

module.exports = questions;
