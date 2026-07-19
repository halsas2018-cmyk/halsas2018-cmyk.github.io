export default [
  {
    heading: "Why transmit at high voltage",
    body: "Delivered power is P = V I, so for fixed power a higher voltage means a smaller current. This matters because cable loss is P_loss = I²R, which rises with the SQUARE of the current. Raising V and shrinking I slashes wasted heat. Example: 100 kW at 10 kV needs I = 10 A (loss 100R); at 100 kV it needs I = 1 A (loss just R) — a hundred-fold cut for the same cable.",
  },
  {
    heading: "Loss P = I²R",
    body: "Every kilometre of line has resistance R, and the heat lost is I²R per unit length. Doubling the current quadruples the loss, so the best lever is keeping current low, done by stepping voltage up before the line. Thicker (lower-R) conductors help too but cost far more copper than simply transforming the voltage — which is why long lines run at hundreds of kilovolts, not a few hundred.",
  },
  {
    heading: "Step-up and step-down transformers",
    body: "Transformers make high-voltage transmission practical by changing voltage with negligible loss. A step-up transformer at the station raises the generator voltage for the grid; step-down transformers near homes lower it to safe levels. For an ideal transformer Vₚ/Vₛ = Nₚ/Nₛ and power in ≈ power out. Only a.c. allows this easy, efficient voltage change.",
  },
  {
    heading: "The national grid",
    body: "The chain is generator → step-up transformer → high-tension lines → step-down transformer → local distribution → homes. The grid is an interconnected a.c. network so any station can supply any region and load is balanced nationally. At each stage voltage is chosen to minimise loss while staying safe, and the whole system depends on the transformer and on alternating current.",
  },
  {
    heading: "Why the grid uses a.c.",
    body: "The grid uses a.c. chiefly because transformers need a changing flux to induce voltage, which only a.c. provides efficiently. With a.c. one steps voltage up for cheap long-haul transmission and down for safe use via simple, robust, near-loss-free transformers. Direct current would need expensive converters at every change, so a.c. won the 'battle of the currents' for distribution.",
  },
  {
    heading: "Wiring: live, neutral, earth",
    body: "A home receives three conductors: live carries the a.c. supply (about 230 V r.m.s. in Nigeria), neutral completes the circuit near earth potential, and earth is a safety path carrying no current normally. The live–neutral pair powers appliances; earth connects metal casings to ground so a fault sends current safely away and trips protection. Correct colours and firm joints prevent shock and fire.",
  },
  {
    heading: "Safety: fuses, breakers, earthing",
    body: "A fuse is a thin wire that melts and breaks the circuit on overload; a circuit breaker does the same electronically and resets. Earthing ensures that if live touches a metal case, a large fault current flows to ground and quickly blows the fuse or trips the breaker instead of leaving the casing live. Together they limit heat damage and shock risk, so they are mandatory in home wiring.",
  },
  {
    heading: "Worked example",
    body: "Send 50 kW 5 km along a line of total resistance 2 Ω. At 250 V the current is I = 50 000/250 = 200 A, so loss = (200)² × 2 = 80 000 W — more lost than delivered! At 10 kV, I = 5 A and loss = 5² × 2 = 50 W, a tiny fraction. The example shows why stepping voltage up before transmission, then down for use, is essential to deliver power economically.",
  },
];
