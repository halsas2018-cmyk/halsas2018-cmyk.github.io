export default [
  {
    heading: "Motion in a circle",
    body: "In circular motion a body moves round a fixed point (the centre) at a fixed distance called the radius, tracing a circular path. The motion may be uniform (constant speed, like a stone whirled steadily on a string) or non-uniform (speed changing, as in a vertical circle where gravity speeds it up and slows it down). Even at constant speed the body is accelerating, because its direction is continually changing — a key idea that surprises many students.",
  },
  {
    heading: "Angular displacement and period",
    body: "Instead of distance along the arc we often use angular displacement θ, the angle swept out by the radius, measured in radians. One full turn is 2π radians. The period T is the time for one complete revolution, and the frequency f = 1/T is the number of revolutions per second. Angular quantities describe the rotation directly and are more convenient than arc length when comparing points at different radii on the same spinning object.",
  },
  {
    heading: "Angular speed ω",
    body: "Angular speed ω is the rate of change of angular displacement: ω = θ/t, with SI unit rad/s. For a uniform circle, ω = 2π/T = 2πf. It tells how fast the body sweeps round the centre, regardless of radius. Two points on the same record turntable have the same ω even though the outer point travels a larger arc; angular speed captures the shared 'turning rate' that linear speed alone does not.",
  },
  {
    heading: "Relating linear and angular speed: v = rω",
    body: "The linear (tangential) speed v of a point on the circle equals the radius times the angular speed: v = rω. Proof: arc length s = rθ, so dividing by time gives v = rω. A point twice as far from the centre moves twice as fast for the same ω. This link lets you switch between 'how fast around' (ω) and 'how fast along the path' (v) and is used constantly in circular-motion problems.",
  },
  {
    heading: "Angular velocity as a vector",
    body: "Angular velocity is a vector quantity. Its magnitude is ω, and its direction is along the axis of rotation, given by the right-hand rule (curl the fingers in the direction of turning; the thumb points along ω). For a wheel spinning one way ω points one way along the axle, and the opposite way for opposite spin. Stating both magnitude and direction distinguishes angular velocity from the scalar angular speed.",
  },
  {
    heading: "Centripetal acceleration",
    body: "Because direction changes continuously, a body in circular motion has an acceleration directed toward the centre, called centripetal (centre-seeking) acceleration. Its size is a = v²/r, or, using v = rω, a = rω². Even at constant speed this acceleration is non-zero — it is what bends the straight-line path into a circle. Without it the body would, by Newton's first law, fly off in a straight tangent line.",
  },
  {
    heading: "Centripetal force: F = mv²/r",
    body: "By Newton's second law, the centripetal acceleration needs a net inward force: the centripetal force F = ma = mv²/r, equivalently F = mω²r. This force is not a new kind of force but the name for whatever pulls the body inward — tension in a string, gravity for a satellite, friction for a turning car, or the normal force on a wall-of-death rider. It is always directed to the centre and is what sustains the circular path.",
  },
  {
    heading: "Illustration — drawing centripetal force",
    body: "For a stone whirled on a string in a horizontal circle, draw the stone with an inward arrow labelled 'tension T' toward the centre (your hand) and weight downward; in the horizontal circle the tension provides the centripetal force, T = mv²/r. For a car on a flat bend the inward force is friction. In every diagram the centripetal force points to the centre; there is NO outward 'centrifugal force' acting on the body in an inertial frame — that is only felt in the rotating frame.",
  },
  {
    heading: "Banking of roads",
    body: "On a banked (tilted) road, the normal reaction from the surface is no longer vertical; its horizontal component points toward the centre of the curve and can supply part or all of the centripetal force. This reduces the reliance on sideways friction, letting vehicles take bends faster and more safely, especially when roads are wet and friction is low. The ideal banking angle is set so that at a design speed no friction is needed at all — the normal force alone provides mv²/r.",
  },
  {
    heading: "Worked example — centripetal force",
    body: "A 0.50 kg stone is whirled in a horizontal circle of radius 1.0 m at 4.0 m/s. The required centripetal force is F = mv²/r = 0.50 × 4.0² / 1.0 = 0.50 × 16 / 1.0 = 8.0 N. This 8 N must come from the string's tension. The centripetal acceleration is a = v²/r = 16/1.0 = 16 m/s² (about 1.6 g). If the string breaks the stone leaves along the tangent at 4.0 m/s, since the inward force vanishes.",
  }
];
