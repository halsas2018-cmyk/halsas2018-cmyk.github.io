// biology — Transmission of Heredity
const questions = [
  {
    question: "Gregor Mendel's principles of inheritance were derived mainly from experiments on which plant?",
    options: [
      "A. Pisum sativum (garden pea)",
      "B. Zea mays (maize)",
      "C. Drosophila melanogaster",
      "D. Arabidopsis thaliana"
    ],
    answer: "A",
    explanation: "Mendel used the garden pea Pisum sativum because it has distinct contrasting traits and is easily self- or cross-pollinated.",
    subtopic: "Transmission"
  },
  {
    question: "The physical, observable appearance of an organism as a result of its genes is called its?",
    options: [
      "A. Genotype",
      "B. Phenotype",
      "C. Allele",
      "D. Karyotype"
    ],
    answer: "B",
    explanation: "Phenotype refers to the observable characteristics (e.g. tallness, colour) produced by the genotype.",
    subtopic: "Transmission"
  },
  {
    question: "The genetic constitution of an organism is termed its?",
    options: [
      "A. Phenotype",
      "B. Genotype",
      "C. Trait",
      "D. Genome size"
    ],
    answer: "B",
    explanation: "Genotype is the complete set of genes/alleles an organism carries, regardless of whether they are expressed.",
    subtopic: "Transmission"
  },
  {
    question: "An allele that is expressed in the phenotype even when only one copy is present is described as?",
    options: [
      "A. Recessive",
      "B. Dominant",
      "C. Co-dominant",
      "D. Lethal"
    ],
    answer: "B",
    explanation: "A dominant allele masks the effect of a recessive allele in a heterozygote.",
    subtopic: "Transmission"
  },
  {
    question: "A recessive allele is only expressed in the phenotype when the individual is?",
    options: [
      "A. Homozygous dominant",
      "B. Heterozygous",
      "C. Homozygous recessive",
      "D. Polyploid"
    ],
    answer: "C",
    explanation: "Two copies of the recessive allele are needed to show the recessive trait because one dominant allele would mask it.",
    subtopic: "Transmission"
  },
  {
    question: "An individual with two identical alleles for a trait is described as?",
    options: [
      "A. Heterozygous",
      "B. Homozygous",
      "C. Hemizygous",
      "D. Hybrid"
    ],
    answer: "B",
    explanation: "Homozygous means both alleles at a locus are the same (e.g. AA or aa).",
    subtopic: "Transmission"
  },
  {
    question: "A heterozygous individual has?",
    options: [
      "A. Two identical alleles",
      "B. Two different alleles",
      "C. No alleles",
      "D. Three alleles"
    ],
    answer: "B",
    explanation: "Heterozygous means the two alleles at a locus differ (e.g. Aa).",
    subtopic: "Transmission"
  },
  {
    question: "In a monohybrid cross between two heterozygous pea plants (Tt × Tt) for tallness, the expected phenotypic ratio in the F2 generation is?",
    options: [
      "A. 1:1",
      "B. 3:1",
      "C. 9:3:3:1",
      "D. 1:2:1"
    ],
    answer: "B",
    explanation: "Tall (TT, Tt, Tt) outnumber dwarf (tt) by 3:1 because tall is dominant.",
    subtopic: "Transmission"
  },
  {
    question: "In the same Tt × Tt cross, the expected genotypic ratio in the F2 generation is?",
    options: [
      "A. 3:1",
      "B. 1:2:1",
      "C. 9:3:3:1",
      "D. 1:1"
    ],
    answer: "B",
    explanation: "The genotypes are TT : Tt : tt in the ratio 1 : 2 : 1.",
    subtopic: "Transmission"
  },
  {
    question: "The first filial (F1) generation results from crossing?",
    options: [
      "A. Two F2 individuals",
      "B. Two pure-breeding (P) parents",
      "C. Two F1 individuals",
      "D. A backcross"
    ],
    answer: "B",
    explanation: "The F1 is the first offspring generation produced by crossing the original pure-breeding parents (P generation).",
    subtopic: "Transmission"
  },
  {
    question: "When pure-breeding tall (TT) and pure-breeding dwarf (tt) pea plants are crossed, all F1 offspring are?",
    options: [
      "A. Dwarf",
      "B. Tall",
      "C. Medium height",
      "D. Sterile"
    ],
    answer: "B",
    explanation: "All F1 are Tt heterozygotes, and tall (T) is dominant over dwarf (t).",
    subtopic: "Transmission"
  },
  {
    question: "The principle that during gamete formation the two alleles of a gene separate so each gamete carries only one allele is the?",
    options: [
      "A. Law of independent assortment",
      "B. Law of segregation",
      "C. Law of dominance",
      "D. Law of linkage"
    ],
    answer: "B",
    explanation: "Mendel's law of segregation states alleles separate into different gametes.",
    subtopic: "Transmission"
  },
  {
    question: "According to Mendel, alleles of different genes assort independently during gamete formation provided the genes are on?",
    options: [
      "A. The same chromosome",
      "B. Different chromosomes",
      "C. Sex chromosomes only",
      "D. Mitochondria"
    ],
    answer: "B",
    explanation: "Independent assortment applies to genes located on different (non-homologous) chromosomes.",
    subtopic: "Transmission"
  },
  {
    question: "A dihybrid cross between two heterozygotes (RrYy × RrYy) for two independently assorting traits gives an F2 phenotypic ratio of?",
    options: [
      "A. 3:1",
      "B. 9:3:3:1",
      "C. 1:1:1:1",
      "D. 1:2:1"
    ],
    answer: "B",
    explanation: "Two unlinked genes assorting independently produce the classic 9:3:3:1 phenotypic ratio.",
    subtopic: "Transmission"
  },
  {
    question: "In a dihybrid cross, how many distinct gamete types are produced by a double heterozygote (RrYy)?",
    options: [
      "A. 2",
      "B. 4",
      "C. 8",
      "D. 16"
    ],
    answer: "B",
    explanation: "The four gamete types are RY, Ry, rY and ry.",
    subtopic: "Transmission"
  },
  {
    question: "A test cross involves crossing an individual of unknown genotype with a?",
    options: [
      "A. Double heterozygote",
      "B. Homozygous recessive individual",
      "C. Homozygous dominant individual",
      "D. Another unknown"
    ],
    answer: "B",
    explanation: "Crossing with a homozygous recessive reveals the hidden alleles of the tested parent.",
    subtopic: "Transmission"
  },
  {
    question: "In a test cross, if all offspring show the dominant phenotype, the tested parent was?",
    options: [
      "A. Homozygous recessive",
      "B. Homozygous dominant",
      "C. Heterozygous",
      "D. Sex-linked"
    ],
    answer: "B",
    explanation: "If the parent were heterozygous, some recessive offspring would appear, so all-dominant means homozygous dominant.",
    subtopic: "Transmission"
  },
  {
    question: "Incomplete dominance is illustrated by the snapdragon flower where red × white gives?",
    options: [
      "A. All red",
      "B. All white",
      "C. Pink (intermediate)",
      "D. Red and white spotted"
    ],
    answer: "C",
    explanation: "Neither allele is fully dominant, so the heterozygote shows an intermediate pink colour.",
    subtopic: "Transmission"
  },
  {
    question: "In codominance, both alleles in a heterozygote are?",
    options: [
      "A. Fully expressed",
      "B. Not expressed",
      "C. One suppressed",
      "D. Mutated"
    ],
    answer: "A",
    explanation: "In codominance both alleles are expressed simultaneously, as in the human AB blood group.",
    subtopic: "Transmission"
  },
  {
    question: "The human ABO blood group AB phenotype is an example of?",
    options: [
      "A. Complete dominance",
      "B. Codominance",
      "C. Incomplete dominance",
      "D. Epistasis"
    ],
    answer: "B",
    explanation: "Both A and B antigens are produced together in the AB heterozygote, showing codominance.",
    subtopic: "Transmission"
  },
  {
    question: "Genes are located on?",
    options: [
      "A. Ribosomes",
      "B. Chromosomes",
      "C. Cell membranes",
      "D. Mitochondrial matrix only"
    ],
    answer: "B",
    explanation: "Genes are segments of DNA arranged linearly on chromosomes in the nucleus.",
    subtopic: "Transmission"
  },
  {
    question: "A chromosome consists mainly of?",
    options: [
      "A. Protein only",
      "B. DNA and protein",
      "C. RNA only",
      "D. Lipid and carbohydrate"
    ],
    answer: "B",
    explanation: "Chromosomes are made of DNA tightly coiled around histone proteins.",
    subtopic: "Transmission"
  },
  {
    question: "The basic unit of heredity that occupies a fixed position on a chromosome is the?",
    options: [
      "A. Nucleotide",
      "B. Gene",
      "C. Codon",
      "D. Chromatid"
    ],
    answer: "B",
    explanation: "A gene is the functional unit of heredity located at a specific locus.",
    subtopic: "Transmission"
  },
  {
    question: "An alternative form of a gene occupying the same locus is called an?",
    options: [
      "A. Genome",
      "B. Allele",
      "C. Exon",
      "D. Intron"
    ],
    answer: "B",
    explanation: "Alleles are different versions of the same gene (e.g. T and t).",
    subtopic: "Transmission"
  },
  {
    question: "The position of a gene on a chromosome is referred to as its?",
    options: [
      "A. Locus",
      "B. Centromere",
      "C. Telomere",
      "D. Genome"
    ],
    answer: "A",
    explanation: "The locus is the specific physical location of a gene on a chromosome.",
    subtopic: "Transmission"
  },
  {
    question: "In humans, the sex chromosomes of a female are?",
    options: [
      "A. XY",
      "B. XX",
      "C. YY",
      "D. XO"
    ],
    answer: "B",
    explanation: "Human females have two X chromosomes (XX); males have XY.",
    subtopic: "Transmission"
  },
  {
    question: "In humans, the sex chromosomes of a male are?",
    options: [
      "A. XX",
      "B. XY",
      "C. YY",
      "D. XXY"
    ],
    answer: "B",
    explanation: "Human males have one X and one Y chromosome (XY).",
    subtopic: "Transmission"
  },
  {
    question: "Traits carried on the X chromosome are described as?",
    options: [
      "A. Autosomal",
      "B. Sex-linked",
      "C. Cytoplasmic",
      "D. Polygenic"
    ],
    answer: "B",
    explanation: "Genes on sex chromosomes (usually X) produce sex-linked inheritance patterns.",
    subtopic: "Transmission"
  },
  {
    question: "A cross in which the two parents differ in only one character is a?",
    options: [
      "A. Dihybrid cross",
      "B. Monohybrid cross",
      "C. Test cross",
      "D. Backcross"
    ],
    answer: "B",
    explanation: "A monohybrid cross tracks a single trait between parents differing in one gene.",
    subtopic: "Transmission"
  },
  {
    question: "A backcross is a cross between a hybrid and?",
    options: [
      "A. Its F2 offspring",
      "B. One of its parents or a genetically similar individual",
      "C. A different species",
      "D. A triploid"
    ],
    answer: "B",
    explanation: "A backcross mates a hybrid (F1) back to one of the parental genotypes.",
    subtopic: "Transmission"
  },
  {
    question: "The genetic material of all living cells is?",
    options: [
      "A. Protein",
      "B. DNA (and RNA in some viruses)",
      "C. Carbohydrate",
      "D. Lipid"
    ],
    answer: "B",
    explanation: "DNA carries hereditary information in cells; some viruses use RNA instead of DNA.",
    subtopic: "Transmission"
  },
  {
    question: "The transforming principle demonstrated by Griffith and identified by Avery as the hereditary material is?",
    options: [
      "A. Protein",
      "B. DNA",
      "C. RNA",
      "D. Lipid"
    ],
    answer: "B",
    explanation: "Avery, MacLeod and McCarty showed DNA was the molecule responsible for bacterial transformation.",
    subtopic: "Transmission"
  },
  {
    question: "In DNA, the base pairs are held together by?",
    options: [
      "A. Covalent bonds",
      "B. Hydrogen bonds",
      "C. Ionic bonds",
      "D. Disulfide bonds"
    ],
    answer: "B",
    explanation: "Hydrogen bonds between complementary bases hold the two DNA strands together.",
    subtopic: "Transmission"
  },
  {
    question: "The four nitrogenous bases in DNA are adenine, guanine, cytosine and?",
    options: [
      "A. Uracil",
      "B. Thymine",
      "C. Ribose",
      "D. Phosphate"
    ],
    answer: "B",
    explanation: "DNA uses thymine; uracil replaces thymine in RNA.",
    subtopic: "Transmission"
  },
  {
    question: "In DNA, adenine pairs with?",
    options: [
      "A. Cytosine",
      "B. Thymine",
      "C. Guanine",
      "D. Uracil"
    ],
    answer: "B",
    explanation: "Adenine forms two hydrogen bonds with thymine (A–T).",
    subtopic: "Transmission"
  },
  {
    question: "In DNA, guanine pairs with?",
    options: [
      "A. Adenine",
      "B. Cytosine",
      "C. Thymine",
      "D. Uracil"
    ],
    answer: "B",
    explanation: "Guanine forms three hydrogen bonds with cytosine (G–C).",
    subtopic: "Transmission"
  },
  {
    question: "A nucleotide of DNA is composed of a phosphate, a sugar (deoxyribose) and a?",
    options: [
      "A. Amino acid",
      "B. Nitrogenous base",
      "C. Fatty acid",
      "D. Lipid"
    ],
    answer: "B",
    explanation: "A DNA nucleotide = phosphate + deoxyribose sugar + one nitrogenous base.",
    subtopic: "Transmission"
  },
  {
    question: "The sugar found in DNA is?",
    options: [
      "A. Ribose",
      "B. Deoxyribose",
      "C. Glucose",
      "D. Fructose"
    ],
    answer: "B",
    explanation: "DNA contains deoxyribose; RNA contains ribose.",
    subtopic: "Transmission"
  },
  {
    question: "The process by which DNA makes an exact copy of itself is called?",
    options: [
      "A. Translation",
      "B. Replication",
      "C. Transcription",
      "D. Transduction"
    ],
    answer: "B",
    explanation: "DNA replication produces two identical copies before cell division.",
    subtopic: "Transmission"
  },
  {
    question: "The process by which genetic information is copied from DNA into messenger RNA is?",
    options: [
      "A. Replication",
      "B. Transcription",
      "C. Translation",
      "D. Transformation"
    ],
    answer: "B",
    explanation: "Transcription synthesises mRNA using a DNA template.",
    subtopic: "Transmission"
  },
  {
    question: "The process by which the mRNA code is used to assemble amino acids into a protein is?",
    options: [
      "A. Transcription",
      "B. Translation",
      "C. Replication",
      "D. Transduction"
    ],
    answer: "B",
    explanation: "Translation occurs on ribosomes and builds proteins from the mRNA codon sequence.",
    subtopic: "Transmission"
  },
  {
    question: "The thread-like structures in the nucleus that become visible during cell division and carry genes are?",
    options: [
      "A. Chromatids",
      "B. Chromosomes",
      "C. Centrioles",
      "D. Cilia"
    ],
    answer: "B",
    explanation: "Chromosomes condense from chromatin during division and bear the genes.",
    subtopic: "Transmission"
  },
  {
    question: "A homozygous dominant genotype is represented as?",
    options: [
      "A. Aa",
      "B. AA",
      "C. aa",
      "D. aA"
    ],
    answer: "B",
    explanation: "Two identical dominant alleles (AA) denote homozygous dominant.",
    subtopic: "Transmission"
  },
  {
    question: "A homozygous recessive genotype is represented as?",
    options: [
      "A. AA",
      "B. Aa",
      "C. aa",
      "D. aA"
    ],
    answer: "C",
    explanation: "Two identical recessive alleles (aa) denote homozygous recessive.",
    subtopic: "Transmission"
  },
  {
    question: "The outward, observable characteristics of an organism collectively form its?",
    options: [
      "A. Genotype",
      "B. Phenotype",
      "C. Karyotype",
      "D. Haplotype"
    ],
    answer: "B",
    explanation: "Phenotype is the sum of observable traits resulting from genotype and environment.",
    subtopic: "Transmission"
  },
  {
    question: "During meiosis, homologous chromosomes separate in?",
    options: [
      "A. Mitosis",
      "B. Anaphase I of meiosis I",
      "C. Anaphase II only",
      "D. Interphase"
    ],
    answer: "B",
    explanation: "Homologous pairs are pulled apart in anaphase I, realising Mendel's law of segregation.",
    subtopic: "Transmission"
  },
  {
    question: "The law of independent assortment is best demonstrated by a?",
    options: [
      "A. Monohybrid cross",
      "B. Dihybrid cross",
      "C. Test cross",
      "D. Backcross"
    ],
    answer: "B",
    explanation: "A dihybrid cross shows two genes assorting independently to give a 9:3:3:1 ratio.",
    subtopic: "Transmission"
  },
  {
    question: "A character that is controlled by many genes is described as?",
    options: [
      "A. Monogenic",
      "B. Polygenic",
      "C. Sex-linked",
      "D. Epistatic"
    ],
    answer: "B",
    explanation: "Polygenic inheritance involves several genes contributing to one trait (e.g. height, skin colour).",
    subtopic: "Transmission"
  },
  {
    question: "In a heterozygous tall pea plant (Tt), the allele that is masked is?",
    options: [
      "A. T (tall)",
      "B. t (dwarf)",
      "C. Both",
      "D. Neither"
    ],
    answer: "B",
    explanation: "The recessive dwarf allele (t) is masked by the dominant tall allele (T) in the heterozygote.",
    subtopic: "Transmission"
  },
  {
    question: "The genotype of a pure-breeding (true-breeding) tall pea plant is?",
    options: [
      "A. Tt",
      "B. TT",
      "C. tt",
      "D. tT"
    ],
    answer: "B",
    explanation: "Pure-breeding individuals are homozygous (TT) and produce only one allele type in gametes.",
    subtopic: "Transmission"
  },
];

module.exports = questions;
