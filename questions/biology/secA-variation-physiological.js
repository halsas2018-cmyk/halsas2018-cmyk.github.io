// biology — Physiological Variations
const questions = [
  // ---------- tongue roll (17) ----------
  {
    question: "The ability of a person to roll the tongue into a U-shape is an example of",
    options: [
      "A. continuous variation",
      "B. environmental variation",
      "C. inherited (discontinuous) variation",
      "D. a mutation"
    ],
    answer: "C",
    explanation: "Tongue rolling is a clear-cut inherited trait present or absent, so it is discontinuous (inherited) variation.",
    subtopic: "tongue roll"
  },
  {
    question: "In humans, the ability to roll the tongue is generally controlled by a single gene with the rolling allele being",
    options: [
      "A. recessive",
      "B. dominant",
      "C. codominant",
      "D. sex-linked"
    ],
    answer: "B",
    explanation: "The rolling phenotype is treated in school genetics as the dominant trait (R) over non-rolling (r).",
    subtopic: "tongue roll"
  },
  {
    question: "A person who cannot roll the tongue is most likely to have the genotype",
    options: [
      "A. RR",
      "B. Rr",
      "C. rr",
      "D. R"
    ],
    answer: "C",
    explanation: "Non-rolling is recessive, so it is expressed only in the homozygous recessive genotype rr.",
    subtopic: "tongue roll"
  },
  {
    question: "If both parents can roll their tongues but their child cannot, the parents' genotypes are most probably",
    options: [
      "A. RR and RR",
      "B. Rr and Rr",
      "C. RR and rr",
      "D. rr and rr"
    ],
    answer: "B",
    explanation: "Two rollers producing a non-roller (rr) child means both parents must carry the recessive allele (Rr).",
    subtopic: "tongue roll"
  },
  {
    question: "A cross between a homozygous roller (RR) and a non-roller (rr) will produce offspring that are all",
    options: [
      "A. non-rollers",
      "B. rollers",
      "C. half rollers, half non-rollers",
      "D. 3 rollers : 1 non-roller"
    ],
    answer: "B",
    explanation: "RR × rr gives all Rr offspring, and Rr individuals can roll their tongues.",
    subtopic: "tongue roll"
  },
  {
    question: "A cross between two heterozygous tongue-rollers (Rr × Rr) is expected to give a phenotypic ratio of",
    options: [
      "A. 1 roller : 3 non-rollers",
      "B. 3 rollers : 1 non-roller",
      "C. all rollers",
      "D. all non-rollers"
    ],
    answer: "B",
    explanation: "A monohybrid cross Rr × Rr yields genotypes 1 RR : 2 Rr : 1 rr, i.e. 3 rollers to 1 non-roller.",
    subtopic: "tongue roll"
  },
  {
    question: "Which of the following crosses would produce offspring in the ratio 1 roller : 1 non-roller?",
    options: [
      "A. RR × RR",
      "B. Rr × Rr",
      "C. Rr × rr",
      "D. rr × rr"
    ],
    answer: "C",
    explanation: "Rr × rr gives 1 Rr (roller) : 1 rr (non-roller).",
    subtopic: "tongue roll"
  },
  {
    question: "Tongue rolling, being present or absent in distinct forms, is best described as",
    options: [
      "A. continuous variation",
      "B. discontinuous variation",
      "C. environmental variation",
      "D. acquired variation"
    ],
    answer: "B",
    explanation: "Traits that fall into a few distinct classes with no intermediates are discontinuous variations.",
    subtopic: "tongue roll"
  },
  {
    question: "A non-roller (rr) crossed with a roller of unknown genotype produces 50% rollers and 50% non-rollers. The roller parent must be",
    options: [
      "A. RR",
      "B. Rr",
      "C. rr",
      "D. cannot be determined"
    ],
    answer: "B",
    explanation: "Only a heterozygous roller (Rr) crossed with rr gives a 1:1 roller to non-roller ratio.",
    subtopic: "tongue roll"
  },
  {
    question: "The trait of tongue rolling, like many inherited traits, is passed from parents to offspring through",
    options: [
      "A. ribosomes",
      "B. genes on chromosomes",
      "C. the cytoplasm only",
      "D. learned behaviour"
    ],
    answer: "B",
    explanation: "Inherited characteristics are transmitted via genes located on chromosomes in gametes.",
    subtopic: "tongue roll"
  },
  {
    question: "Which of the following pairs represents a dominant and its contrasting recessive phenotype for tongue rolling?",
    options: [
      "A. roller and curl",
      "B. roller and non-roller",
      "C. long tongue and short tongue",
      "D. thick tongue and thin tongue"
    ],
    answer: "B",
    explanation: "Roller (dominant phenotype) and non-roller (recessive phenotype) are the contrasting forms.",
    subtopic: "tongue roll"
  },
  {
    question: "If a man with genotype rr marries a woman with genotype rr, the probability that their child can roll the tongue is",
    options: [
      "A. 0%",
      "B. 25%",
      "C. 50%",
      "D. 100%"
    ],
    answer: "A",
    explanation: "rr × rr gives only rr offspring, all of whom are non-rollers, so the chance is 0%.",
    subtopic: "tongue roll"
  },
  {
    question: "The inability to roll the tongue is described as a recessive trait because it is expressed only when the genotype is",
    options: [
      "A. RR",
      "B. Rr",
      "C. rr",
      "D. either RR or Rr"
    ],
    answer: "C",
    explanation: "A recessive phenotype appears only in the homozygous recessive condition (rr).",
    subtopic: "tongue roll"
  },
  {
    question: "Which statement about tongue rolling is correct?",
    options: [
      "A. It is determined entirely by diet",
      "B. It is an inherited trait controlled by alleles",
      "C. All rollers are homozygous",
      "D. Non-rollers can learn to roll by practice"
    ],
    answer: "B",
    explanation: "Tongue rolling is an inherited trait controlled by alleles; rollers may be RR or Rr.",
    subtopic: "tongue roll"
  },
  {
    question: "A student observes that some classmates can roll their tongues and others cannot. This difference is variation that is",
    options: [
      "A. acquired during life",
      "B. caused by climate",
      "C. genetic in origin",
      "D. due to nutrition"
    ],
    answer: "C",
    explanation: "The presence or absence of rolling is determined by inherited alleles, so it is genetic.",
    subtopic: "tongue roll"
  },
  {
    question: "In a family where both parents are heterozygous rollers (Rr), the chance that a child is a non-roller (rr) is",
    options: [
      "A. 0%",
      "B. 25%",
      "C. 50%",
      "D. 75%"
    ],
    answer: "B",
    explanation: "From Rr × Rr, 1 in 4 offspring is rr, giving a 25% chance of a non-roller.",
    subtopic: "tongue roll"
  },
  {
    question: "Tongue rolling is classified among inherited variations because it",
    options: [
      "A. changes with age",
      "B. is taught in school",
      "C. depends on alleles received from parents",
      "D. results from exercise"
    ],
    answer: "C",
    explanation: "Inherited variation arises from the combination of alleles contributed by the parents.",
    subtopic: "tongue roll"
  },

  // ---------- taste (17) ----------
  {
    question: "The ability to taste the chemical phenylthiocarbamide (PTC) is controlled by a dominant allele. A non-taster therefore has the genotype",
    options: [
      "A. TT",
      "B. Tt",
      "C. tt",
      "D. T"
    ],
    answer: "C",
    explanation: "Non-tasting is recessive, so a non-taster must be homozygous recessive (tt).",
    subtopic: "taste"
  },
  {
    question: "In PTC tasting, individuals who can taste the substance have genotypes",
    options: [
      "A. tt only",
      "B. TT or Tt",
      "C. T only",
      "D. tt or Tt"
    ],
    answer: "B",
    explanation: "Because T is dominant, both TT and Tt individuals can taste PTC.",
    subtopic: "taste"
  },
  {
    question: "A cross between a homozygous taster (TT) and a non-taster (tt) will produce offspring that are all",
    options: [
      "A. non-tasters",
      "B. tasters",
      "C. half tasters, half non-tasters",
      "D. 3 tasters : 1 non-taster"
    ],
    answer: "B",
    explanation: "TT × tt gives all Tt offspring, and Tt individuals are tasters.",
    subtopic: "taste"
  },
  {
    question: "A cross between two heterozygous tasters (Tt × Tt) is expected to give a phenotypic ratio of",
    options: [
      "A. 1 taster : 3 non-tasters",
      "B. 3 tasters : 1 non-taster",
      "C. all tasters",
      "D. all non-tasters"
    ],
    answer: "B",
    explanation: "Tt × Tt yields 3 T_ (tasters) : 1 tt (non-taster).",
    subtopic: "taste"
  },
  {
    question: "Phenylthiocarbamide (PTC) tasting ability is an example of",
    options: [
      "A. continuous variation",
      "B. genetic variation in taste sensitivity",
      "C. environmental variation",
      "D. a nutritional deficiency"
    ],
    answer: "B",
    explanation: "The ability to detect PTC differs between individuals for genetic reasons, a taste-sensitivity variation.",
    subtopic: "taste"
  },
  {
    question: "Which cross will produce offspring in the ratio 1 taster : 1 non-taster?",
    options: [
      "A. TT × TT",
      "B. Tt × Tt",
      "C. Tt × tt",
      "D. tt × tt"
    ],
    answer: "C",
    explanation: "Tt × tt gives 1 Tt (taster) : 1 tt (non-taster).",
    subtopic: "taste"
  },
  {
    question: "If both parents can taste PTC but their child cannot, the parents are most likely",
    options: [
      "A. TT and TT",
      "B. Tt and Tt",
      "C. TT and tt",
      "D. tt and tt"
    ],
    answer: "B",
    explanation: "Two tasters producing a non-taster (tt) child means both parents carry the recessive allele (Tt).",
    subtopic: "taste"
  },
  {
    question: "The substance used to test genetic variation in taste sensitivity among humans is",
    options: [
      "A. sucrose",
      "B. phenylthiocarbamide (PTC)",
      "C. sodium chloride",
      "D. lactose"
    ],
    answer: "B",
    explanation: "PTC is the classic compound used to demonstrate inherited differences in taste ability.",
    subtopic: "taste"
  },
  {
    question: "A taster of unknown genotype is crossed with a non-taster (tt) and half the children are non-tasters. The taster parent's genotype is",
    options: [
      "A. TT",
      "B. Tt",
      "C. tt",
      "D. cannot be determined"
    ],
    answer: "B",
    explanation: "A 1:1 taster to non-taster ratio with a tt partner identifies the taster as heterozygous (Tt).",
    subtopic: "taste"
  },
  {
    question: "The difference in ability to taste PTC between individuals is mainly due to differences in their",
    options: [
      "A. diet",
      "B. age",
      "C. genes",
      "D. gender"
    ],
    answer: "C",
    explanation: "PTC tasting is inherited, so the difference between tasters and non-tasters is genetic.",
    subtopic: "taste"
  },
  {
    question: "A person who cannot taste PTC married to a non-taster (tt) will have children who are",
    options: [
      "A. all tasters",
      "B. all non-tasters",
      "C. half tasters",
      "D. 3 tasters : 1 non-taster"
    ],
    answer: "B",
    explanation: "tt × tt gives only tt offspring, all of whom are non-tasters.",
    subtopic: "taste"
  },
  {
    question: "Non-tasting of PTC is described as a recessive trait because it appears only in the homozygous genotype",
    options: [
      "A. TT",
      "B. Tt",
      "C. tt",
      "D. T"
    ],
    answer: "C",
    explanation: "The recessive phenotype is expressed only when the individual is homozygous recessive (tt).",
    subtopic: "taste"
  },
  {
    question: "If two heterozygous tasters (Tt) have four children, the statistical probability that a given child is a non-taster is",
    options: [
      "A. 0%",
      "B. 25%",
      "C. 50%",
      "D. 75%"
    ],
    answer: "B",
    explanation: "Each child of Tt × Tt independently has a 1 in 4 (25%) chance of being tt.",
    subtopic: "taste"
  },
  {
    question: "PTC tasting is best classified as",
    options: [
      "A. acquired variation",
      "B. continuous variation",
      "C. discontinuous (inherited) variation",
      "D. environmental variation"
    ],
    answer: "C",
    explanation: "People are either tasters or non-tasters, distinct classes, so it is discontinuous inherited variation.",
    subtopic: "taste"
  },
  {
    question: "The allele for PTC tasting (T) is said to be dominant over the non-tasting allele (t) because",
    options: [
      "A. tasters are more common",
      "B. only one copy of T is needed to taste",
      "C. T is on the X chromosome",
      "D. tasters live longer"
    ],
    answer: "B",
    explanation: "A dominant allele produces its phenotype when present in just one copy (Tt).",
    subtopic: "taste"
  },
  {
    question: "A couple, both tasters with genotype Tt, consult a genetic counsellor. The chance their next child is a non-taster is",
    options: [
      "A. 0%",
      "B. 25%",
      "C. 50%",
      "D. 100%"
    ],
    answer: "B",
    explanation: "Tt × Tt gives a 25% chance of a tt (non-taster) child.",
    subtopic: "taste"
  },
  {
    question: "Which of the following correctly describes the inheritance of PTC tasting?",
    options: [
      "A. It is controlled by a single gene with dominant and recessive alleles",
      "B. It is learned behaviour",
      "C. It is determined by the environment",
      "D. It shows codominance like ABO blood groups"
    ],
    answer: "A",
    explanation: "PTC tasting follows simple Mendelian inheritance with a dominant T and recessive t allele.",
    subtopic: "taste"
  },

  // ---------- blood groups ABO (16) ----------
  {
    question: "The ABO blood group system in humans is controlled by three alleles: IA, IB and",
    options: [
      "A. i",
      "B. IO",
      "C. I",
      "D. R"
    ],
    answer: "A",
    explanation: "The three ABO alleles are IA, IB and the recessive i (sometimes written IO).",
    subtopic: "blood groups ABO"
  },
  {
    question: "In the ABO system, the alleles IA and IB are described as codominant because when both are present the individual has blood group",
    options: [
      "A. A",
      "B. B",
      "C. AB",
      "D. O"
    ],
    answer: "C",
    explanation: "IA and IB are both expressed when together, giving the AB phenotype (codominance).",
    subtopic: "blood groups ABO"
  },
  {
    question: "A person with blood group A can have the genotype",
    options: [
      "A. IAIA or IAi",
      "B. IBIB or IBi",
      "C. IAIB",
      "D. ii"
    ],
    answer: "A",
    explanation: "Group A results from IAIA or IAi (the i allele is recessive).",
    subtopic: "blood groups ABO"
  },
  {
    question: "Blood group O has the genotype",
    options: [
      "A. IAIA",
      "B. IAi",
      "C. IAIB",
      "D. ii"
    ],
    answer: "D",
    explanation: "Group O occurs only when both alleles are recessive (ii).",
    subtopic: "blood groups ABO"
  },
  {
    question: "The blood group that contains both A and B antigens on the red cells is",
    options: [
      "A. A",
      "B. B",
      "C. AB",
      "D. O"
    ],
    answer: "C",
    explanation: "Group AB red cells carry both A and B antigens.",
    subtopic: "blood groups ABO"
  },
  {
    question: "A person with blood group O is called the universal donor because their red cells lack",
    options: [
      "A. both A and B antigens",
      "B. the Rh factor",
      "C. plasma proteins",
      "D. haemoglobin"
    ],
    answer: "A",
    explanation: "Group O red cells have neither A nor B antigen, so they are not agglutinated by recipient antibodies.",
    subtopic: "blood groups ABO"
  },
  {
    question: "The universal recipient in the ABO system is blood group",
    options: [
      "A. O",
      "B. A",
      "C. AB",
      "D. B"
    ],
    answer: "C",
    explanation: "Group AB individuals have no anti-A or anti-B plasma antibodies, so they can receive any ABO type.",
    subtopic: "blood groups ABO"
  },
  {
    question: "A person with blood group A has which antibody in their plasma?",
    options: [
      "A. anti-A",
      "B. anti-B",
      "C. both anti-A and anti-B",
      "D. no ABO antibodies"
    ],
    answer: "B",
    explanation: "Group A plasma contains anti-B antibodies against the absent B antigen.",
    subtopic: "blood groups ABO"
  },
  {
    question: "A person with blood group B has which antibody in their plasma?",
    options: [
      "A. anti-A",
      "B. anti-B",
      "C. both anti-A and anti-B",
      "D. none"
    ],
    answer: "A",
    explanation: "Group B plasma contains anti-A antibodies against the absent A antigen.",
    subtopic: "blood groups ABO"
  },
  {
    question: "A person with blood group AB has in their plasma",
    options: [
      "A. anti-A",
      "B. anti-B",
      "C. both anti-A and anti-B",
      "D. neither anti-A nor anti-B"
    ],
    answer: "D",
    explanation: "Because AB individuals have both A and B antigens, they make neither anti-A nor anti-B antibodies.",
    subtopic: "blood groups ABO"
  },
  {
    question: "The clumping of red blood cells that occurs when incompatible bloods are mixed is called",
    options: [
      "A. coagulation",
      "B. agglutination",
      "C. haemolysis",
      "D. osmosis"
    ],
    answer: "B",
    explanation: "Antibodies clump foreign antigens on red cells in a reaction called agglutination.",
    subtopic: "blood groups ABO"
  },
  {
    question: "In a cross between IAi and IBi parents, which of the following blood groups CANNOT appear in their children?",
    options: [
      "A. A",
      "B. B",
      "C. AB",
      "D. none — all of A, B, AB, O are possible"
    ],
    answer: "D",
    explanation: "IAi × IBi can produce IAIB (AB), IAi (A), IBi (B) and ii (O): all four groups are possible.",
    subtopic: "blood groups ABO"
  },
  {
    question: "The ABO blood group system was discovered by",
    options: [
      "A. Gregor Mendel",
      "B. Charles Darwin",
      "C. Karl Landsteiner",
      "D. Louis Pasteur"
    ],
    answer: "C",
    explanation: "Karl Landsteiner identified the ABO blood groups in the early 1900s.",
    subtopic: "blood groups ABO"
  },
  {
    question: "The Rh factor refers to",
    options: [
      "A. a protein on red cells present in some people (Rh+)",
      "B. the ABO antigen",
      "C. a white blood cell type",
      "D. the haemoglobin variant"
    ],
    answer: "A",
    explanation: "The Rh (D) factor is an antigen on red cells; people are Rh+ if present and Rh- if absent.",
    subtopic: "blood groups ABO"
  },
  {
    question: "A person with blood group O negative is often called the universal donor because they lack",
    options: [
      "A. A and B antigens and the Rh(D) antigen",
      "B. only the Rh antigen",
      "C. haemoglobin",
      "D. plasma"
    ],
    answer: "A",
    explanation: "O negative red cells lack A, B and Rh(D) antigens, making them safe for most recipients.",
    subtopic: "blood groups ABO"
  },
  {
    question: "In the ABO system, the allele i is recessive to both",
    options: [
      "A. IA only",
      "B. IB only",
      "C. both IA and IB",
      "D. neither"
    ],
    answer: "C",
    explanation: "The i allele is recessive to both IA and IB, so it is masked in IAi and IBi genotypes.",
    subtopic: "blood groups ABO"
  }
];

module.exports = questions;
