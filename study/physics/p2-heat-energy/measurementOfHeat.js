export default [
  {
    heading: "Heat capacity (C)",
    body: "The heat capacity C of a body is the heat required to raise its temperature by 1 K: C = Q / Δθ, with unit J K⁻¹. It depends on both the material and the mass — a full bath of water has a much larger heat capacity than a cup of water even though both are water. Heat capacity tells you how much energy a given object stores per degree of temperature change, which is why some objects feel 'slow to heat up'. For quantitative work we usually prefer the per-unit-mass quantity, specific heat capacity.",
  },
  {
    heading: "Specific heat capacity (c)",
    body: "Specific heat capacity c is the heat needed to raise the temperature of 1 kg of a substance by 1 K: Q = mcΔθ, where m is mass and Δθ the temperature rise. Its unit is J kg⁻¹ K⁻¹. Water has an unusually high c ≈ 4200 J kg⁻¹ K⁻¹, meaning it stores a lot of heat for a small temperature change; metals have low values (e.g. aluminium ≈ 900, copper ≈ 390). The high specific heat of water is why oceans moderate climate and why water is used in cooling systems.",
  },
  {
    heading: "Why water's high value matters",
    body: "Because water needs about four times more heat than the same mass of rock or soil to warm by 1 K, large bodies of water absorb and release heat slowly. This gives coastal regions milder temperatures than inland areas and drives land and sea breezes. It also makes water an excellent coolant in car radiators and power stations, and explains why a hot-water bottle stays warm for a long time. Recognizing a high specific heat capacity helps explain many environmental and engineering facts.",
  },
  {
    heading: "Method of mixtures",
    body: "The method of mixtures finds c by mixing a hot sample with a cooler liquid (often water) in a calorimeter and assuming no heat loss: heat lost by hot body = heat gained by cold liquid + calorimeter. If mass mₕ at θₕ mixes with mass m_c of water (c_w) and calorimeter of heat capacity C_cal, both ending at θ_f, then mₕ c (θₕ − θ_f) = m_c c_w (θ_f − θ_c) + C_cal (θ_f − θ_c). Solving gives the unknown c. The calorimeter should be insulated and stirred for an even temperature.",
  },
  {
    heading: "Electrical method",
    body: "The electrical method heats a known mass m of a substance with an electric heater and measures the temperature rise. The electrical energy supplied is E = VI t (voltage × current × time), which equals mcΔθ if losses are neglected. Rearranging, c = VI t / (m Δθ). This works for solids and liquids, and for poorly conducting solids the heater is often buried in the sample. A lid and insulation reduce heat loss, and a cooling correction may be applied for accuracy.",
  },
  {
    heading: "Worked example — method of mixtures",
    body: "A 0.20 kg metal block at 100 °C is dropped into 0.30 kg of water at 20 °C in a 0.05 kg (heat capacity 210 J K⁻¹) calorimeter; final temperature 23 °C. Heat gained by water = 0.30 × 4200 × 3 = 3780 J; by calorimeter = 210 × 3 = 630 J; total 4410 J. So 0.20 × c × (100 − 23) = 4410 → c = 4410 / (0.20 × 77) ≈ 286 J kg⁻¹ K⁻¹. This identifies the metal as close to aluminium.",
  },
  {
    heading: "Worked example — electrical method",
    body: "A 1.5 kg sample is heated by a 24 V, 4.0 A heater for 300 s, raising its temperature by 18 K. Energy supplied E = VI t = 24 × 4.0 × 300 = 28 800 J. Neglecting losses, c = E / (m Δθ) = 28 800 / (1.5 × 18) = 1067 J kg⁻¹ K⁻¹. In practice some energy escapes, so the true c would be a little higher; insulate well and apply a cooling correction to improve the result.",
  },
  {
    heading: "Sources of error and precautions",
    body: "Heat lost to the surroundings, the calorimeter and the thermometer is the main error in both methods, so use an insulating jacket, a lid, and stir to even out temperature. In the electrical method, ensure all the heater's energy enters the sample (no loss through leads) and measure the temperature rise after the heater is off to avoid the heater's own lag. A cooling correction (comparing cooling rates above and below the final temperature) compensates residual loss. Repeating and averaging improves precision.",
  },
  {
    heading: "Specific heat in climate and daily life",
    body: "Besides moderating climate, specific heat capacity explains why a wooden spoon stays cool while a metal one heats up (low c and poor conduction for wood; metal's low c means small mass heats fast but also cools fast). It guides the choice of cooking pots, the sizing of cooling ponds at power plants, and the design of thermal storage. In every case the key question is: how much energy must I supply (Q = mcΔθ) to achieve the temperature change I want?",
  },
  {
    heading: "Summary — measuring heat quantitatively",
    body: "Heat is measured through its effect on temperature via Q = mcΔθ, using either the method of mixtures (balance heat lost against heat gained) or the electrical method (measure VI t). Both assume the conservation of energy and need care to minimise heat loss. Specific heat capacity, in J kg⁻¹ K⁻¹, is the material property that links a temperature change to the energy stored; water's large value is the thread connecting climate, cooling and many everyday observations.",
  },
];
