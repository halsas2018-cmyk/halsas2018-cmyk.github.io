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
      { id: "energy", name: "Energy and Energy Changes", subtopics: ["Energy and enthalpy", "Exothermic and endothermic", "Enthalpy changes"] },
      { id: "solubility", name: "Solubility of Substances", subtopics: ["Meaning of solubility", "Saturated and unsaturated", "Solubility curves", "Crystallization", "Solubility rules"] },
      { id: "nonmetals", name: "Non-Metals and Their Compounds", subtopics: ["Carbon and allotropes", "Carbon (IV) oxide", "Oxygen", "Hydrogen", "Water and hardness", "Chlorine", "Ammonia", "Nitric acid and salts"] },
    ]
  },
  {
    id: "Biology",
    icon: "🧬",
    accent: "#2563eb",
    light: "#eff6ff",
    border: "#bfdbfe",
    comingSoon: false,
    topics: [
      // Section A (all candidates)
      { id: "secA-classification", name: "Classification of Living Things", subtopics: ["Living & non-living", "Kingdoms", "Plants vs animals"] },
      { id: "secA-organization", name: "Organization of Life", subtopics: ["Levels of organization", "Complexity"] },
      { id: "secA-forms-of-cells", name: "Forms of Living Cells", subtopics: ["Single & free-living", "Colony", "Filament", "Part of organism"] },
      { id: "secA-cell-structure", name: "Cell Structure & Functions", subtopics: ["Cell components", "Functions"] },
      { id: "secA-cell-environment", name: "Cell & Environment", subtopics: ["Diffusion", "Osmosis", "Active transport"] },
      { id: "secA-cell-properties", name: "Properties & Functions of Living Cells", subtopics: ["Nutrition", "Respiration", "Excretion", "Growth & development", "Movement", "Reproduction"] },
      { id: "secA-supporting-tissues", name: "Tissues & Supporting Systems", subtopics: ["Skeleton", "Plant supporting tissues"] },
      { id: "secA-transport", name: "Transport in Living Things", subtopics: ["Need for transport", "Animals", "Plants"] },
      { id: "secA-respiratory-system", name: "Respiratory System", subtopics: ["Respiratory surfaces", "Gaseous exchange"] },
      { id: "secA-excretory-systems", name: "Excretory Systems & Mechanisms", subtopics: ["Excretion", "Mechanisms"] },
      { id: "secA-internal-environment", name: "Regulation of Internal Environment", subtopics: ["Kidney", "Liver", "Skin"] },
      { id: "secA-hormonal", name: "Hormonal Coordination", subtopics: ["Animal hormones", "Plant hormones"] },
      { id: "secA-nervous", name: "Nervous Coordination", subtopics: ["CNS", "PNS", "Reflex arc"] },
      { id: "secA-sense-organs", name: "Sense Organs", subtopics: ["Eye", "Ear"] },
      { id: "secA-reproduction", name: "Reproduction", subtopics: ["Male & female", "Metamorphosis", "Flowering plants"] },
      { id: "secA-plant-nutrition", name: "Plant Nutrition", subtopics: ["Photosynthesis", "Mineral requirements"] },
      { id: "secA-animal-nutrition", name: "Animal Nutrition", subtopics: ["Food substances", "Digestive enzymes", "Alimentary system", "Dental formula"] },
      { id: "secA-ecosystem", name: "Ecosystem", subtopics: ["Ecological components"] },
      { id: "secA-ecol-factors", name: "Ecological Factors", subtopics: ["Physical factors", "Edaphic factors"] },
      { id: "secA-ecol-measurement", name: "Simple Measurement of Ecological Factors", subtopics: ["Measurement"] },
      { id: "secA-food-webs", name: "Food Webs & Trophic Levels", subtopics: ["Autotrophs/heterotrophs", "Trophic levels", "Decomposition"] },
      { id: "secA-energy-flow", name: "Energy Flow", subtopics: ["Food/energy relationships", "Pyramid of energy/numbers"] },
      { id: "secA-ecol-management", name: "Ecological Management", subtopics: ["Biological associations", "Adaptation", "Pollution"] },
      { id: "secA-ecol-population", name: "Ecology of Population", subtopics: ["Succession", "Pest control"] },
      { id: "secA-microorganisms", name: "Microorganisms & Health", subtopics: ["Carriers", "Beneficial/harmful", "Public health"] },
      { id: "secA-conservation-resources", name: "Resources to Conserve", subtopics: ["Soil", "Water", "Forest", "Wildlife"] },
      { id: "secA-conservation-ways", name: "Ways of Ensuring Conservation", subtopics: ["Agencies", "Laws", "Benefits"] },
      { id: "secA-variation-morphological", name: "Morphological Variations", subtopics: ["Size/height/weight", "Fingerprints"] },
      { id: "secA-variation-physiological", name: "Physiological Variations", subtopics: ["Tongue roll", "Taste", "Blood groups"] },
      { id: "secA-genetics-terms", name: "Genetic Terminologies", subtopics: ["Terminologies"] },
      { id: "secA-genetics-transmission", name: "Transmission & Expression of Characteristics", subtopics: ["Transmission"] },
      { id: "secA-genetics-probability", name: "Probability in Genetics", subtopics: ["Hybrid formation"] },
      { id: "secA-genetics-linkage", name: "Linkage, Sex Determination & Sex-linked Characters", subtopics: ["Linkage", "Sex determination", "Sex-linked"] },
      { id: "secA-genetics-applications", name: "Applications of Heredity Principles", subtopics: ["Applications"] },
      { id: "secA-behavioural-adaptation", name: "Behavioural Adaptations in Social Animals", subtopics: ["Social animals"] },
      { id: "secA-evolution", name: "Evolution", subtopics: ["Evolution"] },
      // Section C (Nigeria/Sierra Leone/Gambia/Liberia)
      { id: "secC-cell-theory", name: "Cell Theory", subtopics: ["Cell theory"] },
      { id: "secC-irritability", name: "Irritability as Basic Characteristic", subtopics: ["Irritability"] },
      { id: "secC-excretory", name: "Excretory Systems", subtopics: ["Excretion"] },
      { id: "secC-sense-organs", name: "Sense Organs", subtopics: ["Sense organs"] },
      { id: "secC-reproduction", name: "Reproduction", subtopics: ["Reproduction"] },
      { id: "secC-nitrogen-cycle", name: "Nitrogen Cycle", subtopics: ["Nitrogen cycle"] },
      { id: "secC-modes-nutrition", name: "Modes of Nutrition", subtopics: ["Modes"] },
      { id: "secC-alimentary", name: "Alimentary System", subtopics: ["Alimentary system"] },
      { id: "secC-feeding-habits", name: "Feeding Habits", subtopics: ["Feeding habits"] },
      { id: "secC-components", name: "Ecological Components", subtopics: ["Components"] },
      { id: "secC-energy-transform", name: "Energy Transformation in Nature", subtopics: ["Energy transformation"] },
      { id: "secC-nutrient-cycling", name: "Nutrient Cycling in Nature", subtopics: ["Nutrient cycling"] },
      { id: "secC-management", name: "Ecological Management", subtopics: ["Tolerance", "Minimum/maximum"] },
      { id: "secC-habitats", name: "Habitats", subtopics: ["Habitats"] },
      { id: "secC-agric-relevance", name: "Relevance of Biology to Agriculture", subtopics: ["Agriculture"] },
      { id: "secC-microorganisms", name: "Microorganisms: Man and His Health", subtopics: ["Microorganisms"] },
      { id: "secC-crime-detection", name: "Crime Detection", subtopics: ["Crime detection"] },
      { id: "secC-blood-transfusion", name: "Blood Transfusion", subtopics: ["Blood transfusion"] },
      { id: "secC-paternity", name: "Determination of Paternity", subtopics: ["Paternity"] },
      { id: "secC-adaptation-survival", name: "Adaptation for Survival", subtopics: ["Adaptation"] },
      { id: "secC-structural-adaptation", name: "Structural Adaptation", subtopics: ["Structural"] },
      { id: "secC-adaptive-colouration", name: "Adaptive Colouration", subtopics: ["Adaptive colouration"] },
    ]
  },
  {
    id: "Physics",
    icon: "⚡",
    accent: "#7c3aed",
    light: "#faf5ff",
    border: "#e9d5ff",
    comingSoon: false,
    topics: [
      // PART I — Interaction of Matter, Space & Time
      { id: "p1-concepts-of-matter", name: "Concepts of Matter", subtopics: ["Structure of matter"] },
      { id: "p1-quantities-units", name: "Fundamental & Derived Quantities and Units", subtopics: ["Fundamental quantities", "Derived quantities"] },
      { id: "p1-position-distance", name: "Position, Distance and Displacement", subtopics: ["Position", "Measurement of distance", "Direction", "Distance vs displacement"] },
      { id: "p1-mass-weight", name: "Mass and Weight", subtopics: ["Mass", "Weight", "Distinction"] },
      { id: "p1-time", name: "Time", subtopics: ["Concept of time", "Measurement of time"] },
      { id: "p1-fluid-at-rest", name: "Fluids at Rest", subtopics: ["Volume/density/relative density", "Pressure in fluids", "Equilibrium of bodies", "Archimedes' principle", "Law of flotation"] },
      { id: "p1-motion", name: "Motion", subtopics: ["Types of motion", "Relative motion", "Cause of motion", "Types of force", "Solid friction", "Viscosity", "Circular motion"] },
      { id: "p1-speed-velocity", name: "Speed and Velocity", subtopics: ["Speed", "Velocity", "Uniform/non-uniform", "Distance-time graph"] },
      { id: "p1-acceleration", name: "Rectilinear Acceleration", subtopics: ["Acceleration/deceleration", "Uniform/non-uniform", "Velocity-time graph", "Equations of motion", "Motion under gravity"] },
      { id: "p1-scalars-vectors", name: "Scalars and Vectors", subtopics: ["Scalars", "Vectors", "Vector representation", "Addition of vectors", "Resolution of vectors", "Resultant velocity"] },
      { id: "p1-equilibrium-forces", name: "Equilibrium of Forces", subtopics: ["Principle of moments", "Conditions for equilibrium", "Centre of gravity & stability"] },
      { id: "p1-shm", name: "Simple Harmonic Motion", subtopics: ["Illustration & explanation", "Speed & acceleration", "Period/frequency/amplitude", "Energy of S.H.M", "Forced vibration & resonance"] },
      { id: "p1-newtons-laws", name: "Newton's Laws of Motion", subtopics: ["First law", "Second law", "Third law"] },
      // PART II — Energy: Mechanical and Heat
      { id: "p2-energy", name: "Energy", subtopics: ["Forms of energy", "World energy resources", "Conservation of energy"] },
      { id: "p2-work-energy-power", name: "Work, Energy and Power", subtopics: ["Concept of work", "Concept of energy", "Work in gravitational field", "Mechanical energy", "Conservation of mechanical energy", "Power", "Applications"] },
      { id: "p2-heat-energy", name: "Heat Energy", subtopics: ["Temperature & measurement", "Effects of heat", "Thermal expansion", "Heat transfer", "Gas laws", "Measurement of heat", "Latent heat", "Vapour & vapour pressure", "Humidity"] },
      // PART III — Waves
      { id: "p3-production-waves", name: "Production and Propagation of Waves", subtopics: ["Production", "Pulsating system", "Waveform", "Mathematical relationship"] },
      { id: "p3-types-waves", name: "Types of Waves", subtopics: ["Transverse & longitudinal", "Mathematical representation"] },
      { id: "p3-properties-waves", name: "Properties of Waves", subtopics: ["Properties"] },
      { id: "p3-light-waves", name: "Light Waves", subtopics: ["Sources of light", "Rectilinear propagation", "Reflection (plane)", "Reflection (curved)", "Refraction (plane)", "Refraction (curved)", "Lenses", "Dispersion"] },
      { id: "p3-electromagnetic-waves", name: "Electromagnetic Waves", subtopics: ["Types & uses"] },
      { id: "p3-sound-waves", name: "Sound Waves", subtopics: ["Sources", "Transmission", "Speed of sound", "Echoes", "Noise & music", "Characteristics", "Vibration in strings", "Resonance", "Vibration in pipes"] },
      // PART IV — Fields
      { id: "p4-fields-properties", name: "Description & Properties of Fields", subtopics: ["Concept of fields", "Properties of a force field"] },
      { id: "p4-gravitational-field", name: "Gravitational Field", subtopics: ["Acceleration due to gravity", "Gravitational force", "Gravitational potential & escape velocity"] },
      { id: "p4-electric-field", name: "Electric Field", subtopics: ["Electrostatics", "Current electricity"] },
      { id: "p4-magnetic-field", name: "Magnetic Field", subtopics: ["Properties of magnets", "Magnetization", "Concept of magnetic field", "Magnetic force", "Electromagnets", "Earth's magnetic field"] },
      { id: "p4-electromagnetic-field", name: "Electromagnetic Field", subtopics: ["Concept", "Electromagnetic induction", "Inductance", "Eddy currents", "Power transmission"] },
      // PART V — Atomic and Nuclear Physics
      { id: "p5-ac-circuits", name: "Simple a.c. Circuits", subtopics: ["Graphical representation of e.m.f", "Peak & r.m.s values", "Reactance & impedance", "Vector diagrams", "Resonance", "Power"] },
      { id: "p5-structure-atom", name: "Structure of the Atom", subtopics: ["Models of the atom", "Energy quantization", "Photoelectric effect", "Thermionic emission"] },
      { id: "p5-structure-nucleus", name: "Structure of the Nucleus", subtopics: ["Composition of nucleus", "Radioactivity", "Nuclear reactions"] },
      { id: "p5-wave-particle", name: "Wave-Particle Paradox", subtopics: ["Electron diffraction", "Duality of matter"] },
      // Harmonised topics for all member countries
      { id: "all-derived-dimensions", name: "Derived Quantities & Dimensional Analysis", subtopics: ["Dimensional analysis"] },
      { id: "all-projectile", name: "Projectile Motion", subtopics: ["Concept", "Applications"] },
      { id: "all-satellites-rockets", name: "Satellites and Rockets", subtopics: ["Satellites", "Rockets"] },
      { id: "all-elastic-solids", name: "Elastic Properties of Solids", subtopics: ["Elastic behaviour", "Stress & strain"] },
      { id: "all-fibre-optics", name: "Fibre Optics", subtopics: ["Fibre optics"] },
      { id: "all-laser", name: "Introduction to LASER", subtopics: ["LASER"] },
      { id: "all-magnetic-materials", name: "Magnetic Materials", subtopics: ["Uses of magnets", "Ferromagnetic materials"] },
      { id: "all-conduction-liquids", name: "Electrical Conduction through Liquids", subtopics: ["Conductors", "Semiconductors"] },
      { id: "all-structure-of-matter", name: "Structure of Matter", subtopics: ["Kinetic theory", "Diffusion"] },
      { id: "all-wave-particle", name: "Wave-Particle Paradox (Structured)", subtopics: ["Electron diffraction"] },
    ]
  },
];

