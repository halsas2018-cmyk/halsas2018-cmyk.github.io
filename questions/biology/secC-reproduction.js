// biology — Reproduction
const questions = [
  {
    question: "Which of the following is the site of spermatogenesis in mammals?",
    options: [
      "A. Epididymis",
      "B. Seminiferous tubules",
      "C. Prostate gland",
      "D. Vas deferens"
    ],
    answer: "B",
    explanation: "Spermatogenesis occurs in the seminiferous tubules of the testes where spermatozoa are produced.",
    subtopic: "male reproductive system"
  },
  {
    question: "The fluid produced by the seminal vesicles mainly provides spermatozoa with",
    options: [
      "A. hormones for maturation",
      "B. fructose as an energy source",
      "C. antibodies for protection",
      "D. enzymes that harden the sperm head"
    ],
    answer: "B",
    explanation: "Seminal vesicle fluid contains fructose which nourishes and provides energy for the motile spermatozoa.",
    subtopic: "male reproductive system"
  },
  {
    question: "Which structure stores mature spermatozoa before ejaculation?",
    options: [
      "A. Testis",
      "B. Epididymis",
      "C. Bulbourethral gland",
      "D. Seminal vesicle"
    ],
    answer: "B",
    explanation: "The epididymis is a coiled tube where spermatozoa are stored and continue to mature after leaving the testis.",
    subtopic: "male reproductive system"
  },
  {
    question: "The male hormone testosterone is secreted mainly by the",
    options: [
      "A. Sertoli cells",
      "B. Interstitial (Leydig) cells",
      "C. Prostate gland",
      "D. Seminiferous tubules"
    ],
    answer: "B",
    explanation: "Interstitial or Leydig cells in the testes secrete testosterone, the principal male sex hormone.",
    subtopic: "male reproductive system"
  },
  {
    question: "Which gland contributes an alkaline fluid that helps neutralize the acidity of the female vagina?",
    options: [
      "A. Seminal vesicle",
      "B. Prostate gland",
      "C. Bulbourethral gland",
      "D. Epididymis"
    ],
    answer: "B",
    explanation: "The prostate gland secretes an alkaline fluid that protects sperm by neutralizing vaginal acidity.",
    subtopic: "male reproductive system"
  },
  {
    question: "In humans, the duct that carries both sperm and urine is the",
    options: [
      "A. vas deferens",
      "B. urethra",
      "C. epididymis",
      "D. ejaculatory duct"
    ],
    answer: "B",
    explanation: "The urethra is the shared passage through which both urine and semen leave the body in males.",
    subtopic: "male reproductive system"
  },
  {
    question: "The process of sperm formation begins at puberty under the influence of",
    options: [
      "A. progesterone",
      "B. luteinizing hormone only",
      "C. follicle-stimulating hormone and testosterone",
      "D. estrogen alone"
    ],
    answer: "C",
    explanation: "FSH stimulates the seminiferous tubules while testosterone (from LH stimulation) supports sperm production.",
    subtopic: "male reproductive system"
  },
  {
    question: "Which of the following connects the testis to the abdominal wall?",
    options: [
      "A. Spermatic cord",
      "B. Ejaculatory duct",
      "C. Urethra",
      "D. Vas deferens only"
    ],
    answer: "A",
    explanation: "The spermatic cord contains the vas deferens, vessels and nerves and suspends the testis in the scrotum.",
    subtopic: "male reproductive system"
  },
  {
    question: "The scrotum helps maintain the testes at a temperature slightly below body temperature because this",
    options: [
      "A. prevents infection",
      "B. is required for efficient spermatogenesis",
      "C. aids hormone storage",
      "D. increases urine production"
    ],
    answer: "B",
    explanation: "Spermatogenesis requires a temperature a few degrees below core body temperature for normal sperm development.",
    subtopic: "male reproductive system"
  },
  {
    question: "Bulbourethral (Cowper's) glands secrete fluid that",
    options: [
      "A. nourishes the egg",
      "B. lubricates the urethra and neutralizes traces of urine",
      "C. produces testosterone",
      "D. forms the acrosome"
    ],
    answer: "B",
    explanation: "Cowper's glands produce a pre-ejaculatory lubricant that also neutralizes residual urine acidity in the urethra.",
    subtopic: "male reproductive system"
  },
  {
    question: "The primary female gamete, the ovum, is normally released from the",
    options: [
      "A. uterus",
      "B. ovary",
      "C. fallopian tube",
      "D. cervix"
    ],
    answer: "B",
    explanation: "Ovulation releases a mature ovum from a Graafian follicle in the ovary.",
    subtopic: "female reproductive system"
  },
  {
    question: "Fertilization in humans normally takes place in the",
    options: [
      "A. uterus",
      "B. ovary",
      "C. fallopian (uterine) tube",
      "D. vagina"
    ],
    answer: "C",
    explanation: "The ovum is usually fertilized by sperm in the ampulla of the fallopian tube before moving to the uterus.",
    subtopic: "female reproductive system"
  },
  {
    question: "The lining of the uterus that thickens each month in preparation for implantation is the",
    options: [
      "A. myometrium",
      "B. endometrium",
      "C. perimetrium",
      "D. cervix"
    ],
    answer: "B",
    explanation: "The endometrium is the inner uterine lining that thickens under hormonal influence to receive an embryo.",
    subtopic: "female reproductive system"
  },
  {
    question: "The hormone that triggers ovulation and the formation of the corpus luteum is",
    options: [
      "A. FSH",
      "B. LH (luteinizing hormone)",
      "C. Prolactin",
      "D. Oxytocin"
    ],
    answer: "B",
    explanation: "A surge in luteinizing hormone (LH) causes ovulation and converts the ruptured follicle into the corpus luteum.",
    subtopic: "female reproductive system"
  },
  {
    question: "After ovulation, the corpus luteum secretes",
    options: [
      "A. FSH and LH",
      "B. progesterone and some estrogen",
      "C. testosterone",
      "D. prolactin only"
    ],
    answer: "B",
    explanation: "The corpus luteum secretes progesterone (with estrogen) to maintain the uterine lining for possible pregnancy.",
    subtopic: "female reproductive system"
  },
  {
    question: "The menstrual cycle is regulated mainly by the interplay of hormones from the pituitary and the",
    options: [
      "A. adrenal gland",
      "B. ovary",
      "C. thyroid gland",
      "D. pancreas"
    ],
    answer: "B",
    explanation: "The ovarian cycle (follicle, ovulation, corpus luteum) is driven by pituitary FSH/LH acting on the ovary.",
    subtopic: "female reproductive system"
  },
  {
    question: "Menstruation occurs when",
    options: [
      "A. fertilization succeeds",
      "B. the corpus luteum degenerates and progesterone falls",
      "C. estrogen levels peak",
      "D. implantation occurs"
    ],
    answer: "B",
    explanation: "If no pregnancy occurs, the corpus luteum breaks down, progesterone drops, and the endometrium sheds as menstruation.",
    subtopic: "female reproductive system"
  },
  {
    question: "The placenta functions to",
    options: [
      "A. produce ova",
      "B. allow exchange of materials between mother and fetus",
      "C. store sperm",
      "D. secrete testosterone"
    ],
    answer: "B",
    explanation: "The placenta mediates nutrient, gas and waste exchange between maternal and fetal blood without mixing them fully.",
    subtopic: "female reproductive system"
  },
  {
    question: "The hormone human chorionic gonadotropin (hCG) is produced by the",
    options: [
      "A. ovary",
      "B. developing embryo/placenta",
      "C. pituitary",
      "D. uterus wall"
    ],
    answer: "B",
    explanation: "hCG is secreted by the early embryo and later the placenta; it maintains the corpus luteum in early pregnancy.",
    subtopic: "female reproductive system"
  },
  {
    question: "In the menstrual cycle, follicle-stimulating hormone (FSH) primarily stimulates",
    options: [
      "A. the uterine lining to shed",
      "B. growth of ovarian follicles",
      "C. milk production",
      "D. sperm release"
    ],
    answer: "B",
    explanation: "FSH promotes the development of ovarian follicles and estrogen secretion in the first half of the cycle.",
    subtopic: "female reproductive system"
  },
  {
    question: "The rupture of the ovarian follicle and release of the egg is called",
    options: [
      "A. fertilization",
      "B. ovulation",
      "C. menstruation",
      "D. implantation"
    ],
    answer: "B",
    explanation: "Ovulation is the release of a mature ovum from the ovary, typically around the middle of the cycle.",
    subtopic: "female reproductive system"
  },
  {
    question: "Metamorphosis in insects such as butterflies is controlled by the hormone",
    options: [
      "A. insulin",
      "B. ecdysone (moulting hormone)",
      "C. adrenaline",
      "D. thyroxine"
    ],
    answer: "B",
    explanation: "Ecdysone, produced by the prothoracic glands, drives moulting and metamorphosis in insects.",
    subtopic: "metamorphosis"
  },
  {
    question: "The immature larval stage of a frog is called a",
    options: [
      "A. pupa",
      "B. tadpole",
      "C. nymph",
      "D. larva (grub)"
    ],
    answer: "B",
    explanation: "A frog larva is the tadpole, which is aquatic, has gills and a tail, and later undergoes metamorphosis.",
    subtopic: "metamorphosis"
  },
  {
    question: "Complete metamorphosis in insects involves the stages",
    options: [
      "A. egg, nymph, adult",
      "B. egg, larva, pupa, adult",
      "C. egg, tadpole, adult",
      "D. egg, adult only"
    ],
    answer: "B",
    explanation: "Holometabolous insects pass through egg, larva, pupa and adult, with the pupa as a resting transformative stage.",
    subtopic: "metamorphosis"
  },
  {
    question: "Incomplete metamorphosis differs from complete metamorphosis because the young",
    options: [
      "A. pass through a pupal stage",
      "B. resemble the adult (nymph) and lack a pupal stage",
      "C. are born live",
      "D. never moult"
    ],
    answer: "B",
    explanation: "In incomplete metamorphosis (hemimetabolous) the nymph looks like a small adult and there is no pupal stage.",
    subtopic: "metamorphosis"
  },
  {
    question: "During frog metamorphosis, the tadpole loses its tail through",
    options: [
      "A. growth",
      "B. apoptosis (controlled cell death) / resorption",
      "C. regeneration",
      "D. cell division"
    ],
    answer: "B",
    explanation: "The tadpole tail is resorbed via programmed cell death (apoptosis) as limbs develop during metamorphosis.",
    subtopic: "metamorphosis"
  },
  {
    question: "The hormone thyroxine influences metamorphosis in",
    options: [
      "A. insects",
      "B. amphibians such as frogs",
      "C. birds",
      "D. mammals"
    ],
    answer: "B",
    explanation: "In amphibians, thyroid hormone (thyroxine) triggers the dramatic changes of metamorphosis from tadpole to frog.",
    subtopic: "metamorphosis"
  },
  {
    question: "A pupa is a characteristic stage of",
    options: [
      "A. incomplete metamorphosis",
      "B. complete metamorphosis",
      "C. asexual reproduction",
      "D. budding"
    ],
    answer: "B",
    explanation: "The pupal stage is found only in insects with complete (holometabolous) metamorphosis.",
    subtopic: "metamorphosis"
  },
  {
    question: "Grasshoppers undergo incomplete metamorphosis, meaning their young are called",
    options: [
      "A. larvae",
      "B. pupae",
      "C. nymphs",
      "D. tadpoles"
    ],
    answer: "C",
    explanation: "Grasshopper young are nymphs that gradually grow and moult into the adult form without a pupal stage.",
    subtopic: "metamorphosis"
  },
  {
    question: "The transfer of pollen grains from the anther to the stigma of a flower is called",
    options: [
      "A. fertilization",
      "B. pollination",
      "C. germination",
      "D. dispersal"
    ],
    answer: "B",
    explanation: "Pollination is the transfer of pollen from anther to stigma, a prerequisite for fertilization in angiosperms.",
    subtopic: "flowering plants"
  },
  {
    question: "Pollination by wind is best described as",
    options: [
      "A. entomophily",
      "B. anemophily",
      "C. hydrophily",
      "D. autogamy"
    ],
    answer: "B",
    explanation: "Anemophily is wind pollination; such flowers usually have small, light, non-sticky pollen and exposed stigmas.",
    subtopic: "flowering plants"
  },
  {
    question: "A flower that contains both stamens and carpels is described as",
    options: [
      "A. unisexual",
      "B. bisexual (perfect)",
      "C. incomplete",
      "D. apetalous"
    ],
    answer: "B",
    explanation: "A bisexual or perfect flower has both male (stamen) and female (carpel) reproductive organs.",
    subtopic: "flowering plants"
  },
  {
    question: "Self-pollination occurs when pollen is transferred",
    options: [
      "A. between different species",
      "B. from anther to stigma of the same flower or another flower on the same plant",
      "C. only by insects",
      "D. by water currents"
    ],
    answer: "B",
    explanation: "Self-pollination is transfer of pollen within the same plant (same flower or another on the same individual).",
    subtopic: "flowering plants"
  },
  {
    question: "The ovary of a flowering plant develops into the",
    options: [
      "A. seed",
      "B. fruit",
      "C. pollen grain",
      "D. style"
    ],
    answer: "B",
    explanation: "After fertilization, the ovary matures into the fruit, which encloses the developing seeds.",
    subtopic: "flowering plants"
  },
  {
    question: "The ovule of a flowering plant develops into the",
    options: [
      "A. fruit",
      "B. seed",
      "C. pericarp",
      "D. petal"
    ],
    answer: "B",
    explanation: "Each fertilized ovule develops into a seed containing the embryo and stored food.",
    subtopic: "flowering plants"
  },
  {
    question: "Fruits aid in seed dispersal by various means. A winged fruit such as that of the maple is dispersed by",
    options: [
      "A. animals eating it",
      "B. wind",
      "C. water",
      "D. explosive dehiscence"
    ],
    answer: "B",
    explanation: "Winged (samara) fruits are adapted for wind dispersal, allowing them to be carried away from the parent.",
    subtopic: "flowering plants"
  },
  {
    question: "Seeds with hooks or barbs, such as those of Bidens, are mainly dispersed by",
    options: [
      "A. wind",
      "B. animals (external attachment)",
      "C. water",
      "D. gravity"
    ],
    answer: "B",
    explanation: "Hooked or barbed seeds cling to animal fur or clothing and are carried away, aiding dispersal.",
    subtopic: "flowering plants"
  },
  {
    question: "The micropyle of a seed is the",
    options: [
      "A. food store",
      "B. pore through which the pollen tube entered and through which water enters on germination",
      "C. protective coat only",
      "D. embryo leaf"
    ],
    answer: "B",
    explanation: "The micropyle is a small pore in the testa through which the pollen tube passed and through which water enters at germination.",
    subtopic: "flowering plants"
  },
  {
    question: "Double fertilization in angiosperms results in the formation of",
    options: [
      "A. two embryos",
      "B. a zygote and the endosperm",
      "C. only the fruit",
      "D. two pollen tubes"
    ],
    answer: "B",
    explanation: "One sperm fertilizes the egg (zygote) and the other fuses with polar nuclei to form triploid endosperm.",
    subtopic: "flowering plants"
  },
  {
    question: "Cross-pollination is generally beneficial because it",
    options: [
      "A. requires no agents",
      "B. increases genetic variation in offspring",
      "C. always produces identical plants",
      "D. occurs only in closed flowers"
    ],
    answer: "B",
    explanation: "Cross-pollination brings gametes from different plants, increasing genetic diversity and hybrid vigour.",
    subtopic: "flowering plants"
  },
  {
    question: "A fruit formed from a single flower with one ovary is called a",
    options: [
      "A. multiple fruit",
      "B. simple fruit",
      "C. aggregate fruit",
      "D. false fruit"
    ],
    answer: "B",
    explanation: "A simple fruit develops from the ovary of a single flower with one pistil (e.g., mango, pea).",
    subtopic: "flowering plants"
  },
  {
    question: "The edible part of an apple is mainly derived from the",
    options: [
      "A. ovary wall only",
      "B. thalamus (receptacle), so it is a false fruit",
      "C. seed coat",
      "D. style"
    ],
    answer: "B",
    explanation: "The apple is a pome, a false fruit in which the fleshy part comes largely from the enlarged receptacle/thalamus.",
    subtopic: "flowering plants"
  },
  {
    question: "Which of the following is an example of vegetative (asexual) reproduction in plants?",
    options: [
      "A. Pollination",
      "B. Formation of bulbs or runners",
      "C. Double fertilization",
      "D. Seed dispersal"
    ],
    answer: "B",
    explanation: "Bulbs, runners (stolons) and tubers are vegetative structures that produce genetically identical offspring asexually.",
    subtopic: "comparison of reproduction in plants & animals"
  },
  {
    question: "A key difference between sexual reproduction in plants and animals is that plants often can also reproduce",
    options: [
      "A. only sexually",
      "B. asexually by vegetative means",
      "C. only by spores",
      "D. never by seeds"
    ],
    answer: "B",
    explanation: "Many plants can reproduce asexually via vegetative structures, an option not generally available to most animals.",
    subtopic: "comparison of reproduction in plants & animals"
  },
  {
    question: "In both plants and animals, sexual reproduction",
    options: [
      "A. produces genetically identical offspring",
      "B. involves the fusion of gametes (fertilization)",
      "C. requires only one parent",
      "D. never involves meiosis"
    ],
    answer: "B",
    explanation: "Sexual reproduction in both kingdoms involves gamete fusion, restoring the diploid number and increasing variation.",
    subtopic: "comparison of reproduction in plants & animals"
  },
  {
    question: "Unlike animals, many flowering plants are",
    options: [
      "A. always unisexual",
      "B. hermaphrodite (bearing both sexes in one flower)",
      "C. unable to self-pollinate",
      "D. dependent on sperm motility in water"
    ],
    answer: "B",
    explanation: "Bisexual flowers carry both stamens and carpels, making many plants hermaphroditic, unlike most animals.",
    subtopic: "comparison of reproduction in plants & animals"
  },
  {
    question: "Seed germination is an example of",
    options: [
      "A. asexual reproduction",
      "B. growth and development of a new sporophyte from a seed",
      "C. fertilization",
      "D. pollination"
    ],
    answer: "B",
    explanation: "Germination is the resumption of growth of the embryo within the seed, not a reproductive act itself.",
    subtopic: "comparison of reproduction in plants & animals"
  },
  {
    question: "External fertilization is common in",
    options: [
      "A. humans",
      "B. most fish and amphibians",
      "C. birds",
      "D. reptiles"
    ],
    answer: "B",
    explanation: "Fish and amphibians typically release gametes into water where fertilization occurs externally.",
    subtopic: "comparison of reproduction in plants & animals"
  },
  {
    question: "Internal fertilization is an advantage because it",
    options: [
      "A. requires water for sperm movement",
      "B. protects gametes and embryos from drying out",
      "C. only occurs in plants",
      "D. prevents genetic variation"
    ],
    answer: "B",
    explanation: "Internal fertilization in terrestrial animals protects gametes/embryos from desiccation on land.",
    subtopic: "comparison of reproduction in plants & animals"
  },
  {
    question: "Fragmentation as a method of asexual reproduction is seen in",
    options: [
      "A. mammals",
      "B. some animals like planarians and starfish, and some plants",
      "C. birds",
      "D. insects only"
    ],
    answer: "B",
    explanation: "Fragmentation, where a body piece regenerates into a whole organism, occurs in some invertebrates and plants (e.g., via stems).",
    subtopic: "comparison of reproduction in plants & animals"
  },
  {
    question: "A major similarity between animal sperm and pollen tubes is that both",
    options: [
      "A. are produced by mitosis only",
      "B. deliver male gametes to the female gamete",
      "C. contain the egg nucleus",
      "D. are diploid"
    ],
    answer: "B",
    explanation: "Animal sperm and flowering-plant pollen tubes both function to convey male genetic material to the egg/embryo sac.",
    subtopic: "comparison of reproduction in plants & animals"
  },
  {
    question: "Parthenogenesis, the development of an embryo from an unfertilized egg, occurs in",
    options: [
      "A. humans",
      "B. some animals such as bees and aphids",
      "C. flowering plants only",
      "D. mammals"
    ],
    answer: "B",
    explanation: "Parthenogenesis (virgin development) is a form of asexual reproduction seen in some insects like bees and aphids.",
    subtopic: "comparison of reproduction in plants & animals"
  },
  {
    question: "In contrast to animal embryos, a flowering plant embryo is protected and nourished within a",
    options: [
      "A. womb",
      "B. seed",
      "C. egg shell",
      "D. larval stage"
    ],
    answer: "B",
    explanation: "The plant embryo develops inside a seed, which provides protection and a food reserve until germination.",
    subtopic: "comparison of reproduction in plants & animals"
  },
  {
    question: "Budding as a reproductive method is characteristic of",
    options: [
      "A. most vertebrates",
      "B. organisms like yeast and Hydra",
      "C. flowering plants",
      "D. birds"
    ],
    answer: "B",
    explanation: "Budding, an asexual method, is seen in yeast and Hydra where a new individual grows as an outgrowth.",
    subtopic: "comparison of reproduction in plants & animals"
  }
];

module.exports = questions;
