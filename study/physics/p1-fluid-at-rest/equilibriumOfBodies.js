export default [
  {
    heading: "Forces on a body in a fluid",
    body: "When a body is placed in a fluid (whether fully submerged or floating), two main vertical forces act on it. Its weight W = mg acts downward through the centre of gravity. Opposing it is the upthrust U (also called the buoyant force), which the fluid exerts upward on the body. The body's subsequent motion — sinking, floating, or rising — is decided entirely by how these two forces compare.",
  },
  {
    heading: "Weight of the body in the fluid",
    body: "The weight of the body is simply its true weight in air, W = mg, and is unchanged by being in the fluid (gravity is the same). What changes is the NET downward force, because the fluid pushes up. A spring balance holding the body underwater reads less than in air; this reduced reading is the apparent weight, W_apparent = W − U. The difference between true and apparent weight is exactly the upthrust.",
  },
  {
    heading: "What upthrust is",
    body: "Upthrust is the upward force a fluid exerts on any body immersed in it, caused by the greater pressure on the bottom of the body than on the top (pressure rises with depth). Its size equals the weight of fluid displaced, as Archimedes' principle states. For a fully submerged body of volume V in a fluid of density ρ_f, the displaced volume is V, so U = ρ_f V g. The larger the displaced volume or fluid density, the larger the upthrust.",
  },
  {
    heading: "Case 1 — upthrust less than weight (sinks)",
    body: "If U < W, the net force is downward and the body accelerates downward until it rests on the bottom. This happens when the body is denser than the fluid, so the weight of the body exceeds the weight of an equal volume of fluid. A stone (density ~2500 kg m⁻³) dropped in water (1000 kg m⁻³) sinks because U = ρ_water·V·g is less than W = ρ_stone·V·g.",
  },
  {
    heading: "Case 2 — upthrust equals weight (floats in equilibrium)",
    body: "If U = W, the net force is zero and the body is in equilibrium — it can remain at rest anywhere fully submerged, or (more usually) float partially immersed at the surface. At the surface the body sinks until the volume displaced is just enough that ρ_f · V_displaced · g = mg. This balance is the floating condition and is the starting point for the law of flotation.",
  },
  {
    heading: "Case 3 — upthrust greater than weight (rises)",
    body: "If U > W, the net force is upward and the body rises. Once it reaches the surface it cannot rise further, so it pushes up until enough of it emerges that the displaced volume shrinks to the point where U falls to equal W. A cork (density ~250 kg m⁻³) released underwater shoots to the surface and floats with most of its volume above water.",
  },
  {
    heading: "Predicting behaviour from density",
    body: "Comparing densities gives a quick rule. If the body's density ρ_b > fluid density ρ_f, it sinks. If ρ_b = ρ_f, it floats fully submerged in neutral equilibrium. If ρ_b < ρ_f, it rises and floats partly out. Because U/W = (ρ_f V g)/(ρ_b V g) = ρ_f / ρ_b for a fully submerged body, the ratio of densities alone decides the outcome. This density comparison is the fastest way to answer 'will it sink or float?' questions.",
  },
  {
    heading: "Apparent loss of weight",
    body: "The apparent loss of weight of a body in a fluid equals the upthrust: loss = W − W_apparent = U. This is the quantity you measure when weighing a body in air and then in water on a spring balance. Example: a metal block weighs 5.0 N in air and 4.2 N in water, so the upthrust (and the weight of displaced water) is 0.8 N. This single measurement links directly to Archimedes' principle and to finding relative density.",
  },
  {
    heading: "Equilibrium for a floating body at the surface",
    body: "A floating body is in vertical equilibrium with part submerged and part above the surface. The submerged portion displaces a volume V_s such that ρ_f · V_s · g = mg, while the total volume V_t is larger. Only the submerged fraction matters for support; the exposed fraction is 'spare' buoyancy used in loading ships. If extra weight is added, the body sinks a little deeper until a larger V_s restores U = W.",
  },
  {
    heading: "Worked example — will it sink or float?",
    body: "A wooden block has density 800 kg m⁻³ and volume 0.002 m³, placed in water (1000 kg m⁻³). Weight W = 800 × 0.002 × 10 = 16 N. Fully submerged upthrust U = 1000 × 0.002 × 10 = 20 N. Since U > W, it rises and floats. At equilibrium U = W requires displaced volume V_s = 16 / (1000 × 10) = 0.0016 m³, so 80% of it is submerged and 20% shows above the water.",
  },
  {
    heading: "Stable floating and why shape matters",
    body: "A body floats stably when, if tilted, the shifted upthrust line and the weight line produce a restoring couple that rights it. This depends on the centre of gravity and the centre of buoyancy (the centre of the displaced volume). A low, wide shape is stable; a tall, narrow one may capsize. Ships are designed with a low centre of gravity and a broad hull so the metacentre stays above the centre of gravity — a practical application of equilibrium of bodies.",
  },
];
