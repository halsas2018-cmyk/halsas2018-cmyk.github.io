// biology — Applications of Genetics
const questions = [
  {
    question: "The deliberate mating of selected parents to produce offspring with desirable traits is called",
    options: [
      "A. Genetic engineering",
      "B. Selective breeding",
      "C. Cloning",
      "D. Mutation"
    ],
    answer: "B",
    explanation: "Selective (artificial) breeding chooses parents with wanted traits to improve the offspring.",
    subtopic: "Applications"
  },
  {
    question: "Crossing two genetically different varieties or species to combine desirable traits is called",
    options: [
      "A. Inbreeding",
      "B. Hybridization",
      "C. Cloning",
      "D. Mutagenesis"
    ],
    answer: "B",
    explanation: "Hybridization brings together genes from different lines to create combinations with improved traits.",
    subtopic: "Applications"
  },
  {
    question: "The first generation offspring of a cross between two pure lines is called the",
    options: [
      "A. F2 generation",
      "B. F1 (first filial) generation",
      "C. P generation",
      "D. Backcross"
    ],
    answer: "B",
    explanation: "The immediate offspring of two pure-breeding parents are the F1 (first filial) generation.",
    subtopic: "Applications"
  },
  {
    question: "Hybrid vigour or heterosis refers to",
    options: [
      "A. Weakness of hybrids",
      "B. Superiority of hybrids over both parents",
      "C. Sterility of the parents",
      "D. A type of mutation"
    ],
    answer: "B",
    explanation: "Heterosis is the increased vigour, yield or fitness shown by crossbred (F1) offspring.",
    subtopic: "Applications"
  },
  {
    question: "Inbreeding is the mating of",
    options: [
      "A. Unrelated individuals",
      "B. Closely related individuals",
      "C. Different species",
      "D. Mutants only"
    ],
    answer: "B",
    explanation: "Inbreeding involves mating closely related individuals, increasing homozygosity.",
    subtopic: "Applications"
  },
  {
    question: "Artificial insemination in animal breeding is used to",
    options: [
      "A. Reduce genetic diversity",
      "B. Disseminate the genetics of a superior sire widely",
      "C. Eliminate desirable traits",
      "D. Clone animals"
    ],
    answer: "B",
    explanation: "It allows one high-quality male to sire many offspring across herds or regions.",
    subtopic: "Applications"
  },
  {
    question: "Genetic engineering involves the",
    options: [
      "A. Random mutation of genes",
      "B. Direct manipulation of an organism's DNA",
      "C. Selective inbreeding only",
      "D. Natural crossing of species"
    ],
    answer: "B",
    explanation: "Genetic engineering deliberately alters DNA, often by adding or removing specific genes.",
    subtopic: "Applications"
  },
  {
    question: "Recombinant DNA technology is the joining together of DNA from",
    options: [
      "A. The same organism only",
      "B. Two different sources",
      "C. RNA only",
      "D. Proteins"
    ],
    answer: "B",
    explanation: "Recombinant DNA combines DNA fragments from different organisms into one molecule.",
    subtopic: "Applications"
  },
  {
    question: "A commonly used vector for carrying recombinant DNA into bacteria is a",
    options: [
      "A. Ribosome",
      "B. Plasmid",
      "C. Mitochondrion",
      "D. Vacuole"
    ],
    answer: "B",
    explanation: "Plasmids are small circular DNA molecules that can carry inserted genes into bacteria.",
    subtopic: "Applications"
  },
  {
    question: "An organism that contains and expresses a gene from another species is called",
    options: [
      "A. Autopolyploid",
      "B. Transgenic",
      "C. A simple hybrid",
      "D. A mutant"
    ],
    answer: "B",
    explanation: "Transgenic organisms carry foreign DNA integrated into their genome.",
    subtopic: "Applications"
  },
  {
    question: "The Bacillus thuringiensis (Bt) gene inserted into crops confers resistance to",
    options: [
      "A. Drought",
      "B. Insect pests",
      "C. Viruses",
      "D. Fungi"
    ],
    answer: "B",
    explanation: "The Bt toxin gene makes plants toxic to certain insect larvae such as bollworms.",
    subtopic: "Applications"
  },
  {
    question: "Genetically modified crops are most often engineered for traits such as",
    options: [
      "A. Increased disease and pest resistance",
      "B. Reduced yield",
      "C. Loss of nutrients",
      "D. Guaranteed sterility"
    ],
    answer: "A",
    explanation: "Common GM traits include pest, disease and herbicide resistance and improved nutrition.",
    subtopic: "Applications"
  },
  {
    question: "Gene therapy aims to",
    options: [
      "A. Remove all genes",
      "B. Treat genetic disorders by inserting functional genes",
      "C. Clone whole organisms",
      "D. Produce hybrids"
    ],
    answer: "B",
    explanation: "Gene therapy introduces a normal copy of a gene to correct a defective one.",
    subtopic: "Applications"
  },
  {
    question: "The technique of producing an identical genetic copy of an organism is called",
    options: [
      "A. Hybridization",
      "B. Cloning",
      "C. Mutation breeding",
      "D. Selection"
    ],
    answer: "B",
    explanation: "Cloning produces genetically identical copies of a cell, gene or whole organism.",
    subtopic: "Applications"
  },
  {
    question: "Dolly the sheep was the first mammal cloned from an",
    options: [
      "A. Fertilized embryo",
      "B. Adult somatic (body) cell",
      "C. Plant seed",
      "D. Egg alone"
    ],
    answer: "B",
    explanation: "Dolly was produced by somatic cell nuclear transfer using a cell from an adult ewe.",
    subtopic: "Applications"
  },
  {
    question: "Genetic counselling helps individuals and families to",
    options: [
      "A. Choose their child's sex at will",
      "B. Understand and manage the risk of inherited disorders",
      "C. Cure genetic diseases instantly",
      "D. Avoid all mutations"
    ],
    answer: "B",
    explanation: "It provides information and guidance about hereditary risks and options.",
    subtopic: "Applications"
  },
  {
    question: "ABO blood grouping is applied in",
    options: [
      "A. Paternity testing only",
      "B. Transfusion compatibility and paternity testing",
      "C. Treating anaemia",
      "D. Cloning humans"
    ],
    answer: "B",
    explanation: "Blood groups are used to match donors/recipients and to help exclude paternity.",
    subtopic: "Applications"
  },
  {
    question: "DNA fingerprinting used in paternity testing relies on",
    options: [
      "A. Blood pressure",
      "B. Variable repetitive DNA regions",
      "C. Eye colour",
      "D. Height"
    ],
    answer: "B",
    explanation: "Hypervariable repeat sequences produce individual-specific DNA profiles.",
    subtopic: "Applications"
  },
  {
    question: "Mutation breeding uses agents called mutagens such as",
    options: [
      "A. Water",
      "B. Radiation or chemicals",
      "C. Oxygen",
      "D. Sugar"
    ],
    answer: "B",
    explanation: "X-rays, gamma rays and chemicals induce mutations that may yield useful new alleles.",
    subtopic: "Applications"
  },
  {
    question: "Induced mutations in crop breeding can produce",
    options: [
      "A. Only harmful effects",
      "B. New useful alleles such as disease resistance",
      "C. No genetic change",
      "D. Immediate extinction"
    ],
    answer: "B",
    explanation: "Mutation breeding has generated varieties with improved yield and resistance.",
    subtopic: "Applications"
  },
  {
    question: "A major concern about releasing genetically modified organisms is",
    options: [
      "A. They cannot be tested",
      "B. Possible ecological and health risks",
      "C. They contain no genes",
      "D. They are always harmful"
    ],
    answer: "B",
    explanation: "Potential gene flow to wild relatives and unforeseen effects are key concerns.",
    subtopic: "Applications"
  },
  {
    question: "The polymerase chain reaction (PCR) is used to",
    options: [
      "A. Cut DNA",
      "B. Amplify (make many copies of) specific DNA",
      "C. Join DNA fragments",
      "D. Sequence proteins"
    ],
    answer: "B",
    explanation: "PCR uses repeated heating/cooling cycles to copy a target DNA segment millions of times.",
    subtopic: "Applications"
  },
  {
    question: "Restriction enzymes are used in genetic engineering to",
    options: [
      "A. Copy DNA",
      "B. Cut DNA at specific sequences",
      "C. Build proteins",
      "D. Destroy plasmids"
    ],
    answer: "B",
    explanation: "Restriction endonucleases cleave DNA at recognised nucleotide sequences.",
    subtopic: "Applications"
  },
  {
    question: "Insulin for the treatment of diabetes is now largely produced using",
    options: [
      "A. Animal pancreases only",
      "B. Recombinant DNA in bacteria or yeast",
      "C. Plant leaves",
      "D. Blood donation"
    ],
    answer: "B",
    explanation: "The human insulin gene is expressed in microbes to produce safe, abundant insulin.",
    subtopic: "Applications"
  },
  {
    question: "Transgenic bacteria that produce human insulin contain the",
    options: [
      "A. Human insulin gene",
      "B. A plant gene",
      "C. A viral gene",
      "D. No gene at all"
    ],
    answer: "A",
    explanation: "The inserted human gene directs synthesis of human insulin in the microbe.",
    subtopic: "Applications"
  },
  {
    question: "Selective breeding of crops for disease resistance helps to reduce the need for",
    options: [
      "A. Water",
      "B. Chemical pesticides",
      "C. Sunlight",
      "D. Soil"
    ],
    answer: "B",
    explanation: "Resistant varieties suffer less damage, lowering pesticide dependence.",
    subtopic: "Applications"
  },
  {
    question: "A backcross is a cross of a hybrid to",
    options: [
      "A. Another hybrid",
      "B. One of the original parent types",
      "C. A different species",
      "D. Itself"
    ],
    answer: "B",
    explanation: "Backcrossing to a parent recovers and fixes desired parental traits.",
    subtopic: "Applications"
  },
  {
    question: "The main aim of the Human Genome Project was to",
    options: [
      "A. Clone humans",
      "B. Map and sequence all human genes",
      "C. Eliminate genes",
      "D. Create GMOs only"
    ],
    answer: "B",
    explanation: "It determined the sequence and location of the approximately 20,000-25,000 human genes.",
    subtopic: "Applications"
  },
  {
    question: "Marker-assisted selection in breeding uses",
    options: [
      "A. Random choice",
      "B. DNA markers linked to desirable traits",
      "C. Eye colour",
      "D. Plant height only"
    ],
    answer: "B",
    explanation: "Molecular markers let breeders select for a trait without waiting to see the phenotype.",
    subtopic: "Applications"
  },
  {
    question: "Plant tissue culture in breeding allows the",
    options: [
      "A. Production of many genetically identical plants",
      "B. Crossing of animals",
      "C. Induction of mutation only",
      "D. Cloning of animals"
    ],
    answer: "A",
    explanation: "Cells or meristems grown in vitro can regenerate many clones of a selected plant.",
    subtopic: "Applications"
  },
  {
    question: "Somatic cell nuclear transfer is the method used in",
    options: [
      "A. Hybridization",
      "B. Reproductive cloning",
      "C. Blood grouping",
      "D. Mutation breeding"
    ],
    answer: "B",
    explanation: "Transferring a somatic nucleus into an enucleated egg produces a cloned embryo.",
    subtopic: "Applications"
  },
  {
    question: "Genetically modifying crops to tolerate herbicides allows the",
    options: [
      "A. Weeds to grow more strongly",
      "B. Crop to survive herbicide application",
      "C. Crop to die with the weeds",
      "D. Herbicide to become inactive"
    ],
    answer: "B",
    explanation: "Herbicide-tolerant crops are unaffected by a herbicide that kills surrounding weeds.",
    subtopic: "Applications"
  },
  {
    question: "An ethical concern in human genetic engineering is that modifying",
    options: [
      "A. Germline cells affects future generations",
      "B. Genes is too inexpensive",
      "C. No genes exist",
      "D. There are no issues"
    ],
    answer: "A",
    explanation: "Changes to germline (egg/sperm) DNA are inherited by descendants.",
    subtopic: "Applications"
  },
  {
    question: "A transgenic animal is one that has",
    options: [
      "A. Only its own natural genes",
      "B. A gene from another species inserted into its genome",
      "C. No DNA",
      "D. Triploid cells only"
    ],
    answer: "B",
    explanation: "Transgenic animals carry and express a foreign gene for research, agriculture or medicine.",
    subtopic: "Applications"
  },
  {
    question: "Golden Rice was genetically engineered to produce",
    options: [
      "A. Extra protein",
      "B. Beta-carotene (provitamin A)",
      "C. Fats",
      "D. Water"
    ],
    answer: "B",
    explanation: "It synthesises beta-carotene to help prevent vitamin A deficiency.",
    subtopic: "Applications"
  },
  {
    question: "The main purpose of breeding high-yielding crop varieties is to",
    options: [
      "A. Increase food production",
      "B. Reduce yield",
      "C. Increase pests",
      "D. Decrease nutrition"
    ],
    answer: "A",
    explanation: "Higher-yielding varieties improve food security and land-use efficiency.",
    subtopic: "Applications"
  },
  {
    question: "In animal husbandry, crossbreeding is done to combine",
    options: [
      "A. Only a single trait",
      "B. Desirable traits from different breeds",
      "C. Sterility",
      "D. Random mutations"
    ],
    answer: "B",
    explanation: "Crossing breeds merges complementary qualities such as growth and disease resistance.",
    subtopic: "Applications"
  },
  {
    question: "Gene banks store",
    options: [
      "A. Only seeds of extinct plants",
      "B. Genetic material (seeds, gametes, DNA) for conservation",
      "C. Water samples",
      "D. Soil samples"
    ],
    answer: "B",
    explanation: "Gene banks preserve biodiversity for future breeding and research.",
    subtopic: "Applications"
  },
  {
    question: "Artificial selection differs from natural selection in that it is directed by",
    options: [
      "A. Nature",
      "B. Humans",
      "C. Random chance",
      "D. Climate only"
    ],
    answer: "B",
    explanation: "Human breeders choose which individuals reproduce, unlike natural selection.",
    subtopic: "Applications"
  },
  {
    question: "Bt cotton has been engineered to be resistant to",
    options: [
      "A. Drought",
      "B. Certain insect pests such as bollworm",
      "C. Viruses",
      "D. Fungi"
    ],
    answer: "B",
    explanation: "The Bt toxin protects the plant against lepidopteran larvae including bollworms.",
    subtopic: "Applications"
  },
  {
    question: "A disadvantage of inbreeding is that it can increase the expression of",
    options: [
      "A. Hybrid vigour",
      "B. Harmful recessive traits",
      "C. Genetic diversity",
      "D. Yield"
    ],
    answer: "B",
    explanation: "Inbreeding raises homozygosity, exposing deleterious recessive alleles (inbreeding depression).",
    subtopic: "Applications"
  },
  {
    question: "Recombinant DNA technology is central to the production of",
    options: [
      "A. Natural open-pollinated hybrids",
      "B. Transgenic organisms",
      "C. Wild-type species",
      "D. Fossils"
    ],
    answer: "B",
    explanation: "rDNA constructs are introduced to make transgenic bacteria, plants and animals.",
    subtopic: "Applications"
  },
  {
    question: "Paternity testing using blood groups can",
    options: [
      "A. Prove paternity absolutely",
      "B. Exclude but not prove a possible father",
      "C. Determine eye colour",
      "D. Cure disease"
    ],
    answer: "B",
    explanation: "Blood groups can rule out a man who lacks the child's paternal alleles but cannot prove paternity alone.",
    subtopic: "Applications"
  },
  {
    question: "Genetic counselling is especially important before marriage in families with",
    options: [
      "A. Hereditary diseases",
      "B. No medical history",
      "C. Only infectious diseases",
      "D. Common colds"
    ],
    answer: "A",
    explanation: "It helps couples assess the risk of passing on inherited conditions to children.",
    subtopic: "Applications"
  },
  {
    question: "Cloning of livestock can help to propagate animals with",
    options: [
      "A. Undesirable traits",
      "B. Superior desirable traits",
      "C. Disease susceptibility",
      "D. Random unknown traits"
    ],
    answer: "B",
    explanation: "Cloning replicates elite animals of high genetic merit.",
    subtopic: "Applications"
  },
  {
    question: "Recombinant vaccines are produced using",
    options: [
      "A. Live wild viruses only",
      "B. Genetically engineered organisms expressing the antigen",
      "C. Plant roots",
      "D. Naturally occurring soil bacteria"
    ],
    answer: "B",
    explanation: "A gene for a pathogen antigen is expressed in a safe host to make the vaccine.",
    subtopic: "Applications"
  },
  {
    question: "Mutation breeding has been used to develop crop varieties with improved",
    options: [
      "A. Disease resistance and yield",
      "B. Only flower colour",
      "C. Reduced size only",
      "D. No useful traits"
    ],
    answer: "A",
    explanation: "Induced mutants have yielded barley, wheat and rice varieties with better yield and resistance.",
    subtopic: "Applications"
  },
  {
    question: "Transgenic fish (e.g., with a growth hormone gene) have been engineered for",
    options: [
      "A. Faster growth",
      "B. Slower growth",
      "C. No growth",
      "D. Early death"
    ],
    answer: "A",
    explanation: "The extra growth hormone gene promotes quicker growth and larger size.",
    subtopic: "Applications"
  },
  {
    question: "A potential risk of releasing transgenic organisms into the environment is",
    options: [
      "A. They are too small",
      "B. Possible gene transfer to wild relatives and ecological disruption",
      "C. They cannot survive",
      "D. They have no DNA"
    ],
    answer: "B",
    explanation: "Escaped transgenes could spread to wild populations and disturb ecosystems.",
    subtopic: "Applications"
  },
  {
    question: "Genetic engineering applied to medicine has enabled production of",
    options: [
      "A. Only vaccines",
      "B. Hormones, enzymes, vaccines and other therapeutic proteins",
      "C. No useful products",
      "D. Only food additives"
    ],
    answer: "B",
    explanation: "rDNA is used to make insulin, growth hormone, clotting factors, interferons and vaccines.",
    subtopic: "Applications"
  }
];

module.exports = questions;
