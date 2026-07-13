// biology — Adaptive Colouration
const questions = [
  {
    question: "Adaptive colouration is the use of?",
    options: [
      "A. colour to aid survival",
      "B. sound",
      "C. smell",
      "D. taste"
    ],
    answer: "A",
    explanation: "Colour patterns evolve to help organisms survive and reproduce.",
    subtopic: "Adaptive Features"
  },
  {
    question: "Camouflage helps an animal?",
    options: [
      "A. blend with its surroundings",
      "B. stand out boldly",
      "C. glow in the dark",
      "D. sing"
    ],
    answer: "A",
    explanation: "Matching the background hides the animal from predators or prey.",
    subtopic: "Camouflage"
  },
  {
    question: "A chameleon changes colour mainly for?",
    options: [
      "A. communication and camouflage",
      "B. temperature regulation only",
      "C. feeding",
      "D. flying"
    ],
    answer: "A",
    explanation: "Colour change signals mood and helps blend with surroundings.",
    subtopic: "Adaptive Features"
  },
  {
    question: "Warning coloration (aposematism) signals that an animal is?",
    options: [
      "A. safe to eat",
      "B. dangerous or toxic",
      "C. edible",
      "D. invisible"
    ],
    answer: "B",
    explanation: "Bright colours warn predators of venom or bad taste.",
    subtopic: "Warning Coloration"
  },
  {
    question: "The bright colours of poison dart frogs warn predators of?",
    options: [
      "A. their toxicity",
      "B. their sweetness",
      "C. their small size",
      "D. their speed"
    ],
    answer: "A",
    explanation: "Aposematic colours advertise potent skin toxins.",
    subtopic: "Warning Coloration"
  },
  {
    question: "Mimicry occurs when one species resembles?",
    options: [
      "A. another species for advantage",
      "B. a rock only",
      "C. nothing",
      "D. itself"
    ],
    answer: "A",
    explanation: "Resemblance to another organism can deter predators or aid predation.",
    subtopic: "Mimicry"
  },
  {
    question: "Batesian mimicry is when a harmless species mimics?",
    options: [
      "A. a harmful species",
      "B. a plant",
      "C. a rock",
      "D. itself"
    ],
    answer: "A",
    explanation: "A safe species gains protection by looking like a dangerous one.",
    subtopic: "Mimicry"
  },
  {
    question: "Müllerian mimicry is when?",
    options: [
      "A. two harmful species resemble each other",
      "B. a harmless species mimics a harmful one",
      "C. plants mimic animals",
      "D. no species resemble"
    ],
    answer: "A",
    explanation: "Several protected species share a warning pattern, reinforcing predator learning.",
    subtopic: "Mimicry"
  },
  {
    question: "The white winter coat of the arctic fox is an example of?",
    options: [
      "A. seasonal camouflage",
      "B. warning coloration",
      "C. mimicry",
      "D. disease"
    ],
    answer: "A",
    explanation: "White fur matches snow, hiding the fox from prey and predators.",
    subtopic: "Seasonal Colour Changes"
  },
  {
    question: "A stick insect closely resembles?",
    options: [
      "A. a twig or branch",
      "B. a leaf only",
      "C. water",
      "D. stone always"
    ],
    answer: "A",
    explanation: "Its shape and colour mimic plant parts for camouflage.",
    subtopic: "Camouflage"
  },
  {
    question: "The change in peppered moth colour during the industrial revolution illustrates?",
    options: [
      "A. natural selection on camouflage",
      "B. a random mutation only",
      "C. learned behaviour",
      "D. migration"
    ],
    answer: "A",
    explanation: "Dark moths were favoured on sooty trees, shifting population colour.",
    subtopic: "Camouflage"
  },
  {
    question: "A leaf insect's shape and colour provide?",
    options: [
      "A. camouflage",
      "B. warning signals",
      "C. mimicry of sound",
      "D. no benefit"
    ],
    answer: "A",
    explanation: "It looks like a leaf, avoiding detection.",
    subtopic: "Camouflage"
  },
  {
    question: "Skunks display black-and-white stripes as?",
    options: [
      "A. warning coloration",
      "B. camouflage",
      "C. mimicry of plants",
      "D. nothing"
    ],
    answer: "A",
    explanation: "High-contrast colours warn of their defensive spray.",
    subtopic: "Warning Coloration"
  },
  {
    question: "The viceroy butterfly mimics the monarch because the monarch is?",
    options: [
      "A. toxic (Batesian mimicry)",
      "B. edible",
      "C. a plant",
      "D. harmless"
    ],
    answer: "A",
    explanation: "Predators avoid the viceroy, mistaking it for the bad-tasting monarch.",
    subtopic: "Mimicry"
  },
  {
    question: "Many snakes have patterns that?",
    options: [
      "A. break up their outline",
      "B. make them glow",
      "C. help them sing",
      "D. increase smell"
    ],
    answer: "A",
    explanation: "Disruptive coloration obscures the body shape from predators.",
    subtopic: "Camouflage"
  },
  {
    question: "Countershading (dark back, light belly) helps aquatic animals by?",
    options: [
      "A. reducing their visible silhouette",
      "B. attracting mates",
      "C. warning predators",
      "D. mimicking plants"
    ],
    answer: "A",
    explanation: "Even lighting makes the body appear flat and less visible.",
    subtopic: "Camouflage"
  },
  {
    question: "Some octopuses change colour and skin texture for?",
    options: [
      "A. camouflage and communication",
      "B. singing",
      "C. flying",
      "D. digging"
    ],
    answer: "A",
    explanation: "Rapid change hides them or signals to others.",
    subtopic: "Camouflage"
  },
  {
    question: "The bright plumage of a male bird-of-paradise is for?",
    options: [
      "A. attracting mates",
      "B. camouflage",
      "C. warning predators",
      "D. mimicry"
    ],
    answer: "A",
    explanation: "Showy colours result from sexual selection.",
    subtopic: "Adaptive Features"
  },
  {
    question: "A zebra's stripes may function to?",
    options: [
      "A. confuse predators",
      "B. warn of toxicity",
      "C. mimic another animal",
      "D. nothing"
    ],
    answer: "A",
    explanation: "Disruptive striping makes it hard to single out one animal in a herd.",
    subtopic: "Camouflage"
  },
  {
    question: "The brown-to-white coat change of a hare aids?",
    options: [
      "A. camouflage in snow",
      "B. warning",
      "C. mimicry",
      "D. mating only"
    ],
    answer: "A",
    explanation: "Seasonal whitening keeps it hidden against snow.",
    subtopic: "Seasonal Colour Changes"
  },
  {
    question: "Aposematic animals are often?",
    options: [
      "A. slow-moving and toxic",
      "B. fast and edible",
      "C. invisible",
      "D. silent and harmless"
    ],
    answer: "A",
    explanation: "Because they are defended, they can afford to be conspicuous.",
    subtopic: "Warning Coloration"
  },
  {
    question: "The monarch butterfly's toxicity is acquired from?",
    options: [
      "A. milkweed it eats as a larva",
      "B. water",
      "C. sunlight",
      "D. soil"
    ],
    answer: "A",
    explanation: "Cardiac glycosides from milkweed make monarchs unpalatable.",
    subtopic: "Warning Coloration"
  },
  {
    question: "Mimicry benefits the mimic by?",
    options: [
      "A. reducing predation",
      "B. increasing food intake",
      "C. faster growth",
      "D. better hearing"
    ],
    answer: "A",
    explanation: "Looking dangerous or like another protected form lowers attack rate.",
    subtopic: "Mimicry"
  },
  {
    question: "Hoverflies mimic wasps in order to?",
    options: [
      "A. deter predators (Batesian mimicry)",
      "B. attract mates",
      "C. photosynthesize",
      "D. dig burrows"
    ],
    answer: "A",
    explanation: "Despite being harmless, they gain protection by resembling stinging wasps.",
    subtopic: "Mimicry"
  },
  {
    question: "The eyespots on a peacock butterfly startle predators through?",
    options: [
      "A. deceptive coloration",
      "B. sound",
      "C. smell",
      "D. taste"
    ],
    answer: "A",
    explanation: "Large false eyes suggest a larger animal and scare attackers.",
    subtopic: "Camouflage"
  },
  {
    question: "Protective resemblance is another term for?",
    options: [
      "A. camouflage",
      "B. warning coloration",
      "C. mimicry of sound",
      "D. seasonality"
    ],
    answer: "A",
    explanation: "Resembling the surroundings is protective coloration.",
    subtopic: "Camouflage"
  },
  {
    question: "Some flowers have colour patterns (nectar guides) visible especially to?",
    options: [
      "A. insects (including UV)",
      "B. humans only",
      "C. birds only",
      "D. no animal"
    ],
    answer: "A",
    explanation: "Nectar guides direct pollinators to the reward.",
    subtopic: "Adaptive Features"
  },
  {
    question: "A flounder can change to match the?",
    options: [
      "A. colour and pattern of the seabed",
      "B. colour of the sky",
      "C. trees",
      "D. nothing"
    ],
    answer: "A",
    explanation: "Specialized cells let it blend with the substrate.",
    subtopic: "Camouflage"
  },
  {
    question: "Disruptive coloration uses?",
    options: [
      "A. high-contrast patterns to break up outline",
      "B. a single solid colour",
      "C. glowing marks",
      "D. sound"
    ],
    answer: "A",
    explanation: "Bold patches obscure the animal's shape and boundaries.",
    subtopic: "Camouflage"
  },
  {
    question: "The brightly coloured face of a mandrill is for?",
    options: [
      "A. social signalling",
      "B. camouflage",
      "C. warning of poison",
      "D. mimicry"
    ],
    answer: "A",
    explanation: "Facial colour conveys status and mood among troop members.",
    subtopic: "Adaptive Features"
  },
  {
    question: "Animals in snowy habitats tend to be?",
    options: [
      "A. white for camouflage",
      "B. black",
      "C. red",
      "D. blue"
    ],
    answer: "A",
    explanation: "White blends with snow, reducing detection.",
    subtopic: "Seasonal Colour Changes"
  },
  {
    question: "The colour-changing ability of a cuttlefish serves?",
    options: [
      "A. camouflage and communication",
      "B. photosynthesis",
      "C. breathing",
      "D. no function"
    ],
    answer: "A",
    explanation: "Chromatophores let it match backgrounds and signal.",
    subtopic: "Camouflage"
  },
  {
    question: "Warning colours are typically?",
    options: [
      "A. bright, contrasting patterns",
      "B. dull brown",
      "C. invisible",
      "D. uniform grey"
    ],
    answer: "A",
    explanation: "High visibility makes the warning easy for predators to learn.",
    subtopic: "Warning Coloration"
  },
  {
    question: "In Batesian mimicry, the 'model' is the?",
    options: [
      "A. harmful species being copied",
      "B. harmless mimic",
      "C. predator",
      "D. plant"
    ],
    answer: "A",
    explanation: "The model is the genuinely defended species.",
    subtopic: "Mimicry"
  },
  {
    question: "In Müllerian mimicry, the species involved are?",
    options: [
      "A. genuinely harmful",
      "B. all harmless",
      "C. plants",
      "D. dead"
    ],
    answer: "A",
    explanation: "Each mimic is itself defended, sharing a common warning signal.",
    subtopic: "Mimicry"
  },
  {
    question: "The ptarmigan turns white in winter for?",
    options: [
      "A. camouflage",
      "B. warning",
      "C. mimicry",
      "D. heat absorption"
    ],
    answer: "A",
    explanation: "Seasonal whitening conceals it in snow.",
    subtopic: "Seasonal Colour Changes"
  },
  {
    question: "Colour adaptation in many deep-sea animals includes?",
    options: [
      "A. bioluminescence",
      "B. only red pigment",
      "C. only blue pigment",
      "D. no colour"
    ],
    answer: "A",
    explanation: "Light-producing organs help with communication and luring prey.",
    subtopic: "Adaptive Features"
  },
  {
    question: "The blue colour of some lizards may function in?",
    options: [
      "A. display and communication",
      "B. camouflage only",
      "C. photosynthesis",
      "D. no role"
    ],
    answer: "A",
    explanation: "Bright patches are often used in territorial or mating displays.",
    subtopic: "Adaptive Features"
  },
  {
    question: "A caterpillar resembling a snake uses?",
    options: [
      "A. mimicry to deter predators",
      "B. camouflage only",
      "C. warning smell",
      "D. no defence"
    ],
    answer: "A",
    explanation: "Eyespot and shape mimicry frightens would-be predators.",
    subtopic: "Mimicry"
  },
  {
    question: "Darkening of human skin (more melanin) is an adaptation to?",
    options: [
      "A. protect against ultraviolet radiation",
      "B. cold",
      "C. wind",
      "D. water loss"
    ],
    answer: "A",
    explanation: "Melanin absorbs UV and protects skin cells.",
    subtopic: "Adaptive Features"
  },
  {
    question: "Albinism is a genetic lack of?",
    options: [
      "A. pigment (melanin)",
      "B. water",
      "C. protein",
      "D. fat"
    ],
    answer: "A",
    explanation: "Albinos cannot produce normal skin and eye pigment.",
    subtopic: "Adaptive Features"
  },
  {
    question: "Underneath its white fur, a polar bear's skin is?",
    options: [
      "A. black",
      "B. white",
      "C. red",
      "D. blue"
    ],
    answer: "A",
    explanation: "Black skin absorbs heat; the fur appears white but is translucent.",
    subtopic: "Camouflage"
  },
  {
    question: "Some male fish change colour when?",
    options: [
      "A. defending territory or mating",
      "B. sleeping",
      "C. dying",
      "D. eating"
    ],
    answer: "A",
    explanation: "Colour shifts signal reproductive or competitive state.",
    subtopic: "Adaptive Features"
  },
  {
    question: "The red colour of oxygenated blood is due to?",
    options: [
      "A. haemoglobin",
      "B. water",
      "C. fat",
      "D. sugar"
    ],
    answer: "A",
    explanation: "Iron in haemoglobin binds oxygen and gives blood its red colour.",
    subtopic: "Adaptive Features"
  },
  {
    question: "Flower colours mainly attract pollinators through?",
    options: [
      "A. visual signals",
      "B. sound",
      "C. taste alone",
      "D. smell only"
    ],
    answer: "A",
    explanation: "Bright petals are visual cues for pollinating animals.",
    subtopic: "Adaptive Features"
  },
  {
    question: "The green colour of most plant leaves is due to?",
    options: [
      "A. chlorophyll",
      "B. haemoglobin",
      "C. melanin",
      "D. carotene only"
    ],
    answer: "A",
    explanation: "Chlorophyll absorbs light for photosynthesis and reflects green.",
    subtopic: "Adaptive Features"
  },
  {
    question: "Warning coloration is also called?",
    options: [
      "A. aposematism",
      "B. camouflage",
      "C. mimicry",
      "D. crypsis"
    ],
    answer: "A",
    explanation: "Aposematism is the technical term for warning coloration.",
    subtopic: "Warning Coloration"
  },
  {
    question: "Cryptic coloration is another term for?",
    options: [
      "A. camouflage",
      "B. warning coloration",
      "C. mimicry",
      "D. display"
    ],
    answer: "A",
    explanation: "Crypsis means avoiding detection by resemblance to the background.",
    subtopic: "Camouflage"
  },
  {
    question: "Some frogs are brightly coloured to signal?",
    options: [
      "A. toxicity (aposematism)",
      "B. edibility",
      "C. nothing",
      "D. their speed"
    ],
    answer: "A",
    explanation: "Bright frogs often carry skin toxins and warn predators.",
    subtopic: "Warning Coloration"
  },
  {
    question: "Adaptive colouration ultimately improves an organism's?",
    options: [
      "A. survival and reproduction",
      "B. size",
      "C. age",
      "D. weight"
    ],
    answer: "A",
    explanation: "Colour traits are favoured when they enhance fitness.",
    subtopic: "Adaptive Features"
  },
  {
    question: "A walking leaf insect combines shape and colour for?",
    options: [
      "A. camouflage",
      "B. warning",
      "C. mimicry of sound",
      "D. no benefit"
    ],
    answer: "A",
    explanation: "It closely resembles a leaf, avoiding detection by predators.",
    subtopic: "Camouflage"
  },
  {
    question: "Seasonal colour change in mammals such as the arctic hare is triggered by?",
    options: [
      "A. changing day length (photoperiod)",
      "B. loud noises",
      "C. earthquakes",
      "D. food taste"
    ],
    answer: "A",
    explanation: "Photoperiod cues the moult between brown summer and white winter coats.",
    subtopic: "Seasonal Colour Changes"
  }
];

module.exports = questions;
