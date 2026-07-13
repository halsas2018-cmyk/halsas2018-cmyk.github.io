// physics — Projectile Motion
const questions = [
  {
    question: "A projectile is launched at angle θ to the horizontal. The horizontal component of its initial velocity is:",
    options: [
      "A. u sinθ",
      "B. u cosθ",
      "C. u tanθ",
      "D. u/cosθ"
    ],
    answer: "B",
    explanation: "The horizontal component of velocity is u cosθ, since the angle is measured from the horizontal.",
    subtopic: "Concept"
  },
  {
    question: "For a projectile launched at angle θ, the vertical component of initial velocity is:",
    options: [
      "A. u cosθ",
      "B. u sinθ",
      "C. u/sinθ",
      "D. u tanθ"
    ],
    answer: "B",
    explanation: "The vertical component is u sinθ (opposite side to the launch angle).",
    subtopic: "Concept"
  },
  {
    question: "Neglecting air resistance, the horizontal acceleration of a projectile is:",
    options: [
      "A. g",
      "B. -g",
      "C. 0",
      "D. u cosθ"
    ],
    answer: "C",
    explanation: "With no air resistance, gravity acts only vertically, so horizontal acceleration is zero and horizontal velocity is constant.",
    subtopic: "Concept"
  },
  {
    question: "The vertical acceleration of a projectile (ignoring air resistance) is:",
    options: [
      "A. 0",
      "B. u sinθ",
      "C. -g (downwards)",
      "D. g cosθ"
    ],
    answer: "C",
    explanation: "Gravity acts downward throughout the flight, so vertical acceleration is -g (taking upward as positive).",
    subtopic: "Concept"
  },
  {
    question: "At the highest point of its trajectory, the velocity of a projectile is:",
    options: [
      "A. Zero",
      "B. Horizontal only (u cosθ)",
      "C. Vertical only",
      "D. Equal to u"
    ],
    answer: "B",
    explanation: "At the top, the vertical component is zero, so the velocity is purely horizontal = u cosθ.",
    subtopic: "Concept"
  },
  {
    question: "At the maximum height of a projectile's path, the vertical component of velocity is:",
    options: [
      "A. u sinθ",
      "B. u cosθ",
      "C. 0",
      "D. -g"
    ],
    answer: "C",
    explanation: "The projectile momentarily stops rising at the top, so the vertical component is zero there.",
    subtopic: "Concept"
  },
  {
    question: "The time taken to reach the maximum height for a projectile launched with vertical component u sinθ is:",
    options: [
      "A. u sinθ / g",
      "B. 2u sinθ / g",
      "C. u cosθ / g",
      "D. g / u sinθ"
    ],
    answer: "A",
    explanation: "Using v = u - gt at the top where v=0 gives t = u sinθ / g.",
    subtopic: "Concept"
  },
  {
    question: "For a projectile landing at the same level it was launched, the total time of flight is:",
    options: [
      "A. u sinθ / g",
      "B. 2u sinθ / g",
      "C. u cosθ / g",
      "D. u / g"
    ],
    answer: "B",
    explanation: "The upward and downward journeys take equal time, so total time = 2u sinθ / g.",
    subtopic: "Concept"
  },
  {
    question: "The maximum height H reached by a projectile launched at angle θ is:",
    options: [
      "A. u²sin²θ / g",
      "B. u²sin²θ / 2g",
      "C. u²sin2θ / g",
      "D. u²cos²θ / 2g"
    ],
    answer: "B",
    explanation: "Using v² = u² - 2gH with v=0 at the top gives H = (u sinθ)² / 2g = u²sin²θ/2g.",
    subtopic: "Concept"
  },
  {
    question: "The horizontal range R of a projectile launched and landing at the same level is:",
    options: [
      "A. u²sinθ / g",
      "B. u²sin2θ / g",
      "C. u²cos2θ / g",
      "D. 2u²sinθ / g"
    ],
    answer: "B",
    explanation: "Range = horizontal speed × time of flight = (u cosθ)(2u sinθ/g) = u²(2 sinθ cosθ)/g = u²sin2θ/g.",
    subtopic: "Concept"
  },
  {
    question: "The maximum possible range for a given launch speed u occurs at a launch angle of:",
    options: [
      "A. 30°",
      "B. 45°",
      "C. 60°",
      "D. 90°"
    ],
    answer: "B",
    explanation: "Range is maximum when sin2θ = 1, i.e. 2θ = 90°, so θ = 45°.",
    subtopic: "Concept"
  },
  {
    question: "The maximum range of a projectile launched with speed u (at 45°) is:",
    options: [
      "A. u² / g",
      "B. u² / 2g",
      "C. 2u² / g",
      "D. u²sin45° / g"
    ],
    answer: "A",
    explanation: "At θ = 45°, sin2θ = sin90° = 1, so R_max = u²/g.",
    subtopic: "Concept"
  },
  {
    question: "A projectile launched horizontally from a height has initial vertical velocity:",
    options: [
      "A. u sinθ",
      "B. u cosθ",
      "C. 0",
      "D. g"
    ],
    answer: "C",
    explanation: "A purely horizontal launch means the initial vertical component is zero; it falls under gravity.",
    subtopic: "Concept"
  },
  {
    question: "A ball is thrown horizontally from a cliff of height h with speed u. The time to hit the ground depends on:",
    options: [
      "A. u only",
      "B. h and g only",
      "C. u and h",
      "D. u, h and g"
    ],
    answer: "B",
    explanation: "Vertical motion is independent: h = ½gt², so t = √(2h/g), independent of the horizontal speed u.",
    subtopic: "Concept"
  },
  {
    question: "For a projectile, the path traced is a:",
    options: [
      "A. Straight line",
      "B. Circle",
      "C. Parabola",
      "D. Hyperbola"
    ],
    answer: "C",
    explanation: "With constant horizontal velocity and uniformly accelerated vertical motion, the trajectory is a parabola.",
    subtopic: "Concept"
  },
  {
    question: "Two projectiles are launched at complementary angles (θ and 90°−θ) with the same speed. Their ranges are:",
    options: [
      "A. Different",
      "B. Equal",
      "C. One is zero",
      "D. Inversely related"
    ],
    answer: "B",
    explanation: "sin2(90°−θ) = sin(180°−2θ) = sin2θ, so both angles give the same range.",
    subtopic: "Concept"
  },
  {
    question: "A projectile reaches the same height whether launched at 30° or:",
    options: [
      "A. 45°",
      "B. 60°",
      "C. 90°",
      "D. 15°"
    ],
    answer: "B",
    explanation: "Maximum height depends on sin²θ; sin²30° = sin²60° = ¾, so 30° and 60° give equal heights.",
    subtopic: "Concept"
  },
  {
    question: "If air resistance is NOT neglected, the range of a projectile is:",
    options: [
      "A. Greater than the ideal range",
      "B. Less than the ideal range",
      "C. Unchanged",
      "D. Infinite"
    ],
    answer: "B",
    explanation: "Air resistance opposes motion, reducing both horizontal and vertical speeds, so the actual range is less.",
    subtopic: "Concept"
  },
  {
    question: "The speed of a projectile at the point of projection and at landing (same level, no air resistance) are:",
    options: [
      "A. Different",
      "B. Equal in magnitude",
      "C. Zero at landing",
      "D. Half at landing"
    ],
    answer: "B",
    explanation: "Kinetic energy is conserved over the symmetric flight, so speed at landing equals launch speed (direction differs).",
    subtopic: "Concept"
  },
  {
    question: "A projectile is fired at 30° with speed 20 m/s. Its horizontal component of velocity is (take cos30°≈0.87):",
    options: [
      "A. 10 m/s",
      "B. 17.3 m/s",
      "C. 20 m/s",
      "D. 8.7 m/s"
    ],
    answer: "B",
    explanation: "u cosθ = 20 × 0.87 ≈ 17.3 m/s.",
    subtopic: "Concept"
  },
  {
    question: "A projectile is fired at 30° with speed 20 m/s. Its vertical component is (sin30° = 0.5):",
    options: [
      "A. 10 m/s",
      "B. 17.3 m/s",
      "C. 20 m/s",
      "D. 15 m/s"
    ],
    answer: "A",
    explanation: "u sinθ = 20 × 0.5 = 10 m/s.",
    subtopic: "Concept"
  },
  {
    question: "A ball thrown at 45° with speed 20 m/s has a range (g = 10 m/s²) of:",
    options: [
      "A. 20 m",
      "B. 40 m",
      "C. 10 m",
      "D. 80 m"
    ],
    answer: "B",
    explanation: "R = u²sin2θ/g = 400 × sin90° / 10 = 400/10 = 40 m.",
    subtopic: "Applications"
  },
  {
    question: "A stone is thrown horizontally at 15 m/s from a 20 m high tower (g = 10 m/s²). The time to reach the ground is:",
    options: [
      "A. 1 s",
      "B. 2 s",
      "C. 4 s",
      "D. √2 s"
    ],
    answer: "B",
    explanation: "h = ½gt² → 20 = 5t² → t² = 4 → t = 2 s.",
    subtopic: "Applications"
  },
  {
    question: "For the stone in the previous case, the horizontal distance travelled before hitting the ground is:",
    options: [
      "A. 15 m",
      "B. 30 m",
      "C. 20 m",
      "D. 60 m"
    ],
    answer: "B",
    explanation: "Range = u×t = 15 × 2 = 30 m.",
    subtopic: "Applications"
  },
  {
    question: "A projectile reaches a maximum height of 20 m when launched vertically. If launched at 45° with the same speed, its max height would be:",
    options: [
      "A. 20 m",
      "B. 10 m",
      "C. 40 m",
      "D. 5 m"
    ],
    answer: "B",
    explanation: "Vertical component is u/√2 at 45°, so height scales by sin²45° = ½: 20 × ½ = 10 m.",
    subtopic: "Applications"
  },
  {
    question: "An athlete long-jumps at 45° with take-off speed 10 m/s (g = 10). The jump distance is:",
    options: [
      "A. 5 m",
      "B. 10 m",
      "C. 20 m",
      "D. 15 m"
    ],
    answer: "B",
    explanation: "R = u²/g = 100/10 = 10 m at 45°.",
    subtopic: "Applications"
  },
  {
    question: "A cannon fires a shell at 60° with speed 100 m/s (g = 10). Its maximum height is:",
    options: [
      "A. 375 m",
      "B. 750 m",
      "C. 500 m",
      "D. 250 m"
    ],
    answer: "A",
    explanation: "H = u²sin²θ/2g = 10000 × (0.866)² / 20 ≈ 10000×0.75/20 = 375 m.",
    subtopic: "Applications"
  },
  {
    question: "For the cannon in the previous question, the range is:",
    options: [
      "A. 500 m",
      "B. 866 m",
      "C. 1000 m",
      "D. 433 m"
    ],
    answer: "B",
    explanation: "R = u²sin2θ/g = 10000 × sin120° / 10 = 1000 × 0.866 = 866 m.",
    subtopic: "Applications"
  },
  {
    question: "A football is kicked at 30° and travels 40 m. If kicked at the same speed at 60°, the range would be:",
    options: [
      "A. 20 m",
      "B. 40 m",
      "C. 80 m",
      "D. 60 m"
    ],
    answer: "B",
    explanation: "30° and 60° are complementary, so they give the same range for the same launch speed.",
    subtopic: "Applications"
  },
  {
    question: "A projectile is launched and lands at different heights. The time of flight is found from the equation:",
    options: [
      "A. R = u²sin2θ/g",
      "B. y = u sinθ·t − ½gt² (vertical displacement)",
      "C. H = u²sin²θ/2g",
      "D. v = u cosθ"
    ],
    answer: "B",
    explanation: "The vertical displacement equation y = (u sinθ)t − ½gt² gives the time when y equals the landing height.",
    subtopic: "Applications"
  },
  {
    question: "A basketball is thrown to reach a height of 5 m (g = 10). The minimum vertical speed needed is:",
    options: [
      "A. 5 m/s",
      "B. 10 m/s",
      "C. 20 m/s",
      "D. √10 m/s"
    ],
    answer: "B",
    explanation: "From v² = u² − 2gH at top v=0: u = √(2gH) = √(2×10×5) = √100 = 10 m/s.",
    subtopic: "Applications"
  },
  {
    question: "The angle of projection that gives equal maximum height and horizontal range is:",
    options: [
      "A. 30°",
      "B. 45°",
      "C. 60°",
      "D. 76° (approx)"
    ],
    answer: "D",
    explanation: "Setting u²sin²θ/2g = u²sin2θ/g gives tanθ = 4, so θ ≈ 76°.",
    subtopic: "Applications"
  },
  {
    question: "A projectile has range R and maximum height H. If the launch speed is doubled (same angle), the new range becomes:",
    options: [
      "A. R",
      "B. 2R",
      "C. 4R",
      "D. R/2"
    ],
    answer: "C",
    explanation: "Range ∝ u², so doubling u makes the range four times larger.",
    subtopic: "Applications"
  },
  {
    question: "If launch speed is doubled (same angle), the new maximum height becomes:",
    options: [
      "A. H",
      "B. 2H",
      "C. 4H",
      "D. H/2"
    ],
    answer: "C",
    explanation: "Maximum height ∝ u², so doubling u makes the height four times larger.",
    subtopic: "Applications"
  },
  {
    question: "A javelin thrown at 45° travels 60 m (g = 10). Its launch speed is:",
    options: [
      "A. 10√6 m/s",
      "B. 30 m/s",
      "C. 60 m/s",
      "D. 20 m/s"
    ],
    answer: "A",
    explanation: "R = u²/g → u = √(Rg) = √(60×10) = √600 = 10√6 m/s.",
    subtopic: "Applications"
  },
  {
    question: "The velocity of a projectile at any instant is the vector sum of:",
    options: [
      "A. Its initial speed and g",
      "B. Constant horizontal velocity and changing vertical velocity",
      "C. Two equal components",
      "D. Range and height"
    ],
    answer: "B",
    explanation: "Horizontal velocity stays u cosθ while vertical velocity changes as u sinθ − gt; the resultant is their vector sum.",
    subtopic: "Concept"
  },
  {
    question: "A shell is fired with speed 50 m/s at 53° (sin53°≈0.8, cos53°≈0.6). Its vertical component is:",
    options: [
      "A. 30 m/s",
      "B. 40 m/s",
      "C. 50 m/s",
      "D. 25 m/s"
    ],
    answer: "B",
    explanation: "u sinθ = 50 × 0.8 = 40 m/s.",
    subtopic: "Concept"
  },
  {
    question: "For the shell above, its horizontal component is:",
    options: [
      "A. 30 m/s",
      "B. 40 m/s",
      "C. 50 m/s",
      "D. 20 m/s"
    ],
    answer: "A",
    explanation: "u cosθ = 50 × 0.6 = 30 m/s.",
    subtopic: "Concept"
  },
  {
    question: "The time of flight of the shell above (g = 10) is:",
    options: [
      "A. 4 s",
      "B. 8 s",
      "C. 2 s",
      "D. 6 s"
    ],
    answer: "B",
    explanation: "T = 2u sinθ/g = 2×40/10 = 8 s.",
    subtopic: "Applications"
  },
  {
    question: "The range of the shell above (g = 10) is:",
    options: [
      "A. 120 m",
      "B. 240 m",
      "C. 300 m",
      "D. 200 m"
    ],
    answer: "B",
    explanation: "R = horizontal speed × time = 30 × 8 = 240 m (also u²sin2θ/g = 2500×0.96/10 = 240).",
    subtopic: "Applications"
  },
  {
    question: "A projectile's horizontal velocity remains constant because:",
    options: [
      "A. Gravity is zero horizontally",
      "B. No horizontal force acts (ignoring air resistance)",
      "C. The launch angle is 45°",
      "D. Mass is conserved"
    ],
    answer: "B",
    explanation: "With no horizontal force, by Newton's first law the horizontal velocity does not change.",
    subtopic: "Concept"
  },
  {
    question: "Which quantity is the same at the start and at the highest point of a projectile's flight?",
    options: [
      "A. Speed",
      "B. Kinetic energy",
      "C. Horizontal velocity",
      "D. Vertical velocity"
    ],
    answer: "C",
    explanation: "Horizontal velocity u cosθ is constant throughout, so it is the same at launch and at the top.",
    subtopic: "Concept"
  },
  {
    question: "A body projected at an angle has an acceleration that is:",
    options: [
      "A. Zero throughout",
      "B. Constant and equal to g downward",
      "C. Constant and horizontal",
      "D. Increasing with time"
    ],
    answer: "B",
    explanation: "The only acceleration is gravity, which is constant in magnitude and direction (downward).",
    subtopic: "Concept"
  },
  {
    question: "A projectile is launched from ground level. The angle for which the time of flight is greatest (for fixed speed) is:",
    options: [
      "A. 30°",
      "B. 45°",
      "C. 90°",
      "D. 60°"
    ],
    answer: "C",
    explanation: "Time of flight = 2u sinθ/g, which is largest when sinθ = 1, i.e. θ = 90° (vertical launch).",
    subtopic: "Concept"
  },
  {
    question: "A stone is thrown at 37° with speed 25 m/s (sin37°≈0.6, cos37°≈0.8, g=10). Its maximum height is:",
    options: [
      "A. 11.25 m",
      "B. 22.5 m",
      "C. 15 m",
      "D. 18.75 m"
    ],
    answer: "A",
    explanation: "H = u²sin²θ/2g = 625 × 0.36 / 20 = 225/20 = 11.25 m.",
    subtopic: "Applications"
  },
  {
    question: "For the stone above, the time to reach maximum height is:",
    options: [
      "A. 1.5 s",
      "B. 3 s",
      "C. 2.5 s",
      "D. 1 s"
    ],
    answer: "A",
    explanation: "t = u sinθ/g = 25×0.6/10 = 15/10 = 1.5 s.",
    subtopic: "Applications"
  },
  {
    question: "A projectile is fired to just clear a wall of height H at its midpoint horizontally. The minimum launch speed for range R is related by:",
    options: [
      "A. u² = gR",
      "B. u² = g(R/2 + 2H) ... (depends on geometry)",
      "C. u = gR",
      "D. u² = 2gH"
    ],
    answer: "D",
    explanation: "At the midpoint (x = R/2) the projectile is at its maximum height H, so the minimum speed satisfies u_y² = 2gH; the precise relation depends on geometry, but H = u²sin²θ/2g is the key.",
    subtopic: "Applications"
  },
  {
    question: "Which of the following is NOT a vector quantity in projectile motion?",
    options: [
      "A. Displacement",
      "B. Velocity",
      "C. Acceleration",
      "D. Time of flight"
    ],
    answer: "D",
    explanation: "Time is a scalar quantity; displacement, velocity and acceleration are all vectors.",
    subtopic: "Concept"
  },
  {
    question: "A projectile reaches the ground with speed v. If launched and landing at the same level (no air resistance), v equals:",
    options: [
      "A. u cosθ",
      "B. u (the launch speed)",
      "C. u sinθ",
      "D. 2u"
    ],
    answer: "B",
    explanation: "Energy is conserved, so the speed on return to the launch level equals the initial speed u.",
    subtopic: "Concept"
  },
  {
    question: "A golfer hits a ball at 40 m/s at 30° (g = 10). The range is:",
    options: [
      "A. 80 m",
      "B. 139 m",
      "C. 160 m",
      "D. 40 m"
    ],
    answer: "B",
    explanation: "R = u²sin2θ/g = 1600 × sin60° / 10 = 160 × 0.866 ≈ 139 m.",
    subtopic: "Applications"
  },
  {
    question: "For the golfer above, the maximum height reached is:",
    options: [
      "A. 10 m",
      "B. 20 m",
      "C. 40 m",
      "D. 30 m"
    ],
    answer: "B",
    explanation: "H = u²sin²θ/2g = 1600 × 0.25 / 20 = 400/20 = 20 m.",
    subtopic: "Applications"
  },
  {
    question: "If a projectile is launched with the same speed at 15° and 75°, the ratio of their ranges is:",
    options: [
      "A. 1 : 1",
      "B. 1 : 2",
      "C. 2 : 1",
      "D. 1 : 4"
    ],
    answer: "A",
    explanation: "15° and 75° are complementary (sum to 90°), so sin2θ is the same and the ranges are equal.",
    subtopic: "Concept"
  },
  {
    question: "The equation of the trajectory of a projectile (y vs x) is of the form:",
    options: [
      "A. y = x (straight line)",
      "B. y = x tanθ − gx²/(2u²cos²θ)",
      "C. y = u²/x",
      "D. y = constant"
    ],
    answer: "B",
    explanation: "Eliminating t from x = u cosθ·t and y = u sinθ·t − ½gt² gives y = x tanθ − gx²/(2u²cos²θ), a parabola.",
    subtopic: "Concept"
  }
];

module.exports = questions;
