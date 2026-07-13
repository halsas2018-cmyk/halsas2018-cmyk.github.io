const acids = [
  {
    "question": "According to Arrhenius, an acid is a substance that produces which ion in water?",
    "options": [
      "A. H+ (or H3O+)",
      "B. OH-",
      "C. Na+",
      "D. Cl-"
    ],
    "answer": "A",
    "explanation": "Arrhenius defined an acid as a substance that produces hydrogen ions (H+) or hydronium ions (H3O+) in aqueous solution.",
    "subtopic": "Arrhenius Theory"
  },
  {
    "question": "According to Arrhenius, a base is a substance that produces which ion in water?",
    "options": [
      "A. H+",
      "B. OH-",
      "C. Na+",
      "D. SO4^2-"
    ],
    "answer": "B",
    "explanation": "Arrhenius defined a base as a substance that produces hydroxide ions (OH-) in aqueous solution.",
    "subtopic": "Arrhenius Theory"
  },
  {
    "question": "Which of the following is an example of a strong acid?",
    "options": [
      "A. Acetic acid",
      "B. Carbonic acid",
      "C. Hydrochloric acid",
      "D. Citric acid"
    ],
    "answer": "C",
    "explanation": "Hydrochloric acid (HCl) is a strong acid because it completely dissociates in water. Acetic acid is weak, carbonic acid is weak, and citric acid is weak.",
    "subtopic": "Strong vs Weak Acids"
  },
  {
    "question": "Which of the following is a weak acid?",
    "options": [
      "A. Nitric acid",
      "B. Sulphuric acid",
      "C. Ethanoic acid (acetic acid)",
      "D. Hydrochloric acid"
    ],
    "answer": "C",
    "explanation": "Ethanoic acid (CH3COOH) is a weak acid because it only partially dissociates in water. Nitric, sulphuric, and hydrochloric are strong acids.",
    "subtopic": "Strong vs Weak Acids"
  },
  {
    "question": "A solution with pH = 3 is considered:",
    "options": [
      "A. Strongly acidic",
      "B. Weakly acidic",
      "C. Neutral",
      "D. Strongly basic"
    ],
    "answer": "A",
    "explanation": "pH values below 7 are acidic. The lower the pH, the more acidic. pH=3 is strongly acidic (higher H+ concentration).",
    "subtopic": "pH Scale"
  },
  {
    "question": "A solution with pH = 10 is considered:",
    "options": [
      "A. Strongly acidic",
      "B. Weakly acidic",
      "C. Neutral",
      "D. Basic (alkaline)"
    ],
    "answer": "D",
    "explanation": "pH values above 7 are basic. pH=10 is basic (alkaline). The higher the pH, the more basic.",
    "subtopic": "pH Scale"
  },
  {
    "question": "What is the pH of a neutral solution at 25°C?",
    "options": [
      "A. 0",
      "B. 7",
      "C. 14",
      "D. 10"
    ],
    "answer": "B",
    "explanation": "At 25°C, a neutral solution has pH = 7, meaning [H+] = [OH-] = 10^-7 mol/dm³.",
    "subtopic": "pH Scale"
  },
  {
    "question": "Which indicator turns red in acidic solution and blue in basic solution?",
    "options": [
      "A. Methyl orange",
      "B. Phenolphthalein",
      "C. Litmus",
      "D. Universal indicator"
    ],
    "answer": "C",
    "explanation": "Litmus is red in acidic solution and blue in basic solution. Methyl orange is red in acid and yellow in base; phenolphthalein is colourless in acid and pink in base.",
    "subtopic": "Acid-Base Indicators"
  },
  {
    "question": "What colour does phenolphthalein turn in a basic solution?",
    "options": [
      "A. Red",
      "B. Yellow",
      "C. Pink (or magenta)",
      "D. Colourless"
    ],
    "answer": "C",
    "explanation": "Phenolphthalein is colourless in acidic solutions but turns pink (magenta) in basic solutions (pH > 8.2).",
    "subtopic": "Acid-Base Indicators"
  },
  {
    "question": "What colour does methyl orange turn in acidic solution?",
    "options": [
      "A. Red",
      "B. Yellow",
      "C. Pink",
      "D. Blue"
    ],
    "answer": "A",
    "explanation": "Methyl orange is red in acidic solution (pH < 3.1) and yellow in basic solution (pH > 4.4).",
    "subtopic": "Acid-Base Indicators"
  },
  {
    "question": "A salt is formed by the reaction between an acid and a base. This reaction is called:",
    "options": [
      "A. Neutralisation",
      "B. Oxidation",
      "C. Reduction",
      "D. Precipitation"
    ],
    "answer": "A",
    "explanation": "Neutralisation is the reaction between an acid and a base to produce salt and water.",
    "subtopic": "Neutralisation"
  },
  {
    "question": "What are the products of a neutralisation reaction between hydrochloric acid and sodium hydroxide?",
    "options": [
      "A. NaCl and H2O",
      "B. NaCl and CO2",
      "C. HCl and NaOH",
      "D. NaH and ClO"
    ],
    "answer": "A",
    "explanation": "HCl + NaOH → NaCl + H2O. Salt (sodium chloride) and water are formed.",
    "subtopic": "Neutralisation"
  },
  {
    "question": "Which of the following is a normal salt?",
    "options": [
      "A. NaHCO3",
      "B. Na2CO3",
      "C. NaHSO4",
      "D. Ca(OH)Cl"
    ],
    "answer": "B",
    "explanation": "A normal salt is formed when all the replaceable hydrogen ions of an acid are replaced by metal ions. Na2CO3 is a normal salt; NaHCO3 is an acidic salt (hydrogen carbonate).",
    "subtopic": "Types of Salts"
  },
  {
    "question": "Which of the following is an acidic salt?",
    "options": [
      "A. NaCl",
      "B. Na2SO4",
      "C. NaHCO3",
      "D. KNO3"
    ],
    "answer": "C",
    "explanation": "An acidic salt still has replaceable hydrogen ions from the acid. NaHCO3 (sodium hydrogen carbonate) is an acidic salt because it contains H+ that can be neutralised.",
    "subtopic": "Types of Salts"
  },
  {
    "question": "Which of the following is a basic salt?",
    "options": [
      "A. NaCl",
      "B. Cu2(OH)2CO3",
      "C. Na2CO3",
      "D. KCl"
    ],
    "answer": "B",
    "explanation": "A basic salt contains hydroxide ions. Copper(II) carbonate hydroxide (basic copper carbonate) is a basic salt.",
    "subtopic": "Types of Salts"
  },
  {
    "question": "What is hydrolysis of a salt?",
    "options": [
      "A. Reaction of a salt with water to produce an acidic or basic solution",
      "B. Decomposition of a salt by heat",
      "C. Neutralisation of a salt",
      "D. Precipitation of a salt"
    ],
    "answer": "A",
    "explanation": "Hydrolysis is the reaction of ions from a salt with water, which can make the solution acidic, basic, or neutral depending on the salt.",
    "subtopic": "Salt Hydrolysis"
  },
  {
    "question": "A solution of sodium carbonate (Na2CO3) in water will be:",
    "options": [
      "A. Acidic",
      "B. Basic (alkaline)",
      "C. Neutral",
      "D. Highly acidic"
    ],
    "answer": "B",
    "explanation": "Na2CO3 is a salt of a strong base (NaOH) and a weak acid (H2CO3). Its aqueous solution is basic due to hydrolysis of carbonate ions.",
    "subtopic": "Salt Hydrolysis"
  },
  {
    "question": "A solution of ammonium chloride (NH4Cl) in water will be:",
    "options": [
      "A. Acidic",
      "B. Basic",
      "C. Neutral",
      "D. Highly basic"
    ],
    "answer": "A",
    "explanation": "NH4Cl is a salt of a weak base (NH3) and a strong acid (HCl). Its aqueous solution is acidic due to hydrolysis of ammonium ions.",
    "subtopic": "Salt Hydrolysis"
  },
  {
    "question": "Which of the following salts will give a neutral solution when dissolved in water?",
    "options": [
      "A. NaCl",
      "B. Na2CO3",
      "C. NH4Cl",
      "D. CH3COONa"
    ],
    "answer": "A",
    "explanation": "NaCl is a salt of a strong acid (HCl) and a strong base (NaOH). It does not hydrolyse, so its solution is neutral.",
    "subtopic": "Salt Hydrolysis"
  },
  {
    "question": "What is the pH range of a buffer solution?",
    "options": [
      "A. It resists changes in pH when small amounts of acid or base are added",
      "B. It always has pH 7",
      "C. It has pH less than 0",
      "D. It has pH greater than 14"
    ],
    "answer": "A",
    "explanation": "A buffer solution is one that resists change in pH upon addition of small amounts of acid or base. It typically consists of a weak acid and its salt or a weak base and its salt.",
    "subtopic": "Buffer Solutions"
  },
  {
    "question": "Which of the following is a buffer system?",
    "options": [
      "A. NaCl and HCl",
      "B. NaOH and NaCl",
      "C. CH3COOH and CH3COONa",
      "D. HCl and NaOH"
    ],
    "answer": "C",
    "explanation": "A buffer consists of a weak acid and its salt (e.g., acetic acid and sodium acetate) or a weak base and its salt. This mixture resists pH changes.",
    "subtopic": "Buffer Solutions"
  },
  {
    "question": "What is the solubility product (Ksp) of a sparingly soluble salt?",
    "options": [
      "A. The product of the concentrations of its ions in a saturated solution",
      "B. The mass of salt that dissolves in 1 dm³ of water",
      "C. The pH of a saturated solution",
      "D. The conductivity of the solution"
    ],
    "answer": "A",
    "explanation": "Ksp is the product of the concentrations (raised to their stoichiometric coefficients) of the ions in a saturated solution at equilibrium.",
    "subtopic": "Solubility Product"
  },
  {
    "question": "Which of the following salts is sparingly soluble?",
    "options": [
      "A. NaCl",
      "B. KNO3",
      "C. BaSO4",
      "D. NH4Cl"
    ],
    "answer": "C",
    "explanation": "Barium sulfate (BaSO4) is sparingly soluble in water. The others are soluble. Solubility rules state that sulfates are soluble except those of Ba, Pb, and Ca (slightly).",
    "subtopic": "Solubility Rules"
  },
  {
    "question": "According to solubility rules, all nitrates are:",
    "options": [
      "A. Soluble",
      "B. Insoluble",
      "C. Slightly soluble",
      "D. None of the above"
    ],
    "answer": "A",
    "explanation": "All nitrates (NO3-) are soluble in water, regardless of the cation.",
    "subtopic": "Solubility Rules"
  },
  {
    "question": "Which of the following anions forms insoluble salts with most cations?",
    "options": [
      "A. Chloride",
      "B. Nitrate",
      "C. Carbonate",
      "D. Acetate"
    ],
    "answer": "C",
    "explanation": "Carbonates are generally insoluble except for group 1 metals and ammonium. Chlorides are soluble except Ag+, Pb2+, Hg2^2+; nitrates are all soluble; acetates are soluble.",
    "subtopic": "Solubility Rules"
  },
  {
    "question": "What is the correct formula of the salt formed from hydrochloric acid and calcium hydroxide?",
    "options": [
      "A. CaCl",
      "B. CaCl2",
      "C. CaClH",
      "D. Ca(OH)Cl"
    ],
    "answer": "B",
    "explanation": "2HCl + Ca(OH)2 → CaCl2 + 2H2O. Calcium has valency 2, so calcium chloride is CaCl2.",
    "subtopic": "Salt Formation"
  },
  {
    "question": "What is the correct formula of the salt formed from sulphuric acid and sodium hydroxide?",
    "options": [
      "A. NaSO4",
      "B. Na2SO4",
      "C. NaSO3",
      "D. Na2SO3"
    ],
    "answer": "B",
    "explanation": "H2SO4 + 2NaOH → Na2SO4 + 2H2O. Sodium sulphate is Na2SO4.",
    "subtopic": "Salt Formation"
  },
  {
    "question": "What is the correct formula of the salt formed from nitric acid and potassium hydroxide?",
    "options": [
      "A. KNO2",
      "B. KNO3",
      "C. K2NO3",
      "D. KNO4"
    ],
    "answer": "B",
    "explanation": "HNO3 + KOH → KNO3 + H2O. Potassium nitrate is KNO3.",
    "subtopic": "Salt Formation"
  },
  {
    "question": "Which of the following is a use of sodium hydrogen carbonate (NaHCO3)?",
    "options": [
      "A. As a baking powder",
      "B. As a bleaching agent",
      "C. As a strong acid",
      "D. As a fuel"
    ],
    "answer": "A",
    "explanation": "Sodium hydrogen carbonate (baking soda) is used in baking powders to produce CO2 and cause dough to rise.",
    "subtopic": "Uses of Salts"
  },
  {
    "question": "What is the common name of sodium chloride?",
    "options": [
      "A. Caustic soda",
      "B. Baking soda",
      "C. Table salt",
      "D. Washing soda"
    ],
    "answer": "C",
    "explanation": "Sodium chloride is common table salt. Caustic soda is NaOH, baking soda is NaHCO3, washing soda is Na2CO3.",
    "subtopic": "Common Salts"
  },
  {
    "question": "What is the common name of NaOH?",
    "options": [
      "A. Caustic soda",
      "B. Baking soda",
      "C. Common salt",
      "D. Washing soda"
    ],
    "answer": "A",
    "explanation": "NaOH is sodium hydroxide, also known as caustic soda or lye.",
    "subtopic": "Common Bases"
  },
  {
    "question": "What is the common name of Na2CO3?",
    "options": [
      "A. Caustic soda",
      "B. Baking soda",
      "C. Washing soda",
      "D. Common salt"
    ],
    "answer": "C",
    "explanation": "Na2CO3 is sodium carbonate, commonly known as washing soda or soda ash.",
    "subtopic": "Common Salts"
  },
  {
    "question": "What is the common name of Ca(OH)2?",
    "options": [
      "A. Slaked lime",
      "B. Quicklime",
      "C. Limestone",
      "D. Gypsum"
    ],
    "answer": "A",
    "explanation": "Ca(OH)2 is calcium hydroxide, known as slaked lime. Quicklime is CaO, limestone is CaCO3, gypsum is CaSO4·2H2O.",
    "subtopic": "Common Bases"
  },
  {
    "question": "What is the common name of CaCO3?",
    "options": [
      "A. Limestone",
      "B. Quicklime",
      "C. Slaked lime",
      "D. Gypsum"
    ],
    "answer": "A",
    "explanation": "CaCO3 is calcium carbonate, found as limestone, chalk, and marble.",
    "subtopic": "Common Salts"
  },
  {
    "question": "What is the pH of a 0.1 mol/dm³ solution of a strong acid?",
    "options": [
      "A. 1",
      "B. 7",
      "C. 13",
      "D. 14"
    ],
    "answer": "A",
    "explanation": "For a strong acid like HCl, pH = -log(0.1) = 1. Strong acids dissociate completely, so [H+] = concentration of acid.",
    "subtopic": "pH Calculations"
  },
  {
    "question": "What is the pH of a 0.01 mol/dm³ solution of NaOH (strong base)?",
    "options": [
      "A. 2",
      "B. 10",
      "C. 12",
      "D. 14"
    ],
    "answer": "C",
    "explanation": "[OH-] = 0.01 = 10^-2, pOH = 2, pH = 14 - 2 = 12. NaOH dissociates completely.",
    "subtopic": "pH Calculations"
  },
  {
    "question": "A titration is used to determine the concentration of an acid or base. What equipment is used to measure the volume of acid added?",
    "options": [
      "A. Pipette",
      "B. Burette",
      "C. Conical flask",
      "D. Measuring cylinder"
    ],
    "answer": "B",
    "explanation": "In a titration, the burette is used to add the acid (or base) dropwise and measure the volume accurately. The pipette delivers a fixed volume of the analyte.",
    "subtopic": "Acid-Base Titration"
  },
  {
    "question": "In an acid-base titration, what indicator is suitable for a strong acid vs strong base titration?",
    "options": [
      "A. Phenolphthalein",
      "B. Methyl orange",
      "C. Either phenolphthalein or methyl orange",
      "D. Litmus"
    ],
    "answer": "C",
    "explanation": "For strong acid vs strong base, the endpoint pH change is sharp and occurs at pH 7. Both phenolphthalein (pH 8.2-10) and methyl orange (pH 3.1-4.4) can work, but phenolphthalein is often preferred.",
    "subtopic": "Acid-Base Titration"
  },
  {
    "question": "In a titration of a strong acid with a weak base, which indicator is suitable?",
    "options": [
      "A. Phenolphthalein",
      "B. Methyl orange",
      "C. Litmus",
      "D. Universal indicator"
    ],
    "answer": "B",
    "explanation": "For strong acid vs weak base, the equivalence point is acidic (pH < 7). Methyl orange (colour change around pH 3-4) is suitable; phenolphthalein would change after the equivalence point.",
    "subtopic": "Acid-Base Titration"
  },
  {
    "question": "In a titration of a weak acid with a strong base, which indicator is suitable?",
    "options": [
      "A. Methyl orange",
      "B. Phenolphthalein",
      "C. Litmus",
      "D. Bromothymol blue"
    ],
    "answer": "B",
    "explanation": "For weak acid vs strong base, the equivalence point is basic (pH > 7). Phenolphthalein (pH 8.2-10) is suitable; methyl orange changes in acidic range.",
    "subtopic": "Acid-Base Titration"
  },
  {
    "question": "What is the mole ratio of HCl to NaOH in the neutralisation reaction?",
    "options": [
      "A. 1:1",
      "B. 2:1",
      "C. 1:2",
      "D. 3:1"
    ],
    "answer": "A",
    "explanation": "HCl + NaOH → NaCl + H2O. The balanced equation shows a 1:1 mole ratio between HCl and NaOH.",
    "subtopic": "Stoichiometry of Neutralisation"
  },
  {
    "question": "What is the mole ratio of H2SO4 to NaOH in the neutralisation reaction?",
    "options": [
      "A. 1:1",
      "B. 2:1",
      "C. 1:2",
      "D. 3:2"
    ],
    "answer": "C",
    "explanation": "H2SO4 + 2NaOH → Na2SO4 + 2H2O. The mole ratio of H2SO4 to NaOH is 1:2.",
    "subtopic": "Stoichiometry of Neutralisation"
  },
  {
    "question": "What is the conjugate acid of NH3?",
    "options": [
      "A. NH2-",
      "B. NH4+",
      "C. N3-",
      "D. NH3OH"
    ],
    "answer": "B",
    "explanation": "According to Bronsted-Lowry, a conjugate acid is formed when a base gains a proton. NH3 + H+ → NH4+. So NH4+ is the conjugate acid of NH3.",
    "subtopic": "Bronsted-Lowry Theory"
  },
  {
    "question": "What is the conjugate base of HCl?",
    "options": [
      "A. Cl-",
      "B. HClO4",
      "C. H2Cl+",
      "D. Cl2"
    ],
    "answer": "A",
    "explanation": "A conjugate base is formed when an acid loses a proton. HCl → H+ + Cl-. So Cl- is the conjugate base of HCl.",
    "subtopic": "Bronsted-Lowry Theory"
  },
  {
    "question": "In the reaction: H2O + NH3 ⇌ NH4+ + OH-, which species is the acid?",
    "options": [
      "A. H2O",
      "B. NH3",
      "C. NH4+",
      "D. OH-"
    ],
    "answer": "A",
    "explanation": "H2O donates a proton to NH3, so H2O acts as an acid (proton donor) and NH3 acts as a base (proton acceptor).",
    "subtopic": "Bronsted-Lowry Theory"
  },
  {
    "question": "Which of the following is a Lewis acid?",
    "options": [
      "A. NH3",
      "B. BF3",
      "C. H2O",
      "D. OH-"
    ],
    "answer": "B",
    "explanation": "A Lewis acid is an electron pair acceptor. BF3 has an incomplete octet and can accept a lone pair, so it is a Lewis acid. NH3, H2O, and OH- are Lewis bases (electron pair donors).",
    "subtopic": "Lewis Theory"
  },
  {
    "question": "Which of the following is a Lewis base?",
    "options": [
      "A. AlCl3",
      "B. BF3",
      "C. NH3",
      "D. H+"
    ],
    "answer": "C",
    "explanation": "A Lewis base is an electron pair donor. NH3 has a lone pair on nitrogen and can donate it, so it is a Lewis base. AlCl3, BF3, and H+ are Lewis acids (acceptors).",
    "subtopic": "Lewis Theory"
  },
  {
    "question": "What is the effect of dilution on the pH of an acidic solution?",
    "options": [
      "A. pH increases (becomes less acidic)",
      "B. pH decreases (becomes more acidic)",
      "C. pH remains the same",
      "D. pH becomes 7"
    ],
    "answer": "A",
    "explanation": "Dilution decreases the concentration of H+ ions, so the pH increases (the solution becomes less acidic).",
    "subtopic": "pH and Dilution"
  },
  {
    "question": "What is the effect of dilution on the pH of a basic solution?",
    "options": [
      "A. pH increases (becomes more basic)",
      "B. pH decreases (becomes less basic)",
      "C. pH remains the same",
      "D. pH becomes 7"
    ],
    "answer": "B",
    "explanation": "Dilution decreases the concentration of OH- ions, so the pH decreases (the solution becomes less basic and moves toward neutral).",
    "subtopic": "pH and Dilution"
  },
  {
    "question": "Which of the following salts is used in the manufacture of soap?",
    "options": [
      "A. NaCl",
      "B. Na2CO3",
      "C. Sodium stearate (from saponification)",
      "D. CaCO3"
    ],
    "answer": "C",
    "explanation": "Soaps are sodium or potassium salts of long-chain fatty acids. Sodium stearate is a common soap ingredient produced by saponification of fats with NaOH.",
    "subtopic": "Uses of Salts"
  },
  {
    "question": "Which of the following is a deliquescent substance?",
    "options": [
      "A. CaO",
      "B. NaOH (pellets)",
      "C. Na2CO3·10H2O",
      "D. SiO2"
    ],
    "answer": "B",
    "explanation": "Deliquescent substances absorb moisture from the air to form a solution. NaOH pellets are deliquescent and dissolve in atmospheric water. CaO is hygroscopic, but not deliquescent; Na2CO3·10H2O is efflorescent.",
    "subtopic": "Deliquescent & Efflorescent"
  }
];

module.exports = acids;
