// biology — Morphological Variations
const questions = [
  // ---------------- size/height/weight ----------------
  {
    question: "Variation in human height among a population is best described as which type of variation?",
    options: [
      "A. Discontinuous variation",
      "B. Continuous variation",
      "C. Mutational variation",
      "D. Chromosomal variation"
    ],
    answer: "B",
    explanation: "Human height varies gradually across a range and is controlled by many genes (polygenic), making it continuous variation.",
    subtopic: "size/height/weight"
  },
  {
    question: "A trait that can take only a limited number of distinct forms, such as blood group, shows which type of variation?",
    options: [
      "A. Continuous variation",
      "B. Environmental variation",
      "C. Discontinuous variation",
      "D. Quantitative variation"
    ],
    answer: "C",
    explanation: "Discontinuous variation produces a small number of distinct, non-overlapping phenotypes controlled largely by one or few genes.",
    subtopic: "size/height/weight"
  },
  {
    question: "Which of the following is a continuous variation in humans?",
    options: [
      "A. Blood group",
      "B. Tongue rolling ability",
      "C. Body weight",
      "D. Attached earlobes"
    ],
    answer: "C",
    explanation: "Body weight varies continuously along a spectrum and is influenced by multiple genes and environment, unlike discrete traits.",
    subtopic: "size/height/weight"
  },
  {
    question: "Human height is considered a polygenic trait because it is controlled by",
    options: [
      "A. a single gene with two alleles",
      "B. many genes acting together",
      "C. mitochondrial DNA only",
      "D. a sex-linked gene"
    ],
    answer: "B",
    explanation: "Polygenic traits like height are controlled by the additive effects of many genes, giving a continuous range of phenotypes.",
    subtopic: "size/height/weight"
  },
  {
    question: "Differences in body weight between individuals of the same family can be largely due to",
    options: [
      "A. only genetic factors",
      "B. only mutation",
      "C. environmental factors such as diet and exercise",
      "D. chromosomal non-disjunction"
    ],
    answer: "C",
    explanation: "Body weight is influenced strongly by environmental factors like nutrition and activity in addition to genetic predisposition.",
    subtopic: "size/height/weight"
  },
  {
    question: "Continuous variation is usually represented graphically by a",
    options: [
      "A. bar chart with gaps",
      "B. normal distribution curve",
      "C. pedigree chart",
      "D. karyotype"
    ],
    answer: "B",
    explanation: "Continuous traits produce a bell-shaped (normal) distribution when plotted as a frequency histogram.",
    subtopic: "size/height/weight"
  },
  {
    question: "Which statement about phenotypic variation is correct?",
    options: [
      "A. It is caused only by genes",
      "B. It is the observable difference between individuals",
      "C. It never varies within a species",
      "D. It is always discontinuous"
    ],
    answer: "B",
    explanation: "Phenotypic variation is the observable differences in characteristics among individuals, resulting from genotype and environment.",
    subtopic: "size/height/weight"
  },
  {
    question: "Identical (monozygotic) twins usually have very similar height because they",
    options: [
      "A. share the same environment completely",
      "B. have identical genotypes",
      "C. are always the same sex only",
      "D. have different chromosomes"
    ],
    answer: "B",
    explanation: "Monozygotic twins arise from one zygote and share identical genotypes, so inherited traits like height are very similar.",
    subtopic: "size/height/weight"
  },
  {
    question: "The range of expression of a polygenic trait such as weight is affected by the environment. This interaction is called",
    options: [
      "A. genotype-environment interaction",
      "B. genetic drift",
      "C. gene flow",
      "D. natural selection only"
    ],
    answer: "A",
    explanation: "Genotype-environment interaction describes how the same genotype can produce different phenotypes under different environments.",
    subtopic: "size/height/weight"
  },
  {
    question: "Nutritional deficiency during childhood can reduce final adult height. This shows that height is",
    options: [
      "A. entirely genetic",
      "B. influenced by the environment",
      "C. a discontinuous trait",
      "D. determined only at conception"
    ],
    answer: "B",
    explanation: "Environmental factors such as nutrition modify the expression of the genetic potential for height.",
    subtopic: "size/height/weight"
  },
  {
    question: "An example of discontinuous variation in humans is",
    options: [
      "A. skin colour",
      "B. ABO blood group",
      "C. hand span",
      "D. body mass"
    ],
    answer: "B",
    explanation: "ABO blood group falls into distinct categories determined by a single gene locus, a classic discontinuous trait.",
    subtopic: "size/height/weight"
  },
  {
    question: "Variation in body size among members of the same species is important because it",
    options: [
      "A. prevents reproduction",
      "B. provides material for natural selection",
      "C. causes extinction always",
      "D. removes genetic diversity"
    ],
    answer: "B",
    explanation: "Variation within a species supplies the differences on which natural selection acts, aiding adaptation.",
    subtopic: "size/height/weight"
  },
  {
    question: "The measurement of variation in a quantitative trait like weight is best done using statistics such as",
    options: [
      "A. only the mode",
      "B. mean and standard deviation",
      "C. a pedigree only",
      "D. chromosome counts"
    ],
    answer: "B",
    explanation: "Quantitative (continuous) traits are described by mean and standard deviation to summarise central value and spread.",
    subtopic: "size/height/weight"
  },
  {
    question: "Skin colour in humans is an example of",
    options: [
      "A. discontinuous variation",
      "B. continuous (polygenic) variation",
      "C. a single-gene trait",
      "D. a sex-linked disorder"
    ],
    answer: "B",
    explanation: "Human skin colour varies across a continuum and is controlled by several genes plus environmental (sun) influence.",
    subtopic: "size/height/weight"
  },
  {
    question: "Which factor is NOT a cause of variation in body weight?",
    options: [
      "A. Genetic inheritance",
      "B. Diet",
      "C. Exercise level",
      "D. Number of autosomes being always 44"
    ],
    answer: "D",
    explanation: "Humans normally have 44 autosomes regardless of weight; this constant does not cause weight variation.",
    subtopic: "size/height/weight"
  },
  {
    question: "A trait controlled by many genes with small additive effects produces a phenotype that",
    options: [
      "A. falls into two clear classes",
      "B. shows a continuous range",
      "C. is always identical in siblings",
      "D. cannot be measured"
    ],
    answer: "B",
    explanation: "Polygenic additive effects create a spectrum of phenotypes rather than discrete categories.",
    subtopic: "size/height/weight"
  },
  {
    question: "Environmental variation can be demonstrated by studying",
    options: [
      "A. identical twins reared apart",
      "B. blood groups only",
      "C. chromosome number",
      "D. gene linkage maps"
    ],
    answer: "A",
    explanation: "Identical twins share genotypes; differences arising when reared apart reveal environmental effects on traits.",
    subtopic: "size/height/weight"
  },
  {
    question: "In continuous variation, the phenotype of offspring tends to be",
    options: [
      "A. exactly intermediate between parents",
      "B. independent of parents due to mutation only",
      "C. a blend that cannot segregate",
      "D. always larger than both parents"
    ],
    answer: "A",
    explanation: "Because many genes contribute additively, offspring phenotypes usually fall near the mid-parent value (regression to mean).",
    subtopic: "size/height/weight"
  },
  {
    question: "Which of these is a genetic cause of variation in height?",
    options: [
      "A. Recombination during meiosis",
      "B. Constant temperature",
      "C. Identical diet",
      "D. Lack of exercise"
    ],
    answer: "A",
    explanation: "Crossing over and independent assortment during meiosis generate new allele combinations contributing to genetic variation.",
    subtopic: "size/height/weight"
  },
  {
    question: "Body mass index (BMI) is used to classify variation in",
    options: [
      "A. blood group",
      "B. height relative to weight",
      "C. fingerprint pattern",
      "D. chromosome structure"
    ],
    answer: "B",
    explanation: "BMI = weight/height² and is a quantitative measure capturing variation in the height-weight relationship.",
    subtopic: "size/height/weight"
  },
  {
    question: "Discontinuous variation is typically controlled by",
    options: [
      "A. many genes with large environmental effect",
      "B. one or a few genes with little environmental influence",
      "C. the environment alone",
      "D. mitochondrial inheritance only"
    ],
    answer: "B",
    explanation: "Discontinuous traits are usually determined by one or few major genes, with limited environmental modification.",
    subtopic: "size/height/weight"
  },
  {
    question: "Which statement is true about continuous traits and selection?",
    options: [
      "A. They cannot respond to selection",
      "B. They show a wide range on which selection can act gradually",
      "C. They are fixed and unchangeable",
      "D. Selection only affects discontinuous traits"
    ],
    answer: "B",
    explanation: "The broad phenotypic range of continuous traits allows artificial and natural selection to shift the mean gradually.",
    subtopic: "size/height/weight"
  },
  {
    question: "Differences in weight that appear between seasons in the same person are mainly due to",
    options: [
      "A. genetic mutation",
      "B. environmental changes in diet and activity",
      "C. change in chromosome number",
      "D. blood group change"
    ],
    answer: "B",
    explanation: "Short-term weight changes within an individual reflect environmental factors, not inherited genetic change.",
    subtopic: "size/height/weight"
  },
  // ---------------- fingerprints ----------------
  {
    question: "The scientific study of fingerprints is called",
    options: [
      "A. genomics",
      "B. dermatoglyphics",
      "C. cytology",
      "D. embryology"
    ],
    answer: "B",
    explanation: "Dermatoglyphics is the study of the ridged skin patterns (fingerprints, palms, soles) formed in the fetus.",
    subtopic: "fingerprints"
  },
  {
    question: "Fingerprints are formed during which stage of development?",
    options: [
      "A. At birth only",
      "B. In the womb (intrauterine development)",
      "C. At puberty",
      "D. After the age of 10"
    ],
    answer: "B",
    explanation: "Fingerprint ridges develop between about the 10th and 18th week of fetal development and remain fixed for life.",
    subtopic: "fingerprints"
  },
  {
    question: "Fingerprints are unique to each individual. This uniqueness is due to",
    options: [
      "A. genetics alone",
      "B. the intrauterine environment alone",
      "C. a combination of genetic and intrauterine environmental factors",
      "D. diet after birth"
    ],
    answer: "C",
    explanation: "Fingerprint patterns are genetically influenced but shaped by random pressures in the womb, making each pattern unique.",
    subtopic: "fingerprints"
  },
  {
    question: "Even identical twins do not have identical fingerprints because",
    options: [
      "A. they have different DNA",
      "B. small differences arise from the intrauterine environment",
      "C. fingerprints change every year",
      "D. they are always opposite sex"
    ],
    answer: "B",
    explanation: "Though genetically identical, tiny random environmental factors in the womb produce different ridge details (minutiae).",
    subtopic: "fingerprints"
  },
  {
    question: "Which of the following is a basic fingerprint pattern?",
    options: [
      "A. Spiral",
      "B. Whorl",
      "C. Square",
      "D. Triangle"
    ],
    answer: "B",
    explanation: "The three basic fingerprint patterns are arches, loops, and whorls.",
    subtopic: "fingerprints"
  },
  {
    question: "A fingerprint pattern with ridges that enter from one side, curve, and exit the same side is a",
    options: [
      "A. arch",
      "B. loop",
      "C. whorl",
      "D. composite"
    ],
    answer: "B",
    explanation: "A loop pattern has ridges entering and exiting from the same side, forming a curve.",
    subtopic: "fingerprints"
  },
  {
    question: "A fingerprint with ridges that rise in the centre like a hill with no backward turn is a",
    options: [
      "A. loop",
      "B. whorl",
      "C. arch",
      "D. tented arch only"
    ],
    answer: "C",
    explanation: "An arch has ridges that flow from one side to the other with a gentle rise, lacking a core loop or whorl.",
    subtopic: "fingerprints"
  },
  {
    question: "A whorl fingerprint is characterised by",
    options: [
      "A. ridges entering and leaving the same side",
      "B. circular or spiral ridges around a central point",
      "C. a single straight ridge",
      "D. no ridges at all"
    ],
    answer: "B",
    explanation: "Whorls show circular or spiral ridge patterns around a central point, often with two deltas.",
    subtopic: "fingerprints"
  },
  {
    question: "The most common fingerprint pattern in humans is the",
    options: [
      "A. arch",
      "B. loop",
      "C. whorl",
      "D. composite"
    ],
    answer: "B",
    explanation: "Loops are the most frequently occurring fingerprint pattern in most human populations.",
    subtopic: "fingerprints"
  },
  {
    question: "Fingerprints are used in forensic science mainly because they are",
    options: [
      "A. easy to change",
      "B. unique and permanent",
      "C. inherited identically",
      "D. visible only under UV"
    ],
    answer: "B",
    explanation: "Fingerprints are both unique to each person and fixed for life, making them reliable for identification.",
    subtopic: "fingerprints"
  },
  {
    question: "The small details where ridges end or split, used to match prints, are called",
    options: [
      "A. cores",
      "B. minutiae",
      "C. deltas",
      "D. arches"
    ],
    answer: "B",
    explanation: "Minutiae are the ridge endings and bifurcations that provide the fine detail used in fingerprint matching.",
    subtopic: "fingerprints"
  },
  {
    question: "A delta in a fingerprint is a point where",
    options: [
      "A. ridges split into three directions",
      "B. the print ends",
      "C. the pattern is an arch only",
      "D. no ridges exist"
    ],
    answer: "A",
    explanation: "A delta is a triangular region where ridge lines diverge in three directions, common in loops and whorls.",
    subtopic: "fingerprints"
  },
  {
    question: "Which statement about fingerprints and inheritance is correct?",
    options: [
      "A. Fingerprints are inherited as a single dominant trait",
      "B. The general pattern type has a hereditary component",
      "C. Fingerprints are not heritable at all",
      "D. Only the mother determines the pattern"
    ],
    answer: "B",
    explanation: "While detailed ridges are unique, the broad pattern type shows familial (hereditary) tendency.",
    subtopic: "fingerprints"
  },
  {
    question: "Fingerprints do NOT change over a person's lifetime because",
    options: [
      "A. they are on the surface only",
      "B. the ridge pattern is established before birth and persists",
      "C. they are replaced monthly",
      "D. they depend on hair colour"
    ],
    answer: "B",
    explanation: "The dermal ridge pattern forms prenatally and remains unchanged except through deep skin injury.",
    subtopic: "fingerprints"
  },
  {
    question: "Scarring from a deep cut can alter a fingerprint, but the pattern usually returns because",
    options: [
      "A. ridges regenerate from the dermis",
      "B. the person changes identity",
      "C. prints are rewritten yearly",
      "D. environment erases them"
    ],
    answer: "A",
    explanation: "Ridges are generated from the dermal layer; unless damage reaches the dermis, the original pattern regenerates.",
    subtopic: "fingerprints"
  },
  {
    question: "The use of fingerprints in personal identification relies on the principle that no two people have",
    options: [
      "A. the same DNA",
      "B. identical ridge detail (minutiae)",
      "C. the same hand size",
      "D. the same blood group"
    ],
    answer: "B",
    explanation: "The detailed arrangement of minutiae is unique, forming the basis of fingerprint identification.",
    subtopic: "fingerprints"
  },
  {
    question: "Which of the following is NOT one of the three basic fingerprint patterns?",
    options: [
      "A. Arch",
      "B. Loop",
      "C. Whorl",
      "D. Square"
    ],
    answer: "D",
    explanation: "The three basic patterns are arches, loops, and whorls; 'square' is not a recognized basic pattern.",
    subtopic: "fingerprints"
  },
  {
    question: "A tented arch differs from a plain arch because it has",
    options: [
      "A. a sharp upward thrust in the centre",
      "B. circular ridges",
      "C. ridges entering both sides",
      "D. no ridges"
    ],
    answer: "A",
    explanation: "A tented arch has a pronounced central spike/angle, unlike the smooth rise of a plain arch.",
    subtopic: "fingerprints"
  },
  {
    question: "Fingerprint evidence is considered reliable in courts because the patterns are",
    options: [
      "A. temporary",
      "B. permanent and individual-specific",
      "C. identical in twins",
      "D. alterable by mood"
    ],
    answer: "B",
    explanation: "Permanence and uniqueness give fingerprints strong evidentiary value in identification.",
    subtopic: "fingerprints"
  },
  {
    question: "The ridges of fingerprints increase friction to help with",
    options: [
      "A. hearing",
      "B. gripping objects",
      "C. breathing",
      "D. digestion"
    ],
    answer: "B",
    explanation: "Dermal ridges enhance grip and tactile sensitivity on the fingers and soles.",
    subtopic: "fingerprints"
  },
  {
    question: "Which factor has the greatest influence on the fine detail (minutiae) of a fingerprint?",
    options: [
      "A. The person's name",
      "B. Random intrauterine mechanical forces",
      "C. Blood group",
      "D. Eye colour"
    ],
    answer: "B",
    explanation: "Subtle pressures and movements in the womb during ridge formation create the unique minutiae.",
    subtopic: "fingerprints"
  },
  {
    question: "The core of a fingerprint pattern refers to",
    options: [
      "A. the centre of the pattern",
      "B. the delta point",
      "C. the outer edge",
      "D. a scar"
    ],
    answer: "A",
    explanation: "The core is the approximate centre of the fingerprint pattern, used in classification.",
    subtopic: "fingerprints"
  },
  {
    question: "Automated fingerprint identification systems (AFIS) match prints by comparing",
    options: [
      "A. hand size",
      "B. the arrangement of minutiae",
      "C. skin colour",
      "D. nail shape"
    ],
    answer: "B",
    explanation: "AFIS digitally compares the positions and types of minutiae points to identify matches.",
    subtopic: "fingerprints"
  },
  {
    question: "An arch fingerprint is the least common pattern and is recognised by",
    options: [
      "A. ridges forming a circle",
      "B. ridges rising and falling with no loop or whorl",
      "C. ridges entering one side and looping back",
      "D. two deltas"
    ],
    answer: "B",
    explanation: "Arches have a simple rise and fall of ridges without loops or whorls and are the rarest basic pattern.",
    subtopic: "fingerprints"
  },
  {
    question: "In forensic comparison, a match requires agreement in",
    options: [
      "A. blood group only",
      "B. enough corresponding minutiae to exclude chance",
      "C. hand length",
      "D. skin tone"
    ],
    answer: "B",
    explanation: "Identification depends on a sufficient number of matching minutiae, not on unrelated traits like hand size.",
    subtopic: "fingerprints"
  },
  {
    question: "The formation of fingerprint ridges is completed by about which fetal age?",
    options: [
      "A. 4 weeks",
      "B. 18 weeks",
      "C. birth",
      "D. 2 years"
    ],
    answer: "B",
    explanation: "Primary ridge formation is essentially complete by around the 18th week of gestation.",
    subtopic: "fingerprints"
  },
  {
    question: "Palmar and sole prints, like fingerprints, are studied under",
    options: [
      "A. dermatoglyphics",
      "B. haematology",
      "C. ornithology",
      "D. geology"
    ],
    answer: "A",
    explanation: "Dermatoglyphics covers ridge patterns on fingers, palms, and soles.",
    subtopic: "fingerprints"
  }
];

module.exports = questions;
