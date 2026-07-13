// biology — Cell theory
const questions = [
  {
    question: "According to the cell theory, what is the basic structural and functional unit of all living organisms?",
    options: [
      "A. Tissue",
      "B. Cell",
      "C. Organ",
      "D. Organ system"
    ],
    answer: "B",
    explanation: "The cell is the smallest unit that can carry out all life processes.",
    subtopic: "Cell theory"
  },
  {
    question: "Which of the following scientists concluded that all plants are composed of cells?",
    options: [
      "A. Theodor Schwann",
      "B. Rudolf Virchow",
      "C. Matthias Schleiden",
      "D. Robert Hooke"
    ],
    answer: "C",
    explanation: "Schleiden (1838) stated that all plant tissues are composed of cells.",
    subtopic: "Cell theory"
  },
  {
    question: "Who stated that all animals are made up of cells, helping complete the cell theory?",
    options: [
      "A. Matthias Schleiden",
      "B. Theodor Schwann",
      "C. Anton van Leeuwenhoek",
      "D. Louis Pasteur"
    ],
    answer: "B",
    explanation: "Schwann (1839) extended the cell theory to animals.",
    subtopic: "Cell theory"
  },
  {
    question: "The statement 'all cells arise from pre-existing cells' is credited to which scientist?",
    options: [
      "A. Rudolf Virchow",
      "B. Robert Hooke",
      "C. Matthias Schleiden",
      "D. Anton van Leeuwenhoek"
    ],
    answer: "A",
    explanation: "Virchow (1855) proposed omnis cellula e cellula — cells come from pre-existing cells.",
    subtopic: "Cell theory"
  },
  {
    question: "Who first observed and named 'cells' while examining a thin slice of cork in 1665?",
    options: [
      "A. Anton van Leeuwenhoek",
      "B. Robert Hooke",
      "C. Theodor Schwann",
      "D. Rudolf Virchow"
    ],
    answer: "B",
    explanation: "Hooke saw box-like compartments in cork and called them cells.",
    subtopic: "Cell theory"
  },
  {
    question: "Which scientist is credited with being the first to observe living single-celled organisms ('animalcules') using a simple microscope?",
    options: [
      "A. Robert Hooke",
      "B. Matthias Schleiden",
      "C. Anton van Leeuwenhoek",
      "D. Theodor Schwann"
    ],
    answer: "C",
    explanation: "Leeuwenhoek observed motile living microorganisms in the 1670s.",
    subtopic: "Cell theory"
  },
  {
    question: "Which of the following is NOT one of the three main tenets of the cell theory?",
    options: [
      "A. All living things are composed of cells",
      "B. The cell is the basic unit of life",
      "C. All cells arise from pre-existing cells",
      "D. All cells contain a true nucleus"
    ],
    answer: "D",
    explanation: "Prokaryotic cells lack a membrane-bound nucleus, yet they are still cells.",
    subtopic: "Cell theory"
  },
  {
    question: "An organism made up of a single cell that performs all life functions is described as:",
    options: [
      "A. Multicellular",
      "B. Unicellular",
      "C. Eukaryotic",
      "D. Colonial"
    ],
    answer: "B",
    explanation: "Unicellular organisms like Amoeba consist of just one cell.",
    subtopic: "Cell theory"
  },
  {
    question: "Which of the following is an example of a unicellular organism?",
    options: [
      "A. Human",
      "B. Amoeba",
      "C. Mango tree",
      "D. Earthworm"
    ],
    answer: "B",
    explanation: "Amoeba is a single-celled (unicellular) organism.",
    subtopic: "Cell theory"
  },
  {
    question: "Organisms such as humans and flowering plants, composed of many cells, are called:",
    options: [
      "A. Unicellular",
      "B. Acellular",
      "C. Multicellular",
      "D. Prokaryotic"
    ],
    answer: "C",
    explanation: "Multicellular organisms are built from many specialised cells.",
    subtopic: "Cell theory"
  },
  {
    question: "Which of the following is a characteristic of prokaryotic cells?",
    options: [
      "A. They have a membrane-bound nucleus",
      "B. They lack a membrane-bound nucleus",
      "C. They contain mitochondria",
      "D. They possess chloroplasts"
    ],
    answer: "B",
    explanation: "Prokaryotes (e.g. bacteria) have no nucleus; DNA is free in the cytoplasm.",
    subtopic: "Cell theory"
  },
  {
    question: "Which of the following is a eukaryotic organism?",
    options: [
      "A. Bacterium",
      "B. Yeast",
      "C. Blue-green alga",
      "D. Virus"
    ],
    answer: "B",
    explanation: "Yeast is a fungus and its cells have a true membrane-bound nucleus.",
    subtopic: "Cell theory"
  },
  {
    question: "Which structure is found in plant cells but NOT in animal cells?",
    options: [
      "A. Cell membrane",
      "B. Nucleus",
      "C. Cell wall",
      "D. Cytoplasm"
    ],
    answer: "C",
    explanation: "Plant cells have a rigid cellulose cell wall; animal cells do not.",
    subtopic: "Cell theory"
  },
  {
    question: "Which of the following organelles is present in plant cells for photosynthesis but absent in animal cells?",
    options: [
      "A. Mitochondrion",
      "B. Ribosome",
      "C. Chloroplast",
      "D. Nucleus"
    ],
    answer: "C",
    explanation: "Chloroplasts contain chlorophyll and carry out photosynthesis in plants.",
    subtopic: "Cell theory"
  },
  {
    question: "A large permanent vacuole filled with cell sap is most characteristic of:",
    options: [
      "A. Animal cells",
      "B. Bacterial cells",
      "C. Mature plant cells",
      "D. Viruses"
    ],
    answer: "C",
    explanation: "Mature plant cells have a large central vacuole that maintains turgidity.",
    subtopic: "Cell theory"
  },
  {
    question: "Which of the following is present in animal cells but generally absent in higher plant cells?",
    options: [
      "A. Cell wall",
      "B. Centrioles",
      "C. Vacuole",
      "D. Chloroplast"
    ],
    answer: "B",
    explanation: "Centrioles help organise spindle fibres in animal cell division.",
    subtopic: "Cell theory"
  },
  {
    question: "The part of the cell that controls its activities and contains genetic material is the:",
    options: [
      "A. Cytoplasm",
      "B. Nucleus",
      "C. Cell wall",
      "D. Vacuole"
    ],
    answer: "B",
    explanation: "The nucleus houses DNA and directs cell activities.",
    subtopic: "Cell theory"
  },
  {
    question: "The jelly-like substance within the cell membrane where organelles are found is the:",
    options: [
      "A. Nucleus",
      "B. Cytoplasm",
      "C. Cell wall",
      "D. Vacuole"
    ],
    answer: "B",
    explanation: "The cytoplasm is the site of many metabolic reactions.",
    subtopic: "Cell theory"
  },
  {
    question: "The cell membrane is described as selectively permeable because it:",
    options: [
      "A. Allows all substances to pass freely",
      "B. Allows only certain substances to pass",
      "C. Prevents all movement of substances",
      "D. Is made only of protein"
    ],
    answer: "B",
    explanation: "The membrane controls which materials enter and leave the cell.",
    subtopic: "Cell theory"
  },
  {
    question: "Which organelle is the site of aerobic respiration and is often called the 'powerhouse' of the cell?",
    options: [
      "A. Ribosome",
      "B. Chloroplast",
      "C. Mitochondrion",
      "D. Golgi apparatus"
    ],
    answer: "C",
    explanation: "Mitochondria release energy from food during respiration.",
    subtopic: "Cell theory"
  },
  {
    question: "Protein synthesis in the cell occurs at the:",
    options: [
      "A. Mitochondrion",
      "B. Ribosome",
      "C. Lysosome",
      "D. Vacuole"
    ],
    answer: "B",
    explanation: "Ribosomes are the sites where proteins are assembled.",
    subtopic: "Cell theory"
  },
  {
    question: "The organelle that packages and distributes materials within the cell is the:",
    options: [
      "A. Golgi apparatus",
      "B. Nucleolus",
      "C. Chloroplast",
      "D. Cell wall"
    ],
    answer: "A",
    explanation: "The Golgi body modifies, sorts and packages proteins and lipids.",
    subtopic: "Cell theory"
  },
  {
    question: "Which organelle contains digestive enzymes and breaks down worn-out cell parts?",
    options: [
      "A. Lysosome",
      "B. Ribosome",
      "C. Vacuole",
      "D. Mitochondrion"
    ],
    answer: "A",
    explanation: "Lysosomes digest material using hydrolytic enzymes.",
    subtopic: "Cell theory"
  },
  {
    question: "The green pigment that traps light energy for photosynthesis is found in the:",
    options: [
      "A. Mitochondrion",
      "B. Chloroplast",
      "C. Nucleus",
      "D. Ribosome"
    ],
    answer: "B",
    explanation: "Chlorophyll in chloroplasts absorbs light for photosynthesis.",
    subtopic: "Cell theory"
  },
  {
    question: "The cell wall of plant cells is mainly composed of:",
    options: [
      "A. Protein",
      "B. Cellulose",
      "C. Lipid",
      "D. Starch"
    ],
    answer: "B",
    explanation: "Plant cell walls are made largely of the polysaccharide cellulose.",
    subtopic: "Cell theory"
  },
  {
    question: "Genetic material in the form of chromosomes is located in the nucleus. Chromosomes are made of:",
    options: [
      "A. Protein only",
      "B. DNA and protein",
      "C. Lipid only",
      "D. RNA only"
    ],
    answer: "B",
    explanation: "Chromosomes consist of DNA wound around histone proteins.",
    subtopic: "Cell theory"
  },
  {
    question: "Which of the following structures is responsible for the synthesis of ribosomal RNA?",
    options: [
      "A. Nucleolus",
      "B. Mitochondrion",
      "C. Golgi apparatus",
      "D. Lysosome"
    ],
    answer: "A",
    explanation: "The nucleolus within the nucleus assembles ribosome subunits.",
    subtopic: "Cell theory"
  },
  {
    question: "Bacteria are classified as prokaryotic because their genetic material is:",
    options: [
      "A. Enclosed in a nucleus",
      "B. Found free in the cytoplasm",
      "C. Stored in mitochondria",
      "D. Attached to ribosomes"
    ],
    answer: "B",
    explanation: "Bacterial DNA is not membrane-bound; it lies in the cytoplasm.",
    subtopic: "Cell theory"
  },
  {
    question: "Compared with eukaryotic cells, prokaryotic cells are generally:",
    options: [
      "A. Larger and more complex",
      "B. Smaller and simpler",
      "C. Identical in size",
      "D. Always multicellular"
    ],
    answer: "B",
    explanation: "Prokaryotes are typically smaller and lack membrane-bound organelles.",
    subtopic: "Cell theory"
  },
  {
    question: "Which of the following is NOT considered a living cell?",
    options: [
      "A. Bacterium",
      "B. Fungal cell",
      "C. Virus",
      "D. Plant cell"
    ],
    answer: "C",
    explanation: "Viruses are acellular and cannot carry out metabolism on their own.",
    subtopic: "Cell theory"
  },
  {
    question: "The movement of water molecules from a region of high water concentration to a region of low water concentration through a selectively permeable membrane is called:",
    options: [
      "A. Diffusion",
      "B. Osmosis",
      "C. Active transport",
      "D. Transpiration"
    ],
    answer: "B",
    explanation: "Osmosis is the diffusion of water across a semipermeable membrane.",
    subtopic: "Cell theory"
  },
  {
    question: "The net movement of particles from a region of high concentration to a region of low concentration is called:",
    options: [
      "A. Osmosis",
      "B. Diffusion",
      "C. Active transport",
      "D. Endocytosis"
    ],
    answer: "B",
    explanation: "Diffusion is passive movement down a concentration gradient.",
    subtopic: "Cell theory"
  },
  {
    question: "Movement of substances against a concentration gradient, requiring energy, is called:",
    options: [
      "A. Diffusion",
      "B. Osmosis",
      "C. Active transport",
      "D. Facilitated diffusion"
    ],
    answer: "C",
    explanation: "Active transport uses ATP to move materials against a gradient.",
    subtopic: "Cell theory"
  },
  {
    question: "When a plant cell is placed in a dilute (hypotonic) solution, it becomes:",
    options: [
      "A. Plasmolysed",
      "B. Flaccid",
      "C. Turgid",
      "D. Lysed"
    ],
    answer: "C",
    explanation: "Water enters by osmosis, the vacuole swells and the cell becomes turgid.",
    subtopic: "Cell theory"
  },
  {
    question: "The shrinkage of a plant cell's cytoplasm away from the cell wall in a concentrated solution is called:",
    options: [
      "A. Turgidity",
      "B. Plasmolysis",
      "C. Lysis",
      "D. Diffusion"
    ],
    answer: "B",
    explanation: "Plasmolysis occurs when water leaves the cell in a hypertonic solution.",
    subtopic: "Cell theory"
  },
  {
    question: "Animal cells placed in pure water are likely to:",
    options: [
      "A. Become turgid",
      "B. Burst (lyse)",
      "C. Undergo plasmolysis",
      "D. Form a cell wall"
    ],
    answer: "B",
    explanation: "Without a wall, excess water makes animal cells swell and burst.",
    subtopic: "Cell theory"
  },
  {
    question: "Which structure prevents plant cells from bursting when water enters by osmosis?",
    options: [
      "A. Cell membrane",
      "B. Cell wall",
      "C. Vacuole",
      "D. Nucleus"
    ],
    answer: "B",
    explanation: "The rigid cell wall resists expansion, keeping the cell from bursting.",
    subtopic: "Cell theory"
  },
  {
    question: "The instrument that first revealed the detailed internal organelles of cells is the:",
    options: [
      "A. Light microscope",
      "B. Electron microscope",
      "C. Hand lens",
      "D. Telescope"
    ],
    answer: "B",
    explanation: "Electron microscopes resolve structures such as ribosomes and ER.",
    subtopic: "Cell theory"
  },
  {
    question: "Robert Hooke's term 'cell' was inspired by the resemblance of cork compartments to:",
    options: [
      "A. Small rooms in a monastery",
      "B. Animal cages",
      "C. Plant seeds",
      "D. Blood corpuscles"
    ],
    answer: "A",
    explanation: "Hooke named them after the small rooms ('cells') occupied by monks.",
    subtopic: "Cell theory"
  },
  {
    question: "Which of the following pairs are both membrane-bound organelles found in eukaryotic cells?",
    options: [
      "A. Ribosome and cell wall",
      "B. Mitochondrion and nucleus",
      "C. Plasmid and flagellum",
      "D. Chromosome and cytoplasm"
    ],
    answer: "B",
    explanation: "Both mitochondria and the nucleus are enclosed by membranes in eukaryotes.",
    subtopic: "Cell theory"
  },
  {
    question: "The endoplasmic reticulum functions mainly in the cell for:",
    options: [
      "A. Energy production",
      "B. Transport of materials",
      "C. Photosynthesis",
      "D. Digestive breakdown"
    ],
    answer: "B",
    explanation: "The ER is a network of membranes that transports proteins and lipids.",
    subtopic: "Cell theory"
  },
  {
    question: "Which of the following is true of viruses with respect to the cell theory?",
    options: [
      "A. They are made of many cells",
      "B. They are cellular organisms",
      "C. They are acellular and non-living outside a host",
      "D. They have a nucleus"
    ],
    answer: "C",
    explanation: "Viruses lack cellular structure and only function inside a host cell.",
    subtopic: "Cell theory"
  },
  {
    question: "The cell theory was strengthened by the disproof of spontaneous generation, work associated with:",
    options: [
      "A. Louis Pasteur",
      "B. Robert Hooke",
      "C. Matthias Schleiden",
      "D. Anton van Leeuwenhoek"
    ],
    answer: "A",
    explanation: "Pasteur showed life (cells) come from existing life, not from non-living matter.",
    subtopic: "Cell theory"
  },
  {
    question: "Which statement best describes a multicellular organism?",
    options: [
      "A. It consists of one cell performing all functions",
      "B. Its cells are all identical and unspecialised",
      "C. It is made of many cells, often specialised",
      "D. It lacks a cell membrane"
    ],
    answer: "C",
    explanation: "Multicellular organisms have many cells that are often specialised.",
    subtopic: "Cell theory"
  },
  {
    question: "In a eukaryotic cell, the genetic material is enclosed within a:",
    options: [
      "A. Cell wall",
      "B. Nuclear membrane",
      "C. Cell membrane",
      "D. Ribosome"
    ],
    answer: "B",
    explanation: "Eukaryotic DNA is enclosed by the double nuclear membrane.",
    subtopic: "Cell theory"
  },
  {
    question: "Which of the following lacks a true nucleus and is therefore prokaryotic?",
    options: [
      "A. Yeast",
      "B. Spirogyra",
      "C. Bacterium",
      "D. Mushroom"
    ],
    answer: "C",
    explanation: "Bacteria are prokaryotes with no membrane-bound nucleus.",
    subtopic: "Cell theory"
  },
  {
    question: "The fluid mosaic model describes the structure of the:",
    options: [
      "A. Cell wall",
      "B. Cell membrane",
      "C. Nuclear envelope",
      "D. Vacuole membrane only"
    ],
    answer: "B",
    explanation: "The cell membrane is a phospholipid bilayer with embedded proteins.",
    subtopic: "Cell theory"
  },
  {
    question: "Mitochondria and chloroplasts are similar in that both:",
    options: [
      "A. Are found only in animal cells",
      "B. Have their own DNA and double membranes",
      "C. Are sites of protein synthesis",
      "D. Contain cellulose"
    ],
    answer: "B",
    explanation: "Both organelles have double membranes and their own circular DNA.",
    subtopic: "Cell theory"
  },
  {
    question: "Which of the following is the correct order of biological organisation from simplest to most complex?",
    options: [
      "A. Tissue → Cell → Organ → Organism",
      "B. Cell → Tissue → Organ → Organ system",
      "C. Organ → Tissue → Cell → Organism",
      "D. Cell → Organ → Tissue → Organism"
    ],
    answer: "B",
    explanation: "Cells form tissues, tissues form organs, organs form systems.",
    subtopic: "Cell theory"
  },
  {
    question: "The light microscope has limited resolution mainly because:",
    options: [
      "A. It uses electrons",
      "B. Visible light has a relatively long wavelength",
      "C. It cannot magnify",
      "D. It only shows colour"
    ],
    answer: "B",
    explanation: "The wavelength of light limits how closely two points can be distinguished.",
    subtopic: "Cell theory"
  }
];

module.exports = questions;
