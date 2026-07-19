export default [
  {
    heading: "What speed is",
    body: "Speed tells you how quickly an object covers distance. It is defined as the distance travelled divided by the time taken: speed = distance ÷ time, or s = d/t. Because it only asks 'how much ground was covered in how long', speed is a scalar quantity — it has magnitude (a number and a unit) but no direction. A speed of 15 m/s tells you the rate of travel but nothing about where the object is heading.",
  },
  {
    heading: "Distance versus displacement",
    body: "Speed uses distance (the total path length, ignoring direction), whereas velocity uses displacement (the straight-line change in position from start to finish). If you walk 40 m east then 40 m back, your distance is 80 m but your displacement is 0 m. Speed is built on distance, so it stays positive and never cancels out, no matter how twisty the route. This is why 'average speed' and 'average velocity' can give very different answers for the same journey.",
  },
  {
    heading: "Average speed",
    body: "When speed changes during a journey, the average speed is the TOTAL distance divided by the TOTAL time: average speed = total distance / total time. It is a single value that smooths over all the speeding-up and slowing-down. A car that crawls in traffic for 1 h then races for 1 h cannot be described by one instantaneous value, so we use the average to summarise the whole trip. Always check you are dividing the whole distance by the whole time, not a single leg.",
  },
  {
    heading: "Instantaneous speed",
    body: "Instantaneous speed is the speed at one particular moment — the value a car's speedometer shows. Mathematically it is the limit of distance ÷ time as the time interval shrinks to zero: v = Δs/Δt as Δt → 0. In the laboratory, a ticker-timer effectively gives near-instantaneous speed for each tiny interval between dots. Real motion is usually non-uniform, so instantaneous speed is often the quantity you actually care about rather than the average.",
  },
  {
    heading: "Units and conversions",
    body: "The SI unit of speed is metres per second (m/s or m s⁻¹). Kilometres per hour (km/h) is common for road travel, and you must be able to convert between them. Since 1 km = 1000 m and 1 h = 3600 s, 1 km/h = 1000/3600 ≈ 0.278 m/s, and to go the other way multiply by 3.6. Mixing up these units is a classic source of wrong answers, so always convert to m and s before calculating.",
  },
  {
    heading: "Worked example — average speed",
    body: "A bus travels 12 km in the first 20 minutes and 18 km in the next 30 minutes. Total distance = 12 + 18 = 30 km = 30 000 m. Total time = 20 + 30 = 50 min = 3000 s. Average speed = 30 000 ÷ 3000 = 10 m/s. In km/h this is 10 × 3.6 = 36 km/h. Notice we added all the distances and all the times first, then divided, rather than averaging the two separate speeds.",
  },
  {
    heading: "Worked example — conversion",
    body: "A sprinter runs 100 m in 10.0 s. Speed = 100 ÷ 10 = 10 m/s. To express this as km/h, multiply by 3.6: 10 × 3.6 = 36 km/h. Conversely, a speed limit of 72 km/h equals 72 ÷ 3.6 = 20 m/s. Keeping a mental conversion factor (×3.6 or ÷3.6) lets you sanity-check answers quickly and catch unit slips before they become graded mistakes.",
  },
  {
    heading: "Why speed has no direction",
    body: "Because speed is a scalar, two objects moving at 50 m/s in opposite directions have exactly the same speed. This is convenient when direction does not matter — for example, when estimating how long a trip takes. But it is also a limitation: speed alone cannot tell you whether a car is approaching or receding, which is why physics introduces velocity to carry directional information alongside the rate.",
  },
  {
    heading: "Estimating speed in context",
    body: "Before calculating, predict a rough speed to catch errors. A healthy person walks about 1.5 m/s, a cyclist about 5 m/s, and a family car on a road travels 10–30 m/s. If your calculation returns 500 m/s for a walking person, you have almost certainly used the wrong units or misplaced a decimal point. Order-of-magnitude thinking — is the answer about 1, 10, or 100? — protects you from absurd results.",
  },
  {
    heading: "Speed as the foundation of kinematics",
    body: "Speed is the simplest rate in motion study and the building block for harder ideas. Acceleration is the rate of change of velocity with time, so it is built from speed-like quantities; kinetic energy depends on speed squared (½mv²). Understanding s = d/t thoroughly — including the difference between average and instantaneous — makes the later topics of acceleration, graphs and equations of motion far easier to grasp.",
  },
];
