export default [
  {
    heading: "Adding vectors tip-to-tail (triangle law)",
    body: "To add vectors graphically, place the tail of the second arrow at the tip of the first, keeping each direction unchanged. The resultant is the single arrow drawn from the start of the first vector to the tip of the last. This 'tip-to-tail' or triangle method works for any number of vectors and is the most直观 way to see the combined effect. Extending the chain to three or more vectors gives the polygon law.",
  },
  {
    heading: "The parallelogram law for two vectors",
    body: "When two vectors start from the same point, complete a parallelogram using them as adjacent sides. The diagonal drawn from their common start point is their resultant, both in magnitude and direction. This is the method used on a force board, where two spring-balances pull on a ring and the diagonal predicts the single force that would replace them. The parallelogram and tip-to-tail laws always give the same answer.",
  },
  {
    heading: "Analytical addition of perpendicular vectors",
    body: "When two vectors are at right angles, their resultant magnitude comes straight from Pythagoras: R = √(P² + Q²). The direction is found from tan θ = Q/P, the angle the resultant makes with vector P. This is the simplest and most common case in exams. Because the components are independent, the perpendicular geometry turns vector addition into ordinary right-angled trigonometry.",
  },
  {
    heading: "General formula for non-perpendicular vectors",
    body: "When two vectors P and Q meet at an angle θ, the resultant magnitude is given by the cosine rule: R² = P² + Q² + 2PQ cos θ. The plus sign appears because θ is the angle between the vectors as drawn from a common point. If θ = 90°, cos θ = 0 and the formula reduces to Pythagoras; if θ = 180°, cos θ = −1 and the vectors subtract. This single relation covers every angle between the two vectors.",
  },
  {
    heading: "Finding the direction of a general resultant",
    body: "For non-right-angled addition, first get the magnitude from R² = P² + Q² + 2PQ cos θ, then find the direction with the sine rule or by resolving into components. A reliable approach is to resolve both vectors onto perpendicular axes, add the axis-components, and recombine with Pythagoras and tan θ. This component method avoids memorising extra formulae and works for any angle or any number of vectors.",
  },
  {
    heading: "The force-board experiment",
    body: "A force board is a practical way to verify vector addition: strings over pulleys pull a central ring with known weights (forces) in different directions. The single force needed to hold the ring at the same spot — found by a third balancing string — equals the equilibrant, whose negative is the resultant of the first two. Drawing the forces as a parallelogram and measuring the diagonal confirms the calculated resultant. It is a standard exam papers practical on this topic.",
  },
  {
    heading: "Vector addition is commutative",
    body: "The order in which you add vectors does not change the resultant: A + B = B + A. In the tip-to-tail picture, swapping the order merely retraces the same parallelogram or triangle. This is different from some real-world operations but holds for all the vector additions in mechanics. Knowing this lets you choose the most convenient order when sketching a problem.",
  },
  {
    heading: "Subtracting vectors by adding the negative",
    body: "Vector subtraction A − B is performed as A + (−B), where −B has the same size as B but points the opposite way. Geometrically you place the tail of −B at the tip of A, or equivalently draw both from a point and complete the appropriate triangle. Subtraction is how you find a change in velocity (final minus initial) or the relative velocity of one object as seen from another. It is addition in disguise, wearing a reversed arrow.",
  },
  {
    heading: "Worked example — perpendicular forces",
    body: "Two forces of 3 N and 4 N act at right angles. By Pythagoras the resultant is R = √(3² + 4²) = √(9 + 16) = √25 = 5 N. Its direction relative to the 3 N force satisfies tan θ = 4/3, giving θ ≈ 53°. So the combined effect is a single 5 N force at about 53° to the 3 N force. This 3-4-5 result is worth recognising instantly.",
  },
  {
    heading: "Worked example — forces at an oblique angle",
    body: "Two forces of 5 N and 5 N act at 120° to each other. Using R² = P² + Q² + 2PQ cos θ: R² = 25 + 25 + 2(5)(5)cos 120° = 50 + 50(−0.5) = 25, so R = 5 N. The resultant is 5 N, bisecting the angle between them. This shows two equal forces can yield a resultant smaller than their sum whenever they are not aligned.",
  },
];
