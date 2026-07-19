export default [
  {
    heading: "Speed through the cycle",
    body: `In S.H.M. the speed is not constant — it varies smoothly during each oscillation. The body is fastest at the equilibrium (centre) position and momentarily zero at the two extremes, where it reverses direction. The speed at displacement x is given by v = ω√(A² − x²), where A is the amplitude and ω the angular frequency. At the centre (x = 0) this gives the maximum speed v_max = ωA; at either extreme (x = A) it gives v = 0, exactly as the to-and-fro picture predicts.`,
  },
  {
    heading: "Acceleration through the cycle",
    body: `The acceleration is the mirror image of the speed. It is zero at the equilibrium position and maximum at the extremes, and it always points back toward the centre. In magnitude, a = ω²x, so the maximum acceleration is a_max = ω²A at the extremes and a = 0 at the centre. This reverse relationship — speed largest where acceleration is zero, acceleration largest where speed is zero — is the defining feature that makes the motion simple harmonic rather than uniform or free-fall.`,
  },
  {
    heading: "Relating linear and angular quantities",
    body: `Using the reference circle, a point moving in a circle of radius A with angular speed ω has linear (tangential) speed v = rω and centripetal acceleration a = rω² toward the centre. The horizontal projection of that same point is the SHM body. So the SHM speed and acceleration are just the projected parts of the circular motion: the SHM acceleration magnitude is ω²x (with x = A cos θ), and the SHM speed is ω√(A² − x²). Linear and angular speeds/accelerations are thus linked by the radius, which here is the amplitude A.`,
  },
  {
    heading: "Phase relationships between x, v and a",
    body: `Displacement, velocity and acceleration are not in step. If x = A cos(ωt), then v = −Aω sin(ωt) and a = −Aω² cos(ωt) = −ω²x. Velocity is a quarter-cycle (90°) ahead of displacement, and acceleration is a quarter-cycle ahead of velocity — so acceleration is half a cycle (180°) out of phase with displacement (they always have opposite signs). This phase pattern is why, when the body is far out (large x), it is slowing down (a opposite to v) and about to turn back.`,
  },
  {
    heading: "Maximum speed and maximum acceleration",
    body: `Two quantities are worth memorising: v_max = ωA and a_max = ω²A. They let you compare different oscillators quickly. A larger amplitude gives both a larger top speed and a larger top acceleration, while a larger ω (stiffer spring, shorter pendulum) raises the top speed linearly but the top acceleration as ω². For example, doubling ω doubles v_max but quadruples a_max. These maxima occur at the centre and at the extremes respectively, never at the same instant.`,
  },
  {
    heading: "Worked example — speed at a given displacement",
    body: `A body in S.H.M. has amplitude A = 0.05 m and angular frequency ω = 10 rad s⁻¹. Its maximum speed is v_max = ωA = 10 × 0.05 = 0.50 m s⁻¹, and its maximum acceleration is a_max = ω²A = 100 × 0.05 = 5.0 m s⁻². At displacement x = 0.03 m the speed is v = ω√(A² − x²) = 10√(0.0025 − 0.0009) = 10√0.0016 = 10 × 0.040 = 0.40 m s⁻¹. The acceleration there is a = ω²x = 100 × 0.03 = 3.0 m s⁻², directed toward the centre.`,
  },
  {
    heading: "Why acceleration depends on position, not speed",
    body: `It is easy to confuse "fast" with "strongly accelerated," but S.H.M. separates them. At the centre the body is moving fastest yet feels no acceleration (net force is zero there — it is the equilibrium point). At the extremes it is instantaneously at rest yet feels the largest acceleration, which is what kicks it back. This is unlike projectile motion, where acceleration (g) is constant everywhere. In S.H.M. the acceleration is a position-dependent restoring pull, which is precisely why the motion repeats.`,
  },
  {
    heading: "Graphical picture of v and a versus time",
    body: `If you plot x, v and a against time, all three are sinusoids of the same period but shifted. The displacement is a cosine, the velocity is a sine (shifted 90°), and the acceleration is a negative cosine (shifted 180° from x). The velocity curve crosses zero exactly where the displacement curve peaks (the extremes), and the acceleration curve peaks where displacement peaks but points the other way. These three linked sine waves are the practical signature you would see on a datalogger tracing a pendulum or spring.`,
  },
];
