// biology — Evolution
const questions = [
  {
    question: "Which book, published in 1859, presented the theory of evolution by natural selection?",
    options: [
      "A. The Descent of Man",
      "B. On the Origin of Species",
      "C. The Variation of Animals",
      "D. Principles of Geology"
    ],
    answer: "B",
    explanation: "Charles Darwin's 'On the Origin of Species by Means of Natural Selection' (1859) set out the theory of evolution by natural selection.",
    subtopic: "Evolution"
  },
  {
    question: "The phrase 'survival of the fittest' was coined by:",
    options: [
      "A. Charles Darwin",
      "B. Herbert Spencer",
      "C. Jean-Baptiste Lamarck",
      "D. Gregor Mendel"
    ],
    answer: "B",
    explanation: "Herbert Spencer introduced 'survival of the fittest'; Darwin later used it as a synonym for natural selection.",
    subtopic: "Evolution"
  },
  {
    question: "According to Darwin, the raw material upon which natural selection acts is:",
    options: [
      "A. Acquired characteristics",
      "B. Variation among individuals",
      "C. Use and disuse of organs",
      "D. Prayer and effort"
    ],
    answer: "B",
    explanation: "Natural selection requires heritable variation; individuals differing in traits leave different numbers of offspring.",
    subtopic: "Evolution"
  },
  {
    question: "Lamarck's theory of evolution proposed that:",
    options: [
      "A. The fittest survive and reproduce",
      "B. Acquired characteristics are inherited (use and disuse)",
      "C. Mutations drive change randomly",
      "D. Species are fixed and unchanging"
    ],
    answer: "B",
    explanation: "Lamarck argued that organs used become better developed and such acquired traits are passed to offspring — now disproven.",
    subtopic: "Evolution"
  },
  {
    question: "The major difference between Darwinism and Lamarckism is that Darwin held traits are changed by:",
    options: [
      "A. Conscious effort of the organism",
      "B. Natural selection acting on inherited variation",
      "C. Use and disuse only",
      "D. Direct environmental instruction"
    ],
    answer: "B",
    explanation: "Darwin attributed change to selection of naturally occurring inherited variation, not inherited effort or use.",
    subtopic: "Evolution"
  },
  {
    question: "Mutations are important in evolution because they:",
    options: [
      "A. Are always harmful",
      "B. Are the ultimate source of new genetic variation",
      "C. Are directed by an organism's needs",
      "D. Occur only in somatic cells"
    ],
    answer: "B",
    explanation: "Mutations introduce novel alleles; although random, they supply the variation on which selection can act.",
    subtopic: "Evolution"
  },
  {
    question: "A heritable trait that increases an organism's chance of survival and reproduction in its environment is called a(n):",
    options: [
      "A. Mutation",
      "B. Adaptation",
      "C. Vestigial organ",
      "D. Analogous structure"
    ],
    answer: "B",
    explanation: "An adaptation is a trait shaped by selection that improves fitness in a particular environment.",
    subtopic: "Evolution"
  },
  {
    question: "Preserved remains or traces of past organisms are known as:",
    options: [
      "A. Fossils",
      "B. Relics",
      "C. Sediments",
      "D. Strata"
    ],
    answer: "A",
    explanation: "Fossils are the preserved remains or impressions of organisms from earlier geological periods.",
    subtopic: "Evolution"
  },
  {
    question: "In undisturbed rock strata, the oldest fossils are generally found:",
    options: [
      "A. At the top",
      "B. At the bottom",
      "C. In the middle only",
      "D. Randomly throughout"
    ],
    answer: "B",
    explanation: "Sedimentary layers accumulate over time, so lower (older) strata contain older fossils than upper ones.",
    subtopic: "Evolution"
  },
  {
    question: "Structures in different species that are similar because of common ancestry are called:",
    options: [
      "A. Analogous structures",
      "B. Homologous structures",
      "C. Vestigial structures",
      "D. Convergent structures"
    ],
    answer: "B",
    explanation: "Homologous structures (e.g., the forelimbs of mammals) share an underlying anatomical plan from a common ancestor.",
    subtopic: "Evolution"
  },
  {
    question: "The forelimb of a human, the wing of a bat and the flipper of a whale are examples of:",
    options: [
      "A. Analogous structures",
      "B. Homologous structures",
      "C. Vestigial organs",
      "D. Convergent features"
    ],
    answer: "B",
    explanation: "These share a common bone pattern inherited from a common ancestor, so they are homologous.",
    subtopic: "Evolution"
  },
  {
    question: "Structures that perform similar functions but arose independently in unrelated groups are:",
    options: [
      "A. Homologous structures",
      "B. Analogous structures",
      "C. Vestigial organs",
      "D. Atavistic structures"
    ],
    answer: "B",
    explanation: "Analogous structures (e.g., bird wing and insect wing) result from convergent evolution, not common ancestry.",
    subtopic: "Evolution"
  },
  {
    question: "The wing of a bird and the wing of a butterfly are analogous because they:",
    options: [
      "A. Share a common ancestor with wings",
      "B. Have the same bone structure",
      "C. Evolved independently for flight despite different origins",
      "D. Are both vestigial"
    ],
    answer: "C",
    explanation: "They perform the same function (flight) but differ in structure and origin — a case of convergent evolution.",
    subtopic: "Evolution"
  },
  {
    question: "Organs that have lost most or all of their original function in a species are called:",
    options: [
      "A. Homologous organs",
      "B. Vestigial organs",
      "C. Analogous organs",
      "D. Adaptive organs"
    ],
    answer: "B",
    explanation: "Vestigial organs (e.g., the human appendix, coccyx, wisdom teeth) are remnants of structures functional in ancestors.",
    subtopic: "Evolution"
  },
  {
    question: "Which of the following is a vestigial structure in humans?",
    options: [
      "A. The heart",
      "B. The appendix",
      "C. The kidney",
      "D. The femur"
    ],
    answer: "B",
    explanation: "The vermiform appendix is a reduced vestige of a larger cecum used for cellulose digestion in herbivorous ancestors.",
    subtopic: "Evolution"
  },
  {
    question: "The study of the geographic distribution of species and how it reflects evolutionary history is called:",
    options: [
      "A. Stratigraphy",
      "B. Biogeography",
      "C. Embryology",
      "D. Taxonomy"
    ],
    answer: "B",
    explanation: "Biogeography (developed by Darwin and Wallace) shows related species occupy regions they could reach and adapt to.",
    subtopic: "Evolution"
  },
  {
    question: "The total collection of alleles in a population at a given time is called the:",
    options: [
      "A. Genome of an individual",
      "B. Gene pool",
      "C. Chromosome set",
      "D. Phenotype"
    ],
    answer: "B",
    explanation: "The gene pool is the sum of all alleles of all genes in a population; evolution is a change in its frequencies.",
    subtopic: "Evolution"
  },
  {
    question: "Random changes in allele frequencies in a small population, due to chance, is termed:",
    options: [
      "A. Natural selection",
      "B. Genetic drift",
      "C. Gene flow",
      "D. Mutation pressure"
    ],
    answer: "B",
    explanation: "Genetic drift is the random fluctuation of allele frequencies, strongest in small populations.",
    subtopic: "Evolution"
  },
  {
    question: "When a small group separates from a larger population and establishes a new colony with a limited gene pool, the resulting change is the:",
    options: [
      "A. Bottleneck effect",
      "B. Founder effect",
      "C. Gene flow",
      "D. Stabilizing selection"
    ],
    answer: "B",
    explanation: "The founder effect occurs when founders carry only a sample of the original population's alleles.",
    subtopic: "Evolution"
  },
  {
    question: "A severe reduction in population size followed by recovery can cause a loss of genetic variation called the:",
    options: [
      "A. Founder effect",
      "B. Bottleneck effect",
      "C. Migration effect",
      "D. Hardy-Weinberg effect"
    ],
    answer: "B",
    explanation: "A population bottleneck sharply reduces genetic diversity because only a few survivors contribute genes.",
    subtopic: "Evolution"
  },
  {
    question: "The formation of new species is called:",
    options: [
      "A. Adaptation",
      "B. Speciation",
      "C. Convergence",
      "D. Extinction"
    ],
    answer: "B",
    explanation: "Speciation is the evolutionary process by which populations become reproductively isolated and form new species.",
    subtopic: "Evolution"
  },
  {
    question: "Speciation that occurs when a physical barrier divides a population is known as:",
    options: [
      "A. Sympatric speciation",
      "B. Allopatric speciation",
      "C. Artificial speciation",
      "D. Instantaneous speciation"
    ],
    answer: "B",
    explanation: "Allopatric speciation results from geographic isolation that prevents gene flow between populations.",
    subtopic: "Evolution"
  },
  {
    question: "Speciation without geographic separation, within the same area, is called:",
    options: [
      "A. Allopatric speciation",
      "B. Sympatric speciation",
      "C. Parapatric speciation only via mountains",
      "D. Convergent speciation"
    ],
    answer: "B",
    explanation: "Sympatric speciation occurs in the same geographic area, often via ecological or chromosomal isolation.",
    subtopic: "Evolution"
  },
  {
    question: "Mechanisms that prevent species from interbreeding and producing fertile offspring are called:",
    options: [
      "A. Selection pressures",
      "B. Reproductive isolating mechanisms",
      "C. Gene pools",
      "D. Adaptations"
    ],
    answer: "B",
    explanation: "Reproductive isolation (prezygotic and postzygotic) keeps species distinct by blocking gene exchange.",
    subtopic: "Evolution"
  },
  {
    question: "Natural selection acts directly on an organism's:",
    options: [
      "A. Genotype",
      "B. Phenotype",
      "C. Mutations only",
      "D. The DNA sequence directly"
    ],
    answer: "B",
    explanation: "Selection operates on observable traits (phenotypes); favourable phenotypes leave more offspring, changing allele frequencies.",
    subtopic: "Evolution"
  },
  {
    question: "In evolutionary terms, 'fitness' refers to an organism's:",
    options: [
      "A. Strength and speed",
      "B. Ability to survive and reproduce relative to others",
      "C. Body size",
      "D. Resistance to all disease"
    ],
    answer: "B",
    explanation: "Darwinian fitness is measured by relative reproductive success, not mere physical vigour.",
    subtopic: "Evolution"
  },
  {
    question: "Selective breeding of plants and animals by humans is an example of:",
    options: [
      "A. Natural selection",
      "B. Artificial selection",
      "C. Genetic drift",
      "D. Gene flow"
    ],
    answer: "B",
    explanation: "Artificial selection is human-directed choice of traits, analogous to natural selection but with human preference as the selector.",
    subtopic: "Evolution"
  },
  {
    question: "The peppered moth (Biston betularia) is a classic example of natural selection because:",
    options: [
      "A. It migrated to new continents",
      "B. Dark forms increased in polluted areas where they were better camouflaged",
      "C. It lost its wings",
      "D. It became extinct"
    ],
    answer: "B",
    explanation: "Industrial melanism in the peppered moth showed predators selecting better-camouflaged (dark) moths on sooty trees.",
    subtopic: "Evolution"
  },
  {
    question: "Darwin's finches on the Galapagos islands illustrate:",
    options: [
      "A. Convergent evolution",
      "B. Adaptive radiation from a common ancestor",
      "C. Vestigial organs",
      "D. Genetic drift only"
    ],
    answer: "B",
    explanation: "From one ancestral stock, finches diversified into many species with differing beaks suited to different foods — adaptive radiation.",
    subtopic: "Evolution"
  },
  {
    question: "Lamarck used the giraffe to illustrate his idea that:",
    options: [
      "A. Long necks arose by chance mutation",
      "B. Stretching the neck over generations was inherited, lengthening it",
      "C. Long necks were created fixed",
      "D. Selection removed short necks instantly"
    ],
    answer: "B",
    explanation: "Lamarck claimed ancestral giraffes stretched their necks and passed the lengthened necks to offspring — acquired inheritance.",
    subtopic: "Evolution"
  },
  {
    question: "Mutations are best described as:",
    options: [
      "A. Always beneficial changes directed by need",
      "B. Random changes in DNA that may be harmful, neutral or beneficial",
      "C. Changes caused only by use and disuse",
      "D. Guaranteed improvements"
    ],
    answer: "B",
    explanation: "Mutations are random with respect to need; their effect on fitness is not predetermined.",
    subtopic: "Evolution"
  },
  {
    question: "The movement of alleles between populations through migration is called:",
    options: [
      "A. Genetic drift",
      "B. Gene flow",
      "C. Bottleneck",
      "D. Speciation"
    ],
    answer: "B",
    explanation: "Gene flow (migration) introduces or removes alleles, reducing differences between populations.",
    subtopic: "Evolution"
  },
  {
    question: "The Hardy-Weinberg principle describes a population that is:",
    options: [
      "A. Evolving rapidly",
      "B. Not evolving, with stable allele frequencies",
      "C. Undergoing selection",
      "D. Isolated by behaviour only"
    ],
    answer: "B",
    explanation: "Under Hardy-Weinberg equilibrium (no selection, mutation, drift, migration, random mating), allele frequencies stay constant.",
    subtopic: "Evolution"
  },
  {
    question: "Evolution at its most basic level is defined as a change in:",
    options: [
      "A. Individual behaviour over a lifetime",
      "B. Allele frequencies in a population over generations",
      "C. The weather",
      "D. Chromosome number in one person"
    ],
    answer: "B",
    explanation: "Evolution is a population-level change in allele frequencies across generations, not change within a single lifetime.",
    subtopic: "Evolution"
  },
  {
    question: "Similarities in the early embryonic stages of vertebrates (e.g., gill slits in human embryos) are evidence from:",
    options: [
      "A. Comparative anatomy",
      "B. Comparative embryology",
      "C. Biogeography",
      "D. Stratigraphy"
    ],
    answer: "B",
    explanation: "Comparative embryology shows shared developmental patterns reflecting common ancestry.",
    subtopic: "Evolution"
  },
  {
    question: "Similarities in DNA and protein sequences among species provide evidence for evolution through:",
    options: [
      "A. Molecular biology",
      "B. Biogeography",
      "C. Stratigraphy",
      "D. Palaeobotany"
    ],
    answer: "A",
    explanation: "Closely related species share more similar DNA/proteins, supporting common descent at the molecular level.",
    subtopic: "Evolution"
  },
  {
    question: "Archaeopteryx is considered an important fossil because it is a:",
    options: [
      "A. Fully modern bird",
      "B. Transitional form between reptiles and birds",
      "C. Type of fish",
      "D. Mammal ancestor"
    ],
    answer: "B",
    explanation: "Archaeopteryx shows both reptilian (teeth, tail) and bird (feathers, wings) features, a transitional fossil.",
    subtopic: "Evolution"
  },
  {
    question: "The process by which unrelated organisms independently evolve similar traits in similar environments is:",
    options: [
      "A. Divergent evolution",
      "B. Convergent evolution",
      "C. Coevolution",
      "D. Parallel evolution in clones"
    ],
    answer: "B",
    explanation: "Convergent evolution produces analogous structures as unrelated lineages adapt to similar ecological roles.",
    subtopic: "Evolution"
  },
  {
    question: "The evolution of several closely related species from a single ancestral species to fill different niches is:",
    options: [
      "A. Convergent evolution",
      "B. Divergent evolution / adaptive radiation",
      "C. Genetic drift",
      "D. Stabilizing selection"
    ],
    answer: "B",
    explanation: "Divergent evolution (adaptive radiation) yields diverse forms from a common ancestor as they exploit different niches.",
    subtopic: "Evolution"
  },
  {
    question: "When two species evolve in response to each other (e.g., flowers and their pollinators), it is called:",
    options: [
      "A. Coevolution",
      "B. Extinction",
      "C. Drift",
      "D. Bottleneck"
    ],
    answer: "A",
    explanation: "Coevolution is reciprocal evolutionary change in interacting species, such as pollinators and flowers.",
    subtopic: "Evolution"
  },
  {
    question: "Which of the following is a prezygotic reproductive isolating mechanism?",
    options: [
      "A. Hybrid sterility (e.g., mule)",
      "B. Temporal isolation (breeding at different times)",
      "C. Hybrid inviability",
      "D. Reduced hybrid fitness"
    ],
    answer: "B",
    explanation: "Temporal isolation prevents mating/breeding at the same time, blocking fertilization before a zygote forms.",
    subtopic: "Evolution"
  },
  {
    question: "A mule is sterile because it results from a postzygotic barrier known as:",
    options: [
      "A. Temporal isolation",
      "B. Hybrid sterility",
      "C. Mechanical isolation",
      "D. Habitat isolation"
    ],
    answer: "B",
    explanation: "A horse-donkey hybrid (mule) has an odd chromosome number, making it sterile — a postzygotic isolating mechanism.",
    subtopic: "Evolution"
  },
  {
    question: "Stabilizing selection tends to:",
    options: [
      "A. Favour extreme phenotypes at both ends",
      "B. Favour intermediate phenotypes and reduce variation",
      "C. Shift the mean in one direction",
      "D. Eliminate all variation instantly"
    ],
    answer: "B",
    explanation: "Stabilizing selection favours the average phenotype and acts against extremes, maintaining the status quo.",
    subtopic: "Evolution"
  },
  {
    question: "Directional selection occurs when:",
    options: [
      "A. Intermediate forms are favoured",
      "B. One extreme phenotype is favoured, shifting the trait mean",
      "C. Both extremes are favoured",
      "D. No phenotype is favoured"
    ],
    answer: "B",
    explanation: "Directional selection shifts a population's trait distribution toward one extreme (e.g., larger beak size).",
    subtopic: "Evolution"
  },
  {
    question: "Disruptive selection favours:",
    options: [
      "A. The average phenotype",
      "B. Both extreme phenotypes over the intermediate",
      "C. Only the smallest individuals",
      "D. Only hybrids"
    ],
    answer: "B",
    explanation: "Disruptive selection favours both extremes and can promote divergence within a population.",
    subtopic: "Evolution"
  },
  {
    question: "The fossil record is incomplete mainly because:",
    options: [
      "A. All organisms fossilize equally",
      "B. Soft-bodied organisms decompose and many remains are never preserved",
      "C. Fossils dissolve instantly",
      "D. Humans destroy all fossils"
    ],
    answer: "B",
    explanation: "Fossilization favours hard parts and specific conditions; soft tissues decay, leaving gaps in the record.",
    subtopic: "Evolution"
  },
  {
    question: "Radiometric dating, such as carbon-14 dating, is used to determine the:",
    options: [
      "A. Colour of fossils",
      "B. Age of fossils and rocks",
      "C. Species name",
      "D. Number of chromosomes"
    ],
    answer: "B",
    explanation: "Radioactive isotopes decay at known rates, allowing the absolute age of once-living material to be estimated.",
    subtopic: "Evolution"
  },
  {
    question: "The wing of the flightless ostrich is an example of a:",
    options: [
      "A. Homologous and vestigial structure",
      "B. Fully functional new organ",
      "C. Analogous structure to a bat wing",
      "D. Mutated gene only"
    ],
    answer: "A",
    explanation: "The ostrich wing is a reduced, non-flying (vestigial) forelimb homologous to wings of flying birds.",
    subtopic: "Evolution"
  },
  {
    question: "Alfred Russel Wallace is notable in evolutionary biology for:",
    options: [
      "A. Discovering DNA",
      "B. Independently proposing natural selection",
      "C. Inventing radiocarbon dating",
      "D. Classifying bacteria"
    ],
    answer: "B",
    explanation: "Wallace independently formulated natural selection; his work with Darwin led to the joint 1858 presentation.",
    subtopic: "Evolution"
  },
  {
    question: "Which statement best summarizes Darwin's view of evolution?",
    options: [
      "A. Species are fixed and unchanging",
      "B. Descent with modification from common ancestors by natural selection",
      "C. Acquired traits are inherited",
      "D. Evolution is directed toward human perfection"
    ],
    answer: "B",
    explanation: "Darwin's core idea is descent with modification: all species share common ancestry and diversify via natural selection.",
    subtopic: "Evolution"
  }
];

module.exports = questions;
