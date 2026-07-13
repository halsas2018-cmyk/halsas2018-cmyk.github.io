// physics — Elastic Properties of Solids
const questions = [
  {
    question: "A body is said to be ELASTIC if, when the deforming force is removed, it:",
    options: [
      "A. Breaks",
      "B. Returns to its original shape and size",
      "C. Remains deformed permanently",
      "D. Becomes liquid"
    ],
    answer: "B",
    explanation: "An elastic body regains its original dimensions after the load is removed.",
    subtopic: "Elastic behaviour"
  },
  {
    question: "A body that does NOT return to its original shape after the force is removed shows:",
    options: [
      "A. Elasticity",
      "B. Plastic (inelastic) behaviour",
      "C. Brittle failure only",
      "D. Perfect elasticity"
    ],
    answer: "B",
    explanation: "Permanent deformation after load removal is plastic or inelastic behaviour.",
    subtopic: "Elastic behaviour"
  },
  {
    question: "Hooke's law states that, within the elastic limit, the extension of a spring is:",
    options: [
      "A. Inversely proportional to the load",
      "B. Directly proportional to the load",
      "C. Independent of the load",
      "D. Proportional to the square of the load"
    ],
    answer: "B",
    explanation: "Hooke's law: F = ke, so extension e is directly proportional to the applied force F.",
    subtopic: "Elastic behaviour"
  },
  {
    question: "The constant k in F = ke for a spring is called the:",
    options: [
      "A. Elastic limit",
      "B. Stiffness (spring) constant",
      "C. Young's modulus",
      "D. Strain"
    ],
    answer: "B",
    explanation: "k is the spring (stiffness) constant; a larger k means a stiffer spring.",
    subtopic: "Elastic behaviour"
  },
  {
    question: "The elastic limit is the:",
    options: [
      "A. Maximum load a body can carry",
      "B. Point beyond which the body will not return to its original shape",
      "C. Point where it breaks",
      "D. Natural length"
    ],
    answer: "B",
    explanation: "Beyond the elastic limit the deformation becomes permanent (plastic).",
    subtopic: "Elastic behaviour"
  },
  {
    question: "A material that can be drawn into wires is said to be:",
    options: [
      "A. Brittle",
      "B. Ductile",
      "C. Elastic only",
      "D. Malleable"
    ],
    answer: "B",
    explanation: "Ductility is the ability to be drawn into wires (e.g. copper).",
    subtopic: "Elastic behaviour"
  },
  {
    question: "A material that can be hammered into sheets is said to be:",
    options: [
      "A. Ductile",
      "B. Malleable",
      "C. Brittle",
      "D. Hard"
    ],
    answer: "B",
    explanation: "Malleability is the ability to be hammered or rolled into thin sheets.",
    subtopic: "Elastic behaviour"
  },
  {
    question: "A brittle material:",
    options: [
      "A. Deforms plastically before breaking",
      "B. Breaks with little or no plastic deformation",
      "C. Is always elastic",
      "D. Can be drawn into wires"
    ],
    answer: "B",
    explanation: "Brittle materials (e.g. glass) fail suddenly with little plastic deformation.",
    subtopic: "Elastic behaviour"
  },
  {
    question: "The region of a force-extension graph where Hooke's law holds is the:",
    options: [
      "A. Plastic region",
      "B. Straight-line (linear) region",
      "C. Breaking region",
      "D. Curved region only"
    ],
    answer: "B",
    explanation: "Hooke's law applies where the graph is a straight line through the origin (F ∝ e).",
    subtopic: "Elastic behaviour"
  },
  {
    question: "The area under a force-extension graph up to the elastic limit represents:",
    options: [
      "A. The stiffness",
      "B. The elastic potential energy stored",
      "C. The stress",
      "D. The strain"
    ],
    answer: "B",
    explanation: "Work done = area under F vs e = elastic potential energy stored = ½Fe = ½ke².",
    subtopic: "Elastic behaviour"
  },
  {
    question: "Elastic potential energy stored in a stretched spring of constant k and extension e is:",
    options: [
      "A. ke",
      "B. ½ke²",
      "C. ke²",
      "D. 2ke"
    ],
    answer: "B",
    explanation: "E = ½ke² = ½Fe, the work done in stretching the spring within the elastic limit.",
    subtopic: "Elastic behaviour"
  },
  {
    question: "Two springs of constants k are joined in SERIES. The effective spring constant is:",
    options: [
      "A. 2k",
      "B. k/2",
      "C. k",
      "D. 4k"
    ],
    answer: "B",
    explanation: "In series, 1/k_eff = 1/k + 1/k = 2/k, so k_eff = k/2 (softer).",
    subtopic: "Elastic behaviour"
  },
  {
    question: "Two springs of constants k are joined in PARALLEL. The effective spring constant is:",
    options: [
      "A. k/2",
      "B. 2k",
      "C. k",
      "D. 4k"
    ],
    answer: "B",
    explanation: "In parallel, k_eff = k + k = 2k (stiffer).",
    subtopic: "Elastic behaviour"
  },
  {
    question: "A stiffer material has a:",
    options: [
      "A. Lower Young's modulus",
      "B. Higher Young's modulus",
      "C. Zero Young's modulus",
      "D. Negative Young's modulus"
    ],
    answer: "B",
    explanation: "Young's modulus measures stiffness; a larger value means the material is harder to stretch.",
    subtopic: "Elastic behaviour"
  },
  {
    question: "Yield point is the point at which a material:",
    options: [
      "A. Begins to obey Hooke's law",
      "B. Begins to deform plastically (flows)",
      "C. Returns to original shape",
      "D. Melts"
    ],
    answer: "B",
    explanation: "At the yield point the material starts to deform permanently (plastic flow) under roughly constant load.",
    subtopic: "Elastic behaviour"
  },
  {
    question: "Tensile stress is defined as:",
    options: [
      "A. Force per unit volume",
      "B. Force per unit cross-sectional area",
      "C. Extension per unit length",
      "D. Load per unit mass"
    ],
    answer: "B",
    explanation: "Stress σ = F/A, the force applied divided by the cross-sectional area.",
    subtopic: "Stress & strain"
  },
  {
    question: "Tensile strain is defined as:",
    options: [
      "A. Force / area",
      "B. Extension / original length",
      "C. Stress / Young's modulus",
      "D. Load / volume"
    ],
    answer: "B",
    explanation: "Strain ε = e/L, a ratio of lengths, so it has no unit.",
    subtopic: "Stress & strain"
  },
  {
    question: "Young's modulus E is given by:",
    options: [
      "A. Stress × strain",
      "B. Stress / strain",
      "C. Strain / stress",
      "D. Force / extension"
    ],
    answer: "B",
    explanation: "E = σ/ε = (F/A)/(e/L) = FL/(Ae).",
    subtopic: "Stress & strain"
  },
  {
    question: "The unit of stress in SI is:",
    options: [
      "A. N",
      "B. N m⁻² (pascal)",
      "C. m²",
      "D. N m"
    ],
    answer: "B",
    explanation: "Stress = force/area, so its SI unit is N/m² = pascal (Pa).",
    subtopic: "Stress & strain"
  },
  {
    question: "Strain has:",
    options: [
      "A. Unit of metres",
      "B. No unit (dimensionless)",
      "C. Unit of N/m²",
      "D. Unit of kg"
    ],
    answer: "B",
    explanation: "Strain is a ratio of two lengths, so it is dimensionless.",
    subtopic: "Stress & strain"
  },
  {
    question: "Young's modulus has the same unit as:",
    options: [
      "A. Strain",
      "B. Stress (N/m²)",
      "C. Force",
      "D. Energy"
    ],
    answer: "B",
    explanation: "Since E = stress/strain and strain is dimensionless, E has the same unit as stress: N/m².",
    subtopic: "Stress & strain"
  },
  {
    question: "A wire of length 2 m and area 1×10⁻⁶ m² stretches by 1 mm under a 20 N load. The stress is:",
    options: [
      "A. 2×10⁷ N/m²",
      "B. 2×10⁶ N/m²",
      "C. 20 N/m²",
      "D. 2×10⁻⁵ N/m²"
    ],
    answer: "A",
    explanation: "σ = F/A = 20 / (1×10⁻⁶) = 2×10⁷ N/m².",
    subtopic: "Stress & strain"
  },
  {
    question: "For the wire above, the strain is (e = 1 mm = 1×10⁻³ m, L = 2 m):",
    options: [
      "A. 5×10⁻⁴",
      "B. 5×10⁻³",
      "C. 2×10⁻³",
      "D. 1×10⁻³"
    ],
    answer: "A",
    explanation: "ε = e/L = 1×10⁻³ / 2 = 5×10⁻⁴ (dimensionless).",
    subtopic: "Stress & strain"
  },
  {
    question: "For that wire, Young's modulus is:",
    options: [
      "A. 4×10¹⁰ N/m²",
      "B. 4×10⁷ N/m²",
      "C. 2×10⁷ N/m²",
      "D. 1×10¹⁰ N/m²"
    ],
    answer: "A",
    explanation: "E = σ/ε = 2×10⁷ / (5×10⁻⁴) = 4×10¹⁰ N/m².",
    subtopic: "Stress & strain"
  },
  {
    question: "If the cross-sectional area of a wire is doubled, the stress for the same load becomes:",
    options: [
      "A. Doubled",
      "B. Halved",
      "C. Quadrupled",
      "D. Unchanged"
    ],
    answer: "B",
    explanation: "σ = F/A, so doubling A halves the stress.",
    subtopic: "Stress & strain"
  },
  {
    question: "If the length of a wire is doubled, the extension under the same load and same area becomes:",
    options: [
      "A. Halved",
      "B. Doubled",
      "C. Unchanged",
      "D. Quadrupled"
    ],
    answer: "B",
    explanation: "e = FL/(AE); doubling L doubles the extension.",
    subtopic: "Stress & strain"
  },
  {
    question: "For the same load and material, a thicker wire extends:",
    options: [
      "A. More than a thin wire",
      "B. Less than a thin wire",
      "C. The same amount",
      "D. Not at all"
    ],
    answer: "B",
    explanation: "Larger area A reduces stress and extension (e = FL/AE), so it stretches less.",
    subtopic: "Stress & strain"
  },
  {
    question: "The breaking stress is the:",
    options: [
      "A. Stress at the elastic limit",
      "B. Maximum stress a material can withstand before failure",
      "C. Stress when strain is zero",
      "D. Yield stress"
    ],
    answer: "B",
    explanation: "Breaking stress is the stress at which the material fractures.",
    subtopic: "Stress & strain"
  },
  {
    question: "Which of these is NOT a unit of Young's modulus?",
    options: [
      "A. N/m²",
      "B. Pa",
      "C. N m",
      "D. kg m⁻¹ s⁻²"
    ],
    answer: "C",
    explanation: "Young's modulus has units of pressure (N/m², Pa). N m is a unit of energy/torque, not modulus.",
    subtopic: "Stress & strain"
  },
  {
    question: "Poisson's ratio is the ratio of:",
    options: [
      "A. Longitudinal stress to strain",
      "B. Lateral strain to longitudinal strain",
      "C. Stress to area",
      "D. Force to extension"
    ],
    answer: "B",
    explanation: "Poisson's ratio ν = (lateral strain)/(longitudinal strain); it is dimensionless.",
    subtopic: "Stress & strain"
  },
  {
    question: "When a wire is stretched, its lateral (sideways) dimension usually:",
    options: [
      "A. Increases",
      "B. Decreases",
      "C. Stays exactly the same",
      "D. Becomes zero"
    ],
    answer: "B",
    explanation: "Most materials get thinner when stretched lengthwise (negative lateral strain).",
    subtopic: "Stress & strain"
  },
  {
    question: "The energy stored per unit volume in a stretched wire is:",
    options: [
      "A. Stress × strain",
      "B. ½ × stress × strain",
      "C. Stress / strain",
      "D. 2 × stress × strain"
    ],
    answer: "B",
    explanation: "Elastic energy density = ½ σε = ½ × (force×extension)/(volume).",
    subtopic: "Stress & strain"
  },
  {
    question: "A material with a large elastic region and ability to stretch a lot before breaking is:",
    options: [
      "A. Brittle",
      "B. Tough / elastic (e.g. rubber)",
      "C. Hard only",
      "D. Rigid"
    ],
    answer: "B",
    explanation: "Rubber-like materials have a large elastic region and high resilience before failure.",
    subtopic: "Elastic behaviour"
  },
  {
    question: "The limit of proportionality is the point beyond which:",
    options: [
      "A. Stress is no longer proportional to strain",
      "B. The material breaks",
      "C. Strain becomes zero",
      "D. Hooke's law still strictly holds"
    ],
    answer: "A",
    explanation: "Beyond the limit of proportionality, stress is no longer directly proportional to strain.",
    subtopic: "Elastic behaviour"
  },
  {
    question: "A steel wire and a copper wire of the same dimensions are stretched by equal loads. The one with the higher Young's modulus stretches:",
    options: [
      "A. More",
      "B. Less",
      "C. The same amount",
      "D. Not at all"
    ],
    answer: "B",
    explanation: "Since e = FL/(AE), a larger E gives a smaller extension for the same load/geometry. Steel (higher E) stretches less.",
    subtopic: "Stress & strain"
  },
  {
    question: "Ultimate tensile strength refers to the:",
    options: [
      "A. Stress at the proportional limit",
      "B. Maximum stress the material reaches before necking/breaking",
      "C. Strain at break",
      "D. Young's modulus"
    ],
    answer: "B",
    explanation: "UTS is the highest engineering stress on the stress-strain curve before failure.",
    subtopic: "Stress & strain"
  },
  {
    question: "A rubber band stretched and released returns to shape; this shows it is:",
    options: [
      "A. Plastic",
      "B. Elastic",
      "C. Brittle",
      "D. Ductile"
    ],
    answer: "B",
    explanation: "Returning to its original shape after load removal is the definition of elastic behaviour.",
    subtopic: "Elastic behaviour"
  },
  {
    question: "A load of 10 N stretches a spring by 5 cm. Its spring constant is (taking g = 10 m/s² is irrelevant; use F=ke):",
    options: [
      "A. 50 N/m",
      "B. 200 N/m",
      "C. 2 N/m",
      "D. 0.5 N/m"
    ],
    answer: "B",
    explanation: "k = F/e = 10 / 0.05 = 200 N/m.",
    subtopic: "Elastic behaviour"
  },
  {
    question: "For the spring above, the elastic energy stored at 5 cm extension is:",
    options: [
      "A. 0.25 J",
      "B. 0.5 J",
      "C. 1.0 J",
      "D. 0.1 J"
    ],
    answer: "A",
    explanation: "E = ½ke² = ½ × 200 × (0.05)² = 100 × 0.0025 = 0.25 J.",
    subtopic: "Elastic behaviour"
  },
  {
    question: "Hooke's law is valid only:",
    options: [
      "A. At all loads",
      "B. Within the elastic limit / limit of proportionality",
      "C. After the material yields",
      "D. When the spring is broken"
    ],
    answer: "B",
    explanation: "Hooke's law applies only up to the limit of proportionality (within the elastic region).",
    subtopic: "Elastic behaviour"
  },
  {
    question: "A wire of original length L and area A is stretched by force F to extension e. The work done is best written as:",
    options: [
      "A. F × L",
      "B. ½ F e",
      "C. F / e",
      "D. F × A"
    ],
    answer: "B",
    explanation: "For a gradually applied load the average force is ½F, so work = ½Fe (= ½ke²).",
    subtopic: "Elastic behaviour"
  },
  {
    question: "If a material is loaded beyond its elastic limit and then unloaded, the stress-strain curve:",
    options: [
      "A. Returns along the original line to the origin",
      "B. Leaves a permanent strain (does not return to origin)",
      "C. Becomes vertical",
      "D. Disappears"
    ],
    answer: "B",
    explanation: "Plastic deformation remains, so unloading leaves a permanent (residual) strain.",
    subtopic: "Elastic behaviour"
  },
  {
    question: "The dimensional formula of stress is:",
    options: [
      "A. ML⁻¹T⁻²",
      "B. MLT⁻²",
      "C. ML⁻²T⁻²",
      "D. MT⁻²"
    ],
    answer: "A",
    explanation: "Stress = F/A = MLT⁻² / L² = ML⁻¹T⁻².",
    subtopic: "Stress & strain"
  },
  {
    question: "For a given material, Young's modulus is:",
    options: [
      "A. Different for every sample size",
      "B. A constant property of the material",
      "C. Always zero",
      "D. Equal to the breaking stress"
    ],
    answer: "B",
    explanation: "Young's modulus is an intrinsic property of the material (independent of sample dimensions).",
    subtopic: "Stress & strain"
  },
  {
    question: "A wire extends by 2 mm under a certain load. If both its length and area are doubled, the new extension is:",
    options: [
      "A. 1 mm",
      "B. 2 mm",
      "C. 4 mm",
      "D. 8 mm"
    ],
    answer: "B",
    explanation: "e = FL/(AE); doubling both L and A leaves e unchanged (L/A ratio same).",
    subtopic: "Stress & strain"
  },
  {
    question: "Hardness refers to a material's resistance to:",
    options: [
      "A. Stretching",
      "B. Surface indentation or scratching",
      "C. Bending only",
      "D. Melting"
    ],
    answer: "B",
    explanation: "Hardness is resistance to local surface deformation such as scratching or indentation.",
    subtopic: "Elastic behaviour"
  },
  {
    question: "A material that snaps soon after the elastic limit is reached is likely:",
    options: [
      "A. Ductile",
      "B. Brittle",
      "C. Very tough",
      "D. Elastic"
    ],
    answer: "B",
    explanation: "Brittle materials have little plastic region and fail soon after the elastic limit.",
    subtopic: "Elastic behaviour"
  },
  {
    question: "A copper wire is drawn into a long thin wire. This demonstrates copper's:",
    options: [
      "A. Malleability",
      "B. Ductility",
      "C. Brittleness",
      "D. Hardness"
    ],
    answer: "B",
    explanation: "Being drawn into wires is ductility; malleability would be hammering into sheets.",
    subtopic: "Elastic behaviour"
  },
  {
    question: "The restoring force in an elastic body arises because the body tends to:",
    options: [
      "A. Gain mass",
      "B. Return to its original shape",
      "C. Break",
      "D. Melt"
    ],
    answer: "B",
    explanation: "Elasticity is the tendency of a deformed body to recover its original dimensions, producing a restoring force.",
    subtopic: "Elastic behaviour"
  },
  {
    question: "Two identical springs in series support a load W. The extension of EACH spring is:",
    options: [
      "A. W/k",
      "B. W/2k",
      "C. 2W/k",
      "D. W/4k"
    ],
    answer: "A",
    explanation: "In series each spring carries the full load W, so each extends by e = W/k. The total extension is then 2W/k.",
    subtopic: "Elastic behaviour"
  },
  {
    question: "For the two springs in series above, the TOTAL extension is:",
    options: [
      "A. W/k",
      "B. 2W/k",
      "C. W/2k",
      "D. 4W/k"
    ],
    answer: "B",
    explanation: "Each extends W/k, so total extension = W/k + W/k = 2W/k (consistent with k_eff = k/2).",
    subtopic: "Elastic behaviour"
  },
  {
    question: "A material's ability to absorb energy before fracturing is called:",
    options: [
      "A. Stiffness",
      "B. Toughness",
      "C. Hardness",
      "D. Brittleness"
    ],
    answer: "B",
    explanation: "Toughness is the total energy a material can absorb before breaking (area under the whole stress-strain curve).",
    subtopic: "Elastic behaviour"
  }
];

module.exports = questions;
