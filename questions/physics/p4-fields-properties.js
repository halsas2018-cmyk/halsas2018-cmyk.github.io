// physics — Description & Properties of Fields
const questions = [
  {
    question: "A field is best described as a region where a particular physical quantity has a value at every point. Which of the following is a field?",
    options: [
      "A. A region in which a force can be experienced",
      "B. A region containing only solid objects",
      "C. A closed container of gas",
      "D. A point mass with no surroundings"
    ],
    answer: "A",
    explanation: "A field is a region of space where a physical influence (such as a force) can be detected at each point, e.g. gravitational, electric or magnetic fields.",
    subtopic: "Concept of fields"
  },
  {
    question: "Which of the following quantities is a vector field quantity?",
    options: [
      "A. Temperature",
      "B. Electric potential",
      "C. Gravitational field strength",
      "D. Mass density"
    ],
    answer: "C",
    explanation: "Gravitational field strength has both magnitude and direction at each point, so it is a vector field. Temperature and potential are scalars.",
    subtopic: "Concept of fields"
  },
  {
    question: "A gravitational field is produced by which type of quantity?",
    options: [
      "A. Electric charge",
      "B. Mass",
      "C. Magnetic pole",
      "D. Current"
    ],
    answer: "B",
    explanation: "Any mass produces a gravitational field; the field strength increases with the mass of the body producing it.",
    subtopic: "Concept of fields"
  },
  {
    question: "An electric field exists in a region where a stationary charge experiences a force. The source of an electric field is:",
    options: [
      "A. Mass",
      "B. Electric charge",
      "C. Magnet",
      "D. Light"
    ],
    answer: "B",
    explanation: "Electric fields are produced by electric charges (stationary or moving); a charge placed in the field experiences an electrostatic force.",
    subtopic: "Concept of fields"
  },
  {
    question: "A magnetic field is produced by:",
    options: [
      "A. A stationary electric charge",
      "B. A moving electric charge (current)",
      "C. A mass at rest",
      "D. A source of heat"
    ],
    answer: "B",
    explanation: "Magnetic fields are produced by moving charges (currents) and by permanent magnets; a stationary charge produces only an electric field.",
    subtopic: "Concept of fields"
  },
  {
    question: "Which of the following is NOT a type of field studied in physics?",
    options: [
      "A. Gravitational field",
      "B. Electric field",
      "C. Magnetic field",
      "D. Colour field"
    ],
    answer: "D",
    explanation: "The three classical force fields are gravitational, electric and magnetic. 'Colour field' is not one of the standard classical fields.",
    subtopic: "Concept of fields"
  },
  {
    question: "A field that can act at a distance without any material medium is called a:",
    options: [
      "A. Contact field",
      "B. Non-contact (action-at-a-distance) field",
      "C. Frictional field",
      "D. Viscous field"
    ],
    answer: "B",
    explanation: "Fields such as gravitational and electromagnetic fields act at a distance through space without requiring a material medium.",
    subtopic: "Concept of fields"
  },
  {
    question: "The region around a magnet where its magnetic influence can be detected is called its:",
    options: [
      "A. Magnetic field",
      "B. Electric field",
      "C. Gravitational field",
      "D. Thermal field"
    ],
    answer: "A",
    explanation: "The magnetic field is the region around a magnet (or current) where a magnetic force can be experienced by another magnet or current.",
    subtopic: "Concept of fields"
  },
  {
    question: "A scalar field assigns a single number (with units) to each point in space. Which of the following is a scalar field?",
    options: [
      "A. Electric field strength",
      "B. Temperature distribution in a room",
      "C. Magnetic field",
      "D. Gravitational field strength"
    ],
    answer: "B",
    explanation: "Temperature at each point has only magnitude, so it is a scalar field. Field strengths are vectors (magnitude and direction).",
    subtopic: "Concept of fields"
  },
  {
    question: "A force field in which the work done moving a body around a closed path is zero is called:",
    options: [
      "A. A non-conservative field",
      "B. A conservative field",
      "C. A uniform field",
      "D. A random field"
    ],
    answer: "B",
    explanation: "In a conservative force field (e.g. gravitational and electrostatic), the work done around any closed loop is zero and potential energy is path-independent.",
    subtopic: "Properties of a force field"
  },
  {
    question: "The gravitational field strength g at a point is defined as:",
    options: [
      "A. Force per unit mass",
      "B. Mass per unit force",
      "C. Energy per unit charge",
      "D. Force per unit charge"
    ],
    answer: "A",
    explanation: "g = F/m, the force per unit mass exerted on a small test mass placed in the field; its SI unit is N kg⁻¹ or m s⁻².",
    subtopic: "Properties of a force field"
  },
  {
    question: "The electric field strength E at a point is defined as the force per unit:",
    options: [
      "A. Mass",
      "B. Volume",
      "C. Positive charge",
      "D. Length"
    ],
    answer: "C",
    explanation: "E = F/q, the force per unit positive charge; its SI unit is N C⁻¹ or V m⁻¹.",
    subtopic: "Properties of a force field"
  },
  {
    question: "Field lines (lines of force) are drawn such that the direction of the field at any point is:",
    options: [
      "A. Perpendicular to the line",
      "B. Tangent to the line",
      "C. Opposite to the line",
      "D. Parallel to the line and reversed"
    ],
    answer: "B",
    explanation: "The tangent to a field line at a point gives the direction of the field (force on a positive test charge or on a north pole).",
    subtopic: "Properties of a force field"
  },
  {
    question: "The strength of a field is represented on a field-line diagram by the:",
    options: [
      "A. Colour of the lines",
      "B. Density (closeness) of the lines",
      "C. Length of the lines",
      "D. Thickness of the lines"
    ],
    answer: "B",
    explanation: "Closely spaced field lines indicate a strong field; widely spaced lines indicate a weak field.",
    subtopic: "Properties of a force field"
  },
  {
    question: "Field lines for a gravitational field point:",
    options: [
      "A. Away from a mass",
      "B. Towards the mass",
      "C. In circles around the mass",
      "D. Parallel and never ending"
    ],
    answer: "B",
    explanation: "Gravitational force is always attractive, so gravitational field lines point toward the mass producing the field.",
    subtopic: "Properties of a force field"
  },
  {
    question: "Field lines for the electric field of a positive point charge point:",
    options: [
      "A. Towards the charge",
      "B. Away from the charge",
      "C. In closed loops",
      "D. Randomly"
    ],
    answer: "B",
    explanation: "The field direction is the direction of the force on a positive test charge, which is radially outward from a positive charge.",
    subtopic: "Properties of a force field"
  },
  {
    question: "Two field lines of the same field:",
    options: [
      "A. May cross each other",
      "B. Never cross",
      "C. Always form closed loops",
      "D. Are always straight"
    ],
    answer: "B",
    explanation: "If field lines crossed, the field would have two directions at one point, which is impossible; field lines of a single field never cross.",
    subtopic: "Properties of a force field"
  },
  {
    question: "A uniform field is one in which the field strength is:",
    options: [
      "A. Zero everywhere",
      "B. The same in magnitude and direction everywhere",
      "C. Different at every point",
      "D. Always directed to a point"
    ],
    answer: "B",
    explanation: "A uniform field has constant magnitude and direction, represented by equally spaced parallel field lines (e.g. between parallel plates).",
    subtopic: "Properties of a force field"
  },
  {
    question: "Which of the following is a conservative force field?",
    options: [
      "A. Gravitational field",
      "B. Frictional force field",
      "C. Viscous drag field",
      "D. Air resistance field"
    ],
    answer: "A",
    explanation: "Gravitational and electrostatic fields are conservative; friction and drag are non-conservative because energy is dissipated.",
    subtopic: "Properties of a force field"
  },
  {
    question: "The unit of gravitational field strength can be expressed as:",
    options: [
      "A. N C⁻¹",
      "B. N kg⁻¹",
      "C. C m⁻²",
      "D. J s⁻¹"
    ],
    answer: "B",
    explanation: "Since g = F/m, its unit is newton per kilogram (N kg⁻¹), equivalent to m s⁻².",
    subtopic: "Properties of a force field"
  },
  {
    question: "Earth's gravitational field strength near the surface is approximately:",
    options: [
      "A. 9.8 N kg⁻¹",
      "B. 1.6 N kg⁻¹",
      "C. 3.7 N kg⁻¹",
      "D. 0 N kg⁻¹"
    ],
    answer: "A",
    explanation: "Near Earth's surface g ≈ 9.8 m s⁻² (or 9.8 N kg⁻¹), the acceleration of free fall.",
    subtopic: "Properties of a force field"
  },
  {
    question: "In a uniform electric field between two parallel plates, the field lines are:",
    options: [
      "A. Curved and converging",
      "B. Straight, parallel and equally spaced",
      "C. Randomly scattered",
      "D. Concentric circles"
    ],
    answer: "B",
    explanation: "A uniform field is represented by straight, parallel, equally spaced field lines, as between oppositely charged parallel plates.",
    subtopic: "Properties of a force field"
  },
  {
    question: "The electric field strength between two parallel plates separated by distance d and potential difference V is:",
    options: [
      "A. E = Vd",
      "B. E = V/d",
      "C. E = d/V",
      "D. E = V + d"
    ],
    answer: "B",
    explanation: "For parallel plates, E = V/d, so a larger potential difference or smaller separation gives a stronger uniform field.",
    subtopic: "Properties of a force field"
  },
  {
    question: "A test charge placed in an electric field experiences a force. The direction of the force on a negative charge is:",
    options: [
      "A. In the direction of the field",
      "B. Opposite to the direction of the field",
      "C. Perpendicular to the field",
      "D. Zero"
    ],
    answer: "B",
    explanation: "E is defined by the force on a positive charge; a negative charge feels a force opposite to the field direction.",
    subtopic: "Properties of a force field"
  },
  {
    question: "Which quantity is a measure of the work done per unit mass in moving a body from infinity to a point in a field?",
    options: [
      "A. Field strength",
      "B. Gravitational potential",
      "C. Kinetic energy",
      "D. Momentum"
    ],
    answer: "B",
    explanation: "Gravitational potential at a point is the work done per unit mass in bringing a test mass from infinity to that point.",
    subtopic: "Properties of a force field"
  },
  {
    question: "Field lines around a long straight current-carrying wire are:",
    options: [
      "A. Straight and parallel",
      "B. Concentric circles around the wire",
      "C. Radial lines outward",
      "D. Random dots"
    ],
    answer: "B",
    explanation: "The magnetic field around a long straight wire forms concentric circles whose direction is given by the right-hand grip rule.",
    subtopic: "Properties of a force field"
  },
  {
    question: "A field line diagram for a bar magnet shows lines:",
    options: [
      "A. From south to north inside and outside",
      "B. From north to south outside the magnet, and south to north inside",
      "C. Only inside the magnet",
      "D. That stop at the equator"
    ],
    answer: "B",
    explanation: "Magnetic field lines emerge from the north pole, curve around to the south pole outside, and continue from south to north inside the magnet, forming closed loops.",
    subtopic: "Properties of a force field"
  },
  {
    question: "The property of a field by which it can store energy is associated with its:",
    options: [
      "A. Potential energy",
      "B. Colour",
      "C. Thickness",
      "D. Temperature"
    ],
    answer: "A",
    explanation: "A field can store potential energy (e.g. gravitational or electric potential energy) when a mass or charge is placed in it.",
    subtopic: "Properties of a force field"
  },
  {
    question: "Which of the following best describes a vector field?",
    options: [
      "A. A field with magnitude only",
      "B. A field with both magnitude and direction at each point",
      "C. A field that is always zero",
      "D. A field measured in kelvin"
    ],
    answer: "B",
    explanation: "A vector field assigns a vector (magnitude and direction) to each point in space, such as gravitational or electric field strength.",
    subtopic: "Concept of fields"
  },
  {
    question: "The electric field inside a charged hollow conductor in electrostatic equilibrium is:",
    options: [
      "A. Maximum at the centre",
      "B. Zero everywhere inside",
      "C. Equal to the surface field",
      "D. Directed outward"
    ],
    answer: "B",
    explanation: "Inside a hollow conductor charges reside on the surface, so the electric field inside is zero (electrostatic shielding).",
    subtopic: "Properties of a force field"
  },
  {
    question: "Lines of force for two unlike charges placed near each other:",
    options: [
      "A. Start on the positive and end on the negative charge",
      "B. Form closed loops between them",
      "C. Point away from both",
      "D. Are parallel and uniform"
    ],
    answer: "A",
    explanation: "Electric field lines begin on positive charges and terminate on negative charges; for unlike charges they run from + to −.",
    subtopic: "Properties of a force field"
  },
  {
    question: "The term 'action at a distance' in fields means:",
    options: [
      "A. Forces require physical contact",
      "B. Forces act through a field across empty space",
      "C. Forces only act in a vacuum",
      "D. Forces are always attractive"
    ],
    answer: "B",
    explanation: "Action at a distance describes how bodies influence each other via a field without direct contact, as in gravity and electromagnetism.",
    subtopic: "Concept of fields"
  },
  {
    question: "Which of these fields is always attractive?",
    options: [
      "A. Electric field",
      "B. Magnetic field",
      "C. Gravitational field",
      "D. Both electric and magnetic"
    ],
    answer: "C",
    explanation: "Gravity only attracts (there is no negative mass), whereas electric and magnetic forces can be attractive or repulsive.",
    subtopic: "Concept of fields"
  },
  {
    question: "The magnitude of the electric field due to a point charge Q at distance r is proportional to:",
    options: [
      "A. Q and r²",
      "B. Q/r²",
      "C. Q²/r",
      "D. r/Q"
    ],
    answer: "B",
    explanation: "E = kQ/r² (or Q/(4πε₀r²)), so field strength is proportional to the charge and inversely proportional to the square of the distance.",
    subtopic: "Properties of a force field"
  },
  {
    question: "Equipotential surfaces are always:",
    options: [
      "A. Parallel to the field lines",
      "B. Perpendicular to the field lines",
      "C. Along the field lines",
      "D. Curved with the field"
    ],
    answer: "B",
    explanation: "No work is done moving along an equipotential, so equipotential surfaces cut field lines at right angles.",
    subtopic: "Properties of a force field"
  },
  {
    question: "The gravitational field strength at distance r from a point mass M is given by:",
    options: [
      "A. GM/r",
      "B. GM/r²",
      "C. GMr²",
      "D. G/r²"
    ],
    answer: "B",
    explanation: "g = GM/r², the inverse-square law for the field of a point mass; G is the universal gravitational constant.",
    subtopic: "Properties of a force field"
  },
  {
    question: "Which of the following is a property used to describe the 'strength' of a magnetic field?",
    options: [
      "A. Magnetic flux density B",
      "B. Electric potential",
      "C. Temperature gradient",
      "D. Mass density"
    ],
    answer: "A",
    explanation: "Magnetic flux density B (tesla) quantifies the strength of a magnetic field at a point.",
    subtopic: "Properties of a force field"
  },
  {
    question: "A field whose strength falls off as 1/r² with distance from a point source is called a(n):",
    options: [
      "A. Linear field",
      "B. Inverse-square field",
      "C. Constant field",
      "D. Logarithmic field"
    ],
    answer: "B",
    explanation: "Both gravitational and electrostatic point-source fields obey the inverse-square law (∝ 1/r²).",
    subtopic: "Properties of a force field"
  },
  {
    question: "The force experienced by a charge q in an electric field E is:",
    options: [
      "A. F = q/E",
      "B. F = qE",
      "C. F = E/q",
      "D. F = q + E"
    ],
    answer: "B",
    explanation: "F = qE: the electrostatic force equals charge times electric field strength.",
    subtopic: "Properties of a force field"
  },
  {
    question: "Which statement about field lines is correct?",
    options: [
      "A. They show the path a mass must follow",
      "B. They indicate direction and relative strength of a field",
      "C. They are always straight",
      "D. They carry electric current"
    ],
    answer: "B",
    explanation: "Field lines are a visual aid showing direction (tangent) and relative strength (density) of a field, not actual particle paths.",
    subtopic: "Properties of a force field"
  },
  {
    question: "A region in which a mass experiences a force is a:",
    options: [
      "A. Magnetic field",
      "B. Gravitational field",
      "C. Electric field (for neutral mass)",
      "D. Thermal field"
    ],
    answer: "B",
    explanation: "A mass responds to a gravitational field (and to no electric force if uncharged), so the region is a gravitational field.",
    subtopic: "Concept of fields"
  },
  {
    question: "The SI unit of electric field strength is:",
    options: [
      "A. N C⁻¹",
      "B. N kg⁻¹",
      "C. C m⁻²",
      "D. J C⁻¹"
    ],
    answer: "A",
    explanation: "E = F/q gives units of newton per coulomb (N C⁻¹), equivalent to volt per metre (V m⁻¹).",
    subtopic: "Properties of a force field"
  },
  {
    question: "Which of the following fields is produced by a stationary electric charge?",
    options: [
      "A. Magnetic field only",
      "B. Electric field only",
      "C. Both electric and magnetic fields",
      "D. Gravitational field only"
    ],
    answer: "B",
    explanation: "A stationary charge produces an electric field; a magnetic field requires moving charge (current).",
    subtopic: "Concept of fields"
  },
  {
    question: "A conservative field implies that the potential energy of a body in it depends only on its:",
    options: [
      "A. Speed",
      "B. Position",
      "C. Mass only",
      "D. Time in the field"
    ],
    answer: "B",
    explanation: "In a conservative field, potential energy is determined solely by position, not by the path taken.",
    subtopic: "Properties of a force field"
  },
  {
    question: "The number of magnetic field lines passing through a surface is called the magnetic:",
    options: [
      "A. Flux",
      "B. Charge",
      "C. Current",
      "D. Potential"
    ],
    answer: "A",
    explanation: "Magnetic flux is the total number of field lines (B·A) passing through an area; its unit is the weber (Wb).",
    subtopic: "Properties of a force field"
  },
  {
    question: "Which of the following is TRUE about gravitational field lines?",
    options: [
      "A. They begin at infinity and end on a mass",
      "B. They form closed loops",
      "C. They can cross",
      "D. They point away from a mass"
    ],
    answer: "A",
    explanation: "Gravitational field lines are taken to begin at infinity and end on a mass (gravity is always attractive and has no source/sink like charges).",
    subtopic: "Properties of a force field"
  },
  {
    question: "The concept of a field was introduced primarily to explain:",
    options: [
      "A. How forces act between separated bodies",
      "B. How objects gain mass",
      "C. Why friction exists",
      "D. The speed of light"
    ],
    answer: "A",
    explanation: "Fields explain action-at-a-distance forces (gravity, electrostatics, magnetism) between bodies not in contact.",
    subtopic: "Concept of fields"
  },
  {
    question: "A uniform gravitational field near Earth's surface may be represented by:",
    options: [
      "A. Converging lines toward the centre",
      "B. Parallel, equally spaced, downward lines",
      "C. Circles around Earth",
      "D. Random short lines"
    ],
    answer: "B",
    explanation: "Near the surface, g is approximately uniform, so field lines are drawn parallel, equally spaced and directed downward.",
    subtopic: "Properties of a force field"
  },
  {
    question: "Compared with electric fields, magnetic field lines are unique because they:",
    options: [
      "A. Always begin and end on charges",
      "B. Always form closed loops",
      "C. Are always straight",
      "D. Never exist in air"
    ],
    answer: "B",
    explanation: "Magnetic monopoles do not exist, so magnetic field lines always form continuous closed loops.",
    subtopic: "Properties of a force field"
  },
  {
    question: "If the distance from a point mass is doubled, the gravitational field strength becomes:",
    options: [
      "A. Four times as great",
      "B. One quarter of its value",
      "C. Twice as great",
      "D. Unchanged"
    ],
    answer: "B",
    explanation: "Since g ∝ 1/r², doubling r reduces g to (1/2)² = 1/4 of its original value.",
    subtopic: "Properties of a force field"
  },
  {
    question: "The direction of an electric field at a point is defined as the direction of the force on a:",
    options: [
      "A. Negative charge",
      "B. Positive charge",
      "C. Neutral mass",
      "D. Electron only"
    ],
    answer: "B",
    explanation: "By convention, the electric field direction is the direction of the force that would act on a positive test charge.",
    subtopic: "Properties of a force field"
  }
];

module.exports = questions;
