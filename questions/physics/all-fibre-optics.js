// physics — Fibre Optics
const questions = [
  {
    question: "An optical fibre guides light mainly by the principle of:",
    options: [
      "A. Reflection from a mirror",
      "B. Total internal reflection",
      "C. Diffraction",
      "D. Refraction only at the ends"
    ],
    answer: "B",
    explanation: "Light is repeatedly totally internally reflected at the core-cladding boundary, carrying it along the fibre.",
    subtopic: "Fibre optics"
  },
  {
    question: "An optical fibre consists of a central core surrounded by a:",
    options: [
      "A. Metal sheath",
      "B. Cladding of lower refractive index",
      "C. Vacuum",
      "D. Cladding of higher refractive index"
    ],
    answer: "B",
    explanation: "The cladding has a slightly lower refractive index than the core so total internal reflection can occur.",
    subtopic: "Fibre optics"
  },
  {
    question: "For total internal reflection to occur at the core-cladding boundary, light must travel:",
    options: [
      "A. From lower to higher refractive index",
      "B. From higher to lower refractive index, above the critical angle",
      "C. Along the axis only",
      "D. In a vacuum"
    ],
    answer: "B",
    explanation: "TIR requires going from the denser (core) to the less dense (cladding) medium at an angle greater than the critical angle.",
    subtopic: "Fibre optics"
  },
  {
    question: "The critical angle c between two media of refractive indices n₁ (core) and n₂ (cladding, n₁ > n₂) is given by:",
    options: [
      "A. sin c = n₁/n₂",
      "B. sin c = n₂/n₁",
      "C. sin c = n₁ − n₂",
      "D. sin c = n₁n₂"
    ],
    answer: "B",
    explanation: "At the critical angle, n₁ sin c = n₂ sin 90° = n₂, so sin c = n₂/n₁.",
    subtopic: "Fibre optics"
  },
  {
    question: "Refractive index n of a medium is defined as:",
    options: [
      "A. Speed of light in medium / speed in vacuum",
      "B. Speed of light in vacuum / speed in medium",
      "C. Wavelength in vacuum / frequency",
      "D. Density of medium"
    ],
    answer: "B",
    explanation: "n = c/v, where c is speed in vacuum and v is speed in the medium.",
    subtopic: "Fibre optics"
  },
  {
    question: "Snell's law at an interface is written as:",
    options: [
      "A. n₁ sinθ₁ = n₂ sinθ₂",
      "B. n₁/sinθ₁ = n₂/sinθ₂",
      "C. sinθ₁ = sinθ₂",
      "D. n₁ + n₂ = sinθ₁ + sinθ₂"
    ],
    answer: "A",
    explanation: "Snell's law: n₁ sinθ₁ = n₂ sinθ₂, relating angles to refractive indices.",
    subtopic: "Fibre optics"
  },
  {
    question: "The refractive index of the core is 1.50 and the cladding 1.48. The critical angle is:",
    options: [
      "A. sin⁻¹(1.48/1.50)",
      "B. sin⁻¹(1.50/1.48)",
      "C. 1.48/1.50 radians",
      "D. 90°"
    ],
    answer: "A",
    explanation: "sin c = n₂/n₁ = 1.48/1.50, so c = sin⁻¹(1.48/1.50).",
    subtopic: "Fibre optics"
  },
  {
    question: "If the core index is 1.50 and cladding 1.48, the numerical value of sin c is approximately:",
    options: [
      "A. 0.987",
      "B. 1.013",
      "C. 0.5",
      "D. 0.75"
    ],
    answer: "A",
    explanation: "sin c = 1.48/1.50 = 0.9867 ≈ 0.987; the critical angle is about 80.6°.",
    subtopic: "Fibre optics"
  },
  {
    question: "The acceptance angle of a fibre is the:",
    options: [
      "A. Angle inside the core",
      "B. Maximum angle at the input end within which light is guided",
      "C. Critical angle",
      "D. Angle of refraction in air"
    ],
    answer: "B",
    explanation: "Only rays entering within the acceptance angle (from air) are captured and guided by TIR.",
    subtopic: "Fibre optics"
  },
  {
    question: "The numerical aperture (NA) of a step-index fibre relates to:",
    options: [
      "A. The fibre length",
      "B. Its light-gathering ability: NA = √(n₁² − n₂²)",
      "C. The speed of light",
      "D. The colour of light"
    ],
    answer: "B",
    explanation: "NA = √(n₁² − n₂²) and also equals n₀ sinθ_a (acceptance angle); larger NA gathers more light.",
    subtopic: "Fibre optics"
  },
  {
    question: "A step-index fibre has a core of uniform refractive index and a cladding of:",
    options: [
      "A. Uniform lower refractive index",
      "B. Gradually decreasing index",
      "C. Higher index",
      "D. Zero index"
    ],
    answer: "A",
    explanation: "Step-index means a sharp step in refractive index from a uniform core to a uniform lower-index cladding.",
    subtopic: "Fibre optics"
  },
  {
    question: "A graded-index fibre has a core whose refractive index:",
    options: [
      "A. Is uniform",
      "B. Decreases gradually from the centre outward",
      "C. Increases outward",
      "D. Equals the cladding"
    ],
    answer: "B",
    explanation: "In graded-index fibre the core index is highest at the axis and falls off toward the cladding, reducing modal dispersion.",
    subtopic: "Fibre optics"
  },
  {
    question: "Compared with step-index fibre, graded-index fibre:",
    options: [
      "A. Has higher modal dispersion",
      "B. Reduces modal dispersion, allowing higher bandwidth",
      "C. Cannot use TIR",
      "D. Is always single-mode"
    ],
    answer: "B",
    explanation: "The parabolic index profile equalises path times, lowering modal dispersion and raising bandwidth.",
    subtopic: "Fibre optics"
  },
  {
    question: "Single-mode fibre is characterised by:",
    options: [
      "A. A very large core",
      "B. A very small core allowing only one propagation mode",
      "C. No cladding",
      "D. Many modes"
    ],
    answer: "B",
    explanation: "A tiny core (≈ few μm) permits only one mode, giving very low dispersion and high bandwidth over long distance.",
    subtopic: "Fibre optics"
  },
  {
    question: "Multimode fibre allows:",
    options: [
      "A. Only one light path",
      "B. Many light paths (modes) to propagate",
      "C. No total internal reflection",
      "D. Light to escape quickly"
    ],
    answer: "B",
    explanation: "A larger core supports many modes; this causes modal dispersion but is cheaper for short links.",
    subtopic: "Fibre optics"
  },
  {
    question: "Modal dispersion in a fibre is caused by:",
    options: [
      "A. Different colours of light",
      "B. Different modes taking different path lengths and arrival times",
      "C. The cladding thickness",
      "D. Temperature only"
    ],
    answer: "B",
    explanation: "In multimode fibre, rays taking longer zig-zag paths arrive later than axial rays, spreading the pulse.",
    subtopic: "Fibre optics"
  },
  {
    question: "Chromatic dispersion is due to:",
    options: [
      "A. Different modes",
      "B. Different wavelengths travelling at different speeds",
      "C. Fibre length",
      "D. The core shape"
    ],
    answer: "B",
    explanation: "Different wavelengths have slightly different refractive indices (and speeds), spreading the pulse in time.",
    subtopic: "Fibre optics"
  },
  {
    question: "Signal loss in an optical fibre is called:",
    options: [
      "A. Dispersion",
      "B. Attenuation",
      "C. Reflection",
      "D. Refraction"
    ],
    answer: "B",
    explanation: "Attenuation is the reduction in optical power along the fibre, measured in dB/km.",
    subtopic: "Fibre optics"
  },
  {
    question: "Attenuation in a fibre is usually expressed in:",
    options: [
      "A. Metres",
      "B. Decibels per kilometre (dB/km)",
      "C. Watts",
      "D. Hertz"
    ],
    answer: "B",
    explanation: "Loss per unit length is given as dB/km.",
    subtopic: "Fibre optics"
  },
  {
    question: "An advantage of optical fibre over copper cable is:",
    options: [
      "A. Higher weight",
      "B. Much higher bandwidth and immunity to electromagnetic interference",
      "C. Shorter range",
      "D. Easier tapping"
    ],
    answer: "B",
    explanation: "Fibres offer huge bandwidth, low loss, and are immune to electrical noise and eavesdropping.",
    subtopic: "Fibre optics"
  },
  {
    question: "Optical fibres are used in endoscopes because they can:",
    options: [
      "A. Carry electric current",
      "B. Transmit light around bends to view inside the body",
      "C. Block light",
      "D. Generate X-rays"
    ],
    answer: "B",
    explanation: "Flexible bundles of fibres carry light (and images) along curved paths for medical viewing.",
    subtopic: "Fibre optics"
  },
  {
    question: "A fibre optic communication system converts the electrical signal to light using a:",
    options: [
      "A. Photodiode at the source",
      "B. Light source such as an LED or laser diode",
      "C. Mirror",
      "D. Prism"
    ],
    answer: "B",
    explanation: "A transmitter (LED or laser) converts the electrical signal into modulated light pulses.",
    subtopic: "Fibre optics"
  },
  {
    question: "At the receiving end of a fibre link, light is converted back to an electrical signal by a:",
    options: [
      "A. Laser",
      "B. Photodetector (e.g. photodiode)",
      "C. Cladding",
      "D. Lens only"
    ],
    answer: "B",
    explanation: "A photodiode detects the arriving light and produces a proportional electrical current.",
    subtopic: "Fibre optics"
  },
  {
    question: "A ray inside the core strikes the core-cladding boundary at exactly the critical angle. It will:",
    options: [
      "A. Be totally internally reflected back into the core",
      "B. Refract along the boundary (emergent angle = 90°)",
      "C. Travel straight through the core",
      "D. Stop completely"
    ],
    answer: "B",
    explanation: "At the critical angle the refracted ray grazes the boundary (refraction angle = 90°); TIR only begins for angles greater than this.",
    subtopic: "Fibre optics"
  },
  {
    question: "Light strikes the core-cladding boundary at 70°, with critical angle 80°. It will:",
    options: [
      "A. Be totally internally reflected",
      "B. Refract (partially escape) into the cladding",
      "C. Disappear",
      "D. Double in speed"
    ],
    answer: "B",
    explanation: "For TIR the incidence angle must exceed the critical angle. Since 70° < 80°, the ray refracts and is not guided.",
    subtopic: "Fibre optics"
  },
  {
    question: "Light strikes the boundary at 85° with critical angle 80°. It will:",
    options: [
      "A. Refract out",
      "B. Be totally internally reflected",
      "C. Slow down",
      "D. Split"
    ],
    answer: "B",
    explanation: "Since 85° > 80° (exceeds the critical angle), total internal reflection occurs and the ray is guided.",
    subtopic: "Fibre optics"
  },
  {
    question: "The speed of light in a medium of refractive index 1.5 is (c = 3×10⁸ m/s):",
    options: [
      "A. 2×10⁸ m/s",
      "B. 4.5×10⁸ m/s",
      "C. 1.5×10⁸ m/s",
      "D. 3×10⁸ m/s"
    ],
    answer: "A",
    explanation: "v = c/n = 3×10⁸ / 1.5 = 2×10⁸ m/s.",
    subtopic: "Fibre optics"
  },
  {
    question: "The refractive index of a medium where light travels at 2×10⁸ m/s is:",
    options: [
      "A. 1.0",
      "B. 1.5",
      "C. 2.0",
      "D. 0.67"
    ],
    answer: "B",
    explanation: "n = c/v = 3×10⁸ / 2×10⁸ = 1.5.",
    subtopic: "Fibre optics"
  },
  {
    question: "A ray in a medium of n = 1.33 hits an interface with air (n ≈ 1.00) at the critical angle. sin c is:",
    options: [
      "A. 1.33",
      "B. 0.75",
      "C. 1.00",
      "D. 0.50"
    ],
    answer: "B",
    explanation: "sin c = n₂/n₁ = 1.00/1.33 ≈ 0.75; c ≈ 48.8°.",
    subtopic: "Fibre optics"
  },
  {
    question: "For total internal reflection, the angle of incidence must be:",
    options: [
      "A. Less than the critical angle",
      "B. Greater than the critical angle",
      "C. Equal to 0°",
      "D. Equal to 90° always"
    ],
    answer: "B",
    explanation: "TIR occurs only when incidence exceeds the critical angle at a denser-to-rarer interface.",
    subtopic: "Fibre optics"
  },
  {
    question: "Which statement about optical fibre cladding is TRUE?",
    options: [
      "A. It has a higher refractive index than the core",
      "B. It protects the core and enables TIR by being less dense optically",
      "C. It carries the signal instead of the core",
      "D. It blocks all light"
    ],
    answer: "B",
    explanation: "The cladding is optically less dense (lower n) than the core and protects it, allowing guided TIR.",
    subtopic: "Fibre optics"
  },
  {
    question: "Pulse broadening in a fibre limits the:",
    options: [
      "A. fibre length only",
      "B. Maximum data rate (bandwidth)",
      "C. Light colour",
      "D. Core thickness only"
    ],
    answer: "B",
    explanation: "Dispersion spreads pulses, causing overlap, which lowers the maximum achievable data rate.",
    subtopic: "Fibre optics"
  },
  {
    question: "A fibre with very low dispersion and low attenuation is best for:",
    options: [
      "A. Short indoor links only",
      "B. Long-distance high-bandwidth communication",
      "C. Blocking signals",
      "D. Generating light"
    ],
    answer: "B",
    explanation: "Low loss and low dispersion allow high data rates over many kilometres without repeaters.",
    subtopic: "Fibre optics"
  },
  {
    question: "An optical fibre repeater/amplifier is used to:",
    options: [
      "A. Bend the fibre",
      "B. Regenerate or boost the weakened optical signal",
      "C. Change the fibre colour",
      "D. Block noise electrically"
    ],
    answer: "B",
    explanation: "Repeaters amplify (or regenerate) the optical signal to overcome attenuation over long distances.",
    subtopic: "Fibre optics"
  },
  {
    question: "In a fibre, meridional rays are those that:",
    options: [
      "A. Travel only in the cladding",
      "B. Cross the fibre axis as they zig-zag",
      "C. Never reflect",
      "D. Travel outside the fibre"
    ],
    answer: "B",
    explanation: "Meridional rays pass through the axis, reflecting symmetrically; skew rays do not cross the axis.",
    subtopic: "Fibre optics"
  },
  {
    question: "Glass optical fibres are preferred over plastic for long haul because they have:",
    options: [
      "A. Higher attenuation",
      "B. Lower attenuation and better bandwidth",
      "C. Larger size",
      "D. No cladding"
    ],
    answer: "B",
    explanation: "Glass fibres have much lower loss (dB/km) and higher bandwidth than plastic fibres.",
    subtopic: "Fibre optics"
  },
  {
    question: "The principle that lets light bend around a curved fibre is:",
    options: [
      "A. Refraction at the ends only",
      "B. Repeated total internal reflection along the curve",
      "C. Magnetic fields",
      "D. Gravity"
    ],
    answer: "B",
    explanation: "Even around a gentle curve, the ray keeps hitting the boundary above the critical angle and is TIR-reflected onward.",
    subtopic: "Fibre optics"
  },
  {
    question: "If a fibre's acceptance angle is 30° in air (n₀ = 1), its numerical aperture is approximately:",
    options: [
      "A. 0.5",
      "B. 1.0",
      "C. 0.87",
      "D. 0.25"
    ],
    answer: "A",
    explanation: "NA = n₀ sinθ_a = 1 × sin30° = 0.5.",
    subtopic: "Fibre optics"
  },
  {
    question: "A larger numerical aperture means the fibre:",
    options: [
      "A. Accepts less light",
      "B. Accepts a wider cone of light (easier coupling)",
      "C. Has higher loss only",
      "D. Is single-mode"
    ],
    answer: "B",
    explanation: "Larger NA → larger acceptance angle → more light can enter, simplifying coupling to sources.",
    subtopic: "Fibre optics"
  },
  {
    question: "Which of these is a use of optical fibre?",
    options: [
      "A. Lighting only, never communication",
      "B. Telecommunications, medical imaging, and sensing",
      "C. Generating electricity",
      "D. Storing magnetic data"
    ],
    answer: "B",
    explanation: "Fibres are widely used in telecom, endoscopes, and various optical sensors.",
    subtopic: "Fibre optics"
  },
  {
    question: "The refractive index of the core must be _______ the cladding for guiding.",
    options: [
      "A. Less than",
      "B. greater than",
      "C. equal to",
      "D. unrelated to"
    ],
    answer: "B",
    explanation: "The core must be optically denser (higher n) than the cladding for TIR to guide light.",
    subtopic: "Fibre optics"
  },
  {
    question: "If n_core = 1.48 and n_clad = 1.46, sin c is:",
    options: [
      "A. 1.46/1.48 ≈ 0.986",
      "B. 1.48/1.46 ≈ 1.014",
      "C. 0.02",
      "D. 1.0"
    ],
    answer: "A",
    explanation: "sin c = n₂/n₁ = 1.46/1.48 ≈ 0.986; c ≈ 80.6°.",
    subtopic: "Fibre optics"
  },
  {
    question: "Compared to copper wires, optical fibres are:",
    options: [
      "A. Heavier",
      "B. Immune to electromagnetic interference",
      "C. More lossy over all distances",
      "D. Unable to carry digital data"
    ],
    answer: "B",
    explanation: "Being dielectric, fibres do not pick up or radiate electromagnetic interference.",
    subtopic: "Fibre optics"
  },
  {
    question: "A fibre is said to be 'single-mode' when its core diameter is:",
    options: [
      "A. About the size of the wavelength of light (a few μm)",
      "B. About 1 mm",
      "C. Larger than 1 cm",
      "D. Zero"
    ],
    answer: "A",
    explanation: "Cores of only a few micrometres support just one mode, giving single-mode operation.",
    subtopic: "Fibre optics"
  },
  {
    question: "The main reason multimode step-index fibre has lower bandwidth than single-mode is:",
    options: [
      "A. Higher attenuation",
      "B. Modal dispersion from many path lengths",
      "C. Colour of the core",
      "D. Magnetic effects"
    ],
    answer: "B",
    explanation: "Many modes travel different distances and arrive at different times, spreading pulses (modal dispersion).",
    subtopic: "Fibre optics"
  },
  {
    question: "An optical fibre sensor might detect changes in:",
    options: [
      "A. Only colour",
      "B. Temperature, pressure, or strain via changing light properties",
      "C. Sound only",
      "D. Magnetism only"
    ],
    answer: "B",
    explanation: "Fibre sensors measure how strain, temperature, or pressure alter intensity/phase/polarisation of light.",
    subtopic: "Fibre optics"
  },
  {
    question: "A ray entering a fibre exactly along the axis undergoes:",
    options: [
      "A. Total internal reflection at every boundary",
      "B. No reflection; it travels straight down the core",
      "C. Refraction out",
      "D. Diffraction only"
    ],
    answer: "B",
    explanation: "An axial ray hits the boundary at 0° (normal incidence) and passes straight without reflection.",
    subtopic: "Fibre optics"
  },
  {
    question: "The angle of refraction when light enters a denser medium from air is:",
    options: [
      "A. Larger than the angle of incidence",
      "B. Smaller than the angle of incidence",
      "C. Equal to 90°",
      "D. Always zero"
    ],
    answer: "B",
    explanation: "Entering a denser (higher n) medium bends the ray toward the normal, giving a smaller refracted angle.",
    subtopic: "Fibre optics"
  },
  {
    question: "When light travels from glass (n=1.5) to air at an angle below critical, it:",
    options: [
      "A. Is totally reflected",
      "B. Refracts away from the normal into the air",
      "C. Stops",
      "D. Doubles speed to infinity"
    ],
    answer: "B",
    explanation: "Going to the rarer medium bends the ray away from the normal; it escapes unless past the critical angle.",
    subtopic: "Fibre optics"
  },
  {
    question: "The information capacity of a fibre is highest when:",
    options: [
      "A. Dispersion is largest",
      "B. Dispersion and attenuation are smallest",
      "C. Core is opaque",
      "D. Cladding index is highest"
    ],
    answer: "B",
    explanation: "Minimising dispersion and attenuation allows more, cleaner pulses per second over longer distances.",
    subtopic: "Fibre optics"
  },
  {
    question: "A coherent light source (laser) is often used in fibre comms because it is:",
    options: [
      "A. Monochromatic and narrow, reducing chromatic dispersion effects",
      "B. Always white",
      "C. Slower than LEDs",
      "D. Invisible"
    ],
    answer: "A",
    explanation: "Lasers are monochromatic and collimated, launching efficiently and limiting chromatic dispersion.",
    subtopic: "Fibre optics"
  },
  {
    question: "An LED used in a fibre system is generally:",
    options: [
      "A. More monochromatic than a laser",
      "B. Cheaper and broader-spectrum than a laser",
      "C. Unable to emit light",
      "D. Used only for single-mode"
    ],
    answer: "B",
    explanation: "LEDs are cheaper and easier but have broader spectra (more chromatic dispersion) than lasers; common in short links.",
    subtopic: "Fibre optics"
  },
  {
    question: "Refractive index has the dimension:",
    options: [
      "A. ML⁻¹T⁻²",
      "B. Dimensionless (ratio of speeds)",
      "C. LT⁻¹",
      "D. M⁻¹L³T⁻²"
    ],
    answer: "B",
    explanation: "n = c/v is a ratio of two speeds, so it is dimensionless.",
    subtopic: "Fibre optics"
  },
  {
    question: "A pulse of light takes 50 μs to travel 10 km in a fibre. The effective speed is:",
    options: [
      "A. 2×10⁸ m/s",
      "B. 2×10⁵ m/s",
      "C. 5×10⁸ m/s",
      "D. 1×10⁸ m/s"
    ],
    answer: "A",
    explanation: "v = distance/time = 10⁴ m / (50×10⁻⁶ s) = 2×10⁸ m/s, consistent with n ≈ 1.5.",
    subtopic: "Fibre optics"
  },
  {
    question: "Which best describes why cladding is optically less dense than the core?",
    options: [
      "A. To make the fibre heavier",
      "B. To permit total internal reflection that confines light to the core",
      "C. To absorb the light",
      "D. To change the light's colour"
    ],
    answer: "B",
    explanation: "The lower-index cladding ensures rays in the core hit the boundary above the critical angle and stay guided.",
    subtopic: "Fibre optics"
  }
];

module.exports = questions;
