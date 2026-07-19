export default [
  {
    heading: "Sports: athletics and field events",
    body: "In javelin, shot put, discus, long jump and high jump the competitor's body or implement follows projectile motion once released. Athletes and coaches use the range and height formulae implicitly: a faster release and a near-45° angle maximise distance, while the release height (from the hand, not the ground) also helps. A shot putter who releases at 2 m height and 20 m/s at 40° out-throws one releasing lower. Understanding the trade-off between angle and speed lets performers optimise technique within the rules.",
  },
  {
    heading: "Ball games",
    body: "Almost every ball sport involves projectiles. A football free kick, a basketball jump shot, a cricket cover drive and a tennis serve all obey the same equations, modified by spin and air. Players learn the right launch speed and angle by feel, but the physics fixes the envelope of possible shots — too flat and it is saved, too lofted and it falls short. Coaches now use video and the trajectory maths to analyse technique and even umpire lbw and goal-line decisions.",
  },
  {
    heading: "Ballistics and artillery",
    body: "Guns, mortars and cannons are engineered around projectile motion. Given a muzzle velocity, the gunner picks a firing angle to land a shell at a desired range, using R = u² sin 2θ / g corrected for drag and wind. Mortars, fired at high angles, exploit the steep part of the trajectory to drop shells behind cover. Modern fire-control computers solve the full equations including air resistance and the Earth's rotation. Ballistics is the original large-scale application of these formulae.",
  },
  {
    heading: "Fountains, irrigation and water jets",
    body: "Water leaving a nozzle or sprinkler head is a stream of liquid projectiles, each droplet following the parabolic path. Garden sprinklers, decorative fountains and irrigation sprayers are positioned and angled using the range and height equations so the water lands where it is wanted. Fire-fighting monitors and crop-spraying aircraft likewise set speed and elevation to reach a target distance. The same maths that describes a cricket ball also designs where a water jet will fall.",
  },
  {
    heading: "Coasting rockets and spacecraft",
    body: "After a rocket's engine burns out, the unpowered coasting phase is pure projectile motion (ignoring drag in the thin upper atmosphere): gravity is the only force, bending the path into a parabola or, over long distances, an ellipse. Mission planners use these equations to predict where a stage will fall or how a sub-orbital craft arcs. Even orbital insertion begins from such a coast. The 'projectile' label applies whenever thrust has stopped and only gravity acts.",
  },
  {
    heading: "Fireworks and pyrotechnics",
    body: "A firework shell is launched upward as a projectile; its timed fuse ignites the burst at or near the top of the trajectory, where the vertical speed is smallest and the display hangs longest in the sky. The shell's climb and fall follow the standard equations, so designers choose the launch speed and angle to reach a safe, spectacular altitude. Aerial shells are sized so the burst occurs well above spectators. The art of fireworks is applied projectile motion with a timer.",
  },
  {
    heading: "Projectiles from a height (different levels)",
    body: "Often the launch and landing heights differ — a ball thrown from a cliff or a stone dropped from a bridge. Here the vertical equation y = y₀ + u_y t − ½ g t² is solved for the time when y reaches the lower level, then range = uₓ t. A larger drop time means a longer horizontal reach than on level ground. This generalises the level-ground formulae and appears in many exam problems. Always define the zero of height consistently before substituting.",
  },
  {
    heading: "Worked example — an athletic throw",
    body: "A long jumper takes off at 9 m/s at 20° (g = 9.8). Horizontal speed uₓ = 9 cos 20° ≈ 8.46 m/s; vertical u_y = 9 sin 20° ≈ 3.08 m/s. Time of flight T = 2 × 3.08 / 9.8 ≈ 0.628 s. Range R = 8.46 × 0.628 ≈ 5.31 m (ignoring the body's own length and the 0.6 m take-off height). A steeper or faster takeoff would lengthen the jump until drag and technique limits intervene. This shows how a small speed change moves the result noticeably.",
  },
  {
    heading: "Worked example — from a height",
    body: "A stone is thrown horizontally at 15 m/s from a 45 m cliff. Horizontally uₓ = 15 m/s (constant). Vertically, using 45 = ½ g t² gives t = √(90/9.8) ≈ 3.03 s. Horizontal range = 15 × 3.03 ≈ 45.5 m, so it lands about 45 m from the base. The time is set entirely by the fall; the throw speed only sets how far out it goes. If thrown at an upward angle the time and range would both increase.",
  },
  {
    heading: "Limitations: air, wind and spin",
    body: "The ideal model ignores air resistance, but drag is often decisive: it lowers speed, shortens range and makes descent steeper than ascent, so real trajectories are not symmetric parabolas. Wind adds a horizontal force; backspin lifts a ball (the Magnus effect) giving extra range, while topspin dips it. At high speeds or over long distances these effects dominate and the simple formulae must be corrected. Recognising when the model breaks down is as important as knowing the formulae themselves.",
  },
  {
    heading: "Forensic and practical uses",
    body: "Investigators reconstruct accidents and crimes by working projectile motion backwards — from where a bullet or a dropped object landed they infer the launch point and angle. Aerial water bombers release retardant as a projectile timed to land on a fire, and crop-dusters calculate release points so spray lands on the field, not the road. Even drone drops and package deliveries plan release points using the same parabola. The theory reaches far beyond the sports field.",
  },
];
