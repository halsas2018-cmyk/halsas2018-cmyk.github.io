export default [
  {
    heading: "Uniform acceleration defined",
    body: "Uniform (constant) acceleration means the velocity changes by equal amounts in equal intervals of time. Mathematically the acceleration a is the same at every instant, so the velocity–time graph is a straight line. A classic example is a body falling freely near Earth's surface, where a = g ≈ 9.8 m s⁻². Another is a car whose brakes apply a steady, unvarying force. When acceleration is uniform we can use the four equations of motion directly.",
  },
  {
    heading: "Non-uniform acceleration defined",
    body: "Non-uniform acceleration means the rate of change of velocity varies with time, so equal time intervals do not produce equal velocity changes. On a velocity–time graph this appears as a curve, not a straight line. Real traffic, a rocket burning fuel, and an oscillating spring mass all show non-uniform acceleration. For such motion the simple equations of uniform acceleration no longer apply, and we instead use average values or instantaneous gradients.",
  },
  {
    heading: "Spotting uniform vs non-uniform on a graph",
    body: "On a velocity–time graph, a straight sloping line signals uniform acceleration (constant gradient); a curved line signals non-uniform acceleration (changing gradient). The curvature tells you whether acceleration is increasing or decreasing: if the slope gets steeper, acceleration is growing. In the lab, even spacing of ticker-tape dots likewise means uniform acceleration, while dots that get progressively farther apart or closer together reveal changing acceleration.",
  },
  {
    heading: "Ticker-timer principle",
    body: "A ticker-timer makes dots on a moving paper tape at a fixed frequency, usually 50 Hz, so one dot is made every 1/50 = 0.02 s. By measuring the distance between successive dots you can find the tape's speed in that interval (speed = distance ÷ 0.02 s). Sections of tape with equal spacing show constant speed; sections where spacing grows show acceleration. This is the standard exam papers apparatus for demonstrating and measuring acceleration experimentally.",
  },
  {
    heading: "Finding acceleration from ticker tape",
    body: "To find acceleration from ticker tape, first mark off equal time intervals (e.g. 5-dot lengths = 0.10 s each). Measure the length of each interval to get its average speed, then use a = (v₂ − v₁)/Δt between two intervals. For example, if interval speeds are 0.20 m s⁻¹ and 0.50 m s⁻¹ over 0.30 s, a = (0.50 − 0.20)/0.30 = 1.0 m s⁻². The method turns a physical tape into a measured acceleration.",
  },
  {
    heading: "Average acceleration for non-uniform motion",
    body: "When acceleration is non-uniform, the single value a = (v − u)/t gives only the average over the whole interval, hiding how it varied within. To recover more detail you divide the motion into short sub-intervals and compute a local average for each, approximating the instantaneous acceleration. This is exactly what a ticker-timer or motion sensor does automatically by sampling at small time steps. The smaller the interval, the closer the average approaches the true instantaneous value.",
  },
  {
    heading: "Instantaneous acceleration",
    body: "Instantaneous acceleration is the acceleration at one precise moment, defined as the derivative a = dv/dt, or the gradient of the tangent to a velocity–time graph at that point. For uniform acceleration every tangent has the same slope, so the instantaneous and average values coincide. For non-uniform motion the tangent slope changes from point to point, which is why the graph curves. Motion sensors and data-loggers report this instantaneous value continuously.",
  },
  {
    heading: "Worked example — uniform acceleration",
    body: "A trolley on a smooth slope gains speed uniformly from 2 m s⁻¹ to 8 m s⁻¹ in 3 s. Since the change is steady, a = (8 − 2)/3 = 6/3 = 2 m s⁻². We could confirm with ticker tape: if the speed rises by 2 m s⁻¹ each second, the dot spacing grows by a fixed amount per interval. Uniform acceleration like this is the only case where the four equations of motion are valid.",
  },
  {
    heading: "Worked example — recognising non-uniform motion",
    body: "A car speeds up unevenly: in the first 2 s its velocity rises from 0 to 6 m s⁻¹, but in the next 2 s it only rises to 9 m s⁻¹. The first interval gives a₁ = (6 − 0)/2 = 3 m s⁻², the second a₂ = (9 − 6)/2 = 1.5 m s⁻². Because the two values differ, the acceleration is non-uniform. The overall average would be (9 − 0)/4 = 2.25 m s⁻², which masks the real variation — a reminder to check whether 'uniform' actually applies.",
  },
  {
    heading: "Why the distinction matters for exams",
    body: "exam papers questions often hinge on whether acceleration is uniform: only then may you use v = u + at and the other three equations. If a graph is curved, or a ticker tape shows uneven dot spacing, you must fall back to gradient/area methods or averages. Always state 'assuming uniform acceleration' or identify non-uniform motion before choosing a method. This single judgement prevents the most common equation-misuse errors.",
  },
];
