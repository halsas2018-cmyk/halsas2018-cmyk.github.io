const QUESTIONS = {
  intro: [
    {
      question: "Which of the following is the SI unit of length?",
      options: ["A. Metre", "B. Centimetre", "C. Kilometre", "D. Millimetre"],
      answer: "A",
      explanation: "The metre (m) is the SI base unit of length.",
      subtopic: "SI units"
    },
    {
      question: "Which of the following is a fundamental SI unit?",
      options: ["A. Newton", "B. Joule", "C. Second", "D. Watt"],
      answer: "C",
      explanation: "The second (s) is a fundamental SI unit for time.",
      subtopic: "SI units"
    },
    {
      question: "What is the SI unit of amount of substance?",
      options: ["A. Gram", "B. Kilogram", "C. Mole", "D. Litre"],
      answer: "C",
      explanation: "The mole (mol) is the SI unit for amount of substance.",
      subtopic: "SI units"
    },
    {
      question: "What is the SI unit of temperature?",
      options: ["A. Celsius", "B. Kelvin", "C. Fahrenheit", "D. Newton"],
      answer: "B",
      explanation: "Kelvin (K) is the official SI unit for temperature.",
      subtopic: "SI units"
    },
    {
      question: "What is the SI unit of mass?",
      options: ["A. Gram", "B. Pound", "C. Kilogram", "D. Newton"],
      answer: "C",
      explanation: "The kilogram (kg) is the SI base unit of mass.",
      subtopic: "SI units"
    },
    {
      question: "The SI unit of time is the:",
      options: ["A. Hour", "B. Minute", "C. Second", "D. Day"],
      answer: "C",
      explanation: "The second (s) is the SI unit of time.",
      subtopic: "SI units"
    },
    {
      question: "Which of the following is an SI derived unit?",
      options: ["A. Kilogram", "B. Metre", "C. Newton", "D. Second"],
      answer: "C",
      explanation: "The Newton (N) is a derived SI unit for force (kg·m/s²).",
      subtopic: "SI units"
    },
    {
      question: "The SI unit of electric current is the:",
      options: ["A. Volt", "B. Watt", "C. Ampere", "D. Ohm"],
      answer: "C",
      explanation: "The ampere (A) is the SI base unit of electric current.",
      subtopic: "SI units"
    },
    {
      question: "The SI unit of luminous intensity is the:",
      options: ["A. Candela", "B. Lux", "C. Lumen", "D. Watt"],
      answer: "A",
      explanation: "The candela (cd) is the SI unit of luminous intensity.",
      subtopic: "SI units"
    },
    {
      question: "The number of significant figures in 0.05060 is:",
      options: ["A. 3", "B. 4", "C. 5", "D. 6"],
      answer: "B",
      explanation: "0.05060 has 4 significant figures: 5, 0, 6, 0. Leading zeros are not counted.",
      subtopic: "Significant figures"
    },
    {
      question: "How many significant figures are in 0.00420?",
      options: ["A. 2", "B. 3", "C. 5", "D. 6"],
      answer: "B",
      explanation: "The significant figures in 0.00420 are 4, 2, and 0. Leading zeros do not count.",
      subtopic: "Significant figures"
    },
    {
      question: "How many significant figures are in 6.02 × 10²³?",
      options: ["A. 1", "B. 2", "C. 3", "D. 4"],
      answer: "C",
      explanation: "6.02 has three significant figures. The 10²³ is not considered.",
      subtopic: "Significant figures"
    },
    {
      question: "The number 0.003050 has how many significant figures?",
      options: ["A. 3", "B. 4", "C. 5", "D. 6"],
      answer: "B",
      explanation: "0.003050 has 4 significant figures: 3, 0, 5, 0.",
      subtopic: "Significant figures"
    },
    {
      question: "The number 2500 has how many significant figures?",
      options: ["A. 2", "B. 4", "C. 3", "D. 1"],
      answer: "A",
      explanation: "2500 has 2 significant figures (unless written with a decimal point).",
      subtopic: "Significant figures"
    },
    {
      question: "The number 2500.0 has how many significant figures?",
      options: ["A. 2", "B. 3", "C. 4", "D. 5"],
      answer: "D",
      explanation: "2500.0 has 5 significant figures (all digits count when a decimal point is present).",
      subtopic: "Significant figures"
    },
    {
      question: "What is 3.45 + 2.1 expressed with the correct significant figures?",
      options: ["A. 5.55", "B. 5.6", "C. 5.5", "D. 5.55"],
      answer: "B",
      explanation: "3.45 + 2.1 = 5.55. Rounded to 1 decimal place (2.1 has 1 decimal) = 5.6.",
      subtopic: "Significant figures"
    },
    {
      question: "What is 4.56 × 2.1 expressed with the correct significant figures?",
      options: ["A. 9.576", "B. 9.58", "C. 9.6", "D. 10"],
      answer: "C",
      explanation: "4.56 × 2.1 = 9.576. Rounded to 2 significant figures (2.1 has 2) = 9.6.",
      subtopic: "Significant figures"
    },
    {
      question: "What is 6.2 ÷ 2.50 expressed with the correct significant figures?",
      options: ["A. 2.48", "B. 2.5", "C. 2.4", "D. 2.480"],
      answer: "B",
      explanation: "6.2 ÷ 2.50 = 2.48. Rounded to 2 significant figures = 2.5.",
      subtopic: "Significant figures"
    },
    {
      question: "The first step in the scientific method is:",
      options: ["A. Formulating a hypothesis", "B. Conducting an experiment", "C. Making an observation", "D. Drawing a conclusion"],
      answer: "C",
      explanation: "The scientific method begins with making an observation of a natural phenomenon.",
      subtopic: "Scientific method"
    },
    {
      question: "A hypothesis in science is a:",
      options: ["A. Proven fact", "B. Tentative explanation", "C. Final conclusion", "D. Scientific law"],
      answer: "B",
      explanation: "A hypothesis is a tentative explanation that can be tested through experimentation.",
      subtopic: "Scientific method"
    },
    {
      question: "Which of the following is NOT a step in the scientific method?",
      options: ["A. Observation", "B. Hypothesis", "C. Theory formulation", "D. Ignoring data"],
      answer: "D",
      explanation: "Ignoring data is not part of the scientific method. All data must be considered.",
      subtopic: "Scientific method"
    },
    {
      question: "Precision in measurement refers to:",
      options: ["A. How close a measurement is to the true value", "B. How reproducible a measurement is", "C. The accuracy of an instrument", "D. The SI unit used"],
      answer: "B",
      explanation: "Precision refers to how close repeated measurements are to each other.",
      subtopic: "Measurements"
    },
    {
      question: "Accuracy in measurement refers to:",
      options: ["A. How close a measurement is to the true value", "B. How reproducible a measurement is", "C. The number of significant figures", "D. The SI unit used"],
      answer: "A",
      explanation: "Accuracy refers to how close a measurement is to the true or accepted value.",
      subtopic: "Measurements"
    },
    {
      question: "Which of the following is a chemical change?",
      options: ["A. Melting of ice", "B. Evaporation of water", "C. Rusting of iron", "D. Dissolving salt in water"],
      answer: "C",
      explanation: "Rusting of iron is a chemical change as new substances (iron oxide) are formed.",
      subtopic: "Physical and chemical changes"
    },
    {
      question: "Which of the following is a physical change?",
      options: ["A. Burning of wood", "B. Digestion of food", "C. Cutting of a metal", "D. Rusting of iron"],
      answer: "C",
      explanation: "Cutting metal is a physical change — only the shape changes, no new substance is formed.",
      subtopic: "Physical and chemical changes"
    },
    {
      question: "Which of the following is a qualitative observation?",
      options: ["A. The temperature is 25°C", "B. The mass is 10 g", "C. The solution is blue", "D. The volume is 50 cm³"],
      answer: "C",
      explanation: "Qualitative observation describes qualities like colour, odour, taste.",
      subtopic: "Scientific method"
    },
    {
      question: "Which of the following is a quantitative observation?",
      options: ["A. The solution is blue", "B. The gas is odourless", "C. The temperature is 25°C", "D. The metal is shiny"],
      answer: "C",
      explanation: "Quantitative observation involves numerical measurements like temperature, mass, or volume.",
      subtopic: "Scientific method"
    },
    {
      question: "A scientific theory is:",
      options: ["A. An educated guess", "B. A well-substantiated explanation", "C. A simple observation", "D. A proven fact"],
      answer: "B",
      explanation: "A scientific theory is a well-substantiated explanation supported by evidence.",
      subtopic: "Scientific method"
    },
    {
      question: "Which of the following statements about matter is TRUE?",
      options: ["A. Matter has mass and occupies space", "B. Matter cannot be created or destroyed", "C. All matter is visible", "D. Both A and B"],
      answer: "D",
      explanation: "Matter has mass and occupies space, and according to the law of conservation of mass, it cannot be created or destroyed.",
      subtopic: "Matter"
    },
    {
      question: "Which of the following is a pure substance?",
      options: ["A. Sea water", "B. Air", "C. Distilled water", "D. Milk"],
      answer: "C",
      explanation: "Distilled water is a pure substance (H₂O). Sea water, air, and milk are mixtures.",
      subtopic: "Matter"
    },
    {
      question: "An element is a substance that:",
      options: ["A. Can be broken down into simpler substances", "B. Contains two or more types of atoms", "C. Cannot be broken down into simpler substances", "D. Is always a gas"],
      answer: "C",
      explanation: "An element cannot be broken down into simpler substances by chemical means.",
      subtopic: "Matter"
    },
    {
      question: "A compound is a substance that:",
      options: ["A. Contains only one type of atom", "B. Contains two or more elements chemically combined", "C. Can be separated by physical means", "D. Is always a mixture"],
      answer: "B",
      explanation: "A compound contains two or more elements chemically combined in fixed proportions.",
      subtopic: "Matter"
    },
    {
      question: "Which of the following is a mixture?",
      options: ["A. Sodium chloride", "B. Water", "C. Air", "D. Carbon dioxide"],
      answer: "C",
      explanation: "Air is a mixture of gases (nitrogen, oxygen, argon, etc.) not chemically combined.",
      subtopic: "Matter"
    },
    {
      question: "The mass of an object is 50 g. Its mass in kilograms is:",
      options: ["A. 0.005 kg", "B. 0.05 kg", "C. 0.5 kg", "D. 5 kg"],
      answer: "B",
      explanation: "50 g ÷ 1000 = 0.05 kg (since 1 kg = 1000 g).",
      subtopic: "Measurements"
    },
    {
      question: "A length of 250 cm is equal to how many metres?",
      options: ["A. 0.25 m", "B. 2.5 m", "C. 25 m", "D. 250 m"],
      answer: "B",
      explanation: "250 cm ÷ 100 = 2.5 m (since 1 m = 100 cm).",
      subtopic: "Measurements"
    },
    {
      question: "A volume of 2.5 L is equal to how many cm³?",
      options: ["A. 25 cm³", "B. 250 cm³", "C. 2500 cm³", "D. 25,000 cm³"],
      answer: "C",
      explanation: "2.5 L × 1000 = 2500 cm³ (since 1 L = 1000 cm³).",
      subtopic: "Measurements"
    },
    {
      question: "Temperature of 25°C is equal to how many Kelvin?",
      options: ["A. 248 K", "B. 298 K", "C. 300 K", "D. 273 K"],
      answer: "B",
      explanation: "K = °C + 273 = 25 + 273 = 298 K.",
      subtopic: "Measurements"
    },
    {
      question: "Temperature of 0°C is equal to how many Kelvin?",
      options: ["A. 0 K", "B. 273 K", "C. 100 K", "D. -273 K"],
      answer: "B",
      explanation: "K = 0 + 273 = 273 K (absolute zero is 0 K = -273°C).",
      subtopic: "Measurements"
    },
    {
      question: "Which of the following involves the formation of a new substance?",
      options: ["A. Freezing water", "B. Boiling water", "C. Burning wood", "D. Melting wax"],
      answer: "C",
      explanation: "Burning wood is a chemical change — new substances (ash, smoke, gases) are formed.",
      subtopic: "Physical and chemical changes"
    },
    {
      question: "Which of the following is NOT evidence of a chemical change?",
      options: ["A. Change in colour", "B. Formation of a precipitate", "C. Change in state", "D. Evolution of gas"],
      answer: "C",
      explanation: "Change in state (melting, boiling) is a physical change, not chemical.",
      subtopic: "Physical and chemical changes"
    },
    {
      question: "The process of burning a candle involves:",
      options: ["A. Only physical change", "B. Only chemical change", "C. Both physical and chemical changes", "D. No change at all"],
      answer: "C",
      explanation: "Melting wax is physical; burning wax is chemical.",
      subtopic: "Physical and chemical changes"
    },
    {
      question: "Which scientist proposed the law of conservation of mass?",
      options: ["A. Dalton", "B. Lavoisier", "C. Rutherford", "D. Bohr"],
      answer: "B",
      explanation: "Antoine Lavoisier proposed the law of conservation of mass.",
      subtopic: "Chemical laws"
    },
    {
      question: "Density is calculated using the formula:",
      options: ["A. Density = Mass × Volume", "B. Density = Mass ÷ Volume", "C. Density = Volume ÷ Mass", "D. Density = Mass + Volume"],
      answer: "B",
      explanation: "Density = Mass ÷ Volume (g/cm³ or kg/m³).",
      subtopic: "Measurements"
    },
    {
      question: "A block has mass 50 g and volume 10 cm³. Its density is:",
      options: ["A. 0.2 g/cm³", "B. 5 g/cm³", "C. 10 g/cm³", "D. 50 g/cm³"],
      answer: "B",
      explanation: "Density = 50 g ÷ 10 cm³ = 5 g/cm³.",
      subtopic: "Measurements"
    },
    {
      question: "A liquid has density 0.8 g/cm³. Its mass if volume is 50 cm³ is:",
      options: ["A. 40 g", "B. 62.5 g", "C. 50 g", "D. 80 g"],
      answer: "A",
      explanation: "Mass = Density × Volume = 0.8 × 50 = 40 g.",
      subtopic: "Measurements"
    },
    {
      question: "Which of the following is NOT a SI base unit?",
      options: ["A. Metre", "B. Kilogram", "C. Newton", "D. Second"],
      answer: "C",
      explanation: "Newton is a derived unit, not a base unit.",
      subtopic: "SI units"
    },
    {
      question: "The prefix 'kilo' means:",
      options: ["A. 10", "B. 100", "C. 1000", "D. 0.001"],
      answer: "C",
      explanation: "Kilo (k) = 1000 = 10³.",
      subtopic: "SI units"
    },
    {
      question: "The prefix 'milli' means:",
      options: ["A. 1000", "B. 100", "C. 0.001", "D. 0.01"],
      answer: "C",
      explanation: "Milli (m) = 0.001 = 10⁻³.",
      subtopic: "SI units"
    },
    {
      question: "The prefix 'centi' means:",
      options: ["A. 1000", "B. 100", "C. 0.01", "D. 0.001"],
      answer: "C",
      explanation: "Centi (c) = 0.01 = 10⁻².",
      subtopic: "SI units"
    },
    {
      question: "A measurement of 2.5 × 10³ m is equal to:",
      options: ["A. 0.25 km", "B. 2.5 km", "C. 25 km", "D. 250 km"],
      answer: "B",
      explanation: "2.5 × 10³ m = 2500 m = 2.5 km.",
      subtopic: "Measurements"
    },
    {
      question: "Which of the following is the best description of a physical property?",
      options: ["A. A property observed during a chemical reaction", "B. A property that can be observed without changing the substance", "C. A property that involves burning", "D. A property that changes the chemical composition"],
      answer: "B",
      explanation: "Physical properties can be observed without changing the chemical composition of the substance.",
      subtopic: "Physical and chemical changes"
    },
    {
      question: "Which of the following is NOT a physical property?",
      options: ["A. Colour", "B. Density", "C. Flammability", "D. Melting point"],
      answer: "C",
      explanation: "Flammability is a chemical property — it involves chemical change (burning).",
      subtopic: "Physical and chemical changes"
    },
    {
      question: "The formula for calculating percentage error is:",
      options: ["A. (Experimental value ÷ Actual value) × 100", "B. (Actual value - Experimental value) ÷ Actual value × 100", "C. (Experimental value + Actual value) × 100", "D. (Actual value ÷ Experimental value) × 100"],
      answer: "B",
      explanation: "Percentage error = |Actual - Experimental| ÷ Actual × 100.",
      subtopic: "Measurements"
    },
    {
      question: "Dalton's atomic theory stated that atoms are:",
      options: ["A. Divisible", "B. Indivisible", "C. Made of protons and electrons", "D. Made of neutrons"],
      answer: "B",
      explanation: "Dalton stated that atoms are indivisible and indestructible particles.",
      subtopic: "Dalton's theory"
    },
    {
      question: "Matter is anything that has mass and:",
      options: ["A. Volume", "B. Weight", "C. Density", "D. Colour"],
      answer: "A",
      explanation: "Matter has mass and occupies space (volume).",
      subtopic: "Matter"
    }
  ],
  atom: [
    {
      question: "Who proposed that matter is made of indivisible atoms?",
      options: ["A. Rutherford", "B. Bohr", "C. Dalton", "D. Thomson"],
      answer: "C",
      explanation: "John Dalton proposed the atomic theory that matter is made of indivisible atoms.",
      subtopic: "Dalton's theory"
    },
    {
      question: "Which experiment led to the discovery of the nucleus?",
      options: ["A. Cathode ray tube experiment", "B. Gold foil experiment", "C. Oil drop experiment", "D. Mass spectrometry"],
      answer: "B",
      explanation: "Rutherford's gold foil experiment showed that atoms have a small, dense, positively charged nucleus.",
      subtopic: "Atomic models"
    },
    {
      question: "The atomic number of an element is the number of:",
      options: ["A. Neutrons", "B. Protons", "C. Electrons + Neutrons", "D. Nucleons"],
      answer: "B",
      explanation: "Atomic number (Z) is the number of protons in the nucleus of an atom.",
      subtopic: "Atomic number"
    },
    {
      question: "Which subatomic particle was discovered by J.J. Thomson?",
      options: ["A. Proton", "B. Neutron", "C. Electron", "D. Nucleus"],
      answer: "C",
      explanation: "J.J. Thomson discovered the electron through his cathode ray tube experiments.",
      subtopic: "Subatomic particles"
    },
    {
      question: "An atom with 17 protons and 18 neutrons has a mass number of:",
      options: ["A. 17", "B. 18", "C. 35", "D. 36"],
      answer: "C",
      explanation: "Mass number = protons + neutrons = 17 + 18 = 35.",
      subtopic: "Atomic structure"
    },
    {
      question: "The electron configuration of oxygen (Z=8) is:",
      options: ["A. 1s²2s²2p⁴", "B. 1s²2s²2p⁶", "C. 1s²2s²2p³", "D. 1s²2s²2p⁵"],
      answer: "A",
      explanation: "Oxygen has 8 electrons: 1s²2s²2p⁴ (2 + 2 + 4 = 8).",
      subtopic: "Electron configuration"
    },
    {
      question: "What is the electron configuration of chlorine (Z=17)?",
      options: ["A. 1s²2s²2p⁶3s²3p⁵", "B. 1s²2s²2p⁶3s²3p⁴", "C. 1s²2s²2p⁶3s²3p⁶", "D. 1s²2s²2p⁶3s¹3p⁶"],
      answer: "A",
      explanation: "Chlorine (17 electrons): 1s²2s²2p⁶3s²3p⁵.",
      subtopic: "Electron configuration"
    },
    {
      question: "What is the maximum number of electrons in the third shell?",
      options: ["A. 2", "B. 8", "C. 18", "D. 32"],
      answer: "C",
      explanation: "The third shell can hold a maximum of 18 electrons.",
      subtopic: "Electron configuration"
    },
    {
      question: "Isotopes have the same number of:",
      options: ["A. Neutrons", "B. Protons", "C. Mass number", "D. Nucleons"],
      answer: "B",
      explanation: "Isotopes have the same atomic number (protons) but different mass numbers.",
      subtopic: "Isotopes"
    },
    {
      question: "Which scientist is credited with the discovery of the neutron?",
      options: ["A. Rutherford", "B. Bohr", "C. Chadwick", "D. Thomson"],
      answer: "C",
      explanation: "James Chadwick discovered the neutron in 1932.",
      subtopic: "Subatomic particles"
    },
    {
      question: "The Bohr model of the atom describes:",
      options: ["A. A nucleus surrounded by electrons in fixed orbits", "B. A cloud of electrons", "C. Indivisible atoms", "D. The existence of neutrons"],
      answer: "A",
      explanation: "Bohr's model describes electrons revolving around the nucleus in fixed, quantized orbits.",
      subtopic: "Atomic models"
    },
    {
      question: "What is the number of neutrons in an atom of argon-40? (Ar has Z=18)",
      options: ["A. 18", "B. 22", "C. 40", "D. 58"],
      answer: "B",
      explanation: "Neutrons = mass number - atomic number = 40 - 18 = 22.",
      subtopic: "Atomic structure"
    },
    {
      question: "The s orbital can hold a maximum of how many electrons?",
      options: ["A. 2", "B. 6", "C. 10", "D. 14"],
      answer: "A",
      explanation: "The s orbital has 1 sub-orbital and can hold a maximum of 2 electrons.",
      subtopic: "Electron configuration"
    },
    {
      question: "The p orbital can hold a maximum of how many electrons?",
      options: ["A. 2", "B. 6", "C. 10", "D. 14"],
      answer: "B",
      explanation: "The p orbital has 3 sub-orbitals, each holding 2 electrons = 6 electrons.",
      subtopic: "Electron configuration"
    },
    {
      question: "The d orbital can hold a maximum of how many electrons?",
      options: ["A. 2", "B. 6", "C. 10", "D. 14"],
      answer: "C",
      explanation: "The d orbital has 5 sub-orbitals, each holding 2 electrons = 10 electrons.",
      subtopic: "Electron configuration"
    },
    {
      question: "The f orbital can hold a maximum of how many electrons?",
      options: ["A. 2", "B. 6", "C. 10", "D. 14"],
      answer: "D",
      explanation: "The f orbital has 7 sub-orbitals, each holding 2 electrons = 14 electrons.",
      subtopic: "Electron configuration"
    },
    {
      question: "The electron configuration of sodium (Z=11) is:",
      options: ["A. 1s²2s²2p⁶3s¹", "B. 1s²2s²2p⁶3s²", "C. 1s²2s²2p⁶3s¹3p¹", "D. 1s²2s²2p⁵3s²"],
      answer: "A",
      explanation: "Sodium has 11 electrons: 1s²2s²2p⁶3s¹.",
      subtopic: "Electron configuration"
    },
    {
      question: "The electron configuration of potassium (Z=19) is:",
      options: ["A. 1s²2s²2p⁶3s²3p⁶4s¹", "B. 1s²2s²2p⁶3s²3p⁶4s²", "C. 1s²2s²2p⁶3s²3p⁵4s²", "D. 1s²2s²2p⁶3s²3p⁶3d¹"],
      answer: "A",
      explanation: "Potassium has 19 electrons: 1s²2s²2p⁶3s²3p⁶4s¹.",
      subtopic: "Electron configuration"
    },
    {
      question: "The electron configuration of calcium (Z=20) is:",
      options: ["A. 1s²2s²2p⁶3s²3p⁶4s¹", "B. 1s²2s²2p⁶3s²3p⁶4s²", "C. 1s²2s²2p⁶3s²3p⁵4s²", "D. 1s²2s²2p⁶3s²3p⁶3d²"],
      answer: "B",
      explanation: "Calcium has 20 electrons: 1s²2s²2p⁶3s²3p⁶4s².",
      subtopic: "Electron configuration"
    },
    {
      question: "The electron configuration of chromium (Z=24) is:",
      options: ["A. 1s²2s²2p⁶3s²3p⁶3d⁵4s¹", "B. 1s²2s²2p⁶3s²3p⁶3d⁴4s²", "C. 1s²2s²2p⁶3s²3p⁶3d⁶4s⁰", "D. 1s²2s²2p⁶3s²3p⁶3d⁵4s²"],
      answer: "A",
      explanation: "Chromium has a half-filled d orbital: [Ar]3d⁵4s¹ (exception to Aufbau).",
      subtopic: "Electron configuration"
    },
    {
      question: "The electron configuration of copper (Z=29) is:",
      options: ["A. 1s²2s²2p⁶3s²3p⁶3d¹⁰4s¹", "B. 1s²2s²2p⁶3s²3p⁶3d⁹4s²", "C. 1s²2s²2p⁶3s²3p⁶3d¹⁰4s²", "D. 1s²2s²2p⁶3s²3p⁶3d⁸4s²"],
      answer: "A",
      explanation: "Copper has a full d orbital: [Ar]3d¹⁰4s¹ (exception to Aufbau).",
      subtopic: "Electron configuration"
    },
    {
      question: "The Aufbau principle states that electrons:",
      options: ["A. Fill orbitals in order of increasing energy", "B. Fill orbitals randomly", "C. Fill orbitals in order of decreasing energy", "D. Pair up before filling new orbitals"],
      answer: "A",
      explanation: "Aufbau principle: electrons fill orbitals from lowest to highest energy.",
      subtopic: "Electron configuration"
    },
    {
      question: "Hund's rule states that:",
      options: ["A. Electrons pair up before occupying empty orbitals", "B. Electrons fill degenerate orbitals singly before pairing", "C. No two electrons can have the same spin", "D. Electrons fill orbitals randomly"],
      answer: "B",
      explanation: "Hund's rule: electrons occupy degenerate orbitals singly before pairing.",
      subtopic: "Electron configuration"
    },
    {
      question: "The Pauli Exclusion Principle states that:",
      options: ["A. Electrons fill orbitals from lowest to highest energy", "B. No two electrons can have the same four quantum numbers", "C. Electrons fill degenerate orbitals singly", "D. Electrons are indistinguishable"],
      answer: "B",
      explanation: "Pauli Exclusion Principle: no two electrons can have the same set of four quantum numbers.",
      subtopic: "Electron configuration"
    },
    {
      question: "An atom is electrically neutral when:",
      options: ["A. Protons = Neutrons", "B. Protons = Electrons", "C. Neutrons = Electrons", "D. Mass number = Atomic number"],
      answer: "B",
      explanation: "An atom is neutral when the number of protons equals the number of electrons.",
      subtopic: "Atomic structure"
    },
    {
      question: "The mass number of an atom is the total number of:",
      options: ["A. Protons only", "B. Electrons only", "C. Protons and neutrons", "D. Protons and electrons"],
      answer: "C",
      explanation: "Mass number = protons + neutrons.",
      subtopic: "Atomic structure"
    },
    {
      question: "The relative atomic mass of an element is:",
      options: ["A. The mass of one atom", "B. The weighted average mass of its isotopes", "C. The number of protons", "D. The number of neutrons"],
      answer: "B",
      explanation: "Relative atomic mass is the weighted average mass of all isotopes of an element.",
      subtopic: "Atomic structure"
    },
    {
      question: "Chlorine has two isotopes: Cl-35 and Cl-37. The relative atomic mass is:",
      options: ["A. 35.0", "B. 35.5", "C. 36.0", "D. 37.0"],
      answer: "B",
      explanation: "Chlorine's relative atomic mass is 35.5 (average of 75% Cl-35 and 25% Cl-37).",
      subtopic: "Isotopes"
    },
    {
      question: "Boron has two isotopes: B-10 (20%) and B-11 (80%). The relative atomic mass is:",
      options: ["A. 10.2", "B. 10.6", "C. 10.8", "D. 11.0"],
      answer: "C",
      explanation: "RAM = (10×0.20) + (11×0.80) = 2 + 8.8 = 10.8.",
      subtopic: "Isotopes"
    },
    {
      question: "An ion has a positive charge because:",
      options: ["A. It has more protons than electrons", "B. It has more electrons than protons", "C. It has more neutrons than protons", "D. It has fewer protons than neutrons"],
      answer: "A",
      explanation: "A positive ion (cation) has more protons than electrons.",
      subtopic: "Ions"
    },
    {
      question: "An ion has a negative charge because:",
      options: ["A. It has more protons than electrons", "B. It has more electrons than protons", "C. It has more neutrons than protons", "D. It has fewer protons than neutrons"],
      answer: "B",
      explanation: "A negative ion (anion) has more electrons than protons.",
      subtopic: "Ions"
    },
    {
      question: "The shape of an s orbital is:",
      options: ["A. Dumbbell", "B. Spherical", "C. Cloverleaf", "D. Linear"],
      answer: "B",
      explanation: "The s orbital has a spherical shape.",
      subtopic: "Atomic orbitals"
    },
    {
      question: "The shape of a p orbital is:",
      options: ["A. Spherical", "B. Dumbbell", "C. Cloverleaf", "D. Linear"],
      answer: "B",
      explanation: "The p orbital has a dumbbell (figure-eight) shape.",
      subtopic: "Atomic orbitals"
    },
    {
      question: "Who first proposed the concept of quantized energy levels?",
      options: ["A. Rutherford", "B. Bohr", "C. Thomson", "D. Dalton"],
      answer: "B",
      explanation: "Bohr proposed that electrons exist in quantized energy levels.",
      subtopic: "Atomic models"
    },
    {
      question: "The energy level closest to the nucleus has:",
      options: ["A. The highest energy", "B. The lowest energy", "C. No energy", "D. Infinite energy"],
      answer: "B",
      explanation: "Electrons in shells closer to the nucleus have lower energy.",
      subtopic: "Atomic structure"
    },
    {
      question: "The nucleus of an atom contains:",
      options: ["A. Protons and electrons", "B. Neutrons and electrons", "C. Protons and neutrons", "D. Only protons"],
      answer: "C",
      explanation: "The nucleus contains protons and neutrons. Electrons orbit outside.",
      subtopic: "Atomic structure"
    },
    {
      question: "Which is the smallest subatomic particle?",
      options: ["A. Proton", "B. Neutron", "C. Electron", "D. Nucleus"],
      answer: "C",
      explanation: "The electron is the smallest subatomic particle.",
      subtopic: "Subatomic particles"
    },
    {
      question: "The charge of a proton is:",
      options: ["A. +1", "B. -1", "C. 0", "D. +2"],
      answer: "A",
      explanation: "A proton has a charge of +1.",
      subtopic: "Subatomic particles"
    },
    {
      question: "The charge of a neutron is:",
      options: ["A. +1", "B. -1", "C. 0", "D. +2"],
      answer: "C",
      explanation: "A neutron has no charge (0).",
      subtopic: "Subatomic particles"
    },
    {
      question: "The charge of an electron is:",
      options: ["A. +1", "B. -1", "C. 0", "D. +2"],
      answer: "B",
      explanation: "An electron has a charge of -1.",
      subtopic: "Subatomic particles"
    },
    {
      question: "Isotopes of an element have different:",
      options: ["A. Atomic numbers", "B. Mass numbers", "C. Number of protons", "D. Chemical properties"],
      answer: "B",
      explanation: "Isotopes have different mass numbers due to different neutron numbers.",
      subtopic: "Isotopes"
    },
    {
      question: "The maximum number of electrons in the first shell (n=1) is:",
      options: ["A. 2", "B. 8", "C. 18", "D. 32"],
      answer: "A",
      explanation: "The first shell can hold a maximum of 2 electrons.",
      subtopic: "Electron configuration"
    },
    {
      question: "The maximum number of electrons in the fourth shell (n=4) is:",
      options: ["A. 2", "B. 8", "C. 18", "D. 32"],
      answer: "D",
      explanation: "The fourth shell can hold a maximum of 32 electrons.",
      subtopic: "Electron configuration"
    },
    {
      question: "The number of orbitals in the p subshell is:",
      options: ["A. 1", "B. 3", "C. 5", "D. 7"],
      answer: "B",
      explanation: "The p subshell has 3 orbitals (px, py, pz).",
      subtopic: "Atomic orbitals"
    },
    {
      question: "The number of orbitals in the d subshell is:",
      options: ["A. 1", "B. 3", "C. 5", "D. 7"],
      answer: "C",
      explanation: "The d subshell has 5 orbitals.",
      subtopic: "Atomic orbitals"
    },
    {
      question: "The number of orbitals in the f subshell is:",
      options: ["A. 1", "B. 3", "C. 5", "D. 7"],
      answer: "D",
      explanation: "The f subshell has 7 orbitals.",
      subtopic: "Atomic orbitals"
    },
    {
      question: "An atom of magnesium (Z=12) has how many electrons in the third shell?",
      options: ["A. 2", "B. 8", "C. 10", "D. 12"],
      answer: "A",
      explanation: "Mg: 1s²2s²2p⁶3s² → Third shell (n=3) has 2 electrons.",
      subtopic: "Electron configuration"
    },
    {
      question: "An atom of aluminium (Z=13) has how many electrons in the third shell?",
      options: ["A. 2", "B. 3", "C. 8", "D. 13"],
      answer: "B",
      explanation: "Al: 1s²2s²2p⁶3s²3p¹ → Third shell has 3 electrons.",
      subtopic: "Electron configuration"
    },
    {
      question: "An atom of silicon (Z=14) has how many valence electrons?",
      options: ["A. 2", "B. 3", "C. 4", "D. 5"],
      answer: "C",
      explanation: "Si: 1s²2s²2p⁶3s²3p² → Valence electrons = 2 + 2 = 4.",
      subtopic: "Electron configuration"
    },
    {
      question: "An atom of phosphorus (Z=15) has how many valence electrons?",
      options: ["A. 3", "B. 4", "C. 5", "D. 6"],
      answer: "C",
      explanation: "P: 1s²2s²2p⁶3s²3p³ → Valence electrons = 2 + 3 = 5.",
      subtopic: "Electron configuration"
    },
    {
      question: "An atom of sulfur (Z=16) has how many valence electrons?",
      options: ["A. 4", "B. 5", "C. 6", "D. 7"],
      answer: "C",
      explanation: "S: 1s²2s²2p⁶3s²3p⁴ → Valence electrons = 2 + 4 = 6.",
      subtopic: "Electron configuration"
    },
    {
      question: "An atom of argon (Z=18) has how many valence electrons?",
      options: ["A. 6", "B. 7", "C. 8", "D. 18"],
      answer: "C",
      explanation: "Ar: 1s²2s²2p⁶3s²3p⁶ → Valence electrons = 2 + 6 = 8.",
      subtopic: "Electron configuration"
    },
    {
      question: "Bohr's model of the atom was later replaced because:",
      options: ["A. It did not explain the spectrum of larger atoms", "B. It did not include protons", "C. It did not include electrons", "D. It did not include neutrons"],
      answer: "A",
      explanation: "Bohr's model worked for hydrogen but failed to explain spectra of larger atoms.",
      subtopic: "Atomic models"
    },
    {
      question: "Rutherford's gold foil experiment concluded that:",
      options: ["A. Atoms are indivisible", "B. Atoms have a dense, positively charged nucleus", "C. Atoms have electrons in fixed orbits", "D. Atoms are made of protons and electrons"],
      answer: "B",
      explanation: "Rutherford concluded that atoms have a small, dense, positively charged nucleus.",
      subtopic: "Atomic models"
    },
    {
      question: "Thomson's plum pudding model described the atom as:",
      options: ["A. A nucleus with orbiting electrons", "B. A positive sphere with electrons embedded", "C. Indivisible atoms", "D. A nucleus with protons and neutrons"],
      answer: "B",
      explanation: "Thomson's model: positive sphere with negatively charged electrons embedded.",
      subtopic: "Atomic models"
    },
    {
      question: "The wavelength of a moving electron can be calculated using:",
      options: ["A. Dalton's theory", "B. De Broglie equation", "C. Bohr's equation", "D. Rutherford's equation"],
      answer: "B",
      explanation: "De Broglie equation (λ = h/mv) describes the wave nature of particles like electrons.",
      subtopic: "Atomic models"
    },
    {
      question: "The concept of electron shells was proposed by:",
      options: ["A. Dalton", "B. Rutherford", "C. Bohr", "D. Chadwick"],
      answer: "C",
      explanation: "Bohr proposed that electrons exist in shells with fixed energy levels.",
      subtopic: "Atomic models"
    },
    {
      question: "Which of the following elements is NOT a metal?",
      options: ["A. Sodium", "B. Magnesium", "C. Aluminium", "D. Chlorine"],
      answer: "D",
      explanation: "Chlorine is a non-metal, while Na, Mg, and Al are metals.",
      subtopic: "Elements"
    }
  ],
  separation: [
    {
      question: "Which method is used to separate a mixture of miscible liquids with different boiling points?",
      options: ["A. Filtration", "B. Fractional distillation", "C. Crystallization", "D. Sublimation"],
      answer: "B",
      explanation: "Fractional distillation separates miscible liquids based on their different boiling points.",
      subtopic: "Distillation"
    },
    {
      question: "The separation technique based on different solubilities in a solvent is called:",
      options: ["A. Distillation", "B. Chromatography", "C. Filtration", "D. Precipitation"],
      answer: "B",
      explanation: "Chromatography separates components based on their different solubilities and affinities for the stationary phase.",
      subtopic: "Chromatography"
    },
    {
      question: "A pure solid has a:",
      options: ["A. Broad melting point range", "B. Sharp melting point", "C. Variable boiling point", "D. Low melting point"],
      answer: "B",
      explanation: "A pure substance has a sharp, definite melting point. Impurities lower and broaden the melting point.",
      subtopic: "Purity"
    },
    {
      question: "Which method is used to separate a soluble solid from a solution by heating?",
      options: ["A. Filtration", "B. Evaporation", "C. Distillation", "D. Chromatography"],
      answer: "B",
      explanation: "Evaporation removes the solvent to obtain the dissolved solid.",
      subtopic: "Evaporation"
    },
    {
      question: "A mixture of iron filings and sulfur can be separated using:",
      options: ["A. Magnetization", "B. Filtration", "C. Distillation", "D. Sublimation"],
      answer: "A",
      explanation: "Iron is magnetic and can be separated from non-magnetic sulfur using a magnet.",
      subtopic: "Magnetization"
    },
    {
      question: "Which method is used to separate a mixture of iodine and sand?",
      options: ["A. Filtration", "B. Sublimation", "C. Distillation", "D. Crystallization"],
      answer: "B",
      explanation: "Iodine sublimes (solid to gas) and can be separated from sand by heating.",
      subtopic: "Sublimation"
    },
    {
      question: "Chromatography separates components based on:",
      options: ["A. Different densities", "B. Different rates of movement", "C. Different boiling points", "D. Different magnetic properties"],
      answer: "B",
      explanation: "Components move at different rates through the stationary phase based on their affinity.",
      subtopic: "Chromatography"
    },
    {
      question: "Fractional distillation is used to separate:",
      options: ["A. Salt from sea water", "B. Ethanol and water", "C. Sand and water", "D. Iron and sulfur"],
      answer: "B",
      explanation: "Ethanol and water are miscible liquids with different boiling points, separated by fractional distillation.",
      subtopic: "Distillation"
    },
    {
      question: "The process of obtaining pure crystals from a solution is called:",
      options: ["A. Distillation", "B. Crystallization", "C. Filtration", "D. Chromatography"],
      answer: "B",
      explanation: "Crystallization involves cooling a saturated solution to obtain pure crystals.",
      subtopic: "Crystallization"
    },
    {
      question: "Which of the following indicates that a liquid is pure?",
      options: ["A. A range of boiling points", "B. A sharp boiling point", "C. A low boiling point", "D. A high boiling point"],
      answer: "B",
      explanation: "A pure liquid boils at a sharp, constant temperature.",
      subtopic: "Purity"
    },
    {
      question: "Filtration is used to separate:",
      options: ["A. A soluble solid from a liquid", "B. An insoluble solid from a liquid", "C. Two miscible liquids", "D. Two gases"],
      answer: "B",
      explanation: "Filtration separates insoluble solids from liquids using a filter medium.",
      subtopic: "Filtration"
    },
    {
      question: "The residue in filtration is:",
      options: ["A. The liquid that passes through the filter", "B. The solid that remains on the filter", "C. The dissolved substance", "D. The distillate"],
      answer: "B",
      explanation: "The residue is the solid material that remains on the filter paper.",
      subtopic: "Filtration"
    },
    {
      question: "The filtrate in filtration is:",
      options: ["A. The liquid that passes through the filter", "B. The solid that remains on the filter", "C. The dissolved substance", "D. The distillate"],
      answer: "A",
      explanation: "The filtrate is the liquid that passes through the filter paper.",
      subtopic: "Filtration"
    },
    {
      question: "Simple distillation is used to separate:",
      options: ["A. A solid from a solution", "B. A liquid from a solution with a non-volatile solute", "C. Two miscible liquids", "D. Two immiscible liquids"],
      answer: "B",
      explanation: "Simple distillation separates a volatile liquid from a non-volatile solute.",
      subtopic: "Distillation"
    },
    {
      question: "The distillate in distillation is:",
      options: ["A. The liquid that is collected", "B. The residue left behind", "C. The solid formed", "D. The gas evolved"],
      answer: "A",
      explanation: "The distillate is the liquid that condenses and is collected during distillation.",
      subtopic: "Distillation"
    },
    {
      question: "Which apparatus is used in fractional distillation?",
      options: ["A. Condenser only", "B. Fractionating column", "C. Separating funnel", "D. Filter funnel"],
      answer: "B",
      explanation: "A fractionating column allows repeated condensation and evaporation for better separation.",
      subtopic: "Distillation"
    },
    {
      question: "Precipitation is used to separate:",
      options: ["A. Two miscible liquids", "B. A solid from a solution by forming an insoluble compound", "C. Two gases", "D. A mixture of solids"],
      answer: "B",
      explanation: "Precipitation separates a substance by forming an insoluble solid (precipitate).",
      subtopic: "Precipitation"
    },
    {
      question: "The stationary phase in chromatography is:",
      options: ["A. The solvent", "B. The substance that moves", "C. The fixed phase", "D. The gas"],
      answer: "C",
      explanation: "The stationary phase is the fixed substance (paper, silica) that doesn't move.",
      subtopic: "Chromatography"
    },
    {
      question: "The mobile phase in chromatography is:",
      options: ["A. The solvent that moves", "B. The stationary substance", "C. The solid residue", "D. The precipitate"],
      answer: "A",
      explanation: "The mobile phase is the solvent that moves through the stationary phase.",
      subtopic: "Chromatography"
    },
    {
      question: "An example of a solid-solid mixture is:",
      options: ["A. Salt in water", "B. Sand and iron filings", "C. Ethanol and water", "D. Oil and water"],
      answer: "B",
      explanation: "Sand and iron filings is a solid-solid mixture. The others are solid-liquid or liquid-liquid mixtures.",
      subtopic: "Classification of mixtures"
    },
    {
      question: "An example of a liquid-liquid mixture is:",
      options: ["A. Salt in water", "B. Sand in water", "C. Ethanol and water", "D. Iron filings and sulfur"],
      answer: "C",
      explanation: "Ethanol and water is a liquid-liquid (miscible) mixture.",
      subtopic: "Classification of mixtures"
    },
    {
      question: "An example of a gas-gas mixture is:",
      options: ["A. Air", "B. Salt in water", "C. Sand in water", "D. Oil and water"],
      answer: "A",
      explanation: "Air is a mixture of gases (nitrogen, oxygen, etc.).",
      subtopic: "Classification of mixtures"
    },
    {
      question: "A separating funnel is used to separate:",
      options: ["A. Two miscible liquids", "B. Two immiscible liquids", "C. A solid from a liquid", "D. Two gases"],
      answer: "B",
      explanation: "A separating funnel separates immiscible liquids like oil and water.",
      subtopic: "Separation techniques"
    },
    {
      question: "Decantation is the process of:",
      options: ["A. Pouring off a liquid without disturbing the sediment", "B. Heating a solution to dryness", "C. Filtering a mixture", "D. Distilling a mixture"],
      answer: "A",
      explanation: "Decantation involves carefully pouring off the liquid after the solid has settled.",
      subtopic: "Separation techniques"
    },
    {
      question: "Centrifugation is used to:",
      options: ["A. Separate miscible liquids", "B. Separate solids based on density using rapid spinning", "C. Separate gases", "D. Purify liquids"],
      answer: "B",
      explanation: "Centrifugation uses rapid spinning to separate particles of different densities.",
      subtopic: "Separation techniques"
    },
    {
      question: "Paper chromatography is used to separate:",
      options: ["A. Coloured substances in inks", "B. Two miscible liquids", "C. Gases", "D. Metals"],
      answer: "A",
      explanation: "Paper chromatography is commonly used to separate coloured pigments in inks.",
      subtopic: "Chromatography"
    },
    {
      question: "In chromatography, Rf value is defined as:",
      options: ["A. Distance travelled by solvent ÷ Distance travelled by solute", "B. Distance travelled by solute ÷ Distance travelled by solvent", "C. Solute mass ÷ Solvent mass", "D. Solvent volume ÷ Solute volume"],
      answer: "B",
      explanation: "Rf = Distance moved by solute ÷ Distance moved by solvent.",
      subtopic: "Chromatography"
    },
    {
      question: "The Rf value of a substance in chromatography depends on:",
      options: ["A. Its concentration", "B. Its affinity for the stationary and mobile phases", "C. Its colour", "D. Its mass"],
      answer: "B",
      explanation: "Rf value depends on the substance's affinity for the stationary and mobile phases.",
      subtopic: "Chromatography"
    },
    {
      question: "Which of the following is NOT a criterion for purity?",
      options: ["A. Sharp melting point", "B. Sharp boiling point", "C. Constant density", "D. Variable colour"],
      answer: "D",
      explanation: "Variable colour is not a criterion for purity. Pure substances have sharp melting/boiling points.",
      subtopic: "Purity"
    },
    {
      question: "Impurities in a solid cause its melting point to:",
      options: ["A. Increase", "B. Decrease", "C. Remain the same", "D. Become sharp"],
      answer: "B",
      explanation: "Impurities lower the melting point and broaden the melting point range.",
      subtopic: "Purity"
    },
    {
      question: "Impurities in a liquid cause its boiling point to:",
      options: ["A. Increase", "B. Decrease", "C. Remain the same", "D. Become sharp"],
      answer: "A",
      explanation: "Impurities increase the boiling point and broaden the boiling point range.",
      subtopic: "Purity"
    },
    {
      question: "Which method is used to purify a solid by dissolving it and allowing crystals to form?",
      options: ["A. Distillation", "B. Crystallization", "C. Filtration", "D. Sublimation"],
      answer: "B",
      explanation: "Crystallization is used to purify solids by forming pure crystals.",
      subtopic: "Crystallization"
    },
    {
      question: "Recrystallization is used to:",
      options: ["A. Further purify crystals", "B. Separate liquids", "C. Separate gases", "D. Separate immiscible liquids"],
      answer: "A",
      explanation: "Recrystallization is repeated crystallization to obtain even purer crystals.",
      subtopic: "Crystallization"
    },
    {
      question: "The solvent in chromatography is called the:",
      options: ["A. Mobile phase", "B. Stationary phase", "C. Solid phase", "D. Liquid phase"],
      answer: "A",
      explanation: "The solvent that moves through the stationary phase is the mobile phase.",
      subtopic: "Chromatography"
    },
    {
      question: "The substance that does not move in chromatography is called the:",
      options: ["A. Mobile phase", "B. Stationary phase", "C. Solute", "D. Solvent"],
      answer: "B",
      explanation: "The stationary phase is the substance that remains fixed in place.",
      subtopic: "Chromatography"
    },
    {
      question: "Which of the following mixtures can be separated by sublimation?",
      options: ["A. Salt and sand", "B. Iodine and sand", "C. Ethanol and water", "D. Oil and water"],
      answer: "B",
      explanation: "Iodine sublimes, so it can be separated from sand by heating.",
      subtopic: "Sublimation"
    },
    {
      question: "Which of the following mixtures can be separated by magnetization?",
      options: ["A. Salt and water", "B. Iron and sulfur", "C. Ethanol and water", "D. Oil and water"],
      answer: "B",
      explanation: "Iron is magnetic and can be separated from non-magnetic sulfur.",
      subtopic: "Magnetization"
    },
    {
      question: "The difference between evaporation and distillation is that:",
      options: ["A. Evaporation collects the solid, distillation collects the liquid", "B. Evaporation uses heat, distillation does not", "C. Distillation collects the solid, evaporation collects the liquid", "D. There is no difference"],
      answer: "A",
      explanation: "Evaporation collects the solid (solute). Distillation collects the liquid (solvent).",
      subtopic: "Evaporation"
    },
    {
      question: "Which method is used to separate crude oil into its components?",
      options: ["A. Simple distillation", "B. Fractional distillation", "C. Filtration", "D. Chromatography"],
      answer: "B",
      explanation: "Fractional distillation is used in petroleum refining to separate crude oil fractions.",
      subtopic: "Distillation"
    },
    {
      question: "Which of the following is NOT a separation technique?",
      options: ["A. Filtration", "B. Combustion", "C. Distillation", "D. Chromatography"],
      answer: "B",
      explanation: "Combustion is a chemical reaction, not a separation technique.",
      subtopic: "Separation techniques"
    },
    {
      question: "The boiling point of a liquid mixture is:",
      options: ["A. Always constant", "B. Always variable", "C. Depends on composition", "D. Independent of composition"],
      answer: "C",
      explanation: "The boiling point of a liquid mixture depends on its composition.",
      subtopic: "Purity"
    },
    {
      question: "A mixture of sand and water can be separated by:",
      options: ["A. Filtration", "B. Distillation", "C. Sublimation", "D. Chromatography"],
      answer: "A",
      explanation: "Sand is insoluble in water, so filtration separates them.",
      subtopic: "Filtration"
    },
    {
      question: "A mixture of salt and water can be separated by:",
      options: ["A. Filtration", "B. Evaporation", "C. Sublimation", "D. Magnetization"],
      answer: "B",
      explanation: "Evaporation removes water, leaving salt behind.",
      subtopic: "Evaporation"
    },
    {
      question: "Which of the following would you use to separate two immiscible liquids?",
      options: ["A. Fractional distillation", "B. Separating funnel", "C. Filtration", "D. Chromatography"],
      answer: "B",
      explanation: "A separating funnel separates immiscible liquids like oil and water.",
      subtopic: "Separation techniques"
    },
    {
      question: "Which of the following is a homogeneous mixture?",
      options: ["A. Sand in water", "B. Salt in water", "C. Oil in water", "D. Iron filings in sand"],
      answer: "B",
      explanation: "Salt in water is homogeneous (uniform composition). The others are heterogeneous.",
      subtopic: "Classification of mixtures"
    },
    {
      question: "Which of the following is a heterogeneous mixture?",
      options: ["A. Salt in water", "B. Sugar in water", "C. Sand in water", "D. Ethanol in water"],
      answer: "C",
      explanation: "Sand in water is heterogeneous (can see different components).",
      subtopic: "Classification of mixtures"
    },
    {
      question: "The process of removing water from a solid by heating is called:",
      options: ["A. Evaporation", "B. Distillation", "C. Desiccation", "D. Sublimation"],
      answer: "A",
      explanation: "Evaporation removes water (or solvent) from a solid by heating.",
      subtopic: "Evaporation"
    },
    {
      question: "Which method would you use to separate petrol from crude oil?",
      options: ["A. Simple distillation", "B. Fractional distillation", "C. Filtration", "D. Crystallization"],
      answer: "B",
      explanation: "Fractional distillation separates different fractions of crude oil.",
      subtopic: "Distillation"
    },
    {
      question: "The stationary phase in paper chromatography is:",
      options: ["A. The paper", "B. The solvent", "C. The sample", "D. The container"],
      answer: "A",
      explanation: "The paper acts as the stationary phase in paper chromatography.",
      subtopic: "Chromatography"
    },
    {
      question: "The mobile phase in paper chromatography is:",
      options: ["A. The paper", "B. The solvent", "C. The sample", "D. The container"],
      answer: "B",
      explanation: "The solvent (mobile phase) moves up the paper in paper chromatography.",
      subtopic: "Chromatography"
    },
    {
      question: "Which method would you use to separate a mixture of copper sulphate and sand?",
      options: ["A. Dissolve in water then filter", "B. Sublimation", "C. Fractional distillation", "D. Magnetization"],
      answer: "A",
      explanation: "Copper sulphate dissolves in water, sand does not. Dissolve then filter.",
      subtopic: "Separation techniques"
    },
    {
      question: "Which of the following is NOT a type of chromatography?",
      options: ["A. Paper chromatography", "B. Column chromatography", "C. Gas chromatography", "D. Distillation chromatography"],
      answer: "D",
      explanation: "Distillation is a different separation technique, not a type of chromatography.",
      subtopic: "Chromatography"
    }
  ],
  periodic: [
    {
      question: "Elements in the same group of the periodic table have the same:",
      options: ["A. Atomic mass", "B. Number of electron shells", "C. Number of valence electrons", "D. Atomic radius"],
      answer: "C",
      explanation: "Elements in the same group have the same number of valence electrons.",
      subtopic: "Groups"
    },
    {
      question: "Elements in the same period of the periodic table have the same:",
      options: ["A. Number of valence electrons", "B. Number of electron shells", "C. Chemical properties", "D. Atomic radius"],
      answer: "B",
      explanation: "Elements in the same period have the same number of electron shells.",
      subtopic: "Periods"
    },
    {
      question: "The periodic law states that the properties of elements are a function of their:",
      options: ["A. Atomic mass", "B. Atomic number", "C. Neutron number", "D. Mass number"],
      answer: "B",
      explanation: "The periodic law states that properties are a function of atomic number.",
      subtopic: "Periodic law"
    },
    {
      question: "Which of the following is an alkali metal?",
      options: ["A. Calcium", "B. Sodium", "C. Aluminium", "D. Chlorine"],
      answer: "B",
      explanation: "Sodium (Na) is in Group I — the alkali metals.",
      subtopic: "Alkali metals"
    },
    {
      question: "Which of the following is a halogen?",
      options: ["A. Sodium", "B. Magnesium", "C. Chlorine", "D. Neon"],
      answer: "C",
      explanation: "Chlorine is in Group VII — the halogens.",
      subtopic: "Halogens"
    },
    {
      question: "Which group contains the noble gases?",
      options: ["A. Group I", "B. Group IV", "C. Group VII", "D. Group VIII (0)"],
      answer: "D",
      explanation: "Noble gases are in Group VIII (also called Group 0).",
      subtopic: "Noble gases"
    },
    {
      question: "Which of the following is a transition metal?",
      options: ["A. Sodium", "B. Magnesium", "C. Iron", "D. Chlorine"],
      answer: "C",
      explanation: "Iron (Fe) is a transition metal (d-block element).",
      subtopic: "Transition metals"
    },
    {
      question: "Across a period from left to right, atomic radius:",
      options: ["A. Increases", "B. Decreases", "C. Remains the same", "D. First increases then decreases"],
      answer: "B",
      explanation: "Across a period, nuclear charge increases, pulling electrons closer, so atomic radius decreases.",
      subtopic: "Periodic properties"
    },
    {
      question: "Down a group, atomic radius:",
      options: ["A. Increases", "B. Decreases", "C. Remains the same", "D. First increases then decreases"],
      answer: "A",
      explanation: "Down a group, new shells are added, increasing atomic radius.",
      subtopic: "Periodic properties"
    },
    {
      question: "Across a period, ionization energy generally:",
      options: ["A. Increases", "B. Decreases", "C. Remains the same", "D. First increases then decreases"],
      answer: "A",
      explanation: "Across a period, nuclear charge increases, so more energy is needed to remove an electron.",
      subtopic: "Ionization energy"
    },
    {
      question: "Down a group, ionization energy generally:",
      options: ["A. Increases", "B. Decreases", "C. Remains the same", "D. First increases then decreases"],
      answer: "B",
      explanation: "Down a group, electrons are further from the nucleus and more shielded, so ionization energy decreases.",
      subtopic: "Ionization energy"
    },
    {
      question: "Across a period, electronegativity generally:",
      options: ["A. Increases", "B. Decreases", "C. Remains the same", "D. First increases then decreases"],
      answer: "A",
      explanation: "Across a period, electronegativity increases due to higher nuclear charge.",
      subtopic: "Electronegativity"
    },
    {
      question: "Down a group, electronegativity generally:",
      options: ["A. Increases", "B. Decreases", "C. Remains the same", "D. First increases then decreases"],
      answer: "B",
      explanation: "Down a group, electronegativity decreases as atomic size increases.",
      subtopic: "Electronegativity"
    },
    {
      question: "Which element has the highest electronegativity?",
      options: ["A. Fluorine", "B. Oxygen", "C. Chlorine", "D. Nitrogen"],
      answer: "A",
      explanation: "Fluorine is the most electronegative element (Pauling scale: 4.0).",
      subtopic: "Electronegativity"
    },
    {
      question: "Which element has the lowest electronegativity?",
      options: ["A. Cesium", "B. Lithium", "C. Sodium", "D. Potassium"],
      answer: "A",
      explanation: "Cesium has the lowest electronegativity among stable elements.",
      subtopic: "Electronegativity"
    },
    {
      question: "Metallic character across a period:",
      options: ["A. Increases", "B. Decreases", "C. Remains the same", "D. First increases then decreases"],
      answer: "B",
      explanation: "Metallic character decreases across a period as elements become more non-metallic.",
      subtopic: "Periodic properties"
    },
    {
      question: "Metallic character down a group:",
      options: ["A. Increases", "B. Decreases", "C. Remains the same", "D. First increases then decreases"],
      answer: "A",
      explanation: "Metallic character increases down a group as elements become more metallic.",
      subtopic: "Periodic properties"
    },
    {
      question: "Which of the following is a semi-metal (metalloid)?",
      options: ["A. Sodium", "B. Silicon", "C. Chlorine", "D. Iron"],
      answer: "B",
      explanation: "Silicon is a metalloid (semi-metal).",
      subtopic: "Metalloids"
    },
    {
      question: "Which of the following is a metalloid?",
      options: ["A. Boron", "B. Carbon", "C. Nitrogen", "D. Oxygen"],
      answer: "A",
      explanation: "Boron is a metalloid. Carbon, nitrogen, and oxygen are non-metals.",
      subtopic: "Metalloids"
    },
    {
      question: "The electron affinity of an element is the:",
      options: ["A. Energy required to remove an electron", "B. Energy released when an electron is added", "C. Tendency to attract electrons", "D. Ability to conduct electricity"],
      answer: "B",
      explanation: "Electron affinity is the energy released when an electron is added to a gaseous atom.",
      subtopic: "Electron affinity"
    },
    {
      question: "Across a period, electron affinity generally:",
      options: ["A. Increases", "B. Decreases", "C. Remains the same", "D. First increases then decreases"],
      answer: "A",
      explanation: "Electron affinity generally increases across a period.",
      subtopic: "Electron affinity"
    },
    {
      question: "The alkali metals are found in Group:",
      options: ["A. I", "B. II", "C. III", "D. IV"],
      answer: "A",
      explanation: "Alkali metals are in Group I (Li, Na, K, Rb, Cs, Fr).",
      subtopic: "Alkali metals"
    },
    {
      question: "The alkaline earth metals are found in Group:",
      options: ["A. I", "B. II", "C. III", "D. IV"],
      answer: "B",
      explanation: "Alkaline earth metals are in Group II (Be, Mg, Ca, Sr, Ba, Ra).",
      subtopic: "Alkaline earth metals"
    },
    {
      question: "The halogens are found in Group:",
      options: ["A. V", "B. VI", "C. VII", "D. VIII"],
      answer: "C",
      explanation: "Halogens are in Group VII (F, Cl, Br, I, At).",
      subtopic: "Halogens"
    },
    {
      question: "The noble gases are found in Group:",
      options: ["A. V", "B. VI", "C. VII", "D. VIII (0)"],
      answer: "D",
      explanation: "Noble gases are in Group VIII (0) (He, Ne, Ar, Kr, Xe, Rn).",
      subtopic: "Noble gases"
    },
    {
      question: "Which of the following is NOT a property of transition metals?",
      options: ["A. Variable oxidation states", "B. Formation of coloured compounds", "C. Low melting points", "D. Catalytic activity"],
      answer: "C",
      explanation: "Transition metals generally have high melting points.",
      subtopic: "Transition metals"
    },
    {
      question: "Which of the following is a property of transition metals?",
      options: ["A. Formation of coloured compounds", "B. Non-variable oxidation states", "C. Low densities", "D. Low melting points"],
      answer: "A",
      explanation: "Transition metals form coloured compounds due to d-d electron transitions.",
      subtopic: "Transition metals"
    },
    {
      question: "The periodic table was first arranged by:",
      options: ["A. Mendeleev", "B. Moseley", "C. Dalton", "D. Rutherford"],
      answer: "A",
      explanation: "Mendeleev arranged the first periodic table based on atomic mass.",
      subtopic: "Periodic table"
    },
    {
      question: "The modern periodic table is arranged by:",
      options: ["A. Atomic mass", "B. Atomic number", "C. Neutron number", "D. Mass number"],
      answer: "B",
      explanation: "The modern periodic table is arranged by increasing atomic number.",
      subtopic: "Periodic table"
    },
    {
      question: "Which scientist revised the periodic table based on atomic number?",
      options: ["A. Mendeleev", "B. Moseley", "C. Dalton", "D. Rutherford"],
      answer: "B",
      explanation: "Moseley revised the periodic table and arranged elements by atomic number.",
      subtopic: "Periodic table"
    },
    {
      question: "Which of the following elements is in Period 3?",
      options: ["A. Sodium", "B. Lithium", "C. Potassium", "D. Rubidium"],
      answer: "A",
      explanation: "Sodium (Na) is in Period 3. Li is Period 2, K and Rb are Period 4 and 5.",
      subtopic: "Periods"
    },
    {
      question: "Which of the following elements is in Period 2?",
      options: ["A. Sodium", "B. Carbon", "C. Potassium", "D. Chlorine"],
      answer: "B",
      explanation: "Carbon (C) is in Period 2.",
      subtopic: "Periods"
    },
    {
      question: "Which of the following is in Group IV?",
      options: ["A. Carbon", "B. Sodium", "C. Chlorine", "D. Iron"],
      answer: "A",
      explanation: "Carbon is in Group IV (C, Si, Ge, Sn, Pb).",
      subtopic: "Groups"
    },
    {
      question: "The number of valence electrons in Group VI elements is:",
      options: ["A. 2", "B. 4", "C. 6", "D. 8"],
      answer: "C",
      explanation: "Group VI elements have 6 valence electrons (e.g., O, S, Se).",
      subtopic: "Groups"
    },
    {
      question: "The number of valence electrons in Group VII elements is:",
      options: ["A. 5", "B. 6", "C. 7", "D. 8"],
      answer: "C",
      explanation: "Group VII (halogens) have 7 valence electrons.",
      subtopic: "Groups"
    },
    {
      question: "The number of valence electrons in Group VIII elements is:",
      options: ["A. 6", "B. 7", "C. 8", "D. 0"],
      answer: "C",
      explanation: "Group VIII (0) noble gases have 8 valence electrons (except He with 2).",
      subtopic: "Groups"
    },
    {
      question: "Beryllium has an electron configuration of 1s²2s². It is in Period:",
      options: ["A. 1", "B. 2", "C. 3", "D. 4"],
      answer: "B",
      explanation: "Beryllium has electrons in 2 shells, so it is in Period 2.",
      subtopic: "Periods"
    },
    {
      question: "The element with electron configuration 1s²2s²2p⁶3s² is:",
      options: ["A. Neon", "B. Magnesium", "C. Sodium", "D. Aluminium"],
      answer: "B",
      explanation: "1s²2s²2p⁶3s² = 12 electrons = Magnesium.",
      subtopic: "Electron configuration"
    },
    {
      question: "Across the third period (Na to Ar), the oxide changes from:",
      options: ["A. Acidic to basic", "B. Basic to acidic", "C. Neutral to basic", "D. Acidic to neutral"],
      answer: "B",
      explanation: "Oxides change from basic (Na₂O, MgO) to amphoteric (Al₂O₃) to acidic (P₂O₅, SO₃, Cl₂O₇).",
      subtopic: "Periodic properties"
    },
    {
      question: "Down Group VII (F to I), the boiling point of elements:",
      options: ["A. Increases", "B. Decreases", "C. Remains the same", "D. First increases then decreases"],
      answer: "A",
      explanation: "Boiling points increase down Group VII as molecular size and van der Waals forces increase.",
      subtopic: "Halogens"
    },
    {
      question: "The most reactive halogen is:",
      options: ["A. Fluorine", "B. Chlorine", "C. Bromine", "D. Iodine"],
      answer: "A",
      explanation: "Fluorine is the most reactive halogen due to low bond dissociation energy.",
      subtopic: "Halogens"
    },
    {
      question: "The least reactive halogen is:",
      options: ["A. Fluorine", "B. Chlorine", "C. Bromine", "D. Iodine"],
      answer: "D",
      explanation: "Iodine is the least reactive halogen.",
      subtopic: "Halogens"
    },
    {
      question: "Which of the following halogens is a liquid at room temperature?",
      options: ["A. Fluorine", "B. Chlorine", "C. Bromine", "D. Iodine"],
      answer: "C",
      explanation: "Bromine (Br₂) is a liquid at room temperature.",
      subtopic: "Halogens"
    },
    {
      question: "Which of the following halogens is a solid at room temperature?",
      options: ["A. Fluorine", "B. Chlorine", "C. Bromine", "D. Iodine"],
      answer: "D",
      explanation: "Iodine (I₂) is a solid at room temperature.",
      subtopic: "Halogens"
    },
    {
      question: "Which of the following halogens is a gas at room temperature?",
      options: ["A. Fluorine and chlorine", "B. Bromine", "C. Iodine", "D. All of them"],
      answer: "A",
      explanation: "Fluorine and chlorine are gases at room temperature.",
      subtopic: "Halogens"
    },
    {
      question: "Which element has the highest ionization energy?",
      options: ["A. Sodium", "B. Magnesium", "C. Chlorine", "D. Argon"],
      answer: "D",
      explanation: "Argon has the highest ionization energy among these (noble gas configuration).",
      subtopic: "Ionization energy"
    },
    {
      question: "Which element has the lowest ionization energy?",
      options: ["A. Sodium", "B. Magnesium", "C. Phosphorus", "D. Chlorine"],
      answer: "A",
      explanation: "Sodium has the lowest ionization energy among these (loses 1 electron easily).",
      subtopic: "Ionization energy"
    },
    {
      question: "The first ionization energy of sodium is 496 kJ/mol. This is lower than that of magnesium because:",
      options: ["A. Sodium has more protons", "B. Sodium has one less proton", "C. Sodium has a full shell", "D. Magnesium has more electrons"],
      answer: "B",
      explanation: "Sodium has 11 protons vs Mg with 12, so less nuclear charge and easier to remove electron.",
      subtopic: "Ionization energy"
    },
    {
      question: "Elements in the same group have similar chemical properties because they have:",
      options: ["A. Same atomic mass", "B. Same number of protons", "C. Same number of valence electrons", "D. Same number of shells"],
      answer: "C",
      explanation: "Same number of valence electrons means similar chemical properties.",
      subtopic: "Groups"
    },
    {
      question: "Which of the following elements is in the p-block?",
      options: ["A. Sodium", "B. Magnesium", "C. Aluminium", "D. Potassium"],
      answer: "C",
      explanation: "Aluminium (Group III) is in the p-block. Na, Mg, K are in the s-block.",
      subtopic: "Blocks"
    },
    {
      question: "Which of the following elements is in the s-block?",
      options: ["A. Carbon", "B. Nitrogen", "C. Sodium", "D. Chlorine"],
      answer: "C",
      explanation: "Sodium (Group I) is in the s-block. Carbon, nitrogen, chlorine are in the p-block.",
      subtopic: "Blocks"
    },
    {
      question: "The d-block elements are also known as:",
      options: ["A. Main group elements", "B. Transition elements", "C. Noble gases", "D. Halogens"],
      answer: "B",
      explanation: "The d-block elements are called transition metals.",
      subtopic: "Blocks"
    },
    {
      question: "The f-block elements are also known as:",
      options: ["A. Transition elements", "B. Inner transition elements", "C. Main group elements", "D. Noble gases"],
      answer: "B",
      explanation: "The f-block elements are inner transition metals (lanthanides and actinides).",
      subtopic: "Blocks"
    }
  ],
  bonding: [
    {
      question: "An ionic bond is formed by:",
      options: ["A. Sharing of electrons", "B. Transfer of electrons", "C. Mutual attraction of nuclei", "D. Overlap of orbitals"],
      answer: "B",
      explanation: "Ionic bonds form when electrons are transferred from a metal to a non-metal.",
      subtopic: "Ionic bonding"
    },
    {
      question: "Which of these compounds contains a covalent bond?",
      options: ["A. NaCl", "B. KBr", "C. H2O", "D. MgO"],
      answer: "C",
      explanation: "Water (H2O) is covalently bonded — oxygen shares electrons with two hydrogen atoms.",
      subtopic: "Covalent bonding"
    },
    {
      question: "The shape of a methane (CH4) molecule is:",
      options: ["A. Linear", "B. Planar triangular", "C. Tetrahedral", "D. Octahedral"],
      answer: "C",
      explanation: "Methane has 4 bonding pairs and no lone pairs, giving it a tetrahedral shape.",
      subtopic: "Molecular shapes"
    },
    {
      question: "A coordinate bond is one in which:",
      options: ["A. Both electrons come from one atom", "B. Electrons are transferred", "C. Each atom donates one electron", "D. Electrons are shared equally"],
      answer: "A",
      explanation: "A coordinate (dative) bond forms when both electrons in the shared pair are donated by one atom.",
      subtopic: "Coordinate bonding"
    },
    {
      question: "Which type of bonding exists in metals?",
      options: ["A. Ionic bonding", "B. Covalent bonding", "C. Metallic bonding", "D. Hydrogen bonding"],
      answer: "C",
      explanation: "Metals are held together by metallic bonding — a lattice of positive ions surrounded by delocalized electrons.",
      subtopic: "Metallic bonding"
    },
    {
      question: "The electronegativity difference between two atoms determines:",
      options: ["A. The type of bond formed", "B. The atomic mass", "C. The number of neutrons", "D. The atomic number"],
      answer: "A",
      explanation: "Electronegativity difference determines bond type: ionic (≥1.7), covalent (<1.7).",
      subtopic: "Bonding"
    },
    {
      question: "Which of the following is an ionic compound?",
      options: ["A. CO2", "B. CH4", "C. NaCl", "D. H2O"],
      answer: "C",
      explanation: "NaCl is ionic (metal + non-metal). CO2, CH4, H2O are covalent.",
      subtopic: "Ionic bonding"
    },
    {
      question: "Which of the following is a covalent compound?",
      options: ["A. CaCl2", "B. MgO", "C. CO2", "D. KBr"],
      answer: "C",
      explanation: "CO2 is covalent (non-metal + non-metal). CaCl2, MgO, KBr are ionic.",
      subtopic: "Covalent bonding"
    },
    {
      question: "The bond angle in a tetrahedral molecule is:",
      options: ["A. 90°", "B. 104.5°", "C. 109.5°", "D. 120°"],
      answer: "C",
      explanation: "The tetrahedral bond angle is 109.5° (e.g., CH4).",
      subtopic: "Molecular shapes"
    },
    {
      question: "The bond angle in a linear molecule is:",
      options: ["A. 90°", "B. 104.5°", "C. 109.5°", "D. 180°"],
      answer: "D",
      explanation: "Linear molecules have a bond angle of 180° (e.g., BeCl2, CO2).",
      subtopic: "Molecular shapes"
    },
    {
      question: "The bond angle in a trigonal planar molecule is:",
      options: ["A. 90°", "B. 104.5°", "C. 109.5°", "D. 120°"],
      answer: "D",
      explanation: "Trigonal planar molecules have a bond angle of 120° (e.g., BF3).",
      subtopic: "Molecular shapes"
    },
    {
      question: "Which of the following is a polar covalent bond?",
      options: ["A. H-H", "B. O=O", "C. H-Cl", "D. Cl-Cl"],
      answer: "C",
      explanation: "H-Cl is polar covalent because chlorine is more electronegative than hydrogen.",
      subtopic: "Covalent bonding"
    },
    {
      question: "Which of the following is a non-polar covalent bond?",
      options: ["A. H-Cl", "B. H-F", "C. H-H", "D. C-O"],
      answer: "C",
      explanation: "H-H is non-polar covalent because both atoms have the same electronegativity.",
      subtopic: "Covalent bonding"
    },
    {
      question: "The presence of lone pairs on the central atom causes:",
      options: ["A. Regular bond angles", "B. Distortion of bond angles", "C. No effect", "D. Ionic character"],
      answer: "B",
      explanation: "Lone pairs repel bonding pairs more strongly, distorting bond angles.",
      subtopic: "Molecular shapes"
    },
    {
      question: "The shape of a water (H2O) molecule is:",
      options: ["A. Linear", "B. Bent (V-shaped)", "C. Tetrahedral", "D. Trigonal planar"],
      answer: "B",
      explanation: "Water has a bent (V-shaped) shape due to two lone pairs on oxygen.",
      subtopic: "Molecular shapes"
    },
    {
      question: "The shape of an ammonia (NH3) molecule is:",
      options: ["A. Linear", "B. Bent", "C. Tetrahedral", "D. Trigonal pyramidal"],
      answer: "D",
      explanation: "Ammonia has a trigonal pyramidal shape due to one lone pair on nitrogen.",
      subtopic: "Molecular shapes"
    },
    {
      question: "The shape of a carbon dioxide (CO2) molecule is:",
      options: ["A. Linear", "B. Bent", "C. Tetrahedral", "D. Trigonal planar"],
      answer: "A",
      explanation: "CO2 is linear (180°) with no lone pairs on carbon.",
      subtopic: "Molecular shapes"
    },
    {
      question: "Which of the following is an example of a polar molecule?",
      options: ["A. CO2", "B. CH4", "C. H2O", "D. CCl4"],
      answer: "C",
      explanation: "Water is polar due to its bent shape and electronegativity difference.",
      subtopic: "Molecular polarity"
    },
    {
      question: "Which of the following is a non-polar molecule?",
      options: ["A. H2O", "B. NH3", "C. CO2", "D. HCl"],
      answer: "C",
      explanation: "CO2 is non-polar because the bond dipoles cancel out in the linear geometry.",
      subtopic: "Molecular polarity"
    },
    {
      question: "The lattice energy of an ionic compound depends on:",
      options: ["A. The size of ions", "B. The charge of ions", "C. The arrangement of ions", "D. All of the above"],
      answer: "D",
      explanation: "Lattice energy depends on ion size, charge, and arrangement.",
      subtopic: "Ionic bonding"
    },
    {
      question: "The bond length between two atoms is determined by:",
      options: ["A. Atomic size", "B. Bond order", "C. Both atomic size and bond order", "D. Neither"],
      answer: "C",
      explanation: "Bond length depends on atomic size and bond order (single, double, triple).",
      subtopic: "Covalent bonding"
    },
    {
      question: "Which of the following has the shortest bond length?",
      options: ["A. C-C", "B. C=C", "C. C≡C", "D. All are equal"],
      answer: "C",
      explanation: "Triple bonds (C≡C) are shorter and stronger than double and single bonds.",
      subtopic: "Covalent bonding"
    },
    {
      question: "Which of the following has the strongest bond?",
      options: ["A. C-C", "B. C=C", "C. C≡C", "D. All are equal"],
      answer: "C",
      explanation: "Triple bonds (C≡C) are the strongest covalent bonds.",
      subtopic: "Covalent bonding"
    },
    {
      question: "Metallic bonding is characterized by:",
      options: ["A. A sea of delocalized electrons", "B. Electron transfer", "C. Electron sharing", "D. Hydrogen bonding"],
      answer: "A",
      explanation: "Metallic bonding involves a lattice of positive ions in a sea of delocalized electrons.",
      subtopic: "Metallic bonding"
    },
    {
      question: "Which property of metals is due to delocalized electrons?",
      options: ["A. Malleability", "B. Electrical conductivity", "C. Ductility", "D. Lustre"],
      answer: "B",
      explanation: "Delocalized electrons allow metals to conduct electricity.",
      subtopic: "Metallic bonding"
    },
    {
      question: "Which property of metals is due to the ability of atoms to slide over each other?",
      options: ["A. Malleability and ductility", "B. Electrical conductivity", "C. Thermal conductivity", "D. Lustre"],
      answer: "A",
      explanation: "Malleability (hammering) and ductility (drawing into wires) result from atoms sliding.",
      subtopic: "Metallic bonding"
    },
    {
      question: "Ionic compounds are usually:",
      options: ["A. Soluble in non-polar solvents", "B. Good conductors in solid state", "C. Soluble in polar solvents", "D. Gases at room temperature"],
      answer: "C",
      explanation: "Ionic compounds dissolve in polar solvents like water due to ion-dipole interactions.",
      subtopic: "Ionic bonding"
    },
    {
      question: "Covalent compounds are usually:",
      options: ["A. Soluble in polar solvents", "B. Soluble in non-polar solvents", "C. Good conductors of electricity", "D. High melting point solids"],
      answer: "B",
      explanation: "Covalent compounds dissolve in non-polar solvents (like dissolves like).",
      subtopic: "Covalent bonding"
    },
    {
      question: "Ionic compounds conduct electricity when:",
      options: ["A. Solid", "B. Dissolved in water or molten", "C. Gaseous", "D. Never"],
      answer: "B",
      explanation: "Ionic compounds conduct electricity in solution (aqueous) or molten state due to free ions.",
      subtopic: "Ionic bonding"
    },
    {
      question: "Covalent compounds do NOT conduct electricity because:",
      options: ["A. They have no free ions", "B. They have free electrons", "C. They are always solid", "D. They are always polar"],
      answer: "A",
      explanation: "Covalent compounds do not contain free ions or free electrons to conduct electricity.",
      subtopic: "Covalent bonding"
    },
    {
      question: "The bond between two identical non-metal atoms is:",
      options: ["A. Polar covalent", "B. Non-polar covalent", "C. Ionic", "D. Metallic"],
      answer: "B",
      explanation: "Identical atoms have same electronegativity, so bond is non-polar covalent.",
      subtopic: "Covalent bonding"
    },
    {
      question: "Which of the following has hydrogen bonding?",
      options: ["A. CH4", "B. H2S", "C. H2O", "D. HCl"],
      answer: "C",
      explanation: "Water (H2O) has hydrogen bonding (H bonded to O, N, or F).",
      subtopic: "Hydrogen bonding"
    },
    {
      question: "Hydrogen bonding is a type of:",
      options: ["A. Intramolecular force", "B. Intermolecular force", "C. Ionic bond", "D. Metallic bond"],
      answer: "B",
      explanation: "Hydrogen bonding is an intermolecular force between molecules.",
      subtopic: "Hydrogen bonding"
    },
    {
      question: "Which of the following has the highest boiling point due to hydrogen bonding?",
      options: ["A. H2S", "B. H2O", "C. H2Se", "D. H2Te"],
      answer: "B",
      explanation: "Water has the highest boiling point among these due to strong hydrogen bonds.",
      subtopic: "Hydrogen bonding"
    },
    {
      question: "Van der Waals forces are:",
      options: ["A. Strong forces", "B. Weak forces", "C. Ionic bonds", "D. Metallic bonds"],
      answer: "B",
      explanation: "Van der Waals forces are weak intermolecular forces.",
      subtopic: "Van der Waals forces"
    },
    {
      question: "The strength of van der Waals forces increases with:",
      options: ["A. Increasing molecular size", "B. Decreasing molecular size", "C. Increasing temperature", "D. Decreasing temperature"],
      answer: "A",
      explanation: "Larger molecules have stronger van der Waals forces due to more electrons.",
      subtopic: "Van der Waals forces"
    },
    {
      question: "Which of the following has the highest melting point?",
      options: ["A. NaCl", "B. H2O", "C. CO2", "D. CH4"],
      answer: "A",
      explanation: "NaCl is ionic with strong electrostatic forces, giving a high melting point.",
      subtopic: "Ionic bonding"
    },
    {
      question: "Which of the following has the lowest melting point?",
      options: ["A. NaCl", "B. MgO", "C. CO2", "D. KCl"],
      answer: "C",
      explanation: "CO2 is molecular covalent with weak intermolecular forces, giving low melting point.",
      subtopic: "Covalent bonding"
    },
    {
      question: "Lewis dot structures show:",
      options: ["A. The arrangement of nuclei", "B. The arrangement of valence electrons", "C. The shape of the molecule", "D. The mass of the atom"],
      answer: "B",
      explanation: "Lewis structures show valence electrons as dots around atoms.",
      subtopic: "Lewis structures"
    },
    {
      question: "The octet rule states that atoms tend to:",
      options: ["A. Gain 8 electrons", "B. Lose 8 electrons", "C. Achieve 8 valence electrons", "D. Achieve 8 neutrons"],
      answer: "C",
      explanation: "Atoms tend to achieve a stable octet of 8 valence electrons.",
      subtopic: "Octet rule"
    },
    {
      question: "Which of the following is an exception to the octet rule?",
      options: ["A. CH4", "B. H2O", "C. BeCl2", "D. NH3"],
      answer: "C",
      explanation: "BeCl2 has only 4 valence electrons around beryllium (incomplete octet).",
      subtopic: "Octet rule"
    },
    {
      question: "The force of attraction between oppositely charged ions is called:",
      options: ["A. Covalent bond", "B. Ionic bond", "C. Hydrogen bond", "D. Metallic bond"],
      answer: "B",
      explanation: "Ionic bonds are electrostatic attractions between oppositely charged ions.",
      subtopic: "Ionic bonding"
    },
    {
      question: "Which of the following elements forms a cation most easily?",
      options: ["A. Chlorine", "B. Oxygen", "C. Sodium", "D. Fluorine"],
      answer: "C",
      explanation: "Sodium (metal) loses its valence electron easily to form a cation.",
      subtopic: "Ionic bonding"
    },
    {
      question: "Which of the following elements forms an anion most easily?",
      options: ["A. Sodium", "B. Magnesium", "C. Chlorine", "D. Aluminium"],
      answer: "C",
      explanation: "Chlorine (non-metal) gains an electron easily to form Cl⁻.",
      subtopic: "Ionic bonding"
    },
    {
      question: "The bond in BF3 is:",
      options: ["A. Ionic", "B. Covalent", "C. Metallic", "D. Hydrogen"],
      answer: "B",
      explanation: "BF3 is covalent (non-metal + non-metal).",
      subtopic: "Covalent bonding"
    },
    {
      question: "Which of the following is a network covalent solid?",
      options: ["A. NaCl", "B. H2O", "C. Diamond", "D. CO2"],
      answer: "C",
      explanation: "Diamond is a network covalent solid with a giant structure.",
      subtopic: "Covalent bonding"
    },
    {
      question: "A single bond consists of how many shared electron pairs?",
      options: ["A. 1", "B. 2", "C. 3", "D. 4"],
      answer: "A",
      explanation: "A single bond is one shared pair of electrons.",
      subtopic: "Covalent bonding"
    },
    {
      question: "A double bond consists of how many shared electron pairs?",
      options: ["A. 1", "B. 2", "C. 3", "D. 4"],
      answer: "B",
      explanation: "A double bond is two shared pairs of electrons.",
      subtopic: "Covalent bonding"
    },
    {
      question: "A triple bond consists of how many shared electron pairs?",
      options: ["A. 1", "B. 2", "C. 3", "D. 4"],
      answer: "C",
      explanation: "A triple bond is three shared pairs of electrons.",
      subtopic: "Covalent bonding"
    },
    {
      question: "Which of the following is a property of metals?",
      options: ["A. High electronegativity", "B. Low melting point", "C. Good conductors of heat", "D. Non-malleable"],
      answer: "C",
      explanation: "Metals are good conductors of heat due to delocalized electrons.",
      subtopic: "Metallic bonding"
    },
    {
      question: "The metallic bond is formed by:",
      options: ["A. Transfer of electrons", "B. Sharing of electrons", "C. Attraction between positive ions and delocalized electrons", "D. Hydrogen bonding"],
      answer: "C",
      explanation: "Metallic bonding is the attraction between positive metal ions and delocalized electrons.",
      subtopic: "Metallic bonding"
    },
    {
      question: "Which of the following compounds has both ionic and covalent bonds?",
      options: ["A. NaCl", "B. KBr", "C. NH4Cl", "D. MgO"],
      answer: "C",
      explanation: "NH4Cl has ionic bonding (NH4⁺ and Cl⁻) and covalent bonding (N-H bonds).",
      subtopic: "Bonding"
    }
  ],
  stoich: [
    {
      question: "The mole is defined as the amount of substance containing:",
      options: ["A. 6.02 × 10²² particles", "B. 6.02 × 10²³ particles", "C. 12 grams of carbon", "D. 1 gram of hydrogen"],
      answer: "B",
      explanation: "One mole contains 6.02 × 10²³ particles (Avogadro's constant).",
      subtopic: "Mole concept"
    },
    {
      question: "What is the molar mass of H2SO4? (H=1, S=32, O=16)",
      options: ["A. 49 g/mol", "B. 80 g/mol", "C. 98 g/mol", "D. 100 g/mol"],
      answer: "C",
      explanation: "H2SO4 = (2×1) + 32 + (4×16) = 2 + 32 + 64 = 98 g/mol.",
      subtopic: "Molar mass"
    },
    {
      question: "The empirical formula shows:",
      options: ["A. The actual number of atoms", "B. The simplest whole number ratio of atoms", "C. The arrangement of atoms", "D. The molecular mass"],
      answer: "B",
      explanation: "The empirical formula gives the simplest whole number ratio of atoms in a compound.",
      subtopic: "Empirical formula"
    },
    {
      question: "How many moles are in 44 g of CO2? (C=12, O=16)",
      options: ["A. 0.5 mol", "B. 1 mol", "C. 2 mol", "D. 4 mol"],
      answer: "B",
      explanation: "Molar mass of CO2 = 12 + (2×16) = 44 g/mol. 44/44 = 1 mol.",
      subtopic: "Mole calculations"
    },
    {
      question: "The law of conservation of mass states that:",
      options: ["A. Mass can be created", "B. Mass can be destroyed", "C. Mass is conserved in a chemical reaction", "D. Mass changes in a reaction"],
      answer: "C",
      explanation: "The law of conservation of mass states that total mass of reactants equals total mass of products.",
      subtopic: "Chemical laws"
    },
    {
      question: "How many molecules are in 2 moles of water?",
      options: ["A. 6.02 × 10²³", "B. 1.204 × 10²⁴", "C. 3.01 × 10²³", "D. 1.806 × 10²⁴"],
      answer: "B",
      explanation: "2 × 6.02 × 10²³ = 1.204 × 10²⁴ molecules.",
      subtopic: "Mole concept"
    },
    {
      question: "What is the mass of 0.5 moles of NaOH? (Na=23, O=16, H=1)",
      options: ["A. 20 g", "B. 40 g", "C. 80 g", "D. 10 g"],
      answer: "A",
      explanation: "Molar mass NaOH = 23 + 16 + 1 = 40 g/mol. 0.5 × 40 = 20 g.",
      subtopic: "Mole calculations"
    },
    {
      question: "How many moles of carbon atoms are in 60 g of carbon? (C=12)",
      options: ["A. 1 mol", "B. 3 mol", "C. 5 mol", "D. 10 mol"],
      answer: "C",
      explanation: "60/12 = 5 moles.",
      subtopic: "Mole calculations"
    },
    {
      question: "What is the percentage of carbon in CO2? (C=12, O=16)",
      options: ["A. 12%", "B. 27.3%", "C. 50%", "D. 72.7%"],
      answer: "B",
      explanation: "Molar mass CO2 = 44 g/mol. (12/44) × 100 = 27.3%.",
      subtopic: "Percentage composition"
    },
    {
      question: "What is the percentage of oxygen in CO2? (C=12, O=16)",
      options: ["A. 27.3%", "B. 50%", "C. 72.7%", "D. 80%"],
      answer: "C",
      explanation: "Molar mass CO2 = 44 g/mol. (32/44) × 100 = 72.7%.",
      subtopic: "Percentage composition"
    },
    {
      question: "The molecular formula of a compound is:",
      options: ["A. The simplest ratio of atoms", "B. The actual number of atoms in a molecule", "C. The ratio of elements by mass", "D. The formula of an ionic compound"],
      answer: "B",
      explanation: "The molecular formula gives the actual number of atoms in a molecule.",
      subtopic: "Molecular formula"
    },
    {
      question: "The empirical formula of glucose (C6H12O6) is:",
      options: ["A. C6H12O6", "B. CH2O", "C. C2H4O2", "D. C3H6O3"],
      answer: "B",
      explanation: "Glucose (C6H12O6) simplifies to CH2O (divide by 6).",
      subtopic: "Empirical formula"
    },
    {
      question: "The empirical formula of ethane (C2H6) is:",
      options: ["A. C2H6", "B. CH3", "C. C2H4", "D. CH2"],
      answer: "B",
      explanation: "C2H6 simplifies to CH3 (divide by 2).",
      subtopic: "Empirical formula"
    },
    {
      question: "The molecular mass of a compound is the sum of:",
      options: ["A. The atomic numbers", "B. The atomic masses of all atoms in the molecule", "C. The number of protons", "D. The number of neutrons"],
      answer: "B",
      explanation: "Molecular mass is the sum of atomic masses of all atoms in the molecule.",
      subtopic: "Molecular mass"
    },
    {
      question: "In the reaction 2H2 + O2 → 2H2O, the mole ratio of H2 to O2 is:",
      options: ["A. 1:1", "B. 1:2", "C. 2:1", "D. 2:3"],
      answer: "C",
      explanation: "From the equation, 2 moles H2 react with 1 mole O2, so ratio is 2:1.",
      subtopic: "Stoichiometry"
    },
    {
      question: "In the reaction N2 + 3H2 → 2NH3, how many moles of NH3 are produced from 2 moles of N2?",
      options: ["A. 2 mol", "B. 4 mol", "C. 6 mol", "D. 8 mol"],
      answer: "B",
      explanation: "1 mole N2 produces 2 moles NH3, so 2 moles N2 produce 4 moles NH3.",
      subtopic: "Stoichiometry"
    },
    {
      question: "In the reaction 2Mg + O2 → 2MgO, how many moles of MgO are produced from 3 moles of Mg?",
      options: ["A. 2 mol", "B. 3 mol", "C. 4 mol", "D. 6 mol"],
      answer: "B",
      explanation: "2 moles Mg produce 2 moles MgO, so 3 moles Mg produce 3 moles MgO.",
      subtopic: "Stoichiometry"
    },
    {
      question: "The law of constant composition states that:",
      options: ["A. Compounds contain elements in variable proportions", "B. A compound always contains the same elements in the same proportion by mass", "C. Mass is conserved", "D. Different compounds have different compositions"],
      answer: "B",
      explanation: "The law of constant composition (definite proportions) states that a compound always has the same element proportions.",
      subtopic: "Chemical laws"
    },
    {
      question: "Which of the following obeys the law of multiple proportions?",
      options: ["A. CO and CO2", "B. H2O and H2O2", "C. Both A and B", "D. NaCl and KCl"],
      answer: "C",
      explanation: "The law of multiple proportions applies to compounds of the same elements (CO/CO2, H2O/H2O2).",
      subtopic: "Chemical laws"
    },
    {
      question: "The molar volume of a gas at STP is:",
      options: ["A. 22.4 L", "B. 24.0 L", "C. 12.0 L", "D. 44.8 L"],
      answer: "A",
      explanation: "At STP (0°C, 1 atm), 1 mole of gas occupies 22.4 L.",
      subtopic: "Molar volume"
    },
    {
      question: "The molar volume of a gas at room temperature (25°C) is approximately:",
      options: ["A. 22.4 L", "B. 24.0 L", "C. 12.0 L", "D. 44.8 L"],
      answer: "B",
      explanation: "At room temperature and pressure (RTP), molar volume is approximately 24.0 L.",
      subtopic: "Molar volume"
    },
    {
      question: "How many moles of gas occupy 44.8 L at STP?",
      options: ["A. 0.5 mol", "B. 1 mol", "C. 2 mol", "D. 4 mol"],
      answer: "C",
      explanation: "44.8 L ÷ 22.4 L/mol = 2 moles.",
      subtopic: "Molar volume"
    },
    {
      question: "The concentration of a solution is expressed as:",
      options: ["A. Mass of solute ÷ Volume of solvent", "B. Mass of solute ÷ Volume of solution", "C. Volume of solute ÷ Mass of solvent", "D. Mass of solvent ÷ Volume of solution"],
      answer: "B",
      explanation: "Concentration = mass (g) ÷ volume (dm³) or mol ÷ dm³.",
      subtopic: "Concentration"
    },
    {
      question: "What is the concentration in mol/dm³ of a solution containing 4 g of NaOH in 250 cm³? (Na=23, O=16, H=1)",
      options: ["A. 0.1 mol/dm³", "B. 0.2 mol/dm³", "C. 0.4 mol/dm³", "D. 0.8 mol/dm³"],
      answer: "C",
      explanation: "Molar mass NaOH = 40 g/mol. 4/40 = 0.1 mol. 250 cm³ = 0.25 dm³. 0.1/0.25 = 0.4 mol/dm³.",
      subtopic: "Concentration"
    },
    {
      question: "What is the mass of NaOH in 250 cm³ of 0.2 mol/dm³ solution? (Na=23, O=16, H=1)",
      options: ["A. 1 g", "B. 2 g", "C. 4 g", "D. 8 g"],
      answer: "B",
      explanation: "Molar mass NaOH = 40 g/mol. Moles = 0.2 × 0.25 = 0.05 mol. Mass = 0.05 × 40 = 2 g.",
      subtopic: "Concentration"
    },
    {
      question: "A standard solution is one whose:",
      options: ["A. Volume is known", "B. Concentration is exactly known", "C. Mass is known", "D. pH is known"],
      answer: "B",
      explanation: "A standard solution has a precisely known concentration.",
      subtopic: "Standard solutions"
    },
    {
      question: "A primary standard is a substance that is:",
      options: ["A. Highly reactive", "B. Very pure and stable", "C. Easily oxidized", "D. Not soluble"],
      answer: "B",
      explanation: "A primary standard must be very pure, stable, and not hygroscopic.",
      subtopic: "Primary standards"
    },
    {
      question: "An example of a primary standard is:",
      options: ["A. HCl", "B. NaOH", "C. Na2CO3", "D. H2SO4"],
      answer: "C",
      explanation: "Na2CO3 (anhydrous sodium carbonate) is a primary standard.",
      subtopic: "Primary standards"
    },
    {
      question: "Which of the following is NOT a primary standard?",
      options: ["A. Na2CO3", "B. (COOH)2·2H2O", "C. NaCl", "D. NaOH"],
      answer: "D",
      explanation: "NaOH is not a primary standard because it absorbs moisture and CO2 from the air.",
      subtopic: "Primary standards"
    },
    {
      question: "The formula for calculating percentage yield is:",
      options: ["A. (Actual yield ÷ Theoretical yield) × 100", "B. (Theoretical yield ÷ Actual yield) × 100", "C. (Actual yield × Theoretical yield) × 100", "D. Actual yield - Theoretical yield"],
      answer: "A",
      explanation: "Percentage yield = (Actual yield ÷ Theoretical yield) × 100.",
      subtopic: "Yield"
    },
    {
      question: "If the theoretical yield of a reaction is 10 g and the actual yield is 8 g, the percentage yield is:",
      options: ["A. 20%", "B. 80%", "C. 100%", "D. 120%"],
      answer: "B",
      explanation: "(8/10) × 100 = 80%.",
      subtopic: "Yield"
    },
    {
      question: "The percentage purity of a substance is calculated as:",
      options: ["A. (Mass of pure substance ÷ Mass of sample) × 100", "B. (Mass of sample ÷ Mass of pure substance) × 100", "C. (Mass of impurity ÷ Mass of sample) × 100", "D. (Mass of sample ÷ Mass of impurity) × 100"],
      answer: "A",
      explanation: "Percentage purity = (Mass of pure substance ÷ Mass of sample) × 100.",
      subtopic: "Purity"
    },
    {
      question: "If a sample of 10 g contains 9 g of pure substance, the percentage purity is:",
      options: ["A. 90%", "B. 10%", "C. 100%", "D. 80%"],
      answer: "A",
      explanation: "(9/10) × 100 = 90%.",
      subtopic: "Purity"
    },
    {
      question: "The amount of substance in a solution is calculated using:",
      options: ["A. Mass ÷ Molar mass", "B. Concentration × Volume", "C. Both A and B", "D. Mass × Volume"],
      answer: "C",
      explanation: "Amount of substance = mass/molar mass = concentration × volume.",
      subtopic: "Mole calculations"
    },
    {
      question: "In a titration, the equivalence point is:",
      options: ["A. Where the indicator changes colour", "B. Where the acid and base have exactly neutralized each other", "C. Where the acid is in excess", "D. Where the base is in excess"],
      answer: "B",
      explanation: "The equivalence point is where the moles of acid equals moles of base.",
      subtopic: "Titration"
    },
    {
      question: "The endpoint in a titration is:",
      options: ["A. Where the acid and base neutralize", "B. Where the indicator changes colour", "C. The start of the titration", "D. When all acid is used up"],
      answer: "B",
      explanation: "The endpoint is the point where the indicator changes colour.",
      subtopic: "Titration"
    },
    {
      question: "Which of the following equations represents a combustion reaction?",
      options: ["A. CH4 + 2O2 → CO2 + 2H2O", "B. NaCl + AgNO3 → AgCl + NaNO3", "C. Zn + CuSO4 → ZnSO4 + Cu", "D. CaCO3 → CaO + CO2"],
      answer: "A",
      explanation: "Combustion is the reaction of a substance with oxygen, releasing heat and light.",
      subtopic: "Chemical equations"
    },
    {
      question: "Which of the following is a displacement reaction?",
      options: ["A. CH4 + 2O2 → CO2 + 2H2O", "B. Zn + CuSO4 → ZnSO4 + Cu", "C. CaCO3 → CaO + CO2", "D. NaOH + HCl → NaCl + H2O"],
      answer: "B",
      explanation: "Zinc displaces copper from copper sulfate — a displacement reaction.",
      subtopic: "Chemical equations"
    },
    {
      question: "Which of the following is a decomposition reaction?",
      options: ["A. CH4 + 2O2 → CO2 + 2H2O", "B. Zn + CuSO4 → ZnSO4 + Cu", "C. CaCO3 → CaO + CO2", "D. NaOH + HCl → NaCl + H2O"],
      answer: "C",
      explanation: "Calcium carbonate decomposes into calcium oxide and carbon dioxide.",
      subtopic: "Chemical equations"
    },
    {
      question: "Which of the following is a neutralization reaction?",
      options: ["A. CH4 + 2O2 → CO2 + 2H2O", "B. Zn + CuSO4 → ZnSO4 + Cu", "C. CaCO3 → CaO + CO2", "D. NaOH + HCl → NaCl + H2O"],
      answer: "D",
      explanation: "Acid + base → salt + water is a neutralization reaction.",
      subtopic: "Chemical equations"
    },
    {
      question: "The volume of 0.1 mol/dm³ HCl required to neutralize 25 cm³ of 0.2 mol/dm³ NaOH is:",
      options: ["A. 25 cm³", "B. 50 cm³", "C. 12.5 cm³", "D. 75 cm³"],
      answer: "B",
      explanation: "Moles NaOH = 0.2 × 25/1000 = 0.005 mol. Moles HCl needed = 0.005 mol. Volume = 0.005/0.1 = 0.05 dm³ = 50 cm³.",
      subtopic: "Titration"
    },
    {
      question: "The mass of 1 mole of electrons is:",
      options: ["A. 9.11 × 10⁻³¹ g", "B. 5.49 × 10⁻⁷ g", "C. 1.00 g", "D. 6.02 × 10²³ g"],
      answer: "B",
      explanation: "Mass of 1 mole of electrons = 6.02 × 10²³ × 9.11 × 10⁻²⁸ = 5.49 × 10⁻⁴ g ≈ 5.49 × 10⁻⁷ kg.",
      subtopic: "Mole concept"
    },
    {
      question: "The number of atoms in 1 mole of any element is:",
      options: ["A. 6.02 × 10²²", "B. 6.02 × 10²³", "C. 6.02 × 10²⁴", "D. 6.02 × 10²⁵"],
      answer: "B",
      explanation: "One mole of any element contains Avogadro's number (6.02 × 10²³) of atoms.",
      subtopic: "Mole concept"
    },
    {
      question: "The formula mass of NaCl is: (Na=23, Cl=35.5)",
      options: ["A. 23.0", "B. 35.5", "C. 58.5", "D. 70.5"],
      answer: "C",
      explanation: "Formula mass of NaCl = 23 + 35.5 = 58.5.",
      subtopic: "Formula mass"
    },
    {
      question: "What is the formula mass of CaCO3? (Ca=40, C=12, O=16)",
      options: ["A. 56", "B. 80", "C. 100", "D. 120"],
      answer: "C",
      explanation: "CaCO3 = 40 + 12 + (3×16) = 40 + 12 + 48 = 100.",
      subtopic: "Formula mass"
    },
    {
      question: "How many moles of ions are produced when 1 mole of NaCl dissolves in water?",
      options: ["A. 1 mol", "B. 2 mol", "C. 3 mol", "D. 4 mol"],
      answer: "B",
      explanation: "NaCl → Na⁺ + Cl⁻, so 1 mole produces 2 moles of ions.",
      subtopic: "Stoichiometry"
    },
    {
      question: "How many moles of ions are produced when 1 mole of MgCl2 dissolves in water?",
      options: ["A. 1 mol", "B. 2 mol", "C. 3 mol", "D. 4 mol"],
      answer: "C",
      explanation: "MgCl2 → Mg²⁺ + 2Cl⁻, so 1 mole produces 3 moles of ions.",
      subtopic: "Stoichiometry"
    },
    {
      question: "The law of multiple proportions is demonstrated by:",
      options: ["A. H2O and H2O2", "B. NaCl and KCl", "C. CO2 and SO2", "D. NaOH and KOH"],
      answer: "A",
      explanation: "H2O and H2O2 contain H and O in different ratios, demonstrating the law of multiple proportions.",
      subtopic: "Chemical laws"
    },
    {
      question: "In the reaction 2Mg + O2 → 2MgO, the mass of MgO produced from 48 g of Mg is: (Mg=24, O=16)",
      options: ["A. 40 g", "B. 80 g", "C. 120 g", "D. 160 g"],
      answer: "B",
      explanation: "2 moles Mg (48 g) produce 2 moles MgO (2 × 40 = 80 g).",
      subtopic: "Stoichiometry"
    },
    {
      question: "In the reaction CaCO3 → CaO + CO2, the mass of CaO produced from 100 g of CaCO3 is: (Ca=40, C=12, O=16)",
      options: ["A. 28 g", "B. 44 g", "C. 56 g", "D. 100 g"],
      answer: "C",
      explanation: "100 g CaCO3 = 1 mol. 1 mol produces 1 mol CaO = 56 g.",
      subtopic: "Stoichiometry"
    },
    {
      question: "The relative molecular mass of a compound is:",
      options: ["A. The same as its molar mass", "B. Half its molar mass", "C. Twice its molar mass", "D. Unrelated to molar mass"],
      answer: "A",
      explanation: "Relative molecular mass and molar mass are numerically the same, but units differ.",
      subtopic: "Molecular mass"
    },
    {
      question: "The formula for calculating moles is:",
      options: ["A. Mass × Molar mass", "B. Mass ÷ Molar mass", "C. Molar mass ÷ Mass", "D. Mass + Molar mass"],
      answer: "B",
      explanation: "Moles = Mass ÷ Molar mass.",
      subtopic: "Mole calculations"
    },
    {
      question: "The number of moles in 90 g of water is: (H=1, O=16)",
      options: ["A. 2 mol", "B. 3 mol", "C. 4 mol", "D. 5 mol"],
      answer: "D",
      explanation: "Molar mass H2O = 18 g/mol. 90/18 = 5 mol.",
      subtopic: "Mole calculations"
    },
    {
      question: "The mass of 2 moles of NaOH is: (Na=23, O=16, H=1)",
      options: ["A. 20 g", "B. 40 g", "C. 80 g", "D. 120 g"],
      answer: "C",
      explanation: "Molar mass NaOH = 40 g/mol. 2 × 40 = 80 g.",
      subtopic: "Mole calculations"
    },
    {
      question: "Which law states that matter cannot be created or destroyed in a chemical reaction?",
      options: ["A. Law of constant composition", "B. Law of multiple proportions", "C. Law of conservation of mass", "D. Avogadro's law"],
      answer: "C",
      explanation: "The law of conservation of mass states that mass is neither created nor destroyed.",
      subtopic: "Chemical laws"
    }
  ],
  states: [
    {
      question: "Which state of matter has a fixed volume but no fixed shape?",
      options: ["A. Solid", "B. Liquid", "C. Gas", "D. Plasma"],
      answer: "B",
      explanation: "Liquids have a fixed volume but take the shape of their container.",
      subtopic: "States of matter"
    },
    {
      question: "The temperature at which a solid becomes a liquid is called the:",
      options: ["A. Boiling point", "B. Melting point", "C. Freezing point", "D. Sublimation point"],
      answer: "B",
      explanation: "The melting point is the temperature at which a solid changes to a liquid.",
      subtopic: "Phase changes"
    },
    {
      question: "Sublimation is the direct change from:",
      options: ["A. Solid to liquid", "B. Liquid to gas", "C. Solid to gas", "D. Gas to liquid"],
      answer: "C",
      explanation: "Sublimation is the direct transition of a solid to a gas without passing through the liquid state.",
      subtopic: "Sublimation"
    },
    {
      question: "What happens to the kinetic energy of particles as temperature increases?",
      options: ["A. It decreases", "B. It stays the same", "C. It increases", "D. It becomes zero"],
      answer: "C",
      explanation: "As temperature increases, particles gain kinetic energy and move faster.",
      subtopic: "Kinetic theory"
    },
    {
      question: "In which state of matter are particles arranged in a regular lattice structure?",
      options: ["A. Solid", "B. Liquid", "C. Gas", "D. All of the above"],
      answer: "A",
      explanation: "Solids have a regular, ordered arrangement of particles in a lattice structure.",
      subtopic: "Solid structure"
    },
    {
      question: "Which state of matter has the highest kinetic energy?",
      options: ["A. Solid", "B. Liquid", "C. Gas", "D. All have the same"],
      answer: "C",
      explanation: "Gases have the highest kinetic energy as particles move freely and rapidly.",
      subtopic: "Kinetic theory"
    },
    {
      question: "The process of a liquid changing to a gas at the surface is called:",
      options: ["A. Boiling", "B. Evaporation", "C. Condensation", "D. Sublimation"],
      answer: "B",
      explanation: "Evaporation occurs at the surface of a liquid at any temperature.",
      subtopic: "Evaporation"
    },
    {
      question: "At what temperature does water boil at standard atmospheric pressure?",
      options: ["A. 0°C", "B. 50°C", "C. 100°C", "D. 200°C"],
      answer: "C",
      explanation: "Water boils at 100°C (373 K) at standard atmospheric pressure.",
      subtopic: "Boiling point"
    },
    {
      question: "Condensation is the change from:",
      options: ["A. Solid to liquid", "B. Liquid to gas", "C. Gas to liquid", "D. Solid to gas"],
      answer: "C",
      explanation: "Condensation is when a gas changes to a liquid.",
      subtopic: "Condensation"
    },
    {
      question: "Which of the following is NOT a property of gases?",
      options: ["A. Definite shape", "B. Compressible", "C. Fill their container", "D. Low density"],
      answer: "A",
      explanation: "Gases have no definite shape — they take the shape of their container.",
      subtopic: "Properties of gases"
    },
    {
      question: "The pressure exerted by a gas is caused by:",
      options: ["A. The mass of the gas", "B. Collisions of particles with walls", "C. The volume of the gas", "D. The density of the gas"],
      answer: "B",
      explanation: "Gas pressure is caused by particles colliding with the walls of the container.",
      subtopic: "Gas pressure"
    },
    {
      question: "Boyle's Law states that at constant temperature:",
      options: ["A. Volume is inversely proportional to pressure", "B. Volume is directly proportional to pressure", "C. Volume is proportional to temperature", "D. Pressure is constant"],
      answer: "A",
      explanation: "Boyle's Law: P × V = constant. As pressure increases, volume decreases.",
      subtopic: "Boyle's Law"
    },
    {
      question: "Charles's Law states that at constant pressure:",
      options: ["A. Volume is inversely proportional to temperature", "B. Volume is directly proportional to temperature", "C. Pressure is inversely proportional to volume", "D. Temperature is constant"],
      answer: "B",
      explanation: "Charles's Law: V/T = constant. As temperature increases, volume increases.",
      subtopic: "Charles's Law"
    },
    {
      question: "The absolute zero temperature is:",
      options: ["A. 0°C", "B. -100°C", "C. -273°C", "D. -373°C"],
      answer: "C",
      explanation: "Absolute zero is 0 K = -273°C, the theoretical lowest possible temperature.",
      subtopic: "Absolute zero"
    },
    {
      question: "Which of the following has the strongest intermolecular forces?",
      options: ["A. Gas", "B. Liquid", "C. Solid", "D. All are equal"],
      answer: "C",
      explanation: "Solids have the strongest intermolecular forces holding particles in fixed positions.",
      subtopic: "Intermolecular forces"
    },
    {
      question: "Diffusion is faster in:",
      options: ["A. Solids", "B. Liquids", "C. Gases", "D. All are the same"],
      answer: "C",
      explanation: "Diffusion is fastest in gases because particles move freely and rapidly.",
      subtopic: "Diffusion"
    },
    {
      question: "The triple point of a substance is the temperature and pressure where:",
      options: ["A. All three states coexist", "B. Only solid and liquid coexist", "C. Only liquid and gas coexist", "D. The substance sublimates"],
      answer: "A",
      explanation: "The triple point is where solid, liquid, and gas phases coexist in equilibrium.",
      subtopic: "Triple point"
    },
    {
      question: "Which of these is an example of sublimation?",
      options: ["A. Ice melting", "B. Water boiling", "C. Dry ice turning to gas", "D. Water freezing"],
      answer: "C",
      explanation: "Dry ice (solid CO2) sublimates directly from solid to gas at room temperature.",
      subtopic: "Sublimation examples"
    },
    {
      question: "The boiling point of a liquid increases with:",
      options: ["A. Decreasing pressure", "B. Increasing pressure", "C. Increasing volume", "D. Decreasing temperature"],
      answer: "B",
      explanation: "As pressure increases, more energy is needed for boiling, so boiling point increases.",
      subtopic: "Boiling point"
    },
    {
      question: "A liquid with weak intermolecular forces will have:",
      options: ["A. A high boiling point", "B. A low boiling point", "C. A high melting point", "D. A high density"],
      answer: "B",
      explanation: "Weak intermolecular forces mean less energy is needed to separate particles.",
      subtopic: "Intermolecular forces"
    },
    {
      question: "The kinetic theory of matter assumes that particles are:",
      options: ["A. Stationary", "B. In constant random motion", "C. Attracted to each other only", "D. Large and heavy"],
      answer: "B",
      explanation: "The kinetic theory states that particles are in constant random motion.",
      subtopic: "Kinetic theory"
    },
    {
      question: "When a gas is compressed, its pressure increases because:",
      options: ["A. Particles move faster", "B. Particles collide more frequently", "C. Temperature increases", "D. Mass increases"],
      answer: "B",
      explanation: "Compressing a gas reduces volume, increasing collision frequency and thus pressure.",
      subtopic: "Gas pressure"
    },
    {
      question: "The process of a solid changing directly to a liquid is called:",
      options: ["A. Sublimation", "B. Melting", "C. Freezing", "D. Condensation"],
      answer: "B",
      explanation: "Melting is the change from solid to liquid at the melting point.",
      subtopic: "Melting"
    },
    {
      question: "Which gas law relates pressure, volume, and temperature?",
      options: ["A. Boyle's Law", "B. Charles's Law", "C. Combined Gas Law", "D. Avogadro's Law"],
      answer: "C",
      explanation: "The Combined Gas Law: P₁V₁/T₁ = P₂V₂/T₂ relates all three variables.",
      subtopic: "Gas laws"
    },
    {
      question: "The density of a gas increases when:",
      options: ["A. Temperature increases at constant pressure", "B. Pressure increases at constant temperature", "C. Volume increases", "D. The gas expands"],
      answer: "B",
      explanation: "Increasing pressure compresses gas, increasing its density.",
      subtopic: "Gas density"
    },
    {
      question: "Which of the following substances has the highest melting point?",
      options: ["A. Oxygen", "B. Iron", "C. Water", "D. Carbon dioxide"],
      answer: "B",
      explanation: "Iron has a much higher melting point (1538°C) compared to the others.",
      subtopic: "Melting point"
    },
    {
      question: "Evaporation causes cooling because:",
      options: ["A. Heat is absorbed from the surroundings", "B. Heat is released", "C. Temperature increases", "D. Pressure decreases"],
      answer: "A",
      explanation: "Evaporation absorbs heat energy from the surroundings, causing cooling.",
      subtopic: "Evaporation"
    },
    {
      question: "The critical temperature of a gas is:",
      options: ["A. The temperature at which it freezes", "B. The temperature above which it cannot be liquefied", "C. The boiling point", "D. The melting point"],
      answer: "B",
      explanation: "Above the critical temperature, a gas cannot be liquefied regardless of pressure.",
      subtopic: "Critical temperature"
    },
    {
      question: "Which of the following is an amorphous solid?",
      options: ["A. Diamond", "B. Salt", "C. Glass", "D. Iron"],
      answer: "C",
      explanation: "Glass is amorphous — its particles are not arranged in a regular lattice.",
      subtopic: "Amorphous solids"
    },
    {
      question: "Crystalline solids differ from amorphous solids because they:",
      options: ["A. Have no definite melting point", "B. Have a regular repeating structure", "C. Are always transparent", "D. Are soft"],
      answer: "B",
      explanation: "Crystalline solids have a regular, repeating 3D structure (lattice).",
      subtopic: "Crystalline solids"
    },
    {
      question: "Which intermolecular force is the weakest?",
      options: ["A. Ionic bonds", "B. Covalent bonds", "C. Van der Waals forces", "D. Hydrogen bonds"],
      answer: "C",
      explanation: "Van der Waals forces (London dispersion forces) are the weakest intermolecular forces.",
      subtopic: "Intermolecular forces"
    },
    {
      question: "Hydrogen bonding occurs between molecules containing:",
      options: ["A. H bonded to C", "B. H bonded to N, O, or F", "C. H bonded to Cl", "D. H bonded to S"],
      answer: "B",
      explanation: "Hydrogen bonds form when hydrogen is bonded to highly electronegative atoms N, O, or F.",
      subtopic: "Hydrogen bonding"
    },
    {
      question: "Which of the following has hydrogen bonding?",
      options: ["A. CH4", "B. H2O", "C. HCl", "D. H2S"],
      answer: "B",
      explanation: "Water (H2O) has hydrogen bonding between molecules, giving it unusual properties.",
      subtopic: "Hydrogen bonding"
    },
    {
      question: "The surface tension of a liquid is caused by:",
      options: ["A. Cohesive forces between molecules", "B. Adhesive forces", "C. Gravity", "D. Temperature"],
      answer: "A",
      explanation: "Surface tension arises from cohesive forces between molecules at the surface.",
      subtopic: "Surface tension"
    },
    {
      question: "Viscosity of a liquid increases with:",
      options: ["A. Decreasing temperature", "B. Increasing temperature", "C. Decreasing pressure", "D. Increasing volume"],
      answer: "A",
      explanation: "Viscosity increases as temperature decreases because particles move more slowly.",
      subtopic: "Viscosity"
    },
    {
      question: "In a gas, particles are:",
      options: ["A. Closely packed and vibrating", "B. Far apart and moving freely", "C. Fixed in position", "D. Packed in a lattice"],
      answer: "B",
      explanation: "Gas particles are far apart and move freely in all directions.",
      subtopic: "Gas structure"
    },
    {
      question: "The molar volume of an ideal gas at STP is:",
      options: ["A. 22.4 L", "B. 24.0 L", "C. 12.0 L", "D. 44.8 L"],
      answer: "A",
      explanation: "At STP (0°C and 1 atm), one mole of ideal gas occupies 22.4 L.",
      subtopic: "Molar volume"
    },
    {
      question: "STP stands for:",
      options: ["A. Standard Temperature and Pressure", "B. Standard Time and Pressure", "C. Standard Temperature and Phase", "D. Solid, Temperature, Pressure"],
      answer: "A",
      explanation: "STP = Standard Temperature (0°C or 273 K) and Pressure (1 atm).",
      subtopic: "STP"
    },
    {
      question: "Real gases deviate from ideal behavior at:",
      options: ["A. Low temperature and high pressure", "B. High temperature and low pressure", "C. Low pressure only", "D. High temperature only"],
      answer: "A",
      explanation: "Real gases deviate from ideal behavior at low temperature and high pressure.",
      subtopic: "Real gases"
    },
    {
      question: "The process of a liquid becoming a solid is called:",
      options: ["A. Melting", "B. Freezing", "C. Condensation", "D. Sublimation"],
      answer: "B",
      explanation: "Freezing is the change from liquid to solid.",
      subtopic: "Freezing"
    },
    {
      question: "Which of the following statements is true about diffusion?",
      options: ["A. It occurs only in gases", "B. It occurs fastest in solids", "C. It occurs from high to low concentration", "D. It is independent of temperature"],
      answer: "C",
      explanation: "Diffusion is the net movement of particles from regions of high to low concentration.",
      subtopic: "Diffusion"
    },
    {
      question: "Brownian motion provides evidence for:",
      options: ["A. The existence of atoms and molecules", "B. The density of particles", "C. The mass of particles", "D. The charge of particles"],
      answer: "A",
      explanation: "Brownian motion supports the kinetic theory and existence of atoms.",
      subtopic: "Brownian motion"
    },
    {
      question: "A gas that follows all gas laws exactly is called:",
      options: ["A. A real gas", "B. An ideal gas", "C. A noble gas", "D. A perfect gas"],
      answer: "B",
      explanation: "An ideal gas perfectly obeys all gas laws under all conditions.",
      subtopic: "Ideal gases"
    },
    {
      question: "The average kinetic energy of gas particles is proportional to:",
      options: ["A. Pressure", "B. Volume", "C. Temperature in Kelvin", "D. Number of particles"],
      answer: "C",
      explanation: "Average kinetic energy is directly proportional to absolute temperature (K).",
      subtopic: "Kinetic theory"
    },
    {
      question: "Which of the following has the highest vapor pressure at a given temperature?",
      options: ["A. Water", "B. Ethanol", "C. Mercury", "D. Glycerol"],
      answer: "B",
      explanation: "Ethanol has weak intermolecular forces and thus high vapor pressure.",
      subtopic: "Vapor pressure"
    },
    {
      question: "Boiling occurs when vapor pressure equals:",
      options: ["A. Atmospheric pressure", "B. Zero", "C. Half of atmospheric pressure", "D. Twice atmospheric pressure"],
      answer: "A",
      explanation: "Boiling occurs when the vapor pressure equals the external (atmospheric) pressure.",
      subtopic: "Boiling"
    },
    {
      question: "Which of the following is NOT a characteristic of liquids?",
      options: ["A. Definite volume", "B. Indefinite shape", "C. Incompressible", "D. Particles far apart"],
      answer: "D",
      explanation: "Liquids have closely packed particles, not far apart like gases.",
      subtopic: "Properties of liquids"
    },
    {
      question: "Capillary action is due to:",
      options: ["A. Cohesive forces only", "B. Adhesive forces only", "C. Both cohesive and adhesive forces", "D. Gravity"],
      answer: "C",
      explanation: "Capillary action results from the balance of cohesive and adhesive forces.",
      subtopic: "Capillary action"
    },
    {
      question: "The meniscus of water in a glass tube is concave because:",
      options: ["A. Cohesive forces are stronger than adhesive", "B. Adhesive forces are stronger than cohesive", "C. Both forces are equal", "D. Gravity causes it"],
      answer: "B",
      explanation: "Water adheres to glass more strongly than it coheres to itself, creating a concave meniscus.",
      subtopic: "Meniscus"
    },
    {
      question: "Which of the following changes is endothermic?",
      options: ["A. Freezing", "B. Condensation", "C. Sublimation", "D. Deposition"],
      answer: "C",
      explanation: "Sublimation requires energy input (endothermic) to overcome intermolecular forces.",
      subtopic: "Energy changes"
    },
    {
      question: "Deposition is the change from:",
      options: ["A. Solid to gas", "B. Gas to solid", "C. Liquid to gas", "D. Solid to liquid"],
      answer: "B",
      explanation: "Deposition is the direct change from gas to solid (the reverse of sublimation).",
      subtopic: "Deposition"
    }
  ],
  acids: [
    {
      question: "Which of the following is a strong acid?",
      options: ["A. Ethanoic acid", "B. Carbonic acid", "C. Hydrochloric acid", "D. Citric acid"],
      answer: "C",
      explanation: "HCl is a strong acid — it completely dissociates in water.",
      subtopic: "Strong and weak acids"
    },
    {
      question: "A solution with pH 7 is:",
      options: ["A. Acidic", "B. Basic", "C. Neutral", "D. Strongly acidic"],
      answer: "C",
      explanation: "pH 7 is neutral. Below 7 is acidic, above 7 is basic/alkaline.",
      subtopic: "pH scale"
    },
    {
      question: "What is formed when an acid reacts with a base?",
      options: ["A. An oxide and water", "B. A salt and water", "C. A gas and water", "D. An alkali and salt"],
      answer: "B",
      explanation: "Neutralization: acid + base → salt + water.",
      subtopic: "Neutralization"
    },
    {
      question: "Which indicator is suitable for a strong acid-strong base titration?",
      options: ["A. Starch solution", "B. Litmus", "C. Phenolphthalein only", "D. Both methyl orange and phenolphthalein"],
      answer: "D",
      explanation: "Both methyl orange and phenolphthalein work for strong acid-strong base titrations.",
      subtopic: "Indicators"
    },
    {
      question: "Deliquescent substances are those that:",
      options: ["A. Lose water of crystallization in air", "B. Do not react with water", "C. Absorb moisture from air and dissolve in it", "D. Sublime when heated"],
      answer: "C",
      explanation: "Deliquescent substances absorb so much moisture that they dissolve in it.",
      subtopic: "Deliquescence"
    },
    {
      question: "Which of the following is a weak acid?",
      options: ["A. HCl", "B. H2SO4", "C. HNO3", "D. CH3COOH"],
      answer: "D",
      explanation: "Ethanoic acid (CH3COOH) is a weak acid — it partially dissociates in water.",
      subtopic: "Strong and weak acids"
    },
    {
      question: "Which of the following is a strong base?",
      options: ["A. NH3", "B. NaOH", "C. CH3NH2", "D. Al(OH)3"],
      answer: "B",
      explanation: "NaOH (sodium hydroxide) is a strong base — it completely dissociates in water.",
      subtopic: "Strong and weak bases"
    },
    {
      question: "Which of the following is a weak base?",
      options: ["A. NaOH", "B. KOH", "C. NH3", "D. Ba(OH)2"],
      answer: "C",
      explanation: "Ammonia (NH3) is a weak base — it partially ionizes in water.",
      subtopic: "Strong and weak bases"
    },
    {
      question: "The pH of a solution with [H⁺] = 1 × 10⁻⁴ mol/dm³ is:",
      options: ["A. 2", "B. 3", "C. 4", "D. 5"],
      answer: "C",
      explanation: "pH = -log[H⁺] = -log(10⁻⁴) = 4.",
      subtopic: "pH calculations"
    },
    {
      question: "The pH of a solution with [H⁺] = 1 × 10⁻⁹ mol/dm³ is:",
      options: ["A. 5", "B. 7", "C. 9", "D. 11"],
      answer: "C",
      explanation: "pH = -log(10⁻⁹) = 9.",
      subtopic: "pH calculations"
    },
    {
      question: "What is the [H⁺] of a solution with pH 3?",
      options: ["A. 1 × 10⁻³ mol/dm³", "B. 1 × 10⁻⁴ mol/dm³", "C. 1 × 10⁻⁵ mol/dm³", "D. 1 × 10⁻⁶ mol/dm³"],
      answer: "A",
      explanation: "[H⁺] = 10⁻pH = 10⁻³ mol/dm³.",
      subtopic: "pH calculations"
    },
    {
      question: "Acids react with metals to produce:",
      options: ["A. Salt and water", "B. Salt and hydrogen gas", "C. Salt and carbon dioxide", "D. Salt and oxygen"],
      answer: "B",
      explanation: "Acid + metal → salt + hydrogen gas (e.g., Zn + H2SO4 → ZnSO4 + H2).",
      subtopic: "Reactions of acids"
    },
    {
      question: "Acids react with trioxocarbonates (carbonates) to produce:",
      options: ["A. Salt and hydrogen", "B. Salt, water, and carbon dioxide", "C. Salt and water", "D. Salt and oxygen"],
      answer: "B",
      explanation: "Acid + carbonate → salt + water + carbon dioxide.",
      subtopic: "Reactions of acids"
    },
    {
      question: "Which of the following is produced when an acid reacts with a metal oxide?",
      options: ["A. Salt and hydrogen", "B. Salt and water", "C. Salt, water, and carbon dioxide", "D. Salt and oxygen"],
      answer: "B",
      explanation: "Acid + metal oxide → salt + water.",
      subtopic: "Reactions of acids"
    },
    {
      question: "Which of the following is produced when an acid reacts with a metal hydroxide?",
      options: ["A. Salt and hydrogen", "B. Salt and water", "C. Salt, water, and carbon dioxide", "D. Salt and oxygen"],
      answer: "B",
      explanation: "Acid + metal hydroxide → salt + water (neutralization).",
      subtopic: "Reactions of acids"
    },
    {
      question: "The pH of an acidic solution is:",
      options: ["A. Greater than 7", "B. Less than 7", "C. Equal to 7", "D. Always 0"],
      answer: "B",
      explanation: "Acidic solutions have pH less than 7.",
      subtopic: "pH scale"
    },
    {
      question: "The pH of a basic solution is:",
      options: ["A. Greater than 7", "B. Less than 7", "C. Equal to 7", "D. Always 14"],
      answer: "A",
      explanation: "Basic (alkaline) solutions have pH greater than 7.",
      subtopic: "pH scale"
    },
    {
      question: "Which of the following indicators turns red in acidic solution?",
      options: ["A. Phenolphthalein", "B. Litmus", "C. Methyl orange", "D. Both B and C"],
      answer: "D",
      explanation: "Litmus and methyl orange both turn red in acidic solution.",
      subtopic: "Indicators"
    },
    {
      question: "Which of the following indicators turns pink in basic solution?",
      options: ["A. Litmus", "B. Phenolphthalein", "C. Methyl orange", "D. Thymol blue"],
      answer: "B",
      explanation: "Phenolphthalein is colourless in acid and pink in base.",
      subtopic: "Indicators"
    },
    {
      question: "Which of the following is a normal salt?",
      options: ["A. NaHCO3", "B. NaHSO4", "C. NaCl", "D. NaH2PO4"],
      answer: "C",
      explanation: "NaCl is a normal salt — all hydrogen ions of the acid are replaced by metal ions.",
      subtopic: "Salts"
    },
    {
      question: "Which of the following is an acidic salt?",
      options: ["A. NaCl", "B. Na2CO3", "C. NaHSO4", "D. KNO3"],
      answer: "C",
      explanation: "NaHSO4 is an acidic salt — it still contains replaceable hydrogen ions.",
      subtopic: "Salts"
    },
    {
      question: "Which of the following is a basic salt?",
      options: ["A. NaCl", "B. Na2CO3", "C. NaHSO4", "D. Mg(OH)Cl"],
      answer: "D",
      explanation: "Mg(OH)Cl is a basic salt — it still contains hydroxide ions.",
      subtopic: "Salts"
    },
    {
      question: "Which of the following is a double salt?",
      options: ["A. NaCl", "B. K2SO4·Al2(SO4)3·24H2O", "C. NaHSO4", "D. Na2CO3"],
      answer: "B",
      explanation: "K2SO4·Al2(SO4)3·24H2O is a double salt (potassium alum).",
      subtopic: "Salts"
    },
    {
      question: "Acid rain has a pH:",
      options: ["A. Below 5.6", "B. Above 7", "C. Equal to 7", "D. Between 7 and 8"],
      answer: "A",
      explanation: "Acid rain has pH below 5.6 due to dissolved CO2, SO2, and NO2.",
      subtopic: "pH applications"
    },
    {
      question: "The pH of a strong acid solution is:",
      options: ["A. Close to 0", "B. Close to 7", "C. Close to 14", "D. Always 1"],
      answer: "A",
      explanation: "Strong acids have pH close to 0.",
      subtopic: "pH scale"
    },
    {
      question: "The pH of a strong base solution is:",
      options: ["A. Close to 0", "B. Close to 7", "C. Close to 14", "D. Always 14"],
      answer: "C",
      explanation: "Strong bases have pH close to 14.",
      subtopic: "pH scale"
    },
    {
      question: "Which of the following is used to measure pH accurately?",
      options: ["A. Litmus paper", "B. pH meter", "C. Methyl orange", "D. Phenolphthalein"],
      answer: "B",
      explanation: "A pH meter gives accurate pH readings.",
      subtopic: "pH measurement"
    },
    {
      question: "Hydrolysis of a salt occurs when:",
      options: ["A. Salt reacts with water", "B. Salt reacts with acid", "C. Salt reacts with base", "D. Salt decomposes"],
      answer: "A",
      explanation: "Hydrolysis is the reaction of a salt with water to form an acid and a base.",
      subtopic: "Salt hydrolysis"
    },
    {
      question: "The aqueous solution of Na2CO3 is:",
      options: ["A. Acidic", "B. Basic", "C. Neutral", "D. Strongly acidic"],
      answer: "B",
      explanation: "Na2CO3 (sodium carbonate) is a salt of a strong base and weak acid, so its solution is basic.",
      subtopic: "Salt hydrolysis"
    },
    {
      question: "The aqueous solution of NH4Cl is:",
      options: ["A. Acidic", "B. Basic", "C. Neutral", "D. Strongly basic"],
      answer: "A",
      explanation: "NH4Cl (ammonium chloride) is a salt of a weak base and strong acid, so its solution is acidic.",
      subtopic: "Salt hydrolysis"
    },
    {
      question: "The aqueous solution of NaCl is:",
      options: ["A. Acidic", "B. Basic", "C. Neutral", "D. Strongly acidic"],
      answer: "C",
      explanation: "NaCl is a salt of a strong acid and strong base, so its solution is neutral.",
      subtopic: "Salt hydrolysis"
    },
    {
      question: "Efflorescent substances are those that:",
      options: ["A. Absorb moisture from air", "B. Lose water of crystallization to air", "C. Dissolve in air", "D. React with air"],
      answer: "B",
      explanation: "Efflorescent substances lose their water of crystallization to the atmosphere.",
      subtopic: "Efflorescence"
    },
    {
      question: "An example of an efflorescent substance is:",
      options: ["A. NaOH", "B. Na2CO3·10H2O", "C. CaCl2", "D. H2SO4"],
      answer: "B",
      explanation: "Washing soda (Na2CO3·10H2O) effloresces and loses water.",
      subtopic: "Efflorescence"
    },
    {
      question: "Hygroscopic substances are those that:",
      options: ["A. Lose water to air", "B. Absorb moisture from air but do not dissolve", "C. Dissolve in air", "D. React with air"],
      answer: "B",
      explanation: "Hygroscopic substances absorb moisture from air but do not dissolve.",
      subtopic: "Hygroscopy"
    },
    {
      question: "An example of a hygroscopic substance is:",
      options: ["A. NaCl", "B. Na2CO3·10H2O", "C. CaCl2", "D. CuSO4·5H2O"],
      answer: "C",
      explanation: "Calcium chloride (CaCl2) is hygroscopic and used as a drying agent.",
      subtopic: "Hygroscopy"
    },
    {
      question: "Deliquescent substances are those that:",
      options: ["A. Lose water to air", "B. Absorb moisture and dissolve in it", "C. React with air", "D. Sublime in air"],
      answer: "B",
      explanation: "Deliquescent substances absorb so much moisture that they dissolve.",
      subtopic: "Deliquescence"
    },
    {
      question: "An example of a deliquescent substance is:",
      options: ["A. NaCl", "B. NaOH", "C. Na2CO3·10H2O", "D. CuSO4"],
      answer: "B",
      explanation: "NaOH (sodium hydroxide) is deliquescent and dissolves in absorbed moisture.",
      subtopic: "Deliquescence"
    },
    {
      question: "The endpoint in an acid-base titration is detected by:",
      options: ["A. pH meter", "B. Indicator colour change", "C. Temperature change", "D. Mass change"],
      answer: "B",
      explanation: "The endpoint is detected by a colour change of the indicator.",
      subtopic: "Titration"
    },
    {
      question: "The equivalence point in a titration is:",
      options: ["A. Before the endpoint", "B. After the endpoint", "C. Same as the endpoint", "D. Not related to the endpoint"],
      answer: "C",
      explanation: "The equivalence point is ideally the same as the endpoint in a titration.",
      subtopic: "Titration"
    },
    {
      question: "In a titration, the solution of known concentration is called the:",
      options: ["A. Analyte", "B. Titrant", "C. Indicator", "D. Standard"],
      answer: "B",
      explanation: "The titrant is the solution of known concentration added from the burette.",
      subtopic: "Titration"
    },
    {
      question: "In a titration, the solution of unknown concentration is called the:",
      options: ["A. Titrant", "B. Standard", "C. Analyte", "D. Indicator"],
      answer: "C",
      explanation: "The analyte is the solution of unknown concentration being titrated.",
      subtopic: "Titration"
    },
    {
      question: "The salt formed from a strong acid and weak base is:",
      options: ["A. Acidic", "B. Basic", "C. Neutral", "D. Amphoteric"],
      answer: "A",
      explanation: "Strong acid + weak base → acidic salt (e.g., NH4Cl).",
      subtopic: "Salt hydrolysis"
    },
    {
      question: "The salt formed from a weak acid and strong base is:",
      options: ["A. Acidic", "B. Basic", "C. Neutral", "D. Amphoteric"],
      answer: "B",
      explanation: "Weak acid + strong base → basic salt (e.g., Na2CO3).",
      subtopic: "Salt hydrolysis"
    },
    {
      question: "The salt formed from a strong acid and strong base is:",
      options: ["A. Acidic", "B. Basic", "C. Neutral", "D. Amphoteric"],
      answer: "C",
      explanation: "Strong acid + strong base → neutral salt (e.g., NaCl).",
      subtopic: "Salt hydrolysis"
    },
    {
      question: "Which of the following is NOT a property of acids?",
      options: ["A. Turns blue litmus red", "B. Has a sour taste", "C. Reacts with bases", "D. Has a bitter taste"],
      answer: "D",
      explanation: "A bitter taste is a property of bases, not acids.",
      subtopic: "Properties of acids"
    },
    {
      question: "Which of the following is NOT a property of bases?",
      options: ["A. Turns red litmus blue", "B. Has a bitter taste", "C. Reacts with acids", "D. Has a sour taste"],
      answer: "D",
      explanation: "A sour taste is a property of acids, not bases.",
      subtopic: "Properties of bases"
    },
    {
      question: "Which of the following acids is dibasic?",
      options: ["A. HCl", "B. HNO3", "C. H2SO4", "D. CH3COOH"],
      answer: "C",
      explanation: "H2SO4 is dibasic — it has two replaceable hydrogen ions.",
      subtopic: "Basicity of acids"
    },
    {
      question: "Which of the following acids is tribasic?",
      options: ["A. HCl", "B. H2SO4", "C. H3PO4", "D. HNO3"],
      answer: "C",
      explanation: "H3PO4 is tribasic — it has three replaceable hydrogen ions.",
      subtopic: "Basicity of acids"
    },
    {
      question: "Which of the following acids is monobasic?",
      options: ["A. H2SO4", "B. H3PO4", "C. HCl", "D. H2CO3"],
      answer: "C",
      explanation: "HCl is monobasic — it has one replaceable hydrogen ion.",
      subtopic: "Basicity of acids"
    },
    {
      question: "Which of the following is a strong electrolyte?",
      options: ["A. CH3COOH", "B. NH3", "C. NaCl", "D. H2O"],
      answer: "C",
      explanation: "NaCl is a strong electrolyte — it completely dissociates in water.",
      subtopic: "Electrolytes"
    },
    {
      question: "Which of the following is a weak electrolyte?",
      options: ["A. NaCl", "B. HCl", "C. NaOH", "D. CH3COOH"],
      answer: "D",
      explanation: "CH3COOH (ethanoic acid) is a weak electrolyte — it partially dissociates.",
      subtopic: "Electrolytes"
    },
    {
      question: "Which of the following is a non-electrolyte?",
      options: ["A. NaCl", "B. HCl", "C. Glucose", "D. H2SO4"],
      answer: "C",
      explanation: "Glucose is a non-electrolyte — it does not dissociate in water.",
      subtopic: "Electrolytes"
    },
    {
      question: "The acid in car batteries is:",
      options: ["A. Nitric acid", "B. Hydrochloric acid", "C. Sulfuric acid", "D. Phosphoric acid"],
      answer: "C",
      explanation: "Car batteries contain sulfuric acid (H2SO4).",
      subtopic: "Applications of acids"
    },
    {
      question: "The acid found in vinegar is:",
      options: ["A. Hydrochloric acid", "B. Sulfuric acid", "C. Ethanoic acid", "D. Citric acid"],
      answer: "C",
      explanation: "Vinegar contains ethanoic acid (CH3COOH).",
      subtopic: "Applications of acids"
    }
  ],
  kinetics: [
    {
      question: "The rate of a chemical reaction is defined as:",
      options: ["A. The time taken for the reaction to complete", "B. The change in concentration of reactants or products per unit time", "C. The energy required for the reaction", "D. The temperature at which the reaction occurs"],
      answer: "B",
      explanation: "Reaction rate is the change in concentration of reactants or products per unit time.",
      subtopic: "Rate of reaction"
    },
    {
      question: "Which factor does NOT affect the rate of a chemical reaction?",
      options: ["A. Temperature", "B. Concentration", "C. Colour of reactants", "D. Particle size"],
      answer: "C",
      explanation: "The colour of reactants does not affect reaction rate.",
      subtopic: "Factors affecting rate"
    },
    {
      question: "A catalyst increases reaction rate by:",
      options: ["A. Increasing activation energy", "B. Providing an alternative pathway with lower activation energy", "C. Increasing temperature", "D. Increasing concentration"],
      answer: "B",
      explanation: "Catalysts provide an alternative reaction pathway with a lower activation energy.",
      subtopic: "Catalysts"
    },
    {
      question: "Le Chatelier's principle states that if a system at equilibrium is disturbed:",
      options: ["A. The reaction stops", "B. The system shifts to oppose the change", "C. Temperature increases", "D. Concentration remains constant"],
      answer: "B",
      explanation: "Le Chatelier's principle: a system at equilibrium responds to a disturbance by shifting to oppose it.",
      subtopic: "Equilibrium"
    },
    {
      question: "Increasing pressure in a gaseous equilibrium favours:",
      options: ["A. The side with more moles of gas", "B. The side with fewer moles of gas", "C. Neither side", "D. The exothermic side"],
      answer: "B",
      explanation: "Increasing pressure shifts equilibrium to the side with fewer moles of gas.",
      subtopic: "Le Chatelier's principle"
    },
    {
      question: "The minimum energy required for a reaction to occur is called:",
      options: ["A. Enthalpy", "B. Bond energy", "C. Activation energy", "D. Kinetic energy"],
      answer: "C",
      explanation: "Activation energy is the minimum energy that colliding particles must have for a reaction to occur.",
      subtopic: "Activation energy"
    },
    {
      question: "Increasing the temperature of a reaction generally:",
      options: ["A. Decreases the rate", "B. Increases the rate", "C. Has no effect on the rate", "D. Stops the reaction"],
      answer: "B",
      explanation: "Increasing temperature increases particle kinetic energy and collision frequency, increasing rate.",
      subtopic: "Temperature"
    },
    {
      question: "Increasing the concentration of reactants generally:",
      options: ["A. Decreases the rate", "B. Increases the rate", "C. Has no effect on the rate", "D. Stops the reaction"],
      answer: "B",
      explanation: "Higher concentration means more particles per unit volume, increasing collision frequency and rate.",
      subtopic: "Concentration"
    },
    {
      question: "A catalyst remains unchanged at the end of a reaction because:",
      options: ["A. It is consumed", "B. It is regenerated", "C. It does not participate", "D. It evaporates"],
      answer: "B",
      explanation: "A catalyst is regenerated at the end of the reaction and remains chemically unchanged.",
      subtopic: "Catalysts"
    },
    {
      question: "The collision theory states that for a reaction to occur:",
      options: ["A. Particles must collide with sufficient energy and correct orientation", "B. Particles must be in the same state", "C. Particles must be heated", "D. Particles must be in solution"],
      answer: "A",
      explanation: "Collision theory: effective collisions require sufficient energy and correct orientation.",
      subtopic: "Collision theory"
    },
    {
      question: "An effective collision is one that:",
      options: ["A. Results in no reaction", "B. Results in a reaction", "C. Does not involve energy", "D. Occurs at low temperature"],
      answer: "B",
      explanation: "An effective collision results in a chemical reaction.",
      subtopic: "Collision theory"
    },
    {
      question: "An increase in surface area of a solid reactant:",
      options: ["A. Decreases the rate", "B. Increases the rate", "C. Has no effect", "D. Stops the reaction"],
      answer: "B",
      explanation: "Increasing surface area provides more sites for collisions, increasing rate.",
      subtopic: "Surface area"
    },
    {
      question: "Powdered calcium carbonate reacts faster with acid than lumps because:",
      options: ["A. Powder has more surface area", "B. Powder has higher temperature", "C. Powder has higher concentration", "D. Powder is more reactive"],
      answer: "A",
      explanation: "Powdered form has larger surface area for collisions, increasing reaction rate.",
      subtopic: "Surface area"
    },
    {
      question: "In a reversible reaction, equilibrium is reached when:",
      options: ["A. The forward reaction stops", "B. The backward reaction stops", "C. The rates of forward and backward reactions are equal", "D. All reactants are used up"],
      answer: "C",
      explanation: "At equilibrium, the forward and backward reaction rates are equal.",
      subtopic: "Equilibrium"
    },
    {
      question: "At equilibrium, the concentrations of reactants and products:",
      options: ["A. Are equal", "B. Are constant", "C. Are zero", "D. Continue to change"],
      answer: "B",
      explanation: "At equilibrium, concentrations are constant (not necessarily equal).",
      subtopic: "Equilibrium"
    },
    {
      question: "Which of the following is an example of a reversible reaction?",
      options: ["A. Burning of wood", "B. Rusting of iron", "C. N2 + 3H2 ⇌ 2NH3", "D. Neutralization of acid and base"],
      answer: "C",
      explanation: "The Haber process (N2 + 3H2 ⇌ 2NH3) is a reversible reaction.",
      subtopic: "Equilibrium"
    },
    {
      question: "Increasing temperature in an exothermic reaction at equilibrium:",
      options: ["A. Favours the forward reaction", "B. Favours the backward reaction", "C. Has no effect", "D. Stops the reaction"],
      answer: "B",
      explanation: "For exothermic reactions, increasing temperature shifts equilibrium to the backward (endothermic) side.",
      subtopic: "Le Chatelier's principle"
    },
    {
      question: "Decreasing temperature in an exothermic reaction at equilibrium:",
      options: ["A. Favours the forward reaction", "B. Favours the backward reaction", "C. Has no effect", "D. Stops the reaction"],
      answer: "A",
      explanation: "For exothermic reactions, decreasing temperature favours the forward (exothermic) direction.",
      subtopic: "Le Chatelier's principle"
    },
    {
      question: "Adding a catalyst to a reaction at equilibrium:",
      options: ["A. Shifts equilibrium to the right", "B. Shifts equilibrium to the left", "C. Has no effect on equilibrium position", "D. Stops the reaction"],
      answer: "C",
      explanation: "A catalyst speeds up both forward and backward reactions equally, so equilibrium position is unchanged.",
      subtopic: "Catalysts"
    },
    {
      question: "The equilibrium constant K is:",
      options: ["A. Constant at constant temperature", "B. Constant at constant pressure", "C. Constant at all temperatures", "D. Variable at constant temperature"],
      answer: "A",
      explanation: "K is constant at constant temperature.",
      subtopic: "Equilibrium constant"
    },
    {
      question: "The rate of a reaction is measured by:",
      options: ["A. Monitoring colour change", "B. Monitoring mass change", "C. Monitoring volume of gas produced", "D. All of the above"],
      answer: "D",
      explanation: "Rate can be measured by colour, mass, volume of gas, pH, or temperature changes.",
      subtopic: "Rate of reaction"
    },
    {
      question: "Which of the following is NOT a way to measure reaction rate?",
      options: ["A. Change in colour", "B. Change in mass", "C. Change in pH", "D. Change in atomic number"],
      answer: "D",
      explanation: "Atomic number does not change during a reaction.",
      subtopic: "Rate of reaction"
    },
    {
      question: "A reaction with a high activation energy will be:",
      options: ["A. Fast", "B. Slow", "C. Unaffected by temperature", "D. Catalysed easily"],
      answer: "B",
      explanation: "High activation energy means few particles have sufficient energy, so reaction is slow.",
      subtopic: "Activation energy"
    },
    {
      question: "A reaction with a low activation energy will be:",
      options: ["A. Fast", "B. Slow", "C. Unaffected by temperature", "D. Always spontaneous"],
      answer: "A",
      explanation: "Low activation energy means many particles have sufficient energy, so reaction is fast.",
      subtopic: "Activation energy"
    },
    {
      question: "The rate of reaction increases with temperature because:",
      options: ["A. More particles have energy greater than activation energy", "B. Activation energy decreases", "C. Concentration increases", "D. Surface area increases"],
      answer: "A",
      explanation: "Higher temperature means more particles have energy greater than the activation energy.",
      subtopic: "Temperature"
    },
    {
      question: "What effect does a catalyst have on the equilibrium constant?",
      options: ["A. Increases K", "B. Decreases K", "C. No effect on K", "D. K becomes zero"],
      answer: "C",
      explanation: "A catalyst has no effect on the equilibrium constant K.",
      subtopic: "Catalysts"
    },
    {
      question: "In the Haber process, high pressure favours:",
      options: ["A. The forward reaction (NH3 production)", "B. The backward reaction", "C. Neither reaction", "D. The decomposition of NH3"],
      answer: "A",
      explanation: "N2 + 3H2 ⇌ 2NH3 has 4 moles of gas on left and 2 on right, so high pressure favours forward reaction.",
      subtopic: "Le Chatelier's principle"
    },
    {
      question: "In the Haber process, low temperature favours:",
      options: ["A. The forward reaction (NH3 production)", "B. The backward reaction", "C. Neither reaction", "D. The decomposition of NH3"],
      answer: "A",
      explanation: "The forward reaction is exothermic, so low temperature favours it.",
      subtopic: "Le Chatelier's principle"
    },
    {
      question: "Why is a moderate temperature used in the Haber process instead of low temperature?",
      options: ["A. Low temperature gives low rate", "B. Low temperature favours the backward reaction", "C. Low temperature uses more energy", "D. Low temperature damages the catalyst"],
      answer: "A",
      explanation: "Low temperature gives a higher yield but the rate is too slow, so moderate temperature is used.",
      subtopic: "Haber process"
    },
    {
      question: "The rate of reaction between a solid and a liquid can be increased by:",
      options: ["A. Using a larger solid piece", "B. Stirring the mixture", "C. Decreasing temperature", "D. Adding more solvent"],
      answer: "B",
      explanation: "Stirring brings fresh reactants together, increasing collision frequency.",
      subtopic: "Factors affecting rate"
    },
    {
      question: "A reaction that is zero order with respect to a reactant:",
      options: ["A. Rate depends on concentration", "B. Rate is independent of concentration", "C. Rate is inversely proportional to concentration", "D. Rate is proportional to square of concentration"],
      answer: "B",
      explanation: "Zero order: rate is independent of the concentration of that reactant.",
      subtopic: "Reaction order"
    },
    {
      question: "A reaction that is first order with respect to a reactant:",
      options: ["A. Rate is independent of concentration", "B. Rate is directly proportional to concentration", "C. Rate is inversely proportional to concentration", "D. Rate is proportional to square of concentration"],
      answer: "B",
      explanation: "First order: rate is directly proportional to concentration.",
      subtopic: "Reaction order"
    },
    {
      question: "A reaction that is second order with respect to a reactant:",
      options: ["A. Rate is independent of concentration", "B. Rate is directly proportional to concentration", "C. Rate is proportional to square of concentration", "D. Rate is inversely proportional to concentration"],
      answer: "C",
      explanation: "Second order: rate is proportional to the square of concentration.",
      subtopic: "Reaction order"
    },
    {
      question: "The rate constant k:",
      options: ["A. Is constant at all temperatures", "B. Increases with temperature", "C. Decreases with temperature", "D. Is independent of temperature"],
      answer: "B",
      explanation: "The rate constant k increases with increasing temperature.",
      subtopic: "Rate constant"
    },
    {
      question: "The Arrhenius equation relates rate constant to:",
      options: ["A. Concentration and temperature", "B. Temperature and activation energy", "C. Surface area and concentration", "D. Pressure and volume"],
      answer: "B",
      explanation: "The Arrhenius equation: k = A·e^(-Ea/RT) relates rate constant to temperature and activation energy.",
      subtopic: "Arrhenius equation"
    },
    {
      question: "Adding an inert gas at constant volume to a reaction at equilibrium:",
      options: ["A. Shifts equilibrium", "B. Has no effect on equilibrium", "C. Increases pressure and shifts equilibrium", "D. Decreases pressure"],
      answer: "B",
      explanation: "Adding an inert gas at constant volume does not change concentrations, so no effect on equilibrium.",
      subtopic: "Le Chatelier's principle"
    },
    {
      question: "The half-life of a first-order reaction is:",
      options: ["A. Independent of initial concentration", "B. Dependent on initial concentration", "C. Dependent on temperature only", "D. Constant at all temperatures"],
      answer: "A",
      explanation: "For first-order reactions, half-life is independent of initial concentration.",
      subtopic: "Half-life"
    },
    {
      question: "A homogeneous catalyst is one that:",
      options: ["A. Is in the same phase as the reactants", "B. Is in a different phase from the reactants", "C. Is a solid catalyst", "D. Is always a gas"],
      answer: "A",
      explanation: "A homogeneous catalyst is in the same phase as the reactants.",
      subtopic: "Catalysts"
    },
    {
      question: "A heterogeneous catalyst is one that:",
      options: ["A. Is in the same phase as the reactants", "B. Is in a different phase from the reactants", "C. Is always a liquid", "D. Is always a gas"],
      answer: "B",
      explanation: "A heterogeneous catalyst is in a different phase from the reactants.",
      subtopic: "Catalysts"
    },
    {
      question: "Which of the following is an example of a heterogeneous catalyst?",
      options: ["A. Iron in the Haber process", "B. H+ ions in ester hydrolysis", "C. Iodine in the decomposition of H2O2", "D. NO in the oxidation of SO2"],
      answer: "A",
      explanation: "Iron (solid) in the Haber process is a heterogeneous catalyst.",
      subtopic: "Catalysts"
    },
    {
      question: "Enzymes are biological catalysts that:",
      options: ["A. Are always inorganic", "B. Are very specific in their action", "C. Work at high temperatures", "D. Are always in gas phase"],
      answer: "B",
      explanation: "Enzymes are very specific — each enzyme catalyses only one type of reaction.",
      subtopic: "Catalysts"
    },
    {
      question: "The rate of a reaction can be determined from a graph by:",
      options: ["A. The slope of the curve", "B. The area under the curve", "C. The intercept of the curve", "D. The length of the curve"],
      answer: "A",
      explanation: "Reaction rate is the slope (gradient) of a concentration-time graph.",
      subtopic: "Rate graphs"
    },
    {
      question: "A reaction with a large equilibrium constant (K > 1) favours:",
      options: ["A. Reactants", "B. Products", "C. Neither", "D. Both equally"],
      answer: "B",
      explanation: "When K > 1, products are favoured at equilibrium.",
      subtopic: "Equilibrium constant"
    },
    {
      question: "A reaction with a small equilibrium constant (K < 1) favours:",
      options: ["A. Reactants", "B. Products", "C. Neither", "D. Both equally"],
      answer: "A",
      explanation: "When K < 1, reactants are favoured at equilibrium.",
      subtopic: "Equilibrium constant"
    },
    {
      question: "A reaction where the forward and backward rates are equal is in:",
      options: ["A. Dynamic equilibrium", "B. Static equilibrium", "C. Irreversible reaction", "D. Pre-equilibrium"],
      answer: "A",
      explanation: "Dynamic equilibrium means forward and backward reactions continue at equal rates.",
      subtopic: "Equilibrium"
    },
    {
      question: "The rate of a reaction in a closed container:",
      options: ["A. Decreases with time as reactants are used up", "B. Increases with time", "C. Remains constant", "D. Is always zero"],
      answer: "A",
      explanation: "As reactants are consumed, the rate decreases with time.",
      subtopic: "Rate of reaction"
    },
    {
      question: "Which of the following is NOT a factor that affects the rate of a reaction?",
      options: ["A. Concentration of reactants", "B. Temperature", "C. Colour of reactants", "D. Particle size"],
      answer: "C",
      explanation: "The colour of reactants does not affect reaction rate.",
      subtopic: "Factors affecting rate"
    },
    {
      question: "A substance that increases the rate of a reaction without being consumed is a:",
      options: ["A. Reactant", "B. Product", "C. Catalyst", "D. Inhibitor"],
      answer: "C",
      explanation: "A catalyst increases reaction rate and is regenerated.",
      subtopic: "Catalysts"
    },
    {
      question: "A substance that decreases the rate of a reaction is a:",
      options: ["A. Catalyst", "B. Promoter", "C. Inhibitor", "D. Activator"],
      answer: "C",
      explanation: "An inhibitor slows down or prevents a reaction.",
      subtopic: "Inhibitors"
    },
    {
      question: "In an exothermic reaction, the heat of reaction is:",
      options: ["A. Positive", "B. Negative", "C. Zero", "D. Always 100 kJ"],
      answer: "B",
      explanation: "Exothermic reactions release heat, so ΔH is negative.",
      subtopic: "Exothermic"
    },
    {
      question: "In an endothermic reaction, the heat of reaction is:",
      options: ["A. Positive", "B. Negative", "C. Zero", "D. Always 100 kJ"],
      answer: "A",
      explanation: "Endothermic reactions absorb heat, so ΔH is positive.",
      subtopic: "Endothermic"
    },
    {
      question: "Which of the following would increase the rate of a reaction between a solid and a liquid?",
      options: ["A. Using larger solid pieces", "B. Using a solid powder", "C. Decreasing the temperature", "D. Adding more water"],
      answer: "B",
      explanation: "A powder has a larger surface area, increasing the rate of reaction.",
      subtopic: "Surface area"
    }
  ],
  redox: [
    {
      question: "Oxidation is defined as:",
      options: ["A. Gain of electrons", "B. Loss of electrons", "C. Gain of protons", "D. Loss of protons"],
      answer: "B",
      explanation: "Oxidation is the loss of electrons (OIL — Oxidation Is Loss).",
      subtopic: "Oxidation and reduction"
    },
    {
      question: "Reduction is defined as:",
      options: ["A. Gain of electrons", "B. Loss of electrons", "C. Gain of protons", "D. Loss of protons"],
      answer: "A",
      explanation: "Reduction is the gain of electrons (RIG — Reduction Is Gain).",
      subtopic: "Oxidation and reduction"
    },
    {
      question: "What is the oxidation number of sulphur in H2SO4?",
      options: ["A. +2", "B. +4", "C. +6", "D. -2"],
      answer: "C",
      explanation: "In H2SO4: H is +1 (×2 = +2), O is -2 (×4 = -8). So S = +6.",
      subtopic: "Oxidation numbers"
    },
    {
      question: "In electrolysis, oxidation occurs at the:",
      options: ["A. Cathode", "B. Anode", "C. Electrolyte", "D. Power source"],
      answer: "B",
      explanation: "Oxidation (loss of electrons) occurs at the anode. Reduction occurs at the cathode.",
      subtopic: "Electrolysis"
    },
    {
      question: "Faraday's first law states that the mass of substance deposited is:",
      options: ["A. Inversely proportional to current", "B. Proportional to time only", "C. Proportional to quantity of charge", "D. Independent of charge"],
      answer: "C",
      explanation: "The mass deposited is directly proportional to the quantity of electricity (charge = current × time).",
      subtopic: "Faraday's laws"
    },
    {
      question: "Which of the following is an oxidizing agent?",
      options: ["A. H2", "B. CO", "C. KMnO4", "D. Na"],
      answer: "C",
      explanation: "KMnO4 (potassium permanganate) is a strong oxidizing agent.",
      subtopic: "Oxidizing agents"
    },
    {
      question: "Which of the following is a reducing agent?",
      options: ["A. KMnO4", "B. K2Cr2O7", "C. H2", "D. Cl2"],
      answer: "C",
      explanation: "H2 (hydrogen) is a reducing agent — it loses electrons to reduce others.",
      subtopic: "Reducing agents"
    },
    {
      question: "The oxidation number of an uncombined element is:",
      options: ["A. 0", "B. +1", "C. -1", "D. +2"],
      answer: "A",
      explanation: "The oxidation number of an uncombined element is zero.",
      subtopic: "Oxidation numbers"
    },
    {
      question: "The oxidation number of hydrogen in most compounds is:",
      options: ["A. +1", "B. -1", "C. 0", "D. +2"],
      answer: "A",
      explanation: "Hydrogen has oxidation number +1 in most compounds (except hydrides, where it is -1).",
      subtopic: "Oxidation numbers"
    },
    {
      question: "The oxidation number of oxygen in most compounds is:",
      options: ["A. +1", "B. -1", "C. -2", "D. 0"],
      answer: "C",
      explanation: "Oxygen has oxidation number -2 in most compounds (except peroxides where it is -1).",
      subtopic: "Oxidation numbers"
    },
    {
      question: "The oxidation number of a monatomic ion is:",
      options: ["A. 0", "B. Equal to its charge", "C. Always +1", "D. Always -1"],
      answer: "B",
      explanation: "The oxidation number of a monatomic ion is equal to its charge.",
      subtopic: "Oxidation numbers"
    },
    {
      question: "What is the oxidation number of manganese in KMnO4?",
      options: ["A. +2", "B. +4", "C. +6", "D. +7"],
      answer: "D",
      explanation: "In KMnO4: K is +1, O is -2 (×4 = -8). So Mn = +7.",
      subtopic: "Oxidation numbers"
    },
    {
      question: "What is the oxidation number of chromium in K2Cr2O7?",
      options: ["A. +2", "B. +3", "C. +6", "D. +7"],
      answer: "C",
      explanation: "In K2Cr2O7: K is +1 (×2 = +2), O is -2 (×7 = -14). So 2Cr = +12, Cr = +6.",
      subtopic: "Oxidation numbers"
    },
    {
      question: "What is the oxidation number of nitrogen in HNO3?",
      options: ["A. +3", "B. +5", "C. -3", "D. +2"],
      answer: "B",
      explanation: "In HNO3: H is +1, O is -2 (×3 = -6). So N = +5.",
      subtopic: "Oxidation numbers"
    },
    {
      question: "What is the oxidation number of chlorine in HClO4?",
      options: ["A. +3", "B. +5", "C. +7", "D. -1"],
      answer: "C",
      explanation: "In HClO4: H is +1, O is -2 (×4 = -8). So Cl = +7.",
      subtopic: "Oxidation numbers"
    },
    {
      question: "In the reaction 2Mg + O2 → 2MgO, magnesium is:",
      options: ["A. Oxidized", "B. Reduced", "C. Neither", "D. Both oxidized and reduced"],
      answer: "A",
      explanation: "Mg loses electrons (0 to +2), so it is oxidized.",
      subtopic: "Redox reactions"
    },
    {
      question: "In the reaction 2Mg + O2 → 2MgO, oxygen is:",
      options: ["A. Oxidized", "B. Reduced", "C. Neither", "D. Both oxidized and reduced"],
      answer: "B",
      explanation: "Oxygen gains electrons (0 to -2), so it is reduced.",
      subtopic: "Redox reactions"
    },
    {
      question: "In the reaction Zn + CuSO4 → ZnSO4 + Cu, which is oxidized?",
      options: ["A. Zn", "B. Cu", "C. S", "D. O"],
      answer: "A",
      explanation: "Zn loses electrons (0 to +2), so it is oxidized.",
      subtopic: "Redox reactions"
    },
    {
      question: "In the reaction Zn + CuSO4 → ZnSO4 + Cu, which is reduced?",
      options: ["A. Zn", "B. Cu", "C. S", "D. O"],
      answer: "B",
      explanation: "Cu gains electrons (+2 to 0), so it is reduced.",
      subtopic: "Redox reactions"
    },
    {
      question: "The standard hydrogen electrode has a potential of:",
      options: ["A. 0.00 V", "B. 1.00 V", "C. -1.00 V", "D. 0.76 V"],
      answer: "A",
      explanation: "The standard hydrogen electrode (SHE) has a potential of 0.00 V.",
      subtopic: "Electrode potentials"
    },
    {
      question: "A galvanic cell converts:",
      options: ["A. Electrical energy to chemical energy", "B. Chemical energy to electrical energy", "C. Heat energy to chemical energy", "D. Light energy to chemical energy"],
      answer: "B",
      explanation: "A galvanic (voltaic) cell converts chemical energy into electrical energy.",
      subtopic: "Electrochemical cells"
    },
    {
      question: "An electrolytic cell converts:",
      options: ["A. Electrical energy to chemical energy", "B. Chemical energy to electrical energy", "C. Heat energy to chemical energy", "D. Light energy to chemical energy"],
      answer: "A",
      explanation: "An electrolytic cell converts electrical energy into chemical energy.",
      subtopic: "Electrolysis"
    },
    {
      question: "The anode in a galvanic cell is:",
      options: ["A. Positive", "B. Negative", "C. Neutral", "D. Sometimes positive, sometimes negative"],
      answer: "B",
      explanation: "In a galvanic cell, the anode is the negative electrode.",
      subtopic: "Electrochemical cells"
    },
    {
      question: "The cathode in a galvanic cell is:",
      options: ["A. Positive", "B. Negative", "C. Neutral", "D. Sometimes positive, sometimes negative"],
      answer: "A",
      explanation: "In a galvanic cell, the cathode is the positive electrode.",
      subtopic: "Electrochemical cells"
    },
    {
      question: "The anode in an electrolytic cell is:",
      options: ["A. Positive", "B. Negative", "C. Neutral", "D. Sometimes positive, sometimes negative"],
      answer: "A",
      explanation: "In an electrolytic cell, the anode is the positive electrode.",
      subtopic: "Electrolysis"
    },
    {
      question: "The cathode in an electrolytic cell is:",
      options: ["A. Positive", "B. Negative", "C. Neutral", "D. Sometimes positive, sometimes negative"],
      answer: "B",
      explanation: "In an electrolytic cell, the cathode is the negative electrode.",
      subtopic: "Electrolysis"
    },
    {
      question: "In electrolysis, cations move towards the:",
      options: ["A. Anode", "B. Cathode", "C. Both electrodes", "D. Neither electrode"],
      answer: "B",
      explanation: "Cations (positive ions) move towards the cathode (negative electrode).",
      subtopic: "Electrolysis"
    },
    {
      question: "In electrolysis, anions move towards the:",
      options: ["A. Anode", "B. Cathode", "C. Both electrodes", "D. Neither electrode"],
      answer: "A",
      explanation: "Anions (negative ions) move towards the anode (positive electrode).",
      subtopic: "Electrolysis"
    },
    {
      question: "The product at the anode during electrolysis is formed by:",
      options: ["A. Oxidation", "B. Reduction", "C. Neutralization", "D. Hydrolysis"],
      answer: "A",
      explanation: "At the anode, oxidation occurs (loss of electrons).",
      subtopic: "Electrolysis"
    },
    {
      question: "The product at the cathode during electrolysis is formed by:",
      options: ["A. Oxidation", "B. Reduction", "C. Neutralization", "D. Hydrolysis"],
      answer: "B",
      explanation: "At the cathode, reduction occurs (gain of electrons).",
      subtopic: "Electrolysis"
    },
    {
      question: "Faraday's second law states that:",
      options: ["A. The mass deposited is proportional to current", "B. The mass deposited is proportional to charge", "C. The mass of different substances deposited by the same charge is proportional to their equivalent weights", "D. The charge is proportional to time"],
      answer: "C",
      explanation: "Faraday's second law: masses of different substances deposited by the same charge are proportional to equivalent weights.",
      subtopic: "Faraday's laws"
    },
    {
      question: "1 Faraday is equal to:",
      options: ["A. 96,500 C", "B. 9,650 C", "C. 965,000 C", "D. 965 C"],
      answer: "A",
      explanation: "1 Faraday = 96,500 C (the charge on 1 mole of electrons).",
      subtopic: "Faraday's laws"
    },
    {
      question: "The charge on 1 mole of electrons is:",
      options: ["A. 96,500 C", "B. 1.602 × 10⁻¹⁹ C", "C. 6.02 × 10²³ C", "D. 9.65 × 10⁴ C"],
      answer: "A",
      explanation: "1 mole of electrons has a charge of 96,500 C (1 Faraday).",
      subtopic: "Faraday's laws"
    },
    {
      question: "In the electrolysis of molten NaCl, the product at the cathode is:",
      options: ["A. Na", "B. Cl2", "C. NaOH", "D. HCl"],
      answer: "A",
      explanation: "Na⁺ ions are reduced at the cathode to form sodium metal.",
      subtopic: "Electrolysis"
    },
    {
      question: "In the electrolysis of molten NaCl, the product at the anode is:",
      options: ["A. Na", "B. Cl2", "C. NaOH", "D. HCl"],
      answer: "B",
      explanation: "Cl⁻ ions are oxidized at the anode to form chlorine gas.",
      subtopic: "Electrolysis"
    },
    {
      question: "Electroplating is a process that uses:",
      options: ["A. Electrolysis", "B. Galvanic cells", "C. Oxidation only", "D. Reduction only"],
      answer: "A",
      explanation: "Electroplating uses electrolysis to deposit a metal coating.",
      subtopic: "Electroplating"
    },
    {
      question: "Rusting of iron is an example of:",
      options: ["A. Oxidation", "B. Reduction", "C. Neutralization", "D. Hydrolysis"],
      answer: "A",
      explanation: "Rusting is the oxidation of iron (Fe → Fe²⁺ + 2e⁻).",
      subtopic: "Corrosion"
    },
    {
      question: "Rusting of iron requires:",
      options: ["A. Oxygen only", "B. Water only", "C. Both oxygen and water", "D. Carbon dioxide"],
      answer: "C",
      explanation: "Both oxygen and water are required for iron to rust.",
      subtopic: "Corrosion"
    },
    {
      question: "Which of the following is a method of preventing rusting?",
      options: ["A. Painting", "B. Oiling", "C. Galvanizing", "D. All of the above"],
      answer: "D",
      explanation: "Painting, oiling, and galvanizing all prevent rusting.",
      subtopic: "Corrosion"
    },
    {
      question: "Galvanizing is the process of coating iron with:",
      options: ["A. Copper", "B. Tin", "C. Zinc", "D. Chromium"],
      answer: "C",
      explanation: "Galvanizing coats iron with zinc to prevent rusting.",
      subtopic: "Corrosion"
    },
    {
      question: "In the rusting of iron, which acts as the anode?",
      options: ["A. Iron", "B. Oxygen", "C. Water", "D. Carbon"],
      answer: "A",
      explanation: "Iron acts as the anode and is oxidized (Fe → Fe²⁺ + 2e⁻).",
      subtopic: "Corrosion"
    },
    {
      question: "Which of the following metals can be extracted by electrolysis?",
      options: ["A. Iron", "B. Aluminium", "C. Copper", "D. Zinc"],
      answer: "B",
      explanation: "Aluminium is extracted by electrolysis (Hall-Héroult process).",
      subtopic: "Electrolysis"
    },
    {
      question: "The EMF of a cell is measured in:",
      options: ["A. Amperes", "B. Volts", "C. Coulombs", "D. Joules"],
      answer: "B",
      explanation: "EMF (electromotive force) is measured in volts.",
      subtopic: "Electrochemical cells"
    },
    {
      question: "In a redox reaction, the substance that loses electrons is the:",
      options: ["A. Oxidizing agent", "B. Reducing agent", "C. Catalyst", "D. Inhibitor"],
      answer: "B",
      explanation: "A reducing agent loses electrons (is oxidized).",
      subtopic: "Redox reactions"
    },
    {
      question: "In a redox reaction, the substance that gains electrons is the:",
      options: ["A. Oxidizing agent", "B. Reducing agent", "C. Catalyst", "D. Inhibitor"],
      answer: "A",
      explanation: "An oxidizing agent gains electrons (is reduced).",
      subtopic: "Redox reactions"
    },
    {
      question: "Which of the following is a stronger oxidizing agent than Cl2?",
      options: ["A. Br2", "B. I2", "C. F2", "D. S"],
      answer: "C",
      explanation: "F2 is the strongest oxidizing agent among the halogens.",
      subtopic: "Oxidizing agents"
    },
    {
      question: "Which of the following is a stronger reducing agent than Na?",
      options: ["A. Li", "B. K", "C. Mg", "D. Ca"],
      answer: "B",
      explanation: "K (potassium) is a stronger reducing agent than Na.",
      subtopic: "Reducing agents"
    },
    {
      question: "The oxidation number of an element in a compound is:",
      options: ["A. Always positive", "B. Always negative", "C. The charge it would have if all bonds were ionic", "D. Always zero"],
      answer: "C",
      explanation: "Oxidation number is the charge an atom would have if all bonds were ionic.",
      subtopic: "Oxidation numbers"
    },
    {
      question: "Which of the following is an example of a redox reaction?",
      options: ["A. NaCl + AgNO3 → AgCl + NaNO3", "B. 2Na + Cl2 → 2NaCl", "C. NaOH + HCl → NaCl + H2O", "D. CaCO3 → CaO + CO2"],
      answer: "B",
      explanation: "2Na + Cl2 → 2NaCl is a redox reaction (Na oxidized, Cl reduced).",
      subtopic: "Redox reactions"
    },
    {
      question: "Which of the following is NOT a redox reaction?",
      options: ["A. 2Na + Cl2 → 2NaCl", "B. Zn + CuSO4 → ZnSO4 + Cu", "C. NaOH + HCl → NaCl + H2O", "D. 2Mg + O2 → 2MgO"],
      answer: "C",
      explanation: "NaOH + HCl → NaCl + H2O is a neutralization reaction, not redox.",
      subtopic: "Redox reactions"
    },
    {
      question: "Disproportionation is a reaction in which:",
      options: ["A. One element is both oxidized and reduced", "B. Two elements are oxidized", "C. Two elements are reduced", "D. No oxidation or reduction occurs"],
      answer: "A",
      explanation: "Disproportionation is a redox reaction where one element is both oxidized and reduced.",
      subtopic: "Redox reactions"
    },
    {
      question: "An example of disproportionation is:",
      options: ["A. 2H2O2 → 2H2O + O2", "B. 2Na + Cl2 → 2NaCl", "C. Zn + CuSO4 → ZnSO4 + Cu", "D. NaOH + HCl → NaCl + H2O"],
      answer: "A",
      explanation: "In 2H2O2 → 2H2O + O2, oxygen is both oxidized (-1 to 0) and reduced (-1 to -2).",
      subtopic: "Redox reactions"
    }
  ],
  organic: [
    {
      question: "What is the general formula of alkanes?",
      options: ["A. CnH2n", "B. CnH2n+2", "C. CnH2n-2", "D. CnHn"],
      answer: "B",
      explanation: "Alkanes (saturated hydrocarbons) have the general formula CnH2n+2.",
      subtopic: "Alkanes"
    },
    {
      question: "Which functional group is present in alkanols?",
      options: ["A. -COOH", "B. -CHO", "C. -OH", "D. -NH2"],
      answer: "C",
      explanation: "Alkanols (alcohols) contain the hydroxyl group (-OH) as their functional group.",
      subtopic: "Functional groups"
    },
    {
      question: "The IUPAC name of CH3CH2OH is:",
      options: ["A. Methanol", "B. Ethanol", "C. Propanol", "D. Butanol"],
      answer: "B",
      explanation: "CH3CH2OH has 2 carbon atoms with an OH group — this is ethanol.",
      subtopic: "IUPAC naming"
    },
    {
      question: "Which reaction do alkenes undergo with bromine water?",
      options: ["A. Substitution", "B. Elimination", "C. Addition", "D. Combustion"],
      answer: "C",
      explanation: "Alkenes decolorize bromine water through addition reactions across the C=C double bond.",
      subtopic: "Alkenes"
    },
    {
      question: "Isomers are compounds that have:",
      options: ["A. Same molecular formula but different structural formulae", "B. Different molecular formulae", "C. Same structural formula", "D. Same physical properties"],
      answer: "A",
      explanation: "Isomers have the same molecular formula but different structural arrangements.",
      subtopic: "Isomerism"
    },
    {
      question: "What is the general formula of alkenes?",
      options: ["A. CnH2n", "B. CnH2n+2", "C. CnH2n-2", "D. CnHn"],
      answer: "A",
      explanation: "Alkenes have the general formula CnH2n (one double bond).",
      subtopic: "Alkenes"
    },
    {
      question: "What is the general formula of alkynes?",
      options: ["A. CnH2n", "B. CnH2n+2", "C. CnH2n-2", "D. CnHn"],
      answer: "C",
      explanation: "Alkynes have the general formula CnH2n-2 (one triple bond).",
      subtopic: "Alkynes"
    },
    {
      question: "The functional group of alkanoic acids is:",
      options: ["A. -OH", "B. -CHO", "C. -COOH", "D. -COO-"],
      answer: "C",
      explanation: "Alkanoic acids (carboxylic acids) contain the -COOH (carboxyl) group.",
      subtopic: "Functional groups"
    },
    {
      question: "The functional group of aldehydes is:",
      options: ["A. -OH", "B. -CHO", "C. -COOH", "D. -CO-"],
      answer: "B",
      explanation: "Aldehydes contain the -CHO (formyl) group.",
      subtopic: "Functional groups"
    },
    {
      question: "The functional group of ketones is:",
      options: ["A. -OH", "B. -CHO", "C. -COOH", "D. -CO-"],
      answer: "D",
      explanation: "Ketones contain the -CO- (carbonyl) group.",
      subtopic: "Functional groups"
    },
    {
      question: "The functional group of esters is:",
      options: ["A. -OH", "B. -CHO", "C. -COOH", "D. -COO-"],
      answer: "D",
      explanation: "Esters contain the -COO- (ester) group.",
      subtopic: "Functional groups"
    },
    {
      question: "The functional group of amines is:",
      options: ["A. -OH", "B. -NH2", "C. -COOH", "D. -COO-"],
      answer: "B",
      explanation: "Amines contain the -NH2 (amino) group.",
      subtopic: "Functional groups"
    },
    {
      question: "The IUPAC name of CH3COOH is:",
      options: ["A. Methanoic acid", "B. Ethanoic acid", "C. Propanoic acid", "D. Butanoic acid"],
      answer: "B",
      explanation: "CH3COOH has 2 carbon atoms — ethanoic acid.",
      subtopic: "IUPAC naming"
    },
    {
      question: "The IUPAC name of HCOOH is:",
      options: ["A. Methanoic acid", "B. Ethanoic acid", "C. Propanoic acid", "D. Butanoic acid"],
      answer: "A",
      explanation: "HCOOH has 1 carbon atom — methanoic acid.",
      subtopic: "IUPAC naming"
    },
    {
      question: "The IUPAC name of CH3COOCH3 is:",
      options: ["A. Ethyl ethanoate", "B. Methyl ethanoate", "C. Ethyl methanoate", "D. Methyl methanoate"],
      answer: "B",
      explanation: "CH3COOCH3 is methyl ethanoate (methyl + ethanoate).",
      subtopic: "IUPAC naming"
    },
    {
      question: "The IUPAC name of CH3CH2CH2OH is:",
      options: ["A. Propan-1-ol", "B. Propan-2-ol", "C. Butan-1-ol", "D. Pentan-1-ol"],
      answer: "A",
      explanation: "CH3CH2CH2OH has 3 carbon atoms with OH on carbon 1 — propan-1-ol.",
      subtopic: "IUPAC naming"
    },
    {
      question: "The IUPAC name of CH3CH(OH)CH3 is:",
      options: ["A. Propan-1-ol", "B. Propan-2-ol", "C. Butan-2-ol", "D. Propan-3-ol"],
      answer: "B",
      explanation: "CH3CH(OH)CH3 has 3 carbon atoms with OH on carbon 2 — propan-2-ol.",
      subtopic: "IUPAC naming"
    },
    {
      question: "Alkanes are generally:",
      options: ["A. Reactive", "B. Unreactive (inert)", "C. Reactive with water", "D. Reactive with acids"],
      answer: "B",
      explanation: "Alkanes are relatively unreactive due to strong C-C and C-H bonds.",
      subtopic: "Alkanes"
    },
    {
      question: "Alkanes undergo which type of reaction with halogens?",
      options: ["A. Addition", "B. Substitution", "C. Elimination", "D. Oxidation"],
      answer: "B",
      explanation: "Alkanes undergo substitution reactions with halogens (e.g., chlorination).",
      subtopic: "Alkanes"
    },
    {
      question: "Alkenes undergo which type of reaction with bromine?",
      options: ["A. Substitution", "B. Addition", "C. Elimination", "D. Reduction"],
      answer: "B",
      explanation: "Alkenes undergo addition reactions with bromine (decolorizes bromine water).",
      subtopic: "Alkenes"
    },
    {
      question: "The test for unsaturation (C=C) is:",
      options: ["A. Reaction with sodium", "B. Decolorization of bromine water", "C. Reaction with NaOH", "D. Reaction with ammonia"],
      answer: "B",
      explanation: "Alkenes decolorize bromine water, indicating unsaturation.",
      subtopic: "Alkenes"
    },
    {
      question: "Benzene has the molecular formula:",
      options: ["A. C6H6", "B. C6H12", "C. C6H10", "D. C6H14"],
      answer: "A",
      explanation: "Benzene has the molecular formula C6H6.",
      subtopic: "Benzene"
    },
    {
      question: "Benzene undergoes which type of reaction with halogens?",
      options: ["A. Addition", "B. Substitution", "C. Elimination", "D. Polymerization"],
      answer: "B",
      explanation: "Benzene undergoes substitution reactions (electrophilic aromatic substitution).",
      subtopic: "Benzene"
    },
    {
      question: "Which of the following is an aromatic hydrocarbon?",
      options: ["A. Hexane", "B. Benzene", "C. Ethene", "D. Ethyne"],
      answer: "B",
      explanation: "Benzene is an aromatic hydrocarbon.",
      subtopic: "Aromatic hydrocarbons"
    },
    {
      question: "Alkanols react with sodium metal to produce:",
      options: ["A. Salt and water", "B. Salt and hydrogen gas", "C. Salt and oxygen", "D. Salt and carbon dioxide"],
      answer: "B",
      explanation: "2R-OH + 2Na → 2R-ONa + H2 (salt + hydrogen gas).",
      subtopic: "Alkanols"
    },
    {
      question: "Esterification is the reaction between an alkanol and:",
      options: ["A. An alkanal", "B. An alkanone", "C. An alkanoic acid", "D. An alkane"],
      answer: "C",
      explanation: "Esterification is the reaction between an alkanol and an alkanoic acid.",
      subtopic: "Esterification"
    },
    {
      question: "The product of esterification is:",
      options: ["A. Salt and water", "B. Ester and water", "C. Ester and hydrogen", "D. Salt and hydrogen"],
      answer: "B",
      explanation: "Alkanol + alkanoic acid → ester + water.",
      subtopic: "Esterification"
    },
    {
      question: "The hydrolysis of an ester produces:",
      options: ["A. An alkanol and an alkanoic acid", "B. Two alkanols", "C. Two alkanoic acids", "D. Salt and water"],
      answer: "A",
      explanation: "Ester + water → alkanol + alkanoic acid (hydrolysis).",
      subtopic: "Esters"
    },
    {
      question: "The reaction of ethene with hydrogen is called:",
      options: ["A. Halogenation", "B. Hydrogenation", "C. Hydration", "D. Polymerization"],
      answer: "B",
      explanation: "Ethene + H2 → ethane (hydrogenation).",
      subtopic: "Alkenes"
    },
    {
      question: "The reaction of ethene with water is called:",
      options: ["A. Halogenation", "B. Hydrogenation", "C. Hydration", "D. Polymerization"],
      answer: "C",
      explanation: "Ethene + H2O → ethanol (hydration).",
      subtopic: "Alkenes"
    },
    {
      question: "The reaction of ethene with bromine is called:",
      options: ["A. Halogenation", "B. Hydrogenation", "C. Hydration", "D. Polymerization"],
      answer: "A",
      explanation: "Ethene + Br2 → 1,2-dibromoethane (halogenation).",
      subtopic: "Alkenes"
    },
    {
      question: "The polymer formed from ethene is:",
      options: ["A. Polystyrene", "B. PVC", "C. Polyethene", "D. Nylon"],
      answer: "C",
      explanation: "Ethene polymerizes to form polyethene (polyethylene).",
      subtopic: "Polymers"
    },
    {
      question: "The monomer of polyethene is:",
      options: ["A. Propene", "B. Ethene", "C. Chloroethene", "D. Styrene"],
      answer: "B",
      explanation: "Polyethene is made from ethene monomers.",
      subtopic: "Polymers"
    },
    {
      question: "The monomer of PVC is:",
      options: ["A. Ethene", "B. Propene", "C. Chloroethene", "D. Styrene"],
      answer: "C",
      explanation: "PVC is made from chloroethene (vinyl chloride) monomers.",
      subtopic: "Polymers"
    },
    {
      question: "The monomer of polystyrene is:",
      options: ["A. Ethene", "B. Propene", "C. Chloroethene", "D. Styrene"],
      answer: "D",
      explanation: "Polystyrene is made from styrene monomers.",
      subtopic: "Polymers"
    },
    {
      question: "The fermentation of glucose produces:",
      options: ["A. Ethanol and carbon dioxide", "B. Ethanol and water", "C. Methanol and carbon dioxide", "D. Propanol and water"],
      answer: "A",
      explanation: "Glucose → 2C2H5OH + 2CO2 (ethanol and carbon dioxide).",
      subtopic: "Fermentation"
    },
    {
      question: "The enzyme used in fermentation is:",
      options: ["A. Amylase", "B. Zymase", "C. Maltase", "D. Protease"],
      answer: "B",
      explanation: "Zymase is the enzyme in yeast that catalyses fermentation.",
      subtopic: "Fermentation"
    },
    {
      question: "Cracking of hydrocarbons is used to:",
      options: ["A. Produce larger hydrocarbons", "B. Break large hydrocarbons into smaller ones", "C. Convert alkanes to alkenes", "D. Both B and C"],
      answer: "D",
      explanation: "Cracking breaks large hydrocarbons into smaller, more useful ones, including alkenes.",
      subtopic: "Cracking"
    },
    {
      question: "Petrol is a mixture of:",
      options: ["A. Hydrocarbons with 1-4 carbon atoms", "B. Hydrocarbons with 5-10 carbon atoms", "C. Hydrocarbons with 11-15 carbon atoms", "D. Hydrocarbons with 16-20 carbon atoms"],
      answer: "B",
      explanation: "Petrol (gasoline) contains hydrocarbons with 5-10 carbon atoms.",
      subtopic: "Petroleum"
    },
    {
      question: "The octane number of petrol indicates:",
      options: ["A. Its colour", "B. Its density", "C. Its resistance to knocking", "D. Its boiling point"],
      answer: "C",
      explanation: "The octane number measures the resistance of petrol to knocking.",
      subtopic: "Petroleum"
    },
    {
      question: "Which of the following is a primary alkanol?",
      options: ["A. Propan-2-ol", "B. Butan-2-ol", "C. Ethanol", "D. 2-methylpropan-2-ol"],
      answer: "C",
      explanation: "Ethanol is a primary alkanol (OH on terminal carbon).",
      subtopic: "Alkanols"
    },
    {
      question: "Which of the following is a secondary alkanol?",
      options: ["A. Propan-1-ol", "B. Propan-2-ol", "C. Ethanol", "D. 2-methylpropan-2-ol"],
      answer: "B",
      explanation: "Propan-2-ol is a secondary alkanol (OH on carbon 2).",
      subtopic: "Alkanols"
    },
    {
      question: "Which of the following is a tertiary alkanol?",
      options: ["A. Propan-1-ol", "B. Propan-2-ol", "C. 2-methylpropan-2-ol", "D. Ethanol"],
      answer: "C",
      explanation: "2-methylpropan-2-ol is a tertiary alkanol (OH on carbon attached to 3 carbons).",
      subtopic: "Alkanols"
    },
    {
      question: "The test for alkenes is:",
      options: ["A. Reaction with sodium", "B. Decolorization of bromine water", "C. Reaction with NaOH", "D. Reaction with ammonia"],
      answer: "B",
      explanation: "Alkenes decolorize bromine water, indicating unsaturation.",
      subtopic: "Alkenes"
    },
    {
      question: "The test for alkanols is:",
      options: ["A. Reaction with bromine water", "B. Reaction with sodium metal", "C. Reaction with NaOH", "D. Reaction with ammonia"],
      answer: "B",
      explanation: "Alkanols react with sodium metal to produce hydrogen gas.",
      subtopic: "Alkanols"
    },
    {
      question: "The test for alkanoic acids is:",
      options: ["A. Reaction with bromine water", "B. Reaction with sodium metal", "C. Reaction with NaHCO3 (effervescence)", "D. Reaction with ammonia"],
      answer: "C",
      explanation: "Alkanoic acids react with NaHCO3 to produce CO2 (effervescence).",
      subtopic: "Alkanoic acids"
    },
    {
      question: "Soap is produced by the:",
      options: ["A. Hydrogenation of oils", "B. Hydrolysis of esters (saponification)", "C. Polymerization of ethene", "D. Fermentation of glucose"],
      answer: "B",
      explanation: "Soap is produced by saponification (hydrolysis of fats/oils with NaOH or KOH).",
      subtopic: "Soap"
    },
    {
      question: "The saponification of fats produces:",
      options: ["A. Soap and glycerol", "B. Soap and water", "C. Soap and ethanol", "D. Glycerol and water"],
      answer: "A",
      explanation: "Fats + NaOH → soap (sodium carboxylate) + glycerol.",
      subtopic: "Soap"
    },
    {
      question: "Which of the following is a disaccharide?",
      options: ["A. Glucose", "B. Fructose", "C. Sucrose", "D. Starch"],
      answer: "C",
      explanation: "Sucrose is a disaccharide (glucose + fructose).",
      subtopic: "Carbohydrates"
    },
    {
      question: "Which of the following is a polysaccharide?",
      options: ["A. Glucose", "B. Fructose", "C. Sucrose", "D. Starch"],
      answer: "D",
      explanation: "Starch is a polysaccharide (many glucose units).",
      subtopic: "Carbohydrates"
    },
    {
      question: "The hydrolysis of sucrose produces:",
      options: ["A. Glucose only", "B. Fructose only", "C. Glucose and fructose", "D. Maltose"],
      answer: "C",
      explanation: "Sucrose + H2O → glucose + fructose.",
      subtopic: "Carbohydrates"
    },
    {
      question: "Which of the following is a monosaccharide?",
      options: ["A. Sucrose", "B. Maltose", "C. Glucose", "D. Starch"],
      answer: "C",
      explanation: "Glucose is a monosaccharide.",
      subtopic: "Carbohydrates"
    }
  ],
  industry: [
    {
      question: "Which of the following is a major air pollutant?",
      options: ["A. Oxygen", "B. Nitrogen", "C. Carbon monoxide", "D. Argon"],
      answer: "C",
      explanation: "Carbon monoxide is a toxic air pollutant from incomplete combustion.",
      subtopic: "Air pollution"
    },
    {
      question: "The greenhouse effect is caused by:",
      options: ["A. Oxygen", "B. Nitrogen", "C. Carbon dioxide", "D. Argon"],
      answer: "C",
      explanation: "CO2 is a greenhouse gas that traps heat in the atmosphere.",
      subtopic: "Greenhouse effect"
    },
    {
      question: "Which of the following is a greenhouse gas?",
      options: ["A. Oxygen", "B. Nitrogen", "C. Methane", "D. Argon"],
      answer: "C",
      explanation: "Methane (CH4) is a potent greenhouse gas.",
      subtopic: "Greenhouse effect"
    },
    {
      question: "The depletion of the ozone layer is caused by:",
      options: ["A. CO2", "B. SO2", "C. CFCs", "D. NO2"],
      answer: "C",
      explanation: "Chlorofluorocarbons (CFCs) deplete the ozone layer.",
      subtopic: "Ozone depletion"
    },
    {
      question: "Acid rain is caused by:",
      options: ["A. CO2 and O2", "B. SO2 and NO2", "C. CO and CO2", "D. O2 and N2"],
      answer: "B",
      explanation: "SO2 and NO2 dissolve in rainwater to form acid rain.",
      subtopic: "Acid rain"
    },
    {
      question: "The pH of acid rain is approximately:",
      options: ["A. 7.0", "B. 6.5", "C. 5.6", "D. 4.0"],
      answer: "C",
      explanation: "Acid rain typically has a pH of about 5.6 or lower.",
      subtopic: "Acid rain"
    },
    {
      question: "Which of the following is a biodegradable pollutant?",
      options: ["A. Plastic", "B. Glass", "C. Paper", "D. Metal"],
      answer: "C",
      explanation: "Paper is biodegradable — it can be broken down by microorganisms.",
      subtopic: "Biodegradable pollutants"
    },
    {
      question: "Which of the following is a non-biodegradable pollutant?",
      options: ["A. Paper", "B. Food waste", "C. Plastic", "D. Wood"],
      answer: "C",
      explanation: "Plastic is non-biodegradable — it persists in the environment.",
      subtopic: "Non-biodegradable pollutants"
    },
    {
      question: "The main source of sulfur dioxide (SO2) pollution is:",
      options: ["A. Burning of coal", "B. Burning of wood", "C. Car exhaust", "D. Fertilizers"],
      answer: "A",
      explanation: "Burning coal releases SO2, a major cause of acid rain.",
      subtopic: "Air pollution"
    },
    {
      question: "The main source of carbon monoxide (CO) pollution is:",
      options: ["A. Incomplete combustion of fuels", "B. Complete combustion of fuels", "C. Respiration of animals", "D. Photosynthesis"],
      answer: "A",
      explanation: "CO is produced by incomplete combustion of fossil fuels.",
      subtopic: "Air pollution"
    },
    {
      question: "Which of the following is an effect of acid rain?",
      options: ["A. Global warming", "B. Damage to forests and aquatic life", "C. Ozone depletion", "D. Skin cancer"],
      answer: "B",
      explanation: "Acid rain damages forests, lakes, and aquatic ecosystems.",
      subtopic: "Acid rain"
    },
    {
      question: "Global warming is caused by:",
      options: ["A. Increased CO2 levels", "B. Decreased CO2 levels", "C. Ozone depletion", "D. Acid rain"],
      answer: "A",
      explanation: "Increased CO2 levels trap more heat, causing global warming.",
      subtopic: "Greenhouse effect"
    },
    {
      question: "The ozone layer is found in the:",
      options: ["A. Troposphere", "B. Stratosphere", "C. Mesosphere", "D. Thermosphere"],
      answer: "B",
      explanation: "The ozone layer is located in the stratosphere.",
      subtopic: "Ozone depletion"
    },
    {
      question: "The function of the ozone layer is to:",
      options: ["A. Trap heat", "B. Protect against UV radiation", "C. Produce oxygen", "D. Absorb CO2"],
      answer: "B",
      explanation: "The ozone layer absorbs harmful UV radiation from the sun.",
      subtopic: "Ozone depletion"
    },
    {
      question: "Photochemical smog is formed by:",
      options: ["A. CO2 and H2O", "B. NOx and VOCs in sunlight", "C. SO2 and NH3", "D. O2 and N2"],
      answer: "B",
      explanation: "Photochemical smog forms when NOx and VOCs react in sunlight.",
      subtopic: "Air pollution"
    },
    {
      question: "Water pollution is caused by:",
      options: ["A. Industrial waste", "B. Sewage", "C. Agricultural run-off", "D. All of the above"],
      answer: "D",
      explanation: "Industrial waste, sewage, and agricultural run-off all cause water pollution.",
      subtopic: "Water pollution"
    },
    {
      question: "Eutrophication is caused by:",
      options: ["A. Excess nutrients (nitrates and phosphates) in water", "B. Excess oxygen in water", "C. Lack of nutrients in water", "D. Acid rain"],
      answer: "A",
      explanation: "Excess nutrients cause algal blooms, leading to eutrophication.",
      subtopic: "Water pollution"
    },
    {
      question: "Eutrophication leads to:",
      options: ["A. Increased oxygen in water", "B. Decreased oxygen in water", "C. No change in oxygen", "D. Increased fish population"],
      answer: "B",
      explanation: "Algal blooms consume oxygen, reducing oxygen levels in water.",
      subtopic: "Water pollution"
    },
    {
      question: "Which of the following is a renewable resource?",
      options: ["A. Petroleum", "B. Coal", "C. Natural gas", "D. Solar energy"],
      answer: "D",
      explanation: "Solar energy is renewable — it is continuously replenished.",
      subtopic: "Renewable resources"
    },
    {
      question: "Which of the following is a non-renewable resource?",
      options: ["A. Solar energy", "B. Wind energy", "C. Petroleum", "D. Hydroelectric energy"],
      answer: "C",
      explanation: "Petroleum is a non-renewable fossil fuel.",
      subtopic: "Non-renewable resources"
    },
    {
      question: "Biodegradable waste is waste that:",
      options: ["A. Cannot be broken down", "B. Can be broken down by microorganisms", "C. Is always toxic", "D. Is always plastic"],
      answer: "B",
      explanation: "Biodegradable waste can be broken down by microorganisms.",
      subtopic: "Biodegradable pollutants"
    },
    {
      question: "Which of the following is a method of waste disposal?",
      options: ["A. Landfill", "B. Incineration", "C. Recycling", "D. All of the above"],
      answer: "D",
      explanation: "Landfill, incineration, and recycling are all waste disposal methods.",
      subtopic: "Waste disposal"
    },
    {
      question: "Incineration of waste produces:",
      options: ["A. Only carbon dioxide", "B. Toxic gases including dioxins", "C. Only water", "D. Only oxygen"],
      answer: "B",
      explanation: "Incineration produces toxic gases including dioxins and furans.",
      subtopic: "Waste disposal"
    },
    {
      question: "Recycling of waste helps to:",
      options: ["A. Increase waste", "B. Conserve resources", "C. Increase pollution", "D. Create more waste"],
      answer: "B",
      explanation: "Recycling conserves resources and reduces pollution.",
      subtopic: "Recycling"
    },
    {
      question: "Which of the following is a source of indoor air pollution?",
      options: ["A. Carbon monoxide", "B. Smoke from cooking", "C. Volatile organic compounds (VOCs)", "D. All of the above"],
      answer: "D",
      explanation: "CO, cooking smoke, and VOCs are indoor air pollutants.",
      subtopic: "Air pollution"
    },
    {
      question: "The greenhouse effect is:",
      options: ["A. Always harmful", "B. A natural phenomenon", "C. Always beneficial", "D. Caused only by humans"],
      answer: "B",
      explanation: "The greenhouse effect is a natural phenomenon that keeps Earth warm.",
      subtopic: "Greenhouse effect"
    },
    {
      question: "Enhanced greenhouse effect is caused by:",
      options: ["A. Natural CO2", "B. Human activities increasing greenhouse gases", "C. Volcanoes", "D. Forest fires"],
      answer: "B",
      explanation: "Human activities (burning fossil fuels, deforestation) enhance the greenhouse effect.",
      subtopic: "Greenhouse effect"
    },
    {
      question: "Which of the following is a solution to air pollution?",
      options: ["A. Using renewable energy", "B. Planting more trees", "C. Reducing fossil fuel use", "D. All of the above"],
      answer: "D",
      explanation: "Renewable energy, tree planting, and reducing fossil fuel use all help reduce air pollution.",
      subtopic: "Air pollution"
    },
    {
      question: "Which of the following is a greenhouse gas from agricultural activities?",
      options: ["A. Oxygen", "B. Methane", "C. Nitrogen", "D. Argon"],
      answer: "B",
      explanation: "Methane is produced by livestock and rice cultivation.",
      subtopic: "Greenhouse effect"
    },
    {
      question: "Carbon sequestration is the process of:",
      options: ["A. Releasing CO2 into the atmosphere", "B. Capturing and storing CO2", "C. Producing CO2", "D. Converting CO2 to O2"],
      answer: "B",
      explanation: "Carbon sequestration captures and stores CO2 to reduce atmospheric levels.",
      subtopic: "Climate change"
    },
    {
      question: "Which of the following is a fossil fuel?",
      options: ["A. Wood", "B. Solar energy", "C. Coal", "D. Wind energy"],
      answer: "C",
      explanation: "Coal is a fossil fuel formed from ancient plant remains.",
      subtopic: "Fossil fuels"
    },
    {
      question: "Which of the following is a clean energy source?",
      options: ["A. Coal", "B. Petroleum", "C. Solar energy", "D. Natural gas"],
      answer: "C",
      explanation: "Solar energy is clean and renewable with no emissions.",
      subtopic: "Renewable resources"
    },
    {
      question: "Which of the following is a pollutant from fertilizers?",
      options: ["A. Oxygen", "B. Nitrogen oxides", "C. Nitrates", "D. Both B and C"],
      answer: "D",
      explanation: "Fertilizers release nitrates into water and nitrogen oxides into air.",
      subtopic: "Water pollution"
    },
    {
      question: "The main gas that causes global warming is:",
      options: ["A. Oxygen", "B. Nitrogen", "C. Carbon dioxide", "D. Argon"],
      answer: "C",
      explanation: "CO2 is the main greenhouse gas responsible for global warming.",
      subtopic: "Greenhouse effect"
    },
    {
      question: "Which of the following is an effect of global warming?",
      options: ["A. Sea level rise", "B. More extreme weather", "C. Melting of glaciers", "D. All of the above"],
      answer: "D",
      explanation: "Global warming causes sea level rise, extreme weather, and glacier melting.",
      subtopic: "Greenhouse effect"
    },
    {
      question: "Which gas is responsible for the brown colour of photochemical smog?",
      options: ["A. O2", "B. NO2", "C. CO2", "D. SO2"],
      answer: "B",
      explanation: "NO2 (nitrogen dioxide) gives photochemical smog its brown colour.",
      subtopic: "Air pollution"
    },
    {
      question: "The main source of methane (CH4) is:",
      options: ["A. Burning of coal", "B. Agriculture (livestock and rice)", "C. Car exhaust", "D. Industrial processes"],
      answer: "B",
      explanation: "Agriculture, especially livestock and rice cultivation, produces methane.",
      subtopic: "Greenhouse effect"
    },
    {
      question: "Which of the following is a particulate pollutant?",
      options: ["A. CO2", "B. Dust", "C. NO2", "D. SO2"],
      answer: "B",
      explanation: "Dust is a particulate pollutant (PM2.5, PM10).",
      subtopic: "Air pollution"
    },
    {
      question: "Which of the following is a heavy metal pollutant?",
      options: ["A. Oxygen", "B. Lead", "C. Nitrogen", "D. Carbon"],
      answer: "B",
      explanation: "Lead is a toxic heavy metal pollutant.",
      subtopic: "Water pollution"
    },
    {
      question: "The process of using microorganisms to clean up pollution is called:",
      options: ["A. Incineration", "B. Bioremediation", "C. Landfilling", "D. Recycling"],
      answer: "B",
      explanation: "Bioremediation uses microorganisms to clean up pollutants.",
      subtopic: "Bioremediation"
    },
    {
      question: "Which of the following is NOT a greenhouse gas?",
      options: ["A. CO2", "B. CH4", "C. N2O", "D. O2"],
      answer: "D",
      explanation: "O2 (oxygen) is not a greenhouse gas.",
      subtopic: "Greenhouse effect"
    },
    {
      question: "Which of the following is a source of NOx pollution?",
      options: ["A. Burning of coal", "B. Car exhaust", "C. Fertilizers", "D. All of the above"],
      answer: "D",
      explanation: "Coal burning, car exhaust, and fertilizers all produce NOx.",
      subtopic: "Air pollution"
    },
    {
      question: "The Montreal Protocol is an international agreement to:",
      options: ["A. Reduce CO2 emissions", "B. Phase out CFCs", "C. Stop acid rain", "D. Reduce plastic waste"],
      answer: "B",
      explanation: "The Montreal Protocol aims to phase out ozone-depleting substances like CFCs.",
      subtopic: "Ozone depletion"
    },
    {
      question: "The Kyoto Protocol is an international agreement to:",
      options: ["A. Phase out CFCs", "B. Reduce greenhouse gas emissions", "C. Stop acid rain", "D. Reduce plastic waste"],
      answer: "B",
      explanation: "The Kyoto Protocol aims to reduce greenhouse gas emissions.",
      subtopic: "Climate change"
    },
    {
      question: "Which of the following is a cause of deforestation?",
      options: ["A. Logging", "B. Agriculture", "C. Urbanization", "D. All of the above"],
      answer: "D",
      explanation: "Logging, agriculture, and urbanization all cause deforestation.",
      subtopic: "Deforestation"
    },
    {
      question: "Deforestation contributes to global warming because:",
      options: ["A. Trees absorb CO2", "B. Trees release CO2 when cut", "C. Both A and B", "D. Neither"],
      answer: "C",
      explanation: "Deforestation reduces CO2 absorption and releases stored CO2.",
      subtopic: "Deforestation"
    },
    {
      question: "Which of the following is an effect of deforestation?",
      options: ["A. Loss of biodiversity", "B. Soil erosion", "C. Climate change", "D. All of the above"],
      answer: "D",
      explanation: "Deforestation causes loss of biodiversity, soil erosion, and climate change.",
      subtopic: "Deforestation"
    },
    {
      question: "Which of the following is a biodegradable plastic?",
      options: ["A. PET", "B. PVC", "C. Polylactic acid (PLA)", "D. Polystyrene"],
      answer: "C",
      explanation: "PLA is a biodegradable plastic made from renewable resources.",
      subtopic: "Biodegradable pollutants"
    },
    {
      question: "Which of the following is a heavy metal found in electronic waste?",
      options: ["A. Lead", "B. Mercury", "C. Cadmium", "D. All of the above"],
      answer: "D",
      explanation: "E-waste contains lead, mercury, cadmium, and other heavy metals.",
      subtopic: "Water pollution"
    },
    {
      question: "The main cause of soil pollution is:",
      options: ["A. Pesticides and fertilizers", "B. Industrial waste", "C. Landfill leaching", "D. All of the above"],
      answer: "D",
      explanation: "Pesticides, industrial waste, and landfill leachate all pollute soil.",
      subtopic: "Soil pollution"
    },
    {
      question: "Which of the following is a benefit of using renewable energy?",
      options: ["A. Reduced greenhouse gas emissions", "B. No pollution", "C. Sustainable energy supply", "D. All of the above"],
      answer: "D",
      explanation: "Renewable energy offers all these benefits.",
      subtopic: "Renewable resources"
    },
    {
      question: "Which of the following is an example of a biofuel?",
      options: ["A. Ethanol", "B. Petrol", "C. Diesel", "D. Kerosene"],
      answer: "A",
      explanation: "Ethanol is a biofuel made from fermented crops.",
      subtopic: "Biotechnology"
    },
    {
      question: "Which of the following is used in fermentation to produce alcoholic beverages?",
      options: ["A. Bacteria", "B. Yeast", "C. Mold", "D. Virus"],
      answer: "B",
      explanation: "Yeast is used in fermentation to produce alcoholic beverages.",
      subtopic: "Biotechnology"
    }
  ],
  biochem: [
    {
      question: "Proteins are polymers of:",
      options: ["A. Monosaccharides", "B. Amino acids", "C. Fatty acids", "D. Nucleotides"],
      answer: "B",
      explanation: "Proteins are polymers made up of amino acid monomers linked by peptide bonds.",
      subtopic: "Proteins"
    },
    {
      question: "The bond that links amino acids in a protein is called:",
      options: ["A. Glycosidic bond", "B. Peptide bond", "C. Ester bond", "D. Hydrogen bond"],
      answer: "B",
      explanation: "A peptide bond (amide linkage) joins amino acids in a protein chain.",
      subtopic: "Proteins"
    },
    {
      question: "Which of the following is a test for proteins?",
      options: ["A. Iodine test", "B. Biuret test", "C. Fehling's test", "D. Bromine water test"],
      answer: "B",
      explanation: "The Biuret test (purple colour) is used to detect proteins.",
      subtopic: "Proteins"
    },
    {
      question: "The general structure of an amino acid contains:",
      options: ["A. -NH2 and -COOH groups", "B. -OH and -COOH groups", "C. -NH2 and -CHO groups", "D. -OH and -CHO groups"],
      answer: "A",
      explanation: "Amino acids contain an amino group (-NH2) and a carboxyl group (-COOH).",
      subtopic: "Amino acids"
    },
    {
      question: "Carbohydrates are polymers of:",
      options: ["A. Amino acids", "B. Monosaccharides", "C. Fatty acids", "D. Nucleotides"],
      answer: "B",
      explanation: "Carbohydrates are polymers made up of monosaccharide monomers.",
      subtopic: "Carbohydrates"
    },
    {
      question: "Which of the following is a monosaccharide?",
      options: ["A. Sucrose", "B. Maltose", "C. Glucose", "D. Starch"],
      answer: "C",
      explanation: "Glucose is a monosaccharide (simple sugar).",
      subtopic: "Carbohydrates"
    },
    {
      question: "Which of the following is a disaccharide?",
      options: ["A. Glucose", "B. Fructose", "C. Sucrose", "D. Starch"],
      answer: "C",
      explanation: "Sucrose is a disaccharide made of glucose and fructose.",
      subtopic: "Carbohydrates"
    },
    {
      question: "Which of the following is a polysaccharide?",
      options: ["A. Glucose", "B. Fructose", "C. Sucrose", "D. Starch"],
      answer: "D",
      explanation: "Starch is a polysaccharide made of many glucose units.",
      subtopic: "Carbohydrates"
    },
    {
      question: "The hydrolysis of starch produces:",
      options: ["A. Glucose", "B. Fructose", "C. Sucrose", "D. Maltose"],
      answer: "A",
      explanation: "Starch hydrolyses to produce glucose monomers.",
      subtopic: "Carbohydrates"
    },
    {
      question: "Which of the following is a test for reducing sugars?",
      options: ["A. Biuret test", "B. Iodine test", "C. Fehling's test", "D. Millon's test"],
      answer: "C",
      explanation: "Fehling's test (red precipitate) is used to detect reducing sugars.",
      subtopic: "Carbohydrates"
    },
    {
      question: "The iodine test is used to detect:",
      options: ["A. Proteins", "B. Starch", "C. Fats", "D. Glucose"],
      answer: "B",
      explanation: "Iodine gives a blue-black colour with starch.",
      subtopic: "Carbohydrates"
    },
    {
      question: "Fats and oils are:",
      options: ["A. Polymers of amino acids", "B. Esters of glycerol and fatty acids", "C. Polymers of monosaccharides", "D. Esters of glucose and fatty acids"],
      answer: "B",
      explanation: "Fats and oils are esters of glycerol (propane-1,2,3-triol) and fatty acids.",
      subtopic: "Fats and oils"
    },
    {
      question: "The saponification of fats produces:",
      options: ["A. Soap and glycerol", "B. Soap and water", "C. Fatty acids and glycerol", "D. Glycerol and water"],
      answer: "A",
      explanation: "Fats + NaOH → soap (sodium carboxylate) + glycerol.",
      subtopic: "Fats and oils"
    },
    {
      question: "Which of the following is a test for fats and oils?",
      options: ["A. Biuret test", "B. Iodine test", "C. Grease spot test", "D. Fehling's test"],
      answer: "C",
      explanation: "The grease spot test detects fats and oils.",
      subtopic: "Fats and oils"
    },
    {
      question: "Proteins on hydrolysis produce:",
      options: ["A. Glucose", "B. Amino acids", "C. Fatty acids", "D. Nucleotides"],
      answer: "B",
      explanation: "Proteins hydrolyse to produce amino acids.",
      subtopic: "Proteins"
    },
    {
      question: "Which of the following is NOT a test for proteins?",
      options: ["A. Biuret test", "B. Ninhydrin test", "C. Millon's test", "D. Iodine test"],
      answer: "D",
      explanation: "Iodine test is for starch, not proteins.",
      subtopic: "Proteins"
    },
    {
      question: "Enzymes are:",
      options: ["A. Carbohydrates", "B. Proteins", "C. Lipids", "D. Nucleic acids"],
      answer: "B",
      explanation: "Enzymes are biological catalysts made of proteins.",
      subtopic: "Proteins"
    },
    {
      question: "Which of the following is a test for starch?",
      options: ["A. Biuret test", "B. Iodine test", "C. Fehling's test", "D. Millon's test"],
      answer: "B",
      explanation: "Iodine gives a blue-black colour with starch.",
      subtopic: "Carbohydrates"
    },
    {
      question: "The Benedict's test is used to detect:",
      options: ["A. Proteins", "B. Starch", "C. Reducing sugars", "D. Fats"],
      answer: "C",
      explanation: "Benedict's solution detects reducing sugars (red precipitate).",
      subtopic: "Carbohydrates"
    },
    {
      question: "Which of the following is NOT a carbohydrate?",
      options: ["A. Glucose", "B. Starch", "C. Cellulose", "D. Glycine"],
      answer: "D",
      explanation: "Glycine is an amino acid, not a carbohydrate.",
      subtopic: "Carbohydrates"
    },
    {
      question: "Which of the following is a monosaccharide found in fruits?",
      options: ["A. Glucose", "B. Fructose", "C. Sucrose", "D. Both A and B"],
      answer: "D",
      explanation: "Fruits contain glucose and fructose, both monosaccharides.",
      subtopic: "Carbohydrates"
    },
    {
      question: "Sucrose on hydrolysis produces:",
      options: ["A. Glucose only", "B. Fructose only", "C. Glucose and fructose", "D. Maltose"],
      answer: "C",
      explanation: "Sucrose + H2O → glucose + fructose.",
      subtopic: "Carbohydrates"
    },
    {
      question: "Maltose on hydrolysis produces:",
      options: ["A. Glucose only", "B. Fructose only", "C. Glucose and fructose", "D. Two glucose molecules"],
      answer: "D",
      explanation: "Maltose + H2O → glucose + glucose.",
      subtopic: "Carbohydrates"
    },
    {
      question: "Lactose is a disaccharide found in:",
      options: ["A. Fruits", "B. Milk", "C. Sugar cane", "D. Cereals"],
      answer: "B",
      explanation: "Lactose is the sugar found in milk.",
      subtopic: "Carbohydrates"
    },
    {
      question: "Which of the following is a test for proteins using copper ions?",
      options: ["A. Iodine test", "B. Biuret test", "C. Fehling's test", "D. Millon's test"],
      answer: "B",
      explanation: "The Biuret test uses copper ions to detect proteins.",
      subtopic: "Proteins"
    },
    {
      question: "Which of the following is a test for proteins using mercury?",
      options: ["A. Biuret test", "B. Iodine test", "C. Fehling's test", "D. Millon's test"],
      answer: "D",
      explanation: "Millon's test uses mercury to detect proteins.",
      subtopic: "Proteins"
    },
    {
      question: "Amino acids are the building blocks of:",
      options: ["A. Carbohydrates", "B. Proteins", "C. Fats", "D. Nucleic acids"],
      answer: "B",
      explanation: "Amino acids are the monomers of proteins.",
      subtopic: "Amino acids"
    },
    {
      question: "The number of amino acids that occur naturally in proteins is:",
      options: ["A. 10", "B. 20", "C. 30", "D. 50"],
      answer: "B",
      explanation: "There are 20 standard amino acids found in proteins.",
      subtopic: "Amino acids"
    },
    {
      question: "Which of the following is a triglyceride?",
      options: ["A. Glucose", "B. Starch", "C. Fat", "D. Protein"],
      answer: "C",
      explanation: "Fats are triglycerides (glycerol + 3 fatty acids).",
      subtopic: "Fats and oils"
    },
    {
      question: "Fats that are liquid at room temperature are called:",
      options: ["A. Oils", "B. Waxes", "C. Steroids", "D. Soaps"],
      answer: "A",
      explanation: "Oils are liquid fats at room temperature (unsaturated).",
      subtopic: "Fats and oils"
    },
    {
      question: "Fats that are solid at room temperature are called:",
      options: ["A. Oils", "B. Fats", "C. Waxes", "D. Steroids"],
      answer: "B",
      explanation: "Fats are solid at room temperature (saturated).",
      subtopic: "Fats and oils"
    },
    {
      question: "The hydrogenation of oils produces:",
      options: ["A. Fats (solid)", "B. More oils", "C. Proteins", "D. Carbohydrates"],
      answer: "A",
      explanation: "Hydrogenation converts unsaturated oils to saturated fats.",
      subtopic: "Fats and oils"
    },
    {
      question: "The process of converting oils to solid fats is called:",
      options: ["A. Hydrogenation", "B. Saponification", "C. Esterification", "D. Hydrolysis"],
      answer: "A",
      explanation: "Hydrogenation adds hydrogen to unsaturated fats, making them solid.",
      subtopic: "Fats and oils"
    },
    {
      question: "Soap is a salt of:",
      options: ["A. Carboxylic acid", "B. Amino acid", "C. Sulfuric acid", "D. Hydrochloric acid"],
      answer: "A",
      explanation: "Soap is the sodium or potassium salt of a long-chain carboxylic acid.",
      subtopic: "Soap"
    },
    {
      question: "Soapless detergents are also called:",
      options: ["A. Synthetic detergents", "B. Natural detergents", "C. Biodegradable detergents", "D. Non-biodegradable detergents"],
      answer: "A",
      explanation: "Soapless detergents are synthetic detergents (e.g., sodium dodecyl sulfate).",
      subtopic: "Soap"
    },
    {
      question: "Which of the following is a test for proteins using nitric acid?",
      options: ["A. Biuret test", "B. Iodine test", "C. Xanthoproteic test", "D. Fehling's test"],
      answer: "C",
      explanation: "The Xanthoproteic test uses concentrated nitric acid to detect proteins (yellow colour).",
      subtopic: "Proteins"
    },
    {
      question: "Which of the following is a test for proteins using ninhydrin?",
      options: ["A. Biuret test", "B. Ninhydrin test", "C. Millon's test", "D. Xanthoproteic test"],
      answer: "B",
      explanation: "Ninhydrin gives a purple colour with proteins and amino acids.",
      subtopic: "Proteins"
    },
    {
      question: "Nucleic acids are polymers of:",
      options: ["A. Amino acids", "B. Monosaccharides", "C. Nucleotides", "D. Fatty acids"],
      answer: "C",
      explanation: "Nucleic acids (DNA, RNA) are polymers of nucleotides.",
      subtopic: "Nucleic acids"
    },
    {
      question: "DNA is a polymer of:",
      options: ["A. Amino acids", "B. Nucleotides", "C. Fatty acids", "D. Monosaccharides"],
      answer: "B",
      explanation: "DNA is made up of nucleotide monomers.",
      subtopic: "Nucleic acids"
    },
    {
      question: "The sugar in DNA is:",
      options: ["A. Glucose", "B. Fructose", "C. Deoxyribose", "D. Ribose"],
      answer: "C",
      explanation: "DNA contains deoxyribose sugar.",
      subtopic: "Nucleic acids"
    },
    {
      question: "The sugar in RNA is:",
      options: ["A. Glucose", "B. Fructose", "C. Deoxyribose", "D. Ribose"],
      answer: "D",
      explanation: "RNA contains ribose sugar.",
      subtopic: "Nucleic acids"
    },
    {
      question: "ATP is a molecule that:",
      options: ["A. Stores energy", "B. Transfers energy", "C. Both A and B", "D. Neither"],
      answer: "C",
      explanation: "ATP stores and transfers energy in cells.",
      subtopic: "Biochemistry"
    },
    {
      question: "Which of the following is a vitamin?",
      options: ["A. Glucose", "B. Vitamin C", "C. Protein", "D. Fat"],
      answer: "B",
      explanation: "Vitamin C is a vitamin (ascorbic acid).",
      subtopic: "Vitamins"
    },
    {
      question: "Which of the following is NOT a vitamin?",
      options: ["A. Vitamin A", "B. Vitamin B", "C. Vitamin C", "D. Vitamin P"],
      answer: "D",
      explanation: "Vitamin P is not a recognized vitamin.",
      subtopic: "Vitamins"
    },
    {
      question: "Which of the following is a mineral required by the body?",
      options: ["A. Calcium", "B. Iron", "C. Sodium", "D. All of the above"],
      answer: "D",
      explanation: "Calcium, iron, and sodium are all essential minerals.",
      subtopic: "Minerals"
    },
    {
      question: "Which of the following is a water-soluble vitamin?",
      options: ["A. Vitamin A", "B. Vitamin D", "C. Vitamin C", "D. Vitamin E"],
      answer: "C",
      explanation: "Vitamin C is water-soluble.",
      subtopic: "Vitamins"
    },
    {
      question: "Which of the following is a fat-soluble vitamin?",
      options: ["A. Vitamin B", "B. Vitamin C", "C. Vitamin D", "D. Both A and B"],
      answer: "C",
      explanation: "Vitamin D is fat-soluble.",
      subtopic: "Vitamins"
    },
    {
      question: "The deficiency of vitamin C causes:",
      options: ["A. Rickets", "B. Scurvy", "C. Beriberi", "D. Anaemia"],
      answer: "B",
      explanation: "Vitamin C deficiency causes scurvy.",
      subtopic: "Vitamins"
    },
    {
      question: "The deficiency of vitamin D causes:",
      options: ["A. Rickets", "B. Scurvy", "C. Beriberi", "D. Anaemia"],
      answer: "A",
      explanation: "Vitamin D deficiency causes rickets.",
      subtopic: "Vitamins"
    },
    {
      question: "The deficiency of iron causes:",
      options: ["A. Rickets", "B. Scurvy", "C. Anaemia", "D. Beriberi"],
      answer: "C",
      explanation: "Iron deficiency causes anaemia.",
      subtopic: "Minerals"
    },
    {
      question: "The deficiency of iodine causes:",
      options: ["A. Goitre", "B. Anaemia", "C. Rickets", "D. Scurvy"],
      answer: "A",
      explanation: "Iodine deficiency causes goitre.",
      subtopic: "Minerals"
    }
  ],
  metals: [
    {
      question: "Which of the following is used to extract iron from its ore?",
      options: ["A. Electrolysis", "B. Blast furnace", "C. Contact process", "D. Haber process"],
      answer: "B",
      explanation: "Iron is extracted in a blast furnace using coke, limestone, and iron ore.",
      subtopic: "Extraction of metals"
    },
    {
      question: "The main ore of iron is:",
      options: ["A. Bauxite", "B. Haematite", "C. Galena", "D. Chalcopyrite"],
      answer: "B",
      explanation: "Haematite (Fe2O3) is the principal ore of iron.",
      subtopic: "Extraction of metals"
    },
    {
      question: "The main ore of aluminium is:",
      options: ["A. Haematite", "B. Bauxite", "C. Galena", "D. Chalcopyrite"],
      answer: "B",
      explanation: "Bauxite (Al2O3·2H2O) is the principal ore of aluminium.",
      subtopic: "Extraction of metals"
    },
    {
      question: "Which process is used to extract aluminium from bauxite?",
      options: ["A. Blast furnace", "B. Hall-Héroult process", "C. Contact process", "D. Haber process"],
      answer: "B",
      explanation: "Aluminium is extracted by electrolysis of bauxite in the Hall-Héroult process.",
      subtopic: "Extraction of metals"
    },
    {
      question: "In the blast furnace, coke acts as:",
      options: ["A. An oxidizing agent", "B. A reducing agent", "C. A catalyst", "D. A flux"],
      answer: "B",
      explanation: "Coke (carbon) acts as a reducing agent, reducing iron oxide to iron.",
      subtopic: "Extraction of metals"
    },
    {
      question: "In the blast furnace, limestone acts as:",
      options: ["A. An oxidizing agent", "B. A reducing agent", "C. A catalyst", "D. A flux"],
      answer: "D",
      explanation: "Limestone acts as a flux to remove impurities (silica) forming slag.",
      subtopic: "Extraction of metals"
    },
    {
      question: "The slag formed in the blast furnace is:",
      options: ["A. Calcium silicate", "B. Calcium carbonate", "C. Iron silicate", "D. Sodium silicate"],
      answer: "A",
      explanation: "Limestone (CaCO3) reacts with silica to form calcium silicate slag.",
      subtopic: "Extraction of metals"
    },
    {
      question: "Which of the following metals is extracted by electrolysis?",
      options: ["A. Iron", "B. Aluminium", "C. Copper", "D. Zinc"],
      answer: "B",
      explanation: "Aluminium is extracted by electrolysis (Hall-Héroult process).",
      subtopic: "Extraction of metals"
    },
    {
      question: "Which of the following metals is extracted by reduction with carbon?",
      options: ["A. Aluminium", "B. Iron", "C. Sodium", "D. Potassium"],
      answer: "B",
      explanation: "Iron is extracted by reduction with carbon (coke) in the blast furnace.",
      subtopic: "Extraction of metals"
    },
    {
      question: "Cryolite is used in the extraction of aluminium to:",
      options: ["A. Increase the boiling point", "B. Lower the melting point of Al2O3", "C. Increase conductivity", "D. Both B and C"],
      answer: "D",
      explanation: "Cryolite lowers the melting point of Al2O3 and increases its electrical conductivity.",
      subtopic: "Extraction of metals"
    },
    {
      question: "An alloy is a mixture of:",
      options: ["A. Two or more metals", "B. A metal and a non-metal", "C. Both A and B", "D. Two non-metals"],
      answer: "C",
      explanation: "An alloy is a mixture of two or more metals or a metal and a non-metal.",
      subtopic: "Alloys"
    },
    {
      question: "Which of the following is an alloy?",
      options: ["A. Copper", "B. Iron", "C. Bronze", "D. Aluminium"],
      answer: "C",
      explanation: "Bronze is an alloy of copper and tin.",
      subtopic: "Alloys"
    },
    {
      question: "Bronze is an alloy of:",
      options: ["A. Copper and tin", "B. Copper and zinc", "C. Iron and carbon", "D. Aluminium and copper"],
      answer: "A",
      explanation: "Bronze is an alloy of copper and tin.",
      subtopic: "Alloys"
    },
    {
      question: "Brass is an alloy of:",
      options: ["A. Copper and tin", "B. Copper and zinc", "C. Iron and carbon", "D. Aluminium and copper"],
      answer: "B",
      explanation: "Brass is an alloy of copper and zinc.",
      subtopic: "Alloys"
    },
    {
      question: "Steel is an alloy of:",
      options: ["A. Iron and carbon", "B. Iron and chromium", "C. Iron and nickel", "D. Iron and cobalt"],
      answer: "A",
      explanation: "Steel is an alloy of iron and carbon (0.1-1.5% carbon).",
      subtopic: "Alloys"
    },
    {
      question: "Stainless steel is an alloy of iron, chromium, and:",
      options: ["A. Carbon", "B. Nickel", "C. Manganese", "D. Silicon"],
      answer: "B",
      explanation: "Stainless steel contains iron, chromium (at least 10.5%), and nickel.",
      subtopic: "Alloys"
    },
    {
      question: "Which of the following is a property of alloys?",
      options: ["A. They are harder than pure metals", "B. They are more reactive than pure metals", "C. They have lower melting points than pure metals", "D. Both A and C"],
      answer: "D",
      explanation: "Alloys are harder and often have lower melting points than pure metals.",
      subtopic: "Alloys"
    },
    {
      question: "Corrosion of metals is a:",
      options: ["A. Physical change", "B. Chemical change", "C. Biological change", "D. Nuclear change"],
      answer: "B",
      explanation: "Corrosion is a chemical change (oxidation of metals).",
      subtopic: "Corrosion"
    },
    {
      question: "Rusting of iron requires the presence of:",
      options: ["A. Oxygen only", "B. Water only", "C. Oxygen and water", "D. Carbon dioxide"],
      answer: "C",
      explanation: "Both oxygen and water are required for rusting.",
      subtopic: "Corrosion"
    },
    {
      question: "Which of the following is a method of preventing rusting?",
      options: ["A. Painting", "B. Oiling", "C. Galvanizing", "D. All of the above"],
      answer: "D",
      explanation: "Painting, oiling, and galvanizing all prevent rusting.",
      subtopic: "Corrosion"
    },
    {
      question: "Galvanizing is the process of coating iron with:",
      options: ["A. Copper", "B. Tin", "C. Zinc", "D. Chromium"],
      answer: "C",
      explanation: "Galvanizing coats iron with zinc to prevent rusting.",
      subtopic: "Corrosion"
    },
    {
      question: "Which of the following metals is most reactive?",
      options: ["A. Iron", "B. Copper", "C. Sodium", "D. Gold"],
      answer: "C",
      explanation: "Sodium is the most reactive among these metals.",
      subtopic: "Reactivity of metals"
    },
    {
      question: "Which of the following metals is least reactive?",
      options: ["A. Iron", "B. Copper", "C. Sodium", "D. Gold"],
      answer: "D",
      explanation: "Gold is the least reactive metal.",
      subtopic: "Reactivity of metals"
    },
    {
      question: "In the reactivity series, which metal displaces hydrogen from dilute acids?",
      options: ["A. Copper", "B. Silver", "C. Zinc", "D. Gold"],
      answer: "C",
      explanation: "Zinc is above hydrogen in the reactivity series and displaces it from acids.",
      subtopic: "Reactivity of metals"
    },
    {
      question: "Which metal does NOT react with dilute acids to produce hydrogen?",
      options: ["A. Zinc", "B. Copper", "C. Magnesium", "D. Iron"],
      answer: "B",
      explanation: "Copper is below hydrogen in the reactivity series and does not react with dilute acids.",
      subtopic: "Reactivity of metals"
    },
    {
      question: "Which of the following is a method of protecting iron from corrosion?",
      options: ["A. Galvanizing", "B. Electroplating", "C. Sacrificial protection", "D. All of the above"],
      answer: "D",
      explanation: "Galvanizing, electroplating, and sacrificial protection all prevent corrosion.",
      subtopic: "Corrosion"
    },
    {
      question: "Sacrificial protection involves using a metal that is:",
      options: ["A. Less reactive than iron", "B. More reactive than iron", "C. The same as iron", "D. A noble metal"],
      answer: "B",
      explanation: "A more reactive metal (e.g., zinc or magnesium) is used as a sacrificial anode.",
      subtopic: "Corrosion"
    },
    {
      question: "Which of the following is the formula of copper(II) sulfate?",
      options: ["A. CuSO4", "B. Cu2SO4", "C. CuSO3", "D. Cu2SO3"],
      answer: "A",
      explanation: "Copper(II) sulfate is CuSO4.",
      subtopic: "Compounds of metals"
    },
    {
      question: "Which of the following is the formula of sodium carbonate?",
      options: ["A. NaCl", "B. Na2CO3", "C. NaHCO3", "D. NaOH"],
      answer: "B",
      explanation: "Sodium carbonate is Na2CO3.",
      subtopic: "Compounds of metals"
    },
    {
      question: "Which of the following is the formula of calcium hydroxide?",
      options: ["A. Ca(OH)2", "B. Ca(OH)3", "C. CaOH", "D. Ca2OH"],
      answer: "A",
      explanation: "Calcium hydroxide is Ca(OH)2.",
      subtopic: "Compounds of metals"
    },
    {
      question: "Which of the following is the formula of sodium hydroxide?",
      options: ["A. NaCl", "B. Na2CO3", "C. NaOH", "D. NaHCO3"],
      answer: "C",
      explanation: "Sodium hydroxide is NaOH.",
      subtopic: "Compounds of metals"
    },
    {
      question: "Which of the following is the formula of calcium carbonate?",
      options: ["A. CaO", "B. Ca(OH)2", "C. CaCO3", "D. CaSO4"],
      answer: "C",
      explanation: "Calcium carbonate is CaCO3.",
      subtopic: "Compounds of metals"
    },
    {
      question: "Which of the following metals reacts violently with water?",
      options: ["A. Sodium", "B. Iron", "C. Copper", "D. Silver"],
      answer: "A",
      explanation: "Sodium reacts violently with water, producing hydrogen gas.",
      subtopic: "Reactivity of metals"
    },
    {
      question: "Which of the following metals reacts with water to form a hydroxide and hydrogen?",
      options: ["A. Sodium", "B. Iron", "C. Copper", "D. Silver"],
      answer: "A",
      explanation: "2Na + 2H2O → 2NaOH + H2.",
      subtopic: "Reactivity of metals"
    },
    {
      question: "Which of the following metals does NOT react with water?",
      options: ["A. Sodium", "B. Potassium", "C. Iron", "D. Calcium"],
      answer: "C",
      explanation: "Iron does not react with cold water, only with steam.",
      subtopic: "Reactivity of metals"
    },
    {
      question: "Which of the following metals reacts with steam?",
      options: ["A. Iron", "B. Copper", "C. Silver", "D. Gold"],
      answer: "A",
      explanation: "Iron reacts with steam to form iron oxide and hydrogen.",
      subtopic: "Reactivity of metals"
    },
    {
      question: "Which of the following metals is used in electrical wiring?",
      options: ["A. Iron", "B. Copper", "C. Aluminium", "D. Both B and C"],
      answer: "D",
      explanation: "Copper and aluminium are both used in electrical wiring.",
      subtopic: "Uses of metals"
    },
    {
      question: "Which of the following metals is used in making coins?",
      options: ["A. Copper", "B. Silver", "C. Nickel", "D. All of the above"],
      answer: "D",
      explanation: "Copper, silver, and nickel are used in making coins.",
      subtopic: "Uses of metals"
    },
    {
      question: "Which of the following metals is used in making jewellery?",
      options: ["A. Gold", "B. Silver", "C. Platinum", "D. All of the above"],
      answer: "D",
      explanation: "Gold, silver, and platinum are used in jewellery.",
      subtopic: "Uses of metals"
    },
    {
      question: "Which of the following metals is used in making batteries?",
      options: ["A. Lead", "B. Lithium", "C. Nickel", "D. All of the above"],
      answer: "D",
      explanation: "Lead, lithium, and nickel are all used in batteries.",
      subtopic: "Uses of metals"
    },
    {
      question: "Which of the following is a property of transition metals?",
      options: ["A. Variable oxidation states", "B. Formation of coloured compounds", "C. Catalytic activity", "D. All of the above"],
      answer: "D",
      explanation: "Transition metals have variable oxidation states, form coloured compounds, and are catalysts.",
      subtopic: "Transition metals"
    },
    {
      question: "Which of the following is a transition metal?",
      options: ["A. Sodium", "B. Magnesium", "C. Iron", "D. Aluminium"],
      answer: "C",
      explanation: "Iron is a transition metal (d-block element).",
      subtopic: "Transition metals"
    },
    {
      question: "Which of the following is NOT a transition metal?",
      options: ["A. Iron", "B. Copper", "C. Nickel", "D. Sodium"],
      answer: "D",
      explanation: "Sodium is an s-block metal, not a transition metal.",
      subtopic: "Transition metals"
    },
    {
      question: "Aluminium is a:",
      options: ["A. Transition metal", "B. Main group metal", "C. Noble metal", "D. Metalloid"],
      answer: "B",
      explanation: "Aluminium is a main group metal (Group III).",
      subtopic: "Main group metals"
    },
    {
      question: "Sodium is a:",
      options: ["A. Transition metal", "B. Main group metal", "C. Noble metal", "D. Metalloid"],
      answer: "B",
      explanation: "Sodium is a main group metal (Group I).",
      subtopic: "Main group metals"
    },
    {
      question: "Gold is a:",
      options: ["A. Transition metal", "B. Main group metal", "C. Noble metal", "D. Both A and C"],
      answer: "D",
      explanation: "Gold is a transition metal and a noble metal.",
      subtopic: "Noble metals"
    },
    {
      question: "Which of the following metals is NOT corroded by acid?",
      options: ["A. Copper", "B. Gold", "C. Silver", "D. Platinum"],
      answer: "B",
      explanation: "Gold does not corrode in acid (it dissolves only in aqua regia).",
      subtopic: "Corrosion"
    },
    {
      question: "Which of the following is the formula of sodium chloride?",
      options: ["A. NaCl", "B. Na2Cl", "C. NaCl2", "D. Na2Cl2"],
      answer: "A",
      explanation: "Sodium chloride is NaCl.",
      subtopic: "Compounds of metals"
    },
    {
      question: "Which of the following is the formula of calcium oxide?",
      options: ["A. CaO", "B. CaO2", "C. Ca2O", "D. Ca(OH)2"],
      answer: "A",
      explanation: "Calcium oxide (quicklime) is CaO.",
      subtopic: "Compounds of metals"
    },
    {
      question: "Which of the following is the formula of calcium sulfate?",
      options: ["A. CaSO4", "B. CaSO3", "C. CaS", "D. Ca2SO4"],
      answer: "A",
      explanation: "Calcium sulfate is CaSO4.",
      subtopic: "Compounds of metals"
    },
    {
      question: "Which of the following is the formula of sodium sulfate?",
      options: ["A. Na2SO4", "B. NaSO4", "C. Na2SO3", "D. Na2SO2"],
      answer: "A",
      explanation: "Sodium sulfate is Na2SO4.",
      subtopic: "Compounds of metals"
    },
    {
      question: "Which of the following is the formula of magnesium chloride?",
      options: ["A. MgCl", "B. MgCl2", "C. Mg2Cl", "D. MgCl3"],
      answer: "B",
      explanation: "Magnesium chloride is MgCl2.",
      subtopic: "Compounds of metals"
    }
  ],
  practical: [
    {
      question: "Which apparatus is used to measure the volume of a liquid accurately?",
      options: ["A. Beaker", "B. Measuring cylinder", "C. Burette", "D. Conical flask"],
      answer: "C",
      explanation: "A burette is used for accurate measurement of liquid volume in titrations.",
      subtopic: "Apparatus"
    },
    {
      question: "Which of the following is used to measure mass in the laboratory?",
      options: ["A. Thermometer", "B. Balance", "C. Burette", "D. Pipette"],
      answer: "B",
      explanation: "A balance (electronic or triple-beam) is used to measure mass.",
      subtopic: "Apparatus"
    },
    {
      question: "A pipette is used to:",
      options: ["A. Measure a fixed volume of liquid accurately", "B. Measure varying volumes of liquid", "C. Heat liquids", "D. Stir solutions"],
      answer: "A",
      explanation: "A pipette delivers a fixed, accurate volume of liquid (e.g., 25.00 cm³).",
      subtopic: "Apparatus"
    },
    {
      question: "A burette is used in titrations to:",
      options: ["A. Measure the volume of the analyte", "B. Measure the volume of the titrant delivered", "C. Heat the solution", "D. Stir the solution"],
      answer: "B",
      explanation: "A burette delivers and measures the volume of titrant added during a titration.",
      subtopic: "Titration"
    },
    {
      question: "Which of the following is a safety rule in the laboratory?",
      options: ["A. Eat and drink in the lab", "B. Wear safety goggles", "C. Wear sandals", "D. Use chemicals without labels"],
      answer: "B",
      explanation: "Safety goggles protect the eyes from chemical splashes.",
      subtopic: "Safety"
    },
    {
      question: "In case of an acid spill on the skin, the first step is to:",
      options: ["A. Apply an alkali", "B. Wash with plenty of water", "C. Apply oil", "D. Ignore it"],
      answer: "B",
      explanation: "Immediately wash acid spills with plenty of water to dilute and remove the acid.",
      subtopic: "Safety"
    },
    {
      question: "Which of the following is a primary standard for acid-base titrations?",
      options: ["A. NaOH", "B. HCl", "C. Na2CO3", "D. H2SO4"],
      answer: "C",
      explanation: "Anhydrous sodium carbonate (Na2CO3) is a primary standard.",
      subtopic: "Primary standards"
    },
    {
      question: "Which of the following is NOT a primary standard?",
      options: ["A. Na2CO3", "B. (COOH)2·2H2O", "C. NaOH", "D. KHP"],
      answer: "C",
      explanation: "NaOH is not a primary standard because it absorbs moisture and CO2 from the air.",
      subtopic: "Primary standards"
    },
    {
      question: "The indicator used for a strong acid-strong base titration is:",
      options: ["A. Methyl orange only", "B. Phenolphthalein only", "C. Either methyl orange or phenolphthalein", "D. Litmus"],
      answer: "C",
      explanation: "Both methyl orange and phenolphthalein can be used in strong acid-strong base titrations.",
      subtopic: "Titration"
    },
    {
      question: "The indicator used for a weak acid-strong base titration is:",
      options: ["A. Methyl orange", "B. Phenolphthalein", "C. Litmus", "D. Bromothymol blue"],
      answer: "B",
      explanation: "Phenolphthalein is suitable for weak acid-strong base titrations.",
      subtopic: "Titration"
    },
    {
      question: "The indicator used for a strong acid-weak base titration is:",
      options: ["A. Methyl orange", "B. Phenolphthalein", "C. Litmus", "D. Universal indicator"],
      answer: "A",
      explanation: "Methyl orange is suitable for strong acid-weak base titrations.",
      subtopic: "Titration"
    },
    {
      question: "The colour of phenolphthalein in acidic solution is:",
      options: ["A. Pink", "B. Colourless", "C. Red", "D. Blue"],
      answer: "B",
      explanation: "Phenolphthalein is colourless in acidic solution and pink in basic solution.",
      subtopic: "Indicators"
    },
    {
      question: "The colour of methyl orange in acidic solution is:",
      options: ["A. Yellow", "B. Pink", "C. Red", "D. Colourless"],
      answer: "C",
      explanation: "Methyl orange is red in acidic solution and yellow in basic solution.",
      subtopic: "Indicators"
    },
    {
      question: "The colour of methyl orange in basic solution is:",
      options: ["A. Red", "B. Yellow", "C. Pink", "D. Colourless"],
      answer: "B",
      explanation: "Methyl orange is yellow in basic solution.",
      subtopic: "Indicators"
    },
    {
      question: "The colour of phenolphthalein in basic solution is:",
      options: ["A. Colourless", "B. Pink", "C. Red", "D. Blue"],
      answer: "B",
      explanation: "Phenolphthalein is pink in basic solution.",
      subtopic: "Indicators"
    },
    {
      question: "What is the correct reading of a burette?",
      options: ["A. Top of the meniscus", "B. Bottom of the meniscus", "C. Middle of the meniscus", "D. Anywhere on the meniscus"],
      answer: "B",
      explanation: "The bottom of the meniscus is read for transparent liquids in a burette.",
      subtopic: "Apparatus"
    },
    {
      question: "Which of the following is used to heat substances in the laboratory?",
      options: ["A. Bunsen burner", "B. Tripod stand", "C. Wire gauze", "D. All of the above"],
      answer: "D",
      explanation: "A Bunsen burner, tripod stand, and wire gauze are all used for heating.",
      subtopic: "Apparatus"
    },
    {
      question: "A desiccator is used to:",
      options: ["A. Dry substances", "B. Heat substances", "C. Measure volume", "D. Filter substances"],
      answer: "A",
      explanation: "A desiccator is used to keep substances dry by removing moisture.",
      subtopic: "Apparatus"
    },
    {
      question: "A drying agent used in a desiccator is:",
      options: ["A. NaOH", "B. HCl", "C. CaCl2", "D. NaCl"],
      answer: "C",
      explanation: "Anhydrous calcium chloride (CaCl2) is a common drying agent in desiccators.",
      subtopic: "Drying agents"
    },
    {
      question: "The test for hydrogen gas is:",
      options: ["A. It rekindles a glowing splint", "B. It forms a white precipitate with limewater", "C. It gives a pop sound with a burning splint", "D. It turns limewater milky"],
      answer: "C",
      explanation: "Hydrogen gas gives a characteristic 'pop' sound with a burning splint.",
      subtopic: "Tests for gases"
    },
    {
      question: "The test for oxygen gas is:",
      options: ["A. It rekindles a glowing splint", "B. It gives a pop sound", "C. It turns limewater milky", "D. It bleaches litmus paper"],
      answer: "A",
      explanation: "Oxygen rekindles a glowing splint.",
      subtopic: "Tests for gases"
    },
    {
      question: "The test for carbon dioxide gas is:",
      options: ["A. It rekindles a glowing splint", "B. It gives a pop sound", "C. It turns limewater milky", "D. It has a pungent smell"],
      answer: "C",
      explanation: "CO2 turns limewater (Ca(OH)2) milky due to formation of CaCO3.",
      subtopic: "Tests for gases"
    },
    {
      question: "The test for ammonia gas is:",
      options: ["A. It rekindles a glowing splint", "B. It gives a pop sound", "C. It turns damp red litmus paper blue", "D. It turns limewater milky"],
      answer: "C",
      explanation: "Ammonia gas is basic and turns damp red litmus paper blue.",
      subtopic: "Tests for gases"
    },
    {
      question: "The test for chlorine gas is:",
      options: ["A. It rekindles a glowing splint", "B. It turns damp blue litmus paper red then bleaches it", "C. It gives a pop sound", "D. It turns limewater milky"],
      answer: "B",
      explanation: "Chlorine is acidic and bleaching — it turns blue litmus red then bleaches it.",
      subtopic: "Tests for gases"
    },
    {
      question: "The test for sulfur dioxide gas is:",
      options: ["A. It rekindles a glowing splint", "B. It turns acidified potassium dichromate from orange to green", "C. It gives a pop sound", "D. It bleaches litmus"],
      answer: "B",
      explanation: "SO2 reduces orange potassium dichromate (Cr2O7²⁻) to green Cr³⁺.",
      subtopic: "Tests for gases"
    },
    {
      question: "Which of the following is a test for chloride ions?",
      options: ["A. Acidified AgNO3 gives a white precipitate", "B. Acidified AgNO3 gives a cream precipitate", "C. Acidified AgNO3 gives a yellow precipitate", "D. No reaction with AgNO3"],
      answer: "A",
      explanation: "Cl⁻ + Ag⁺ → AgCl (white precipitate), soluble in dilute NH3.",
      subtopic: "Qualitative analysis"
    },
    {
      question: "Which of the following is a test for bromide ions?",
      options: ["A. Acidified AgNO3 gives a white precipitate", "B. Acidified AgNO3 gives a cream precipitate", "C. Acidified AgNO3 gives a yellow precipitate", "D. No reaction with AgNO3"],
      answer: "B",
      explanation: "Br⁻ + Ag⁺ → AgBr (cream precipitate), soluble in concentrated NH3.",
      subtopic: "Qualitative analysis"
    },
    {
      question: "Which of the following is a test for iodide ions?",
      options: ["A. Acidified AgNO3 gives a white precipitate", "B. Acidified AgNO3 gives a cream precipitate", "C. Acidified AgNO3 gives a yellow precipitate", "D. No reaction with AgNO3"],
      answer: "C",
      explanation: "I⁻ + Ag⁺ → AgI (yellow precipitate), insoluble in NH3.",
      subtopic: "Qualitative analysis"
    },
    {
      question: "Which of the following is a test for sulfate ions?",
      options: ["A. Acidified BaCl2 gives a white precipitate", "B. Acidified BaCl2 gives a cream precipitate", "C. Acidified BaCl2 gives a yellow precipitate", "D. No reaction with BaCl2"],
      answer: "A",
      explanation: "SO4²⁻ + Ba²⁺ → BaSO4 (white precipitate), insoluble in acid.",
      subtopic: "Qualitative analysis"
    },
    {
      question: "Which of the following is a test for carbonate ions?",
      options: ["A. Gives effervescence with dilute acid producing CO2", "B. Gives a yellow precipitate with AgNO3", "C. Gives a white precipitate with BaCl2", "D. Gives no reaction with acid"],
      answer: "A",
      explanation: "Carbonates react with dilute acid to produce CO2 (effervescence).",
      subtopic: "Qualitative analysis"
    },
    {
      question: "The gas produced when a carbonate reacts with dilute acid is:",
      options: ["A. Hydrogen", "B. Oxygen", "C. Carbon dioxide", "D. Chlorine"],
      answer: "C",
      explanation: "Carbonates + acid → salt + water + CO2.",
      subtopic: "Qualitative analysis"
    },
    {
      question: "Which of the following cations gives a blue precipitate with NaOH?",
      options: ["A. Fe²⁺", "B. Fe³⁺", "C. Cu²⁺", "D. Zn²⁺"],
      answer: "C",
      explanation: "Cu²⁺ + 2OH⁻ → Cu(OH)2 (blue precipitate).",
      subtopic: "Qualitative analysis"
    },
    {
      question: "Which of the following cations gives a green precipitate with NaOH?",
      options: ["A. Fe²⁺", "B. Fe³⁺", "C. Cu²⁺", "D. Zn²⁺"],
      answer: "A",
      explanation: "Fe²⁺ + 2OH⁻ → Fe(OH)2 (green precipitate).",
      subtopic: "Qualitative analysis"
    },
    {
      question: "Which of the following cations gives a brown precipitate with NaOH?",
      options: ["A. Fe²⁺", "B. Fe³⁺", "C. Cu²⁺", "D. Zn²⁺"],
      answer: "B",
      explanation: "Fe³⁺ + 3OH⁻ → Fe(OH)3 (brown precipitate).",
      subtopic: "Qualitative analysis"
    },
    {
      question: "Which of the following cations gives a white precipitate with NaOH that dissolves in excess NaOH?",
      options: ["A. Fe²⁺", "B. Fe³⁺", "C. Cu²⁺", "D. Zn²⁺"],
      answer: "D",
      explanation: "Zn²⁺ + 2OH⁻ → Zn(OH)2 (white), soluble in excess NaOH.",
      subtopic: "Qualitative analysis"
    },
    {
      question: "Which of the following cations gives a white precipitate with NaOH that does NOT dissolve in excess NaOH?",
      options: ["A. Zn²⁺", "B. Cu²⁺", "C. Mg²⁺", "D. Pb²⁺"],
      answer: "C",
      explanation: "Mg²⁺ + 2OH⁻ → Mg(OH)2 (white), insoluble in excess NaOH.",
      subtopic: "Qualitative analysis"
    },
    {
      question: "Which of the following cations gives a white precipitate with NH3 that is soluble in excess NH3?",
      options: ["A. Zn²⁺", "B. Cu²⁺", "C. Fe²⁺", "D. Fe³⁺"],
      answer: "A",
      explanation: "Zn²⁺ + 4NH3 → [Zn(NH3)4]²⁺ (soluble complex) — amphoteric behavior.",
      subtopic: "Qualitative analysis"
    },
    {
      question: "Which of the following is a test for alkenes?",
      options: ["A. Decolorizes bromine water", "B. Reacts with sodium metal", "C. Turns limewater milky", "D. Gives a pop sound"],
      answer: "A",
      explanation: "Alkenes decolorize bromine water due to addition reaction at the C=C bond.",
      subtopic: "Tests for organic compounds"
    },
    {
      question: "Which of the following is a test for alkanols (alcohols)?",
      options: ["A. Decolorizes bromine water", "B. Reacts with sodium metal to produce hydrogen", "C. Turns limewater milky", "D. Gives a pop sound"],
      answer: "B",
      explanation: "Alcohols react with sodium metal to produce hydrogen gas.",
      subtopic: "Tests for organic compounds"
    },
    {
      question: "Which of the following is a test for alkanoic acids (carboxylic acids)?",
      options: ["A. Decolorizes bromine water", "B. Reacts with sodium metal", "C. Effervescence with NaHCO3", "D. Gives a pop sound"],
      answer: "C",
      explanation: "Carboxylic acids react with NaHCO3 to produce CO2 (effervescence).",
      subtopic: "Tests for organic compounds"
    },
    {
      question: "Which of the following is a test for reducing sugars?",
      options: ["A. Biuret test", "B. Iodine test", "C. Fehling's test", "D. Millon's test"],
      answer: "C",
      explanation: "Reducing sugars give a brick-red precipitate with Fehling's solution.",
      subtopic: "Tests for organic compounds"
    },
    {
      question: "Which of the following is a test for starch?",
      options: ["A. Biuret test", "B. Iodine test", "C. Fehling's test", "D. Millon's test"],
      answer: "B",
      explanation: "Iodine gives a blue-black colour with starch.",
      subtopic: "Tests for organic compounds"
    },
    {
      question: "Which of the following is a test for proteins?",
      options: ["A. Biuret test", "B. Iodine test", "C. Fehling's test", "D. Benedict's test"],
      answer: "A",
      explanation: "The Biuret test gives a violet/purple colour with proteins.",
      subtopic: "Tests for organic compounds"
    },
    {
      question: "The Biuret test is positive for:",
      options: ["A. Carbohydrates", "B. Proteins", "C. Fats", "D. Nucleic acids"],
      answer: "B",
      explanation: "The Biuret test detects peptide bonds in proteins.",
      subtopic: "Tests for organic compounds"
    },
    {
      question: "Which of the following is used to separate mixtures in the laboratory?",
      options: ["A. Filtration", "B. Distillation", "C. Chromatography", "D. All of the above"],
      answer: "D",
      explanation: "Filtration, distillation, and chromatography are all separation techniques.",
      subtopic: "Separation techniques"
    },
    {
      question: "Recrystallization is used to:",
      options: ["A. Purify solids", "B. Purify liquids", "C. Separate gases", "D. Identify gases"],
      answer: "A",
      explanation: "Recrystallization is used to purify solid compounds.",
      subtopic: "Separation techniques"
    },
    {
      question: "A melting point determination is used to:",
      options: ["A. Identify a substance", "B. Check purity of a substance", "C. Both A and B", "D. Measure mass"],
      answer: "C",
      explanation: "Melting point can identify a substance and indicate its purity.",
      subtopic: "Practical skills"
    },
    {
      question: "The presence of an impurity in a solid will:",
      options: ["A. Lower the melting point", "B. Raise the melting point", "C. Have no effect on melting point", "D. Make the melting point sharp"],
      answer: "A",
      explanation: "Impurities lower the melting point and broaden the melting point range.",
      subtopic: "Practical skills"
    },
    {
      question: "A burette reading should be taken to the nearest:",
      options: ["A. 1 cm³", "B. 0.1 cm³", "C. 0.01 cm³", "D. 10 cm³"],
      answer: "B",
      explanation: "Burette readings are taken to the nearest 0.1 cm³ (or 0.05 cm³).",
      subtopic: "Apparatus"
    },
    {
      question: "The volume of a pipette is usually:",
      options: ["A. 10.00 cm³", "B. 25.00 cm³", "C. 50.00 cm³", "D. Any of the above"],
      answer: "D",
      explanation: "Pipettes come in various fixed volumes (10, 20, 25, 50 cm³ etc.).",
      subtopic: "Apparatus"
    },
    {
      question: "The molarity of a solution is expressed as:",
      options: ["A. g/dm³", "B. mol/dm³", "C. g/mol", "D. cm³/mol"],
      answer: "B",
      explanation: "Molarity is the number of moles of solute per dm³ of solution (mol/dm³).",
      subtopic: "Quantitative analysis"
    },
    {
      question: "The concentration of a solution in g/dm³ is calculated as:",
      options: ["A. Mass of solute (g) ÷ Volume of solution (dm³)", "B. Moles of solute ÷ Volume of solution (dm³)", "C. Mass of solute × Volume of solution", "D. Moles of solute × Volume of solution"],
      answer: "A",
      explanation: "Concentration (g/dm³) = mass (g) ÷ volume (dm³).",
      subtopic: "Quantitative analysis"
    }
  ],
};

export default QUESTIONS;
