// physics — Simple Harmonic Motion
const questions = [
  {
    question: "Which of the following best describes simple harmonic motion?",
    options: [
      "A. Motion with constant acceleration",
      "B. Motion where acceleration is always directed towards a fixed point and proportional to displacement",
      "C. Motion at constant speed in a circle",
      "D. Motion where velocity is proportional to displacement"
    ],
    answer: "B",
    explanation: "Simple harmonic motion occurs when the restoring acceleration is directed towards a fixed point and is proportional to the displacement from that point.",
    subtopic: "Illustration & explanation"
  },
  {
    question: "In simple harmonic motion, the acceleration of the body is maximum when the displacement is",
    options: [
      "A. zero",
      "B. minimum but not zero",
      "C. maximum",
      "D. half the amplitude"
    ],
    answer: "C",
    explanation: "Since a = -ω²x, acceleration magnitude is greatest at maximum displacement (the amplitude).",
    subtopic: "Illustration & explanation"
  },
  {
    question: "Which of the following is a necessary condition for simple harmonic motion?",
    options: [
      "A. The force must be constant",
      "B. The restoring force must be proportional to displacement",
      "C. The motion must be circular",
      "D. The period must vary with amplitude"
    ],
    answer: "B",
    explanation: "A restoring force proportional to displacement (F = -kx) is the defining condition for SHM.",
    subtopic: "Illustration & explanation"
  },
  {
    question: "A body executing simple harmonic motion has a displacement x = A cos(ωt). Its acceleration is given by",
    options: [
      "A. -ω²A cos(ωt)",
      "B. ω²A cos(ωt)",
      "C. -ωA sin(ωt)",
      "D. ωA sin(ωt)"
    ],
    answer: "A",
    explanation: "Differentiating twice gives a = -ω²x = -ω²A cos(ωt).",
    subtopic: "Illustration & explanation"
  },
  {
    question: "Which of the following motions is NOT simple harmonic?",
    options: [
      "A. Oscillation of a mass on a spring",
      "B. Small oscillations of a pendulum",
      "C. A ball falling freely under gravity",
      "D. Vibration of a tuning fork"
    ],
    answer: "C",
    explanation: "Free fall has constant acceleration and no restoring force, so it is not SHM.",
    subtopic: "Illustration & explanation"
  },
  {
    question: "The equilibrium position in SHM is the point where",
    options: [
      "A. velocity is zero",
      "B. acceleration is zero",
      "C. displacement is maximum",
      "D. kinetic energy is zero"
    ],
    answer: "B",
    explanation: "At the equilibrium position displacement is zero, so acceleration a = -ω²x is zero.",
    subtopic: "Illustration & explanation"
  },
  {
    question: "A simple pendulum performs SHM for small angles because",
    options: [
      "A. the tension is constant",
      "B. the restoring force is approximately proportional to displacement",
      "C. the mass is constant",
      "D. the length is fixed"
    ],
    answer: "B",
    explanation: "For small angular displacements the restoring force is approximately proportional to displacement, satisfying SHM conditions.",
    subtopic: "Illustration & explanation"
  },
  {
    question: "In SHM the restoring force always acts",
    options: [
      "A. in the direction of motion",
      "B. away from the equilibrium position",
      "C. towards the equilibrium position",
      "D. perpendicular to displacement"
    ],
    answer: "C",
    explanation: "The restoring force is directed towards the equilibrium (fixed) point, opposite the displacement.",
    subtopic: "Illustration & explanation"
  },
  {
    question: "A displacement-time graph for SHM is",
    options: [
      "A. a straight line",
      "B. a parabola",
      "C. a sine or cosine curve",
      "D. an exponential curve"
    ],
    answer: "C",
    explanation: "SHM displacement varies sinusoidally with time, giving a sine or cosine curve.",
    subtopic: "Illustration & explanation"
  },
  {
    question: "Which quantity is a vector in the description of SHM?",
    options: [
      "A. Period",
      "B. Frequency",
      "C. Displacement",
      "D. Amplitude"
    ],
    answer: "C",
    explanation: "Displacement has direction (towards or away from equilibrium), so it is a vector; period, frequency and amplitude are scalars.",
    subtopic: "Illustration & explanation"
  },
  {
    question: "For a body in SHM, the relationship between acceleration a and displacement x is",
    options: [
      "A. a = ωx",
      "B. a = -ω²x",
      "C. a = ω²/x",
      "D. a = x/ω²"
    ],
    answer: "B",
    explanation: "The defining equation of SHM is a = -ω²x, where ω is the angular frequency.",
    subtopic: "Speed & acceleration"
  },
  {
    question: "The velocity of a body in SHM is zero when the body is at",
    options: [
      "A. the equilibrium position",
      "B. the extreme positions",
      "C. half amplitude",
      "D. any point"
    ],
    answer: "B",
    explanation: "At the extreme positions (maximum displacement) the body momentarily stops, so velocity is zero.",
    subtopic: "Speed & acceleration"
  },
  {
    question: "The velocity of a body in SHM is maximum at the",
    options: [
      "A. extreme positions",
      "B. equilibrium position",
      "C. quarter amplitude",
      "D. three-quarter amplitude"
    ],
    answer: "B",
    explanation: "At equilibrium displacement is zero, so kinetic energy is maximum and velocity is maximum.",
    subtopic: "Speed & acceleration"
  },
  {
    question: "The maximum speed v_max of a body in SHM of amplitude A and angular frequency ω is",
    options: [
      "A. ωA",
      "B. ω/A",
      "C. A/ω",
      "D. ω²A"
    ],
    answer: "A",
    explanation: "Maximum speed occurs at equilibrium and equals v_max = ωA.",
    subtopic: "Speed & acceleration"
  },
  {
    question: "A body of amplitude 5 cm and angular frequency 2 rad/s in SHM has maximum speed",
    options: [
      "A. 0.1 m/s",
      "B. 0.2 m/s",
      "C. 10 m/s",
      "D. 2.5 m/s"
    ],
    answer: "A",
    explanation: "v_max = ωA = 2 × 0.05 = 0.1 m/s.",
    subtopic: "Speed & acceleration"
  },
  {
    question: "The speed of a body in SHM at displacement x is given by",
    options: [
      "A. v = ω√(A² - x²)",
      "B. v = ωx",
      "C. v = ω²x",
      "D. v = √(ω² - x²)"
    ],
    answer: "A",
    explanation: "From energy conservation, v = ω√(A² - x²) where A is the amplitude.",
    subtopic: "Speed & acceleration"
  },
  {
    question: "When the displacement of a body in SHM is half the amplitude, the ratio of its speed to maximum speed is",
    options: [
      "A. 1/2",
      "B. √3/2",
      "C. 1/√2",
      "D. 1/4"
    ],
    answer: "B",
    explanation: "v/v_max = √(A² - (A/2)²)/A = √(3A²/4)/A = √3/2.",
    subtopic: "Speed & acceleration"
  },
  {
    question: "The acceleration of a body in SHM is directed",
    options: [
      "A. in the direction of velocity",
      "B. opposite to displacement",
      "C. towards the extreme position",
      "D. perpendicular to displacement"
    ],
    answer: "B",
    explanation: "Since a = -ω²x, acceleration is opposite in direction to displacement.",
    subtopic: "Speed & acceleration"
  },
  {
    question: "A body in SHM has amplitude 0.1 m and angular frequency 10 rad/s. Its maximum acceleration is",
    options: [
      "A. 1 m/s²",
      "B. 10 m/s²",
      "C. 100 m/s²",
      "D. 0.1 m/s²"
    ],
    answer: "B",
    explanation: "a_max = ω²A = 100 × 0.1 = 10 m/s².",
    subtopic: "Speed & acceleration"
  },
  {
    question: "At what displacement is the speed of a SHM body equal to half its maximum speed?",
    options: [
      "A. A/2",
      "B. (√3/2)A",
      "C. A/√2",
      "D. A/4"
    ],
    answer: "B",
    explanation: "v/v_max = √(A²-x²)/A = 1/2 → A²-x² = A²/4 → x = (√3/2)A.",
    subtopic: "Speed & acceleration"
  },
  {
    question: "The period T of a body in SHM is related to angular frequency ω by",
    options: [
      "A. T = ω",
      "B. T = 2π/ω",
      "C. T = ω/2π",
      "D. T = ω²/2π"
    ],
    answer: "B",
    explanation: "Angular frequency ω = 2π/T, so T = 2π/ω.",
    subtopic: "Period/frequency/amplitude"
  },
  {
    question: "A body makes 50 complete oscillations in 20 s. Its frequency is",
    options: [
      "A. 2.5 Hz",
      "B. 0.4 Hz",
      "C. 100 Hz",
      "D. 20 Hz"
    ],
    answer: "A",
    explanation: "Frequency f = number of oscillations / time = 50/20 = 2.5 Hz.",
    subtopic: "Period/frequency/amplitude"
  },
  {
    question: "If the period of a SHM is 0.02 s, its frequency is",
    options: [
      "A. 50 Hz",
      "B. 0.02 Hz",
      "C. 20 Hz",
      "D. 5 Hz"
    ],
    answer: "A",
    explanation: "f = 1/T = 1/0.02 = 50 Hz.",
    subtopic: "Period/frequency/amplitude"
  },
  {
    question: "The unit of angular frequency ω is",
    options: [
      "A. Hz",
      "B. rad/s",
      "C. s",
      "D. m/s"
    ],
    answer: "B",
    explanation: "Angular frequency is measured in radians per second (rad/s).",
    subtopic: "Period/frequency/amplitude"
  },
  {
    question: "A simple pendulum of length 1.0 m has period (g = 9.8 m/s²)",
    options: [
      "A. 0.5 s",
      "B. 1.0 s",
      "C. 2.0 s",
      "D. 6.28 s"
    ],
    answer: "C",
    explanation: "T = 2π√(L/g) = 2π√(1/9.8) ≈ 2.0 s.",
    subtopic: "Period/frequency/amplitude"
  },
  {
    question: "Which of the following is a scalar quantity describing SHM?",
    options: [
      "A. Amplitude",
      "B. Velocity",
      "C. Acceleration",
      "D. Displacement"
    ],
    answer: "A",
    explanation: "Amplitude is the maximum displacement magnitude and is a scalar; the others are vectors.",
    subtopic: "Period/frequency/amplitude"
  },
  {
    question: "A mass on a spring oscillates with period T. If the mass is doubled, the new period becomes",
    options: [
      "A. T",
      "B. T√2",
      "C. 2T",
      "D. T/√2"
    ],
    answer: "B",
    explanation: "T = 2π√(m/k), so doubling m multiplies T by √2.",
    subtopic: "Period/frequency/amplitude"
  },
  {
    question: "The amplitude of SHM is defined as",
    options: [
      "A. the time for one oscillation",
      "B. the maximum displacement from equilibrium",
      "C. the number of oscillations per second",
      "D. the maximum speed"
    ],
    answer: "B",
    explanation: "Amplitude is the maximum displacement of the body from its equilibrium position.",
    subtopic: "Period/frequency/amplitude"
  },
  {
    question: "A spring of force constant 100 N/m is loaded with 0.25 kg mass. Its period is",
    options: [
      "A. 0.1π s",
      "B. 0.05π s",
      "C. 0.2π s",
      "D. 0.5π s"
    ],
    answer: "A",
    explanation: "T = 2π√(m/k) = 2π√(0.25/100) = 2π×0.05 = 0.1π s.",
    subtopic: "Period/frequency/amplitude"
  },
  {
    question: "Two pendulums have lengths in ratio 1:4. Their periods are in the ratio",
    options: [
      "A. 1:2",
      "B. 1:4",
      "C. 2:1",
      "D. 1:√2"
    ],
    answer: "A",
    explanation: "T ∝ √L, so ratio of periods = √(1/4) = 1:2.",
    subtopic: "Period/frequency/amplitude"
  },
  {
    question: "The total energy of a body executing SHM is proportional to",
    options: [
      "A. amplitude",
      "B. square of amplitude",
      "C. frequency",
      "D. inverse of period"
    ],
    answer: "B",
    explanation: "Total energy E = ½mω²A², so it is proportional to the square of the amplitude.",
    subtopic: "Energy of S.H.M"
  },
  {
    question: "At the equilibrium position of SHM, the energy is entirely",
    options: [
      "A. potential",
      "B. kinetic",
      "C. zero",
      "D. thermal"
    ],
    answer: "B",
    explanation: "At equilibrium displacement is zero so potential energy is zero and all energy is kinetic.",
    subtopic: "Energy of S.H.M"
  },
  {
    question: "At the extreme position of SHM, the energy is entirely",
    options: [
      "A. kinetic",
      "B. potential",
      "C. zero",
      "D. heat"
    ],
    answer: "B",
    explanation: "At maximum displacement velocity is zero, so kinetic energy is zero and energy is potential.",
    subtopic: "Energy of S.H.M"
  },
  {
    question: "The total energy of a SHM body of mass m, amplitude A and angular frequency ω is",
    options: [
      "A. ½mωA",
      "B. ½mω²A²",
      "C. mω²A",
      "D. ½mω²A"
    ],
    answer: "B",
    explanation: "Total mechanical energy E = ½mω²A².",
    subtopic: "Energy of S.H.M"
  },
  {
    question: "A SHM body of mass 0.2 kg, amplitude 0.1 m and ω = 5 rad/s has total energy",
    options: [
      "A. 0.025 J",
      "B. 0.05 J",
      "C. 0.125 J",
      "D. 0.25 J"
    ],
    answer: "A",
    explanation: "E = ½mω²A² = 0.5 × 0.2 × 25 × 0.01 = 0.025 J.",
    subtopic: "Energy of S.H.M"
  },
  {
    question: "In SHM, kinetic energy is maximum when",
    options: [
      "A. displacement is maximum",
      "B. displacement is zero",
      "C. acceleration is maximum",
      "D. potential energy is maximum"
    ],
    answer: "B",
    explanation: "Kinetic energy is maximum at the equilibrium position where displacement and PE are zero.",
    subtopic: "Energy of S.H.M"
  },
  {
    question: "The kinetic energy of a SHM body at displacement x is",
    options: [
      "A. ½mω²(A² + x²)",
      "B. ½mω²(A² - x²)",
      "C. ½mω²x²",
      "D. ½mω²A²"
    ],
    answer: "B",
    explanation: "KE = ½mω²(A² - x²) since total energy ½mω²A² minus PE ½mω²x².",
    subtopic: "Energy of S.H.M"
  },
  {
    question: "The potential energy of a SHM body at displacement x is",
    options: [
      "A. ½mω²(A² - x²)",
      "B. ½mω²x²",
      "C. ½mω²A²",
      "D. mω²Ax"
    ],
    answer: "B",
    explanation: "PE = ½mω²x², the energy stored by the restoring force at displacement x.",
    subtopic: "Energy of S.H.M"
  },
  {
    question: "If the amplitude of SHM is doubled while ω is constant, the total energy",
    options: [
      "A. doubles",
      "B. halves",
      "C. becomes four times",
      "D. remains the same"
    ],
    answer: "C",
    explanation: "E ∝ A², so doubling A makes energy four times larger.",
    subtopic: "Energy of S.H.M"
  },
  {
    question: "For a simple pendulum, the potential energy is maximum at",
    options: [
      "A. the lowest point",
      "B. the highest points of swing",
      "C. the midpoint",
      "D. all points equally"
    ],
    answer: "B",
    explanation: "At the highest points displacement is maximum, so potential energy is maximum.",
    subtopic: "Energy of S.H.M"
  },
  {
    question: "A forced vibration occurs when a system is made to oscillate by",
    options: [
      "A. its own natural frequency",
      "B. an external periodic force",
      "C. gravity alone",
      "D. random impulses"
    ],
    answer: "B",
    explanation: "Forced vibration is produced when an external periodic force drives the system.",
    subtopic: "Forced vibration & resonance"
  },
  {
    question: "Resonance occurs when the frequency of the driving force equals the",
    options: [
      "A. amplitude of vibration",
      "B. natural frequency of the system",
      "C. angular velocity of the earth",
      "D. speed of sound"
    ],
    answer: "B",
    explanation: "Resonance occurs when the driving frequency matches the system's natural frequency, giving maximum amplitude.",
    subtopic: "Forced vibration & resonance"
  },
  {
    question: "At resonance, the amplitude of a forced oscillator is",
    options: [
      "A. minimum",
      "B. maximum",
      "C. zero",
      "D. unchanged"
    ],
    answer: "B",
    explanation: "When driving frequency equals natural frequency the system absorbs maximum energy, so amplitude is maximum.",
    subtopic: "Forced vibration & resonance"
  },
  {
    question: "A practical example of resonance is",
    options: [
      "A. a pendulum at rest",
      "B. a bridge collapsing under marching soldiers",
      "C. a falling stone",
      "D. a car moving steadily"
    ],
    answer: "B",
    explanation: "Soldiers marching in step can drive a bridge at its natural frequency, causing destructive resonance.",
    subtopic: "Forced vibration & resonance"
  },
  {
    question: "To reduce the effect of resonance in a building during an earthquake, engineers",
    options: [
      "A. increase its natural frequency",
      "B. use dampers to dissipate energy",
      "C. remove the foundation",
      "D. make it rigid only"
    ],
    answer: "B",
    explanation: "Dampers absorb vibrational energy and reduce resonant amplitude, protecting the structure.",
    subtopic: "Forced vibration & resonance"
  },
  {
    question: "The natural frequency of a system depends on",
    options: [
      "A. the driving force only",
      "B. the system's physical properties (mass, stiffness)",
      "C. the amplitude only",
      "D. the surrounding temperature only"
    ],
    answer: "B",
    explanation: "Natural frequency is an intrinsic property determined by mass, stiffness and geometry of the system.",
    subtopic: "Forced vibration & resonance"
  },
  {
    question: "When the driving frequency is much less than the natural frequency, the amplitude is",
    options: [
      "A. very large",
      "B. small",
      "C. maximum",
      "D. zero"
    ],
    answer: "B",
    explanation: "Away from resonance (far from natural frequency) the driven amplitude is relatively small.",
    subtopic: "Forced vibration & resonance"
  },
  {
    question: "Damping in an oscillating system causes the amplitude to",
    options: [
      "A. increase",
      "B. decrease gradually",
      "C. remain constant",
      "D. become infinite"
    ],
    answer: "B",
    explanation: "Damping removes energy from the system, so the amplitude decreases over time.",
    subtopic: "Forced vibration & resonance"
  },
  {
    question: "A radio is tuned to a station by adjusting its circuit to",
    options: [
      "A. increase damping",
      "B. resonate with the station's frequency",
      "C. change its amplitude",
      "D. block all frequencies"
    ],
    answer: "B",
    explanation: "Tuning changes the circuit's natural frequency to match (resonate with) the desired broadcast frequency.",
    subtopic: "Forced vibration & resonance"
  },
  {
    question: "The phenomenon of resonance is useful in",
    options: [
      "A. only destroying structures",
      "B. musical instruments and radio tuning",
      "C. stopping all vibrations",
      "D. increasing mass"
    ],
    answer: "B",
    explanation: "Resonance is usefully applied in musical instruments, radio receivers and many sensors.",
    subtopic: "Forced vibration & resonance"
  }
];

module.exports = questions;
