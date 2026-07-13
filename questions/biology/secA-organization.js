// biology — Organization of Life
const questions = [
  {
    question: "The simplest level of biological organisation that can carry out all life processes is the?",
    options: [
      "A. Tissue",
      "B. Cell",
      "C. Organ",
      "D. Organ system"
    ],
    answer: "B",
    explanation: "The cell is the basic unit of life capable of performing all life processes.",
    subtopic: "levels: cell/tissue/organ/system"
  },
  {
    question: "A group of similar cells performing a specific function is called a?",
    options: [
      "A. Tissue",
      "B. Organ",
      "C. Organism",
      "D. System"
    ],
    answer: "A",
    explanation: "A tissue is an aggregation of similar cells carrying out a common function.",
    subtopic: "levels: cell/tissue/organ/system"
  },
  {
    question: "Which level of organisation comes directly after 'tissue'?",
    options: [
      "A. Cell",
      "B. Organ",
      "C. Molecule",
      "D. Population"
    ],
    answer: "B",
    explanation: "Tissues combine to form organs, which then form organ systems.",
    subtopic: "levels: cell/tissue/organ/system"
  },
  {
    question: "Several organs working together to perform a major function form an?",
    options: [
      "A. Organism",
      "B. Tissue",
      "C. Organ system",
      "D. Cell"
    ],
    answer: "C",
    explanation: "An organ system is a group of organs cooperating to carry out a broad function (e.g. digestive system).",
    subtopic: "levels: cell/tissue/organ/system"
  },
  {
    question: "The highest level of organisation among the following is the?",
    options: [
      "A. Cell",
      "B. Tissue",
      "C. Organism",
      "D. Organ"
    ],
    answer: "C",
    explanation: "The organism is the highest of the listed structural levels (cell→tissue→organ→system→organism).",
    subtopic: "levels: cell/tissue/organ/system"
  },
  {
    question: "In the hierarchy cell → tissue → organ → system → organism, complexity?",
    options: [
      "A. Decreases at each level",
      "B. Increases at each level",
      "C. Stays constant",
      "D. Is random"
    ],
    answer: "B",
    explanation: "Each successive level is more complex and integrates the functions of the level below it.",
    subtopic: "complexity"
  },
  {
    question: "The complete living thing capable of independent existence is the?",
    options: [
      "A. Organ",
      "B. Organism",
      "C. Tissue",
      "D. Cell"
    ],
    answer: "B",
    explanation: "An organism is an individual living entity.",
    subtopic: "levels: cell/tissue/organ/system"
  },
  {
    question: "The heart, blood and blood vessels together form which level of organisation?",
    options: [
      "A. Tissue",
      "B. Organ",
      "C. Organ system",
      "D. Cell"
    ],
    answer: "C",
    explanation: "The heart (organ), blood (tissue) and vessels constitute the circulatory system.",
    subtopic: "levels: cell/tissue/organ/system"
  },
  {
    question: "Which of these is an example of an organ?",
    options: [
      "A. Epithelial tissue",
      "B. Stomach",
      "C. Red blood cell",
      "D. Human being"
    ],
    answer: "B",
    explanation: "The stomach is an organ made of several tissue types working together.",
    subtopic: "levels: cell/tissue/organ/system"
  },
  {
    question: "Muscular tissue, nervous tissue, epithelial tissue and connective tissue are levels of?",
    options: [
      "A. Cells",
      "B. Organs",
      "C. Tissues",
      "D. Systems"
    ],
    answer: "C",
    explanation: "These are the four primary animal tissue types.",
    subtopic: "levels: cell/tissue/organ/system"
  },
  {
    question: "The study of tissues is called?",
    options: [
      "A. Cytology",
      "B. Histology",
      "C. Ecology",
      "D. Physiology"
    ],
    answer: "B",
    explanation: "Histology is the study of the microscopic structure of tissues.",
    subtopic: "levels: cell/tissue/organ/system"
  },
  {
    question: "As one moves up the levels of organisation from cell to organism, the division of labour?",
    options: [
      "A. Decreases",
      "B. Increases",
      "C. Disappears",
      "D. Remains unchanged"
    ],
    answer: "B",
    explanation: "Higher levels show greater specialisation and division of labour among parts.",
    subtopic: "complexity"
  },
  {
    question: "Which of the following is the correct sequence from least to most complex?",
    options: [
      "A. Organism, system, organ, tissue, cell",
      "B. Cell, tissue, organ, system, organism",
      "C. Tissue, cell, organ, organism, system",
      "D. Cell, organ, tissue, system, organism"
    ],
    answer: "B",
    explanation: "Biological organisation builds upward: cell → tissue → organ → system → organism.",
    subtopic: "levels: cell/tissue/organ/system"
  },
  {
    question: "A unicellular organism such as Amoeba shows which level of organisation?",
    options: [
      "A. Tissue level only",
      "B. Cell and organism are the same (no tissue/organ levels)",
      "C. Organ system level",
      "D. Organ level"
    ],
    answer: "B",
    explanation: "In unicellular organisms a single cell performs all life functions; there are no tissues or organs.",
    subtopic: "complexity"
  },
  {
    question: "The stomach is composed of all the following tissue types EXCEPT?",
    options: [
      "A. Epithelial",
      "B. Muscular",
      "C. Connective",
      "D. Nervous — it is absent"
    ],
    answer: "D",
    explanation: "The stomach contains epithelial, muscular, connective AND nervous tissue; nervous tissue is present, so D is false.",
    subtopic: "levels: cell/tissue/organ/system"
  },
  {
    question: "Which of the following best illustrates an organ system?",
    options: [
      "A. A single neuron",
      "B. The digestive system",
      "C. A muscle fibre",
      "D. Skin tissue"
    ],
    answer: "B",
    explanation: "The digestive system is a set of organs (mouth, stomach, intestines, etc.) working together.",
    subtopic: "levels: cell/tissue/organ/system"
  },
  {
    question: "The property of living systems whereby the whole is greater than the sum of its parts is called?",
    options: [
      "A. Reductionism",
      "B. Emergent properties",
      "C. Entropy",
      "D. Diffusion"
    ],
    answer: "B",
    explanation: "Higher organisational levels show emergent properties not present at lower levels.",
    subtopic: "complexity"
  },
  {
    question: "An organ is best defined as?",
    options: [
      "A. A single type of cell",
      "B. A structure made of two or more tissue types performing a function",
      "C. A group of organisms",
      "D. The smallest unit of life"
    ],
    answer: "B",
    explanation: "Organs are composed of multiple tissue types cooperating for a specific function.",
    subtopic: "levels: cell/tissue/organ/system"
  },
  {
    question: "Which of the following is TRUE about cells in a multicellular organism?",
    options: [
      "A. They are all identical",
      "B. They are specialised for different functions",
      "C. They cannot communicate",
      "D. They work independently with no coordination"
    ],
    answer: "B",
    explanation: "Cells in multicellular organisms differentiate and specialise for particular roles.",
    subtopic: "complexity"
  },
  {
    question: "The level of organisation between the cell and the organ is the?",
    options: [
      "A. System",
      "B. Tissue",
      "C. Organism",
      "D. Population"
    ],
    answer: "B",
    explanation: "Tissues are groupings of similar cells situated between cell and organ levels.",
    subtopic: "levels: cell/tissue/organ/system"
  },
  {
    question: "Specialised cells with a common origin and function form a?",
    options: [
      "A. System",
      "B. Tissue",
      "C. Population",
      "D. Community"
    ],
    answer: "B",
    explanation: "Tissues arise from groups of specialised cells with a shared function.",
    subtopic: "levels: cell/tissue/organ/system"
  },
  {
    question: "In plants, the leaf is an example of an?",
    options: [
      "A. Cell",
      "B. Tissue",
      "C. Organ",
      "D. System"
    ],
    answer: "C",
    explanation: "A leaf is a plant organ composed of several tissue types (epidermis, mesophyll, vascular).",
    subtopic: "levels: cell/tissue/organ/system"
  },
  {
    question: "Which statement about organ systems is correct?",
    options: [
      "A. Each system works in isolation",
      "B. Systems cooperate to maintain the whole organism",
      "C. Systems are found only in plants",
      "D. A system is a single organ"
    ],
    answer: "B",
    explanation: "Organ systems are integrated and interdependent to sustain the organism.",
    subtopic: "complexity"
  },
  {
    question: "The study of the structure and function of cells is?",
    options: [
      "A. Histology",
      "B. Cytology",
      "C. Anatomy",
      "D. Taxonomy"
    ],
    answer: "B",
    explanation: "Cytology is the branch of biology dealing with cells.",
    subtopic: "levels: cell/tissue/organ/system"
  },
  {
    question: "Which of the following represents the correct increasing order of complexity?",
    options: [
      "A. System, organ, tissue, cell",
      "B. Cell, tissue, organ, system",
      "C. Organ, tissue, cell, system",
      "D. Tissue, organ, system, cell"
    ],
    answer: "B",
    explanation: "Complexity increases from cell to tissue to organ to system.",
    subtopic: "complexity"
  },
  {
    question: "A population is made up of?",
    options: [
      "A. Different organ systems",
      "B. Individuals of the same species in an area",
      "C. Different tissues",
      "D. Cells of one type"
    ],
    answer: "B",
    explanation: "A population is a group of organisms of the same species living in a given area.",
    subtopic: "levels: cell/tissue/organ/system"
  },
  {
    question: "The study of how organs are arranged is called?",
    options: [
      "A. Physiology",
      "B. Anatomy",
      "C. Ecology",
      "D. Genetics"
    ],
    answer: "B",
    explanation: "Anatomy is the study of structure and arrangement of body parts.",
    subtopic: "levels: cell/tissue/organ/system"
  },
  {
    question: "From the options, the level that contains the most specialised structures is the?",
    options: [
      "A. Cell",
      "B. Tissue",
      "C. Organ system",
      "D. Molecule"
    ],
    answer: "C",
    explanation: "Organ systems integrate many specialised structures for complex functions.",
    subtopic: "complexity"
  },
  {
    question: "Which of the following is NOT a level in the structural organisation of multicellular organisms?",
    options: [
      "A. Cell",
      "B. Tissue",
      "C. Atom",
      "D. Organ"
    ],
    answer: "C",
    explanation: "Atom is a chemical, not a biological organisational, level.",
    subtopic: "levels: cell/tissue/organ/system"
  },
  {
    question: "Organs such as the stomach and intestine belong to the same?",
    options: [
      "A. Tissue",
      "B. Cell",
      "C. Organ system (digestive)",
      "D. Organism only"
    ],
    answer: "C",
    explanation: "Stomach and intestine are organs of the digestive system.",
    subtopic: "levels: cell/tissue/organ/system"
  },
  {
    question: "The term 'differentiation' refers to the process by which cells?",
    options: [
      "A. Divide into two identical cells",
      "B. Become specialised in structure and function",
      "C. Die",
      "D. Merge into tissues"
    ],
    answer: "B",
    explanation: "Differentiation is the development of specialised cell types from generalized cells.",
    subtopic: "complexity"
  },
  {
    question: "In multicellular organisms, the efficiency of life processes is increased by?",
    options: [
      "A. Lack of specialisation",
      "B. Division of labour among cells and tissues",
      "C. Random organisation",
      "D. Fewer cells"
    ],
    answer: "B",
    explanation: "Specialisation and division of labour make multicellular organisms more efficient.",
    subtopic: "complexity"
  },
  {
    question: "Which of these is a correct pairing of organ and system?",
    options: [
      "A. Heart — digestive system",
      "B. Lungs — respiratory system",
      "C. Kidney — circulatory system",
      "D. Stomach — respiratory system"
    ],
    answer: "B",
    explanation: "Lungs are the main organs of the respiratory system.",
    subtopic: "levels: cell/tissue/organ/system"
  },
  {
    question: "The skin is best classified as a(n)?",
    options: [
      "A. Tissue",
      "B. Organ",
      "C. Cell",
      "D. System"
    ],
    answer: "B",
    explanation: "Skin is an organ made of epithelial, connective, nervous and muscular tissues.",
    subtopic: "levels: cell/tissue/organ/system"
  },
  {
    question: "Which of the following shows the greatest specialisation of cells?",
    options: [
      "A. Unicellular organism",
      "B. Multicellular organism",
      "C. Virus",
      "D. Crystal"
    ],
    answer: "B",
    explanation: "Multicellular organisms have many specialised cell types with distinct roles.",
    subtopic: "complexity"
  },
  {
    question: "An example of an organ system in humans is the?",
    options: [
      "A. Blood",
      "B. Nervous system",
      "C. Epithelium",
      "D. Neuron"
    ],
    answer: "B",
    explanation: "The nervous system is an organ system (brain, spinal cord, nerves).",
    subtopic: "levels: cell/tissue/organ/system"
  },
  {
    question: "The complexity of an organism is best reflected by the number of?",
    options: [
      "A. Atoms it contains",
      "B. Different cell and tissue types and organ systems",
      "C. Single cells only",
      "D. Non-living parts"
    ],
    answer: "B",
    explanation: "Complexity is indicated by the variety and integration of cells, tissues and systems.",
    subtopic: "complexity"
  },
  {
    question: "Which of the following is a tissue?",
    options: [
      "A. Brain",
      "B. Xylem",
      "C. Earthworm",
      "D. Mitochondrion"
    ],
    answer: "B",
    explanation: "Xylem is a plant tissue that transports water and supports the plant.",
    subtopic: "levels: cell/tissue/organ/system"
  },
  {
    question: "At which level does 'division of labour' among components first become clearly evident in multicellular life?",
    options: [
      "A. Single cell",
      "B. Tissue and above",
      "C. Molecule",
      "D. Atom"
    ],
    answer: "B",
    explanation: "Division of labour appears as cells specialise into tissues, organs and systems.",
    subtopic: "complexity"
  },
  {
    question: "The organ system responsible for support and movement in vertebrates is the?",
    options: [
      "A. Respiratory system",
      "B. Skeletal and muscular systems",
      "C. Digestive system",
      "D. Nervous system"
    ],
    answer: "B",
    explanation: "The skeletal and muscular systems provide support and enable movement.",
    subtopic: "levels: cell/tissue/organ/system"
  },
  {
    question: "Which statement is TRUE of emergent properties?",
    options: [
      "A. They exist at the level of a single molecule",
      "B. They arise from interactions among parts at higher levels",
      "C. They are found only in non-living things",
      "D. They decrease complexity"
    ],
    answer: "B",
    explanation: "Emergent properties result from the organisation and interaction of components.",
    subtopic: "complexity"
  },
  {
    question: "A group of organ systems functioning together constitutes a?",
    options: [
      "A. Tissue",
      "B. Cell",
      "C. Multicellular organism",
      "D. Population"
    ],
    answer: "C",
    explanation: "All the organ systems together make up a complete organism.",
    subtopic: "levels: cell/tissue/organ/system"
  },
  {
    question: "Which of the following is the smallest organisational unit listed?",
    options: [
      "A. Organism",
      "B. Organ",
      "C. Cell",
      "D. System"
    ],
    answer: "C",
    explanation: "The cell is the smallest of the listed biological organisation levels.",
    subtopic: "levels: cell/tissue/organ/system"
  },
  {
    question: "In flowering plants, the root is an example of a(n)?",
    options: [
      "A. Tissue",
      "B. Organ",
      "C. Cell",
      "D. System"
    ],
    answer: "B",
    explanation: "The root is a plant organ with epidermal, cortical and vascular tissues.",
    subtopic: "levels: cell/tissue/organ/system"
  },
  {
    question: "The levels of organisation from simplest to most complex in a multicellular organism are?",
    options: [
      "A. Cell, organ, tissue, organism, system",
      "B. Cell, tissue, organ, system, organism",
      "C. Tissue, organ, cell, system, organism",
      "D. Organism, system, organ, tissue, cell"
    ],
    answer: "B",
    explanation: "The correct build-up order is cell → tissue → organ → system → organism.",
    subtopic: "levels: cell/tissue/organ/system"
  },
  {
    question: "Which of the following best describes a system's advantage over isolated organs?",
    options: [
      "A. It reduces efficiency",
      "B. It coordinates organs to perform complex functions",
      "C. It prevents communication",
      "D. It removes the need for tissues"
    ],
    answer: "B",
    explanation: "Systems coordinate multiple organs so the organism can perform complex integrated functions.",
    subtopic: "complexity"
  },
  {
    question: "Connective tissue is distinguished from other tissues by its role in?",
    options: [
      "A. Conducting impulses",
      "B. Binding, supporting and connecting other tissues",
      "C. Contracting",
      "D. Covering surfaces only"
    ],
    answer: "B",
    explanation: "Connective tissue supports, binds together and protects other tissues and organs.",
    subtopic: "levels: cell/tissue/organ/system"
  },
  {
    question: "An organism's body is organised such that each higher level?",
    options: [
      "A. Has fewer functions",
      "B. Depends on the proper functioning of lower levels",
      "C. Is independent of lower levels",
      "D. Contains only one cell type"
    ],
    answer: "B",
    explanation: "Higher levels rely on the integrated functioning of the lower levels beneath them.",
    subtopic: "complexity"
  }
];

module.exports = questions;
