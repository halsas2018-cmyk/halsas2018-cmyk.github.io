export default [
  {
    heading: "What g means",
    body: "The symbol g is the gravitational field strength (intensity) near Earth. It is defined as the gravitational force per unit mass, g = F/m, and numerically equals the acceleration of any freely falling body. Near Earth's surface g ≈ 9.8 m/s² (often taken as 10 m/s² in rough work). Because it is force per mass, its units are N/kg, which are exactly equivalent to m/s². A body in free fall accelerates at g regardless of its own mass — that is the meaning of 'g as field intensity'.",
  },
  {
    heading: "Weight and g",
    body: "Weight is the gravitational force on a body: W = mg. If g = 9.8 N/kg, a 5 kg object weighs 49 N. Doubling the mass doubles the weight but not g, because g is a property of the Earth's field at that point, not of the object. Apparent weight changes in a lift (accelerating up increases it, down decreases it) but the true g is unchanged. Weight is a force (vector), whereas mass is an invariant amount of matter (scalar).",
  },
  {
    heading: "g is nearly uniform near the surface",
    body: "Within a few kilometres of Earth's surface, g is almost constant because the distance to Earth's centre (≈ 6400 km) changes very little. That is why all objects, heavy or light, fall at the same rate in a vacuum — the famous result from Galileo. The uniformity is an approximation: over mountains or deep mines g does vary measurably. For most school problems you treat g as a constant 9.8 m/s², but you should know it is only locally uniform.",
  },
  {
    heading: "Deriving g = GM/R²",
    body: "Newton's law gives the force on a mass m at Earth's surface as F = G M m / R², where M and R are Earth's mass and radius. But also F = mg. Equating them, mg = G M m / R², so g = G M / R². This links the tiny universal constant G to the everyday value 9.8 m/s² through Earth's huge mass. It also shows g depends on the planet: the Moon's smaller M and R give g ≈ 1.6 m/s². This is the key relationship between 'G' and 'g'.",
  },
  {
    heading: "Variation of g with height",
    body: "As you rise above the surface to height h, your distance from Earth's centre becomes R + h, so g(h) = G M / (R + h)². Because this is an inverse-square relation, g falls off gradually: at h = R (one Earth-radius up) g is only one-quarter of its surface value. For small h ≪ R you can approximate g(h) ≈ g₀(1 − 2h/R). Satellites orbit where g is much reduced but not zero — that is why they keep falling toward Earth rather than flying off.",
  },
  {
    heading: "Variation of g with depth",
    body: "Descending below the surface to depth d, only the mass inside radius r = R − d attracts you (the shell theorem shows outer shells contribute no net force). Since that enclosed mass scales as r³, g(d) = g₀ (r/R) = g₀(1 − d/R). So g decreases linearly with depth and becomes zero at Earth's centre. This is opposite to the height case and explains why gravity is weakest at the core. The linear law holds for a sphere of uniform density.",
  },
  {
    heading: "Variation with latitude and altitude",
    body: "g is not quite the same everywhere on Earth. At the equator it is slightly smaller (~9.78) than at the poles (~9.83) for two reasons: Earth's rotation produces an outward centrifugal effect that opposes gravity most at the equator, and Earth is an oblate spheroid (bulged at the equator) so the poles are closer to the centre. Altitude further reduces g. These differences are small but measurable and matter in precise surveying and pendulum clocks.",
  },
  {
    heading: "Measuring g with a pendulum",
    body: "A simple pendulum of length L has period T = 2π√(L/g), so rearranging gives g = 4π²L / T². By timing many swings (to reduce reaction-time error) and measuring L from the pivot to the bob's centre, students determine g in the lab. This method needs no electronic sensors and was historically how g was mapped globally. Because T depends on √L, doubling L multiplies T by √2. The formula assumes small oscillations and a point-mass bob.",
  },
  {
    heading: "Measuring g by free fall",
    body: "Dropping a ball through a known distance and timing it with light gates gives g from s = ½gt², so g = 2s/t². Using two gates separates start and stop accurately and removes the 'human reaction' error of a stopwatch. Electronic timers can resolve g to better than 1%. A tilted air-track or ticker-timer variant works too. Free-fall measurement directly uses g as acceleration, matching its definition as the acceleration of free fall.",
  },
  {
    heading: "Units and the N/kg = m/s² identity",
    body: "g is quoted in m/s², but since g = F/m the unit is equally N/kg. These are identical: 1 N/kg = 1 (kg·m/s²)/kg = 1 m/s². This duality is useful — use m/s² when talking about acceleration, N/kg when talking about force per mass (field strength). Exam questions may ask for g in either; both mean the same physical quantity. Always carry the unit through calculations to avoid confusion between 'acceleration' and 'field' interpretations.",
  },
  {
    heading: "Worked example — g on another planet",
    body: "A planet has mass 2.0 × 10²⁴ kg and radius 5.0 × 10⁶ m. Using g = G M / R² with G = 6.67 × 10⁻¹¹: g = (6.67×10⁻¹¹ × 2.0×10²⁴) / (5.0×10⁶)² = 1.334×10¹⁴ / 2.5×10¹³ = 5.34 m/s². So a 10 kg object weighs 53.4 N there, about half its Earth weight. This shows how g is computed from first principles for any spherical body. The same formula applies to moons, stars and exoplanets.",
  },
  {
    heading: "Summary — g as the link",
    body: "g ties together force, acceleration and the universal law: it is the local value of Earth's gravitational field, equal to GM/R², nearly constant near the surface, and the acceleration of free fall. Knowing g lets you convert mass to weight, predict projectile motion, and analyse orbits. Its small variations with height, depth and latitude are explained by the inverse-square law and Earth's rotation. Mastering g is the foundation for the rest of the gravitational-field topic.",
  },
];
