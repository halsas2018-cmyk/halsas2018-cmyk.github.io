// physics — Properties of Waves
const questions = [
  {
    question: "When a wave meets a hard boundary, it is",
    options: [
      "A. absorbed completely",
      "B. reflected",
      "C. transmitted only",
      "D. destroyed"
    ],
    answer: "B",
    explanation: "At a rigid boundary a wave is reflected, often with a phase change of π (for a fixed end).",
    subtopic: "Properties"
  },
  {
    question: "The bending of a wave as it passes from one medium to another of different speed is called",
    options: [
      "A. reflection",
      "B. refraction",
      "C. diffraction",
      "D. interference"
    ],
    answer: "B",
    explanation: "Refraction is the change in direction of a wave caused by a change in its speed at a boundary.",
    subtopic: "Properties"
  },
  {
    question: "The spreading of a wave round the edge of an obstacle or through an aperture is called",
    options: [
      "A. reflection",
      "B. refraction",
      "C. diffraction",
      "D. dispersion"
    ],
    answer: "C",
    explanation: "Diffraction is the spreading of waves when they pass an edge or a gap of comparable size to the wavelength.",
    subtopic: "Properties"
  },
  {
    question: "The superposition of two coherent waves to form a resultant wave is the principle of",
    options: [
      "A. reflection",
      "B. refraction",
      "C. superposition",
      "D. diffraction"
    ],
    answer: "C",
    explanation: "The principle of superposition states that the resultant displacement is the algebraic sum of individual displacements.",
    subtopic: "Properties"
  },
  {
    question: "When two waves meet and their displacements add to give a larger amplitude, the effect is",
    options: [
      "A. destructive interference",
      "B. constructive interference",
      "C. diffraction",
      "D. refraction"
    ],
    answer: "B",
    explanation: "Constructive interference occurs when waves arrive in phase, giving maximum resultant amplitude.",
    subtopic: "Properties"
  },
  {
    question: "When two waves meet in opposite phase and cancel, the effect is",
    options: [
      "A. constructive interference",
      "B. destructive interference",
      "C. diffraction",
      "D. refraction"
    ],
    answer: "B",
    explanation: "Destructive interference occurs when waves are out of phase (π), reducing or cancelling the amplitude.",
    subtopic: "Properties"
  },
  {
    question: "For constructive interference of two coherent sources, the path difference is",
    options: [
      "A. (n + 1/2)λ",
      "B. nλ",
      "C. λ/4",
      "D. 3λ/2"
    ],
    answer: "B",
    explanation: "Constructive interference needs a path difference of a whole number of wavelengths, nλ (n = 0,1,2…).",
    subtopic: "Properties"
  },
  {
    question: "For total destructive interference of two coherent equal waves, the path difference is",
    options: [
      "A. nλ",
      "B. (n + 1/2)λ",
      "C. λ",
      "D. 2λ"
    ],
    answer: "B",
    explanation: "Destructive interference needs a path difference of a half-integer number of wavelengths, (n + 1/2)λ.",
    subtopic: "Properties"
  },
  {
    question: "Two sources are said to be coherent if they have the same",
    options: [
      "A. amplitude only",
      "B. frequency and constant phase difference",
      "C. speed only",
      "D. wavelength only"
    ],
    answer: "B",
    explanation: "Coherent sources maintain a constant phase relationship and usually the same frequency.",
    subtopic: "Properties"
  },
  {
    question: "A stationary (standing) wave is produced by the superposition of",
    options: [
      "A. two waves travelling in the same direction",
      "B. two waves of equal amplitude travelling in opposite directions",
      "C. one wave only",
      "D. incoherent waves"
    ],
    answer: "B",
    explanation: "Standing waves form when two waves of the same amplitude/frequency travel in opposite directions and superpose.",
    subtopic: "Properties"
  },
  {
    question: "In a stationary wave, points of zero displacement are called",
    options: [
      "A. antinodes",
      "B. nodes",
      "C. crests",
      "D. troughs"
    ],
    answer: "B",
    explanation: "Nodes are positions of permanent zero displacement in a standing wave.",
    subtopic: "Properties"
  },
  {
    question: "In a stationary wave, points of maximum displacement are called",
    options: [
      "A. nodes",
      "B. antinodes",
      "C. crests only",
      "D. troughs only"
    ],
    answer: "B",
    explanation: "Antinodes are the points of largest oscillation amplitude in a standing wave.",
    subtopic: "Properties"
  },
  {
    question: "The distance between two adjacent nodes in a stationary wave is",
    options: [
      "A. λ",
      "B. λ/2",
      "C. λ/4",
      "D. 2λ"
    ],
    answer: "B",
    explanation: "Adjacent nodes are half a wavelength apart (λ/2).",
    subtopic: "Properties"
  },
  {
    question: "The distance between a node and the nearest antinode is",
    options: [
      "A. λ",
      "B. λ/2",
      "C. λ/4",
      "D. 2λ"
    ],
    answer: "C",
    explanation: "A node-to-antinode separation is a quarter wavelength (λ/4).",
    subtopic: "Properties"
  },
  {
    question: "Which of the following can be polarised?",
    options: [
      "A. Sound waves",
      "B. Transverse waves",
      "C. Longitudinal mechanical waves",
      "D. Seismic P-waves"
    ],
    answer: "B",
    explanation: "Only transverse waves can be plane-polarised because their vibration direction can be selected.",
    subtopic: "Properties"
  },
  {
    question: "Polarisation demonstrates that light is a",
    options: [
      "A. longitudinal wave",
      "B. transverse wave",
      "C. mechanical wave",
      "D. compressional wave"
    ],
    answer: "B",
    explanation: "The fact that light can be polarised proves it is a transverse wave.",
    subtopic: "Properties"
  },
  {
    question: "The phenomenon that explains why radio waves can be received behind a hill is",
    options: [
      "A. reflection",
      "B. diffraction",
      "C. polarisation",
      "D. dispersion"
    ],
    answer: "B",
    explanation: "Radio waves diffract around obstacles such as hills, allowing reception in shadow regions.",
    subtopic: "Properties"
  },
  {
    question: "The angle of incidence equals the angle of reflection for a wave. This is the law of",
    options: [
      "A. refraction",
      "B. reflection",
      "C. diffraction",
      "D. dispersion"
    ],
    answer: "B",
    explanation: "The law of reflection states the angle of incidence equals the angle of reflection (measured to the normal).",
    subtopic: "Properties"
  },
  {
    question: "When a wave is refracted, its frequency",
    options: [
      "A. changes",
      "B. stays the same",
      "C. becomes zero",
      "D. doubles"
    ],
    answer: "B",
    explanation: "Frequency is set by the source and does not change on refraction; only speed and wavelength change.",
    subtopic: "Properties"
  },
  {
    question: "When a wave enters a denser medium and slows down, it bends",
    options: [
      "A. away from the normal",
      "B. towards the normal",
      "C. backwards",
      "D. not at all"
    ],
    answer: "B",
    explanation: "A wave entering a slower (denser) medium refracts towards the normal.",
    subtopic: "Properties"
  },
  {
    question: "A wave entering a less dense medium and speeding up bends",
    options: [
      "A. towards the normal",
      "B. away from the normal",
      "C. backwards",
      "D. into a straight line"
    ],
    answer: "B",
    explanation: "A wave entering a faster medium refracts away from the normal.",
    subtopic: "Properties"
  },
  {
    question: "The spreading of white light into its component colours is",
    options: [
      "A. reflection",
      "B. dispersion",
      "C. diffraction",
      "D. interference"
    ],
    answer: "B",
    explanation: "Dispersion occurs because different colours refract by different amounts (different speeds in the medium).",
    subtopic: "Properties"
  },
  {
    question: "Maximum diffraction occurs when the aperture size is",
    options: [
      "A. much larger than the wavelength",
      "B. comparable to the wavelength",
      "C. infinite",
      "D. zero"
    ],
    answer: "B",
    explanation: "Significant diffraction happens when the gap/obstacle size is about the same as the wavelength.",
    subtopic: "Properties"
  },
  {
    question: "The Doppler effect is the change in observed frequency due to",
    options: [
      "A. change in medium density",
      "B. relative motion between source and observer",
      "C. reflection",
      "D. diffraction"
    ],
    answer: "B",
    explanation: "The Doppler effect is a frequency (pitch) shift caused by relative motion of source and observer.",
    subtopic: "Properties"
  },
  {
    question: "A sound source moving towards a stationary observer appears to have",
    options: [
      "A. lower frequency",
      "B. higher frequency",
      "C. no change",
      "D. zero frequency"
    ],
    answer: "B",
    explanation: "Approaching source → wavefronts bunch up → higher observed frequency (pitch).",
    subtopic: "Properties"
  },
  {
    question: "A sound source moving away from a stationary observer appears to have",
    options: [
      "A. higher frequency",
      "B. lower frequency",
      "C. no change",
      "D. double frequency"
    ],
    answer: "B",
    explanation: "Receding source → wavefronts stretch out → lower observed frequency (pitch).",
    subtopic: "Properties"
  },
  {
    question: "Young's double-slit experiment demonstrates",
    options: [
      "A. reflection",
      "B. interference (and wave nature of light)",
      "C. refraction",
      "D. dispersion"
    ],
    answer: "B",
    explanation: "The bright/dark fringes in Young's experiment are due to constructive/destructive interference of light.",
    subtopic: "Properties"
  },
  {
    question: "In Young's double-slit experiment, increasing the slit separation decreases the fringe",
    options: [
      "A. spacing",
      "B. brightness only",
      "C. wavelength",
      "D. number"
    ],
    answer: "A",
    explanation: "Fringe spacing y = λD/a, so increasing slit separation a reduces the spacing y.",
    subtopic: "Properties"
  },
  {
    question: "In Young's double-slit experiment, increasing the wavelength increases the fringe",
    options: [
      "A. spacing",
      "B. brightness",
      "C. speed",
      "D. number only"
    ],
    answer: "A",
    explanation: "Fringe spacing y = λD/a is directly proportional to wavelength λ.",
    subtopic: "Properties"
  },
  {
    question: "A node in a stationary wave is a point of",
    options: [
      "A. maximum energy",
      "B. minimum (zero) amplitude",
      "C. maximum amplitude",
      "D. highest speed"
    ],
    answer: "B",
    explanation: "At a node the two opposite waves always cancel, giving zero amplitude.",
    subtopic: "Properties"
  },
  {
    question: "An antinode in a stationary wave is a point of",
    options: [
      "A. zero amplitude",
      "B. maximum amplitude",
      "C. minimum energy",
      "D. no vibration"
    ],
    answer: "B",
    explanation: "At an antinode the two waves always add, giving maximum amplitude.",
    subtopic: "Properties"
  },
  {
    question: "Energy is not transported past the nodes in a",
    options: [
      "A. travelling wave",
      "B. stationary wave",
      "C. sound wave",
      "D. radio wave"
    ],
    answer: "B",
    explanation: "In a standing wave the pattern does not travel, so no net energy is carried across nodes.",
    subtopic: "Properties"
  },
  {
    question: "The ability of waves to occupy the same region of space and add up is called",
    options: [
      "A. diffraction",
      "B. superposition",
      "C. refraction",
      "D. reflection"
    ],
    answer: "B",
    explanation: "Superposition lets multiple waves overlap; the net displacement is the sum of each.",
    subtopic: "Properties"
  },
  {
    question: "Two coherent light sources produce an interference pattern because they have",
    options: [
      "A. different frequencies",
      "B. a constant phase difference",
      "C. random phases",
      "D. different speeds"
    ],
    answer: "B",
    explanation: "A constant phase difference (coherence) is needed for a stable interference pattern.",
    subtopic: "Properties"
  },
  {
    question: "When light reflects from a denser medium it undergoes a phase change of",
    options: [
      "A. 0",
      "B. π (half a cycle)",
      "C. 2π",
      "D. π/4"
    ],
    answer: "B",
    explanation: "Reflection at a boundary into a denser medium reverses the displacement — a phase change of π.",
    subtopic: "Properties"
  },
  {
    question: "The wavelength of a wave changes when it is refracted because its",
    options: [
      "A. frequency changes",
      "B. speed changes while frequency stays fixed",
      "C. amplitude changes",
      "D. period changes"
    ],
    answer: "B",
    explanation: "With f constant, λ = v/f changes whenever the wave speed v changes at a boundary.",
    subtopic: "Properties"
  },
  {
    question: "A ripple tank shows a plane wave passing through a narrow gap and spreading out. This shows",
    options: [
      "A. reflection",
      "B. diffraction",
      "C. refraction",
      "D. polarisation"
    ],
    answer: "B",
    explanation: "Waves spreading through a narrow gap is diffraction.",
    subtopic: "Properties"
  },
  {
    question: "The phenomenon where two loudspeakers produce loud and quiet regions is",
    options: [
      "A. diffraction",
      "B. interference",
      "C. reflection",
      "D. refraction"
    ],
    answer: "B",
    explanation: "Loud/quiet regions from two coherent sources are interference maxima and minima.",
    subtopic: "Properties"
  },
  {
    question: "A laser producing a single colour is useful for interference because it is",
    options: [
      "A. incoherent",
      "B. coherent",
      "C. white light",
      "D. unpolarised always"
    ],
    answer: "B",
    explanation: "A laser emits coherent light (fixed phase), ideal for stable interference patterns.",
    subtopic: "Properties"
  },
  {
    question: "The speed of a wave in a string depends on its",
    options: [
      "A. amplitude",
      "B. tension and mass per unit length",
      "C. frequency only",
      "D. colour"
    ],
    answer: "B",
    explanation: "v = √(T/μ), where T is tension and μ is mass per unit length; frequency/amplitude do not set speed.",
    subtopic: "Properties"
  },
  {
    question: "When a wave is reflected from a free end of a string, the phase change is",
    options: [
      "A. π",
      "B. 0",
      "C. 2π only at nodes",
      "D. π/2"
    ],
    answer: "B",
    explanation: "At a free end the displacement reflects without inversion (phase change 0).",
    subtopic: "Properties"
  },
  {
    question: "When a wave on a string reflects from a fixed end, the phase change is",
    options: [
      "A. 0",
      "B. π",
      "C. π/4",
      "D. 2π at antinodes"
    ],
    answer: "B",
    explanation: "At a fixed end the displacement inverts, giving a phase change of π.",
    subtopic: "Properties"
  },
  {
    question: "The separation of fringes in an interference pattern depends on",
    options: [
      "A. only amplitude",
      "B. wavelength, slit spacing and screen distance",
      "C. only speed",
      "D. only colour of screen"
    ],
    answer: "B",
    explanation: "Fringe spacing y = λD/a depends on wavelength λ, screen distance D and slit separation a.",
    subtopic: "Properties"
  },
  {
    question: "A plane wave incident normally on a plane mirror is reflected",
    options: [
      "A. at 45° to the normal",
      "B. back along its original path",
      "C. away from the normal",
      "D. not at all"
    ],
    answer: "B",
    explanation: "Normal incidence (i = 0) means reflection angle is 0, so the wave returns along its path.",
    subtopic: "Properties"
  },
  {
    question: "Which property allows a wave to bend round a corner?",
    options: [
      "A. reflection",
      "B. diffraction",
      "C. dispersion",
      "D. polarisation"
    ],
    answer: "B",
    explanation: "Diffraction is the wave's ability to spread into the region behind an obstacle or opening.",
    subtopic: "Properties"
  },
  {
    question: "Two waves of the same frequency and amplitude travelling in opposite directions form a pattern with",
    options: [
      "A. only nodes",
      "B. nodes and antinodes",
      "C. only crests",
      "D. no fixed points"
    ],
    answer: "B",
    explanation: "Opposite equal waves superpose into a standing wave with alternating nodes and antinodes.",
    subtopic: "Properties"
  },
  {
    question: "The Doppler effect for light from a receding star causes a shift towards the",
    options: [
      "A. blue (higher frequency)",
      "B. red (lower frequency)",
      "C. green",
      "D. no shift"
    ],
    answer: "B",
    explanation: "Receding sources show a redshift (lower frequency/longer wavelength) — cosmic redshift.",
    subtopic: "Properties"
  },
  {
    question: "The Doppler effect for light from an approaching star causes a shift towards the",
    options: [
      "A. red",
      "B. blue (higher frequency)",
      "C. green only",
      "D. no shift"
    ],
    answer: "B",
    explanation: "Approaching sources show a blueshift (higher frequency/shorter wavelength).",
    subtopic: "Properties"
  },
  {
    question: "Refraction of light from air into glass is described by Snell's law as",
    options: [
      "A. n₁ sin i = n₂ sin r",
      "B. n₁/i = n₂/r",
      "C. sin i = sin r",
      "D. n₁ + n₂ = 1"
    ],
    answer: "A",
    explanation: "Snell's law: n₁ sin i = n₂ sin r relates the angles to the refractive indices of the media.",
    subtopic: "Properties"
  },
  {
    question: "A wave phenomenon used in radar to detect aircraft is based on",
    options: [
      "A. diffraction only",
      "B. reflection",
      "C. dispersion",
      "D. polarisation only"
    ],
    answer: "B",
    explanation: "Radar detects the reflection (echo) of radio waves from the aircraft.",
    subtopic: "Properties"
  },
  {
    question: "The formation of a shadow with a sharp edge for light but not for sound is because",
    options: [
      "A. light is faster",
      "B. light has a much shorter wavelength so diffracts less",
      "C. sound is transverse",
      "D. light cannot bend"
    ],
    answer: "B",
    explanation: "Light's tiny wavelength means little diffraction, giving sharp shadows; sound's longer λ diffracts round objects.",
    subtopic: "Properties"
  },
  {
    question: "A thin film of oil on water shows colours because of",
    options: [
      "A. reflection only",
      "B. interference of reflected light",
      "C. refraction only",
      "D. diffraction only"
    ],
    answer: "B",
    explanation: "Colours in thin films come from interference between light reflected from the two surfaces.",
    subtopic: "Properties"
  },
  {
    question: "The condition for the first minimum (dark fringe) at an obstacle edge due to diffraction is a path difference of",
    options: [
      "A. λ",
      "B. λ/2",
      "C. 2λ",
      "D. λ/4"
    ],
    answer: "B",
    explanation: "A half-wavelength path difference gives destructive interference (a dark/minimum region).",
    subtopic: "Properties"
  }
];

module.exports = questions;
