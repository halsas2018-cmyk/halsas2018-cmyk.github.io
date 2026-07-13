// physics — Satellites and Rockets
const questions = [
  {
    question: "A satellite moves in a circular orbit around the Earth. The force that keeps it in orbit is:",
    options: [
      "A. Friction",
      "B. Earth's gravitational pull",
      "C. Magnetic force",
      "D. Centrifugal force"
    ],
    answer: "B",
    explanation: "Gravity provides the centripetal force needed to keep the satellite in circular orbit.",
    subtopic: "Satellites"
  },
  {
    question: "For a satellite in circular orbit, the gravitational force equals the centripetal force. This gives:",
    options: [
      "A. GMm/r² = mv²/r",
      "B. GMm/r = mv²",
      "C. GM/r² = v",
      "D. Gm/r² = mr"
    ],
    answer: "A",
    explanation: "Setting gravitational force GMm/r² equal to centripetal force mv²/r gives the orbital speed relation.",
    subtopic: "Satellites"
  },
  {
    question: "The orbital speed v of a satellite at distance r from Earth's centre (mass M) is:",
    options: [
      "A. √(GM/r)",
      "B. √(2GM/r)",
      "C. GM/r",
      "D. √(GM/r²)"
    ],
    answer: "A",
    explanation: "From GMm/r² = mv²/r, v² = GM/r, so v = √(GM/r).",
    subtopic: "Satellites"
  },
  {
    question: "The period T of a satellite in circular orbit of radius r about Earth (mass M) is given by:",
    options: [
      "A. T = 2π√(r³/GM)",
      "B. T = 2π√(GM/r³)",
      "C. T = √(4π²GM/r³)",
      "D. T = πr²/GM"
    ],
    answer: "A",
    explanation: "From T = 2πr/v and v = √(GM/r), T = 2πr/√(GM/r) = 2π√(r³/GM). This is Kepler's third law.",
    subtopic: "Satellites"
  },
  {
    question: "A satellite in a LOWER orbit has:",
    options: [
      "A. A longer period",
      "B. A shorter period and higher speed",
      "C. The same speed as a high orbit",
      "D. Zero speed"
    ],
    answer: "B",
    explanation: "Lower r means v = √(GM/r) is larger and T = 2π√(r³/GM) is smaller.",
    subtopic: "Satellites"
  },
  {
    question: "A satellite in a HIGHER orbit has:",
    options: [
      "A. A shorter period",
      "B. A longer period and lower speed",
      "C. Higher speed",
      "D. Constant speed regardless of height"
    ],
    answer: "B",
    explanation: "Higher r gives smaller v and larger T, so it moves more slowly and takes longer to complete an orbit.",
    subtopic: "Satellites"
  },
  {
    question: "A geostationary satellite must orbit:",
    options: [
      "A. Over the poles",
      "B. Above the equator with a 24-hour period",
      "C. At any latitude with a 12-hour period",
      "D. Very close to Earth"
    ],
    answer: "B",
    explanation: "A geostationary satellite stays fixed over one point, so it orbits above the equator with a period equal to Earth's rotation (24 h).",
    subtopic: "Satellites"
  },
  {
    question: "The escape velocity from a planet of mass M and radius R is:",
    options: [
      "A. √(GM/R)",
      "B. √(2GM/R)",
      "C. 2GM/R",
      "D. √(GM/2R)"
    ],
    answer: "B",
    explanation: "Setting ½mv² = GMm/R gives v = √(2GM/R).",
    subtopic: "Satellites"
  },
  {
    question: "The escape velocity from Earth (mass M, radius R) is numerically equal to:",
    options: [
      "A. Orbital speed at surface",
      "B. √2 times the circular orbital speed at that radius",
      "C. Half the orbital speed",
      "D. 2 times the orbital speed"
    ],
    answer: "B",
    explanation: "v_escape = √(2GM/R) = √2 × √(GM/R) = √2 × v_orbit.",
    subtopic: "Satellites"
  },
  {
    question: "Escape velocity depends on:",
    options: [
      "A. The mass of the escaping object",
      "B. The mass and radius of the planet only",
      "C. The direction of launch",
      "D. The colour of the object"
    ],
    answer: "B",
    explanation: "v_escape = √(2GM/R) depends only on the planet's mass M and radius R, not on the object's mass.",
    subtopic: "Satellites"
  },
  {
    question: "An artificial satellite experiences apparent weightlessness because:",
    options: [
      "A. There is no gravity in space",
      "B. It and its contents are in free fall around Earth",
      "C. It has escaped Earth's gravity",
      "D. It is beyond the atmosphere"
    ],
    answer: "B",
    explanation: "Gravity still acts, but the satellite and everything in it fall together, giving the sensation of weightlessness.",
    subtopic: "Satellites"
  },
  {
    question: "The gravitational field strength at a satellite's orbit is provided by:",
    options: [
      "A. Centrifugal force",
      "B. Earth's gravity (GM/r²)",
      "C. The satellite's engine",
      "D. Solar wind"
    ],
    answer: "B",
    explanation: "The field is g = GM/r² directed toward Earth's centre, supplying the centripetal acceleration.",
    subtopic: "Satellites"
  },
  {
    question: "Which statement about a geostationary orbit is correct?",
    options: [
      "A. Its period is 12 hours",
      "B. It rotates opposite to Earth's spin",
      "C. It has a period of 24 hours and lies in the equatorial plane",
      "D. It is at a height of about 100 km"
    ],
    answer: "C",
    explanation: "Geostationary means matching Earth's 24 h rotation and orbiting in the equatorial plane, at about 36,000 km altitude.",
    subtopic: "Satellites"
  },
  {
    question: "A satellite at height h above Earth's surface (Earth radius R) orbits at radius:",
    options: [
      "A. h",
      "B. R",
      "C. R + h",
      "D. R − h"
    ],
    answer: "C",
    explanation: "Orbital radius is measured from Earth's centre, so r = R + h.",
    subtopic: "Satellites"
  },
  {
    question: "Kepler's third law for satellites states:",
    options: [
      "A. T² ∝ r³",
      "B. T ∝ r",
      "C. T² ∝ 1/r³",
      "D. T ∝ r²"
    ],
    answer: "A",
    explanation: "T² = (4π²/GM) r³, so the square of the period is proportional to the cube of the orbital radius.",
    subtopic: "Satellites"
  },
  {
    question: "The kinetic energy of a satellite in a circular orbit of radius r is:",
    options: [
      "A. GMm/r",
      "B. GMm/2r",
      "C. 2GMm/r",
      "D. GMm/r²"
    ],
    answer: "B",
    explanation: "K = ½mv² = ½m(GM/r) = GMm/2r.",
    subtopic: "Satellites"
  },
  {
    question: "The total (mechanical) energy of a satellite in a stable circular orbit is:",
    options: [
      "A. Positive and equal to GMm/r",
      "B. Negative and equal to −GMm/2r",
      "C. Zero",
      "D. Equal to GMm/2r (positive)"
    ],
    answer: "B",
    explanation: "E = K + U = GMm/2r − GMm/r = −GMm/2r, which is negative (bound orbit).",
    subtopic: "Satellites"
  },
  {
    question: "To move a satellite to a higher orbit, its speed must first:",
    options: [
      "A. Decrease then increase to the new (lower) orbital speed",
      "B. Increase to raise it, then settle to a lower speed than before",
      "C. Stay constant",
      "D. Become zero"
    ],
    answer: "B",
    explanation: "A boost increases speed to climb; at the higher orbit the stable orbital speed is lower than at the lower orbit.",
    subtopic: "Satellites"
  },
  {
    question: "The minimum energy needed to put a satellite from Earth's surface into a distant (infinite) orbit is related to:",
    options: [
      "A. ½mv_escape²",
      "B. mv_escape",
      "C. GMm/R",
      "D. mgh"
    ],
    answer: "A",
    explanation: "Escape kinetic energy = ½mv_escape² = GMm/R is the minimum to reach infinity with zero speed.",
    subtopic: "Satellites"
  },
  {
    question: "Communication satellites are usually placed in geostationary orbit because:",
    options: [
      "A. It requires the least fuel",
      "B. They remain fixed relative to a ground station",
      "C. They travel fastest",
      "D. They avoid gravity"
    ],
    answer: "B",
    explanation: "Being fixed above one point on the equator lets a ground dish track them without moving.",
    subtopic: "Satellites"
  },
  {
    question: "A satellite orbits closer to Earth than the Moon. Compared to the Moon its orbital period is:",
    options: [
      "A. Longer",
      "B. Shorter",
      "C. The same",
      "D. Infinite"
    ],
    answer: "B",
    explanation: "By T² ∝ r³, a smaller orbital radius means a shorter period; the Moon's period is about 27 days.",
    subtopic: "Satellites"
  },
  {
    question: "If the radius of a satellite's orbit is doubled, its orbital speed becomes:",
    options: [
      "A. Doubled",
      "B. Halved",
      "C. Multiplied by 1/√2",
      "D. Unchanged"
    ],
    answer: "C",
    explanation: "v = √(GM/r), so doubling r multiplies v by 1/√2.",
    subtopic: "Satellites"
  },
  {
    question: "If the orbital radius is doubled, the period becomes:",
    options: [
      "A. 2 times",
      "B. √2 times",
      "C. 2√2 times",
      "D. 4 times"
    ],
    answer: "C",
    explanation: "T ∝ r^(3/2); doubling r multiplies T by 2^(3/2) = 2√2.",
    subtopic: "Satellites"
  },
  {
    question: "A satellite in a circular orbit has acceleration directed:",
    options: [
      "A. Tangentially forward",
      "B. Toward the centre of Earth",
      "C. Away from Earth",
      "D. Perpendicular to the orbital plane"
    ],
    answer: "B",
    explanation: "Centripetal acceleration always points toward the centre of the circular path (toward Earth).",
    subtopic: "Satellites"
  },
  {
    question: "The speed required for a low Earth circular orbit (near surface, g = 10, R ≈ 6.4×10⁶ m) is about:",
    options: [
      "A. 8 km/s",
      "B. 11.2 km/s",
      "C. 3 km/s",
      "D. 1 km/s"
    ],
    answer: "A",
    explanation: "v = √(gR) ≈ √(10 × 6.4×10⁶) ≈ √(6.4×10⁷) ≈ 8×10³ m/s = 8 km/s.",
    subtopic: "Satellites"
  },
  {
    question: "Earth's escape velocity at the surface is approximately:",
    options: [
      "A. 8 km/s",
      "B. 11.2 km/s",
      "C. 4 km/s",
      "D. 16 km/s"
    ],
    answer: "B",
    explanation: "v_escape = √2 × orbital speed ≈ 1.414 × 8 ≈ 11.2 km/s.",
    subtopic: "Satellites"
  },
  {
    question: "A rocket lifts off by the principle of:",
    options: [
      "A. Buoyancy",
      "B. Conservation of momentum (action-reaction / thrust)",
      "C. Magnetic levitation",
      "D. Capillary action"
    ],
    answer: "B",
    explanation: "Rocket thrust comes from expelling gas backward; by conservation of momentum the rocket moves forward (Newton's third law).",
    subtopic: "Rockets"
  },
  {
    question: "The thrust produced by a rocket engine equals:",
    options: [
      "A. Mass of fuel × g",
      "B. Rate of change of momentum of exhaust = v_rel × (dm/dt)",
      "C. Weight of the rocket",
      "D. Pressure only"
    ],
    answer: "B",
    explanation: "Thrust = exhaust speed relative to rocket × mass flow rate = v (dm/dt), from momentum conservation.",
    subtopic: "Rockets"
  },
  {
    question: "The rocket equation (Tsiolkovsky) relates change in velocity Δv to:",
    options: [
      "A. Δv = u ln(m₀/m_f)",
      "B. Δv = u (m₀ − m_f)",
      "C. Δv = u × m₀/m_f",
      "D. Δv = g × t"
    ],
    answer: "A",
    explanation: "Δv = u ln(m₀/m_f), where u is exhaust speed, m₀ initial mass, m_f final mass.",
    subtopic: "Rockets"
  },
  {
    question: "In the rocket equation Δv = u ln(m₀/m_f), m₀ is the:",
    options: [
      "A. Final mass",
      "B. Initial (fully fuelled) mass",
      "C. Mass of exhaust",
      "D. Mass of payload only"
    ],
    answer: "B",
    explanation: "m₀ is the initial total mass including fuel; m_f is the mass after fuel is burnt.",
    subtopic: "Rockets"
  },
  {
    question: "To achieve a larger Δv, a rocket should:",
    options: [
      "A. Carry less fuel",
      "B. Have a higher exhaust speed and a larger mass ratio m₀/m_f",
      "C. Be heavier overall",
      "D. Ignore gravity"
    ],
    answer: "B",
    explanation: "Δv grows with exhaust speed u and with ln(m₀/m_f), so faster exhaust and more fuel relative to dry mass help.",
    subtopic: "Rockets"
  },
  {
    question: "A multi-stage rocket is used primarily to:",
    options: [
      "A. Increase the number of engines",
      "B. Discard empty fuel tanks to improve the mass ratio",
      "C. Avoid using fuel",
      "D. Spin the rocket"
    ],
    answer: "B",
    explanation: "Dropping spent stages raises m₀/m_f for later stages, greatly increasing achievable Δv.",
    subtopic: "Rockets"
  },
  {
    question: "During liftoff, the rocket's initial acceleration is governed by:",
    options: [
      "A. Thrust only",
      "B. (Thrust − Weight)/Mass",
      "C. Weight only",
      "D. Air pressure"
    ],
    answer: "B",
    explanation: "Net upward force = thrust − mg, so a = (Thrust − mg)/m, which must exceed g to lift off.",
    subtopic: "Rockets"
  },
  {
    question: "A rocket can operate in the vacuum of space because:",
    options: [
      "A. It pushes against the air",
      "B. It carries its own oxidiser and works by momentum exchange with expelled gas",
      "C. Gravity disappears",
      "D. It uses solar sails only"
    ],
    answer: "B",
    explanation: "Rockets do not need an atmosphere; they expel mass backward and Conserve momentum, carrying their own oxidiser.",
    subtopic: "Rockets"
  },
  {
    question: "The exhaust gases leave a rocket backward. The rocket moves forward because:",
    options: [
      "A. The gases pull it",
      "B. Total momentum of rocket + gases is conserved",
      "C. Gravity pushes it",
      "D. Air resistance"
    ],
    answer: "B",
    explanation: "In the absence of external horizontal force, the backward momentum of the gas is balanced by forward momentum of the rocket.",
    subtopic: "Rockets"
  },
  {
    question: "A rocket has exhaust speed 2 km/s and mass ratio m₀/m_f = e (≈2.72). Its Δv is about:",
    options: [
      "A. 0.54 km/s",
      "B. 2 km/s",
      "C. 5.4 km/s",
      "D. 1 km/s"
    ],
    answer: "B",
    explanation: "Δv = u ln(m₀/m_f) = 2 × ln(e) = 2 × 1 = 2 km/s.",
    subtopic: "Rockets"
  },
  {
    question: "If a rocket's mass ratio doubles from e to e², its Δv:",
    options: [
      "A. Doubles",
      "B. Quadruples",
      "C. Is unchanged",
      "D. Halves"
    ],
    answer: "A",
    explanation: "Δv ∝ ln(mass ratio); ln(e²) = 2 = 2×ln(e), so Δv doubles.",
    subtopic: "Rockets"
  },
  {
    question: "The term 'specific impulse' of a rocket is a measure of:",
    options: [
      "A. Total thrust",
      "B. Thrust per unit weight-flow of propellant (efficiency)",
      "C. Rocket length",
      "D. Fuel temperature"
    ],
    answer: "B",
    explanation: "Specific impulse is thrust per unit weight rate of propellant consumption; higher means more efficient use of fuel.",
    subtopic: "Rockets"
  },
  {
    question: "Rockets are launched eastward near the equator when possible because:",
    options: [
      "A. The wind helps",
      "B. Earth's rotation gives a free initial eastward velocity",
      "C. It is warmer",
      "D. Gravity is weaker there"
    ],
    answer: "B",
    explanation: "Earth's spin adds eastward speed (greatest at the equator), reducing the Δv the rocket must supply.",
    subtopic: "Rockets"
  },
  {
    question: "The force that a rocket must overcome at launch is mainly:",
    options: [
      "A. Magnetic force",
      "B. Its own weight (gravity)",
      "C. Centrifugal force",
      "D. Nuclear force"
    ],
    answer: "B",
    explanation: "At rest the dominant opposing force is the rocket's weight mg; thrust must exceed it to accelerate upward.",
    subtopic: "Rockets"
  },
  {
    question: "As a rocket burns fuel, its acceleration (with constant thrust) tends to:",
    options: [
      "A. Decrease",
      "B. Increase because its mass decreases",
      "C. Stay zero",
      "D. Become negative"
    ],
    answer: "B",
    explanation: "a = (Thrust − mg)/m; as m falls, acceleration increases for roughly constant thrust.",
    subtopic: "Rockets"
  },
  {
    question: "A satellite's orbit lies within the Earth's gravitational field. This means gravity on the satellite is:",
    options: [
      "A. Zero",
      "B. Still present and provides centripetal force",
      "C. Replaced by centrifugal force",
      "D. Negligible"
    ],
    answer: "B",
    explanation: "Gravity is very much present in orbit; it is exactly what bends the path into a circle.",
    subtopic: "Satellites"
  },
  {
    question: "The velocity needed to keep a satellite in a circular orbit is called:",
    options: [
      "A. Escape velocity",
      "B. Orbital (circular) velocity",
      "C. Terminal velocity",
      "D. Drift velocity"
    ],
    answer: "B",
    explanation: "The required speed for a stable circular orbit at a given radius is the orbital (circular) velocity.",
    subtopic: "Satellites"
  },
  {
    question: "A satellite moving from a circular orbit to an elliptical orbit requires:",
    options: [
      "A. No change",
      "B. A change (boost or brake) in speed at some point",
      "C. Turning off gravity",
      "D. Increasing its mass"
    ],
    answer: "B",
    explanation: "Altering the speed at a point changes the energy, converting the circular orbit into an ellipse.",
    subtopic: "Satellites"
  },
  {
    question: "Geostationary satellites are used for TV broadcasting because:",
    options: [
      "A. They move rapidly across the sky",
      "B. Fixed position lets fixed dishes receive signals",
      "C. They are closest to Earth",
      "D. They have the highest speed"
    ],
    answer: "B",
    explanation: "Their fixed position above the equator means a stationary dish can track them continuously.",
    subtopic: "Satellites"
  },
  {
    question: "If Earth's mass doubled but its radius stayed the same, escape velocity would:",
    options: [
      "A. Halve",
      "B. Increase by √2",
      "C. Double",
      "D. Stay the same"
    ],
    answer: "B",
    explanation: "v_escape = √(2GM/R) ∝ √M, so doubling M multiplies escape velocity by √2.",
    subtopic: "Satellites"
  },
  {
    question: "A rocket expels gas at 3 km/s. To reach orbital speed ~8 km/s with mass ratio e^3 (≈20), Δv is about:",
    options: [
      "A. 3 km/s",
      "B. 6 km/s",
      "C. 9 km/s",
      "D. 24 km/s"
    ],
    answer: "C",
    explanation: "Δv = u ln(m₀/m_f) = 3 × 3 = 9 km/s, enough for low Earth orbit after losses.",
    subtopic: "Rockets"
  },
  {
    question: "The centre of mass of a rocket-plus-exhaust system:",
    options: [
      "A. Moves forward with the rocket",
      "B. Follows a path determined only by external forces (e.g. gravity)",
      "C. Stays at the launch pad",
      "D. Moves backward"
    ],
    answer: "B",
    explanation: "Internal exhaust forces do not move the total centre of mass; only external forces (gravity, drag) do.",
    subtopic: "Rockets"
  },
  {
    question: "Which is TRUE about weightlessness in orbit?",
    options: [
      "A. Gravity is zero",
      "B. The astronaut and capsule accelerate toward Earth at the same rate",
      "C. The rocket engine must always fire",
      "D. Mass becomes zero"
    ],
    answer: "B",
    explanation: "Both fall together under the same gravitational acceleration, so no normal force (apparent weight) acts.",
    subtopic: "Satellites"
  },
  {
    question: "A satellite at the geostationary radius has a period equal to:",
    options: [
      "A. 12 hours",
      "B. 24 hours",
      "C. 1 hour",
      "D. 27 days"
    ],
    answer: "B",
    explanation: "Geostationary period matches Earth's rotation: 24 hours (one sidereal day).",
    subtopic: "Satellites"
  },
  {
    question: "Compared with a chemically fuelled rocket, an ion thruster produces:",
    options: [
      "A. Very high thrust but low efficiency",
      "B. Very low thrust but high exhaust speed / efficiency",
      "C. No thrust",
      "D. Thrust only in atmosphere"
    ],
    answer: "B",
    explanation: "Ion thrusters expel ions at very high speed, giving large specific impulse (high efficiency) but small thrust.",
    subtopic: "Rockets"
  },
  {
    question: "The minimum speed to leave Earth permanently (from surface) is the:",
    options: [
      "A. Orbital speed",
      "B. Escape velocity",
      "C. Terminal velocity",
      "D. Drift velocity"
    ],
    answer: "B",
    explanation: "Escape velocity is the minimum speed needed to overcome Earth's gravity and not return.",
    subtopic: "Satellites"
  },
  {
    question: "A satellite in elliptical orbit moves fastest when it is:",
    options: [
      "A. Farthest from Earth (apogee)",
      "B. Closest to Earth (perigee)",
      "C. Always at the same speed",
      "D. At the equator"
    ],
    answer: "B",
    explanation: "By conservation of angular momentum and energy, it moves fastest at perigee (closest approach).",
    subtopic: "Satellites"
  }
];

module.exports = questions;
