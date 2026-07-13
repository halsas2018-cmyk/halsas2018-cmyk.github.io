// biology — Plant Nutrition
const questions = [
  // ----- photosynthesis: light/dark reactions -----
  {
    question: "What is the overall balanced equation of photosynthesis?",
    options: [
      "A. 6CO2 + 6H2O → C6H12O6 + 6O2",
      "B. C6H12O6 + 6O2 → 6CO2 + 6H2O",
      "C. 6CO2 + 6O2 → C6H12O6 + 6H2O",
      "D. C6H12O6 + 6H2O → 6CO2 + 12H2"
    ],
    answer: "A",
    explanation: "Photosynthesis uses six molecules each of carbon dioxide and water to produce one glucose and six oxygen molecules, requiring light and chlorophyll.",
    subtopic: "photosynthesis: light/dark reactions"
  },
  {
    question: "Where in the chloroplast does the light-dependent stage of photosynthesis occur?",
    options: [
      "A. Stroma",
      "B. Thylakoid membrane",
      "C. Outer membrane",
      "D. Grana lumen only, not membranes"
    ],
    answer: "B",
    explanation: "The light-dependent reactions take place on the thylakoid membranes where chlorophyll and the electron transport chain are located.",
    subtopic: "photosynthesis: light/dark reactions"
  },
  {
    question: "During the light-dependent reactions, water molecules are split. What is this process called?",
    options: [
      "A. Photolysis",
      "B. Hydrolysis",
      "C. Condensation",
      "D. Decarboxylation"
    ],
    answer: "A",
    explanation: "Photolysis is the light-driven splitting of water into hydrogen, electrons and oxygen, providing electrons for the photosystems.",
    subtopic: "photosynthesis: light/dark reactions"
  },
  {
    question: "Which products of the light-dependent reactions are used in the light-independent stage?",
    options: [
      "A. O2 and H2O",
      "B. ATP and NADPH",
      "C. Glucose and CO2",
      "D. RuBP and starch"
    ],
    answer: "B",
    explanation: "ATP and NADPH generated in the light reactions supply the energy and reducing power needed to fix carbon dioxide in the Calvin cycle.",
    subtopic: "photosynthesis: light/dark reactions"
  },
  {
    question: "The light-independent stage (Calvin cycle) takes place in which part of the chloroplast?",
    options: [
      "A. Thylakoid membrane",
      "B. Stroma",
      "C. Chlorophyll molecule",
      "D. Stomata"
    ],
    answer: "B",
    explanation: "The Calvin cycle occurs in the stroma, the fluid surrounding the thylakoids, where CO2 is fixed into sugar.",
    subtopic: "photosynthesis: light/dark reactions"
  },
  {
    question: "In the light-dependent stage, the splitting of water releases which gas as a by-product?",
    options: [
      "A. Carbon dioxide",
      "B. Nitrogen",
      "C. Oxygen",
      "D. Hydrogen"
    ],
    answer: "C",
    explanation: "Photolysis of water releases oxygen, which diffuses out of the leaf as a by-product of photosynthesis.",
    subtopic: "photosynthesis: light/dark reactions"
  },
  {
    question: "Which wavelengths of light are most strongly absorbed by chlorophyll?",
    options: [
      "A. Green and yellow",
      "B. Red and blue",
      "C. Infrared and ultraviolet",
      "D. Orange and green"
    ],
    answer: "B",
    explanation: "Chlorophyll absorbs mainly red and blue light and reflects green, which is why plants appear green.",
    subtopic: "photosynthesis: light/dark reactions"
  },
  {
    question: "What is the role of chlorophyll in photosynthesis?",
    options: [
      "A. It splits carbon dioxide",
      "B. It absorbs light energy and converts it to chemical energy",
      "C. It fixes glucose",
      "D. It transports water"
    ],
    answer: "B",
    explanation: "Chlorophyll traps light energy and channels it into the photosynthetic electron transport chain to make ATP and NADPH.",
    subtopic: "photosynthesis: light/dark reactions"
  },
  {
    question: "The light-independent reactions are also referred to as the:",
    options: [
      "A. Hill reaction",
      "B. Calvin cycle",
      "C. Krebs cycle",
      "D. Electron transport chain"
    ],
    answer: "B",
    explanation: "The Calvin cycle is the set of light-independent reactions that fixes CO2 into carbohydrate using ATP and NADPH.",
    subtopic: "photosynthesis: light/dark reactions"
  },
  {
    question: "Light energy is converted into chemical energy in the form of:",
    options: [
      "A. Starch and cellulose",
      "B. ATP and NADPH",
      "C. Carbon dioxide and water",
      "D. Chlorophyll and RuBP"
    ],
    answer: "B",
    explanation: "During the light reactions, light energy is captured and stored temporarily in the energy carriers ATP and NADPH.",
    subtopic: "photosynthesis: light/dark reactions"
  },

  // ----- photosynthesis: evidence -----
  {
    question: "A variegated leaf (with green and white patches) is tested with iodine after exposure to light. What does the result show?",
    options: [
      "A. Starch forms only in the white patches",
      "B. Starch forms only in the green patches",
      "C. Starch forms all over the leaf",
      "D. No starch forms anywhere"
    ],
    answer: "B",
    explanation: "Only green (chlorophyll-containing) tissue photosynthesises and stores starch, proving chlorophyll is needed for photosynthesis.",
    subtopic: "photosynthesis: evidence"
  },
  {
    question: "Before testing a leaf for starch, why is the plant usually kept in darkness for 24–48 hours?",
    options: [
      "A. To kill the leaf",
      "B. To remove (destarch) stored starch",
      "C. To absorb extra CO2",
      "D. To harden the cuticle"
    ],
    answer: "B",
    explanation: "Keeping the plant in the dark de-starches the leaves so any starch later found must have been made during the experiment.",
    subtopic: "photosynthesis: evidence"
  },
  {
    question: "Which reagent is used to test a leaf for the presence of starch?",
    options: [
      "A. Benedict's solution",
      "B. Iodine solution",
      "C. Biuret reagent",
      "D. Silver nitrate"
    ],
    answer: "B",
    explanation: "Iodine solution turns blue-black in the presence of starch, the stored product of photosynthesis.",
    subtopic: "photosynthesis: evidence"
  },
  {
    question: "In the experiment showing that CO2 is needed for photosynthesis, what chemical is placed with the leaf to absorb CO2?",
    options: [
      "A. Potassium hydroxide",
      "B. Sodium chloride",
      "C. Glucose",
      "D. Calcium carbonate"
    ],
    answer: "A",
    explanation: "Potassium hydroxide absorbs carbon dioxide; a leaf kept with it cannot photosynthesise and so does not form starch.",
    subtopic: "photosynthesis: evidence"
  },
  {
    question: "What is produced by pondweed (e.g. Elodea) in light that provides evidence for photosynthesis?",
    options: [
      "A. Carbon dioxide bubbles",
      "B. Oxygen bubbles",
      "C. Nitrogen gas",
      "D. Glucose crystals"
    ],
    answer: "B",
    explanation: "Elodea releases oxygen bubbles in light, a direct visible sign that photosynthesis is occurring.",
    subtopic: "photosynthesis: evidence"
  },
  {
    question: "What is the purpose of boiling a leaf in alcohol (ethanol) during a starch test?",
    options: [
      "A. To fix the chlorophyll colour",
      "B. To remove chlorophyll so iodine colour shows",
      "C. To add starch",
      "D. To soften the cell wall permanently"
    ],
    answer: "B",
    explanation: "Hot ethanol decolourises the leaf by dissolving chlorophyll, allowing the blue-black iodine-starch colour to be seen.",
    subtopic: "photosynthesis: evidence"
  },
  {
    question: "An experiment with a leaf partially covered by black paper and exposed to light shows starch only in the uncovered area. This proves that:",
    options: [
      "A. Chlorophyll is needed",
      "B. Light is needed for photosynthesis",
      "C. CO2 is needed",
      "D. Water is needed"
    ],
    answer: "B",
    explanation: "Only the exposed (lit) part makes starch, demonstrating that light is essential for photosynthesis.",
    subtopic: "photosynthesis: evidence"
  },
  {
    question: "The bicarbonate indicator is sometimes used to show that photosynthesis:",
    options: [
      "A. Produces protein",
      "B. Removes carbon dioxide from water",
      "C. Releases nitrogen",
      "D. Produces starch directly"
    ],
    answer: "B",
    explanation: "As a photosynthesising plant takes up CO2, the bicarbonate indicator changes colour, showing CO2 is consumed.",
    subtopic: "photosynthesis: evidence"
  },
  {
    question: "After the starch test, a leaf that was in darkness throughout the experiment will:",
    options: [
      "A. Turn blue-black all over",
      "B. Remain brown/yellow (no blue-black)",
      "C. Turn red",
      "D. Turn green"
    ],
    answer: "B",
    explanation: "Without light no starch is made, so the iodine gives no blue-black colour and the leaf stays its original colour.",
    subtopic: "photosynthesis: evidence"
  },
  {
    question: "Which of these experiments provides evidence that chlorophyll is essential for photosynthesis?",
    options: [
      "A. Pondweed oxygen bubbles in light",
      "B. Variegated leaf iodine test",
      "C. Potassium hydroxide with a leaf",
      "D. Boiling leaf in ethanol"
    ],
    answer: "B",
    explanation: "The variegated leaf test shows starch only in green tissue, directly linking chlorophyll to starch production.",
    subtopic: "photosynthesis: evidence"
  },

  // ----- photosynthesis: materials -----
  {
    question: "Through which structures does carbon dioxide enter a leaf for photosynthesis?",
    options: [
      "A. Xylem vessels",
      "B. Stomata",
      "C. Phloem sieve tubes",
      "D. Root hairs"
    ],
    answer: "B",
    explanation: "CO2 diffuses into the leaf through stomata on the underside of the leaf.",
    subtopic: "photosynthesis: materials"
  },
  {
    question: "Water needed for photosynthesis reaches the leaf through the:",
    options: [
      "A. Phloem",
      "B. Xylem",
      "C. Stomata",
      "D. Cuticle"
    ],
    answer: "B",
    explanation: "Water absorbed by roots is transported upwards to the leaves in the xylem tissue.",
    subtopic: "photosynthesis: materials"
  },
  {
    question: "In which cells of the leaf does most photosynthesis occur?",
    options: [
      "A. Epidermal cells",
      "B. Mesophyll cells",
      "C. Guard cells only",
      "D. Xylem cells"
    ],
    answer: "B",
    explanation: "Mesophyll cells (palisade and spongy) contain many chloroplasts and are the main photosynthetic tissue.",
    subtopic: "photosynthesis: materials"
  },
  {
    question: "The organelle containing chlorophyll where photosynthesis takes place is the:",
    options: [
      "A. Mitochondrion",
      "B. Chloroplast",
      "C. Nucleus",
      "D. Vacuole"
    ],
    answer: "B",
    explanation: "Chloroplasts house chlorophyll and the photosynthetic machinery within leaf cells.",
    subtopic: "photosynthesis: materials"
  },
  {
    question: "Which of the following is a raw material but NOT a product of photosynthesis?",
    options: [
      "A. Glucose",
      "B. Carbon dioxide",
      "C. Oxygen",
      "D. Carbohydrate"
    ],
    answer: "B",
    explanation: "Carbon dioxide is taken in as a raw material and is consumed, whereas glucose and oxygen are products.",
    subtopic: "photosynthesis: materials"
  },
  {
    question: "The main product of photosynthesis that is transported to other parts of the plant is:",
    options: [
      "A. Starch only",
      "B. Sucrose (dissolved sugar)",
      "C. Oxygen gas",
      "D. Cellulose"
    ],
    answer: "B",
    explanation: "Sugars such as sucrose are transported in the phloem; starch is stored locally and must be converted first.",
    subtopic: "photosynthesis: materials"
  },
  {
    question: "Which factor is NOT directly a raw material of photosynthesis?",
    options: [
      "A. Carbon dioxide",
      "B. Water",
      "C. Light energy",
      "D. Oxygen"
    ],
    answer: "D",
    explanation: "Oxygen is a by-product, not a raw material; CO2, water and light energy are the inputs.",
    subtopic: "photosynthesis: materials"
  },
  {
    question: "Guard cells control the opening and closing of the:",
    options: [
      "A. Xylem",
      "B. Stomata",
      "C. Phloem",
      "D. Cuticle"
    ],
    answer: "B",
    explanation: "Guard cells surround each stoma and regulate its opening to control gas exchange for photosynthesis.",
    subtopic: "photosynthesis: materials"
  },
  {
    question: "The waxy layer on the leaf surface that reduces water loss is the:",
    options: [
      "A. Cuticle",
      "B. Stoma",
      "C. Xylem",
      "D. Mesophyll"
    ],
    answer: "A",
    explanation: "The cuticle is a waxy waterproof layer covering the epidermis that limits transpiration.",
    subtopic: "photosynthesis: materials"
  },
  {
    question: "Photosynthesis results in the formation of which two major outputs?",
    options: [
      "A. CO2 and water",
      "B. Glucose and oxygen",
      "C. Protein and fat",
      "D. Starch and nitrogen"
    ],
    answer: "B",
    explanation: "The net products of photosynthesis are organic food (glucose) and oxygen gas.",
    subtopic: "photosynthesis: materials"
  },

  // ----- mineral requirements: macro/micro -----
  {
    question: "Which of the following is NOT a macronutrient required by plants?",
    options: [
      "A. Nitrogen",
      "B. Phosphorus",
      "C. Iron",
      "D. Potassium"
    ],
    answer: "C",
    explanation: "Iron is a micronutrient needed in trace amounts; nitrogen, phosphorus and potassium are macronutrients.",
    subtopic: "mineral requirements: macro/micro"
  },
  {
    question: "Nitrogen is mainly required by plants for the synthesis of:",
    options: [
      "A. Cellulose",
      "B. Proteins and amino acids",
      "C. Starch",
      "D. Fats only"
    ],
    answer: "B",
    explanation: "Nitrogen is a component of amino acids and proteins, essential for growth and enzyme function.",
    subtopic: "mineral requirements: macro/micro"
  },
  {
    question: "Magnesium is an important component of which molecule?",
    options: [
      "A. Haemoglobin",
      "B. Chlorophyll",
      "C. DNA",
      "D. Cellulose"
    ],
    answer: "B",
    explanation: "Magnesium sits at the centre of the chlorophyll molecule and is vital for light absorption.",
    subtopic: "mineral requirements: macro/micro"
  },
  {
    question: "Phosphorus is important in plants because it is part of:",
    options: [
      "A. ATP and DNA",
      "B. Cellulose only",
      "C. Starch granules",
      "D. The cuticle"
    ],
    answer: "A",
    explanation: "Phosphorus is in ATP (energy transfer) and nucleic acids such as DNA and RNA.",
    subtopic: "mineral requirements: macro/micro"
  },
  {
    question: "A plant showing yellowing of older leaves (chlorosis) may be deficient in:",
    options: [
      "A. Magnesium",
      "B. Copper",
      "C. Molybdenum",
      "D. Zinc"
    ],
    answer: "A",
    explanation: "Magnesium is mobile, so deficiency shows first as yellowing (chlorosis) of older leaves.",
    subtopic: "mineral requirements: macro/micro"
  },
  {
    question: "Which element is a micronutrient needed for chlorophyll formation and is a component of cytochromes?",
    options: [
      "A. Calcium",
      "B. Iron",
      "C. Potassium",
      "D. Sulphur"
    ],
    answer: "B",
    explanation: "Iron is a trace element required for chlorophyll synthesis and for electron-carrying cytochromes.",
    subtopic: "mineral requirements: macro/micro"
  },
  {
    question: "Potassium is important in plants mainly for:",
    options: [
      "A. Forming proteins",
      "B. Enzyme activation and opening stomata",
      "C. Building cell walls",
      "D. Storing starch"
    ],
    answer: "B",
    explanation: "Potassium activates many enzymes and helps guard cells regulate stomatal opening.",
    subtopic: "mineral requirements: macro/micro"
  },
  {
    question: "Which of these is a micronutrient?",
    options: [
      "A. Nitrogen",
      "B. Calcium",
      "C. Zinc",
      "D. Magnesium"
    ],
    answer: "C",
    explanation: "Zinc is required only in trace amounts and is therefore a micronutrient.",
    subtopic: "mineral requirements: macro/micro"
  },
  {
    question: "Calcium in plants is mainly needed for:",
    options: [
      "A. Energy transfer",
      "B. Cell wall formation (calcium pectate)",
      "C. Chlorophyll synthesis",
      "D. Nitrogen fixation"
    ],
    answer: "B",
    explanation: "Calcium is a structural component of middle lamella (calcium pectate) binding cell walls.",
    subtopic: "mineral requirements: macro/micro"
  },
  {
    question: "Molybdenum is specifically required by plants for the enzyme:",
    options: [
      "A. Catalase",
      "B. Nitrate reductase",
      "C. Amylase",
      "D. Pepsin"
    ],
    answer: "B",
    explanation: "Molybdenum is a cofactor for nitrate reductase, needed to reduce nitrate to ammonium for protein synthesis.",
    subtopic: "mineral requirements: macro/micro"
  },

  // ----- mineral requirements: soil/atmosphere -----
  {
    question: "Nitrogen-fixing bacteria living in root nodules of legumes are called:",
    options: [
      "A. Azotobacter",
      "B. Rhizobium",
      "C. Nitrosomonas",
      "D. Pseudomonas"
    ],
    answer: "B",
    explanation: "Rhizobium lives symbiotically in legume root nodules and fixes atmospheric nitrogen into usable forms.",
    subtopic: "mineral requirements: soil/atmosphere"
  },
  {
    question: "Which process converts atmospheric nitrogen (N2) into nitrates in the soil via lightning and industry?",
    options: [
      "A. Denitrification",
      "B. Nitrogen fixation",
      "C. Ammonification",
      "D. Transpiration"
    ],
    answer: "B",
    explanation: "Nitrogen fixation converts N2 into nitrogen compounds (nitrates) usable by plants, occurring biologically, by lightning and industrially.",
    subtopic: "mineral requirements: soil/atmosphere"
  },
  {
    question: "Mineral salts are absorbed from the soil mainly by the:",
    options: [
      "A. Xylem vessels",
      "B. Root hairs",
      "C. Stomata",
      "D. Leaf epidermis"
    ],
    answer: "B",
    explanation: "Root hairs greatly increase surface area for the absorption of water and dissolved mineral ions.",
    subtopic: "mineral requirements: soil/atmosphere"
  },
  {
    question: "The washing away of soluble minerals from the soil by heavy rain is called:",
    options: [
      "A. Erosion",
      "B. Leaching",
      "C. Transpiration",
      "D. Fixation"
    ],
    answer: "B",
    explanation: "Leaching removes soluble nutrients (e.g. nitrates) from topsoil down beyond the reach of roots.",
    subtopic: "mineral requirements: soil/atmosphere"
  },
  {
    question: "Which group of soil bacteria converts ammonium compounds into nitrites and then nitrates?",
    options: [
      "A. Denitrifying bacteria",
      "B. Nitrifying bacteria",
      "C. Rhizobium",
      "D. Decay fungi"
    ],
    answer: "B",
    explanation: "Nitrifying bacteria (e.g. Nitrosomonas, Nitrobacter) oxidise ammonium to nitrite then nitrate.",
    subtopic: "mineral requirements: soil/atmosphere"
  },
  {
    question: "Denitrification is the process by which bacteria convert:",
    options: [
      "A. N2 into nitrates",
      "B. Nitrates back into nitrogen gas",
      "C. Ammonium into proteins",
      "D. Proteins into ammonia"
    ],
    answer: "B",
    explanation: "Denitrifying bacteria return nitrogen to the atmosphere as N2, reducing soil nitrate availability.",
    subtopic: "mineral requirements: soil/atmosphere"
  },
  {
    question: "Azotobacter is an example of a free-living nitrogen-fixing bacterium found in the:",
    options: [
      "A. Root nodules",
      "B. Soil",
      "C. Leaf mesophyll",
      "D. Xylem"
    ],
    answer: "B",
    explanation: "Unlike Rhizobium, Azotobacter fixes nitrogen freely in the soil without a plant host.",
    subtopic: "mineral requirements: soil/atmosphere"
  },
  {
    question: "Which of these is a natural atmospheric source of nitrogen compounds for the soil?",
    options: [
      "A. Photosynthesis",
      "B. Lightning",
      "C. Transpiration",
      "D. Leaching"
    ],
    answer: "B",
    explanation: "Lightning fixes atmospheric nitrogen into oxides that fall as nitrate in rain, enriching soil.",
    subtopic: "mineral requirements: soil/atmosphere"
  },
  {
    question: "Rotting of dead plants and animals releases ammonium compounds in a process called:",
    options: [
      "A. Ammonification",
      "B. Nitrification",
      "C. Fixation",
      "D. Leaching"
    ],
    answer: "A",
    explanation: "Ammonification by decomposers returns nitrogen to the soil as ammonium from organic matter.",
    subtopic: "mineral requirements: soil/atmosphere"
  },
  {
    question: "Legumes are able to enrich the soil with nitrogen because they:",
    options: [
      "A. Absorb nitrates faster",
      "B. Host nitrogen-fixing bacteria in root nodules",
      "C. Perform photosynthesis underground",
      "D. Release oxygen into soil"
    ],
    answer: "B",
    explanation: "Legume-Rhizobium symbiosis fixes atmospheric nitrogen, leaving residual nitrogen in the soil.",
    subtopic: "mineral requirements: soil/atmosphere"
  },
  {
    question: "Farmers add fertilisers to soil mainly to replace minerals lost through:",
    options: [
      "A. Respiration",
      "B. Harvesting crops and leaching",
      "C. Photosynthesis",
      "D. Transpiration"
    ],
    answer: "B",
    explanation: "Crops remove minerals and leaching washes them away, so fertilisers replenish nitrogen, phosphorus and potassium.",
    subtopic: "mineral requirements: soil/atmosphere"
  }
];

module.exports = questions;
