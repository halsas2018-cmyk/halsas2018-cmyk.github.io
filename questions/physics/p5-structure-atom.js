// physics — Structure of the Atom
const questions = [
  {
    question: "The model of the atom in which electrons orbit the nucleus like planets orbit the sun is the",
    options: [
      "A. Thomson plum-pudding model",
      "B. Rutherford nuclear model",
      "C. Bohr model",
      "D. quantum model"
    ],
    answer: "C",
    explanation: "The Bohr model depicts electrons in fixed circular orbits around a central nucleus.",
    subtopic: "Models of the atom"
  },
  {
    question: "In the Thomson model of the atom, the atom was described as",
    options: [
      "A. a tiny nucleus with orbiting electrons",
      "B. a sphere of positive charge with embedded electrons",
      "C. mostly empty space",
      "D. a cloud of probability"
    ],
    answer: "B",
    explanation: "Thomson's 'plum-pudding' model had negatively charged electrons embedded in a uniform positive sphere.",
    subtopic: "Models of the atom"
  },
  {
    question: "The alpha-particle scattering experiment was performed by",
    options: [
      "A. J.J. Thomson",
      "B. Ernest Rutherford",
      "C. Niels Bohr",
      "D. Albert Einstein"
    ],
    answer: "B",
    explanation: "Rutherford's gold-foil experiment led to the nuclear model of the atom.",
    subtopic: "Models of the atom"
  },
  {
    question: "Rutherford's scattering experiment showed that the atom has",
    options: [
      "A. a uniform positive sphere",
      "B. a small dense positive nucleus",
      "C. no nucleus",
      "D. only electrons"
    ],
    answer: "B",
    explanation: "Most alpha particles passed through, but a few were deflected strongly, implying a tiny massive nucleus.",
    subtopic: "Models of the atom"
  },
  {
    question: "In the Rutherford model, most of the atom's mass is concentrated in the",
    options: [
      "A. electrons",
      "B. nucleus",
      "C. empty space",
      "D. electron shells"
    ],
    answer: "B",
    explanation: "The tiny nucleus contains protons and neutrons and therefore nearly all the atomic mass.",
    subtopic: "Models of the atom"
  },
  {
    question: "According to Bohr, an electron in a stable orbit does not",
    options: [
      "A. have energy",
      "B. radiate energy",
      "C. move",
      "D. exist"
    ],
    answer: "B",
    explanation: "Bohr postulated that electrons in allowed orbits do not emit radiation despite accelerating.",
    subtopic: "Models of the atom"
  },
  {
    question: "The nucleus of an atom contains",
    options: [
      "A. only electrons",
      "B. protons and neutrons",
      "C. only protons",
      "D. electrons and protons"
    ],
    answer: "B",
    explanation: "The nucleus is made of protons (positive) and neutrons (neutral).",
    subtopic: "Models of the atom"
  },
  {
    question: "The charge of an electron is",
    options: [
      "A. +1.6×10⁻¹⁹ C",
      "B. −1.6×10⁻¹⁹ C",
      "C. 0 C",
      "D. +9.1×10⁻³¹ C"
    ],
    answer: "B",
    explanation: "An electron carries a negative elementary charge of magnitude 1.6×10⁻¹⁹ C.",
    subtopic: "Models of the atom"
  },
  {
    question: "The mass of an electron is approximately",
    options: [
      "A. 9.1×10⁻³¹ kg",
      "B. 1.67×10⁻²⁷ kg",
      "C. 1.6×10⁻¹⁹ kg",
      "D. 1.0×10⁻³ kg"
    ],
    answer: "A",
    explanation: "m_e ≈ 9.1×10⁻³¹ kg, about 1/1836 of the proton mass.",
    subtopic: "Models of the atom"
  },
  {
    question: "The number of protons in the nucleus is the",
    options: [
      "A. mass number",
      "B. atomic number",
      "C. neutron number",
      "D. isotope number"
    ],
    answer: "B",
    explanation: "The atomic number Z equals the number of protons and determines the element.",
    subtopic: "Models of the atom"
  },
  {
    question: "Atoms of the same element with different numbers of neutrons are called",
    options: [
      "A. ions",
      "B. isotopes",
      "C. isomers",
      "D. molecules"
    ],
    answer: "B",
    explanation: "Isotopes are atoms of one element with different mass numbers (different neutron counts).",
    subtopic: "Models of the atom"
  },
  {
    question: "An atom that has lost one electron becomes a",
    options: [
      "A. negative ion",
      "B. positive ion",
      "C. neutron",
      "D. isotope"
    ],
    answer: "B",
    explanation: "Losing an electron leaves more protons than electrons, giving a net positive charge.",
    subtopic: "Models of the atom"
  },
  {
    question: "In the Bohr model, an electron can move to a higher orbit by",
    options: [
      "A. emitting a photon",
      "B. absorbing energy",
      "C. losing mass",
      "D. standing still"
    ],
    answer: "B",
    explanation: "Absorbing a quantum of energy promotes the electron to a higher (more energetic) orbit.",
    subtopic: "Energy quantization"
  },
  {
    question: "When an electron drops from a higher to a lower energy level it",
    options: [
      "A. absorbs energy",
      "B. emits a photon",
      "C. gains mass",
      "D. becomes ionized"
    ],
    answer: "B",
    explanation: "The energy difference is released as a photon of frequency f where hf = ΔE.",
    subtopic: "Energy quantization"
  },
  {
    question: "The energy of a photon emitted during a transition is given by",
    options: [
      "A. E = mc²",
      "B. E = hf",
      "C. E = ½mv²",
      "D. E = qV"
    ],
    answer: "B",
    explanation: "E = hf, where h is Planck's constant and f is the photon frequency.",
    subtopic: "Energy quantization"
  },
  {
    question: "Planck's constant h has a value of approximately",
    options: [
      "A. 6.6×10⁻³⁴ J s",
      "B. 3.0×10⁸ J s",
      "C. 1.6×10⁻¹⁹ J s",
      "D. 9.1×10⁻³¹ J s"
    ],
    answer: "A",
    explanation: "h ≈ 6.63×10⁻³⁴ J s, the quantum of action.",
    subtopic: "Energy quantization"
  },
  {
    question: "The energy levels of electrons in an atom are",
    options: [
      "A. continuous",
      "B. discrete (quantized)",
      "C. all equal",
      "D. infinite and equal"
    ],
    answer: "B",
    explanation: "Atomic energy levels are discrete; electrons occupy only specific allowed energies.",
    subtopic: "Energy quantization"
  },
  {
    question: "The ground state of an atom is the state of",
    options: [
      "A. maximum energy",
      "B. lowest energy",
      "C. zero energy",
      "D. ionized state"
    ],
    answer: "B",
    explanation: "The ground state is the lowest, most stable energy level of the atom.",
    subtopic: "Energy quantization"
  },
  {
    question: "The line spectrum of an atom provides evidence for",
    options: [
      "A. continuous energy",
      "B. quantized energy levels",
      "C. a uniform nucleus",
      "D. relativistic mass"
    ],
    answer: "B",
    explanation: "Discrete spectral lines arise because only specific energy transitions are allowed.",
    subtopic: "Energy quantization"
  },
  {
    question: "The ionization energy is the energy required to",
    options: [
      "A. add an electron",
      "B. remove an electron completely",
      "C. split the nucleus",
      "D. melt the atom"
    ],
    answer: "B",
    explanation: "Ionization energy is the minimum energy to remove the most loosely bound electron to infinity.",
    subtopic: "Energy quantization"
  },
  {
    question: "The photoelectric effect is the emission of electrons from a metal when it is exposed to",
    options: [
      "A. heat",
      "B. light of suitable frequency",
      "C. a magnetic field",
      "D. sound waves"
    ],
    answer: "B",
    explanation: "Photoelectric emission occurs when incident photons have enough energy to eject electrons.",
    subtopic: "Photoelectric effect"
  },
  {
    question: "In the photoelectric effect, the emitted electrons are called",
    options: [
      "A. photons",
      "B. photoelectrons",
      "C. protons",
      "D. neutrons"
    ],
    answer: "B",
    explanation: "Electrons ejected by light are called photoelectrons.",
    subtopic: "Photoelectric effect"
  },
  {
    question: "The minimum frequency needed to eject electrons is called the",
    options: [
      "A. threshold frequency",
      "B. work function",
      "C. stopping potential",
      "D. Planck frequency"
    ],
    answer: "A",
    explanation: "Below the threshold frequency no photoelectrons are emitted, regardless of intensity.",
    subtopic: "Photoelectric effect"
  },
  {
    question: "The work function Φ of a metal is the",
    options: [
      "A. maximum kinetic energy",
      "B. minimum energy to eject an electron",
      "C. threshold frequency",
      "D. photon energy"
    ],
    answer: "B",
    explanation: "The work function is the minimum energy needed to free an electron from the metal surface.",
    subtopic: "Photoelectric effect"
  },
  {
    question: "Einstein's photoelectric equation is",
    options: [
      "A. E = mc²",
      "B. hf = Φ + ½mv²",
      "C. F = ma",
      "D. PV = nRT"
    ],
    answer: "B",
    explanation: "Photon energy hf is used to overcome the work function Φ and give kinetic energy to the electron.",
    subtopic: "Photoelectric effect"
  },
  {
    question: "Increasing the intensity of incident light in the photoelectric effect increases the",
    options: [
      "A. maximum kinetic energy",
      "B. number of emitted electrons",
      "C. threshold frequency",
      "D. work function"
    ],
    answer: "B",
    explanation: "More intense light means more photons, so more electrons are emitted, but their max energy is unchanged.",
    subtopic: "Photoelectric effect"
  },
  {
    question: "Increasing the frequency of incident light above threshold increases the",
    options: [
      "A. number of electrons",
      "B. maximum kinetic energy of electrons",
      "C. work function",
      "D. threshold frequency"
    ],
    answer: "B",
    explanation: "Higher frequency photons carry more energy, so the photoelectrons leave with greater kinetic energy.",
    subtopic: "Photoelectric effect"
  },
  {
    question: "The stopping potential is the potential needed to",
    options: [
      "A. start emission",
      "B. stop the fastest photoelectrons",
      "C. increase current",
      "D. lower the threshold"
    ],
    answer: "B",
    explanation: "The stopping potential V_s satisfies eV_s = maximum kinetic energy of the photoelectrons.",
    subtopic: "Photoelectric effect"
  },
  {
    question: "The photoelectric effect demonstrates that light behaves as if it is made of",
    options: [
      "A. waves only",
      "B. particles (photons)",
      "C. only continuous waves",
      "D. sound"
    ],
    answer: "B",
    explanation: "The effect is explained by quantized light particles (photons) each carrying energy hf.",
    subtopic: "Photoelectric effect"
  },
  {
    question: "A photon of frequency f has energy",
    options: [
      "A. hf",
      "B. h/f",
      "C. f/h",
      "D. hc/f"
    ],
    answer: "A",
    explanation: "Photon energy E = hf.",
    subtopic: "Photoelectric effect"
  },
  {
    question: "The speed of a photoelectron depends on the",
    options: [
      "A. intensity of light",
      "B. frequency of light",
      "C. area of metal",
      "D. colour of the metal"
    ],
    answer: "B",
    explanation: "Kinetic energy (and hence speed) depends on photon frequency via hf − Φ.",
    subtopic: "Photoelectric effect"
  },
  {
    question: "Thermionic emission is the emission of electrons from a metal when it is",
    options: [
      "A. cooled below 0°C",
      "B. heated to a high temperature",
      "C. exposed to light",
      "D. placed in a magnetic field"
    ],
    answer: "B",
    explanation: "Heating gives electrons enough thermal energy to overcome the work function and escape.",
    subtopic: "Thermionic emission"
  },
  {
    question: "The electrons emitted in thermionic emission are called",
    options: [
      "A. photoelectrons",
      "B. thermions",
      "C. protons",
      "D. cations"
    ],
    answer: "B",
    explanation: "Electrons boiled off a hot surface are called thermions (thermionic electrons).",
    subtopic: "Thermionic emission"
  },
  {
    question: "The cathode ray tube uses",
    options: [
      "A. photoelectric emission",
      "B. thermionic emission",
      "C. radioactivity",
      "D. nuclear fission"
    ],
    answer: "B",
    explanation: "A heated cathode emits electrons by thermionic emission to form the electron beam.",
    subtopic: "Thermionic emission"
  },
  {
    question: "A device that converts heat directly into electrical energy using thermionic emission is the",
    options: [
      "A. transistor",
      "B. thermionic diode / valve",
      "C. capacitor",
      "D. resistor"
    ],
    answer: "B",
    explanation: "Thermionic valves (diodes) use hot-cathode electron emission and only conduct one way.",
    subtopic: "Thermionic emission"
  },
  {
    question: "The work function in thermionic emission is overcome by",
    options: [
      "A. light energy",
      "B. thermal energy",
      "C. magnetic energy",
      "D. sound energy"
    ],
    answer: "B",
    explanation: "Heat supplies the energy needed for electrons to escape the metal surface.",
    subtopic: "Thermionic emission"
  },
  {
    question: "The rate of thermionic emission increases with",
    options: [
      "A. decreasing temperature",
      "B. increasing temperature",
      "C. decreasing surface area",
      "D. increasing work function only"
    ],
    answer: "B",
    explanation: "Higher temperature gives more electrons enough energy to escape, raising the emission current.",
    subtopic: "Thermionic emission"
  },
  {
    question: "Electrons in a vacuum tube travel from the",
    options: [
      "A. anode to cathode",
      "B. cathode to anode",
      "C. grid to filament",
      "D. screen to cathode"
    ],
    answer: "B",
    explanation: "Electrons (negative) are emitted at the hot cathode and attracted to the positive anode.",
    subtopic: "Thermionic emission"
  },
  {
    question: "The kinetic energy gained by an electron accelerated through a p.d. V is",
    options: [
      "A. eV",
      "B. eV/2",
      "C. mV",
      "D. V/e"
    ],
    answer: "A",
    explanation: "Work done by the field = qV = eV, converted to kinetic energy.",
    subtopic: "Thermionic emission"
  },
  {
    question: "Thermionic emission differs from photoelectric emission in that it requires",
    options: [
      "A. light instead of heat",
      "B. heat instead of light",
      "C. a magnetic field",
      "D. a nucleus"
    ],
    answer: "B",
    explanation: "Thermionic emission is driven by heat, whereas the photoelectric effect is driven by light photons.",
    subtopic: "Thermionic emission"
  },
  {
    question: "An electron accelerated through 100 V gains kinetic energy of",
    options: [
      "A. 100 J",
      "B. 100 eV",
      "C. 1.6×10⁻¹⁹ J",
      "D. 100 V"
    ],
    answer: "B",
    explanation: "Energy gained = eV = 100 eV (or 100 × 1.6×10⁻¹⁹ J).",
    subtopic: "Thermionic emission"
  },
  {
    question: "In an atom, electrons occupy regions called",
    options: [
      "A. nuclei",
      "B. shells or orbitals",
      "C. protons",
      "D. isotopes"
    ],
    answer: "B",
    explanation: "Electrons reside in shells (energy levels) or orbitals around the nucleus.",
    subtopic: "Models of the atom"
  },
  {
    question: "The maximum number of electrons in the first shell is",
    options: [
      "A. 2",
      "B. 8",
      "C. 18",
      "D. 32"
    ],
    answer: "A",
    explanation: "The K-shell holds a maximum of 2 electrons.",
    subtopic: "Models of the atom"
  },
  {
    question: "Compared with the proton, the electron has",
    options: [
      "A. much greater mass",
      "B. much smaller mass",
      "C. equal mass",
      "D. no charge"
    ],
    answer: "B",
    explanation: "The electron is about 1836 times less massive than the proton.",
    subtopic: "Models of the atom"
  },
  {
    question: "The mass number of an atom is the sum of",
    options: [
      "A. protons and electrons",
      "B. protons and neutrons",
      "C. electrons and neutrons",
      "D. neutrons only"
    ],
    answer: "B",
    explanation: "Mass number A = number of protons + number of neutrons.",
    subtopic: "Models of the atom"
  },
  {
    question: "An atom is electrically neutral because it has equal numbers of",
    options: [
      "A. protons and neutrons",
      "B. protons and electrons",
      "C. electrons and neutrons",
      "D. nuclei and shells"
    ],
    answer: "B",
    explanation: "Equal positive protons and negative electrons give a net charge of zero.",
    subtopic: "Models of the atom"
  },
  {
    question: "When an electron absorbs exactly the right quantum of energy it moves to a",
    options: [
      "A. lower level and emits light",
      "B. higher level (excited state)",
      "C. nucleus",
      "D. ground state"
    ],
    answer: "B",
    explanation: "Absorbing a photon of energy equal to the level spacing promotes the electron to an excited state.",
    subtopic: "Energy quantization"
  },
  {
    question: "The wavelength of a photon of energy E is given by",
    options: [
      "A. λ = hc/E",
      "B. λ = E/hc",
      "C. λ = hf/E",
      "D. λ = h/E"
    ],
    answer: "A",
    explanation: "Since E = hf = hc/λ, rearranging gives λ = hc/E.",
    subtopic: "Energy quantization"
  },
  {
    question: "If the threshold frequency of a metal is f₀, the work function is",
    options: [
      "A. hf₀",
      "B. h/f₀",
      "C. 2hf₀",
      "D. Φ/f₀"
    ],
    answer: "A",
    explanation: "At threshold, photon energy just equals the work function: Φ = hf₀.",
    subtopic: "Photoelectric effect"
  },
  {
    question: "Electrons cannot be emitted by the photoelectric effect if the incident light frequency is",
    options: [
      "A. above threshold",
      "B. below threshold",
      "C. very intense",
      "D. monochromatic"
    ],
    answer: "B",
    explanation: "Below the threshold frequency each photon lacks the energy to overcome the work function.",
    subtopic: "Photoelectric effect"
  },
  {
    question: "A photocell converts",
    options: [
      "A. light energy to electrical energy",
      "B. heat to light",
      "C. sound to electricity",
      "D. electricity to light"
    ],
    answer: "A",
    explanation: "A photocell (photoelectric cell) uses photoelectron emission to generate a current from light.",
    subtopic: "Photoelectric effect"
  },
  {
    question: "The photoelectric effect cannot be explained by the",
    options: [
      "A. photon theory",
      "B. wave theory of light alone",
      "C. quantum theory",
      "D. Einstein equation"
    ],
    answer: "B",
    explanation: "Classical wave theory predicts intensity should matter, not frequency; the effect needs photons.",
    subtopic: "Photoelectric effect"
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
    explanation: "m_p ≈ 1.67×10⁻²⁷ kg, about 1836 times the electron mass.",
    subtopic: "Models of the atom"
  },
  {
    question: "Thermionic emission is used in the",
    options: [
      "A. solar cell",
      "B. cathode ray oscilloscope",
      "C. battery",
      "D. transformer"
    ],
    answer: "B",
    explanation: "CROs and traditional TVs use a thermionic electron gun to produce the beam.",
    subtopic: "Thermionic emission"
  }
];

module.exports = questions;
