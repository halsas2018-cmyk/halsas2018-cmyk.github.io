// physics — Electromagnetic Waves
const questions = [
  {
    question: "All electromagnetic waves travel in vacuum at a speed of about",
    options: [
      "A. 340 m/s",
      "B. 3 × 10⁸ m/s",
      "C. 1500 m/s",
      "D. 3 × 10⁶ m/s"
    ],
    answer: "B",
    explanation: "All EM waves travel at c ≈ 3 × 10⁸ m/s in vacuum, regardless of frequency.",
    subtopic: "Types & uses"
  },
  {
    question: "Electromagnetic waves are",
    options: [
      "A. longitudinal and mechanical",
      "B. transverse and do not need a medium",
      "C. longitudinal and need a medium",
      "D. compressional"
    ],
    answer: "B",
    explanation: "EM waves are transverse oscillations of electric and magnetic fields and propagate through vacuum.",
    subtopic: "Types & uses"
  },
  {
    question: "In an electromagnetic wave, the electric and magnetic fields are",
    options: [
      "A. parallel to each other and to propagation",
      "B. perpendicular to each other and to propagation",
      "C. parallel to propagation only",
      "D. random"
    ],
    answer: "B",
    explanation: "E and B fields are mutually perpendicular and both perpendicular to the direction of travel.",
    subtopic: "Types & uses"
  },
  {
    question: "The electromagnetic spectrum is arranged in order of increasing",
    options: [
      "A. speed",
      "B. frequency (or decreasing wavelength)",
      "C. amplitude",
      "D. mass"
    ],
    answer: "B",
    explanation: "Spectrum order by rising frequency: radio → microwave → infrared → visible → UV → X-ray → gamma.",
    subtopic: "Types & uses"
  },
  {
    question: "Which of these has the longest wavelength?",
    options: [
      "A. Gamma rays",
      "B. Radio waves",
      "C. X-rays",
      "D. Ultraviolet"
    ],
    answer: "B",
    explanation: "Radio waves have the longest wavelengths and lowest frequencies of the EM spectrum.",
    subtopic: "Types & uses"
  },
  {
    question: "Which of these has the highest frequency?",
    options: [
      "A. Radio waves",
      "B. Gamma rays",
      "C. Microwaves",
      "D. Visible light"
    ],
    answer: "B",
    explanation: "Gamma rays have the highest frequency and shortest wavelength of the EM spectrum.",
    subtopic: "Types & uses"
  },
  {
    question: "Radio waves are used mainly for",
    options: [
      "A. cooking food",
      "B. communication (radio, TV, mobile)",
      "C. sterilising water",
      "D. taking photographs of bones"
    ],
    answer: "B",
    explanation: "Radio waves carry information in broadcasting and telecommunications because they diffract easily.",
    subtopic: "Types & uses"
  },
  {
    question: "Microwaves are used in",
    options: [
      "A. satellite communication and cooking",
      "B. photography of bones",
      "C. sterilising wounds",
      "D. weather only"
    ],
    answer: "A",
    explanation: "Microwaves are used in radar, satellite links and microwave ovens (heating water molecules).",
    subtopic: "Types & uses"
  },
  {
    question: "Microwave ovens heat food by making",
    options: [
      "A. metal vibrate",
      "B. water molecules rotate",
      "C. air glow",
      "D. light reflect"
    ],
    answer: "B",
    explanation: "Microwaves cause polar water molecules to rotate, generating heat that cooks the food.",
    subtopic: "Types & uses"
  },
  {
    question: "Infrared radiation is commonly detected as",
    options: [
      "A. sound",
      "B. heat",
      "C. X-ray images",
      "D. radio signals"
    ],
    answer: "B",
    explanation: "Infrared is thermal radiation; we feel it as heat and it is used in remote controls and thermal imaging.",
    subtopic: "Types & uses"
  },
  {
    question: "A television remote control uses",
    options: [
      "A. X-rays",
      "B. infrared radiation",
      "C. gamma rays",
      "D. radio waves"
    ],
    answer: "B",
    explanation: "Remote controls send coded infrared pulses to the TV receiver.",
    subtopic: "Types & uses"
  },
  {
    question: "Visible light is the part of the EM spectrum that",
    options: [
      "A. is invisible to the eye",
      "B. the human eye can detect",
      "C. cooks food",
      "D. penetrates bone"
    ],
    answer: "B",
    explanation: "Visible light occupies the narrow band of wavelengths (~400–700 nm) detectable by the eye.",
    subtopic: "Types & uses"
  },
  {
    question: "Ultraviolet radiation is used for",
    options: [
      "A. cooking",
      "B. sterilisation and detecting forged banknotes",
      "C. radio broadcasting",
      "D. heating food"
    ],
    answer: "B",
    explanation: "UV kills microbes (sterilisation) and makes some materials fluoresce (security marking).",
    subtopic: "Types & uses"
  },
  {
    question: "Overexposure to ultraviolet radiation can cause",
    options: [
      "A. improved vision",
      "B. skin cancer and sunburn",
      "C. stronger bones only",
      "D. no effect"
    ],
    answer: "B",
    explanation: "Excess UV damages skin DNA, causing sunburn and increasing skin-cancer risk.",
    subtopic: "Types & uses"
  },
  {
    question: "X-rays are used mainly in",
    options: [
      "A. microwave cooking",
      "B. medical imaging of bones",
      "C. remote controls",
      "D. radio broadcasting"
    ],
    answer: "B",
    explanation: "X-rays penetrate soft tissue but are absorbed by bone, giving skeletal images.",
    subtopic: "Types & uses"
  },
  {
    question: "X-rays have a wavelength that is",
    options: [
      "A. longer than radio waves",
      "B. shorter than ultraviolet",
      "C. equal to visible light",
      "D. the longest in the spectrum"
    ],
    answer: "B",
    explanation: "X-rays sit above UV in frequency, so their wavelength is shorter than ultraviolet's.",
    subtopic: "Types & uses"
  },
  {
    question: "Gamma rays are produced by",
    options: [
      "A. hot filaments",
      "B. radioactive nuclei",
      "C. radio antennae",
      "D. the sun only"
    ],
    answer: "B",
    explanation: "Gamma rays are high-energy photons emitted during radioactive decay of atomic nuclei.",
    subtopic: "Types & uses"
  },
  {
    question: "Gamma rays are used in medicine to",
    options: [
      "A. cook food",
      "B. kill cancer cells (radiotherapy)",
      "C. take bone photographs",
      "D. control remotes"
    ],
    answer: "B",
    explanation: "Focused gamma radiation destroys tumour cells in radiotherapy.",
    subtopic: "Types & uses"
  },
  {
    question: "The relationship between frequency f and wavelength λ for EM waves is",
    options: [
      "A. c = fλ",
      "B. c = f/λ",
      "C. c = λ/f",
      "D. c = f + λ"
    ],
    answer: "A",
    explanation: "For all EM waves, c = fλ, so higher frequency means shorter wavelength.",
    subtopic: "Types & uses"
  },
  {
    question: "A radio wave of frequency 100 MHz has wavelength",
    options: [
      "A. 3 m",
      "B. 30 m",
      "C. 0.3 m",
      "D. 300 m"
    ],
    answer: "A",
    explanation: "λ = c/f = 3×10⁸ / 1×10⁸ = 3 m.",
    subtopic: "Types & uses"
  },
  {
    question: "Which EM wave can penetrate the Earth's atmosphere best for satellite communication?",
    options: [
      "A. Infrared",
      "B. Certain microwaves/radio bands",
      "C. Gamma rays",
      "D. Ultraviolet"
    ],
    answer: "B",
    explanation: "Specific microwave/radio 'windows' pass through the atmosphere and are used for satellites.",
    subtopic: "Types & uses"
  },
  {
    question: "Ultraviolet light causes some substances to",
    options: [
      "A. become invisible",
      "B. fluoresce (glow)",
      "C. melt",
      "D. reflect X-rays"
    ],
    answer: "B",
    explanation: "UV excites electrons in fluorescent materials, which then emit visible light.",
    subtopic: "Types & uses"
  },
  {
    question: "The ozone layer protects life by absorbing",
    options: [
      "A. radio waves",
      "B. ultraviolet radiation",
      "C. visible light",
      "D. microwaves"
    ],
    answer: "B",
    explanation: "The ozone layer absorbs most harmful UV from the sun before it reaches the ground.",
    subtopic: "Types & uses"
  },
  {
    question: "Which EM wave is used in night-vision / thermal-imaging cameras?",
    options: [
      "A. Gamma rays",
      "B. Infrared",
      "C. X-rays",
      "D. Radio waves"
    ],
    answer: "B",
    explanation: "Thermal cameras detect infrared emitted by warm objects to image them in the dark.",
    subtopic: "Types & uses"
  },
  {
    question: "A source of infrared radiation is",
    options: [
      "A. a cold block of ice",
      "B. any warm object",
      "C. a radio aerial",
      "D. a gamma source only"
    ],
    answer: "B",
    explanation: "All objects above absolute zero emit infrared according to their temperature.",
    subtopic: "Types & uses"
  },
  {
    question: "Compared with visible light, infrared has",
    options: [
      "A. higher frequency",
      "B. lower frequency and longer wavelength",
      "C. same wavelength",
      "D. higher energy per photon"
    ],
    answer: "B",
    explanation: "Infrared lies just below visible red: lower frequency, longer wavelength, less photon energy.",
    subtopic: "Types & uses"
  },
  {
    question: "Compared with visible light, ultraviolet has",
    options: [
      "A. lower frequency",
      "B. higher frequency and shorter wavelength",
      "C. same energy",
      "D. longer wavelength"
    ],
    answer: "B",
    explanation: "UV lies beyond violet: higher frequency, shorter wavelength, more photon energy.",
    subtopic: "Types & uses"
  },
  {
    question: "Radar systems mainly use",
    options: [
      "A. X-rays",
      "B. microwaves",
      "C. gamma rays",
      "D. infrared"
    ],
    answer: "B",
    explanation: "Radar transmits microwaves and detects their reflection to locate objects.",
    subtopic: "Types & uses"
  },
  {
    question: "Electromagnetic waves carry",
    options: [
      "A. matter only",
      "B. energy and momentum",
      "C. electric charge",
      "D. mass"
    ],
    answer: "B",
    explanation: "EM waves transport energy and momentum through space without carrying matter or charge.",
    subtopic: "Types & uses"
  },
  {
    question: "A disadvantage of X-rays is that they",
    options: [
      "A. are too cheap",
      "B. can damage living cells",
      "C. cannot penetrate tissue",
      "D. are invisible"
    ],
    answer: "B",
    explanation: "Ionising X-rays can damage DNA, so exposure must be limited and shielded.",
    subtopic: "Types & uses"
  },
  {
    question: "Gamma radiation is more penetrating than X-rays because it has",
    options: [
      "A. lower frequency",
      "B. higher energy photons",
      "C. longer wavelength",
      "D. more mass"
    ],
    answer: "B",
    explanation: "Gamma photons are generally higher-energy than X-rays, making them more penetrating.",
    subtopic: "Types & uses"
  },
  {
    question: "Lead is commonly used to shield against",
    options: [
      "A. radio waves",
      "B. X-rays and gamma rays",
      "C. visible light",
      "D. infrared"
    ],
    answer: "B",
    explanation: "Dense lead absorbs ionising X-rays and gamma rays, protecting people nearby.",
    subtopic: "Types & uses"
  },
  {
    question: "Sunburn is caused mainly by",
    options: [
      "A. infrared",
      "B. ultraviolet",
      "C. radio waves",
      "D. microwaves"
    ],
    answer: "B",
    explanation: "UV-B in sunlight damages skin, causing sunburn; infrared only heats.",
    subtopic: "Types & uses"
  },
  {
    question: "Fibre-optic communication uses",
    options: [
      "A. sound waves",
      "B. infrared/visible light guided by total internal reflection",
      "C. gamma rays",
      "D. radio waves in air"
    ],
    answer: "B",
    explanation: "Light (often infrared) is guided along glass fibres by total internal reflection for fast data links.",
    subtopic: "Types & uses"
  },
  {
    question: "The energy of an EM photon is given by",
    options: [
      "A. E = hf",
      "B. E = h/f",
      "C. E = f/h",
      "D. E = h + f"
    ],
    answer: "A",
    explanation: "Photon energy E = hf (Planck's constant × frequency); higher frequency = more energy.",
    subtopic: "Types & uses"
  },
  {
    question: "A photon of gamma radiation has more energy than a photon of",
    options: [
      "A. visible light",
      "B. radio waves",
      "C. infrared",
      "D. all of the above"
    ],
    answer: "D",
    explanation: "Gamma rays have the highest frequency, so their photons carry more energy than radio, IR or visible.",
    subtopic: "Types & uses"
  },
  {
    question: "Which of these is NOT an electromagnetic wave?",
    options: [
      "A. Light",
      "B. Sound",
      "C. Radio wave",
      "D. X-ray"
    ],
    answer: "B",
    explanation: "Sound is a mechanical longitudinal wave; light, radio and X-rays are all electromagnetic.",
    subtopic: "Types & uses"
  },
  {
    question: "The visible spectrum lies between",
    options: [
      "A. radio and microwave",
      "B. infrared and ultraviolet",
      "C. X-ray and gamma",
      "D. microwave and radio"
    ],
    answer: "B",
    explanation: "In frequency order, visible light sits between infrared (below) and ultraviolet (above).",
    subtopic: "Types & uses"
  },
  {
    question: "Wireless local networks (Wi-Fi) operate using",
    options: [
      "A. gamma rays",
      "B. radio/microwave frequencies",
      "C. X-rays",
      "D. infrared from the sun"
    ],
    answer: "B",
    explanation: "Wi-Fi uses radio-frequency/microwave bands to transmit data without wires.",
    subtopic: "Types & uses"
  },
  {
    question: "Bluetooth devices communicate using",
    options: [
      "A. X-rays",
      "B. short-range radio waves",
      "C. gamma rays",
      "D. visible light"
    ],
    answer: "B",
    explanation: "Bluetooth uses low-power radio waves in the 2.4 GHz band for short-range links.",
    subtopic: "Types & uses"
  },
  {
    question: "An electromagnetic wave consists of",
    options: [
      "A. matter only",
      "B. oscillating electric and magnetic fields",
      "C. sound only",
      "D. static charges"
    ],
    answer: "B",
    explanation: "An EM wave is a self-propagating oscillation of coupled electric and magnetic fields.",
    subtopic: "Types & uses"
  },
  {
    question: "As you move along the EM spectrum from radio to gamma, the energy per photon",
    options: [
      "A. decreases",
      "B. increases",
      "C. stays constant",
      "D. becomes zero"
    ],
    answer: "B",
    explanation: "Higher frequency toward gamma means larger photon energy (E = hf).",
    subtopic: "Types & uses"
  },
  {
    question: "A microwave of frequency 3 GHz has wavelength",
    options: [
      "A. 0.1 m",
      "B. 10 cm",
      "C. 1 m",
      "D. 100 m"
    ],
    answer: "B",
    explanation: "λ = c/f = 3×10⁸ / 3×10⁹ = 0.1 m = 10 cm.",
    subtopic: "Types & uses"
  },
  {
    question: "Which property makes radio waves suitable for long-distance communication?",
    options: [
      "A. They are ionising",
      "B. They diffract around obstacles and travel far",
      "C. They are visible",
      "D. They penetrate lead"
    ],
    answer: "B",
    explanation: "Long wavelengths diffract around hills/buildings and reflect off the ionosphere, aiding range.",
    subtopic: "Types & uses"
  },
  {
    question: "Hospital sterilisation of equipment can be done with",
    options: [
      "A. infrared lamps",
      "B. ultraviolet light or gamma rays",
      "C. radio music",
      "D. visible bulbs"
    ],
    answer: "B",
    explanation: "UV and gamma radiation kill bacteria, so they sterilise medical tools and supplies.",
    subtopic: "Types & uses"
  },
  {
    question: "The speed of an EM wave in a material medium is",
    options: [
      "A. greater than c",
      "B. less than c",
      "C. zero",
      "D. infinite"
    ],
    answer: "B",
    explanation: "In any material, light slows to v = c/n, which is less than c in vacuum.",
    subtopic: "Types & uses"
  },
  {
    question: "Airport security body scanners often use",
    options: [
      "A. gamma rays",
      "B. millimetre-wave (microwave) or X-ray imaging",
      "C. visible light only",
      "D. sound waves"
    ],
    answer: "B",
    explanation: "Millimetre-wave scanners (microwave band) image the body surface without ionising radiation.",
    subtopic: "Types & uses"
  },
  {
    question: "Light from the sun reaching Earth is predominantly",
    options: [
      "A. gamma rays",
      "B. visible and infrared with some UV",
      "C. X-rays only",
      "D. radio only"
    ],
    answer: "B",
    explanation: "Solar radiation at Earth is mostly visible and infrared, with a smaller UV component.",
    subtopic: "Types & uses"
  },
  {
    question: "Which EM wave is used to study crystal structure?",
    options: [
      "A. Radio waves",
      "B. X-rays (diffraction)",
      "C. Infrared",
      "D. Microwaves"
    ],
    answer: "B",
    explanation: "X-ray diffraction reveals atomic spacing in crystals because X-ray wavelengths match atomic scales.",
    subtopic: "Types & uses"
  },
  {
    question: "The greenhouse effect is mainly due to the atmosphere absorbing",
    options: [
      "A. outgoing infrared from Earth",
      "B. incoming radio waves",
      "C. gamma rays",
      "D. X-rays"
    ],
    answer: "A",
    explanation: "Greenhouse gases absorb Earth's infrared radiation and re-radiate it, warming the surface.",
    subtopic: "Types & uses"
  },
  {
    question: "A patient swallowing a radioactive tracer is imaged using",
    options: [
      "A. infrared cameras",
      "B. gamma-ray detection (e.g. PET scan)",
      "C. microwave ovens",
      "D. radio broadcasts"
    ],
    answer: "B",
    explanation: "Emitted gamma rays from a tracer are detected to build medical images such as PET scans.",
    subtopic: "Types & uses"
  },
  {
    question: "Which list is in order of increasing frequency?",
    options: [
      "A. Gamma, X-ray, UV, visible, IR, microwave, radio",
      "B. Radio, microwave, IR, visible, UV, X-ray, gamma",
      "C. Visible, radio, gamma, X-ray",
      "D. UV, radio, IR, gamma"
    ],
    answer: "B",
    explanation: "Increasing frequency: radio → microwave → infrared → visible → ultraviolet → X-ray → gamma.",
    subtopic: "Types & uses"
  },
  {
    question: "EM waves can travel through space because they",
    options: [
      "A. need air",
      "B. are self-sustaining fields needing no medium",
      "C. are sound",
      "D. carry matter"
    ],
    answer: "B",
    explanation: "Changing electric fields generate magnetic fields and vice versa, so EM waves propagate in vacuum.",
    subtopic: "Types & uses"
  },
  {
    question: "The refractive index of a material for X-rays is usually",
    options: [
      "A. slightly less than 1",
      "B. much greater than 1",
      "C. zero",
      "D. infinite"
    ],
    answer: "A",
    explanation: "For X-rays most materials have n slightly below 1, so X-rays refract oddly and mostly pass through.",
    subtopic: "Types & uses"
  },
  {
    question: "A solar panel converts",
    options: [
      "A. sound to electricity",
      "B. visible/IR light to electricity",
      "C. gamma to heat only",
      "D. radio to light"
    ],
    answer: "B",
    explanation: "Photovoltaic cells turn incoming sunlight (visible/near-IR) directly into electrical energy.",
    subtopic: "Types & uses"
  }
];

module.exports = questions;
