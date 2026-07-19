export default [
  {
    heading: "What solid friction is",
    body: "Solid friction is the force that opposes the relative motion (or the attempted motion) of two solid surfaces in contact. It always acts parallel to the surfaces and against the direction in which one surface would slide over the other. Even apparently smooth surfaces have tiny bumps that interlock, so friction is really a contact force arising from the roughness and molecular attraction between the touching faces. Without it a gentle slope would let every object slide.",
  },
  {
    heading: "Static friction",
    body: "Static friction acts between two surfaces that are in contact but not sliding. It grows from zero up to a maximum value to exactly balance any applied force trying to start motion — push a stationary box gently and static friction pushes back equally, so it stays put. The largest value it can reach before sliding begins is the limiting (or maximum) static friction F_L. Until that limit is exceeded, static friction prevents motion; at the limit, motion is just about to start.",
  },
  {
    heading: "Dynamic (kinetic) friction",
    body: "Once sliding begins, the friction that opposes the motion is dynamic (or kinetic) friction. It is usually slightly smaller than the limiting static friction, which is why it is easier to keep a box sliding than to start it moving. Dynamic friction has roughly constant size while the surfaces slide at ordinary speeds. The distinction matters in everyday life: tyres grip best while rolling (static) and can skid (dynamic) if braking locks the wheel.",
  },
  {
    heading: "The laws of friction (qualitative)",
    body: "Experiment shows friction obeys simple rules. Friction is roughly proportional to the normal reaction (push the surfaces together harder and friction grows). It is nearly independent of the apparent contact area (a wide block and a narrow one of same weight have similar friction). And dynamic friction is slightly less than limiting static friction. These are empirical laws — good approximations for dry, clean surfaces, not exact for every material.",
  },
  {
    heading: "The coefficient of limiting friction",
    body: "The proportionality between friction and normal reaction is written F = μR, where R is the normal reaction and μ (mu) is the coefficient of friction — a number with no unit because it is a ratio of two forces. For limiting static friction we write F_L = μ_s R (μ_s, the static coefficient); for dynamic friction F = μ_k R (μ_k, the kinetic coefficient, with μ_k < μ_s). A μ near 0 means very slippery (ice), near 1 or more means very grippy (rubber on dry concrete).",
  },
  {
    heading: "Determining μ — inclined plane method",
    body: "Place a block on a plank and raise one end slowly. The block stays at rest (static friction balancing the downslope component mg sin θ) until, at angle θ, it is just about to slide. At that limiting point friction F_L = μ_s R equals mg sin θ while R = mg cos θ, so μ_s = tan θ. Thus the coefficient of limiting friction is simply the tangent of the angle of repose. This is a standard, accurate exam practical for finding μ without a force meter.",
  },
  {
    heading: "Determining μ — horizontal pull method",
    body: "Lay the block on a horizontal table and pull it with a spring balance. The force needed just to start it moving is the limiting friction F_L; once sliding, the nearly steady reading is the dynamic friction F. Since the normal reaction R equals the weight mg, the coefficients follow as μ_s = F_L/(mg) and μ_k = F/(mg). Repeating with added weights confirms that friction scales with R, verifying F = μR.",
  },
  {
    heading: "Advantages of friction",
    body: "Friction is essential to daily life. It lets us walk and vehicles move, because tyres and shoes push backward against the ground and friction pushes forward. It enables braking and the grip of belt drives (friction belts transmit power between pulleys) and of grindstones (sharpening by friction). Nails, screws, and brakes all rely on it. We often increase friction deliberately with treads, rougher surfaces, or grippy materials.",
  },
  {
    heading: "Disadvantages of friction",
    body: "Friction also does harm: it reduces the efficiency of machines by converting useful energy into wasted heat, and it causes wear and tear of moving parts (engine components, soles, bearings). It makes motion harder and limits top speeds. Because of these costs, engineers constantly fight unwanted friction in machinery, balancing the need for grip against the loss of efficiency and the need for replacement of worn parts.",
  },
  {
    heading: "Methods of reducing friction",
    body: "Friction is reduced by lubrication (oil or grease forming a slippery film between surfaces), by ball bearings and rollers that replace sliding with rolling, by streamlining to cut air resistance, and by polishing surfaces. In extremes, air cushions or magnetic levitation remove contact almost entirely. Choosing the right method depends on the machine: bearings in wheels, oil in engines, smooth shapes on vehicles and aircraft — all lower the effective μ and save energy.",
  }
];
