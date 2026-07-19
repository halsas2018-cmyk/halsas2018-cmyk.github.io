export default [
  {
    heading: "Combining two velocities at once",
    body: "A body often has more than one velocity simultaneously — a boat moves across a river while the current carries it downstream, or a plane flies through moving air. The single velocity an observer actually sees is the resultant velocity, found by vector addition of the separate velocities. Because velocity is a vector, the two speeds do not simply add unless they point the same way. The resultant tells you both how fast and in what direction the object truly moves.",
  },
  {
    heading: "Resultant velocity is vector addition of velocities",
    body: "To find the resultant velocity, treat each contributing velocity as a vector and add them by the tip-to-tail or component method. The boat's own velocity relative to the water and the water's velocity relative to the bank combine into the boat's velocity relative to the bank. This is the same parallelogram or Pythagoras machinery used for forces, applied to motion instead. Direction of the resultant is as important as its size for navigation.",
  },
  {
    heading: "Analytical method using components",
    body: "Resolve each velocity into horizontal and vertical components, add all the horizontal parts to get one total horizontal velocity, add all the vertical parts to get one total vertical velocity, then recombine with Pythagoras and tan θ. This component approach handles any angle between the velocities without special cases. It is the most reliable route when the velocities are not at right angles.",
  },
  {
    heading: "Graphical method to scale",
    body: "You can also draw the velocities tip-to-tail to a chosen scale (e.g. 1 cm = 1 m/s) and measure the closing arrow. The measured length gives the resultant speed and the measured angle gives its direction. The graphical and analytical methods should agree, and the sketch doubles as a check on the algebra. Either is acceptable in the exam papers provided the scale and working are shown.",
  },
  {
    heading: "Worked example — swimmer crossing a river",
    body: "A swimmer heads straight across a river at 2.0 m/s while the current flows downstream at 1.5 m/s. These are perpendicular, so the resultant speed is √(2.0² + 1.5²) = √(4 + 2.25) = √6.25 = 2.5 m/s. Its direction satisfies tan θ = 1.5/2.0 = 0.75, so θ ≈ 37° downstream from straight across. The swimmer therefore lands downstream of the point opposite the start, at 2.5 m/s.",
  },
  {
    heading: "Aircraft and wind — same principle",
    body: "An aeroplane's velocity relative to the ground is the vector sum of its airspeed (relative to the air) and the wind velocity (air relative to the ground). A crosswind pushes the plane sideways, so the pilot must aim into the wind to track a straight ground course. This headings problem is resolved exactly like the river case. Pilots and sailors call the required aiming correction the 'crab angle'.",
  },
  {
    heading: "Relative velocity as a subtraction",
    body: "The velocity of A as seen by B is v_A − v_B, i.e. the velocity of A plus the negative of B's velocity. This is vector subtraction and explains why two cars moving the same way at different speeds appear to close slowly, while overtaking traffic seems to rush past. Rain that falls vertically can appear to slant into a moving car's windscreen for the same reason. Relative velocity is just resultant velocity viewed from a moving frame.",
  },
  {
    heading: "Worked example — velocities at an oblique angle",
    body: "A ship sails north at 4 m/s while a current pushes it on a bearing of 090° (east) at 3 m/s. The angle between them is 90°, so resultant speed = √(4² + 3²) = 5 m/s. Its direction is tan θ = 3/4 east of north, θ ≈ 37°, i.e. a bearing near 037°. If instead the current were at 45° to the ship's track, the cosine rule R² = 4² + 3² + 2(4)(3)cos 45° would be used.",
  },
  {
    heading: "Direction (bearing) of the resultant",
    body: "Stating only the resultant speed is incomplete; the direction must accompany it, usually as an angle from a reference or a three-figure bearing. Measure the angle from the same axis you used for resolution so the answer is self-consistent. In navigation problems the bearing is often the whole point — arriving 'downstream' or 'off-course' by a known angle. Always report resultant velocity as magnitude with its direction.",
  },
  {
    heading: "Practical importance of resultant velocity",
    body: "River crossings, flight planning, projectile motion and even the apparent slant of falling rain all depend on combining velocities correctly. Getting the resultant wrong means missing a landing point, drifting off a shipping lane or misjudging a tackle in sport. The method is a direct application of vector addition and resolution, tying this subtopic to the others in the chapter. Mastery here pays off across kinematics and beyond.",
  },
];
