export default [
  {
    heading: "What elasticity is",
    body: "Elasticity is the property of a solid that allows it to regain its original shape and size after the forces deforming it are removed. When you stretch a steel spring or compress a rubber band, the material stores energy and, provided the load is small enough, returns exactly to where it started. Materials that do this are called elastic; those that do not (like putty or Plasticine) are plastic. Elasticity is not the same as 'stretchiness' — a stiff steel wire is highly elastic even though it extends only a little, whereas a rubber band is easily stretched but is not perfectly elastic over large extensions.",
  },
  {
    heading: "Elastic vs plastic deformation",
    body: "A deformation is a change in shape or size produced by a force. It is elastic if the object recovers fully when the force is removed, and plastic if the change is permanent. Most solids behave elastically for small loads and plastically once a threshold is passed. The transition differs between materials: rubber shows large elastic stretch then a sudden break, while metals show a long elastic region, a small plastic region, and necking before fracture. Understanding which regime you are in matters because Hooke's law and the energy formulas below apply only in the elastic region.",
  },
  {
    heading: "Elastic limit and yield point",
    body: "The elastic limit is the maximum stress a material can withstand and still return to its original dimensions when unloaded. Up to this point all deformation is recoverable. Just beyond it lies the yield point (or yield stress), where the material begins to deform plastically with little or no increase in load — a metal stretched past its yield point will stay stretched. In practice the elastic limit and yield point are close together for many metals, so they are often treated as the same boundary in school physics. Exceeding the elastic limit permanently weakens the object.",
  },
  {
    heading: "Hooke's law",
    body: "Hooke's law states that, within the elastic limit, the extension e of a spring or wire is directly proportional to the stretching force F applied to it: F = k e, where e = l − l₀ is the increase in length. Equivalently, the tension is proportional to extension. The law was first stated by Robert Hooke in 1678 as 'ut tensio sic vis' (as the extension, so the force). It applies not only to stretching but also to compression and to the bending or twisting of many elastic bodies, provided the deformation stays within the elastic limit. The graph of F against e is then a straight line through the origin.",
  },
  {
    heading: "Spring (stiffness) constant",
    body: "The constant k in F = k e is the force constant or stiffness of the spring, with unit N m⁻¹. A large k means a stiff spring that needs a big force for a small extension; a small k means a soft, easily stretched spring. The value of k depends on the material, the wire thickness, the coil diameter and the number of turns. For a given material and wire, a spring with more coils is less stiff. Two springs in series have a smaller combined k (they share the extension), while two identical springs in parallel have double the k (they share the load).",
  },
  {
    heading: "Load–extension (F–e) graph features",
    body: "The load–extension graph is the key experimental plot. In the elastic region it is a straight line through the origin, confirming Hooke's law; its gradient equals the stiffness k. After the limit of proportionality the line may bend, and beyond the elastic limit the material yields and the extension grows rapidly for little extra load (the plastic region). The point where the curve first leaves the straight line is the limit of proportionality; the point of permanent set is the elastic limit. The area under the F–e graph equals the work done (and elastic energy stored) in stretching the spring.",
  },
  {
    heading: "Worked example — Hooke's law",
    body: "Problem: a spring of stiffness k = 250 N m⁻¹ is stretched by 4 cm. Find the force required. Convert first: e = 4 cm = 0.04 m. Using F = k e, F = 250 × 0.04 = 10 N. So a 10 N load (about a 1 kg mass under gravity) extends this spring by 4 cm. Always convert centimetres to metres before substituting, because k is in N m⁻¹; forgetting this unit conversion is the most common source of a wrong answer in Hooke's-law questions.",
  },
  {
    heading: "Energy stored in a stretched spring",
    body: "When you stretch a spring you do work against its restoring force, and that work is stored as elastic potential energy. Because the force grows linearly from 0 to F as the extension grows from 0 to e, the average force is F/2, so the work done = average force × distance = (F/2) × e = ½ F e. Substituting F = k e gives the equivalent forms E = ½ F e = ½ k e². This energy is released when the spring returns to its natural length. The same formula applies to any elastic deformation in the Hooke's-law region, including a bent bow or a compressed spring.",
  },
  {
    heading: "Worked example — stored energy",
    body: "Using the spring from the earlier example (k = 250 N m⁻¹, e = 0.04 m, F = 10 N), the energy stored is E = ½ F e = ½ × 10 × 0.04 = 0.2 J, or equivalently E = ½ k e² = ½ × 250 × (0.04)² = ½ × 250 × 0.0016 = 0.2 J. Both routes agree. Note the energy depends on e², so doubling the extension stores four times as much energy, not twice. This quadratic growth is why a catapult stores disproportionate energy in its last few centimetres of pull.",
  },
  {
    heading: "Springs in series and parallel",
    body: "Combining springs changes the overall stiffness. Two identical springs in series (end to end) each take the full load F but extend by 2e together, so the combined extension is doubled and the effective k is halved (k_eff = k/2). Two identical springs in parallel (side by side, sharing the load) together support force 2F for the same extension e, so k_eff = 2k. For n identical springs in series k_eff = k/n and in parallel k_eff = nk. These rules follow directly from F = ke applied to how force and extension are shared.",
  },
  {
    heading: "Elastic energy and the area under the graph",
    body: "A powerful general result is that the elastic potential energy stored equals the area under the force–extension graph up to the extension reached. In the linear (Hooke's-law) region this area is a triangle of base e and height F, giving ½ × base × height = ½ F e, matching the formula. If the graph is curved (non-linear elastic material), you must still take the area under the actual curve — the simple ½ F e no longer applies exactly. This graphical view is how examiners expect you to find energy for materials that do not obey Hooke's law perfectly.",
  },
  {
    heading: "Applications and limitations",
    body: "Hooke's law and elastic-energy ideas appear throughout physics and engineering: spring balances and bathroom scales (force measured by extension), vehicle suspension (springs absorb road energy), trampolines and catapults (stored energy returned), and the design of bridges and ropes (kept safely below the elastic limit). The main limitation is that the law is only valid within the elastic limit; beyond it the material deforms plastically and may fracture. Real springs also fatigue with repeated loading, and rubber shows non-linear, hysteretic behaviour that simple Hooke's law cannot capture.",
  },
];
