// physics — Wave-Particle Paradox (Structured)
const questions = [
  {
    question: "Electron diffraction is strong evidence that electrons show?",
    options: [
      "A. Wave behaviour",
      "B. Only particle behaviour",
      "C. No motion",
      "D. Only magnetic behaviour"
    ],
    answer: "A",
    explanation: "Electrons produce diffraction patterns, a hallmark of wave behaviour.",
    subtopic: "Electron diffraction"
  },
  {
    question: "When a beam of electrons passes through a thin crystal, it produces a?",
    options: [
      "A. Diffraction pattern",
      "B. Single bright dot",
      "C. Straight line only",
      "D. Rainbow of colours"
    ],
    answer: "A",
    explanation: "The regularly spaced crystal atoms act as a grating, giving a diffraction pattern.",
    subtopic: "Electron diffraction"
  },
  {
    question: "The wave nature of electrons was first demonstrated by?",
    options: [
      "A. Davisson and Germer",
      "B. Newton and Kepler",
      "C. Ohm and Volta",
      "D. Boyle and Charles"
    ],
    answer: "A",
    explanation: "Davisson and Germer observed electron diffraction from a nickel crystal in 1927.",
    subtopic: "Electron diffraction"
  },
  {
    question: "The de Broglie wavelength of a particle is given by λ =?",
    options: [
      "A. h/p",
      "B. hp",
      "C. hE",
      "D. p/h"
    ],
    answer: "A",
    explanation: "de Broglie's relation is λ = h/p, where h is Planck's constant and p is momentum.",
    subtopic: "Electron diffraction"
  },
  {
    question: "For a given particle, the de Broglie wavelength is larger when its?",
    options: [
      "A. Momentum is smaller",
      "B. Momentum is larger",
      "C. Mass is infinite",
      "D. Charge is larger"
    ],
    answer: "A",
    explanation: "Since λ = h/p, a smaller momentum (slower or lighter) gives a longer wavelength.",
    subtopic: "Electron diffraction"
  },
  {
    question: "An electron accelerated through a higher potential has?",
    options: [
      "A. A shorter de Broglie wavelength",
      "B. A longer de Broglie wavelength",
      "C. No wavelength",
      "D. Infinite wavelength"
    ],
    answer: "A",
    explanation: "More kinetic energy means larger momentum p, so λ = h/p becomes shorter.",
    subtopic: "Electron diffraction"
  },
  {
    question: "The de Broglie wavelength of a macroscopic object is usually?",
    options: [
      "A. Extremely small and undetectable",
      "B. Very large",
      "C. Equal to light",
      "D. Infinite"
    ],
    answer: "A",
    explanation: "Large mass gives tiny λ = h/p, far too small to observe wave effects for everyday objects.",
    subtopic: "Electron diffraction"
  },
  {
    question: "Electrons behave as waves when their de Broglie wavelength is?",
    options: [
      "A. Comparable to the spacing of the diffracting object",
      "B. Zero",
      "C. Much larger than the universe",
      "D. Equal to their charge"
    ],
    answer: "A",
    explanation: "Noticeable diffraction occurs when λ is of the order of the slit/crystal spacing.",
    subtopic: "Electron diffraction"
  },
  {
    question: "In an electron diffraction experiment, the 'grating' is often a?",
    options: [
      "A. Thin polycrystalline film or crystal",
      "B. Glass prism",
      "C. Mirror",
      "D. Lens"
    ],
    answer: "A",
    explanation: "A thin crystal or polycrystalline film provides the regular spacing needed for diffraction.",
    subtopic: "Electron diffraction"
  },
  {
    question: "The fact that electrons can be diffracted shows that matter has?",
    options: [
      "A. Wave–particle duality",
      "B. Only particle nature",
      "C. Only electric charge",
      "D. No dual nature"
    ],
    answer: "A",
    explanation: "Diffraction is a wave property, yet electrons are particles — hence wave–particle duality.",
    subtopic: "Electron diffraction"
  },
  {
    question: "Light also shows wave–particle duality; its particle-like quanta are called?",
    options: [
      "A. Photons",
      "B. Electrons",
      "C. Protons",
      "D. Neutrons"
    ],
    answer: "A",
    explanation: "Light behaves as photons (quanta of energy E = hf) as well as waves.",
    subtopic: "Electron diffraction"
  },
  {
    question: "The momentum p of an electron of mass m moving at speed v is?",
    options: [
      "A. mv",
      "B. m/v",
      "C. m + v",
      "D. mv²"
    ],
    answer: "A",
    explanation: "Non-relativistically, momentum p = mv.",
    subtopic: "Electron diffraction"
  },
  {
    question: "Planck's constant h has approximately the value?",
    options: [
      "A. 6.63 × 10⁻³⁴ J·s",
      "B. 3.0 × 10⁸ J·s",
      "C. 9.8 J·s",
      "D. 1.6 × 10⁻¹⁹ J·s"
    ],
    answer: "A",
    explanation: "Planck's constant h ≈ 6.63 × 10⁻³⁴ J·s.",
    subtopic: "Electron diffraction"
  },
  {
    question: "If an electron's speed is doubled, its de Broglie wavelength?",
    options: [
      "A. Halves",
      "B. Doubles",
      "C. Stays the same",
      "D. Quadruples"
    ],
    answer: "A",
    explanation: "p = mv doubles, so λ = h/p is halved.",
    subtopic: "Electron diffraction"
  },
  {
    question: "The kinetic energy of an electron accelerated through voltage V is?",
    options: [
      "A. eV",
      "B. e/V",
      "C. V/e",
      "D. e + V"
    ],
    answer: "A",
    explanation: "Work done by the field is eV, becoming the electron's kinetic energy.",
    subtopic: "Electron diffraction"
  },
  {
    question: "Electrons accelerated through a few volts have wavelengths of the order of?",
    options: [
      "A. Atomic spacings (≈ 10⁻¹⁰ m)",
      "B. 1 metre",
      "C. 1 km",
      "D. 1 mm"
    ],
    answer: "A",
    explanation: "Low-energy electrons have λ comparable to interatomic distances, enabling crystal diffraction.",
    subtopic: "Electron diffraction"
  },
  {
    question: "Because of their wave nature, electrons can be used for?",
    options: [
      "A. Imaging crystal structure (electron microscopy)",
      "B. Generating sunlight",
      "C. Measuring mass only",
      "D. Creating gravity"
    ],
    answer: "A",
    explanation: "Electron wavelengths are tiny, so electron microscopes resolve atomic-scale detail.",
    subtopic: "Electron diffraction"
  },
  {
    question: "A diffraction pattern consists of?",
    options: [
      "A. Bright and dark rings or spots",
      "B. A single uniform glow",
      "C. Only one dot",
      "D. A straight unbroken line"
    ],
    answer: "A",
    explanation: "Constructive and destructive interference produce alternating bright/dark regions.",
    subtopic: "Electron diffraction"
  },
  {
    question: "Constructive interference in diffraction occurs when path difference equals?",
    options: [
      "A. A whole number of wavelengths",
      "B. Half a wavelength",
      "C. Zero always",
      "D. Twice the wavelength only"
    ],
    answer: "A",
    explanation: "Bright fringes appear where path difference = nλ (whole wavelengths) — constructive interference.",
    subtopic: "Electron diffraction"
  },
  {
    question: "Destructive interference occurs when path difference equals?",
    options: [
      "A. (n + ½) wavelengths",
      "B. A whole wavelength",
      "C. Zero",
      "D. Two wavelengths"
    ],
    answer: "A",
    explanation: "Path difference of (n + ½)λ gives out-of-phase waves and a dark fringe.",
    subtopic: "Electron diffraction"
  },
  {
    question: "The wavelength of an electron is much smaller than that of visible light, so electrons can?",
    options: [
      "A. Resolve much finer detail",
      "B. Only see colours",
      "C. Not be focused",
      "D. Travel at light speed"
    ],
    answer: "A",
    explanation: "Resolution scales with wavelength; the tiny electron λ allows far better resolution.",
    subtopic: "Electron diffraction"
  },
  {
    question: "Which property of electrons is needed to explain their diffraction?",
    options: [
      "A. Their associated matter wave (de Broglie wave)",
      "B. Their electric charge only",
      "C. Their mass only",
      "D. Their colour"
    ],
    answer: "A",
    explanation: "Only the wave (de Broglie) description predicts diffraction and interference.",
    subtopic: "Electron diffraction"
  },
  {
    question: "Heisenberg's uncertainty principle is a consequence of?",
    options: [
      "A. Wave–particle duality",
      "B. Gravity only",
      "C. Classical mechanics only",
      "D. Electric current"
    ],
    answer: "A",
    explanation: "The wave nature of matter limits how precisely position and momentum can be known together.",
    subtopic: "Electron diffraction"
  },
  {
    question: "Compared with a proton of the same speed, an electron has?",
    options: [
      "A. A longer de Broglie wavelength",
      "B. A shorter de Broglie wavelength",
      "C. The same wavelength always",
      "D. No wavelength"
    ],
    answer: "A",
    explanation: "The lighter electron has smaller momentum at the same speed, so larger λ = h/p.",
    subtopic: "Electron diffraction"
  },
  {
    question: "In a Davisson–Germer-type experiment, electrons are scattered by?",
    options: [
      "A. A crystal lattice",
      "B. A vacuum only",
      "C. A mirror",
      "D. A lens"
    ],
    answer: "A",
    explanation: "Scattering from the regular atomic planes of a crystal produces the diffraction maxima.",
    subtopic: "Electron diffraction"
  },
  {
    question: "Bragg's law for crystal diffraction is nλ =?",
    options: [
      "A. 2d sin θ",
      "B. d sin θ",
      "C. λd sin θ",
      "D. d/sin θ"
    ],
    answer: "A",
    explanation: "Bragg's law: nλ = 2d sin θ for constructive reflection from crystal planes spaced d apart.",
    subtopic: "Electron diffraction"
  },
  {
    question: "The wave–particle paradox refers to the fact that entities like electrons?",
    options: [
      "A. Exhibit both wave and particle properties",
      "B. Are only particles",
      "C. Are only waves",
      "D. Have no properties"
    ],
    answer: "A",
    explanation: "Quantum objects show wave behaviour in some experiments and particle behaviour in others.",
    subtopic: "Electron diffraction"
  },
  {
    question: "An electron microscope can outperform a light microscope because electrons have?",
    options: [
      "A. Much shorter wavelengths",
      "B. Longer wavelengths",
      "C. No wavelength",
      "D. The same colour as light"
    ],
    answer: "A",
    explanation: "Shorter wavelength → smaller diffraction limit → higher resolving power.",
    subtopic: "Electron diffraction"
  },
  {
    question: "If the accelerating voltage of an electron beam is increased, the diffraction rings become?",
    options: [
      "A. Smaller (tighter)",
      "B. Larger",
      "C. Disappear completely",
      "D. Coloured"
    ],
    answer: "A",
    explanation: "Higher voltage → shorter λ → smaller diffraction angles, so rings shrink.",
    subtopic: "Electron diffraction"
  },
  {
    question: "The de Broglie hypothesis was proposed by?",
    options: [
      "A. Louis de Broglie",
      "B. Albert Einstein alone",
      "C. Isaac Newton",
      "D. Michael Faraday"
    ],
    answer: "A",
    explanation: "Louis de Broglie proposed that matter has an associated wavelength λ = h/p.",
    subtopic: "Electron diffraction"
  },
  {
    question: "Which of these is a wave phenomenon observed for electrons?",
    options: [
      "A. Interference",
      "B. Inertia only",
      "C. Weight only",
      "D. Charge only"
    ],
    answer: "A",
    explanation: "Interference (and diffraction) are wave phenomena demonstrated by electron beams.",
    subtopic: "Electron diffraction"
  },
  {
    question: "An electron and a photon with the same wavelength have the same?",
    options: [
      "A. Momentum (p = h/λ)",
      "B. Mass",
      "C. Speed",
      "D. Charge"
    ],
    answer: "A",
    explanation: "Both obey p = h/λ, so equal wavelengths mean equal momentum.",
    subtopic: "Electron diffraction"
  },
  {
    question: "Electrons in a beam can be focused by?",
    options: [
      "A. Magnetic or electric fields (lenses)",
      "B. Glass lenses only",
      "C. Mirrors only",
      "D. Prisms only"
    ],
    answer: "A",
    explanation: "Electromagnetic fields act as lenses for charged-particle waves in electron optics.",
    subtopic: "Electron diffraction"
  },
  {
    question: "The dual nature of matter means a moving electron has both?",
    options: [
      "A. Momentum and a wavelength",
      "B. Mass and colour",
      "C. Charge and temperature only",
      "D. Weight and sound"
    ],
    answer: "A",
    explanation: "It carries particle momentum p and an associated de Broglie wavelength λ = h/p.",
    subtopic: "Electron diffraction"
  },
  {
    question: "For diffraction to be observed, the obstacle spacing must be?",
    options: [
      "A. Of the same order as the wavelength",
      "B. Millions of times larger",
      "C. Zero",
      "D. Infinite"
    ],
    answer: "A",
    explanation: "Significant diffraction needs feature sizes comparable to λ.",
    subtopic: "Electron diffraction"
  },
  {
    question: "Neutrons can also be diffracted because they have?",
    options: [
      "A. Momentum and hence a de Broglie wavelength",
      "B. No wavelength",
      "C. Only charge",
      "D. Infinite mass"
    ],
    answer: "A",
    explanation: "Like all matter, neutrons have λ = h/p and show diffraction (neutron diffraction).",
    subtopic: "Electron diffraction"
  },
  {
    question: "The energy of a photon is E = hf, while its momentum is p =?",
    options: [
      "A. h/λ (or E/c)",
      "B. hλ",
      "C. hf²",
      "D. hc"
    ],
    answer: "A",
    explanation: "For light, p = E/c = h/λ, linking photon momentum to wavelength.",
    subtopic: "Electron diffraction"
  },
  {
    question: "Which experiment directly proved matter waves for electrons?",
    options: [
      "A. Davisson–Germer electron diffraction",
      "B. Millikan oil-drop",
      "C. Rutherford scattering",
      "D. Michelson–Morley"
    ],
    answer: "A",
    explanation: "Davisson–Germer measured electron diffraction from a crystal, confirming matter waves.",
    subtopic: "Electron diffraction"
  },
  {
    question: "A bright spot in a diffraction pattern corresponds to?",
    options: [
      "A. Constructive interference",
      "B. Destructive interference",
      "C. Absorption only",
      "D. Reflection only"
    ],
    answer: "A",
    explanation: "Bright regions are where waves add in phase (constructive interference).",
    subtopic: "Electron diffraction"
  },
  {
    question: "The resolving power of an instrument improves as the wavelength of the probing wave?",
    options: [
      "A. Decreases",
      "B. Increases",
      "C. Stays constant",
      "D. Becomes infinite"
    ],
    answer: "A",
    explanation: "Smaller wavelength reduces the diffraction limit, improving resolution.",
    subtopic: "Electron diffraction"
  },
  {
    question: "An electron's wavelength being about 10⁻¹⁰ m makes it suitable for studying?",
    options: [
      "A. Atomic and crystal structure",
      "B. Planetary orbits",
      "C. Ocean waves",
      "D. Sound in air"
    ],
    answer: "A",
    explanation: "That scale matches interatomic spacings, so electrons probe crystals and atoms.",
    subtopic: "Electron diffraction"
  },
  {
    question: "If two electrons have the same kinetic energy, the heavier one has?",
    options: [
      "A. A shorter de Broglie wavelength",
      "B. A longer de Broglie wavelength",
      "C. The same wavelength as a photon",
      "D. No wavelength"
    ],
    answer: "A",
    explanation: "Same KE gives p = √(2mK); larger m → larger p → shorter λ.",
    subtopic: "Electron diffraction"
  },
  {
    question: "The term 'matter wave' refers to the?",
    options: [
      "A. De Broglie wave associated with a moving particle",
      "B. A sound wave in metal",
      "C. A water wave",
      "D. A radio wave"
    ],
    answer: "A",
    explanation: "Matter waves are the wave description (λ = h/p) of moving particles.",
    subtopic: "Electron diffraction"
  },
  {
    question: "Which quantity is Planck's constant multiplied by frequency equal to?",
    options: [
      "A. Photon energy (E = hf)",
      "B. Photon momentum only",
      "C. Electron charge",
      "D. Electron mass"
    ],
    answer: "A",
    explanation: "E = hf gives the energy of a photon of frequency f.",
    subtopic: "Electron diffraction"
  },
  {
    question: "Electrons show particle-like behaviour when they?",
    options: [
      "A. Deposit energy at a single point on a detector",
      "B. Spread as a continuous wave only",
      "C. Become massless",
      "D. Travel at c"
    ],
    answer: "A",
    explanation: "Each electron is detected as one localised event, revealing its particle nature.",
    subtopic: "Electron diffraction"
  },
  {
    question: "Sending electrons one at a time through a double slit still builds up a?",
    options: [
      "A. Diffraction/interference pattern",
      "B. Single straight line",
      "C. Random dots with no pattern",
      "D. Solid block"
    ],
    answer: "A",
    explanation: "Even one-by-one, the accumulation shows interference — each electron interferes with itself as a wave.",
    subtopic: "Electron diffraction"
  },
  {
    question: "The spacing d in Bragg's law refers to the?",
    options: [
      "A. Distance between adjacent crystal planes",
      "B. Electron radius",
      "C. Wavelength of light",
      "D. Slit width"
    ],
    answer: "A",
    explanation: "d is the interplanar spacing of the crystal used in Bragg diffraction.",
    subtopic: "Electron diffraction"
  },
  {
    question: "An electron accelerated through 150 V has a wavelength of about?",
    options: [
      "A. 0.1 nm (1 Å)",
      "B. 1 m",
      "C. 1 km",
      "D. 1 cm"
    ],
    answer: "A",
    explanation: "Electrons at ~150 V have λ ≈ 0.1 nm, ideal for probing atomic spacings.",
    subtopic: "Electron diffraction"
  },
  {
    question: "Wave–particle duality means we cannot fully describe an electron using only?",
    options: [
      "A. Classical particle or classical wave concepts alone",
      "B. Mathematics",
      "C. Energy",
      "D. Charge"
    ],
    answer: "A",
    explanation: "Quantum objects require both particle and wave descriptions; neither alone suffices.",
    subtopic: "Electron diffraction"
  },
  {
    question: "The momentum of a photon is related to its wavelength by p =?",
    options: [
      "A. h/λ",
      "B. hλ",
      "C. λ/h",
      "D. h + λ"
    ],
    answer: "A",
    explanation: "For a photon, p = h/λ = E/c.",
    subtopic: "Electron diffraction"
  },
  {
    question: "Electron diffraction is used in materials science to determine?",
    options: [
      "A. Crystal structure and spacing",
      "B. The colour of a metal",
      "C. The mass of Earth",
      "D. The speed of sound"
    ],
    answer: "A",
    explanation: "Diffraction angles reveal the spacing and arrangement of atoms in a crystal.",
    subtopic: "Electron diffraction"
  },
  {
    question: "A key difference between electron and X-ray diffraction is that electrons?",
    options: [
      "A. Are charged and interact strongly with matter",
      "B. Are uncharged",
      "C. Have no wavelength",
      "D. Travel faster than light"
    ],
    answer: "A",
    explanation: "Electrons are charged, so they scatter strongly and are easily focused with fields.",
    subtopic: "Electron diffraction"
  },
  {
    question: "The wave nature of electrons was a surprise because electrons were thought to be?",
    options: [
      "A. Pure particles",
      "B. Pure waves",
      "C. Photons",
      "D. Liquids"
    ],
    answer: "A",
    explanation: "Before de Broglie, electrons were regarded as simple particles; they also show wave behaviour.",
    subtopic: "Electron diffraction"
  }
];

module.exports = questions;
