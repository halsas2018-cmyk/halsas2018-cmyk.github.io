export default [
  {
    heading: "What pressure is",
    body: "Pressure is the force acting normally (perpendicularly) on unit area of a surface: P = F / A. Its SI unit is the pascal (Pa), where 1 Pa = 1 N m⁻². Unlike force, pressure depends on how the force is spread out: the same 10 N push feels gentle through a broad palm but painful through a sharp point, because the point has a far smaller area. This is why a girl in stiletto heels sinks into grass while a boy in trainers does not, for the same weight.",
  },
  {
    heading: "Why fluid pressure differs from solid pressure",
    body: "A solid transmits force only along the line of contact, but a fluid (liquid or gas) has no fixed shape and flows to fill its container. Because its particles are free to move, a fluid at rest exerts pressure in EVERY direction, not just downward. Press on a closed water bottle and the pressure increase is felt equally on the sides and bottom. This all-round action is the foundation of hydraulic machines and of Archimedes' principle.",
  },
  {
    heading: "Pressure increases with depth",
    body: "In a liquid at rest the pressure at a point is P = ρgh, where ρ is the liquid's density, g the acceleration due to gravity (≈ 9.8 m s⁻², often 10 in exams), and h the vertical depth below the free surface. The deeper you go, the more weight of liquid lies above you, so pressure grows. Example: at 5 m depth in water (ρ = 1000 kg m⁻³), P = 1000 × 10 × 5 = 50 000 Pa = 50 kPa, in addition to the atmospheric pressure at the surface.",
  },
  {
    heading: "Pressure acts equally in all directions",
    body: "A key property of a fluid at rest is that the pressure at a given depth is the same in every direction — up, down, and sideways. Blaise Pascal demonstrated this, and it follows from the fact that a fluid cannot sustain a shear (sideways) force while at rest. This is why a diver feels squeezed equally on the chest and back at the same depth, and why the walls of a dam must be strengthened with depth on all faces, not just the base.",
  },
  {
    heading: "Pressure depends on depth and density, not shape",
    body: "From P = ρgh, liquid pressure at a point depends only on the depth h and the liquid's density ρ, not on the total volume or the shape of the container. This is called the hydrostatic paradox: a narrow tall column of water can exert more pressure at its base than a wide shallow lake, if it is deeper. Two connected vessels of very different shapes but the same water level show the same pressure at equal depths — the basis of communicating vessels and the spirit level.",
  },
  {
    heading: "Pascal's principle stated",
    body: "Pascal's principle says: a change in pressure applied to an enclosed fluid is transmitted undiminished to every point of the fluid and to the walls of its container. The word 'enclosed' is essential — the principle applies to a confined fluid, not to an open surface where the pressure can escape to the atmosphere. It is a direct consequence of a fluid transmitting pressure equally in all directions.",
  },
  {
    heading: "Hydraulic press — the classic application",
    body: "A hydraulic press has two connected cylinders of different cross-sectional areas a (small) and A (large), filled with liquid. A force f on the small piston raises the pressure by f/a, which Pascal's principle transmits everywhere, so the large piston feels force F = (f/a) × A. Since A > a, the output force F is magnified by the ratio A/a. This lets a small effort lift a heavy load, exactly as a lever does, but through fluid instead of a rigid bar.",
  },
  {
    heading: "More hydraulic applications",
    body: "The same idea powers hydraulic car brakes, where foot pressure on a master cylinder is transmitted through brake fluid to clamp pads at each wheel with equal force. Hydraulic jacks lift cars, and hydraulic excavator arms use it for enormous digging force. The trade-off is distance: the small piston must move a large distance to make the large piston move a small one, conserving energy (work in ≈ work out).",
  },
  {
    heading: "Atmospheric pressure — pressure from the air",
    body: "The Earth's atmosphere has weight, so it presses down on everything at the surface; this is atmospheric pressure. At sea level it is about 1.01 × 10⁵ Pa (101 kPa), sometimes called 1 atmosphere. It is why a suction cap sticks and why you must suck to start liquid flowing in a straw — you reduce pressure inside, and the greater outside atmospheric pressure pushes the liquid up. We normally ignore it because we live inside it, but it is large: it equals the weight of a 10 m column of water above every square metre.",
  },
  {
    heading: "Measuring atmospheric pressure — the barometer",
    body: "A mercury barometer is a long glass tube, closed at one end and filled with mercury, inverted into a mercury reservoir. Atmospheric pressure supports a column of mercury about 760 mm (0.76 m) high at sea level. Since pressure = ρgh, P_atm = 13 600 × 9.8 × 0.76 ≈ 1.01 × 10⁵ Pa. An aneroid barometer uses a sealed, partially evacuated metal box that flexes with pressure changes — portable and used in altimeters.",
  },
  {
    heading: "Pressure gauges and everyday devices",
    body: "A U-tube manometer compares gas pressure to atmospheric pressure using a liquid column; the height difference h gives the excess pressure as ρgh. Siphons, syringes and hand pumps all work by creating a local pressure difference that the surrounding (usually atmospheric) pressure then exploits. A siphon, for instance, drains liquid from a higher to a lower level once started, driven by the pressure imbalance along the tube.",
  },
  {
    heading: "Worked example — pressure due to a liquid column",
    body: "Find the gauge pressure at the bottom of a 12 m deep lake. Using P = ρgh with ρ = 1000 kg m⁻³ and g = 10 m s⁻²: P = 1000 × 10 × 12 = 120 000 Pa = 120 kPa. This is the pressure from the water alone (gauge pressure); the absolute pressure adds atmospheric pressure (≈ 101 kPa), giving about 221 kPa. Always state whether your answer is gauge or absolute in exams.",
  },
];
