// physics — Mass and Weight
const questions = [
  {
    question: "Mass is a measure of the?",
    options: [
      "A. Gravitational pull on a body",
      "B. Amount of matter in a body",
      "C. Volume of a body",
      "D. Speed of a body"
    ],
    answer: "B",
    explanation: "Mass is the quantity of matter contained in a body; it does not depend on location.",
    subtopic: "Mass"
  },
  {
    question: "The SI unit of mass is the?",
    options: [
      "A. Newton",
      "B. Kilogram",
      "C. Joule",
      "D. Pascal"
    ],
    answer: "B",
    explanation: "Mass is measured in kilograms (kg).",
    subtopic: "Mass"
  },
  {
    question: "Mass is a?",
    options: [
      "A. Vector quantity",
      "B. Scalar quantity",
      "C. Force",
      "D. Direction"
    ],
    answer: "B",
    explanation: "Mass has magnitude only and no direction, so it is a scalar.",
    subtopic: "Mass"
  },
  {
    question: "The mass of a body on the Moon compared with on Earth is?",
    options: [
      "A. Less",
      "B. More",
      "C. The same",
      "D. Zero"
    ],
    answer: "C",
    explanation: "Mass is the amount of matter and does not change with location.",
    subtopic: "Mass"
  },
  {
    question: "Inertia of a body depends on its?",
    options: [
      "A. Weight",
      "B. Mass",
      "C. Volume",
      "D. Shape"
    ],
    answer: "B",
    explanation: "Inertia (resistance to change in motion) is directly related to mass.",
    subtopic: "Mass"
  },
  {
    question: "A beam balance compares the?",
    options: [
      "A. Weight of two bodies",
      "B. Mass of two bodies",
      "C. Volume of two bodies",
      "D. Density of two bodies"
    ],
    answer: "B",
    explanation: "A beam balance compares masses by balancing gravitational forces at equal g.",
    subtopic: "Mass"
  },
  {
    question: "Mass can be measured using a?",
    options: [
      "A. Spring balance",
      "B. Beam balance",
      "C. Protractor",
      "D. Barometer"
    ],
    answer: "B",
    explanation: "A beam (or lever) balance measures mass by comparison.",
    subtopic: "Mass"
  },
  {
    question: "Which of the following is a correct statement about mass?",
    options: [
      "A. It varies with gravity",
      "B. It is measured in newtons",
      "C. It is a scalar quantity",
      "D. It is a vector"
    ],
    answer: "C",
    explanation: "Mass is a scalar and is independent of gravity; weight is the quantity measured in newtons.",
    subtopic: "Mass"
  },
  {
    question: "The greater the mass of a body, the greater its?",
    options: [
      "A. Weight only on Earth",
      "B. Inertia",
      "C. Colour",
      "D. Temperature"
    ],
    answer: "B",
    explanation: "More mass means more inertia, i.e. greater resistance to acceleration.",
    subtopic: "Mass"
  },
  {
    question: "A body of mass 2 kg has a mass of ___ on the Moon.",
    options: [
      "A. 0 kg",
      "B. 2 kg",
      "C. 12 kg",
      "D. 1 kg"
    ],
    answer: "B",
    explanation: "Mass stays 2 kg everywhere; only weight changes with gravity.",
    subtopic: "Mass"
  },
  {
    question: "Weight is best defined as the?",
    options: [
      "A. Amount of matter",
      "B. Force of gravity on a body",
      "C. Volume of a body",
      "D. Density of a body"
    ],
    answer: "B",
    explanation: "Weight is the gravitational force exerted on a body's mass: W = mg.",
    subtopic: "Weight"
  },
  {
    question: "The SI unit of weight is the?",
    options: [
      "A. Kilogram",
      "B. Newton",
      "C. Joule",
      "D. Pascal"
    ],
    answer: "B",
    explanation: "Weight is a force, measured in newtons (N).",
    subtopic: "Weight"
  },
  {
    question: "Weight is a?",
    options: [
      "A. Scalar quantity",
      "B. Vector quantity",
      "C. Mass",
      "D. Volume"
    ],
    answer: "B",
    explanation: "Weight acts downwards (towards the centre of the Earth), so it is a vector.",
    subtopic: "Weight"
  },
  {
    question: "The formula for weight is?",
    options: [
      "A. W = m/g",
      "B. W = mg",
      "C. W = m + g",
      "D. W = g/m"
    ],
    answer: "B",
    explanation: "Weight = mass × acceleration due to gravity (W = mg).",
    subtopic: "Weight"
  },
  {
    question: "On Earth, the weight of a 5 kg object (taking g = 10 m/s²) is?",
    options: [
      "A. 0.5 N",
      "B. 5 N",
      "C. 50 N",
      "D. 500 N"
    ],
    answer: "C",
    explanation: "W = mg = 5 × 10 = 50 N.",
    subtopic: "Weight"
  },
  {
    question: "A body weighs 20 N on Earth (g = 10 m/s²). Its mass is?",
    options: [
      "A. 2 kg",
      "B. 20 kg",
      "C. 200 kg",
      "D. 0.2 kg"
    ],
    answer: "A",
    explanation: "m = W/g = 20/10 = 2 kg.",
    subtopic: "Weight"
  },
  {
    question: "Which instrument measures weight?",
    options: [
      "A. Beam balance",
      "B. Spring balance",
      "C. Lever balance",
      "D. Vernier caliper"
    ],
    answer: "B",
    explanation: "A spring balance measures weight by the extension of a spring (Hooke's law).",
    subtopic: "Weight"
  },
  {
    question: "The weight of a body on the Moon is less than on Earth because?",
    options: [
      "A. Its mass is less",
      "B. The Moon's gravity is weaker",
      "C. It has no mass",
      "D. The Moon has no gravity"
    ],
    answer: "B",
    explanation: "The Moon's gravitational acceleration is about one-sixth of Earth's, so weight is less.",
    subtopic: "Weight"
  },
  {
    question: "A body of mass 10 kg on Earth (g = 10 m/s²) weighs?",
    options: [
      "A. 1 N",
      "B. 10 N",
      "C. 100 N",
      "D. 1000 N"
    ],
    answer: "C",
    explanation: "W = mg = 10 × 10 = 100 N.",
    subtopic: "Weight"
  },
  {
    question: "Weight always acts in which direction?",
    options: [
      "A. Upwards",
      "B. Towards the centre of the Earth",
      "C. Sideways",
      "D. In the direction of motion"
    ],
    answer: "B",
    explanation: "Weight is the gravitational force directed towards the centre of the Earth.",
    subtopic: "Weight"
  },
  {
    question: "Which of the following changes when you travel from Earth to space (far from gravity)?",
    options: [
      "A. Mass",
      "B. Weight",
      "C. Amount of matter",
      "D. Inertia"
    ],
    answer: "B",
    explanation: "Far from gravitational fields weight tends to zero, but mass remains unchanged.",
    subtopic: "Distinction"
  },
  {
    question: "Mass and weight are different because mass is a scalar while weight is a?",
    options: [
      "A. Scalar",
      "B. Vector",
      "C. Number",
      "D. Volume"
    ],
    answer: "B",
    explanation: "Mass has magnitude only; weight has magnitude and direction, so it is a vector.",
    subtopic: "Distinction"
  },
  {
    question: "Mass is measured in kg while weight is measured in?",
    options: [
      "A. kg",
      "B. N",
      "C. m/s²",
      "D. J"
    ],
    answer: "B",
    explanation: "Weight is a force and is measured in newtons, whereas mass is in kilograms.",
    subtopic: "Distinction"
  },
  {
    question: "A beam balance measures mass but a spring balance measures?",
    options: [
      "A. Mass",
      "B. Weight",
      "C. Volume",
      "D. Density"
    ],
    answer: "B",
    explanation: "A spring balance responds to gravitational force, thus measuring weight.",
    subtopic: "Distinction"
  },
  {
    question: "Two objects have equal masses but are at different heights. Their weights are?",
    options: [
      "A. Equal",
      "B. Different (weight varies slightly with g)",
      "C. Zero",
      "D. Negative"
    ],
    answer: "B",
    explanation: "If g differs with height/location, equal masses have slightly different weights.",
    subtopic: "Distinction"
  },
  {
    question: "Which quantity would be the same on Earth and Jupiter for the same object?",
    options: [
      "A. Weight",
      "B. Mass",
      "C. Apparent weight",
      "D. Gravitational force"
    ],
    answer: "B",
    explanation: "Mass is invariant; weight changes because Jupiter's gravity is stronger.",
    subtopic: "Distinction"
  },
  {
    question: "The acceleration due to gravity near Earth's surface is approximately?",
    options: [
      "A. 9.8 m/s²",
      "B. 9.8 m/s",
      "C. 10 kg",
      "D. 9.8 N"
    ],
    answer: "A",
    explanation: "g ≈ 9.8 m/s² (often taken as 10 m/s² in school problems).",
    subtopic: "Weight"
  },
  {
    question: "A 1 kg mass has a weight of approximately (g = 10 m/s²)?",
    options: [
      "A. 1 N",
      "B. 10 N",
      "C. 100 N",
      "D. 0.1 N"
    ],
    answer: "B",
    explanation: "W = mg = 1 × 10 = 10 N.",
    subtopic: "Weight"
  },
  {
    question: "Mass can never be?",
    options: [
      "A. Zero for matter",
      "B. Negative",
      "C. Measured",
      "D. Constant"
    ],
    answer: "B",
    explanation: "Mass is always a non-negative quantity; it cannot be negative.",
    subtopic: "Mass"
  },
  {
    question: "Weight depends on?",
    options: [
      "A. Mass only",
      "B. Mass and gravitational field strength",
      "C. Volume only",
      "D. Colour"
    ],
    answer: "B",
    explanation: "Weight = mg, so it depends on both mass and the local value of g.",
    subtopic: "Weight"
  },
  {
    question: "A body of weight 60 N on Earth (g = 10 m/s²) has mass?",
    options: [
      "A. 6 kg",
      "B. 60 kg",
      "C. 600 kg",
      "D. 0.6 kg"
    ],
    answer: "A",
    explanation: "m = W/g = 60/10 = 6 kg.",
    subtopic: "Weight"
  },
  {
    question: "Which of these is a vector?",
    options: [
      "A. Mass",
      "B. Weight",
      "C. Time",
      "D. Temperature"
    ],
    answer: "B",
    explanation: "Weight has direction (downward), so it is a vector; mass, time and temperature are scalars.",
    subtopic: "Distinction"
  },
  {
    question: "Which of these is a scalar?",
    options: [
      "A. Weight",
      "B. Mass",
      "C. Force",
      "D. Displacement"
    ],
    answer: "B",
    explanation: "Mass has only magnitude, so it is a scalar.",
    subtopic: "Mass"
  },
  {
    question: "The mass of an object is best found using?",
    options: [
      "A. Spring balance",
      "B. Beam balance",
      "C. Stopwatch",
      "D. Thermometer"
    ],
    answer: "B",
    explanation: "A beam balance compares masses and is independent of local g.",
    subtopic: "Mass"
  },
  {
    question: "An astronaut in an orbiting spacecraft feels 'weightless' because?",
    options: [
      "A. His mass is zero",
      "B. He is in free fall",
      "C. Gravity is absent",
      "D. He has no volume"
    ],
    answer: "B",
    explanation: "In orbit the astronaut and craft fall together, giving apparent weightlessness though gravity acts.",
    subtopic: "Distinction"
  },
  {
    question: "In the formula W = mg, the symbol g stands for?",
    options: [
      "A. Mass",
      "B. Acceleration due to gravity",
      "C. Weight",
      "D. Force"
    ],
    answer: "B",
    explanation: "g is the acceleration due to gravity.",
    subtopic: "Weight"
  },
  {
    question: "Weight is the product of mass and?",
    options: [
      "A. Velocity",
      "B. Gravitational acceleration",
      "C. Density",
      "D. Volume"
    ],
    answer: "B",
    explanation: "Weight = mass × gravitational acceleration.",
    subtopic: "Weight"
  },
  {
    question: "A body of mass 4 kg on a planet where g = 5 m/s² has weight?",
    options: [
      "A. 20 N",
      "B. 4 N",
      "C. 9 N",
      "D. 0.8 N"
    ],
    answer: "A",
    explanation: "W = mg = 4 × 5 = 20 N.",
    subtopic: "Weight"
  },
  {
    question: "Which quantity determines how hard it is to stop a moving object?",
    options: [
      "A. Weight",
      "B. Mass (inertia)",
      "C. Colour",
      "D. Height"
    ],
    answer: "B",
    explanation: "Inertia, proportional to mass, determines resistance to changes in motion.",
    subtopic: "Mass"
  },
  {
    question: "Mass and weight are both measured with the same instrument. This statement is?",
    options: [
      "A. True",
      "B. False",
      "C. Sometimes true",
      "D. Unknown"
    ],
    answer: "B",
    explanation: "Mass is measured by a beam balance, weight by a spring balance; they are different.",
    subtopic: "Distinction"
  },
  {
    question: "If g doubled while mass stayed the same, weight would?",
    options: [
      "A. Halve",
      "B. Double",
      "C. Stay the same",
      "D. Become zero"
    ],
    answer: "B",
    explanation: "Since W = mg, doubling g doubles the weight for the same mass.",
    subtopic: "Distinction"
  },
  {
    question: "The weight of a body is maximum at?",
    options: [
      "A. The equator",
      "B. The poles",
      "C. The Moon",
      "D. Space"
    ],
    answer: "B",
    explanation: "Earth's g is slightly larger at the poles, so weight is greatest there.",
    subtopic: "Weight"
  },
  {
    question: "A 50 kg person on Earth (g = 10 m/s²) has weight?",
    options: [
      "A. 5 N",
      "B. 50 N",
      "C. 500 N",
      "D. 5000 N"
    ],
    answer: "C",
    explanation: "W = mg = 50 × 10 = 500 N.",
    subtopic: "Weight"
  },
  {
    question: "Mass is independent of?",
    options: [
      "A. The amount of matter",
      "B. Location",
      "C. Inertia",
      "D. Kilograms"
    ],
    answer: "B",
    explanation: "Mass does not depend on location; it is the same anywhere.",
    subtopic: "Mass"
  },
  {
    question: "Which of the following has no direction?",
    options: [
      "A. Weight",
      "B. Mass",
      "C. Force",
      "D. Displacement"
    ],
    answer: "B",
    explanation: "Mass is a scalar with no direction.",
    subtopic: "Mass"
  },
  {
    question: "A spring balance calibrated on Earth would give a wrong mass reading on the Moon because it measures?",
    options: [
      "A. Mass directly",
      "B. Weight",
      "C. Volume",
      "D. Density"
    ],
    answer: "B",
    explanation: "A spring balance measures weight, which is lower on the Moon, so it misreads mass if uncorrected.",
    subtopic: "Distinction"
  },
  {
    question: "The gravitational field strength g is also equal to?",
    options: [
      "A. Weight per unit mass",
      "B. Mass per unit volume",
      "C. Force per unit area",
      "D. Energy per unit time"
    ],
    answer: "A",
    explanation: "g = W/m, i.e. weight per unit mass (units N/kg).",
    subtopic: "Weight"
  },
  {
    question: "A body with mass 0.5 kg has weight (g = 10 m/s²)?",
    options: [
      "A. 5 N",
      "B. 0.5 N",
      "C. 50 N",
      "D. 0.05 N"
    ],
    answer: "A",
    explanation: "W = mg = 0.5 × 10 = 5 N.",
    subtopic: "Weight"
  },
  {
    question: "Which statement correctly distinguishes mass from weight?",
    options: [
      "A. Both are vectors",
      "B. Mass is invariant, weight depends on gravity",
      "C. Both are measured in newtons",
      "D. Weight is invariant"
    ],
    answer: "B",
    explanation: "Mass is constant everywhere; weight varies with the strength of gravity.",
    subtopic: "Distinction"
  },
  {
    question: "The unit N/kg is equivalent to?",
    options: [
      "A. m/s",
      "B. m/s²",
      "C. kg/m",
      "D. J"
    ],
    answer: "B",
    explanation: "Since g = W/m, N/kg is equivalent to m/s².",
    subtopic: "Weight"
  },
  {
    question: "A body of weight 100 N (g = 10 m/s²) taken to a place where g = 20 m/s² has weight?",
    options: [
      "A. 50 N",
      "B. 100 N",
      "C. 200 N",
      "D. 10 N"
    ],
    answer: "C",
    explanation: "Mass = 100/10 = 10 kg; new weight = 10 × 20 = 200 N.",
    subtopic: "Weight"
  },
  {
    question: "Which quantity is used to compare the quantity of matter in two objects?",
    options: [
      "A. Weight",
      "B. Mass",
      "C. Volume",
      "D. Density"
    ],
    answer: "B",
    explanation: "Mass directly measures the amount of matter.",
    subtopic: "Mass"
  },
  {
    question: "If a body is in deep space far from any planet, its?",
    options: [
      "A. Mass is zero",
      "B. Weight is approximately zero",
      "C. Volume is zero",
      "D. Inertia is zero"
    ],
    answer: "B",
    explanation: "Far from gravity, weight is nearly zero but mass and inertia remain.",
    subtopic: "Distinction"
  },
  {
    question: "The mass of a body can be found from its weight using the relation?",
    options: [
      "A. m = Wg",
      "B. m = W/g",
      "C. m = g/W",
      "D. m = W + g"
    ],
    answer: "B",
    explanation: "Rearranging W = mg gives m = W/g.",
    subtopic: "Weight"
  }
];

module.exports = questions;
