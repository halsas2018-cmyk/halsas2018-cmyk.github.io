// physics — Types of Waves
const questions = [
  {
    question: "In a transverse wave, the particles of the medium vibrate",
    options: [
      "A. parallel to the direction of propagation",
      "B. perpendicular to the direction of propagation",
      "C. in circles",
      "D. not at all"
    ],
    answer: "B",
    explanation: "In a transverse wave the displacement of particles is perpendicular to the direction in which the wave travels.",
    subtopic: "Transverse & longitudinal"
  },
  {
    question: "In a longitudinal wave, the particles of the medium vibrate",
    options: [
      "A. perpendicular to the direction of propagation",
      "B. parallel to the direction of propagation",
      "C. in circles",
      "D. randomly"
    ],
    answer: "B",
    explanation: "In a longitudinal wave particles oscillate along (parallel to) the direction of energy transfer.",
    subtopic: "Transverse & longitudinal"
  },
  {
    question: "Which of the following is a transverse wave?",
    options: [
      "A. Sound in air",
      "B. Waves on a stretched string",
      "C. Ultrasound in tissue",
      "D. Seismic P-waves"
    ],
    answer: "B",
    explanation: "Waves on a string are transverse; the string moves up/down while the wave moves along it.",
    subtopic: "Transverse & longitudinal"
  },
  {
    question: "Which of the following is a longitudinal wave?",
    options: [
      "A. Light",
      "B. Radio waves",
      "C. Sound in air",
      "D. Water surface waves"
    ],
    answer: "C",
    explanation: "Sound in air is longitudinal, made of compressions and rarefactions along the direction of travel.",
    subtopic: "Transverse & longitudinal"
  },
  {
    question: "Light waves are",
    options: [
      "A. longitudinal",
      "B. transverse",
      "C. neither",
      "D. compressional"
    ],
    answer: "B",
    explanation: "Light (electromagnetic) waves are transverse; their electric and magnetic fields are perpendicular to travel.",
    subtopic: "Transverse & longitudinal"
  },
  {
    question: "A wave in which crests and troughs can be identified is",
    options: [
      "A. longitudinal",
      "B. transverse",
      "C. both types",
      "D. stationary only"
    ],
    answer: "B",
    explanation: "Crests and troughs are features of transverse waves (maxima and minima of perpendicular displacement).",
    subtopic: "Transverse & longitudinal"
  },
  {
    question: "A wave in which compressions and rarefactions can be identified is",
    options: [
      "A. transverse",
      "B. longitudinal",
      "C. electromagnetic",
      "D. light"
    ],
    answer: "B",
    explanation: "Compressions and rarefactions are the high- and low-pressure regions of a longitudinal wave.",
    subtopic: "Transverse & longitudinal"
  },
  {
    question: "Which of these can travel through a vacuum?",
    options: [
      "A. Sound waves",
      "B. Water waves",
      "C. Electromagnetic waves",
      "D. Seismic waves"
    ],
    answer: "C",
    explanation: "Only electromagnetic waves (transverse) propagate without a material medium, so they cross a vacuum.",
    subtopic: "Transverse & longitudinal"
  },
  {
    question: "Seismic P-waves are",
    options: [
      "A. transverse",
      "B. longitudinal",
      "C. surface waves only",
      "D. electromagnetic"
    ],
    answer: "B",
    explanation: "Primary (P) waves are compressional/longitudinal and travel fastest through the Earth.",
    subtopic: "Transverse & longitudinal"
  },
  {
    question: "Seismic S-waves are",
    options: [
      "A. transverse",
      "B. longitudinal",
      "C. electromagnetic",
      "D. radio waves"
    ],
    answer: "A",
    explanation: "Secondary (S) waves are transverse and cannot pass through liquids like the Earth's outer core.",
    subtopic: "Transverse & longitudinal"
  },
  {
    question: "A slinky spring can demonstrate both types of wave. Pushing one end along its length produces a",
    options: [
      "A. transverse wave",
      "B. longitudinal wave",
      "C. light wave",
      "D. radio wave"
    ],
    answer: "B",
    explanation: "A push along the spring creates compressions and rarefactions — a longitudinal wave.",
    subtopic: "Transverse & longitudinal"
  },
  {
    question: "Moving one end of a slinky spring sideways produces a",
    options: [
      "A. longitudinal wave",
      "B. transverse wave",
      "C. sound wave",
      "D. seismic P-wave"
    ],
    answer: "B",
    explanation: "A sideways displacement launches a transverse pulse with coils moving perpendicular to travel.",
    subtopic: "Transverse & longitudinal"
  },
  {
    question: "All electromagnetic waves are",
    options: [
      "A. longitudinal",
      "B. transverse",
      "C. compressional",
      "D. mechanical"
    ],
    answer: "B",
    explanation: "Electromagnetic waves have oscillating electric and magnetic fields perpendicular to propagation — transverse.",
    subtopic: "Transverse & longitudinal"
  },
  {
    question: "Which statement is true of both transverse and longitudinal waves?",
    options: [
      "A. They transport matter",
      "B. They transfer energy",
      "C. They are always electromagnetic",
      "D. They need no medium"
    ],
    answer: "B",
    explanation: "Both types carry energy from one place to another without transporting the medium itself.",
    subtopic: "Transverse & longitudinal"
  },
  {
    question: "A waveform drawn as y = A sin(kx − ωt) represents a",
    options: [
      "A. random signal",
      "B. transverse sinusoidal wave",
      "C. straight line",
      "D. constant field"
    ],
    answer: "B",
    explanation: "y = A sin(kx − ωt) is the standard equation of a travelling sinusoidal (transverse) wave.",
    subtopic: "Mathematical representation"
  },
  {
    question: "In y = A sin(kx − ωt), the symbol A stands for",
    options: [
      "A. amplitude",
      "B. wavelength",
      "C. frequency",
      "D. speed"
    ],
    answer: "A",
    explanation: "A is the amplitude, the maximum displacement from the equilibrium position.",
    subtopic: "Mathematical representation"
  },
  {
    question: "In y = A sin(kx − ωt), the quantity k is called the",
    options: [
      "A. angular frequency",
      "B. wave number",
      "C. amplitude",
      "D. speed"
    ],
    answer: "B",
    explanation: "k = 2π/λ is the wave number, related to how many radians of phase per unit distance.",
    subtopic: "Mathematical representation"
  },
  {
    question: "In y = A sin(kx − ωt), the quantity ω is the",
    options: [
      "A. wave number",
      "B. angular frequency",
      "C. wavelength",
      "D. amplitude"
    ],
    answer: "B",
    explanation: "ω = 2πf is the angular frequency (radians per second).",
    subtopic: "Mathematical representation"
  },
  {
    question: "The angular frequency ω is related to frequency f by",
    options: [
      "A. ω = f",
      "B. ω = 2πf",
      "C. ω = f/2π",
      "D. ω = πf"
    ],
    answer: "B",
    explanation: "Angular frequency ω = 2πf, since one cycle is 2π radians.",
    subtopic: "Mathematical representation"
  },
  {
    question: "The wave number k is related to wavelength λ by",
    options: [
      "A. k = λ",
      "B. k = 2π/λ",
      "C. k = λ/2π",
      "D. k = πλ"
    ],
    answer: "B",
    explanation: "Wave number k = 2π/λ, the phase change per unit distance.",
    subtopic: "Mathematical representation"
  },
  {
    question: "The speed of a wave described by y = A sin(kx − ωt) is",
    options: [
      "A. v = ω/k",
      "B. v = k/ω",
      "C. v = Aω",
      "D. v = Ak"
    ],
    answer: "A",
    explanation: "For a travelling wave, phase speed v = ω/k = fλ.",
    subtopic: "Mathematical representation"
  },
  {
    question: "If a wave has frequency 5 Hz and wavelength 4 m, its wave number k is",
    options: [
      "A. π/2 rad/m",
      "B. π rad/m",
      "C. 2π rad/m",
      "D. 4π rad/m"
    ],
    answer: "A",
    explanation: "k = 2π/λ = 2π/4 = π/2 rad/m.",
    subtopic: "Mathematical representation"
  },
  {
    question: "A wave of frequency 50 Hz has angular frequency",
    options: [
      "A. 50 rad/s",
      "B. 100π rad/s",
      "C. 25π rad/s",
      "D. π/50 rad/s"
    ],
    answer: "B",
    explanation: "ω = 2πf = 2π × 50 = 100π rad/s.",
    subtopic: "Mathematical representation"
  },
  {
    question: "The phase difference between two points one wavelength apart on a wave is",
    options: [
      "A. 0 or 2π rad",
      "B. π rad",
      "C. π/2 rad",
      "D. π/4 rad"
    ],
    answer: "A",
    explanation: "Points one wavelength apart are in phase: phase difference 0 (or 2π) radians.",
    subtopic: "Mathematical representation"
  },
  {
    question: "Two points half a wavelength apart on a wave are",
    options: [
      "A. in phase",
      "B. completely out of phase",
      "C. one quarter cycle apart",
      "D. unrelated"
    ],
    answer: "B",
    explanation: "Half a wavelength corresponds to a phase difference of π rad — the points are exactly out of phase.",
    subtopic: "Mathematical representation"
  },
  {
    question: "The equation y = A cos(kx − ωt) differs from the sine form only by a",
    options: [
      "A. change in speed",
      "B. phase shift of π/2",
      "C. change in amplitude",
      "D. change in wavelength"
    ],
    answer: "B",
    explanation: "Cosine is a sine shifted by π/2 rad; the wave speed and shape are unchanged.",
    subtopic: "Mathematical representation"
  },
  {
    question: "The maximum value of y = A sin(kx − ωt) is",
    options: [
      "A. 0",
      "B. A",
      "C. 2A",
      "D. kA"
    ],
    answer: "B",
    explanation: "The sine term ranges from −1 to +1, so y ranges from −A to +A; the maximum is A.",
    subtopic: "Mathematical representation"
  },
  {
    question: "The term (kx − ωt) in the wave equation is the",
    options: [
      "A. amplitude",
      "B. phase",
      "C. wavelength",
      "D. frequency"
    ],
    answer: "B",
    explanation: "(kx − ωt) is the phase of the wave at position x and time t.",
    subtopic: "Mathematical representation"
  },
  {
    question: "A wave described by y = A sin(kx + ωt) travels in the",
    options: [
      "A. positive x-direction",
      "B. negative x-direction",
      "C. y-direction",
      "D. does not move"
    ],
    answer: "B",
    explanation: "The plus sign (kx + ωt) indicates a wave travelling in the negative x-direction.",
    subtopic: "Mathematical representation"
  },
  {
    question: "A wave described by y = A sin(kx − ωt) travels in the",
    options: [
      "A. positive x-direction",
      "B. negative x-direction",
      "C. y-direction",
      "D. does not move"
    ],
    answer: "A",
    explanation: "The minus sign (kx − ωt) indicates a wave travelling in the positive x-direction.",
    subtopic: "Mathematical representation"
  },
  {
    question: "The period T of a wave with angular frequency ω is",
    options: [
      "A. T = ω",
      "B. T = 2π/ω",
      "C. T = ω/2π",
      "D. T = π/ω"
    ],
    answer: "B",
    explanation: "Since ω = 2π/T, the period T = 2π/ω.",
    subtopic: "Mathematical representation"
  },
  {
    question: "For a wave, the product of wave number k and wavelength λ is",
    options: [
      "A. 0",
      "B. 2π",
      "C. π",
      "D. 1"
    ],
    answer: "B",
    explanation: "k = 2π/λ, so kλ = 2π.",
    subtopic: "Mathematical representation"
  },
  {
    question: "A transverse wave can be polarised because its vibrations are",
    options: [
      "A. parallel to propagation",
      "B. confined to a single plane perpendicular to propagation",
      "C. random in all directions along propagation",
      "D. zero"
    ],
    answer: "B",
    explanation: "Transverse waves can be plane-polarised since the displacement can lie in any one transverse plane.",
    subtopic: "Transverse & longitudinal"
  },
  {
    question: "Longitudinal waves cannot be polarised because their vibrations are",
    options: [
      "A. perpendicular to propagation",
      "B. along the direction of propagation",
      "C. circular",
      "D. zero"
    ],
    answer: "B",
    explanation: "Polarisation needs a transverse direction to select; longitudinal motion is already along one axis.",
    subtopic: "Transverse & longitudinal"
  },
  {
    question: "Which wave type can exhibit polarisation?",
    options: [
      "A. Sound in air",
      "B. Transverse waves",
      "C. Longitudinal waves",
      "D. Seismic P-waves"
    ],
    answer: "B",
    explanation: "Only transverse waves (e.g. light) can be polarised; longitudinal waves cannot.",
    subtopic: "Transverse & longitudinal"
  },
  {
    question: "Water waves at the surface are best described as",
    options: [
      "A. purely longitudinal",
      "B. partly transverse and partly longitudinal",
      "C. purely electromagnetic",
      "D. purely compressional"
    ],
    answer: "B",
    explanation: "Surface water waves combine transverse (up/down) and longitudinal (to/fro) particle motion.",
    subtopic: "Transverse & longitudinal"
  },
  {
    question: "The direction of energy transfer in a transverse wave is",
    options: [
      "A. perpendicular to particle motion",
      "B. parallel to particle motion",
      "C. circular",
      "D. zero"
    ],
    answer: "A",
    explanation: "Energy moves along the propagation direction, which is perpendicular to the transverse particle motion.",
    subtopic: "Transverse & longitudinal"
  },
  {
    question: "The direction of energy transfer in a longitudinal wave is",
    options: [
      "A. perpendicular to particle motion",
      "B. parallel to particle motion",
      "C. circular",
      "D. opposite to motion"
    ],
    answer: "B",
    explanation: "In a longitudinal wave, particles and energy both move along the same (parallel) direction.",
    subtopic: "Transverse & longitudinal"
  },
  {
    question: "A wave in which the displacement is given by y = 5 sin(0.1x − 20t) has amplitude",
    options: [
      "A. 0.1",
      "B. 5",
      "C. 20",
      "D. 0.5"
    ],
    answer: "B",
    explanation: "Comparing with y = A sin(kx − ωt), A = 5 (in the units of y).",
    subtopic: "Mathematical representation"
  },
  {
    question: "For y = 5 sin(0.1x − 20t), the angular frequency ω is",
    options: [
      "A. 0.1",
      "B. 5",
      "C. 20",
      "D. 100"
    ],
    answer: "C",
    explanation: "The coefficient of t is ω = 20 rad/s.",
    subtopic: "Mathematical representation"
  },
  {
    question: "For y = 5 sin(0.1x − 20t), the wave speed is",
    options: [
      "A. 200",
      "B. 2",
      "C. 0.005",
      "D. 100"
    ],
    answer: "A",
    explanation: "v = ω/k = 20/0.1 = 200 (in the units used).",
    subtopic: "Mathematical representation"
  },
  {
    question: "For y = 5 sin(0.1x − 20t), the wavelength is",
    options: [
      "A. 0.1 m",
      "B. 20π m",
      "C. 20 m",
      "D. 2π/0.1 = 20π m"
    ],
    answer: "D",
    explanation: "λ = 2π/k = 2π/0.1 = 20π m.",
    subtopic: "Mathematical representation"
  },
  {
    question: "A wave with k = π rad/m has wavelength",
    options: [
      "A. 2 m",
      "B. π m",
      "C. 0.5 m",
      "D. 4 m"
    ],
    answer: "A",
    explanation: "λ = 2π/k = 2π/π = 2 m.",
    subtopic: "Mathematical representation"
  },
  {
    question: "Which of the following pairs are both transverse?",
    options: [
      "A. Light and sound",
      "B. Light and waves on a string",
      "C. Sound and ultrasound",
      "D. P-waves and sound"
    ],
    answer: "B",
    explanation: "Light and string waves are transverse; sound, ultrasound and P-waves are longitudinal.",
    subtopic: "Transverse & longitudinal"
  },
  {
    question: "The displacement of particles in a transverse wave is maximum at a",
    options: [
      "A. compression",
      "B. crest or trough",
      "C. node only",
      "D. rarefaction"
    ],
    answer: "B",
    explanation: "Crests and troughs are the points of maximum positive and negative transverse displacement.",
    subtopic: "Transverse & longitudinal"
  },
  {
    question: "The displacement of particles in a longitudinal wave is maximum at a",
    options: [
      "A. crest",
      "B. compression or rarefaction boundary",
      "C. node",
      "D. trough"
    ],
    answer: "B",
    explanation: "In a longitudinal wave the largest particle displacements occur near compressions/rarefactions.",
    subtopic: "Transverse & longitudinal"
  },
  {
    question: "A wave in which particles move in ellipses is",
    options: [
      "A. purely transverse",
      "B. a circular/elliptical (surface) wave",
      "C. purely longitudinal",
      "D. electromagnetic"
    ],
    answer: "B",
    explanation: "Surface waves (e.g. water) can show elliptical particle paths combining transverse and longitudinal motion.",
    subtopic: "Transverse & longitudinal"
  },
  {
    question: "If two waves have the same frequency but different amplitudes, they are both",
    options: [
      "A. of different types",
      "B. of the same type but different intensities",
      "C. longitudinal only",
      "D. impossible"
    ],
    answer: "B",
    explanation: "Amplitude affects intensity/energy, not the wave type; same frequency means same type possible.",
    subtopic: "Transverse & longitudinal"
  },
  {
    question: "The phase of a wave at a fixed point repeats every",
    options: [
      "A. wavelength",
      "B. period",
      "C. amplitude",
      "D. wave number"
    ],
    answer: "B",
    explanation: "At a fixed position the motion repeats after one period T.",
    subtopic: "Mathematical representation"
  },
  {
    question: "The phase of a wave at a fixed time repeats every",
    options: [
      "A. wavelength",
      "B. period",
      "C. amplitude",
      "D. frequency"
    ],
    answer: "A",
    explanation: "At a fixed instant the pattern repeats after one wavelength λ.",
    subtopic: "Mathematical representation"
  },
  {
    question: "Which of the following is NOT a longitudinal wave?",
    options: [
      "A. Sound in air",
      "B. Waves on a string",
      "C. Ultrasound",
      "D. Seismic P-waves"
    ],
    answer: "B",
    explanation: "Waves on a string are transverse; the others are longitudinal.",
    subtopic: "Transverse & longitudinal"
  },
  {
    question: "A wave with equation y = 3 sin(2x − 6t) has speed",
    options: [
      "A. 3",
      "B. 12",
      "C. 2",
      "D. 6"
    ],
    answer: "A",
    explanation: "v = ω/k = 6/2 = 3 (in the units used).",
    subtopic: "Mathematical representation"
  },
  {
    question: "The unit of wave number k is",
    options: [
      "A. metre",
      "B. radian per metre",
      "C. hertz",
      "D. second"
    ],
    answer: "B",
    explanation: "k = 2π/λ has units of radians per metre (rad/m).",
    subtopic: "Mathematical representation"
  },
  {
    question: "The unit of angular frequency ω is",
    options: [
      "A. hertz",
      "B. radian per second",
      "C. metre",
      "D. second"
    ],
    answer: "B",
    explanation: "ω = 2πf has units of radians per second (rad/s).",
    subtopic: "Mathematical representation"
  }
];

module.exports = questions;
