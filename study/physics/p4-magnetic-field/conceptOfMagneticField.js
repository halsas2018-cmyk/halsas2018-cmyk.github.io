export default [
  {
    heading: "What a magnetic field is",
    body: "A magnetic field is the region around a magnet, a current-carrying conductor, or a moving charge in which a magnetic pole or another moving charge experiences a force. Just as a gravitational field tells you where masses feel weight, a magnetic field tells you where magnetic poles feel a push or pull. The field is a real physical entity with direction and strength at every point, not just a drawing. We represent it with magnetic field lines whose direction at any point is the direction a free N pole would move if placed there.",
  },
  {
    heading: "Magnetic field lines and their properties",
    body: "Magnetic field lines are a visual tool with fixed rules. They run from the N pole to the S pole outside a magnet and close inside it, forming continuous loops with no beginning or end. The direction of the field at a point is the tangent to the line there, and the field's strength is shown by how closely the lines are spaced — crowded lines mean a strong field. Field lines never cross, because that would imply two different field directions at one point, which is impossible. Plotting them with iron filings or a navigating compass reveals the shape of the field around any source.",
  },
  {
    heading: "Magnetic flux (Φ) and the weber",
    body: "Magnetic flux Φ measures the total 'amount' of magnetic field passing through a surface. It is defined as Φ = B A cosθ, where B is the flux density, A the area, and θ the angle between the field and the normal to the surface. Its unit is the weber (Wb); one weber of flux through a loop means a strong overall field–area product. Thinking in terms of flux helps you picture field lines as 'tubes' of magnetism: the total number of lines piercing a surface is proportional to the flux. When flux through a circuit changes, an electromotive force is induced (covered in the Electromagnetic Field topic).",
  },
  {
    heading: "Magnetic flux density (B) and the tesla",
    body: "Magnetic flux density B describes how concentrated the field is at a point — it is flux per unit area: B = Φ / A, measured in tesla (T), where 1 T = 1 Wb m⁻². A larger B means a stronger field and a greater force on a current or charge placed there. The Earth's field is only about 25–65 μT (microtesla), while a strong laboratory magnet may reach several tesla. In calculations B is treated as a vector with both magnitude and direction, and it is the quantity that appears in the force formulas F = BIL sinθ and F = qvB sinθ.",
  },
  {
    heading: "Field around a straight current-carrying wire",
    body: "A straight wire carrying a current produces a magnetic field of concentric circles around the wire. The right-hand grip rule gives the direction: point the thumb of your right hand in the direction of conventional current and your curled fingers show the direction of the field lines. The field strength at distance r is B = μ₀I / (2πr), so it is strongest close to the wire and falls off with distance. Reversing the current reverses the field direction. This circular field is the basis for the force between two parallel wires and for many measuring instruments.",
  },
  {
    heading: "Field around a circular coil and a solenoid",
    body: "A single circular loop of current produces a field like a short bar magnet, strong through the centre of the loop. Stacking many loops into a long solenoid gives a field that is strong and nearly uniform inside and very weak outside — closely resembling a bar magnet, with one end acting as N and the other as S. Inside a long solenoid B = μ₀ n I, where n is the number of turns per unit length and I the current. Inserting a soft-iron core greatly increases B because the iron's domains align and reinforce the field. This is the principle behind electromagnets and inductors.",
  },
  {
    heading: "Neutral points where fields cancel",
    body: "A neutral point is a location where two or more magnetic fields are equal in magnitude and opposite in direction, so their vector sum is zero. A small compass placed there feels no net force and points unpredictably (it is 'directionless'). In practice you find neutral points by mapping the field of a bar magnet together with the Earth's horizontal field: the points where the magnet's field exactly cancels Earth's field are neutral. Plotting neutral points lets you compare field strengths and locate a magnet's field pattern experimentally without measuring instruments.",
  },
  {
    heading: "Units of flux and flux density (Wb and T)",
    body: "The accepted SI units are the weber (Wb) for magnetic flux and the tesla (T) for magnetic flux density, and exam papers expect you to use them correctly. Recall 1 T = 1 Wb m⁻², linking the two: a flux of 1 Wb spread uniformly over 1 m² corresponds to B = 1 T. When a problem gives flux in weber and an area in cm² or mm², convert the area to m² before dividing, or your B will be wrong by a factor of 10⁴ or 10⁶. Always state the unit with your numerical answer to a field-strength calculation.",
  },
  {
    heading: "Field of a permanent magnet versus a current",
    body: "Both a permanent magnet and a current-carrying conductor produce magnetic fields, but they differ in origin and control. A permanent magnet's field comes from the aligned domains of its material and is fixed until the magnet is altered; a current's field comes from moving charge and can be switched, reversed, or varied at will by changing the current. The shapes are also different: a bar magnet has the classic N-to-S external loop pattern, while a straight wire has circular fields and a solenoid has a near-uniform internal field. Recognising the source tells you which rule (pole rule versus right-hand grip) to apply.",
  },
  {
    heading: "Worked example — finding flux density",
    body: "A uniform magnetic field passes perpendicularly through a rectangular area of 4.0 cm² (which is 4.0 × 10⁻⁴ m²) and the total flux through it is 2.0 × 10⁻⁵ Wb. Using B = Φ / A, we get B = (2.0 × 10⁻⁵) / (4.0 × 10⁻⁴) = 0.050 T. Because the field is perpendicular to the area, cosθ = 1 and no correction is needed. If the same flux were spread over twice the area the density would halve to 0.025 T, illustrating that flux density falls as the area increases for fixed total flux.",
  },
];
