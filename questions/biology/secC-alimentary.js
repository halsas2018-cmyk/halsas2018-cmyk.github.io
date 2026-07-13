// biology — Alimentary System
const questions = [
  // ---- Mouth and teeth ----
  {
    question: "Which type of human tooth is chiefly adapted for cutting and biting food?",
    options: [
      "A. Canines",
      "B. Premolars",
      "C. Incisors",
      "D. Molars"
    ],
    answer: "C",
    explanation: "Incisors have sharp chisel-shaped edges suited for cutting and biting; canines tear, while premolars and molars crush and grind.",
    subtopic: "Mouth and teeth"
  },
  {
    question: "The pointed teeth used mainly for tearing flesh in mammals are the?",
    options: [
      "A. Incisors",
      "B. Canines",
      "C. Premolars",
      "D. Molars"
    ],
    answer: "B",
    explanation: "Canines are long, pointed teeth adapted for piercing and tearing food, especially meat.",
    subtopic: "Mouth and teeth"
  },
  {
    question: "Which teeth possess two cusps and help in crushing and grinding food?",
    options: [
      "A. Incisors",
      "B. Canines",
      "C. Premolars",
      "D. Wisdom teeth only"
    ],
    answer: "C",
    explanation: "Premolars have broad surfaces with cusps for crushing and grinding; they lie between canines and molars.",
    subtopic: "Mouth and teeth"
  },
  {
    question: "The hardest substance in the human body is found in the tooth and is called?",
    options: [
      "A. Dentine",
      "B. Enamel",
      "C. Pulp",
      "D. Cementum"
    ],
    answer: "B",
    explanation: "Enamel, covering the crown of a tooth, is the hardest substance in the body and protects against wear.",
    subtopic: "Mouth and teeth"
  },
  {
    question: "The living tissue inside a tooth containing blood vessels and nerves is the?",
    options: [
      "A. Enamel",
      "B. Dentine",
      "C. Pulp cavity",
      "D. Cementum"
    ],
    answer: "C",
    explanation: "The pulp cavity holds connective tissue, blood vessels and nerves that keep the tooth alive.",
    subtopic: "Mouth and teeth"
  },
  {
    question: "Saliva contains an enzyme that begins the digestion of?",
    options: [
      "A. Proteins",
      "B. Fats",
      "C. Starch",
      "D. Cellulose"
    ],
    answer: "C",
    explanation: "Salivary amylase (ptyalin) in saliva starts breaking starch into maltose in the mouth.",
    subtopic: "Mouth and teeth"
  },
  {
    question: "The roof of the mouth that separates the oral cavity from the nasal cavity is the?",
    options: [
      "A. Epiglottis",
      "B. Palate",
      "C. Uvula",
      "D. Tongue"
    ],
    answer: "B",
    explanation: "The palate forms the roof of the mouth; the hard and soft palate separate the mouth from the nasal passages.",
    subtopic: "Mouth and teeth"
  },
  {
    question: "The tongue is important in digestion mainly because it?",
    options: [
      "A. Secretes bile",
      "B. Produces pepsin",
      "C. Manipulates food and forms the bolus",
      "D. Absorbs glucose"
    ],
    answer: "C",
    explanation: "The tongue mixes food with saliva and shapes it into a swallowable bolus; taste and swallowing are also aided.",
    subtopic: "Mouth and teeth"
  },
  {
    question: "The flap that prevents food from entering the trachea during swallowing is the?",
    options: [
      "A. Palate",
      "B. Uvula",
      "C. Epiglottis",
      "D. Glottis"
    ],
    answer: "C",
    explanation: "The epiglottis is a cartilaginous flap that closes over the trachea during swallowing to route food to the oesophagus.",
    subtopic: "Mouth and teeth"
  },
  // ---- Stomach ----
  {
    question: "The muscular tube that conveys food from the mouth to the stomach by peristalsis is the?",
    options: [
      "A. Trachea",
      "B. Oesophagus",
      "C. Duodenum",
      "D. Pharynx"
    ],
    answer: "B",
    explanation: "The oesophagus uses rhythmic peristaltic waves to push the bolus down into the stomach.",
    subtopic: "Stomach"
  },
  {
    question: "The sphincter muscle that controls the entry of food into the stomach is the?",
    options: [
      "A. Pyloric sphincter",
      "B. Cardiac sphincter",
      "C. Ileocecal valve",
      "D. Anal sphincter"
    ],
    answer: "B",
    explanation: "The cardiac (gastro-oesophageal) sphincter at the top of the stomach regulates entry of food from the oesophagus.",
    subtopic: "Stomach"
  },
  {
    question: "The acidic environment of the stomach is produced mainly by?",
    options: [
      "A. Pepsin",
      "B. Mucus",
      "C. Hydrochloric acid",
      "D. Bile salts"
    ],
    answer: "C",
    explanation: "Gastric glands secrete hydrochloric acid, giving the stomach a low pH that activates pepsin and kills microbes.",
    subtopic: "Stomach"
  },
  {
    question: "The enzyme in gastric juice that begins protein digestion is?",
    options: [
      "A. Amylase",
      "B. Lipase",
      "C. Pepsin",
      "D. Trypsin"
    ],
    answer: "C",
    explanation: "Pepsin, secreted as pepsinogen and activated by acid, hydrolyses proteins into shorter polypeptides.",
    subtopic: "Stomach"
  },
  {
    question: "Pepsin is secreted in an inactive form called?",
    options: [
      "A. Pepsinogen",
      "B. Proenzyme",
      "C. Trypsinogen",
      "D. Chymotrypsin"
    ],
    answer: "A",
    explanation: "Chief cells release pepsinogen, which is converted to active pepsin by stomach acid, protecting the cells that make it.",
    subtopic: "Stomach"
  },
  {
    question: "The churning action of the stomach serves to?",
    options: [
      "A. Absorb water",
      "B. Mix food with gastric juice into chyme",
      "C. Produce bile",
      "D. Neutralise acid"
    ],
    answer: "B",
    explanation: "Muscular contractions mix food with gastric secretions, producing a semi-liquid mass called chyme.",
    subtopic: "Stomach"
  },
  {
    question: "The mucus layer lining the stomach primarily?",
    options: [
      "A. Digests protein",
      "B. Protects the wall from acid and enzymes",
      "C. Emulsifies fat",
      "D. Absorbs vitamins"
    ],
    answer: "B",
    explanation: "Mucus shields the stomach epithelium from the corrosive acid and proteolytic enzymes, preventing self-digestion.",
    subtopic: "Stomach"
  },
  {
    question: "The valve that regulates the passage of chyme from the stomach into the small intestine is the?",
    options: [
      "A. Cardiac sphincter",
      "B. Pyloric sphincter",
      "C. Ileocecal valve",
      "D. Sphincter of Oddi"
    ],
    answer: "B",
    explanation: "The pyloric sphincter controls release of chyme from the stomach into the duodenum in small amounts.",
    subtopic: "Stomach"
  },
  // ---- Small intestine ----
  {
    question: "The first part of the small intestine that receives chyme from the stomach is the?",
    options: [
      "A. Ileum",
      "B. Jejunum",
      "C. Duodenum",
      "D. Caecum"
    ],
    answer: "C",
    explanation: "The duodenum is the initial C-shaped segment of the small intestine where most chemical digestion occurs.",
    subtopic: "Small intestine"
  },
  {
    question: "The finger-like projections of the small-intestine wall that increase surface area are called?",
    options: [
      "A. Microvilli",
      "B. Villi",
      "C. Crypts",
      "D. Rugae"
    ],
    answer: "B",
    explanation: "Villi are finger-like folds of the mucosa that vastly increase the absorptive surface of the small intestine.",
    subtopic: "Small intestine"
  },
  {
    question: "The even smaller brush-border projections on villus cells are the?",
    options: [
      "A. Villi",
      "B. Microvilli",
      "C. Cilia",
      "D. Flagella"
    ],
    answer: "B",
    explanation: "Microvilli on the apical surface of enterocytes form the brush border, further expanding the absorptive area.",
    subtopic: "Small intestine"
  },
  {
    question: "Most absorption of digested food occurs in the?",
    options: [
      "A. Stomach",
      "B. Large intestine",
      "C. Small intestine",
      "D. Oesophagus"
    ],
    answer: "C",
    explanation: "The small intestine, with its villi and microvilli, is the major site for absorbing nutrients into the blood and lymph.",
    subtopic: "Small intestine"
  },
  {
    question: "Nutrients from the small intestine are first transported to the liver via the?",
    options: [
      "A. Pulmonary vein",
      "B. Hepatic portal vein",
      "C. Aorta",
      "D. Lymphatic duct"
    ],
    answer: "B",
    explanation: "Absorbed sugars and amino acids enter the hepatic portal vein, which carries them directly to the liver for processing.",
    subtopic: "Small intestine"
  },
  {
    question: "The innermost lining of the small intestine is the?",
    options: [
      "A. Serosa",
      "B. Muscularis",
      "C. Mucosa",
      "D. Submucosa"
    ],
    answer: "C",
    explanation: "The mucosa is the inner epithelial layer bearing villi where secretion and absorption take place.",
    subtopic: "Small intestine"
  },
  {
    question: "The last and longest section of the small intestine is the?",
    options: [
      "A. Duodenum",
      "B. Jejunum",
      "C. Ileum",
      "D. Caecum"
    ],
    answer: "C",
    explanation: "The ileum is the terminal portion of the small intestine, connecting to the large intestine at the ileocecal valve.",
    subtopic: "Small intestine"
  },
  {
    question: "The folds of the small-intestine wall, distinct from villi, are called?",
    options: [
      "A. Rugae",
      "B. Plicae circulares",
      "C. Crypts of Lieberkühn",
      "D. Haustra"
    ],
    answer: "B",
    explanation: "Plicae circulares (circular folds) are permanent mucosal-submucosal folds that slow food and aid absorption.",
    subtopic: "Small intestine"
  },
  {
    question: "Lacteals within the villi mainly absorb?",
    options: [
      "A. Glucose",
      "B. Amino acids",
      "C. Fatty acids and glycerol",
      "D. Water"
    ],
    answer: "C",
    explanation: "Lacteals are lymphatic capillaries in villi that absorb digested fats as chylomicrons.",
    subtopic: "Small intestine"
  },
  // ---- Large intestine ----
  {
    question: "The main function of the large intestine is to?",
    options: [
      "A. Digest proteins",
      "B. Absorb water and salts",
      "C. Produce bile",
      "D. Absorb glucose"
    ],
    answer: "B",
    explanation: "The large intestine reclaims water and electrolytes, compacting the remaining material into faeces.",
    subtopic: "Large intestine"
  },
  {
    question: "The pouch at the beginning of the large intestine is the?",
    options: [
      "A. Ileum",
      "B. Caecum",
      "C. Rectum",
      "D. Colon"
    ],
    answer: "B",
    explanation: "The caecum is the blind-ended pouch where the ileum joins the large intestine; the appendix attaches to it.",
    subtopic: "Large intestine"
  },
  {
    question: "The appendix in humans is generally considered?",
    options: [
      "A. The main site of protein digestion",
      "B. A vestigial structure with minor immune roles",
      "C. The producer of bile",
      "D. Essential for water absorption"
    ],
    answer: "B",
    explanation: "The vermiform appendix is a vestigial outgrowth with some lymphoid tissue but is not essential for digestion.",
    subtopic: "Large intestine"
  },
  {
    question: "The sac-like terminal portion of the digestive tract that stores faeces is the?",
    options: [
      "A. Caecum",
      "B. Colon",
      "C. Rectum",
      "D. Duodenum"
    ],
    answer: "C",
    explanation: "The rectum stores faeces until they are expelled through the anus.",
    subtopic: "Large intestine"
  },
  {
    question: "The pocket-like sacs that give the colon its segmented appearance are called?",
    options: [
      "A. Villi",
      "B. Haustra",
      "C. Rugae",
      "D. Crypts"
    ],
    answer: "B",
    explanation: "Haustra are the bulging pouches formed by the teniae coli, giving the colon its characteristic segmented look.",
    subtopic: "Large intestine"
  },
  {
    question: "Bacteria in the large intestine contribute to health by producing?",
    options: [
      "A. Pepsin",
      "B. Some B vitamins and vitamin K",
      "C. Bile salts",
      "D. Hydrochloric acid"
    ],
    answer: "B",
    explanation: "Gut flora synthesise certain B vitamins and vitamin K, which are absorbed in the large intestine.",
    subtopic: "Large intestine"
  },
  {
    question: "The semisolid waste expelled from the digestive tract consists mainly of?",
    options: [
      "A. Digested protein",
      "B. Undigested fibre, bacteria and dead cells",
      "C. Bile enzymes",
      "D. Absorbed glucose"
    ],
    answer: "B",
    explanation: "Faeces are composed largely of undigested material, intestinal bacteria, sloughed cells and some water.",
    subtopic: "Large intestine"
  },
  {
    question: "The valve separating the small and large intestines is the?",
    options: [
      "A. Pyloric sphincter",
      "B. Cardiac sphincter",
      "C. Ileocecal valve",
      "D. Sphincter of Oddi"
    ],
    answer: "C",
    explanation: "The ileocecal valve at the ileum-caecum junction prevents backflow of colon contents into the small intestine.",
    subtopic: "Large intestine"
  },
  // ---- Digestive enzymes ----
  {
    question: "Amylase catalyses the breakdown of?",
    options: [
      "A. Proteins into peptides",
      "B. Starch into maltose",
      "C. Fats into fatty acids",
      "D. Cellulose into glucose"
    ],
    answer: "B",
    explanation: "Amylase hydrolyses starch (a polysaccharide) into the disaccharide maltose.",
    subtopic: "Digestive enzymes"
  },
  {
    question: "Proteases act on proteins to produce?",
    options: [
      "A. Glucose",
      "B. Fatty acids",
      "C. Peptides and amino acids",
      "D. Glycerol"
    ],
    answer: "C",
    explanation: "Proteolytic enzymes cleave peptide bonds, yielding peptides and eventually free amino acids.",
    subtopic: "Digestive enzymes"
  },
  {
    question: "Lipase digests fats into?",
    options: [
      "A. Glucose and fructose",
      "B. Amino acids",
      "C. Fatty acids and glycerol",
      "D. Maltose"
    ],
    answer: "C",
    explanation: "Lipase hydrolyses triglycerides into fatty acids and glycerol (or monoglycerides).",
    subtopic: "Digestive enzymes"
  },
  {
    question: "The optimum pH for pepsin activity is?",
    options: [
      "A. About 2 (acidic)",
      "B. About 7 (neutral)",
      "C. About 9 (alkaline)",
      "D. About 12 (strongly alkaline)"
    ],
    answer: "A",
    explanation: "Pepsin works best in the strongly acidic stomach (pH ~1.5–2) where it is activated.",
    subtopic: "Digestive enzymes"
  },
  {
    question: "Trypsin, produced by the pancreas, primarily digests?",
    options: [
      "A. Starch",
      "B. Proteins",
      "C. Fats",
      "D. Nucleic acids"
    ],
    answer: "B",
    explanation: "Trypsin is a pancreatic protease that continues protein digestion in the small intestine.",
    subtopic: "Digestive enzymes"
  },
  {
    question: "Pancreatic amylase continues the digestion of?",
    options: [
      "A. Proteins in the stomach",
      "B. Starch in the small intestine",
      "C. Fats in the liver",
      "D. Cellulose in the colon"
    ],
    answer: "B",
    explanation: "Pancreatic amylase enters the duodenum and breaks remaining starch into maltose and dextrins.",
    subtopic: "Digestive enzymes"
  },
  {
    question: "Enzymes are described as biological catalysts because they?",
    options: [
      "A. Are used up in reactions",
      "B. Speed up reactions without being consumed",
      "C. Raise the activation energy",
      "D. Only work once"
    ],
    answer: "B",
    explanation: "Catalysts increase reaction rates by lowering activation energy and are not consumed by the reaction.",
    subtopic: "Digestive enzymes"
  },
  {
    question: "The substrate for the enzyme lipase is?",
    options: [
      "A. Starch",
      "B. Protein",
      "C. Triglyceride (fat)",
      "D. Maltose"
    ],
    answer: "C",
    explanation: "Lipase acts specifically on lipid (triglyceride) substrates, splitting them into fatty acids and glycerol.",
    subtopic: "Digestive enzymes"
  },
  // ---- Accessory organs ----
  {
    question: "Bile is produced by the?",
    options: [
      "A. Gall bladder",
      "B. Pancreas",
      "C. Liver",
      "D. Spleen"
    ],
    answer: "C",
    explanation: "Hepatocytes in the liver synthesise bile; the gall bladder only stores and concentrates it.",
    subtopic: "Accessory organs"
  },
  {
    question: "The main role of bile salts in digestion is to?",
    options: [
      "A. Digest protein",
      "B. Emulsify fats",
      "C. Neutralise acid",
      "D. Absorb water"
    ],
    answer: "B",
    explanation: "Bile salts break large fat globules into tiny droplets (emulsification), increasing the surface area for lipase.",
    subtopic: "Accessory organs"
  },
  {
    question: "The organ that stores and concentrates bile is the?",
    options: [
      "A. Liver",
      "B. Pancreas",
      "C. Gall bladder",
      "D. Spleen"
    ],
    answer: "C",
    explanation: "The gall bladder stores bile from the liver and releases it into the duodenum when needed.",
    subtopic: "Accessory organs"
  },
  {
    question: "The pancreas contributes to digestion by secreting?",
    options: [
      "A. Bile",
      "B. Pancreatic juice containing enzymes",
      "C. Mucus only",
      "D. Hydrochloric acid"
    ],
    answer: "B",
    explanation: "The pancreas releases pancreatic juice rich in amylase, lipase and proteases (e.g. trypsin) into the duodenum.",
    subtopic: "Accessory organs"
  },
  {
    question: "Bile enters the small intestine through the?",
    options: [
      "A. Pyloric sphincter",
      "B. Common bile duct",
      "C. Hepatic portal vein",
      "D. Oesophagus"
    ],
    answer: "B",
    explanation: "Bile flows from the liver/gall bladder via the common bile duct into the duodenum.",
    subtopic: "Accessory organs"
  },
  {
    question: "The pancreas is described as a mixed gland because it?",
    options: [
      "A. Only produces bile",
      "B. Has both exocrine (digestive) and endocrine (insulin) functions",
      "C. Only secretes hormones",
      "D. Stores fat"
    ],
    answer: "B",
    explanation: "Its exocrine acini secrete digestive enzymes, while the Islets of Langerhans release insulin and glucagon.",
    subtopic: "Accessory organs"
  },
  {
    question: "The hormone that stimulates the gall bladder to release bile is?",
    options: [
      "A. Insulin",
      "B. Cholecystokinin (CCK)",
      "C. Adrenaline",
      "D. Thyroxine"
    ],
    answer: "B",
    explanation: "CCK, released when fatty chyme enters the duodenum, causes the gall bladder to contract and release bile.",
    subtopic: "Accessory organs"
  },
  {
    question: "The sphincter of Oddi controls the release of?",
    options: [
      "A. Bile and pancreatic juice into the duodenum",
      "B. Food from the stomach",
      "C. Faeces from the rectum",
      "D. Saliva into the mouth"
    ],
    answer: "A",
    explanation: "The sphincter of Oddi guards the ampulla of Vater, regulating flow of bile and pancreatic juice into the duodenum.",
    subtopic: "Accessory organs"
  }
];

module.exports = questions;
