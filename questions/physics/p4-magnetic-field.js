// physics — Magnetic Field
const questions = [
  {
    question: "A region around a magnet where its magnetic influence is felt is called its:",
    options: [
      "A. Electric field",
      "B. Magnetic field",
      "C. Gravitational field",
      "D. Thermal field"
    ],
    answer: "B",
    explanation: "The magnetic field is the region around a magnet (or current) where a magnetic force acts on another magnet or current.",
    subtopic: "Concept of magnetic field"
  },
  {
    question: "Magnetic field lines around a bar magnet emerge from the:",
    options: [
      "A. South pole and enter the north pole",
      "B. North pole and enter the south pole",
      "C. Centre of the magnet",
      "D. Earth only"
    ],
    answer: "B",
    explanation: "Outside the magnet, field lines run from the north pole to the south pole.",
    subtopic: "Concept of magnetic field"
  },
  {
    question: "The SI unit of magnetic flux density (magnetic field strength) is the:",
    options: [
      "A. Tesla",
      "B. Weber",
      "C. Ampere",
      "D. Henry"
    ],
    answer: "A",
    explanation: "Magnetic flux density B is measured in tesla (T), where 1 T = 1 N/(A·m).",
    subtopic: "Concept of magnetic field"
  },
  {
    question: "The SI unit of magnetic flux is the:",
    options: [
      "A. Tesla",
      "B. Weber",
      "C. Ampere",
      "D. Ohm"
    ],
    answer: "B",
    explanation: "Magnetic flux Φ = BA (for perpendicular field) is measured in webers (Wb).",
    subtopic: "Concept of magnetic field"
  },
  {
    question: "Unlike electric field lines, magnetic field lines:",
    options: [
      "A. Begin and end on charges",
      "B. Always form closed loops",
      "C. Are always straight",
      "D. Never exist in air"
    ],
    answer: "B",
    explanation: "Because there are no magnetic monopoles, magnetic field lines always form continuous closed loops.",
    subtopic: "Concept of magnetic field"
  },
  {
    question: "The direction of a magnetic field at a point is the direction of the force on a:",
    options: [
      "A. Stationary positive charge",
      "B. North pole of a compass needle",
      "C. South pole of a compass needle",
      "D. Stationary mass"
    ],
    answer: "B",
    explanation: "A compass north pole aligns with the field direction, so the field points where the north pole points.",
    subtopic: "Concept of magnetic field"
  },
  {
    question: "A plotting compass placed near a bar magnet aligns its north pole toward the magnet's:",
    options: [
      "A. North pole",
      "B. South pole",
      "C. Centre",
      "D. Side"
    ],
    answer: "B",
    explanation: "Unlike poles attract, so the compass north pole points toward the magnet's south pole along the field line.",
    subtopic: "Properties of magnets"
  },
  {
    question: "A material that is strongly attracted to a magnet and can be made into a permanent magnet is:",
    options: [
      "A. Copper",
      "B. Iron",
      "C. Wood",
      "D. Plastic"
    ],
    answer: "B",
    explanation: "Iron (a ferromagnetic material) is strongly attracted to magnets and can be magnetized.",
    subtopic: "Properties of magnets"
  },
  {
    question: "Which of the following is ferromagnetic?",
    options: [
      "A. Aluminium",
      "B. Steel",
      "C. Copper",
      "D. Air"
    ],
    answer: "B",
    explanation: "Steel (an iron alloy) is ferromagnetic and can retain magnetization as a permanent magnet.",
    subtopic: "Properties of magnets"
  },
  {
    question: "The poles of a magnet are always found in:",
    options: [
      "A. Pairs (north and south)",
      "B. Single isolated north poles",
      "C. Single isolated south poles",
      "D. Triplets"
    ],
    answer: "A",
    explanation: "Magnetic poles always occur in pairs; an isolated magnetic monopole has never been observed.",
    subtopic: "Properties of magnets"
  },
  {
    question: "If a bar magnet is cut into two equal halves, each half:",
    options: [
      "A. Has only a north pole",
      "B. Becomes a complete magnet with its own N and S poles",
      "C. Loses all magnetism",
      "D. Becomes non-magnetic"
    ],
    answer: "B",
    explanation: "Cutting a magnet produces two smaller complete magnets, each with a north and a south pole.",
    subtopic: "Properties of magnets"
  },
  {
    question: "The magnetic field is strongest at the:",
    options: [
      "A. Centre of a bar magnet",
      "B. Poles of a magnet",
      "C. Equator of a magnet",
      "D. Far from the magnet"
    ],
    answer: "B",
    explanation: "Field lines are most concentrated at the poles, so the field is strongest there.",
    subtopic: "Properties of magnets"
  },
  {
    question: "Like magnetic poles:",
    options: [
      "A. Attract",
      "B. Repel",
      "C. Have no effect on each other",
      "D. Cancel gravity"
    ],
    answer: "B",
    explanation: "Like poles (N–N or S–S) repel each other.",
    subtopic: "Properties of magnets"
  },
  {
    question: "Unlike magnetic poles:",
    options: [
      "A. Attract",
      "B. Repel",
      "C. Have no effect",
      "D. Become charged"
    ],
    answer: "A",
    explanation: "Unlike poles (N–S) attract each other.",
    subtopic: "Properties of magnets"
  },
  {
    question: "A magnetic material can be magnetized by:",
    options: [
      "A. Heating it above its melting point only",
      "B. Placing it in a magnetic field (stroking or using a current)",
      "C. Exposing it to light",
      "D. Cooling it to absolute zero only"
    ],
    answer: "B",
    explanation: "Magnetization aligns domains by exposing the material to a magnetic field (e.g. stroking with a magnet or a current-carrying coil).",
    subtopic: "Magnetization"
  },
  {
    question: "The process of making a magnet by repeatedly stroking a steel bar with one pole of a magnet is called:",
    options: [
      "A. Induction by current",
      "B. Single-touch method",
      "C. Heating",
      "D. Demagnetization"
    ],
    answer: "B",
    explanation: "The single-touch method magnetizes a piece by stroking it in one direction with one pole of a magnet.",
    subtopic: "Magnetization"
  },{
    question: "A steel bar can be demagnetized by:",
    options: [
      "A. Cooling it",
      "B. Heating it and hammering while placed east-west, or with an alternating field",
      "C. Exposing it to light",
      "D. Placing it near a stronger magnet"
    ],
    answer: "B",
    explanation: "Heating, hammering, or applying a decreasing alternating magnetic field randomizes the domains and demagnetizes the material.",
    subtopic: "Magnetization"
  },
  {
    question: "Domains in an unmagnetized ferromagnetic material are:",
    options: [
      "A. All aligned in one direction",
      "B. Randomly oriented",
      "C. Absent",
      "D. Always vertical"
    ],
    answer: "B",
    explanation: "In an unmagnetized material the magnetic domains point in random directions, giving no net field.",
    subtopic: "Magnetization"
  },
  {
    question: "When a ferromagnetic material is magnetized, its domains become:",
    options: [
      "A. Randomly oriented",
      "B. Largely aligned in one direction",
      "C. Destroyed",
      "D. Reversed randomly"
    ],
    answer: "B",
    explanation: "Magnetization aligns most domains in one direction, producing a net magnetic field.",
    subtopic: "Magnetization"
  },
  {
    question: "Soft iron is preferred for electromagnet cores because it:",
    options: [
      "A. Retains magnetism strongly",
      "B. Is easily magnetized and demagnetized",
      "C. Is a poor conductor",
      "D. Cannot be magnetized"
    ],
    answer: "B",
    explanation: "Soft iron has high permeability and low retentivity, so it gains and loses magnetism quickly (ideal for electromagnets).",
    subtopic: "Electromagnets"
  },
  {
    question: "Steel is preferred for permanent magnets because it:",
    options: [
      "A. Loses magnetism easily",
      "B. Retains magnetism (high retentivity)",
      "C. Is a poor conductor",
      "D. Cannot be magnetized"
    ],
    answer: "B",
    explanation: "Steel has high retentivity, so it keeps its magnetism and makes a good permanent magnet.",
    subtopic: "Magnetization"
  },
  {
    question: "The magnetic field around a long straight current-carrying wire is in the form of:",
    options: [
      "A. Straight parallel lines",
      "B. Concentric circles around the wire",
      "C. Radial lines outward",
      "D. A single straight line"
    ],
    answer: "B",
    explanation: "The field forms concentric circles; the right-hand grip rule gives their direction.",
    subtopic: "Concept of magnetic field"
  },
  {
    question: "The right-hand grip rule for a straight wire states that the thumb points in the direction of:",
    options: [
      "A. The magnetic field",
      "B. The current",
      "C. The force",
      "D. The voltage"
    ],
    answer: "B",
    explanation: "With the thumb along the current, the curled fingers show the direction of the circular magnetic field.",
    subtopic: "Concept of magnetic field"
  },
  {
    question: "The magnetic field at the centre of a circular current-carrying loop is:",
    options: [
      "A. Zero",
      "B. Perpendicular to the plane of the loop",
      "C. Parallel to the plane",
      "D. Random"
    ],
    answer: "B",
    explanation: "The field at the centre of a current loop is perpendicular to the plane of the loop.",
    subtopic: "Concept of magnetic field"
  },
  {
    question: "A solenoid carrying current produces a magnetic field similar to that of a:",
    options: [
      "A. Single charge",
      "B. Bar magnet",
      "C. Capacitor",
      "D. Resistor"
    ],
    answer: "B",
    explanation: "A current-carrying solenoid has a uniform internal field and pole-like ends, like a bar magnet.",
    subtopic: "Electromagnets"
  },
  {
    question: "The magnetic force on a current-carrying conductor of length L in a field B is given by:",
    options: [
      "A. F = BIL",
      "B. F = B/I",
      "C. F = B + I",
      "D. F = BI/L"
    ],
    answer: "A",
    explanation: "F = BIL sinθ; for the wire perpendicular to the field, F = BIL.",
    subtopic: "Magnetic force"
  },
  {
    question: "For maximum force, the current-carrying conductor should be at what angle to the magnetic field?",
    options: [
      "A. 0° (parallel)",
      "B. 90° (perpendicular)",
      "C. 45° always",
      "D. 180°"
    ],
    answer: "B",
    explanation: "F = BIL sinθ is maximum when sinθ = 1, i.e. the wire is perpendicular (90°) to the field.",
    subtopic: "Magnetic force"
  },
  {
    question: "The force on a current-carrying wire in a magnetic field is zero when the wire is:",
    options: [
      "A. Perpendicular to the field",
      "B. Parallel to the field",
      "C. At 45° to the field",
      "D. Outside the field"
    ],
    answer: "B",
    explanation: "F = BIL sinθ = 0 when θ = 0° (wire parallel to the field).",
    subtopic: "Magnetic force"
  },
  {
    question: "Fleming's left-hand rule is used to find the direction of the force on a current in a magnetic field. The thumb represents:",
    options: [
      "A. Field",
      "B. Motion (force)",
      "C. Current",
      "D. Voltage"
    ],
    answer: "B",
    explanation: "In Fleming's left-hand rule: thumb = motion/force, first finger = field, second finger = current.",
    subtopic: "Magnetic force"
  },
  {
    question: "The force on a moving charge q travelling with velocity v perpendicular to a magnetic field B is:",
    options: [
      "A. F = qvB",
      "B. F = q/B",
      "C. F = qv/B",
      "D. F = q + vB"
    ],
    answer: "A",
    explanation: "F = qvB sinθ; maximum when the velocity is perpendicular to the field (θ = 90°).",
    subtopic: "Magnetic force"
  },
  {
    question: "A charged particle moving parallel to a uniform magnetic field experiences a force of:",
    options: [
      "A. Maximum value",
      "B. Zero",
      "C. qvB",
      "D. Infinite"
    ],
    answer: "B",
    explanation: "When velocity is parallel (θ = 0°) to B, F = qvB sin0 = 0.",
    subtopic: "Magnetic force"
  },
  {
    question: "The path of a charged particle entering a uniform magnetic field perpendicularly is a:",
    options: [
      "A. Straight line",
      "B. Circle",
      "C. Parabola",
      "D. Spiral always"
    ],
    answer: "B",
    explanation: "The magnetic force is perpendicular to velocity, providing centripetal force for circular motion.",
    subtopic: "Magnetic force"
  },
  {
    question: "An electromagnet is made by passing current through a coil wound on a:",
    options: [
      "A. Plastic core",
      "B. Soft iron core",
      "C. Copper core",
      "D. Wooden core"
    ],
    answer: "B",
    explanation: "A soft iron core greatly strengthens and concentrates the field of a current-carrying coil (electromagnet).",
    subtopic: "Electromagnets"
  },
  {
    question: "The strength of an electromagnet can be increased by:",
    options: [
      "A. Reducing the number of turns",
      "B. Increasing the current or number of turns",
      "C. Removing the core",
      "D. Reversing the supply"
    ],
    answer: "B",
    explanation: "B inside a solenoid ∝ nI (turns per length × current), so more turns or more current strengthens it.",
    subtopic: "Electromagnets"
  },
  {
    question: "The polarity of an electromagnet can be reversed by:",
    options: [
      "A. Increasing the current",
      "B. Reversing the direction of current",
      "C. Removing the core",
      "D. Heating the coil"
    ],
    answer: "B",
    explanation: "Reversing the current reverses the magnetic field direction and hence the poles.",
    subtopic: "Electromagnets"
  },
  {
    question: "Electromagnets are used in:",
    options: [
      "A. Electric bells and relays",
      "B. Permanent compasses only",
      "C. Insulators",
      "D. Resistors"
    ],
    answer: "A",
    explanation: "Electromagnets are used in electric bells, relays, motors, and lifting magnets because their field can be switched.",
    subtopic: "Electromagnets"
  },
  {
    question: "The Earth's magnetic field is similar to that of a:",
    options: [
      "A. Bar magnet tilted with respect to the rotation axis",
      "B. Single charge",
      "C. Capacitor",
      "D. Straight wire"
    ],
    answer: "A",
    explanation: "Earth behaves like a large bar magnet with its magnetic axis tilted relative to the geographic axis.",
    subtopic: "Earth's magnetic field"
  },
  {
    question: "A compass needle at the Earth's surface points roughly to the:",
    options: [
      "A. Geographic north (near the magnetic south pole)",
      "B. Geographic south",
      "C. East",
      "D. Zenith"
    ],
    answer: "A",
    explanation: "The compass north pole is attracted to Earth's magnetic south pole, located near geographic north.",
    subtopic: "Earth's magnetic field"
  },
  {
    question: "The angle between the geographic meridian and the magnetic meridian is called the:",
    options: [
      "A. Angle of dip",
      "B. Angle of declination",
      "C. Angle of incidence",
      "D. Angle of reflection"
    ],
    answer: "B",
    explanation: "Declination (variation) is the angle between true (geographic) north and magnetic north.",
    subtopic: "Earth's magnetic field"
  },
  {
    question: "The angle that the Earth's total magnetic field makes with the horizontal is called the:",
    options: [
      "A. Angle of declination",
      "B. Angle of dip (inclination)",
      "C. Angle of incidence",
      "D. Latitude"
    ],
    answer: "B",
    explanation: "Angle of dip (inclination) is the angle between the Earth's field and the horizontal; it is 0° at the equator and 90° at the poles.",
    subtopic: "Earth's magnetic field"
  },
  {
    question: "At the magnetic equator, the angle of dip is approximately:",
    options: [
      "A. 90°",
      "B. 0°",
      "C. 45°",
      "D. 180°"
    ],
    answer: "B",
    explanation: "At the magnetic equator the Earth's field is horizontal, so the angle of dip is 0°.",
    subtopic: "Earth's magnetic field"
  },
  {
    question: "At the magnetic poles, the angle of dip is approximately:",
    options: [
      "A. 0°",
      "B. 90°",
      "C. 45°",
      "D. 30°"
    ],
    answer: "B",
    explanation: "At the magnetic poles the field is vertical, so the angle of dip is 90°.",
    subtopic: "Earth's magnetic field"
  },
  {
    question: "A magnetic field can be produced by:",
    options: [
      "A. A stationary charge",
      "B. A moving charge (current)",
      "C. A mass at rest",
      "D. Heat alone"
    ],
    answer: "B",
    explanation: "Moving charges (currents) produce magnetic fields; stationary charges produce only electric fields.",
    subtopic: "Concept of magnetic field"
  },
  {
    question: "The magnetic flux through a coil is maximum when the field is:",
    options: [
      "A. Perpendicular to the area",
      "B. Perpendicular to the plane of the coil (normal to it)",
      "C. Zero",
      "D. Random"
    ],
    answer: "B",
    explanation: "Φ = BA cosθ is maximum when the field is normal (perpendicular) to the coil's plane (θ = 0).",
    subtopic: "Concept of magnetic field"
  },
  {
    question: "Materials such as iron that are strongly attracted into a magnetic field are:",
    options: [
      "A. Diamagnetic",
      "B. Ferromagnetic",
      "C. Non-magnetic",
      "D. Paramagnetic weakly only"
    ],
    answer: "B",
    explanation: "Ferromagnetic materials (iron, steel, nickel, cobalt) are strongly attracted into a magnetic field.",
    subtopic: "Properties of magnets"
  },
  {
    question: "Magnetic shielding is best achieved using:",
    options: [
      "A. Copper",
      "B. Soft iron",
      "C. Wood",
      "D. Glass"
    ],
    answer: "B",
    explanation: "Soft iron provides a low-reluctance path that diverts magnetic field lines, shielding the region inside.",
    subtopic: "Properties of magnets"
  },
  {
    question: "A current balance measures the force on a wire to determine:",
    options: [
      "A. Electric charge",
      "B. Magnetic flux density B",
      "C. Resistance",
      "D. Capacitance"
    ],
    answer: "B",
    explanation: "Using F = BIL, a current balance measures the magnetic force to find B.",
    subtopic: "Magnetic force"
  },
  {
    question: "The direction of the magnetic field inside a solenoid is from:",
    options: [
      "A. South pole to north pole inside",
      "B. North pole to south pole inside",
      "C. Random",
      "D. Only at the ends"
    ],
    answer: "A",
    explanation: "Inside a solenoid the field runs from its south pole to its north pole, completing the external N→S loop.",
    subtopic: "Concept of magnetic field"
  },
  {
    question: "The magnetic force between two parallel current-carrying wires is attractive when the currents are:",
    options: [
      "A. In the same direction",
      "B. In opposite directions",
      "C. Zero",
      "D. Alternating"
    ],
    answer: "A",
    explanation: "Parallel currents in the same direction attract; opposite currents repel.",
    subtopic: "Magnetic force"
  },
  {
    question: "The magnetic force between two parallel wires carrying currents in opposite directions is:",
    options: [
      "A. Attractive",
      "B. Repulsive",
      "C. Zero",
      "D. Infinite"
    ],
    answer: "B",
    explanation: "Parallel currents in opposite directions repel each other.",
    subtopic: "Magnetic force"
  },
  {
    question: "The magnetic field at the centre of a solenoid is proportional to:",
    options: [
      "A. The number of turns per unit length and the current",
      "B. The resistance only",
      "C. The voltage only",
      "D. The length only"
    ],
    answer: "A",
    explanation: "Inside a long solenoid B = μ₀nI, proportional to turns per unit length n and current I.",
    subtopic: "Electromagnets"
  },
  {
    question: "The angle of dip is used by compass makers to account for the fact that:",
    options: [
      "A. The field is not horizontal everywhere",
      "B. The field is always zero",
      "C. Gravity changes the needle",
      "D. Currents reverse"
    ],
    answer: "A",
    explanation: "Because Earth's field has a vertical component away from the equator, dip must be considered in compass design.",
    subtopic: "Earth's magnetic field"
  },
  {
    question: "A magnet loses most of its strength if:",
    options: [
      "A. Stored with keepers",
      "B. Heated strongly or hammered",
      "C. Placed near soft iron",
      "D. Kept cold"
    ],
    answer: "B",
    explanation: "Heat and mechanical shock randomize domains, demagnetizing the magnet.",
    subtopic: "Magnetization"
  }
];

module.exports = questions;
