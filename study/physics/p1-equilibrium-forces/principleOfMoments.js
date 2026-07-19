export default [
  {
    heading: "What a moment of a force is",
    body: "A moment is the turning effect a force produces when it acts about a pivot (also called an axis or fulcrum). Its size depends on two things: how large the force is and how far from the pivot it is applied. Mathematically the moment M = F × d, where F is the force and d is the perpendicular distance from the pivot to the line of action of the force. The unit is the newton-metre (N m), a compound unit, not a joule.",
  },
  {
    heading: "Only the perpendicular distance counts",
    body: "Only the component of the force perpendicular to the lever arm contributes to the turning effect. If a force F is applied at distance r from the pivot but at an angle θ to the arm, the moment is M = F r sinθ, because only the perpendicular component F sinθ turns the body. When the force acts along the arm (θ = 0°) the moment is zero — you cannot open a door by pushing along its length. This is why handles sit far from hinges and you push at right angles.",
  },
  {
    heading: "Clockwise and anticlockwise moments",
    body: "A moment is described by the sense in which it tends to turn the body. A force that tends to turn the body clockwise about a pivot gives a clockwise moment; one that tends to turn it anticlockwise gives an anticlockwise moment. To compare, we sum all clockwise moments and all anticlockwise moments separately, using direction as a sign rather than treating all magnitudes alike. The choice of which is positive is arbitrary but must stay consistent.",
  },
  {
    heading: "The principle of moments (statement)",
    body: "The principle of moments states that for a body in rotational equilibrium, the sum of the clockwise moments about any pivot equals the sum of the anticlockwise moments about that same pivot: ΣM_cw = ΣM_acw. Crucially this balance holds for ANY pivot point you choose on the body, not just the physical fulcrum — a direct consequence of the second condition of equilibrium. When the moments balance, the body has no tendency to rotate, however many forces act.",
  },
  {
    heading: "Moment of a couple (torque)",
    body: "A couple is a pair of equal, parallel forces acting in opposite directions but not along the same line. Because the forces are equal and opposite, their net force is zero, so a couple produces no translation — it produces only rotation. The moment of a couple (the torque) is one force multiplied by the perpendicular distance between their lines of action: τ = F × d_perp. Everyday examples are turning a water tap, using a corkscrew, and steering a wheel.",
  },
  {
    heading: "Why the couple formula is pivot-independent",
    body: "Consider two equal forces F separated by a perpendicular distance d, forming a couple. Taking moments about the line of action of one force, that force has zero moment arm while the other contributes F × d. Thus the total moment of the couple is F × d, independent of where the pivot is placed. This independence is the defining property of a couple: its torque is the same about every point, unlike a single force whose moment depends on the chosen pivot.",
  },
  {
    heading: "Levers — moments as a simple machine",
    body: "A lever is a rigid bar free to turn about a fulcrum; it trades force for distance using the principle of moments. In a first-class lever the fulcrum lies between effort and load (a seesaw or crowbar): a small effort far from the fulcrum balances a large load close to it because E × d_E = L × d_L. Mechanical advantage equals load ÷ effort, which also equals the effort-arm to load-arm ratio. Levers let a weak force move a heavy load by placing the effort farther out.",
  },
  {
    heading: "Worked example — balancing a seesaw",
    body: "A child of weight 20 N sits 0.30 m to the left of a seesaw pivot. To balance it, a second child of unknown weight W sits 0.60 m to the right. At equilibrium the anticlockwise moment (20 × 0.30 = 6.0 N m) equals the clockwise moment (W × 0.60), so W = 6.0 ÷ 0.60 = 10 N. The seesaw is level because the moments, not the weights, are equal; the lighter child sits farther out to compensate.",
  },
  {
    heading: "Worked example — unknown weight on a rule",
    body: "A uniform metre rule of weight 1.0 N is pivoted at its 50 cm mark and balanced by a 2.0 N weight at the 20 cm mark and an unknown W at the 80 cm mark. The rule's weight acts at its centre (the pivot), giving zero moment. The 2.0 N weight gives an anticlockwise moment 2.0 × 0.30 = 0.60 N m. Equilibrium requires W × 0.30 = 0.60, so W = 2.0 N.",
  },
  {
    heading: "Worked example — force applied at an angle",
    body: "A 50 N force is applied to the end of a 2.0 m spanner at 30° to the spanner. The turning moment about the bolt is M = F r sinθ = 50 × 2.0 × sin30° = 50 × 2.0 × 0.5 = 50 N m. Applied perpendicular (θ = 90°) the moment would be 100 N m — double — showing why you pull a spanner at right angles for maximum effect and never push along its length.",
  },
  {
    heading: "Experimental verification of the principle",
    body: "The principle is verified with a loaded metre rule pivoted at its centre. Known weights are hung at measured distances on both sides and adjusted until the rule balances horizontally. Plotting clockwise moment against anticlockwise moment gives a straight line through the origin, confirming M is proportional to both F and d. Precautions include avoiding parallax when reading distances and ensuring the rule is truly horizontal at balance — a staple exam practical.",
  },
];
