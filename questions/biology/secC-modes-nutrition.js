// biology — Modes of Nutrition
const questions = [
  {
    question: "Which of the following best describes autotrophic nutrition?",
    options: [
      "A. Organisms feed on prepared food made by other living things",
      "B. Organisms obtain energy by decomposing dead organic matter",
      "C. Organisms synthesize their own organic food from inorganic materials",
      "D. Organisms derive nourishment from a living host"
    ],
    answer: "C",
    explanation: "Autotrophs build complex organic molecules from simple inorganic substances such as CO2 and water, using light or chemical energy.",
    subtopic: "Autotrophic nutrition"
  },
  {
    question: "Green plants are described as photoautotrophs because they use ______ to manufacture food.",
    options: [
      "A. chemical energy released from inorganic compounds",
      "B. light energy captured during photosynthesis",
      "C. heat energy from the soil",
      "D. kinetic energy from moving water"
    ],
    answer: "B",
    explanation: "Photoautotrophs like green plants use sunlight as the energy source for photosynthesis to make glucose.",
    subtopic: "Autotrophic nutrition"
  },
  {
    question: "Organisms that obtain energy by oxidizing inorganic substances such as hydrogen sulphide are called?",
    options: [
      "A. Photoautotrophs",
      "B. Chemoautotrophs",
      "C. Saprophytes",
      "D. Parasites"
    ],
    answer: "B",
    explanation: "Chemoautotrophs derive energy from chemical reactions involving inorganic compounds and fix CO2 into food.",
    subtopic: "Autotrophic nutrition"
  },
  {
    question: "The raw materials required for photosynthesis in green plants are?",
    options: [
      "A. Glucose and oxygen",
      "B. Carbon dioxide and water",
      "C. Proteins and fats",
      "D. Starch and mineral salts"
    ],
    answer: "B",
    explanation: "Photosynthesis uses carbon dioxide and water in the presence of light and chlorophyll to produce glucose and oxygen.",
    subtopic: "Autotrophic nutrition"
  },
  {
    question: "During photosynthesis, the energy is stored in the bonds of which product?",
    options: [
      "A. Oxygen",
      "B. Carbon dioxide",
      "C. Glucose",
      "D. Water"
    ],
    answer: "C",
    explanation: "Light energy is converted and stored as chemical energy in the glucose molecules synthesized during photosynthesis.",
    subtopic: "Autotrophic nutrition"
  },
  {
    question: "Which pigment is primarily responsible for trapping light energy in photoautotrophs?",
    options: [
      "A. Haemoglobin",
      "B. Chlorophyll",
      "C. Melanin",
      "D. Carotene in animals"
    ],
    answer: "B",
    explanation: "Chlorophyll absorbs light energy, mainly in the red and blue regions, to drive photosynthesis in plants and algae.",
    subtopic: "Autotrophic nutrition"
  },
  {
    question: "Chemosynthesis differs from photosynthesis mainly in the source of?",
    options: [
      "A. Carbon used to build food",
      "B. Energy for fixing carbon",
      "C. Oxygen released",
      "D. Water consumed"
    ],
    answer: "B",
    explanation: "Both can fix CO2, but chemosynthesis uses chemical energy from inorganic reactions rather than light energy.",
    subtopic: "Autotrophic nutrition"
  },
  {
    question: "Which of the following is an example of a chemoautotrophic organism?",
    options: [
      "A. Mango tree",
      "B. Nitrosomonas bacteria",
      "C. Mushroom",
      "D. Tapeworm"
    ],
    answer: "B",
    explanation: "Nitrosomonas is a nitrifying bacterium that oxidizes ammonia for energy while fixing CO2 autotrophically.",
    subtopic: "Autotrophic nutrition"
  },
  {
    question: "Autotrophic bacteria that live near hydrothermal vents use energy from?",
    options: [
      "A. Sunlight penetrating deep water",
      "B. Oxidation of hydrogen sulphide",
      "C. Decomposition of fish",
      "D. Moonlight reflection"
    ],
    answer: "B",
    explanation: "Vent bacteria are chemoautotrophs that oxidize hydrogen sulphide released by the vents to power carbon fixation.",
    subtopic: "Autotrophic nutrition"
  },
  {
    question: "Heterotrophic nutrition is a mode in which organisms?",
    options: [
      "A. Make their own food from inorganic materials",
      "B. Depend on already prepared organic food",
      "C. Fix atmospheric nitrogen",
      "D. Use light to synthesize glucose"
    ],
    answer: "B",
    explanation: "Heterotrophs cannot fix carbon autotrophically and must obtain organic nutrients from other organisms or their remains.",
    subtopic: "Heterotrophic nutrition"
  },
  {
    question: "Which of the following groups consists entirely of heterotrophs?",
    options: [
      "A. Green algae, mosses, ferns",
      "B. Fungi, animals, most bacteria",
      "C. Cyanobacteria, lichens, trees",
      "D. All flowering plants"
    ],
    answer: "B",
    explanation: "Animals, fungi and many bacteria lack the ability to photosynthesize and must consume organic matter.",
    subtopic: "Heterotrophic nutrition"
  },
  {
    question: "A major difference between autotrophs and heterotrophs is that heterotrophs lack?",
    options: [
      "A. A cell membrane",
      "B. The ability to fix carbon from CO2 into organic matter",
      "C. Mitochondria",
      "D. Ribosomes"
    ],
    answer: "B",
    explanation: "Heterotrophs cannot reduce CO2 into carbohydrate; they rely on autotrophs or organic detritus for carbon and energy.",
    subtopic: "Heterotrophic nutrition"
  },
  {
    question: "Which mode of heterotrophic nutrition involves feeding on solid food by ingestion?",
    options: [
      "A. Saprophytism",
      "B. Parasitism",
      "C. Holozoic nutrition",
      "D. Chemoautotrophy"
    ],
    answer: "C",
    explanation: "Holozoic nutrition is the ingestion of solid food, its digestion and absorption, then egestion of undigested waste.",
    subtopic: "Heterotrophic nutrition"
  },
  {
    question: "Heterotrophs are important in ecosystems mainly because they?",
    options: [
      "A. Produce oxygen for photosynthesis",
      "B. Consume and recycle organic matter and form food chains",
      "C. Fix atmospheric nitrogen directly into proteins",
      "D. Build soil from rocks"
    ],
    answer: "B",
    explanation: "Heterotrophs (consumers and decomposers) transfer energy through food chains and recycle nutrients locked in organic material.",
    subtopic: "Heterotrophic nutrition"
  },
  {
    question: "Which of these is NOT a heterotrophic mode of nutrition?",
    options: [
      "A. Parasitism",
      "B. Saprophytism",
      "C. Photosynthesis",
      "D. Symbiosis"
    ],
    answer: "C",
    explanation: "Photosynthesis is an autotrophic process; parasitism, saprophytism and many symbiotic relations are heterotrophic.",
    subtopic: "Heterotrophic nutrition"
  },
  {
    question: "Animals that feed on plants only are described as?",
    options: [
      "A. Carnivores",
      "B. Omnivores",
      "C. Herbivores",
      "D. Detritivores"
    ],
    answer: "C",
    explanation: "Herbivores are holozoic heterotrophs that ingest plant material as their sole or main food source.",
    subtopic: "Heterotrophic nutrition"
  },
  {
    question: "An omnivore differs from a carnivore in that it?",
    options: [
      "A. Only eats other animals",
      "B. Consumes both plant and animal material",
      "C. Photosynthesizes its own food",
      "D. Lives only on dead organic matter"
    ],
    answer: "B",
    explanation: "Omnivores, such as humans and rats, obtain nutrition from both plant and animal sources.",
    subtopic: "Heterotrophic nutrition"
  },
  {
    question: "A parasite can best be described as an organism that?",
    options: [
      "A. Lives freely and decomposes dead matter",
      "B. Lives in or on a host and obtains food at the host's expense",
      "C. Makes its own food by photosynthesis",
      "D. Lives mutually with another species for benefit of both"
    ],
    answer: "B",
    explanation: "Parasites derive nutrients from a living host, usually harming it but rarely killing it immediately.",
    subtopic: "Parasitism"
  },
  {
    question: "Which of the following is an example of an ectoparasite?",
    options: [
      "A. Tapeworm in the intestine",
      "B. Mosquito feeding on blood",
      "C. Rhizobium in root nodules",
      "D. Lichen on a rock"
    ],
    answer: "B",
    explanation: "Ectoparasites live on the external surface of the host; the mosquito feeds on blood from outside the body.",
    subtopic: "Parasitism"
  },
  {
    question: "A tapeworm is described as an endoparasite because it lives?",
    options: [
      "A. On the skin of its host",
      "B. Inside the body of its host, usually the intestine",
      "C. In the soil near plant roots",
      "D. On decaying wood"
    ],
    answer: "B",
    explanation: "Endoparasites inhabit the internal organs or tissues of the host, such as the tapeworm in the alimentary canal.",
    subtopic: "Parasitism"
  },
  {
    question: "Dodder (Cuscuta) is a parasitic plant because it?",
    options: [
      "A. Photosynthesizes vigorously",
      "B. Lacks chlorophyll and absorbs food from a host plant",
      "C. Decomposes dead leaves",
      "D. Fixes its own nitrogen"
    ],
    answer: "B",
    explanation: "Dodder is a total parasite with reduced leaves and no chlorophyll, drawing nutrients through haustoria from the host.",
    subtopic: "Parasitism"
  },
  {
    question: "The structure by which a parasitic plant like dodder penetrates the host tissue is called?",
    options: [
      "A. Root hair",
      "B. Haustorium",
      "C. Stomata",
      "D. Lenticel"
    ],
    answer: "B",
    explanation: "A haustorium is the specialised organ of parasitic plants that taps into the host's vascular tissue for food and water.",
    subtopic: "Parasitism"
  },
  {
    question: "Which of the following is a harm caused by parasites to their hosts?",
    options: [
      "A. Increased photosynthesis",
      "B. Loss of nutrients and tissue damage",
      "C. Faster growth",
      "D. Mutual nitrogen gain"
    ],
    answer: "B",
    explanation: "Parasites drain nutrients and can damage organs or transmit disease, weakening or sickening the host.",
    subtopic: "Parasitism"
  },
  {
    question: "The malaria parasite is transmitted to humans mainly by?",
    options: [
      "A. Contaminated water",
      "B. The female Anopheles mosquito",
      "C. Direct contact",
      "D. Infected food"
    ],
    answer: "B",
    explanation: "Plasmodium, the malaria parasite, is injected into humans by the bite of an infected female Anopheles mosquito.",
    subtopic: "Parasitism"
  },
  {
    question: "A parasite that lives on the outside of its host is called an?",
    options: [
      "A. Endoparasite",
      "B. Ectoparasite",
      "C. Saprophyte",
      "D. Autotroph"
    ],
    answer: "B",
    explanation: "Ectoparasites such as ticks and lice live on the external surface rather than inside host tissues.",
    subtopic: "Parasitism"
  },
  {
    question: "Which adaptation is typical of internal parasites like tapeworms?",
    options: [
      "A. Well-developed eyes and limbs",
      "B. Reduced digestive system and hooks/suckers for attachment",
      "C. Chloroplasts for photosynthesis",
      "D. Thick bark"
    ],
    answer: "B",
    explanation: "Endoparasites absorb readymade food and so lose a gut, while developing attachment organs like suckers and hooks.",
    subtopic: "Parasitism"
  },
  {
    question: "Saprophytic nutrition involves organisms that?",
    options: [
      "A. Feed on living hosts",
      "B. Secrete enzymes onto dead matter and absorb the products",
      "C. Photosynthesize using sunlight",
      "D. Ingest solid prey whole"
    ],
    answer: "B",
    explanation: "Saprophytes externally digest dead organic material with enzymes and absorb the soluble products.",
    subtopic: "Saprophytism"
  },
  {
    question: "Which of the following organisms are typical saprophytes?",
    options: [
      "A. Green plants and algae",
      "B. Fungi and many bacteria",
      "C. Mosquitoes and tapeworms",
      "D. Legumes and rhizobia"
    ],
    answer: "B",
    explanation: "Fungi such as mushrooms and saprophytic bacteria decompose dead organisms and waste, recycling nutrients.",
    subtopic: "Saprophytism"
  },
  {
    question: "Saprophytes obtain their food by first?",
    options: [
      "A. Ingesting it into a gut",
      "B. Secreting digestive enzymes onto the substrate",
      "C. Photosynthesizing",
      "D. Chewing with teeth"
    ],
    answer: "B",
    explanation: "They perform extracellular digestion, releasing enzymes onto dead matter before absorbing the broken-down molecules.",
    subtopic: "Saprophytism"
  },
  {
    question: "The ecological role of saprophytes is to?",
    options: [
      "A. Produce oxygen",
      "B. Decompose dead matter and return minerals to the soil",
      "C. Fix carbon dioxide into glucose",
      "D. Predate on herbivores"
    ],
    answer: "B",
    explanation: "As decomposers, saprophytes break down complex dead organic compounds into inorganic nutrients plants can reuse.",
    subtopic: "Saprophytism"
  },
  {
    question: "Which process performed by saprophytes is essential for nutrient cycling?",
    options: [
      "A. Transpiration",
      "B. Decomposition",
      "C. Pollination",
      "D. Nitrogen fixation only"
    ],
    answer: "B",
    explanation: "Decomposition by saprophytes releases locked-up nutrients such as nitrogen and phosphorus back into ecosystems.",
    subtopic: "Saprophytism"
  },
  {
    question: "A major difference between a saprophyte and a parasite is that a saprophyte feeds on?",
    options: [
      "A. A living host",
      "B. Dead or decaying organic matter",
      "C. Sunlight",
      "D. Inorganic salts only"
    ],
    answer: "B",
    explanation: "Saprophytes require non-living organic matter, whereas parasites depend on a living host for nourishment.",
    subtopic: "Saprophytism"
  },
  {
    question: "Which of these is an example of a saprophytic fungus?",
    options: [
      "A. Rhizobium",
      "B. Bread mould (Rhizopus)",
      "C. Dodder",
      "D. Moss"
    ],
    answer: "B",
    explanation: "Rhizopus grows on dead bread and other organic matter, digesting it externally as a saprophyte.",
    subtopic: "Saprophytism"
  },
  {
    question: "Why are saprophytes important in agriculture?",
    options: [
      "A. They compete with crops for sunlight",
      "B. They release minerals from crop residues back into the soil",
      "C. They fix atmospheric oxygen",
      "D. They parasitize farm animals"
    ],
    answer: "B",
    explanation: "By decomposing dead plant and animal remains, saprophytes replenish soil nutrients that crops need to grow.",
    subtopic: "Saprophytism"
  },
  {
    question: "Symbiosis is a close, long-term relationship between two species that is?",
    options: [
      "A. Always harmful to both",
      "B. Beneficial to at least one and often to both",
      "C. Always parasitic",
      "D. Restricted to plants only"
    ],
    answer: "B",
    explanation: "Symbiosis broadly means living together; the interaction benefits at least one partner (mutualism, commensalism or parasitism).",
    subtopic: "Symbiosis"
  },
  {
    question: "Lichen is a symbiotic association between?",
    options: [
      "A. A fungus and an alga",
      "B. A bacterium and a virus",
      "C. A root and a stone",
      "D. Two species of moss"
    ],
    answer: "A",
    explanation: "Lichens are a mutualism of a fungus (providing structure and water) and a photosynthetic alga or cyanobacterium (providing food).",
    subtopic: "Symbiosis"
  },
  {
    question: "In the lichen symbiosis, the algal partner provides?",
    options: [
      "A. Water and minerals only",
      "B. Organic food through photosynthesis",
      "C. Protection from all predators",
      "D. Nitrogen gas"
    ],
    answer: "B",
    explanation: "The photobiont (alga/cyanobacterium) photosynthesizes and supplies carbohydrates to the fungal partner.",
    subtopic: "Symbiosis"
  },
  {
    question: "Rhizobium bacteria in the root nodules of legumes illustrate symbiosis because they?",
    options: [
      "A. Parasitize the plant",
      "B. Fix nitrogen for the plant while gaining carbohydrates",
      "C. Decompose the roots",
      "D. Cause disease"
    ],
    answer: "B",
    explanation: "This is mutualism: Rhizobium fixes atmospheric nitrogen for the legume and receives sugars and a protected niche.",
    subtopic: "Symbiosis"
  },
  {
    question: "The type of symbiosis in which both species benefit is called?",
    options: [
      "A. Commensalism",
      "B. Parasitism",
      "C. Mutualism",
      "D. Saprophytism"
    ],
    answer: "C",
    explanation: "Mutualism is a symbiotic interaction where both participating species gain a fitness advantage.",
    subtopic: "Symbiosis"
  },
  {
    question: "Termites are able to digest wood because of symbiotic?",
    options: [
      "A. Viruses in their blood",
      "B. Protozoa or bacteria in their gut that break down cellulose",
      "C. Chloroplasts in their skin",
      "D. Fungi on their wings"
    ],
    answer: "B",
    explanation: "Gut protozoa and bacteria produce cellulase, letting termites extract energy from cellulose they cannot digest alone.",
    subtopic: "Symbiosis"
  },
  {
    question: "In commensalism, one species benefits while the other is?",
    options: [
      "A. Killed",
      "B. Neither helped nor harmed significantly",
      "C. Also benefited",
      "D. Used as food"
    ],
    answer: "B",
    explanation: "Commensalism is a form of symbiosis where one partner gains and the other is essentially unaffected.",
    subtopic: "Symbiosis"
  },
  {
    question: "The nitrogen-fixing bacteria in legume root nodules obtain from the plant?",
    options: [
      "A. Sunlight for photosynthesis",
      "B. Carbohydrates (food) and a protected environment",
      "C. Inorganic nitrogen compounds",
      "D. Oxygen for burning"
    ],
    answer: "B",
    explanation: "In this mutualism the plant supplies the bacteria with sugars and a safe niche, while gaining fixed nitrogen.",
    subtopic: "Symbiosis"
  },
  {
    question: "Holozoic nutrition involves which of the following sequences?",
    options: [
      "A. Absorption, photosynthesis, egestion",
      "B. Ingestion, digestion, absorption, assimilation, egestion",
      "C. Chemosynthesis, fixation, secretion",
      "D. Inhalation, oxidation, excretion of light"
    ],
    answer: "B",
    explanation: "Holozoic feeders ingest food, digest it, absorb nutrients, assimilate them and egest undigested remains.",
    subtopic: "Holozoic nutrition"
  },
  {
    question: "Which of the following animals shows holozoic nutrition?",
    options: [
      "A. Mushroom",
      "B. Human being",
      "C. Rhizobium",
      "D. Lichen"
    ],
    answer: "B",
    explanation: "Humans ingest solid food and digest it internally, the defining feature of holozoic nutrition.",
    subtopic: "Holozoic nutrition"
  },
  {
    question: "In holozoic nutrition, the removal of undigested waste material is called?",
    options: [
      "A. Egestion",
      "B. Excretion",
      "C. Assimilation",
      "D. Absorption"
    ],
    answer: "A",
    explanation: "Egestion is the passage of undigested food (faeces) out of the body, distinct from excretion of metabolic waste.",
    subtopic: "Holozoic nutrition"
  },
  {
    question: "What distinguishes holozoic nutrition from saprophytism?",
    options: [
      "A. Holozoic organisms ingest solid food; saprophytes absorb externally digested matter",
      "B. Holozoic organisms photosynthesize",
      "C. Saprophytes ingest prey",
      "D. They are the same process"
    ],
    answer: "A",
    explanation: "Holozoic feeders take in whole food and digest it internally, while saprophytes digest dead matter outside the body.",
    subtopic: "Holozoic nutrition"
  },
  {
    question: "During holozoic nutrition, the process by which digested food enters the blood or lymph is?",
    options: [
      "A. Ingestion",
      "B. Absorption",
      "C. Egestion",
      "D. Mastication"
    ],
    answer: "B",
    explanation: "Absorption is the uptake of soluble digestion products across the gut wall into the circulatory system.",
    subtopic: "Holozoic nutrition"
  },
  {
    question: "Which of the following is an example of a carnivore exhibiting holozoic nutrition?",
    options: [
      "A. Cow",
      "B. Lion",
      "C. Mushroom",
      "D. Fern"
    ],
    answer: "B",
    explanation: "Lions ingest and internally digest other animals, fitting the holozoic pattern of feeding.",
    subtopic: "Holozoic nutrition"
  },
  {
    question: "Assimilation in holozoic nutrition refers to?",
    options: [
      "A. The chewing of food",
      "B. The use of absorbed nutrients to build or fuel body tissues",
      "C. The removal of faeces",
      "D. The breakdown of food by enzymes"
    ],
    answer: "B",
    explanation: "Assimilation is incorporating absorbed molecules into the organism's own structures or using them for energy.",
    subtopic: "Holozoic nutrition"
  },
  {
    question: "Which statement about holozoic organisms is correct?",
    options: [
      "A. They absorb food through their body surface from dead matter",
      "B. They possess a digestive system for internal digestion of ingested food",
      "C. They fix carbon dioxide autotrophically",
      "D. They lack a mouth"
    ],
    answer: "B",
    explanation: "Holozoic animals have a digestive tract that ingests, breaks down and absorbs food internally.",
    subtopic: "Holozoic nutrition"
  }
];

module.exports = questions;
