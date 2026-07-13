// biology — Feeding Habits
const questions = [
  // Herbivores
  {
    question: "Which type of teeth are most developed in herbivorous mammals for grinding plant material?",
    options: [
      "A. Canines",
      "B. Incisors used for cutting",
      "C. Flat broad molars",
      "D. Sharp pointed premolars"
    ],
    answer: "C",
    explanation: "Herbivores rely on flat broad molars to grind tough fibrous plant material before swallowing.",
    subtopic: "Herbivores"
  },
  {
    question: "Why do herbivores generally have a longer alimentary canal than carnivores?",
    options: [
      "A. To digest bone more efficiently",
      "B. To allow more time for breaking down cellulose",
      "C. Because plant food is high in fat",
      "D. To absorb more water from meat"
    ],
    answer: "B",
    explanation: "Plant cellulose is hard to digest, so a longer gut gives microbes and enzymes more time to break it down.",
    subtopic: "Herbivores"
  },
  {
    question: "Ruminants such as cattle are able to digest cellulose with the help of",
    options: [
      "A. Their own digestive enzymes alone",
      "B. Symbiotic microorganisms in the rumen",
      "C. Stomach acid only",
      "D. Bile from the liver"
    ],
    answer: "B",
    explanation: "Microbes in the rumen ferment cellulose, producing fatty acids the animal can absorb.",
    subtopic: "Herbivores"
  },
  {
    question: "Which of these animals is a typical herbivore?",
    options: [
      "A. Lion",
      "B. Grasshopper",
      "C. Spider",
      "D. Hawk"
    ],
    answer: "B",
    explanation: "Grasshoppers feed on leaves and grasses, making them herbivorous insects.",
    subtopic: "Herbivores"
  },
  {
    question: "A distinguishing feature of most herbivorous mammals is that they",
    options: [
      "A. Have large sharp canines for tearing flesh",
      "B. Lack well-developed canines or have reduced ones",
      "C. Have a very short intestine",
      "D. Possess a gizzard"
    ],
    answer: "B",
    explanation: "Herbivores do not need tearing canines, so these teeth are reduced or absent.",
    subtopic: "Herbivores"
  },
  {
    question: "The process of 'chewing the cud' in cattle refers to",
    options: [
      "A. Swallowing food and regurgitating it for re-chewing",
      "B. Eating bones for calcium",
      "C. Drinking water repeatedly",
      "D. Grinding food with the stomach only"
    ],
    answer: "A",
    explanation: "Ruminants regurgitate partially digested food (cud) and chew it again to aid cellulose breakdown.",
    subtopic: "Herbivores"
  },
  {
    question: "Which structure is used by many herbivores to tear or nip grass?",
    options: [
      "A. Flat molars",
      "B. Sharp canines",
      "C. Chisel-like incisors",
      "D. A beak"
    ],
    answer: "C",
    explanation: "Herbivores such as rabbits and sheep use chisel-shaped incisors to nip off plant parts.",
    subtopic: "Herbivores"
  },
  {
    question: "Cellulose in the diet of herbivores is mainly broken down in the",
    options: [
      "A. Small intestine",
      "B. Caecum or rumen by microbes",
      "C. Mouth by saliva",
      "D. Liver"
    ],
    answer: "B",
    explanation: "Specialised chambers like the rumen or an enlarged caecum host microbes that digest cellulose.",
    subtopic: "Herbivores"
  },
  {
    question: "Which of the following is NOT a feature of herbivores?",
    options: [
      "A. Flat grinding molars",
      "B. Long intestine",
      "C. Sharp tearing canines",
      "D. Cellulose-digesting symbionts"
    ],
    answer: "C",
    explanation: "Sharp tearing canines are a carnivore feature; herbivores have reduced canines.",
    subtopic: "Herbivores"
  },
  {
    question: "Examples of herbivorous birds include",
    options: [
      "A. Eagles and owls",
      "B. Sparrows and geese",
      "C. Kingfishers",
      "D. Hawks"
    ],
    answer: "B",
    explanation: "Sparrows and geese feed mainly on seeds and plant matter, so they are herbivorous birds.",
    subtopic: "Herbivores"
  },

  // Carnivores
  {
    question: "The dentition of a typical carnivore is adapted for",
    options: [
      "A. Grinding leaves",
      "B. Tearing and cutting flesh",
      "C. Filtering water",
      "D. Chewing cud"
    ],
    answer: "B",
    explanation: "Carnivores have sharp canines and carnassial teeth for capturing and slicing prey.",
    subtopic: "Carnivores"
  },
  {
    question: "Compared with herbivores, carnivores usually have",
    options: [
      "A. A longer intestine",
      "B. A shorter alimentary canal",
      "C. A large caecum",
      "D. Flat molars only"
    ],
    answer: "B",
    explanation: "Meat is easier to digest than cellulose, so carnivores need a shorter gut.",
    subtopic: "Carnivores"
  },
  {
    question: "Which of these is a carnivorous mammal?",
    options: [
      "A. Cow",
      "B. Lion",
      "C. Sheep",
      "D. Rabbit"
    ],
    answer: "B",
    explanation: "Lions prey on other animals and are classic terrestrial carnivores.",
    subtopic: "Carnivores"
  },
  {
    question: "The sharp, blade-like teeth at the back of a carnivore's jaw used for shearing meat are called",
    options: [
      "A. Incisors",
      "B. Canines",
      "C. Carnassials",
      "D. Molars for grinding"
    ],
    answer: "C",
    explanation: "Carnassial teeth are modified premolars/molars that slice flesh like scissors.",
    subtopic: "Carnivores"
  },
  {
    question: "Which sense is most highly developed in many nocturnal carnivores for hunting?",
    options: [
      "A. Taste",
      "B. Vision and hearing",
      "C. Electroreception",
      "D. Smell of plants"
    ],
    answer: "B",
    explanation: "Carnivores such as cats rely heavily on keen vision and hearing to locate prey.",
    subtopic: "Carnivores"
  },
  {
    question: "An animal that feeds exclusively on other animals is described as a",
    options: [
      "A. Herbivore",
      "B. Omnivore",
      "C. Carnivore",
      "D. Detritivore"
    ],
    answer: "C",
    explanation: "A carnivore's diet consists solely of animal tissue.",
    subtopic: "Carnivores"
  },
  {
    question: "Which adaptation helps a carnivorous cat catch prey?",
    options: [
      "A. A flat grinding jaw",
      "B. Retractable claws and strong limbs",
      "C. A long caecum",
      "D. A rumen"
    ],
    answer: "B",
    explanation: "Retractable claws and powerful limbs let cats grip and overpower prey.",
    subtopic: "Carnivores"
  },
  {
    question: "Birds of prey such as hawks are carnivorous and capture food mainly using their",
    options: [
      "A. Beak for grinding",
      "B. Hooked beak and talons",
      "C. Long tongue",
      "D. Filter plates"
    ],
    answer: "B",
    explanation: "Raptors use hooked beaks and sharp talons to kill and tear prey.",
    subtopic: "Carnivores"
  },
  {
    question: "Carnivores produce more of which digestive secretion to break down proteins?",
    options: [
      "A. Salivary amylase",
      "B. Gastric acid and proteases",
      "C. Cellulase",
      "D. Bile for fats only"
    ],
    answer: "B",
    explanation: "Their stomachs secrete strong acid and proteases to digest protein-rich meat.",
    subtopic: "Carnivores"
  },
  {
    question: "Which of the following is a carnivorous arthropod?",
    options: [
      "A. Grasshopper",
      "B. Praying mantis",
      "C. Bee",
      "D. Aphid"
    ],
    answer: "B",
    explanation: "Praying mantises ambush and eat other insects, so they are carnivorous.",
    subtopic: "Carnivores"
  },

  // Omnivores
  {
    question: "An animal that eats both plants and animals is called a(n)",
    options: [
      "A. Herbivore",
      "B. Carnivore",
      "C. Omnivore",
      "D. Filter feeder"
    ],
    answer: "C",
    explanation: "Omnivores have a varied diet including plant and animal matter.",
    subtopic: "Omnivores"
  },
  {
    question: "Which of these is an example of an omnivorous mammal?",
    options: [
      "A. Lion",
      "B. Cow",
      "C. Human",
      "D. Sheep"
    ],
    answer: "C",
    explanation: "Humans eat both plant and animal foods and are classic omnivores.",
    subtopic: "Omnivores"
  },
  {
    question: "The teeth of an omnivore typically include",
    options: [
      "A. Only flat molars",
      "B. Only sharp canines",
      "C. A mix of incisors, canines and molars",
      "D. No teeth at all"
    ],
    answer: "C",
    explanation: "Omnivores have mixed dentition suited to cutting, tearing and grinding varied foods.",
    subtopic: "Omnivores"
  },
  {
    question: "Pigs are classified as omnivores because they eat",
    options: [
      "A. Only grass",
      "B. Only meat",
      "C. Both plant material and small animals",
      "D. Only fruit"
    ],
    answer: "C",
    explanation: "Pigs consume roots, crops and also insects or carrion, showing omnivory.",
    subtopic: "Omnivores"
  },
  {
    question: "Which bird is generally considered omnivorous?",
    options: [
      "A. Eagle",
      "B. Crow",
      "C. Hummingbird",
      "D. Pelican"
    ],
    answer: "B",
    explanation: "Crows eat seeds, fruits, insects and scraps, making them omnivorous.",
    subtopic: "Omnivores"
  },
  {
    question: "An advantage of an omnivorous diet is that it",
    options: [
      "A. Requires a very long specialised gut",
      "B. Allows feeding on a wide range of foods",
      "C. Limits the animal to one habitat",
      "D. Prevents competition"
    ],
    answer: "B",
    explanation: "Dietary flexibility lets omnivores exploit many food sources and habitats.",
    subtopic: "Omnivores"
  },
  {
    question: "Bears are mostly omnivorous; a grizzly bear's diet includes",
    options: [
      "A. Only fish",
      "B. Berries, plants and fish",
      "C. Only honey",
      "D. Only meat"
    ],
    answer: "B",
    explanation: "Grizzlies eat plant foods such as berries alongside salmon and other animal prey.",
    subtopic: "Omnivores"
  },
  {
    question: "Which feature is NOT typical of an omnivore?",
    options: [
      "A. Mixed dentition",
      "B. Moderate gut length",
      "C. Feeding only on leaves",
      "D. Broad food choice"
    ],
    answer: "C",
    explanation: "Feeding only on leaves describes a herbivore, not an omnivore.",
    subtopic: "Omnivores"
  },
  {
    question: "Rats are omnivores that will consume",
    options: [
      "A. Grains and insects",
      "B. Only blood",
      "C. Only leaves",
      "D. Only nectar"
    ],
    answer: "A",
    explanation: "Rats eat a wide range including seeds, grains and small invertebrates.",
    subtopic: "Omnivores"
  },
  {
    question: "Chickens are omnivorous birds that eat",
    options: [
      "A. Only seeds",
      "B. Only worms",
      "C. Seeds, insects and scraps",
      "D. Only grass"
    ],
    answer: "C",
    explanation: "Chickens forage for grains, seeds, insects and other small foods.",
    subtopic: "Omnivores"
  },

  // Filter feeders
  {
    question: "Whales such as the blue whale feed by",
    options: [
      "A. Hunting large fish with teeth",
      "B. Filtering plankton from water using baleen plates",
      "C. Grazing on seaweed",
      "D. Sucking blood"
    ],
    answer: "B",
    explanation: "Baleen whales strain huge volumes of water, trapping krill and plankton.",
    subtopic: "Filter feeders"
  },
  {
    question: "Mussels are filter feeders that obtain food by",
    options: [
      "A. Chewing plants",
      "B. Drawing in water and trapping particles with mucus on their gills",
      "C. Hunting small fish",
      "D. Absorbing sunlight"
    ],
    answer: "B",
    explanation: "Mussels pump water through their gills, where mucus catches suspended food particles.",
    subtopic: "Filter feeders"
  },
  {
    question: "Flamingos feed by filtering food from water using their",
    options: [
      "A. Sharp teeth",
      "B. Specialised beak with lamellae",
      "C. Long tongue only",
      "D. Claws"
    ],
    answer: "B",
    explanation: "Flamingos sweep their beaks upside-down, using lamellae to strain algae and shrimp.",
    subtopic: "Filter feeders"
  },
  {
    question: "Which structure do baleen whales use instead of teeth for feeding?",
    options: [
      "A. Horns",
      "B. Baleen plates",
      "C. Tusks",
      "D. Proboscis"
    ],
    answer: "B",
    explanation: "Keratinous baleen plates hang from the upper jaw and act as a sieve.",
    subtopic: "Filter feeders"
  },
  {
    question: "Sponges are simple filter feeders that trap food with",
    options: [
      "A. Nets of silk",
      "B. Collar cells (choanocytes) that capture particles",
      "C. Sharp jaws",
      "D. Photosynthesis"
    ],
    answer: "B",
    explanation: "Choanocytes create water currents and engulf microscopic food particles.",
    subtopic: "Filter feeders"
  },
  {
    question: "Which of these is NOT a filter feeder?",
    options: [
      "A. Whale shark",
      "B. Oyster",
      "C. Lion",
      "D. Flamingo"
    ],
    answer: "C",
    explanation: "Lions are active predators, not filter feeders.",
    subtopic: "Filter feeders"
  },
  {
    question: "The whale shark, though a shark, feeds mainly by",
    options: [
      "A. Biting large mammals",
      "B. Filtering plankton and small fish from water",
      "C. Chewing coral",
      "D. Sucking blood"
    ],
    answer: "B",
    explanation: "Whale sharks are gentle filter feeders that sieve plankton through their gill rakers.",
    subtopic: "Filter feeders"
  },
  {
    question: "Filter feeding is an example of",
    options: [
      "A. Parasitism",
      "B. Suspension feeding",
      "C. Symbiosis",
      "D. Photosynthesis"
    ],
    answer: "B",
    explanation: "Filter feeders engage in suspension feeding, removing particles suspended in water.",
    subtopic: "Filter feeders"
  },
  {
    question: "Oysters filter feed by drawing water through their",
    options: [
      "A. Eyes",
      "B. Gills",
      "C. Shell hinge",
      "D. Foot"
    ],
    answer: "B",
    explanation: "Water passes over the gills where mucus traps food before cilia move it to the mouth.",
    subtopic: "Filter feeders"
  },
  {
    question: "A major ecological benefit of filter feeders is that they",
    options: [
      "A. Increase water turbidity",
      "B. Help clean water by removing suspended particles",
      "C. Produce toxins",
      "D. Eat only predators"
    ],
    answer: "B",
    explanation: "By filtering particles, they clarify water and recycle nutrients in aquatic systems.",
    subtopic: "Filter feeders"
  },

  // Feeding adaptations
  {
    question: "The long, tube-like mouthpart used by butterflies and moths to sip nectar is a",
    options: [
      "A. Proboscis",
      "B. Beak",
      "C. Tentacle",
      "D. Mandible"
    ],
    answer: "A",
    explanation: "The coiled proboscis is a specialised elongated feeding tube for nectar.",
    subtopic: "Feeding adaptations"
  },
  {
    question: "A hummingbird's long slender beak is an adaptation for",
    options: [
      "A. Cracking seeds",
      "B. Reaching nectar deep in flowers",
      "C. Tearing flesh",
      "D. Filtering water"
    ],
    answer: "B",
    explanation: "Its slender beak and tongue match tubular flowers to access nectar.",
    subtopic: "Feeding adaptations"
  },
  {
    question: "The woodpecker's strong, chisel-shaped beak is adapted for",
    options: [
      "A. Sucking nectar",
      "B. Drilling into wood to find insects",
      "C. Filtering plankton",
      "D. Grinding grass"
    ],
    answer: "B",
    explanation: "The chisel beak lets woodpeckers bore into bark to extract insect larvae.",
    subtopic: "Feeding adaptations"
  },
  {
    question: "The extended neck of a giraffe is a feeding adaptation that allows it to",
    options: [
      "A. Breathe underwater",
      "B. Reach leaves on tall trees",
      "C. Catch fast prey",
      "D. Filter plankton"
    ],
    answer: "B",
    explanation: "A long neck gives giraffes access to high foliage other herbivores cannot reach.",
    subtopic: "Feeding adaptations"
  },
  {
    question: "Ruminants possess a four-chambered stomach as an adaptation to",
    options: [
      "A. Store water",
      "B. Digest cellulose with microbial help",
      "C. Breathe air",
      "D. Filter food"
    ],
    answer: "B",
    explanation: "The chambers, especially the rumen, host microbes that break down cellulose.",
    subtopic: "Feeding adaptations"
  },
  {
    question: "The tongue of a chameleon is specially adapted to",
    options: [
      "A. Grind leaves",
      "B. Shoot out rapidly to catch insects",
      "C. Filter water",
      "D. Store fat"
    ],
    answer: "B",
    explanation: "A long sticky tongue is launched to snatch insect prey at a distance.",
    subtopic: "Feeding adaptations"
  },
  {
    question: "A proboscis monkey's large nose is thought to relate to",
    options: [
      "A. Filter feeding",
      "B. Vocalisation and species recognition rather than feeding",
      "C. Chewing cud",
      "D. Storing food"
    ],
    answer: "B",
    explanation: "The enlarged nose amplifies calls and signals; feeding uses normal dentition.",
    subtopic: "Feeding adaptations"
  },
  {
    question: "The beak shape of a bird is closely related to its",
    options: [
      "A. Ability to fly",
      "B. Type of food and feeding method",
      "C. Colour of feathers",
      "D. Migration distance"
    ],
    answer: "B",
    explanation: "Beak morphology reflects diet, e.g. hooked for flesh, conical for seeds.",
    subtopic: "Feeding adaptations"
  },
  {
    question: "Termites digest wood with the help of symbiotic",
    options: [
      "A. Bacteria in their stomach only",
      "B. Protozoa and bacteria in their gut",
      "C. Viruses",
      "D. Fungi on their skin"
    ],
    answer: "B",
    explanation: "Gut protozoa and bacteria produce enzymes that break down cellulose in wood.",
    subtopic: "Feeding adaptations"
  },
  {
    question: "A vampire bat's feeding adaptation includes",
    options: [
      "A. Sharp teeth to slice skin and anticoagulant saliva",
      "B. A beak for nectar",
      "C. Baleen plates",
      "D. A filter apparatus"
    ],
    answer: "A",
    explanation: "It uses razor teeth and saliva that prevents clotting to feed on blood.",
    subtopic: "Feeding adaptations"
  }
];

module.exports = questions;
