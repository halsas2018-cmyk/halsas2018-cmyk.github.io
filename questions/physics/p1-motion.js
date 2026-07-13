// physics — Motion
const questions = [
  {
    question: "Motion of a body is best described as a change in its",
    options: [
      "A. mass",
      "B. position with time",
      "C. volume",
      "D. temperature"
    ],
    answer: "B",
    explanation: "Motion is the change in position of a body relative to its surroundings with time.",
    subtopic: "Types of motion"
  },
  {
    question: "The chaotic, irregular movement of smoke particles in air is an example of",
    options: [
      "A. rotational motion",
      "B. random motion",
      "C. circular motion",
      "D. oscillatory motion"
    ],
    answer: "B",
    explanation: "Smoke particles show random (Brownian) motion caused by collisions with air molecules.",
    subtopic: "Types of motion"
  },
  {
    question: "A ball thrown vertically upward moves in",
    options: [
      "A. circular motion",
      "B. random motion",
      "C. rectilinear (straight-line) motion",
      "D. rotational motion"
    ],
    answer: "C",
    explanation: "Its path is a straight vertical line, so it is rectilinear (translational) motion.",
    subtopic: "Types of motion"
  },
  {
    question: "The spinning of a wheel about its axle is an example of",
    options: [
      "A. rotational motion",
      "B. translational motion",
      "C. random motion",
      "D. oscillatory motion"
    ],
    answer: "A",
    explanation: "Rotation is motion of a body about a fixed axis, as in a spinning wheel.",
    subtopic: "Types of motion"
  },
  {
    question: "A simple pendulum swinging to and fro executes",
    options: [
      "A. circular motion",
      "B. oscillatory motion",
      "C. random motion",
      "D. rotational motion"
    ],
    answer: "B",
    explanation: "Oscillatory motion is repeated to-and-fro movement about a fixed point (the equilibrium position).",
    subtopic: "Types of motion"
  },
  {
    question: "A body moving round a circular track has",
    options: [
      "A. circular motion",
      "B. linear motion",
      "C. random motion",
      "D. rotational motion about itself"
    ],
    answer: "A",
    explanation: "Motion along the circumference of a circle is circular motion.",
    subtopic: "Types of motion"
  },
  {
    question: "Which of the following is NOT a recognised type of motion?",
    options: [
      "A. Translational",
      "B. Rotational",
      "C. Oscillatory",
      "D. Stationary"
    ],
    answer: "D",
    explanation: "Stationary means no motion; translational, rotational and oscillatory are all types of motion.",
    subtopic: "Types of motion"
  },
  {
    question: "The velocity of body A relative to body B is given by",
    options: [
      "A. v_A + v_B",
      "B. v_A − v_B",
      "C. v_A × v_B",
      "D. v_A / v_B"
    ],
    answer: "B",
    explanation: "Relative velocity of A with respect to B is v_A − v_B (subtract B's velocity from A's).",
    subtopic: "Relative motion"
  },
  {
    question: "Two cars travel in the same direction at 20 m/s and 30 m/s. The velocity of the faster car relative to the slower is",
    options: [
      "A. 50 m/s",
      "B. 10 m/s",
      "C. 600 m/s",
      "D. 25 m/s"
    ],
    answer: "B",
    explanation: "Relative velocity = 30 − 20 = 10 m/s in the direction of travel.",
    subtopic: "Relative motion"
  },
  {
    question: "Two cars travel toward each other at 20 m/s and 30 m/s. Their relative speed of approach is",
    options: [
      "A. 10 m/s",
      "B. 50 m/s",
      "C. 600 m/s",
      "D. 25 m/s"
    ],
    answer: "B",
    explanation: "Opposite directions add: 20 + 30 = 50 m/s.",
    subtopic: "Relative motion"
  },
  {
    question: "A man walks at 2 m/s toward the front of a train moving at 10 m/s. His speed relative to the ground is",
    options: [
      "A. 8 m/s",
      "B. 12 m/s",
      "C. 20 m/s",
      "D. 5 m/s"
    ],
    answer: "B",
    explanation: "Velocities add in the same direction: 10 + 2 = 12 m/s.",
    subtopic: "Relative motion"
  },
  {
    question: "Rain falling vertically appears to fall at an angle to a person running because of",
    options: [
      "A. gravity changing",
      "B. relative motion between rain and the moving observer",
      "C. wind blowing upward",
      "D. the rain speeding up"
    ],
    answer: "B",
    explanation: "The observer's motion adds a horizontal component, making the rain appear slant (relative velocity).",
    subtopic: "Relative motion"
  },
  {
    question: "Two trains move in the same direction at the same speed. The velocity of one relative to the other is",
    options: [
      "A. the sum of their speeds",
      "B. zero",
      "C. twice the speed",
      "D. half the speed"
    ],
    answer: "B",
    explanation: "Equal velocities give a relative velocity of v − v = 0.",
    subtopic: "Relative motion"
  },
  {
    question: "A body at rest remains at rest, and a body in motion continues in uniform motion, unless acted upon by",
    options: [
      "A. a balanced force",
      "B. an unbalanced (net) force",
      "C. gravity only",
      "D. friction only"
    ],
    answer: "B",
    explanation: "A net (unbalanced) external force is needed to change a body's state of rest or uniform motion.",
    subtopic: "Cause of motion"
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
    explanation: "Inertia is the reluctance of a body to change its state of rest or of uniform motion.",
    subtopic: "Cause of motion"
  },
  {
    question: "A body moves with constant velocity when the forces on it are",
    options: [
      "A. unbalanced",
      "B. balanced (net force zero)",
      "C. all vertical",
      "D. frictional only"
    ],
    answer: "B",
    explanation: "Balanced forces give zero net force, so there is no change in velocity.",
    subtopic: "Cause of motion"
  },
  {
    question: "The quantity of matter in a body is its",
    options: [
      "A. weight",
      "B. mass",
      "C. volume",
      "D. density"
    ],
    answer: "B",
    explanation: "Mass is the quantity of matter in a body; weight is the force of gravity on it.",
    subtopic: "Cause of motion"
  },
  {
    question: "Motion is produced in a body when it is acted on by a",
    options: [
      "A. zero force",
      "B. net (unbalanced) force",
      "C. balanced force",
      "D. contact only"
    ],
    answer: "B",
    explanation: "Only a net unbalanced force changes the motion of a body (causing acceleration).",
    subtopic: "Cause of motion"
  },
  {
    question: "Force is a",
    options: [
      "A. scalar quantity",
      "B. vector quantity",
      "C. dimensionless quantity",
      "D. constant"
    ],
    answer: "B",
    explanation: "Force has both magnitude and direction, so it is a vector quantity.",
    subtopic: "Types of force"
  },
  {
    question: "Which of the following is a contact force?",
    options: [
      "A. Gravitational force",
      "B. Magnetic force",
      "C. Friction",
      "D. Electric force"
    ],
    answer: "C",
    explanation: "Friction acts between surfaces in contact; gravity and magnetic/electric forces can act at a distance.",
    subtopic: "Types of force"
  },
  {
    question: "A force that can act without contact between bodies is",
    options: [
      "A. tension",
      "B. friction",
      "C. gravitational force",
      "D. normal reaction"
    ],
    answer: "C",
    explanation: "Gravity is a field (non-contact) force that acts at a distance between masses.",
    subtopic: "Types of force"
  },
  {
    question: "Weight is best described as a",
    options: [
      "A. contact force",
      "B. gravitational force",
      "C. frictional force",
      "D. tension force"
    ],
    answer: "B",
    explanation: "Weight is the gravitational force exerted on a body by the Earth (W = mg).",
    subtopic: "Types of force"
  },
  {
    question: "Tension in a string acts",
    options: [
      "A. perpendicular to the string",
      "B. along the length of the string",
      "C. only at the ends",
      "D. outward from the centre"
    ],
    answer: "B",
    explanation: "Tension is a pulling force transmitted axially along the length of a string or rope.",
    subtopic: "Types of force"
  },
  {
    question: "The SI unit of force is the",
    options: [
      "A. joule",
      "B. newton",
      "C. watt",
      "D. pascal"
    ],
    answer: "B",
    explanation: "Force is measured in newtons (N), where 1 N = 1 kg·m/s².",
    subtopic: "Types of force"
  },
  {
    question: "A magnetic force can act",
    options: [
      "A. only on contact",
      "B. at a distance",
      "C. only in water",
      "D. only downward"
    ],
    answer: "B",
    explanation: "Magnetic forces are field forces that act at a distance without contact.",
    subtopic: "Types of force"
  },
  {
    question: "Friction always acts in a direction",
    options: [
      "A. the same as motion",
      "B. opposite to the relative motion (or attempted motion)",
      "C. perpendicular to the surface",
      "D. upward"
    ],
    answer: "B",
    explanation: "Friction opposes the relative motion (or the tendency to move) between two surfaces.",
    subtopic: "Solid friction"
  },
  {
    question: "Which statement about friction is correct?",
    options: [
      "A. Limiting friction is less than kinetic friction",
      "B. Limiting (static) friction is generally greater than kinetic friction",
      "C. Friction increases with contact area",
      "D. Friction has no effect on motion"
    ],
    answer: "B",
    explanation: "It usually takes more force to start motion than to keep it going, so limiting friction > kinetic friction.",
    subtopic: "Solid friction"
  },
  {
    question: "For two surfaces, the maximum static friction depends mainly on the",
    options: [
      "A. area of contact",
      "B. normal reaction and nature of the surfaces",
      "C. speed of motion",
      "D. colour of the surfaces"
    ],
    answer: "B",
    explanation: "Friction = μN, depending on the normal reaction and the coefficient μ (nature of surfaces), not on area.",
    subtopic: "Solid friction"
  },
  {
    question: "A block of weight 10 N rests on a horizontal surface with coefficient of friction 0.2. The frictional force just before sliding is",
    options: [
      "A. 2 N",
      "B. 10 N",
      "C. 0.2 N",
      "D. 5 N"
    ],
    answer: "A",
    explanation: "Maximum friction = μN = 0.2 × 10 = 2 N (N equals weight on a horizontal surface).",
    subtopic: "Solid friction"
  },
  {
    question: "Friction can be reduced by",
    options: [
      "A. roughening the surface",
      "B. lubrication (oil/grease)",
      "C. increasing the load",
      "D. increasing the area"
    ],
    answer: "B",
    explanation: "Lubricants form a thin film between surfaces, reducing direct contact and hence friction.",
    subtopic: "Solid friction"
  },
  {
    question: "Rolling friction is generally",
    options: [
      "A. greater than sliding friction",
      "B. less than sliding friction",
      "C. equal to sliding friction",
      "D. zero always"
    ],
    answer: "B",
    explanation: "Rolling involves much less resistance than sliding, which is why wheels are used.",
    subtopic: "Solid friction"
  },
  {
    question: "Static friction is the force that",
    options: [
      "A. opposes motion once sliding has begun",
      "B. prevents the start of motion up to a limiting value",
      "C. always equals weight",
      "D. acts only in fluids"
    ],
    answer: "B",
    explanation: "Static friction adjusts up to a maximum (limiting) value to prevent surfaces from starting to slide.",
    subtopic: "Solid friction"
  },
  {
    question: "The friction that exists in liquids and gases is called",
    options: [
      "A. viscosity",
      "B. static friction",
      "C. rolling friction",
      "D. tension"
    ],
    answer: "A",
    explanation: "Viscosity is the internal friction of a fluid that resists the relative motion of its layers.",
    subtopic: "Viscosity"
  },
  {
    question: "The viscosity of a liquid generally",
    options: [
      "A. increases as temperature rises",
      "B. decreases as temperature rises",
      "C. is independent of temperature",
      "D. becomes zero at high temperature"
    ],
    answer: "B",
    explanation: "Heating reduces intermolecular forces, so liquid viscosity decreases with rising temperature.",
    subtopic: "Viscosity"
  },
  {
    question: "A small sphere falling through a viscous liquid eventually reaches a constant speed called",
    options: [
      "A. escape velocity",
      "B. terminal velocity",
      "C. initial velocity",
      "D. critical velocity"
    ],
    answer: "B",
    explanation: "Terminal velocity is reached when the viscous drag plus upthrust balance the weight, so net force is zero.",
    subtopic: "Viscosity"
  },
  {
    question: "The viscous drag on a sphere moving through a fluid increases as its",
    options: [
      "A. speed decreases",
      "B. speed increases",
      "C. radius decreases",
      "D. density decreases"
    ],
    answer: "B",
    explanation: "By Stokes' law (F = 6πηrv), drag is proportional to speed, so it grows as the sphere moves faster.",
    subtopic: "Viscosity"
  },
  {
    question: "Honey flows more slowly than water because honey has",
    options: [
      "A. lower viscosity",
      "B. higher viscosity",
      "C. lower density",
      "D. no friction"
    ],
    answer: "B",
    explanation: "Greater viscosity means stronger internal friction, so honey resists flow more than water.",
    subtopic: "Viscosity"
  },
  {
    question: "The viscous drag on a small falling sphere acts",
    options: [
      "A. downward",
      "B. upward (opposing motion)",
      "C. sideways",
      "D. toward the centre"
    ],
    answer: "B",
    explanation: "Drag always opposes the motion, so it acts upward on a sphere falling downward.",
    subtopic: "Viscosity"
  },
  {
    question: "A body moving in a circle at constant speed requires a force directed",
    options: [
      "A. away from the centre",
      "B. toward the centre",
      "C. tangent to the circle",
      "D. vertically upward"
    ],
    answer: "B",
    explanation: "Centripetal force is always directed toward the centre of the circular path.",
    subtopic: "Circular motion"
  },
  {
    question: "For a body in uniform circular motion, the acceleration is directed",
    options: [
      "A. away from the centre",
      "B. toward the centre",
      "C. along the tangent",
      "D. zero"
    ],
    answer: "B",
    explanation: "Centripetal acceleration points to the centre; only direction changes (speed is constant).",
    subtopic: "Circular motion"
  },
  {
    question: "A body moving in a circle with constant speed has a velocity that",
    options: [
      "A. is constant",
      "B. changes because its direction changes",
      "C. is zero",
      "D. increases with time"
    ],
    answer: "B",
    explanation: "Velocity is a vector; even at constant speed, the changing direction means velocity changes.",
    subtopic: "Circular motion"
  },
  {
    question: "The relationship between linear speed v, angular speed ω and radius r is",
    options: [
      "A. v = ω/r",
      "B. v = ωr",
      "C. v = ω²r",
      "D. v = r/ω"
    ],
    answer: "B",
    explanation: "Linear speed equals angular speed times radius: v = ωr.",
    subtopic: "Circular motion"
  },
  {
    question: "A stone whirled in a horizontal circle at the end of a string is kept in the circle by",
    options: [
      "A. its weight",
      "B. the tension in the string",
      "C. friction with air only",
      "D. magnetism"
    ],
    answer: "B",
    explanation: "The string tension provides the required centripetal force toward the centre.",
    subtopic: "Circular motion"
  },
  {
    question: "The SI unit of angular velocity is",
    options: [
      "A. m/s",
      "B. rad/s",
      "C. N",
      "D. Hz only"
    ],
    answer: "B",
    explanation: "Angular velocity is measured in radians per second (rad/s).",
    subtopic: "Circular motion"
  },
  {
    question: "When a car rounds a bend too fast it may skid outward because",
    options: [
      "A. gravity pulls it outward",
      "B. the required centripetal force exceeds friction available",
      "C. its mass decreases",
      "D. the road pushes outward"
    ],
    answer: "B",
    explanation: "Friction supplies the centripetal force; if speed is too high the needed force exceeds what friction can give.",
    subtopic: "Circular motion"
  },
  {
    question: "A vibrating guitar string shows mainly",
    options: [
      "A. translational motion",
      "B. oscillatory motion",
      "C. random motion",
      "D. rotational motion"
    ],
    answer: "B",
    explanation: "The string moves back and forth about its rest position, which is oscillatory motion.",
    subtopic: "Types of motion"
  },
  {
    question: "A boat crossing a river has a resultant velocity equal to the",
    options: [
      "A. boat speed only",
      "B. vector sum of boat speed and river current",
      "C. difference of the two speeds",
      "D. product of the two speeds"
    ],
    answer: "B",
    explanation: "Velocities combine as vectors, so the resultant is the vector sum of the boat's and river's velocities.",
    subtopic: "Relative motion"
  },
  {
    question: "The tendency of a body to maintain its state of motion is explained by",
    options: [
      "A. Newton's second law",
      "B. Newton's first law (inertia)",
      "C. the law of flotation",
      "D. Archimedes' principle"
    ],
    answer: "B",
    explanation: "Newton's first law describes inertia — the resistance to change in state of rest or motion.",
    subtopic: "Cause of motion"
  },
  {
    question: "Upthrust is a force that acts",
    options: [
      "A. downward on a floating body",
      "B. upward on a body in a fluid",
      "C. only in gases",
      "D. sideways"
    ],
    answer: "B",
    explanation: "Upthrust (buoyant force) is a force exerted by a fluid upward on an immersed body.",
    subtopic: "Types of force"
  },
  {
    question: "Brakes on a vehicle stop it by using",
    options: [
      "A. magnetic force",
      "B. friction",
      "C. upthrust",
      "D. tension"
    ],
    answer: "B",
    explanation: "Brakes press pads against a disc/drum; the friction converts kinetic energy to heat and slows the vehicle.",
    subtopic: "Solid friction"
  },
  {
    question: "Stokes' law for the viscous drag on a small sphere is valid when the flow is",
    options: [
      "A. turbulent and fast",
      "B. streamline (laminar) and slow",
      "C. only in gases",
      "D. supersonic"
    ],
    answer: "B",
    explanation: "Stokes' law (F = 6πηrv) applies to small spheres moving slowly through a fluid with streamline flow.",
    subtopic: "Viscosity"
  },
  {
    question: "The so-called centrifugal force in circular motion is",
    options: [
      "A. a real outward force on the body",
      "B. an apparent force observed only in the rotating (non-inertial) frame",
      "C. the centripetal force",
      "D. gravity"
    ],
    answer: "B",
    explanation: "In an inertial frame only the inward centripetal force is real; 'centrifugal' is apparent in the rotating frame.",
    subtopic: "Circular motion"
  }
];

module.exports = questions;
