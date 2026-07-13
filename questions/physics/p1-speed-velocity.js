// physics — Speed and Velocity
const questions = [
  {
    question: "Speed is defined as",
    options: [
      "A. displacement per unit time",
      "B. distance travelled per unit time",
      "C. time per unit distance",
      "D. acceleration per unit time"
    ],
    answer: "B",
    explanation: "Speed = total distance / total time. It tells how fast a body moves regardless of direction.",
    subtopic: "Speed"
  },
  {
    question: "The SI unit of speed is",
    options: [
      "A. km/h",
      "B. m/s",
      "C. s/m",
      "D. N"
    ],
    answer: "B",
    explanation: "Speed is distance/time, so in SI base units it is metres per second (m/s).",
    subtopic: "Speed"
  },
  {
    question: "A car travels 100 m in 20 s at constant speed. Its speed is",
    options: [
      "A. 5 m/s",
      "B. 2000 m/s",
      "C. 0.2 m/s",
      "D. 50 m/s"
    ],
    answer: "A",
    explanation: "Speed = distance/time = 100 / 20 = 5 m/s.",
    subtopic: "Speed"
  },
  {
    question: "Average speed is calculated as",
    options: [
      "A. total distance / total time",
      "B. total time / total distance",
      "C. displacement / time",
      "D. distance × time"
    ],
    answer: "A",
    explanation: "Average speed = total distance covered divided by total time taken.",
    subtopic: "Speed"
  },
  {
    question: "Speed is a",
    options: [
      "A. vector quantity",
      "B. scalar quantity",
      "C. dimensionless quantity",
      "D. force"
    ],
    answer: "B",
    explanation: "Speed has magnitude only (no direction), so it is a scalar.",
    subtopic: "Speed"
  },
  {
    question: "Convert 72 km/h to m/s.",
    options: [
      "A. 20 m/s",
      "B. 2 m/s",
      "C. 720 m/s",
      "D. 36 m/s"
    ],
    answer: "A",
    explanation: "72 km/h = 72 × 1000/3600 = 20 m/s.",
    subtopic: "Speed"
  },
  {
    question: "Convert 36 km/h to m/s.",
    options: [
      "A. 3.6 m/s",
      "B. 10 m/s",
      "C. 360 m/s",
      "D. 1 m/s"
    ],
    answer: "B",
    explanation: "36 km/h = 36 × 1000/3600 = 10 m/s.",
    subtopic: "Speed"
  },
  {
    question: "A man runs 400 m in 50 s. His average speed is",
    options: [
      "A. 8 m/s",
      "B. 20 000 m/s",
      "C. 0.125 m/s",
      "D. 4 m/s"
    ],
    answer: "A",
    explanation: "Speed = 400 / 50 = 8 m/s.",
    subtopic: "Speed"
  },
  {
    question: "Which of the following is a unit of speed?",
    options: [
      "A. kg/s",
      "B. km/h",
      "C. N/m",
      "D. J"
    ],
    answer: "B",
    explanation: "km/h (kilometres per hour) is a common non-SI unit of speed.",
    subtopic: "Speed"
  },
  {
    question: "The speed of a body at a particular instant is its",
    options: [
      "A. average speed",
      "B. instantaneous speed",
      "C. velocity",
      "D. acceleration"
    ],
    answer: "B",
    explanation: "Instantaneous speed is the speed at a single instant (what a speedometer reads).",
    subtopic: "Speed"
  },
  {
    question: "A car covers 60 km in 1.5 h. Its average speed is",
    options: [
      "A. 40 km/h",
      "B. 90 km/h",
      "C. 4 km/h",
      "D. 0.025 km/h"
    ],
    answer: "A",
    explanation: "Average speed = 60 / 1.5 = 40 km/h.",
    subtopic: "Speed"
  },
  {
    question: "The speedometer of a moving car measures its",
    options: [
      "A. average speed",
      "B. instantaneous speed",
      "C. velocity",
      "D. acceleration"
    ],
    answer: "B",
    explanation: "A speedometer shows the instantaneous speed at that moment.",
    subtopic: "Speed"
  },
  {
    question: "Velocity is defined as",
    options: [
      "A. distance per unit time",
      "B. displacement per unit time",
      "C. speed without direction",
      "D. time per unit displacement"
    ],
    answer: "B",
    explanation: "Velocity = displacement/time and includes direction, so it is a vector.",
    subtopic: "Velocity"
  },
  {
    question: "The SI unit of velocity is",
    options: [
      "A. m/s",
      "B. m/s²",
      "C. km/h only",
      "D. N"
    ],
    answer: "A",
    explanation: "Like speed, velocity is measured in m/s (with a stated direction).",
    subtopic: "Velocity"
  },
  {
    question: "A car moves in a circle at constant speed. Its velocity is",
    options: [
      "A. constant",
      "B. changing because its direction changes",
      "C. zero",
      "D. equal to its speed"
    ],
    answer: "B",
    explanation: "Velocity depends on direction; in circular motion the direction changes continuously, so velocity changes.",
    subtopic: "Velocity"
  },
  {
    question: "Two cars have the same speed but move in opposite directions. Their velocities are",
    options: [
      "A. the same",
      "B. different",
      "C. both zero",
      "D. equal in magnitude only but same direction"
    ],
    answer: "B",
    explanation: "Velocity includes direction, so opposite directions give different velocities despite equal speed.",
    subtopic: "Velocity"
  },
  {
    question: "A train moves 200 km east in 4 h. Its velocity is",
    options: [
      "A. 50 km/h",
      "B. 50 km/h east",
      "C. 800 km/h",
      "D. 50 km/h west"
    ],
    answer: "B",
    explanation: "Velocity = displacement/time = 200 km / 4 h = 50 km/h east.",
    subtopic: "Velocity"
  },
  {
    question: "Velocity differs from speed in that velocity has",
    options: [
      "A. no magnitude",
      "B. a direction",
      "C. no unit",
      "D. greater magnitude"
    ],
    answer: "B",
    explanation: "Speed is scalar (magnitude only); velocity is vector (magnitude and direction).",
    subtopic: "Velocity"
  },
  {
    question: "If a body returns to its starting point, its average velocity is",
    options: [
      "A. equal to its average speed",
      "B. zero (displacement is zero)",
      "C. maximum",
      "D. equal to its speed"
    ],
    answer: "B",
    explanation: "Displacement is zero when it returns to start, so average velocity = 0 / time = 0.",
    subtopic: "Velocity"
  },
  {
    question: "The magnitude of velocity is the",
    options: [
      "A. acceleration",
      "B. speed",
      "C. displacement",
      "D. force"
    ],
    answer: "B",
    explanation: "Speed is the magnitude (size) of the velocity vector.",
    subtopic: "Velocity"
  },
  {
    question: "Negative velocity indicates the body is moving in the",
    options: [
      "A. positive direction",
      "B. opposite (negative) direction to the chosen reference",
      "C. upward direction",
      "D. zero direction"
    ],
    answer: "B",
    explanation: "The sign of velocity shows direction relative to the chosen positive axis; negative means opposite.",
    subtopic: "Velocity"
  },
  {
    question: "A body moves 30 m north in 6 s. Its velocity is",
    options: [
      "A. 5 m/s",
      "B. 5 m/s north",
      "C. 180 m/s",
      "D. 5 m/s south"
    ],
    answer: "B",
    explanation: "Velocity = displacement/time = 30 m / 6 s = 5 m/s north.",
    subtopic: "Velocity"
  },
  {
    question: "A body moving with uniform velocity has",
    options: [
      "A. changing speed",
      "B. constant speed in a constant direction",
      "C. increasing acceleration",
      "D. zero displacement"
    ],
    answer: "B",
    explanation: "Uniform velocity means constant speed and constant direction, so acceleration is zero.",
    subtopic: "Uniform/non-uniform"
  },
  {
    question: "A body has non-uniform velocity when its",
    options: [
      "A. speed and direction are both constant",
      "B. speed or direction changes",
      "C. velocity is zero",
      "D. acceleration is zero"
    ],
    answer: "B",
    explanation: "If either speed or direction changes, the velocity is non-uniform (the body accelerates).",
    subtopic: "Uniform/non-uniform"
  },
  {
    question: "A car accelerating from rest has",
    options: [
      "A. uniform velocity",
      "B. non-uniform velocity",
      "C. constant velocity",
      "D. zero speed always"
    ],
    answer: "B",
    explanation: "Its speed is increasing, so velocity is not constant (non-uniform).",
    subtopic: "Uniform/non-uniform"
  },
  {
    question: "Uniform motion in a straight line means the body has",
    options: [
      "A. constant speed and direction",
      "B. increasing speed",
      "C. changing direction",
      "D. zero velocity"
    ],
    answer: "A",
    explanation: "Uniform straight-line motion has constant speed and unchanged direction (zero acceleration).",
    subtopic: "Uniform/non-uniform"
  },
  {
    question: "A bus in city traffic with frequent stopping shows",
    options: [
      "A. uniform speed",
      "B. non-uniform (variable) speed",
      "C. constant velocity",
      "D. zero acceleration"
    ],
    answer: "B",
    explanation: "Stopping and starting means the speed varies, so it is non-uniform.",
    subtopic: "Uniform/non-uniform"
  },
  {
    question: "For a body with uniform velocity, the acceleration is",
    options: [
      "A. maximum",
      "B. zero",
      "C. increasing",
      "D. equal to its speed"
    ],
    answer: "B",
    explanation: "No change in velocity means acceleration is zero.",
    subtopic: "Uniform/non-uniform"
  },
  {
    question: "A vehicle covers 30 m in 3 s, then 50 m in 5 s. Its average speed for the whole journey is",
    options: [
      "A. 10 m/s",
      "B. 16 m/s",
      "C. 8 m/s",
      "D. 80 m/s"
    ],
    answer: "A",
    explanation: "Total distance = 80 m, total time = 8 s, so average speed = 80 / 8 = 10 m/s.",
    subtopic: "Uniform/non-uniform"
  },
  {
    question: "A body moving with constant speed in a circle does NOT have",
    options: [
      "A. motion",
      "B. uniform velocity",
      "C. a path",
      "D. kinetic energy"
    ],
    answer: "B",
    explanation: "Because its direction changes, its velocity is not uniform even though its speed is constant.",
    subtopic: "Uniform/non-uniform"
  },
  {
    question: "If the speed of a body increases with time, its motion is",
    options: [
      "A. uniform",
      "B. accelerated (non-uniform)",
      "C. at rest",
      "D. oscillatory"
    ],
    answer: "B",
    explanation: "Increasing speed means the velocity changes, i.e. the motion is accelerated.",
    subtopic: "Uniform/non-uniform"
  },
  {
    question: "On a distance-time graph, the slope of the line represents the",
    options: [
      "A. acceleration",
      "B. speed",
      "C. force",
      "D. mass"
    ],
    answer: "B",
    explanation: "Gradient = change in distance / change in time = speed.",
    subtopic: "Distance-time graph"
  },
  {
    question: "A horizontal line on a distance-time graph means the body is",
    options: [
      "A. moving fast",
      "B. at rest",
      "C. accelerating",
      "D. moving backward"
    ],
    answer: "B",
    explanation: "Zero gradient means zero speed, so the body is stationary.",
    subtopic: "Distance-time graph"
  },
  {
    question: "A steeper slope on a distance-time graph indicates",
    options: [
      "A. lower speed",
      "B. higher (greater) speed",
      "C. zero speed",
      "D. negative speed"
    ],
    answer: "B",
    explanation: "A larger gradient means a greater distance covered per second, i.e. higher speed.",
    subtopic: "Distance-time graph"
  },
  {
    question: "A straight line through the origin on a distance-time graph shows",
    options: [
      "A. uniform speed",
      "B. increasing speed",
      "C. the body at rest",
      "D. non-uniform speed"
    ],
    answer: "A",
    explanation: "Constant gradient (a straight line) means constant speed.",
    subtopic: "Distance-time graph"
  },
  {
    question: "A curved distance-time graph indicates",
    options: [
      "A. uniform speed",
      "B. non-uniform (changing) speed",
      "C. rest",
      "D. constant velocity always"
    ],
    answer: "B",
    explanation: "A changing gradient means the speed is changing (non-uniform).",
    subtopic: "Distance-time graph"
  },
  {
    question: "The gradient of a distance-time graph gives the",
    options: [
      "A. distance",
      "B. speed",
      "C. time",
      "D. acceleration"
    ],
    answer: "B",
    explanation: "Gradient = rise/run = distance/time = speed.",
    subtopic: "Distance-time graph"
  },
  {
    question: "If a distance-time graph is a horizontal straight line, the speed is",
    options: [
      "A. maximum",
      "B. zero",
      "C. increasing",
      "D. constant and non-zero"
    ],
    answer: "B",
    explanation: "No change in distance means the body is not moving, so speed = 0.",
    subtopic: "Distance-time graph"
  },
  {
    question: "For an accelerating object, the distance-time graph is",
    options: [
      "A. a straight line",
      "B. a curve",
      "C. horizontal",
      "D. a vertical line"
    ],
    answer: "B",
    explanation: "Acceleration changes the gradient over time, producing a curved graph.",
    subtopic: "Distance-time graph"
  },
  {
    question: "The speed of a body is obtained from a distance-time graph by finding the",
    options: [
      "A. area under the graph",
      "B. gradient (slope) of the graph",
      "C. intercept",
      "D. length of the axis"
    ],
    answer: "B",
    explanation: "Speed = gradient = Δdistance / Δtime for the graph.",
    subtopic: "Distance-time graph"
  },
  {
    question: "A line sloping downward on a distance-time graph means the body is",
    options: [
      "A. at rest",
      "B. moving back toward the starting point",
      "C. speeding up",
      "D. invisible"
    ],
    answer: "B",
    explanation: "Distance decreasing with time means the body is returning toward its starting position.",
    subtopic: "Distance-time graph"
  },
  {
    question: "Two distance-time graphs: graph X is steeper than graph Y. This means X represents a",
    options: [
      "A. slower body",
      "B. faster body",
      "C. stationary body",
      "D. heavier body"
    ],
    answer: "B",
    explanation: "Steeper gradient = larger speed, so X is the faster-moving body.",
    subtopic: "Distance-time graph"
  },
  {
    question: "The quantity plotted on the vertical axis of a distance-time graph is the",
    options: [
      "A. time",
      "B. distance",
      "C. speed",
      "D. acceleration"
    ],
    answer: "B",
    explanation: "By convention distance is on the vertical (y) axis and time on the horizontal (x) axis.",
    subtopic: "Distance-time graph"
  },
  {
    question: "A body that covers equal distances in equal times has",
    options: [
      "A. non-uniform speed",
      "B. uniform speed",
      "C. zero speed",
      "D. increasing speed"
    ],
    answer: "B",
    explanation: "Equal distances in equal times is the definition of uniform (constant) speed.",
    subtopic: "Uniform/non-uniform"
  },
  {
    question: "Average velocity is defined as",
    options: [
      "A. total distance / total time",
      "B. total displacement / total time",
      "C. speed × time",
      "D. distance × time"
    ],
    answer: "B",
    explanation: "Average velocity = total displacement (straight-line change in position) divided by total time.",
    subtopic: "Velocity"
  },
  {
    question: "A car travels 100 m east then 100 m west, taking 40 s total. Its average velocity is",
    options: [
      "A. 5 m/s",
      "B. 0 m/s",
      "C. 10 m/s",
      "D. 2.5 m/s"
    ],
    answer: "B",
    explanation: "Displacement = 0 (returns to start), so average velocity = 0 / 40 = 0 m/s.",
    subtopic: "Velocity"
  },
  {
    question: "Which statement is always true for a body in uniform motion?",
    options: [
      "A. Its velocity changes",
      "B. Its acceleration is zero",
      "C. It speeds up",
      "D. Its direction changes"
    ],
    answer: "B",
    explanation: "Uniform motion means no change in velocity, hence zero acceleration.",
    subtopic: "Uniform/non-uniform"
  },
  {
    question: "A cyclist travels 15 km in 0.5 h. Her average speed is",
    options: [
      "A. 30 km/h",
      "B. 7.5 km/h",
      "C. 15 km/h",
      "D. 60 km/h"
    ],
    answer: "A",
    explanation: "Average speed = 15 km / 0.5 h = 30 km/h.",
    subtopic: "Speed"
  },
  {
    question: "On a distance-time graph, a straight line that does NOT pass through the origin but is not horizontal shows",
    options: [
      "A. the body started some distance away and moves at constant speed",
      "B. the body is at rest",
      "C. varying speed",
      "D. negative time"
    ],
    answer: "A",
    explanation: "A non-horizontal straight line still has constant gradient (constant speed); the offset means it began away from zero distance.",
    subtopic: "Distance-time graph"
  },
  {
    question: "A body whose velocity changes by equal amounts in equal times has",
    options: [
      "A. uniform velocity",
      "B. uniform acceleration (non-uniform velocity)",
      "C. zero acceleration",
      "D. constant rest"
    ],
    answer: "B",
    explanation: "Equal changes in velocity per equal time is uniform acceleration; velocity itself is non-uniform.",
    subtopic: "Uniform/non-uniform"
  },
  {
    question: "The speed of a body is 20 m/s north. The magnitude of its velocity is",
    options: [
      "A. 20 m/s",
      "B. 0 m/s",
      "C. 20 m/s²",
      "D. 40 m/s"
    ],
    answer: "A",
    explanation: "Velocity magnitude equals speed, so it is 20 m/s (direction is north).",
    subtopic: "Velocity"
  },
  {
    question: "A distance-time graph with increasing slope (getting steeper) shows a body that is",
    options: [
      "A. slowing down",
      "B. speeding up",
      "C. at rest",
      "D. moving at constant speed"
    ],
    answer: "B",
    explanation: "An increasing gradient means speed is increasing, i.e. the body is accelerating.",
    subtopic: "Distance-time graph"
  },
  {
    question: "Which of the following best describes a scalar quantity among these?",
    options: [
      "A. Velocity",
      "B. Speed",
      "C. Displacement",
      "D. Acceleration"
    ],
    answer: "B",
    explanation: "Speed is scalar (magnitude only); velocity, displacement and acceleration are vectors.",
    subtopic: "Speed"
  }
];

module.exports = questions;
