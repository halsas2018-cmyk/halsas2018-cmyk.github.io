// physics — Fundamental & Derived Quantities and Units
const questions = [
  {
    question: "Which of the following is a fundamental quantity?",
    options: [
      "A. Velocity",
      "B. Length",
      "C. Force",
      "D. Energy"
    ],
    answer: "B",
    explanation: "Length is a fundamental quantity; velocity, force and energy are derived from fundamentals.",
    subtopic: "Fundamental quantities"
  },
  {
    question: "The SI unit of length is the?",
    options: [
      "A. Metre",
      "B. Centimetre",
      "C. Kilometre",
      "D. Inch"
    ],
    answer: "A",
    explanation: "The SI base unit of length is the metre (m).",
    subtopic: "Fundamental quantities"
  },
  {
    question: "The SI unit of mass is the?",
    options: [
      "A. Gram",
      "B. Kilogram",
      "C. Pound",
      "D. Newton"
    ],
    answer: "B",
    explanation: "The SI base unit of mass is the kilogram (kg).",
    subtopic: "Fundamental quantities"
  },
  {
    question: "The SI unit of time is the?",
    options: [
      "A. Minute",
      "B. Hour",
      "C. Second",
      "D. Day"
    ],
    answer: "C",
    explanation: "The SI base unit of time is the second (s).",
    subtopic: "Fundamental quantities"
  },
  {
    question: "The SI unit of electric current is the?",
    options: [
      "A. Volt",
      "B. Ampere",
      "C. Ohm",
      "D. Coulomb"
    ],
    answer: "B",
    explanation: "The SI base unit of electric current is the ampere (A).",
    subtopic: "Fundamental quantities"
  },
  {
    question: "The SI unit of temperature is the?",
    options: [
      "A. Degree Celsius",
      "B. Fahrenheit",
      "C. Kelvin",
      "D. Calorie"
    ],
    answer: "C",
    explanation: "The SI base unit of temperature is the kelvin (K).",
    subtopic: "Fundamental quantities"
  },
  {
    question: "The SI unit of amount of substance is the?",
    options: [
      "A. Mole",
      "B. Dozen",
      "C. Gram",
      "D. Litre"
    ],
    answer: "A",
    explanation: "The SI base unit for amount of substance is the mole (mol).",
    subtopic: "Fundamental quantities"
  },
  {
    question: "The SI unit of luminous intensity is the?",
    options: [
      "A. Lumen",
      "B. Candela",
      "C. Watt",
      "D. Joule"
    ],
    answer: "B",
    explanation: "The SI base unit of luminous intensity is the candela (cd).",
    subtopic: "Fundamental quantities"
  },
  {
    question: "Which of the following is NOT a fundamental quantity?",
    options: [
      "A. Mass",
      "B. Time",
      "C. Speed",
      "D. Electric current"
    ],
    answer: "C",
    explanation: "Speed is a derived quantity (length/time), not a fundamental one.",
    subtopic: "Fundamental quantities"
  },
  {
    question: "How many fundamental quantities are there in the SI system?",
    options: [
      "A. 3",
      "B. 5",
      "C. 7",
      "D. 9"
    ],
    answer: "C",
    explanation: "The SI system has seven base (fundamental) quantities.",
    subtopic: "Fundamental quantities"
  },
  {
    question: "The fundamental quantities from which area is derived are?",
    options: [
      "A. Length and mass",
      "B. Length and length",
      "C. Length and time",
      "D. Mass and time"
    ],
    answer: "B",
    explanation: "Area = length × length, so it is derived from the fundamental quantity of length.",
    subtopic: "Fundamental quantities"
  },
  {
    question: "Which of the following is a correct fundamental quantity and unit pair?",
    options: [
      "A. Force — Newton",
      "B. Length — Metre",
      "C. Energy — Joule",
      "D. Pressure — Pascal"
    ],
    answer: "B",
    explanation: "Length (metre) is fundamental; the others are derived quantities with derived units.",
    subtopic: "Fundamental quantities"
  },
  {
    question: "The quantity 'amount of substance' is measured in?",
    options: [
      "A. Gram",
      "B. Mole",
      "C. Litre",
      "D. Kelvin"
    ],
    answer: "B",
    explanation: "Amount of substance is measured in moles (mol), an SI base quantity.",
    subtopic: "Fundamental quantities"
  },
  {
    question: "Which of the following is a fundamental unit?",
    options: [
      "A. Newton",
      "B. Joule",
      "C. Kilogram",
      "D. Watt"
    ],
    answer: "C",
    explanation: "Kilogram is a base (fundamental) unit; the others are derived units.",
    subtopic: "Fundamental quantities"
  },
  {
    question: "The base quantity for measuring how hot or cold a body is, is?",
    options: [
      "A. Heat",
      "B. Temperature",
      "C. Energy",
      "D. Power"
    ],
    answer: "B",
    explanation: "Temperature is the fundamental quantity describing hotness; heat is energy transferred.",
    subtopic: "Fundamental quantities"
  },
  {
    question: "Which of the following is a derived quantity?",
    options: [
      "A. Length",
      "B. Mass",
      "C. Volume",
      "D. Time"
    ],
    answer: "C",
    explanation: "Volume is derived (length³); length, mass and time are fundamental.",
    subtopic: "Derived quantities"
  },
  {
    question: "The SI unit of force is the?",
    options: [
      "A. Joule",
      "B. Newton",
      "C. Watt",
      "D. Pascal"
    ],
    answer: "B",
    explanation: "Force is measured in newtons (N), a derived unit equal to kg·m/s².",
    subtopic: "Derived quantities"
  },
  {
    question: "The SI unit of work or energy is the?",
    options: [
      "A. Watt",
      "B. Joule",
      "C. Newton",
      "D. Pascal"
    ],
    answer: "B",
    explanation: "Work and energy are measured in joules (J), a derived unit equal to N·m.",
    subtopic: "Derived quantities"
  },
  {
    question: "The SI unit of power is the?",
    options: [
      "A. Joule",
      "B. Watt",
      "C. Newton",
      "D. Volt"
    ],
    answer: "B",
    explanation: "Power is the rate of doing work, measured in watts (W = J/s).",
    subtopic: "Derived quantities"
  },
  {
    question: "The SI unit of pressure is the?",
    options: [
      "A. Newton",
      "B. Pascal",
      "C. Joule",
      "D. Bar"
    ],
    answer: "B",
    explanation: "Pressure is force per unit area, measured in pascals (Pa = N/m²).",
    subtopic: "Derived quantities"
  },
  {
    question: "Velocity is a derived quantity obtained from?",
    options: [
      "A. Mass and time",
      "B. Length and time",
      "C. Force and time",
      "D. Length and mass"
    ],
    answer: "B",
    explanation: "Velocity = displacement/time, derived from length and time.",
    subtopic: "Derived quantities"
  },
  {
    question: "The SI unit of density is?",
    options: [
      "A. kg/m³",
      "B. g/cm",
      "C. N/m²",
      "D. kg/m"
    ],
    answer: "A",
    explanation: "Density = mass/volume, so its SI unit is kg/m³.",
    subtopic: "Derived quantities"
  },
  {
    question: "Which of the following is the correct dimensional formula for acceleration?",
    options: [
      "A. LT⁻¹",
      "B. LT⁻²",
      "C. MLT⁻²",
      "D. L²T⁻¹"
    ],
    answer: "B",
    explanation: "Acceleration = velocity/time, so its dimensions are LT⁻².",
    subtopic: "Derived quantities"
  },
  {
    question: "The dimensions of force are?",
    options: [
      "A. MLT⁻¹",
      "B. MLT⁻²",
      "C. ML²T⁻²",
      "D. LT⁻²"
    ],
    answer: "B",
    explanation: "Force = mass × acceleration, so dimensions are MLT⁻².",
    subtopic: "Derived quantities"
  },
  {
    question: "The dimensions of work are?",
    options: [
      "A. MLT⁻²",
      "B. ML²T⁻²",
      "C. ML²T⁻¹",
      "D. MT⁻²"
    ],
    answer: "B",
    explanation: "Work = force × distance, giving dimensions ML²T⁻².",
    subtopic: "Derived quantities"
  },
  {
    question: "Volume has dimensions of?",
    options: [
      "A. L",
      "B. L²",
      "C. L³",
      "D. L⁻³"
    ],
    answer: "C",
    explanation: "Volume = length × breadth × height, so its dimensions are L³.",
    subtopic: "Derived quantities"
  },
  {
    question: "The unit of frequency is the?",
    options: [
      "A. Second",
      "B. Hertz",
      "C. Cycle",
      "D. Radian"
    ],
    answer: "B",
    explanation: "Frequency is the number of cycles per second, measured in hertz (Hz = s⁻¹).",
    subtopic: "Derived quantities"
  },
  {
    question: "Which of the following quantities has the unit kg·m/s?",
    options: [
      "A. Force",
      "B. Momentum",
      "C. Energy",
      "D. Power"
    ],
    answer: "B",
    explanation: "Momentum = mass × velocity, with unit kg·m/s.",
    subtopic: "Derived quantities"
  },
  {
    question: "Speed is defined as?",
    options: [
      "A. Distance × time",
      "B. Distance / time",
      "C. Time / distance",
      "D. Distance + time"
    ],
    answer: "B",
    explanation: "Speed = distance travelled divided by the time taken.",
    subtopic: "Derived quantities"
  },
  {
    question: "The unit of acceleration is?",
    options: [
      "A. m/s",
      "B. m/s²",
      "C. s/m",
      "D. m²/s"
    ],
    answer: "B",
    explanation: "Acceleration is change in velocity per second, unit m/s².",
    subtopic: "Derived quantities"
  },
  {
    question: "Which of the following is a derived unit?",
    options: [
      "A. Metre",
      "B. Second",
      "C. Coulomb",
      "D. Kilogram"
    ],
    answer: "C",
    explanation: "Coulomb (charge) is derived (A·s); metre, second and kilogram are base units.",
    subtopic: "Derived quantities"
  },
  {
    question: "The unit of electric charge is the?",
    options: [
      "A. Ampere",
      "B. Coulomb",
      "C. Volt",
      "D. Ohm"
    ],
    answer: "B",
    explanation: "Charge = current × time, measured in coulombs (C = A·s).",
    subtopic: "Derived quantities"
  },
  {
    question: "The unit of potential difference is the?",
    options: [
      "A. Coulomb",
      "B. Volt",
      "C. Ampere",
      "D. Ohm"
    ],
    answer: "B",
    explanation: "Potential difference is measured in volts (V = J/C).",
    subtopic: "Derived quantities"
  },
  {
    question: "The unit of electrical resistance is the?",
    options: [
      "A. Volt",
      "B. Ohm",
      "C. Ampere",
      "D. Watt"
    ],
    answer: "B",
    explanation: "Resistance = voltage/current, measured in ohms (Ω = V/A).",
    subtopic: "Derived quantities"
  },
  {
    question: "Which of the following has the same unit as work?",
    options: [
      "A. Power",
      "B. Energy",
      "C. Force",
      "D. Momentum"
    ],
    answer: "B",
    explanation: "Energy and work are measured in joules; power is in watts.",
    subtopic: "Derived quantities"
  },
  {
    question: "Pressure is defined as?",
    options: [
      "A. Force × area",
      "B. Force / area",
      "C. Area / force",
      "D. Force + area"
    ],
    answer: "B",
    explanation: "Pressure = force per unit area (N/m² = Pa).",
    subtopic: "Derived quantities"
  },
  {
    question: "The dimensions of pressure are?",
    options: [
      "A. ML⁻¹T⁻²",
      "B. MLT⁻²",
      "C. ML²T⁻²",
      "D. ML⁻²T⁻²"
    ],
    answer: "A",
    explanation: "Pressure = force/area = MLT⁻²/L² = ML⁻¹T⁻².",
    subtopic: "Derived quantities"
  },
  {
    question: "Which of the following is a derived quantity?",
    options: [
      "A. Electric current",
      "B. Temperature",
      "C. Acceleration",
      "D. Amount of substance"
    ],
    answer: "C",
    explanation: "Acceleration is derived from length and time; the others are fundamental.",
    subtopic: "Derived quantities"
  },
  {
    question: "The unit of momentum is?",
    options: [
      "A. N·s",
      "B. kg·m/s",
      "C. J",
      "D. Both A and B"
    ],
    answer: "D",
    explanation: "Momentum = mass × velocity = kg·m/s, which equals N·s.",
    subtopic: "Derived quantities"
  },
  {
    question: "Which quantity has dimensions ML²T⁻¹?",
    options: [
      "A. Energy",
      "B. Angular momentum",
      "C. Power",
      "D. Force"
    ],
    answer: "B",
    explanation: "Angular momentum = mvr has dimensions ML²T⁻¹.",
    subtopic: "Derived quantities"
  },
  {
    question: "The SI unit of stress is the same as that of?",
    options: [
      "A. Force",
      "B. Pressure",
      "C. Energy",
      "D. Strain"
    ],
    answer: "B",
    explanation: "Stress = force/area, so it has the same unit (pascal) as pressure.",
    subtopic: "Derived quantities"
  },
  {
    question: "Strain is a?",
    options: [
      "A. Derived quantity with unit m",
      "B. Dimensionless quantity",
      "C. Fundamental quantity",
      "D. Vector quantity"
    ],
    answer: "B",
    explanation: "Strain is the ratio of two lengths, so it has no units (dimensionless).",
    subtopic: "Derived quantities"
  },
  {
    question: "The unit of power can also be written as?",
    options: [
      "A. J·s",
      "B. J/s",
      "C. N·m",
      "D. kg·m"
    ],
    answer: "B",
    explanation: "Power = work/time, so watt = J/s.",
    subtopic: "Derived quantities"
  },
  {
    question: "Which of the following pairs are both derived quantities?",
    options: [
      "A. Mass and length",
      "B. Volume and density",
      "C. Time and current",
      "D. Temperature and mole"
    ],
    answer: "B",
    explanation: "Volume and density are both derived from fundamental quantities.",
    subtopic: "Derived quantities"
  },
  {
    question: "The dimensional formula for power is?",
    options: [
      "A. ML²T⁻³",
      "B. ML²T⁻²",
      "C. MLT⁻²",
      "D. ML²T⁻¹"
    ],
    answer: "A",
    explanation: "Power = work/time = ML²T⁻²/T = ML²T⁻³.",
    subtopic: "Derived quantities"
  },
  {
    question: "Which of the following is the unit of impulse?",
    options: [
      "A. N·s",
      "B. J",
      "C. W",
      "D. Pa"
    ],
    answer: "A",
    explanation: "Impulse = force × time, unit newton-second (N·s), equal to momentum change.",
    subtopic: "Derived quantities"
  },
  {
    question: "The quantity 'volume' is obtained from the fundamental quantity?",
    options: [
      "A. Mass",
      "B. Length",
      "C. Time",
      "D. Current"
    ],
    answer: "B",
    explanation: "Volume = length³, derived solely from length.",
    subtopic: "Derived quantities"
  },
  {
    question: "Which of the following is a correct derived unit?",
    options: [
      "A. kg for mass",
      "B. m/s for speed",
      "C. s for time",
      "D. A for current"
    ],
    answer: "B",
    explanation: "m/s is a derived unit for speed; the others are base units.",
    subtopic: "Derived quantities"
  },
  {
    question: "The unit of Young's modulus is the?",
    options: [
      "A. Newton",
      "B. Pascal",
      "C. Joule",
      "D. Watt"
    ],
    answer: "B",
    explanation: "Young's modulus = stress/strain, so it has the unit of stress, the pascal.",
    subtopic: "Derived quantities"
  },
  {
    question: "Which of the following quantities is dimensionless?",
    options: [
      "A. Angle (in radians)",
      "B. Force",
      "C. Energy",
      "D. Velocity"
    ],
    answer: "A",
    explanation: "A radian is the ratio of arc length to radius, so it is dimensionless.",
    subtopic: "Derived quantities"
  },
  {
    question: "The SI unit of specific heat capacity is?",
    options: [
      "A. J/kg",
      "B. J/(kg·K)",
      "C. J/K",
      "D. kg/K"
    ],
    answer: "B",
    explanation: "Specific heat capacity = energy per unit mass per temperature change: J/(kg·K).",
    subtopic: "Derived quantities"
  },
  {
    question: "Which of the following is NOT a derived quantity?",
    options: [
      "A. Speed",
      "B. Volume",
      "C. Electric current",
      "D. Density"
    ],
    answer: "C",
    explanation: "Electric current is a fundamental quantity; speed, volume and density are derived.",
    subtopic: "Derived quantities"
  },
  {
    question: "The unit of gravitational field strength is?",
    options: [
      "A. N/kg",
      "B. kg/N",
      "C. N·m",
      "D. J/kg"
    ],
    answer: "A",
    explanation: "Gravitational field strength = force/mass, unit N/kg (equivalent to m/s²).",
    subtopic: "Derived quantities"
  }
];

module.exports = questions;
