// physics — Position, Distance and Displacement
const questions = [
  {
    question: "Position of a body describes its?",
    options: [
      "A. Speed only",
      "B. Location relative to a reference point",
      "C. Mass",
      "D. Temperature"
    ],
    answer: "B",
    explanation: "Position is the location of a body with respect to a chosen reference point or origin.",
    subtopic: "Position"
  },
  {
    question: "A reference point from which position is measured is called the?",
    options: [
      "A. Origin",
      "B. Vector",
      "C. Scalar",
      "D. Axis only"
    ],
    answer: "A",
    explanation: "The origin is the fixed reference point used to specify position.",
    subtopic: "Position"
  },
  {
    question: "To specify the position of a point in a plane, you need?",
    options: [
      "A. One coordinate only",
      "B. Two coordinates (x and y)",
      "C. Mass only",
      "D. Time only"
    ],
    answer: "B",
    explanation: "In a plane, position is given by two coordinates (x, y) relative to the origin.",
    subtopic: "Position"
  },
  {
    question: "Position is best described as a?",
    options: [
      "A. Scalar quantity",
      "B. Vector quantity",
      "C. Speed",
      "D. Mass"
    ],
    answer: "B",
    explanation: "Position has magnitude and direction from a reference point, so it is a vector (displacement from origin).",
    subtopic: "Position"
  },
  {
    question: "Which instrument is most suitable for measuring a short distance in a laboratory?",
    options: [
      "A. Stopwatch",
      "B. Metre rule",
      "C. Thermometer",
      "D. Ammeter"
    ],
    answer: "B",
    explanation: "A metre rule is used to measure short lengths/distances accurately in the lab.",
    subtopic: "Measurement of distance"
  },
  {
    question: "The smallest division on a typical metre rule is?",
    options: [
      "A. 1 m",
      "B. 1 mm",
      "C. 1 cm",
      "D. 0.1 mm"
    ],
    answer: "B",
    explanation: "A standard metre rule is graduated in millimetres (1 mm smallest division).",
    subtopic: "Measurement of distance"
  },
  {
    question: "For measuring the diameter of a thin wire accurately, the best instrument is the?",
    options: [
      "A. Metre rule",
      "B. Vernier caliper",
      "C. Micrometer screw gauge",
      "D. Tape"
    ],
    answer: "C",
    explanation: "A micrometer screw gauge measures very small diameters to the nearest 0.01 mm.",
    subtopic: "Measurement of distance"
  },
  {
    question: "A vernier caliper can typically measure to an accuracy of?",
    options: [
      "A. 1 mm",
      "B. 0.1 mm",
      "C. 1 cm",
      "D. 0.01 m"
    ],
    answer: "B",
    explanation: "A vernier caliper commonly reads to 0.1 mm (or 0.01 cm) accuracy.",
    subtopic: "Measurement of distance"
  },
  {
    question: "Reading a metre rule should be done with the eye?",
    options: [
      "A. At an angle",
      "B. Directly above the mark (to avoid parallax)",
      "C. Far away",
      "D. Closed"
    ],
    answer: "B",
    explanation: "The eye must be vertically above the mark to avoid parallax error.",
    subtopic: "Measurement of distance"
  },
  {
    question: "Which error occurs when the eye is not placed correctly while reading a scale?",
    options: [
      "A. Zero error",
      "B. Parallax error",
      "C. Systematic error",
      "D. Random error"
    ],
    answer: "B",
    explanation: "Parallax error arises from an incorrect viewing angle when reading a scale.",
    subtopic: "Measurement of distance"
  },
  {
    question: "A distance of 2.5 km is equal to?",
    options: [
      "A. 25 m",
      "B. 250 m",
      "C. 2500 m",
      "D. 25000 m"
    ],
    answer: "C",
    explanation: "1 km = 1000 m, so 2.5 km = 2500 m.",
    subtopic: "Measurement of distance"
  },
  {
    question: "The standard instrument for measuring long distances such as a football field is a?",
    options: [
      "A. Micrometer",
      "B. Measuring tape",
      "C. Vernier caliper",
      "D. Thermometer"
    ],
    answer: "B",
    explanation: "A measuring tape is convenient for long distances like a field.",
    subtopic: "Measurement of distance"
  },
  {
    question: "Direction is usually specified relative to?",
    options: [
      "A. A reference direction such as North",
      "B. Mass",
      "C. Time",
      "D. Temperature"
    ],
    answer: "A",
    explanation: "Direction is described relative to a reference direction (e.g. North, or the positive x-axis).",
    subtopic: "Direction"
  },
  {
    question: "Bearing is measured clockwise from?",
    options: [
      "A. South",
      "B. North",
      "C. East",
      "D. West"
    ],
    answer: "B",
    explanation: "Bearing is the clockwise angle measured from the North direction.",
    subtopic: "Direction"
  },
  {
    question: "A bearing of 090° corresponds to which direction?",
    options: [
      "A. North",
      "B. East",
      "C. South",
      "D. West"
    ],
    answer: "B",
    explanation: "090° measured clockwise from North is due East.",
    subtopic: "Direction"
  },
  {
    question: "A bearing of 270° corresponds to which direction?",
    options: [
      "A. North",
      "B. East",
      "C. West",
      "D. South"
    ],
    answer: "C",
    explanation: "270° clockwise from North is due West.",
    subtopic: "Direction"
  },
  {
    question: "If a body moves 5 m East then 5 m West, its final direction from start is?",
    options: [
      "A. East",
      "B. West",
      "C. None (back at start)",
      "D. North"
    ],
    answer: "C",
    explanation: "Equal and opposite movements return the body to its starting point, so no net direction.",
    subtopic: "Direction"
  },
  {
    question: "A vector is usually represented by an arrow whose length shows?",
    options: [
      "A. Direction only",
      "B. Magnitude",
      "C. Time",
      "D. Mass"
    ],
    answer: "B",
    explanation: "The length of the arrow represents the magnitude of the vector quantity.",
    subtopic: "Direction"
  },
  {
    question: "Distance is a?",
    options: [
      "A. Vector quantity",
      "B. Scalar quantity",
      "C. Force",
      "D. Direction"
    ],
    answer: "B",
    explanation: "Distance has magnitude only (no direction), so it is a scalar.",
    subtopic: "Distance vs displacement"
  },
  {
    question: "Displacement is a?",
    options: [
      "A. Scalar quantity",
      "B. Vector quantity",
      "C. Speed",
      "D. Mass"
    ],
    answer: "B",
    explanation: "Displacement has both magnitude and direction, so it is a vector.",
    subtopic: "Distance vs displacement"
  },
  {
    question: "A student walks 40 m East and then 30 m North. The displacement from start is?",
    options: [
      "A. 70 m",
      "B. 50 m",
      "C. 10 m",
      "D. 35 m"
    ],
    answer: "B",
    explanation: "Displacement = √(40² + 30²) = √2500 = 50 m, in a direction between East and North.",
    subtopic: "Distance vs displacement"
  },
  {
    question: "A person runs round a circular track of circumference 400 m and returns to the start. The displacement is?",
    options: [
      "A. 400 m",
      "B. 200 m",
      "C. 0 m",
      "D. 800 m"
    ],
    answer: "C",
    explanation: "Since the start and end points coincide, displacement (shortest distance) is zero.",
    subtopic: "Distance vs displacement"
  },
  {
    question: "For the same circular run of 400 m, the distance covered is?",
    options: [
      "A. 0 m",
      "B. 400 m",
      "C. 200 m",
      "D. 100 m"
    ],
    answer: "B",
    explanation: "Distance is the total path length, which equals the track circumference, 400 m.",
    subtopic: "Distance vs displacement"
  },
  {
    question: "Which of the following is always true?",
    options: [
      "A. Distance is less than displacement",
      "B. Distance is greater than or equal to magnitude of displacement",
      "C. Distance equals displacement always",
      "D. Displacement is always negative"
    ],
    answer: "B",
    explanation: "Distance (total path) is always ≥ the magnitude of displacement (straight-line separation).",
    subtopic: "Distance vs displacement"
  },
  {
    question: "A body moves 10 m forward and 4 m backward. Its displacement is?",
    options: [
      "A. 14 m",
      "B. 6 m forward",
      "C. 6 m backward",
      "D. 10 m"
    ],
    answer: "B",
    explanation: "Net displacement = 10 − 4 = 6 m in the forward direction.",
    subtopic: "Distance vs displacement"
  },
  {
    question: "A body moves 10 m forward and 4 m backward. Its distance covered is?",
    options: [
      "A. 6 m",
      "B. 14 m",
      "C. 10 m",
      "D. 4 m"
    ],
    answer: "B",
    explanation: "Distance = total path length = 10 + 4 = 14 m.",
    subtopic: "Distance vs displacement"
  },
  {
    question: "The SI unit of both distance and displacement is the?",
    options: [
      "A. Metre",
      "B. Second",
      "C. Kilogram",
      "D. Newton"
    ],
    answer: "A",
    explanation: "Both distance and displacement are lengths, measured in metres.",
    subtopic: "Distance vs displacement"
  },
  {
    question: "If a car travels 3 km North then 4 km East, the magnitude of its displacement is?",
    options: [
      "A. 7 km",
      "B. 5 km",
      "C. 1 km",
      "D. 12 km"
    ],
    answer: "B",
    explanation: "Displacement = √(3² + 4²) = √25 = 5 km.",
    subtopic: "Distance vs displacement"
  },
  {
    question: "Displacement differs from distance because displacement depends on?",
    options: [
      "A. Path taken",
      "B. Initial and final positions only",
      "C. Speed only",
      "D. Mass"
    ],
    answer: "B",
    explanation: "Displacement depends only on the straight-line separation of start and end points, not the path.",
    subtopic: "Distance vs displacement"
  },
  {
    question: "A boy walks 100 m from point A to B and back to A. The distance is?",
    options: [
      "A. 0 m",
      "B. 100 m",
      "C. 200 m",
      "D. 50 m"
    ],
    answer: "C",
    explanation: "He walks 100 m out and 100 m back, total distance 200 m.",
    subtopic: "Distance vs displacement"
  },
  {
    question: "Using a position-time graph, the position is read from the?",
    options: [
      "A. Slope",
      "B. Vertical axis",
      "C. Area under curve",
      "D. Origin only"
    ],
    answer: "B",
    explanation: "Position is plotted on the vertical axis of a position-time graph.",
    subtopic: "Position"
  },
  {
    question: "A position coordinate of −5 m means the object is?",
    options: [
      "A. 5 m in the positive direction",
      "B. 5 m in the negative direction from origin",
      "C. At the origin",
      "D. 5 m above origin"
    ],
    answer: "B",
    explanation: "A negative coordinate indicates the object is 5 m on the negative side of the origin.",
    subtopic: "Position"
  },
  {
    question: "The accuracy of a micrometer screw gauge is typically?",
    options: [
      "A. 1 mm",
      "B. 0.1 mm",
      "C. 0.01 mm",
      "D. 1 cm"
    ],
    answer: "C",
    explanation: "A micrometer screw gauge reads to 0.01 mm accuracy.",
    subtopic: "Measurement of distance"
  },
  {
    question: "Zero error is associated with?",
    options: [
      "A. Stopwatch",
      "B. Vernier caliper / micrometer",
      "C. Thermometer",
      "D. Barometer"
    ],
    answer: "B",
    explanation: "Vernier calipers and micrometers can have zero error when closed jaws do not read zero.",
    subtopic: "Measurement of distance"
  },
  {
    question: "1 cm is equal to?",
    options: [
      "A. 10 mm",
      "B. 100 mm",
      "C. 0.1 mm",
      "D. 1000 mm"
    ],
    answer: "A",
    explanation: "1 centimetre = 10 millimetres.",
    subtopic: "Measurement of distance"
  },
  {
    question: "A bearing is always written as a?",
    options: [
      "A. Three-digit number",
      "B. Single letter",
      "C. Negative number",
      "D. Fraction"
    ],
    answer: "A",
    explanation: "Bearings are given as three-figure bearings, e.g. 045°, 270°.",
    subtopic: "Direction"
  },
  {
    question: "A bearing of 180° points to?",
    options: [
      "A. North",
      "B. South",
      "C. East",
      "D. West"
    ],
    answer: "B",
    explanation: "180° clockwise from North is due South.",
    subtopic: "Direction"
  },
  {
    question: "Which quantity tells 'how far' an object moved regardless of direction?",
    options: [
      "A. Displacement",
      "B. Distance",
      "C. Velocity",
      "D. Acceleration"
    ],
    answer: "B",
    explanation: "Distance measures total path length without regard to direction.",
    subtopic: "Distance vs displacement"
  },
  {
    question: "Which quantity tells the shortest path between start and end points?",
    options: [
      "A. Distance",
      "B. Displacement",
      "C. Speed",
      "D. Time"
    ],
    answer: "B",
    explanation: "Displacement is the shortest straight-line distance from start to end, with direction.",
    subtopic: "Distance vs displacement"
  },
  {
    question: "A man walks 8 m South then 6 m East. The magnitude of displacement is?",
    options: [
      "A. 14 m",
      "B. 10 m",
      "C. 2 m",
      "D. 48 m"
    ],
    answer: "B",
    explanation: "Displacement = √(8² + 6²) = √100 = 10 m.",
    subtopic: "Distance vs displacement"
  },
  {
    question: "In specifying a position, a frame of reference is needed because position is?",
    options: [
      "A. Absolute",
      "B. Relative to the observer",
      "C. Always zero",
      "D. A scalar"
    ],
    answer: "B",
    explanation: "Position is relative; it must be described with respect to a chosen frame of reference.",
    subtopic: "Position"
  },
  {
    question: "A measuring tape is preferred over a metre rule for a long distance because it?",
    options: [
      "A. Is more accurate",
      "B. Is flexible and longer",
      "C. Measures mass",
      "D. Measures time"
    ],
    answer: "B",
    explanation: "A tape is long and flexible, suitable for measuring extended distances.",
    subtopic: "Measurement of distance"
  },
  {
    question: "Which of the following best describes displacement?",
    options: [
      "A. A scalar with direction",
      "B. A vector from initial to final position",
      "C. Total path length",
      "D. Always positive"
    ],
    answer: "B",
    explanation: "Displacement is a vector drawn from the initial to the final position.",
    subtopic: "Distance vs displacement"
  },
  {
    question: "If an object's final position equals its initial position, its displacement is?",
    options: [
      "A. Maximum",
      "B. Zero",
      "C. Equal to distance",
      "D. Negative"
    ],
    answer: "B",
    explanation: "No separation between start and end means zero displacement.",
    subtopic: "Distance vs displacement"
  },
  {
    question: "Direction can be represented on a diagram by?",
    options: [
      "A. A dot",
      "B. An arrow",
      "C. A circle",
      "D. A number only"
    ],
    answer: "B",
    explanation: "An arrow shows direction (and its length shows magnitude) for vector quantities.",
    subtopic: "Direction"
  },
  {
    question: "A car moves 20 m East, then 20 m West, then 20 m East. Its displacement is?",
    options: [
      "A. 60 m East",
      "B. 20 m East",
      "C. 0 m",
      "D. 20 m West"
    ],
    answer: "B",
    explanation: "Net = 20 − 20 + 20 = 20 m East.",
    subtopic: "Distance vs displacement"
  },
  {
    question: "A car moves 20 m East, then 20 m West, then 20 m East. Its distance is?",
    options: [
      "A. 20 m",
      "B. 60 m",
      "C. 0 m",
      "D. 40 m"
    ],
    answer: "B",
    explanation: "Total path = 20 + 20 + 20 = 60 m.",
    subtopic: "Distance vs displacement"
  },
  {
    question: "The direction 'North-East' lies at a bearing of?",
    options: [
      "A. 045°",
      "B. 090°",
      "C. 135°",
      "D. 315°"
    ],
    answer: "A",
    explanation: "North-East is halfway between North and East, bearing 045°.",
    subtopic: "Direction"
  },
  {
    question: "The direction 'South-West' has a bearing of?",
    options: [
      "A. 225°",
      "B. 045°",
      "C. 135°",
      "D. 315°"
    ],
    answer: "A",
    explanation: "South-West is 225° clockwise from North.",
    subtopic: "Direction"
  },
  {
    question: "Position is often plotted on a graph with time on the?",
    options: [
      "A. Vertical axis",
      "B. Horizontal axis",
      "C. Diagonal",
      "D. Title"
    ],
    answer: "B",
    explanation: "In a position-time graph, time is the independent variable on the horizontal axis.",
    subtopic: "Position"
  },
  {
    question: "Which statement is correct about distance and displacement?",
    options: [
      "A. Both are vectors",
      "B. Both have the same unit",
      "C. Displacement can be longer than distance",
      "D. Distance is a vector"
    ],
    answer: "B",
    explanation: "Both are lengths, so both are measured in metres; only displacement is a vector.",
    subtopic: "Distance vs displacement"
  },
  {
    question: "To reduce parallax error when using a metre rule, one should?",
    options: [
      "A. Read from an angle",
      "B. Place eye vertically above the mark",
      "C. Use a longer rule",
      "D. Guess the reading"
    ],
    answer: "B",
    explanation: "Viewing the scale perpendicular to its surface avoids parallax error.",
    subtopic: "Measurement of distance"
  },
  {
    question: "A student records a displacement of −10 m. This means the object is?",
    options: [
      "A. 10 m in the positive direction",
      "B. 10 m in the negative direction",
      "C. At rest",
      "D. Moving upwards"
    ],
    answer: "B",
    explanation: "The negative sign shows the displacement is 10 m in the chosen negative direction.",
    subtopic: "Direction"
  },
  {
    question: "The shortest distance between two points on a straight road is an example of?",
    options: [
      "A. Distance",
      "B. Displacement magnitude",
      "C. Speed",
      "D. Time"
    ],
    answer: "B",
    explanation: "The straight-line separation is the magnitude of displacement.",
    subtopic: "Distance vs displacement"
  },
  {
    question: "Which instrument would you use to measure the thickness of a sheet of paper most precisely?",
    options: [
      "A. Metre rule",
      "B. Micrometer screw gauge",
      "C. Measuring tape",
      "D. Stopwatch"
    ],
    answer: "B",
    explanation: "A micrometer measures small thicknesses to 0.01 mm, the most precise option.",
    subtopic: "Measurement of distance"
  }
];

module.exports = questions;
