export default [
  {
    heading: "What a force field does",
    body: "A force field exerts a force on any suitable object placed inside it. A mass feels a force in a gravitational field, a charge feels a force in an electric field, and a magnetic pole or moving charge feels a force in a magnetic field. The force appears without contact, simply because the object entered the region. The strength and direction of that force tell us about the field at that location. This is the practical definition examiners use: a field is 'a region where a force is experienced'.",
  },
  {
    heading: "Field intensity — the definition",
    body: "Field intensity (or field strength) measures how strong a field is at a point. It is defined as the force experienced per unit of the relevant property placed there: gravitational field strength g = F/m, electric field strength E = F/q, and magnetic flux density B appears in F = BIL or F = qvB. Intensity is a property of the field at that point, not of the test object. Dividing by the test property removes the object's size, giving a number that describes the space itself.",
  },
  {
    heading: "Units of field intensity",
    body: "Because intensity is force per unit property, its units follow directly from the definition. Gravitational field strength has units N/kg, which is exactly equivalent to m/s² since F = ma. Electric field strength has units N/C (equivalently V/m). Magnetic flux density B is measured in tesla (T), where 1 T = 1 N/(A·m). Knowing the unit reminds you what the quantity physically means — force per unit mass, charge, or current-length.",
  },
  {
    heading: "Direction of a field",
    body: "The direction of a field at a point is defined by the direction of the force on a suitable test body. For gravity, the direction is toward the source (downward on Earth). For an electric field, it is the direction of the force on a positive test charge, so it points away from + charges and toward − charges. For a magnetic field, direction is given by a compass needle or by Fleming's rules for a moving charge. Specifying both magnitude and direction makes field strength a vector.",
  },
  {
    heading: "Conservative nature of fields",
    body: "A gravitational or electrostatic field is conservative: the work done moving a body between two points depends only on those points, not on the path taken. This is why you can define a unique potential energy for every position. Magnetic fields, by contrast, are non-conservative for moving charges — the force is always perpendicular to motion and does no work, so there is no magnetic potential energy. Recognising whether a field is conservative tells you immediately whether a potential can be defined.",
  },
  {
    heading: "Potential and potential energy in a field",
    body: "Because gravitational and electric fields are conservative, each point has a potential — the potential energy per unit mass or charge. Work done by the field equals the drop in potential energy, and work done against the field equals the gain. Potential is a scalar, so it adds algebraically (no directions to worry about). A body moving along an equipotential needs no work from the field. This 'energy picture' is often easier than tracking vectors everywhere.",
  },
  {
    heading: "Work done is path-independent",
    body: "Take a mass moved from height h₁ to h₂ in Earth's field. Whether you lift it straight up, along a slope, or in a zig-zag, the work against gravity is mgh₂ − mgh₁ — the same. This path-independence is the hallmark of a conservative field and lets us write a single potential function V(r). It also means energy is conserved: any round trip returns the body with no net work done by the field. Path-independence is what makes gravitational and electric potentials well-defined.",
  },
  {
    heading: "Equipotential surfaces",
    body: "An equipotential is a line or surface on which the potential has the same value everywhere, so no work is done moving along it. Equipotentials are always perpendicular to field lines — field lines cross them at right angles. For Earth's uniform surface field the equipotentials are horizontal planes; for a point mass they are concentric spheres. Drawing equipotentials alongside field lines gives a complete, easy-to-read map of the field. Where equipotentials are close together the field (the gradient) is strong.",
  },
  {
    heading: "How fields are produced (sources)",
    body: "Every field needs a source. Gravitational fields come from mass; electric fields from charge; magnetic fields from moving charge (current) or from permanent magnets. The more source you have, the stronger the field near it. Importantly, the source is unaffected by the test body we use to probe the field, provided the probe is small. Understanding the source tells you the field's shape: spherical symmetry for isolated masses, dipole patterns for bar magnets.",
  },
  {
    heading: "Superposition / additivity",
    body: "When several sources are present, the total field at a point is the vector sum of the fields each would produce alone — the principle of superposition. Two equal masses produce a field that cancels at the midpoint between them and doubles on the far side. For potentials, which are scalars, you simply add the numbers. Superposition lets you build complicated fields from simple ones and is why field calculations stay tractable. It applies to gravitational, electric and (for steady currents) magnetic fields alike.",
  },
  {
    heading: "Comparing g, E and B",
    body: "Although g, E and B describe different fields, they share the 'force per unit' structure. g ≈ 9.8 N/kg near Earth; E might be thousands of N/C near a charged dome; B up to several tesla in an MRI machine. g and E are conservative vector fields with associated potentials; B is not conservative for moving charges. All three let you predict a force from the local field and the object's property. Keeping this parallel in mind helps you move between the three topics in the exam.",
  },
  {
    heading: "Worked example — finding g from a weight",
    body: "A 2.0 kg mass is suspended and the spring balance reads 19.6 N. The gravitational field strength is g = F/m = 19.6 / 2.0 = 9.8 N/kg. Since 1 N/kg = 1 m/s², the field strength is also 9.8 m/s² — the acceleration the mass would have if released. This single measurement shows how field intensity is found directly from force and the test mass. The same method, with F = qE, gives electric field strength from a known charge.",
  },
];
