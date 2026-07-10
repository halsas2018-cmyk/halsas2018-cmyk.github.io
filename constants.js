// ─── CONFIGURATION ────────────────────────────────────────────────────────────
// Edit this file to change WhatsApp number, colors, subjects and topics

export const WHATSAPP_NUMBER = "2348038467156";

export const SUBJECTS = [
  {
    id: "Chemistry",
    icon: "👨🏽‍🔬",
    accent: "#16a34a",
    light: "#f0fdf4",
    border: "#bbf7d0",
    pill: "#dcfce7",
    pillText: "#166534",
    topics: [
      { id: "intro", name: "Introduction to Chemistry", subtopics: ["Measurement", "SI units", "Scientific method"] },
      { id: "atom", name: "Structure of the Atom", subtopics: ["Dalton's theory", "Atomic number", "Electron configurations"] },
      { id: "separation", name: "Separation Techniques", subtopics: ["Crystallization", "Distillation", "Chromatography"] },
      { id: "periodic", name: "Periodic Table", subtopics: ["Periodic law", "Groups and periods", "Periodic properties"] },
      { id: "bonding", name: "Chemical Bonds", subtopics: ["Ionic bonds", "Covalent bonds", "Metallic bonding"] },
      { id: "stoich", name: "Stoichiometry", subtopics: ["Mole concept", "Empirical formula", "Chemical equations"] },
      { id: "states", name: "States of Matter", subtopics: ["Kinetic theory", "Gas laws", "Changes of state"] },
      { id: "acids", name: "Acids, Bases and Salts", subtopics: ["Properties of acids", "pH scale", "Salt preparation"] },
      { id: "kinetics", name: "Chemical Kinetics", subtopics: ["Rate of reaction", "Collision theory", "Equilibrium"] },
      { id: "redox", name: "Redox Reactions", subtopics: ["Oxidation numbers", "Electrochemical cells", "Electrolysis"] },
      { id: "organic", name: "Organic Chemistry", subtopics: ["Hydrocarbons", "Functional groups", "IUPAC naming"] },
      { id: "industry", name: "Chemistry and Environment", subtopics: ["Pollution", "Greenhouse effect", "Biotechnology"] },
      { id: "biochem", name: "Biochemistry and Polymers", subtopics: ["Proteins", "Carbohydrates", "Fats and oils"] },
      { id: "metals", name: "Metals and Their Compounds", subtopics: ["Extraction of metals", "Alloys", "Corrosion"] },
      { id: "practical", name: "Practical Chemistry", subtopics: ["Titrations", "Qualitative analysis", "Tests for gases"] },
    ]
  },
  { id: "Biology", icon: "🧬", accent: "#2563eb", light: "#eff6ff", border: "#bfdbfe", comingSoon: true },
  { id: "Physics", icon: "⚡", accent: "#7c3aed", light: "#faf5ff", border: "#e9d5ff", comingSoon: true },
];

// ─── SESSION PRICES ────────────────────────────────────────────────────────────
// Edit these to change tutorial booking prices
export const YOUTUBE_URL = 'https://youtube.com/@scipractice';
export const WEBSITE_URL = 'https://halsas2018-cmyk.github.io';
export const LOCKED_TOPICS = ['organic', 'industry', 'biochem', 'metals', 'practical'];

export const SESSION_PRICES = [
  { duration: "30 mins", label: "Quick doubt clearing", price: "₦2,000" },
  { duration: "1 hour",  label: "Full topic session",   price: "₦3,500" },
  { duration: "2 hours", label: "Exam crash course",    price: "₦6,500" },
];
