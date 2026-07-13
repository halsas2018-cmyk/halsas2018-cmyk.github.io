// physics — Introduction to LASER
const questions = [
  {
    question: "What does the letter 'L' in LASER stand for?",
    options: [
      "A. Light",
      "B. Luminous",
      "C. Linear",
      "D. Low"
    ],
    answer: "A",
    explanation: "LASER stands for Light Amplification by Stimulated Emission of Radiation; the 'L' is Light.",
    subtopic: "LASER"
  },
  {
    question: "The acronym LASER stands for Light Amplification by Stimulated Emission of?",
    options: [
      "A. Radiation",
      "B. Refraction",
      "C. Reflection",
      "D. Resonance"
    ],
    answer: "A",
    explanation: "LASER is Light Amplification by Stimulated Emission of Radiation.",
    subtopic: "LASER"
  },
  {
    question: "Which process in a laser produces a cascade of identical photons?",
    options: [
      "A. Spontaneous emission",
      "B. Stimulated emission",
      "C. Absorption",
      "D. Scattering"
    ],
    answer: "B",
    explanation: "Stimulated emission causes an incoming photon to trigger the release of an identical photon, amplifying the light.",
    subtopic: "LASER"
  },
  {
    question: "Laser light is said to be coherent. This means the waves have the same?",
    options: [
      "A. Amplitude only",
      "B. Frequency and constant phase relationship",
      "C. Direction only",
      "D. Speed only"
    ],
    answer: "B",
    explanation: "Coherent light consists of waves with the same frequency and a constant phase relationship.",
    subtopic: "LASER"
  },
  {
    question: "A beam of laser light is highly monochromatic. Monochromatic means the light has?",
    options: [
      "A. One colour and one wavelength",
      "B. Many colours",
      "C. No wavelength",
      "D. Variable phase"
    ],
    answer: "A",
    explanation: "Monochromatic light consists of a single wavelength (and therefore a single colour).",
    subtopic: "LASER"
  },
  {
    question: "Which property of laser light makes it travel as a narrow, nearly parallel beam?",
    options: [
      "A. Divergence",
      "B. High directionality",
      "C. Diffraction",
      "D. Dispersion"
    ],
    answer: "B",
    explanation: "Lasers have high directionality, producing a collimated (parallel) beam with very little spread.",
    subtopic: "LASER"
  },
  {
    question: "In a laser, atoms are first raised to a higher energy level in a process called?",
    options: [
      "A. Pumping",
      "B. Doping",
      "C. Reflecting",
      "D. Diffusing"
    ],
    answer: "A",
    explanation: "Pumping supplies energy to raise atoms to an excited state, creating the population needed for stimulated emission.",
    subtopic: "LASER"
  },
  {
    question: "A necessary condition for laser action is the creation of a?",
    options: [
      "A. Population inversion",
      "B. Population equilibrium",
      "C. Vacuum",
      "D. Plasma"
    ],
    answer: "A",
    explanation: "Population inversion (more atoms in an excited state than the lower state) is required for net amplification.",
    subtopic: "LASER"
  },
  {
    question: "The two mirrors at the ends of a laser form the?",
    options: [
      "A. Cavity",
      "B. Pump",
      "C. Doped region",
      "D. Target"
    ],
    answer: "A",
    explanation: "The resonant optical cavity (two facing mirrors) reflects photons back and forth to build up stimulated emission.",
    subtopic: "LASER"
  },
  {
    question: "One mirror in a laser cavity is partially transmitting so that?",
    options: [
      "A. Light can escape as the output beam",
      "B. No light escapes",
      "C. The pump enters",
      "D. Heat is removed"
    ],
    answer: "A",
    explanation: "The output coupler is partially reflective, allowing a fraction of the coherent light to exit as the laser beam.",
    subtopic: "LASER"
  },
  {
    question: "The active medium of a laser may be a?",
    options: [
      "A. Solid, liquid or gas",
      "B. Only a solid",
      "C. Only a gas",
      "D. Only a vacuum"
    ],
    answer: "A",
    explanation: "Laser active media exist in solid, liquid, and gas forms (e.g. ruby crystal, dye solution, helium–neon gas).",
    subtopic: "LASER"
  },
  {
    question: "A ruby laser uses which type of active material?",
    options: [
      "A. A solid crystal",
      "B. A gas",
      "C. A liquid",
      "D. A plasma"
    ],
    answer: "A",
    explanation: "The ruby laser uses a solid aluminium oxide crystal doped with chromium ions as its active medium.",
    subtopic: "LASER"
  },
  {
    question: "A helium–neon (He–Ne) laser is an example of a?",
    options: [
      "A. Gas laser",
      "B. Solid-state laser",
      "C. Liquid laser",
      "D. Semiconductor laser"
    ],
    answer: "A",
    explanation: "The He–Ne laser uses a gaseous mixture as its active medium and is a common gas laser.",
    subtopic: "LASER"
  },
  {
    question: "Semiconductor lasers are commonly known as?",
    options: [
      "A. Diode lasers",
      "B. Ruby lasers",
      "C. Ionic lasers",
      "D. X-ray lasers"
    ],
    answer: "A",
    explanation: "Semiconductor lasers are called diode lasers and are used in pointers, printers and fibre optics.",
    subtopic: "LASER"
  },
  {
    question: "Laser light is much more intense than ordinary light primarily because it is?",
    options: [
      "A. Coherent and collimated",
      "B. Diffuse",
      "C. Incoherent",
      "D. Polychromatic"
    ],
    answer: "A",
    explanation: "Coherence and collimation concentrate laser energy into a narrow, intense beam.",
    subtopic: "LASER"
  },
  {
    question: "Which of the following is a medical use of lasers?",
    options: [
      "A. Eye surgery",
      "B. Measuring rainfall",
      "C. Cooking food",
      "D. Generating wind"
    ],
    answer: "A",
    explanation: "Lasers are used in eye surgery (e.g. repairing retinas) and many other surgical procedures.",
    subtopic: "LASER"
  },
  {
    question: "In telecommunications, lasers are used to transmit signals through?",
    options: [
      "A. Optical fibres",
      "B. Copper wires only",
      "C. Radio only",
      "D. Wooden rods"
    ],
    answer: "A",
    explanation: "Laser light carries information through optical fibres with very low loss over long distances.",
    subtopic: "LASER"
  },
  {
    question: "Lasers are used in CD and DVD players to?",
    options: [
      "A. Read data from the disc",
      "B. Cool the disc",
      "C. Spin the disc faster",
      "D. Colour the disc"
    ],
    answer: "A",
    explanation: "A focused laser beam reflects off the disc surface; changes in reflection are decoded as digital data.",
    subtopic: "LASER"
  },
  {
    question: "A laser printer uses a laser to?",
    options: [
      "A. Form an image on a charged drum",
      "B. Heat the paper",
      "C. Cut the paper",
      "D. Charge the ink"
    ],
    answer: "A",
    explanation: "The laser draws an electrostatic image on a photosensitive drum, which then attracts toner.",
    subtopic: "LASER"
  },
  {
    question: "Cutting and welding of metals is possible with lasers because of their?",
    options: [
      "A. High energy density",
      "B. Low intensity",
      "C. Divergence",
      "D. Incoherence"
    ],
    answer: "A",
    explanation: "The concentrated energy of a laser beam can melt or vaporise material for cutting and welding.",
    subtopic: "LASER"
  },
  {
    question: "Barcode scanners commonly use a?",
    options: [
      "A. Low-power laser",
      "B. Microwave oven",
      "C. X-ray tube",
      "D. Radio transmitter"
    ],
    answer: "A",
    explanation: "Low-power visible lasers scan barcodes; the reflected pattern is converted to the code.",
    subtopic: "LASER"
  },
  {
    question: "Laser ranging (e.g. to the Moon) relies on the beam being?",
    options: [
      "A. Collimated and coherent",
      "B. Broadly divergent",
      "C. Invisible only",
      "D. Polychromatic"
    ],
    answer: "A",
    explanation: "A collimated, coherent beam stays narrow over huge distances, allowing precise distance measurement by timing reflection.",
    subtopic: "LASER"
  },
  {
    question: "Compared with ordinary light, laser light has a much smaller?",
    options: [
      "A. Beam divergence",
      "B. Coherence length",
      "C. Energy",
      "D. Frequency"
    ],
    answer: "A",
    explanation: "Laser beams spread very little (small divergence), unlike the rapid spreading of ordinary light.",
    subtopic: "LASER"
  },
  {
    question: "The energy of a laser photon is related to its wavelength by E =?",
    options: [
      "A. hc/λ",
      "B. hλ/c",
      "C. cλ/h",
      "D. h/λc"
    ],
    answer: "A",
    explanation: "Photon energy E = hc/λ, where h is Planck's constant and c is the speed of light.",
    subtopic: "LASER"
  },
  {
    question: "The process by which an atom absorbs a photon and moves to a higher energy level is called?",
    options: [
      "A. Absorption",
      "B. Stimulated emission",
      "C. Spontaneous emission",
      "D. Reflection"
    ],
    answer: "A",
    explanation: "Absorption is when an atom takes in a photon and jumps to a higher excited state.",
    subtopic: "LASER"
  },
  {
    question: "Spontaneous emission produces light that is generally?",
    options: [
      "A. Incoherent",
      "B. Coherent",
      "C. Collimated",
      "D. Monochromatic only"
    ],
    answer: "A",
    explanation: "Spontaneous emission occurs at random times and directions, giving incoherent ordinary light.",
    subtopic: "LASER"
  },
  {
    question: "A metastable state in a laser is important because it?",
    options: [
      "A. Allows population inversion to build up",
      "B. Prevents emission",
      "C. Absorbs all light",
      "D. Cools the medium"
    ],
    answer: "A",
    explanation: "Atoms in a metastable state linger longer, enabling a population inversion for laser action.",
    subtopic: "LASER"
  },
  {
    question: "Which of these is NOT a characteristic of laser light?",
    options: [
      "A. Diffuse spread",
      "B. Coherence",
      "C. Monochromaticity",
      "D. High directionality"
    ],
    answer: "A",
    explanation: "Laser light is highly directional (collimated), not diffusely spread like ordinary light.",
    subtopic: "LASER"
  },
  {
    question: "The 'amplification' in LASER refers to?",
    options: [
      "A. Increasing the number of identical photons",
      "B. Increasing voltage",
      "C. Increasing mass",
      "D. Increasing temperature only"
    ],
    answer: "A",
    explanation: "Stimulated emission amplifies light by producing many identical photons from few.",
    subtopic: "LASER"
  },
  {
    question: "A laser pointer emits visible red light because it uses a?",
    options: [
      "A. Diode laser",
      "B. Ruby crystal",
      "C. He–Ne only",
      "D. Flashlamp"
    ],
    answer: "A",
    explanation: "Most small red laser pointers use a semiconductor (diode) laser.",
    subtopic: "LASER"
  },
  {
    question: "One danger of laser light to the eyes is that the beam is?",
    options: [
      "A. Focused onto the retina",
      "B. Always invisible",
      "C. Cold",
      "D. Divergent"
    ],
    answer: "A",
    explanation: "The eye lens focuses the narrow beam onto a tiny retinal spot, which can cause damage.",
    subtopic: "LASER"
  },
  {
    question: "Holography (3-D images) is possible mainly because laser light is?",
    options: [
      "A. Coherent",
      "B. Divergent",
      "C. Incoherent",
      "D. Coloured only"
    ],
    answer: "A",
    explanation: "Coherence lets laser light record and reproduce interference patterns needed for holograms.",
    subtopic: "LASER"
  },
  {
    question: "The speed of laser light in vacuum is approximately?",
    options: [
      "A. 3.0 × 10⁸ m/s",
      "B. 3.0 × 10⁶ m/s",
      "C. 1.5 × 10⁸ m/s",
      "D. 9.0 × 10⁸ m/s"
    ],
    answer: "A",
    explanation: "All light, including laser light, travels at c ≈ 3.0 × 10⁸ m/s in vacuum.",
    subtopic: "LASER"
  },
  {
    question: "The wavelength of typical red He–Ne laser light is about?",
    options: [
      "A. 632.8 nm",
      "B. 10 nm",
      "C. 5000 nm",
      "D. 1 mm"
    ],
    answer: "A",
    explanation: "The common red He–Ne laser emits at a wavelength of about 632.8 nm.",
    subtopic: "LASER"
  },
  {
    question: "Which statement about laser light is correct?",
    options: [
      "A. It is highly directional and collimated",
      "B. It spreads out rapidly",
      "C. It has many wavelengths",
      "D. It is incoherent"
    ],
    answer: "A",
    explanation: "Laser light is collimated and highly directional, with very little spread.",
    subtopic: "LASER"
  },
  {
    question: "In a laser, the active medium is 'pumped' in order to?",
    options: [
      "A. Create a population inversion",
      "B. Cool the system",
      "C. Reflect photons",
      "D. Block light"
    ],
    answer: "A",
    explanation: "Pumping raises atoms to excited states to achieve the population inversion needed for amplification.",
    subtopic: "LASER"
  },
  {
    question: "The resonant cavity of a laser increases the?",
    options: [
      "A. Intensity by repeated passes",
      "B. Wavelength",
      "C. Temperature only",
      "D. Mass"
    ],
    answer: "A",
    explanation: "Mirrors make photons traverse the medium many times, greatly increasing stimulated emission and intensity.",
    subtopic: "LASER"
  },
  {
    question: "Laser light can be used to measure very small distances because it is?",
    options: [
      "A. Monochromatic and coherent",
      "B. Always blue",
      "C. Divergent",
      "D. Incoherent"
    ],
    answer: "A",
    explanation: "Coherent, monochromatic light produces stable interference fringes used in precise length measurement.",
    subtopic: "LASER"
  },
  {
    question: "Which of the following best describes 'stimulated' emission?",
    options: [
      "A. An incoming photon triggers an identical photon",
      "B. An atom emits randomly",
      "C. An atom absorbs a photon",
      "D. Light is reflected"
    ],
    answer: "A",
    explanation: "In stimulated emission an incoming photon causes an excited atom to emit a second, identical photon.",
    subtopic: "LASER"
  },
  {
    question: "Laser surgery can cauterise (seal) cuts because the beam?",
    options: [
      "A. Both cuts and heat-coagulates tissue",
      "B. Only cools tissue",
      "C. Only lights tissue",
      "D. Dissolves bone"
    ],
    answer: "A",
    explanation: "The focused beam cuts while its heat coagulates blood vessels, reducing bleeding.",
    subtopic: "LASER"
  },
  {
    question: "A laser producing green light has a shorter wavelength than one producing?",
    options: [
      "A. Red light",
      "B. Ultraviolet",
      "C. X-rays",
      "D. Gamma rays"
    ],
    answer: "A",
    explanation: "Green light has a shorter wavelength than red light in the visible spectrum.",
    subtopic: "LASER"
  },
  {
    question: "The frequency of laser light is determined by its?",
    options: [
      "A. Wavelength via c = fλ",
      "B. Intensity only",
      "C. Colour of the casing",
      "D. Mirror size"
    ],
    answer: "A",
    explanation: "f = c/λ, so the frequency follows from the wavelength and the fixed speed of light.",
    subtopic: "LASER"
  },
  {
    question: "Which device would most likely contain a diode laser?",
    options: [
      "A. A fibre-optic communication set",
      "B. A mechanical clock",
      "C. A battery",
      "D. A resistor"
    ],
    answer: "A",
    explanation: "Diode lasers are the light sources in fibre-optic communication systems.",
    subtopic: "LASER"
  },
  {
    question: "The term 'optical cavity' in a laser refers to the space between the?",
    options: [
      "A. Two mirrors",
      "B. Two pumps",
      "C. Two batteries",
      "D. Two gases"
    ],
    answer: "A",
    explanation: "The optical cavity is the region between the two end mirrors where light bounces and is amplified.",
    subtopic: "LASER"
  },
  {
    question: "Laser light differs from an LED because it is?",
    options: [
      "A. Coherent and monochromatic",
      "B. Always white",
      "C. Non-directional",
      "D. Made of heat only"
    ],
    answer: "A",
    explanation: "Lasers emit coherent, monochromatic, collimated light, whereas LEDs emit incoherent, broader-spectrum light.",
    subtopic: "LASER"
  },
  {
    question: "To maintain laser action continuously, the medium must be?",
    options: [
      "A. Continuously pumped",
      "B. Kept in the dark",
      "C. Frozen solid",
      "D. Depleted of atoms"
    ],
    answer: "A",
    explanation: "Continuous pumping replenishes excited atoms so population inversion is sustained.",
    subtopic: "LASER"
  },
  {
    question: "Which property makes laser beams useful for aiming and alignment?",
    options: [
      "A. Straight, non-diverging path",
      "B. Random direction",
      "C. Wide spread",
      "D. Fading quickly"
    ],
    answer: "A",
    explanation: "The straight, collimated path of a laser beam makes it ideal for alignment and aiming.",
    subtopic: "LASER"
  },
  {
    question: "Photons emitted by stimulated emission are?",
    options: [
      "A. Identical in frequency, phase and direction",
      "B. All different",
      "C. Always absorbed",
      "D. Random in phase"
    ],
    answer: "A",
    explanation: "Stimulated emission produces photons identical to the stimulating one in frequency, phase and direction.",
    subtopic: "LASER"
  },
  {
    question: "A major advantage of fibre-optic laser communication over copper is?",
    options: [
      "A. Much higher bandwidth and lower loss",
      "B. Heavier cables",
      "C. More interference",
      "D. Shorter range"
    ],
    answer: "A",
    explanation: "Optical fibres carry laser signals with huge bandwidth and very low attenuation over long distances.",
    subtopic: "LASER"
  },
  {
    question: "The output of a laser is described as 'collimated' because the rays are?",
    options: [
      "A. Nearly parallel",
      "B. Widely scattered",
      "C. Curved",
      "D. Random"
    ],
    answer: "A",
    explanation: "Collimated means the light rays are nearly parallel, producing a tight beam.",
    subtopic: "LASER"
  },
  {
    question: "Which of the following statements is true of lasers?",
    options: [
      "A. They produce coherent, monochromatic, collimated light",
      "B. They produce ordinary white light",
      "C. They cannot be focused",
      "D. They emit only heat"
    ],
    answer: "A",
    explanation: "The three defining properties of laser light are coherence, monochromaticity and directionality.",
    subtopic: "LASER"
  }
];

module.exports = questions;
