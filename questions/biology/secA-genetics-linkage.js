// biology — Genetics: Linkage, Sex Determination and Sex-linked Inheritance
const questions = [
  {
    question: "Genes that are located close together on the same chromosome and tend to be inherited together are described as being",
    options: [
      "A. Epistatic",
      "B. Linked",
      "C. Codominant",
      "D. Pleiotropic"
    ],
    answer: "B",
    explanation: "Linked genes lie on the same chromosome and are usually inherited together rather than assorting independently.",
    subtopic: "Linkage"
  },
  {
    question: "Crossing over between linked genes occurs during which stage of meiosis?",
    options: [
      "A. Prophase I",
      "B. Metaphase II",
      "C. Anaphase I",
      "D. Telophase II"
    ],
    answer: "A",
    explanation: "Crossing over takes place at prophase I when homologous chromosomes are paired and chiasmata form.",
    subtopic: "Linkage"
  },
  {
    question: "The exchange of corresponding segments between non-sister chromatids of homologous chromosomes is called",
    options: [
      "A. Translocation",
      "B. Crossing over",
      "C. Mutation",
      "D. Segregation"
    ],
    answer: "B",
    explanation: "Crossing over is the reciprocal exchange of chromatid segments that produces new gene combinations.",
    subtopic: "Linkage"
  },
  {
    question: "The frequency of recombination between two linked genes is used to determine their",
    options: [
      "A. Size on the chromosome",
      "B. Relative distance apart",
      "C. Number of alleles",
      "D. Base sequence"
    ],
    answer: "B",
    explanation: "The greater the distance between genes, the higher the recombination frequency, so it serves as a map distance.",
    subtopic: "Linkage"
  },
  {
    question: "One map unit (centimorgan) of genetic distance corresponds to a recombination frequency of",
    options: [
      "A. 1%",
      "B. 10%",
      "C. 50%",
      "D. 100%"
    ],
    answer: "A",
    explanation: "A recombination frequency of 1% is defined as one map unit or one centimorgan.",
    subtopic: "Linkage"
  },
  {
    question: "The maximum recombination frequency expected between two genes is",
    options: [
      "A. 25%",
      "B. 50%",
      "C. 75%",
      "D. 100%"
    ],
    answer: "B",
    explanation: "At 50% the genes assort as if unlinked, so recombination frequency cannot exceed 50%.",
    subtopic: "Linkage"
  },
  {
    question: "A test cross involving a heterozygous individual and a homozygous recessive is used mainly to determine",
    options: [
      "A. The phenotype ratio",
      "B. Whether genes are linked",
      "C. The mutation rate",
      "D. Chromosome number"
    ],
    answer: "B",
    explanation: "Deviations from the 1:1:1:1 test-cross ratio reveal linkage between the genes.",
    subtopic: "Linkage"
  },
  {
    question: "When two dominant alleles are located on one homologous chromosome and the two recessive alleles on the other, the arrangement is called",
    options: [
      "A. Repulsion",
      "B. Coupling",
      "C. Segregation",
      "D. Translocation"
    ],
    answer: "B",
    explanation: "In coupling (cis) phase the dominant alleles are together on one chromosome and recessives on the other.",
    subtopic: "Linkage"
  },
  {
    question: "The arrangement in which the dominant allele of one linked gene and the recessive allele of another are on the same chromosome (Ab/aB) is called",
    options: [
      "A. Coupling",
      "B. Repulsion",
      "C. Epistasis",
      "D. Linkage group"
    ],
    answer: "B",
    explanation: "In repulsion (trans) phase the dominant and recessive alleles of the two genes are on the same chromosome.",
    subtopic: "Linkage"
  },
  {
    question: "In complete linkage, linked genes",
    options: [
      "A. Always show independent assortment",
      "B. Are never separated by crossing over",
      "C. Show a recombination frequency of 50%",
      "D. Are located on different chromosomes"
    ],
    answer: "B",
    explanation: "With complete linkage no crossing over occurs between them, so parental combinations are always inherited together.",
    subtopic: "Linkage"
  },
  {
    question: "The number of linkage groups in an organism is equal to its",
    options: [
      "A. Diploid chromosome number",
      "B. Haploid chromosome number",
      "C. Total gene number",
      "D. Number of autosomes"
    ],
    answer: "B",
    explanation: "Each chromosome (or one from each pair in the haploid set) forms one linkage group.",
    subtopic: "Linkage"
  },
  {
    question: "Genes that are far apart on the same chromosome show",
    options: [
      "A. Lower recombination than genes close together",
      "B. Higher recombination than genes close together",
      "C. No recombination",
      "D. Complete linkage"
    ],
    answer: "B",
    explanation: "Greater distance gives more chance of a crossover, increasing the recombination frequency.",
    subtopic: "Linkage"
  },
  {
    question: "A dihybrid test cross giving a ratio close to 1:1:1:1 indicates the genes are",
    options: [
      "A. Linked",
      "B. Unlinked / assorting independently",
      "C. Completely linked",
      "D. Sex-linked"
    ],
    answer: "B",
    explanation: "A 1:1:1:1 ratio from a test cross means the genes assort independently, as expected when unlinked.",
    subtopic: "Linkage"
  },
  {
    question: "A dihybrid test cross giving a ratio of about 3:1:1:3 (parental types more frequent than recombinants) indicates",
    options: [
      "A. Independent assortment",
      "B. Linkage",
      "C. Mutation",
      "D. Polyploidy"
    ],
    answer: "B",
    explanation: "Excess of parental types over recombinants is the hallmark of linkage.",
    subtopic: "Linkage"
  },
  {
    question: "The chance of crossing over between two genes increases with",
    options: [
      "A. The distance between them on the chromosome",
      "B. A decrease in chromosome number",
      "C. The number of alleles",
      "D. Environmental temperature only"
    ],
    answer: "A",
    explanation: "Genes farther apart have a greater probability of a crossover occurring between them.",
    subtopic: "Linkage"
  },
  {
    question: "Genetic linkage maps are constructed primarily using",
    options: [
      "A. Physical chromosome length only",
      "B. Recombination frequencies",
      "C. Protein sequences",
      "D. Cell sizes"
    ],
    answer: "B",
    explanation: "Recombination frequencies provide the relative distances used to build linkage maps.",
    subtopic: "Linkage"
  },
  {
    question: "Linked genes are an exception to Mendel's law of",
    options: [
      "A. Dominance",
      "B. Independent assortment",
      "C. Segregation",
      "D. Unit characters"
    ],
    answer: "B",
    explanation: "Because linked genes are on the same chromosome they do not assort independently.",
    subtopic: "Linkage"
  },
  {
    question: "In humans, the female sex chromosomes are",
    options: [
      "A. XY",
      "B. XX",
      "C. XO",
      "D. ZZ"
    ],
    answer: "B",
    explanation: "Human females are homogametic with two X chromosomes (XX).",
    subtopic: "Sex determination"
  },
  {
    question: "In humans, the male sex chromosomes are",
    options: [
      "A. XX",
      "B. XY",
      "C. ZW",
      "D. XO"
    ],
    answer: "B",
    explanation: "Human males are heterogametic with one X and one Y chromosome (XY).",
    subtopic: "Sex determination"
  },
  {
    question: "In humans, the sex of the offspring is determined by the",
    options: [
      "A. Egg",
      "B. Sperm",
      "C. Both equally",
      "D. Environment"
    ],
    answer: "B",
    explanation: "The sperm carries either an X or a Y chromosome, so it decides whether the zygote is XX or XY.",
    subtopic: "Sex determination"
  },
  {
    question: "The presence of the Y chromosome in humans normally results in",
    options: [
      "A. Female development",
      "B. Male development",
      "C. Sterility",
      "D. Twins"
    ],
    answer: "B",
    explanation: "The SRY gene on the Y chromosome triggers male development.",
    subtopic: "Sex determination"
  },
  {
    question: "In birds, the heterogametic sex (with two different sex chromosomes) is the",
    options: [
      "A. Male",
      "B. Female",
      "C. Both",
      "D. Neither"
    ],
    answer: "B",
    explanation: "Birds use the ZW system: females are ZW and males are ZZ.",
    subtopic: "Sex determination"
  },
  {
    question: "In birds, the male has sex chromosomes",
    options: [
      "A. ZW",
      "B. ZZ",
      "C. XY",
      "D. XO"
    ],
    answer: "B",
    explanation: "Male birds are homogametic (ZZ), unlike mammals where males are XY.",
    subtopic: "Sex determination"
  },
  {
    question: "In grasshoppers, the male sex chromosome constitution is",
    options: [
      "A. XX",
      "B. XY",
      "C. XO",
      "D. ZZ"
    ],
    answer: "C",
    explanation: "Grasshoppers use the XO system: males have one X and no Y (XO), females are XX.",
    subtopic: "Sex determination"
  },
  {
    question: "In grasshoppers, the female sex chromosome constitution is",
    options: [
      "A. XO",
      "B. XX",
      "C. XY",
      "D. ZW"
    ],
    answer: "B",
    explanation: "Female grasshoppers are XX, while males are XO.",
    subtopic: "Sex determination"
  },
  {
    question: "An organism that produces two different kinds of gametes with respect to sex chromosomes (e.g., human male) is described as",
    options: [
      "A. Homogametic",
      "B. Heterogametic",
      "C. Diploid",
      "D. Haploid"
    ],
    answer: "B",
    explanation: "Heterogametic individuals produce both X- and Y-bearing gametes; human males are heterogametic.",
    subtopic: "Sex determination"
  },
  {
    question: "In humans, an individual with XXY chromosomes would typically develop as",
    options: [
      "A. Female",
      "B. Male (Klinefelter syndrome)",
      "C. Normal female",
      "D. Normal male"
    ],
    answer: "B",
    explanation: "The presence of a Y chromosome causes male development; XXY is Klinefelter syndrome.",
    subtopic: "Sex determination"
  },
  {
    question: "An individual with an XO constitution (Turner syndrome) in humans develops as",
    options: [
      "A. Male",
      "B. Female",
      "C. Both sexes",
      "D. Normal male"
    ],
    answer: "B",
    explanation: "A single X with no second sex chromosome (XO) results in female development (Turner syndrome).",
    subtopic: "Sex determination"
  },
  {
    question: "Sex determination by environmental factors such as incubation temperature is seen in",
    options: [
      "A. Humans",
      "B. Some reptiles (e.g., turtles and crocodiles)",
      "C. Birds",
      "D. Grasshoppers"
    ],
    answer: "B",
    explanation: "In many reptiles sex is determined by nest temperature rather than sex chromosomes.",
    subtopic: "Sex determination"
  },
  {
    question: "Autosomes are chromosomes that",
    options: [
      "A. Determine sex",
      "B. Are not directly concerned with sex determination",
      "C. Are found only in males",
      "D. Carry only female traits"
    ],
    answer: "B",
    explanation: "Autosomes are the non-sex chromosomes present in both sexes.",
    subtopic: "Sex determination"
  },
  {
    question: "The approximate sex ratio of offspring in humans is",
    options: [
      "A. 1:1 male to female",
      "B. 2:1 male to female",
      "C. 1:2 male to female",
      "D. 3:1"
    ],
    answer: "A",
    explanation: "Because sperm are equally likely to carry X or Y, the expected ratio is about 1:1.",
    subtopic: "Sex determination"
  },
  {
    question: "In honeybees, males (drones) develop from",
    options: [
      "A. Fertilized eggs",
      "B. Unfertilized eggs (parthenogenesis)",
      "C. Diploid cells",
      "D. XX eggs"
    ],
    answer: "B",
    explanation: "Drones are haploid and arise from unfertilized eggs, while females come from fertilized eggs.",
    subtopic: "Sex determination"
  },
  {
    question: "An organism that produces only one type of gamete with respect to sex chromosomes (e.g., human female) is described as",
    options: [
      "A. Heterogametic",
      "B. Homogametic",
      "C. Diploid",
      "D. Polyploid"
    ],
    answer: "B",
    explanation: "Human females produce only X-bearing eggs and are therefore homogametic.",
    subtopic: "Sex determination"
  },
  {
    question: "A gene located on the X chromosome is described as",
    options: [
      "A. Autosomal",
      "B. X-linked",
      "C. Y-linked",
      "D. Cytoplasmic"
    ],
    answer: "B",
    explanation: "Genes carried on the X chromosome show X-linked inheritance.",
    subtopic: "Sex-linked"
  },
  {
    question: "Red-green colour blindness in humans is inherited as a",
    options: [
      "A. Dominant autosomal trait",
      "B. Recessive X-linked trait",
      "C. Y-linked trait",
      "D. Mitochondrial trait"
    ],
    answer: "B",
    explanation: "Colour blindness is caused by a recessive allele on the X chromosome.",
    subtopic: "Sex-linked"
  },
  {
    question: "Haemophilia in humans is typically inherited as a",
    options: [
      "A. Recessive X-linked trait",
      "B. Dominant autosomal trait",
      "C. Y-linked trait",
      "D. Codominant trait"
    ],
    answer: "A",
    explanation: "Haemophilia A and B are classic recessive X-linked disorders.",
    subtopic: "Sex-linked"
  },
  {
    question: "A female who carries an X-linked recessive allele but does not express the trait is called a",
    options: [
      "A. Homozygote",
      "B. Carrier",
      "C. Mutant",
      "D. Hemizygote"
    ],
    answer: "B",
    explanation: "In a heterozygous female the normal allele masks the recessive allele, making her a carrier.",
    subtopic: "Sex-linked"
  },
  {
    question: "Males are more frequently affected by X-linked recessive disorders because they are",
    options: [
      "A. Having two X chromosomes",
      "B. Hemizygous (one X chromosome)",
      "C. Having a Y chromosome only",
      "D. Having no sex chromosomes"
    ],
    answer: "B",
    explanation: "Males have only one X, so a single recessive allele is expressed with no second copy to mask it.",
    subtopic: "Sex-linked"
  },
  {
    question: "The pattern in which a trait passes from an affected father to all his daughters and then to half the sons of those daughters is called",
    options: [
      "A. Direct inheritance",
      "B. Criss-cross inheritance",
      "C. Blending inheritance",
      "D. Maternal inheritance"
    ],
    answer: "B",
    explanation: "X-linked traits show criss-cross inheritance: father to daughter to grandson.",
    subtopic: "Sex-linked"
  },
  {
    question: "A trait passed from father to son only is most likely to be",
    options: [
      "A. X-linked recessive",
      "B. Y-linked",
      "C. Autosomal dominant",
      "D. Mitochondrial"
    ],
    answer: "B",
    explanation: "Only Y-linked genes pass exclusively from father to son.",
    subtopic: "Sex-linked"
  },
  {
    question: "If a colour-blind father mates with a homozygous normal mother, their sons will be",
    options: [
      "A. All colour-blind",
      "B. All normal",
      "C. Half colour-blind",
      "D. Carriers"
    ],
    answer: "B",
    explanation: "Sons receive the mother's normal X chromosome, so they are all normal; daughters receive the father's colour-blind X and are carriers.",
    subtopic: "Sex-linked"
  },
  {
    question: "Colour blindness is more common in males than in females because it is",
    options: [
      "A. Dominant",
      "B. X-linked recessive",
      "C. Y-linked",
      "D. Autosomal"
    ],
    answer: "B",
    explanation: "Being X-linked recessive, males need only one copy to be affected while females need two.",
    subtopic: "Sex-linked"
  },
  {
    question: "An X-linked recessive trait can be transmitted from a carrier mother to",
    options: [
      "A. All of her sons",
      "B. Half of her sons",
      "C. None of her sons",
      "D. Only her daughters"
    ],
    answer: "B",
    explanation: "Each son has a 50% chance of inheriting the mother's affected X chromosome.",
    subtopic: "Sex-linked"
  },
  {
    question: "Duchenne muscular dystrophy is an example of an",
    options: [
      "A. Autosomal dominant disorder",
      "B. X-linked recessive disorder",
      "C. Y-linked disorder",
      "D. Cytoplasmic disorder"
    ],
    answer: "B",
    explanation: "Duchenne muscular dystrophy is caused by a recessive allele on the X chromosome.",
    subtopic: "Sex-linked"
  },
  {
    question: "A Y-linked trait is passed",
    options: [
      "A. From mother to son",
      "B. From father to all of his sons",
      "C. From father to his daughters",
      "D. Only to females"
    ],
    answer: "B",
    explanation: "Y-linked genes are transmitted from father to every son and to no daughters.",
    subtopic: "Sex-linked"
  },
  {
    question: "Hypertrichosis (excessive hair on the pinna of the ear) in humans is an example of a",
    options: [
      "A. X-linked trait",
      "B. Y-linked trait",
      "C. Autosomal trait",
      "D. Mitochondrial trait"
    ],
    answer: "B",
    explanation: "This trait is transmitted father to son and is a classic Y-linked (holandric) trait.",
    subtopic: "Sex-linked"
  },
  {
    question: "In Drosophila, white eye colour is inherited as",
    options: [
      "A. X-linked recessive",
      "B. Autosomal dominant",
      "C. Y-linked",
      "D. Cytoplasmic"
    ],
    answer: "A",
    explanation: "Morgan's white-eye trait in Drosophila is carried on the X chromosome and is recessive.",
    subtopic: "Sex-linked"
  },
  {
    question: "If a carrier female (X^C X^c) mates with a normal male (X^C Y), the probability that any child is a colour-blind son is",
    options: [
      "A. 0%",
      "B. 25%",
      "C. 50%",
      "D. 100%"
    ],
    answer: "B",
    explanation: "Half the children are sons and half of those inherit the affected X, giving 1/4 (25%) colour-blind sons overall.",
    subtopic: "Sex-linked"
  },
  {
    question: "When an affected male with an X-linked recessive disorder mates with a normal homozygous female, their daughters are usually",
    options: [
      "A. Affected",
      "B. Carriers",
      "C. Normal and not carriers",
      "D. Sterile"
    ],
    answer: "B",
    explanation: "Daughters inherit the father's affected X and the mother's normal X, making them carriers.",
    subtopic: "Sex-linked"
  },
  {
    question: "Which of the following is NOT an X-linked disorder?",
    options: [
      "A. Haemophilia",
      "B. Red-green colour blindness",
      "C. Duchenne muscular dystrophy",
      "D. Sickle cell anaemia"
    ],
    answer: "D",
    explanation: "Sickle cell anaemia is an autosomal recessive disorder, not X-linked.",
    subtopic: "Sex-linked"
  }
];

module.exports = questions;
