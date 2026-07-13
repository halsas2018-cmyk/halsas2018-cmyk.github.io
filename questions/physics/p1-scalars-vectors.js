// physics — Scalars and Vectors
const questions = [
  {
    question: "A scalar quantity has only?",
    options: [
      "A. Magnitude",
      "B. Direction",
      "C. Magnitude and direction",
      "D. Velocity"
    ],
    answer: "A",
    explanation: "A scalar has magnitude (size) only and no direction.",
    subtopic: "Scalars"
  },
  {
    question: "Which of the following is a scalar?",
    options: [
      "A. Velocity",
      "B. Force",
      "C. Temperature",
      "D. Displacement"
    ],
    answer: "C",
    explanation: "Temperature has magnitude only, so it is a scalar; velocity, force and displacement are vectors.",
    subtopic: "Scalars"
  },
  {
    question: "Which of the following is a scalar?",
    options: [
      "A. Acceleration",
      "B. Mass",
      "C. Weight",
      "D. Momentum"
    ],
    answer: "B",
    explanation: "Mass has magnitude only, making it a scalar; the others are vectors.",
    subtopic: "Scalars"
  },
  {
    question: "Distance is a scalar because it has?",
    options: [
      "A. Direction",
      "B. Magnitude only",
      "C. Both magnitude and direction",
      "D. Negative values"
    ],
    answer: "B",
    explanation: "Distance is described by size alone, with no direction.",
    subtopic: "Scalars"
  },
  {
    question: "Speed is a scalar while velocity is a?",
    options: [
      "A. Scalar",
      "B. Vector",
      "C. Force",
      "D. Number"
    ],
    answer: "B",
    explanation: "Velocity includes direction, so it is a vector; speed does not.",
    subtopic: "Scalars"
  },
  {
    question: "Which of the following groups contains only scalars?",
    options: [
      "A. Mass, speed, time",
      "B. Velocity, force, displacement",
      "C. Acceleration, weight, momentum",
      "D. Displacement, velocity, force"
    ],
    answer: "A",
    explanation: "Mass, speed and time have magnitude only, so all are scalars.",
    subtopic: "Scalars"
  },
  {
    question: "Energy is a?",
    options: [
      "A. Vector",
      "B. Scalar",
      "C. Force",
      "D. Direction"
    ],
    answer: "B",
    explanation: "Energy has magnitude only, so it is a scalar quantity.",
    subtopic: "Scalars"
  },
  {
    question: "Power is a?",
    options: [
      "A. Vector",
      "B. Scalar",
      "C. Force",
      "D. Displacement"
    ],
    answer: "B",
    explanation: "Power (rate of doing work) has magnitude only, so it is a scalar.",
    subtopic: "Scalars"
  },
  {
    question: "A vector quantity has both?",
    options: [
      "A. Mass and volume",
      "B. Magnitude and direction",
      "C. Speed and time",
      "D. Length and area"
    ],
    answer: "B",
    explanation: "A vector is described by both magnitude (size) and direction.",
    subtopic: "Vectors"
  },
  {
    question: "Which of the following is a vector?",
    options: [
      "A. Mass",
      "B. Velocity",
      "C. Temperature",
      "D. Energy"
    ],
    answer: "B",
    explanation: "Velocity has magnitude and direction, so it is a vector.",
    subtopic: "Vectors"
  },
  {
    question: "Which of the following is a vector?",
    options: [
      "A. Distance",
      "B. Force",
      "C. Speed",
      "D. Time"
    ],
    answer: "B",
    explanation: "Force acts in a direction, so it is a vector.",
    subtopic: "Vectors"
  },
  {
    question: "Displacement is a vector because it has?",
    options: [
      "A. Magnitude only",
      "B. Magnitude and direction",
      "C. No direction",
      "D. Only direction"
    ],
    answer: "B",
    explanation: "Displacement is the straight-line distance from start to end, with direction.",
    subtopic: "Vectors"
  },
  {
    question: "Weight is a vector because it has?",
    options: [
      "A. Magnitude only",
      "B. Magnitude and direction (downward)",
      "C. No direction",
      "D. Constant value"
    ],
    answer: "B",
    explanation: "Weight acts downward with a size, so it is a vector.",
    subtopic: "Vectors"
  },
  {
    question: "Acceleration is a?",
    options: [
      "A. Scalar",
      "B. Vector",
      "C. Speed",
      "D. Mass"
    ],
    answer: "B",
    explanation: "Acceleration has magnitude and direction (a change in velocity), so it is a vector.",
    subtopic: "Vectors"
  },
  {
    question: "Momentum is a?",
    options: [
      "A. Scalar",
      "B. Vector",
      "C. Distance",
      "D. Time"
    ],
    answer: "B",
    explanation: "Momentum = mass × velocity, and velocity is a vector, so momentum is a vector.",
    subtopic: "Vectors"
  },
  {
    question: "A vector is represented graphically by an arrow whose length shows?",
    options: [
      "A. Direction",
      "B. Magnitude",
      "C. Time",
      "D. Mass"
    ],
    answer: "B",
    explanation: "The length of the arrow represents the magnitude of the vector.",
    subtopic: "Vector representation"
  },
  {
    question: "In a vector diagram, the arrowhead shows the?",
    options: [
      "A. Magnitude",
      "B. Direction",
      "C. Speed",
      "D. Mass"
    ],
    answer: "B",
    explanation: "The arrowhead (tip) indicates the direction of the vector.",
    subtopic: "Vector representation"
  },
  {
    question: "A vector of 5 N directed East is represented by an arrow pointing?",
    options: [
      "A. West",
      "B. East",
      "C. North",
      "D. Up"
    ],
    answer: "B",
    explanation: "The arrow points East to show the direction of the 5 N vector.",
    subtopic: "Vector representation"
  },
  {
    question: "The standard notation for a vector quantity is often a letter with?",
    options: [
      "A. A dot above",
      "B. An arrow above (or bold type)",
      "C. A circle below",
      "D. No marking"
    ],
    answer: "B",
    explanation: "Vectors are denoted by an arrow above the symbol or by bold print.",
    subtopic: "Vector representation"
  },
  {
    question: "Two vectors are equal if they have the same?",
    options: [
      "A. Magnitude only",
      "B. Magnitude and direction",
      "C. Direction only",
      "D. Units only"
    ],
    answer: "B",
    explanation: "Equal vectors have identical magnitude and direction.",
    subtopic: "Vector representation"
  },
  {
    question: "A vector can be shifted parallel to itself without changing its?",
    options: [
      "A. Direction and magnitude",
      "B. Length only",
      "C. Colour",
      "D. Mass"
    ],
    answer: "A",
    explanation: "A free vector may be slid parallel to itself; magnitude and direction stay the same.",
    subtopic: "Vector representation"
  },
  {
    question: "Adding two vectors tip-to-tail gives the?",
    options: [
      "A. Difference",
      "B. Resultant",
      "C. Component",
      "D. Scalar"
    ],
    answer: "B",
    explanation: "The tip-to-tail (triangle) method produces the resultant vector.",
    subtopic: "Addition of vectors"
  },
  {
    question: "Two forces of 3 N and 4 N act in the same direction. Their resultant is?",
    options: [
      "A. 1 N",
      "B. 7 N",
      "C. 12 N",
      "D. 5 N"
    ],
    answer: "B",
    explanation: "Same direction: resultant = 3 + 4 = 7 N.",
    subtopic: "Addition of vectors"
  },
  {
    question: "Two forces of 5 N East and 5 N West act on a body. The resultant is?",
    options: [
      "A. 10 N East",
      "B. 5 N",
      "C. 0 N",
      "D. 10 N West"
    ],
    answer: "C",
    explanation: "Equal and opposite forces cancel, giving zero resultant.",
    subtopic: "Addition of vectors"
  },
  {
    question: "Two perpendicular vectors of 3 N and 4 N have a resultant of magnitude?",
    options: [
      "A. 7 N",
      "B. 5 N",
      "C. 1 N",
      "D. 12 N"
    ],
    answer: "B",
    explanation: "Resultant = √(3² + 4²) = √25 = 5 N.",
    subtopic: "Addition of vectors"
  },
  {
    question: "The parallelogram law is used to add?",
    options: [
      "A. Two scalars",
      "B. Two vectors",
      "C. Two masses",
      "D. Two times"
    ],
    answer: "B",
    explanation: "The parallelogram law combines two vectors acting at a point into a resultant.",
    subtopic: "Addition of vectors"
  },
  {
    question: "A plane flies 40 km North and 30 km East. The resultant displacement is?",
    options: [
      "A. 70 km",
      "B. 50 km",
      "C. 10 km",
      "D. 35 km"
    ],
    answer: "B",
    explanation: "Resultant = √(40² + 30²) = √2500 = 50 km.",
    subtopic: "Addition of vectors"
  },
  {
    question: "When two vectors act at right angles, the resultant magnitude is found using?",
    options: [
      "A. Simple addition",
      "B. Pythagoras' theorem",
      "C. Subtraction only",
      "D. Averaging"
    ],
    answer: "B",
    explanation: "For perpendicular vectors, the resultant is the hypotenuse: √(a² + b²).",
    subtopic: "Addition of vectors"
  },
  {
    question: "Two vectors of equal magnitude 10 N at 120° to each other have resultant?",
    options: [
      "A. 20 N",
      "B. 10 N",
      "C. 0 N",
      "D. 5 N"
    ],
    answer: "B",
    explanation: "For two equal vectors separated by 120°, resultant = 10 N (by the cosine rule).",
    subtopic: "Addition of vectors"
  },
  {
    question: "The angle of the resultant vector is measured from the?",
    options: [
      "A. Smaller vector",
      "B. Reference (horizontal) direction",
      "C. Vertical only",
      "D. Origin mass"
    ],
    answer: "B",
    explanation: "The direction of a resultant is stated relative to a reference direction (e.g. horizontal).",
    subtopic: "Addition of vectors"
  },
  {
    question: "Splitting a vector into perpendicular parts is called?",
    options: [
      "A. Addition",
      "B. Resolution",
      "C. Multiplication",
      "D. Subtraction"
    ],
    answer: "B",
    explanation: "Resolution is the process of breaking a vector into components (usually perpendicular).",
    subtopic: "Resolution of vectors"
  },
  {
    question: "A vector at angle θ to the horizontal has horizontal component?",
    options: [
      "A. V sin θ",
      "B. V cos θ",
      "C. V / cos θ",
      "D. V tan θ"
    ],
    answer: "B",
    explanation: "The horizontal component is V cos θ.",
    subtopic: "Resolution of vectors"
  },
  {
    question: "A vector V at angle θ to the horizontal has vertical component?",
    options: [
      "A. V cos θ",
      "B. V sin θ",
      "C. V / sin θ",
      "D. V tan θ"
    ],
    answer: "B",
    explanation: "The vertical component is V sin θ.",
    subtopic: "Resolution of vectors"
  },
  {
    question: "A force of 10 N acts at 30° to the horizontal. Its horizontal component is?",
    options: [
      "A. 5 N",
      "B. 8.66 N",
      "C. 10 N",
      "D. 5√3 N"
    ],
    answer: "B",
    explanation: "Horizontal = 10 cos 30° ≈ 10 × 0.866 = 8.66 N.",
    subtopic: "Resolution of vectors"
  },
  {
    question: "A force of 10 N acts at 30° above the horizontal. Its vertical component is?",
    options: [
      "A. 5 N",
      "B. 8.66 N",
      "C. 10 N",
      "D. 0 N"
    ],
    answer: "A",
    explanation: "Vertical = 10 sin 30° = 10 × 0.5 = 5 N.",
    subtopic: "Resolution of vectors"
  },
  {
    question: "The two perpendicular components of a vector are called its?",
    options: [
      "A. Resultants",
      "B. Components",
      "C. Scalars",
      "D. Magnitudes"
    ],
    answer: "B",
    explanation: "The perpendicular parts are the components (e.g. horizontal and vertical).",
    subtopic: "Resolution of vectors"
  },
  {
    question: "Resolution of a vector into components is the reverse of?",
    options: [
      "A. Subtraction",
      "B. Vector addition",
      "C. Scalar multiplication",
      "D. Division"
    ],
    answer: "B",
    explanation: "Components add (by Pythagoras) back to the original vector, the reverse of resolution.",
    subtopic: "Resolution of vectors"
  },
  {
    question: "A vector pointing straight up has horizontal component?",
    options: [
      "A. Maximum",
      "B. Zero",
      "C. Equal to its magnitude",
      "D. Negative"
    ],
    answer: "B",
    explanation: "A purely vertical vector has no horizontal part, so horizontal component is zero.",
    subtopic: "Resolution of vectors"
  },
  {
    question: "A vector of magnitude 20 N at 60° to the horizontal has horizontal component?",
    options: [
      "A. 10 N",
      "B. 17.3 N",
      "C. 20 N",
      "D. 0 N"
    ],
    answer: "A",
    explanation: "Horizontal = 20 cos 60° = 20 × 0.5 = 10 N.",
    subtopic: "Resolution of vectors"
  },
  {
    question: "Resultant velocity is the vector sum of?",
    options: [
      "A. Two speeds",
      "B. Two or more velocity vectors",
      "C. A speed and a time",
      "D. Two masses"
    ],
    answer: "B",
    explanation: "Resultant velocity is obtained by adding individual velocity vectors.",
    subtopic: "Resultant velocity"
  },
  {
    question: "A boat moves at 4 m/s across a river while the current is 3 m/s downstream. The resultant speed is?",
    options: [
      "A. 7 m/s",
      "B. 5 m/s",
      "C. 1 m/s",
      "D. 12 m/s"
    ],
    answer: "B",
    explanation: "Resultant = √(4² + 3²) = √25 = 5 m/s (perpendicular velocities).",
    subtopic: "Resultant velocity"
  },
  {
    question: "A plane heads North at 200 km/h and wind blows West at 150 km/h. The resultant speed is?",
    options: [
      "A. 350 km/h",
      "B. 250 km/h",
      "C. 50 km/h",
      "D. 200 km/h"
    ],
    answer: "B",
    explanation: "Resultant = √(200² + 150²) = √62500 = 250 km/h.",
    subtopic: "Resultant velocity"
  },
  {
    question: "If a body moves with resultant velocity zero, it is?",
    options: [
      "A. Moving fast",
      "B. At rest (or returning to start)",
      "C. Accelerating",
      "D. Falling"
    ],
    answer: "B",
    explanation: "Zero resultant velocity means no net motion (the body is at rest relative to the ground).",
    subtopic: "Resultant velocity"
  },
  {
    question: "A swimmer crosses a river at 2 m/s perpendicular to a 1.5 m/s current. Resultant speed?",
    options: [
      "A. 3.5 m/s",
      "B. 2.5 m/s",
      "C. 0.5 m/s",
      "D. 2.0 m/s"
    ],
    answer: "B",
    explanation: "Resultant = √(2² + 1.5²) = √6.25 = 2.5 m/s.",
    subtopic: "Resultant velocity"
  },
  {
    question: "Two velocities of 6 m/s East and 8 m/s North give a resultant of?",
    options: [
      "A. 14 m/s",
      "B. 10 m/s",
      "C. 2 m/s",
      "D. 48 m/s"
    ],
    answer: "B",
    explanation: "Resultant = √(6² + 8²) = √100 = 10 m/s.",
    subtopic: "Resultant velocity"
  },
  {
    question: "The direction of a resultant velocity is found using?",
    options: [
      "A. tan θ = opposite/adjacent",
      "B. Cosine only",
      "C. Mass",
      "D. Time"
    ],
    answer: "A",
    explanation: "The angle is found from the ratio of perpendicular components: tan θ = (vertical)/(horizontal).",
    subtopic: "Resultant velocity"
  },
  {
    question: "A car travels East at 20 m/s and a passenger walks toward the front at 2 m/s relative to the car. The passenger's resultant velocity relative to ground is?",
    options: [
      "A. 18 m/s East",
      "B. 22 m/s East",
      "C. 20 m/s East",
      "D. 2 m/s East"
    ],
    answer: "B",
    explanation: "Velocities in the same direction add: 20 + 2 = 22 m/s East.",
    subtopic: "Resultant velocity"
  },
  {
    question: "A car travels East at 20 m/s and a passenger walks toward the rear at 2 m/s. The passenger's resultant velocity is?",
    options: [
      "A. 22 m/s East",
      "B. 18 m/s East",
      "C. 20 m/s West",
      "D. 2 m/s West"
    ],
    answer: "B",
    explanation: "Opposite directions combine: 20 − 2 = 18 m/s East.",
    subtopic: "Resultant velocity"
  },
  {
    question: "Which of the following pairs are both vectors?",
    options: [
      "A. Speed and mass",
      "B. Velocity and acceleration",
      "C. Distance and time",
      "D. Energy and power"
    ],
    answer: "B",
    explanation: "Velocity and acceleration both have magnitude and direction, so both are vectors.",
    subtopic: "Vectors"
  },
  {
    question: "Adding a vector to the negative of an equal vector gives?",
    options: [
      "A. Double the vector",
      "B. Zero",
      "C. The same vector",
      "D. Half the vector"
    ],
    answer: "B",
    explanation: "A vector plus its opposite cancels to zero.",
    subtopic: "Addition of vectors"
  },
  {
    question: "A vector of 5 units pointing North-East is resolved into two equal perpendicular components. Each has magnitude?",
    options: [
      "A. 5 units",
      "B. 5/√2 units",
      "C. 2.5 units",
      "D. 10 units"
    ],
    answer: "B",
    explanation: "At 45°, each component = 5 cos 45° = 5/√2 units.",
    subtopic: "Resolution of vectors"
  },
  {
    question: "The magnitude of a vector can never be?",
    options: [
      "A. Positive",
      "B. Zero for a non-zero vector",
      "C. Equal to a component",
      "D. Measured"
    ],
    answer: "B",
    explanation: "A true (non-zero) vector always has a positive magnitude; only the zero vector has magnitude zero.",
    subtopic: "Vectors"
  },
  {
    question: "Which quantity is the vector sum of an object's velocity relative to a medium and the medium's velocity?",
    options: [
      "A. Speed",
      "B. Resultant velocity",
      "C. Mass",
      "D. Time"
    ],
    answer: "B",
    explanation: "The ground velocity is the resultant of the object's velocity in the medium plus the medium's velocity.",
    subtopic: "Resultant velocity"
  }
];

module.exports = questions;
