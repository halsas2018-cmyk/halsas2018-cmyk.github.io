// biology — Animal Nutrition
const questions = [
  // ---------- food substances & sources ----------
  {
    question: "Which class of food is the main source of energy for the human body?",
    options: [
      "A. Proteins",
      "B. Carbohydrates",
      "C. Vitamins",
      "D. Minerals"
    ],
    answer: "B",
    explanation: "Carbohydrates are broken down to glucose, which is the body's primary and most readily used energy source.",
    subtopic: "food substances & sources"
  },
  {
    question: "Kwashiorkor, seen in children weaned onto a starch-based diet, is caused mainly by a deficiency of",
    options: [
      "A. Carbohydrate",
      "B. Protein",
      "C. Vitamin C",
      "D. Calcium"
    ],
    answer: "B",
    explanation: "Kwashiorkor results from inadequate dietary protein intake despite relatively adequate energy (calorie) supply.",
    subtopic: "food substances & sources"
  },
  {
    question: "Scurvy, which causes bleeding gums and loosening of teeth, is due to a deficiency of",
    options: [
      "A. Vitamin A",
      "B. Vitamin B1",
      "C. Vitamin C",
      "D. Vitamin D"
    ],
    answer: "C",
    explanation: "Vitamin C (ascorbic acid) is needed for collagen formation; its deficiency causes scurvy.",
    subtopic: "food substances & sources"
  },
  {
    question: "Rickets in growing children results from a deficiency of",
    options: [
      "A. Iron",
      "B. Vitamin C",
      "C. Calcium and Vitamin D",
      "D. Iodine"
    ],
    answer: "C",
    explanation: "Calcium and vitamin D are required for proper bone mineralisation; their deficiency softens bones (rickets).",
    subtopic: "food substances & sources"
  },
  {
    question: "Night blindness in dim light is caused by a deficiency of",
    options: [
      "A. Vitamin A",
      "B. Vitamin B1",
      "C. Vitamin C",
      "D. Vitamin D"
    ],
    answer: "A",
    explanation: "Vitamin A is needed to form rhodopsin in the retina, so its deficiency impairs vision in low light.",
    subtopic: "food substances & sources"
  },
  {
    question: "A balanced diet is one that contains",
    options: [
      "A. only carbohydrates and proteins",
      "B. all classes of food in the right proportions",
      "C. only fruits and vegetables",
      "D. a very high amount of protein only"
    ],
    answer: "B",
    explanation: "A balanced diet supplies all seven classes of food in proportions appropriate to the individual's needs.",
    subtopic: "food substances & sources"
  },
  {
    question: "Marasmus, characterised by severe wasting, is due to a deficiency of",
    options: [
      "A. protein only",
      "B. overall energy (calories) and protein",
      "C. vitamin C only",
      "D. iron only"
    ],
    answer: "B",
    explanation: "Marasmus is caused by a general deficiency of both calories and protein, leading to extreme emaciation.",
    subtopic: "food substances & sources"
  },
  {
    question: "Beriberi, which affects the nervous and cardiovascular systems, results from a deficiency of",
    options: [
      "A. Vitamin A",
      "B. Vitamin B1 (thiamine)",
      "C. Vitamin C",
      "D. Vitamin D"
    ],
    answer: "B",
    explanation: "Thiamine (vitamin B1) deficiency causes beriberi, damaging nerves and the heart.",
    subtopic: "food substances & sources"
  },
  {
    question: "Pellagra, with the symptoms of dermatitis, diarrhoea and dementia, is caused by a deficiency of",
    options: [
      "A. Vitamin B1",
      "B. Vitamin B3 (niacin)",
      "C. Vitamin C",
      "D. Iron"
    ],
    answer: "B",
    explanation: "Niacin (vitamin B3) deficiency produces pellagra, classically described as the 'three Ds'.",
    subtopic: "food substances & sources"
  },
  {
    question: "Iron-deficiency anaemia is commonly caused by a lack of",
    options: [
      "A. Iron",
      "B. Calcium",
      "C. Vitamin A",
      "D. Iodine"
    ],
    answer: "A",
    explanation: "Iron is required to make haemoglobin; its deficiency reduces red blood cell haemoglobin and causes anaemia.",
    subtopic: "food substances & sources"
  },

  // ---------- digestive enzymes ----------
  {
    question: "Amylase catalyses the breakdown of",
    options: [
      "A. proteins",
      "B. starch",
      "C. fats",
      "D. vitamins"
    ],
    answer: "B",
    explanation: "Amylase hydrolyses starch into maltose, beginning in the mouth and continuing in the small intestine.",
    subtopic: "digestive enzymes"
  },
  {
    question: "Pepsin, which digests proteins, is produced in the",
    options: [
      "A. mouth",
      "B. stomach",
      "C. pancreas",
      "D. small intestine"
    ],
    answer: "B",
    explanation: "Gastric chief cells secrete pepsinogen, which is activated to pepsin in the acidic stomach lumen.",
    subtopic: "digestive enzymes"
  },
  {
    question: "The enzyme that breaks down fats into fatty acids and glycerol is",
    options: [
      "A. amylase",
      "B. protease",
      "C. lipase",
      "D. maltase"
    ],
    answer: "C",
    explanation: "Lipase hydrolyses triglycerides into fatty acids and glycerol for absorption.",
    subtopic: "digestive enzymes"
  },
  {
    question: "Trypsin, an alkaline protease, is secreted by the",
    options: [
      "A. salivary glands",
      "B. stomach",
      "C. pancreas",
      "D. liver"
    ],
    answer: "C",
    explanation: "The pancreas releases trypsin (as trypsinogen) into the duodenum to digest proteins.",
    subtopic: "digestive enzymes"
  },
  {
    question: "Pepsin works best in a(n)",
    options: [
      "A. alkaline medium",
      "B. neutral medium",
      "C. acidic medium",
      "D. very high pH"
    ],
    answer: "C",
    explanation: "Pepsin has an optimum pH of about 2, matching the acidic environment of the stomach.",
    subtopic: "digestive enzymes"
  },
  {
    question: "Bile aids digestion mainly by",
    options: [
      "A. digesting proteins",
      "B. emulsifying fats",
      "C. digesting starch",
      "D. absorbing vitamins"
    ],
    answer: "B",
    explanation: "Bile salts break large fat globules into smaller droplets, increasing the surface area for lipase action.",
    subtopic: "digestive enzymes"
  },
  {
    question: "The pancreas secretes",
    options: [
      "A. bile",
      "B. amylase, protease and lipase",
      "C. only amylase",
      "D. pepsin"
    ],
    answer: "B",
    explanation: "Pancreatic juice contains amylase, trypsin (protease) and lipase for final digestion in the duodenum.",
    subtopic: "digestive enzymes"
  },
  {
    question: "Proteases digest proteins ultimately into",
    options: [
      "A. glucose",
      "B. fatty acids",
      "C. amino acids and peptides",
      "D. maltose"
    ],
    answer: "C",
    explanation: "Proteases break proteins down into peptides and then amino acids, which are absorbed.",
    subtopic: "digestive enzymes"
  },
  {
    question: "Salivary amylase begins the digestion of",
    options: [
      "A. proteins",
      "B. starch",
      "C. fats",
      "D. cellulose"
    ],
    answer: "B",
    explanation: "In the mouth, salivary amylase starts converting starch to maltose before food is swallowed.",
    subtopic: "digestive enzymes"
  },
  {
    question: "The optimum pH for trypsin activity is",
    options: [
      "A. strongly acidic",
      "B. alkaline",
      "C. neutral only",
      "D. very low"
    ],
    answer: "B",
    explanation: "Trypsin works in the alkaline conditions of the duodenum (around pH 8).",
    subtopic: "digestive enzymes"
  },

  // ---------- modes of nutrition ----------
  {
    question: "Organisms that manufacture their own organic food from inorganic materials are described as",
    options: [
      "A. heterotrophic",
      "B. autotrophic",
      "C. saprophytic",
      "D. parasitic"
    ],
    answer: "B",
    explanation: "Autotrophs (e.g. green plants) synthesise food by photosynthesis from CO2 and water.",
    subtopic: "modes of nutrition"
  },
  {
    question: "Amoeba ingests food particles by",
    options: [
      "A. diffusion",
      "B. phagocytosis",
      "C. photosynthesis",
      "D. simple absorption"
    ],
    answer: "B",
    explanation: "Amoeba surrounds food with pseudopodia to form a food vacuole where digestion occurs.",
    subtopic: "modes of nutrition"
  },
  {
    question: "A saprophyte obtains its food from",
    options: [
      "A. living hosts",
      "B. dead and decaying organic matter",
      "C. sunlight",
      "D. inorganic salts"
    ],
    answer: "B",
    explanation: "Saprophytes (e.g. fungi, many bacteria) feed on dead matter by external digestion.",
    subtopic: "modes of nutrition"
  },
  {
    question: "Ruminants such as cows digest cellulose with the help of",
    options: [
      "A. enzymes secreted in the mouth",
      "B. symbiotic microorganisms in the rumen",
      "C. bile salts",
      "D. strong stomach acid"
    ],
    answer: "B",
    explanation: "Microbes in the rumen produce cellulase, breaking down cellulose the animal cannot digest itself.",
    subtopic: "modes of nutrition"
  },
  {
    question: "A parasite obtains its nutrients from",
    options: [
      "A. dead organic matter",
      "B. a living host",
      "C. sunlight",
      "D. the soil"
    ],
    answer: "B",
    explanation: "Parasites live on or in a host organism, deriving food at the host's expense.",
    subtopic: "modes of nutrition"
  },
  {
    question: "Humans show the type of nutrition called",
    options: [
      "A. autotrophic",
      "B. holozoic",
      "C. saprophytic",
      "D. parasitic"
    ],
    answer: "B",
    explanation: "Holozoic nutrition involves ingesting, digesting and absorbing solid food, as in humans.",
    subtopic: "modes of nutrition"
  },
  {
    question: "In mutualism (symbiosis), the relationship between the two organisms is one in which",
    options: [
      "A. one benefits and the other is harmed",
      "B. both organisms benefit",
      "C. one benefits and the other is unaffected",
      "D. both are harmed"
    ],
    answer: "B",
    explanation: "Mutualism is a close interaction where both species gain, e.g. gut microbes and termites.",
    subtopic: "modes of nutrition"
  },
  {
    question: "The first and largest compartment of a ruminant's stomach is the",
    options: [
      "A. abomasum",
      "B. rumen",
      "C. omasum",
      "D. reticulum"
    ],
    answer: "B",
    explanation: "The rumen is the largest chamber where microbial fermentation of cellulose takes place.",
    subtopic: "modes of nutrition"
  },
  {
    question: "Carnivorous mammals typically possess",
    options: [
      "A. broad flat molars",
      "B. well-developed canine teeth",
      "C. no teeth at all",
      "D. only incisors"
    ],
    answer: "B",
    explanation: "Carnivores have large canines for seizing and tearing flesh.",
    subtopic: "modes of nutrition"
  },
  {
    question: "Holozoic nutrition involves",
    options: [
      "A. making food from carbon dioxide",
      "B. ingesting and digesting solid food",
      "C. absorbing nutrients from dead matter",
      "D. photosynthesis"
    ],
    answer: "B",
    explanation: "Holozoic feeders take in whole food and digest it internally, as do most animals.",
    subtopic: "modes of nutrition"
  },

  // ---------- alimentary system ----------
  {
    question: "The small intestine is the principal site for",
    options: [
      "A. water absorption only",
      "B. digestion and absorption of food",
      "C. bile production",
      "D. chewing"
    ],
    answer: "B",
    explanation: "Most enzymatic digestion and nutrient absorption occur along the small intestine.",
    subtopic: "alimentary system"
  },
  {
    question: "Villi in the wall of the small intestine serve to",
    options: [
      "A. produce bile",
      "B. increase surface area for absorption",
      "C. secrete pepsin",
      "D. store fat"
    ],
    answer: "B",
    explanation: "Finger-like villi greatly enlarge the absorptive surface of the intestine.",
    subtopic: "alimentary system"
  },
  {
    question: "Bile is produced by the",
    options: [
      "A. pancreas",
      "B. liver",
      "C. stomach",
      "D. gall bladder"
    ],
    answer: "B",
    explanation: "Hepatocytes make bile; the gall bladder only stores and concentrates it.",
    subtopic: "alimentary system"
  },
  {
    question: "The stomach churns food and secretes",
    options: [
      "A. bile",
      "B. gastric juice containing pepsin and acid",
      "C. amylase only",
      "D. insulin"
    ],
    answer: "B",
    explanation: "Gastric glands release hydrochloric acid and pepsinogen, beginning protein digestion.",
    subtopic: "alimentary system"
  },
  {
    question: "The main function of the large intestine is to absorb",
    options: [
      "A. proteins",
      "B. water and mineral salts",
      "C. glucose",
      "D. fats"
    ],
    answer: "B",
    explanation: "The colon reabsorbs water and salts, forming and storing faeces.",
    subtopic: "alimentary system"
  },
  {
    question: "The duodenum forms the first part of the",
    options: [
      "A. large intestine",
      "B. small intestine",
      "C. stomach",
      "D. oesophagus"
    ],
    answer: "B",
    explanation: "The duodenum is the initial section of the small intestine, receiving bile and pancreatic juice.",
    subtopic: "alimentary system"
  },
  {
    question: "Microvilli are found on the",
    options: [
      "A. surface of the intestinal villi",
      "B. teeth",
      "C. liver cells",
      "D. stomach wall"
    ],
    answer: "A",
    explanation: "Microvilli form the brush border on enterocytes, further increasing absorptive area.",
    subtopic: "alimentary system"
  },
  {
    question: "The oesophagus connects the mouth to the",
    options: [
      "A. stomach",
      "B. small intestine",
      "C. large intestine",
      "D. liver"
    ],
    answer: "A",
    explanation: "The oesophagus is the muscular tube that conveys swallowed food to the stomach.",
    subtopic: "alimentary system"
  },
  {
    question: "Among its functions, the liver",
    options: [
      "A. produces pepsin",
      "B. produces bile and detoxifies blood",
      "C. absorbs nutrients directly",
      "D. chews food"
    ],
    answer: "B",
    explanation: "The liver synthesises bile, stores glycogen and detoxifies harmful substances in blood.",
    subtopic: "alimentary system"
  },
  {
    question: "Assimilation refers to the",
    options: [
      "A. movement of food along the gut",
      "B. use of absorbed nutrients by body cells",
      "C. elimination of faeces",
      "D. chewing of food"
    ],
    answer: "B",
    explanation: "Assimilation is the incorporation of absorbed food molecules into the body's tissues.",
    subtopic: "alimentary system"
  },

  // ---------- dental formula ----------
  {
    question: "The dental formula of an adult human is",
    options: [
      "A. 2102/2102",
      "B. 2123/2123",
      "C. 2133/2133",
      "D. 2112/2112"
    ],
    answer: "B",
    explanation: "Adults have 2 incisors, 1 canine, 2 premolars and 3 molars per quadrant, totalling 32 teeth.",
    subtopic: "dental formula"
  },
  {
    question: "The dental formula of a human child with milk (deciduous) teeth is",
    options: [
      "A. 2123/2123",
      "B. 2102/2102",
      "C. 2133/2133",
      "D. 3123/3123"
    ],
    answer: "B",
    explanation: "Deciduous teeth lack premolars: 2 incisors, 1 canine and 2 molars per quadrant, 20 teeth total.",
    subtopic: "dental formula"
  },
  {
    question: "Incisor teeth are mainly used for",
    options: [
      "A. tearing flesh",
      "B. cutting and biting",
      "C. grinding",
      "D. piercing"
    ],
    answer: "B",
    explanation: "Sharp chisel-like incisors cut and slice food at the front of the mouth.",
    subtopic: "dental formula"
  },
  {
    question: "Canine teeth are primarily adapted for",
    options: [
      "A. grinding",
      "B. tearing and piercing",
      "C. cutting",
      "D. crushing"
    ],
    answer: "B",
    explanation: "Pointed canines grip, tear and pierce food, especially in carnivorous mammals.",
    subtopic: "dental formula"
  },
  {
    question: "Molar teeth function mainly in",
    options: [
      "A. cutting",
      "B. grinding food",
      "C. piercing",
      "D. biting"
    ],
    answer: "B",
    explanation: "Broad, ridged molars crush and grind food to aid digestion.",
    subtopic: "dental formula"
  },
  {
    question: "Humans are described as diphyodont because they have",
    options: [
      "A. continuously growing teeth",
      "B. two sets of teeth in a lifetime",
      "C. only one set of teeth",
      "D. identical teeth"
    ],
    answer: "B",
    explanation: "Diphyodonts develop a deciduous set followed by a permanent set; humans are diphyodont.",
    subtopic: "dental formula"
  },
  {
    question: "Having different shaped teeth for different functions is termed",
    options: [
      "A. homodont",
      "B. heterodont",
      "C. diphyodont",
      "D. monophyodont"
    ],
    answer: "B",
    explanation: "Heterodont dentition means teeth differ in form (incisors, canines, premolars, molars).",
    subtopic: "dental formula"
  },
  {
    question: "The dentition of a typical carnivore is characterised by",
    options: [
      "A. large flat grinding molars",
      "B. prominent canine teeth",
      "C. absence of incisors",
      "D. only molars"
    ],
    answer: "B",
    explanation: "Carnivores have large canines for killing and tearing prey.",
    subtopic: "dental formula"
  },
  {
    question: "Many herbivores have a gap called a diastema that serves to",
    options: [
      "A. store water",
      "B. separate gnawing/cutting teeth from grinding teeth",
      "C. hold the tongue",
      "D. aid breathing"
    ],
    answer: "B",
    explanation: "The diastema spaces incisors from molars, letting food be repositioned for grinding.",
    subtopic: "dental formula"
  },
  {
    question: "The total number of teeth in a full set of permanent adult human teeth is",
    options: [
      "A. 20",
      "B. 28",
      "C. 32",
      "D. 30"
    ],
    answer: "C",
    explanation: "The adult dental formula 2123/2123 gives 16 teeth per jaw, 32 in total.",
    subtopic: "dental formula"
  }
];

module.exports = questions;
