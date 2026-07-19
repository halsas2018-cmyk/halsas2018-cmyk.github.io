export default [
  {
    heading: "What a simple machine does",
    body: "A machine is a device that helps us do work by changing the size, direction, or point of application of a force. A simple machine lets a small effort move a large load, trading a large distance moved by the effort for a small distance moved by the load. It does NOT create energy — the work output can never exceed the work input. Machines are rated by how much they multiply force and how much is lost to friction.",
  },
  {
    heading: "Effort, load and fulcrum",
    body: "Every simple machine has three actors. The LOAD (L) is the resistance to be overcome (the weight being lifted). The EFFORT (E) is the force we apply. The FULCRUM (or pivot) is the fixed point about which the machine turns (in levers) or the axis in wheels and pulleys. Naming these correctly is the first step to writing the mechanical-advantage and velocity-ratio formulas for any machine.",
  },
  {
    heading: "Mechanical advantage (force ratio)",
    body: "Mechanical advantage, also called force ratio (M.A or F.R), is how many times the machine multiplies your effort: M.A = Load ÷ Effort = L/E. A M.A of 4 means a 100 N effort lifts a 400 N load. It is a ratio, so it has no unit. A large M.A is desirable but, because of friction, always costs you extra distance and some wasted energy.",
  },
  {
    heading: "Velocity ratio",
    body: "Velocity ratio (V.R) is the distance moved by the effort divided by the distance moved by the load in the same time: V.R = d_E / d_L. It depends only on the geometry of the machine (number of rope segments, lever arms, radii) and is unaffected by friction. For an ideal, frictionless machine V.R equals M.A; in reality friction makes M.A smaller than V.R.",
  },
  {
    heading: "Efficiency of a machine",
    body: "Efficiency compares useful work output to total work input: efficiency = (work output ÷ work input) × 100% = (L × d_L) / (E × d_E) × 100% = (L/E) / (d_E/d_L) × 100% = (M.A / V.R) × 100%. No real machine reaches 100% because friction turns some input work into heat. A machine with M.A = 3 and V.R = 4 is 75% efficient; the missing 25% is dissipated.",
  },
  {
    heading: "Levers — three classes",
    body: "A lever is a rigid bar turning about a fulcrum. Class 1 has the fulcrum between load and effort (crowbar, seesaw) and can give M.A > 1. Class 2 has the load between fulcrum and effort (wheelbarrow, nutcracker), always M.A > 1. Class 3 has the effort between fulcrum and load (tweezers, forearm), M.A < 1 but gains speed and distance. From moments about the fulcrum, M.A = (effort arm) / (load arm).",
  },
  {
    heading: "Pulleys and block-and-tackle",
    body: "A single fixed pulley changes the direction of the effort but has M.A = 1 and V.R = 1. A movable pulley attached to the load gives V.R = 2, halving the effort needed ideally. A block-and-tackle of n rope segments supporting the load has V.R = n, so ideal effort = L/n. Real systems lose a little to rope and pulley friction, so actual M.A is slightly below n.",
  },
  {
    heading: "Inclined plane, wedge and screw",
    body: "An inclined plane lets you raise a load by a small force over a long slope instead of lifting it vertically; V.R = length / height of the plane. A wedge is a moving inclined plane that splits or lifts (axe, doorstop). A screw is an inclined plane wrapped around a cylinder; its V.R = circumference of the screw head ÷ pitch (distance between threads). All trade distance for force.",
  },
  {
    heading: "Wheel and axle, and gears",
    body: "A wheel-and-axle (door knob, windlass) has V.R = radius of wheel ÷ radius of axle; a large wheel turning a small axle multiplies force (or, reversed, multiplies speed). Gears transmit rotation between toothed wheels; the V.R is the ratio of teeth (or radii) of the driven to the driver wheel. These are the basis of bicycles, clocks and vehicle transmissions, trading torque for speed as needed.",
  },
  {
    heading: "Worked example: pulley efficiency",
    body: "A block-and-tackle has 4 rope segments supporting the load, so V.R = 4. If an effort of 120 N just lifts a load of 360 N, M.A = 360 / 120 = 3. Efficiency = (M.A / V.R) × 100% = (3 / 4) × 100% = 75%. The work input is 120 N × (4 × distance), the useful output 360 N × distance; 25% of the input is lost to friction in the pulleys and rope.",
  },
  {
    heading: "Simple machines inside a bicycle",
    body: "A bicycle combines several simple machines. The pedals and front sprocket form a wheel-and-axle; the chain and rear sprocket are another wheel-and-axle working as gears with V.R = (rear teeth / front teeth). The wheels themselves are wheels-and-axles reducing rolling effort, and the brakes use a lever. Identifying these shows how a 'complicated machine' is built by combining simple ones, as the syllabus requires.",
  },
  {
    heading: "Effects of friction on machines",
    body: "Friction at pivots, axles, ropes and surfaces opposes motion and does negative work, so some input energy becomes heat instead of useful output. Its effects: M.A is reduced below V.R, efficiency falls below 100%, and the effort needed is larger than the ideal value. Friction also causes wear and heating that can damage the machine over time. Quantifying this lost work is central to comparing real and ideal machine performance.",
  },
  {
    heading: "Reducing friction in machines",
    body: "Friction is reduced by lubrication (oil or grease forming a thin film between surfaces), by using rolling elements such as ball or roller bearings instead of sliding contact, by polishing and smoothing surfaces, and by selecting low-friction materials. Good design (proper alignment, sealed bearings) also helps. Reducing friction raises efficiency and M.A toward their ideal V.R values and cuts wear and energy waste.",
  },
  {
    heading: "Why no real machine has M.A = V.R",
    body: "In an ideal frictionless machine, work input equals work output, so L·d_L = E·d_E and M.A = V.R exactly. In every real machine friction ensures work output < work input, which forces M.A < V.R and efficiency < 100%. The gap between V.R (geometry) and M.A (reality) is therefore a direct measure of frictional loss. This is why exam questions give you both ratios and ask for the efficiency.",
  },
];
