export default [
  {
    heading: "What equilibrium means",
    body: "A rigid body is in equilibrium when no resultant force and no resultant moment act on it, so it remains at rest or continues in uniform motion without accelerating or rotating. Equilibrium does not require the body to be stationary; a body moving at constant velocity with zero net force is equally in equilibrium. In statics problems we deal with bodies at rest, so both linear and angular acceleration are zero and the two conditions below must both hold.",
  },
  {
    heading: "First condition — no net force (ΣF = 0)",
    body: "The first condition for equilibrium is that the vector sum of all forces is zero: ΣF = 0. Because force is a vector, the forces must balance in every direction independently. In a plane we resolve all forces into horizontal (x) and vertical (y) components and require ΣF_x = 0 and ΣF_y = 0. A book on a table satisfies this: its weight downward is exactly cancelled by the normal reaction upward, so there is no resultant translational force.",
  },
  {
    heading: "Second condition — no net moment (ΣM = 0)",
    body: "The second condition for equilibrium is that the sum of all moments about any point is zero: ΣM = 0. This guarantees the body will not start to rotate. For parallel forces (a beam on supports) it becomes sum of clockwise moments equals sum of anticlockwise moments. For non-parallel forces the moments are taken with their proper signs about a chosen pivot. Together, ΣF = 0 and ΣM = 0 fully describe equilibrium of a rigid body.",
  },
  {
    heading: "Applying the conditions to parallel forces",
    body: "For a horizontal beam supported at two points A and B (reactions R_A and R_B) carrying loads, apply ΣF_y = 0: R_A + R_B = total downward load. Then apply ΣM = 0 about A: R_B × (distance A to B) = Σ(each load × its distance from A). Solving the two equations gives both reactions. This is the standard method for 'beam on supports' problems and for finding tensions in cables and forces in struts.",
  },
  {
    heading: "Resolving non-parallel forces into components",
    body: "When forces act at different angles, we resolve each into two perpendicular directions, conventionally horizontal and vertical, then apply ΣF_x = 0 and ΣF_y = 0 separately. For a picture hung from two slanted wires, the horizontal components of the tensions cancel while their vertical components add up to the weight. Resolving first turns a messy angled problem into two simple balance equations and is the most reliable algebraic approach.",
  },
  {
    heading: "Resultant and equilibrant forces",
    body: "The resultant of a set of forces is the single force with the same effect as all of them together; it is found by vector addition (composition of forces). The equilibrant is the force that, when added, brings the body to equilibrium — equal in magnitude to the resultant but opposite in direction. So if the resultant of three forces is R, the fourth force needed for equilibrium is −R. Finding the equilibrant is the practical goal of force-board experiments.",
  },
  {
    heading: "Parallelogram of forces",
    body: "The parallelogram of forces is a graphical and vector method for the resultant of TWO concurrent forces. Place the forces tail-to-tail, then complete the parallelogram using them as adjacent sides. The diagonal drawn from their common point is the resultant, in both magnitude and direction. If a body under two forces is in equilibrium those two forces must be equal and opposite; generally the parallelogram yields the single replacement force for any pair.",
  },
  {
    heading: "Triangle of forces",
    body: "The triangle of forces states that if three coplanar forces acting at a point are in equilibrium, they can be represented in magnitude and direction by the three sides of a triangle taken in order. To construct it, draw each force vector head-to-tail; if they close into a triangle the body is in equilibrium. This scale-drawing method gives the unknown force's magnitude from the side lengths and its direction from the angles, without algebra.",
  },
  {
    heading: "Force-board experiment (resultant & equilibrant)",
    body: "A force board is a vertical board with pulleys at its edges; strings tied at a central ring carry weights pulling in different directions. When the ring is centred, the tensions are in equilibrium. The forces are drawn to scale from a common point; the closing side of the triangle (or the parallelogram diagonal) gives the equilibrant, checked by adding a fourth weight equal and opposite to the resultant. This verifies the triangle and parallelogram laws experimentally — a common exam practical.",
  },
  {
    heading: "Lami's theorem for three coplanar forces",
    body: "When three non-parallel coplanar forces act at a point and the body is in equilibrium, Lami's theorem applies: each force is proportional to the sine of the angle between the other two. In symbols, F_A/sin α = F_B/sin β = F_C/sin γ, where α is the angle between F_B and F_C, and so on. This is a quick alternative to resolving components and is handy when the three forces and their included angles are known.",
  },
  {
    heading: "Worked example — beam on two supports",
    body: "A uniform plank of weight 40 N and length 4.0 m rests on supports at its ends A and B. A 60 N load is placed 1.0 m from A. By ΣF_y: R_A + R_B = 100 N. Taking moments about A (plank's weight acts at its centre, 2.0 m from A): R_B × 4.0 = 60 × 1.0 + 40 × 2.0 = 140, so R_B = 35 N and R_A = 65 N. The nearer support carries more because the load is offset toward it.",
  },
];
