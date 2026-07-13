// biology — Respiratory System
const questions = [
  {
    question: "Respiration is the process by which organisms?",
    options: [
      "A. Make food",
      "B. Take in oxygen and release energy from food",
      "C. Photosynthesise",
      "D. Excrete urea"
    ],
    answer: "B",
    explanation: "Respiration uses oxygen to release energy from glucose.",
    subtopic: "gaseous exchange mechanisms"
  },
  {
    question: "Gaseous exchange requires a respiratory surface that is?",
    options: [
      "A. Thick and dry",
      "B. Thin, moist and well supplied with blood",
      "C. Hard",
      "D. Covered with bone"
    ],
    answer: "B",
    explanation: "Effective exchange surfaces are thin, moist and vascularised.",
    subtopic: "respiratory surfaces"
  },
  {
    question: "In humans, gaseous exchange occurs in the?",
    options: [
      "A. Trachea",
      "B. Alveoli of the lungs",
      "C. Bronchi",
      "D. Larynx"
    ],
    answer: "B",
    explanation: "Alveoli are the tiny air sacs where O2 and CO2 are exchanged.",
    subtopic: "respiratory surfaces"
  },
  {
    question: "The alveolus is surrounded by?",
    options: [
      "A. Bone",
      "B. A network of capillaries",
      "C. Muscle only",
      "D. Cartilage"
    ],
    answer: "B",
    explanation: "Capillaries around alveoli receive O2 and give up CO2.",
    subtopic: "respiratory surfaces"
  },
  {
    question: "The walls of alveoli and capillaries are?",
    options: [
      "A. Thick",
      "B. One cell thick to allow diffusion",
      "C. Made of bone",
      "D. Impermeable"
    ],
    answer: "B",
    explanation: "A single-cell thickness shortens the diffusion distance.",
    subtopic: "respiratory surfaces"
  },
  {
    question: "Oxygen moves from the alveolus into the blood by?",
    options: [
      "A. Active transport",
      "B. Diffusion",
      "C. Osmosis",
      "D. Swallowing"
    ],
    answer: "B",
    explanation: "O2 diffuses down its gradient into capillary blood.",
    subtopic: "gaseous exchange mechanisms"
  },
  {
    question: "Carbon dioxide moves from the blood into the alveolus by?",
    options: [
      "A. Active transport",
      "B. Diffusion",
      "C. Osmosis",
      "D. Filtration"
    ],
    answer: "B",
    explanation: "CO2 diffuses from blood to alveolar air down its gradient.",
    subtopic: "gaseous exchange mechanisms"
  },
  {
    question: "The concentration gradient for gas exchange is maintained by?",
    options: [
      "A. Stopping blood flow",
      "B. Continuous breathing and blood flow",
      "C. Holding breath",
      "D. Drying the surface"
    ],
    answer: "B",
    explanation: "Fresh air and flowing blood keep gradients steep.",
    subtopic: "gaseous exchange mechanisms"
  },
  {
    question: "In fish, gaseous exchange occurs across the?",
    options: [
      "A. Lungs",
      "B. Gills",
      "C. Skin",
      "D. Trachea"
    ],
    answer: "B",
    explanation: "Fish gills extract O2 from water.",
    subtopic: "respiratory surfaces"
  },
  {
    question: "Fish ventilate by passing water?",
    options: [
      "A. Only over lungs",
      "B. Over the gills in one direction",
      "C. Through the skin",
      "D. In and out of the mouth only"
    ],
    answer: "B",
    explanation: "Water flows unidirectionally over gill filaments for counter-current exchange.",
    subtopic: "gaseous exchange mechanisms"
  },
  {
    question: "The counter-current flow in fish gills means?",
    options: [
      "A. Blood and water flow in the same direction",
      "B. Blood and water flow in opposite directions for efficient exchange",
      "C. No flow occurs",
      "D. Only air is used"
    ],
    answer: "B",
    explanation: "Opposite flow maintains a gradient along the gill, maximising O2 uptake.",
    subtopic: "gaseous exchange mechanisms"
  },
  {
    question: "The gill filaments in fish are rich in?",
    options: [
      "A. Bone",
      "B. Capillaries",
      "C. Cartilage",
      "D. Muscle only"
    ],
    answer: "B",
    explanation: "Dense capillaries in gill filaments enable gas exchange.",
    subtopic: "respiratory surfaces"
  },
  {
    question: "In insects, gaseous exchange occurs through a system of?",
    options: [
      "A. Lungs",
      "B. Trachea and tracheoles",
      "C. Gills",
      "D. Alveoli"
    ],
    answer: "B",
    explanation: "Insects use a tracheal system delivering air directly to cells.",
    subtopic: "respiratory surfaces"
  },
  {
    question: "The tracheal system of insects opens to the outside through?",
    options: [
      "A. Lungs",
      "B. Spiracles",
      "C. Gills",
      "D. Stomata"
    ],
    answer: "B",
    explanation: "Spiracles are the external openings of the insect trachea.",
    subtopic: "respiratory surfaces"
  },
  {
    question: "A advantage of the tracheal system is that it?",
    options: [
      "A. Uses blood to carry oxygen",
      "B. Delivers oxygen directly to tissues without blood",
      "C. Needs lungs",
      "D. Works only in water"
    ],
    answer: "B",
    explanation: "Tracheoles take air straight to cells, bypassing the circulatory system.",
    subtopic: "gaseous exchange mechanisms"
  },
  {
    question: "In amphibians such as frogs, gaseous exchange can occur through the?",
    options: [
      "A. Skin only",
      "B. Skin, lungs and mouth lining",
      "C. Gills only as adults",
      "D. Trachea only"
    ],
    answer: "B",
    explanation: "Frogs exchange gas via moist skin, lungs and buccal cavity.",
    subtopic: "respiratory surfaces"
  },
  {
    question: "The skin of a frog is suitable for gas exchange because it is?",
    options: [
      "A. Dry and thick",
      "B. Thin, moist and vascularised",
      "C. Covered with scales",
      "D. Made of bone"
    ],
    answer: "B",
    explanation: "Moist, thin, well-vascularised skin permits cutaneous respiration.",
    subtopic: "respiratory surfaces"
  },
  {
    question: "In humans, air enters the body through the?",
    options: [
      "A. Oesophagus",
      "B. Nose or mouth",
      "C. Trachea directly",
      "D. Alveoli"
    ],
    answer: "B",
    explanation: "Air enters via nose/mouth then passes down the airway.",
    subtopic: "respiratory surfaces"
  },
  {
    question: "The windpipe is also called the?",
    options: [
      "A. Bronchus",
      "B. Trachea",
      "C. Larynx",
      "D. Alveolus"
    ],
    answer: "B",
    explanation: "The trachea is the windpipe leading to the bronchi.",
    subtopic: "respiratory surfaces"
  },
  {
    question: "The trachea is kept open by?",
    options: [
      "A. Bone rings",
      "B. Cartilage rings",
      "C. Muscle only",
      "D. Skin"
    ],
    answer: "B",
    explanation: "C-shaped cartilage rings support the trachea.",
    subtopic: "respiratory surfaces"
  },
  {
    question: "The trachea divides into two?",
    options: [
      "A. Alveoli",
      "B. Bronchi (one to each lung)",
      "C. Larynx",
      "D. Bronchioles only"
    ],
    answer: "B",
    explanation: "The bronchi branch into the two lungs.",
    subtopic: "respiratory surfaces"
  },
  {
    question: "Bronchioles end in clusters of?",
    options: [
      "A. Trachea",
      "B. Alveoli",
      "C. Cartilage",
      "D. Bronchi"
    ],
    answer: "B",
    explanation: "Bronchioles terminate in alveolar sacs.",
    subtopic: "respiratory surfaces"
  },
  {
    question: "The diaphragm is a muscle that helps in?",
    options: [
      "A. Digestion",
      "B. Breathing (changing thoracic volume)",
      "C. Circulation only",
      "D. Filtering blood"
    ],
    answer: "B",
    explanation: "The diaphragm contracts/relaxes to drive inhalation/exhalation.",
    subtopic: "gaseous exchange mechanisms"
  },
  {
    question: "During inhalation in humans, the diaphragm?",
    options: [
      "A. Rises and flattens out (contracts downward)",
      "B. Contracts and moves down, enlarging the chest",
      "C. Stays still",
      "D. Becomes rigid"
    ],
    answer: "B",
    explanation: "Diaphragm contraction lowers and enlarges the thoracic cavity, drawing air in.",
    subtopic: "gaseous exchange mechanisms"
  },
  {
    question: "During exhalation, the chest volume?",
    options: [
      "A. Increases",
      "B. Decreases as air is pushed out",
      "C. Stays the same",
      "D. Disappears"
    ],
    answer: "B",
    explanation: "Relaxation of diaphragm/rib muscles reduces volume, expelling air.",
    subtopic: "gaseous exchange mechanisms"
  },
  {
    question: "The ribs are raised during inhalation by the?",
    options: [
      "A. Abdominal muscles",
      "B. Intercostal muscles",
      "C. Heart",
      "D. Diaphragm only"
    ],
    answer: "B",
    explanation: "External intercostal muscles lift the ribs to expand the chest.",
    subtopic: "gaseous exchange mechanisms"
  },
  {
    question: "The moist lining of respiratory surfaces helps gases because?",
    options: [
      "A. Gases must dissolve to diffuse",
      "B. It blocks exchange",
      "C. It dries the air",
      "D. It produces oxygen"
    ],
    "answer": "A",
    explanation: "Gases diffuse more readily across moist surfaces after dissolving.",
    subtopic: "respiratory surfaces"
  },
  {
    question: "A large number of alveoli increases the?",
    options: [
      "A. Weight of the lung",
      "B. Surface area for gas exchange",
      "C. Thickness of the wall",
      "D. Bone content"
    ],
    answer: "B",
    explanation: "Millions of alveoli provide a huge exchange surface area.",
    subtopic: "respiratory surfaces"
  },
  {
    question: "Which gas is taken INTO the body during breathing?",
    options: [
      "A. Carbon dioxide",
      "B. Oxygen",
      "C. Nitrogen mainly",
      "D. Helium"
    ],
    answer: "B",
    explanation: "Inhalation brings in O2 for respiration.",
    subtopic: "gaseous exchange mechanisms"
  },
  {
    question: "Which gas is removed FROM the body during breathing?",
    options: [
      "A. Oxygen",
      "B. Carbon dioxide",
      "C. Nitrogen",
      "D. Hydrogen"
    ],
    answer: "B",
    explanation: "Exhalation expels CO2, a respiratory waste.",
    subtopic: "gaseous exchange mechanisms"
  },
  {
    question: "The voice box is also called the?",
    options: [
      "A. Pharynx",
      "B. Larynx",
      "C. Trachea",
      "D. Bronchus"
    ],
    answer: "B",
    explanation: "The larynx contains the vocal cords.",
    subtopic: "respiratory surfaces"
  },
  {
    question: "Smoking damages the respiratory system mainly by harming the?",
    options: [
      "A. Bones",
      "B. Alveoli and cilia",
      "C. Heart valves only",
      "D. Kidneys"
    ],
    answer: "B",
    explanation: "Smoke destroys alveoli and paralyses cleansing cilia.",
    subtopic: "respiratory surfaces"
  },
  {
    question: "Cilia in the airway function to?",
    options: [
      "A. Produce sound",
      "B. Sweep mucus and trapped dust out",
      "C. Exchange gases",
      "D. Pump blood"
    ],
    answer: "B",
    explanation: "Ciliated epithelium moves mucus upward away from lungs.",
    subtopic: "respiratory surfaces"
  },
  {
    question: "Mucus in the respiratory tract?",
    options: [
      "A. Blocks all airflow",
      "B. Traps dust and microbes",
      "C. Produces oxygen",
      "D. Replaces alveoli"
    ],
    answer: "B",
    explanation: "Mucus traps particles; cilia remove it.",
    subtopic: "respiratory surfaces"
  },
  {
    question: "The ciliated epithelium of the trachea is important for?",
    options: [
      "A. Gas exchange",
      "B. Protection by removing debris",
      "C. Sound production",
      "D. Breathing muscles"
    ],
    answer: "B",
    explanation: "It protects the lung by clearing inhaled particles.",
    subtopic: "respiratory surfaces"
  },
  {
    question: "A spiracle in an insect is equivalent to a?",
    options: [
      "A. Lung",
      "B. Nostril (air opening)",
      "C. Gill",
      "D. Alveolus"
    ],
    answer: "B",
    explanation: "Spiracles are external air openings of the tracheal system.",
    subtopic: "respiratory surfaces"
  },
  {
    question: "Tracheoles are the finest branches that deliver air to?",
    options: [
      "A. The heart",
      "B. Individual cells",
      "C. The brain only",
      "D. The gut"
    ],
    answer: "B",
    explanation: "Tracheoles penetrate tissues and end near cells.",
    subtopic: "respiratory surfaces"
  },
  {
    question: "Fish obtain oxygen from water because water contains?",
    options: [
      "A. No oxygen",
      "B. Dissolved oxygen",
      "C. Pure oxygen gas",
      "D. Carbon dioxide only"
    ],
    answer: "B",
    explanation: "Oxygen dissolved in water is extracted by gills.",
    subtopic: "gaseous exchange mechanisms"
  },
  {
    question: "When a fish is out of water, its gills collapse because?",
    options: [
      "A. They need water to remain spread out",
      "B. They turn to bone",
      "C. They stop having blood",
      "D. They become lungs"
    ],
    answer: "A",
    explanation: "Without water support, gill filaments stick together, reducing area.",
    subtopic: "respiratory surfaces"
  },
  {
    question: "The epiglottis prevents food from entering the?",
    options: [
      "A. Oesophagus",
      "B. Trachea (windpipe)",
      "C. Stomach",
      "D. Lungs directly"
    ],
    answer: "B",
    explanation: "The epiglottis covers the trachea during swallowing.",
    subtopic: "respiratory surfaces"
  },
  {
    question: "Which of the following is NOT part of the human airway?",
    options: [
      "A. Trachea",
      "B. Bronchus",
      "C. Alveolus",
      "D. Bronchiole"
    ],
    answer: "C",
    explanation: "Alveoli are the exchange sacs, not conducting airways.",
    subtopic: "respiratory surfaces"
  },
  {
    question: "Hemoglobin in red blood cells combines with?",
    options: [
      "A. Carbon dioxide only",
      "B. Oxygen",
      "C. Nitrogen",
      "D. Water"
    ],
    answer: "B",
    explanation: "Haemoglobin transports O2 from lungs to tissues.",
    subtopic: "gaseous exchange mechanisms"
  },
  {
    question: "Most carbon dioxide is transported in the blood as?",
    options: [
      "A. Free gas in red cells",
      "B. Bicarbonate ions in plasma",
      "C. Bound to haemoglobin only",
      "D. In the lungs only"
    ],
    answer: "B",
    explanation: "CO2 is mainly carried as bicarbonate in plasma.",
    subtopic: "gaseous exchange mechanisms"
  },
  {
    question: "Ventilation refers to the?",
    options: [
      "A. Exchange of gases in cells",
      "B. Movement of air in and out of the lungs",
      "C. Pumping of blood",
      "D. Transport in xylem"
    ],
    answer: "B",
    explanation: "Ventilation is breathing — air movement in and out.",
    subtopic: "gaseous exchange mechanisms"
  },
  {
    question: "A feature that makes alveoli efficient is their?",
    options: [
      "A. Thick walls",
      "B. Huge number and moist thin walls",
      "C. Lack of blood supply",
      "D. Dry surface"
    ],
    answer: "B",
    explanation: "Many moist thin-walled alveoli maximise exchange.",
    subtopic: "respiratory surfaces"
  },
  {
    question: "The main respiratory organ of a mammal is the?",
    options: [
      "A. Gill",
      "B. Lung",
      "C. Trachea",
      "D. Skin"
    ],
    answer: "B",
    explanation: "Mammals breathe with lungs.",
    subtopic: "respiratory surfaces"
  },
  {
    question: "In the counter-current system of fish, blood with low oxygen meets water with?",
    options: [
      "A. Low oxygen",
      "B. High oxygen, maintaining a gradient",
      "C. No oxygen",
      "D. Carbon dioxide only"
    ],
    answer: "B",
    explanation: "Opposite flow keeps water O2 higher than blood O2 along the gill.",
    subtopic: "gaseous exchange mechanisms"
  },
  {
    question: "Which of the following would REDUCE gas exchange efficiency?",
    options: [
      "A. Thin moist surface",
      "B. Thickening of the exchange membrane",
      "C. Good blood supply",
      "D. Large surface area"
    ],
    answer: "B",
    explanation: "A thicker barrier slows diffusion.",
    subtopic: "respiratory surfaces"
  },
  {
    question: "The process by which oxygen passes from alveolus to blood is driven by?",
    options: [
      "A. A concentration gradient",
      "B. Active transport using ATP",
      "C. Osmosis",
      "D. Gravity"
    ],
    answer: "A",
    explanation: "Diffusion follows the O2 gradient from air to blood.",
    subtopic: "gaseous exchange mechanisms"
  },
  {
    question: "Breathing rate increases during exercise because muscles need more?",
    options: [
      "A. Carbon dioxide",
      "B. Oxygen and energy",
      "C. Nitrogen",
      "D. Water only"
    ],
    answer: "B",
    explanation: "Active muscles demand more O2 and produce more CO2.",
    subtopic: "gaseous exchange mechanisms"
  },
  {
    question: "A respiratory surface that is 'moist' is important because?",
    options: [
      "A. Gases must first dissolve",
      "B. It makes sound",
      "C. It blocks bacteria",
      "D. It warms the blood"
    ],
    answer: "A",
    explanation: "Dissolved gases diffuse across cell membranes more readily.",
    subtopic: "respiratory surfaces"
  },
  {
    question: "The lungs are located in the?",
    options: [
      "A. Abdominal cavity",
      "B. Thoracic (chest) cavity",
      "C. Pelvis",
      "D. Skull"
    ],
    answer: "B",
    explanation: "Lungs occupy the thoracic cavity protected by ribs.",
    subtopic: "respiratory surfaces"
  },
  {
    question: "Which of the following is a correct pathway of air in humans?",
    options: [
      "A. Trachea → bronchus → bronchiole → alveolus",
      "B. Alveolus → bronchiole → bronchus → trachea",
      "C. Lung → larynx → nose",
      "D. Bronchus → trachea → nose"
    ],
    answer: "A",
    explanation: "Air flows trachea → bronchi → bronchioles → alveoli.",
    subtopic: "respiratory surfaces"
  },
  {
    question: "The amount of air moved in and out at rest is the?",
    options: [
      "A. Vital capacity",
      "B. Tidal volume",
      "C. Residual volume",
      "D. Total lung capacity"
    ],
    answer: "B",
    explanation: "Tidal volume is the normal resting breath volume.",
    subtopic: "gaseous exchange mechanisms"
  }
];

module.exports = questions;
