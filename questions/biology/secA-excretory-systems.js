// biology — Excretory Systems & Mechanisms
const questions = [
  {
    question: "Excretion is the removal of?",
    options: [
      "A. Undigested food",
      "B. Metabolic waste products from the body",
      "C. Useful nutrients",
      "D. Water only"
    ],
    answer: "B",
    explanation: "Excretion eliminates wastes produced by metabolism (e.g. CO2, urea).",
    subtopic: "excretory systems & mechanisms"
  },
  {
    question: "The main excretory organ in humans is the?",
    options: [
      "A. Liver",
      "B. Kidney",
      "C. Stomach",
      "D. Heart"
    ],
    answer: "B",
    explanation: "Kidneys filter blood and form urine.",
    subtopic: "excretory systems & mechanisms"
  },
  {
    question: "The functional unit of the kidney is the?",
    options: [
      "A. Neuron",
      "B. Nephron",
      "C. Alveolus",
      "D. Villus"
    ],
    answer: "B",
    explanation: "Each nephron filters blood and forms urine.",
    subtopic: "excretory systems & mechanisms"
  },
  {
    question: "Urine is carried from the kidney to the bladder by the?",
    options: [
      "A. Ureter",
      "B. Urethra",
      "C. Nephron",
      "D. Artery"
    ],
    answer: "A",
    explanation: "The ureters convey urine to the urinary bladder.",
    subtopic: "excretory systems & mechanisms"
  },
  {
    question: "Urine is stored in the?",
    options: [
      "A. Kidney",
      "B. Urinary bladder",
      "C. Ureter",
      "D. Liver"
    ],
    answer: "B",
    explanation: "The bladder temporarily stores urine.",
    subtopic: "excretory systems & mechanisms"
  },
  {
    question: "Urine leaves the body through the?",
    options: [
      "A. Ureter",
      "B. Urethra",
      "C. Nephron",
      "D. Bladder wall"
    ],
    answer: "B",
    explanation: "The urethra is the final exit tube for urine.",
    subtopic: "excretory systems & mechanisms"
  },
  {
    question: "Blood enters the kidney through the?",
    options: [
      "A. Renal vein",
      "B. Renal artery",
      "C. Ureter",
      "D. Urethra"
    ],
    answer: "B",
    explanation: "The renal artery brings blood to be filtered.",
    subtopic: "excretory systems & mechanisms"
  },
  {
    question: "The glomerulus and Bowman's capsule are involved in?",
    options: [
      "A. Reabsorption only",
      "B. Ultrafiltration of blood",
      "C. Urine storage",
      "D. Breathing"
    ],
    answer: "B",
    explanation: "High pressure forces filtrate from blood into Bowman's capsule.",
    subtopic: "excretory systems & mechanisms"
  },
  {
    question: "During ultrafiltration, substances that pass into the nephron include?",
    options: [
      "A. Blood cells and proteins",
      "B. Water, glucose, salts and urea",
      "C. Only proteins",
      "D. Only blood cells"
    ],
    answer: "B",
    explanation: "Small molecules filter through; cells and large proteins stay in blood.",
    subtopic: "excretory systems & mechanisms"
  },
  {
    question: "Useful substances like glucose are returned to the blood by?",
    options: [
      "A. Filtration",
      "B. Reabsorption in the nephron",
      "C. Secretion only",
      "D. Excretion"
    ],
    answer: "B",
    explanation: "Selective reabsorption recovers glucose, salts and water.",
    subtopic: "excretory systems & mechanisms"
  },
  {
    question: "The reabsorption of water in the nephron is controlled by the hormone?",
    options: [
      "A. Insulin",
      "B. ADH (antidiuretic hormone)",
      "C. Adrenaline",
      "D. Thyroxine"
    ],
    answer: "B",
    explanation: "ADH increases water reabsorption, concentrating urine.",
    subtopic: "excretory systems & mechanisms"
  },
  {
    question: "If ADH secretion is high, the urine produced will be?",
    options: [
      "A. More dilute",
      "B. More concentrated (less volume)",
      "C. Colourless and abundant",
      "D. None"
    ],
    answer: "B",
    explanation: "More ADH means more water reabsorbed, so concentrated urine.",
    subtopic: "excretory systems & mechanisms"
  },
  {
    question: "The nitrogenous waste produced from protein breakdown in humans is mainly?",
    options: [
      "A. Ammonia",
      "B. Urea",
      "C. Uric acid only",
      "D. Glucose"
    ],
    answer: "B",
    explanation: "Mammals convert toxic ammonia to less toxic urea.",
    subtopic: "excretory systems & mechanisms"
  },
  {
    question: "The liver helps excretion by converting?",
    options: [
      "A. Glucose to starch",
      "B. Ammonia to urea",
      "C. Urea to ammonia",
      "D. Water to salt"
    ],
    answer: "B",
    explanation: "The liver's ornithine cycle makes urea from ammonia.",
    subtopic: "excretory systems & mechanisms"
  },
  {
    question: "Carbon dioxide is excreted mainly by the?",
    options: [
      "A. Kidneys",
      "B. Lungs",
      "C. Skin only",
      "D. Liver"
    ],
    answer: "B",
    explanation: "The lungs exhale CO2 from respiration.",
    subtopic: "excretory systems & mechanisms"
  },
  {
    question: "The skin excretes wastes through?",
    options: [
      "A. Sweat glands",
      "B. Hair follicles only",
      "C. Nails",
      "D. Oil glands only"
    ],
    answer: "A",
    explanation: "Sweat glands remove water, salts and some urea.",
    subtopic: "excretory systems & mechanisms"
  },
  {
    question: "Sweat mainly contains?",
    options: [
      "A. Only protein",
      "B. Water, salt and small amounts of urea",
      "C. Only urea",
      "D. Glucose only"
    ],
    answer: "B",
    explanation: "Sweat is mostly water with salts and trace urea.",
    subtopic: "excretory systems & mechanisms"
  },
  {
    question: "The lungs are part of excretion because they remove?",
    options: [
      "A. Urea",
      "B. Carbon dioxide",
      "C. Faeces",
      "D. Salt"
    ],
    answer: "B",
    explanation: "CO2, a metabolic waste, is exhaled by lungs.",
    subtopic: "excretory systems & mechanisms"
  },
  {
    question: "Which of the following is NOT a nitrogenous waste?",
    options: [
      "A. Urea",
      "B. Uric acid",
      "C. Ammonia",
      "D. Carbon dioxide"
    ],
    answer: "D",
    explanation: "CO2 is a gaseous waste, not nitrogenous.",
    subtopic: "excretory systems & mechanisms"
  },
  {
    question: "Birds and reptiles excrete nitrogenous waste mainly as?",
    options: [
      "A. Urea",
      "B. Uric acid",
      "C. Ammonia",
      "D. Glucose"
    ],
    answer: "B",
    explanation: "Uric acid is pasty and conserves water in dry environments.",
    subtopic: "excretory systems & mechanisms"
  },
  {
    question: "Ammonia is excreted by?",
    options: [
      "A. Mammals",
      "B. Many aquatic animals (fish)",
      "C. Birds",
      "D. Reptiles"
    ],
    answer: "B",
    explanation: "Fish excrete ammonia directly into abundant water.",
    subtopic: "excretory systems & mechanisms"
  },
  {
    question: "Ammonia is?",
    options: [
      "A. Less toxic than urea",
      "B. Highly toxic and needs much water to dilute",
      "C. Solid",
      "D. Non-toxic"
    ],
    answer: "B",
    explanation: "Ammonia is very toxic, so aquatic animals flush it with water.",
    subtopic: "excretory systems & mechanisms"
  },
  {
    question: "The kidneys help regulate the?",
    options: [
      "A. Body temperature only",
      "B. Water and salt balance (osmoregulation)",
      "C. Heartbeat",
      "D. Breathing rate"
    ],
    answer: "B",
    explanation: "Kidneys maintain water and ion balance of body fluids.",
    subtopic: "excretory systems & mechanisms"
  },
  {
    question: "Osmoregulation is the control of?",
    options: [
      "A. Blood pressure only",
      "B. Water and solute balance in the body",
      "C. Body temperature",
      "D. Heart rate"
    ],
    answer: "B",
    explanation: "Osmoregulation keeps internal water/salt concentrations stable.",
    subtopic: "excretory systems & mechanisms"
  },
  {
    question: "When the body is dehydrated, the kidney produces?",
    options: [
      "A. More dilute urine",
      "B. Less urine, more concentrated",
      "C. No change",
      "D. Clear watery urine"
    ],
    answer: "B",
    explanation: "Dehydration triggers ADH, conserving water as concentrated urine.",
    subtopic: "excretory systems & mechanisms"
  },
  {
    question: "When a person drinks a lot of water, the kidney produces?",
    options: [
      "A. Concentrated urine",
      "B. Large volume of dilute urine",
      "C. No urine",
      "D. Solid urine"
    ],
    answer: "B",
    explanation: "Excess water suppresses ADH, giving dilute, abundant urine.",
    subtopic: "excretory systems & mechanisms"
  },
  {
    question: "The Bowman's capsule surrounds the?",
    options: [
      "A. Loop of Henle",
      "B. Glomerulus",
      "C. Ureter",
      "D. Bladder"
    ],
    answer: "B",
    explanation: "Bowman's capsule encloses the glomerular capillary tuft.",
    subtopic: "excretory systems & mechanisms"
  },
  {
    question: "The loop of Henle is important for?",
    options: [
      "A. Filtering blood cells",
      "B. Concentrating urine by reabsorbing water and salts",
      "C. Producing urea",
      "D. Storing urine"
    ],
    answer: "B",
    explanation: "The loop establishes a gradient enabling water reabsorption.",
    subtopic: "excretory systems & mechanisms"
  },
  {
    question: "The tubule of the nephron leads to the?",
    options: [
      "A. Glomerulus",
      "B. Collecting duct",
      "C. Ureter directly",
      "D. Bladder"
    ],
    answer: "B",
    explanation: "Several nephrons drain into a collecting duct.",
    subtopic: "excretory systems & mechanisms"
  },
  {
    question: "The collecting ducts empty urine into the?",
    options: [
      "A. Renal pelvis",
      "B. Ureter",
      "C. Bladder directly",
      "D. Kidney cortex"
    ],
    answer: "A",
    explanation: "Collecting ducts deliver urine to the renal pelvis, then ureter.",
    subtopic: "excretory systems & mechanisms"
  },
  {
    question: "The renal pelvis is a funnel that collects urine and leads to the?",
    options: [
      "A. Ureter",
      "B. Nephron",
      "C. Glomerulus",
      "D. Capillary"
    ],
    answer: "A",
    explanation: "The renal pelvis drains into the ureter.",
    subtopic: "excretory systems & mechanisms"
  },
  {
    question: "Filtration in the kidney occurs because blood in the glomerulus is under?",
    options: [
      "A. Low pressure",
      "B. High pressure",
      "C. No pressure",
      "D. Negative pressure"
    ],
    answer: "B",
    explanation: "High glomerular pressure drives ultrafiltration.",
    subtopic: "excretory systems & mechanisms"
  },
  {
    question: "Which substances are normally NOT found in healthy urine?",
    options: [
      "A. Urea and salts",
      "B. Glucose and blood proteins",
      "C. Water",
      "D. Uric acid"
    ],
    answer: "B",
    explanation: "Glucose and proteins are reabsorbed; their presence indicates disease.",
    subtopic: "excretory systems & mechanisms"
  },
  {
    question: "The presence of glucose in urine may indicate?",
    options: [
      "A. Healthy kidney",
      "B. Diabetes mellitus",
      "C. Dehydration only",
      "D. Too much water"
    ],
    answer: "B",
    explanation: "Spilled glucose suggests high blood sugar (diabetes).",
    subtopic: "excretory systems & mechanisms"
  },
  {
    question: "The excretory product of excess protein metabolism that is harmful if accumulated is?",
    options: [
      "A. Glucose",
      "B. Urea",
      "C. Starch",
      "D. Fat"
    ],
    answer: "B",
    explanation: "Urea must be removed; accumulation is toxic.",
    subtopic: "excretory systems & mechanisms"
  },
  {
    question: "In plants, waste products may be stored in?",
    options: [
      "A. Only the roots",
      "B. Leaves, bark, fruits or excreted as resin/gum",
      "C. The nucleus",
      "D. Mitochondria"
    ],
    answer: "B",
    explanation: "Plants deposit wastes in leaves (shed), bark, or as gums/resins.",
    subtopic: "excretory systems & mechanisms"
  },
  {
    question: "Plants excrete oxygen as a by-product of?",
    options: [
      "A. Respiration",
      "B. Photosynthesis",
      "C. Transpiration",
      "D. Digestion"
    ],
    answer: "B",
    explanation: "Photosynthesis releases O2, some of which is expelled.",
    subtopic: "excretory systems & mechanisms"
  },
  {
    question: "The Malpighian tubules are the excretory organs of?",
    options: [
      "A. Mammals",
      "B. Insects",
      "C. Fish",
      "D. Frogs"
    ],
    answer: "B",
    explanation: "Insects use Malpighian tubules to remove wastes into the gut.",
    subtopic: "excretory systems & mechanisms"
  },
  {
    question: "In insects, nitrogenous waste is excreted as?",
    options: [
      "A. Urea",
      "B. Uric acid (dry)",
      "C. Ammonia",
      "D. Glucose"
    ],
    answer: "B",
    explanation: "Uric acid conserves water in terrestrial insects.",
    subtopic: "excretory systems & mechanisms"
  },
  {
    question: "The advantage of excreting uric acid for desert animals is?",
    options: [
      "A. It needs much water",
      "B. It conserves water (semi-solid)",
      "C. It is toxic",
      "D. It is liquid"
    ],
    answer: "B",
    explanation: "Uric acid needs little water to excrete, aiding desert survival.",
    subtopic: "excretory systems & mechanisms"
  },
  {
    question: "The urinary system includes all EXCEPT?",
    options: [
      "A. Kidney",
      "B. Bladder",
      "C. Ureter",
      "D. Trachea"
    ],
    answer: "D",
    explanation: "The trachea is part of the respiratory system.",
    subtopic: "excretory systems & mechanisms"
  },
  {
    question: "Dialysis is a medical procedure that substitutes for failing?",
    options: [
      "A. Liver",
      "B. Kidneys",
      "C. Lungs",
      "D. Heart"
    ],
    answer: "B",
    explanation: "Dialysis artificially filters blood when kidneys fail.",
    subtopic: "excretory systems & mechanisms"
  },
  {
    question: "The sphincter muscle at the bladder outlet controls?",
    options: [
      "A. Filtration",
      "B. Release of urine",
      "C. Reabsorption",
      "D. Breathing"
    ],
    answer: "B",
    explanation: "Sphincters retain and then release urine voluntarily.",
    subtopic: "excretory systems & mechanisms"
  },
  {
    question: "Which of these is a function of the kidney?",
    options: [
      "A. Pumping blood",
      "B. Filtering wastes and balancing water/ions",
      "C. Digesting food",
      "D. Producing sound"
    ],
    answer: "B",
    explanation: "Kidneys filter blood, excrete wastes, and regulate balance.",
    subtopic: "excretory systems & mechanisms"
  },
  {
    question: "The cortex and medulla are regions of the?",
    options: [
      "A. Liver",
      "B. Kidney",
      "C. Lung",
      "D. Brain"
    ],
    answer: "B",
    explanation: "The kidney has an outer cortex and inner medulla.",
    subtopic: "excretory systems & mechanisms"
  },
  {
    question: "Reabsorption of glucose and amino acids occurs mainly in the?",
    options: [
      "A. Collecting duct",
      "B. Proximal convoluted tubule",
      "C. Ureter",
      "D. Bladder"
    ],
    answer: "B",
    explanation: "The proximal tubule reabsorbs most useful solutes.",
    subtopic: "excretory systems & mechanisms"
  },
  {
    question: "The process that returns needed substances from the nephron to the blood is?",
    options: [
      "A. Filtration",
      "B. Selective reabsorption",
      "C. Secretion only",
      "D. Excretion"
    ],
    answer: "B",
    explanation: "Selective reabsorption recovers water, glucose and salts.",
    subtopic: "excretory systems & mechanisms"
  },
  {
    question: "Tubular secretion adds certain substances (e.g. excess ions, drugs) from blood into the?",
    options: [
      "A. Glomerulus",
      "B. Nephron tubule",
      "C. Ureter",
      "D. Bladder"
    ],
    answer: "B",
    explanation: "Secretion moves extra wastes from blood into the tubule for excretion.",
    subtopic: "excretory systems & mechanisms"
  },
  {
    question: "The volume of urine produced depends largely on?",
    options: [
      "A. Amount of water drunk and ADH level",
      "B. Heart size",
      "C. Lung capacity",
      "D. Hair growth"
    ],
    answer: "A",
    explanation: "Water intake and ADH jointly set urine volume/concentration.",
    subtopic: "excretory systems & mechanisms"
  },
  {
    question: "Excretion differs from egestion in that excretion removes?",
    options: [
      "A. Undigested food",
      "B. Metabolic wastes produced by the body",
      "C. Faeces only",
      "D. Stored fat"
    ],
    answer: "B",
    explanation: "Egestion removes undigested food; excretion removes metabolic wastes.",
    subtopic: "excretory systems & mechanisms"
  },
  {
    question: "Faeces in the rectum are removed by?",
    options: [
      "A. Excretion",
      "B. Egestion (defaecation)",
      "C. Filtration",
      "D. Reabsorption"
    ],
    answer: "B",
    explanation: "Faeces are undigested matter, removed by egestion, not excretion.",
    subtopic: "excretory systems & mechanisms"
  },
  {
    question: "The hormone that reduces water loss and concentrates urine is?",
    options: [
      "A. Insulin",
      "B. ADH (vasopressin)",
      "C. Oestrogen",
      "D. Adrenaline"
    ],
    answer: "B",
    explanation: "ADH acts on the collecting duct to reabsorb water.",
    subtopic: "excretory systems & mechanisms"
  },
  {
    question: "Which of the following helps the body get rid of excess salt?",
    options: [
      "A. Kidneys and sweat glands",
      "B. Lungs only",
      "C. Liver only",
      "D. Bones"
    ],
    answer: "A",
    explanation: "Kidneys excrete salts in urine; sweat glands lose salt in sweat.",
    subtopic: "excretory systems & mechanisms"
  },
  {
    question: "A healthy person's urine is normally?",
    options: [
      "A. Yellow and clear",
      "B. Thick and black",
      "C. Full of blood",
      "D. Sweet-smelling from sugar"
    ],
    answer: "A",
    explanation: "Normal urine is pale yellow and clear due to urochrome.",
    subtopic: "excretory systems & mechanisms"
  },
  {
    question: "The kidneys receive a large blood supply so they can?",
    options: [
      "A. Store blood",
      "B. Continuously filter waste from the blood",
      "C. Produce oxygen",
      "D. Digest protein"
    ],
    answer: "B",
    explanation: "High blood flow lets kidneys filter wastes constantly.",
    subtopic: "excretory systems & mechanisms"
  },
  {
    question: "Damage to the kidneys can lead to?",
    options: [
      "A. Accumulation of wastes in the blood",
      "B. Stronger bones",
      "C. More oxygen",
      "D. Less thirst"
    ],
    answer: "A",
    explanation: "Kidney failure causes toxic build-up (uraemia).",
    subtopic: "excretory systems & mechanisms"
  },
  {
    question: "The main nitrogenous waste in human urine is?",
    options: [
      "A. Ammonia",
      "B. Urea",
      "C. Uric acid",
      "D. Protein"
    ],
    answer: "B",
    explanation: "Urea is the principal nitrogenous excretory product in humans.",
    subtopic: "excretory systems & mechanisms"
  }
];

module.exports = questions;
