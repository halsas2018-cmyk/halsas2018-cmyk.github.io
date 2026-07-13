// physics — Equilibrium of Forces
const questions = [
  {
    question: "The moment of a force about a pivot is calculated as",
    options: [
      "A. force ÷ distance",
      "B. force × perpendicular distance from pivot",
      "C. force × parallel distance",
      "D. distance ÷ force"
    ],
    answer: "B",
    explanation: "Moment = force × perpendicular distance from the pivot to the line of action of the force.",
    subtopic: "Principle of moments"
  },
  {
    question: "The SI unit of moment of a force is the",
    options: [
      "A. newton (N)",
      "B. newton-metre (Nm)",
      "C. joule per second",
      "D. watt"
    ],
    answer: "B",
    explanation: "Moment = force × distance, so its unit is newton-metre (Nm).",
    subtopic: "Principle of moments"
  },
  {
    question: "For a body in rotational equilibrium, the principle of moments states",
    options: [
      "A. clockwise moments exceed anticlockwise moments",
      "B. sum of clockwise moments equals sum of anticlockwise moments",
      "C. all moments are zero",
      "D. only one force acts"
    ],
    answer: "B",
    explanation: "Balance requires total clockwise moment = total anticlockwise moment about the pivot.",
    subtopic: "Principle of moments"
  },
  {
    question: "A force of 10 N is applied at a perpendicular distance of 2 m from a pivot. The moment is",
    options: [
      "A. 5 Nm",
      "B. 20 Nm",
      "C. 12 Nm",
      "D. 0.2 Nm"
    ],
    answer: "B",
    explanation: "Moment = 10 × 2 = 20 Nm.",
    subtopic: "Principle of moments"
  },
  {
    question: "A 5 N weight is placed 3 m to the left of a pivot. What weight placed 1 m to the right balances it?",
    options: [
      "A. 15 N",
      "B. 5 N",
      "C. 8 N",
      "D. 1.67 N"
    ],
    answer: "A",
    explanation: "Balance: 5 × 3 = W × 1 → W = 15 N.",
    subtopic: "Principle of moments"
  },
  {
    question: "Two equal weights placed at equal distances on opposite sides of a pivot will",
    options: [
      "A. topple the beam",
      "B. balance each other",
      "C. produce a couple",
      "D. have no moment"
    ],
    answer: "B",
    explanation: "Equal and opposite moments cancel, so the beam balances.",
    subtopic: "Principle of moments"
  },
  {
    question: "A uniform rod of weight 20 N is supported at its two ends. The reaction at each support is",
    options: [
      "A. 10 N",
      "B. 20 N",
      "C. 5 N",
      "D. 40 N"
    ],
    answer: "A",
    explanation: "The weight acts at the centre, so each support carries half: 20/2 = 10 N.",
    subtopic: "Principle of moments"
  },
  {
    question: "The perpendicular distance in the moment formula must be measured from the",
    options: [
      "A. end of the body",
      "B. pivot to the line of action of the force",
      "C. surface",
      "D. centre of gravity only"
    ],
    answer: "B",
    explanation: "Moment uses the perpendicular distance from the pivot to the force's line of action.",
    subtopic: "Principle of moments"
  },
  {
    question: "A couple consists of two equal, opposite, parallel forces that produce",
    options: [
      "A. translation only",
      "B. pure rotation (no net translation)",
      "C. zero effect",
      "D. equilibrium"
    ],
    answer: "B",
    explanation: "A couple has zero net force but a net turning effect, so it produces rotation only.",
    subtopic: "Principle of moments"
  },
  {
    question: "The moment of a couple is given by",
    options: [
      "A. one force × perpendicular separation of the forces",
      "B. one force ÷ separation",
      "C. sum of the two forces",
      "D. difference of the two forces"
    ],
    answer: "A",
    explanation: "Couple moment = F × d, where d is the perpendicular distance between the two equal forces.",
    subtopic: "Principle of moments"
  },
  {
    question: "Increasing the distance of a force from the pivot",
    options: [
      "A. decreases the moment",
      "B. increases the moment",
      "C. has no effect",
      "D. reverses the force"
    ],
    answer: "B",
    explanation: "Moment is proportional to distance, so a larger moment arm gives a larger turning effect.",
    subtopic: "Principle of moments"
  },
  {
    question: "A lever makes a task easier by",
    options: [
      "A. increasing the force needed",
      "B. increasing the perpendicular distance (moment arm) of the effort",
      "C. reducing the moment",
      "D. removing the pivot"
    ],
    answer: "B",
    explanation: "A longer effort arm gives a larger moment for the same effort force, reducing the force needed.",
    subtopic: "Principle of moments"
  },
  {
    question: "A door is easiest to open when pushed at the handle because the handle is",
    options: [
      "A. near the hinge",
      "B. far from the hinge (large moment arm)",
      "C. at the centre",
      "D. made of metal"
    ],
    answer: "B",
    explanation: "The large distance from the hinge gives a large moment for a small applied force.",
    subtopic: "Principle of moments"
  },
  {
    question: "A force of 4 N acts at a perpendicular distance of 0.5 m from a pivot. The moment is",
    options: [
      "A. 2 Nm",
      "B. 8 Nm",
      "C. 0.125 Nm",
      "D. 4.5 Nm"
    ],
    answer: "A",
    explanation: "Moment = 4 × 0.5 = 2 Nm.",
    subtopic: "Principle of moments"
  },
  {
    question: "For a beam to be balanced on a pivot, the",
    options: [
      "A. total weight must be zero",
      "B. total anticlockwise moment must equal total clockwise moment",
      "C. forces must all be equal",
      "D. pivot must be at the end"
    ],
    answer: "B",
    explanation: "Rotational balance requires equal total moments on both sides of the pivot.",
    subtopic: "Principle of moments"
  },
  {
    question: "If the pivot of a uniform metre rule is at its centre, the rule's own weight produces",
    options: [
      "A. a large clockwise moment",
      "B. no moment about that pivot",
      "C. an anticlockwise moment",
      "D. a couple"
    ],
    answer: "B",
    explanation: "The weight acts at the centre of gravity, which is at the pivot, so its perpendicular distance is zero.",
    subtopic: "Principle of moments"
  },
  {
    question: "A clockwise moment of 12 Nm is balanced by two anticlockwise forces each giving 6 Nm. This satisfies",
    options: [
      "A. Newton's first law",
      "B. the principle of moments",
      "C. the law of flotation",
      "D. Archimedes' principle"
    ],
    answer: "B",
    explanation: "Total anticlockwise (12 Nm) equals clockwise (12 Nm), satisfying the principle of moments.",
    subtopic: "Principle of moments"
  },
  {
    question: "For a body to be in complete equilibrium, the resultant force on it must be",
    options: [
      "A. maximum",
      "B. zero",
      "C. equal to its weight",
      "D. infinite"
    ],
    answer: "B",
    explanation: "No net force means no translational acceleration, a requirement for equilibrium.",
    subtopic: "Conditions for equilibrium"
  },
  {
    question: "Besides zero resultant force, a body in equilibrium must also have",
    options: [
      "A. zero resultant moment",
      "B. maximum moment",
      "C. only vertical forces",
      "D. zero mass"
    ],
    answer: "A",
    explanation: "Equilibrium needs both zero net force and zero net turning moment.",
    subtopic: "Conditions for equilibrium"
  },
  {
    question: "Three coplanar, non-parallel forces in equilibrium must have lines of action that",
    options: [
      "A. are parallel",
      "B. meet at a single point (concurrent)",
      "C. never meet",
      "D. are all vertical"
    ],
    answer: "B",
    explanation: "For three non-parallel forces to balance they must be concurrent (their lines pass through one point).",
    subtopic: "Conditions for equilibrium"
  },
  {
    question: "A body in equilibrium has an acceleration of",
    options: [
      "A. maximum",
      "B. zero",
      "C. g",
      "D. increasing"
    ],
    answer: "B",
    explanation: "Zero net force gives zero acceleration, so the body is at rest or moving uniformly.",
    subtopic: "Conditions for equilibrium"
  },
  {
    question: "Two forces acting on a body in equilibrium must be",
    options: [
      "A. equal, opposite and collinear",
      "B. perpendicular",
      "C. of different magnitudes",
      "D. parallel and same direction"
    ],
    answer: "A",
    explanation: "Only a pair of equal, opposite, collinear forces gives zero resultant.",
    subtopic: "Conditions for equilibrium"
  },
  {
    question: "A book resting on a table is in equilibrium because",
    options: [
      "A. weight exceeds normal reaction",
      "B. weight equals the normal reaction",
      "C. there are no forces",
      "D. friction balances weight"
    ],
    answer: "B",
    explanation: "The upward normal reaction from the table balances the downward weight, so net force is zero.",
    subtopic: "Conditions for equilibrium"
  },
  {
    question: "For equilibrium, the sum of all upward forces must equal the sum of all",
    options: [
      "A. horizontal forces",
      "B. downward forces",
      "C. moments",
      "D. velocities"
    ],
    answer: "B",
    explanation: "Vertical force balance requires upward forces = downward forces.",
    subtopic: "Conditions for equilibrium"
  },
  {
    question: "For equilibrium, the sum of forces in the horizontal direction must be",
    options: [
      "A. equal to the weight",
      "B. zero",
      "C. maximum",
      "D. equal to friction"
    ],
    answer: "B",
    explanation: "Horizontal balance requires the net horizontal force to be zero.",
    subtopic: "Conditions for equilibrium"
  },
  {
    question: "A body suspended by two strings at an angle is in equilibrium when the string tensions",
    options: [
      "A. are both zero",
      "B. balance the weight through their vertical components",
      "C. are both horizontal",
      "D. exceed the weight"
    ],
    answer: "B",
    explanation: "The upward vertical components of the two tensions must sum to the weight, with horizontal components cancelling.",
    subtopic: "Conditions for equilibrium"
  },
  {
    question: "A body is in equilibrium when it has",
    options: [
      "A. no net translation and no net rotation",
      "B. maximum speed",
      "C. only one force",
      "D. constant acceleration"
    ],
    answer: "A",
    explanation: "Equilibrium means no resultant force (no translation change) and no resultant moment (no rotation change).",
    subtopic: "Conditions for equilibrium"
  },
  {
    question: "A ladder leaning against a smooth wall is kept in equilibrium by",
    options: [
      "A. its weight only",
      "B. friction at the ground plus the wall's reaction and its weight",
      "C. gravity alone",
      "D. air pressure"
    ],
    answer: "B",
    explanation: "Ground friction (horizontal), ground reaction (vertical) and wall reaction together balance weight and prevent slipping.",
    subtopic: "Conditions for equilibrium"
  },
  {
    question: "If only two forces act on a body and it is in equilibrium, the forces are",
    options: [
      "A. equal and opposite",
      "B. at right angles",
      "C. both upward",
      "D. both downward"
    ],
    answer: "A",
    explanation: "Two forces can balance only if they are equal in magnitude and opposite in direction (and collinear).",
    subtopic: "Conditions for equilibrium"
  },
  {
    question: "The resultant of all forces acting on a body in equilibrium is",
    options: [
      "A. equal to its weight",
      "B. zero",
      "C. maximum",
      "D. equal to friction"
    ],
    answer: "B",
    explanation: "Equilibrium means all forces cancel, giving a zero resultant.",
    subtopic: "Conditions for equilibrium"
  },
  {
    question: "A body can be in equilibrium while",
    options: [
      "A. accelerating",
      "B. moving with constant velocity",
      "C. rotating faster",
      "D. falling"
    ],
    answer: "B",
    explanation: "Constant velocity means zero net force, which is a valid equilibrium state (dynamic equilibrium).",
    subtopic: "Conditions for equilibrium"
  },
  {
    question: "For a set of parallel forces in equilibrium, it is necessary that",
    options: [
      "A. the sum of forces is zero and the sum of moments is zero",
      "B. all forces are equal",
      "C. only moments matter",
      "D. there is only one force"
    ],
    answer: "A",
    explanation: "Both force balance and moment balance must hold for parallel-force equilibrium.",
    subtopic: "Conditions for equilibrium"
  },
  {
    question: "A uniform beam of weight 100 N is supported at both ends with a central load of 100 N. Each support carries",
    options: [
      "A. 50 N",
      "B. 100 N",
      "C. 200 N",
      "D. 25 N"
    ],
    answer: "B",
    explanation: "Total load = 200 N acting at the centre, so each end supports half = 100 N.",
    subtopic: "Conditions for equilibrium"
  },
  {
    question: "A body is said to be in translational equilibrium when its",
    options: [
      "A. net force is zero",
      "B. net moment is zero",
      "C. speed is maximum",
      "D. weight is zero"
    ],
    answer: "A",
    explanation: "Translational equilibrium specifically means zero net force (no linear acceleration).",
    subtopic: "Conditions for equilibrium"
  },
  {
    question: "The centre of gravity of a body is the point where",
    options: [
      "A. its mass is zero",
      "B. the whole weight of the body appears to act",
      "C. it touches the ground",
      "D. its area is maximum"
    ],
    answer: "B",
    explanation: "The weight of a body can be taken as acting at a single point called the centre of gravity.",
    subtopic: "Centre of gravity & stability"
  },
  {
    question: "For a uniform rod, the centre of gravity lies at its",
    options: [
      "A. left end",
      "B. midpoint",
      "C. right end",
      "D. above the rod"
    ],
    answer: "B",
    explanation: "A uniform rod has its mass evenly spread, so its centre of gravity is at the geometric centre.",
    subtopic: "Centre of gravity & stability"
  },
  {
    question: "The centre of gravity of a uniform rectangular plate is at the",
    options: [
      "A. corner",
      "B. intersection of its diagonals",
      "C. edge",
      "D. bottom face"
    ],
    answer: "B",
    explanation: "For a uniform rectangle the CG is at the centre, where the diagonals intersect.",
    subtopic: "Centre of gravity & stability"
  },
  {
    question: "A body is in stable equilibrium if, when slightly displaced, it",
    options: [
      "A. falls over",
      "B. returns to its original position",
      "C. remains in the new position",
      "D. accelerates away"
    ],
    answer: "B",
    explanation: "Stable equilibrium means a restoring effect returns the body to its original position after a small displacement.",
    subtopic: "Centre of gravity & stability"
  },
  {
    question: "A body is in unstable equilibrium if, when slightly displaced, it",
    options: [
      "A. returns to position",
      "B. moves further away from its original position",
      "C. stays where displaced but neutral",
      "D. remains at rest"
    ],
    answer: "B",
    explanation: "Unstable equilibrium gives a disturbing effect, so the body moves farther from its original position.",
    subtopic: "Centre of gravity & stability"
  },
  {
    question: "A body is in neutral equilibrium if, when displaced, it",
    options: [
      "A. returns to position",
      "B. stays in the new position with no change in stability",
      "C. topples",
      "D. accelerates"
    ],
    answer: "B",
    explanation: "In neutral equilibrium the body remains in its new position (e.g. a sphere on a flat surface).",
    subtopic: "Centre of gravity & stability"
  },
  {
    question: "Lowering the centre of gravity of a body generally",
    options: [
      "A. decreases its stability",
      "B. increases its stability",
      "C. has no effect",
      "D. makes it topple"
    ],
    answer: "B",
    explanation: "A lower CG is harder to push outside the base of support, so stability increases.",
    subtopic: "Centre of gravity & stability"
  },
  {
    question: "A wide base of support makes a body",
    options: [
      "A. less stable",
      "B. more stable",
      "C. lighter",
      "D. top-heavy"
    ],
    answer: "B",
    explanation: "A wider base means the CG must move farther to pass outside the support, increasing stability.",
    subtopic: "Centre of gravity & stability"
  },
  {
    question: "A racing car is built low and wide mainly to",
    options: [
      "A. look attractive",
      "B. increase stability and avoid overturning",
      "C. reduce its mass to zero",
      "D. increase its speed only"
    ],
    answer: "B",
    explanation: "Low, wide design lowers the CG and widens the base, improving stability at high speed.",
    subtopic: "Centre of gravity & stability"
  },
  {
    question: "A body begins to topple when its centre of gravity passes",
    options: [
      "A. inside the base of support",
      "B. beyond the edge of its base of support",
      "C. to the centre",
      "D. upward"
    ],
    answer: "B",
    explanation: "Once the CG is outside the supporting base, the weight creates a toppling moment.",
    subtopic: "Centre of gravity & stability"
  },
  {
    question: "A pencil balanced on its tip is in",
    options: [
      "A. stable equilibrium",
      "B. unstable equilibrium",
      "C. neutral equilibrium",
      "D. no equilibrium"
    ],
    answer: "B",
    explanation: "Any small displacement makes the CG fall outside the tiny base, so it topples — unstable equilibrium.",
    subtopic: "Centre of gravity & stability"
  },
  {
    question: "A sphere resting on a flat horizontal surface is in",
    options: [
      "A. stable equilibrium",
      "B. unstable equilibrium",
      "C. neutral equilibrium",
      "D. rotational equilibrium only"
    ],
    answer: "C",
    explanation: "Rolling the sphere moves its CG but does not raise or lower it, so it stays in the new position (neutral).",
    subtopic: "Centre of gravity & stability"
  },
  {
    question: "To topple a rectangular block, one must make its centre of gravity pass",
    options: [
      "A. below the block",
      "B. beyond the supporting edge",
      "C. to the centre",
      "D. upward indefinitely"
    ],
    answer: "B",
    explanation: "Toppling occurs when the CG line of action falls outside the supporting edge, creating a net moment.",
    subtopic: "Centre of gravity & stability"
  },
  {
    question: "The lower the centre of gravity of a standing object, the",
    options: [
      "A. easier it topples",
      "B. more stable it is",
      "C. lighter it becomes",
      "D. faster it falls"
    ],
    answer: "B",
    explanation: "A low CG resists being tipped outside the base, increasing stability.",
    subtopic: "Centre of gravity & stability"
  },
  {
    question: "A lorry loaded with heavy cargo placed high up is easy to overturn because it has a",
    options: [
      "A. low centre of gravity",
      "B. high centre of gravity",
      "C. wide base",
      "D. light frame"
    ],
    answer: "B",
    explanation: "A high CG moves outside the wheel base more easily during a turn, causing overturning.",
    subtopic: "Centre of gravity & stability"
  },
  {
    question: "The centre of gravity of a uniform circular lamina is at its",
    options: [
      "A. edge",
      "B. centre",
      "C. circumference",
      "D. bottom"
    ],
    answer: "B",
    explanation: "Symmetry places the CG of a uniform disc at its geometric centre.",
    subtopic: "Centre of gravity & stability"
  }
];

module.exports = questions;
