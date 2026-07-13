// physics — Structure of the Nucleus
const questions = [
  {
    question: "The nucleus of an atom is composed of",
    options: [
      "A. protons and electrons",
      "B. protons and neutrons",
      "C. neutrons and electrons",
      "D. only electrons"
    ],
    answer: "B",
    explanation: "The nucleus contains protons (positive) and neutrons (neutral); electrons orbit outside.",
    subtopic: "Composition of nucleus"
  },
  {
    question: "The proton has a charge of",
    options: [
      "A. −1.6×10⁻¹⁹ C",
      "B. +1.6×10⁻¹⁹ C",
      "C. 0 C",
      "D. +9.1×10⁻³¹ C"
    ],
    answer: "B",
    explanation: "A proton carries a positive elementary charge of +1.6×10⁻¹⁹ C.",
    subtopic: "Composition of nucleus"
  },
  {
    question: "The neutron is",
    options: [
      "A. positively charged",
      "B. negatively charged",
      "C. neutral",
      "D. lighter than the electron"
    ],
    answer: "C",
    explanation: "The neutron carries no net electric charge.",
    subtopic: "Composition of nucleus"
  },
  {
    question: "The atomic number Z of an element equals the number of",
    options: [
      "A. neutrons",
      "B. protons",
      "C. nucleons",
      "D. electrons in the outer shell"
    ],
    answer: "B",
    explanation: "Z is the proton number and defines the chemical element.",
    subtopic: "Composition of nucleus"
  },
  {
    question: "The mass number A of a nuclide equals the number of",
    options: [
      "A. protons only",
      "B. electrons",
      "C. nucleons (protons + neutrons)",
      "D. neutrons only"
    ],
    answer: "C",
    explanation: "A = Z + N, the total count of protons and neutrons (nucleons).",
    subtopic: "Composition of nucleus"
  },
  {
    question: "Isotopes of an element have the same",
    options: [
      "A. mass number",
      "B. number of neutrons",
      "C. atomic number (proton number)",
      "D. neutron number"
    ],
    answer: "C",
    explanation: "Isotopes share the same Z (protons) but differ in neutron number, hence in A.",
    subtopic: "Composition of nucleus"
  },
  {
    question: "In symbolic notation ₍Z₎ᴬX, the superscript A represents the",
    options: [
      "A. atomic number",
      "B. mass number",
      "C. neutron number",
      "D. charge"
    ],
    answer: "B",
    explanation: "A is the mass number (total nucleons); Z is the subscript atomic number.",
    subtopic: "Composition of nucleus"
  },
  {
    question: "The neutron number N of a nuclide is given by",
    options: [
      "A. A + Z",
      "B. A − Z",
      "C. Z − A",
      "D. A/Z"
    ],
    answer: "B",
    explanation: "N = A − Z (total nucleons minus protons).",
    subtopic: "Composition of nucleus"
  },
  {
    question: "The approximate radius of a nucleus is given by R = R₀A^(1/3), showing the nucleus is",
    options: [
      "A. proportional to A",
      "B. proportional to A^(1/3)",
      "C. constant for all atoms",
      "D. proportional to A²"
    ],
    answer: "B",
    explanation: "Nuclear radius scales as the cube root of the mass number, since density is roughly constant.",
    subtopic: "Composition of nucleus"
  },
  {
    question: "The density of nuclear matter is",
    options: [
      "A. very low",
      "B. roughly constant for all nuclei",
      "C. zero",
      "D. increases with A"
    ],
    answer: "B",
    explanation: "All nuclei have about the same density because volume scales with A while mass scales with A.",
    subtopic: "Composition of nucleus"
  },
  {
    question: "The mass of a proton is approximately",
    options: [
      "A. 1.67×10⁻²⁷ kg",
      "B. 9.1×10⁻³¹ kg",
      "C. 1.6×10⁻¹⁹ kg",
      "D. 3.0×10⁸ kg"
    ],
    answer: "A",
    explanation: "m_p ≈ 1.67×10⁻²⁷ kg.",
    subtopic: "Composition of nucleus"
  },
  {
    question: "The total binding energy of a nucleus is the energy",
    options: [
      "A. needed to split it into free nucleons",
      "B. stored in electrons",
      "C. of its photons",
      "D. of rotation"
    ],
    answer: "A",
    explanation: "Binding energy is the energy required to separate the nucleus into individual protons and neutrons.",
    subtopic: "Composition of nucleus"
  },
  {
    question: "The mass of a nucleus is less than the sum of its free nucleons because of",
    options: [
      "A. radioactivity",
      "B. mass defect / binding energy",
      "C. electron loss",
      "D. thermal energy"
    ],
    answer: "B",
    explanation: "Mass defect Δm is converted to binding energy (ΔE = Δmc²) holding the nucleus together.",
    subtopic: "Composition of nucleus"
  },
  {
    question: "Einstein's mass-energy relation is",
    options: [
      "A. E = hf",
      "B. E = mc²",
      "C. E = ½mv²",
      "D. E = qV"
    ],
    answer: "B",
    explanation: "Mass and energy are equivalent: E = mc².",
    subtopic: "Composition of nucleus"
  },
  {
    question: "A nuclide is defined by its",
    options: [
      "A. element name only",
      "B. proton number and neutron number",
      "C. colour",
      "D. temperature"
    ],
    answer: "B",
    explanation: "A nuclide is a specific species of atom characterised by Z and N (hence A).",
    subtopic: "Composition of nucleus"
  },
  {
    question: "Radioactivity is the spontaneous emission of",
    options: [
      "A. electrons from the shell",
      "B. radiation from an unstable nucleus",
      "C. light",
      "D. heat only"
    ],
    answer: "B",
    explanation: "Radioactivity is the emission of alpha, beta or gamma radiation by an unstable nucleus.",
    subtopic: "Radioactivity"
  },
  {
    question: "Which of the following is NOT a common type of nuclear radiation?",
    options: [
      "A. Alpha",
      "B. Beta",
      "C. Gamma",
      "D. Delta"
    ],
    answer: "D",
    explanation: "The three common types are alpha (α), beta (β) and gamma (γ); 'delta' is not a radiation type.",
    subtopic: "Radioactivity"
  },
  {
    question: "An alpha particle is equivalent to",
    options: [
      "A. a helium nucleus",
      "B. an electron",
      "C. a photon",
      "D. a proton"
    ],
    answer: "A",
    explanation: "An alpha particle is a helium nucleus: 2 protons and 2 neutrons (₄²He).",
    subtopic: "Radioactivity"
  },
  {
    question: "Alpha particles are",
    options: [
      "A. high-speed electrons",
      "B. helium nuclei",
      "C. electromagnetic waves",
      "D. neutrons"
    ],
    answer: "B",
    explanation: "Alpha radiation consists of helium nuclei (₂⁴He) emitted from large unstable nuclei.",
    subtopic: "Radioactivity"
  },
  {
    question: "A beta particle is a",
    options: [
      "A. helium nucleus",
      "B. fast electron",
      "C. photon",
      "D. neutron"
    ],
    answer: "B",
    explanation: "Beta-minus radiation is a high-speed electron emitted when a neutron turns into a proton.",
    subtopic: "Radioactivity"
  },
  {
    question: "Gamma rays are",
    options: [
      "A. helium nuclei",
      "B. electrons",
      "C. high-energy electromagnetic waves",
      "D. neutrons"
    ],
    answer: "C",
    explanation: "Gamma rays are very high-frequency photons (electromagnetic radiation), with no mass or charge.",
    subtopic: "Radioactivity"
  },
  {
    question: "Which radiation has the greatest penetrating power?",
    options: [
      "A. Alpha",
      "B. Beta",
      "C. Gamma",
      "D. They are equal"
    ],
    answer: "C",
    explanation: "Gamma rays are uncharged and highly penetrating, more so than alpha or beta.",
    subtopic: "Radioactivity"
  },
  {
    question: "Which radiation has the least penetration and is stopped by paper?",
    options: [
      "A. Gamma",
      "B. Beta",
      "C. Alpha",
      "D. X-rays"
    ],
    answer: "C",
    explanation: "Alpha particles are heavily ionising and stopped by a sheet of paper or skin.",
    subtopic: "Radioactivity"
  },
  {
    question: "During alpha decay, the mass number of the nucleus",
    options: [
      "A. increases by 4",
      "B. decreases by 4",
      "C. stays the same",
      "D. doubles"
    ],
    answer: "B",
    explanation: "Emitting a ₄²He particle reduces A by 4 and Z by 2.",
    subtopic: "Radioactivity"
  },
  {
    question: "During beta-minus decay, the atomic number",
    options: [
      "A. decreases by 1",
      "B. increases by 1",
      "C. stays the same",
      "D. decreases by 2"
    ],
    answer: "B",
    explanation: "A neutron → proton + electron, so Z increases by 1 while A is unchanged.",
    subtopic: "Radioactivity"
  },
  {
    question: "During beta-minus decay, the mass number",
    options: [
      "A. increases by 1",
      "B. decreases by 1",
      "C. remains unchanged",
      "D. halves"
    ],
    answer: "C",
    explanation: "The total number of nucleons is conserved, so A stays the same in β⁻ decay.",
    subtopic: "Radioactivity"
  },
  {
    question: "Gamma emission usually follows",
    options: [
      "A. chemical reaction",
      "B. alpha or beta decay from an excited nucleus",
      "C. melting",
      "D. ionisation"
    ],
    answer: "B",
    explanation: "After α or β decay the daughter nucleus may be left excited and release energy as γ rays.",
    subtopic: "Radioactivity"
  },
  {
    question: "The half-life of a radioactive substance is the time for",
    options: [
      "A. all atoms to decay",
      "B. half the atoms to decay",
      "C. the mass to double",
      "D. radiation to stop"
    ],
    answer: "B",
    explanation: "Half-life is the time taken for half of the radioactive nuclei present to decay.",
    subtopic: "Radioactivity"
  },
  {
    question: "After two half-lives, the fraction of undecayed nuclei remaining is",
    options: [
      "A. 1/2",
      "B. 1/4",
      "C. 1/8",
      "D. 3/4"
    ],
    answer: "B",
    explanation: "After each half-life the amount halves: (1/2)² = 1/4 remains.",
    subtopic: "Radioactivity"
  },
  {
    question: "If a sample has 800 nuclei and a half-life of 1 hour, after 3 hours the number remaining is",
    options: [
      "A. 100",
      "B. 200",
      "C. 400",
      "D. 50"
    ],
    answer: "A",
    explanation: "3 half-lives: 800 → 400 → 200 → 100 nuclei remain.",
    subtopic: "Radioactivity"
  },
  {
    question: "Radioactive decay is a",
    options: [
      "A. chemical process",
      "B. random spontaneous nuclear process",
      "C. reversible reaction",
      "D. temperature-controlled process"
    ],
    answer: "B",
    explanation: "Decay is random and spontaneous at the nuclear level, unaffected by ordinary chemical changes.",
    subtopic: "Radioactivity"
  },
  {
    question: "The activity of a radioactive sample is measured in",
    options: [
      "A. joules",
      "B. becquerels (Bq)",
      "C. watts",
      "D. volts"
    ],
    answer: "B",
    explanation: "Activity (decays per second) is measured in becquerels, 1 Bq = 1 decay/s.",
    subtopic: "Radioactivity"
  },
  {
    question: "The activity of a sample is proportional to the",
    options: [
      "A. number of undecayed nuclei",
      "B. number of decayed nuclei only",
      "C. temperature",
      "D. mass of electrons"
    ],
    answer: "A",
    explanation: "A = λN, so activity is directly proportional to the number of undecayed nuclei N.",
    subtopic: "Radioactivity"
  },
  {
    question: "The decay constant λ is related to half-life T by",
    options: [
      "A. λ = T/ln2",
      "B. λ = ln2 / T",
      "C. λ = 2T",
      "D. λ = T²"
    ],
    answer: "B",
    explanation: "T = ln2/λ, so λ = ln2/T.",
    subtopic: "Radioactivity"
  },
  {
    question: "Which radiation is most ionising?",
    options: [
      "A. Gamma",
      "B. Beta",
      "C. Alpha",
      "D. They are equal"
    ],
    answer: "C",
    explanation: "Alpha particles are bulky and doubly charged, producing dense ionisation per path length.",
    subtopic: "Radioactivity"
  },
  {
    question: "A radioactive source used in smoke detectors is commonly",
    options: [
      "A. uranium",
      "B. americium-241",
      "C. carbon-14",
      "D. cobalt-60"
    ],
    answer: "B",
    explanation: "Americium-241 (alpha emitter) is used in many domestic smoke detectors.",
    subtopic: "Radioactivity"
  },
  {
    question: "Carbon-14 dating is possible because living things maintain a constant ratio of",
    options: [
      "A. uranium to lead",
      "B. carbon-14 to carbon-12",
      "C. hydrogen to oxygen",
      "D. potassium to argon"
    ],
    answer: "B",
    explanation: "While alive, organisms exchange carbon keeping ¹⁴C/¹²C constant; after death ¹⁴C decays, allowing dating.",
    subtopic: "Radioactivity"
  },
  {
    question: "Background radiation comes from sources such as",
    options: [
      "A. only artificial bombs",
      "B. cosmic rays, rocks and the atmosphere",
      "C. only X-ray machines",
      "D. the Moon"
    ],
    answer: "B",
    explanation: "Natural background radiation arises from cosmic rays, terrestrial rocks and radon in the air.",
    subtopic: "Radioactivity"
  },
  {
    question: "Nuclear fission is the",
    options: [
      "A. joining of light nuclei",
      "B. splitting of a heavy nucleus",
      "C. emission of gamma rays",
      "D. decay of an electron"
    ],
    answer: "B",
    explanation: "Fission splits a heavy nucleus (e.g. uranium) into smaller fragments, releasing energy.",
    subtopic: "Nuclear reactions"
  },
  {
    question: "Nuclear fusion is the",
    options: [
      "A. splitting of heavy nuclei",
      "B. combining of light nuclei",
      "C. emission of alpha particles",
      "D. decay of neutrons"
    ],
    answer: "B",
    explanation: "Fusion joins light nuclei (e.g. hydrogen) to form heavier ones, releasing energy.",
    subtopic: "Nuclear reactions"
  },
  {
    question: "In a nuclear reaction, the quantities conserved are",
    options: [
      "A. charge and nucleon number",
      "B. only mass",
      "C. only energy",
      "D. temperature"
    ],
    answer: "A",
    explanation: "Both total charge (Z) and nucleon number (A) are conserved in nuclear reactions.",
    subtopic: "Nuclear reactions"
  },
  {
    question: "In the fission of uranium-235, a common incident particle is a",
    options: [
      "A. proton",
      "B. slow neutron",
      "C. electron",
      "D. alpha particle"
    ],
    answer: "B",
    explanation: "U-235 captures a slow (thermal) neutron, becoming unstable and fissioning.",
    subtopic: "Nuclear reactions"
  },
  {
    question: "A chain reaction in a reactor is sustained because fission releases",
    options: [
      "A. light",
      "B. further neutrons",
      "C. electrons",
      "D. protons"
    ],
    answer: "B",
    explanation: "Each fission emits neutrons that can trigger more fissions, sustaining the chain reaction.",
    subtopic: "Nuclear reactions"
  },
  {
    question: "The purpose of a moderator in a nuclear reactor is to",
    options: [
      "A. absorb all neutrons",
      "B. slow down neutrons",
      "C. speed up neutrons",
      "D. stop radiation"
    ],
    answer: "B",
    explanation: "A moderator (e.g. water, graphite) slows neutrons so they are more likely to cause fission.",
    subtopic: "Nuclear reactions"
  },
  {
    question: "Control rods in a nuclear reactor are made of materials that",
    options: [
      "A. emit neutrons",
      "B. absorb neutrons",
      "C. reflect gamma",
      "D. produce heat"
    ],
    answer: "B",
    explanation: "Boron or cadmium control rods absorb excess neutrons to regulate the reaction rate.",
    subtopic: "Nuclear reactions"
  },
  {
    question: "In the reaction ₂³He + ₁¹H → ₂⁴He + ?, the missing particle is a",
    options: [
      "A. proton",
      "B. neutron",
      "C. electron",
      "D. gamma photon"
    ],
    answer: "B",
    explanation: "Balancing A: 3+1 = 4 + A → A=0; balancing Z: 2+1 = 2 + Z → Z=1, so a neutron (₀¹n) is emitted.",
    subtopic: "Nuclear reactions"
  },
  {
    question: "The Sun's energy comes mainly from",
    options: [
      "A. chemical burning",
      "B. nuclear fusion",
      "C. radioactive decay",
      "D. gravitational collapse only"
    ],
    answer: "B",
    explanation: "Hydrogen fusion into helium in the Sun's core releases the energy radiated as sunlight.",
    subtopic: "Nuclear reactions"
  },
  {
    question: "A nuclear reaction that releases energy must have products with",
    options: [
      "A. greater mass than reactants",
      "B. less total mass than reactants",
      "C. equal kinetic energy",
      "D. more protons"
    ],
    answer: "B",
    explanation: "The mass defect (lost mass) is converted to released energy via E = mc².",
    subtopic: "Nuclear reactions"
  },
  {
    question: "The binding energy per nucleon is greatest for nuclei of mass number around",
    options: [
      "A. 4",
      "B. 56 (iron region)",
      "C. 238",
      "D. 1"
    ],
    answer: "B",
    explanation: "Binding energy per nucleon peaks near A ≈ 56, making iron-region nuclei most stable.",
    subtopic: "Nuclear reactions"
  },
  {
    question: "Nuclear weapons based on fission use mainly",
    options: [
      "A. hydrogen",
      "B. uranium or plutonium",
      "C. carbon",
      "D. helium"
    ],
    answer: "B",
    explanation: "Fission weapons use fissile isotopes such as ²³⁵U or ²³⁹Pu.",
    subtopic: "Nuclear reactions"
  },
  {
    question: "In beta-plus (positron) decay, a proton changes into",
    options: [
      "A. a neutron and a positron",
      "B. an electron",
      "C. an alpha particle",
      "D. a photon"
    ],
    answer: "A",
    explanation: "β⁺ decay: p → n + e⁺ + neutrino, so Z decreases by 1, A unchanged.",
    subtopic: "Radioactivity"
  },
  {
    question: "Gamma rays differ from alpha and beta in that they have",
    options: [
      "A. mass and charge",
      "B. no mass and no charge",
      "C. double charge",
      "D. negative charge"
    ],
    answer: "B",
    explanation: "Gamma radiation is electromagnetic, with zero rest mass and zero charge.",
    subtopic: "Radioactivity"
  },
  {
    question: "A Geiger-Müller tube detects radiation by",
    options: [
      "A. chemical colour change",
      "B. ionisation of gas causing a pulse",
      "C. heating",
      "D. magnetism"
    ],
    answer: "B",
    explanation: "Radiation ionises the gas in the tube, producing a detectable current pulse.",
    subtopic: "Radioactivity"
  },
  {
    question: "The unit of absorbed radiation dose is the",
    options: [
      "A. becquerel",
      "B. gray (Gy) or rad",
      "C. volt",
      "D. watt"
    ],
    answer: "B",
    explanation: "Absorbed dose is measured in gray (1 Gy = 1 J/kg).",
    subtopic: "Radioactivity"
  },
  {
    question: "After one half-life of a 10 g sample, the mass of undecayed material is",
    options: [
      "A. 10 g",
      "B. 5 g",
      "C. 2.5 g",
      "D. 0 g"
    ],
    answer: "B",
    explanation: "Half-life halves the amount: 10 g → 5 g remaining undecayed.",
    subtopic: "Radioactivity"
  },
  {
    question: "In fusion, the products are usually more stable because they have",
    options: [
      "A. higher mass",
      "B. higher binding energy per nucleon",
      "C. more neutrons only",
      "D. less charge"
    ],
    answer: "B",
    explanation: "Light nuclei moving toward iron gain binding energy per nucleon, releasing energy.",
    subtopic: "Nuclear reactions"
  }
];

module.exports = questions;
