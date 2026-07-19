export default [
  {
    heading: "Statement of the law of flotation",
    body: "The law of flotation states that a floating body displaces a weight of fluid equal to its own weight. In symbols, for a floating body: weight of body = weight of fluid displaced = upthrust. This is a special case of Archimedes' principle restricted to bodies that float at the surface, where the upthrust has adjusted (by partial emergence) until it exactly balances the weight. A floating log and the ocean liner that carries it obey the same law.",
  },
  {
    heading: "How it differs from Archimedes' principle",
    body: "Archimedes' principle applies to any immersed body (upthrust = weight of displaced fluid, whether the body sinks, rises, or floats). The law of flotation is the equilibrium outcome when the body floats, so upthrust = weight and only a PART of the volume is submerged. The key extra idea is partial immersion: a floating body settles so that the submerged fraction alone displaces a weight of fluid equal to the whole body's weight.",
  },
  {
    heading: "Why a steel ship floats",
    body: "Steel is about eight times denser than water, so a solid steel block sinks. But a ship is a hollow shell: its large total volume means that even partly filled with air, its AVERAGE density (total mass ÷ total volume, including the air spaces) is less than water's. It settles until the submerged hull displaces a weight of water equal to the ship's total weight. The shape, not the material alone, is what makes floating possible.",
  },
  {
    heading: "Fraction submerged relates densities",
    body: "For a floating body, weight = ρ_b · V_t · g and upthrust = ρ_f · V_s · g, where V_t is total volume and V_s the submerged volume. Equating them: ρ_b · V_t = ρ_f · V_s, so V_s / V_t = ρ_b / ρ_f. The fraction submerged equals the ratio of the body's density to the fluid's density. A body of density 600 kg m⁻³ in water (1000) sits with 600/1000 = 0.6, i.e. 60%, submerged. The denser the body, the deeper it sits.",
  },
  {
    heading: "Hydrometer — measuring density directly",
    body: "A hydrometer is a weighted, sealed glass tube that floats upright. In a denser liquid it sinks less (smaller V_s needed to displace its weight), so the liquid level on its calibrated scale reads a higher density; in a lighter liquid it sinks deeper. It applies the law of flotation directly: its fixed weight is always balanced by the displaced liquid's weight. Hydrometers are used for battery acid, milk, and alcohol concentration.",
  },
  {
    heading: "Submarines — controlling floatation",
    body: "A submarine has ballast tanks that can be filled with water or blown out with compressed air. Filled, the average density exceeds seawater and it submerges (behaves like a sinking body). Blowing them empty reduces average density below seawater, so it rises and floats. Partly flooded tanks let it hover at neutral buoyancy where weight equals upthrust. This is the law of flotation used in reverse to dive and surface at will.",
  },
  {
    heading: "Balloons and airships — flotation in air",
    body: "A helium or hot-air balloon rises because the weight of the air it displaces exceeds the weight of the balloon plus its gas. The upthrust from displaced air (Archimedes' principle in a gas) must exceed the total weight for ascent. Hot-air balloons rise because heating the air inside lowers its density, increasing the displaced-air weight relative to the inside weight. They stop rising when the cooler, denser surrounding air is thin enough that upthrust equals weight.",
  },
  {
    heading: "Load lines (Plimsoll marks)",
    body: "Ships are marked with a Plimsoll line showing the maximum safe loading depth. The mark varies by water type and temperature because seawater density changes with salinity and warmth, altering how deeply a given weight sits. A ship loaded to the tropical-freshwater line in a river would be overloaded in denser seawater if the line were ignored. Load lines are a legal, safety-driven application of the law of flotation.",
  },
  {
    heading: "Worked example — fraction of an iceberg submerged",
    body: "Ice has density about 920 kg m⁻³ and seawater about 1025 kg m⁻³. Fraction submerged = ρ_ice / ρ_water = 920 / 1025 ≈ 0.898. So about 90% of an iceberg is below the surface and only ~10% shows — the dangerous 'tip of the iceberg'. The calculation uses only the density ratio, with no need to know the iceberg's size. This is why icebergs are hazardously deceptive to navigators.",
  },
  {
    heading: "Worked example — mass from displaced water",
    body: "A raft floats with 2.0 m³ of its volume submerged in fresh water (ρ = 1000 kg m⁻³). Weight of displaced water = ρ_f · V_s · g = 1000 × 2.0 × 10 = 20 000 N. By the law of flotation the raft's weight is also 20 000 N, so its mass = 20 000 / 10 = 2000 kg. If a 500 kg load is added, it must submerge an extra V = m/ρ = 500/1000 = 0.5 m³ to restore equilibrium.",
  },
  {
    heading: "Summary of flotation applications",
    body: "The law of flotation connects everyday and industrial phenomena: ships and boats (hollow shape lowers average density), hydrometers (density by float depth), submarines (ballast control), balloons and life jackets (displaced-fluid weight), and load-line safety. In every case the body floats only when the submerged volume displaces a weight of fluid exactly equal to its own weight. Master the density-ratio rule and most exam problems follow directly.",
  },
];
