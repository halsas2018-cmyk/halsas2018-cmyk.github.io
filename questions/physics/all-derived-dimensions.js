// physics — Derived Quantities & Dimensional Analysis
const questions = [
  {
    question: "The dimension of velocity is expressed as:",
    options: [
      "A. MT⁻¹",
      "B. LT⁻¹",
      "C. LT⁻²",
      "D. MLT⁻¹"
    ],
    answer: "B",
    explanation: "Velocity is displacement per unit time, so its dimension is length divided by time = LT⁻¹.",
    subtopic: "Dimensional analysis"
  },
  {
    question: "What is the dimensional formula of acceleration?",
    options: [
      "A. LT⁻²",
      "B. LT⁻¹",
      "C. MLT⁻²",
      "D. L²T⁻²"
    ],
    answer: "A",
    explanation: "Acceleration is the rate of change of velocity, so dimension = LT⁻¹/T = LT⁻².",
    subtopic: "Dimensional analysis"
  },
  {
    question: "The dimension of force is:",
    options: [
      "A. MLT⁻¹",
      "B. ML²T⁻²",
      "C. MLT⁻²",
      "D. ML⁻¹T⁻²"
    ],
    answer: "C",
    explanation: "From F = ma, force has dimension = M × LT⁻² = MLT⁻².",
    subtopic: "Dimensional analysis"
  },
  {
    question: "Which of the following has dimension ML²T⁻²?",
    options: [
      "A. Power",
      "B. Pressure",
      "C. Work or energy",
      "D. Momentum"
    ],
    answer: "C",
    explanation: "Work and energy are force × distance: MLT⁻² × L = ML²T⁻².",
    subtopic: "Dimensional analysis"
  },
  {
    question: "The dimensional formula of power is:",
    options: [
      "A. ML²T⁻³",
      "B. ML²T⁻²",
      "C. MLT⁻²",
      "D. ML²T⁻¹"
    ],
    answer: "A",
    explanation: "Power = work/time, so ML²T⁻² / T = ML²T⁻³.",
    subtopic: "Dimensional analysis"
  },
  {
    question: "Pressure has the dimensional formula:",
    options: [
      "A. ML⁻²T⁻²",
      "B. ML⁻¹T⁻²",
      "C. MLT⁻²",
      "D. M⁻¹LT⁻²"
    ],
    answer: "B",
    explanation: "Pressure = force/area = MLT⁻² / L² = ML⁻¹T⁻².",
    subtopic: "Dimensional analysis"
  },
  {
    question: "The dimension of density is:",
    options: [
      "A. ML⁻³",
      "B. ML⁻²",
      "C. ML³",
      "D. M⁻³L"
    ],
    answer: "A",
    explanation: "Density = mass/volume = M / L³ = ML⁻³.",
    subtopic: "Dimensional analysis"
  },
  {
    question: "Momentum and impulse share the same dimension. It is:",
    options: [
      "A. MLT⁻²",
      "B. ML²T⁻¹",
      "C. MLT⁻¹",
      "D. MT⁻¹"
    ],
    answer: "C",
    explanation: "Momentum = mv (MLT⁻¹) and impulse = Ft (MLT⁻²×T = MLT⁻¹), so both are MLT⁻¹.",
    subtopic: "Dimensional analysis"
  },
  {
    question: "The dimensional formula of coefficient of viscosity is:",
    options: [
      "A. MLT⁻¹",
      "B. ML⁻¹T⁻¹",
      "C. ML⁻²T⁻¹",
      "D. M⁻¹LT⁻¹"
    ],
    answer: "B",
    explanation: "From F = ηA(v/d), η = Fd/(Av) gives dimension ML⁻¹T⁻¹.",
    subtopic: "Dimensional analysis"
  },
  {
    question: "Surface tension has dimension:",
    options: [
      "A. MT⁻²",
      "B. MLT⁻²",
      "C. ML⁻¹T⁻²",
      "D. MT⁻¹"
    ],
    answer: "A",
    explanation: "Surface tension = force/length = MLT⁻² / L = MT⁻².",
    subtopic: "Dimensional analysis"
  },
  {
    question: "The dimension of the universal gravitational constant G is:",
    options: [
      "A. M⁻¹L³T⁻²",
      "B. ML³T⁻²",
      "C. M⁻¹L²T⁻²",
      "D. ML²T⁻²"
    ],
    answer: "A",
    explanation: "From F = Gm₁m₂/r², G = Fr²/(m₁m₂) = (MLT⁻²)(L²)/M² = M⁻¹L³T⁻².",
    subtopic: "Dimensional analysis"
  },
  {
    question: "Which of the following quantities is dimensionless?",
    options: [
      "A. Force",
      "B. Stress",
      "C. Coefficient of friction",
      "D. Momentum"
    ],
    answer: "C",
    explanation: "Coefficient of friction is the ratio of two forces, so it has no dimensions.",
    subtopic: "Dimensional analysis"
  },
  {
    question: "Strain is defined as the ratio of change in length to original length. Its dimension is:",
    options: [
      "A. ML⁻¹",
      "B. L⁰ (dimensionless)",
      "C. LT⁻¹",
      "D. M⁰L⁻¹T⁰"
    ],
    answer: "B",
    explanation: "Strain is a ratio of two lengths, so it is dimensionless (L⁰).",
    subtopic: "Dimensional analysis"
  },
  {
    question: "An angle measured in radians is the ratio of arc length to radius. Its dimension is:",
    options: [
      "A. L",
      "B. L²",
      "C. Dimensionless",
      "D. LT⁻¹"
    ],
    answer: "C",
    explanation: "Angle = arc/radius, a ratio of lengths, so it is dimensionless.",
    subtopic: "Dimensional analysis"
  },
  {
    question: "The dimension of stress is:",
    options: [
      "A. ML⁻¹T⁻²",
      "B. MLT⁻²",
      "C. ML⁻²T⁻²",
      "D. MT⁻²"
    ],
    answer: "A",
    explanation: "Stress = force/area = MLT⁻² / L² = ML⁻¹T⁻².",
    subtopic: "Dimensional analysis"
  },
  {
    question: "Young's modulus has the same dimension as:",
    options: [
      "A. Energy",
      "B. Stress",
      "C. Force",
      "D. Pressure-gradient"
    ],
    answer: "B",
    explanation: "Young's modulus = stress/strain; strain is dimensionless, so it has the same dimension as stress: ML⁻¹T⁻².",
    subtopic: "Dimensional analysis"
  },
  {
    question: "The dimensional formula of frequency is:",
    options: [
      "A. T",
      "B. T⁻¹",
      "C. LT⁻¹",
      "D. MT⁻¹"
    ],
    answer: "B",
    explanation: "Frequency is the number of cycles per second, so its dimension is T⁻¹.",
    subtopic: "Dimensional analysis"
  },
  {
    question: "Angular velocity has dimension:",
    options: [
      "A. T⁻¹",
      "B. LT⁻¹",
      "C. L²T⁻¹",
      "D. MLT⁻¹"
    ],
    answer: "A",
    explanation: "Angular velocity = angle/time; angle is dimensionless, so ω has dimension T⁻¹.",
    subtopic: "Dimensional analysis"
  },
  {
    question: "The dimension of Planck's constant h is:",
    options: [
      "A. ML²T⁻¹",
      "B. ML²T⁻²",
      "C. MLT⁻¹",
      "D. MT⁻²"
    ],
    answer: "A",
    explanation: "From E = hf, h = E/f gives ML²T⁻² / T⁻¹ = ML²T⁻¹.",
    subtopic: "Dimensional analysis"
  },
  {
    question: "Torque (moment of a force) has dimension:",
    options: [
      "A. MLT⁻²",
      "B. ML²T⁻²",
      "C. ML²T⁻¹",
      "D. MLT⁻¹"
    ],
    answer: "B",
    explanation: "Torque = force × perpendicular distance = MLT⁻² × L = ML²T⁻².",
    subtopic: "Dimensional analysis"
  },
  {
    question: "The dimension of volume is:",
    options: [
      "A. L",
      "B. L²",
      "C. L³",
      "D. L⁴"
    ],
    answer: "C",
    explanation: "Volume is length cubed, so its dimension is L³.",
    subtopic: "Dimensional analysis"
  },
  {
    question: "The dimensional formula of area is:",
    options: [
      "A. L",
      "B. L²",
      "C. L³",
      "D. LT"
    ],
    answer: "B",
    explanation: "Area is length squared, giving dimension L².",
    subtopic: "Dimensional analysis"
  },
  {
    question: "The dimension of speed is equal to that of:",
    options: [
      "A. Acceleration",
      "B. Velocity",
      "C. Force",
      "D. Momentum"
    ],
    answer: "B",
    explanation: "Speed and velocity both have dimension LT⁻¹.",
    subtopic: "Dimensional analysis"
  },
  {
    question: "Energy per unit volume has the dimension of:",
    options: [
      "A. Force",
      "B. Pressure",
      "C. Power",
      "D. Density"
    ],
    answer: "B",
    explanation: "Energy/volume = (ML²T⁻²)/(L³) = ML⁻¹T⁻², the same as pressure.",
    subtopic: "Dimensional analysis"
  },
  {
    question: "Which of the following equations is dimensionally homogeneous?",
    options: [
      "A. v = u + at",
      "B. v = u + at²",
      "C. v = u/t + a",
      "D. v² = u + 2as"
    ],
    answer: "A",
    explanation: "Each term has dimension LT⁻¹: u (LT⁻¹), at (LT⁻²×T = LT⁻¹). The equation is homogeneous.",
    subtopic: "Dimensional analysis"
  },
  {
    question: "The equation s = ut + ½at² is dimensionally:",
    options: [
      "A. Not homogeneous because of the ½",
      "B. Homogeneous; all terms have dimension L",
      "C. Homogeneous; all terms have dimension LT⁻¹",
      "D. Not homogeneous because at² ≠ L"
    ],
    answer: "B",
    explanation: "s (L), ut (LT⁻¹×T = L), ½at² (LT⁻²×T² = L). All terms are L; numerical constants are dimensionless.",
    subtopic: "Dimensional analysis"
  },
  {
    question: "For v² = u² + 2as to be dimensionally correct, 2as must have dimension:",
    options: [
      "A. LT⁻¹",
      "B. L²T⁻²",
      "C. ML²T⁻²",
      "D. LT⁻²"
    ],
    answer: "B",
    explanation: "v² and u² each have dimension (LT⁻¹)² = L²T⁻², so 2as must also be L²T⁻².",
    subtopic: "Dimensional analysis"
  },
  {
    question: "In E = mc², the dimensions of E are:",
    options: [
      "A. ML²T⁻²",
      "B. MLT⁻²",
      "C. M²L²T⁻²",
      "D. ML²T⁻¹"
    ],
    answer: "A",
    explanation: "mc² = M × (LT⁻¹)² = ML²T⁻², the dimension of energy.",
    subtopic: "Dimensional analysis"
  },
  {
    question: "Centripetal force F = mv²/r has dimension:",
    options: [
      "A. MLT⁻¹",
      "B. ML²T⁻²",
      "C. MLT⁻²",
      "D. ML⁻¹T⁻²"
    ],
    answer: "C",
    explanation: "mv²/r = M(LT⁻¹)²/L = MLT⁻², the dimension of force.",
    subtopic: "Dimensional analysis"
  },
  {
    question: "Kinetic energy ½mv² has dimension:",
    options: [
      "A. ML²T⁻¹",
      "B. ML²T⁻²",
      "C. MLT⁻²",
      "D. M²L²T⁻²"
    ],
    answer: "B",
    explanation: "½mv² = M(LT⁻¹)² = ML²T⁻², the dimension of energy.",
    subtopic: "Dimensional analysis"
  },
  {
    question: "Gravitational potential energy mgh has dimension:",
    options: [
      "A. ML²T⁻²",
      "B. MLT⁻²",
      "C. ML²T⁻¹",
      "D. MLT⁻¹"
    ],
    answer: "A",
    explanation: "mgh = M × LT⁻² × L = ML²T⁻², the dimension of energy.",
    subtopic: "Dimensional analysis"
  },
  {
    question: "The dimension of specific heat capacity c (from Q = mcΔθ) is:",
    options: [
      "A. L²T⁻²K⁻¹",
      "B. LT⁻²K⁻¹",
      "C. ML²T⁻²K⁻¹",
      "D. L²TK⁻¹"
    ],
    answer: "A",
    explanation: "c = Q/(mΔθ); Q is energy (ML²T⁻²), so c = ML²T⁻²/(M·K) = L²T⁻²K⁻¹.",
    subtopic: "Dimensional analysis"
  },
  {
    question: "Latent heat L (from Q = mL) has dimension:",
    options: [
      "A. LT⁻¹",
      "B. L²T⁻²",
      "C. ML²T⁻²",
      "D. ML⁻¹T⁻²"
    ],
    answer: "B",
    explanation: "L = Q/m = ML²T⁻² / M = L²T⁻², an energy per unit mass.",
    subtopic: "Dimensional analysis"
  },
  {
    question: "Refractive index is a ratio of speeds of light. Its dimension is:",
    options: [
      "A. LT⁻¹",
      "B. Dimensionless",
      "C. L²T⁻²",
      "D. ML⁻³"
    ],
    answer: "B",
    explanation: "Refractive index = c/v, a ratio of two speeds, so it is dimensionless.",
    subtopic: "Dimensional analysis"
  },
  {
    question: "Relative density is dimensionless because it is:",
    options: [
      "A. Mass per unit volume",
      "B. The ratio of a density to the density of water",
      "C. Weight divided by g",
      "D. Volume per unit mass"
    ],
    answer: "B",
    explanation: "Relative density = density of substance / density of water; the dimensions cancel, leaving no units.",
    subtopic: "Dimensional analysis"
  },
  {
    question: "Poisson's ratio (lateral strain / longitudinal strain) is:",
    options: [
      "A. ML⁻¹T⁻²",
      "B. Dimensionless",
      "C. L⁻¹",
      "D. LT⁻¹"
    ],
    answer: "B",
    explanation: "It is a ratio of two strains, each dimensionless, so Poisson's ratio is dimensionless.",
    subtopic: "Dimensional analysis"
  },
  {
    question: "The efficiency of a machine is the ratio of useful work output to work input. Its dimension is:",
    options: [
      "A. ML²T⁻²",
      "B. Dimensionless",
      "C. MT⁻²",
      "D. L²T⁻²"
    ],
    answer: "B",
    explanation: "Efficiency is a ratio of two quantities of work, so it is dimensionless (often expressed as a percentage).",
    subtopic: "Dimensional analysis"
  },
  {
    question: "The dimension of gravitational field strength g is:",
    options: [
      "A. LT⁻²",
      "B. MLT⁻²",
      "C. LT⁻¹",
      "D. M⁻¹L³T⁻²"
    ],
    answer: "A",
    explanation: "g = force/mass = MLT⁻² / M = LT⁻², i.e. acceleration due to gravity.",
    subtopic: "Dimensional analysis"
  },
  {
    question: "A pendulum period is given by T = k√(l/g). What can be said about the constant k?",
    options: [
      "A. It has dimension T",
      "B. It is dimensionless",
      "C. It has dimension L/T",
      "D. It has dimension MLT⁻²"
    ],
    answer: "B",
    explanation: "√(l/g) has dimension √(L/LT⁻²) = √(T²) = T, matching T, so k must be dimensionless (k = 2π).",
    subtopic: "Dimensional analysis"
  },
  {
    question: "To check if v = √(T/μ) for a transverse wave is dimensionally valid, the dimension of T/μ should be:",
    options: [
      "A. LT⁻¹",
      "B. L²T⁻²",
      "C. MLT⁻²",
      "D. T²"
    ],
    answer: "B",
    explanation: "v² = T/μ must be L²T⁻², so √(T/μ) gives LT⁻¹, matching velocity. Hence valid.",
    subtopic: "Dimensional analysis"
  },
  {
    question: "The dimension of electric charge in terms of current I and time is:",
    options: [
      "A. IT",
      "B. I/T",
      "C. IT⁻¹",
      "D. I²T"
    ],
    answer: "A",
    explanation: "Charge Q = I × t, so its dimension is current × time = IT.",
    subtopic: "Dimensional analysis"
  },
  {
    question: "Which of these is a derived quantity?",
    options: [
      "A. Mass",
      "B. Length",
      "C. Time",
      "D. Velocity"
    ],
    answer: "D",
    explanation: "Mass, length and time are fundamental quantities; velocity is derived from length and time.",
    subtopic: "Dimensional analysis"
  },
  {
    question: "The dimension of pressure can also be written as force per unit:",
    options: [
      "A. Volume",
      "B. Area",
      "C. Length",
      "D. Mass"
    ],
    answer: "B",
    explanation: "Pressure = force / area, so it is force per unit area.",
    subtopic: "Dimensional analysis"
  },
  {
    question: "If a physical quantity X has dimension M⁰L⁰T⁰, then X is:",
    options: [
      "A. A vector quantity",
      "B. Dimensionless",
      "C. A fundamental quantity",
      "D. Measured in newtons"
    ],
    answer: "B",
    explanation: "M⁰L⁰T⁰ means all exponents are zero, so X has no dimensions.",
    subtopic: "Dimensional analysis"
  },
  {
    question: "Dimensional analysis can be used to:",
    options: [
      "A. Find the exact value of a dimensionless constant",
      "B. Check the homogeneity of an equation",
      "C. Determine the direction of a vector",
      "D. Measure the value of g precisely"
    ],
    answer: "B",
    explanation: "Dimensional analysis verifies that equations are dimensionally homogeneous and derives relations, but cannot find dimensionless constants.",
    subtopic: "Dimensional analysis"
  },
  {
    question: "The dimension of bulk modulus is:",
    options: [
      "A. ML⁻¹T⁻²",
      "B. MLT⁻²",
      "C. ML⁻²T⁻²",
      "D. MT⁻²"
    ],
    answer: "A",
    explanation: "Bulk modulus = stress/strain = (ML⁻¹T⁻²)/dimensionless = ML⁻¹T⁻².",
    subtopic: "Dimensional analysis"
  },
  {
    question: "The shear (modulus of rigidity) has the same dimension as:",
    options: [
      "A. Energy",
      "B. Pressure",
      "C. Pressure-gradient",
      "D. Young's modulus and bulk modulus"
    ],
    answer: "D",
    explanation: "All elastic moduli are stress/strain, so they share dimension ML⁻¹T⁻².",
    subtopic: "Dimensional analysis"
  },
  {
    question: "A formula gives the period of a wave on a string as T = 2π√(m/T). Here T (tension) = force. The dimension of m/T is:",
    options: [
      "A. T²",
      "B. L²T⁻²",
      "C. ML⁻¹T⁻²",
      "D. M⁻¹L⁰T²"
    ],
    answer: "A",
    explanation: "For period, √(m/T) must be T. m/M ÷ (MLT⁻²)/M = M × M⁻¹L⁻¹T² = T², so √(m/T) = T. Homogeneous.",
    subtopic: "Dimensional analysis"
  },
  {
    question: "The dimension of impulse is the same as that of:",
    options: [
      "A. Force",
      "B. Momentum",
      "C. Pressure",
      "D. Energy"
    ],
    answer: "B",
    explanation: "Impulse = Ft = MLT⁻² × T = MLT⁻¹, identical to the dimension of momentum.",
    subtopic: "Dimensional analysis"
  },
  {
    question: "Which pair of quantities has the same dimension?",
    options: [
      "A. Work and power",
      "B. Force and pressure",
      "C. Energy and torque",
      "D. Momentum and force"
    ],
    answer: "C",
    explanation: "Torque = force × distance = ML²T⁻², same as energy. They differ conceptually but their dimensions match.",
    subtopic: "Dimensional analysis"
  },
  {
    question: "The dimension of angular momentum L = mvr is:",
    options: [
      "A. ML²T⁻¹",
      "B. MLT⁻¹",
      "C. ML²T⁻²",
      "D. MLT⁻²"
    ],
    answer: "A",
    explanation: "mvr = M × LT⁻¹ × L = ML²T⁻¹.",
    subtopic: "Dimensional analysis"
  },
  {
    question: "Which of the following cannot be checked by dimensional analysis?",
    options: [
      "A. Whether v² = u² + 2as is homogeneous",
      "B. The numerical value of 2π in T = 2π√(l/g)",
      "C. The dimension of kinetic energy",
      "D. Whether F = ma is dimensionally correct"
    ],
    answer: "B",
    explanation: "Dimensional analysis cannot determine dimensionless numerical constants such as 2π.",
    subtopic: "Dimensional analysis"
  },
  {
    question: "The dimension of a wave number k = 2π/λ is:",
    options: [
      "A. L",
      "B. L⁻¹",
      "C. LT⁻¹",
      "D. L²"
    ],
    answer: "B",
    explanation: "Wave number is reciprocal of wavelength (L), so its dimension is L⁻¹.",
    subtopic: "Dimensional analysis"
  },
  {
    question: "The dimension of frequency f is T⁻¹ and of wavelength λ is L. The dimension of wave speed v = fλ is:",
    options: [
      "A. T⁻¹",
      "B. L",
      "C. LT⁻¹",
      "D. L²T⁻¹"
    ],
    answer: "C",
    explanation: "v = fλ = T⁻¹ × L = LT⁻¹, the dimension of speed.",
    subtopic: "Dimensional analysis"
  }
];

module.exports = questions;
