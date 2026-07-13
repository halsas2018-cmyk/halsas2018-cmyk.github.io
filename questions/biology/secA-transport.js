// biology — Transport in Living Things
const questions = [
  {
    question: "Transport is needed in multicellular organisms because?",
    options: [
      "A. All cells are in direct contact with the environment",
      "B. Internal cells are far from the environment and need materials delivered",
      "C. They do not respire",
      "D. They are unicellular"
    ],
    answer: "B",
    explanation: "Large bodies require systems to move substances to and from internal cells.",
    subtopic: "need for transport"
  },
  {
    question: "In single-celled organisms, transport of materials occurs mainly by?",
    options: [
      "A. A circulatory system",
      "B. Diffusion across the cell membrane",
      "C. Blood vessels",
      "D. Xylem"
    ],
    answer: "B",
    explanation: "Small size lets unicells rely on diffusion directly.",
    subtopic: "need for transport"
  },
  {
    question: "The need for a transport system increases as an organism's?",
    options: [
      "A. Size decreases",
      "B. Surface-area-to-volume ratio decreases",
      "C. Cells become fewer",
      "D. Metabolism stops"
    ],
    answer: "B",
    explanation: "Lower surface-area-to-volume ratio means diffusion alone is insufficient.",
    subtopic: "need for transport"
  },
  {
    question: "Materials commonly transported in organisms include all EXCEPT?",
    options: [
      "A. Oxygen",
      "B. Food (glucose)",
      "C. Waste products",
      "D. Moonlight"
    ],
    answer: "D",
    explanation: "Moonlight is not a substance transported by organisms.",
    subtopic: "need for transport"
  },
  {
    question: "The human transport system consists of?",
    options: [
      "A. Xylem and phloem",
      "B. Heart, blood and blood vessels",
      "C. Tracheae",
      "D. Gills only"
    ],
    answer: "B",
    explanation: "The circulatory system (heart, blood, vessels) transports in mammals.",
    subtopic: "animals"
  },
  {
    question: "Blood is transported in vessels called?",
    options: [
      "A. Xylem",
      "B. Arteries, veins and capillaries",
      "C. Tracheids",
      "D. Sieve tubes"
    ],
    answer: "B",
    explanation: "Blood moves through arteries, veins and capillaries.",
    subtopic: "animals"
  },
  {
    question: "The heart pumps blood and is made mainly of?",
    options: [
      "A. Skeletal muscle",
      "B. Cardiac muscle",
      "C. Nervous tissue",
      "D. Bone"
    ],
    answer: "B",
    explanation: "The heart is cardiac muscle that contracts rhythmically.",
    subtopic: "animals"
  },
  {
    question: "Arteries carry blood?",
    options: [
      "A. Always toward the heart",
      "B. Away from the heart (usually oxygenated)",
      "C. Only to the lungs",
      "D. Only deoxygenated"
    ],
    answer: "B",
    explanation: "Arteries transport blood away from the heart (pulmonary artery is an exception, deoxygenated).",
    subtopic: "animals"
  },
  {
    question: "Veins carry blood?",
    options: [
      "A. Away from the heart",
      "B. Toward the heart",
      "C. Only to the brain",
      "D. Only oxygenated"
    ],
    answer: "B",
    explanation: "Veins return blood toward the heart.",
    subtopic: "animals"
  },
  {
    question: "The smallest blood vessels where exchange occurs are?",
    options: [
      "A. Arteries",
      "B. Capillaries",
      "C. Veins",
      "D. Arterioles only"
    ],
    answer: "B",
    explanation: "Capillary walls are thin for material exchange with tissues.",
    subtopic: "animals"
  },
  {
    question: "Which blood component transports oxygen?",
    options: [
      "A. White blood cells",
      "B. Red blood cells (haemoglobin)",
      "C. Platelets",
      "D. Plasma proteins only"
    ],
    answer: "B",
    explanation: "Haemoglobin in red cells binds and carries oxygen.",
    subtopic: "animals"
  },
  {
    question: "Plasma is the?",
    options: [
      "A. Solid part of blood",
      "B. Liquid part that carries dissolved substances",
      "C. Same as red cells",
      "D. A type of vessel"
    ],
    answer: "B",
    explanation: "Plasma is the fluid matrix transporting nutrients, wastes and hormones.",
    subtopic: "animals"
  },
  {
    question: "Red blood cells are specialised for transport because they?",
    options: [
      "A. Have a nucleus",
      "B. Contain haemoglobin and have a large surface area",
      "C. Are square",
      "D. Cannot carry gas"
    ],
    answer: "B",
    explanation: "Their biconcave shape and haemoglobin maximise oxygen carriage.",
    subtopic: "animals"
  },
  {
    question: "Platelets in blood help in?",
    options: [
      "A. Transporting oxygen",
      "B. Clotting (stopping bleeding)",
      "C. Fighting infection",
      "D. Carrying food"
    ],
    answer: "B",
    explanation: "Platelets initiate blood clotting at wounds.",
    subtopic: "animals"
  },
  {
    question: "White blood cells function mainly in?",
    options: [
      "A. Clotting",
      "B. Defence against disease",
      "C. Oxygen transport",
      "D. Food transport"
    ],
    answer: "B",
    explanation: "Leucocytes are part of the immune defence.",
    subtopic: "animals"
  },
  {
    question: "The double circulation in mammals means blood passes through the heart?",
    options: [
      "A. Once per circuit",
      "B. Twice per complete circuit (lungs and body)",
      "C. Never",
      "D. Four times"
    ],
    answer: "B",
    explanation: "Pulmonary and systemic circuits mean blood visits the heart twice per loop.",
    subtopic: "animals"
  },
  {
    question: "In the pulmonary circulation, blood goes from the heart to the?",
    options: [
      "A. Body",
      "B. Lungs",
      "C. Liver",
      "D. Kidneys"
    ],
    answer: "B",
    explanation: "Pulmonary circulation carries blood to the lungs for gas exchange.",
    subtopic: "animals"
  },
  {
    question: "The blood vessel that carries deoxygenated blood from the heart to the lungs is the?",
    options: [
      "A. Aorta",
      "B. Pulmonary artery",
      "C. Pulmonary vein",
      "D. Vena cava"
    ],
    answer: "B",
    explanation: "The pulmonary artery is the exception: it carries deoxygenated blood away from heart.",
    subtopic: "animals"
  },
  {
    question: "The vessel that returns oxygenated blood from the lungs to the heart is the?",
    options: [
      "A. Pulmonary artery",
      "B. Pulmonary vein",
      "C. Aorta",
      "D. Vena cava"
    ],
    answer: "B",
    explanation: "The pulmonary vein returns oxygenated blood to the left atrium.",
    subtopic: "animals"
  },
  {
    question: "The largest artery in the body is the?",
    options: [
      "A. Pulmonary artery",
      "B. Aorta",
      "C. Vena cava",
      "D. Capillary"
    ],
    answer: "B",
    explanation: "The aorta is the main artery leaving the left ventricle.",
    subtopic: "animals"
  },
  {
    question: "In fish, blood passes through the heart?",
    options: [
      "A. Twice per circuit",
      "B. Once per circuit (single circulation)",
      "C. Never",
      "D. Three times"
    ],
    answer: "B",
    explanation: "Fish have single circulation: heart → gills → body → heart.",
    subtopic: "animals"
  },
  {
    question: "The open circulatory system is found in?",
    options: [
      "A. Mammals",
      "B. Insects and many arthropods",
      "C. Birds",
      "D. Fish"
    ],
    answer: "B",
    explanation: "Arthropods have an open system where haemolymph bathes tissues directly.",
    subtopic: "animals"
  },
  {
    question: "In a closed circulatory system, blood stays within?",
    options: [
      "A. The environment",
      "B. Vessels (heart and blood vessels)",
      "C. The gut only",
      "D. The skin"
    ],
    answer: "B",
    explanation: "Closed systems (vertebrates) keep blood inside vessels.",
    subtopic: "animals"
  },
  {
    question: "Lymph is a fluid that?",
    options: [
      "A. Is the same as blood",
      "B. Returns excess tissue fluid to the blood",
      "C. Carries oxygen only",
      "D. Is found in plants"
    ],
    answer: "B",
    explanation: "The lymphatic system returns interstitial fluid to circulation.",
    subtopic: "animals"
  },
  {
    question: "Valves in veins prevent?",
    options: [
      "A. Oxygen entry",
      "B. Backflow of blood",
      "C. Clotting",
      "D. Nutrient transport"
    ],
    answer: "B",
    explanation: "Venous valves stop blood flowing backwards.",
    subtopic: "animals"
  },
  {
    question: "Pulse is caused by?",
    options: [
      "A. Breathing",
      "B. The rhythmic beating of the heart pushing blood",
      "C. Digestion",
      "D. Nerve signals"
    ],
    answer: "B",
    explanation: "Each heartbeat sends a pressure wave detectable as a pulse.",
    subtopic: "animals"
  },
  {
    question: "In plants, water and minerals are transported upward by the?",
    options: [
      "A. Phloem",
      "B. Xylem",
      "C. Cortex",
      "D. Epidermis"
    ],
    answer: "B",
    explanation: "Xylem conducts water and dissolved minerals from roots to shoots.",
    subtopic: "plants"
  },
  {
    question: "Food (sugars) made in leaves is transported by the?",
    options: [
      "A. Xylem",
      "B. Phloem",
      "C. Wood",
      "D. Cambium"
    ],
    answer: "B",
    explanation: "Phloem translocates photosynthetic products throughout the plant.",
    subtopic: "plants"
  },
  {
    question: "Xylem is composed mainly of?",
    options: [
      "A. Living cells",
      "B. Dead lignified vessels and tracheids",
      "C. Sieve tubes",
      "D. Companion cells"
    ],
    answer: "B",
    explanation: "Xylem vessels/tracheids are dead, lignified tubes for water.",
    subtopic: "plants"
  },
  {
    question: "Phloem is made of?",
    options: [
      "A. Dead vessels",
      "B. Living sieve tubes and companion cells",
      "C. Tracheids only",
      "D. Xylem fibres"
    ],
    answer: "B",
    explanation: "Phloem sieve tubes (alive, with companion cells) transport sugars.",
    subtopic: "plants"
  },
  {
    question: "Water rises in xylem mainly due to?",
    options: [
      "A. Root pressure alone",
      "B. Transpiration pull and cohesion-tension",
      "C. Active pumping by leaves",
      "D. Gravity"
    ],
    answer: "B",
    explanation: "Transpiration pull plus cohesion of water columns drives ascent.",
    subtopic: "plants"
  },
  {
    question: "Transpiration is the loss of water as vapour mainly from?",
    options: [
      "A. Roots",
      "B. Leaves (stomata)",
      "C. Flowers only",
      "D. Seeds"
    ],
    answer: "B",
    explanation: "Most transpiration occurs through leaf stomata.",
    subtopic: "plants"
  },
  {
    question: "The force that helps draw water up a plant due to evaporation is?",
    options: [
      "A. Transpiration pull",
      "B. Osmosis only",
      "C. Diffusion of minerals",
      "D. Gravity"
    ],
    answer: "A",
    explanation: "Transpiration pull creates tension pulling the water column upward.",
    subtopic: "plants"
  },
  {
    question: "Root pressure can push water upward especially?",
    options: [
      "A. At night when transpiration is low",
      "B. Only in animals",
      "C. During heavy transpiration",
      "D. In leaves only"
    ],
    answer: "A",
    explanation: "Root pressure (positive) is noticeable when transpiration is minimal.",
    subtopic: "plants"
  },
  {
    question: "The movement of manufactured food in phloem is called?",
    options: [
      "A. Transpiration",
      "B. Translocation",
      "C. Ascent of sap",
      "D. Guttation"
    ],
    answer: "B",
    explanation: "Translocation is the transport of sugars in the phloem.",
    subtopic: "plants"
  },
  {
    question: "Xylem vessels are strengthened by?",
    options: [
      "A. Cellulose only",
      "B. Lignin",
      "C. Chitin",
      "D. Protein"
    ],
    answer: "B",
    explanation: "Lignin thickens and strengthens xylem walls.",
    subtopic: "plants"
  },
  {
    question: "Which tissue in plants conducts both water and food?",
    options: [
      "A. Only xylem",
      "B. Xylem (water) and phloem (food)",
      "C. Parenchyma",
      "D. Collenchyma"
    ],
    answer: "B",
    explanation: "Xylem and phloem together form the vascular (transport) tissue.",
    subtopic: "plants"
  },
  {
    question: "Water enters the xylem of the root from the?",
    options: [
      "A. Leaf",
      "B. Root hair (by osmosis)",
      "C. Flower",
      "D. Seed"
    ],
    answer: "B",
    explanation: "Root hairs absorb soil water which passes into xylem.",
    subtopic: "plants"
  },
  {
    question: "The vascular bundle in a dicot stem contains?",
    options: [
      "A. Only phloem",
      "B. Xylem and phloem",
      "C. Only xylem",
      "D. Parenchyma only"
    ],
    answer: "B",
    explanation: "Vascular bundles have both xylem (inside) and phloem (outside).",
    subtopic: "plants"
  },
  {
    question: "Guttation is the appearance of water droplets at leaf edges due to?",
    options: [
      "A. Transpiration",
      "B. Root pressure",
      "C. Photosynthesis",
      "D. Respiration"
    ],
    answer: "B",
    explanation: "Guttation occurs when root pressure pushes water out of hydathodes.",
    subtopic: "plants"
  },
  {
    question: "The main driving force for water movement in tall trees is?",
    options: [
      "A. Root pressure",
      "B. Transpiration pull",
      "C. Capillary action alone",
      "D. Active transport in leaves"
    ],
    answer: "B",
    explanation: "Transpiration pull is the dominant force in tall plants.",
    subtopic: "plants"
  },
  {
    question: "Which of these increases the rate of transpiration?",
    options: [
      "A. High humidity",
      "B. Wind / low humidity",
      "C. Darkness",
      "D. Closed stomata"
    ],
    answer: "B",
    explanation: "Wind and dry air speed water loss from leaves.",
    subtopic: "plants"
  },
  {
    question: "Stomata are pores on leaves that allow?",
    options: [
      "A. Only water entry",
      "B. Gas exchange and transpiration",
      "C. Food storage",
      "D. Support"
    ],
    answer: "B",
    explanation: "Stomata permit CO2/O2 exchange and water vapour loss.",
    subtopic: "plants"
  },
  {
    question: "The opening and closing of stomata is controlled by?",
    options: [
      "A. Xylem",
      "B. Guard cells",
      "C. Phloem",
      "D. Epidermis only"
    ],
    answer: "B",
    explanation: "Guard cells regulate stomatal aperture.",
    subtopic: "plants"
  },
  {
    question: "Capillary walls are thin to allow?",
    options: [
      "A. Strong pumping",
      "B. Exchange of materials with tissues",
      "C. Storage of blood",
      "D. Clotting only"
    ],
    answer: "B",
    explanation: "Thin walls permit diffusion between blood and cells.",
    subtopic: "animals"
  },
  {
    question: "The circulatory system of mammals is described as?",
    options: [
      "A. Open",
      "B. Closed and double",
      "C. Single only",
      "D. Non-existent"
    ],
    answer: "B",
    explanation: "Mammals have a closed, double circulatory system.",
    subtopic: "animals"
  },
  {
    question: "Which of the following is transported by blood plasma?",
    options: [
      "A. Only red cells",
      "B. Dissolved nutrients, CO2, hormones and wastes",
      "C. Only oxygen",
      "D. Bone"
    ],
    answer: "B",
    explanation: "Plasma carries dissolved nutrients, gases, hormones and wastes.",
    subtopic: "animals"
  },
  {
    question: "A disadvantage of an open circulatory system is that?",
    options: [
      "A. It is very fast",
      "B. Transport is slower and less directed",
      "C. It uses vessels",
      "D. It has a heart"
    ],
    answer: "B",
    explanation: "Open systems bathe tissues loosely, so delivery is less efficient.",
    subtopic: "animals"
  },
  {
    question: "In plants, the dead element that conducts water efficiently is the?",
    options: [
      "A. Sieve tube",
      "B. Vessel element (xylem)",
      "C. Companion cell",
      "D. Guard cell"
    ],
    answer: "B",
    explanation: "Xylem vessel elements are dead and form continuous water pipes.",
    subtopic: "plants"
  },
  {
    question: "Companion cells are associated with?",
    options: [
      "A. Xylem vessels",
      "B. Phloem sieve tubes",
      "C. Tracheids",
      "D. Guard cells"
    ],
    answer: "B",
    explanation: "Companion cells support the living sieve tubes metabolically.",
    subtopic: "plants"
  },
  {
    question: "The transport of substances in a plant relies on?",
    options: [
      "A. A heart",
      "B. Xylem and phloem (vascular tissue)",
      "C. Blood",
      "D. Capillaries"
    ],
    answer: "B",
    explanation: "Plants use vascular tissue (xylem/phloem), not blood.",
    subtopic: "plants"
  },
  {
    question: "Which statement about transport is TRUE?",
    options: [
      "A. Unicells need no transport at all",
      "B. Larger organisms need specialised transport systems",
      "C. Plants have hearts",
      "D. Animals use xylem"
    ],
    answer: "B",
    explanation: "Size and complexity demand dedicated transport systems.",
    subtopic: "need for transport"
  },
  {
    question: "The liquid in an insect's open circulatory system is called?",
    options: [
      "A. Blood",
      "B. Haemolymph",
      "C. Plasma",
      "D. Lymph"
    ],
    answer: "B",
    explanation: "Arthropods circulate haemolymph in body cavities.",
    subtopic: "animals"
  },
  {
    question: "Minerals absorbed by roots reach the leaves through the?",
    options: [
      "A. Phloem",
      "B. Xylem",
      "C. Cortex only",
      "D. Epidermis"
    ],
    answer: "B",
    explanation: "Dissolved minerals travel upward in the xylem.",
    subtopic: "plants"
  },
  {
    question: "A major difference between xylem and phloem is that xylem?",
    options: [
      "A. Carries sugar downward only",
      "B. Carries water upward and is mostly dead tissue",
      "C. Is living sieve tubes",
      "D. Is found only in animals"
    ],
    answer: "B",
    explanation: "Xylem is dead, water-conducting; phloem is living, food-conducting.",
    subtopic: "plants"
  }
];

module.exports = questions;
