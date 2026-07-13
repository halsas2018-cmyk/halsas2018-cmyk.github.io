// biology — Genetic Terminologies
const questions = [
  // ---------- basic terms ----------
  {
    question: "The branch of biology that studies heredity and variation is called?",
    options: [
      "A. Ecology",
      "B. Genetics",
      "C. Taxonomy",
      "D. Physiology"
    ],
    answer: "B",
    explanation: "Genetics is the scientific study of heredity, genes and variation among living organisms.",
    subtopic: "basic terms"
  },
  {
    question: "A permanent, heritable change in the DNA sequence of a gene is termed?",
    options: [
      "A. Mutation",
      "B. Variation",
      "C. Adaptation",
      "D. Inheritance"
    ],
    answer: "A",
    explanation: "A mutation is a stable change in the nucleotide sequence of DNA that can be passed on.",
    subtopic: "basic terms"
  },
  {
    question: "A characteristic of an organism that can be inherited is referred to as?",
    options: [
      "A. An environment",
      "B. A trait",
      "C. A niche",
      "D. A habitat"
    ],
    answer: "B",
    explanation: "A trait is a specific inherited feature or characteristic of an organism, such as eye colour.",
    subtopic: "basic terms"
  },
  {
    question: "The basic physical and functional unit of heredity is the?",
    options: [
      "A. Chromosome",
      "B. Gene",
      "C. Ribosome",
      "D. Nucleus"
    ],
    answer: "B",
    explanation: "A gene is the unit of heredity that codes for a particular character and is transmitted to offspring.",
    subtopic: "basic terms"
  },
  {
    question: "A thread-like structure in the nucleus that carries genes is the?",
    options: [
      "A. Chromosome",
      "B. Cilium",
      "C. Flagellum",
      "D. Plastid"
    ],
    answer: "A",
    explanation: "Chromosomes are nuclear structures of DNA and protein that carry the genes in a linear order.",
    subtopic: "basic terms"
  },
  {
    question: "The fertilized egg formed by the union of two gametes is the?",
    options: [
      "A. Embryo",
      "B. Zygote",
      "C. Spore",
      "D. Larva"
    ],
    answer: "B",
    explanation: "A zygote is the diploid cell produced when two haploid gametes (sperm and egg) fuse.",
    subtopic: "basic terms"
  },
  {
    question: "A reproductive cell such as a sperm or an egg is called a?",
    options: [
      "A. Gamete",
      "B. Soma",
      "C. Neuron",
      "D. Spore"
    ],
    answer: "A",
    explanation: "Gametes are haploid sex cells (sperm and ova) that fuse during fertilization.",
    subtopic: "basic terms"
  },
  {
    question: "The term used to describe differences among individuals of the same species is?",
    options: [
      "A. Heredity",
      "B. Variation",
      "C. Mutation",
      "D. Speciation"
    ],
    answer: "B",
    explanation: "Variation refers to the differences in traits exhibited by members of a population.",
    subtopic: "basic terms"
  },
  {
    question: "The position occupied by a gene on a chromosome is known as its?",
    options: [
      "A. Locus",
      "B. Genome",
      "C. Centromere",
      "D. Telomere"
    ],
    answer: "A",
    explanation: "The locus is the specific, fixed location of a gene on a particular chromosome.",
    subtopic: "basic terms"
  },

  // ---------- heredity ----------
  {
    question: "Heredity is best defined as the?",
    options: [
      "A. Ability to mutate",
      "B. Transmission of traits from parents to offspring",
      "C. Process of evolution",
      "D. Formation of gametes"
    ],
    answer: "B",
    explanation: "Heredity is the passing of genetic characteristics from parents to their offspring.",
    subtopic: "heredity"
  },
  {
    question: "The theory of inheritance of acquired characteristics was proposed by?",
    options: [
      "A. Darwin",
      "B. Lamarck",
      "C. Mendel",
      "D. Wallace"
    ],
    answer: "B",
    explanation: "Lamarck proposed that traits acquired during an organism's lifetime could be passed to offspring.",
    subtopic: "heredity"
  },
  {
    question: "According to Darwin, evolutionary change occurs through?",
    options: [
      "A. Use and disuse of organs",
      "B. Natural selection",
      "C. Inheritance of acquired traits",
      "D. Spontaneous generation"
    ],
    answer: "B",
    explanation: "Darwin attributed descent with modification to natural selection acting on variation.",
    subtopic: "heredity"
  },
  {
    question: "Which of the following is an acquired (not inherited) characteristic?",
    options: [
      "A. Eye colour",
      "B. Blood group",
      "C. Muscular build from exercise",
      "D. Attached earlobe"
    ],
    answer: "C",
    explanation: "Muscular build developed through exercise is acquired during life and is not genetically transmitted.",
    subtopic: "heredity"
  },
  {
    question: "Traits that are passed from parents to offspring are said to be?",
    options: [
      "A. Acquired",
      "B. Inherited",
      "C. Environmental",
      "D. Deleterious"
    ],
    answer: "B",
    explanation: "Inherited traits are determined by genes and are transmitted from one generation to the next.",
    subtopic: "heredity"
  },
  {
    question: "Lamarck explained evolutionary change mainly by the principle of?",
    options: [
      "A. Survival of the fittest",
      "B. Use and disuse of organs",
      "C. Genetic drift",
      "D. Random mutation"
    ],
    answer: "B",
    explanation: "Lamarck believed organs used more became enlarged and were passed on, while unused ones degenerated.",
    subtopic: "heredity"
  },
  {
    question: "The study of heredity helps to explain how?",
    options: [
      "A. Organisms obtain energy",
      "B. Traits are transmitted across generations",
      "C. Species become extinct",
      "D. Cells divide by meiosis"
    ],
    answer: "B",
    explanation: "Heredity describes the mechanisms by which genetic information passes between generations.",
    subtopic: "heredity"
  },
  {
    question: "The unit of heredity that is transmitted from parents to offspring is the?",
    options: [
      "A. Chromosome",
      "B. Gene",
      "C. Enzyme",
      "D. Hormone"
    ],
    answer: "B",
    explanation: "Genes are the units of heredity transmitted in gametes from parents to offspring.",
    subtopic: "heredity"
  },

  // ---------- genes & chromosomes ----------
  {
    question: "Genes are located on?",
    options: [
      "A. Ribosomes",
      "B. Chromosomes",
      "C. The cell membrane",
      "D. Mitochondria only"
    ],
    answer: "B",
    explanation: "Nuclear genes are arranged linearly along chromosomes within the cell nucleus.",
    subtopic: "genes & chromosomes"
  },
  {
    question: "DNA is a double helix made up of repeating units called?",
    options: [
      "A. Amino acids",
      "B. Nucleotides",
      "C. Fatty acids",
      "D. Monosaccharides only"
    ],
    answer: "B",
    explanation: "DNA is a polymer of nucleotides, each containing a sugar, phosphate and nitrogenous base.",
    subtopic: "genes & chromosomes"
  },
  {
    question: "The loosely coiled form of DNA seen in a non-dividing cell is called?",
    options: [
      "A. Chromosome",
      "B. Chromatin",
      "C. Centromere",
      "D. Chromatid"
    ],
    answer: "B",
    explanation: "Chromatin is the relaxed DNA-protein complex present in the nucleus during interphase.",
    subtopic: "genes & chromosomes"
  },
  {
    question: "A pair of chromosomes that are similar in shape, size and gene content are?",
    options: [
      "A. Sister chromatids",
      "B. Homologous chromosomes",
      "C. Autosomes only",
      "D. Sex chromosomes"
    ],
    answer: "B",
    explanation: "Homologous chromosomes are a matched pair, one from each parent, carrying the same genes.",
    subtopic: "genes & chromosomes"
  },
  {
    question: "A cell having two sets of chromosomes (2n) is described as?",
    options: [
      "A. Haploid",
      "B. Diploid",
      "C. Polyploid",
      "D. Aneuploid"
    ],
    answer: "B",
    explanation: "Diploid cells contain two homologous sets of chromosomes, one maternal and one paternal.",
    subtopic: "genes & chromosomes"
  },
  {
    question: "A cell having a single set of chromosomes (n) is described as?",
    options: [
      "A. Diploid",
      "B. Haploid",
      "C. Tetraploid",
      "D. Triploid"
    ],
    answer: "B",
    explanation: "Haploid cells, such as gametes, contain only one set of chromosomes.",
    subtopic: "genes & chromosomes"
  },
  {
    question: "The specific site of a gene on a chromosome is the?",
    options: [
      "A. Centromere",
      "B. Locus",
      "C. Telomere",
      "D. Kinetochore"
    ],
    answer: "B",
    explanation: "Each gene occupies a fixed position, or locus, on its chromosome.",
    subtopic: "genes & chromosomes"
  },
  {
    question: "In humans, the diploid number of chromosomes is?",
    options: [
      "A. 23",
      "B. 46",
      "C. 44",
      "D. 48"
    ],
    answer: "B",
    explanation: "Human somatic cells are diploid with 46 chromosomes (23 pairs).",
    subtopic: "genes & chromosomes"
  },
  {
    question: "Human gametes are produced with how many chromosomes?",
    options: [
      "A. 46",
      "B. 23",
      "C. 92",
      "D. 22"
    ],
    answer: "B",
    explanation: "Meiosis halves the chromosome number, so human gametes are haploid with 23 chromosomes.",
    subtopic: "genes & chromosomes"
  },

  // ---------- genotype & phenotype ----------
  {
    question: "The genetic makeup of an organism is its?",
    options: [
      "A. Phenotype",
      "B. Genotype",
      "C. Karyotype",
      "D. Trait"
    ],
    answer: "B",
    explanation: "The genotype is the set of genes an organism carries, often expressed as alleles.",
    subtopic: "genotype & phenotype"
  },
  {
    question: "The observable physical appearance of an organism is its?",
    options: [
      "A. Genotype",
      "B. Phenotype",
      "C. Genome",
      "D. Allele"
    ],
    answer: "B",
    explanation: "Phenotype is the expressed, observable characteristic resulting from the genotype.",
    subtopic: "genotype & phenotype"
  },
  {
    question: "If a plant is tall because of its genes, 'tall' describes its?",
    options: [
      "A. Genotype",
      "B. Phenotype",
      "C. Allele",
      "D. Locus"
    ],
    answer: "B",
    explanation: "Tallness is an observable feature, so it is a phenotypic description.",
    subtopic: "genotype & phenotype"
  },
  {
    question: "The genotype RR is described as?",
    options: [
      "A. Heterozygous",
      "B. Homozygous dominant",
      "C. Hemizygous",
      "D. Hybrid"
    ],
    answer: "B",
    explanation: "RR has two identical dominant alleles, so it is homozygous dominant.",
    subtopic: "genotype & phenotype"
  },
  {
    question: "An organism's phenotype is determined by?",
    options: [
      "A. Genotype only",
      "B. Environment only",
      "C. Genotype and environment",
      "D. Neither"
    ],
    answer: "C",
    explanation: "Phenotype results from the interaction between an organism's genotype and its environment.",
    subtopic: "genotype & phenotype"
  },
  {
    question: "Identical genotypes may show different phenotypes mainly because of?",
    options: [
      "A. Genes only",
      "B. Environmental influence",
      "C. Randomness alone",
      "D. Constant mutation"
    ],
    answer: "B",
    explanation: "Environmental conditions can modify expression, causing the same genotype to vary in phenotype.",
    subtopic: "genotype & phenotype"
  },
  {
    question: "The outward expression of a gene in an organism is called its?",
    options: [
      "A. Genotype",
      "B. Phenotype",
      "C. Nucleotide",
      "D. Codon"
    ],
    answer: "B",
    explanation: "The phenotype is the visible or measurable expression of the underlying genotype.",
    subtopic: "genotype & phenotype"
  },
  {
    question: "A dominant phenotype could arise from which genotype(s)?",
    options: [
      "A. Only homozygous dominant",
      "B. Only heterozygous",
      "C. Either homozygous dominant or heterozygous",
      "D. Only homozygous recessive"
    ],
    answer: "C",
    explanation: "A dominant trait is expressed in both homozygous dominant and heterozygous genotypes.",
    subtopic: "genotype & phenotype"
  },

  // ---------- dominance & alleles ----------
  {
    question: "Different forms of the same gene are called?",
    options: [
      "A. Genes",
      "B. Alleles",
      "C. Loci",
      "D. Chromatids"
    ],
    answer: "B",
    explanation: "Alleles are alternative versions of a gene occupying the same locus on homologous chromosomes.",
    subtopic: "dominance & alleles"
  },
  {
    question: "An allele that is expressed even in the presence of a different allele is?",
    options: [
      "A. Recessive",
      "B. Dominant",
      "C. Codominant",
      "D. Lethal"
    ],
    answer: "B",
    explanation: "A dominant allele masks the effect of a recessive allele in a heterozygote.",
    subtopic: "dominance & alleles"
  },
  {
    question: "A recessive allele is only expressed phenotypically when the genotype is?",
    options: [
      "A. Homozygous recessive",
      "B. Heterozygous",
      "C. Hemizygous dominant",
      "D. Polyploid"
    ],
    answer: "A",
    explanation: "A recessive trait appears only when no dominant allele is present, i.e. homozygous recessive.",
    subtopic: "dominance & alleles"
  },
  {
    question: "A genotype with two identical alleles, such as tt, is?",
    options: [
      "A. Heterozygous",
      "B. Homozygous",
      "C. Hemizygous",
      "D. Hybrid"
    ],
    answer: "B",
    explanation: "Homozygous means the two alleles at a locus are the same (tt or TT).",
    subtopic: "dominance & alleles"
  },
  {
    question: "A genotype with two different alleles, such as Tt, is?",
    options: [
      "A. Homozygous",
      "B. Heterozygous",
      "C. Homozygous recessive",
      "D. A pure line"
    ],
    answer: "B",
    explanation: "Heterozygous describes two different alleles at a locus (Tt).",
    subtopic: "dominance & alleles"
  },
  {
    question: "In codominance, the heterozygote shows?",
    options: [
      "A. Only the dominant trait",
      "B. Only the recessive trait",
      "C. Both traits expressed equally",
      "D. An intermediate blend"
    ],
    answer: "C",
    explanation: "Codominance means both alleles are fully expressed in the heterozygote (e.g. AB blood group).",
    subtopic: "dominance & alleles"
  },
  {
    question: "In incomplete dominance, the heterozygote shows?",
    options: [
      "A. Only the dominant trait",
      "B. Only the recessive trait",
      "C. An intermediate trait",
      "D. Both traits fully"
    ],
    answer: "C",
    explanation: "In incomplete dominance the heterozygote displays a blended, intermediate phenotype.",
    subtopic: "dominance & alleles"
  },
  {
    question: "When a gene has more than two allelic forms in a population, it shows?",
    options: [
      "A. Multiple alleles",
      "B. Codominance",
      "C. Linkage",
      "D. Epistasis"
    ],
    answer: "A",
    explanation: "Multiple alleles exist when more than two alternative forms of a gene occur in a population (e.g. ABO).",
    subtopic: "dominance & alleles"
  },

  // ---------- Mendel's laws ----------
  {
    question: "Mendel's law of segregation states that?",
    options: [
      "A. Alleles separate during gamete formation",
      "B. Alleles assort independently",
      "C. Genes are linked",
      "D. Traits blend together"
    ],
    answer: "A",
    explanation: "The law of segregation says the two alleles of a gene separate into different gametes.",
    subtopic: "Mendel's laws"
  },
  {
    question: "Mendel's law of independent assortment applies to genes located on?",
    options: [
      "A. The same chromosome",
      "B. Different chromosomes",
      "C. Sex chromosomes only",
      "D. Mitochondria"
    ],
    answer: "B",
    explanation: "Independent assortment concerns genes on different chromosomes that segregate independently.",
    subtopic: "Mendel's laws"
  },
  {
    question: "The first filial generation resulting directly from a parental cross is called?",
    options: [
      "A. The P generation",
      "B. The F1 generation",
      "C. The F2 generation",
      "D. The F3 generation"
    ],
    answer: "B",
    explanation: "The F1 (first filial) generation is the immediate offspring of the parental (P) cross.",
    subtopic: "Mendel's laws"
  },
  {
    question: "The offspring produced by crossing two F1 individuals is the?",
    options: [
      "A. F1 generation",
      "B. P generation",
      "C. F2 generation",
      "D. F0 generation"
    ],
    answer: "C",
    explanation: "Selfing or crossing the F1 yields the F2 (second filial) generation.",
    subtopic: "Mendel's laws"
  },
  {
    question: "A test cross is performed by crossing an individual with a?",
    options: [
      "A. Homozygous dominant",
      "B. Homozygous recessive",
      "C. Heterozygote",
      "D. Clone of itself"
    ],
    answer: "B",
    explanation: "A test cross uses a homozygous recessive partner to reveal the unknown genotype.",
    subtopic: "Mendel's laws"
  },
  {
    question: "The grid used to predict the genotypes of offspring from a cross is a?",
    options: [
      "A. Pedigree chart",
      "B. Punnett square",
      "C. Karyotype",
      "D. Dendrogram"
    ],
    answer: "B",
    explanation: "A Punnett square systematically shows all possible gamete combinations and offspring genotypes.",
    subtopic: "Mendel's laws"
  },
  {
    question: "A monohybrid cross involves the study of?",
    options: [
      "A. One character",
      "B. Two characters",
      "C. Three characters",
      "D. No characters"
    ],
    answer: "A",
    explanation: "A monohybrid cross follows the inheritance of a single trait between two individuals.",
    subtopic: "Mendel's laws"
  },
  {
    question: "A dihybrid cross involves the study of?",
    options: [
      "A. One character",
      "B. Two characters",
      "C. Many unrelated characters",
      "D. Only sex-linked traits"
    ],
    answer: "B",
    explanation: "A dihybrid cross tracks two different traits simultaneously, illustrating independent assortment.",
    subtopic: "Mendel's laws"
  }
];

module.exports = questions;
