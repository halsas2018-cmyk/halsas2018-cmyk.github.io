// biology — Tissues & Supporting Systems
const questions = [
  {
    question: "The human skeleton is described as an endoskeleton because it is?",
    options: [
      "A. Outside the body",
      "B. Inside the body",
      "C. Made of chitin",
      "D. Absent in adults"
    ],
    answer: "B",
    explanation: "An endoskeleton lies within the body (bones inside).",
    subtopic: "skeleton"
  },
  {
    question: "The exoskeleton of insects is made mainly of?",
    options: [
      "A. Bone",
      "B. Chitin",
      "C. Cellulose",
      "D. Calcium carbonate only"
    ],
    answer: "B",
    explanation: "Arthropod exoskeletons are composed of chitin.",
    subtopic: "skeleton"
  },
  {
    question: "The human skull is made up of?",
    options: [
      "A. A single bone",
      "B. Several fused bones protecting the brain",
      "C. Cartilage only",
      "D. Muscle"
    ],
    answer: "B",
    explanation: "The skull consists of cranial and facial bones enclosing the brain.",
    subtopic: "skeleton"
  },
  {
    question: "The backbone (vertebral column) is part of the?",
    options: [
      "A. Appendicular skeleton",
      "B. Axial skeleton",
      "C. Exoskeleton",
      "D. Cartilage only"
    ],
    answer: "B",
    explanation: "The axial skeleton includes skull, vertebrae, ribs and sternum.",
    subtopic: "skeleton"
  },
  {
    question: "The bones of the limbs and girdles make up the?",
    options: [
      "A. Axial skeleton",
      "B. Appendicular skeleton",
      "C. Exoskeleton",
      "D. Cartilage"
    ],
    answer: "B",
    explanation: "The appendicular skeleton comprises the limbs and their girdles.",
    subtopic: "skeleton"
  },
  {
    question: "The function of the skeleton includes all EXCEPT?",
    options: [
      "A. Support",
      "B. Protection of organs",
      "C. Production of blood cells",
      "D. Photosynthesis"
    ],
    answer: "D",
    explanation: "Skeletons do not photosynthesise; they support, protect and make blood cells.",
    subtopic: "skeleton"
  },
  {
    question: "Red blood cells are produced in the?",
    options: [
      "A. Liver only",
      "B. Bone marrow",
      "C. Skin",
      "D. Cartilage"
    ],
    answer: "B",
    explanation: "Red marrow in bones produces blood cells (haemopoiesis).",
    subtopic: "skeleton"
  },
  {
    question: "The joint between the skull bones is an example of a?",
    options: [
      "A. Movable joint",
      "B. Immovable (fixed) joint",
      "C. Ball-and-socket joint",
      "D. Hinge joint"
    ],
    answer: "B",
    explanation: "Skull sutures are fixed joints allowing little/no movement.",
    subtopic: "skeleton"
  },
  {
    question: "The knee is an example of a?",
    options: [
      "A. Ball-and-socket joint",
      "B. Hinge joint",
      "C. Fixed joint",
      "D. Pivot joint"
    ],
    answer: "B",
    explanation: "The knee permits movement in one plane like a hinge.",
    subtopic: "skeleton"
  },
  {
    question: "The hip joint is an example of a?",
    options: [
      "A. Hinge joint",
      "B. Ball-and-socket joint",
      "C. Fixed joint",
      "D. Gliding joint only"
    ],
    answer: "B",
    explanation: "The hip is a ball-and-socket joint allowing rotation.",
    subtopic: "skeleton"
  },
  {
    question: "Cartilage is found at the ends of bones in joints to?",
    options: [
      "A. Cause friction",
      "B. Reduce friction and absorb shock",
      "C. Make bone soft",
      "D. Stop movement"
    ],
    answer: "B",
    explanation: "Cartilage cushions and smooths joint surfaces.",
    subtopic: "skeleton"
  },
  {
    question: "Ligaments connect?",
    options: [
      "A. Muscle to bone",
      "B. Bone to bone",
      "C. Bone to cartilage",
      "D. Skin to muscle"
    ],
    answer: "B",
    explanation: "Ligaments are fibrous bands joining bone to bone at joints.",
    subtopic: "skeleton"
  },
  {
    question: "Tendons connect?",
    options: [
      "A. Bone to bone",
      "B. Muscle to bone",
      "C. Cartilage to bone",
      "D. Skin to skin"
    ],
    answer: "B",
    explanation: "Tendons attach muscles to bones, transmitting force.",
    subtopic: "skeleton"
  },
  {
    question: "The soft spot in a baby's skull is called the?",
    options: [
      "A. Cartilage",
      "B. Fontanelle",
      "C. Marrow",
      "D. Suture"
    ],
    answer: "B",
    explanation: "Fontanelles are membranous gaps in an infant's skull that later close.",
    subtopic: "skeleton"
  },
  {
    question: "Bones are hardened by the deposition of?",
    options: [
      "A. Chitin",
      "B. Calcium and phosphate salts",
      "C. Cellulose",
      "D. Starch"
    ],
    answer: "B",
    explanation: "Mineral salts (calcium phosphate) make bone hard.",
    subtopic: "skeleton"
  },
  {
    question: "The human rib cage protects the?",
    options: [
      "A. Brain",
      "B. Heart and lungs",
      "C. Liver only",
      "D. Kidneys"
    ],
    answer: "B",
    explanation: "The rib cage shields the thoracic organs (heart, lungs).",
    subtopic: "skeleton"
  },
  {
    question: "Which of the following is a function of the vertebral column?",
    options: [
      "A. Pumping blood",
      "B. Protecting the spinal cord and supporting the body",
      "C. Digesting food",
      "D. Filtering blood"
    ],
    answer: "B",
    explanation: "The spine encloses the spinal cord and supports the trunk.",
    subtopic: "skeleton"
  },
  {
    question: "The skeleton provides a surface for the attachment of?",
    options: [
      "A. Nerves only",
      "B. Muscles",
      "C. Cartilage only",
      "D. Skin only"
    ],
    answer: "B",
    explanation: "Muscles attach to bones to enable movement.",
    subtopic: "skeleton"
  },
  {
    question: "An exoskeleton differs from an endoskeleton in that it?",
    options: [
      "A. Is inside the body",
      "B. Is outside the body and must be moulted to grow",
      "C. Is made of bone",
      "D. Produces blood cells"
    ],
    answer: "B",
    explanation: "Exoskeletons are external and limit growth, requiring moulting.",
    subtopic: "skeleton"
  },
  {
    question: "The pectoral girdle connects the?",
    options: [
      "A. Hind limbs",
      "B. Upper limbs (arms) to the trunk",
      "C. Skull to spine",
      "D. Ribs to pelvis"
    ],
    answer: "B",
    explanation: "The pectoral (shoulder) girdle anchors the arms.",
    subtopic: "skeleton"
  },
  {
    question: "The pelvic girdle supports the?",
    options: [
      "A. Arms",
      "B. Lower limbs (legs) and bears body weight",
      "C. Skull",
      "D. Ribs"
    ],
    answer: "B",
    explanation: "The pelvis attaches the legs and transfers weight to them.",
    subtopic: "skeleton"
  },
  {
    question: "Osteoporosis is a condition in which bones become?",
    options: [
      "A. Too hard",
      "B. Weak and porous due to mineral loss",
      "C. Longer",
      "D. Fused"
    ],
    answer: "B",
    explanation: "Osteoporosis is loss of bone density and strength.",
    subtopic: "skeleton"
  },
  {
    question: "The skeleton of sharks is made of?",
    options: [
      "A. Bone",
      "B. Cartilage",
      "C. Chitin",
      "D. Cellulose"
    ],
    answer: "B",
    explanation: "Cartilaginous fish (sharks) have a cartilage skeleton.",
    subtopic: "skeleton"
  },
  {
    question: "Which of these is a movable joint?",
    options: [
      "A. Skull suture",
      "B. Shoulder joint",
      "C. Pelvic fusion",
      "D. Tooth socket only"
    ],
    answer: "B",
    explanation: "The shoulder is a freely movable ball-and-socket joint.",
    subtopic: "skeleton"
  },
  {
    question: "The substance that gives bones their flexibility as well as hardness is?",
    options: [
      "A. Only calcium",
      "B. Collagen fibres plus mineral salts",
      "C. Chitin",
      "D. Keratin"
    ],
    answer: "B",
    explanation: "Collagen provides flexibility; minerals provide hardness.",
    subtopic: "skeleton"
  },
  {
    question: "In plants, the tissue that provides rigid support is?",
    options: [
      "A. Parenchyma",
      "B. Collenchyma and sclerenchyma",
      "C. Xylem only for water",
      "D. Phloem"
    ],
    answer: "B",
    explanation: "Collenchyma and sclerenchyma are supporting tissues in plants.",
    subtopic: "plant supporting tissues"
  },
  {
    question: "Sclerenchyma cells are characterised by having?",
    options: [
      "A. Thin living walls",
      "B. Thick lignified dead walls",
      "C. No walls",
      "D. Chloroplasts"
    ],
    answer: "B",
    explanation: "Sclerenchyma (fibres, sclereids) have thick lignified, often dead walls for strength.",
    subtopic: "plant supporting tissues"
  },
  {
    question: "Collenchyma tissue provides support mainly in?",
    options: [
      "A. Woody stems",
      "B. Young growing stems and petioles",
      "C. Roots only",
      "D. Flowers only"
    ],
    answer: "B",
    explanation: "Collenchyma supports young, elongating plant parts.",
    subtopic: "plant supporting tissues"
  },
  {
    question: "The woody part of a tree stem is mainly?",
    options: [
      "A. Parenchyma",
      "B. Sclerenchyma and xylem (lignified)",
      "C. Collenchyma only",
      "D. Phloem only"
    ],
    answer: "B",
    explanation: "Wood is lignified xylem and sclerenchyma giving rigidity.",
    subtopic: "plant supporting tissues"
  },
  {
    question: "Xylem vessels contribute to support because their walls are?",
    options: [
      "A. Thin and flexible",
      "B. Thickened and lignified",
      "C. Absent",
      "D. Made of chitin"
    ],
    answer: "B",
    explanation: "Lignified xylem walls also give mechanical support to the plant.",
    subtopic: "plant supporting tissues"
  },
  {
    question: "Turgor pressure in plant cells provides?",
    options: [
      "A. No support",
      "B. Temporary (hydraulic) support to soft tissues",
      "C. Rigid wood",
      "D. Movement only"
    ],
    answer: "B",
    explanation: "Water-filled cells pressurised against walls keep herbaceous parts erect.",
    subtopic: "plant supporting tissues"
  },
  {
    question: "Parenchyma cells are generally?",
    options: [
      "A. Dead and thick-walled",
      "B. Living, thin-walled and for storage/photosynthesis",
      "C. Lignified",
      "D. Non-existent"
    ],
    answer: "B",
    explanation: "Parenchyma are living thin-walled cells for storage and metabolism.",
    subtopic: "plant supporting tissues"
  },
  {
    question: "The tissue that makes up jute and hemp fibres is?",
    options: [
      "A. Parenchyma",
      "B. Sclerenchyma",
      "C. Collenchyma",
      "D. Xylem vessels only"
    ],
    answer: "B",
    explanation: "Plant fibres are sclerenchyma cells.",
    subtopic: "plant supporting tissues"
  },
  {
    question: "Lignin is deposited in cell walls to make them?",
    options: [
      "A. Softer",
      "B. Hard, waterproof and strong",
      "C. Edible",
      "D. Colourless only"
    ],
    answer: "B",
    explanation: "Lignin strengthens and waterproofs walls (woodiness).",
    subtopic: "plant supporting tissues"
  },
  {
    question: "Which plant tissue is alive at maturity and has unevenly thickened walls?",
    options: [
      "A. Sclerenchyma",
      "B. Collenchyma",
      "C. Xylem vessel",
      "D. Tracheid (dead)"
    ],
    answer: "B",
    explanation: "Collenchyma cells are living with thickened corners.",
    subtopic: "plant supporting tissues"
  },
  {
    question: "A woody stem can stand upright mainly due to?",
    options: [
      "A. Turgor alone",
      "B. Lignified xylem and sclerenchyma",
      "C. Parenchyma",
      "D. Chloroplasts"
    ],
    answer: "B",
    explanation: "Lignified supporting tissues give permanent rigidity.",
    subtopic: "plant supporting tissues"
  },
  {
    question: "Herbaceous (non-woody) plants stay erect largely because of?",
    options: [
      "A. Wood",
      "B. Turgid parenchyma cells",
      "C. Bones",
      "D. Chitin"
    ],
    answer: "B",
    explanation: "Turgor pressure in thin-walled cells supports soft tissues.",
    subtopic: "plant supporting tissues"
  },
  {
    question: "The supportive tissue in a leaf petiole that allows bending but strength is?",
    options: [
      "A. Sclerenchyma",
      "B. Collenchyma",
      "C. Xylem only",
      "D. Phloem only"
    ],
    answer: "B",
    explanation: "Collenchyma gives flexible support to petioles.",
    subtopic: "plant supporting tissues"
  },
  {
    question: "Bones are living tissues because they contain?",
    options: [
      "A. Only minerals",
      "B. Living cells (osteocytes) and blood vessels",
      "C. No cells",
      "D. Chitin"
    ],
    answer: "B",
    explanation: "Bone has living osteocytes in a mineral matrix with nerves and vessels.",
    subtopic: "skeleton"
  },
  {
    question: "The marrow cavity of a long bone contains?",
    options: [
      "A. Cartilage",
      "B. Bone marrow",
      "C. Muscle",
      "D. Nerves only"
    ],
    answer: "B",
    explanation: "The medullary cavity holds yellow/red marrow.",
    subtopic: "skeleton"
  },
  {
    question: "Which of these protects the brain?",
    options: [
      "A. Rib cage",
      "B. Cranium (skull)",
      "C. Pelvis",
      "D. Vertebrae only"
    ],
    answer: "B",
    explanation: "The cranium encloses and protects the brain.",
    subtopic: "skeleton"
  },
  {
    question: "The axial skeleton consists of all EXCEPT?",
    options: [
      "A. Skull",
      "B. Vertebral column",
      "C. Limb bones",
      "D. Rib cage"
    ],
    answer: "C",
    explanation: "Limb bones belong to the appendicular skeleton.",
    subtopic: "skeleton"
  },
  {
    question: "Joint disorder involving inflammation and pain is called?",
    options: [
      "A. Osteoporosis",
      "B. Arthritis",
      "C. Rickets",
      "D. Fracture"
    ],
    answer: "B",
    explanation: "Arthritis is joint inflammation.",
    subtopic: "skeleton"
  },
  {
    question: "Rickets in children is caused by deficiency of?",
    options: [
      "A. Vitamin C",
      "B. Vitamin D / calcium",
      "C. Iron",
      "D. Protein"
    ],
    answer: "B",
    explanation: "Vitamin D/calcium deficiency softens bones (rickets).",
    subtopic: "skeleton"
  },
  {
    question: "The tough membrane covering the bone surface is the?",
    options: [
      "A. Periosteum",
      "B. Cartilage",
      "C. Marrow",
      "D. Ligament"
    ],
    answer: "A",
    explanation: "The periosteum covers bone and aids growth/repair.",
    subtopic: "skeleton"
  },
  {
    question: "Plant fibres used for rope come from?",
    options: [
      "A. Parenchyma",
      "B. Sclerenchyma",
      "C. Collenchyma",
      "D. Phloem only (not fibres)"
    ],
    answer: "B",
    explanation: "Rope fibres are sclerenchyma (e.g. jute, sisal).",
    subtopic: "plant supporting tissues"
  },
  {
    question: "Which of the following is a function of plant supporting tissue?",
    options: [
      "A. Transport of photosynthesis only",
      "B. Keeping the plant upright and positioning leaves to light",
      "C. Breathing",
      "D. Excretion"
    ],
    answer: "B",
    explanation: "Support holds the plant up so leaves catch light.",
    subtopic: "plant supporting tissues"
  },
  {
    question: "Sclereids (stone cells) are found in?",
    options: [
      "A. Only roots",
      "B. Hard seed coats and fruit grit (e.g. pear)",
      "C. Leaves only",
      "D. Flowers only"
    ],
    answer: "B",
    explanation: "Sclereids give gritty hardness to pears and seed coats.",
    subtopic: "plant supporting tissues"
  },
  {
    question: "The skeleton helps in movement by acting as?",
    options: [
      "A. A source of food",
      "B. Levers to which muscles attach",
      "C. A pump",
      "D. A filter"
    ],
    answer: "B",
    explanation: "Bones act as levers; muscles pull them to move the body.",
    subtopic: "skeleton"
  },
  {
    question: "Which plant cells are dead at maturity and give maximum mechanical strength?",
    options: [
      "A. Collenchyma",
      "B. Sclerenchyma fibres",
      "C. Parenchyma",
      "D. Guard cells"
    ],
    answer: "B",
    explanation: "Sclerenchyma fibres are dead, thick-walled and very strong.",
    subtopic: "plant supporting tissues"
  },
  {
    question: "The human body has about how many bones at adulthood?",
    options: [
      "A. 206",
      "B. 106",
      "C. 306",
      "D. 56"
    ],
    answer: "A",
    explanation: "An adult human skeleton has 206 bones.",
    subtopic: "skeleton"
  },
  {
    question: "A break in a bone is called a?",
    options: [
      "A. Sprain",
      "B. Fracture",
      "C. Dislocation",
      "D. Strain"
    ],
    answer: "B",
    explanation: "A fracture is a broken bone.",
    subtopic: "skeleton"
  },
  {
    question: "Which of these is NOT a plant supporting tissue?",
    options: [
      "A. Collenchyma",
      "B. Sclerenchyma",
      "C. Xylem",
      "D. Neuron"
    ],
    answer: "D",
    explanation: "Neurons are animal nerve cells, not plant support tissue.",
    subtopic: "plant supporting tissues"
  }
];

module.exports = questions;
