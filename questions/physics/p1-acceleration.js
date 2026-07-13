// physics — Rectilinear Acceleration
const questions = [
  {
    question: "Acceleration is defined as the rate of change of",
    options: [
      "A. displacement",
      "B. velocity",
      "C. mass",
      "D. force"
    ],
    answer: "B",
    explanation: "Acceleration = change in velocity / time taken, a = Δv/Δt.",
    subtopic: "Acceleration/deceleration"
  },
  {
    question: "The SI unit of acceleration is",
    options: [
      "A. m/s",
      "B. m/s²",
      "C. N",
      "D. km/h"
    ],
    answer: "B",
    explanation: "Since acceleration is change in velocity per second, its unit is metres per second squared (m/s²).",
    subtopic: "Acceleration/deceleration"
  },
  {
    question: "A car increases its speed from 10 m/s to 30 m/s in 5 s. Its acceleration is",
    options: [
      "A. 4 m/s²",
      "B. 8 m/s²",
      "C. 2 m/s²",
      "D. 20 m/s²"
    ],
    answer: "A",
    explanation: "a = (30 − 10) / 5 = 20 / 5 = 4 m/s².",
    subtopic: "Acceleration/deceleration"
  },
  {
    question: "Deceleration is another name for",
    options: [
      "A. positive acceleration",
      "B. negative acceleration (retardation)",
      "C. zero acceleration",
      "D. velocity"
    ],
    answer: "B",
    explanation: "Deceleration (retardation) is acceleration in the direction opposite to motion, giving a negative value.",
    subtopic: "Acceleration/deceleration"
  },
  {
    question: "A car slows from 20 m/s to 10 m/s in 2 s. The magnitude of its deceleration is",
    options: [
      "A. 5 m/s²",
      "B. 15 m/s²",
      "C. 2 m/s²",
      "D. 10 m/s²"
    ],
    answer: "A",
    explanation: "a = (10 − 20) / 2 = −5 m/s², so deceleration magnitude is 5 m/s².",
    subtopic: "Acceleration/deceleration"
  },
  {
    question: "A body moving with constant velocity has acceleration of",
    options: [
      "A. maximum",
      "B. zero",
      "C. g",
      "D. increasing"
    ],
    answer: "B",
    explanation: "No change in velocity means the acceleration is zero.",
    subtopic: "Acceleration/deceleration"
  },
  {
    question: "Acceleration is a",
    options: [
      "A. scalar quantity",
      "B. vector quantity",
      "C. dimensionless quantity",
      "D. constant"
    ],
    answer: "B",
    explanation: "Acceleration has both magnitude and direction (e.g. opposite to motion during braking), so it is a vector.",
    subtopic: "Acceleration/deceleration"
  },
  {
    question: "A body initially at rest that begins to move is said to be",
    options: [
      "A. decelerating",
      "B. accelerating",
      "C. at constant velocity",
      "D. weightless"
    ],
    answer: "B",
    explanation: "Starting from rest means its velocity is increasing, so it accelerates.",
    subtopic: "Acceleration/deceleration"
  },
  {
    question: "Uniform acceleration means the velocity changes by",
    options: [
      "A. unequal amounts in equal times",
      "B. equal amounts in equal times",
      "C. zero amounts",
      "D. random amounts"
    ],
    answer: "B",
    explanation: "Uniform acceleration is constant, so equal velocity changes occur in equal time intervals.",
    subtopic: "Acceleration/deceleration"
  },
  {
    question: "If the velocity of a body decreases with time, its acceleration is",
    options: [
      "A. positive",
      "B. negative (retardation)",
      "C. zero",
      "D. infinite"
    ],
    answer: "B",
    explanation: "Decreasing velocity means the acceleration is opposite to motion, i.e. negative.",
    subtopic: "Acceleration/deceleration"
  },
  {
    question: "Uniform acceleration of a body means its acceleration is",
    options: [
      "A. changing",
      "B. constant",
      "C. zero always",
      "D. increasing"
    ],
    answer: "B",
    explanation: "Uniform acceleration is constant in both magnitude and direction.",
    subtopic: "Uniform/non-uniform"
  },
  {
    question: "A freely falling body near the Earth has approximately",
    options: [
      "A. uniform velocity",
      "B. uniform (constant) acceleration",
      "C. zero acceleration",
      "D. increasing mass"
    ],
    answer: "B",
    explanation: "Gravity gives a falling body a constant acceleration g (about 10 m/s² using the clean value).",
    subtopic: "Uniform/non-uniform"
  },
  {
    question: "On a velocity-time graph, uniform acceleration is shown by a",
    options: [
      "A. horizontal straight line",
      "B. straight line with constant (non-zero) slope",
      "C. curve",
      "D. vertical line"
    ],
    answer: "B",
    explanation: "Constant slope (gradient) means constant acceleration, so the line is straight and slanted.",
    subtopic: "Uniform/non-uniform"
  },
  {
    question: "Non-uniform acceleration is represented on a velocity-time graph by a",
    options: [
      "A. straight line",
      "B. curve",
      "C. horizontal line",
      "D. point"
    ],
    answer: "B",
    explanation: "A changing gradient (curve) means the acceleration is changing.",
    subtopic: "Uniform/non-uniform"
  },
  {
    question: "With constant acceleration, a body's velocity increases by",
    options: [
      "A. random amounts each second",
      "B. equal amounts each second",
      "C. nothing",
      "D. decreasing amounts"
    ],
    answer: "B",
    explanation: "Constant acceleration adds the same Δv = aΔt in every equal time interval.",
    subtopic: "Uniform/non-uniform"
  },
  {
    question: "A body with uniform acceleration covers, in successive equal time intervals, distances that",
    options: [
      "A. are equal",
      "B. increase",
      "C. decrease to zero",
      "D. remain constant then stop"
    ],
    answer: "B",
    explanation: "Speeding up means more distance is covered in each later equal interval, so the distances increase.",
    subtopic: "Uniform/non-uniform"
  },
  {
    question: "The slope (gradient) of a velocity-time graph represents",
    options: [
      "A. distance",
      "B. acceleration",
      "C. speed only",
      "D. force"
    ],
    answer: "B",
    explanation: "Gradient = change in velocity / change in time = acceleration.",
    subtopic: "Velocity-time graph"
  },
  {
    question: "The area under a velocity-time graph gives the",
    options: [
      "A. acceleration",
      "B. distance (displacement)",
      "C. speed",
      "D. force"
    ],
    answer: "B",
    explanation: "Area = ∑(velocity × time) = distance travelled (displacement for straight-line motion).",
    subtopic: "Velocity-time graph"
  },
  {
    question: "A horizontal line on a velocity-time graph indicates",
    options: [
      "A. uniform acceleration",
      "B. constant velocity (zero acceleration)",
      "C. constant deceleration",
      "D. the body at rest only if at zero"
    ],
    answer: "B",
    explanation: "Zero slope means zero acceleration, so velocity is constant (it may be any constant value).",
    subtopic: "Velocity-time graph"
  },
  {
    question: "A straight line sloping upward on a velocity-time graph shows",
    options: [
      "A. uniform deceleration",
      "B. uniform acceleration",
      "C. constant velocity",
      "D. rest"
    ],
    answer: "B",
    explanation: "Positive, constant slope means velocity rises steadily: uniform acceleration.",
    subtopic: "Velocity-time graph"
  },
  {
    question: "A straight line sloping downward on a velocity-time graph shows",
    options: [
      "A. uniform acceleration",
      "B. uniform deceleration",
      "C. constant velocity",
      "D. increasing speed"
    ],
    answer: "B",
    explanation: "Negative, constant slope means velocity falls steadily: uniform deceleration.",
    subtopic: "Velocity-time graph"
  },
  {
    question: "For a velocity-time graph that is a triangle (rising from 0 to v then back to 0), the distance is",
    options: [
      "A. v × t",
      "B. ½ × base × height",
      "C. v / t",
      "D. base × height"
    ],
    answer: "B",
    explanation: "Distance = area = ½ × base (total time) × height (peak velocity).",
    subtopic: "Velocity-time graph"
  },
  {
    question: "A body moves at a constant 5 m/s for 4 s. The distance from its velocity-time graph is",
    options: [
      "A. 9 m",
      "B. 20 m",
      "C. 1.25 m",
      "D. 0 m"
    ],
    answer: "B",
    explanation: "Distance = area = 5 × 4 = 20 m (rectangle).",
    subtopic: "Velocity-time graph"
  },
  {
    question: "A trapezium under a velocity-time graph (accelerate then constant) gives the",
    options: [
      "A. acceleration",
      "B. total distance travelled",
      "C. final speed only",
      "D. mass"
    ],
    answer: "B",
    explanation: "The full area under the graph equals the total distance covered.",
    subtopic: "Velocity-time graph"
  },
  {
    question: "A velocity-time graph that is horizontal at 10 m/s means the acceleration is",
    options: [
      "A. 10 m/s²",
      "B. 0 m/s²",
      "C. 10 m/s",
      "D. 5 m/s²"
    ],
    answer: "B",
    explanation: "Constant velocity gives zero slope, so acceleration is 0.",
    subtopic: "Velocity-time graph"
  },
  {
    question: "The first equation of motion is",
    options: [
      "A. s = ut + ½at²",
      "B. v = u + at",
      "C. v² = u² + 2as",
      "D. s = vt"
    ],
    answer: "B",
    explanation: "v = u + at relates final velocity to initial velocity, acceleration and time.",
    subtopic: "Equations of motion"
  },
  {
    question: "The second equation of motion for distance is",
    options: [
      "A. v = u + at",
      "B. s = ut + ½at²",
      "C. v² = u² + 2as",
      "D. a = v/t"
    ],
    answer: "B",
    explanation: "s = ut + ½at² gives displacement with constant acceleration.",
    subtopic: "Equations of motion"
  },
  {
    question: "The third equation of motion, without time, is",
    options: [
      "A. v = u + at",
      "B. s = ut + ½at²",
      "C. v² = u² + 2as",
      "D. s = (u+v)/2"
    ],
    answer: "C",
    explanation: "v² = u² + 2as links velocities, acceleration and distance without using time.",
    subtopic: "Equations of motion"
  },
  {
    question: "A car starts from rest and accelerates at 2 m/s² for 5 s. Its final velocity is",
    options: [
      "A. 10 m/s",
      "B. 2.5 m/s",
      "C. 7 m/s",
      "D. 20 m/s"
    ],
    answer: "A",
    explanation: "v = u + at = 0 + 2 × 5 = 10 m/s.",
    subtopic: "Equations of motion"
  },
  {
    question: "A body starts from rest and accelerates at 3 m/s² for 4 s. The distance covered is",
    options: [
      "A. 12 m",
      "B. 24 m",
      "C. 48 m",
      "D. 6 m"
    ],
    answer: "B",
    explanation: "s = ut + ½at² = 0 + ½ × 3 × 16 = 24 m.",
    subtopic: "Equations of motion"
  },
  {
    question: "A body has initial velocity 10 m/s, acceleration 2 m/s², for 3 s. Its final velocity is",
    options: [
      "A. 12 m/s",
      "B. 16 m/s",
      "C. 6 m/s",
      "D. 30 m/s"
    ],
    answer: "B",
    explanation: "v = u + at = 10 + 2 × 3 = 16 m/s.",
    subtopic: "Equations of motion"
  },
  {
    question: "A body has u = 20 m/s, a = −5 m/s², t = 2 s. Its final velocity is",
    options: [
      "A. 30 m/s",
      "B. 10 m/s",
      "C. 15 m/s",
      "D. 40 m/s"
    ],
    answer: "B",
    explanation: "v = 20 + (−5)(2) = 20 − 10 = 10 m/s.",
    subtopic: "Equations of motion"
  },
  {
    question: "A body starts from rest, accelerates at 10 m/s² and covers 20 m. Its final velocity is",
    options: [
      "A. 10 m/s",
      "B. 20 m/s",
      "C. 400 m/s",
      "D. 2 m/s"
    ],
    answer: "B",
    explanation: "v² = u² + 2as = 0 + 2 × 10 × 20 = 400, so v = 20 m/s.",
    subtopic: "Equations of motion"
  },
  {
    question: "A car at 20 m/s decelerates at 4 m/s² until it stops. The stopping distance is",
    options: [
      "A. 5 m",
      "B. 50 m",
      "C. 100 m",
      "D. 25 m"
    ],
    answer: "B",
    explanation: "0 = u² + 2as → 0 = 400 + 2(−4)s → s = 400/8 = 50 m.",
    subtopic: "Equations of motion"
  },
  {
    question: "The average velocity during uniform acceleration is",
    options: [
      "A. (u − v)/2",
      "B. (u + v)/2",
      "C. u + v",
      "D. uv"
    ],
    answer: "B",
    explanation: "For constant acceleration, average velocity = (initial + final velocity) / 2, so distance = (u+v)/2 × t.",
    subtopic: "Equations of motion"
  },
  {
    question: "A car at 30 m/s decelerates at 6 m/s² to rest. The time taken is",
    options: [
      "A. 5 s",
      "B. 180 s",
      "C. 0.2 s",
      "D. 36 s"
    ],
    answer: "A",
    explanation: "0 = 30 + (−6)t → t = 30/6 = 5 s.",
    subtopic: "Equations of motion"
  },
  {
    question: "A body starts from rest and accelerates at 10 m/s². The distance in the first second is",
    options: [
      "A. 5 m",
      "B. 10 m",
      "C. 20 m",
      "D. 1 m"
    ],
    answer: "A",
    explanation: "s = ½at² = ½ × 10 × 1² = 5 m.",
    subtopic: "Equations of motion"
  },
  {
    question: "A body has u = 10 m/s, a = 2 m/s² and covers 75 m. Its final velocity is",
    options: [
      "A. 10 m/s",
      "B. 20 m/s",
      "C. 30 m/s",
      "D. 400 m/s"
    ],
    answer: "B",
    explanation: "v² = 10² + 2 × 2 × 75 = 100 + 300 = 400, so v = 20 m/s.",
    subtopic: "Equations of motion"
  },
  {
    question: "A body starts from rest and accelerates at 5 m/s², covering 90 m. The time taken is",
    options: [
      "A. 6 s",
      "B. 36 s",
      "C. 18 s",
      "D. 3 s"
    ],
    answer: "A",
    explanation: "s = ½at² → 90 = ½ × 5 × t² = 2.5 t² → t² = 36 → t = 6 s.",
    subtopic: "Equations of motion"
  },
  {
    question: "Near the Earth's surface, the acceleration due to gravity is approximately",
    options: [
      "A. 10 m/s²",
      "B. 100 m/s²",
      "C. 1 m/s²",
      "D. 0 m/s²"
    ],
    answer: "A",
    explanation: "We use g ≈ 10 m/s² for clean calculations (the more precise value is about 9.8 m/s²).",
    subtopic: "Motion under gravity"
  },
  {
    question: "A body dropped from rest falls under gravity (g = 10 m/s²). After 3 s its speed is",
    options: [
      "A. 3 m/s",
      "B. 30 m/s",
      "C. 10 m/s",
      "D. 13 m/s"
    ],
    answer: "B",
    explanation: "v = gt = 10 × 3 = 30 m/s (downward).",
    subtopic: "Motion under gravity"
  },
  {
    question: "A body dropped from rest falls for 2 s (g = 10 m/s²). The height fallen is",
    options: [
      "A. 10 m",
      "B. 20 m",
      "C. 40 m",
      "D. 5 m"
    ],
    answer: "B",
    explanation: "s = ½gt² = ½ × 10 × 2² = 20 m.",
    subtopic: "Motion under gravity"
  },
  {
    question: "A ball is thrown vertically upward at 20 m/s (g = 10 m/s²). The time to reach its highest point is",
    options: [
      "A. 1 s",
      "B. 2 s",
      "C. 20 s",
      "D. 0.5 s"
    ],
    answer: "B",
    explanation: "At the top v = 0, so t = u/g = 20/10 = 2 s.",
    subtopic: "Motion under gravity"
  },
  {
    question: "A ball thrown up at 20 m/s (g = 10 m/s²) reaches a maximum height of",
    options: [
      "A. 10 m",
      "B. 20 m",
      "C. 40 m",
      "D. 2 m"
    ],
    answer: "B",
    explanation: "h = u²/2g = 400/20 = 20 m.",
    subtopic: "Motion under gravity"
  },
  {
    question: "A ball thrown upward at 20 m/s (g = 10 m/s²) returns to the starting level after a total time of",
    options: [
      "A. 2 s",
      "B. 4 s",
      "C. 20 s",
      "D. 10 s"
    ],
    answer: "B",
    explanation: "Time up = 2 s and time down = 2 s, so total flight time = 4 s.",
    subtopic: "Motion under gravity"
  },
  {
    question: "A stone thrown vertically upward returns to the same level with a speed that is",
    options: [
      "A. greater than the launch speed",
      "B. equal to the launch speed (downward)",
      "C. zero",
      "D. half the launch speed"
    ],
    answer: "B",
    explanation: "Ignoring air resistance, it comes back at the same speed it was thrown up, but in the opposite direction.",
    subtopic: "Motion under gravity"
  },
  {
    question: "Which of these is true for a body falling freely under gravity (no air resistance)?",
    options: [
      "A. Its acceleration decreases",
      "B. Its acceleration is constant (g)",
      "C. It moves at constant velocity",
      "D. Its mass increases"
    ],
    answer: "B",
    explanation: "Free fall has a constant acceleration g (about 10 m/s²) throughout the motion.",
    subtopic: "Motion under gravity"
  },
  {
    question: "A body is dropped from a height of 45 m (g = 10 m/s²). The time to reach the ground is",
    options: [
      "A. 3 s",
      "B. 4.5 s",
      "C. 9 s",
      "D. 6 s"
    ],
    answer: "A",
    explanation: "s = ½gt² → 45 = 5t² → t² = 9 → t = 3 s.",
    subtopic: "Motion under gravity"
  },
  {
    question: "A ball thrown upward at 15 m/s (g = 10 m/s²) reaches a maximum height of",
    options: [
      "A. 7.5 m",
      "B. 11.25 m",
      "C. 15 m",
      "D. 22.5 m"
    ],
    answer: "B",
    explanation: "h = u²/2g = 225/20 = 11.25 m.",
    subtopic: "Motion under gravity"
  },
  {
    question: "Two objects of different masses dropped from the same height in a vacuum hit the ground",
    options: [
      "A. at different times",
      "B. at the same time",
      "C. the heavier one first",
      "D. never"
    ],
    answer: "B",
    explanation: "Without air resistance all bodies fall with the same acceleration g, so they land together.",
    subtopic: "Motion under gravity"
  },
  {
    question: "The velocity of a body 4 s after being dropped from rest (g = 10 m/s²) is",
    options: [
      "A. 4 m/s",
      "B. 40 m/s",
      "C. 14 m/s",
      "D. 2.5 m/s"
    ],
    answer: "B",
    explanation: "v = gt = 10 × 4 = 40 m/s downward.",
    subtopic: "Motion under gravity"
  }
];

module.exports = questions;
