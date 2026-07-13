import intro from "./intro/index.js";
import atom from "./atom/index.js";
import separation from "./separation/index.js";
import periodic from "./periodic/index.js";
import bonding from "./bonding/index.js";
import stoich from "./stoich/index.js";
import states from "./states/index.js";
import acids from "./acids/index.js";
import kinetics from "./kinetics/index.js";
import redox from "./redox/index.js";
import organic from "./organic/index.js";
import industry from "./industry/index.js";
import biochem from "./biochem/index.js";
import metals from "./metals/index.js";
import practical from "./practical/index.js";

const topics = [
  { topicId: "intro", topicName: "Introduction to Chemistry", experiments: intro },
  { topicId: "atom", topicName: "Structure of the Atom", experiments: atom },
  { topicId: "separation", topicName: "Separation Techniques", experiments: separation },
  { topicId: "periodic", topicName: "Periodic Table", experiments: periodic },
  { topicId: "bonding", topicName: "Chemical Bonds", experiments: bonding },
  { topicId: "stoich", topicName: "Stoichiometry", experiments: stoich },
  { topicId: "states", topicName: "States of Matter", experiments: states },
  { topicId: "acids", topicName: "Acids, Bases and Salts", experiments: acids },
  { topicId: "kinetics", topicName: "Chemical Kinetics", experiments: kinetics },
  { topicId: "redox", topicName: "Redox Reactions", experiments: redox },
  { topicId: "organic", topicName: "Organic Chemistry", experiments: organic },
  { topicId: "industry", topicName: "Chemistry and Environment", experiments: industry },
  { topicId: "biochem", topicName: "Biochemistry and Polymers", experiments: biochem },
  { topicId: "metals", topicName: "Metals and Their Compounds", experiments: metals },
  { topicId: "practical", topicName: "Practical Chemistry", experiments: practical },
];

export default topics;
