export default [
  {
    heading: "Power is the rate of doing work",
    body: "Power is defined as the rate at which work is done or energy is transferred. It tells you how FAST energy is being used or supplied, not how MUCH is used. Two tasks requiring the same total work can have very different power if one is done quickly and the other slowly. Power is what distinguishes a sprint from a stroll when the total energy expended is the same.",
  },
  {
    heading: "The basic formula P = W/t",
    body: "Power is calculated as P = W / t, where W is the work done (or energy transferred, in joules) and t is the time taken (in seconds). If 600 J of work is done in 3 s, the power is 600 ÷ 3 = 200 W. This is the most direct definition and is used whenever you know the total energy and the time over which it was delivered.",
  },
  {
    heading: "Power from force and speed: P = Fv",
    body: "When a constant force F moves a body at steady speed v in the force direction, power is P = Fv. This follows from P = W/t = (Fs)/t = F(s/t) = Fv. It is the form used for engines and moving vehicles: a car needs more power to maintain a higher speed against the same resistive force. Note v must be in m/s for the watt to come out correctly.",
  },
  {
    heading: "The watt and its multiples",
    body: "The SI unit of power is the watt (W), defined as 1 joule per second (1 W = 1 J/s). Larger powers use the kilowatt (1 kW = 1000 W) and megawatt (1 MW = 10⁶ W). Because power is energy per time, the watt links directly to the joule: run a 100 W bulb for 10 s and it transfers 1000 J of energy. Always write W (or kW) with power answers.",
  },
  {
    heading: "Power is not the same as energy",
    body: "Energy is the total amount of work done; power is how quickly it is done. A 2000 W kettle and a 200 W heater might both deliver 200 kJ, but the kettle does it in 100 s while the heater needs 1000 s. Confusing the two is a classic error: the unit joule (J) signals energy, the unit watt (W) signals rate. Check the unit to decide whether a number is an amount or a rate.",
  },
  {
    heading: "Worked example: climbing stairs",
    body: "A 50 kg student climbs a 6 m flight of stairs in 10 s. The work done against gravity is W = mgh = 50 × 10 × 6 = 3000 J. Her average power is P = W/t = 3000 / 10 = 300 W. This is the rate at which she converts chemical energy in her muscles into gravitational potential energy of her body.",
  },
  {
    heading: "Worked example: a car maintaining speed",
    body: "A car travels at a constant 20 m/s against a total resistive force of 500 N. The engine must supply a forward force of 500 N to balance it, so the power required is P = Fv = 500 × 20 = 10 000 W = 10 kW. If the speed doubles to 40 m/s the needed power doubles to 20 kW, showing why high-speed driving consumes so much more fuel.",
  },
  {
    heading: "Average and instantaneous power",
    body: "Average power is the total work divided by the total time (P = W/t) and hides any variation within the interval. Instantaneous power is the rate at a single moment, given by P = F·v evaluated then. A car accelerating from rest has low instantaneous power at the start (v ≈ 0) and higher power later; the average over the run lies between. in the exam problems 'power' usually means the average unless stated otherwise.",
  },
  {
    heading: "Power in electrical circuits",
    body: "The idea of power as energy-per-time carries into electricity unchanged. For a device of voltage V and current I, electrical power is P = VI (watts). A 12 V, 2 A lamp uses P = 24 W, i.e. 24 J of electrical energy each second, mostly becoming light and heat. This is the same watt as mechanical power — energy rate is energy rate in every branch of physics.",
  },
  {
    heading: "Typical power ratings",
    body: "For a sense of scale: a resting human outputs about 100 W of metabolic power, a trained cyclist brief bursts near 400 W, a household kettle 2–3 kW, a car engine 50–100 kW, and a small power station hundreds of MW. Comparing ratings helps you judge whether an answer is reasonable — a claim that 'a person generates 50 kW' is absurd and signals a unit or arithmetic slip.",
  },
  {
    heading: "Efficiency connects power in and out",
    body: "For a machine running steadily, efficiency = (useful power output ÷ power input) × 100%. A 1 kW electric motor that delivers 800 W of mechanical power to its load is 80% efficient; the missing 200 W becomes heat in the windings. Using power (rather than total energy) lets you describe continuous operation, which is how most real machines are rated and tested.",
  },
  {
    heading: "Worked example: lifting a load at constant speed",
    body: "A crane lifts a 200 kg container at a steady 0.5 m/s. The upward force equals the weight, 200 × 10 = 2000 N. The power delivered is P = Fv = 2000 × 0.5 = 1000 W = 1 kW. Equivalently, each second it raises the load 0.5 m, doing W = mgh = 2000 × 0.5 = 1000 J, so P = 1000 J / 1 s = 1 kW — both routes agree.",
  },
];
