export default [
  {
    heading: "Motion and rest are relative",
    body: "There is no absolute 'at rest' — every description of motion is made relative to a chosen frame of reference. A passenger sitting still in a moving bus is at rest relative to the bus but moving at the bus's speed relative to the ground, and moving with the Earth relative to the Sun. Two observers in different frames can honestly give different descriptions of the same body. Always state (or imply) the frame before saying something is moving or stationary.",
  },
  {
    heading: "Defining relative velocity",
    body: "The velocity of A relative to B, written v_A/B, is the velocity A appears to have when B is treated as the observer at rest. It is found by vector subtraction: v_A/B = v_A − v_B, where v_A and v_B are the actual velocities measured in a common frame. Relative velocity therefore asks 'how fast and in what direction does A move as seen from B?' This single idea handles overtaking, meeting, and crossing problems.",
  },
  {
    heading: "Co-linear motion, same direction",
    body: "When two bodies move along the same line in the same direction, their relative speed is the difference of their speeds. If car A travels east at 30 m/s and car B at 20 m/s, then v_A/B = 30 − 20 = 10 m/s east: A overtakes B at 10 m/s. The slower car sees the faster one pull ahead gradually; from B's frame, A moves forward at only 10 m/s even though A is really doing 30 m/s relative to the ground.",
  },
  {
    heading: "Co-linear motion, opposite directions",
    body: "When two bodies approach each other along the same line, their relative speed is the SUM of their speeds. If two trains each travel at 20 m/s towards one another, the relative speed is 20 + 20 = 40 m/s, so they close the gap twice as fast as either moves alone. For a head-on collision the impact speed is this combined relative speed, not the speed of either train individually — a key point in safety and accident analysis.",
  },
  {
    heading: "Worked example — overtaking",
    body: "A lorry moves east at 15 m/s and a car follows at 25 m/s, both in the same lane. The car's velocity relative to the lorry is 25 − 15 = 10 m/s east, so it catches up at 10 m/s. If initially 100 m behind, the time to reach the lorry is distance ÷ relative speed = 100 ÷ 10 = 10 s. Notice we solve the problem entirely in the lorry's frame, where the lorry is 'stationary' and the car approaches at 10 m/s — far simpler than tracking both against the ground.",
  },
  {
    heading: "Worked example — meeting head-on",
    body: "Two runners start 240 m apart and run toward each other at 4 m/s and 6 m/s. Their relative speed is 4 + 6 = 10 m/s, so they meet after 240 ÷ 10 = 24 s. In that time the first runs 4 × 24 = 96 m and the second 6 × 24 = 144 m, which sum to 240 m. Solving in the relative frame (one runner fixed, the other approaching at 10 m/s) avoids writing two separate position equations and prevents sign errors.",
  },
  {
    heading: "Relative velocity in two dimensions",
    body: "When motions are not along one line, v_A/B = v_A − v_B is still a vector subtraction and is best done by drawing a vector triangle: place v_B's tail at v_A's tip and the closing side is v_A/B. A classic case is rain falling vertically while a person walks forward — to the person the rain appears to slant in from the front. The apparent direction depends on the ratio of walking speed to rainfall speed, and is found graphically or with components.",
  },
  {
    heading: "Application — rain and moving umbrellas",
    body: "Rain falls vertically at 5 m/s and a person walks forward at 3 m/s. In the person's frame the rain has a vertical component 5 m/s down and a horizontal component 3 m/s backwards, so it appears to come from a direction tilted forward. The tilt angle θ satisfies tan θ = 3/5, giving θ ≈ 31° from the vertical; the umbrella should be tilted forward by this angle. Such relative-motion reasoning explains why you lean an umbrella into your walking direction.",
  },
  {
    heading: "Application — aeroplanes and river currents",
    body: "A boat crossing a river must point partly upstream to land opposite its start, because the current carries it downstream relative to the bank. Similarly a plane flying in a crosswind is blown off its intended ground track. Pilots and captains calculate the required heading by vector subtraction of the medium's velocity from the desired ground velocity. These are two-dimensional relative-motion problems solved with vector triangles rather than simple addition or subtraction of speeds.",
  },
  {
    heading: "Relative motion and distance–time graphs",
    body: "On a distance–time graph the gradient is speed. For two objects moving along a line, drawing both lines on the same axes lets you read relative speed as the difference in their gradients. Where the lines cross, the objects are at the same position (they meet). A steeper line simply means a higher speed in the chosen frame; switching frames rescales both lines but preserves their separation. Graphical and algebraic relative-motion methods always agree, so use whichever is clearer for the problem.",
  }
];
