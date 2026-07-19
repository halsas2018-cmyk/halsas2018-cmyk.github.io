export default [
  {
    heading: "Force on a current-carrying conductor (the motor effect)",
    body: "When a wire carrying current I is placed in a magnetic field of flux density B, it experiences a force. This is the motor effect, the basis of electric motors. The magnitude is F = B I L sinθ, where L is the length of wire in the field and θ is the angle between the wire and the field direction. The force is maximum (F = BIL) when the wire is perpendicular to the field (θ = 90°) and zero when it is parallel (θ = 0°), because then sinθ = 0. The direction of the force is always perpendicular to both the field and the current.",
  },
  {
    heading: "Fleming's left-hand rule for direction",
    body: "To find the direction of the force on a conductor, use Fleming's left-hand rule: hold your left hand with the First finger pointing in the direction of the Field (B), the seCond finger pointing in the direction of the Current (conventional), and the thuMb then points in the direction of the Motion (force). The three directions are mutually perpendicular. This rule applies to the motor effect (current in a field) and is distinct from the right-hand rules used for generators and for the field around a wire. Learn the mnemonic: FBI — Field, Current, force (thuMb).",
  },
  {
    heading: "Maximum and minimum force conditions",
    body: "From F = BIL sinθ, the force depends entirely on sinθ. It is largest when θ = 90°, i.e. the current is perpendicular to the field, giving F = BIL. It shrinks to zero when θ = 0° or 180°, i.e. the wire runs parallel to the field lines, because a charge moving along the field feels no sideways push. In a motor the coil is arranged so that its sides are always roughly perpendicular to the field to get the biggest turning force. Recognising these limits lets you predict quickly whether a given wire orientation experiences a force at all.",
  },
  {
    heading: "Force between two parallel current-carrying wires",
    body: "Two long parallel wires each produce a circular field (right-hand grip rule), and each wire sits in the other's field, so they exert forces on each other. Parallel currents in the SAME direction attract; currents in OPPOSITE directions repel. The magnitude per unit length is F/L = μ₀ I₁ I₂ / (2πd), where d is their separation. This mutual force is not just a curiosity: it is the formal basis for defining the ampere, and it explains why busbars and adjacent cables must be spaced or braced to avoid being pulled together or pushed apart in heavy-current installations.",
  },
  {
    heading: "Force on a moving charged particle",
    body: "A charge q moving with velocity v through a field B also feels a magnetic force, given by F = q v B sinθ, where θ is the angle between v and B. Like the wire formula, it is maximum when v is perpendicular to B and zero when v is parallel to B. The direction is given by Fleming's left-hand rule if you treat the conventional current direction as the direction of motion of positive charge (reverse it for electrons). Crucially the force is always perpendicular to the velocity, so it changes the particle's direction but never its speed.",
  },
  {
    heading: "Circular motion of a charged particle in a field",
    body: "Because the magnetic force on a charge is always perpendicular to its velocity, it provides a centripetal force that bends the path into a circle (when v is perpendicular to B). Equating qvB = m v² / r gives the radius r = m v / (qB): faster or heavier particles trace wider circles, stronger fields or larger charges tighter ones. This is why electrons spiral in old television tubes and why a mass spectrometer can separate ions of different mass — particles with different m/q follow different radii. The particle's kinetic energy is unchanged because the force does no work.",
  },
  {
    heading: "Worked example — force on a straight wire",
    body: "A 0.20 m length of wire carrying 3.0 A is placed perpendicular to a uniform field of 0.50 T. Since the wire is perpendicular to the field, θ = 90° and sinθ = 1, so F = BIL = 0.50 × 3.0 × 0.20 = 0.30 N. The direction is found with Fleming's left-hand rule. If instead the wire were parallel to the field, sinθ = 0 and the force would be 0 N even though the current and field are unchanged — showing orientation matters as much as magnitude in the motor effect.",
  },
  {
    heading: "Worked example — radius of an electron's path",
    body: "An electron (charge e = 1.6 × 10⁻¹⁹ C, mass 9.1 × 10⁻³¹ kg) enters a 2.0 × 10⁻³ T field perpendicular to its 4.0 × 10⁶ m s⁻¹ velocity. The radius is r = m v / (qB) = (9.1 × 10⁻³¹ × 4.0 × 10⁶) / (1.6 × 10⁻¹⁹ × 2.0 × 10⁻³) ≈ 0.0114 m, about 1.1 cm. The path is a circle of this radius. Because the force is centripetal, the speed stays 4.0 × 10⁶ m s⁻¹ throughout; only the direction changes. This calculation underlies the design of devices that steer beams of charged particles.",
  },
  {
    heading: "Application — the electric motor",
    body: "An electric motor turns electrical energy into rotation using the motor effect. A current-carrying coil sits in a magnetic field and each side experiences a force; by Fleming's left-hand rule the two sides are pushed in opposite directions, producing a couple (turning effect). A split-ring commutator reverses the current every half-turn so the torque always acts in the same rotational direction. The force on each side is F = BIL (for a perpendicular coil), and the torque depends on the coil area, number of turns, current and field. Motors power fans, pumps, drills and countless appliances.",
  },
  {
    heading: "Application — the moving-coil galvanometer",
    body: "A moving-coil galvanometer measures small currents using the motor effect. A coil suspended in a radial magnetic field carries the current to be measured; the magnetic force on the coil produces a deflecting torque balanced by a hairspring. Because the field is radial, the deflection is directly proportional to the current, giving a linear scale. The same principle, with added shunt or multiplier resistors, becomes an ammeter or voltmeter. Understanding F = BIL and torque thus connects directly to the measuring instruments you use in the practical laboratory.",
  },
];
