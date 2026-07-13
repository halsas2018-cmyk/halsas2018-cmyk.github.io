// biology — Hybrid Formation and Probability
const questions = [
  {
    question: "Gametes are produced by the process of?",
    options: [
      "A. Mitosis",
      "B. Meiosis",
      "C. Binary fission",
      "D. Budding"
    ],
    answer: "B",
    explanation: "Meiosis reduces the chromosome number by half to form haploid gametes.",
    subtopic: "Hybrid formation"
  },
  {
    question: "A homozygous individual (AA) produces how many types of gametes with respect to that gene?",
    options: [
      "A. 1",
      "B. 2",
      "C. 3",
      "D. 4"
    ],
    answer: "A",
    explanation: "A homozygous individual carries only one allele type, so all gametes carry A.",
    subtopic: "Hybrid formation"
  },
  {
    question: "A heterozygous individual (Aa) produces gametes in what ratio?",
    options: [
      "A. All A",
      "B. 1 A : 1 a",
      "C. 3 A : 1 a",
      "D. 1 A : 2 a : 1"
    ],
    answer: "B",
    explanation: "Segregation gives equal numbers of A and a gametes (1:1).",
    subtopic: "Hybrid formation"
  },
  {
    question: "A dihybrid (RrYy) produces gametes RY, Ry, rY, ry in what expected ratio?",
    options: [
      "A. 1:1:1:1",
      "B. 3:1",
      "C. 9:3:3:1",
      "D. 1:2:1"
    ],
    answer: "A",
    explanation: "Independent assortment yields the four gamete types in equal proportions.",
    subtopic: "Hybrid formation"
  },
  {
    question: "In a monohybrid cross Tt × Tt, the probability of an offspring being homozygous recessive (tt) is?",
    options: [
      "A. 1/4",
      "B. 1/2",
      "C. 3/4",
      "D. 1"
    ],
    answer: "A",
    explanation: "From the 1:2:1 genotypic ratio, tt occurs in 1 out of 4 offspring.",
    subtopic: "Hybrid formation"
  },
  {
    question: "In a Tt × Tt cross, the probability of a tall-phenotype offspring is?",
    options: [
      "A. 1/4",
      "B. 1/2",
      "C. 3/4",
      "D. 1"
    ],
    answer: "C",
    explanation: "TT, Tt and Tt are all tall, so 3 of every 4 offspring are tall.",
    subtopic: "Hybrid formation"
  },
  {
    question: "In a Tt × Tt cross, the probability of a heterozygous (Tt) offspring is?",
    options: [
      "A. 1/4",
      "B. 1/2",
      "C. 3/4",
      "D. 1"
    ],
    answer: "B",
    explanation: "Two of the four genotypic classes are Tt, giving a probability of 2/4 = 1/2.",
    subtopic: "Hybrid formation"
  },
  {
    question: "A Punnett square is used to?",
    options: [
      "A. Measure cell size",
      "B. Predict the genotypes of offspring",
      "C. Count chromosomes",
      "D. Sequence DNA"
    ],
    answer: "B",
    explanation: "A Punnett square arranges gametes to show the probable genotypes of offspring.",
    subtopic: "Hybrid formation"
  },
  {
    question: "The F1 hybrid from a cross between pure tall (TT) and pure dwarf (tt) has genotype?",
    options: [
      "A. TT",
      "B. Tt",
      "C. tt",
      "D. TTT"
    ],
    answer: "B",
    explanation: "Each parent contributes one allele, so every F1 is heterozygous Tt.",
    subtopic: "Hybrid formation"
  },
  {
    question: "When the F1 (Tt) is selfed, the F2 shows a phenotypic ratio of?",
    options: [
      "A. 1:1",
      "B. 3:1",
      "C. 1:2:1",
      "D. 9:3:3:1"
    ],
    answer: "B",
    explanation: "Selfing the heterozygote gives the classic 3 tall : 1 dwarf F2 ratio.",
    subtopic: "Hybrid formation"
  },
  {
    question: "In a dihybrid cross RrYy × RrYy, the probability of an offspring with genotype RRYY is?",
    options: [
      "A. 1/16",
      "B. 1/4",
      "C. 9/16",
      "D. 3/16"
    ],
    answer: "A",
    explanation: "RR (1/4) × YY (1/4) = 1/16 by the product rule.",
    subtopic: "Hybrid formation"
  },
  {
    question: "In RrYy × RrYy, the probability of the round yellow phenotype (R_Y_) is?",
    options: [
      "A. 9/16",
      "B. 3/16",
      "C. 1/16",
      "D. 1/4"
    ],
    answer: "A",
    explanation: "Round (3/4) × Yellow (3/4) = 9/16.",
    subtopic: "Hybrid formation"
  },
  {
    question: "In RrYy × RrYy, the probability of the double recessive phenotype (rryy) is?",
    options: [
      "A. 9/16",
      "B. 3/16",
      "C. 1/16",
      "D. 1/4"
    ],
    answer: "C",
    explanation: "Recessive for both traits = (1/4) × (1/4) = 1/16.",
    subtopic: "Hybrid formation"
  },
  {
    question: "The expected phenotypic ratio from a test cross (Aa × aa) is?",
    options: [
      "A. 3:1",
      "B. 1:1",
      "C. 1:2:1",
      "D. 9:3:3:1"
    ],
    answer: "B",
    explanation: "A heterozygote crossed to a homozygous recessive yields dominant : recessive = 1:1.",
    subtopic: "Hybrid formation"
  },
  {
    question: "A test cross of a heterozygote (Aa) with a homozygous recessive (aa) gives offspring genotypes in the ratio?",
    options: [
      "A. 1 AA : 1 aa",
      "B. 1 Aa : 1 aa",
      "C. 3 Aa : 1 aa",
      "D. All aa"
    ],
    answer: "B",
    explanation: "Gametes A and a from the heterozygote meet a, giving Aa and aa equally.",
    subtopic: "Hybrid formation"
  },
  {
    question: "If a test cross produces a 1:1 phenotypic ratio, the unknown parent was?",
    options: [
      "A. Homozygous dominant",
      "B. Heterozygous",
      "C. Homozygous recessive",
      "D. Sex-linked"
    ],
    answer: "B",
    explanation: "Only a heterozygote yields equal dominant and recessive offspring in a test cross.",
    subtopic: "Hybrid formation"
  },
  {
    question: "If a test cross produces all dominant-phenotype offspring, the unknown parent was?",
    options: [
      "A. Heterozygous",
      "B. Homozygous dominant",
      "C. Homozygous recessive",
      "D. Double recessive"
    ],
    answer: "B",
    explanation: "No recessive offspring appear, so the parent carries no recessive allele to contribute.",
    subtopic: "Hybrid formation"
  },
  {
    question: "The product rule of probability states that the chance of two independent events both occurring is the?",
    options: [
      "A. Sum of their probabilities",
      "B. Product of their probabilities",
      "C. Difference of their probabilities",
      "D. Average of their probabilities"
    ],
    answer: "B",
    explanation: "For independent events, multiply the individual probabilities (e.g. 1/4 × 1/4 = 1/16).",
    subtopic: "Hybrid formation"
  },
  {
    question: "The sum rule of probability states that the chance of either of two mutually exclusive events occurring is the?",
    options: [
      "A. Product of their probabilities",
      "B. Sum of their probabilities",
      "C. Square of their probabilities",
      "D. Difference of their probabilities"
    ],
    answer: "B",
    explanation: "Add the probabilities of mutually exclusive outcomes (e.g. 1/4 + 1/4 = 1/2).",
    subtopic: "Hybrid formation"
  },
  {
    question: "In a cross AaBb × AaBb, the probability of an offspring being aabb is?",
    options: [
      "A. 1/16",
      "B. 1/4",
      "C. 1/2",
      "D. 9/16"
    ],
    answer: "A",
    explanation: "aa (1/4) × bb (1/4) = 1/16.",
    subtopic: "Hybrid formation"
  },
  {
    question: "In a cross AaBb × AaBb, the probability of genotype AaBb is?",
    options: [
      "A. 1/16",
      "B. 1/4",
      "C. 1/2",
      "D. 9/16"
    ],
    answer: "B",
    explanation: "Aa (1/2) × Bb (1/2) = 1/4.",
    subtopic: "Hybrid formation"
  },
  {
    question: "A backcross of the F1 hybrid (Tt) to its homozygous recessive parent (tt) gives a phenotypic ratio of?",
    options: [
      "A. 3:1",
      "B. 1:1",
      "C. 1:2:1",
      "D. All tall"
    ],
    answer: "B",
    explanation: "Tt × tt yields tall : dwarf = 1 : 1.",
    subtopic: "Hybrid formation"
  },
  {
    question: "The law of segregation predicts that alleles separate during?",
    options: [
      "A. Gamete formation",
      "B. Protein synthesis",
      "C. DNA replication only",
      "D. Cell growth"
    ],
    answer: "A",
    explanation: "Alleles segregate into separate gametes during meiosis.",
    subtopic: "Hybrid formation"
  },
  {
    question: "Meiosis results in gametes that are?",
    options: [
      "A. Diploid",
      "B. Haploid",
      "C. Triploid",
      "D. Tetraploid"
    ],
    answer: "B",
    explanation: "Meiosis halves the chromosome number, producing haploid gametes.",
    subtopic: "Hybrid formation"
  },
  {
    question: "The combining of male and female gametes is called?",
    options: [
      "A. Fertilisation",
      "B. Mutation",
      "C. Translocation",
      "D. Replication"
    ],
    answer: "A",
    explanation: "Fertilisation unites gametes to restore the diploid chromosome number.",
    subtopic: "Hybrid formation"
  },
  {
    question: "In humans, a normal gamete contains how many chromosomes?",
    options: [
      "A. 46",
      "B. 23",
      "C. 92",
      "D. 22"
    ],
    answer: "B",
    explanation: "Human gametes are haploid and carry 23 chromosomes.",
    subtopic: "Hybrid formation"
  },
  {
    question: "A zygote is?",
    options: [
      "A. A haploid cell",
      "B. A diploid cell formed by fertilisation",
      "C. A gamete",
      "D. A bacterium"
    ],
    answer: "B",
    explanation: "The zygote is the diploid cell formed when two gametes fuse.",
    subtopic: "Hybrid formation"
  },
  {
    question: "In snapdragons, RR = red, Rr = pink, rr = white. The cross Rr × Rr gives a phenotypic ratio of?",
    options: [
      "A. 3 red : 1 white",
      "B. 1 red : 2 pink : 1 white",
      "C. 1 red : 1 white",
      "D. All pink"
    ],
    answer: "B",
    explanation: "Incomplete dominance yields 1 RR (red) : 2 Rr (pink) : 1 rr (white).",
    subtopic: "Hybrid formation"
  },
  {
    question: "In the incomplete-dominance cross above (Rr × Rr), the probability of a pink offspring is?",
    options: [
      "A. 1/4",
      "B. 1/2",
      "C. 3/4",
      "D. 1"
    ],
    answer: "B",
    explanation: "Two of four offspring are heterozygous Rr (pink), giving 1/2.",
    subtopic: "Hybrid formation"
  },
  {
    question: "In a dihybrid test cross (AaBb × aabb), the expected offspring ratio is?",
    options: [
      "A. 9:3:3:1",
      "B. 1:1:1:1",
      "C. 3:1",
      "D. 1:2:1"
    ],
    answer: "B",
    explanation: "The heterozygote contributes four gamete types equally, each met by ab.",
    subtopic: "Hybrid formation"
  },
  {
    question: "The four gamete classes from an AaBb × aabb test cross are produced in equal proportion if the genes?",
    options: [
      "A. Are linked",
      "B. Assort independently",
      "C. Are on the same chromosome closely",
      "D. Are sex-linked"
    ],
    answer: "B",
    explanation: "Equal classes indicate the genes are unlinked and assort independently.",
    subtopic: "Hybrid formation"
  },
  {
    question: "The number of chromosomes in a normal human somatic (body) cell is?",
    options: [
      "A. 23",
      "B. 46",
      "C. 92",
      "D. 48"
    ],
    answer: "B",
    explanation: "Human somatic cells are diploid with 46 chromosomes (23 pairs).",
    subtopic: "Hybrid formation"
  },
  {
    question: "When pure-breeding red (RR) and white (rr) snapdragons are crossed, all F1 are?",
    options: [
      "A. Red",
      "B. White",
      "C. Pink",
      "D. Red-spotted"
    ],
    answer: "C",
    explanation: "All F1 are Rr heterozygotes showing the intermediate pink phenotype.",
    subtopic: "Hybrid formation"
  },
  {
    question: "The F1 from a cross of AA × aa has genotype?",
    options: [
      "A. AA",
      "B. Aa",
      "C. aa",
      "D. Aaa"
    ],
    answer: "B",
    explanation: "Each parent contributes one allele, so all F1 are heterozygous Aa.",
    subtopic: "Hybrid formation"
  },
  {
    question: "If two heterozygous brown-eyed parents (Bb) have a child, the probability the child is blue-eyed (bb) is?",
    options: [
      "A. 0",
      "B. 1/4",
      "C. 1/2",
      "D. 3/4"
    ],
    answer: "B",
    explanation: "Bb × Bb gives bb in 1 of 4 offspring.",
    subtopic: "Hybrid formation"
  },
  {
    question: "If each child independently has a 1/2 chance of being a boy, the chance that a family of four children are all boys is?",
    options: [
      "A. 1/2",
      "B. 1/4",
      "C. 1/8",
      "D. 1/16"
    ],
    answer: "D",
    explanation: "(1/2)^4 = 1/16 by the product rule for independent events.",
    subtopic: "Hybrid formation"
  },
  {
    question: "The chance of a couple having two girls in a row (each birth ~1/2) is?",
    options: [
      "A. 1/4",
      "B. 1/2",
      "C. 1/8",
      "D. 1/3"
    ],
    answer: "A",
    explanation: "(1/2) × (1/2) = 1/4.",
    subtopic: "Hybrid formation"
  },
  {
    question: "In a Tt × Tt cross, the probability that an offspring is heterozygous given that it is tall is?",
    options: [
      "A. 1/3",
      "B. 2/3",
      "C. 1/2",
      "D. 1"
    ],
    answer: "B",
    explanation: "Among tall offspring (TT, Tt, Tt), two of the three are heterozygous.",
    subtopic: "Hybrid formation"
  },
  {
    question: "The expected genotypic ratio of a dihybrid cross (RrYy × RrYy) is?",
    options: [
      "A. 9:3:3:1",
      "B. 1:2:1:2:4:2:1:2:1",
      "C. 1:1:1:1",
      "D. 3:1"
    ],
    answer: "B",
    explanation: "Multiplying two 1:2:1 monohybrid genotypic ratios gives the nine-class 1:2:1:2:4:2:1:2:1 ratio.",
    subtopic: "Hybrid formation"
  },
  {
    question: "The ratio 9:3:3:1 is a phenotypic ratio for?",
    options: [
      "A. Monohybrid F2",
      "B. Dihybrid F2 with independent assortment",
      "C. Test cross",
      "D. Backcross"
    ],
    answer: "B",
    explanation: "Two independently assorting genes in an F2 produce the 9:3:3:1 phenotypic ratio.",
    subtopic: "Hybrid formation"
  },
  {
    question: "A cross between a hybrid (Aa) and its homozygous dominant parent (AA) gives offspring?",
    options: [
      "A. 1 AA : 1 Aa",
      "B. All AA",
      "C. 3 Aa : 1 aa",
      "D. All aa"
    ],
    answer: "A",
    explanation: "AA contributes A; Aa contributes A or a, giving AA and Aa equally.",
    subtopic: "Hybrid formation"
  },
  {
    question: "In an AB × O (ii) blood group cross, the probability of a child with blood group A is?",
    options: [
      "A. 0",
      "B. 1/2",
      "C. 1/4",
      "D. 1"
    ],
    answer: "B",
    explanation: "AB parent gives A or B; O parent gives i, so offspring are A (Ai) or B (Bi) in equal proportion.",
    subtopic: "Hybrid formation"
  },
  {
    question: "In cattle, R = red, r = white, and Rr = roan (codominance). The cross Rr × Rr gives the probability of a roan offspring as?",
    options: [
      "A. 1/4",
      "B. 1/2",
      "C. 3/4",
      "D. 1"
    ],
    answer: "B",
    explanation: "RR : Rr : rr = 1 : 2 : 1, so roan (Rr) occurs with probability 2/4 = 1/2.",
    subtopic: "Hybrid formation"
  },
  {
    question: "A roan cow (Rr) crossed with a white bull (rr) gives offspring in the ratio?",
    options: [
      "A. 1 roan : 1 white",
      "B. 3 red : 1 white",
      "C. All roan",
      "D. All white"
    ],
    answer: "A",
    explanation: "Rr × rr yields Rr (roan) and rr (white) in equal numbers.",
    subtopic: "Hybrid formation"
  },
  {
    question: "The probability of obtaining a recessive phenotype from a cross between two carriers (Aa × Aa) is?",
    options: [
      "A. 1/4",
      "B. 1/2",
      "C. 3/4",
      "D. 1"
    ],
    answer: "A",
    explanation: "Two carriers have a 1 in 4 chance of both passing on the recessive allele.",
    subtopic: "Hybrid formation"
  },
  {
    question: "In a dihybrid cross, if the genes are completely linked (no recombination), the F2 ratio deviates from?",
    options: [
      "A. 1:1",
      "B. 9:3:3:1",
      "C. 3:1",
      "D. 1:2:1"
    ],
    answer: "B",
    explanation: "Linked genes do not assort independently, so the 9:3:3:1 ratio is not observed.",
    subtopic: "Hybrid formation"
  },
  {
    question: "As an analogy for independent events, the chance of flipping two fair coins and getting two heads is?",
    options: [
      "A. 1/2",
      "B. 1/4",
      "C. 1/3",
      "D. 1/8"
    ],
    answer: "B",
    explanation: "(1/2) × (1/2) = 1/4, the same product rule used in genetics.",
    subtopic: "Hybrid formation"
  },
  {
    question: "A test cross is most useful for determining the?",
    options: [
      "A. Sex of offspring",
      "B. Genotype of a dominant-phenotype individual",
      "C. Number of chromosomes",
      "D. Age of an organism"
    ],
    answer: "B",
    explanation: "Because the recessive partner reveals hidden alleles, the test cross uncovers an unknown genotype.",
    subtopic: "Hybrid formation"
  },
  {
    question: "If a plant of unknown genotype showing a dominant trait is test-crossed and yields 50% dominant and 50% recessive offspring, it is?",
    options: [
      "A. Homozygous dominant",
      "B. Heterozygous",
      "C. Homozygous recessive",
      "D. Polyploid"
    ],
    answer: "B",
    explanation: "A 1:1 ratio indicates the plant carried one recessive allele, i.e. it is heterozygous.",
    subtopic: "Hybrid formation"
  },
  {
    question: "In a selfed heterozygous pea (Tt), the expected number of dwarf plants among 400 F2 offspring is?",
    options: [
      "A. 100",
      "B. 200",
      "C. 300",
      "D. 400"
    ],
    answer: "A",
    explanation: "1/4 of the offspring are dwarf, so 400 × 1/4 = 100.",
    subtopic: "Hybrid formation"
  },
];

module.exports = questions;
