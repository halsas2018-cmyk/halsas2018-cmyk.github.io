// biology — Cell Structure & Functions
const questions = [
  {
    question: "The organelle that controls all cell activities and contains the genetic material is the?",
    options: [
      "A. Nucleus",
      "B. Mitochondrion",
      "C. Ribosome",
      "D. Vacuole"
    ],
    answer: "A",
    explanation: "The nucleus houses DNA and directs cellular activities.",
    subtopic: "cell components & their functions"
  },
  {
    question: "Which structure is known as the 'powerhouse' of the cell because it releases energy from food?",
    options: [
      "A. Ribosome",
      "B. Mitochondrion",
      "C. Lysosome",
      "D. Golgi body"
    ],
    answer: "B",
    explanation: "Mitochondria carry out aerobic respiration, producing ATP.",
    subtopic: "cell components & their functions"
  },
  {
    question: "The site of protein synthesis in the cell is the?",
    options: [
      "A. Nucleus",
      "B. Ribosome",
      "C. Mitochondrion",
      "D. Vacuole"
    ],
    answer: "B",
    explanation: "Ribosomes translate mRNA into proteins.",
    subtopic: "cell components & their functions"
  },
  {
    question: "Which organelle packages and modifies proteins for secretion?",
    options: [
      "A. Rough endoplasmic reticulum",
      "B. Golgi apparatus",
      "C. Lysosome",
      "D. Nucleolus"
    ],
    answer: "B",
    explanation: "The Golgi apparatus modifies, sorts and packages proteins into vesicles.",
    subtopic: "cell components & their functions"
  },
  {
    question: "The fluid filled space inside a cell where organelles are suspended is the?",
    options: [
      "A. Nucleoplasm",
      "B. Cytoplasm",
      "C. Vacuole",
      "D. Lumen"
    ],
    answer: "B",
    explanation: "Cytoplasm is the jelly-like medium containing organelles.",
    subtopic: "cell components & their functions"
  },
  {
    question: "Chloroplasts are found in plant cells and are the sites of?",
    options: [
      "A. Respiration",
      "B. Photosynthesis",
      "C. Protein synthesis",
      "D. Digestion"
    ],
    answer: "B",
    explanation: "Chloroplasts contain chlorophyll and carry out photosynthesis.",
    subtopic: "cell components & their functions"
  },
  {
    question: "The green pigment in chloroplasts that traps light energy is?",
    options: [
      "A. Haemoglobin",
      "B. Chlorophyll",
      "C. Melanin",
      "D. Carotene only"
    ],
    answer: "B",
    explanation: "Chlorophyll absorbs light for photosynthesis.",
    subtopic: "cell components & their functions"
  },
  {
    question: "The rigid outer layer of a plant cell is the?",
    options: [
      "A. Cell membrane",
      "B. Cell wall",
      "C. Nuclear envelope",
      "D. Capsule"
    ],
    answer: "B",
    explanation: "Plant cells have a cellulose cell wall outside the membrane.",
    subtopic: "cell components & their functions"
  },
  {
    question: "The selectively permeable boundary that controls entry and exit of substances is the?",
    options: [
      "A. Cell wall",
      "B. Cell membrane",
      "C. Nuclear pore",
      "D. Tonoplast"
    ],
    answer: "B",
    explanation: "The cell (plasma) membrane regulates transport in and out of the cell.",
    subtopic: "cell components & their functions"
  },
  {
    question: "Lysosomes contain enzymes for?",
    options: [
      "A. Photosynthesis",
      "B. Breaking down worn-out organelles and food",
      "C. Protein synthesis",
      "D. Energy production"
    ],
    answer: "B",
    explanation: "Lysosomes are digestive vacuoles containing hydrolytic enzymes.",
    subtopic: "cell components & their functions"
  },
  {
    question: "The endoplasmic reticulum provides a surface for?",
    options: [
      "A. Photosynthesis",
      "B. Synthesis of proteins and lipids and transport",
      "C. Respiration",
      "D. Storage of chlorophyll"
    ],
    answer: "B",
    explanation: "ER is a network for synthesis and transport of materials in the cell.",
    subtopic: "cell components & their functions"
  },
  {
    question: "Rough endoplasmic reticulum appears rough because it is studded with?",
    options: [
      "A. Mitochondria",
      "B. Ribosomes",
      "C. Lysosomes",
      "D. Chloroplasts"
    ],
    answer: "B",
    explanation: "Ribosomes on the RER give it a rough appearance and enable protein synthesis.",
    subtopic: "cell components & their functions"
  },
  {
    question: "The large central vacuole in plant cells is mainly for?",
    options: [
      "A. Protein synthesis",
      "B. Storage of water, salts and sugars and maintaining turgor",
      "C. Respiration",
      "D. Photosynthesis"
    ],
    answer: "B",
    explanation: "The central vacuole stores substances and maintains cell turgidity.",
    subtopic: "cell components & their functions"
  },
  {
    question: "The nucleus is bounded by a double membrane called the?",
    options: [
      "A. Tonoplast",
      "B. Nuclear envelope",
      "C. Cell wall",
      "D. Cristae"
    ],
    answer: "B",
    explanation: "The nuclear envelope encloses the nucleus and has pores.",
    subtopic: "cell components & their functions"
  },
  {
    question: "The region inside the nucleus where ribosomes are assembled is the?",
    options: [
      "A. Nucleolus",
      "B. Chromatin",
      "C. Cytoplasm",
      "D. Golgi body"
    ],
    answer: "A",
    explanation: "The nucleolus synthesises ribosomal RNA and assembles ribosomes.",
    subtopic: "cell components & their functions"
  },
  {
    question: "Mitochondria have internal folds called cristae which increase surface area for?",
    options: [
      "A. Photosynthesis",
      "B. Respiration enzymes",
      "C. Protein synthesis",
      "D. DNA storage"
    ],
    answer: "B",
    explanation: "Cristae host the enzymes of aerobic respiration.",
    subtopic: "cell components & their functions"
  },
  {
    question: "Which of the following is found in plant cells but usually absent in animal cells?",
    options: [
      "A. Mitochondria",
      "B. Chloroplasts and a large central vacuole",
      "C. Ribosomes",
      "D. Nucleus"
    ],
    answer: "B",
    explanation: "Chloroplasts and a large central vacuole are typical of plant cells.",
    subtopic: "cell components & their functions"
  },
  {
    question: "The chromosome material in a non-dividing cell is called?",
    options: [
      "A. Chromatin",
      "B. Centriole",
      "C. Cristae",
      "D. Thylakoid"
    ],
    answer: "A",
    explanation: "DNA exists as loosely packed chromatin in interphase.",
    subtopic: "cell components & their functions"
  },
  {
    question: "Centrioles are involved in?",
    options: [
      "A. Photosynthesis",
      "B. Cell division (forming spindle fibres) in animal cells",
      "C. Protein synthesis",
      "D. Digestion"
    ],
    answer: "B",
    explanation: "Centrioles help organise the spindle during cell division.",
    subtopic: "cell components & their functions"
  },
  {
    question: "The internal membrane system of the chloroplast where light reactions occur is the?",
    options: [
      "A. Stroma",
      "B. Thylakoid",
      "C. Cristae",
      "D. Matrix"
    ],
    answer: "B",
    explanation: "Thylakoids (stacked as grana) bear the pigment-protein complexes for light reactions.",
    subtopic: "cell components & their functions"
  },
  {
    question: "The jelly-like fluid inside the chloroplast is the?",
    options: [
      "A. Stroma",
      "B. Cytoplasm",
      "C. Matrix",
      "D. Lumen"
    ],
    answer: "A",
    explanation: "The stroma surrounds the thylakoids and is where the Calvin cycle occurs.",
    subtopic: "cell components & their functions"
  },
  {
    question: "Which organelle is absent in prokaryotic cells?",
    options: [
      "A. Ribosome",
      "B. Membrane-bound nucleus",
      "C. Cell membrane",
      "D. Cytoplasm"
    ],
    answer: "B",
    explanation: "Prokaryotes lack a true membrane-bound nucleus and other membrane organelles.",
    subtopic: "cell components & their functions"
  },
  {
    question: "The cell membrane is described as selectively permeable because it?",
    options: [
      "A. Lets everything pass freely",
      "B. Controls which substances enter and leave",
      "C. Is completely impermeable",
      "D. Only allows water"
    ],
    answer: "B",
    explanation: "Selective permeability lets the cell regulate its internal environment.",
    subtopic: "cell components & their functions"
  },
  {
    question: "The function of the cell wall is to?",
    options: [
      "A. Control transport of gases",
      "B. Give shape, support and protection",
      "C. Synthesise proteins",
      "D. Store genetic material"
    ],
    answer: "B",
    explanation: "The rigid wall supports and protects plant cells.",
    subtopic: "cell components & their functions"
  },
  {
    question: "Smooth endoplasmic reticulum is mainly involved in?",
    options: [
      "A. Protein synthesis",
      "B. Lipid synthesis and detoxification",
      "C. Photosynthesis",
      "D. Respiration"
    ],
    answer: "B",
    explanation: "SER synthesises lipids and steroids and detoxifies substances.",
    subtopic: "cell components & their functions"
  },
  {
    question: "Which structure stores genetic information in the form of DNA?",
    options: [
      "A. Ribosome",
      "B. Nucleus",
      "C. Lysosome",
      "D. Vacuole"
    ],
    answer: "B",
    explanation: "The nucleus contains the cell's DNA (chromosomes).",
    subtopic: "cell components & their functions"
  },
  {
    question: "The microscopic projections that increase surface area on some cells (e.g. in the gut) are?",
    options: [
      "A. Cilia",
      "B. Microvilli",
      "C. Flagella",
      "D. Centrioles"
    ],
    answer: "B",
    explanation: "Microvilli increase absorptive surface area of epithelial cells.",
    subtopic: "cell components & their functions"
  },
  {
    question: "Flagella and cilia are used by cells mainly for?",
    options: [
      "A. Photosynthesis",
      "B. Movement",
      "C. Digestion",
      "D. Storage"
    ],
    answer: "B",
    explanation: "These organelles enable cell movement or movement of substances past the cell.",
    subtopic: "cell components & their functions"
  },
  {
    question: "The matrix of the mitochondrion is the site of?",
    options: [
      "A. Light reactions",
      "B. The Krebs cycle (link and Krebs reactions)",
      "C. Protein synthesis",
      "D. Photosynthesis"
    ],
    answer: "B",
    explanation: "The matrix hosts the Krebs cycle enzymes of aerobic respiration.",
    subtopic: "cell components & their functions"
  },
  {
    question: "Plastids that store pigments other than green (e.g. colour in fruits) are called?",
    options: [
      "A. Chloroplasts",
      "B. Chromoplasts",
      "C. Leucoplasts",
      "D. Vacuoles"
    ],
    answer: "B",
    explanation: "Chromoplasts contain carotenoid pigments giving yellow/red colours.",
    subtopic: "cell components & their functions"
  },
  {
    question: "Colourless plastids that store starch, oils or proteins are?",
    options: [
      "A. Chromoplasts",
      "B. Leucoplasts",
      "C. Chloroplasts",
      "D. Lysosomes"
    ],
    answer: "B",
    explanation: "Leucoplasts are non-pigmented plastids for storage.",
    subtopic: "cell components & their functions"
  },
  {
    question: "The tonoplast is the membrane surrounding the?",
    options: [
      "A. Nucleus",
      "B. Vacuole",
      "C. Mitochondrion",
      "D. Chloroplast"
    ],
    answer: "B",
    explanation: "The tonoplast is the vacuolar membrane.",
    subtopic: "cell components & their functions"
  },
  {
    question: "Which organelle is responsible for intracellular digestion using hydrolytic enzymes?",
    options: [
      "A. Peroxisome",
      "B. Lysosome",
      "C. Ribosome",
      "D. Golgi body"
    ],
    answer: "B",
    explanation: "Lysosomes digest macromolecules and damaged organelles.",
    subtopic: "cell components & their functions"
  },
  {
    question: "Ribosomes are composed of?",
    options: [
      "A. DNA and protein",
      "B. rRNA and protein",
      "C. Lipid and carbohydrate",
      "D. Cellulose"
    ],
    answer: "B",
    explanation: "Ribosomes are made of ribosomal RNA and proteins.",
    subtopic: "cell components & their functions"
  },
  {
    question: "In plant cells, the organelle that maintains turgor pressure is the?",
    options: [
      "A. Mitochondrion",
      "B. Central vacuole",
      "C. Nucleus",
      "D. Ribosome"
    ],
    answer: "B",
    explanation: "Water in the central vacuole presses the cytoplasm against the wall, giving turgidity.",
    subtopic: "cell components & their functions"
  },
  {
    question: "The nuclear pores allow?",
    options: [
      "A. Free passage of the whole nucleus",
      "B. Movement of materials (e.g. RNA) between nucleus and cytoplasm",
      "C. Photosynthesis",
      "D. Respiration"
    ],
    answer: "B",
    explanation: "Nuclear pores regulate exchange of molecules with the cytoplasm.",
    subtopic: "cell components & their functions"
  },
  {
    question: "Which of the following is common to both plant and animal cells?",
    options: [
      "A. Chloroplast",
      "B. Cell wall",
      "C. Mitochondrion",
      "D. Large central vacuole"
    ],
    answer: "C",
    explanation: "Both cell types have mitochondria for respiration.",
    subtopic: "cell components & their functions"
  },
  {
    question: "The grana of a chloroplast are stacks of?",
    options: [
      "A. Cristae",
      "B. Thylakoids",
      "C. Ribosomes",
      "D. Vesicles"
    ],
    answer: "B",
    explanation: "Grana are stacks of thylakoid discs.",
    subtopic: "cell components & their functions"
  },
  {
    question: "Which organelle would be most abundant in a muscle cell?",
    options: [
      "A. Lysosome",
      "B. Mitochondrion",
      "C. Chloroplast",
      "D. Central vacuole"
    ],
    answer: "B",
    explanation: "Muscle cells need much ATP, so they are rich in mitochondria.",
    subtopic: "cell components & their functions"
  },
  {
    question: "The cell membrane is largely made of?",
    options: [
      "A. Cellulose and protein",
      "B. Phospholipid bilayer with proteins",
      "C. Chitin",
      "D. DNA"
    ],
    answer: "B",
    explanation: "The plasma membrane is a phospholipid bilayer with embedded proteins.",
    subtopic: "cell components & their functions"
  },
  {
    question: "A cell lacking a nucleus is typical of?",
    options: [
      "A. Plant cells",
      "B. Prokaryotes (e.g. bacteria)",
      "C. Animal cells",
      "D. Fungi cells"
    ],
    answer: "B",
    explanation: "Prokaryotic cells have no membrane-bound nucleus.",
    subtopic: "cell components & their functions"
  },
  {
    question: "The function of the Golgi apparatus includes?",
    options: [
      "A. Trapping light",
      "B. Forming lysosomes and secreting substances",
      "C. Respiration",
      "D. Storing DNA"
    ],
    answer: "B",
    explanation: "The Golgi forms secretory vesicles and lysosomes.",
    subtopic: "cell components & their functions"
  },
  {
    question: "Which structure carries hereditary information and is duplicated before cell division?",
    options: [
      "A. Ribosome",
      "B. Chromosome",
      "C. Lysosome",
      "D. Vacuole"
    ],
    answer: "B",
    explanation: "Chromosomes (DNA) carry genes and are replicated before division.",
    subtopic: "cell components & their functions"
  },
  {
    question: "The nucleolus is found inside the?",
    options: [
      "A. Cytoplasm",
      "B. Nucleus",
      "C. Mitochondrion",
      "D. Vacuole"
    ],
    answer: "B",
    explanation: "The nucleolus is a region within the nucleus.",
    subtopic: "cell components & their functions"
  },
  {
    question: "Which organelle helps in the detoxification of drugs in liver cells?",
    options: [
      "A. Rough ER",
      "B. Smooth ER",
      "C. Chloroplast",
      "D. Ribosome"
    ],
    answer: "B",
    explanation: "Smooth ER detoxifies drugs and synthesises lipids in liver cells.",
    subtopic: "cell components & their functions"
  },
  {
    question: "The membrane that encloses the cytoplasm and controls movement of substances is the?",
    options: [
      "A. Tonoplast",
      "B. Plasma (cell) membrane",
      "C. Nuclear envelope",
      "D. Thylakoid"
    ],
    answer: "B",
    explanation: "The plasma membrane bounds the cell and regulates transport.",
    subtopic: "cell components & their functions"
  },
  {
    question: "Which of these is a function of the cell wall?",
    options: [
      "A. Protein synthesis",
      "B. Protection against mechanical damage and pathogens",
      "C. Photosynthesis",
      "D. ATP production"
    ],
    answer: "B",
    explanation: "The cell wall protects and supports the cell.",
    subtopic: "cell components & their functions"
  },
  {
    question: "Mitochondria and chloroplasts are similar in that both?",
    options: [
      "A. Are found only in animals",
      "B. Have a double membrane and their own DNA",
      "C. Perform photosynthesis",
      "D. Lack membranes"
    ],
    answer: "B",
    explanation: "Both are double-membraned and contain their own circular DNA.",
    subtopic: "cell components & their functions"
  },
  {
    question: "The part of the cell that contains digestive enzymes and is abundant in white blood cells is the?",
    options: [
      "A. Ribosome",
      "B. Lysosome",
      "C. Vacuole",
      "D. Centriole"
    ],
    answer: "B",
    explanation: "Phagocytic white cells use lysosomes to digest engulfed material.",
    subtopic: "cell components & their functions"
  },
  {
    question: "Which organelle is the site of fat (lipid) synthesis in the cell?",
    options: [
      "A. Rough ER",
      "B. Smooth ER",
      "C. Golgi body",
      "D. Lysosome"
    ],
    answer: "B",
    explanation: "Smooth ER synthesises lipids and steroids.",
    subtopic: "cell components & their functions"
  },
  {
    question: "The semifluid medium that fills the spaces between organelles and where many reactions occur is the?",
    options: [
      "A. Nucleoplasm",
      "B. Cytoplasm",
      "C. Stroma",
      "D. Matrix"
    ],
    answer: "B",
    explanation: "The cytoplasm is the site of many metabolic reactions outside organelles.",
    subtopic: "cell components & their functions"
  },
  {
    question: "Chloroplasts are found mainly in the cells of?",
    options: [
      "A. Roots of plants",
      "B. Green parts of plants (leaves, stems)",
      "C. Animal cells",
      "D. Fungal cells"
    ],
    answer: "B",
    explanation: "Chloroplasts occur in green plant tissues exposed to light.",
    subtopic: "cell components & their functions"
  }
];

module.exports = questions;
