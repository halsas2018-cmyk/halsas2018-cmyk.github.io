// physics — Gravitational Field
const questions = [
  {
    question: "The force of attraction between two masses m1 and m2 separated by distance r is given by:",
    options: [
      "A. F = Gm1m2/r",
      "B. F = Gm1m2/r²",
      "C. F = G(m1+m2)/r²",
      "D. F = Gm1m2·r²"
    ],
    answer: "B",
    explanation: "Newton's law of gravitation: F = Gm1m2/r², where G is the universal gravitational constant.",
    subtopic: "Gravitational force"
  },
  {
    question: "The universal gravitational constant G has the value:",
    options: [
      "A. 6.67 × 10⁻¹¹ N m² kg⁻²",
      "B. 9.8 N kg⁻¹",
      "C. 3.0 × 10⁸ m s⁻¹",
      "D. 1.6 × 10⁻¹⁹ C"
    ],
    answer: "A",
    explanation: "G = 6.67 × 10⁻¹¹ N m² kg⁻², the constant of proportionality in Newton's law of gravitation.",
    subtopic: "Gravitational force"
  },
  {
    question: "Near the Earth's surface, the acceleration due to gravity g is approximately:",
    options: [
      "A. 9.8 m s⁻²",
      "B. 6.67 m s⁻²",
      "C. 3.0 m s⁻²",
      "D. 1.6 m s⁻²"
    ],
    answer: "A",
    explanation: "g ≈ 9.8 m s⁻² (often approximated as 10 m s⁻² in WAEC/NECO calculations) near Earth's surface.",
    subtopic: "Acceleration due to gravity"
  },
  {
    question: "The relationship between gravitational field strength g and the universal constant G at Earth's surface is:",
    options: [
      "A. g = GM/R",
      "B. g = GM/R²",
      "C. g = GMR²",
      "D. g = GR²/M"
    ],
    answer: "B",
    explanation: "For a spherical Earth of mass M and radius R, g = GM/R² by combining F = GMm/R² with F = mg.",
    subtopic: "Acceleration due to gravity"
  },
  {
    question: "If the Earth's radius were halved but its mass remained the same, the value of g at the surface would:",
    options: [
      "A. Halve",
      "B. Become four times greater",
      "C. Remain the same",
      "D. Become twice as great"
    ],
    answer: "B",
    explanation: "Since g = GM/R², halving R makes g four times larger (g ∝ 1/R²).",
    subtopic: "Acceleration due to gravity"
  },
  {
    question: "An object of mass 2 kg falling freely near Earth has a weight of approximately:",
    options: [
      "A. 2 N",
      "B. 19.6 N",
      "C. 9.8 N",
      "D. 0.2 N"
    ],
    answer: "B",
    explanation: "Weight W = mg = 2 × 9.8 = 19.6 N.",
    subtopic: "Acceleration due to gravity"
  },
  {
    question: "The gravitational potential at a point is defined as the:",
    options: [
      "A. Force per unit mass",
      "B. Work done per unit mass in bringing a body from infinity to that point",
      "C. Kinetic energy per unit mass",
      "D. Mass per unit volume"
    ],
    answer: "B",
    explanation: "Gravitational potential V = work done per unit mass moving a test mass from infinity to the point (it is negative for an attractive field).",
    subtopic: "Gravitational potential & escape velocity"
  },
  {
    question: "The gravitational potential due to a point mass M at distance r is:",
    options: [
      "A. +GM/r",
      "B. −GM/r",
      "C. −GM/r²",
      "D. +GM/r²"
    ],
    answer: "B",
    explanation: "V = −GM/r; the negative sign indicates the field is attractive and zero potential is at infinity.",
    subtopic: "Gravitational potential & escape velocity"
  },
  {
    question: "Escape velocity from a planet of mass M and radius R is given by:",
    options: [
      "A. v = √(GM/R)",
      "B. v = √(2GM/R)",
      "C. v = 2GM/R",
      "D. v = √(GM/2R)"
    ],
    answer: "B",
    explanation: "Setting kinetic energy equal to gravitational potential energy: ½mv² = GMm/R gives v = √(2GM/R).",
    subtopic: "Gravitational potential & escape velocity"
  },
  {
    question: "Escape velocity from Earth depends on:",
    options: [
      "A. The mass of the escaping object",
      "B. The mass and radius of the Earth only",
      "C. The colour of the object",
      "D. The time of launch"
    ],
    answer: "B",
    explanation: "v = √(2GM/R) depends only on the planet's mass and radius, not on the mass of the escaping body.",
    subtopic: "Gravitational potential & escape velocity"
  },
  {
    question: "The weight of a body is maximum at which location?",
    options: [
      "A. At the equator",
      "B. At the poles",
      "C. At the centre of the Earth",
      "D. In deep space"
    ],
    answer: "B",
    explanation: "g is slightly greater at the poles (smaller radius and no centrifugal reduction), so weight is maximum there.",
    subtopic: "Acceleration due to gravity"
  },
  {
    question: "As a body moves from the Earth's surface to a height equal to the Earth's radius, its weight becomes:",
    options: [
      "A. Half",
      "B. One quarter",
      "C. Double",
      "D. Unchanged"
    ],
    answer: "B",
    explanation: "At distance 2R from Earth's centre, weight ∝ 1/r² = 1/(2R)² = 1/4 of the surface value.",
    subtopic: "Gravitational force"
  },
  {
    question: "Gravitational field strength is a:",
    options: [
      "A. Scalar quantity",
      "B. Vector quantity",
      "C. dimensionless quantity",
      "D. Constant everywhere"
    ],
    answer: "B",
    explanation: "Gravitational field strength has magnitude and direction (toward the mass), so it is a vector.",
    subtopic: "Acceleration due to gravity"
  },
  {
    question: "Two identical spheres each of mass m are separated by distance d. The gravitational force between them is:",
    options: [
      "A. Gm²/d",
      "B. Gm²/d²",
      "C. Gm/d²",
      "D. 2Gm/d²"
    ],
    answer: "B",
    explanation: "By Newton's law, F = G(m)(m)/d² = Gm²/d².",
    subtopic: "Gravitational force"
  },
  {
    question: "The acceleration due to gravity on the Moon is about 1/6 that on Earth because the Moon has:",
    options: [
      "A. The same mass but smaller radius",
      "B. Much smaller mass and smaller radius than Earth",
      "C. No gravitational field",
      "D. Greater mass than Earth"
    ],
    answer: "B",
    explanation: "The Moon's smaller mass and radius give g ≈ 1.6 m s⁻² ≈ g_Earth/6.",
    subtopic: "Acceleration due to gravity"
  },
  {
    question: "A satellite in a circular orbit around the Earth is:",
    options: [
      "A. Weightless because gravity is zero",
      "B. In free fall, with gravity providing the centripetal force",
      "C. Pushed outward by gravity",
      "D. Not affected by Earth's gravity"
    ],
    answer: "B",
    explanation: "In orbit, gravity supplies the centripetal force; the satellite is in continuous free fall but keeps missing the Earth.",
    subtopic: "Acceleration due to gravity"
  },
  {
    question: "The gravitational potential energy of a mass m at distance r from Earth's centre is:",
    options: [
      "A. +GMm/r",
      "B. −GMm/r",
      "C. −GMm/r²",
      "D. +GMm/r²"
    ],
    answer: "B",
    explanation: "U = mV = −GMm/r, negative because work must be done to separate the masses to infinity.",
    subtopic: "Gravitational potential & escape velocity"
  },
  {
    question: "Kepler's third law states that the square of a planet's orbital period is proportional to the:",
    options: [
      "A. Orbital radius",
      "B. Cube of the orbital radius",
      "C. Square of the orbital radius",
      "D. Inverse of the orbital radius"
    ],
    answer: "B",
    explanation: "T² ∝ r³ (for circular orbits, T² = 4π²r³/GM), Kepler's third law of planetary motion.",
    subtopic: "Gravitational force"
  },
  {
    question: "At the centre of the Earth, the value of g is:",
    options: [
      "A. Maximum",
      "B. Zero",
      "C. Equal to surface value",
      "D. Infinite"
    ],
    answer: "B",
    explanation: "Inside a uniform sphere, gravitational forces from all directions cancel at the centre, so g = 0.",
    subtopic: "Acceleration due to gravity"
  },
  {
    question: "The unit of gravitational potential is:",
    options: [
      "A. N kg⁻¹",
      "B. J kg⁻¹",
      "C. N m² kg⁻²",
      "D. m s⁻²"
    ],
    answer: "B",
    explanation: "Potential = work per unit mass, so its unit is joule per kilogram (J kg⁻¹).",
    subtopic: "Gravitational potential & escape velocity"
  },
  {
    question: "If the mass of each of two bodies is doubled while their separation stays the same, the gravitational force between them becomes:",
    options: [
      "A. Doubled",
      "B. Four times",
      "C. Halved",
      "D. Unchanged"
    ],
    answer: "B",
    explanation: "F ∝ m1m2, so doubling both masses makes F four times larger.",
    subtopic: "Gravitational force"
  },
  {
    question: "A body weighs 60 N on Earth. Its mass is approximately:",
    options: [
      "A. 6.1 kg",
      "B. 60 kg",
      "C. 600 kg",
      "D. 0.16 kg"
    ],
    answer: "A",
    explanation: "m = W/g = 60/9.8 ≈ 6.1 kg.",
    subtopic: "Acceleration due to gravity"
  },
  {
    question: "The term 'weight' refers to the:",
    options: [
      "A. Quantity of matter in a body",
      "B. Force of gravity on a body",
      "C. Volume of a body",
      "D. Density of a body"
    ],
    answer: "B",
    explanation: "Weight is the gravitational force on a body (W = mg), a vector measured in newtons.",
    subtopic: "Acceleration due to gravity"
  },
  {
    question: "Which of the following decreases with height above the Earth's surface?",
    options: [
      "A. The mass of a body",
      "B. The value of g",
      "C. The universal constant G",
      "D. The body's inertia"
    ],
    answer: "B",
    explanation: "g = GM/r² decreases as r increases with height; mass and G are constant.",
    subtopic: "Acceleration due to gravity"
  },
  {
    question: "Geostationary satellites orbit the Earth at a height where their period is:",
    options: [
      "A. 24 hours",
      "B. 1 hour",
      "C. 365 days",
      "D. 12 hours"
    ],
    answer: "A",
    explanation: "A geostationary satellite has a period of 24 h, matching Earth's rotation so it stays over one point.",
    subtopic: "Gravitational force"
  },
  {
    question: "The gravitational force between two masses is:",
    options: [
      "A. Along the line joining their centres",
      "B. Perpendicular to the line joining them",
      "C. Parallel to their surfaces",
      "D. Random in direction"
    ],
    answer: "A",
    explanation: "Gravity is a central force: it acts along the straight line connecting the centres of the two masses.",
    subtopic: "Gravitational force"
  },
  {
    question: "A body of mass 10 kg is taken to a planet where g = 4 m s⁻². Its weight there is:",
    options: [
      "A. 40 N",
      "B. 98 N",
      "C. 10 N",
      "D. 4 N"
    ],
    answer: "A",
    explanation: "W = mg = 10 × 4 = 40 N.",
    subtopic: "Acceleration due to gravity"
  },
  {
    question: "Escape velocity from Earth is about:",
    options: [
      "A. 11.2 km s⁻¹",
      "B. 7.9 km s⁻¹",
      "C. 3.0 × 10⁸ m s⁻¹",
      "D. 1.6 km s⁻¹"
    ],
    answer: "A",
    explanation: "v_esc = √(2GM/R) ≈ 11.2 km s⁻¹ for Earth.",
    subtopic: "Gravitational potential & escape velocity"
  },
  {
    question: "Which quantity is independent of the planet's mass for a given orbiting satellite?",
    options: [
      "A. Orbital speed at a fixed radius",
      "B. The satellite's own mass affecting its orbit period",
      "C. Escape velocity",
      "D. Surface gravity"
    ],
    answer: "B",
    explanation: "Orbital period and speed depend on the central mass and radius, not on the satellite's own mass.",
    subtopic: "Gravitational force"
  },
  {
    question: "If Earth's mass doubled but its radius stayed the same, g at the surface would:",
    options: [
      "A. Double",
      "B. Halve",
      "C. Remain the same",
      "D. Become four times"
    ],
    answer: "A",
    explanation: "g = GM/R², so doubling M doubles g.",
    subtopic: "Acceleration due to gravity"
  },
  {
    question: "The gravitational potential is zero:",
    options: [
      "A. At the Earth's surface",
      "B. At infinity",
      "C. At the centre of the Earth",
      "D. Everywhere inside a planet"
    ],
    answer: "B",
    explanation: "By convention, gravitational potential is taken as zero at infinity.",
    subtopic: "Gravitational potential & escape velocity"
  },
  {
    question: "A pendulum's period depends on g. If g decreases, the period:",
    options: [
      "A. Increases",
      "B. Decreases",
      "C. Stays the same",
      "D. Becomes zero"
    ],
    answer: "A",
    explanation: "T = 2π√(L/g); a smaller g gives a longer period.",
    subtopic: "Acceleration due to gravity"
  },
  {
    question: "The centripetal force keeping the Moon in orbit is provided by:",
    options: [
      "A. Earth's magnetic field",
      "B. The gravitational attraction of Earth",
      "C. Solar wind",
      "D. The Moon's rotation"
    ],
    answer: "B",
    explanation: "Earth's gravity supplies the centripetal force that keeps the Moon in its nearly circular orbit.",
    subtopic: "Gravitational force"
  },
  {
    question: "Which of the following best explains why astronauts feel 'weightless' in orbit?",
    options: [
      "A. There is no gravity in space",
      "B. They and their capsule are in free fall together",
      "C. They have no mass",
      "D. The Earth's gravity is blocked"
    ],
    answer: "B",
    explanation: "Weightlessness in orbit occurs because astronaut and capsule accelerate together under gravity; no normal force acts.",
    subtopic: "Acceleration due to gravity"
  },
  {
    question: "The gravitational field strength at distance r outside a uniform spherical shell of mass M is:",
    options: [
      "A. Zero",
      "B. GM/r²",
      "C. GM/r",
      "D. GMr"
    ],
    answer: "B",
    explanation: "Outside a spherical mass distribution, the field is as if all mass were concentrated at the centre: g = GM/r².",
    subtopic: "Gravitational force"
  },
  {
    question: "The work done in moving a mass from one point to another in a gravitational field depends on:",
    options: [
      "A. The path taken",
      "B. Only the initial and final positions",
      "C. The speed of the mass",
      "D. The time taken"
    ],
    answer: "B",
    explanation: "Gravity is conservative, so work depends only on the change in position (potential difference), not the path.",
    subtopic: "Gravitational potential & escape velocity"
  },
  {
    question: "A 5 kg object is dropped from rest. After 2 s its velocity is approximately (g = 10 m s⁻²):",
    options: [
      "A. 5 m s⁻¹",
      "B. 20 m s⁻¹",
      "C. 10 m s⁻¹",
      "D. 2 m s⁻¹"
    ],
    answer: "B",
    explanation: "v = gt = 10 × 2 = 20 m s⁻¹ (free fall from rest).",
    subtopic: "Acceleration due to gravity"
  },
  {
    question: "The gravitational attraction between two 1 kg masses 1 m apart is approximately:",
    options: [
      "A. 6.67 × 10⁻¹¹ N",
      "B. 9.8 N",
      "C. 1 N",
      "D. 6.67 × 10¹¹ N"
    ],
    answer: "A",
    explanation: "F = G(1)(1)/1² = 6.67 × 10⁻¹¹ N, showing gravity is very weak between small masses.",
    subtopic: "Gravitational force"
  },
  {
    question: "Which of the following is a correct statement about gravitational potential energy near Earth's surface?",
    options: [
      "A. U = mgh, increasing with height",
      "B. U = mg/h",
      "C. U is constant",
      "D. U decreases with height"
    ],
    answer: "A",
    explanation: "Near the surface, gravitational potential energy U = mgh, increasing as height h increases.",
    subtopic: "Gravitational potential & escape velocity"
  },
  {
    question: "The mass of a body is:",
    options: [
      "A. Different on the Moon and on Earth",
      "B. The same everywhere",
      "C. Equal to its weight",
      "D. Measured in newtons"
    ],
    answer: "B",
    explanation: "Mass is an intrinsic property (amount of matter) and is the same everywhere; weight changes with g.",
    subtopic: "Acceleration due to gravity"
  },
  {
    question: "Two planets have the same radius but planet X has twice the mass of planet Y. The surface gravity of X compared with Y is:",
    options: [
      "A. Half",
      "B. Twice",
      "C. The same",
      "D. Four times"
    ],
    answer: "B",
    explanation: "With equal R, g ∝ M, so doubling the mass doubles surface gravity.",
    subtopic: "Acceleration due to gravity"
  },
  {
    question: "The total energy of a satellite in a stable circular orbit is:",
    options: [
      "A. Positive",
      "B. Negative (bound)",
      "C. Zero",
      "D. Infinite"
    ],
    answer: "B",
    explanation: "For a bound orbit, total energy E = −GMm/(2r) < 0; the satellite is gravitationally bound.",
    subtopic: "Gravitational potential & escape velocity"
  },
  {
    question: "If the separation between two masses is tripled, the gravitational force becomes:",
    options: [
      "A. 1/9 of its value",
      "B. 1/3 of its value",
      "C. 3 times",
      "D. 9 times"
    ],
    answer: "A",
    explanation: "F ∝ 1/r², so tripling r reduces F to (1/3)² = 1/9.",
    subtopic: "Gravitational force"
  },
  {
    question: "The period of a satellite close to Earth's surface (radius R) is given approximately by:",
    options: [
      "A. T = 2π√(R/g)",
      "B. T = 2πR/g",
      "C. T = √(gR)",
      "D. T = 2πg/R"
    ],
    answer: "A",
    explanation: "For a low orbit, centripetal accel. v²/R = g, and T = 2πR/v = 2π√(R/g).",
    subtopic: "Gravitational force"
  },
  {
    question: "A body projected vertically upward returns to the ground. Neglecting air resistance, its acceleration is:",
    options: [
      "A. Zero throughout",
      "B. g downward throughout",
      "C. Zero at the top only",
      "D. g upward"
    ],
    answer: "B",
    explanation: "Throughout the motion (up, at top, down) the only acceleration is g downward.",
    subtopic: "Acceleration due to gravity"
  },
  {
    question: "The gravitational field inside a uniform spherical shell is:",
    options: [
      "A. GM/R²",
      "B. Zero",
      "C. GM/r²",
      "D. Infinite"
    ],
    answer: "B",
    explanation: "By the shell theorem, the gravitational field inside a uniform spherical shell is exactly zero.",
    subtopic: "Gravitational force"
  },
  {
    question: "Which of the following has the greatest effect on the value of g at a point above Earth?",
    options: [
      "A. The colour of the sky",
      "B. The distance from Earth's centre",
      "C. The time of day",
      "D. The mass of the object"
    ],
    answer: "B",
    explanation: "g = GM/r² depends primarily on distance r from Earth's centre.",
    subtopic: "Acceleration due to gravity"
  },
  {
    question: "A rocket must reach escape velocity to:",
    options: [
      "A. Orbit the Earth",
      "B. Leave Earth's gravitational influence without further propulsion",
      "C. Land on the Moon",
      "D. Hover in place"
    ],
    answer: "B",
    explanation: "Escape velocity is the minimum speed needed to overcome Earth's gravity and not fall back, ignoring air resistance.",
    subtopic: "Gravitational potential & escape velocity"
  },
  {
    question: "The change in gravitational potential when moving a unit mass from r1 to r2 (r2 > r1) is:",
    options: [
      "A. More negative",
      "B. Less negative (increases toward zero)",
      "C. Unchanged",
      "D. Infinite"
    ],
    answer: "B",
    explanation: "V = −GM/r; as r increases, V becomes less negative (increases toward 0).",
    subtopic: "Gravitational potential & escape velocity"
  },
  {
    question: "Newton's law of gravitation applies to:",
    options: [
      "A. Only masses on Earth",
      "B. Any two masses in the universe",
      "C. Only charged particles",
      "D. Only liquids"
    ],
    answer: "B",
    explanation: "Newton's law is universal: it applies to any pair of masses, anywhere in the universe.",
    subtopic: "Gravitational force"
  },
  {
    question: "An object in free fall near Earth (no air resistance) has:",
    options: [
      "A. Constant velocity",
      "B. Constant acceleration g",
      "C. Zero acceleration",
      "D. Increasing mass"
    ],
    answer: "B",
    explanation: "Free fall under gravity alone means constant downward acceleration g ≈ 9.8 m s⁻².",
    subtopic: "Acceleration due to gravity"
  },
  {
    question: "The ratio of the force of gravity on a body at Earth's surface to that at a distance 3R from Earth's centre is:",
    options: [
      "A. 1 : 9",
      "B. 9 : 1",
      "C. 3 : 1",
      "D. 1 : 3"
    ],
    answer: "B",
    explanation: "At 3R, g is 1/9 of surface value, so surface : 3R = 9 : 1.",
    subtopic: "Gravitational force"
  }
];

module.exports = questions;
