export default [
  {
    heading: "Statement of the principle",
    body: "The law of conservation of energy states that energy cannot be created or destroyed; it can only be transformed from one form to another or transferred from one body to another. The total energy of an isolated system — one exchanging neither matter nor energy with its surroundings — stays constant for all time. Established in the nineteenth century by Joule, Mayer and others, who showed heat is a form of energy, it is among the most thoroughly tested laws in physics. Any apparent 'loss' is really a transformation into a less useful form, never a disappearance. This underpins every calculation of energy flow.",
  },
  {
    heading: "Energy is a conserved scalar",
    body: "Energy is a scalar quantity: it has magnitude but no direction, so different forms simply add as ordinary numbers. Conservation means the sum of all forms — kinetic, potential, thermal, chemical, electrical, nuclear — at the start equals the sum at the end of any process. The joule (J) is the unit for every form, which is what lets you equate, say, chemical energy to the mechanical work it can do. This unity lets you 'follow the energy' through a device and account for every joule. A useful check is to list input and output forms and confirm they balance.",
  },
  {
    heading: "Conservation of mechanical energy",
    body: "With no dissipative forces such as friction or air resistance, the total mechanical energy (KE + PE) of a system is conserved. As an object falls, gravitational PE becomes KE; as it rises, KE becomes PE again — which is why an ideal pendulum would reach the same height forever. Mathematically, ½mv² + mgh = constant throughout the motion. In the real world, friction and drag convert some mechanical energy into thermal energy, so the mechanical part alone is not conserved; the total still is. Mechanical-energy conservation is thus a useful idealisation for many exam problems.",
  },
  {
    heading: "Transformations in common devices",
    body: "Almost every machine is a converter that moves energy from one store to another while conserving the total. A hydroelectric dam turns water's gravitational PE into electrical energy via a turbine-generator. An electric motor turns electrical energy into mechanical energy (and some heat). A loudspeaker turns electrical energy into sound; a battery stores chemical energy and releases it as electrical energy on demand. Tracing these chains — input store, conversion device, output store, wasted heat — is the practical skill the principle tests, from a torch to a power station.",
  },
  {
    heading: "Efficiency and degraded heat",
    body: "Because total energy is conserved, a machine can never deliver more energy than it is given; the 'missing' part has changed into a less useful form. Efficiency = (useful energy output ÷ total energy input) × 100%. The unusable part almost always ends up as low-temperature thermal energy (heat), hard to harness — physicists call this 'degraded' energy. A typical incandescent bulb is only about 5% efficient, wasting 95% of its electrical input as heat rather than light. Improving efficiency channels more conserved energy into the useful form and less into low-grade heat.",
  },
  {
    heading: "Worked example — falling body",
    body: "A 2 kg stone is dropped from 5 m (take g = 10 m/s²). Its initial gravitational PE is mgh = 2 × 10 × 5 = 100 J, and its initial KE is 0. As it falls, PE converts to KE, and just before impact all 100 J is kinetic: ½mv² = 100, so v = √(2×100/2) = √100 = 10 m/s. Because mechanical energy is conserved, the gain in KE exactly equals the loss in PE. This shows how conservation finds a speed from a height without knowing the fall time; air resistance would turn some of the 100 J into heat, reducing the final speed.",
  },
  {
    heading: "Worked example — efficiency",
    body: "A 2.0 kW heater runs for 2 minutes (120 s), so the electrical energy supplied is 2000 × 120 = 240 000 J = 240 kJ. If 200 kJ heats the water, the efficiency is (200 ÷ 240) × 100% ≈ 83%. The remaining 40 kJ is lost as heat to the surroundings. Conservation exposes errors directly: any claimed efficiency above 100% signals a mistake, since useful output cannot exceed total input. Real heaters, kettles and motors always show an efficiency below 100% once their waste heat is accounted for.",
  },
  {
    heading: "Why perpetual motion is impossible",
    body: "A perpetual motion machine is a supposed device that runs forever or outputs more energy than it consumes, and conservation proves it cannot exist. If it claimed to output more than it took in, it would create energy from nothing — a direct violation of the law. Real machines always lose some energy as friction and heat, so even an isolated one slowly stops without an external input. Countless inventors have proposed such machines, but all fail the energy-accounting test. Conservation is not just a tool but a hard limit on what is physically possible.",
  },
  {
    heading: "Closed vs open systems",
    body: "Whether you can apply 'energy is conserved' directly depends on the system boundary you choose. In an isolated (closed) system, no energy enters or leaves, so the total is strictly constant and you can equate initial and final states. In an open system — like a car engine — fuel (chemical energy) enters and exhaust heat and sound leave, so you must track flows across the boundary. Even then, widening the boundary to include the fuel supply and surroundings keeps the grand total conserved. Choosing the right system prevents the mistake of 'losing' energy that crossed the boundary.",
  },
  {
    heading: "Using the principle to explain transformations",
    body: "The chief exam papers use of conservation is to explain how energy moves through a process and account for every joule. You state the principle, identify the initial store(s), name the device or process, list the final store(s) including wasted heat, and confirm the totals balance. For a falling object, pendulum or roller-coaster you apply mechanical-energy conservation; for a motor, bulb or engine you compute efficiencies. The principle turns vague 'energy is used up' language into precise accounting, letting you tackle any energy-flow diagram with confidence.",
  },
];
