// biology — Regulation of Internal Environment
const questions = [
  // ---------- KIDNEY ----------
  {
    question: "Which part of the nephron is a cup-shaped structure that surrounds the glomerulus?",
    options: [
      "A. Loop of Henle",
      "B. Bowman's capsule",
      "C. Collecting duct",
      "D. Distal convoluted tubule"
    ],
    answer: "B",
    explanation: "Bowman's capsule is the cup-shaped capsule that encloses the glomerulus and receives the ultrafiltrate.",
    subtopic: "kidney"
  },
  {
    question: "The process by which blood is filtered under pressure in the renal corpuscle is called?",
    options: [
      "A. Selective reabsorption",
      "B. Ultrafiltration",
      "C. Osmoregulation",
      "D. Secretion"
    ],
    answer: "B",
    explanation: "Ultrafiltration is the high-pressure filtration of blood across the glomerular capillary walls into Bowman's capsule.",
    subtopic: "kidney"
  },
  {
    question: "Which blood vessel carries blood from the glomerulus away after filtration?",
    options: [
      "A. Afferent arteriole",
      "B. Hepatic portal vein",
      "C. Efferent arteriole",
      "D. Renal vein"
    ],
    answer: "C",
    explanation: "The efferent arteriole carries blood away from the glomerulus; it is narrower than the afferent arteriole, raising pressure for filtration.",
    subtopic: "kidney"
  },
  {
    question: "Useful substances such as glucose and amino acids are returned to the blood in the nephron by?",
    options: [
      "A. Ultrafiltration",
      "B. Selective reabsorption",
      "C. Excretion",
      "D. Egestion"
    ],
    answer: "B",
    explanation: "Selective reabsorption returns useful molecules (glucose, salts, water) from the filtrate back into the blood capillary network.",
    subtopic: "kidney"
  },
  {
    question: "The loop of Henle is mainly responsible for?",
    options: [
      "A. Producing urea",
      "B. Establishing a salt gradient for water reabsorption",
      "C. Filtering blood",
      "D. Storing urine"
    ],
    answer: "B",
    explanation: "The loop of Henle creates a high solute concentration in the medulla, enabling water reabsorption from the collecting duct.",
    subtopic: "kidney"
  },
  {
    question: "Which hormone increases the permeability of the collecting duct to water?",
    options: [
      "A. Adrenaline",
      "B. Insulin",
      "C. ADH (antidiuretic hormone)",
      "D. Thyroxine"
    ],
    answer: "C",
    explanation: "ADH makes the collecting duct more permeable to water, promoting water reabsorption and producing more concentrated urine.",
    subtopic: "kidney"
  },
  {
    question: "When the body is dehydrated, the pituitary gland releases more ADH, resulting in?",
    options: [
      "A. More dilute urine",
      "B. Less urine of higher concentration",
      "C. No change in urine",
      "D. Loss of glucose in urine"
    ],
    answer: "B",
    explanation: "More ADH increases water reabsorption, so less but more concentrated urine is produced to conserve body water.",
    subtopic: "kidney"
  },
  {
    question: "The removal of metabolic wastes from the body is termed?",
    options: [
      "A. Egestion",
      "B. Excretion",
      "C. Secretion",
      "D. Digestion"
    ],
    answer: "B",
    explanation: "Excretion is the removal of metabolic waste products (e.g. urea, CO2) produced by the body's cells.",
    subtopic: "kidney"
  },
  {
    question: "The removal of undigested food material through the anus is called?",
    options: [
      "A. Excretion",
      "B. Secretion",
      "C. Egestion",
      "D. Assimilation"
    ],
    answer: "C",
    explanation: "Egestion is the elimination of undigested food (faeces), which was never part of the body's metabolism.",
    subtopic: "kidney"
  },
  {
    question: "Urea is produced in the liver from the breakdown of?",
    options: [
      "A. Fats",
      "B. Excess amino acids",
      "C. Glucose",
      "D. Starch"
    ],
    answer: "B",
    explanation: "Deamination in the liver removes the amino group from excess amino acids, forming ammonia which is converted to urea.",
    subtopic: "kidney"
  },
  {
    question: "Which region of the kidney contains the glomeruli and convoluted tubules?",
    options: [
      "A. Medulla",
      "B. Pelvis",
      "C. Cortex",
      "D. Ureter"
    ],
    answer: "C",
    explanation: "The cortex is the outer region and contains Bowman's capsules, glomeruli and the convoluted tubules.",
    subtopic: "kidney"
  },
  {
    question: "The inner region of the kidney that contains the loops of Henle and collecting ducts is the?",
    options: [
      "A. Cortex",
      "B. Medulla",
      "C. Capsule",
      "D. Pelvis"
    ],
    answer: "B",
    explanation: "The medulla is the inner region, containing loops of Henle, collecting ducts and the pyramids.",
    subtopic: "kidney"
  },
  {
    question: "In a healthy person, glucose is normally?",
    options: [
      "A. Absent from urine",
      "B. Present in large amounts in urine",
      "C. Produced by the kidney",
      "D. Filtered but not reabsorbed"
    ],
    answer: "A",
    explanation: "All filtered glucose is reabsorbed in the proximal convoluted tubule, so urine normally contains no glucose.",
    subtopic: "kidney"
  },
  {
    question: "Dialysis performs the function of the kidney by?",
    options: [
      "A. Producing bile",
      "B. Removing wastes and excess ions from the blood",
      "C. Storing glycogen",
      "D. Producing insulin"
    ],
    answer: "B",
    explanation: "An artificial kidney (dialyser) removes urea and excess salts from the blood when the kidneys fail.",
    subtopic: "kidney"
  },
  {
    question: "The proximal convoluted tubule is the main site for reabsorption of?",
    options: [
      "A. Urea only",
      "B. Glucose, salts and water",
      "C. Bile",
      "D. Red blood cells"
    ],
    answer: "B",
    explanation: "Most glucose, amino acids, salts and water are reabsorbed in the proximal convoluted tubule.",
    subtopic: "kidney"
  },
  {
    question: "Failure of both kidneys leads to the accumulation of which waste in the blood?",
    options: [
      "A. Bile",
      "B. Urea",
      "C. Glycogen",
      "D. Starch"
    ],
    answer: "B",
    explanation: "Kidney failure prevents urea excretion, so urea builds up to toxic levels in the blood (uraemia).",
    subtopic: "kidney"
  },
  {
    question: "Osmoregulation is the control of?",
    options: [
      "A. Blood sugar level",
      "B. Water and salt balance in body fluids",
      "C. Body temperature only",
      "D. Heart rate"
    ],
    answer: "B",
    explanation: "Osmoregulation maintains the balance of water and dissolved salts (osmotic balance) in body fluids.",
    subtopic: "kidney"
  },

  // ---------- LIVER ----------
  {
    question: "Deamination in the liver involves the removal of the?",
    options: [
      "A. Carboxyl group from fatty acids",
      "B. Amino group from excess amino acids",
      "C. Phosphate group from glucose",
      "D. Hydrogen from water"
    ],
    answer: "B",
    explanation: "Deamination removes the amino (NH2) group from surplus amino acids, producing ammonia that is converted to urea.",
    subtopic: "liver"
  },
  {
    question: "The hepatic portal vein carries blood from the?",
    options: [
      "A. Liver to the heart",
      "B. Digestive organs to the liver",
      "C. Kidney to the liver",
      "D. Liver to the kidney"
    ],
    answer: "B",
    explanation: "The hepatic portal vein transports blood rich in absorbed nutrients from the intestines to the liver for processing.",
    subtopic: "liver"
  },
  {
    question: "Blood is supplied to the liver for oxygenation by the?",
    options: [
      "A. Hepatic portal vein",
      "B. Hepatic artery",
      "C. Bile duct",
      "D. Renal artery"
    ],
    answer: "B",
    explanation: "The hepatic artery delivers oxygenated blood to the liver; the portal vein carries nutrient-rich deoxygenated blood.",
    subtopic: "liver"
  },
  {
    question: "Bile is produced by the liver and stored in the?",
    options: [
      "A. Pancreas",
      "B. Gall bladder",
      "C. Spleen",
      "D. Stomach"
    ],
    answer: "B",
    explanation: "Bile is made in the liver and stored and concentrated in the gall bladder before release into the duodenum.",
    subtopic: "liver"
  },
  {
    question: "Bile helps in digestion by?",
    options: [
      "A. Breaking down proteins",
      "B. Emulsifying fats into smaller droplets",
      "C. Digesting starch",
      "D. Neutralising the stomach acid only"
    ],
    answer: "B",
    explanation: "Bile salts emulsify large fat globules into small droplets, increasing the surface area for lipase action.",
    subtopic: "liver"
  },
  {
    question: "Excess glucose in the liver is converted to glycogen in a process called?",
    options: [
      "A. Glycogenolysis",
      "B. Glycogenesis",
      "C. Deamination",
      "D. Fermentation"
    ],
    answer: "B",
    explanation: "Glycogenesis is the conversion of excess glucose into glycogen for storage in the liver and muscles.",
    subtopic: "liver"
  },
  {
    question: "The breakdown of glycogen to glucose when blood sugar is low is called?",
    options: [
      "A. Glycogenesis",
      "B. Glycogenolysis",
      "C. Deamination",
      "D. Transamination"
    ],
    answer: "B",
    explanation: "Glycogenolysis releases glucose from stored glycogen to raise blood sugar levels.",
    subtopic: "liver"
  },
  {
    question: "The liver detoxifies harmful substances such as?",
    options: [
      "A. Glucose",
      "B. Alcohol and certain drugs",
      "C. Oxygen",
      "D. Water"
    ],
    answer: "B",
    explanation: "Liver cells detoxify alcohol, drugs and other toxins, converting them into less harmful or excretable forms.",
    subtopic: "liver"
  },
  {
    question: "The liver synthesises plasma proteins such as?",
    options: [
      "A. Haemoglobin only",
      "B. Albumin and fibrinogen",
      "C. Insulin",
      "D. Pepsin"
    ],
    answer: "B",
    explanation: "The liver produces plasma proteins including albumin (for osmotic balance) and fibrinogen (for clotting).",
    subtopic: "liver"
  },
  {
    question: "The functional units of the liver, made of plates of cells radiating from a central vein, are called?",
    options: [
      "A. Nephrons",
      "B. Lobules",
      "C. Alveoli",
      "D. Villi"
    ],
    answer: "B",
    explanation: "The liver is organised into lobules, each with hepatocytes arranged around a central vein.",
    subtopic: "liver"
  },
  {
    question: "Bile leaves the liver through the?",
    options: [
      "A. Hepatic portal vein",
      "B. Bile duct",
      "C. Hepatic artery",
      "D. Pancreatic duct"
    ],
    answer: "B",
    explanation: "Bile drains from liver cells into bile ducts which join to form the common bile duct to the duodenum.",
    subtopic: "liver"
  },
  {
    question: "The liver stores several vitamins, including?",
    options: [
      "A. Vitamin C and B12 only",
      "B. Vitamins A, D and B12",
      "C. Only vitamin K",
      "D. No vitamins at all"
    ],
    answer: "B",
    explanation: "The liver stores fat-soluble vitamins A, D, E, K and also vitamin B12 and iron.",
    subtopic: "liver"
  },
  {
    question: "The liver contributes to body heat production because it is?",
    options: [
      "A. Inactive metabolically",
      "B. Very active metabolically",
      "C. Made of fat only",
      "D. Outside the body cavity"
    ],
    answer: "B",
    explanation: "The liver's many metabolic reactions release heat, making it a major source of body heat.",
    subtopic: "liver"
  },
  {
    question: "The pigment bilirubin in bile is formed from the breakdown of?",
    options: [
      "A. Glucose",
      "B. Old red blood cells",
      "C. Fats",
      "D. Proteins only"
    ],
    answer: "B",
    explanation: "Bilirubin is a breakdown product of haemoglobin from worn-out red blood cells, excreted in bile.",
    subtopic: "liver"
  },
  {
    question: "Specialised phagocytic cells in the liver that remove bacteria and worn cells are called?",
    options: [
      "A. Kupffer cells",
      "B. Osteocytes",
      "C. Neurons",
      "D. Chondrocytes"
    ],
    answer: "A",
    explanation: "Kupffer cells are fixed macrophages in liver sinusoids that engulf bacteria and debris.",
    subtopic: "liver"
  },
  {
    question: "Which substance is NOT normally produced by the liver?",
    options: [
      "A. Bile",
      "B. Urea",
      "C. Insulin",
      "D. Fibrinogen"
    ],
    answer: "C",
    explanation: "Insulin is produced by the pancreas (beta cells), not the liver; the liver makes bile, urea and plasma proteins.",
    subtopic: "liver"
  },
  {
    question: "The process of deamination produces ammonia, which is converted in the liver to?",
    options: [
      "A. Uric acid",
      "B. Urea",
      "C. Amino acids",
      "D. Glucose"
    ],
    answer: "B",
    explanation: "Toxic ammonia from deamination is converted to less toxic urea in the liver's ornithine cycle.",
    subtopic: "liver"
  },
  {
    question: "The liver plays a role in maintaining blood glucose level by?",
    options: [
      "A. Only storing fat",
      "B. Converting glucose to glycogen and back",
      "C. Producing bile salts only",
      "D. Filtering urine"
    ],
    answer: "B",
    explanation: "The liver buffers blood glucose by storing it as glycogen (glycogenesis) and releasing it (glycogenolysis).",
    subtopic: "liver"
  },

  // ---------- SKIN ----------
  {
    question: "The outermost layer of the skin is the?",
    options: [
      "A. Dermis",
      "B. Epidermis",
      "C. Hypodermis",
      "D. Cortex"
    ],
    answer: "B",
    explanation: "The epidermis is the thin outer protective layer of the skin, made of stratified epithelium.",
    subtopic: "skin"
  },
  {
    question: "The layer of skin beneath the epidermis that contains blood vessels, glands and nerves is the?",
    options: [
      "A. Epidermis",
      "B. Dermis",
      "C. Cuticle",
      "D. Medulla"
    ],
    answer: "B",
    explanation: "The dermis lies below the epidermis and contains capillaries, sweat glands, sebaceous glands, hair roots and sensory receptors.",
    subtopic: "skin"
  },
  {
    question: "When the body is too hot, skin blood vessels dilate in a process called?",
    options: [
      "A. Vasoconstriction",
      "B. Vasodilation",
      "C. Shivering",
      "D. Osmoregulation"
    ],
    answer: "B",
    explanation: "Vasodilation increases blood flow near the skin surface, radiating heat to cool the body.",
    subtopic: "skin"
  },
  {
    question: "When the body is cold, skin arterioles constrict, reducing heat loss. This is?",
    options: [
      "A. Vasodilation",
      "B. Vasoconstriction",
      "C. Sweating",
      "D. Transpiration"
    ],
    answer: "B",
    explanation: "Vasoconstriction reduces blood flow to the skin surface, conserving body heat.",
    subtopic: "skin"
  },
  {
    question: "Cooling of the body occurs when sweat evaporates from the skin because?",
    options: [
      "A. Sweat is cold",
      "B. Evaporation uses latent heat from the body",
      "C. Sweat blocks pores",
      "D. Sweat produces heat"
    ],
    answer: "B",
    explanation: "Evaporation of sweat requires latent heat, which is taken from the body, lowering skin temperature.",
    subtopic: "skin"
  },
  {
    question: "Shivering helps raise body temperature by?",
    options: [
      "A. Increasing sweat production",
      "B. Rapid muscle contraction generating heat",
      "C. Dilating blood vessels",
      "D. Lowering metabolism"
    ],
    answer: "B",
    explanation: "Shivering is rapid involuntary muscle contraction that produces heat through increased metabolism.",
    subtopic: "skin"
  },
  {
    question: "In cold conditions, hairs stand erect and trap a layer of insulating air. This is caused by the?",
    options: [
      "A. Sweat glands",
      "B. Arrector pili muscles",
      "C. Sebaceous glands",
      "D. Capillaries"
    ],
    answer: "B",
    explanation: "Contraction of the arrector pili muscles erects hairs, trapping warm air close to the skin.",
    subtopic: "skin"
  },
  {
    question: "Sweat glands in the skin help excrete?",
    options: [
      "A. Urea and glucose",
      "B. Water, salts and small amounts of urea",
      "C. Bile salts",
      "D. Proteins"
    ],
    answer: "B",
    explanation: "Sweat consists mainly of water and salts, with traces of urea, so the skin is a minor excretory organ.",
    subtopic: "skin"
  },
  {
    question: "Sebaceous glands in the skin secrete sebum which?",
    options: [
      "A. Cools the body",
      "B. Oils and waterproofs the skin and hair",
      "C. Produces sweat",
      "D. Detects touch"
    ],
    answer: "B",
    explanation: "Sebum is an oily secretion that lubricates, waterproofs and protects the skin and hair.",
    subtopic: "skin"
  },
  {
    question: "The skin protects the body against infection mainly because it?",
    options: [
      "A. Produces bile",
      "B. Forms a physical barrier and secretes antimicrobial substances",
      "C. Filters the blood",
      "D. Stores glucose"
    ],
    answer: "B",
    explanation: "Intact skin is a physical barrier, and sebum/acid mantle help inhibit microbial growth.",
    subtopic: "skin"
  },
  {
    question: "Sensory receptors in the dermis detect?",
    options: [
      "A. Only light",
      "B. Touch, pressure, heat, cold and pain",
      "C. Only sound",
      "D. Only smell"
    ],
    answer: "B",
    explanation: "Dermal receptors include those for touch, pressure, temperature and pain, providing sensory information.",
    subtopic: "skin"
  },
  {
    question: "The pigment that protects the skin from ultraviolet radiation is?",
    options: [
      "A. Haemoglobin",
      "B. Melanin",
      "C. Chlorophyll",
      "D. Bilirubin"
    ],
    answer: "B",
    explanation: "Melanin, produced by melanocytes in the epidermis, absorbs UV radiation and protects deeper cells.",
    subtopic: "skin"
  },
  {
    question: "Vitamin D is synthesised in the skin when it is exposed to?",
    options: [
      "A. Visible light only",
      "B. Ultraviolet (UV) radiation from sunlight",
      "C. Infrared heat only",
      "D. Moonlight"
    ],
    answer: "B",
    explanation: "UV radiation in sunlight converts a cholesterol derivative in the skin into vitamin D.",
    subtopic: "skin"
  },
  {
    question: "The skin helps regulate body temperature through all the following EXCEPT?",
    options: [
      "A. Sweating",
      "B. Vasodilation and vasoconstriction",
      "C. Shivering",
      "D. Producing insulin"
    ],
    answer: "D",
    explanation: "Insulin is produced by the pancreas; temperature regulation by skin involves sweating, vasomotor changes and shivering.",
    subtopic: "skin"
  },
  {
    question: "The layer of fat beneath the dermis that insulates the body is the?",
    options: [
      "A. Epidermis",
      "B. Subcutaneous (hypodermis) tissue",
      "C. Dermis",
      "D. Cortex"
    ],
    answer: "B",
    explanation: "The subcutaneous fat layer (hypodermis) provides insulation and energy storage beneath the dermis.",
    subtopic: "skin"
  },
  {
    question: "When the body overheats, the skin appears red because of?",
    options: [
      "A. Vasoconstriction",
      "B. Vasodilation bringing more blood to the surface",
      "C. Shivering",
      "D. Hair erection"
    ],
    answer: "B",
    explanation: "Vasodilation increases blood flow near the surface, making the skin red and aiding heat loss.",
    subtopic: "skin"
  }
];

module.exports = questions;
