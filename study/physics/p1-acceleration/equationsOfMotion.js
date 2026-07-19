export default [
  {
    heading: "The conditions for the equations",
    body: "The four equations of motion apply only to motion in a straight line with CONSTANT (uniform) acceleration. The symbols are: u = initial velocity, v = final velocity, a = acceleration, t = time, s = displacement. If acceleration varies, or the path curves, these equations must not be used — you must fall back to gradient/area methods or calculus. Always state the constant-acceleration assumption before applying them, and pick a consistent sign convention for direction.",
  },
  {
    heading: "Equation 1 — v = u + at",
    body: "This comes straight from the definition of acceleration: a = (v − u)/t, rearranged to v = u + at. It links the four quantities u, v, a and t, and is used when you know three of them and seek the fourth (typically v, a or t). Example: a body starts from rest (u = 0) and accelerates at 3 m s⁻² for 4 s: v = 0 + 3 × 4 = 12 m s⁻¹. It is the simplest and most frequently used of the four.",
  },
  {
    heading: "Equation 2 — s = ut + ½at²",
    body: "Starting from v = u + at and integrating (or summing displacement over time) gives s = ut + ½at². It gives displacement directly from u, a and t, without needing v. Example: u = 0, a = 4 m s⁻², t = 5 s → s = 0 + ½ × 4 × 25 = 50 m. Notice the ½at² term: displacement grows with the SQUARE of time under constant acceleration, which is why falling objects cover rapidly increasing distances each second.",
  },
  {
    heading: "Equation 3 — v² = u² + 2as",
    body: "This equation links u, v, a and s without involving time t, so it is ideal when t is unknown or unwanted. It is derived by eliminating t between v = u + at and s = ut + ½at². Example: a car at u = 10 m s⁻¹ brakes at a = −2 m s⁻² until v = 0. Then 0 = 10² + 2(−2)s → s = 100/4 = 25 m stopping distance. Whenever the question gives speeds and acceleration but not time, reach for this one.",
  },
  {
    heading: "Equation 4 — s = ½(u + v)t and s = vt − ½at²",
    body: "The average-velocity form s = ½(u + v)t works whenever u and v are known and acceleration need not be found; it is also the trapezium area under the v–t graph. A companion, from substituting u = v − at into equation 2, is s = vt − ½at². Example: u = 4, v = 16, t = 6 → s = ½ × 20 × 6 = 60 m. These are handy cross-checks against the other two equations.",
  },
  {
    heading: "Choosing the right equation",
    body: "Select the equation that contains the quantity you know and the one you want, with as few extras as possible. If time is missing, use v² = u² + 2as; if acceleration is missing, use s = ½(u + v)t; if you have u, a, t and want s, use s = ut + ½at². List your knowns first, then match. This systematic check prevents grabbing the wrong formula and is the habit examiners reward.",
  },
  {
    heading: "Sign convention and direction",
    body: "Because motion is along a line, direction is handled with signs: choose one direction as positive and stick to it for u, v, a and s. Gravity problems often take upward as positive, making g negative; or downward positive, making g positive. A negative result for s or v simply means 'opposite to your chosen positive direction', not an error. Consistency of signs is the single most important discipline when using these equations.",
  },
  {
    heading: "Worked example — using s = ut + ½at²",
    body: "A car starts from rest and accelerates uniformly at 3 m s⁻² for 4 s. With u = 0, a = 3, t = 4: s = 0×4 + ½ × 3 × 4² = ½ × 3 × 16 = 24 m. The car travels 24 m. The ½at² term alone gives the answer because u = 0; if it had started at 5 m s⁻¹ the ut term (5 × 4 = 20 m) would add on. Always include the ut term unless the body starts from rest.",
  },
  {
    heading: "Worked example — using v² = u² + 2as",
    body: "A train moving at 20 m s⁻¹ applies brakes producing a = −0.5 m s⁻² until it stops (v = 0). Using 0² = 20² + 2(−0.5)s → 0 = 400 − s → s = 400 m. The train needs 400 m to stop. Note how a negative acceleration with positive u neatly yields a positive distance. This equation spared us from first computing the stopping time, which would have been an unnecessary extra step.",
  },
  {
    heading: "Worked example — using s = ½(u + v)t",
    body: "A cyclist uniformly changes speed from 4 m s⁻¹ to 16 m s⁻¹ in 6 s. Displacement s = ½(4 + 16) × 6 = ½ × 20 × 6 = 60 m. This is the trapezium area under the v–t graph, confirming the graphical method. The average speed is ½(4 + 16) = 10 m s⁻¹, and 10 × 6 = 60 m gives the same result. Recognising 'average speed × time' is a quick mental route to the answer.",
  },
  {
    heading: "Common pitfalls to avoid",
    body: "Three mistakes dominate: (1) using the equations when acceleration is NOT constant — check the graph or wording first; (2) mixing up s (displacement) with distance when motion reverses direction; (3) sign errors from switching direction mid-problem. Also remember u = 0 means 'starting from rest', v = 0 means 'coming to rest', and units must be consistent (use m, s, m s⁻¹, m s⁻² — convert km/h or cm as needed before substituting).",
  },
];
