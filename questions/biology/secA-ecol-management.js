// biology — Ecological Management
const questions = [
  // ---------------- biological associations ----------------
  {
    question: "The close, long-term interaction between a fungus and an alga that forms a lichen is best described as:",
    options: [
      "A. Parasitism",
      "B. Commensalism",
      "C. Mutualism",
      "D. Competition"
    ],
    answer: "C",
    explanation: "Both partners benefit — the alga photosynthesises food while the fungus provides structure and moisture, so it is mutualism.",
    subtopic: "biological associations"
  },
  {
    question: "Rhizobium bacteria living in the root nodules of leguminous plants obtain carbohydrates and supply the plant with:",
    options: [
      "A. Oxygen",
      "B. Fixed nitrogen",
      "C. Carbon dioxide",
      "D. Water"
    ],
    answer: "B",
    explanation: "Rhizobium fixes atmospheric nitrogen into forms the plant can use, benefiting both organisms in a mutualistic relationship.",
    subtopic: "biological associations"
  },
  {
    question: "The relationship between bees and flowering plants, where bees get nectar and plants get pollinated, is an example of:",
    options: [
      "A. Predation",
      "B. Commensalism",
      "C. Mutualism",
      "D. Amensalism"
    ],
    answer: "C",
    explanation: "Both species benefit: the bee gains food (nectar) and the flower gains pollination services.",
    subtopic: "biological associations"
  },
  {
    question: "The cattle egret feeding on insects stirred up by grazing cattle benefits while the cattle are unaffected. This is:",
    options: [
      "A. Mutualism",
      "B. Parasitism",
      "C. Commensalism",
      "D. Predation"
    ],
    answer: "C",
    explanation: "The egret gains food and the cattle are neither helped nor harmed, which is the definition of commensalism.",
    subtopic: "biological associations"
  },
  {
    question: "A tapeworm living in the human intestine derives nutrients and harms the host. This association is:",
    options: [
      "A. Mutualism",
      "B. Parasitism",
      "C. Commensalism",
      "D. Competition"
    ],
    answer: "B",
    explanation: "The parasite (tapeworm) benefits while the host is harmed, which defines parasitism.",
    subtopic: "biological associations"
  },
  {
    question: "A female mosquito feeding on human blood is an example of a parasite because it:",
    options: [
      "A. Helps the host reproduce",
      "B. Benefits while harming the host",
      "C. Lives independently of the host",
      "D. Is eaten by the host"
    ],
    answer: "B",
    explanation: "The mosquito gains a blood meal (benefit) while the human suffers blood loss and possible disease (harm).",
    subtopic: "biological associations"
  },
  {
    question: "Two species of birds competing for the same limited nesting sites in a forest illustrate:",
    options: [
      "A. Mutualism",
      "B. Predation",
      "C. Competition",
      "D. Commensalism"
    ],
    answer: "C",
    explanation: "When organisms struggle for the same limited resource they are in competition.",
    subtopic: "biological associations"
  },
  {
    question: "A lion killing and eating a zebra represents the association known as:",
    options: [
      "A. Predation",
      "B. Parasitism",
      "C. Mutualism",
      "D. Commensalism"
    ],
    answer: "A",
    explanation: "Predation is when one organism (predator) kills and feeds on another (prey).",
    subtopic: "biological associations"
  },
  {
    question: "The antibiotic penicillin produced by the mould Penicillium kills surrounding bacteria but does not gain from them; this is:",
    options: [
      "A. Mutualism",
      "B. Amensalism",
      "C. Commensalism",
      "D. Parasitism"
    ],
    answer: "B",
    explanation: "Amensalism is an interaction where one organism is harmed and the other is unaffected.",
    subtopic: "biological associations"
  },
  {
    question: "In a mutualistic association, the defining feature is that:",
    options: [
      "A. One organism is harmed",
      "B. Both organisms benefit",
      "C. One organism is unaffected",
      "D. Both organisms are harmed"
    ],
    answer: "B",
    explanation: "Mutualism specifically means both interacting species derive a benefit.",
    subtopic: "biological associations"
  },
  {
    question: "Parasitism differs from predation mainly because the parasite:",
    options: [
      "A. Always kills its host quickly",
      "B. Usually lives on or in the host without immediately killing it",
      "C. Benefits the host",
      "D. Is always a plant"
    ],
    answer: "B",
    explanation: "Parasites typically depend on a living host and do not usually kill it outright, unlike predators which consume prey.",
    subtopic: "biological associations"
  },
  {
    question: "Commensalism is an association in which:",
    options: [
      "A. Both are harmed",
      "B. One benefits and the other is unaffected",
      "C. Both benefit",
      "D. One is harmed and the other unaffected"
    ],
    answer: "B",
    explanation: "In commensalism one species benefits while the other is neither helped nor harmed.",
    subtopic: "biological associations"
  },
  {
    question: "Which of the following is an example of competition between species?",
    options: [
      "A. A tick on a dog",
      "B. Two weed species fighting for the same soil nutrients",
      "C. A bee visiting a flower",
      "D. A lichen on a rock"
    ],
    answer: "B",
    explanation: "Both weeds need the same nutrients, so they compete, unlike the other options which are other associations.",
    subtopic: "biological associations"
  },
  {
    question: "The term 'symbiosis' generally refers to:",
    options: [
      "A. Any close, long-term interaction between two species",
      "B. Only predation",
      "C. Only competition",
      "D. The death of one species"
    ],
    answer: "A",
    explanation: "Symbiosis describes a close, prolonged biological interaction between two different biological organisms.",
    subtopic: "biological associations"
  },
  {
    question: "The root nodules of leguminous plants containing nitrogen-fixing bacteria best illustrate:",
    options: [
      "A. Parasitism",
      "B. Predation",
      "C. Mutualism",
      "D. Amensalism"
    ],
    answer: "C",
    explanation: "The plant receives fixed nitrogen and the bacteria receive carbohydrates, a classic mutualism.",
    subtopic: "biological associations"
  },
  {
    question: "Which of these is a parasitic organism?",
    options: [
      "A. Lichen",
      "B. Rhizobium",
      "C. Tapeworm",
      "D. Cattle egret"
    ],
    answer: "C",
    explanation: "A tapeworm lives in and harms its host, making it a parasite; the others are mutualists or commensals.",
    subtopic: "biological associations"
  },
  {
    question: "Predation helps control prey populations and can lead to:",
    options: [
      "A. Unlimited prey growth",
      "B. Stabilisation of ecosystem populations",
      "C. Extinction of all plants",
      "D. No effect on populations"
    ],
    answer: "B",
    explanation: "Predators limit prey numbers, helping maintain balance within ecosystem populations.",
    subtopic: "biological associations"
  },

  // ---------------- adaptation ----------------
  {
    question: "Succulent plants such as cacti store water in fleshy stems and have reduced leaves to survive in:",
    options: [
      "A. Aquatic habitats",
      "B. Desert (dry) habitats",
      "C. Cold tundra",
      "D. Deep shade"
    ],
    answer: "B",
    explanation: "These are xerophytic adaptations that reduce water loss and store water in arid environments.",
    subtopic: "adaptation"
  },
  {
    question: "A camel's ability to tolerate a rise in body temperature and concentrate its urine is a:",
    options: [
      "A. Structural adaptation",
      "B. Behavioural adaptation",
      "C. Physiological adaptation",
      "D. Genetic mutation only"
    ],
    answer: "C",
    explanation: "Regulating body temperature and producing concentrated urine are internal bodily functions, i.e. physiological adaptations.",
    subtopic: "adaptation"
  },
  {
    question: "Hydrophytes such as water lilies commonly possess large air spaces (aerenchyma) in their tissues to:",
    options: [
      "A. Store sugars",
      "B. Provide buoyancy and aid gas exchange",
      "C. Absorb more light",
      "D. Reduce transpiration"
    ],
    answer: "B",
    explanation: "Aerenchyma provides buoyancy and a pathway for oxygen to submerged parts, aiding aquatic survival.",
    subtopic: "adaptation"
  },
  {
    question: "A polar bear's thick layer of fat and white fur are examples of:",
    options: [
      "A. Physiological and behavioural adaptations",
      "B. Structural adaptations",
      "C. Only behavioural adaptations",
      "D. Pollution tolerance"
    ],
    answer: "B",
    explanation: "Fat (insulation) and white fur (camouflage) are physical/structural features of the body.",
    subtopic: "adaptation"
  },
  {
    question: "Hibernation in hedgehogs during winter is a:",
    options: [
      "A. Structural adaptation",
      "B. Physiological adaptation",
      "C. Behavioural adaptation",
      "D. Parasitic adaptation"
    ],
    answer: "C",
    explanation: "Hibernation is an action/activity pattern the animal adopts, making it a behavioural adaptation.",
    subtopic: "adaptation"
  },
  {
    question: "An animal's colouration that matches its background to avoid detection by predators is called:",
    options: [
      "A. Mimicry",
      "B. Camouflage",
      "C. Mutualism",
      "D. Eutrophication"
    ],
    answer: "B",
    explanation: "Camouflage is blending with the environment to avoid being seen by predators or prey.",
    subtopic: "adaptation"
  },
  {
    question: "When a harmless species evolves to resemble a poisonous one, this is:",
    options: [
      "A. Camouflage",
      "B. Batesian mimicry",
      "C. Mutualism",
      "D. Competition"
    ],
    answer: "B",
    explanation: "Batesian mimicry is when a harmless species mimics a harmful one to gain protection.",
    subtopic: "adaptation"
  },
  {
    question: "Xerophytes typically have sunken stomata and a thick cuticle in order to:",
    options: [
      "A. Increase water loss",
      "B. Reduce transpiration",
      "C. Absorb more CO2",
      "D. Attract pollinators"
    ],
    answer: "B",
    explanation: "These features limit water loss, an essential adaptation to dry conditions.",
    subtopic: "adaptation"
  },
  {
    question: "Floating aquatic plants usually have stomata on the upper leaf surface because:",
    options: [
      "A. The lower surface is submerged",
      "B. They lack chlorophyll",
      "C. They are parasites",
      "D. They need less oxygen"
    ],
    answer: "A",
    explanation: "With the lower surface underwater, stomata must be on top so gas exchange occurs with air.",
    subtopic: "adaptation"
  },
  {
    question: "Fish living in very cold Arctic waters may produce antifreeze proteins. This is a:",
    options: [
      "A. Structural adaptation",
      "B. Behavioural adaptation",
      "C. Physiological adaptation",
      "D. Commensal adaptation"
    ],
    answer: "C",
    explanation: "Producing special proteins in the blood is a bodily/chemical function, i.e. physiological adaptation.",
    subtopic: "adaptation"
  },
  {
    question: "Birds migrating south for the winter is an example of:",
    options: [
      "A. Structural adaptation",
      "B. Physiological adaptation",
      "C. Behavioural adaptation",
      "D. Parasitism"
    ],
    answer: "C",
    explanation: "Migration is a seasonal movement behaviour that helps avoid harsh conditions.",
    subtopic: "adaptation"
  },
  {
    question: "The broad, flat leaves of a water lily are an adaptation that helps it:",
    options: [
      "A. Anchor in soil",
      "B. Float and capture sunlight at the surface",
      "C. Store nitrogen",
      "D. Repel predators"
    ],
    answer: "B",
    explanation: "Floating leaves maximise light capture at the water surface for photosynthesis.",
    subtopic: "adaptation"
  },
  {
    question: "A desert rodent that is active at night and stays in a burrow by day shows:",
    options: [
      "A. Physiological adaptation only",
      "B. Behavioural adaptation",
      "C. No adaptation",
      "D. Parasitic adaptation"
    ],
    answer: "B",
    explanation: "Being nocturnal and using burrows is a behavioural strategy to avoid daytime heat.",
    subtopic: "adaptation"
  },
  {
    question: "Adaptation can best be defined as a feature that:",
    options: [
      "A. Harms the organism",
      "B. Increases an organism's chance of survival and reproduction in its habitat",
      "C. Is always learned",
      "D. Only occurs in plants"
    ],
    answer: "B",
    explanation: "Adaptations are traits that improve fitness (survival and reproduction) in a given environment.",
    subtopic: "adaptation"
  },
  {
    question: "A thick waxy cuticle on the leaves of a desert plant is a:",
    options: [
      "A. Behavioural adaptation",
      "B. Structural adaptation",
      "C. Parasitic trait",
      "D. Pollution indicator"
    ],
    answer: "B",
    explanation: "A waxy cuticle is a physical leaf feature that reduces water loss — a structural adaptation.",
    subtopic: "adaptation"
  },
  {
    question: "The light-producing organs of a deep-sea fish that use symbiotic bacteria illustrate:",
    options: [
      "A. Structural and physiological adaptation",
      "B. A pollutant effect",
      "C. Competition",
      "D. Eutrophication"
    ],
    answer: "A",
    explanation: "Light-producing organs are structural, and the biochemical light production is physiological.",
    subtopic: "adaptation"
  },
  {
    question: "Reduced or absent root systems in many submerged hydrophytes occur because:",
    options: [
      "A. They obtain water and minerals directly from the surrounding water",
      "B. They are parasites",
      "C. They live in deserts",
      "D. They cannot photosynthesise"
    ],
    answer: "A",
    explanation: "Submerged plants absorb water and nutrients over their surface, so extensive roots are unnecessary.",
    subtopic: "adaptation"
  },

  // ---------------- air/water/soil pollution ----------------
  {
    question: "Excessive nutrients from fertiliser runoff entering a lake cause algal blooms and oxygen depletion, a process called:",
    options: [
      "A. Eutrophication",
      "B. Acid rain",
      "C. Smog",
      "D. Desertification"
    ],
    answer: "A",
    explanation: "Nutrient enrichment (especially nitrogen and phosphorus) triggers eutrophication and subsequent oxygen loss.",
    subtopic: "air/water/soil pollution"
  },
  {
    question: "An oil spill in the ocean mainly harms organisms by:",
    options: [
      "A. Increasing oxygen in water",
      "B. Coating and suffocating them and reducing light penetration",
      "C. Fertilising the water",
      "D. Cooling the water"
    ],
    answer: "B",
    explanation: "Oil coats feathers/fur and blocks light and gas exchange, suffocating and killing aquatic life.",
    subtopic: "air/water/soil pollution"
  },
  {
    question: "Untreated sewage discharged into a river raises the biochemical oxygen demand (BOD) because:",
    options: [
      "A. It adds oxygen directly",
      "B. Decomposers use up dissolved oxygen breaking it down",
      "C. It cools the water",
      "D. It kills algae immediately"
    ],
    answer: "B",
    explanation: "Microbes decomposing organic sewage consume dissolved oxygen, raising BOD and suffocating fish.",
    subtopic: "air/water/soil pollution"
  },
  {
    question: "Pesticides such as DDT become more concentrated in organisms at higher trophic levels through:",
    options: [
      "A. Eutrophication",
      "B. Biomagnification",
      "C. Photosynthesis",
      "D. Nitrogen fixation"
    ],
    answer: "B",
    explanation: "Non-biodegradable toxins accumulate and increase in concentration up the food chain (biomagnification).",
    subtopic: "air/water/soil pollution"
  },
  {
    question: "Sulphur dioxide (SO2) released from burning fossil fuels is a major cause of:",
    options: [
      "A. Eutrophication",
      "B. Acid rain",
      "C. Global cooling",
      "D. Biomagnification"
    ],
    answer: "B",
    explanation: "SO2 dissolves in rainwater to form sulphuric acid, producing acid rain that harms soil and lakes.",
    subtopic: "air/water/soil pollution"
  },
  {
    question: "Increased atmospheric carbon dioxide from burning fossil fuels contributes mainly to:",
    options: [
      "A. Acid rain",
      "B. The greenhouse effect and global warming",
      "C. Eutrophication",
      "D. Oil spills"
    ],
    answer: "B",
    explanation: "CO2 traps heat in the atmosphere, enhancing the greenhouse effect and driving climate change.",
    subtopic: "air/water/soil pollution"
  },
  {
    question: "Vehicle exhaust fumes in cities are a major source of:",
    options: [
      "A. Eutrophication only",
      "B. Smog and air pollution",
      "C. Oil spills",
      "D. Acid rain from the sea"
    ],
    answer: "B",
    explanation: "Nitrogen oxides and hydrocarbons from vehicles form photochemical smog and degrade air quality.",
    subtopic: "air/water/soil pollution"
  },
  {
    question: "Smoke from factories and burning wood contributes particulate matter that can cause:",
    options: [
      "A. Respiratory diseases in humans",
      "B. Increased plant growth only",
      "C. Lower temperatures globally",
      "D. Eutrophication"
    ],
    answer: "A",
    explanation: "Fine particulates penetrate the lungs and are linked to asthma and other respiratory problems.",
    subtopic: "air/water/soil pollution"
  },
  {
    question: "Planting trees to restore damaged land and absorb CO2 is an example of:",
    options: [
      "A. Afforestation",
      "B. Eutrophication",
      "C. Biomagnification",
      "D. Oil drilling"
    ],
    answer: "A",
    explanation: "Afforestation — establishing forests — helps control erosion and sequester carbon dioxide.",
    subtopic: "air/water/soil pollution"
  },
  {
    question: "Treating sewage in treatment plants before release helps to:",
    options: [
      "A. Increase BOD in rivers",
      "B. Reduce water pollution and protect aquatic life",
      "C. Cause algal blooms",
      "D. Add pesticides"
    ],
    answer: "B",
    explanation: "Removing organic matter and pathogens lowers BOD and prevents oxygen depletion in receiving waters.",
    subtopic: "air/water/soil pollution"
  },
  {
    question: "Soil pollution from excessive use of herbicides and pesticides can lead to:",
    options: [
      "A. Healthier crops only",
      "B. Loss of soil organisms and contamination of groundwater",
      "C. Increased oxygen in soil",
      "D. Faster nitrogen fixation"
    ],
    answer: "B",
    explanation: "These chemicals can kill beneficial soil microbes and leach into groundwater, harming ecosystems.",
    subtopic: "air/water/soil pollution"
  },
  {
    question: "Industrial effluents discharged into rivers often contain heavy metals which:",
    options: [
      "A. Improve fish growth",
      "B. Are toxic and accumulate in food chains",
      "C. Cause eutrophication",
      "D. Neutralise acid rain"
    ],
    answer: "B",
    explanation: "Heavy metals like lead and mercury are poisonous and persist, biomagnifying through food webs.",
    subtopic: "air/water/soil pollution"
  },
  {
    question: "Recycling waste materials is a conservation measure that helps to:",
    options: [
      "A. Increase landfill and pollution",
      "B. Reduce resource extraction and pollution",
      "C. Cause acid rain",
      "D. Promote oil spills"
    ],
    answer: "B",
    explanation: "Recycling cuts the need for raw material extraction and reduces waste and emissions.",
    subtopic: "air/water/soil pollution"
  },
  {
    question: "The death of fish in a eutrophied lake is primarily due to:",
    options: [
      "A. Too much oxygen",
      "B. Depletion of dissolved oxygen after algal decay",
      "C. Excess light",
      "D. Low temperature"
    ],
    answer: "B",
    explanation: "When algal blooms die, decomposers consume oxygen, leaving too little for fish (hypoxia).",
    subtopic: "air/water/soil pollution"
  },
  {
    question: "Which of the following is a control measure for air pollution from vehicles?",
    options: [
      "A. Using more leaded fuel",
      "B. Fitting catalytic converters and using cleaner fuels",
      "C. Removing sewage treatment",
      "D. Increasing deforestation"
    ],
    answer: "B",
    explanation: "Catalytic converters and cleaner fuels reduce harmful exhaust emissions from vehicles.",
    subtopic: "air/water/soil pollution"
  },
  {
    question: "Conservation of natural resources includes all of the following EXCEPT:",
    options: [
      "A. Afforestation",
      "B. Recycling",
      "C. Indiscriminate dumping of waste",
      "D. Controlled use of fertilisers"
    ],
    answer: "C",
    explanation: "Indiscriminate dumping pollutes the environment and is contrary to conservation practices.",
    subtopic: "air/water/soil pollution"
  }
];

module.exports = questions;
