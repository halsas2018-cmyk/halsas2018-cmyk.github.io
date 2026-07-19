export default [
  {
    heading: "Viscosity — friction in fluids",
    body: "Viscosity is the internal friction of a fluid (a liquid or a gas): its resistance to flow and to the motion of objects through it. It comes from layers of fluid sliding past one another and from molecular attraction between them. Honey is far more viscous than water, so it pours slowly; air has very low viscosity compared with syrup. Viscosity is the fluid analogue of solid friction and is treated qualitatively at this level, but it strongly shapes how things move in liquids and gases.",
  },
  {
    heading: "Viscous drag on a moving body",
    body: "A body moving through a fluid is slowed by viscous drag — a force opposing its motion, acting like fluid friction. The drag comes from the fluid sticking to the surface and from the body having to push fluid out of the way. At low speeds drag is roughly proportional to speed; at higher speeds it grows with the square of speed. Streamlining a shape reduces drag by letting fluid flow smoothly past instead of tumbling into a turbulent wake behind it.",
  },
  {
    heading: "Stokes' law (qualitative)",
    body: "For a small sphere falling slowly through a viscous liquid, the drag force is given by Stokes' law, F = 6πηrv, where η (eta) is the coefficient of viscosity, r the sphere's radius, and v its speed. The law says drag grows with the fluid's viscosity, the size of the body, and its speed. It is the basis for measuring viscosity in the lab and explains why a tiny grain of sand sinks slowly in syrup while a pebble drops fast in water.",
  },
  {
    heading: "What terminal velocity is",
    body: "A body falling through a fluid does not accelerate forever. At first its weight (down) exceeds the upward forces, so it speeds up; but as speed rises, viscous drag and upthrust grow until together they exactly balance the weight. The net force then becomes zero, acceleration stops, and the body continues downward at a constant terminal velocity. Terminal velocity is the steady speed reached when driving and resisting forces balance.",
  },
  {
    heading: "Forces at terminal velocity",
    body: "For a sphere falling in a liquid, three forces act: weight W = mg downward, upthrust U (equal to the weight of displaced fluid) upward, and viscous drag F upward. At terminal velocity these balance: W = U + F. Because the net force is zero, by Newton's first law the body no longer accelerates and moves at constant speed. A heavier or more streamlined body (smaller drag) reaches a higher terminal velocity; a larger or blunter one reaches a lower one.",
  },
  {
    heading: "Worked example — terminal velocity",
    body: "A steel ball of weight 0.50 N falls in glycerine; the upthrust on it is 0.08 N. At terminal velocity the drag plus upthrust equals the weight, so drag F = W − U = 0.50 − 0.08 = 0.42 N. The ball then falls at constant speed because the 0.42 N drag and 0.08 N upthrust together cancel its 0.50 N weight. This balance is why raindrops and parachutists stop speeding up and drift down at a steady, safe speed.",
  },
  {
    heading: "Determination of terminal velocity",
    body: "To measure terminal velocity, drop a small sphere through a tall column of viscous liquid and mark two points well below the surface, once the sphere has stopped accelerating. Time its steady passage between them with a stopwatch; terminal velocity = distance ÷ time. Choosing marks far enough down ensures the early accelerating region is excluded. Repeating with different sphere sizes shows how terminal velocity depends on radius, confirming the viscous-drag relationship.",
  },
  {
    heading: "Factors affecting viscosity",
    body: "Viscosity depends strongly on temperature: heating a liquid usually lowers its viscosity (warm oil flows more easily), while a gas's viscosity slightly increases with temperature. It also differs hugely between substances — tar, honey, and engine oil are viscous; water and air are not. Pressure has little effect on liquids but matters for gases at high pressure. Knowing these trends explains why engines need thinner oil in cold weather and why syrup pours faster when warmed.",
  },
  {
    heading: "Applications in lubrication",
    body: "Viscosity is the key property of a lubricant. Oil in an engine forms a film between metal parts so they slide (or roll on bearings) instead of grinding; the oil must be viscous enough to separate the surfaces yet thin enough to flow and be pumped. Too low a viscosity and the film breaks, causing wear; too high and the engine wastes energy dragging through it. Selecting the right grade of oil is essentially choosing the right viscosity for the temperature and load.",
  },
  {
    heading: "Viscosity versus solid friction",
    body: "Both viscosity and solid friction oppose motion, but they differ. Solid friction (static then kinetic) acts at a contact surface and is roughly independent of speed; viscous drag acts throughout the fluid and grows with speed. Solid friction is nearly area-independent; viscous drag grows with the size and shape of the body. Both convert useful energy to heat and both are reduced by smoothing or separating surfaces — yet viscosity is a bulk property of the fluid itself, not just a surface effect.",
  }
];
