export default [
  {
    heading: "What a vector quantity is",
    body: "A vector is a physical quantity that has both magnitude (size) and direction. It is fully specified only when you state both, for example '10 N acting vertically downward'. Weight, displacement, velocity, acceleration and force are vectors, and so are momentum and magnetic field. Leaving out the direction makes a vector answer incomplete and wrong in the exam papers terms, even if the number is correct.",
  },
  {
    heading: "Direction is what makes a vector different",
    body: "Because a vector carries direction, two vectors of the same magnitude can produce completely different results depending on where they point. Two 10 N forces acting in the same direction give a combined effect of 20 N, but the same two forces acting in opposite directions give zero net effect. Direction is therefore not a decoration — it is part of the data, and it is why vectors cannot be added like ordinary numbers.",
  },
  {
    heading: "Vectors cannot use simple arithmetic addition",
    body: "You cannot add vectors by merely adding their magnitudes, because the directions may differ. The sum of a 3 N force east and a 4 N force north is not 7 N but about 5 N pointing between the two directions. Special rules — tip-to-tail, parallelogram, and resolution into components — exist precisely to handle this directional bookkeeping. Treating vectors as if they were scalars is a leading cause of errors in mechanics problems.",
  },
  {
    heading: "Common examples of vector quantities",
    body: "Weight (a force, e.g. 50 N downward), displacement (e.g. 10 m north-east), velocity (e.g. 20 m/s at 30° to the horizontal), acceleration (e.g. 9.8 m/s² downward) and force are the standard exam papers examples. Momentum (mass × velocity) is also a vector because velocity is one of its factors. Whenever a quantity answers the question 'which way?', it is a vector and must be drawn or stated with its direction.",
  },
  {
    heading: "Equal vectors and the negative of a vector",
    body: "Two vectors are equal only when they have the same magnitude AND the same direction; their positions in space do not matter for a free vector. The negative of a vector, written −A, has the same magnitude as A but points in exactly the opposite direction. Subtracting a vector is therefore the same as adding its negative. This idea is the key to vector subtraction and to understanding balanced, cancelling forces.",
  },
  {
    heading: "The zero (null) vector",
    body: "When two equal and opposite vectors are added, the result has zero magnitude and no defined direction — this is the zero or null vector, written 0. It arises whenever forces or velocities exactly cancel, such as a body at rest or one in equilibrium. The zero vector is useful as the 'no net effect' answer and signals that direction has been fully accounted for and removed.",
  },
  {
    heading: "Unit vectors — direction with magnitude one",
    body: "A unit vector has a magnitude of exactly 1 and exists only to specify a direction. In two dimensions the horizontal and vertical unit vectors i and j point along the x- and y-axes, so any vector can be written as a combination such as 3i + 4j. This notation makes addition and resolution mechanical: you simply add the i-parts and the j-parts separately. Unit vectors are the algebraic backbone beneath the arrow drawings.",
  },
  {
    heading: "Magnitude of a vector from its components",
    body: "If a vector is expressed as components, say 3 units horizontally and 4 units vertically, its magnitude follows from Pythagoras: R = √(3² + 4²) = 5. Its direction is given by tan θ = (vertical component) ÷ (horizontal component), here tan θ = 4/3. This shows how a vector's size and direction are recovered from the perpendicular pieces it is made of. The same relationship underlies every resolution and addition problem.",
  },
  {
    heading: "Worked example — opposite vectors cancel",
    body: "A 12 N force pulls a block to the right and a 12 N force pulls it to the left. Although each has magnitude 12 N, their directions are opposite, so they are 12 N and −12 N. Their sum is 12 + (−12) = 0 N: the zero vector. The block experiences no net force and, if initially at rest, stays at rest. This illustrates why stating direction is essential to finding the true result.",
  },
  {
    heading: "Why vectors are drawn, never just written",
    body: "Because direction is half the information, vectors are conventionally represented by arrows whose length shows magnitude (to scale) and whose head shows direction. A written value like '10 N' is only the magnitude; the arrow supplies the missing half. Drawing vectors early in a problem lets you see cancellations, right angles and components before you calculate, reducing sign errors and making the maths follow naturally from the picture.",
  },
];
