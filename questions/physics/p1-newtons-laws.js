// physics — Newton's Laws of Motion
const questions = [
  {
    question: "Newton's first law states that a body continues in its state of rest or uniform motion unless acted on by",
    options: [
      "A. a balanced force",
      "B. an external unbalanced force",
      "C. gravity only",
      "D. friction only"
    ],
    answer: "B",
    explanation: "Only a net external force can change a body's state of rest or of uniform straight-line motion.",
    subtopic: "First law"
  },
  {
    question: "The property of a body that makes it resist any change in its state of motion is called",
    options: [
      "A. momentum",
      "B. inertia",
      "C. energy",
      "D. velocity"
    ],
    answer: "B",
    explanation: "Inertia is the tendency of a body to keep doing what it is already doing (rest or uniform motion).",
    subtopic: "First law"
  },
  {
    question: "The measure of inertia of a body is its",
    options: [
      "A. weight",
      "B. mass",
      "C. volume",
      "D. density"
    ],
    answer: "B",
    explanation: "Mass is a measure of inertia: the greater the mass, the harder it is to accelerate the body.",
    subtopic: "First law"
  },
  {
    question: "A seat belt helps prevent injury in a sudden stop because it counters the passenger's",
    options: [
      "A. weight",
      "B. inertia",
      "C. momentum only",
      "D. gravity"
    ],
    answer: "B",
    explanation: "Due to inertia, the passenger tends to keep moving forward; the belt provides the force that stops them safely.",
    subtopic: "First law"
  },
  {
    question: "When a moving bus stops suddenly, passengers lurch forward because of their",
    options: [
      "A. weight",
      "B. inertia",
      "C. friction with the seat",
      "D. gravity"
    ],
    answer: "B",
    explanation: "Their bodies tend to continue moving forward (inertia) while the bus decelerates.",
    subtopic: "First law"
  },
  {
    question: "Dust particles fly off a rug when it is beaten because of",
    options: [
      "A. gravity",
      "B. inertia",
      "C. magnetism",
      "D. friction"
    ],
    answer: "B",
    explanation: "The rug is jerked away, but the dust tends to remain at rest due to inertia and so leaves the rug.",
    subtopic: "First law"
  },
  {
    question: "A body in deep space, far from all forces, will",
    options: [
      "A. stop immediately",
      "B. continue moving at constant velocity",
      "C. accelerate by itself",
      "D. fall"
    ],
    answer: "B",
    explanation: "With no net force, by the first law the body keeps its velocity unchanged (constant speed and direction).",
    subtopic: "First law"
  },
  {
    question: "Newton's first law is also known as the",
    options: [
      "A. law of acceleration",
      "B. law of inertia",
      "C. law of action-reaction",
      "D. law of gravitation"
    ],
    answer: "B",
    explanation: "It describes inertia, so it is called the law of inertia.",
    subtopic: "First law"
  },
  {
    question: "Inertia depends on the",
    options: [
      "A. speed of the body",
      "B. mass of the body",
      "C. shape of the body",
      "D. colour of the body"
    ],
    answer: "B",
    explanation: "Inertia is directly related to mass; heavier bodies have more inertia.",
    subtopic: "First law"
  },
  {
    question: "Which body has the greater inertia?",
    options: [
      "A. A 1 kg mass",
      "B. A 10 kg mass",
      "C. Both equal",
      "D. Neither has inertia"
    ],
    answer: "B",
    explanation: "Inertia increases with mass, so the 10 kg body resists changes in motion more.",
    subtopic: "First law"
  },
  {
    question: "A book lying on a table remains at rest because the forces on it are",
    options: [
      "A. unbalanced",
      "B. balanced (net force zero)",
      "C. all downward",
      "D. all upward"
    ],
    answer: "B",
    explanation: "Weight down and normal reaction up are equal and opposite, so there is no net force (first law).",
    subtopic: "First law"
  },
  {
    question: "When a bus accelerates forward, a standing passenger tends to fall backward due to",
    options: [
      "A. gravity",
      "B. inertia",
      "C. the bus pushing them",
      "D. friction"
    ],
    answer: "B",
    explanation: "Their body tends to remain in its original state (rest) while the bus moves forward beneath them.",
    subtopic: "First law"
  },
  {
    question: "A moving body does not stop by itself because, by Newton's first law, it would need",
    options: [
      "A. no force to keep moving",
      "B. an external force to stop it",
      "C. gravity to stop",
      "D. friction to keep it moving"
    ],
    answer: "B",
    explanation: "Without an external force (like friction/brakes) a body in motion continues moving.",
    subtopic: "First law"
  },
  {
    question: "Inertial mass is best described as the resistance of a body to",
    options: [
      "A. gravity",
      "B. any change in its motion (acceleration)",
      "C. heating",
      "D. cooling"
    ],
    answer: "B",
    explanation: "Inertial mass quantifies how much a body resists being accelerated by a force.",
    subtopic: "First law"
  },
  {
    question: "Newton's first law explains why a force is required to",
    options: [
      "A. keep a body moving in empty space",
      "B. change a body's state of motion",
      "C. give a body mass",
      "D. create gravity"
    ],
    answer: "B",
    explanation: "A force is needed only to start, stop or change the motion of a body.",
    subtopic: "First law"
  },
  {
    question: "A body moving with constant velocity has a net force of",
    options: [
      "A. maximum",
      "B. zero",
      "C. equal to its weight",
      "D. infinite"
    ],
    answer: "B",
    explanation: "Constant velocity means no acceleration, so by the first law the net force is zero.",
    subtopic: "First law"
  },
  {
    question: "Newton's second law states that force equals mass times",
    options: [
      "A. velocity",
      "B. acceleration",
      "C. distance",
      "D. time"
    ],
    answer: "B",
    explanation: "The second law is F = ma: net force = mass × acceleration.",
    subtopic: "Second law"
  },
  {
    question: "The newton (N), the SI unit of force, is equivalent to",
    options: [
      "A. kg·m/s",
      "B. kg·m/s²",
      "C. kg/s²",
      "D. kg·m²/s²"
    ],
    answer: "B",
    explanation: "From F = ma, 1 N = 1 kg × 1 m/s² = kg·m/s².",
    subtopic: "Second law"
  },
  {
    question: "For a given mass, the acceleration produced is",
    options: [
      "A. inversely proportional to the force",
      "B. directly proportional to the net force",
      "C. independent of force",
      "D. equal to the force"
    ],
    answer: "B",
    explanation: "a = F/m, so with fixed mass, larger force gives proportionally larger acceleration.",
    subtopic: "Second law"
  },
  {
    question: "For a given force, the acceleration produced is",
    options: [
      "A. directly proportional to the mass",
      "B. inversely proportional to the mass",
      "C. independent of mass",
      "D. equal to the mass"
    ],
    answer: "B",
    explanation: "a = F/m, so a heavier (larger mass) body accelerates less for the same force.",
    subtopic: "Second law"
  },
  {
    question: "A mass of 2 kg is accelerated at 3 m/s². The force required is",
    options: [
      "A. 6 N",
      "B. 1.5 N",
      "C. 5 N",
      "D. 0.67 N"
    ],
    answer: "A",
    explanation: "F = ma = 2 × 3 = 6 N.",
    subtopic: "Second law"
  },
  {
    question: "A force of 10 N acts on a mass of 2 kg. The acceleration is",
    options: [
      "A. 20 m/s²",
      "B. 5 m/s²",
      "C. 8 m/s²",
      "D. 0.2 m/s²"
    ],
    answer: "B",
    explanation: "a = F/m = 10 / 2 = 5 m/s².",
    subtopic: "Second law"
  },
  {
    question: "A mass of 5 kg is acted on by a force of 20 N. Its acceleration is",
    options: [
      "A. 4 m/s²",
      "B. 100 m/s²",
      "C. 0.25 m/s²",
      "D. 25 m/s²"
    ],
    answer: "A",
    explanation: "a = 20 / 5 = 4 m/s².",
    subtopic: "Second law"
  },
  {
    question: "The weight of a body is given by",
    options: [
      "A. m/a",
      "B. mg",
      "C. m²g",
      "D. g/m"
    ],
    answer: "B",
    explanation: "Weight is the gravitational force W = mg (with g ≈ 10 m/s² here).",
    subtopic: "Second law"
  },
  {
    question: "What is the weight of a 10 kg mass? (g = 10 m/s²)",
    options: [
      "A. 1 N",
      "B. 100 N",
      "C. 10 N",
      "D. 1000 N"
    ],
    answer: "B",
    explanation: "W = mg = 10 × 10 = 100 N.",
    subtopic: "Second law"
  },
  {
    question: "The weight of a 50 kg person is (g = 10 m/s²)",
    options: [
      "A. 5 N",
      "B. 500 N",
      "C. 50 N",
      "D. 5000 N"
    ],
    answer: "B",
    explanation: "W = 50 × 10 = 500 N.",
    subtopic: "Second law"
  },
  {
    question: "A car of mass 1000 kg accelerates at 2 m/s². The force provided is",
    options: [
      "A. 500 N",
      "B. 2000 N",
      "C. 200 N",
      "D. 200 000 N"
    ],
    answer: "B",
    explanation: "F = ma = 1000 × 2 = 2000 N.",
    subtopic: "Second law"
  },
  {
    question: "If the net force on a body of fixed mass is doubled, its acceleration",
    options: [
      "A. is halved",
      "B. is doubled",
      "C. stays the same",
      "D. becomes zero"
    ],
    answer: "B",
    explanation: "a = F/m; doubling F doubles a when m is constant.",
    subtopic: "Second law"
  },
  {
    question: "For the same force, doubling the mass causes the acceleration to",
    options: [
      "A. double",
      "B. halve",
      "C. stay the same",
      "D. quadruple"
    ],
    answer: "B",
    explanation: "a = F/m; doubling m halves a for the same force.",
    subtopic: "Second law"
  },
  {
    question: "A force of 4 N acts on a mass of 0.5 kg. The acceleration is",
    options: [
      "A. 2 m/s²",
      "B. 8 m/s²",
      "C. 0.125 m/s²",
      "D. 4.5 m/s²"
    ],
    answer: "B",
    explanation: "a = 4 / 0.5 = 8 m/s².",
    subtopic: "Second law"
  },
  {
    question: "A body of mass 2 kg moving at 6 m/s has a momentum of",
    options: [
      "A. 12 kg·m/s",
      "B. 3 kg·m/s",
      "C. 8 kg·m/s",
      "D. 0.33 kg·m/s"
    ],
    answer: "A",
    explanation: "Momentum p = mv = 2 × 6 = 12 kg·m/s.",
    subtopic: "Second law"
  },
  {
    question: "Newton's second law can be stated as: the net force equals the rate of change of",
    options: [
      "A. energy",
      "B. momentum",
      "C. mass",
      "D. position"
    ],
    answer: "B",
    explanation: "F = Δp/Δt, so net force equals the rate of change of momentum.",
    subtopic: "Second law"
  },
  {
    question: "Impulse is defined as force multiplied by time and equals the change in",
    options: [
      "A. energy",
      "B. momentum",
      "C. mass",
      "D. velocity only"
    ],
    answer: "B",
    explanation: "Impulse = Ft = change in momentum (Δp), useful for collisions.",
    subtopic: "Second law"
  },
  {
    question: "A constant force of 20 N acts for 3 s. The impulse delivered is",
    options: [
      "A. 60 N·s",
      "B. 6.67 N·s",
      "C. 23 N·s",
      "D. 17 N·s"
    ],
    answer: "A",
    explanation: "Impulse = Ft = 20 × 3 = 60 N·s (which equals the change in momentum).",
    subtopic: "Second law"
  },
  {
    question: "Newton's third law states that for every action there is",
    options: [
      "A. an equal and opposite reaction",
      "B. a greater reaction",
      "C. no reaction",
      "D. a smaller reaction"
    ],
    answer: "A",
    explanation: "Action and reaction are equal in magnitude and opposite in direction.",
    subtopic: "Third law"
  },
  {
    question: "Action and reaction forces act on",
    options: [
      "A. the same body",
      "B. two different bodies",
      "C. only one body",
      "D. no body"
    ],
    answer: "B",
    explanation: "They act on different bodies, which is why they do not cancel each other out.",
    subtopic: "Third law"
  },
  {
    question: "A rocket moves forward by expelling exhaust gas backward. This is an example of",
    options: [
      "A. the first law",
      "B. the third law (action-reaction)",
      "C. flotation",
      "D. viscosity"
    ],
    answer: "B",
    explanation: "The rocket pushes gas back (action); the gas pushes the rocket forward (reaction).",
    subtopic: "Third law"
  },
  {
    question: "When walking, you push the ground backward and the ground pushes you forward. This illustrates",
    options: [
      "A. the first law",
      "B. the third law",
      "C. the law of moments",
      "D. Archimedes' principle"
    ],
    answer: "B",
    explanation: "Your push on the ground (action) and the ground's push on you (reaction) are equal and opposite.",
    subtopic: "Third law"
  },
  {
    question: "Action and reaction forces are always",
    options: [
      "A. unequal in magnitude",
      "B. equal in magnitude and opposite in direction",
      "C. in the same direction",
      "D. on the same body"
    ],
    answer: "B",
    explanation: "Newton's third law says they are equal in size and opposite in direction.",
    subtopic: "Third law"
  },
  {
    question: "When you punch a wall, the wall exerts a force on your hand that is",
    options: [
      "A. smaller than your force",
      "B. equal to your force",
      "C. zero",
      "D. double your force"
    ],
    answer: "B",
    explanation: "By the third law the wall pushes back with a force equal in magnitude to the one you apply.",
    subtopic: "Third law"
  },
  {
    question: "For a book resting on a table, the weight of the book and the normal reaction from the table are",
    options: [
      "A. an action-reaction pair",
      "B. NOT an action-reaction pair (they act on the same body)",
      "C. both downward",
      "D. unequal"
    ],
    answer: "B",
    explanation: "Both forces act on the book, so they are not the third-law pair; the true pair is book–Earth and book–table.",
    subtopic: "Third law"
  },
  {
    question: "Action and reaction forces occur",
    options: [
      "A. one after the other",
      "B. simultaneously",
      "C. only when moving",
      "D. only in fluids"
    ],
    answer: "B",
    explanation: "They arise together at the same instant; one cannot exist without the other.",
    subtopic: "Third law"
  },
  {
    question: "A bird flies by pushing air downward, and the air pushes the bird",
    options: [
      "A. downward",
      "B. upward",
      "C. sideways",
      "D. backward"
    ],
    answer: "B",
    explanation: "The reaction to the bird's downward push on the air is an upward push of the air on the bird (lift).",
    subtopic: "Third law"
  },
  {
    question: "When a gun is fired, the bullet moves forward and the gun recoils backward because of",
    options: [
      "A. gravity",
      "B. action and reaction (third law)",
      "C. friction",
      "D. inertia only"
    ],
    answer: "B",
    explanation: "The explosive force on the bullet (forward) is matched by an equal backward force on the gun.",
    subtopic: "Third law"
  },
  {
    question: "Action and reaction forces do not cancel to give zero net force because they",
    options: [
      "A. are unequal",
      "B. act on different bodies",
      "C. act in the same direction",
      "D. are not simultaneous"
    ],
    answer: "B",
    explanation: "Since they act on different objects, each body feels a non-zero net force from its own pair member.",
    subtopic: "Third law"
  },
  {
    question: "A swimmer moves forward by pushing water backward; the water pushes the swimmer",
    options: [
      "A. backward",
      "B. forward",
      "C. downward",
      "D. upward only"
    ],
    answer: "B",
    explanation: "The reaction to pushing water back is a forward push of the water on the swimmer.",
    subtopic: "Third law"
  },
  {
    question: "When you jump from a boat, the boat moves backward because of",
    options: [
      "A. gravity",
      "B. action-reaction (you push boat back, it pushes you forward)",
      "C. wind",
      "D. friction"
    ],
    answer: "B",
    explanation: "Your push on the boat (backward action) produces an equal forward reaction on you and backward motion of the boat.",
    subtopic: "Third law"
  },
  {
    question: "A horse pulls a cart forward; the cart pulls the horse",
    options: [
      "A. forward with greater force",
      "B. backward with equal force",
      "C. not at all",
      "D. upward"
    ],
    answer: "B",
    explanation: "By the third law the cart exerts an equal backward pull on the horse; the horse moves because the ground pushes it forward.",
    subtopic: "Third law"
  },
  {
    question: "For every force exerted by one body on another, there is always",
    options: [
      "A. a smaller opposing force",
      "B. an equal and opposite reaction force",
      "C. no effect",
      "D. a force in the same direction"
    ],
    answer: "B",
    explanation: "This is the essence of Newton's third law: forces always come in equal, opposite pairs.",
    subtopic: "Third law"
  },
  {
    question: "The thrust of a rocket engine is equal to the",
    options: [
      "A. weight of the rocket",
      "B. rate of change of momentum of the exhaust",
      "C. mass of the rocket",
      "D. fuel volume"
    ],
    answer: "B",
    explanation: "Thrust = rate of change of momentum of the expelled exhaust gases (from F = Δp/Δt).",
    subtopic: "Third law"
  }
];

module.exports = questions;
