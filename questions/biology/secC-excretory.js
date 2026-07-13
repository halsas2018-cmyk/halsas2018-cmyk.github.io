// biology — Excretory System (Sec C)
const questions = [
  {
    question: "The removal of metabolic waste products from the body is called?",
    options: [
      "A. Egestion",
      "B. Excretion",
      "C. Secretion",
      "D. Defaecation"
    ],
    answer: "B",
    explanation: "Excretion is the removal of toxic metabolic wastes produced inside the body, whereas egestion is the removal of undigested food.",
    subtopic: "Excretion"
  },
  {
    question: "Which of the following is an organ of excretion in mammals?",
    options: [
      "A. Stomach",
      "B. Kidney",
      "C. Pancreas",
      "D. Gall bladder"
    ],
    answer: "B",
    explanation: "The kidney is the main excretory organ, removing nitrogenous wastes such as urea from the blood as urine.",
    subtopic: "Excretion"
  },
  {
    question: "The major nitrogenous waste excreted by mammals is?",
    options: [
      "A. Ammonia",
      "B. Uric acid",
      "C. Urea",
      "D. Creatinine"
    ],
    answer: "C",
    explanation: "Mammals are ureotelic and excrete most nitrogenous waste as urea, which is less toxic than ammonia and soluble in water.",
    subtopic: "Excretion"
  },
  {
    question: "Excretion differs from egestion because excretion involves the removal of?",
    options: [
      "A. Undigested food",
      "B. Indigestible residues",
      "C. Metabolic wastes",
      "D. Food fibres"
    ],
    answer: "C",
    explanation: "Egestion removes undigested material from the alimentary canal, while excretion removes wastes produced by metabolism.",
    subtopic: "Excretion"
  },
  {
    question: "Which of the following is NOT a major excretory organ in humans?",
    options: [
      "A. Skin",
      "B. Lungs",
      "C. Liver",
      "D. Spleen"
    ],
    answer: "D",
    explanation: "The spleen is part of the lymphatic/immune system and is not regarded as an excretory organ; skin, lungs and liver all help excrete wastes.",
    subtopic: "Excretion"
  },
  {
    question: "The outer region of the mammalian kidney is called the?",
    options: [
      "A. Medulla",
      "B. Cortex",
      "C. Pelvis",
      "D. Hilum"
    ],
    answer: "B",
    explanation: "The cortex is the outer layer of the kidney; the medulla is the inner region and the pelvis collects urine.",
    subtopic: "Excretion"
  },
  {
    question: "The funnel-shaped structure that collects urine in the kidney is the?",
    options: [
      "A. Cortex",
      "B. Medulla",
      "C. Pelvis",
      "D. Capsule"
    ],
    answer: "C",
    explanation: "The renal pelvis is the expanded upper end of the ureter that collects urine from the collecting ducts.",
    subtopic: "Excretion"
  },
  {
    question: "Urine is conveyed from the kidney to the urinary bladder by the?",
    options: [
      "A. Ureter",
      "B. Urethra",
      "C. Renal vein",
      "D. Renal artery"
    ],
    answer: "A",
    explanation: "The ureter carries urine from each kidney to the urinary bladder; the urethra carries it out of the body.",
    subtopic: "Excretion"
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
    explanation: "The nephron is the microscopic structural and functional unit of the kidney where urine is formed.",
    subtopic: "Excretion"
  },
  {
    question: "The cup-shaped structure at the start of the nephron is the?",
    options: [
      "A. Loop of Henle",
      "B. Bowman's capsule",
      "C. Collecting duct",
      "D. Distal tubule"
    ],
    answer: "B",
    explanation: "Bowman's capsule surrounds the glomerulus and receives the filtrate during ultrafiltration.",
    subtopic: "Excretion"
  },
  {
    question: "The network of capillaries enclosed by Bowman's capsule is the?",
    options: [
      "A. Glomerulus",
      "B. Vasa recta",
      "C. Pulmonary plexus",
      "D. Portal vein"
    ],
    answer: "A",
    explanation: "The glomerulus is the tuft of capillaries inside Bowman's capsule where ultrafiltration occurs.",
    subtopic: "Excretion"
  },
  {
    question: "During ultrafiltration in the glomerulus, which substances pass into Bowman's capsule?",
    options: [
      "A. Blood cells and proteins",
      "B. Water, glucose and salts",
      "C. Only urea",
      "D. Only proteins"
    ],
    answer: "B",
    explanation: "Small molecules such as water, glucose, amino acids, salts and urea are filtered; blood cells and large proteins remain in the blood.",
    subtopic: "Excretion"
  },
  {
    question: "Blood cells do not normally appear in the glomerular filtrate because they are?",
    options: [
      "A. Too small",
      "B. Too large to pass the filter",
      "C. Reabsorbed actively",
      "D. Destroyed in the capsule"
    ],
    answer: "B",
    explanation: "The filtration barrier blocks large components such as red blood cells and plasma proteins from entering the filtrate.",
    subtopic: "Excretion"
  },
  {
    question: "The process by which useful substances are returned to the blood from the nephron tubule is?",
    options: [
      "A. Ultrafiltration",
      "B. Reabsorption",
      "C. Secretion",
      "D. Osmosis only"
    ],
    answer: "B",
    explanation: "Reabsorption returns useful substances like glucose, amino acids, salts and water from the tubule to the blood capillaries.",
    subtopic: "Excretion"
  },
  {
    question: "Which substance is almost completely reabsorbed from the nephron tubule under normal conditions?",
    options: [
      "A. Urea",
      "B. Glucose",
      "C. Creatinine",
      "D. Sulphates"
    ],
    answer: "B",
    explanation: "Glucose is actively reabsorbed in the proximal convoluted tubule so that it is normally absent from urine.",
    subtopic: "Excretion"
  },
  {
    question: "The hair-pin shaped part of the nephron that dips into the medulla is the?",
    options: [
      "A. Loop of Henle",
      "B. Bowman's capsule",
      "C. Collecting duct",
      "D. Glomerulus"
    ],
    answer: "A",
    explanation: "The Loop of Henle creates a salt gradient in the medulla that helps concentrate urine and conserve water.",
    subtopic: "Excretion"
  },
  {
    question: "The final urine passes from the nephron into the?",
    options: [
      "A. Glomerulus",
      "B. Bowman's capsule",
      "C. Collecting duct",
      "D. Renal artery"
    ],
    answer: "C",
    explanation: "Several nephrons drain into a collecting duct, which carries the final urine towards the renal pelvis.",
    subtopic: "Excretion"
  },
  {
    question: "The concentrated urine in mammals is mainly a result of water being reabsorbed in the?",
    options: [
      "A. Glomerulus",
      "B. Collecting duct under ADH action",
      "C. Bowman's capsule",
      "D. Afferent arteriole"
    ],
    answer: "B",
    explanation: "Antidiuretic hormone (ADH) makes the collecting duct more permeable to water, allowing reabsorption and concentrated urine.",
    subtopic: "Excretion"
  },
  {
    question: "Which hormone increases the permeability of the collecting duct to water?",
    options: [
      "A. Insulin",
      "B. ADH",
      "C. Thyroxine",
      "D. Adrenaline"
    ],
    answer: "B",
    explanation: "ADH (antidiuretic hormone) from the posterior pituitary increases water reabsorption in the collecting duct.",
    subtopic: "Excretion"
  },
  {
    question: "Normal urine contains mainly?",
    options: [
      "A. Glucose and proteins",
      "B. Urea, salts and water",
      "C. Blood cells",
      "D. Fats"
    ],
    answer: "B",
    explanation: "Healthy urine is mostly water with dissolved urea, salts and small amounts of other wastes; glucose and proteins are absent.",
    subtopic: "Excretion"
  },
  {
    question: "The presence of glucose in urine may indicate a disorder of the?",
    options: [
      "A. Liver",
      "B. Pancreas",
      "C. Lungs",
      "D. Skin"
    ],
    answer: "B",
    explanation: "Glucosuria often results from diabetes mellitus, a pancreatic disorder where insulin is deficient or ineffective.",
    subtopic: "Excretion"
  },
  {
    question: "The skin excretes waste mainly through the?",
    options: [
      "A. Sebaceous glands",
      "B. Sweat glands",
      "C. Hair follicles",
      "D. Dermis"
    ],
    answer: "B",
    explanation: "Sweat glands produce sweat containing water, salts and urea, making the skin an excretory organ.",
    subtopic: "Excretion"
  },
  {
    question: "Sweat is produced mainly by the?",
    options: [
      "A. Sebaceous gland",
      "B. Sweat gland",
      "C. Lymph node",
      "D. Oil gland"
    ],
    answer: "B",
    explanation: "Eccrine sweat glands secrete sweat onto the skin surface for cooling and excretion of water, salts and urea.",
    subtopic: "Excretion"
  },
  {
    question: "The oily secretion that keeps the skin supple is produced by the?",
    options: [
      "A. Sweat glands",
      "B. Sebaceous glands",
      "C. Salivary glands",
      "D. Endocrine glands"
    ],
    answer: "B",
    explanation: "Sebaceous glands secrete sebum, an oily substance that lubricates the skin and hair (this is a secretion, not a major excretory route).",
    subtopic: "Excretion"
  },
  {
    question: "The main nitrogenous waste lost through sweat is?",
    options: [
      "A. Urea",
      "B. Ammonia",
      "C. Uric acid crystals",
      "D. Proteins"
    ],
    answer: "A",
    explanation: "Sweat contains small amounts of urea along with water and mineral salts.",
    subtopic: "Excretion"
  },
  {
    question: "The skin helps in excretion and also in?",
    options: [
      "A. Digestion",
      "B. Temperature regulation",
      "C. Blood clotting",
      "D. Vision"
    ],
    answer: "B",
    explanation: "Evaporation of sweat cools the body, so the skin aids both excretion and temperature regulation.",
    subtopic: "Excretion"
  },
  {
    question: "The liver assists excretion by converting toxic ammonia into?",
    options: [
      "A. Uric acid",
      "B. Urea",
      "C. Amino acids",
      "D. Ammonium salts"
    ],
    answer: "B",
    explanation: "In the ornithine cycle the liver converts toxic ammonia into less toxic urea, which the kidneys excrete.",
    subtopic: "Excretion"
  },
  {
    question: "In the liver, the breakdown of old red blood cells produces a pigment excreted as?",
    options: [
      "A. Bilirubin in bile",
      "B. Melanin",
      "C. Haemoglobin",
      "D. Chlorophyll"
    ],
    answer: "A",
    explanation: "The liver converts haemoglobin breakdown products into bilirubin, which is excreted in bile and gives faeces their colour.",
    subtopic: "Excretion"
  },
  {
    question: "The lungs excrete?",
    options: [
      "A. Urea and salts",
      "B. Carbon dioxide and water vapour",
      "C. Bilirubin",
      "D. Uric acid"
    ],
    answer: "B",
    explanation: "During expiration the lungs remove carbon dioxide and some water vapour, both metabolic wastes.",
    subtopic: "Excretion"
  },
  {
    question: "The removal of water vapour by the lungs is an example of?",
    options: [
      "A. Ultrafiltration",
      "B. Excretion",
      "C. Egestion",
      "D. Digestion"
    ],
    answer: "B",
    explanation: "Water produced by cellular respiration and lost as vapour in exhaled air is an excretory loss.",
    subtopic: "Excretion"
  },
  {
    question: "Osmoregulation is the control of?",
    options: [
      "A. Blood sugar",
      "B. Water and salt balance",
      "C. Body temperature",
      "D. Heart rate"
    ],
    answer: "B",
    explanation: "Osmoregulation maintains the balance of water and dissolved salts (osmotic balance) in body fluids.",
    subtopic: "Excretion"
  },
  {
    question: "When a person drinks a lot of water, the kidney produces?",
    options: [
      "A. Less urine that is concentrated",
      "B. More urine that is dilute",
      "C. No change in urine",
      "D. Urine with more urea only"
    ],
    answer: "B",
    explanation: "Excess water suppresses ADH, so less water is reabsorbed and a larger volume of dilute urine is produced.",
    subtopic: "Excretion"
  },
  {
    question: "On a hot day, a person produces small amounts of concentrated urine because?",
    options: [
      "A. ADH secretion falls",
      "B. ADH secretion rises, increasing water reabsorption",
      "C. The kidneys stop working",
      "D. Sweat glands shut down"
    ],
    answer: "B",
    explanation: "Dehydration raises ADH, increasing water reabsorption in the collecting duct and yielding concentrated urine.",
    subtopic: "Excretion"
  },
  {
    question: "Inflammation of the kidney is called?",
    options: [
      "A. Nephritis",
      "B. Hepatitis",
      "C. Bronchitis",
      "D. Arthritis"
    ],
    answer: "A",
    explanation: "Nephritis is inflammation of the kidney, which can impair its excretory function.",
    subtopic: "Excretion"
  },
  {
    question: "Kidney stones are formed from deposited?",
    options: [
      "A. Glucose",
      "B. Mineral salts such as calcium",
      "C. Proteins",
      "D. Red blood cells"
    ],
    answer: "B",
    explanation: "Kidney stones (renal calculi) are hard masses of minerals and salts, commonly calcium compounds, that form in the kidney.",
    subtopic: "Excretion"
  },
  {
    question: "Dialysis is a treatment used when the kidneys fail, and it performs the work of the?",
    options: [
      "A. Liver",
      "B. Kidney",
      "C. Lungs",
      "D. Skin"
    ],
    answer: "B",
    explanation: "In dialysis an artificial kidney machine filters waste and excess fluid from the blood when the kidneys cannot.",
    subtopic: "Excretion"
  },
  {
    question: "In a dialysis machine, the patient's blood is separated from the dialysis fluid by a?",
    options: [
      "A. Solid bone",
      "B. Partially permeable membrane",
      "C. Metal sieve",
      "D. Glass tube"
    ],
    answer: "B",
    explanation: "A partially permeable membrane allows wastes like urea to pass into the dialysis fluid while retaining blood cells and proteins.",
    subtopic: "Excretion"
  },
  {
    question: "The artificial kidney removes waste by the principle of?",
    options: [
      "A. Active transport only",
      "B. Diffusion across a membrane",
      "C. Photosynthesis",
      "D. Fermentation"
    ],
    answer: "B",
    explanation: "Wastes diffuse from the blood into the surrounding dialysate across a semi-permeable membrane.",
    subtopic: "Excretion"
  },
  {
    question: "A kidney transplant replaces a failed kidney with one from a?",
    options: [
      "A. Donor",
      "B. Robot",
      "C. Synthetic pump only",
      "D. Machine permanently"
    ],
    answer: "A",
    explanation: "A kidney transplant uses a healthy kidney from a living or deceased donor to restore excretory function.",
    subtopic: "Excretion"
  },
  {
    question: "Urea is formed in the liver from the breakdown of?",
    options: [
      "A. Carbohydrates",
      "B. Excess amino acids (deamination)",
      "C. Fats",
      "D. Vitamins"
    ],
    answer: "B",
    explanation: "Deamination of excess amino acids in the liver produces ammonia, which is converted to urea.",
    subtopic: "Excretion"
  },
  {
    question: "The renal artery brings blood to the kidney and the renal vein carries blood away; the renal vein blood has?",
    options: [
      "A. More urea than arterial blood",
      "B. Less urea than arterial blood",
      "C. More blood cells",
      "D. No oxygen"
    ],
    answer: "B",
    explanation: "After filtration and waste removal in the kidney, the renal vein carries blood that is lower in urea than the incoming renal artery blood.",
    subtopic: "Excretion"
  },
  {
    question: "The part of the nephron where selective reabsorption is greatest is the?",
    options: [
      "A. Proximal convoluted tubule",
      "B. Glomerulus",
      "C. Afferent arteriole",
      "D. Renal pelvis"
    ],
    answer: "A",
    explanation: "The proximal convoluted tubule reabsorbs most glucose, amino acids, salts and water back into the blood.",
    subtopic: "Excretion"
  },
  {
    question: "The sphincter controlling the release of urine from the bladder is under voluntary control at the?",
    options: [
      "A. Ureter",
      "B. Urethra",
      "C. Kidney",
      "D. Glomerulus"
    ],
    answer: "B",
    explanation: "The urethral sphincter controls the discharge of urine from the bladder and is voluntarily controlled in adults.",
    subtopic: "Excretion"
  },
  {
    question: "Birds and reptiles excrete nitrogenous waste mainly as?",
    options: [
      "A. Urea",
      "B. Uric acid",
      "C. Ammonia",
      "D. Proteins"
    ],
    answer: "B",
    explanation: "Uricotelic animals such as birds and reptiles excrete uric acid, a semisolid paste that conserves water.",
    subtopic: "Excretion"
  },
  {
    question: "Ammonia is the main nitrogenous waste of?",
    options: [
      "A. Mammals",
      "B. Aquatic bony fish",
      "C. Birds",
      "D. Reptiles"
    ],
    answer: "B",
    explanation: "Ammonotelic aquatic fish excrete toxic ammonia directly into the surrounding water where it is diluted.",
    subtopic: "Excretion"
  },
  {
    question: "The process of forming urine begins with?",
    options: [
      "A. Reabsorption only",
      "B. Ultrafiltration at the glomerulus",
      "C. Secretion into the bladder",
      "D. Egestion"
    ],
    answer: "B",
    explanation: "Urine formation starts with ultrafiltration of blood in the glomerulus, followed by reabsorption and some secretion.",
    subtopic: "Excretion"
  },
  {
    question: "The Bowman's capsule and glomerulus together form the?",
    options: [
      "A. Malpighian body",
      "B. Loop of Henle",
      "C. Collecting duct",
      "D. Ureter"
    ],
    answer: "A",
    explanation: "The Malpighian (renal) corpuscle is the Bowman's capsule plus the enclosed glomerulus.",
    subtopic: "Excretion"
  },
  {
    question: "Which of these is reabsorbed by active transport in the nephron?",
    options: [
      "A. Urea",
      "B. Glucose and some salts",
      "C. Water only by diffusion",
      "D. Blood cells"
    ],
    answer: "B",
    explanation: "Glucose and certain ions are actively transported out of the tubule back into the blood during reabsorption.",
    subtopic: "Excretion"
  },
  {
    question: "Failure of the liver to conjugate bilirubin can lead to?",
    options: [
      "A. Jaundice",
      "B. Nephritis",
      "C. Asthma",
      "D. Myopia"
    ],
    answer: "A",
    explanation: "Build-up of bilirubin in the blood causes jaundice, a yellowing of the skin and eyes.",
    subtopic: "Excretion"
  },
  {
    question: "The regulation of the osmotic pressure of body fluids is chiefly the function of the?",
    options: [
      "A. Lungs",
      "B. Kidney",
      "C. Stomach",
      "D. Heart"
    ],
    answer: "B",
    explanation: "The kidney is the main organ of osmoregulation, controlling water and salt loss in urine.",
    subtopic: "Excretion"
  }
];

module.exports = questions;
