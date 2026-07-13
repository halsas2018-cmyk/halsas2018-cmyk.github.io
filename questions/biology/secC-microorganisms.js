// biology — Microorganisms: Man and His Health
const questions = [
  {
    question: "Which of the following is a unicellular fungus?",
    options: [
      "A. Yeast",
      "B. Mushroom",
      "C. Bread mould",
      "D. Rhizopus"
    ],
    answer: "A",
    explanation: "Yeast is a unicellular fungus; mushrooms and most moulds are multicellular fungi.",
    subtopic: "Types of Microorganisms"
  },
  {
    question: "Bacteria that are spherical in shape are called?",
    options: [
      "A. Bacilli",
      "B. Spirilla",
      "C. Cocci",
      "D. Vibrios"
    ],
    answer: "C",
    explanation: "Cocci are spherical bacteria; bacilli are rod-shaped and spirilla are spiral.",
    subtopic: "Types of Microorganisms"
  },
  {
    question: "Viruses are described as acellular because they?",
    options: [
      "A. have a nucleus",
      "B. lack cellular structure",
      "C. are multicellular",
      "D. photosynthesize"
    ],
    answer: "B",
    explanation: "Viruses are non-cellular particles consisting only of genetic material and a protein coat.",
    subtopic: "Types of Microorganisms"
  },
  {
    question: "The genetic material of a bacterium is found in the?",
    options: [
      "A. nucleus",
      "B. nucleoid",
      "C. mitochondrion",
      "D. chloroplast"
    ],
    answer: "B",
    explanation: "Bacteria lack a true nucleus; their DNA lies in a region called the nucleoid.",
    subtopic: "Types of Microorganisms"
  },
  {
    question: "Which microorganism causes malaria in humans?",
    options: [
      "A. Plasmodium",
      "B. Trypanosoma",
      "C. Entamoeba",
      "D. Giardia"
    ],
    answer: "A",
    explanation: "Malaria is caused by the protozoan Plasmodium, transmitted by female Anopheles mosquitoes.",
    subtopic: "Disease-causing Microorganisms"
  },
  {
    question: "A bacterium with a whip-like structure for movement is said to possess a?",
    options: [
      "A. pilus",
      "B. flagellum",
      "C. capsule",
      "D. plasmid"
    ],
    answer: "B",
    explanation: "Flagella are whip-like appendages used by bacteria for locomotion.",
    subtopic: "Types of Microorganisms"
  },
  {
    question: "Which of these is NOT a characteristic of viruses?",
    options: [
      "A. They have protein coats",
      "B. They can reproduce independently",
      "C. They are smaller than bacteria",
      "D. They contain genetic material"
    ],
    answer: "B",
    explanation: "Viruses cannot reproduce on their own; they require a host cell's machinery.",
    subtopic: "Types of Microorganisms"
  },
  {
    question: "Fungi mainly obtain their food by?",
    options: [
      "A. photosynthesis",
      "B. saprophytism",
      "C. chemosynthesis",
      "D. predation"
    ],
    answer: "B",
    explanation: "Most fungi are saprophytes, absorbing nutrients from dead organic matter.",
    subtopic: "Types of Microorganisms"
  },
  {
    question: "The thread-like structures that make up the body of a mould are called?",
    options: [
      "A. hyphae",
      "B. mycelium",
      "C. spores",
      "D. rhizoids"
    ],
    answer: "A",
    explanation: "Hyphae are the individual thread-like filaments; a network of them is the mycelium.",
    subtopic: "Types of Microorganisms"
  },
  {
    question: "Which microorganism is the source of the antibiotic penicillin?",
    options: [
      "A. Yeast",
      "B. Penicillium",
      "C. Lactobacillus",
      "D. Rhizobium"
    ],
    answer: "B",
    explanation: "The fungus Penicillium produces penicillin, the first widely used antibiotic.",
    subtopic: "Useful Microorganisms"
  },
  {
    question: "The bacterium responsible for tuberculosis is?",
    options: [
      "A. Mycobacterium tuberculosis",
      "B. Vibrio cholerae",
      "C. Salmonella typhi",
      "D. Streptococcus pneumoniae"
    ],
    answer: "A",
    explanation: "Tuberculosis is caused by Mycobacterium tuberculosis, usually affecting the lungs.",
    subtopic: "Disease-causing Microorganisms"
  },
  {
    question: "Cholera is caused by the bacterium?",
    options: [
      "A. Vibrio cholerae",
      "B. Escherichia coli",
      "C. Shigella",
      "D. Salmonella"
    ],
    answer: "A",
    explanation: "Vibrio cholerae causes cholera, a severe diarrhoeal disease spread through contaminated water.",
    subtopic: "Disease-causing Microorganisms"
  },
  {
    question: "Which of the following diseases is caused by a virus?",
    options: [
      "A. Typhoid",
      "B. Measles",
      "C. Malaria",
      "D. Cholera"
    ],
    answer: "B",
    explanation: "Measles is a viral disease; typhoid, cholera and malaria are caused by bacteria/protozoa.",
    subtopic: "Disease-causing Microorganisms"
  },
  {
    question: "AIDS is caused by?",
    options: [
      "A. bacteria",
      "B. Human Immunodeficiency Virus",
      "C. fungi",
      "D. protozoa"
    ],
    answer: "B",
    explanation: "HIV attacks the immune system and leads to AIDS.",
    subtopic: "Disease-causing Microorganisms"
  },
  {
    question: "The protozoan that causes sleeping sickness is?",
    options: [
      "A. Plasmodium",
      "B. Trypanosoma",
      "C. Entamoeba",
      "D. Leishmania"
    ],
    answer: "B",
    explanation: "Trypanosoma brucei causes African sleeping sickness, transmitted by tsetse flies.",
    subtopic: "Disease-causing Microorganisms"
  },
  {
    question: "Ringworm is caused by?",
    options: [
      "A. bacteria",
      "B. fungi",
      "C. viruses",
      "D. protozoa"
    ],
    answer: "B",
    explanation: "Ringworm is a fungal skin infection caused by dermatophytes.",
    subtopic: "Disease-causing Microorganisms"
  },
  {
    question: "Which microorganism causes typhoid fever?",
    options: [
      "A. Salmonella typhi",
      "B. Vibrio cholerae",
      "C. Mycobacterium",
      "D. Streptococcus"
    ],
    answer: "A",
    explanation: "Salmonella typhi is the bacterium responsible for typhoid fever.",
    subtopic: "Disease-causing Microorganisms"
  },
  {
    question: "Poliomyelitis is caused by a?",
    options: [
      "A. bacterium",
      "B. virus",
      "C. fungus",
      "D. protozoan"
    ],
    answer: "B",
    explanation: "Polio is caused by the poliovirus and can lead to paralysis.",
    subtopic: "Disease-causing Microorganisms"
  },
  {
    question: "The fungal infection of the mouth caused by Candida is called?",
    options: [
      "A. ringworm",
      "B. thrush",
      "C. athlete's foot",
      "D. rust"
    ],
    answer: "B",
    explanation: "Candida albicans causes oral thrush, a fungal infection of the mouth.",
    subtopic: "Disease-causing Microorganisms"
  },
  {
    question: "Which vector transmits the malaria parasite to humans?",
    options: [
      "A. Housefly",
      "B. Female Anopheles mosquito",
      "C. Tsetse fly",
      "D. Tick"
    ],
    answer: "B",
    explanation: "Only the female Anopheles mosquito transmits Plasmodium during blood feeding.",
    subtopic: "Disease-causing Microorganisms"
  },
  {
    question: "The body's first line of defence against pathogens includes?",
    options: [
      "A. antibodies",
      "B. skin and mucous membranes",
      "C. lymphocytes",
      "D. macrophages"
    ],
    answer: "B",
    explanation: "Intact skin and mucous membranes form a physical barrier, the first line of defence.",
    subtopic: "Immunity and Defence"
  },
  {
    question: "Antibodies are produced by?",
    options: [
      "A. red blood cells",
      "B. plasma cells (lymphocytes)",
      "C. platelets",
      "D. neutrophils"
    ],
    answer: "B",
    explanation: "Plasma cells, derived from B lymphocytes, secrete antibodies.",
    subtopic: "Immunity and Defence"
  },
  {
    question: "Immunity acquired after recovering from an infection is best described as?",
    options: [
      "A. innate immunity",
      "B. natural active immunity",
      "C. passive immunity",
      "D. artificial immunity"
    ],
    answer: "B",
    explanation: "Natural active immunity develops when the body makes its own antibodies after infection.",
    subtopic: "Immunity and Defence"
  },
  {
    question: "Vaccination confers?",
    options: [
      "A. natural active immunity",
      "B. artificial active immunity",
      "C. passive immunity",
      "D. innate immunity"
    ],
    answer: "B",
    explanation: "Vaccines stimulate the body to produce antibodies artificially, giving active immunity.",
    subtopic: "Immunity and Defence"
  },
  {
    question: "Passive immunity is naturally transferred from mother to child through?",
    options: [
      "A. the air",
      "B. placenta and breast milk",
      "C. contaminated water",
      "D. food"
    ],
    answer: "B",
    explanation: "Antibodies cross the placenta and pass in breast milk, giving the baby temporary protection.",
    subtopic: "Immunity and Defence"
  },
  {
    question: "White blood cells that engulf and digest pathogens are called?",
    options: [
      "A. phagocytes",
      "B. erythrocytes",
      "C. thrombocytes",
      "D. fibroblasts"
    ],
    answer: "A",
    explanation: "Phagocytes such as neutrophils and macrophages engulf pathogens by phagocytosis.",
    subtopic: "Immunity and Defence"
  },
  {
    question: "Antigens are?",
    options: [
      "A. proteins that fight infection",
      "B. foreign substances that trigger an immune response",
      "C. a type of white blood cell",
      "D. digestive enzymes"
    ],
    answer: "B",
    explanation: "Antigens are molecules (often on pathogens) that stimulate the immune system to respond.",
    subtopic: "Immunity and Defence"
  },
  {
    question: "Which cells provide immunological memory?",
    options: [
      "A. memory lymphocytes",
      "B. red blood cells",
      "C. platelets",
      "D. neutrophils"
    ],
    answer: "A",
    explanation: "Memory lymphocytes persist after infection and enable a faster response on re-exposure.",
    subtopic: "Immunity and Defence"
  },
  {
    question: "In an autoimmune disease the immune system?",
    options: [
      "A. ignores pathogens",
      "B. attacks the body's own cells",
      "C. is absent",
      "D. only makes antibodies"
    ],
    answer: "B",
    explanation: "Autoimmune diseases occur when the immune system mistakenly targets self tissues.",
    subtopic: "Immunity and Defence"
  },
  {
    question: "Immunization is most effective at preventing?",
    options: [
      "A. all diseases",
      "B. infectious diseases",
      "C. genetic disorders",
      "D. cancers"
    ],
    answer: "B",
    explanation: "Vaccines protect against specific infectious agents, not genetic or non-infectious conditions.",
    subtopic: "Immunity and Defence"
  },
  {
    question: "Pasteurization of milk is done to?",
    options: [
      "A. kill all microorganisms",
      "B. reduce harmful microbes",
      "C. sterilize surgical tools",
      "D. preserve DNA"
    ],
    answer: "B",
    explanation: "Pasteurization heats liquids to kill most disease-causing organisms without sterilizing.",
    subtopic: "Prevention and Control"
  },
  {
    question: "Which process kills all microorganisms including bacterial spores?",
    options: [
      "A. Pasteurization",
      "B. Sterilization",
      "C. Refrigeration",
      "D. Drying"
    ],
    answer: "B",
    explanation: "Sterilization (e.g. autoclaving) destroys all microbial life, including resistant spores.",
    subtopic: "Prevention and Control"
  },
  {
    question: "Antibiotics are effective against?",
    options: [
      "A. viruses",
      "B. bacteria",
      "C. both viruses and bacteria",
      "D. fungi only"
    ],
    answer: "B",
    explanation: "Antibiotics target bacteria; they do not work against viral infections.",
    subtopic: "Prevention and Control"
  },
  {
    question: "Hand washing helps to prevent the spread of?",
    options: [
      "A. only bacteria",
      "B. pathogens in general",
      "C. only viruses",
      "D. no microorganisms"
    ],
    answer: "B",
    explanation: "Washing hands removes a wide range of transient pathogens from the skin.",
    subtopic: "Prevention and Control"
  },
  {
    question: "Quarantine of infected persons is used to?",
    options: [
      "A. treat the illness directly",
      "B. prevent spread to others",
      "C. vaccinate them",
      "D. sterilize equipment"
    ],
    answer: "B",
    explanation: "Quarantine separates and restricts the movement of exposed individuals to limit transmission.",
    subtopic: "Prevention and Control"
  },
  {
    question: "Which of the following is a method of food preservation?",
    options: [
      "A. fermentation",
      "B. canning",
      "C. freezing",
      "D. all of the above"
    ],
    answer: "D",
    explanation: "Fermentation, canning and freezing all inhibit microbial growth and preserve food.",
    subtopic: "Prevention and Control"
  },
  {
    question: "Disinfectants are applied to?",
    options: [
      "A. living tissues",
      "B. non-living surfaces",
      "C. food directly",
      "D. blood"
    ],
    answer: "B",
    explanation: "Disinfectants are too harsh for tissues and are used on surfaces and instruments.",
    subtopic: "Prevention and Control"
  },
  {
    question: "Antiseptics are chemicals applied to?",
    options: [
      "A. surfaces only",
      "B. living tissues",
      "C. the air",
      "D. drinking water"
    ],
    answer: "B",
    explanation: "Antiseptics are safe enough to use on skin and living tissue to reduce microbes.",
    subtopic: "Prevention and Control"
  },
  {
    question: "Boiling water for several minutes effectively kills?",
    options: [
      "A. bacterial spores",
      "B. most vegetative bacteria and many pathogens",
      "C. only viruses",
      "D. only fungi"
    ],
    answer: "B",
    explanation: "Boiling destroys vegetative cells and many pathogens, though some spores survive.",
    subtopic: "Prevention and Control"
  },
  {
    question: "Sleeping under insecticide-treated nets mainly prevents?",
    options: [
      "A. cholera",
      "B. malaria",
      "C. tuberculosis",
      "D. typhoid"
    ],
    answer: "B",
    explanation: "Nets protect against Anopheles mosquito bites, the vector of malaria.",
    subtopic: "Prevention and Control"
  },
  {
    question: "Yeast makes bread dough rise because it produces?",
    options: [
      "A. oxygen",
      "B. carbon dioxide",
      "C. nitrogen",
      "D. alcohol only"
    ],
    answer: "B",
    explanation: "Fermentation by yeast releases CO2 that forms bubbles, leavening the dough.",
    subtopic: "Useful Microorganisms"
  },
  {
    question: "Which bacterium converts atmospheric nitrogen into forms plants can use?",
    options: [
      "A. Rhizobium",
      "B. E. coli",
      "C. Streptococcus",
      "D. Lactobacillus"
    ],
    answer: "A",
    explanation: "Rhizobium lives in root nodules of legumes and fixes atmospheric nitrogen.",
    subtopic: "Useful Microorganisms"
  },
  {
    question: "Lactobacillus is used commercially in the production of?",
    options: [
      "A. bread",
      "B. yoghurt",
      "C. penicillin",
      "D. vinegar"
    ],
    answer: "B",
    explanation: "Lactobacillus ferments milk sugar into lactic acid, producing yoghurt.",
    subtopic: "Useful Microorganisms"
  },
  {
    question: "Decomposer microorganisms return nutrients to the soil mainly as?",
    options: [
      "A. mineral salts",
      "B. proteins",
      "C. fats",
      "D. vitamins"
    ],
    answer: "A",
    explanation: "Saprophytes break organic matter down into inorganic mineral nutrients plants can absorb.",
    subtopic: "Useful Microorganisms"
  },
  {
    question: "Which microorganism is used to make bread rise?",
    options: [
      "A. bacteria",
      "B. yeast",
      "C. mould",
      "D. virus"
    ],
    answer: "B",
    explanation: "Yeast fermentation produces the gas that leavens bread.",
    subtopic: "Useful Microorganisms"
  },
  {
    question: "Biogas (methane) production relies on?",
    options: [
      "A. aerobic bacteria",
      "B. methanogenic archaea/bacteria",
      "C. viruses",
      "D. algae"
    ],
    answer: "B",
    explanation: "Methanogens in anaerobic digesters convert organic matter into methane gas.",
    subtopic: "Useful Microorganisms"
  },
  {
    question: "Vinegar is produced from ethanol by the bacterium?",
    options: [
      "A. Acetobacter",
      "B. Yeast",
      "C. Rhizobium",
      "D. Penicillium"
    ],
    answer: "A",
    explanation: "Acetobacter oxidizes ethanol to acetic acid, the main component of vinegar.",
    subtopic: "Useful Microorganisms"
  },
  {
    question: "Nitrogen-fixing bacteria live in root nodules of?",
    options: [
      "A. maize",
      "B. legumes",
      "C. rice",
      "D. wheat"
    ],
    answer: "B",
    explanation: "Legumes such as beans and peas form nodules harbouring nitrogen-fixing bacteria.",
    subtopic: "Useful Microorganisms"
  },
  {
    question: "In soy sauce production, the initial fermentation uses?",
    options: [
      "A. bacteria only",
      "B. moulds such as Aspergillus",
      "C. viruses",
      "D. yeast only"
    ],
    answer: "B",
    explanation: "Aspergillus moulds break down soy proteins and starch at the start of fermentation.",
    subtopic: "Useful Microorganisms"
  },
  {
    question: "Penicillin was discovered by?",
    options: [
      "A. Louis Pasteur",
      "B. Alexander Fleming",
      "C. Robert Koch",
      "D. Edward Jenner"
    ],
    answer: "B",
    explanation: "Alexander Fleming observed penicillin's antibacterial effect in 1928.",
    subtopic: "Useful Microorganisms"
  }
];

module.exports = questions;
