export default [
  {
    heading: "What simple harmonic motion is",
    body: `Simple harmonic motion (S.H.M.) is a special kind of to-and-fro (oscillatory) motion in which the acceleration of the body is always directed toward a fixed equilibrium position and is directly proportional to its displacement from that position. In symbols: a = −ω²x, where x is the displacement, a is the acceleration, and ω (omega) is a constant called the angular frequency. The minus sign is crucial — it tells us the acceleration always points back toward the centre, opposing the displacement.`,
  },
  {
    heading: "The restoring force",
    body: `Because acceleration is proportional to displacement, the force causing it is also proportional to displacement and points toward equilibrium: F = −kx. This is Hooke's law for a spring, where k is the force constant. Using F = ma we get ma = −kx, so a = −(k/m)x. Comparing with a = −ω²x shows ω² = k/m, or ω = √(k/m). Any system whose net force obeys F = −kx (to a good approximation) executes simple harmonic motion; the restoring force is what keeps the body oscillating instead of flying off.`,
  },
  {
    heading: "Illustration by the reference circle",
    body: `The clearest picture of S.H.M. comes from uniform circular motion. Imagine a point P moving round a circle of radius A with constant angular speed ω. If you project P onto a fixed diameter (drop a perpendicular), the shadow's up-and-down position is x = A cos(ωt + φ). This projected motion is exactly simple harmonic. The radius A becomes the amplitude, the angular speed ω of the circle becomes the angular frequency of the oscillation, and the phase angle φ sets where the motion starts. This circle is called the reference (or auxiliary) circle.`,
  },
  {
    heading: "The displacement equation",
    body: `From the reference circle the displacement at time t is x = A cos(ωt + φ) (or A sin(ωt + φ), depending on the chosen start). A is the amplitude and φ is the phase constant. If the body starts at the extreme, x = A cos(ωt); if it starts at the centre moving outward, x = A sin(ωt). The phase angle records the initial conditions and lets you match the equation to a real experiment. Note that x is measured from the equilibrium position, not from one end of the swing.`,
  },
  {
    heading: "The defining hallmark of S.H.M.",
    body: `Because the acceleration grows with distance from the centre and always pulls back, a body in S.H.M. moves fastest at the equilibrium position and slows to a momentary stop at each extreme before reversing. This is the opposite of, say, a falling body: here speed and acceleration are out of step. The fastest-at-centre / stopped-at-extremes behaviour is the signature of simple harmonic motion and is visible in a swinging pendulum or a bouncing mass on a spring.`,
  },
  {
    heading: "Systems that demonstrate S.H.M.",
    body: `The exam syllabus lists several devices that illustrate S.H.M.: the simple pendulum (a small bob on a light string, for small swings), a mass on a helical (spiral) spring, a loaded test-tube floating and oscillating vertically in a liquid, and a bifilar suspension (a bar hung by two parallel strings). For each, the restoring force is proportional to displacement only over a limited range, so the motion is simple harmonic only for small amplitudes. The pendulum and spring are the standard classroom examples used to measure g and k.`,
  },
  {
    heading: "Conditions for a motion to be simple harmonic",
    body: `A motion is simple harmonic only if two conditions both hold: (1) the net force (and therefore acceleration) is always directed toward a single fixed equilibrium point, and (2) that force/acceleration is proportional to the displacement from equilibrium. If the force is constant (like gravity near Earth) the motion is not SHM; if the force is not toward a fixed point, it is not SHM either. These conditions are what make the motion perfectly periodic and predictable, with a period independent of amplitude for the ideal case.`,
  },
  {
    heading: "Worked example — finding ω from a and x",
    body: `A body executing S.H.M. has an acceleration of 4.0 m s⁻² when it is displaced 0.020 m from equilibrium. Using a = ω²x (ignoring the sign, which only shows direction), ω² = a/x = 4.0 / 0.020 = 200, so ω = √200 ≈ 14.1 rad s⁻¹. The angular frequency is about 14 rad/s. If the amplitude were 0.05 m, the maximum acceleration would be a_max = ω²A = 200 × 0.05 = 10 m s⁻². This shows how the same ω links every displacement to its acceleration.`,
  },
  {
    heading: "Ideal S.H.M. versus real oscillations",
    body: `The equations above describe ideal S.H.M., which assumes no loss of energy — the amplitude stays constant forever. Real oscillators lose energy to air resistance, internal friction and sound, so their amplitude slowly decays; this is damping. Under light damping the motion is still approximately simple harmonic (same period, shrinking amplitude). The ideal model is the foundation: exam questions and the pendulum/spring experiments treat the motion as SHM, and damping is introduced only as a secondary effect.`,
  },
];
