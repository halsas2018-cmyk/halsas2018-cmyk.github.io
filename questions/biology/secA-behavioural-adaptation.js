// biology — Social Animals (Behavioural Adaptation)
const questions = [
  {
    question: "Which term describes the highest level of social organization shown by bees, ants, termites and some wasps, involving cooperative brood care, overlapping generations and a reproductive division of labour?",
    options: [
      "A. Solitary behaviour",
      "B. Gregariousness",
      "C. Eusociality",
      "D. Territoriality"
    ],
    answer: "C",
    explanation: "Eusociality is defined by cooperative care of young, overlapping adult generations, and a division of the colony into reproductive and non-reproductive castes.",
    subtopic: "Social animals"
  },
  {
    question: "In a honeybee colony, which caste is solely responsible for laying all the fertilized eggs?",
    options: [
      "A. Worker",
      "B. Drone",
      "C. Soldier",
      "D. Queen"
    ],
    answer: "D",
    explanation: "The queen is the only fertile female in the hive and lays the eggs; workers and drones do not lay fertilized eggs.",
    subtopic: "Social animals"
  },
  {
    question: "Male honeybees are called drones. What is their principal biological role in the colony?",
    options: [
      "A. To gather nectar and pollen",
      "B. To mate with the queen during her nuptial flight",
      "C. To defend the hive with their stings",
      "D. To secrete royal jelly"
    ],
    answer: "B",
    explanation: "Drones are haploid males whose function is to mate with a virgin queen; they die after mating and do no foraging or defence.",
    subtopic: "Social animals"
  },
  {
    question: "Worker honeybees are best described as:",
    options: [
      "A. Fertile males that reproduce",
      "B. Sterile females that perform nest duties",
      "C. The reproductive king and queen",
      "D. Immature larvae awaiting metamorphosis"
    ],
    answer: "B",
    explanation: "Workers are sterile female bees that forage, nurse the brood, build comb and guard the hive.",
    subtopic: "Social animals"
  },
  {
    question: "A honeybee performs a 'waggle dance' inside the hive. What information does this dance convey to other workers?",
    options: [
      "A. The location of the queen",
      "B. The direction and distance of a food source",
      "C. The age of the forager",
      "D. The temperature of the hive"
    ],
    answer: "B",
    explanation: "The waggle dance (studied by Karl von Frisch) encodes both the direction (relative to the sun) and the distance to a profitable food source.",
    subtopic: "Social animals"
  },
  {
    question: "In honeybee communication, a 'round dance' is used when the food source is:",
    options: [
      "A. Far away and requires a compass bearing",
      "B. Very close to the hive (within a few metres)",
      "C. Underground",
      "D. On the opposite side of the sun"
    ],
    answer: "B",
    explanation: "A round dance signals that food is close to the hive, whereas the waggle dance is used for distant sources.",
    subtopic: "Social animals"
  },
  {
    question: "The chemical substances used by social insects such as ants and bees to communicate and to lay trails are called:",
    options: [
      "A. Hormones",
      "B. Enzymes",
      "C. Pheromones",
      "D. Neurotransmitters"
    ],
    answer: "C",
    explanation: "Pheromones are secreted chemical signals that trigger a social response such as trail-following, alarm or queen recognition.",
    subtopic: "Social animals"
  },
  {
    question: "The 'queen substance' produced by a honeybee queen is a pheromone that:",
    options: [
      "A. Attracts drones from other colonies",
      "B. Inhibits the development of ovaries in worker bees",
      "C. Causes soldiers to attack intruders",
      "D. Digests cellulose in the gut"
    ],
    answer: "B",
    explanation: "The queen mandibular pheromone (queen substance) suppresses ovary development in workers and unifies the colony.",
    subtopic: "Social animals"
  },
  {
    question: "In a typical termite colony, which caste possesses the largest mandibles and is specialised for defending the colony?",
    options: [
      "A. Queen",
      "B. Worker",
      "C. Soldier",
      "D. King"
    ],
    answer: "C",
    explanation: "Soldier termites have enlarged heads and mandibles (or snouts in nasute soldiers) used for colony defence.",
    subtopic: "Social animals"
  },
  {
    question: "Termites are able to digest wood cellulose because of a mutualistic relationship with:",
    options: [
      "A. Bacteria in their exoskeleton",
      "B. Protozoa and bacteria in their hindgut",
      "C. Fungi growing on their wings",
      "D. Viruses in their saliva"
    ],
    answer: "B",
    explanation: "Flagellate protozoa (and symbiotic bacteria) in the termite gut produce enzymes that break down cellulose the termite cannot digest alone.",
    subtopic: "Social animals"
  },
  {
    question: "In a termite colony, the king's main function is to:",
    options: [
      "A. Forage for food like a worker",
      "B. Mate repeatedly with the queen and provide sperm throughout her life",
      "C. Defend the nest with large mandibles",
      "D. Lay the eggs while the queen guards"
    ],
    answer: "B",
    explanation: "Unlike honeybee drones, a termite king survives mating and continues to mate with the queen, who remains physogastric and egg-laying.",
    subtopic: "Social animals"
  },
  {
    question: "A termite queen's greatly enlarged abdomen is due to hypertrophy of the ovaries, a condition called:",
    options: [
      "A. Metamorphosis",
      "B. Physogastry",
      "C. Ecdysis",
      "D. Parthenogenesis"
    ],
    answer: "B",
    explanation: "Physogastry is the extreme distension of the queen's abdomen to accommodate egg-producing ovaries.",
    subtopic: "Social animals"
  },
  {
    question: "Which of the following is NOT a caste normally found in a termite colony?",
    options: [
      "A. Queen",
      "B. Worker",
      "C. Soldier",
      "D. Photoreceptor"
    ],
    answer: "D",
    explanation: "Photoreceptor is a light-sensing cell, not a social caste; the castes are reproductives (queen/king), workers and soldiers.",
    subtopic: "Social animals"
  },
  {
    question: "Ants that forage for food commonly mark a path back to the nest using:",
    options: [
      "A. Visual landmarks only",
      "B. A pheromone trail",
      "C. Audible clicks",
      "D. Electric fields"
    ],
    answer: "B",
    explanation: "Foraging ants deposit trail pheromones that recruits follow to reach a discovered food source.",
    subtopic: "Social animals"
  },
  {
    question: "In many ant species, individuals with enlarged heads and jaw-like mandibles that protect the nest are called:",
    options: [
      "A. Drones",
      "B. Major workers or soldier ants",
      "C. Kings",
      "D. Reproductives"
    ],
    answer: "B",
    explanation: "Soldier ants (major workers) have large heads and mandibles for defence and sometimes for crushing seeds.",
    subtopic: "Social animals"
  },
  {
    question: "The phenomenon where sterile worker insects help raise the offspring of the queen, reducing their own direct reproduction, is an example of:",
    options: [
      "A. Competition",
      "B. Altruism",
      "C. Parasitism",
      "D. Commensalism"
    ],
    answer: "B",
    explanation: "Altruism is behaviour that benefits another at a cost to the actor's own reproduction, as seen in sterile workers aiding the queen.",
    subtopic: "Social animals"
  },
  {
    question: "In honeybees and ants, males develop from unfertilized eggs and are haploid, while females develop from fertilized eggs and are diploid. This sex-determination system is called:",
    options: [
      "A. XY system",
      "B. ZW system",
      "C. Haplodiploidy",
      "D. Sequential hermaphroditism"
    ],
    answer: "C",
    explanation: "Haplodiploidy, found in Hymenoptera, makes sisters more closely related to each other (0.75) than to their own offspring, helping explain altruism.",
    subtopic: "Social animals"
  },
  {
    question: "When a honeybee colony becomes overcrowded or the old queen fails, the colony divides and a portion leaves with a new queen. This process is called:",
    options: [
      "A. Metamorphosis",
      "B. Swarming",
      "C. Hibernation",
      "D. Moulting"
    ],
    answer: "B",
    explanation: "Swarming is the natural means by which honeybee colonies reproduce and establish new colonies.",
    subtopic: "Social animals"
  },
  {
    question: "Royal jelly is a nutritious secretion fed to:",
    options: [
      "A. All larvae, but only those destined to be queens receive it throughout development",
      "B. Only adult drones",
      "C. Only soldier termites",
      "D. The king exclusively"
    ],
    answer: "A",
    explanation: "All bee larvae initially receive royal jelly, but only queen larvae continue to receive it, triggering their development into queens.",
    subtopic: "Social animals"
  },
  {
    question: "A worker honeybee's barbed sting is used for defence, but stinging a mammal usually results in the bee's death because:",
    options: [
      "A. The sting is poisoned by the victim",
      "B. The barbs anchor in skin and the sting apparatus is ripped from the bee",
      "C. The bee forgets how to return to the hive",
      "D. The venom becomes inert"
    ],
    answer: "B",
    explanation: "The barbed sting lodges in mammalian skin and tears away from the bee, fatally wounding it.",
    subtopic: "Social animals"
  },
  {
    question: "Which of the following structures is a drone honeybee LACKING?",
    options: [
      "A. Compound eyes",
      "B. Wings",
      "C. A sting and pollen baskets",
      "D. Antennae"
    ],
    answer: "C",
    explanation: "Drones are stingless and lack pollen baskets (corbiculae) and wax glands; only workers have these.",
    subtopic: "Social animals"
  },
  {
    question: "The direction encoded in a honeybee waggle dance is measured relative to:",
    options: [
      "A. Magnetic north",
      "B. The position of the sun",
      "C. The queen's location",
      "D. The wind direction"
    ],
    answer: "B",
    explanation: "The angle of the waggle run relative to vertical on the comb corresponds to the angle of the food source relative to the sun.",
    subtopic: "Social animals"
  },
  {
    question: "Termites were historically called 'white ants' but are more closely related to:",
    options: [
      "A. True ants (Hymenoptera)",
      "B. Cockroaches (Blattodea)",
      "C. Spiders",
      "D. Earthworms"
    ],
    answer: "B",
    explanation: "Modern classification places termites within Blattodea, making them social cockroaches rather than close relatives of ants.",
    subtopic: "Social animals"
  },
  {
    question: "Alarm pheromones released by injured ants or bees typically cause nest-mates to:",
    options: [
      "A. Become dormant",
      "B. Aggregate and show defensive or aggressive behaviour",
      "C. Abandon the nest permanently",
      "D. Begin mating"
    ],
    answer: "B",
    explanation: "Alarm pheromones recruit and agitate nearby colony members to defend against the threat.",
    subtopic: "Social animals"
  },
  {
    question: "The cooperative rearing of young by non-parent individuals is a key feature of:",
    options: [
      "A. Eusocial colonies",
      "B. Parasitic relationships",
      "C. Predatory solitary hunters",
      "D. Saprophytic fungi"
    ],
    answer: "A",
    explanation: "Cooperative (communal) brood care by workers is one of the three defining traits of eusociality.",
    subtopic: "Social animals"
  },
  {
    question: "In a honeybee colony, the stored mixture of pollen and nectar used to feed larvae is called:",
    options: [
      "A. Royal jelly",
      "B. Bee bread",
      "C. Propolis",
      "D. Wax"
    ],
    answer: "B",
    explanation: "Bee bread is fermented pollen mixed with honey and saliva that serves as protein food for the brood.",
    subtopic: "Social animals"
  },
  {
    question: "Propolis collected by bees is used to:",
    options: [
      "A. Build the wax comb",
      "B. Seal cracks and sterilize the hive",
      "C. Feed the queen",
      "D. Attract drones"
    ],
    answer: "B",
    explanation: "Propolis ('bee glue') is a resinous mixture used to seal gaps and provide antimicrobial protection in the hive.",
    subtopic: "Social animals"
  },
  {
    question: "A colony of social insects normally has a single reproductive female. Such a colony is described as:",
    options: [
      "A. Polygyne",
      "B. Monogynous",
      "C. Haploid",
      "D. Asexual"
    ],
    answer: "B",
    explanation: "Monogyny means one queen per colony; polygyne would mean multiple queens.",
    subtopic: "Social animals"
  },
  {
    question: "The division of labour in an insect colony, where different individuals perform different tasks such as foraging, nursing or defence, is termed:",
    options: [
      "A. Cell differentiation",
      "B. Caste polyethism",
      "C. Parthenogenesis",
      "D. Metamorphosis"
    ],
    answer: "B",
    explanation: "Polyethism is the behavioural division of labour among members of the same caste (e.g., age-based task switching in workers).",
    subtopic: "Social animals"
  },
  {
    question: "In some termite species, soldier castes called 'nasutes' defend the colony by:",
    options: [
      "A. Biting with huge mandibles",
      "B. Ejecting a sticky chemical from a snout-like rostrum",
      "C. Stinging like bees",
      "D. Releasing heat"
    ],
    answer: "B",
    explanation: "Nasute soldiers have a horn-like rostrum that sprays a defensive glue-like chemical at enemies.",
    subtopic: "Social animals"
  },
  {
    question: "Which of these is an example of tactile (touch) communication in social insects?",
    options: [
      "A. Waggle dance body contact",
      "B. Photosynthesis",
      "C. Electroreception",
      "D. Echo-location"
    ],
    answer: "A",
    explanation: "Bees transferring dance information through physical contact on the comb is a form of tactile communication.",
    subtopic: "Social animals"
  },
  {
    question: "A major evolutionary advantage of social living in insects is:",
    options: [
      "A. Increased individual size",
      "B. Improved defence, foraging efficiency and brood survival",
      "C. Elimination of the need to reproduce",
      "D. Ability to fly longer distances"
    ],
    answer: "B",
    explanation: "Colonies benefit from cooperative defence, efficient foraging and communal care, raising overall survival.",
    subtopic: "Social animals"
  },
  {
    question: "Parthenogenesis, the development of an embryo from an unfertilized egg, is the normal means by which ________ are produced in honeybees.",
    options: [
      "A. Queens",
      "B. Workers",
      "C. Drones",
      "D. Soldiers"
    ],
    answer: "C",
    explanation: "Drones are haploid because they arise from unfertilized eggs by parthenogenesis.",
    subtopic: "Social animals"
  },
  {
    question: "Which caste in a honeybee colony typically leaves the hive to collect nectar and pollen?",
    options: [
      "A. Queen",
      "B. Drone",
      "C. Worker",
      "D. King"
    ],
    answer: "C",
    explanation: "Foraging is performed by worker bees, which gather nectar, pollen, water and propolis.",
    subtopic: "Social animals"
  },
  {
    question: "The organised above-ground structure built by some termite species that helps regulate temperature and gas exchange is called a:",
    options: [
      "A. Cocoon",
      "B. Termitarium or mound",
      "C. Web",
      "D. Burrow of solitary type"
    ],
    answer: "B",
    explanation: "Termite mounds (termitaria) are architecturally complex and help control internal climate.",
    subtopic: "Social animals"
  },
  {
    question: "In eusocial Hymenoptera, overlapping generations means that:",
    options: [
      "A. Only one generation lives at a time",
      "B. Parents and their offspring live together in the colony",
      "C. Generations never meet",
      "D. All individuals die each winter"
    ],
    answer: "B",
    explanation: "Overlapping generations — where offspring assist their still-living parents — is a defining feature of eusociality.",
    subtopic: "Social animals"
  },
  {
    question: "A pheromone that marks a foraging route so other ants can follow it is specifically a:",
    options: [
      "A. Trail pheromone",
      "B. Sex pheromone",
      "C. Digestive enzyme",
      "D. Growth hormone"
    ],
    answer: "A",
    explanation: "Trail pheromones laid along a path guide recruits from the nest to a food source and back.",
    subtopic: "Social animals"
  },
  {
    question: "What distinguishes a queen bee larva from a worker bee larva in honeybee rearing?",
    options: [
      "A. Queen larva is fed only bee bread",
      "B. Queen larva is fed royal jelly continuously",
      "C. Worker larva receives more royal jelly",
      "D. They are genetically different species"
    ],
    answer: "B",
    explanation: "The persistent feeding of royal jelly to a larva, not genetics, determines its development into a queen.",
    subtopic: "Social animals"
  },
  {
    question: "Soldier termites differ from worker termites mainly in having:",
    options: [
      "A. Wings and the ability to fly",
      "B. Enlarged heads and mandibles for defence",
      "C. The ability to lay eggs",
      "D. Photosynthetic tissue"
    ],
    answer: "B",
    explanation: "Soldiers are morphologically specialized for defence with big heads and jaws, unlike the laboring workers.",
    subtopic: "Social animals"
  },
  {
    question: "Which of the following best explains why worker bees do not usually reproduce?",
    options: [
      "A. They are male",
      "B. Their ovaries are suppressed by queen pheromone and they are sterile females",
      "C. They lack wings",
      "D. They cannot digest pollen"
    ],
    answer: "B",
    explanation: "Workers are sterile females whose reproduction is inhibited by the queen's pheromones and by being unmated.",
    subtopic: "Social animals"
  },
  {
    question: "A honeybee colony is commonly referred to as a:",
    options: [
      "A. School",
      "B. Hive",
      "C. Pack",
      "D. Flock"
    ],
    answer: "B",
    explanation: "A bee colony and its physical dwelling are both commonly called a hive.",
    subtopic: "Social animals"
  },
  {
    question: "In an ant colony, the individual that establishes a new nest after mating is the:",
    options: [
      "A. Worker",
      "B. Queen (foundress)",
      "C. Drone",
      "D. Soldier"
    ],
    answer: "B",
    explanation: "A mated female (queen) leaves to found a new colony, initially rearing the first workers herself.",
    subtopic: "Social animals"
  },
  {
    question: "The study of animal communication including the bee dance was advanced by the Nobel laureate:",
    options: [
      "A. Charles Darwin",
      "B. Karl von Frisch",
      "C. Jean-Baptiste Lamarck",
      "D. Gregor Mendel"
    ],
    answer: "B",
    explanation: "Karl von Frisch deciphered the honeybee waggle and round dances, contributing to ethology.",
    subtopic: "Social animals"
  },
  {
    question: "Recruitment communication in social insects serves to:",
    options: [
      "A. Drive individuals away from food",
      "B. Mobilize nest-mates to a profitable resource or threat",
      "C. Prevent mating",
      "D. Stop egg-laying"
    ],
    answer: "B",
    explanation: "Recruitment (via dances or trail pheromones) directs colony members to food, new nest sites or defence.",
    subtopic: "Social animals"
  },
  {
    question: "Which of the following is a social wasp characteristic shared with bees?",
    options: [
      "A. A caste system with queen and workers",
      "B. Production of royal jelly for queens only",
      "C. Parthenogenetic drones",
      "D. Cellulose-digesting protozoa"
    ],
    answer: "A",
    explanation: "Social wasps (e.g., yellowjackets) are eusocial with a queen and sterile worker caste, like bees.",
    subtopic: "Social animals"
  },
  {
    question: "The presence of sterile worker castes in social insects is best explained biologically by:",
    options: [
      "A. Kin selection and inclusive fitness",
      "B. Lack of food",
      "C. Random mutation only",
      "D. Absence of a queen"
    ],
    answer: "A",
    explanation: "Kin selection favours helping relatives (the queen's offspring), raising the worker's inclusive fitness despite not breeding.",
    subtopic: "Social animals"
  },
  {
    question: "Termite colonies are founded by a:",
    options: [
      "A. Lone worker",
      "B. King and queen pair (dealates) that shed their wings",
      "C. Drone alone",
      "D. Soldier"
    ],
    answer: "B",
    explanation: "A mated royal pair (king and queen) that have shed their wings founds the colony after the nuptial flight.",
    subtopic: "Social animals"
  },
  {
    question: "Compared with solitary insects, eusocial insects show greater:",
    options: [
      "A. Individual reproductive output per insect",
      "B. Colony-level efficiency and survival through cooperation",
      "C. Need to avoid all contact",
      "D. Dependence on wind for mating"
    ],
    answer: "B",
    explanation: "Cooperation among specialized castes boosts the colony's overall efficiency and survival.",
    subtopic: "Social animals"
  },
  {
    question: "In honeybees, the transfer of food mouth-to-mouth from one bee to another, spreading pheromones and information, is called:",
    options: [
      "A. Trophallaxis",
      "B. Metamorphosis",
      "C. Ecdysis",
      "D. Pollination"
    ],
    answer: "A",
    explanation: "Trophallaxis is the exchange of liquid food (and chemical signals) between colony members.",
    subtopic: "Social animals"
  },
  {
    question: "The main benefit of a pheromone 'footprint' trail laid by ants is that it:",
    options: [
      "A. Traps predators",
      "B. Allows efficient collective foraging and resource exploitation",
      "C. Cools the nest",
      "D. Enables flight"
    ],
    answer: "B",
    explanation: "Trail pheromones let many workers exploit a food source efficiently by following a common route.",
    subtopic: "Social animals"
  }
];

module.exports = questions;
