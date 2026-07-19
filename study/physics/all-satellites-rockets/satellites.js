export default [
  {
    heading: "What a satellite is",
    body: "A satellite is any body that orbits a larger one under the pull of gravity. Natural satellites include the Moon orbiting Earth and the Galilean moons orbiting Jupiter. Artificial satellites are human-made objects placed into orbit to relay communications, forecast weather, navigate, observe Earth and study space. In every case the satellite is 'falling' around the parent body rather than being held up by anything physical.",
  },
  {
    heading: "Natural versus artificial satellites",
    body: "Natural satellites formed with or were captured by their parent planet over astronomical time, while artificial ones are launched by rockets and placed into chosen orbits. Both obey the same laws of motion and gravitation. The distinction matters because artificial satellites can be positioned, oriented and even de-orbited deliberately, whereas natural ones follow paths set by their formation history.",
  },
  {
    heading: "Orbit is continuous free fall",
    body: "A satellite is in a state of continuous free fall: gravity pulls it constantly toward Earth, but because it also has a large sideways (tangential) speed, it keeps 'missing' the surface and traces a curved path instead of crashing. If gravity were suddenly switched off, the satellite would fly off in a straight line tangent to its orbit. This is why astronauts in orbit feel weightless — they and their craft are falling together at the same rate.",
  },
  {
    heading: "Gravity provides the centripetal force",
    body: "For a circular orbit the gravitational attraction supplies exactly the centripetal force needed to bend the satellite's path into a circle. Setting Newton's law of gravitation equal to the centripetal requirement gives GMm/r² = mv²/r, which rearranges to v = √(GM/r). Here G is the gravitational constant, M the mass of the planet, m the satellite's mass and r its orbital radius. The satellite's own mass cancels out, so orbital speed depends only on the planet's mass and the orbit's height.",
  },
  {
    heading: "Orbital speed, radius and period are linked",
    body: "Because v = √(GM/r), a satellite in a LOWER orbit must travel FASTER, while one higher up moves more slowly. The orbital period T is the time for one revolution: combining v = 2πr/T with v = √(GM/r) yields T² = (4π²/GM) r³ — Kepler's third law. This means the period grows rapidly with height; doubling the orbital radius increases the period by about 2.83 times.",
  },
  {
    heading: "Worked example — speed of a low orbit",
    body: "For a satellite just above Earth's surface (r ≈ R = 6.4 × 10⁶ m), using M = 6.0 × 10²⁴ kg and G = 6.67 × 10⁻¹¹ N m² kg⁻²: v = √(GM/R) = √(6.67×10⁻¹¹ × 6.0×10²⁴ / 6.4×10⁶) ≈ √(6.26×10⁷) ≈ 7.9 × 10³ m/s. So a near-Earth satellite moves at about 7.9 km/s — roughly 28,000 km/h — completing an orbit in about 90 minutes.",
  },
  {
    heading: "Geostationary (parking) orbit",
    body: "A geostationary satellite orbits directly above the equator with a period of 24 hours, so it appears fixed over one point on Earth's surface. Such a 'parking orbit' must be circular, equatorial and at a radius of about 42,200 km (≈35,800 km altitude). Because the dish on the ground need not track it, geostationary satellites are ideal for TV broadcast, weather monitoring and fixed communications. Polar (near-polar) satellites instead sweep over the whole globe and are used for mapping and reconnaissance.",
  },
  {
    heading: "Energy of a satellite in orbit",
    body: "A satellite has both kinetic energy (½mv²) and gravitational potential energy, which for an orbit is negative because gravity is attractive. In a stable circular orbit the total mechanical energy E = −GMm/(2r); the kinetic energy is half the magnitude of the (negative) potential energy. To raise a satellite to a higher orbit you must do work (add energy), which paradoxically slows it down even as its total energy increases.",
  },
  {
    heading: "Escape velocity and bound vs free orbits",
    body: "If a satellite's speed reaches escape velocity, v = √(2GM/R) ≈ 11.2 km/s for Earth, gravity can no longer hold it and it follows an open (unbound) path, leaving the planet entirely. Below this, the object is gravitationally bound into a closed orbit. Rockets must therefore supply enough speed to reach orbit (~7.9 km/s) and far more to escape or travel to other planets — the reason launch vehicles are so large and powerful.",
  },
  {
    heading: "Uses of satellites",
    body: "Satellites underpin modern life: communication satellites carry telephone, internet and television signals across oceans; navigation systems (GPS, GLONASS, Galileo) provide global positioning; weather satellites track storms and climate; observation satellites survey crops, forests, disasters and military activity; and scientific satellites study the Sun, stars and cosmic radiation. They are also used for search-and-rescue, banking time-synchronisation and remote education.",
  },
];
