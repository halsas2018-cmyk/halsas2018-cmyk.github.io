// biology — Properties & Functions of Living Cells
const questions = [
  {
    question: "Nutrition in living cells refers to the process of?",
    options: [
      "A. Removing waste",
      "B. Obtaining and using food for energy and growth",
      "C. Movement",
      "D. Reproduction"
    ],
    answer: "B",
    explanation: "Nutrition is the uptake and utilisation of food substances.",
    subtopic: "nutrition"
  },
  {
    question: "Autotrophic nutrition means an organism?",
    options: [
      "A. Eats other organisms",
      "B. Makes its own food from simple inorganic substances",
      "C. Feeds on dead matter",
      "D. Cannot feed"
    ],
    answer: "B",
    explanation: "Autotrophs synthesise organic food from CO2 and water (e.g. by photosynthesis).",
    subtopic: "nutrition"
  },
  {
    question: "Heterotrophic nutrition involves?",
    options: [
      "A. Making food from sunlight",
      "B. Obtaining ready-made organic food from other organisms",
      "C. Fixing nitrogen",
      "D. Photosynthesis"
    ],
    answer: "B",
    explanation: "Heterotrophs consume organic matter produced by others.",
    subtopic: "nutrition"
  },
  {
    question: "Photosynthesis is a form of?",
    options: [
      "A. Heterotrophic nutrition",
      "B. Autotrophic nutrition",
      "C. Saprophytism",
      "D. Parasitism"
    ],
    answer: "B",
    explanation: "Photosynthesis builds food from inorganic materials, an autotrophic process.",
    subtopic: "nutrition"
  },
  {
    question: "Which of the following is a heterotroph?",
    options: [
      "A. Green plant",
      "B. Cyanobacterium",
      "C. Human",
      "D. Alga"
    ],
    answer: "C",
    explanation: "Humans consume organic food and are heterotrophs.",
    subtopic: "nutrition"
  },
  {
    question: "Saprophytic nutrition is practised by?",
    options: [
      "A. Green plants",
      "B. Fungi and some bacteria feeding on dead matter",
      "C. Animals",
      "D. Viruses"
    ],
    answer: "B",
    explanation: "Saprophytes absorb nutrients from dead organic material.",
    subtopic: "nutrition"
  },
  {
    question: "Parasitic nutrition involves an organism that?",
    options: [
      "A. Lives freely and makes its own food",
      "B. Feeds on a living host, often harming it",
      "C. Is autotrophic",
      "D. Decomposes dead matter"
    ],
    answer: "B",
    explanation: "Parasites derive nutrients from a living host.",
    subtopic: "nutrition"
  },
  {
    question: "Holozoic nutrition, as in humans, involves?",
    options: [
      "A. Absorption of dissolved food only",
      "B. Ingestion, digestion, absorption and egestion",
      "C. Photosynthesis",
      "D. Saprophytism"
    ],
    answer: "B",
    explanation: "Holozoic feeders ingest and internally digest food.",
    subtopic: "nutrition"
  },
  {
    question: "Cellular respiration is the process by which cells?",
    options: [
      "A. Make glucose",
      "B. Release energy from food (glucose)",
      "C. Photosynthesise",
      "D. Excrete proteins"
    ],
    answer: "B",
    explanation: "Respiration breaks down glucose to release ATP energy.",
    subtopic: "cellular respiration"
  },
  {
    question: "The overall word equation for aerobic respiration is?",
    options: [
      "A. Glucose → lactic acid + energy",
      "B. Glucose + oxygen → carbon dioxide + water + energy",
      "C. CO2 + water → glucose + O2",
      "D. Glucose → ethanol + O2"
    ],
    answer: "B",
    explanation: "Aerobic respiration oxidises glucose to CO2 and water, releasing energy.",
    subtopic: "cellular respiration"
  },
  {
    question: "The energy released in respiration is stored in the form of?",
    options: [
      "A. DNA",
      "B. ATP",
      "C. Starch",
      "D. Protein"
    ],
    answer: "B",
    explanation: "Energy is captured in ATP, the cell's energy currency.",
    subtopic: "cellular respiration"
  },
  {
    question: "Anaerobic respiration in human muscle produces?",
    options: [
      "A. Ethanol and CO2",
      "B. Lactic acid",
      "C. Glucose",
      "D. Oxygen"
    ],
    answer: "B",
    explanation: "Without oxygen, muscle cells ferment glucose to lactic acid.",
    subtopic: "cellular respiration"
  },
  {
    question: "Anaerobic respiration in yeast produces?",
    options: [
      "A. Lactic acid",
      "B. Ethanol and carbon dioxide",
      "C. Water and CO2",
      "D. Glucose"
    ],
    answer: "B",
    explanation: "Yeast fermentation yields alcohol and CO2.",
    subtopic: "cellular respiration"
  },
  {
    question: "Respiration that uses oxygen occurs in the?",
    options: [
      "A. Cytoplasm only",
      "B. Mitochondria (and begins in cytoplasm)",
      "C. Nucleus",
      "D. Cell wall"
    ],
    answer: "B",
    explanation: "Aerobic respiration's later stages occur in mitochondria.",
    subtopic: "cellular respiration"
  },
  {
    question: "The main waste product of aerobic respiration is?",
    options: [
      "A. Oxygen",
      "B. Carbon dioxide and water",
      "C. Glucose",
      "D. Protein"
    ],
    answer: "B",
    explanation: "CO2 and H2O are the end products of complete glucose oxidation.",
    subtopic: "cellular respiration"
  },
  {
    question: "Excretion in living cells is the removal of?",
    options: [
      "A. Useful food",
      "B. Metabolic waste products",
      "C. Oxygen needed",
      "D. Water only"
    ],
    answer: "B",
    explanation: "Excretion eliminates toxic wastes such as CO2 and nitrogenous compounds.",
    subtopic: "excretion"
  },
  {
    question: "Carbon dioxide produced in respiration is removed from the body mainly via the?",
    options: [
      "A. Skin only",
      "B. Lungs (respiratory system)",
      "C. Kidneys only",
      "D. Liver only"
    ],
    answer: "B",
    explanation: "CO2 is exhaled by the lungs.",
    subtopic: "excretion"
  },
  {
    question: "In humans, nitrogenous wastes such as urea are removed mainly by the?",
    options: [
      "A. Lungs",
      "B. Kidneys",
      "C. Intestine",
      "D. Heart"
    ],
    answer: "B",
    explanation: "The kidneys filter blood and excrete urea in urine.",
    subtopic: "excretion"
  },
  {
    question: "Growth in living organisms is best defined as?",
    options: [
      "A. Movement from place to place",
      "B. A permanent increase in size and dry mass",
      "C. Loss of water",
      "D. Excretion"
    ],
    answer: "B",
    explanation: "Growth is an irreversible increase in size and mass.",
    subtopic: "growth"
  },
  {
    question: "Cells grow in size mainly by?",
    options: [
      "A. Cell division",
      "B. Increase in cytoplasm and organelles (synthesis)",
      "C. Loss of water",
      "D. Photosynthesis only"
    ],
    answer: "B",
    explanation: "Cell growth involves synthesis of more protoplasm and organelles.",
    subtopic: "growth"
  },
  {
    question: "In plants, growth occurs mainly at?",
    options: [
      "A. All parts equally",
      "B. Meristems (regions of dividing cells)",
      "C. The leaves only",
      "D. The roots only"
    ],
    answer: "B",
    explanation: "Meristems are zones of active cell division enabling growth.",
    subtopic: "growth"
  },
  {
    question: "Development refers to?",
    options: [
      "A. Increase in size only",
      "B. The process of change and differentiation into mature form",
      "C. Excretion",
      "D. Movement"
    ],
    answer: "B",
    explanation: "Development includes growth, differentiation and maturation of the organism.",
    subtopic: "development"
  },
  {
    question: "Differentiation during development is the process by which cells?",
    options: [
      "A. All become identical",
      "B. Become specialised in structure and function",
      "C. Die immediately",
      "D. Lose their nucleus"
    ],
    answer: "B",
    explanation: "Differentiation produces specialised cell types.",
    subtopic: "development"
  },
  {
    question: "Movement as a life property includes?",
    options: [
      "A. Only walking",
      "B. Locomotion and movement of substances within the body",
      "C. Only growth",
      "D. Excretion"
    ],
    answer: "B",
    explanation: "Movement encompasses whole-body locomotion and internal transport/motion.",
    subtopic: "movement"
  },
  {
    question: "Which structure enables a sperm cell to move?",
    options: [
      "A. Cilia",
      "B. Flagellum (tail)",
      "C. Pseudopodium",
      "D. Centriole only"
    ],
    answer: "B",
    explanation: "The sperm tail (flagellum) propels it.",
    subtopic: "movement"
  },
  {
    question: "Amoeba moves using temporary projections called?",
    options: [
      "A. Flagella",
      "B. Pseudopodia (false feet)",
      "C. Cilia",
      "D. Fimbriae"
    ],
    answer: "B",
    explanation: "Pseudopodia are cytoplasmic extensions used for movement and feeding.",
    subtopic: "movement"
  },
  {
    question: "Reproduction in living cells is the process of?",
    options: [
      "A. Removing waste",
      "B. Producing new individuals of the same kind",
      "C. Growing",
      "D. Breathing"
    ],
    answer: "B",
    explanation: "Reproduction ensures continuation of the species.",
    subtopic: "reproduction"
  },
  {
    question: "Asexual reproduction involves?",
    options: [
      "A. Two parents and gametes",
      "B. One parent and no fusion of gametes",
      "C. Fertilisation",
      "D. Meiosis only"
    ],
    answer: "B",
    explanation: "Asexual reproduction produces genetically identical offspring from one parent.",
    subtopic: "reproduction"
  },
  {
    question: "Binary fission is a method of asexual reproduction in?",
    options: [
      "A. Humans",
      "B. Bacteria and some protists (e.g. Amoeba)",
      "C. Flowering plants",
      "D. Fish"
    ],
    answer: "B",
    explanation: "Unicells like bacteria and Amoeba divide by binary fission.",
    subtopic: "reproduction"
  },
  {
    question: "Sexual reproduction involves the fusion of?",
    options: [
      "A. Two somatic cells",
      "B. Two gametes (fertilisation)",
      "C. Two nuclei only",
      "D. Two spores"
    ],
    answer: "B",
    explanation: "Sexual reproduction requires gamete fusion (fertilisation).",
    subtopic: "reproduction"
  },
  {
    question: "Irritability (responsiveness) is the ability of a cell to?",
    options: [
      "A. Reproduce",
      "B. Detect and respond to stimuli",
      "C. Excrete",
      "D. Grow indefinitely"
    ],
    answer: "B",
    explanation: "Responsiveness lets organisms react to environmental changes.",
    subtopic: "movement"
  },
  {
    question: "The sum of all chemical reactions (synthesis and breakdown) in a cell is called?",
    options: [
      "A. Metabolism",
      "B. Excretion",
      "C. Locomotion",
      "D. Digestion"
    ],
    answer: "A",
    explanation: "Metabolism includes anabolism and catabolism.",
    subtopic: "nutrition"
  },
  {
    question: "Which of the following is an example of a life property shown by cells?",
    options: [
      "A. Crystallisation",
      "B. Excretion",
      "C. Evaporation",
      "D. Condensation"
    ],
    answer: "B",
    explanation: "Excretion is a characteristic life process.",
    subtopic: "excretion"
  },
  {
    question: "Energy for cellular work ultimately comes from?",
    options: [
      "A. The cell wall",
      "B. Respiration releasing ATP from food",
      "C. The nucleus",
      "D. Osmosis"
    ],
    answer: "B",
    explanation: "Respiration supplies ATP that powers cellular activities.",
    subtopic: "cellular respiration"
  },
  {
    question: "Plants obtain the energy to make food from?",
    options: [
      "A. Soil minerals",
      "B. Sunlight (during photosynthesis)",
      "C. Oxygen",
      "D. ATP directly"
    ],
    answer: "B",
    explanation: "Light energy drives photosynthesis in chloroplasts.",
    subtopic: "nutrition"
  },
  {
    question: "The process by which a cell divides to form two identical daughter cells is?",
    options: [
      "A. Fertilisation",
      "B. Cell division (mitosis)",
      "C. Differentiation",
      "D. Excretion"
    ],
    answer: "B",
    explanation: "Mitosis produces two genetically identical daughter cells for growth/repair.",
    subtopic: "growth"
  },
  {
    question: "Growth differs from movement in that growth is?",
    options: [
      "A. Reversible",
      "B. Usually permanent and irreversible",
      "C. Always rapid",
      "D. A form of excretion"
    ],
    answer: "B",
    explanation: "Growth is a permanent increase, unlike temporary movement.",
    subtopic: "growth"
  },
  {
    question: "Development of a fertilised egg into an adult involves?",
    options: [
      "A. Only cell division",
      "B. Cell division, growth and differentiation",
      "C. Only excretion",
      "D. Only movement"
    ],
    answer: "B",
    explanation: "Development integrates division, growth and specialisation.",
    subtopic: "development"
  },
  {
    question: "Which of these is NOT a function/property of living cells?",
    options: [
      "A. Nutrition",
      "B. Respiration",
      "C. Excretion and reproduction",
      "D. Photolithography"
    ],
    answer: "D",
    explanation: "Photolithography is a manufacturing process, not a life property.",
    subtopic: "reproduction"
  },
  {
    question: "Cilia are short hair-like structures used for?",
    options: [
      "A. Photosynthesis",
      "B. Movement of the cell or of fluids over it",
      "C. Storage",
      "D. Digestion"
    ],
    answer: "B",
    explanation: "Cilia beat to move cells (e.g. Paramecium) or fluids (e.g. trachea).",
    subtopic: "movement"
  },
  {
    question: "The waste product of protein breakdown that must be excreted is?",
    options: [
      "A. Glucose",
      "B. Urea (or ammonia)",
      "C. Starch",
      "D. Oxygen"
    ],
    answer: "B",
    explanation: "Nitrogenous wastes from protein catabolism (urea/ammonia) are excreted.",
    subtopic: "excretion"
  },
  {
    question: "Photosynthesis and respiration are linked because?",
    options: [
      "A. Both produce oxygen only",
      "B. Photosynthesis stores energy in glucose; respiration releases it",
      "C. Both occur in mitochondria",
      "D. Both need no light"
    ],
    answer: "B",
    explanation: "Photosynthesis builds glucose (stores energy); respiration breaks it down (releases energy).",
    subtopic: "cellular respiration"
  },
  {
    question: "An organism that cannot move from place to place may still show movement by?",
    options: [
      "A. Growing roots",
      "B. Moving substances internally (e.g. cytoplasm streaming)",
      "C. Flying",
      "D. Walking"
    ],
    answer: "B",
    explanation: "Even sessile organisms show internal movement (cyclosis, growth).",
    subtopic: "movement"
  },
  {
    question: "In asexual reproduction, offspring are generally?",
    options: [
      "A. Genetically different from the parent",
      "B. Genetically identical (clones) to the parent",
      "C. Produced by fertilisation",
      "D. Always weaker"
    ],
    answer: "B",
    explanation: "Asexual offspring inherit one parent's genes and are clones.",
    subtopic: "reproduction"
  },
  {
    question: "The purpose of respiration is to?",
    options: [
      "A. Make food",
      "B. Release energy for life processes",
      "C. Remove urea",
      "D. Cause movement only"
    ],
    answer: "B",
    explanation: "Respiration's role is energy release for metabolism.",
    subtopic: "cellular respiration"
  },
  {
    question: "Excretion is important because Accumulation of wastes would?",
    options: [
      "A. Help growth",
      "B. Be toxic to the cell",
      "C. Increase energy",
      "D. Improve movement"
    ],
    answer: "B",
    explanation: "Waste build-up is poisonous; excretion protects the cell.",
    subtopic: "excretion"
  },
  {
    question: "Which of the following is an autotroph?",
    options: [
      "A. Mushroom",
      "B. Green plant",
      "C. Dog",
      "D. Amoeba (heterotrophic)"
    ],
    answer: "B",
    explanation: "Green plants photosynthesise their own food.",
    subtopic: "nutrition"
  },
  {
    question: "Growth in animals occurs by?",
    options: [
      "A. Increase in cell number and size",
      "B. Cell wall expansion only",
      "C. Photosynthesis",
      "D. Excretion"
    ],
    answer: "A",
    explanation: "Animal growth involves more and larger cells.",
    subtopic: "growth"
  },
  {
    question: "The life property that ensures species survival is?",
    options: [
      "A. Excretion",
      "B. Reproduction",
      "C. Movement",
      "D. Irritability"
    ],
    answer: "B",
    explanation: "Reproduction perpetuates the species.",
    subtopic: "reproduction"
  },
  {
    question: "Which process converts light energy into chemical energy stored in glucose?",
    options: [
      "A. Respiration",
      "B. Photosynthesis",
      "C. Transpiration",
      "D. Excretion"
    ],
    answer: "B",
    explanation: "Photosynthesis traps light energy as chemical energy in food.",
    subtopic: "nutrition"
  },
  {
    question: "Development continues after growth and includes?",
    options: [
      "A. Only size increase",
      "B. Maturation and acquisition of adult functions",
      "C. Excretion only",
      "D. Movement only"
    ],
    answer: "B",
    explanation: "Development encompasses maturation of form and function.",
    subtopic: "development"
  },
  {
    question: "A key difference between respiration and breathing is that respiration is?",
    options: [
      "A. The physical act of inhaling",
      "B. A chemical process releasing energy in cells",
      "C. The same as coughing",
      "D. Only in plants"
    ],
    answer: "B",
    explanation: "Respiration is cellular chemistry; breathing is the physical exchange of air.",
    subtopic: "cellular respiration"
  }
];

module.exports = questions;
