export default [
  {
    heading: "What latent heat is",
    body: "Latent heat is the heat absorbed or released when a substance changes state at constant temperature. 'Latent' means hidden, because the energy goes into breaking or forming the bonds between particles rather than raising the temperature, so a thermometer shows no change during melting or boiling. Supplying latent heat lets particles reorder from a more ordered state (solid) to a less ordered one (liquid or gas); removing it lets them settle back. It is distinct from the 'sensible heat' that changes temperature.",
  },
  {
    heading: "Specific latent heat (L)",
    body: "The specific latent heat L is the heat needed to change the state of 1 kg of a substance without changing its temperature: Q = mL, with unit J kg⁻¹. Fusion is the solid→liquid change (L_f), and vaporisation is liquid→gas (L_v); the reverse changes release the same amounts. For water, L_f ≈ 3.34 × 10⁵ J kg⁻¹ (ice) and L_v ≈ 2.26 × 10⁶ J kg⁻¹ (steam). Because L_v is huge, boiling off water absorbs far more energy than simply heating it.",
  },
  {
    heading: "Melting point and boiling point",
    body: "The melting point is the temperature at which a solid turns to liquid (and the freezing point on cooling is the same temperature); the boiling point is where liquid turns to gas throughout the body. At these points, added heat is latent heat, so the temperature stays fixed until the change is complete. Pure substances melt and boil at sharp, characteristic temperatures, which is why melting- and boiling-point measurements help identify them and check purity.",
  },
  {
    heading: "Effect of impurities on melting/boiling points",
    body: "Dissolved impurities lower a solid's melting (freezing) point and raise its boiling point. Spreading salt on icy roads works because the salt-water mixture now freezes below 0 °C, so ice melts at the ambient temperature; adding salt to cooking water makes it boil at a temperature slightly above 100 °C. These colligative effects are why antifreeze is mixed into car radiators and why seawater freezes below 0 °C.",
  },
  {
    heading: "Effect of pressure — the pressure cooker",
    body: "Raising the external pressure raises a liquid's boiling point, because the vapour must reach a higher pressure to escape. A pressure cooker seals in steam, pushing the internal pressure above atmospheric so water boils above 100 °C and food cooks faster. Conversely, at high altitude (lower atmospheric pressure) water boils below 100 °C, so cooking takes longer. For most substances pressure lowers the melting point (ice melts under a skater's blade), water being a notable exception among common materials.",
  },
  {
    heading: "Determining specific latent heat of fusion",
    body: "The specific latent heat of fusion of ice is found by the method of mixtures: known-mass warm water at θ_w loses heat that both warms and melts a known mass m of ice at 0 °C to final temperature θ_f. Heat lost by water and calorimeter = m L_f + m c_w (θ_f − 0). Rearranging gives L_f = [heat lost − m c_w θ_f] / m. The ice must be dried so no extra liquid water is added, and the calorimeter insulated to limit loss.",
  },
  {
    heading: "Determining specific latent heat of vaporisation",
    body: "L_v of steam is measured electrically or by condensing a known mass of steam at 100 °C into a calorimeter of cold water; the steam releases L_v then cools from 100 °C to θ_f, so heat gained by water = m L_v + m c_w (100 − θ_f). The electrical method passes a current through a heating coil immersed in the liquid and uses E = VI t = m L_v. Dry steam (no droplets) and good insulation are essential for an accurate value.",
  },
  {
    heading: "Worked example — melting ice",
    body: "Find the heat to melt 0.50 kg of ice at 0 °C: Q = m L_f = 0.50 × 3.34 × 10⁵ = 1.67 × 10⁵ J. To then warm that water from 0 °C to 20 °C needs extra sensible heat Q = mcΔθ = 0.50 × 4200 × 20 = 4.2 × 10⁴ J. The melting alone takes nearly four times more energy than the subsequent 20 K warming — a striking illustration of how large latent heat is compared with specific heat effects.",
  },
  {
    heading: "Worked example — condensation and cooling curve",
    body: "When 0.10 kg of steam at 100 °C condenses and cools to 40 °C it releases Q = m L_v + m c_w (100 − 40) = 0.10 × 2.26 × 10⁶ + 0.10 × 4200 × 60 = 2.26 × 10⁵ + 2.52 × 10⁴ ≈ 2.51 × 10⁵ J. A heating (or cooling) curve is flat during each change of state — at 0 °C for melting and 100 °C for boiling — and sloped while temperature changes, visually separating the latent-heat plateaus from the sensible-heat rises.",
  },
  {
    heading: "Applications — refrigerators and air conditioners",
    body: "Refrigerators and air conditioners exploit latent heat in a compression cycle: a refrigerant liquid evaporates inside the cold compartment, absorbing latent heat from the contents and cooling them; a compressor then re-liquefies it outside, releasing that heat to the room. The large value of L_v means a small mass of refrigerant moves a large amount of heat. Sweating, evaporative coolers and perspiration work on the same principle — evaporation carries away latent heat and leaves the surface cooler.",
  },
  {
    heading: "Summary — latent vs sensible heat",
    body: "Two kinds of heat appear in any heating problem: sensible heat Q = mcΔθ that changes temperature, and latent heat Q = mL that changes state at constant temperature. A complete calculation, such as turning ice at −10 °C into steam at 120 °C, chains several steps: warm the ice, melt it, warm the water, boil it, then superheat the steam. Always keep the two types separate, use kelvin-sized temperature differences, and remember water's very large L_v when estimating energy.",
  },
];
