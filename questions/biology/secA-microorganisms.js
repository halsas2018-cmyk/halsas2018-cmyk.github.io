// biology — Microorganisms & Health
const questions = [
  {
    question: "Which organism is the vector responsible for transmitting the malaria parasite to humans?",
    options: [
      "A. Female Anopheles mosquito",
      "B. Tsetse fly",
      "C. Housefly",
      "D. Rat flea"
    ],
    answer: "A",
    explanation: "The female Anopheles mosquito bites humans and transmits Plasmodium, the malaria parasite.",
    subtopic: "carriers"
  },
  {
    question: "Sleeping sickness (trypanosomiasis) in West Africa is transmitted by the",
    options: [
      "A. female Anopheles mosquito",
      "B. tsetse fly",
      "C. Aedes mosquito",
      "D. sandfly"
    ],
    answer: "B",
    explanation: "The tsetse fly transmits Trypanosoma, the protozoan that causes sleeping sickness.",
    subtopic: "carriers"
  },
  {
    question: "The rat flea is the vector that transmits which disease?",
    options: [
      "A. Cholera",
      "B. Yellow fever",
      "C. Bubonic plague",
      "D. Typhoid"
    ],
    answer: "C",
    explanation: "The rat flea (Xenopsylla) carries Yersinia pestis from infected rats to humans, causing bubonic plague.",
    subtopic: "carriers"
  },
  {
    question: "In disease transmission, an organism that carries and transfers a pathogen from one host to another is called a",
    options: [
      "A. reservoir",
      "B. vector",
      "C. host",
      "D. parasite"
    ],
    answer: "B",
    explanation: "A vector is an organism, often an insect, that transmits a pathogen between hosts.",
    subtopic: "carriers"
  },
  {
    question: "Yellow fever and dengue fever are both transmitted by the",
    options: [
      "A. Anopheles mosquito",
      "B. Culex mosquito",
      "C. Aedes mosquito",
      "D. tsetse fly"
    ],
    answer: "C",
    explanation: "The Aedes mosquito (Aedes aegypti) transmits the viruses causing yellow fever and dengue fever.",
    subtopic: "carriers"
  },
  {
    question: "The housefly spreads diseases such as typhoid and dysentery mainly because it",
    options: [
      "A. bites and sucks blood",
      "B. carries pathogens on its body and feet to food",
      "C. lays eggs in human skin",
      "D. injects venom into food"
    ],
    answer: "B",
    explanation: "The housefly is a mechanical carrier that picks up pathogens from filth and deposits them on exposed food.",
    subtopic: "carriers"
  },
  {
    question: "A person who harbours a pathogen and can spread it without showing symptoms of the disease is called a",
    options: [
      "A. vector",
      "B. carrier",
      "C. host cell",
      "D. reservoir animal"
    ],
    answer: "B",
    explanation: "A carrier harbours and transmits an infectious agent while remaining apparently healthy.",
    subtopic: "carriers"
  },
  {
    question: "Which of the following is the reservoir of the bubonic plague bacterium?",
    options: [
      "A. Mosquitoes",
      "B. Rats",
      "C. Cattle",
      "D. Snails"
    ],
    answer: "B",
    explanation: "Rats act as the reservoir host for Yersinia pestis, and fleas transmit it from rats to humans.",
    subtopic: "carriers"
  },
  {
    question: "Onchocerciasis (river blindness) is transmitted by the",
    options: [
      "A. blackfly (Simulium)",
      "B. tsetse fly",
      "C. housefly",
      "D. mosquito"
    ],
    answer: "A",
    explanation: "The blackfly (Simulium) transmits the worm Onchocerca volvulus, which causes river blindness.",
    subtopic: "carriers"
  },
  {
    question: "Schistosomiasis (bilharzia) is transmitted to humans through an intermediate host, the",
    options: [
      "A. mosquito",
      "B. water snail",
      "C. earthworm",
      "D. housefly"
    ],
    answer: "B",
    explanation: "The freshwater snail acts as the intermediate host for the blood fluke Schistosoma that causes bilharzia.",
    subtopic: "carriers"
  },
  {
    question: "Which mosquito is the vector for the filarial worm that causes elephantiasis?",
    options: [
      "A. Anopheles",
      "B. Culex",
      "C. Aedes",
      "D. Mansonia only"
    ],
    answer: "B",
    explanation: "The Culex mosquito transmits Wuchereria bancrofti, the filarial worm that causes elephantiasis.",
    subtopic: "carriers"
  },
  {
    question: "A disease that is transmitted from animals to humans is described as",
    options: [
      "A. congenital",
      "B. zoonotic",
      "C. hereditary",
      "D. degenerative"
    ],
    answer: "B",
    explanation: "Zoonotic diseases are those transmitted from animals to humans, e.g. rabies and plague.",
    subtopic: "carriers"
  },
  {
    question: "The dog is the main reservoir and carrier of which viral disease transmitted through bites?",
    options: [
      "A. Rabies",
      "B. Measles",
      "C. Malaria",
      "D. Cholera"
    ],
    answer: "A",
    explanation: "Rabies virus is transmitted through the bite of an infected dog and other mammals.",
    subtopic: "carriers"
  },
  {
    question: "Nitrogen-fixing bacteria found in the root nodules of leguminous plants belong to the genus",
    options: [
      "A. Rhizobium",
      "B. Lactobacillus",
      "C. Salmonella",
      "D. Clostridium"
    ],
    answer: "A",
    explanation: "Rhizobium lives symbiotically in legume root nodules and fixes atmospheric nitrogen into usable compounds.",
    subtopic: "beneficial/harmful"
  },
  {
    question: "The souring of milk to form yoghurt is carried out mainly by",
    options: [
      "A. yeast",
      "B. lactic acid bacteria",
      "C. moulds",
      "D. viruses"
    ],
    answer: "B",
    explanation: "Lactic acid bacteria (e.g. Lactobacillus) ferment milk sugar into lactic acid, producing yoghurt.",
    subtopic: "beneficial/harmful"
  },
  {
    question: "The rising of bread dough during baking is caused by carbon dioxide produced by",
    options: [
      "A. bacteria",
      "B. yeast",
      "C. protozoa",
      "D. viruses"
    ],
    answer: "B",
    explanation: "Yeast ferments sugars in the dough, releasing carbon dioxide that makes the bread rise.",
    subtopic: "beneficial/harmful"
  },
  {
    question: "The antibiotic penicillin is obtained from a",
    options: [
      "A. bacterium",
      "B. fungus (Penicillium)",
      "C. virus",
      "D. protozoan"
    ],
    answer: "B",
    explanation: "Penicillin is produced by the mould Penicillium notatum, a beneficial fungus.",
    subtopic: "beneficial/harmful"
  },
  {
    question: "Decomposer microorganisms are important in ecosystems because they",
    options: [
      "A. cause diseases in plants",
      "B. break down dead matter and recycle nutrients",
      "C. fix carbon dioxide directly",
      "D. produce oxygen for animals"
    ],
    answer: "B",
    explanation: "Decomposers such as bacteria and fungi break down dead organisms, releasing nutrients back into the soil.",
    subtopic: "beneficial/harmful"
  },
  {
    question: "Which of the following diseases is caused by a virus?",
    options: [
      "A. Tuberculosis",
      "B. Measles",
      "C. Cholera",
      "D. Gonorrhoea"
    ],
    answer: "B",
    explanation: "Measles is caused by the measles virus, while the others listed are bacterial diseases.",
    subtopic: "beneficial/harmful"
  },
  {
    question: "Athlete's foot and ringworm are examples of diseases caused by",
    options: [
      "A. bacteria",
      "B. fungi",
      "C. viruses",
      "D. protozoa"
    ],
    answer: "B",
    explanation: "Ringworm and athlete's foot are fungal infections of the skin.",
    subtopic: "beneficial/harmful"
  },
  {
    question: "Which of the following is a bacterial disease?",
    options: [
      "A. Poliomyelitis",
      "B. Tuberculosis",
      "C. Malaria",
      "D. Yellow fever"
    ],
    answer: "B",
    explanation: "Tuberculosis is caused by the bacterium Mycobacterium tuberculosis.",
    subtopic: "beneficial/harmful"
  },
  {
    question: "The production of alcohol in brewing and wine-making is due to the process of",
    options: [
      "A. putrefaction",
      "B. fermentation by yeast",
      "C. nitrification",
      "D. photosynthesis"
    ],
    answer: "B",
    explanation: "Yeast ferments sugars anaerobically into ethanol and carbon dioxide in brewing and wine-making.",
    subtopic: "beneficial/harmful"
  },
  {
    question: "Which malaria-causing organism is a protozoan?",
    options: [
      "A. Plasmodium",
      "B. Salmonella",
      "C. Vibrio",
      "D. Escherichia"
    ],
    answer: "A",
    explanation: "Malaria is caused by the protozoan parasite Plasmodium.",
    subtopic: "beneficial/harmful"
  },
  {
    question: "The process by which bacteria convert ammonium compounds to nitrates in the soil is called",
    options: [
      "A. denitrification",
      "B. nitrification",
      "C. putrefaction",
      "D. fermentation"
    ],
    answer: "B",
    explanation: "Nitrifying bacteria convert ammonia to nitrites and then to nitrates, which plants can absorb.",
    subtopic: "beneficial/harmful"
  },
  {
    question: "Cholera, a serious diarrhoeal disease, is caused by",
    options: [
      "A. a virus",
      "B. the bacterium Vibrio cholerae",
      "C. a protozoan",
      "D. a fungus"
    ],
    answer: "B",
    explanation: "Cholera is caused by the bacterium Vibrio cholerae, usually spread through contaminated water.",
    subtopic: "beneficial/harmful"
  },
  {
    question: "Regular washing of hands with soap before eating helps to prevent disease because it",
    options: [
      "A. adds vitamins to food",
      "B. removes germs and dirt from the hands",
      "C. makes the hands stronger",
      "D. increases appetite"
    ],
    answer: "B",
    explanation: "Handwashing removes pathogens picked up from surfaces, reducing the spread of germs to the mouth.",
    subtopic: "better health"
  },
  {
    question: "A balanced diet contributes to better health mainly because it",
    options: [
      "A. supplies all the classes of food the body needs",
      "B. contains only carbohydrates",
      "C. prevents all infections",
      "D. replaces the need for exercise"
    ],
    answer: "A",
    explanation: "A balanced diet provides carbohydrates, proteins, fats, vitamins, minerals, water and fibre in the right proportions for health.",
    subtopic: "better health"
  },
  {
    question: "Which of the following is a good personal hygiene practice?",
    options: [
      "A. Sharing toothbrushes",
      "B. Regular bathing and brushing of teeth",
      "C. Eating with dirty hands",
      "D. Wearing unwashed clothes"
    ],
    answer: "B",
    explanation: "Regular bathing and tooth-brushing keep the body clean and reduce infection and dental disease.",
    subtopic: "better health"
  },
  {
    question: "Regular physical exercise improves health because it",
    options: [
      "A. weakens the heart",
      "B. strengthens muscles and improves circulation",
      "C. causes obesity",
      "D. reduces oxygen supply to tissues"
    ],
    answer: "B",
    explanation: "Exercise strengthens the muscles and heart and improves blood circulation, promoting fitness.",
    subtopic: "better health"
  },
  {
    question: "Drinking water can be made safe for consumption at home by",
    options: [
      "A. adding sugar to it",
      "B. boiling it",
      "C. keeping it warm",
      "D. leaving it open to flies"
    ],
    answer: "B",
    explanation: "Boiling kills pathogenic microorganisms, making the water safe to drink.",
    subtopic: "better health"
  },
  {
    question: "Covering the nose and mouth when sneezing helps to",
    options: [
      "A. improve breathing",
      "B. prevent the spread of airborne pathogens",
      "C. warm the air",
      "D. clean the teeth"
    ],
    answer: "B",
    explanation: "Covering the nose and mouth traps droplets containing pathogens, limiting the spread of airborne diseases.",
    subtopic: "better health"
  },
  {
    question: "Which of the following practices best prevents food contamination in the home?",
    options: [
      "A. Leaving cooked food uncovered",
      "B. Covering food and keeping it away from flies",
      "C. Storing food in a warm place",
      "D. Handling food with dirty hands"
    ],
    answer: "B",
    explanation: "Covering food and protecting it from flies prevents microorganisms from contaminating it.",
    subtopic: "better health"
  },
  {
    question: "Adequate rest and sleep are important for health because they",
    options: [
      "A. allow the body to repair and restore itself",
      "B. increase the risk of disease",
      "C. weaken the immune system",
      "D. reduce mental alertness permanently"
    ],
    answer: "A",
    explanation: "Rest and sleep allow the body to repair tissues and restore energy, supporting good health.",
    subtopic: "better health"
  },
  {
    question: "Which of the following would most help to prevent the spread of malaria in a home?",
    options: [
      "A. Sleeping under an insecticide-treated net",
      "B. Drinking more water",
      "C. Eating balanced meals",
      "D. Boiling drinking water"
    ],
    answer: "A",
    explanation: "Sleeping under a treated net prevents mosquito bites, reducing malaria transmission.",
    subtopic: "better health"
  },
  {
    question: "Proper cooking of meat and fish before eating is important because it",
    options: [
      "A. adds vitamins",
      "B. kills parasites and harmful microorganisms",
      "C. increases the water content",
      "D. removes all proteins"
    ],
    answer: "B",
    explanation: "Thorough cooking destroys parasites and pathogens that may be present in raw meat and fish.",
    subtopic: "better health"
  },
  {
    question: "The eating of fruits and vegetables improves health partly because they supply",
    options: [
      "A. large amounts of fat",
      "B. vitamins, minerals and dietary fibre",
      "C. only water",
      "D. antibiotics"
    ],
    answer: "B",
    explanation: "Fruits and vegetables provide vitamins, minerals and fibre needed for good health and digestion.",
    subtopic: "better health"
  },
  {
    question: "Which of the following is NOT a way of maintaining good health?",
    options: [
      "A. Regular medical check-ups",
      "B. Personal cleanliness",
      "C. Abuse of drugs and alcohol",
      "D. Eating a balanced diet"
    ],
    answer: "C",
    explanation: "Drug and alcohol abuse damages the body and is harmful, unlike the other health-promoting practices.",
    subtopic: "better health"
  },
  {
    question: "Regular disposal of stagnant water around the house helps to control disease by",
    options: [
      "A. providing drinking water",
      "B. removing mosquito breeding sites",
      "C. increasing humidity",
      "D. attracting flies"
    ],
    answer: "B",
    explanation: "Draining stagnant water removes mosquito breeding grounds, reducing malaria and other vector-borne diseases.",
    subtopic: "better health"
  },
  {
    question: "Immunization protects against disease by",
    options: [
      "A. killing all bacteria in the body",
      "B. stimulating the body to produce antibodies",
      "C. supplying extra food",
      "D. removing toxins from the blood"
    ],
    answer: "B",
    explanation: "Vaccines stimulate the immune system to produce antibodies, giving protection against specific diseases.",
    subtopic: "public health: refuse/sewage, immunization"
  },
  {
    question: "The proper treatment and disposal of sewage is important in public health because it",
    options: [
      "A. increases the number of flies",
      "B. prevents contamination of water supplies with pathogens",
      "C. provides food for humans",
      "D. spreads diseases faster"
    ],
    answer: "B",
    explanation: "Sewage treatment removes and destroys pathogens, preventing them from contaminating drinking water.",
    subtopic: "public health: refuse/sewage, immunization"
  },
  {
    question: "Which of the following is the best method of refuse disposal?",
    options: [
      "A. Dumping refuse into streams",
      "B. Controlled incineration or sanitary landfill",
      "C. Leaving refuse in open heaps near homes",
      "D. Throwing refuse on the road"
    ],
    answer: "B",
    explanation: "Incineration and sanitary landfill dispose of refuse safely, preventing disease and pollution.",
    subtopic: "public health: refuse/sewage, immunization"
  },
  {
    question: "The vaccine given to protect children against tuberculosis is",
    options: [
      "A. BCG",
      "B. OPV (polio)",
      "C. measles vaccine",
      "D. tetanus toxoid"
    ],
    answer: "A",
    explanation: "The BCG vaccine is given to protect against tuberculosis.",
    subtopic: "public health: refuse/sewage, immunization"
  },
  {
    question: "When a large proportion of a population is immunized, the resulting protection of the whole community is known as",
    options: [
      "A. natural immunity",
      "B. herd immunity",
      "C. passive immunity",
      "D. innate immunity"
    ],
    answer: "B",
    explanation: "Herd immunity occurs when enough people are immune that disease spread is limited, protecting even the unvaccinated.",
    subtopic: "public health: refuse/sewage, immunization"
  },
  {
    question: "The isolation of a person suffering from a highly infectious disease to prevent its spread is called",
    options: [
      "A. immunization",
      "B. quarantine",
      "C. sterilization",
      "D. fumigation"
    ],
    answer: "B",
    explanation: "Quarantine isolates infected or exposed individuals to prevent the spread of communicable disease.",
    subtopic: "public health: refuse/sewage, immunization"
  },
  {
    question: "Which of the following is a public health measure for controlling communicable diseases?",
    options: [
      "A. Provision of clean, treated pipe-borne water",
      "B. Dumping refuse in living areas",
      "C. Allowing open defecation",
      "D. Sharing personal items"
    ],
    answer: "A",
    explanation: "Providing clean, treated water prevents waterborne diseases and is a key public health measure.",
    subtopic: "public health: refuse/sewage, immunization"
  },
  {
    question: "In sewage treatment, the breakdown of organic matter is carried out mainly by",
    options: [
      "A. bacteria",
      "B. viruses",
      "C. fish",
      "D. algae only"
    ],
    answer: "A",
    explanation: "Bacteria decompose the organic matter in sewage during treatment, breaking it into simpler harmless substances.",
    subtopic: "public health: refuse/sewage, immunization"
  },
  {
    question: "The oral polio vaccine (OPV) is administered to protect children against",
    options: [
      "A. measles",
      "B. poliomyelitis",
      "C. whooping cough",
      "D. tetanus"
    ],
    answer: "B",
    explanation: "OPV protects children against poliomyelitis (polio), a viral disease that can cause paralysis.",
    subtopic: "public health: refuse/sewage, immunization"
  },
  {
    question: "The immunity gained when the body makes its own antibodies after receiving a vaccine is best described as",
    options: [
      "A. active acquired immunity",
      "B. passive natural immunity",
      "C. innate immunity",
      "D. no immunity"
    ],
    answer: "A",
    explanation: "Vaccination stimulates the body to make its own antibodies, giving active acquired immunity.",
    subtopic: "public health: refuse/sewage, immunization"
  },
  {
    question: "Proper community refuse disposal helps to control disease mainly by",
    options: [
      "A. attracting rats and flies",
      "B. removing breeding sites for disease vectors",
      "C. increasing bad odour",
      "D. polluting the air"
    ],
    answer: "B",
    explanation: "Proper refuse disposal removes breeding and feeding grounds for flies, rats and other vectors that spread disease.",
    subtopic: "public health: refuse/sewage, immunization"
  },
  {
    question: "Which government activity is an example of a public health measure against epidemics?",
    options: [
      "A. Mass immunization campaigns",
      "B. Building more roads",
      "C. Increasing taxes",
      "D. Distributing textbooks"
    ],
    answer: "A",
    explanation: "Mass immunization campaigns protect large populations against epidemic diseases such as measles and polio.",
    subtopic: "public health: refuse/sewage, immunization"
  }
];

module.exports = questions;
