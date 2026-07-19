export default [
  {
    heading: "What resolution of a vector means",
    body: "Resolution is the reverse of vector addition: it splits one vector into two or more component vectors that, when added, reproduce the original. The most useful split is into two perpendicular components, usually horizontal and vertical. Resolution lets you replace a single tilted vector with simpler pieces that act independently along convenient axes. Every inclined-force or projectile problem is solved this way.",
  },
  {
    heading: "The resolution formulas",
    body: "For a vector of magnitude R making an angle θ with the horizontal axis, the horizontal component is R cos θ and the vertical component is R sin θ. The cosine picks the side adjacent to the angle, the sine the side opposite. If θ is measured from the vertical instead, the roles swap, so always sketch the angle first. These two components are themselves perpendicular vectors whose tip-to-tail sum returns R.",
  },
  {
    heading: "Recombining components recovers the original",
    body: "Because the two perpendicular components are independent, their vector sum back gives the original: magnitude R = √((R cos θ)² + (R sin θ)²) and direction tan θ = (vertical) ÷ (horizontal). This two-way relationship means resolution and addition are exact inverses. You can resolve to simplify a problem, solve along each axis, then recombine the answers into a single resultant.",
  },
  {
    heading: "Choosing axes to make the maths easiest",
    body: "You are free to choose any pair of perpendicular directions for resolution, so pick axes that align with the motion or the surfaces in the problem. On a slope, resolving parallel and perpendicular to the incline removes the need for extra angles. Along a horizontal bench, horizontal and vertical axes are natural. Good axis choice turns a messy oblique problem into two straight-line calculations.",
  },
  {
    heading: "Why resolution simplifies inclined forces",
    body: "A force acting at an angle pushes partly along one direction and partly across another. Resolving it separates these effects so each can be balanced or accelerated independently. For example, a pull at 30° to the ground both drags an object forward (R cos 30°) and lifts it (R sin 30°). Treating the components separately is far clearer than wrestling with the tilted original force.",
  },
  {
    heading: "Worked example — resolving a single force",
    body: "A 10 N force acts at 30° above the horizontal. Horizontal component = 10 cos 30° = 10 × 0.866 ≈ 8.66 N. Vertical component = 10 sin 30° = 10 × 0.5 = 5.0 N. These two perpendicular forces together are exactly equivalent to the original 10 N pull. The original can now be replaced by an 8.66 N horizontal push plus a 5.0 N upward lift in any further calculation.",
  },
  {
    heading: "Resolution on an inclined plane",
    body: "A block of weight W on a slope of angle θ has its weight resolved into a component W sin θ down the slope and W cos θ perpendicular into the slope. The down-slope part drives the motion; the perpendicular part determines the normal reaction and thus the friction. This single resolution explains why objects accelerate down ramps and why steeper ramps feel heavier to hold back. It is the canonical use of vector resolution in mechanics.",
  },
  {
    heading: "Worked example — weight on a slope",
    body: "A 20 N block rests on a 30° incline. The component down the slope is 20 sin 30° = 10 N, and the component into the slope is 20 cos 30° ≈ 17.3 N. The 10 N down-slope pull is what must be balanced by friction or an opposing force, while the 17.3 N sets the normal reaction. Resolving makes both effects explicit without drawing the whole free-body diagram in one confusing tilted arrow.",
  },
  {
    heading: "Resolving into any two perpendicular directions",
    body: "Although horizontal/vertical is common, resolution works for any orthogonal pair, such as along and across a river or parallel/perpendicular to a wire. The component along a direction d is R cos φ, where φ is the angle between R and d. Breaking a vector along the natural directions of a problem often removes sines and cosines from later steps. Flexibility in axis choice is a key problem-solving skill.",
  },
  {
    heading: "Resolution vs addition — two views of the same thing",
    body: "Addition builds one resultant from several vectors; resolution builds several components from one vector. They are inverse operations and both rely on perpendicular independence and Pythagoras. Mastering both means you can either combine forces into a single net effect or split a force into manageable parts, whichever the question needs. Examiners test both directions, often within the same multi-step problem.",
  },
];
