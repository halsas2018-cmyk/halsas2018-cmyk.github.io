export default [
  {
    heading: "Amplitude (A)",
    body: `The amplitude A of an oscillation is the maximum displacement of the body from its equilibrium position — the greatest distance it reaches on either side of the centre. It is a length, measured in metres. Amplitude sets how far the body swings, and for an ideal (undamped) oscillator it stays constant. In the reference circle, A is simply the radius of the circle. Note that amplitude is not the total distance travelled in a cycle (that is 4A); it is the one-sided extreme distance from the centre.`,
  },
  {
    heading: "Period (T) and frequency (f)",
    body: `The period T is the time taken for one complete cycle (e.g. centre → right extreme → centre → left extreme → centre). It is measured in seconds. The frequency f is the number of complete cycles per second, f = 1/T, and its unit is the hertz (Hz), where 1 Hz = 1 cycle per second. They are reciprocals: a long period means low frequency. Angular frequency ω is related by ω = 2π/T = 2πf, so ω has units of rad s⁻¹ and is not in hertz.`,
  },
  {
    heading: "The simple pendulum formula",
    body: `For a simple pendulum (a small bob on a light inextensible string, swinging with a small amplitude), the period is T = 2π√(l/g), where l is the length of the string and g is the acceleration due to gravity. The derivation is not required for the exam, but the result is: the period depends on length and g, and is independent of the bob's mass and (for small angles) the amplitude. Doubling the length multiplies the period by √2; to double the period you must quadruple the length.`,
  },
  {
    heading: "The helical spring (mass–spring) formula",
    body: `For a mass m hanging from or attached to a helical spring of force constant k, the period is T = 2π√(m/k). Here a larger mass makes the oscillation slower (period grows with √m), while a stiffer spring (larger k) makes it faster (period shrinks with 1/√k). Like the pendulum, the period does not depend on the amplitude for ideal small oscillations. Both formulas share the shape T = 2π√(something/stiffness), reflecting the same underlying SHM physics.`,
  },
  {
    heading: "Amplitude does not affect the period",
    body: `A remarkable property of ideal S.H.M. is that the period is independent of amplitude — the motion is isochronous. Whether the pendulum swings a little or a lot (within the small-angle approximation), one swing takes the same time. This is why pendulum clocks keep time and why a spring's period is set by m and k alone. In real life, very large amplitudes break the small-angle assumption and the period does increase slightly, but exam questions treat the ideal independence as exact.`,
  },
  {
    heading: "Measuring g with a simple pendulum",
    body: `Rearranging T = 2π√(l/g) gives g = 4π²l/T². In the lab you measure the length l (from the support to the centre of the bob) and the period T (best found by timing, say, 20 swings and dividing, to reduce reaction-time error). The syllabus treats the principle but not the derivation. Because T is squared, a small timing error is amplified, so multiple swings and repeated trials improve accuracy. This is a standard exam practical for determining g.`,
  },
  {
    heading: "Worked example — pendulum period and frequency",
    body: `A simple pendulum has length l = 0.80 m and g = 9.8 m s⁻². Its period is T = 2π√(l/g) = 2π√(0.80/9.8) = 2π√0.0816 ≈ 2π × 0.286 = 1.80 s. The frequency is f = 1/T ≈ 1/1.80 = 0.56 Hz, and the angular frequency ω = 2πf ≈ 3.5 rad s⁻¹. So the bob completes just over half a swing per second. A shorter pendulum, say 0.20 m, would give T ≈ 0.90 s — half the period, confirming T ∝ √l.`,
  },
  {
    heading: "Worked example — finding g from a pendulum",
    body: `In an experiment a pendulum of length l = 0.994 m is timed over 20 oscillations, giving a total of 40.0 s, so T = 40.0/20 = 2.00 s. Using g = 4π²l/T² = 4π² × 0.994 / (2.00)² = 39.48 × 0.994 / 4.00 ≈ 39.24/4.00 = 9.81 m s⁻². This matches the accepted value of g near Earth's surface, showing the pendulum method works. The squaring of T means the 2.00 s must be known precisely for an accurate g.`,
  },
  {
    heading: "Worked example — mass on a spring",
    body: `A mass m = 0.20 kg is attached to a spring of force constant k = 50 N m⁻¹. The period is T = 2π√(m/k) = 2π√(0.20/50) = 2π√0.0040 = 2π × 0.0632 = 0.397 s, so the frequency is f = 1/T ≈ 2.52 Hz. If the mass were quadrupled to 0.80 kg, the period would double to about 0.79 s (since T ∝ √m). This contrasts with the pendulum, where changing the "mass" (the bob) leaves T unchanged.`,
  },
  {
    heading: "Connecting T, f, ω through one example",
    body: `Suppose an oscillator completes 30 cycles in 15 s. Its frequency is f = 30/15 = 2.0 Hz, its period is T = 1/f = 0.50 s, and its angular frequency is ω = 2πf = 2π × 2.0 ≈ 12.6 rad s⁻¹. These three numbers describe the same timing from different angles: how often (f), how long per cycle (T), and the rate of angle swept in the reference circle (ω). Always keep the units straight — T in s, f in Hz, ω in rad s⁻¹ — to avoid mixing them up in formulas like a_max = ω²A.`,
  },
];
