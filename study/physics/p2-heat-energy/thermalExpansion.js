export default [
  {
    heading: "Why substances expand when heated",
    body: "When a body is heated its particles vibrate with larger amplitude and, on average, spend more time further apart, so the material takes up more space. Nearly every solid, liquid and gas expands on heating (water between 0 °C and 4 °C is the important exception). Expansion is described by an expansivity — the fractional change in a dimension per kelvin rise in temperature. Understanding expansivity lets us predict and control the changes in size that heating produces in structures and devices.",
  },
  {
    heading: "Linear expansivity (α)",
    body: "For a solid rod or wire the linear expansivity α is defined by ΔL = α L₀ Δθ, where L₀ is the original length, Δθ the temperature rise and ΔL the increase in length. α is the fractional change in length per kelvin, with unit K⁻¹, and is a property of the material (e.g. α for steel ≈ 1.2 × 10⁻⁵ K⁻¹, for aluminium ≈ 2.3 × 10⁻⁵ K⁻¹). Because α is small, length changes are usually tiny but become large over long runs such as pipelines and rails. The same formula applies whether the body is heated or cooled.",
  },
  {
    heading: "Area and volume expansivity (β and γ)",
    body: "For sheets and blocks the change is described by area expansivity β ≈ 2α (ΔA = β A₀ Δθ) and volume (cubic) expansivity γ ≈ 3α (ΔV = γ V₀ Δθ). The factors 2 and 3 come from each of the two or three perpendicular dimensions expanding by α. For liquids only volume expansivity γ has meaning (there is no fixed shape), and it is typically much larger than for solids. These relations let you calculate, for example, how much a metal plate's hole enlarges or how a liquid's volume grows in a tank.",
  },
  {
    heading: "Worked example — linear expansion",
    body: "A 20 m steel rail at 15 °C is heated to 40 °C. With α = 1.2 × 10⁻⁵ K⁻¹, Δθ = 25 K, so ΔL = α L₀ Δθ = (1.2 × 10⁻⁵) × 20 × 25 = 6.0 × 10⁻³ m = 6 mm. If the rails were laid end-to-end with no gap, this 6 mm of growth per rail would buckle the track. Real railways therefore leave small expansion gaps or use welded rails with careful stress management.",
  },
  {
    heading: "Consequences in structures — gaps, buckling, sag",
    body: "Expansion must be allowed for in construction. Bridges and pipelines are fitted with expansion joints or loops so they can lengthen without cracking; railway lines buckle if gaps are omitted on a hot day; and overhead electrical cables are hung with slack so that, when they contract and tighten in cold weather, they do not snap. Long buildings use movement joints for the same reason. Ignoring thermal expansion has caused real structural failures, so engineers build in deliberate freedom to move.",
  },
  {
    heading: "Bimetallic strip and thermostat",
    body: "A bimetallic strip bonds two metals of different α (e.g. brass over invar) so that, on heating, one expands more than the other and the strip bends. This motion is used in thermostats to make or break an electrical contact at a set temperature, in oven and iron temperature regulators, and in simple thermometers. Because the bend is a direct, reliable response to temperature, bimetallic devices need no power and are cheap and robust.",
  },
  {
    heading: "Expansion of liquids — real vs apparent",
    body: "When a liquid in a glass vessel is heated, both the liquid and the container expand, so the rise seen on the scale (apparent expansion) is less than the liquid's true expansion. The real expansivity γ_real = γ_apparent + γ_vessel, where γ_vessel is the vessel's volume expansivity. Mercury thermometers are calibrated for apparent expansion, but precise work corrects for the glass. This distinction matters whenever a liquid's volume is read from a container that is also changing size.",
  },
  {
    heading: "Anomalous expansion of water",
    body: "Water is unusual: as it cools from 10 °C to 4 °C it contracts, reaches its maximum density at 4 °C, then between 4 °C and 0 °C it expands again. Ice (at 0 °C) is therefore less dense than liquid water, which is why ice floats. In cold climates the surface water cools, becomes denser and sinks until the whole lake reaches 4 °C; further cooling makes the surface less dense, so it stays on top and freezes, insulating the water below and protecting aquatic life from freezing solid.",
  },
  {
    heading: "Applications of controlled expansion",
    body: "Beyond thermostats, thermal expansion is put to use in shrink-fitting (a metal collar is heated, slipped over a shaft, and grips tightly as it cools), in bimetallic safety cut-outs, in dial thermometers, and in allowing for temperature in precision engineering and surveying. Conversely, the same effect must be compensated in pendulum clocks (a pendulum lengthens and slows when warm) and in measuring instruments. Expansion is thus both a tool to exploit and an error to correct.",
  },
  {
    heading: "Worked example — volume expansion of a liquid",
    body: "A 2.0 L (2.0 × 10⁻³ m³) glass flask of mercury at 20 °C is heated to 80 °C. Taking mercury's γ ≈ 1.8 × 10⁻⁴ K⁻¹, ΔV = γ V₀ Δθ = (1.8 × 10⁻⁴) × 2.0 × 10⁻³ × 60 = 2.16 × 10⁻⁵ m³ = 21.6 mL. The apparent overflow into a neck would be slightly less because the flask also expands; the real increase in the mercury's volume is 21.6 mL. Such calculations underpin the design of thermometers and expansion tanks.",
  },
];
