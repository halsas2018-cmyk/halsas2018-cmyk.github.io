// biology — Determination of Paternity
const questions = [
  {
    question: "Paternity of a child can be investigated using?",
    options: [
      "A. blood groups only",
      "B. DNA profiling only",
      "C. both blood groups and DNA profiling",
      "D. height only"
    ],
    answer: "C",
    explanation: "Blood groups can exclude, while DNA profiling can establish paternity with high certainty.",
    subtopic: "Blood Group Genetics"
  },
  {
    question: "In blood group paternity testing, a child with group O must have parents who?",
    options: [
      "A. both carry the O allele",
      "B. are both group AB",
      "C. are both group A",
      "D. are both group B"
    ],
    answer: "A",
    explanation: "Group O (ii) requires an O allele from each parent.",
    subtopic: "Blood Group Genetics"
  },
  {
    question: "If a child is blood group AB, possible fathers include those with?",
    options: [
      "A. an A or B allele (groups A, B or AB)",
      "B. only group O",
      "C. only group AB",
      "D. only group OO"
    ],
    answer: "A",
    explanation: "AB needs one A and one B allele, contributed by parents of compatible groups.",
    subtopic: "Blood Group Genetics"
  },
  {
    question: "A child with group O CANNOT have parents who are both?",
    options: [
      "A. group A (AO)",
      "B. group AB and group AB",
      "C. group O and group O",
      "D. group A (AO) and group O"
    ],
    answer: "B",
    explanation: "AB x AB yields A, B or AB offspring but never O, since neither parent has an O allele.",
    subtopic: "Blood Group Genetics"
  },
  {
    question: "Blood group testing can exclude but not always prove paternity because?",
    options: [
      "A. many people share the same blood group",
      "B. it is completely unreliable",
      "C. it uses no genetics",
      "D. it measures only height"
    ],
    answer: "A",
    explanation: "Blood groups are shared by many people, so a match supports but does not uniquely identify a father.",
    subtopic: "Blood Group Genetics"
  },
  {
    question: "DNA paternity testing directly compares the child's DNA with?",
    options: [
      "A. the alleged father's DNA",
      "B. blood pressure records",
      "C. the child's height",
      "D. the mother's weight"
    ],
    answer: "A",
    explanation: "Matching alleles between child and alleged father establish paternity statistically.",
    subtopic: "DNA Fingerprinting"
  },
  {
    question: "A child inherits half of its nuclear DNA from?",
    options: [
      "A. the mother only",
      "B. the father only",
      "C. each biological parent",
      "D. the grandparents only"
    ],
    answer: "C",
    explanation: "One set of chromosomes comes from each parent, so half the nuclear DNA is paternal.",
    subtopic: "Inheritance Patterns"
  },
  {
    question: "The probability of paternity from a DNA test can exceed?",
    options: [
      "A. 99.9%",
      "B. 10%",
      "C. exactly 50%",
      "D. 0%"
    ],
    answer: "A",
    explanation: "Modern multi-locus STR testing often gives paternity probabilities above 99.9%.",
    subtopic: "DNA Fingerprinting"
  },
  {
    question: "In paternity analysis, any child allele not present in the mother must have come from?",
    options: [
      "A. the biological father",
      "B. the doctor",
      "C. the environment",
      "D. mutation only"
    ],
    answer: "A",
    explanation: "The paternal allele is the one the child has but the mother lacks.",
    subtopic: "Inheritance Patterns"
  },
  {
    question: "DNA profiling for paternity typically examines?",
    options: [
      "A. short tandem repeats (STRs)",
      "B. proteins only",
      "C. lipids",
      "D. carbohydrates"
    ],
    answer: "A",
    explanation: "STR loci are highly variable and used to compare child, mother and alleged father.",
    subtopic: "DNA Fingerprinting"
  },
  {
    question: "Which method is more reliable for determining paternity?",
    options: [
      "A. blood group comparison",
      "B. DNA profiling",
      "C. eye colour",
      "D. family surname"
    ],
    answer: "B",
    explanation: "DNA profiling is individual-specific and far more conclusive than blood groups.",
    subtopic: "DNA Fingerprinting"
  },
  {
    question: "If the mother is group A (AO) and the child is group O (OO), the father must contribute a(n)?",
    options: [
      "A. O allele",
      "B. A allele",
      "C. B allele",
      "D. AB allele"
    ],
    answer: "A",
    explanation: "The child's O allele from the father means the father carries at least one O allele.",
    subtopic: "Blood Group Genetics"
  },
  {
    question: "A child of blood group B could have a father of?",
    options: [
      "A. group O, A, B or AB (depending on genotype)",
      "B. group B only",
      "C. group AB only",
      "D. group O only"
    ],
    answer: "A",
    explanation: "A B child (BB or BO) can arise from several paternal groups carrying B or O.",
    subtopic: "Blood Group Genetics"
  },
  {
    question: "Blood group paternity testing is based on?",
    options: [
      "A. Mendelian inheritance of blood antigens",
      "B. random chance",
      "C. the environment",
      "D. the child's age"
    ],
    answer: "A",
    explanation: "ABO alleles are inherited in predictable Mendelian ratios.",
    subtopic: "Inheritance Patterns"
  },
  {
    question: "Mitochondrial DNA is inherited from the?",
    options: [
      "A. mother only",
      "B. father only",
      "C. both parents equally",
      "D. neither parent"
    ],
    answer: "A",
    explanation: "Mitochondria come from the egg, so mtDNA is maternally inherited (not useful for paternity).",
    subtopic: "Inheritance Patterns"
  },
  {
    question: "The Y chromosome is passed from father to?",
    options: [
      "A. all children",
      "B. sons only",
      "C. daughters only",
      "D. none"
    ],
    answer: "B",
    explanation: "Only sons receive the father's Y chromosome; daughters get the X.",
    subtopic: "Inheritance Patterns"
  },
  {
    question: "Y-chromosome analysis in paternity is useful for confirming?",
    options: [
      "A. male-line relationship",
      "B. female children",
      "C. blood group",
      "D. height"
    ],
    answer: "A",
    explanation: "Shared Y markers link a boy to his paternal lineage.",
    subtopic: "DNA Fingerprinting"
  },
  {
    question: "In DNA paternity testing, 'exclusion' means the alleged father?",
    options: [
      "A. cannot be the biological father",
      "B. is confirmed as the father",
      "C. is the mother",
      "D. is unrelated to the mother"
    ],
    answer: "A",
    explanation: "Missing required paternal alleles exclude the man as the father.",
    subtopic: "DNA Fingerprinting"
  },
  {
    question: "A mutation may cause a mismatch at?",
    options: [
      "A. one or a few STR loci",
      "B. all loci simultaneously",
      "C. the blood group only",
      "D. none ever"
    ],
    answer: "A",
    explanation: "Rare mutations can alter a single locus; analysts account for this with multiple loci.",
    subtopic: "DNA Fingerprinting"
  },
  {
    question: "A proper paternity test requires samples from?",
    options: [
      "A. the child and the alleged father (mother ideally too)",
      "B. the child only",
      "C. the alleged father only",
      "D. unrelated neighbours"
    ],
    answer: "A",
    explanation: "Including the mother helps identify the child's paternal alleles definitively.",
    subtopic: "DNA Fingerprinting"
  },
  {
    question: "A child with group B born to a group A mother (AO) and an alleged father who is group AB: is paternity possible?",
    options: [
      "A. Yes, the AB father can supply a B allele",
      "B. No, impossible",
      "C. Only if the mother is O",
      "D. Never"
    ],
    answer: "A",
    explanation: "An AB father can give a B allele; with the mother's O, the child is BO (group B).",
    subtopic: "Blood Group Genetics"
  },
  {
    question: "The allele for blood group O is?",
    options: [
      "A. recessive to A and B",
      "B. dominant",
      "C. codominant with A",
      "D. lethal"
    ],
    answer: "A",
    explanation: "i is recessive; A and B are dominant over O.",
    subtopic: "Inheritance Patterns"
  },
  {
    question: "If both parents are group A with genotype AO, their child could be?",
    options: [
      "A. group A or group O",
      "B. group A only",
      "C. group AB only",
      "D. group B only"
    ],
    answer: "A",
    explanation: "An AO x AO cross yields AA or AO (group A) and OO (group O) offspring.",
    subtopic: "Inheritance Patterns"
  },
  {
    question: "A child with group O born to a group AB mother is?",
    options: [
      "A. impossible (AB mother has no O allele)",
      "B. possible",
      "C. common",
      "D. always male"
    ],
    answer: "A",
    explanation: "An AB mother (IAIB) cannot pass an O allele, so an OO child is impossible.",
    subtopic: "Blood Group Genetics"
  },
  {
    question: "In a DNA paternity profile, bands shared between child and father indicate?",
    options: [
      "A. inherited paternal alleles",
      "B. random noise",
      "C. never match",
      "D. laboratory error only"
    ],
    answer: "A",
    explanation: "Each paternal band in the child should correspond to a band in the father.",
    subtopic: "DNA Fingerprinting"
  },
  {
    question: "The legal standard for proving paternity is usually a?",
    options: [
      "A. high statistical probability (e.g. >99%)",
      "B. 50% chance",
      "C. 10% chance",
      "D. 0% chance"
    ],
    answer: "A",
    explanation: "Courts require a very high paternity index or probability from DNA evidence.",
    subtopic: "DNA Fingerprinting"
  },
  {
    question: "Historically, before DNA testing, paternity was inferred using?",
    options: [
      "A. blood group analysis",
      "B. DNA sequencing",
      "C. STRs",
      "D. genomics"
    ],
    answer: "A",
    explanation: "ABO and other blood groups were the main biological tool for exclusion historically.",
    subtopic: "Blood Group Genetics"
  },
  {
    question: "A limitation of blood group paternity testing is its?",
    options: [
      "A. inability to pinpoint a unique father",
      "B. total unreliability",
      "C. lack of any genetics",
      "D. use of viruses"
    ],
    answer: "A",
    explanation: "Many men share compatible blood groups, so it excludes rather than identifies uniquely.",
    subtopic: "Blood Group Genetics"
  },
  {
    question: "The paternity index is a measure of?",
    options: [
      "A. the statistical likelihood of paternity",
      "B. blood pressure",
      "C. body height",
      "D. body weight"
    ],
    answer: "A",
    explanation: "It compares the probability of the genetic evidence if the man is the father versus not.",
    subtopic: "DNA Fingerprinting"
  },
  {
    question: "Physical resemblance may suggest paternity but can only be confirmed by?",
    options: [
      "A. genetic testing",
      "B. observation alone",
      "C. guessing",
      "D. photographs"
    ],
    answer: "A",
    explanation: "Only genetic analysis provides conclusive evidence of paternity.",
    subtopic: "DNA Fingerprinting"
  },
  {
    question: "The child's ABO group is determined by alleles inherited from?",
    options: [
      "A. both biological parents",
      "B. the mother only",
      "C. the father only",
      "D. the doctor"
    ],
    answer: "A",
    explanation: "One ABO allele comes from each parent.",
    subtopic: "Inheritance Patterns"
  },
  {
    question: "If the alleged father is group O and the child is group AB, he is?",
    options: [
      "A. excluded as the father",
      "B. confirmed as the father",
      "C. possibly the father",
      "D. the mother"
    ],
    answer: "A",
    explanation: "A group O man (ii) can only pass O; an AB child needs an A or B allele from the father.",
    subtopic: "Blood Group Genetics"
  },
  {
    question: "In DNA paternity analysis, the child's paternal allele is the one?",
    options: [
      "A. not present in the mother",
      "B. present in the mother",
      "C. that mutated",
      "D. that is absent from both"
    ],
    answer: "A",
    explanation: "Any allele the child has but the mother lacks must be paternal.",
    subtopic: "Inheritance Patterns"
  },
  {
    question: "Blood group systems commonly used in paternity include?",
    options: [
      "A. ABO and Rh",
      "B. height only",
      "C. eye colour only",
      "D. age only"
    ],
    answer: "A",
    explanation: "ABO and Rh antigens are inherited and were historically used for exclusion.",
    subtopic: "Blood Group Genetics"
  },
  {
    question: "A man who is group AB cannot father a group O child if the mother is also?",
    options: [
      "A. without an O allele (e.g. group AB)",
      "B. group O",
      "C. group A (AO)",
      "D. group B (BO)"
    ],
    answer: "A",
    explanation: "Neither AB parent can supply an O allele, so an OO child is impossible.",
    subtopic: "Blood Group Genetics"
  },
  {
    question: "DNA paternity tests are usually performed on samples such as?",
    options: [
      "A. cheek cells or blood",
      "B. air",
      "C. water",
      "D. food"
    ],
    answer: "A",
    explanation: "Buccal swabs or blood provide nucleated cells for DNA extraction.",
    subtopic: "DNA Fingerprinting"
  },
  {
    question: "In genetics, being heterozygous for ABO means having?",
    options: [
      "A. two different alleles, e.g. AO",
      "B. two identical alleles",
      "C. no alleles",
      "D. three alleles"
    ],
    answer: "A",
    explanation: "Heterozygous indicates two different alleles at the locus (e.g. AO, BO, AB).",
    subtopic: "Inheritance Patterns"
  },
  {
    question: "Identical twins would have?",
    options: [
      "A. the same nuclear DNA profile",
      "B. different blood groups",
      "C. no DNA",
      "D. unique DNA from birth"
    ],
    answer: "A",
    explanation: "Monozygotic twins share identical nuclear DNA (though fingerprints differ).",
    subtopic: "DNA Fingerprinting"
  },
  {
    question: "The accuracy of paternity testing improved dramatically with?",
    options: [
      "A. DNA technology",
      "B. microscopes",
      "C. thermometers",
      "D. weighing scales"
    ],
    answer: "A",
    explanation: "DNA profiling replaced less precise blood-group methods.",
    subtopic: "DNA Fingerprinting"
  },
  {
    question: "A man can be excluded as the father if he lacks?",
    options: [
      "A. the allele the child must have received paternally",
      "B. tall stature",
      "C. old age",
      "D. wealth"
    ],
    answer: "A",
    explanation: "Missing a required paternal allele excludes him biologically.",
    subtopic: "Inheritance Patterns"
  },
  {
    question: "The Rh factor can support paternity analysis because it is?",
    options: [
      "A. inherited from the parents",
      "B. acquired randomly",
      "C. environmental",
      "D. changeable by diet"
    ],
    answer: "A",
    explanation: "Rh(D) status is genetically inherited and can be tracked in families.",
    subtopic: "Blood Group Genetics"
  },
  {
    question: "If the mother is Rh- and the child is Rh+, the father must be?",
    options: [
      "A. carrying at least one Rh+ allele",
      "B. Rh- only",
      "C. group O",
      "D. group AB"
    ],
    answer: "A",
    explanation: "An Rh+ child needs a D allele, which must come from an Rh+ or heterozygous father.",
    subtopic: "Blood Group Genetics"
  },
  {
    question: "In disputed paternity, blood group testing is best described as?",
    options: [
      "A. an exclusion test",
      "B. definitive proof of fatherhood",
      "C. useless",
      "D. illegal"
    ],
    answer: "A",
    explanation: "It can rule men out but rarely proves a unique father without DNA.",
    subtopic: "Blood Group Genetics"
  },
  {
    question: "The power of exclusion by blood groups alone is generally lower than by?",
    options: [
      "A. DNA profiling",
      "B. height measurement",
      "C. weight measurement",
      "D. age estimation"
    ],
    answer: "A",
    explanation: "DNA has many more variable loci, giving far higher exclusion power.",
    subtopic: "DNA Fingerprinting"
  },
  {
    question: "A DNA paternity report gives a Combined Paternity Index based on?",
    options: [
      "A. multiple genetic loci",
      "B. a single locus",
      "C. blood pressure",
      "D. a photograph"
    ],
    answer: "A",
    explanation: "Combining several loci produces a very high statistical confidence.",
    subtopic: "DNA Fingerprinting"
  },
  {
    question: "Sample contamination in paternity testing can lead to?",
    options: [
      "A. erroneous results",
      "B. better accuracy",
      "C. no effect",
      "D. a free test"
    ],
    answer: "A",
    explanation: "Mixed or contaminated samples can produce false matches or exclusions.",
    subtopic: "DNA Fingerprinting"
  },
  {
    question: "Blood group testing cannot determine?",
    options: [
      "A. the exact father among many compatible men",
      "B. exclusion of some men",
      "C. inheritance patterns",
      "D. the child's alleles"
    ],
    answer: "A",
    explanation: "Because groups are shared widely, blood typing alone cannot name a unique father.",
    subtopic: "Blood Group Genetics"
  },
  {
    question: "The discovery that DNA carries hereditary information made paternity testing possible through?",
    options: [
      "A. DNA profiling",
      "B. microscopy",
      "C. weighing",
      "D. measuring"
    ],
    answer: "A",
    explanation: "Understanding DNA inheritance underpins modern paternity tests.",
    subtopic: "DNA Fingerprinting"
  },
  {
    question: "A man who is group O (ii) and a woman who is group A (AO) can have a child who is?",
    options: [
      "A. group A or group O",
      "B. group AB only",
      "C. group B only",
      "D. group O only"
    ],
    answer: "A",
    explanation: "The O father gives O; the AO mother gives A or O, yielding A or O children.",
    subtopic: "Inheritance Patterns"
  },
  {
    question: "The most conclusive modern method of determining paternity is?",
    options: [
      "A. DNA profiling",
      "B. blood group testing",
      "C. physical resemblance",
      "D. interview"
    ],
    answer: "A",
    explanation: "DNA profiling provides individual-specific, statistically strong evidence.",
    subtopic: "DNA Fingerprinting"
  },
  {
    question: "In a paternity case, the alleged father's exclusion at several STR loci means he is?",
    options: [
      "A. very unlikely to be the father",
      "B. certainly the father",
      "C. the mother",
      "D. unrelated to the child's health"
    ],
    answer: "A",
    explanation: "Multiple mismatched paternal alleles strongly exclude paternity.",
    subtopic: "DNA Fingerprinting"
  }
];

module.exports = questions;
