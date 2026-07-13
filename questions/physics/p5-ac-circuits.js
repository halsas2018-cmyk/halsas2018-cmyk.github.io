// physics — Simple a.c. Circuits
const questions = [
  {
    question: "In an a.c. circuit, the quantity that varies periodically in magnitude and direction is the",
    options: [
      "A. resistance",
      "B. current",
      "C. capacitance",
      "D. inductance"
    ],
    answer: "B",
    explanation: "In a.c. circuits the current reverses direction periodically and varies sinusoidally in magnitude.",
    subtopic: "Graphical representation of e.m.f"
  },
  {
    question: "The graph of alternating e.m.f against time is usually",
    options: [
      "A. a straight line",
      "B. a parabola",
      "C. sinusoidal",
      "D. hyperbolic"
    ],
    answer: "C",
    explanation: "Standard a.c. e.m.f varies as a sine (or cosine) wave with time, giving a sinusoidal graph.",
    subtopic: "Graphical representation of e.m.f"
  },
  {
    question: "If the instantaneous e.m.f is given by E = E₀ sin(ωt), then E₀ represents the",
    options: [
      "A. r.m.s. value",
      "B. peak value",
      "C. average value",
      "D. phase angle"
    ],
    answer: "B",
    explanation: "E₀ is the amplitude or peak value of the alternating e.m.f.",
    subtopic: "Graphical representation of e.m.f"
  },
  {
    question: "The symbol ω in E = E₀ sin(ωt) stands for the",
    options: [
      "A. frequency",
      "B. angular velocity",
      "C. period",
      "D. phase"
    ],
    answer: "B",
    explanation: "ω is the angular frequency (angular velocity of the rotating vector) in rad/s, equal to 2πf.",
    subtopic: "Graphical representation of e.m.f"
  },
  {
    question: "The period T of an alternating quantity is the",
    options: [
      "A. number of cycles per second",
      "B. time for one complete cycle",
      "C. maximum displacement",
      "D. reciprocal of frequency in minutes"
    ],
    answer: "B",
    explanation: "The period is the time taken to complete one full cycle; T = 1/f.",
    subtopic: "Graphical representation of e.m.f"
  },
  {
    question: "The frequency of an a.c. supply is 50 Hz. Its period is",
    options: [
      "A. 0.02 s",
      "B. 0.05 s",
      "C. 2 s",
      "D. 50 s"
    ],
    answer: "A",
    explanation: "T = 1/f = 1/50 = 0.02 s.",
    subtopic: "Graphical representation of e.m.f"
  },
  {
    question: "The angular frequency of a 50 Hz a.c. supply is",
    options: [
      "A. 50 rad/s",
      "B. 314 rad/s",
      "C. 100 rad/s",
      "D. 25 rad/s"
    ],
    answer: "B",
    explanation: "ω = 2πf = 2π × 50 ≈ 314 rad/s.",
    subtopic: "Graphical representation of e.m.f"
  },
  {
    question: "The phase difference between two alternating quantities is measured in",
    options: [
      "A. volts",
      "B. degrees or radians",
      "C. hertz",
      "D. seconds only"
    ],
    answer: "B",
    explanation: "Phase difference is an angular quantity measured in degrees or radians.",
    subtopic: "Graphical representation of e.m.f"
  },
  {
    question: "Two a.c. quantities are said to be in phase when their phase difference is",
    options: [
      "A. 90°",
      "B. 180°",
      "C. 0°",
      "D. 270°"
    ],
    answer: "C",
    explanation: "Zero phase difference means they reach maxima and minima at the same time — they are in phase.",
    subtopic: "Graphical representation of e.m.f"
  },
  {
    question: "An a.c. quantity that reaches its maximum when another is zero is",
    options: [
      "A. in phase",
      "B. 180° out of phase",
      "C. 90° out of phase",
      "D. at resonance"
    ],
    answer: "C",
    explanation: "A 90° (quarter cycle) phase difference means one is at maximum when the other is zero.",
    subtopic: "Graphical representation of e.m.f"
  },
  {
    question: "The peak value of an a.c. is the",
    options: [
      "A. average value",
      "B. maximum instantaneous value",
      "C. r.m.s. value",
      "D. value over half a cycle"
    ],
    answer: "B",
    explanation: "The peak (or amplitude) value is the greatest magnitude reached by the alternating quantity.",
    subtopic: "Peak & r.m.s values"
  },
  {
    question: "The r.m.s. value of an alternating current is the",
    options: [
      "A. maximum value",
      "B. average value",
      "C. steady d.c. that produces the same heating effect",
      "D. half the peak value"
    ],
    answer: "C",
    explanation: "The r.m.s. value is the equivalent direct current that dissipates the same power in a resistor.",
    subtopic: "Peak & r.m.s values"
  },
  {
    question: "For a sinusoidal a.c., the r.m.s. value is related to the peak value by",
    options: [
      "A. I_rms = √2 I₀",
      "B. I_rms = I₀/√2",
      "C. I_rms = 2 I₀",
      "D. I_rms = I₀/2"
    ],
    answer: "B",
    explanation: "For a sine wave, I_rms = I₀/√2 ≈ 0.707 I₀.",
    subtopic: "Peak & r.m.s values"
  },
  {
    question: "The peak value of a 240 V r.m.s. a.c. mains supply is approximately",
    options: [
      "A. 170 V",
      "B. 339 V",
      "C. 480 V",
      "D. 120 V"
    ],
    answer: "B",
    explanation: "V₀ = V_rms × √2 = 240 × 1.414 ≈ 339 V.",
    subtopic: "Peak & r.m.s values"
  },
  {
    question: "The average value of a full cycle of a symmetrical sinusoidal a.c. is",
    options: [
      "A. equal to r.m.s.",
      "B. zero",
      "C. 0.637 of peak",
      "D. equal to peak"
    ],
    answer: "B",
    explanation: "Over a complete cycle the positive and negative halves cancel, giving a mean of zero.",
    subtopic: "Peak & r.m.s values"
  },
  {
    question: "The form factor of a sinusoidal waveform is",
    options: [
      "A. 1.11",
      "B. 0.707",
      "C. 1.414",
      "D. 2.0"
    ],
    answer: "A",
    explanation: "Form factor = r.m.s./average(over half cycle) = 0.707/0.637 ≈ 1.11 for a sine wave.",
    subtopic: "Peak & r.m.s values"
  },
  {
    question: "A.c. voltmeters and ammeters normally read",
    options: [
      "A. peak values",
      "B. average values",
      "C. r.m.s. values",
      "D. instantaneous values"
    ],
    answer: "C",
    explanation: "Domestic and general-purpose a.c. meters are calibrated to indicate r.m.s. values.",
    subtopic: "Peak & r.m.s values"
  },
  {
    question: "If the peak current is 14.14 A, the r.m.s. current is",
    options: [
      "A. 10.0 A",
      "B. 20.0 A",
      "C. 14.14 A",
      "D. 7.07 A"
    ],
    answer: "A",
    explanation: "I_rms = 14.14/√2 = 10.0 A.",
    subtopic: "Peak & r.m.s values"
  },
  {
    question: "The peak-to-peak value of a sinusoidal voltage of peak 100 V is",
    options: [
      "A. 100 V",
      "B. 141 V",
      "C. 200 V",
      "D. 50 V"
    ],
    answer: "C",
    explanation: "Peak-to-peak is from the most negative to the most positive extreme: 2 × 100 = 200 V.",
    subtopic: "Peak & r.m.s values"
  },
  {
    question: "For a non-sinusoidal waveform, the r.m.s. value is found by",
    options: [
      "A. dividing peak by 2",
      "B. taking the square root of the mean of the squares",
      "C. averaging the peaks",
      "D. halving the period"
    ],
    answer: "B",
    explanation: "By definition r.m.s. = √(mean of the square of the instantaneous values), for any waveform.",
    subtopic: "Peak & r.m.s values"
  },
  {
    question: "The opposition offered by a capacitor to the flow of a.c. is called",
    options: [
      "A. resistance",
      "B. inductive reactance",
      "C. capacitive reactance",
      "D. impedance"
    ],
    answer: "C",
    explanation: "Capacitive reactance X_C = 1/(2πfC) is the a.c. opposition due to a capacitor.",
    subtopic: "Reactance & impedance"
  },
  {
    question: "Capacitive reactance X_C is given by",
    options: [
      "A. 2πfC",
      "B. 1/(2πfC)",
      "C. 2πfL",
      "D. R/L"
    ],
    answer: "B",
    explanation: "X_C = 1/(2πfC); it decreases as frequency or capacitance increases.",
    subtopic: "Reactance & impedance"
  },
  {
    question: "The opposition offered by an inductor to the flow of a.c. is called",
    options: [
      "A. resistance",
      "B. capacitive reactance",
      "C. inductive reactance",
      "D. conductance"
    ],
    answer: "C",
    explanation: "Inductive reactance X_L = 2πfL is the a.c. opposition due to an inductor.",
    subtopic: "Reactance & impedance"
  },
  {
    question: "Inductive reactance X_L is given by",
    options: [
      "A. 1/(2πfL)",
      "B. 2πfL",
      "C. 1/(2πfC)",
      "D. V/I"
    ],
    answer: "B",
    explanation: "X_L = 2πfL; it increases with frequency and inductance.",
    subtopic: "Reactance & impedance"
  },
  {
    question: "In a purely capacitive a.c. circuit, current leads voltage by",
    options: [
      "A. 0°",
      "B. 45°",
      "C. 90°",
      "D. 180°"
    ],
    answer: "C",
    explanation: "In a pure capacitor the current leads the voltage by 90° (π/2).",
    subtopic: "Reactance & impedance"
  },
  {
    question: "In a purely inductive a.c. circuit, current lags voltage by",
    options: [
      "A. 0°",
      "B. 90°",
      "C. 45°",
      "D. 180°"
    ],
    answer: "B",
    explanation: "In a pure inductor the current lags the voltage by 90° (π/2).",
    subtopic: "Reactance & impedance"
  },
  {
    question: "The total opposition to current in an a.c. circuit containing R, L and C is called",
    options: [
      "A. reactance",
      "B. conductance",
      "C. impedance",
      "D. susceptance"
    ],
    answer: "C",
    explanation: "Impedance Z combines resistance and reactance: Z = √(R² + (X_L − X_C)²).",
    subtopic: "Reactance & impedance"
  },
  {
    question: "For a series RLC circuit the impedance is",
    options: [
      "A. R + X_L + X_C",
      "B. √(R² + (X_L − X_C)²)",
      "C. R(X_L − X_C)",
      "D. R − (X_L + X_C)"
    ],
    answer: "B",
    explanation: "Reactances subtract because L and C oppose each other; impedance is the vector sum with R.",
    subtopic: "Reactance & impedance"
  },
  {
    question: "In a series a.c. circuit, impedance is measured in",
    options: [
      "A. ohms",
      "B. henries",
      "C. farads",
      "D. volts"
    ],
    answer: "A",
    explanation: "Like resistance and reactance, impedance is measured in ohms (Ω).",
    subtopic: "Reactance & impedance"
  },
  {
    question: "If R = 3 Ω and net reactance = 4 Ω in a series circuit, the impedance is",
    options: [
      "A. 7 Ω",
      "B. 12 Ω",
      "C. 5 Ω",
      "D. 1 Ω"
    ],
    answer: "C",
    explanation: "Z = √(3² + 4²) = √(9+16) = √25 = 5 Ω.",
    subtopic: "Reactance & impedance"
  },
  {
    question: "A capacitor blocks",
    options: [
      "A. a.c.",
      "B. d.c.",
      "C. both a.c. and d.c.",
      "D. neither"
    ],
    answer: "B",
    explanation: "A steady d.c. cannot pass through a capacitor (it charges once and then blocks), while a.c. appears to pass.",
    subtopic: "Reactance & impedance"
  },
  {
    question: "An inductor offers high opposition to",
    options: [
      "A. d.c. only",
      "B. low-frequency a.c. only",
      "C. high-frequency a.c.",
      "D. all currents equally"
    ],
    answer: "C",
    explanation: "X_L = 2πfL grows with frequency, so inductors oppose high-frequency a.c. most.",
    subtopic: "Reactance & impedance"
  },
  {
    question: "For a series RLC circuit, the impedance triangle has Z as the hypotenuse and sides",
    options: [
      "A. R and I",
      "B. R and (X_L − X_C)",
      "C. V and I",
      "D. f and C"
    ],
    answer: "B",
    explanation: "The triangle relates Z² = R² + (X_L − X_C)².",
    subtopic: "Vector diagrams"
  },
  {
    question: "In the phasor diagram of a series RLC circuit, the voltage across the resistor is",
    options: [
      "A. in phase with the current",
      "B. 90° ahead of current",
      "C. 90° behind current",
      "D. 180° out of phase"
    ],
    answer: "A",
    explanation: "V_R = IR is always in phase with the current.",
    subtopic: "Vector diagrams"
  },
  {
    question: "In the phasor diagram of a series circuit, the voltage across the inductor is",
    options: [
      "A. in phase with current",
      "B. 90° ahead of current",
      "C. 90° behind current",
      "D. opposite to V_C"
    ],
    answer: "B",
    explanation: "V_L leads the current by 90°.",
    subtopic: "Vector diagrams"
  },
  {
    question: "In the phasor diagram of a series circuit, the voltage across the capacitor is",
    options: [
      "A. in phase with current",
      "B. 90° ahead of current",
      "C. 90° behind current",
      "D. equal to V_R"
    ],
    answer: "C",
    explanation: "V_C lags the current by 90°.",
    subtopic: "Vector diagrams"
  },
  {
    question: "The phasor sum of V_R, V_L and V_C gives the",
    options: [
      "A. supply voltage",
      "B. current",
      "C. power",
      "D. resistance"
    ],
    answer: "A",
    explanation: "The applied (supply) voltage is the vector sum of the individual component voltages.",
    subtopic: "Vector diagrams"
  },
  {
    question: "When X_L > X_C in a series circuit, the circuit is said to be",
    options: [
      "A. capacitive",
      "B. inductive",
      "C. at resonance",
      "D. purely resistive"
    ],
    answer: "B",
    explanation: "If inductive reactance exceeds capacitive reactance the net reactance is inductive and current lags.",
    subtopic: "Vector diagrams"
  },
  {
    question: "When X_C > X_L in a series circuit, the circuit is",
    options: [
      "A. inductive",
      "B. resistive",
      "C. capacitive",
      "D. at resonance"
    ],
    answer: "C",
    explanation: "Net capacitive reactance makes the current lead the voltage; the circuit is capacitive.",
    subtopic: "Vector diagrams"
  },
  {
    question: "Resonance in a series RLC circuit occurs when",
    options: [
      "A. R = 0",
      "B. X_L = X_C",
      "C. V = I",
      "D. f = 0"
    ],
    answer: "B",
    explanation: "At resonance X_L = X_C, so the net reactance cancels and impedance is minimum (= R).",
    subtopic: "Resonance"
  },
  {
    question: "At resonance in a series RLC circuit, the impedance is",
    options: [
      "A. maximum",
      "B. equal to R",
      "C. zero",
      "D. equal to X_L"
    ],
    answer: "B",
    explanation: "With X_L = X_C the reactances cancel, leaving Z = R (minimum impedance).",
    subtopic: "Resonance"
  },
  {
    question: "The resonant frequency f₀ of a series LC circuit is given by",
    options: [
      "A. 1/(2π√LC)",
      "B. 2π√LC",
      "C. 1/(LC)",
      "D. √(L/C)"
    ],
    answer: "A",
    explanation: "f₀ = 1/(2π√LC), obtained by setting X_L = X_C.",
    subtopic: "Resonance"
  },
  {
    question: "At resonance, the current in a series RLC circuit is",
    options: [
      "A. minimum",
      "B. maximum",
      "C. zero",
      "D. equal to the voltage"
    ],
    answer: "B",
    explanation: "Minimum impedance (= R) gives the maximum current at resonance.",
    subtopic: "Resonance"
  },
  {
    question: "In a radio tuning circuit, resonance is used to",
    options: [
      "A. increase resistance",
      "B. select a particular frequency",
      "C. block all signals",
      "D. amplify d.c."
    ],
    answer: "B",
    explanation: "Tuning an LC circuit to resonance maximises response at one desired station frequency.",
    subtopic: "Resonance"
  },
  {
    question: "A series resonant circuit has a sharp resonance when the resistance is",
    options: [
      "A. high",
      "B. low",
      "C. equal to X_L",
      "D. infinite"
    ],
    answer: "B",
    explanation: "Low resistance gives a high Q factor and a sharp, narrow resonance peak.",
    subtopic: "Resonance"
  },
  {
    question: "The power factor of an a.c. circuit is given by",
    options: [
      "A. Z/R",
      "B. R/Z",
      "C. X_L/Z",
      "D. V/I"
    ],
    answer: "B",
    explanation: "Power factor = cos φ = R/Z, the ratio of resistance to impedance.",
    subtopic: "Power"
  },
  {
    question: "The average power dissipated in an a.c. circuit is",
    options: [
      "A. VI",
      "B. VI cos φ",
      "C. V²/Z",
      "D. I²X_L"
    ],
    answer: "B",
    explanation: "Real (average) power P = VI cos φ, where cos φ is the power factor.",
    subtopic: "Power"
  },
  {
    question: "In a purely inductive or capacitive a.c. circuit, the average power consumed is",
    options: [
      "A. VI",
      "B. maximum",
      "C. zero",
      "D. V²/R"
    ],
    answer: "C",
    explanation: "With φ = 90°, cos φ = 0, so ideal inductors and capacitors dissipate no average power.",
    subtopic: "Power"
  },
  {
    question: "Power is dissipated only in the",
    options: [
      "A. inductor",
      "B. capacitor",
      "C. resistor",
      "D. switch"
    ],
    answer: "C",
    explanation: "Real power is consumed in resistance; ideal L and C store and return energy each cycle.",
    subtopic: "Power"
  },
  {
    question: "The unit of apparent power VI in a.c. circuits is the",
    options: [
      "A. watt",
      "B. volt-ampere (VA)",
      "C. joule",
      "D. ohm"
    ],
    answer: "B",
    explanation: "Apparent power S = VI is measured in volt-amperes (VA).",
    subtopic: "Power"
  },
  {
    question: "If V_rms = 200 V, I_rms = 5 A and the power factor is 0.8, the power is",
    options: [
      "A. 1000 W",
      "B. 800 W",
      "C. 1250 W",
      "D. 160 W"
    ],
    answer: "B",
    explanation: "P = VI cos φ = 200 × 5 × 0.8 = 800 W.",
    subtopic: "Power"
  },
  {
    question: "To improve the power factor of an inductive circuit, a capacitor is connected",
    options: [
      "A. in series",
      "B. in parallel",
      "C. as a resistor",
      "D. in open circuit"
    ],
    answer: "B",
    explanation: "A capacitor in parallel supplies leading reactive current, cancelling lagging current and raising cos φ.",
    subtopic: "Power"
  },
  {
    question: "The power factor of a purely resistive circuit is",
    options: [
      "A. 0",
      "B. 0.5",
      "C. 1",
      "D. −1"
    ],
    answer: "C",
    explanation: "For a pure resistor φ = 0, so cos φ = 1 and all apparent power is real power.",
    subtopic: "Power"
  },
  {
    question: "A low power factor means that for a given power the current drawn is",
    options: [
      "A. smaller",
      "B. larger",
      "C. unchanged",
      "D. zero"
    ],
    answer: "B",
    explanation: "Since P = VI cos φ, a smaller cos φ requires a larger current to deliver the same power.",
    subtopic: "Power"
  },
  {
    question: "The product I²R in an a.c. circuit gives the",
    options: [
      "A. apparent power",
      "B. reactive power",
      "C. average power dissipated",
      "D. impedance"
    ],
    answer: "C",
    explanation: "Heat/power in the resistor is I_rms² R, the average real power.",
    subtopic: "Power"
  },
  {
    question: "Reactive power in a.c. circuits is measured in",
    options: [
      "A. watts",
      "B. volt-amperes reactive (VAR)",
      "C. joules",
      "D. ohms"
    ],
    answer: "B",
    explanation: "Reactive power Q = VI sin φ is expressed in VAR (volt-amperes reactive).",
    subtopic: "Power"
  },
  {
    question: "At resonance the power factor of a series RLC circuit becomes",
    options: [
      "A. 0",
      "B. less than 1",
      "C. 1",
      "D. negative"
    ],
    answer: "C",
    explanation: "At resonance φ = 0, so cos φ = 1; the circuit behaves purely resistively.",
    subtopic: "Power"
  }
];

module.exports = questions;
