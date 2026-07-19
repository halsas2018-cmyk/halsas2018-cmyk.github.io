export default [
  {
    heading: "What acceleration is",
    body: "Acceleration is the rate at which an object's velocity changes with time. Quantitatively a = Δv/Δt = (v − u)/t, where u is the initial velocity and v the final velocity over time t. Its SI unit is the metre per second squared (m s⁻²), and it has dimensions L T⁻². Because velocity is a vector, acceleration is also a vector quantity — it has both magnitude and direction. A body accelerates whenever its speed increases, decreases, or its direction of travel changes.",
  },
  {
    heading: "Why acceleration is a vector",
    body: "Acceleration is a vector because it is defined using velocity, which has both magnitude and direction. This means a change in direction alone — even at constant speed — is an acceleration: a car rounding a bend at a steady 20 m s⁻¹ is accelerating towards the centre of the curve. The direction of the acceleration vector is the direction of the change in velocity, not necessarily the direction of motion. In rectilinear (straight-line) problems we usually handle direction with a + or − sign, but the vector nature still underlies every equation.",
  },
  {
    heading: "Unit of acceleration and its dimensions",
    body: "The SI unit of acceleration is m s⁻² (metres per second per second), which follows directly from (m s⁻¹) ÷ s. Dimensional analysis gives acceleration the dimensions [L T⁻²]. Being comfortable with the unit helps you sanity-check answers: an acceleration of 4 m s⁻² means the velocity gains 4 m s⁻¹ every second. Always write the unit with your numerical answer; a bare number without a unit is physically meaningless.",
  },
  {
    heading: "Deceleration (retardation)",
    body: "Deceleration, also called retardation, is simply acceleration in the direction opposite to the motion — velocity decreasing with time. It is not a separate quantity; you still use a = (v − u)/t and obtain a negative value when you have chosen the direction of motion as positive. For example a car braking from 20 m s⁻¹ to rest in 4 s has a = (0 − 20)/4 = −5 m s⁻², i.e. a deceleration of 5 m s⁻². 'Negative acceleration' and 'deceleration' describe the same physics from different viewpoints.",
  },
  {
    heading: "Average versus instantaneous acceleration",
    body: "Average acceleration over an interval is the total change in velocity divided by the total time: ā = (v − u)/t. Instantaneous acceleration is the value at a single instant, found as the gradient of a velocity–time graph at that point (a = dv/dt). For uniform acceleration the two are equal; for non-uniform motion they differ and the average can hide large moment-to-moment swings. Thinking of instantaneous acceleration as 'what a rate-of-change needle would show' helps distinguish it from the interval average.",
  },
  {
    heading: "Worked example — speeding up",
    body: "A car increases its velocity uniformly from 10 m s⁻¹ to 30 m s⁻¹ in 5 s. Using a = (v − u)/t: a = (30 − 10)/5 = 20/5 = 4 m s⁻². This means the car's velocity grows by 4 m s⁻¹ each second. Over the 5 s the total gain is 4 × 5 = 20 m s⁻¹, which matches the stated change from 10 to 30 m s⁻¹. Always confirm your sign: positive here because velocity increased in the chosen direction.",
  },
  {
    heading: "Worked example — braking/deceleration",
    body: "A lorry moving at 15 m s⁻¹ applies brakes and stops in 3 s. Taking the initial direction as positive, u = 15, v = 0, t = 3: a = (0 − 15)/3 = −5 m s⁻². The acceleration is −5 m s⁻², equivalently a deceleration of 5 m s⁻². If instead we defined the braking direction as positive, the answer would be +5 m s⁻² — the physics is identical, only the sign convention changed. This shows why stating your direction is essential.",
  },
  {
    heading: "Acceleration and change of direction",
    body: "Because acceleration is a vector, an object moving in a circle at constant speed is continuously accelerating — its velocity direction rotates even though its speed is fixed. This centripetal acceleration points towards the centre and has magnitude v²/r. In straight-line (rectilinear) kinematics we rarely meet this, but it explains why 'constant speed' does not mean 'zero acceleration'. Whenever the velocity vector changes in any way, acceleration is present.",
  },
  {
    heading: "Reading acceleration from a graph",
    body: "On a velocity–time graph, acceleration at any instant is the gradient (slope) of the line: a steeper slope means a larger acceleration. A straight sloping line gives a constant acceleration equal to rise/run; a curved line means the acceleration itself is changing. This graphical view is the bridge to the next topics, where uniform and non-uniform acceleration are treated separately. Numerically, gradient = Δv/Δt is exactly the definition a = (v − u)/t.",
  },
  {
    heading: "Real-world and exam contexts",
    body: "Acceleration appears throughout exam papers problems: vehicles speeding up or braking, objects falling (covered under motion under gravity), and motion on slopes. You are usually given three of the four quantities u, v, a, t and asked for the fourth — exactly the data the definition a = (v − u)/t needs. Watch for words like 'uniformly', 'from rest' (u = 0), and 'comes to rest' (v = 0), which pin down known values. Mastering this single definition is the foundation for the equations of motion.",
  },
];