// ─── SESSION PRICES ────────────────────────────────────────────────────────────
// Edit these to change tutorial booking prices
export const YOUTUBE_URL = 'https://youtube.com/@scipractice';
export const WEBSITE_URL = 'https://scipractice.netlify.app/';
// Topics gated behind a "watch a rewarded ad to unlock" flow.
// Chemistry advanced (5) + Biology advanced (9) + Physics advanced (14).
// NOTE: the Biology/Physics advanced sets are a proposed default — confirm/trim with owner.
export const LOCKED_TOPICS = [
  // Chemistry (advanced)
  'organic', 'industry', 'biochem', 'metals', 'practical',
  // Biology advanced
  'secA-genetics-terms', 'secA-genetics-transmission', 'secA-genetics-probability',
  'secA-genetics-linkage', 'secA-genetics-applications', 'secA-evolution',
  'secC-blood-transfusion', 'secC-paternity', 'secC-crime-detection',
  // Physics advanced
  'p4-fields-properties', 'p4-gravitational-field', 'p4-electric-field',
  'p4-magnetic-field', 'p4-electromagnetic-field', 'p5-ac-circuits',
  'p5-structure-atom', 'p5-structure-nucleus', 'p5-wave-particle',
  'all-fibre-optics', 'all-laser', 'all-satellites-rockets',
  'all-magnetic-materials', 'all-wave-particle',
];

export const SESSION_PRICES = [
  { duration: "30 mins", label: "Quick doubt clearing", price: "₦2,000" },
  { duration: "1 hour",  label: "Full topic session",   price: "₦3,500" },
  { duration: "2 hours", label: "Exam crash course",    price: "₦6,500" },
];
