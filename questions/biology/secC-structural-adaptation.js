// biology — Structural Adaptation
const questions = [
  {
    question: "A structural adaptation refers to a physical?",
    options: [
      "A. feature of an organism's body",
      "B. behaviour",
      "C. metabolic rate",
      "D. learned response"
    ],
    answer: "A",
    explanation: "Structural adaptations are body parts shaped by evolution for function.",
    subtopic: "Adaptive Features"
  },
  {
    question: "The spines of a cactus are modified?",
    options: [
      "A. leaves",
      "B. roots",
      "C. stems",
      "D. flowers"
    ],
    answer: "A",
    explanation: "Cactus spines are reduced leaves that reduce water loss and deter herbivores.",
    subtopic: "Plant Structural Adaptation"
  },
  {
    question: "The thick waxy cuticle on desert plant leaves helps?",
    options: [
      "A. reduce water loss",
      "B. absorb more water",
      "C. photosynthesize faster",
      "D. attract pollinators"
    ],
    answer: "A",
    explanation: "The cuticle is a waterproof layer limiting transpiration.",
    subtopic: "Plant Structural Adaptation"
  },
  {
    question: "Succulent stems in cacti mainly store?",
    options: [
      "A. water",
      "B. sugar",
      "C. protein",
      "D. air"
    ],
    answer: "A",
    explanation: "Fleshy stems hold water for dry periods.",
    subtopic: "Plant Structural Adaptation"
  },
  {
    question: "Broad, thin leaves of shade plants help them?",
    options: [
      "A. capture more light",
      "B. lose water",
      "C. resist wind",
      "D. store food"
    ],
    answer: "A",
    explanation: "Large surface area captures scarce light on the forest floor.",
    subtopic: "Plant Structural Adaptation"
  },
  {
    question: "Needle-like leaves of conifers reduce?",
    options: [
      "A. water loss",
      "B. photosynthesis",
      "C. height growth",
      "D. root growth"
    ],
    answer: "A",
    explanation: "Small needles with thick cuticle limit transpiration in cold climates.",
    subtopic: "Plant Structural Adaptation"
  },
  {
    question: "Aerial roots of epiphytes help them?",
    options: [
      "A. absorb moisture from the air",
      "B. anchor in soil",
      "C. store food",
      "D. photosynthesize underground"
    ],
    answer: "A",
    explanation: "Epiphytes grow on other plants and take up water from humid air.",
    subtopic: "Plant Structural Adaptation"
  },
  {
    question: "The streamlined body of a fish reduces?",
    options: [
      "A. water resistance",
      "B. swimming speed",
      "C. breathing",
      "D. feeding"
    ],
    answer: "A",
    explanation: "A streamlined shape lowers drag as the fish moves through water.",
    subtopic: "Animal Structural Adaptation"
  },
  {
    question: "Webbed feet in ducks are an adaptation for?",
    options: [
      "A. swimming",
      "B. climbing",
      "C. digging",
      "D. flying"
    ],
    answer: "A",
    explanation: "Webbing increases surface area to push against water.",
    subtopic: "Animal Structural Adaptation"
  },
  {
    question: "The long neck of a giraffe is an adaptation for?",
    options: [
      "A. reaching high foliage",
      "B. swimming",
      "C. digging",
      "D. hearing"
    ],
    answer: "A",
    explanation: "A long neck lets giraffes browse leaves other herbivores cannot reach.",
    subtopic: "Animal Structural Adaptation"
  },
  {
    question: "A bird's hollow bones are an adaptation for?",
    options: [
      "A. heavy lifting",
      "B. flight (light weight)",
      "C. diving",
      "D. running"
    ],
    answer: "B",
    explanation: "Pneumatic bones reduce body mass for flight.",
    subtopic: "Animal Structural Adaptation"
  },
  {
    question: "Bird wings are modified?",
    options: [
      "A. hindlimbs",
      "B. forelimbs",
      "C. tails",
      "D. beaks"
    ],
    answer: "B",
    explanation: "The wing is a forelimb adapted for flight.",
    subtopic: "Animal Structural Adaptation"
  },
  {
    question: "The deep tap root of a desert plant reaches?",
    options: [
      "A. surface water only",
      "B. deep groundwater",
      "C. the air",
      "D. light"
    ],
    answer: "B",
    explanation: "Long tap roots access water far below the surface.",
    subtopic: "Plant Structural Adaptation"
  },
  {
    question: "Plant thorns primarily protect against?",
    options: [
      "A. herbivores",
      "B. drought",
      "C. floods",
      "D. cold"
    ],
    answer: "A",
    explanation: "Thorns are physical defences deterring plant-eating animals.",
    subtopic: "Plant Structural Adaptation"
  },
  {
    question: "A frog's eyes on top of its head allow it to?",
    options: [
      "A. see above the water while submerged",
      "B. see behind itself",
      "C. hear better",
      "D. smell prey"
    ],
    answer: "A",
    explanation: "Positioned dorsally, the eyes survey the surface while the body is hidden.",
    subtopic: "Animal Structural Adaptation"
  },
  {
    question: "A chameleon's grasping feet are adapted for?",
    options: [
      "A. climbing",
      "B. swimming",
      "C. digging",
      "D. flying"
    ],
    answer: "A",
    explanation: "Zygodactyl feet grip branches securely.",
    subtopic: "Animal Structural Adaptation"
  },
  {
    question: "The shape of a bird's beak is closely related to its?",
    options: [
      "A. feeding habit",
      "B. feather colour",
      "C. song",
      "D. nest size"
    ],
    answer: "A",
    explanation: "Beak form reflects diet (e.g. hooked for meat, slender for nectar).",
    subtopic: "Animal Structural Adaptation"
  },
  {
    question: "The large ears of the fennec fox help it?",
    options: [
      "A. dissipate heat",
      "B. hear underwater",
      "C. store fat",
      "D. smell prey"
    ],
    answer: "A",
    explanation: "Big ears radiate excess heat in the desert.",
    subtopic: "Animal Structural Adaptation"
  },
  {
    question: "A camel's hump mainly stores?",
    options: [
      "A. fat (not water)",
      "B. water",
      "C. blood",
      "D. air"
    ],
    answer: "A",
    explanation: "Fat reserves are metabolized for energy and metabolic water.",
    subtopic: "Animal Structural Adaptation"
  },
  {
    question: "The flattened body of a flounder helps it?",
    options: [
      "A. live on the seabed and stay camouflaged",
      "B. fly",
      "C. climb",
      "D. dig burrows in soil"
    ],
    answer: "A",
    explanation: "A flat body hugs the bottom, avoiding detection by predators.",
    subtopic: "Animal Structural Adaptation"
  },
  {
    question: "A woodpecker's strong, chisel-like beak is adapted for?",
    options: [
      "A. drilling wood for insects",
      "B. swimming",
      "C. singing loudly",
      "D. digging soil"
    ],
    answer: "A",
    explanation: "The beak bores into bark to reach beetle larvae.",
    subtopic: "Animal Structural Adaptation"
  },
  {
    question: "The sticky toe pads of a gecko enable it to?",
    options: [
      "A. climb smooth surfaces",
      "B. swim",
      "C. dig",
      "D. fly"
    ],
    answer: "A",
    explanation: "Microscopic setae create adhesion on vertical surfaces.",
    subtopic: "Animal Structural Adaptation"
  },
  {
    question: "Tendrils in plants are modified stems or leaves used for?",
    options: [
      "A. climbing",
      "B. storage",
      "C. photosynthesis only",
      "D. protection"
    ],
    answer: "A",
    explanation: "Tendrils coil around supports to lift the plant toward light.",
    subtopic: "Plant Structural Adaptation"
  },
  {
    question: "The long proboscis of a butterfly is used for?",
    options: [
      "A. sucking nectar",
      "B. walking",
      "C. hearing",
      "D. defence"
    ],
    answer: "A",
    explanation: "The coiled tube reaches nectar deep in flowers.",
    subtopic: "Animal Structural Adaptation"
  },
  {
    question: "Bulb structures in plants (e.g. onion) store?",
    options: [
      "A. food and survive drought",
      "B. water only",
      "C. air",
      "D. light"
    ],
    answer: "A",
    explanation: "Bulbs store nutrients underground for regrowth.",
    subtopic: "Plant Structural Adaptation"
  },
  {
    question: "The sharp quills of a porcupine are for?",
    options: [
      "A. defence",
      "B. swimming",
      "C. flying",
      "D. climbing"
    ],
    answer: "A",
    explanation: "Quills deter predators when raised.",
    subtopic: "Animal Structural Adaptation"
  },
  {
    question: "A penguin's flippers are adapted for?",
    options: [
      "A. swimming",
      "B. flying",
      "C. digging",
      "D. climbing trees"
    ],
    answer: "A",
    explanation: "Flippers act as paddles for underwater propulsion.",
    subtopic: "Animal Structural Adaptation"
  },
  {
    question: "Root nodules on legume plants house?",
    options: [
      "A. nitrogen-fixing bacteria",
      "B. water",
      "C. sugar",
      "D. air pockets"
    ],
    answer: "A",
    explanation: "Nodules contain Rhizobium that fix atmospheric nitrogen.",
    subtopic: "Plant Structural Adaptation"
  },
  {
    question: "Brightly coloured flower petals mainly?",
    options: [
      "A. attract pollinators",
      "B. deter herbivores only",
      "C. perform photosynthesis",
      "D. store water"
    ],
    answer: "A",
    explanation: "Colour and scent draw pollinating insects and birds.",
    subtopic: "Plant Structural Adaptation"
  },
  {
    question: "The hard shell of a tortoise is for?",
    options: [
      "A. protection",
      "B. swimming",
      "C. flying",
      "D. digestion"
    ],
    answer: "A",
    explanation: "The carapace shields against predators.",
    subtopic: "Animal Structural Adaptation"
  },
  {
    question: "A snake's forked tongue helps it?",
    options: [
      "A. collect scent particles",
      "B. taste food only",
      "C. hear",
      "D. see in the dark"
    ],
    answer: "A",
    explanation: "The tongue picks up chemical cues delivered to the Jacobson's organ.",
    subtopic: "Animal Structural Adaptation"
  },
  {
    question: "Compound eyes of insects provide?",
    options: [
      "A. a wide field of view",
      "B. telescopic vision",
      "C. night-only vision",
      "D. colour blindness"
    ],
    answer: "A",
    explanation: "Many ommatidia give a broad, motion-sensitive view.",
    subtopic: "Animal Structural Adaptation"
  },
  {
    question: "An elephant's trunk is a modified?",
    options: [
      "A. nose and upper lip",
      "B. ear",
      "C. tail",
      "D. leg"
    ],
    answer: "A",
    explanation: "The trunk is an elongated nose/lip used for breathing, grasping and drinking.",
    subtopic: "Animal Structural Adaptation"
  },
  {
    question: "A whale's blowhole is located on top of the head so it can?",
    options: [
      "A. breathe easily at the surface",
      "B. eat",
      "C. see",
      "D. hear"
    ],
    answer: "A",
    explanation: "A dorsal blowhole lets the whale surface briefly to breathe.",
    subtopic: "Animal Structural Adaptation"
  },
  {
    question: "The fleshy storage leaves of aloe store mainly?",
    options: [
      "A. water",
      "B. sugar",
      "C. protein",
      "D. fat"
    ],
    answer: "A",
    explanation: "Succulent leaves retain water for arid conditions.",
    subtopic: "Plant Structural Adaptation"
  },
  {
    question: "The tendril of a pea plant is a modified?",
    options: [
      "A. stem",
      "B. root",
      "C. leaf",
      "D. flower"
    ],
    answer: "C",
    explanation: "In peas the tendril is a modified leaf for climbing.",
    subtopic: "Plant Structural Adaptation"
  },
  {
    question: "A rabbit's large ears help it?",
    options: [
      "A. detect predators and lose heat",
      "B. swim",
      "C. dig",
      "D. fly"
    ],
    answer: "A",
    explanation: "Big ears both hear well and radiate heat.",
    subtopic: "Animal Structural Adaptation"
  },
  {
    question: "Feathers on a bird provide?",
    options: [
      "A. insulation and enable flight",
      "B. only colour",
      "C. extra weight",
      "D. nothing useful"
    ],
    answer: "A",
    explanation: "Feathers trap heat and form the flight surface of wings.",
    subtopic: "Animal Structural Adaptation"
  },
  {
    question: "The opposable thumb of primates aids in?",
    options: [
      "A. grasping objects",
      "B. swimming",
      "C. flying",
      "D. digging"
    ],
    answer: "A",
    explanation: "Opposability allows precise grip and tool use.",
    subtopic: "Animal Structural Adaptation"
  },
  {
    question: "Fish gill filaments increase?",
    options: [
      "A. surface area for gas exchange",
      "B. body weight",
      "C. swimming speed",
      "D. body colour"
    ],
    answer: "A",
    explanation: "Many filaments and lamellae maximize oxygen uptake.",
    subtopic: "Animal Structural Adaptation"
  },
  {
    question: "A cactus stem is green because it performs?",
    options: [
      "A. photosynthesis",
      "B. only storage",
      "C. reproduction",
      "D. defence only"
    ],
    answer: "A",
    explanation: "With reduced leaves, the stem carries out photosynthesis.",
    subtopic: "Plant Structural Adaptation"
  },
  {
    question: "The colourful bracts of a poinsettia are modified?",
    options: [
      "A. leaves",
      "B. petals",
      "C. roots",
      "D. stems"
    ],
    answer: "A",
    explanation: "Bracts are leaf-like structures that attract pollinators.",
    subtopic: "Plant Structural Adaptation"
  },
  {
    question: "The long sticky tongue of an anteater is adapted for?",
    options: [
      "A. catching ants and termites",
      "B. drinking water",
      "C. climbing",
      "D. hearing"
    ],
    answer: "A",
    explanation: "A lengthy tongue probes nests for insects.",
    subtopic: "Animal Structural Adaptation"
  },
  {
    question: "An eagle's sharp, curved talons are for?",
    options: [
      "A. catching and gripping prey",
      "B. swimming",
      "C. singing",
      "D. digging"
    ],
    answer: "A",
    explanation: "Strong claws seize and hold captured animals.",
    subtopic: "Animal Structural Adaptation"
  },
  {
    question: "The body colour of an animal matching its surroundings is a?",
    options: [
      "A. structural/colour adaptation",
      "B. purely behavioural trait",
      "C. physiological disorder",
      "D. learned habit"
    ],
    answer: "A",
    explanation: "Colour pattern is a physical (structural) feature aiding camouflage.",
    subtopic: "Adaptive Features"
  },
  {
    question: "Pine cone scales protect the?",
    options: [
      "A. seeds",
      "B. roots",
      "C. leaves",
      "D. flowers"
    ],
    answer: "A",
    explanation: "Scales shield developing seeds from weather and predators.",
    subtopic: "Plant Structural Adaptation"
  },
  {
    question: "The pulvinus at the base of mimosa leaves enables?",
    options: [
      "A. rapid leaf folding",
      "B. photosynthesis",
      "C. water storage",
      "D. flowering"
    ],
    answer: "A",
    explanation: "Turgor changes in the pulvinus cause quick leaf movement.",
    subtopic: "Plant Structural Adaptation"
  },
  {
    question: "The quills of a hedgehog are modified?",
    options: [
      "A. hairs",
      "B. feathers",
      "C. scales",
      "D. nails"
    ],
    answer: "A",
    explanation: "Spines are thickened, hardened hair for defence.",
    subtopic: "Animal Structural Adaptation"
  },
  {
    question: "The sori on the underside of fern fronds are for?",
    options: [
      "A. producing spores",
      "B. photosynthesis",
      "C. water storage",
      "D. defence"
    ],
    answer: "A",
    explanation: "Sori contain sporangia that release spores.",
    subtopic: "Plant Structural Adaptation"
  },
  {
    question: "The rhizome of a fern is an underground?",
    options: [
      "A. stem",
      "B. root",
      "C. leaf",
      "D. flower"
    ],
    answer: "A",
    explanation: "Rhizomes are horizontal stems that store food and spread the plant.",
    subtopic: "Plant Structural Adaptation"
  },
  {
    question: "The tap root of a carrot is a swollen structure that stores?",
    options: [
      "A. food (carbohydrates)",
      "B. water only",
      "C. air",
      "D. light"
    ],
    answer: "A",
    explanation: "The fleshy root stores sugars for the plant.",
    subtopic: "Plant Structural Adaptation"
  },
  {
    question: "A cheetah's non-retractable claws give it?",
    options: [
      "A. better grip when running",
      "B. poorer climbing",
      "C. no advantage",
      "D. swimming ability"
    ],
    answer: "A",
    explanation: "Fixed claws act like cleats for traction during high-speed chases.",
    subtopic: "Animal Structural Adaptation"
  }
];

module.exports = questions;
