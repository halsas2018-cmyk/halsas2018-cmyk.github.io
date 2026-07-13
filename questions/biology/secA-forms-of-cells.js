// biology — Forms of Living Cells
const questions = [
  {
    question: "An organism consisting of a single, independent cell that carries out all life processes is described as?",
    options: [
      "A. Colonial",
      "B. Single and free-living",
      "C. Filamentous",
      "D. Multicellular"
    ],
    answer: "B",
    explanation: "A single free-living cell (e.g. Amoeba) performs all functions independently.",
    subtopic: "single & free-living"
  },
  {
    question: "Which of the following is an example of a single free-living cell?",
    options: [
      "A. Spirogyra filament",
      "B. Amoeba",
      "C. Volvox colony",
      "D. Human skin cell"
    ],
    answer: "B",
    explanation: "Amoeba is a unicellular organism living independently.",
    subtopic: "single & free-living"
  },
  {
    question: "Bacteria are generally found as?",
    options: [
      "A. Multicellular organisms",
      "B. Single free-living cells",
      "C. Colonies only",
      "D. Filaments"
    ],
    answer: "B",
    explanation: "Most bacteria are unicellular and live as independent cells.",
    subtopic: "single & free-living"
  },
  {
    question: "A cell that exists as part of a larger organism and cannot survive alone is called?",
    options: [
      "A. Free-living",
      "B. A cell that is part of an organism",
      "C. Colonial",
      "D. Filamentous"
    ],
    answer: "B",
    explanation: "Somatic cells (e.g. human cheek cells) are dependent on the whole organism.",
    subtopic: "part of organism"
  },
  {
    question: "Which of the following is a cell that forms part of a multicellular organism?",
    options: [
      "A. Paramecium",
      "B. A human red blood cell",
      "C. Euglena",
      "D. Chlamydomonas"
    ],
    answer: "B",
    explanation: "A red blood cell is part of the human body and cannot live independently.",
    subtopic: "part of organism"
  },
  {
    question: "Cells that remain attached after division and live together as a loosely integrated group show the?",
    options: [
      "A. Single free-living form",
      "B. Colonial form",
      "C. Filamentous form",
      "D. Tissue form"
    ],
    answer: "B",
    explanation: "A colony is a group of similar cells living together but not fully integrated as tissues.",
    subtopic: "colony"
  },
  {
    question: "Volvox is an example of cells organised in a?",
    options: [
      "A. Filament",
      "B. Colony",
      "C. Single free-living form",
      "D. Tissue"
    ],
    answer: "B",
    explanation: "Volvox is a colonial green alga made of many flagellated cells in a sphere.",
    subtopic: "colony"
  },
  {
    question: "In a colony such as Volvox, the cells are?",
    options: [
      "A. Completely independent and separate individuals",
      "B. Joined and show some division of labour",
      "C. Fully differentiated into tissues",
      "D. Dead"
    ],
    answer: "B",
    explanation: "Colonial cells are connected and may show limited specialisation (e.g. reproductive cells).",
    subtopic: "colony"
  },
  {
    question: "A chain or thread of cells joined end to end is described as?",
    options: [
      "A. Colonial",
      "B. Filamentous",
      "C. Free-living",
      "D. Unicellular"
    ],
    answer: "B",
    explanation: "Filamentous forms consist of cells arranged in a thread-like chain (e.g. Spirogyra).",
    subtopic: "filament"
  },
  {
    question: "Spirogyra is an example of a?",
    options: [
      "A. Single free-living cell",
      "B. Filamentous alga",
      "C. Colony",
      "D. Animal tissue"
    ],
    answer: "B",
    explanation: "Spirogyra forms unbranched filaments of cylindrical cells.",
    subtopic: "filament"
  },
  {
    question: "Which of the following is filamentous?",
    options: [
      "A. Amoeba",
      "B. Spirogyra",
      "C. Volvox",
      "D. Chlamydomonas"
    ],
    answer: "B",
    explanation: "Spirogyra is a filamentous green alga; the others are single cells or colonies.",
    subtopic: "filament"
  },
  {
    question: "Cells of a filament such as Spirogyra are?",
    options: [
      "A. Separate free-living individuals",
      "B. Connected and arranged in a thread",
      "C. Part of an animal",
      "D. Non-living"
    ],
    answer: "B",
    explanation: "Filament cells are joined in a continuous chain sharing a common sheath.",
    subtopic: "filament"
  },
  {
    question: "The form of cellular organisation in which cells live together but each can survive on its own if separated is?",
    options: [
      "A. Tissue",
      "B. Colony",
      "C. Organ",
      "D. System"
    ],
    answer: "B",
    explanation: "In a colony, individual cells can often survive independently if separated.",
    subtopic: "colony"
  },
  {
    question: "Which of the following correctly contrasts a colony with a multicellular organism?",
    options: [
      "A. Colonies have tissues, organisms do not",
      "B. Colonial cells are loosely associated; organism cells are specialised into tissues",
      "C. Colonies are always animals",
      "D. Organisms are always unicellular"
    ],
    answer: "B",
    explanation: "Colonies are loose associations; true multicellular organisms have integrated tissues.",
    subtopic: "colony"
  },
  {
    question: "Chlamydomonas is best described as?",
    options: [
      "A. Filamentous",
      "B. Single free-living flagellate cell",
      "C. Colonial",
      "D. Part of a tissue"
    ],
    answer: "B",
    explanation: "Chlamydomonas is a unicellular flagellated green alga living independently.",
    subtopic: "single & free-living"
  },
  {
    question: "Which of these cells can carry out photosynthesis AND move on its own?",
    options: [
      "A. Human muscle cell",
      "B. Euglena",
      "C. Fungal hypha cell",
      "D. Red blood cell"
    ],
    answer: "B",
    explanation: "Euglena is a free-living unicell that both photosynthesises and swims using a flagellum.",
    subtopic: "single & free-living"
  },
  {
    question: "A key feature of a free-living single cell is that it?",
    options: [
      "A. Cannot feed itself",
      "B. Performs all life processes by itself",
      "C. Is part of a tissue",
      "D. Cannot reproduce"
    ],
    answer: "B",
    explanation: "A free-living unicell independently performs nutrition, respiration, excretion and reproduction.",
    subtopic: "single & free-living"
  },
  {
    question: "Cells that make up your skin, liver or heart are examples of?",
    options: [
      "A. Free-living cells",
      "B. Cells that are part of an organism",
      "C. Colonial cells",
      "D. Filaments"
    ],
    answer: "B",
    explanation: "These are body cells dependent on the organism as a whole.",
    subtopic: "part of organism"
  },
  {
    question: "Which statement about cells as 'part of an organism' is TRUE?",
    options: [
      "A. They can survive if removed from the body",
      "B. They depend on other cells and systems of the body",
      "C. They are independent unicells",
      "D. They never specialise"
    ],
    answer: "B",
    explanation: "Somatic cells rely on the organism's transport, nervous and other systems to survive.",
    subtopic: "part of organism"
  },
  {
    question: "The transition from colonial to truly multicellular life is marked by the appearance of?",
    options: [
      "A. Cell walls",
      "B. Permanent division of labour and tissues",
      "C. Flagella",
      "D. Chloroplasts"
    ],
    answer: "B",
    explanation: "True multicellularity involves cell specialisation into integrated tissues.",
    subtopic: "colony"
  },
  {
    question: "Which of the following is a colonial organism whose cells are connected by cytoplasm?",
    options: [
      "A. Amoeba",
      "B. Volvox",
      "C. Spirogyra",
      "D. Bacterium"
    ],
    answer: "B",
    explanation: "Volvox cells are linked within a colonial matrix and show coordination.",
    subtopic: "colony"
  },
  {
    question: "Filamentous blue-green algae (e.g. Oscillatoria) are arranged as?",
    options: [
      "A. Colonies of separate cells",
      "B. Unbranched or branched threads of cells",
      "C. Single free-living cells",
      "D. Animal tissues"
    ],
    answer: "B",
    explanation: "Oscillatoria forms filamentous trichomes of cells in a row.",
    subtopic: "filament"
  },
  {
    question: "Which form of cellular organisation is Spirogyra an example of?",
    options: [
      "A. Part of an organism",
      "B. Filamentous",
      "C. Colonial",
      "D. Single free-living"
    ],
    answer: "B",
    explanation: "Spirogyra is a filamentous green alga.",
    subtopic: "filament"
  },
  {
    question: "A cell that is 'part of an organism' differs from a free-living cell because it?",
    options: [
      "A. Performs all functions alone",
      "B. Is specialised and interdependent with other cells",
      "C. Has no nucleus",
      "D. Is prokaryotic"
    ],
    answer: "B",
    explanation: "Body cells are specialised and depend on other cells for survival.",
    subtopic: "part of organism"
  },
  {
    question: "Which of the following best describes a colony?",
    options: [
      "A. One cell performing all functions",
      "B. A group of similar cells living together but not forming true tissues",
      "C. A true organ",
      "D. A filament"
    ],
    answer: "B",
    explanation: "A colony is a loosely integrated group of similar cells.",
    subtopic: "colony"
  },
  {
    question: "Euglena, Paramecium and Amoeba are all examples of?",
    options: [
      "A. Filaments",
      "B. Single free-living cells",
      "C. Colonies",
      "D. Tissues"
    ],
    answer: "B",
    explanation: "All three are unicellular organisms living independently.",
    subtopic: "single & free-living"
  },
  {
    question: "In filamentous algae, new filaments commonly arise by?",
    options: [
      "A. Breakage (fragmentation) of the filament",
      "B. Formation of a colony",
      "C. Tissue formation",
      "D. Budding of an organ"
    ],
    answer: "A",
    explanation: "Filaments often reproduce vegetatively by fragmentation.",
    subtopic: "filament"
  },
  {
    question: "Which of these is NOT a free-living single cell?",
    options: [
      "A. Amoeba",
      "B. Paramecium",
      "C. A human nerve cell",
      "D. Chlamydomonas"
    ],
    answer: "C",
    explanation: "A nerve cell is part of an organism, not a free-living unicell.",
    subtopic: "part of organism"
  },
  {
    question: "The simplest level of cellular independence is shown by?",
    options: [
      "A. Colonial forms",
      "B. Single free-living cells",
      "C. Tissues",
      "D. Organs"
    ],
    answer: "B",
    explanation: "Single free-living cells are the simplest independent cellular units.",
    subtopic: "single & free-living"
  },
  {
    question: "Which statement about Volvox is correct?",
    options: [
      "A. It is a single free-living cell",
      "B. It is a spherical colony with thousands of cells",
      "C. It is a filament",
      "D. It is an animal tissue"
    ],
    answer: "B",
    explanation: "Volvox is a colonial alga forming a hollow sphere of many flagellated cells.",
    subtopic: "colony"
  },
  {
    question: "Cells connected in a filament share?",
    options: [
      "A. No contact at all",
      "B. Cytoplasmic continuity across cell walls (via pores/plasmodesmata-like links)",
      "C. A nervous system",
      "D. An organ"
    ],
    answer: "B",
    explanation: "Filament cells are joined and may exchange materials through their connected walls.",
    subtopic: "filament"
  },
  {
    question: "Which of the following is an example of a colonial form rather than a filament?",
    options: [
      "A. Spirogyra",
      "B. Volvox",
      "C. Oscillatoria",
      "D. Nostoc chain"
    ],
    answer: "B",
    explanation: "Volvox is colonial; Spirogyra and Oscillatoria are filamentous.",
    subtopic: "colony"
  },
  {
    question: "A human cheek cell placed in pond water would?",
    options: [
      "A. Form a colony",
      "B. Die because it is part of an organism and cannot live alone",
      "C. Become free-living",
      "D. Form a filament"
    ],
    answer: "B",
    explanation: "Somatic cells cannot survive independently outside the body.",
    subtopic: "part of organism"
  },
  {
    question: "The advantage of the colonial form over a single cell is?",
    options: [
      "A. Smaller size",
      "B. Cooperation among cells for movement and survival",
      "C. Loss of function",
      "D. No reproduction"
    ],
    answer: "B",
    explanation: "Colonisation allows cells to coordinate (e.g. collectively swim) and share functions.",
    subtopic: "colony"
  },
  {
    question: "Which of the following cells is autotrophic and free-living?",
    options: [
      "A. White blood cell",
      "B. Chlamydomonas",
      "C. Sperm cell",
      "D. Liver cell"
    ],
    answer: "B",
    explanation: "Chlamydomonas is a free-living photosynthetic unicell.",
    subtopic: "single & free-living"
  },
  {
    question: "Filaments of Spirogyra are made up of?",
    options: [
      "A. One long cell",
      "B. Many cylindrical cells in a row",
      "C. A colony of spheres",
      "D. Animal cells"
    ],
    answer: "B",
    explanation: "Each Spirogyra filament is a chain of rectangular cells.",
    subtopic: "filament"
  },
  {
    question: "The form of life in which cells are permanently bound into tissues and organs is?",
    options: [
      "A. Colonial",
      "B. Multicellular (cells part of an organism)",
      "C. Filamentous",
      "D. Single free-living"
    ],
    answer: "B",
    explanation: "In multicellular organisms, cells are integrated into tissues and organs.",
    subtopic: "part of organism"
  },
  {
    question: "Which of these is a distinguishing feature of a filament compared to a colony?",
    options: [
      "A. Filaments are spherical",
      "B. Filaments are linear chains; colonies are grouped but not in a single chain",
      "C. Colonies are threads",
      "D. Filaments are always animals"
    ],
    answer: "B",
    explanation: "Filaments are thread-like chains; colonies are clusters not arranged as one chain.",
    subtopic: "filament"
  },
  {
    question: "A cell that can swim, feed and reproduce by itself exemplifies?",
    options: [
      "A. A cell part of an organism",
      "B. Single free-living form",
      "C. A filament",
      "D. A colony"
    ],
    answer: "B",
    explanation: "Independent performance of all life processes defines the free-living unicell.",
    subtopic: "single & free-living"
  },
  {
    question: "Nostoc, a blue-green alga, may occur as a?",
    options: [
      "A. Single free-living cell only",
      "B. Filamentous colony (with heterocysts) or free filaments",
      "C. True tissue",
      "D. Multicellular organ"
    ],
    answer: "B",
    explanation: "Nostoc forms filamentous colonies, often with specialised nitrogen-fixing heterocysts.",
    subtopic: "filament"
  },
  {
    question: "Which form shows the LEAST integration among cells?",
    options: [
      "A. True multicellular tissue",
      "B. Single free-living cell",
      "C. Colony",
      "D. Filament"
    ],
    answer: "B",
    explanation: "A single free-living cell has no integration issue at all; among groups, colonies are least integrated, but a single cell has no intercellular integration to begin with.",
    subtopic: "single & free-living"
  },
  {
    question: "The cells in a Volvox colony communicate and coordinate movement, showing?",
    options: [
      "A. No organisation",
      "B. A step toward multicellular specialisation",
      "C. That they are tissues",
      "D. That they are animals"
    ],
    answer: "B",
    explanation: "Coordinated colonial behaviour is a precursor to true multicellular organisation.",
    subtopic: "colony"
  },
  {
    question: "Which of the following is TRUE of cells that are part of an organism?",
    options: [
      "A. They are always photosynthetic",
      "B. They are specialised and rely on the organism",
      "C. They live independently in soil",
      "D. They have no nucleus"
    ],
    answer: "B",
    explanation: "Body cells are specialised and dependent on the whole organism.",
    subtopic: "part of organism"
  },
  {
    question: "A filament differs from a colony mainly in its?",
    options: [
      "A. Colour",
      "B. Linear, chain-like arrangement of cells",
      "C. Ability to photosynthesise",
      "D. Lack of cells"
    ],
    answer: "B",
    explanation: "The filament is a one-dimensional chain; colonies are more three-dimensional clusters.",
    subtopic: "filament"
  },
  {
    question: "Which of these is a free-living unicellular organism with a contractile vacuole for osmoregulation?",
    options: [
      "A. Amoeba",
      "B. Human kidney cell",
      "C. Skin cell",
      "D. Neuron"
    ],
    answer: "A",
    explanation: "Freshwater unicells like Amoeba use contractile vacuoles to expel excess water.",
    subtopic: "single & free-living"
  },
  {
    question: "Cells in a true multicellular organism are connected and?",
    options: [
      "A. All identical",
      "B. Differentiated into tissues with division of labour",
      "C. Always free-living",
      "D. Never communicate"
    ],
    answer: "B",
    explanation: "Multicellular organisation depends on cellular differentiation and cooperation.",
    subtopic: "part of organism"
  },
  {
    question: "Which of the following pairs are both filamentous?",
    options: [
      "A. Volvox and Amoeba",
      "B. Spirogyra and Oscillatoria",
      "C. Chlamydomonas and Paramecium",
      "D. Euglena and Volvox"
    ],
    answer: "B",
    explanation: "Spirogyra and Oscillatoria are both filamentous algae.",
    subtopic: "filament"
  },
  {
    question: "The colonial form is considered intermediate between?",
    options: [
      "A. Virus and bacterium",
      "B. Single cells and truly multicellular organisms",
      "C. Plant and animal",
      "D. Tissue and organ"
    ],
    answer: "B",
    explanation: "Colonies bridge unicellular and multicellular organisation.",
    subtopic: "colony"
  },
  {
    question: "Which of these describes a 'single free-living' organism correctly?",
    options: [
      "A. Made of many tissues",
      "B. One cell that is independently alive",
      "C. A chain of cells",
      "D. Part of a larger body"
    ],
    answer: "B",
    explanation: "A free-living unicell is one independent cell.",
    subtopic: "single & free-living"
  }
];

module.exports = questions;
