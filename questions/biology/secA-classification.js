// biology — Classification of Living Things
const questions = [
  {
    question: "Which of the following is a characteristic of living things but NOT of non-living things?",
    options: [
      "A. Ability to occupy space",
      "B. Ability to reproduce",
      "C. Possession of weight",
      "D. Possession of colour"
    ],
    answer: "B",
    explanation: "Reproduction is a defining characteristic of living organisms; non-living things cannot reproduce.",
    subtopic: "living & non-living"
  },
  {
    question: "Which of the following statements is TRUE of non-living things?",
    options: [
      "A. They grow by cell division",
      "B. They respire",
      "C. They do not carry out metabolism",
      "D. They respond to stimuli"
    ],
    answer: "C",
    explanation: "Non-living things lack metabolism, the sum of chemical processes that sustain life.",
    subtopic: "living & non-living"
  },
  {
    question: "The ability of an organism to detect and respond to changes in its environment is called?",
    options: [
      "A. Irritability",
      "B. Reproduction",
      "C. Excretion",
      "D. Movement"
    ],
    answer: "A",
    explanation: "Irritability (responsiveness) is the ability to respond to stimuli in the environment.",
    subtopic: "living & non-living"
  },
  {
    question: "Which of the following is an example of a non-living thing that grows?",
    options: [
      "A. A cat",
      "B. A crystal",
      "C. A yeast",
      "D. A bacterium"
    ],
    answer: "B",
    explanation: "Crystals grow by accretion of material, not by metabolic processes, so they are non-living.",
    subtopic: "living & non-living"
  },
  {
    question: "Metabolism in living organisms refers to?",
    options: [
      "A. The movement of the whole body",
      "B. The sum of all chemical reactions in the body",
      "C. The process of breathing only",
      "D. The removal of waste only"
    ],
    answer: "B",
    explanation: "Metabolism is the totality of biochemical reactions (catabolism and anabolism) in an organism.",
    subtopic: "living & non-living"
  },
  {
    question: "Which of the following lists contains only living things?",
    options: [
      "A. Virus, bacterium, stone",
      "B. Mushroom, mango tree, dog",
      "C. Water, air, soil",
      "D. Fire, crystal, seed"
    ],
    answer: "B",
    explanation: "Mushroom (fungus), mango tree (plant) and dog (animal) are all living organisms.",
    subtopic: "living & non-living"
  },
  {
    question: "The smallest unit of life that can carry out all life processes is the?",
    options: [
      "A. Tissue",
      "B. Organ",
      "C. Cell",
      "D. Organism"
    ],
    answer: "C",
    explanation: "The cell is the basic structural and functional unit of all living things.",
    subtopic: "living & non-living"
  },
  {
    question: "Which of the following is NOT a characteristic used to distinguish living from non-living things?",
    options: [
      "A. Nutrition",
      "B. Excretion",
      "C. Density",
      "D. Growth"
    ],
    answer: "C",
    explanation: "Density is a physical property applicable to both living and non-living matter.",
    subtopic: "living & non-living"
  },
  {
    question: "A virus is often considered borderline between living and non-living because it?",
    options: [
      "A. Can respire independently",
      "B. Can only reproduce inside a host cell",
      "C. Has a true nucleus",
      "D. Can feed on its own"
    ],
    answer: "B",
    explanation: "Viruses lack cellular machinery and can only replicate within a living host cell.",
    subtopic: "living & non-living"
  },
  {
    question: "The process by which living things produce new individuals of their kind is?",
    options: [
      "A. Growth",
      "B. Reproduction",
      "C. Nutrition",
      "D. Excretion"
    ],
    answer: "B",
    explanation: "Reproduction is the biological process of producing offspring.",
    subtopic: "living & non-living"
  },
  {
    question: "Bacteria and blue-green algae (cyanobacteria) are placed in which kingdom?",
    options: [
      "A. Plantae",
      "B. Animalia",
      "C. Monera",
      "D. Fungi"
    ],
    answer: "C",
    explanation: "Monera comprises prokaryotic organisms such as bacteria and cyanobacteria.",
    subtopic: "Kingdoms: Monera, Protoctista, Fungi, Plantae, Animalia"
  },
  {
    question: "Organisms in the kingdom Monera are characterised by the absence of?",
    options: [
      "A. A cell wall",
      "B. Membrane-bound organelles and a true nucleus",
      "C. Ribosomes",
      "D. Cytoplasm"
    ],
    answer: "B",
    explanation: "Monerans are prokaryotes; they lack a true nucleus and membrane-bound organelles.",
    subtopic: "Kingdoms: Monera, Protoctista, Fungi, Plantae, Animalia"
  },
  {
    question: "Which of the following is a member of the kingdom Monera?",
    options: [
      "A. Amoeba",
      "B. Escherichia coli",
      "C. Mushroom",
      "D. Fern"
    ],
    answer: "B",
    explanation: "E. coli is a bacterium, and bacteria belong to the kingdom Monera.",
    subtopic: "Kingdoms: Monera, Protoctista, Fungi, Plantae, Animalia"
  },
  {
    question: "The kingdom that includes unicellular eukaryotes such as Amoeba and Paramecium is?",
    options: [
      "A. Monera",
      "B. Protoctista",
      "C. Fungi",
      "D. Plantae"
    ],
    answer: "B",
    explanation: "Protoctista (Protista) includes unicellular eukaryotic organisms like Amoeba and Paramecium.",
    subtopic: "Kingdoms: Monera, Protoctista, Fungi, Plantae, Animalia"
  },
  {
    question: "Which of the following organisms belongs to the kingdom Protoctista?",
    options: [
      "A. Spirogyra",
      "B. Yeast",
      "C. HIV",
      "D. Housefly"
    ],
    answer: "A",
    explanation: "Spirogyra is a filamentous green alga, classified under Protoctista.",
    subtopic: "Kingdoms: Monera, Protoctista, Fungi, Plantae, Animalia"
  },
  {
    question: "Mushrooms, yeast and bread mould belong to the kingdom?",
    options: [
      "A. Plantae",
      "B. Animalia",
      "C. Fungi",
      "D. Monera"
    ],
    answer: "C",
    explanation: "Fungi include mushrooms, yeasts and moulds.",
    subtopic: "Kingdoms: Monera, Protoctista, Fungi, Plantae, Animalia"
  },
  {
    question: "A distinguishing feature of fungi is that they?",
    options: [
      "A. Photosynthesise",
      "B. Have cell walls made of chitin and are heterotrophic",
      "C. Move actively",
      "D. Are prokaryotic"
    ],
    answer: "B",
    explanation: "Fungi are heterotrophs with chitinous cell walls and do not photosynthesise.",
    subtopic: "Kingdoms: Monera, Protoctista, Fungi, Plantae, Animalia"
  },
  {
    question: "Which of the following is a saprophytic fungus?",
    options: [
      "A. Rhizopus (bread mould)",
      "B. Amoeba",
      "C. Moss",
      "D. Earthworm"
    ],
    answer: "A",
    explanation: "Rhizopus feeds on dead organic matter as a saprophyte.",
    subtopic: "Kingdoms: Monera, Protoctista, Fungi, Plantae, Animalia"
  },
  {
    question: "Green plants are classified under the kingdom Plantae because they?",
    options: [
      "A. Are motile",
      "B. Are photosynthetic autotrophs with cellulose cell walls",
      "C. Lack cell walls",
      "D. Are heterotrophic"
    ],
    answer: "B",
    explanation: "Plantae are autotrophic, photosynthetic eukaryotes with cellulose cell walls.",
    subtopic: "Kingdoms: Monera, Protoctista, Fungi, Plantae, Animalia"
  },
  {
    question: "Which of the following is NOT a member of the kingdom Plantae?",
    options: [
      "A. Mango tree",
      "B. Fern",
      "C. Moss",
      "D. Yeast"
    ],
    answer: "D",
    explanation: "Yeast is a fungus, not a plant.",
    subtopic: "Kingdoms: Monera, Protoctista, Fungi, Plantae, Animalia"
  },
  {
    question: "Animals are placed in the kingdom Animalia and are distinguished by being?",
    options: [
      "A. Autotrophic",
      "B. Heterotrophic and generally motile",
      "C. Unicellular only",
      "D. Photosynthetic"
    ],
    answer: "B",
    explanation: "Animals are multicellular heterotrophs, most of which can move at some stage.",
    subtopic: "Kingdoms: Monera, Protoctista, Fungi, Plantae, Animalia"
  },
  {
    question: "Which of the following belongs to the kingdom Animalia?",
    options: [
      "A. Spirogyra",
      "B. Earthworm",
      "C. Yeast",
      "D. Bacteria"
    ],
    answer: "B",
    explanation: "Earthworms are multicellular heterotrophic animals.",
    subtopic: "Kingdoms: Monera, Protoctista, Fungi, Plantae, Animalia"
  },
  {
    question: "The five-kingdom classification system was proposed by?",
    options: [
      "A. Linnaeus",
      "B. Whittaker",
      "C. Darwin",
      "D. Mendel"
    ],
    answer: "B",
    explanation: "Robert Whittaker proposed the five-kingdom system (Monera, Protoctista, Fungi, Plantae, Animalia).",
    subtopic: "Kingdoms: Monera, Protoctista, Fungi, Plantae, Animalia"
  },
  {
    question: "Which kingdom contains organisms that are prokaryotic?",
    options: [
      "A. Plantae",
      "B. Animalia",
      "C. Monera",
      "D. Fungi"
    ],
    answer: "C",
    explanation: "Only Monera consists of prokaryotes (bacteria and cyanobacteria).",
    subtopic: "Kingdoms: Monera, Protoctista, Fungi, Plantae, Animalia"
  },
  {
    question: "A major difference between plants and animals is that plants?",
    options: [
      "A. Lack a cell wall",
      "B. Have chloroplasts and can photosynthesise",
      "C. Are heterotrophic",
      "D. Possess centrioles in most cells"
    ],
    answer: "B",
    explanation: "Plant cells contain chloroplasts for photosynthesis, unlike animal cells.",
    subtopic: "plant vs animal"
  },
  {
    question: "Plant cells differ from animal cells in that plant cells usually have?",
    options: [
      "A. No nucleus",
      "B. A cellulose cell wall and a large central vacuole",
      "C. Many small vacuoles only",
      "D. No mitochondria"
    ],
    answer: "B",
    explanation: "Plant cells typically have a rigid cellulose wall and a large central vacuole.",
    subtopic: "plant vs animal"
  },
  {
    question: "Which of the following structures is found in animal cells but generally absent in plant cells?",
    options: [
      "A. Cell wall",
      "B. Chloroplast",
      "C. Centriole",
      "D. Vacuole"
    ],
    answer: "C",
    explanation: "Centrioles are typically present in animal cells and absent in higher plant cells.",
    subtopic: "plant vs animal"
  },
  {
    question: "Unlike animals, green plants obtain their food by?",
    options: [
      "A. Ingestion",
      "B. Photosynthesis (autotrophic nutrition)",
      "C. Holozoic feeding",
      "D. Saprophytism"
    ],
    answer: "B",
    explanation: "Green plants are autotrophs that manufacture food by photosynthesis.",
    subtopic: "plant vs animal"
  },
  {
    question: "A feature common to both plant and animal cells is the presence of?",
    options: [
      "A. Chloroplasts",
      "B. A nucleus and cytoplasm",
      "C. Cell wall",
      "D. Plastids"
    ],
    answer: "B",
    explanation: "Both are eukaryotic and possess a nucleus and cytoplasm.",
    subtopic: "plant vs animal"
  },
  {
    question: "Animals store their excess food mainly as?",
    options: [
      "A. Starch",
      "B. Glycogen and fat",
      "C. Cellulose",
      "D. Sucrose"
    ],
    answer: "B",
    explanation: "Animals store carbohydrates as glycogen and energy as fat.",
    subtopic: "plant vs animal"
  },
  {
    question: "Plants store excess food mainly as?",
    options: [
      "A. Glycogen",
      "B. Starch",
      "C. Protein",
      "D. Fat only"
    ],
    answer: "B",
    explanation: "Plants store carbohydrate reserves primarily as starch.",
    subtopic: "plant vs animal"
  },
  {
    question: "Which of the following is a characteristic of living things?",
    options: [
      "A. They are made of crystals",
      "B. They respire",
      "C. They have no cellular organisation",
      "D. They do not excrete"
    ],
    answer: "B",
    explanation: "Respiration is a universal characteristic of living organisms.",
    subtopic: "living & non-living"
  },
  {
    question: "The science of classifying living organisms is called?",
    options: [
      "A. Ecology",
      "B. Taxonomy",
      "C. Genetics",
      "D. Physiology"
    ],
    answer: "B",
    explanation: "Taxonomy is the branch of biology concerned with classification.",
    subtopic: "Kingdoms: Monera, Protoctista, Fungi, Plantae, Animalia"
  },
  {
    question: "In the hierarchy of classification, the rank immediately above species is?",
    options: [
      "A. Family",
      "B. Genus",
      "C. Order",
      "D. Class"
    ],
    answer: "B",
    explanation: "The taxonomic hierarchy is Kingdom, Division/Phylum, Class, Order, Family, Genus, Species; genus is above species.",
    subtopic: "Kingdoms: Monera, Protoctista, Fungi, Plantae, Animalia"
  },
  {
    question: "The binomial system of nomenclature was introduced by?",
    options: [
      "A. Whittaker",
      "B. Linnaeus",
      "C. Darwin",
      "D. Wallace"
    ],
    answer: "B",
    explanation: "Carolus Linnaeus developed the binomial (two-name) system of naming species.",
    subtopic: "Kingdoms: Monera, Protoctista, Fungi, Plantae, Animalia"
  },
  {
    question: "The binomial name of an organism consists of its?",
    options: [
      "A. Class and order",
      "B. Genus and species",
      "C. Family and genus",
      "D. Kingdom and phylum"
    ],
    answer: "B",
    explanation: "A binomial name is made up of the genus followed by the species epithet.",
    subtopic: "Kingdoms: Monera, Protoctista, Fungi, Plantae, Animalia"
  },
  {
    question: "Which kingdom contains organisms that are mostly multicellular, heterotrophic and lack cell walls?",
    options: [
      "A. Plantae",
      "B. Fungi",
      "C. Animalia",
      "D. Monera"
    ],
    answer: "C",
    explanation: "Animals are multicellular heterotrophs whose cells lack walls.",
    subtopic: "Kingdoms: Monera, Protoctista, Fungi, Plantae, Animalia"
  },
  {
    question: "Cyanobacteria (blue-green algae) are photosynthetic but are classified under Monera because they?",
    options: [
      "A. Are multicellular",
      "B. Are prokaryotic",
      "C. Have a true nucleus",
      "D. Are fungi"
    ],
    answer: "B",
    explanation: "Despite photosynthesising, cyanobacteria are prokaryotes and belong to Monera.",
    subtopic: "Kingdoms: Monera, Protoctista, Fungi, Plantae, Animalia"
  },
  {
    question: "Which of the following is unicellular and eukaryotic?",
    options: [
      "A. Bacterium",
      "B. Yeast",
      "C. Virus",
      "D. Blue-green alga"
    ],
    answer: "B",
    explanation: "Yeast is a unicellular eukaryote (a fungus); bacteria and cyanobacteria are prokaryotic and viruses are non-cellular.",
    subtopic: "Kingdoms: Monera, Protoctista, Fungi, Plantae, Animalia"
  },
  {
    question: "The kingdom Protoctista includes organisms that are?",
    options: [
      "A. All multicellular prokaryotes",
      "B. Mostly unicellular eukaryotes, some colonial or simple multicellular",
      "C. All photosynthetic plants",
      "D. All animals"
    ],
    answer: "B",
    explanation: "Protoctista is a diverse group of mostly unicellular eukaryotes.",
    subtopic: "Kingdoms: Monera, Protoctista, Fungi, Plantae, Animalia"
  },
  {
    question: "Which of the following pairs are both autotrophs?",
    options: [
      "A. Mushroom and dog",
      "B. Mango tree and cyanobacterium",
      "C. Amoeba and yeast",
      "D. Earthworm and fern"
    ],
    answer: "B",
    explanation: "Mango (plant) and cyanobacteria photosynthesise; the others are heterotrophs.",
    subtopic: "plant vs animal"
  },
  {
    question: "The presence of a rigid cell wall in fungi is made of?",
    options: [
      "A. Cellulose",
      "B. Chitin",
      "C. Peptidoglycan",
      "D. Protein"
    ],
    answer: "B",
    explanation: "Fungal cell walls are composed largely of chitin (not cellulose as in plants).",
    subtopic: "Kingdoms: Monera, Protoctista, Fungi, Plantae, Animalia"
  },
  {
    question: "Which of these is a difference between plant and animal cells regarding food storage?",
    options: [
      "A. Both store glycogen",
      "B. Plants store starch, animals store glycogen",
      "C. Both store starch",
      "D. Neither stores food"
    ],
    answer: "B",
    explanation: "Plants store starch; animals store glycogen.",
    subtopic: "plant vs animal"
  },
  {
    question: "A characteristic that distinguishes animals from plants is that animals?",
    options: [
      "A. Have chloroplasts",
      "B. Are generally capable of movement at some stage",
      "C. Have cell walls",
      "D. Are autotrophic"
    ],
    answer: "B",
    explanation: "Most animals show motility, whereas plants are generally sessile.",
    subtopic: "plant vs animal"
  },
  {
    question: "The term 'heterotrophic' means an organism?",
    options: [
      "A. Makes its own food",
      "B. Obtains food from other organisms",
      "C. Uses sunlight",
      "D. Fixes nitrogen"
    ],
    answer: "B",
    explanation: "Heterotrophs cannot make their own food and must consume organic matter.",
    subtopic: "plant vs animal"
  },
  {
    question: "Which kingdom contains organisms that are saprophytic, parasitic or mutualistic but never photosynthetic?",
    options: [
      "A. Plantae",
      "B. Fungi",
      "C. Monera",
      "D. Protoctista"
    ],
    answer: "B",
    explanation: "Fungi are non-photosynthetic heterotrophs (saprophytes, parasites or mutualists).",
    subtopic: "Kingdoms: Monera, Protoctista, Fungi, Plantae, Animalia"
  },
  {
    question: "All living things exhibit which of the following?",
    options: [
      "A. Locomotion",
      "B. Growth and reproduction",
      "C. Photosynthesis",
      "D. A rigid cell wall"
    ],
    answer: "B",
    explanation: "Growth and reproduction are universal life characteristics; not all organisms move or photosynthesise.",
    subtopic: "living & non-living"
  },
  {
    question: "Among the following, the one that is NOT a kingdom in Whittaker's system is?",
    options: [
      "A. Monera",
      "B. Protoctista",
      "C. Virus",
      "D. Fungi"
    ],
    answer: "C",
    explanation: "Virus is not a kingdom in the five-kingdom system; it is non-cellular.",
    subtopic: "Kingdoms: Monera, Protoctista, Fungi, Plantae, Animalia"
  },
  {
    question: "Which of the following groups contains prokaryotic cells only?",
    options: [
      "A. Bacteria and blue-green algae",
      "B. Amoeba and Paramecium",
      "C. Mushroom and yeast",
      "D. Moss and fern"
    ],
    answer: "A",
    explanation: "Bacteria and cyanobacteria (blue-green algae) are the only prokaryotes listed.",
    subtopic: "Kingdoms: Monera, Protoctista, Fungi, Plantae, Animalia"
  },
  {
    question: "The cell wall of bacteria is made of?",
    options: [
      "A. Cellulose",
      "B. Chitin",
      "C. Peptidoglycan",
      "D. Protein only"
    ],
    answer: "C",
    explanation: "Bacterial cell walls contain peptidoglycan (murein).",
    subtopic: "Kingdoms: Monera, Protoctista, Fungi, Plantae, Animalia"
  },
  {
    question: "Which statement best describes the kingdom Plantae?",
    options: [
      "A. Prokaryotic, motile, heterotrophic",
      "B. Eukaryotic, mostly photosynthetic, cell walls of cellulose",
      "C. Unicellular eukaryotes only",
      "D. Saprophytic fungi"
    ],
    answer: "B",
    explanation: "Plantae are eukaryotic, mostly autotrophic with cellulose walls.",
    subtopic: "Kingdoms: Monera, Protoctista, Fungi, Plantae, Animalia"
  },
  {
    question: "The group of organisms that includes the malarial parasite Plasmodium is?",
    options: [
      "A. Monera",
      "B. Protoctista",
      "C. Fungi",
      "D. Plantae"
    ],
    answer: "B",
    explanation: "Plasmodium is a protozoan, classified under Protoctista.",
    subtopic: "Kingdoms: Monera, Protoctista, Fungi, Plantae, Animalia"
  },
  {
    question: "A feature that is common to fungi and plants but absent in animals is?",
    options: [
      "A. Presence of a cell wall",
      "B. Holozoic nutrition",
      "C. Motility",
      "D. Absence of a nucleus"
    ],
    answer: "A",
    explanation: "Both fungi and plants have cell walls; animals do not.",
    subtopic: "plant vs animal"
  },
  {
    question: "Which of the following is the correct order of the taxonomic hierarchy from largest to smallest?",
    options: [
      "A. Species, Genus, Family, Order, Class, Phylum, Kingdom",
      "B. Kingdom, Phylum, Class, Order, Family, Genus, Species",
      "C. Kingdom, Class, Phylum, Order, Genus, Family, Species",
      "D. Phylum, Kingdom, Class, Family, Order, Genus, Species"
    ],
    answer: "B",
    explanation: "The standard hierarchy is Kingdom > Phylum > Class > Order > Family > Genus > Species.",
    subtopic: "Kingdoms: Monera, Protoctista, Fungi, Plantae, Animalia"
  },
  {
    question: "Organisms that live on dead organic matter and secrete enzymes to digest it externally are called?",
    options: [
      "A. Parasites",
      "B. Saprophytes",
      "C. Autotrophs",
      "D. Symbionts"
    ],
    answer: "B",
    explanation: "Saprophytes feed on dead matter by external digestion.",
    subtopic: "Kingdoms: Monera, Protoctista, Fungi, Plantae, Animalia"
  }
];

module.exports = questions;
