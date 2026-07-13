// biology — Reproduction
const questions = [
  // ---------- male & female ----------
  {
    question: "Which male reproductive organ produces sperm and the hormone testosterone?",
    options: [
      "A. Scrotum",
      "B. Testis",
      "C. Prostate gland",
      "D. Vas deferens"
    ],
    answer: "B",
    explanation: "The testis is the primary male gonad; it produces sperm in the seminiferous tubules and secretes testosterone.",
    subtopic: "male & female"
  },
  {
    question: "The scrotum is important in reproduction because it keeps the testes:",
    options: [
      "A. Above body temperature for sperm survival",
      "B. At a temperature slightly below body temperature",
      "C. Out of reach of the urethra",
      "D. Filled with seminal fluid"
    ],
    answer: "B",
    explanation: "Sperm production requires a temperature about 2–3°C below core body temperature, which the external scrotum provides.",
    subtopic: "male & female"
  },
  {
    question: "Sperm are transported from the testis to the urethra through the:",
    options: [
      "A. Epididymis and vas deferens",
      "B. Seminal vesicle only",
      "C. Prostate gland",
      "D. Fallopian tube"
    ],
    answer: "A",
    explanation: "Sperm mature and are stored in the epididymis, then travel through the vas deferens to the urethra during ejaculation.",
    subtopic: "male & female"
  },
  {
    question: "Which gland contributes alkaline fluid and fructose to semen to nourish and activate sperm?",
    options: [
      "A. Testis",
      "B. Seminal vesicle",
      "C. Scrotum",
      "D. Ovary"
    ],
    answer: "B",
    explanation: "The seminal vesicles secrete a fructose-rich alkaline fluid that forms much of the seminal plasma and energizes sperm.",
    subtopic: "male & female"
  },
  {
    question: "The prostate gland in males primarily functions to:",
    options: [
      "A. Produce sperm",
      "B. Add alkaline fluid that neutralizes vaginal acidity",
      "C. Store eggs",
      "D. Carry the fetus"
    ],
    answer: "B",
    explanation: "Prostatic fluid is alkaline and helps neutralize the acidic female tract, improving sperm motility and survival.",
    subtopic: "male & female"
  },
  {
    question: "In the female reproductive system, the ovary is responsible for:",
    options: [
      "A. Nourishing the developing fetus",
      "B. Producing ova and sex hormones (estrogen, progesterone)",
      "C. Transporting sperm to the testis",
      "D. Filtering urine"
    ],
    answer: "B",
    explanation: "Ovaries are the female gonads; they release ova at ovulation and secrete estrogen and progesterone.",
    subtopic: "male & female"
  },
  {
    question: "Fertilization in humans normally takes place in the:",
    options: [
      "A. Uterus",
      "B. Ovary",
      "C. Oviduct (fallopian tube)",
      "D. Vagina"
    ],
    answer: "C",
    explanation: "The ovum is usually fertilized by sperm in the oviduct (fallopian tube) before the zygote moves to the uterus.",
    subtopic: "male & female"
  },
  {
    question: "The lining of the uterus that is shed during menstruation is the:",
    options: [
      "A. Ovary wall",
      "B. Endometrium",
      "C. Cervix",
      "D. Vaginal mucosa"
    ],
    answer: "B",
    explanation: "The endometrium thickens under hormonal influence and is shed as menstrual flow when pregnancy does not occur.",
    subtopic: "male & female"
  },
  {
    question: "Ovulation is the release of an egg from the:",
    options: [
      "A. Uterus",
      "B. Graafian follicle of the ovary",
      "C. Cervix",
      "D. Vagina"
    ],
    answer: "B",
    explanation: "A mature Graafian follicle ruptures and releases a secondary oocyte (ovum) from the ovary during ovulation.",
    subtopic: "male & female"
  },
  {
    question: "The placenta functions to:",
    options: [
      "A. Produce sperm during pregnancy",
      "B. Allow exchange of materials between mother and fetus",
      "C. Store urine for the fetus",
      "D. Prevent ovulation"
    ],
    answer: "B",
    explanation: "The placenta is the organ of exchange for oxygen, nutrients, and wastes between maternal blood and fetal blood.",
    subtopic: "male & female"
  },
  {
    question: "The average human menstrual cycle is about:",
    options: [
      "A. 7 days",
      "B. 28 days",
      "C. 60 days",
      "D. 365 days"
    ],
    answer: "B",
    explanation: "The menstrual cycle averages about 28 days, though it can normally range from 21 to 35 days.",
    subtopic: "male & female"
  },
  {
    question: "The hormone primarily responsible for maintaining the uterine lining during pregnancy is:",
    options: [
      "A. Testosterone",
      "B. Progesterone",
      "C. Adrenaline",
      "D. Insulin"
    ],
    answer: "B",
    explanation: "Progesterone, secreted after ovulation by the corpus luteum and later the placenta, maintains the endometrium.",
    subtopic: "male & female"
  },
  {
    question: "The cervix is the:",
    options: [
      "A. Lower narrow neck of the uterus opening into the vagina",
      "B. Site of sperm production",
      "C. Part of the male urethra",
      "D. Outer covering of the ovary"
    ],
    answer: "A",
    explanation: "The cervix is the narrow lower portion of the uterus that opens into the vagina and dilates during childbirth.",
    subtopic: "male & female"
  },
  // ---------- metamorphosis ----------
  {
    question: "Complete metamorphosis in insects passes through the stages:",
    options: [
      "A. Egg → nymph → adult",
      "B. Egg → larva → pupa → adult",
      "C. Egg → adult",
      "D. Egg → pupa → larva → adult"
    ],
    answer: "B",
    explanation: "Holometabolous insects have four distinct stages: egg, larva, inactive pupa, and adult.",
    subtopic: "metamorphosis"
  },
  {
    question: "Which of the following insects undergoes complete metamorphosis?",
    options: [
      "A. Grasshopper",
      "B. Butterfly",
      "C. Cockroach",
      "D. Dragonfly nymph"
    ],
    answer: "B",
    explanation: "Butterflies pass through egg, caterpillar (larva), chrysalis (pupa), and adult — a complete metamorphosis.",
    subtopic: "metamorphosis"
  },
  {
    question: "In incomplete metamorphosis, the young stage that resembles a small adult is called a:",
    options: [
      "A. Pupa",
      "B. Larva",
      "C. Nymph",
      "D. Tadpole"
    ],
    answer: "C",
    explanation: "Nymphs in incomplete metamorphosis look like wingless adults and grow through successive molts.",
    subtopic: "metamorphosis"
  },
  {
    question: "Which insect undergoes incomplete metamorphosis?",
    options: [
      "A. Mosquito",
      "B. Housefly",
      "C. Grasshopper",
      "D. Butterfly"
    ],
    answer: "C",
    explanation: "Grasshoppers develop through egg, nymph, and adult with no pupal stage (incomplete metamorphosis).",
    subtopic: "metamorphosis"
  },
  {
    question: "The stage in complete metamorphosis during which the insect is inactive and does not feed is the:",
    options: [
      "A. Larva",
      "B. Nymph",
      "C. Pupa",
      "D. Egg"
    ],
    answer: "C",
    explanation: "The pupal stage is a resting, often encased stage in which larval tissues reorganize into the adult form.",
    subtopic: "metamorphosis"
  },
  {
    question: "The larval stage of a butterfly is the:",
    options: [
      "A. Pupa",
      "B. Caterpillar",
      "C. Nymph",
      "D. Imago"
    ],
    answer: "B",
    explanation: "The caterpillar is the feeding larval stage; it later forms a chrysalis (pupa) before emerging as an adult.",
    subtopic: "metamorphosis"
  },
  {
    question: "Metamorphosis of a frog begins with an egg and passes through a(n) ________ stage before becoming an adult.",
    options: [
      "A. Nymph",
      "B. Tadpole",
      "C. Pupa",
      "D. Larva (insect)"
    ],
    answer: "B",
    explanation: "Frog development is egg → tadpole (aquatic larval stage with gills and tail) → adult frog with limbs and lungs.",
    subtopic: "metamorphosis"
  },
  {
    question: "During the tadpole stage of a frog, respiration is mainly by:",
    options: [
      "A. Lungs only",
      "B. Gills and skin",
      "C. Placenta",
      "D. Tracheae"
    ],
    answer: "B",
    explanation: "Tadpoles respire primarily through external gills and their moist skin before lungs develop in the adult.",
    subtopic: "metamorphosis"
  },
  {
    question: "A mosquito undergoes complete metamorphosis; its larval stage lives in water and is called a:",
    options: [
      "A. Wriggler",
      "B. Nymph",
      "C. Grub",
      "D. Maggot"
    ],
    answer: "A",
    explanation: "Mosquito larvae, commonly called wrigglers, live in water before forming pupae (tumblers) and emerging as adults.",
    subtopic: "metamorphosis"
  },
  {
    question: "The main difference between complete and incomplete metamorphosis is the presence of a:",
    options: [
      "A. Larva",
      "B. Pupa",
      "C. Egg",
      "D. Adult"
    ],
    answer: "B",
    explanation: "Complete metamorphosis includes a pupal stage, which is absent in incomplete (gradual) metamorphosis.",
    subtopic: "metamorphosis"
  },
  {
    question: "The adult, sexually mature stage of an insect is called the:",
    options: [
      "A. Imago",
      "B. Nymph",
      "C. Pupa",
      "D. Larva"
    ],
    answer: "A",
    explanation: "Imago is the term for the final, reproductive adult stage of an insect's life cycle.",
    subtopic: "metamorphosis"
  },
  {
    question: "Compared with the adult, an insect larva generally:",
    options: [
      "A. Is reproductively mature",
      "B. Has well-developed wings",
      "C. Feeds and grows but is not reproductively mature",
      "D. Does not molt"
    ],
    answer: "C",
    explanation: "Larvae are growth and feeding stages that are not yet sexually mature; maturity comes in the adult stage.",
    subtopic: "metamorphosis"
  },
  // ---------- flowering plants: pollination/fruits ----------
  {
    question: "The male reproductive part of a flower is the stamen, which consists of:",
    options: [
      "A. Stigma and style",
      "B. Anther and filament",
      "C. Ovary and ovule",
      "D. Sepal and petal"
    ],
    answer: "B",
    explanation: "The stamen is made of the anther (which produces pollen) supported by the filament.",
    subtopic: "flowering plants: pollination/fruits"
  },
  {
    question: "The female reproductive part of a flower is the carpel, made up of:",
    options: [
      "A. Anther, filament",
      "B. Stigma, style, ovary",
      "C. Sepal, petal",
      "D. Receptacle, pedicel"
    ],
    answer: "B",
    explanation: "The carpel (pistil) comprises the stigma (receives pollen), style (tube), and ovary (contains ovules).",
    subtopic: "flowering plants: pollination/fruits"
  },
  {
    question: "Pollination is best defined as the transfer of pollen from anther to:",
    options: [
      "A. Another anther",
      "B. The stigma",
      "C. The ovary directly",
      "D. The root"
    ],
    answer: "B",
    explanation: "Pollination is the transfer of pollen grains to the receptive stigma of a flower.",
    subtopic: "flowering plants: pollination/fruits"
  },
  {
    question: "Self-pollination occurs when pollen from a flower reaches the stigma of:",
    options: [
      "A. A different species",
      "B. The same flower or another flower on the same plant",
      "C. A wind-borne flower only",
      "D. An insect's body"
    ],
    answer: "B",
    explanation: "Self-pollination is transfer within the same plant (same or different flower), promoting uniformity.",
    subtopic: "flowering plants: pollination/fruits"
  },
  {
    question: "Cross-pollination involves the transfer of pollen between:",
    options: [
      "A. The same flower",
      "B. Different flowers of different plants of the same species",
      "C. The anther and filament",
      "D. A flower and its root"
    ],
    answer: "B",
    explanation: "Cross-pollination moves pollen from one plant to another of the same species, increasing genetic variation.",
    subtopic: "flowering plants: pollination/fruits"
  },
  {
    question: "Flowers adapted for wind pollination typically have:",
    options: [
      "A. Large colorful petals and heavy sticky pollen",
      "B. Small inconspicuous petals and light, smooth pollen",
      "C. A strong scent and nectar",
      "D. Closed anthers"
    ],
    answer: "B",
    explanation: "Wind-pollinated flowers produce abundant, lightweight, smooth pollen and lack showy petals or scent.",
    subtopic: "flowering plants: pollination/fruits"
  },
  {
    question: "Insect-pollinated flowers are usually characterized by:",
    options: [
      "A. Hidden anthers and no nectar",
      "B. Bright petals, scent, and sticky pollen",
      "C. Very small dull flowers",
      "D. Dry lightweight pollen only"
    ],
    answer: "B",
    explanation: "To attract insects they have colorful petals, scent, nectar, and often sticky/spiny pollen that clings to visitors.",
    subtopic: "flowering plants: pollination/fruits"
  },
  {
    question: "After fertilization in a flowering plant, the ovary develops into the:",
    options: [
      "A. Seed",
      "B. Fruit",
      "C. Pollen grain",
      "D. Petal"
    ],
    answer: "B",
    explanation: "The ovary wall matures into the fruit, enclosing the developing seeds formed from fertilized ovules.",
    subtopic: "flowering plants: pollination/fruits"
  },
  {
    question: "In a flowering plant, the ovule after fertilization develops into the:",
    options: [
      "A. Fruit",
      "B. Seed",
      "C. Petal",
      "D. Stamen"
    ],
    answer: "B",
    explanation: "Each fertilized ovule becomes a seed; the surrounding ovary becomes the fruit.",
    subtopic: "flowering plants: pollination/fruits"
  },
  {
    question: "A fruit formed only from the ovary is called a:",
    options: [
      "A. False fruit",
      "B. True fruit",
      "C. Aggregate fruit",
      "D. Multiple fruit"
    ],
    answer: "B",
    explanation: "A true fruit develops solely from the ovary; false fruits (e.g., apple) include other floral parts like the receptacle.",
    subtopic: "flowering plants: pollination/fruits"
  },
  {
    question: "An example of a false fruit, in which the fleshy part develops mainly from the receptacle, is the:",
    options: [
      "A. Mango",
      "B. Apple",
      "C. Orange",
      "D. Bean pod"
    ],
    answer: "B",
    explanation: "In the apple, the edible part is largely swollen receptacle tissue; the true fruit (core) is inside.",
    subtopic: "flowering plants: pollination/fruits"
  },
  {
    question: "Lightweight seeds with wings or parachutes (e.g., dandelion) are dispersed mainly by:",
    options: [
      "A. Animals",
      "B. Wind",
      "C. Water",
      "D. Explosion"
    ],
    answer: "B",
    explanation: "Winged or plumose (parachute-like) seeds are adapted for wind dispersal over long distances.",
    subtopic: "flowering plants: pollination/fruits"
  },
  {
    question: "Seeds enclosed in hooks or burrs that attach to animal fur are dispersed by:",
    options: [
      "A. Wind",
      "B. Animals (external attachment)",
      "C. Water only",
      "D. Gravity alone"
    ],
    answer: "B",
    explanation: "Hooked or barbed seeds cling to passing animals and are carried away, a form of epizoochory.",
    subtopic: "flowering plants: pollination/fruits"
  },
  {
    question: "Fertilization in flowering plants is described as double fertilization because:",
    options: [
      "A. Two sperm fertilize two egg cells",
      "B. One sperm fertilizes the egg and another fuses with polar nuclei to form endosperm",
      "C. Pollen has two nuclei that both become embryos",
      "D. Two flowers are fertilized at once"
    ],
    answer: "B",
    explanation: "One sperm forms the zygote; the other fuses with the central cell to form triploid endosperm (food tissue).",
    subtopic: "flowering plants: pollination/fruits"
  },
  // ---------- comparison ----------
  {
    question: "A key difference between sexual and asexual reproduction is that sexual reproduction:",
    options: [
      "A. Involves only one parent",
      "B. Produces genetically identical offspring",
      "C. Involves gametes and produces genetic variation",
      "D. Never occurs in plants"
    ],
    answer: "C",
    explanation: "Sexual reproduction combines gametes from two parents, yielding genetically varied offspring; asexual gives clones.",
    subtopic: "comparison"
  },
  {
    question: "Asexual reproduction is advantageous because it:",
    options: [
      "A. Requires two parents",
      "B. Produces rapid colonization from a single parent without mates",
      "C. Always increases variation",
      "D. Needs flowers"
    ],
    answer: "B",
    explanation: "A single individual can quickly produce many identical offspring, useful for rapid population growth.",
    subtopic: "comparison"
  },
  {
    question: "Vegetative propagation in plants is a form of:",
    options: [
      "A. Sexual reproduction",
      "B. Asexual reproduction using vegetative parts like stems or roots",
      "C. Pollination",
      "D. Fertilization"
    ],
    answer: "B",
    explanation: "Runners, tubers, bulbs, and cuttings are vegetative (asexual) structures that give rise to clones.",
    subtopic: "comparison"
  },
  {
    question: "Compared with the female gamete (egg), the human sperm is:",
    options: [
      "A. Larger and non-motile",
      "B. Smaller, motile, and produced in far greater numbers",
      "C. Stored in the ovary",
      "D. Released at ovulation"
    ],
    answer: "B",
    explanation: "Sperm are tiny, flagellated, and produced in millions; eggs are large, non-motile, and released singly.",
    subtopic: "comparison"
  },
  {
    question: "The human egg (ovum) differs from sperm in that it:",
    options: [
      "A. Is motile with a flagellum",
      "B. Is large, nutrient-rich, and non-motile",
      "C. Is produced in the testis",
      "D. Contains no cytoplasm"
    ],
    answer: "B",
    explanation: "The ovum is large with stored cytoplasm/yolk and is non-motile, relying on cilia and muscles for transport.",
    subtopic: "comparison"
  },
  {
    question: "The main difference between pollination and fertilization is that pollination is the transfer of ________, while fertilization is the fusion of ________.",
    options: [
      "A. Ovules; pollen",
      "B. Pollen to stigma; male and female gametes",
      "C. Seeds; fruits",
      "D. Styles; ovaries"
    ],
    answer: "B",
    explanation: "Pollination moves pollen to the stigma; fertilization is the subsequent union of gametes to form a zygote.",
    subtopic: "comparison"
  },
  {
    question: "Binary fission in Amoeba and budding in yeast are both examples of:",
    options: [
      "A. Sexual reproduction",
      "B. Asexual reproduction",
      "C. Pollination",
      "D. Metamorphosis"
    ],
    answer: "B",
    explanation: "Both are single-parent processes producing genetically identical offspring — forms of asexual reproduction.",
    subtopic: "comparison"
  },
  {
    question: "Sexual reproduction generally produces more genetic variation than asexual reproduction because it:",
    options: [
      "A. Uses only mitosis",
      "B. Combines genetic material from two parents via meiosis and fertilization",
      "C. Produces clones",
      "D. Avoids gametes"
    ],
    answer: "B",
    explanation: "Meiosis shuffles genes and fertilization mixes two genomes, creating unique combinations absent in cloning.",
    subtopic: "comparison"
  },
  {
    question: "An advantage of sexual over asexual reproduction is that variation:",
    options: [
      "A. Makes offspring identical",
      "B. Improves a population's ability to adapt to changing environments",
      "C. Reduces fertility",
      "D. Eliminates the need for gametes"
    ],
    answer: "B",
    explanation: "Genetic diversity gives populations a better chance of surviving environmental change and disease.",
    subtopic: "comparison"
  },
  {
    question: "In comparing male and female human gametes, both:",
    options: [
      "A. Are produced in the same organ",
      "B. Are haploid (contain half the chromosome number)",
      "C. Are non-motile",
      "D. Are released in equal numbers"
    ],
    answer: "B",
    explanation: "Both sperm and ova are haploid (n), carrying half the species chromosome number to restore 2n at fertilization.",
    subtopic: "comparison"
  },
  {
    question: "Which of the following is NOT a form of asexual reproduction in plants?",
    options: [
      "A. Runners (stolons)",
      "B. Tubers",
      "C. Seeds from fertilized ovules",
      "D. Bulbs"
    ],
    answer: "C",
    explanation: "Seeds arise from fertilization (sexual); runners, tubers, and bulbs are vegetative asexual structures.",
    subtopic: "comparison"
  }
];

module.exports = questions;
