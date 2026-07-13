// physics — Wave-Particle Paradox
const questions = [
  {
    question: "The wave-particle paradox refers to the fact that microscopic entities can exhibit both",
    options: [
      "A. mass and charge only",
      "B. wave and particle properties",
      "C. positive and negative charge",
      "D. magnetic and electric fields"
    ],
    answer: "B",
    explanation: "Matter and radiation show both wave-like and particle-like behaviour depending on the experiment.",
    subtopic: "Duality of matter"
  },
  {
    question: "The de Broglie wavelength λ of a particle of momentum p is given by",
    options: [
      "A. λ = h/p",
      "B. λ = p/h",
      "C. λ = hp",
      "D. λ = h²/p"
    ],
    answer: "A",
    explanation: "de Broglie's relation: λ = h/p, linking wavelength to momentum.",
    subtopic: "Duality of matter"
  },
  {
    question: "According to de Broglie, a moving particle is associated with a",
    options: [
      "A. magnetic field only",
      "B. matter wave",
      "C. sound wave",
      "D. static charge"
    ],
    answer: "B",
    explanation: "Every moving particle has an associated matter wave of wavelength λ = h/p.",
    subtopic: "Duality of matter"
  },
  {
    question: "The de Broglie wavelength of a particle increases when its",
    options: [
      "A. momentum increases",
      "B. momentum decreases",
      "C. mass increases",
      "D. charge increases"
    ],
    answer: "B",
    explanation: "Since λ = h/p, a smaller momentum gives a longer wavelength.",
    subtopic: "Duality of matter"
  },
  {
    question: "For macroscopic objects, the de Broglie wavelength is",
    options: [
      "A. very large",
      "B. negligible (undetectable)",
      "C. equal to visible light",
      "D. infinite"
    ],
    answer: "B",
    explanation: "Large mass gives huge momentum, so λ = h/p is immeasurably tiny for everyday objects.",
    subtopic: "Duality of matter"
  },
  {
    question: "The momentum p of a particle of mass m moving at speed v is",
    options: [
      "A. mv",
      "B. mv²",
      "C. ½mv²",
      "D. m/v"
    ],
    answer: "A",
    explanation: "Linear momentum p = mv; used in λ = h/mv.",
    subtopic: "Duality of matter"
  },
  {
    question: "An electron accelerated through a potential V has de Broglie wavelength proportional to",
    options: [
      "A. V",
      "B. 1/√V",
      "C. V²",
      "D. √V"
    ],
    answer: "B",
    explanation: "Since p = √(2meV), λ = h/p ∝ 1/√V.",
    subtopic: "Duality of matter"
  },
  {
    question: "Wave-particle duality was first proposed for matter by",
    options: [
      "A. Einstein",
      "B. de Broglie",
      "C. Rutherford",
      "D. Bohr"
    ],
    answer: "B",
    explanation: "Louis de Broglie suggested that matter, like light, has wave properties.",
    subtopic: "Duality of matter"
  },
  {
    question: "Light exhibits particle behaviour in the",
    options: [
      "A. photoelectric effect",
      "B. diffraction pattern",
      "C. interference of water",
      "D. reflection only"
    ],
    answer: "A",
    explanation: "The photoelectric effect is explained by light arriving as discrete photons (particles).",
    subtopic: "Duality of matter"
  },
  {
    question: "Light exhibits wave behaviour in",
    options: [
      "A. the photoelectric effect",
      "B. interference and diffraction",
      "C. Compton scattering",
      "D. pair production"
    ],
    answer: "B",
    explanation: "Interference and diffraction are characteristic wave phenomena shown by light.",
    subtopic: "Duality of matter"
  },
  {
    question: "The quantity h in λ = h/p is",
    options: [
      "A. Planck's constant",
      "B. the speed of light",
      "C. electron charge",
      "D. Avogadro's number"
    ],
    answer: "A",
    explanation: "h ≈ 6.63×10⁻³⁴ J s is Planck's constant.",
    subtopic: "Duality of matter"
  },
  {
    question: "An electron and a proton moving at the same speed have de Broglie wavelengths such that the electron's is",
    options: [
      "A. shorter",
      "B. longer",
      "C. equal",
      "D. zero"
    ],
    answer: "B",
    explanation: "λ = h/mv; the lighter electron has smaller momentum, hence a longer wavelength.",
    subtopic: "Duality of matter"
  },
  {
    question: "The Heisenberg uncertainty principle states that position and momentum cannot both be",
    options: [
      "A. measured at all",
      "B. known exactly at the same time",
      "C. related",
      "D. conserved"
    ],
    answer: "B",
    explanation: "Δx·Δp ≥ h/4π: greater precision in position increases uncertainty in momentum, and vice versa.",
    subtopic: "Duality of matter"
  },
  {
    question: "The uncertainty principle is a consequence of",
    options: [
      "A. measurement error only",
      "B. wave-particle duality",
      "C. gravity",
      "D. friction"
    ],
    answer: "B",
    explanation: "The limit is fundamental, arising from the wave nature of matter, not just instrument error.",
    subtopic: "Duality of matter"
  },
  {
    question: "A photon has momentum given by",
    options: [
      "A. p = h/λ",
      "B. p = hλ",
      "C. p = E/c²",
      "D. p = mc"
    ],
    answer: "A",
    explanation: "For a photon, p = E/c = h/λ.",
    subtopic: "Duality of matter"
  },
  {
    question: "The energy of a photon is related to its wavelength by",
    options: [
      "A. E = hc/λ",
      "B. E = hλ/c",
      "C. E = λ/hc",
      "D. E = hcλ"
    ],
    answer: "A",
    explanation: "E = hf = hc/λ, so shorter wavelength means higher photon energy.",
    subtopic: "Duality of matter"
  },
  {
    question: "Matter waves were first experimentally confirmed by observing",
    options: [
      "A. electron diffraction",
      "B. alpha scattering",
      "C. X-ray absorption",
      "D. beta decay"
    ],
    answer: "A",
    explanation: "Davisson and Germer observed electron diffraction from a crystal, confirming matter waves.",
    subtopic: "Electron diffraction"
  },
  {
    question: "Electron diffraction provides evidence that electrons have",
    options: [
      "A. only particle nature",
      "B. wave nature",
      "C. no mass",
      "D. positive charge"
    ],
    answer: "B",
    explanation: "The diffraction pattern is a wave phenomenon, proving electrons behave as waves.",
    subtopic: "Electron diffraction"
  },
  {
    question: "In an electron diffraction experiment, electrons are directed at a",
    options: [
      "A. thin metal crystal",
      "B. mirror",
      "C. lens",
      "D. magnet"
    ],
    answer: "A",
    explanation: "A crystalline lattice acts as a diffraction grating for the electron matter waves.",
    subtopic: "Electron diffraction"
  },
  {
    question: "The spacing of atoms in a crystal used for electron diffraction is of the order of",
    options: [
      "A. metres",
      "B. nanometres (10⁻¹⁰ m)",
      "C. kilometres",
      "D. millimetres"
    ],
    answer: "B",
    explanation: "Atomic spacings (~10⁻¹⁰ m) match electron wavelengths, enabling diffraction.",
    subtopic: "Electron diffraction"
  },
  {
    question: "The condition for diffraction maxima from a crystal lattice (Bragg) is",
    options: [
      "A. 2d sinθ = nλ",
      "B. d sinθ = nλ",
      "C. λ = 2d",
      "D. nλ = d"
    ],
    answer: "A",
    explanation: "Bragg's law: 2d sinθ = nλ for constructive interference from crystal planes.",
    subtopic: "Electron diffraction"
  },
  {
    question: "As the speed of electrons in a diffraction tube is increased, the diffraction rings",
    options: [
      "A. become larger",
      "B. become smaller",
      "C. disappear",
      "D. stay the same"
    ],
    answer: "B",
    explanation: "Higher speed → larger momentum → shorter λ → smaller diffraction angles/rings.",
    subtopic: "Electron diffraction"
  },
  {
    question: "Electron diffraction patterns are rings rather than spots when the sample is",
    options: [
      "A. a single crystal",
      "B. polycrystalline (many random crystals)",
      "C. a gas",
      "D. a liquid metal"
    ],
    answer: "B",
    explanation: "Randomly oriented micro-crystals give concentric rings instead of single-crystal spots.",
    subtopic: "Electron diffraction"
  },
  {
    question: "The wavelength of an electron is typically comparable to",
    options: [
      "A. radio waves",
      "B. X-rays / atomic spacing",
      "C. sound waves",
      "D. visible light of metres"
    ],
    answer: "B",
    explanation: "Electron wavelengths are angstrom-scale, like X-rays, allowing atomic-resolution imaging.",
    subtopic: "Electron diffraction"
  },
  {
    question: "An electron microscope achieves high resolution because electrons have",
    options: [
      "A. large mass",
      "B. very short wavelengths",
      "C. positive charge",
      "D. slow speed"
    ],
    answer: "B",
    explanation: "Short de Broglie wavelengths allow resolving features far smaller than visible light can.",
    subtopic: "Electron diffraction"
  },
  {
    question: "The resolving power of a microscope improves as the wavelength of the probing wave",
    options: [
      "A. increases",
      "B. decreases",
      "C. stays constant",
      "D. becomes infinite"
    ],
    answer: "B",
    explanation: "Resolution limit ∝ λ, so shorter wavelength gives finer detail.",
    subtopic: "Electron diffraction"
  },
  {
    question: "Davisson and Germer's experiment (1927) confirmed",
    options: [
      "A. the nucleus model",
      "B. de Broglie's matter waves",
      "C. the photoelectric effect",
      "D. radioactivity"
    ],
    answer: "B",
    explanation: "Their observed diffraction of electrons confirmed de Broglie's hypothesis of matter waves.",
    subtopic: "Electron diffraction"
  },
  {
    question: "If the kinetic energy of an electron is doubled, its de Broglie wavelength",
    options: [
      "A. doubles",
      "B. is reduced by factor √2",
      "C. stays the same",
      "D. quadruples"
    ],
    answer: "B",
    explanation: "p = √(2mK), so λ = h/√(2mK); doubling K multiplies λ by 1/√2.",
    subtopic: "Duality of matter"
  },
  {
    question: "X-ray diffraction and electron diffraction both rely on",
    options: [
      "A. charged particles only",
      "B. wave interference from atomic lattices",
      "C. nuclear forces",
      "D. magnetic fields"
    ],
    answer: "B",
    explanation: "Both are wave phenomena producing interference from the regular spacing of crystals.",
    subtopic: "Electron diffraction"
  },
  {
    question: "The complementary principle, associated with Bohr, states that wave and particle descriptions are",
    options: [
      "A. contradictory and unusable",
      "B. complementary views of the same reality",
      "C. always equal",
      "D. never needed"
    ],
    answer: "B",
    explanation: "Wave and particle models are complementary; each describes different experimental aspects.",
    subtopic: "Duality of matter"
  },
  {
    question: "A particle confined in a box has quantised energy levels because of its",
    options: [
      "A. charge",
      "B. wave nature and boundary conditions",
      "C. mass only",
      "D. spin"
    ],
    answer: "B",
    explanation: "Standing matter waves fitting the box length lead to discrete allowed energies.",
    subtopic: "Duality of matter"
  },
  {
    question: "The wave associated with a particle is described by a",
    options: [
      "A. wavefunction",
      "B. velocity vector",
      "C. force field",
      "D. charge density"
    ],
    answer: "A",
    explanation: "Quantum mechanics describes particles by a wavefunction ψ whose square gives probability.",
    subtopic: "Duality of matter"
  },
  {
    question: "The probability of finding a particle is given by the",
    options: [
      "A. wavefunction ψ",
      "B. square of the wavefunction |ψ|²",
      "C. momentum p",
      "D. energy E"
    ],
    answer: "B",
    explanation: "|ψ|² gives the probability density of locating the particle at a point.",
    subtopic: "Duality of matter"
  },
  {
    question: "Compared with a proton of the same kinetic energy, an electron has a",
    options: [
      "A. shorter wavelength",
      "B. longer wavelength",
      "C. equal wavelength",
      "D. zero wavelength"
    ],
    answer: "B",
    explanation: "For the same K, the lighter electron has smaller momentum, hence longer λ = h/√(2mK).",
    subtopic: "Duality of matter"
  },
  {
    question: "The de Broglie hypothesis applies to",
    options: [
      "A. electrons only",
      "B. all matter",
      "C. light only",
      "D. neutrons only"
    ],
    answer: "B",
    explanation: "All matter has an associated wavelength λ = h/p, though often undetectably small.",
    subtopic: "Duality of matter"
  },
  {
    question: "An electron beam passing through a thin graphite film produces",
    options: [
      "A. a single spot",
      "B. diffraction rings",
      "C. no pattern",
      "D. a straight line"
    ],
    answer: "B",
    explanation: "Graphite is polycrystalline, so the electron matter waves give concentric diffraction rings.",
    subtopic: "Electron diffraction"
  },
  {
    question: "The angle θ in Bragg's law corresponds to the",
    options: [
      "A. glancing angle to crystal planes",
      "B. full scattering angle",
      "C. wavelength",
      "D. lattice spacing"
    ],
    answer: "A",
    explanation: "θ in 2d sinθ = nλ is the angle between the beam and the crystal planes.",
    subtopic: "Electron diffraction"
  },
  {
    question: "If the lattice spacing d decreases, for fixed λ the diffraction angle θ",
    options: [
      "A. increases",
      "B. decreases",
      "C. is unchanged",
      "D. becomes zero"
    ],
    answer: "B",
    explanation: "From 2d sinθ = nλ, smaller d requires smaller sinθ, hence smaller θ.",
    subtopic: "Electron diffraction"
  },
  {
    question: "Neutrons can also show diffraction because they have",
    options: [
      "A. charge",
      "B. momentum and hence a de Broglie wavelength",
      "C. no mass",
      "D. only wave nature"
    ],
    answer: "B",
    explanation: "Despite being neutral, neutrons have momentum and an associated matter wavelength.",
    subtopic: "Electron diffraction"
  },
  {
    question: "The photoelectric effect shows light behaving as",
    options: [
      "A. a wave",
      "B. particles (photons)",
      "C. a fluid",
      "D. a sound wave"
    ],
    answer: "B",
    explanation: "Quantised energy transfer in the photoelectric effect reveals the particle nature of light.",
    subtopic: "Duality of matter"
  },
  {
    question: "Compton scattering provides evidence for the",
    options: [
      "A. wave nature of electrons",
      "B. particle (momentum) nature of photons",
      "C. absence of photons",
      "D. nuclear model"
    ],
    answer: "B",
    explanation: "X-ray photon scattering with wavelength shift matches particle momentum conservation.",
    subtopic: "Duality of matter"
  },
  {
    question: "The central idea of wave-particle duality is that the same object can be described by either model depending on the",
    options: [
      "A. temperature",
      "B. experiment performed",
      "C. colour",
      "D. pressure"
    ],
    answer: "B",
    explanation: "Which aspect (wave or particle) is observed depends on the type of measurement made.",
    subtopic: "Duality of matter"
  },
  {
    question: "For an electron of mass 9.1×10⁻³¹ kg moving at 10⁶ m/s, λ = h/p is about",
    options: [
      "A. 7.3×10⁻¹⁰ m",
      "B. 7.3×10⁻⁷ m",
      "C. 7.3×10⁻¹³ m",
      "D. 7.3 m"
    ],
    answer: "A",
    explanation: "λ = 6.63×10⁻³⁴ / (9.1×10⁻³¹ × 10⁶) ≈ 7.3×10⁻¹⁰ m, atomic-scale.",
    subtopic: "Duality of matter"
  },
  {
    question: "Electrons used in electron diffraction typically have energies of",
    options: [
      "A. a few eV",
      "B. tens to hundreds of eV or keV",
      "C. MeV only",
      "D. zero"
    ],
    answer: "B",
    explanation: "Accelerating voltages of tens to thousands of volts give suitable short wavelengths.",
    subtopic: "Electron diffraction"
  },
  {
    question: "The fact that we cannot simultaneously know exact position and momentum is known as",
    options: [
      "A. the duality paradox",
      "B. the uncertainty principle",
      "C. relativity",
      "D. conservation of energy"
    ],
    answer: "B",
    explanation: "Heisenberg's uncertainty principle sets a fundamental limit on simultaneous precision.",
    subtopic: "Duality of matter"
  },
  {
    question: "In wave terms, a localized particle is represented by a",
    options: [
      "A. single sine wave",
      "B. wave packet (superposition of waves)",
      "C. standing wave",
      "D. plane wave"
    ],
    answer: "B",
    explanation: "A wave packet (many wavelengths combined) localises the particle in space.",
    subtopic: "Duality of matter"
  },
  {
    question: "A broader wave packet in position space implies a",
    options: [
      "A. narrower momentum spread",
      "B. wider momentum spread",
      "C. fixed momentum",
      "D. zero momentum"
    ],
    answer: "B",
    explanation: "Fourier duality: compressing position spread broadens the momentum (wavelength) spread.",
    subtopic: "Duality of matter"
  },
  {
    question: "The duality of matter means an atom can be",
    options: [
      "A. diffracted",
      "B. only a hard sphere",
      "C. never observed",
      "D. always visible"
    ],
    answer: "A",
    explanation: "Atoms and molecules, as matter waves, can produce diffraction and interference patterns.",
    subtopic: "Duality of matter"
  },
  {
    question: "Light of wavelength 500 nm has photon energy E = hc/λ approximately",
    options: [
      "A. 4×10⁻¹⁹ J",
      "B. 4×10⁻³⁴ J",
      "C. 6×10⁻⁷ J",
      "D. 3×10⁸ J"
    ],
    answer: "A",
    explanation: "E = (6.63×10⁻³⁴ × 3×10⁸)/(500×10⁻⁹) ≈ 4.0×10⁻¹⁹ J (about 2.5 eV).",
    subtopic: "Duality of matter"
  },
  {
    question: "A particle's wave-like behaviour becomes noticeable only when its wavelength is",
    options: [
      "A. comparable to the size of the obstacle/aperture",
      "B. infinite",
      "C. larger than the universe",
      "D. zero"
    ],
    answer: "A",
    explanation: "Diffraction/interference are significant when λ is comparable to structural dimensions.",
    subtopic: "Duality of matter"
  },
  {
    question: "The discovery of electron diffraction overturned the view that electrons are purely",
    options: [
      "A. waves",
      "B. particles",
      "C. fields",
      "D. photons"
    ],
    answer: "B",
    explanation: "Electrons were thought to be only particles until diffraction revealed their wave nature.",
    subtopic: "Electron diffraction"
  },
  {
    question: "In an electron diffraction tube, a thin carbon film acts as a",
    options: [
      "A. lens",
      "B. diffraction grating",
      "C. magnet",
      "D. detector"
    ],
    answer: "B",
    explanation: "The regular atomic spacing of the carbon film diffracts the electron beam like a grating.",
    subtopic: "Electron diffraction"
  },
  {
    question: "Which statement best summarises wave-particle duality?",
    options: [
      "A. Light is only a wave, matter only particles",
      "B. Both radiation and matter exhibit wave and particle properties",
      "C. Matter has no waves",
      "D. Particles cannot interfere"
    ],
    answer: "B",
    explanation: "Duality means both light and matter show wave and particle characteristics in different contexts.",
    subtopic: "Duality of matter"
  },
  {
    question: "The de Broglie wavelength of a neutron is shorter than that of an electron of the same speed because the neutron has",
    options: [
      "A. greater mass",
      "B. smaller mass",
      "C. no charge",
      "D. greater speed"
    ],
    answer: "A",
    explanation: "λ = h/mv; the more massive neutron has larger momentum and thus a shorter wavelength.",
    subtopic: "Duality of matter"
  }
];

module.exports = questions;
