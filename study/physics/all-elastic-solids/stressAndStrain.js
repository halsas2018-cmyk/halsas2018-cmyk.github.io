export default [
  {
    heading: "Stress defined",
    body: "Stress is the force acting on a material per unit cross-sectional area. For a wire or rod under tension it is defined as stress = F / A, where F is the applied force (load) and A is the area over which it acts, measured perpendicular to the force. Its SI unit is the pascal (Pa), equal to 1 N m⁻², the same unit used for pressure, though stress acts inside a solid rather than across a fluid surface. Because forces in real structures can be huge, stress is often quoted in MPa (10⁶ Pa) or GPa (10⁹ Pa). Stress tells you how concentrated the load is, independent of the object's total size.",
  },
  {
    heading: "Types of stress",
    body: "Although the basic formula stress = F/A is introduced for tension, the idea extends to other loading. Tensile stress stretches a material (e.g. a hanging wire); compressive stress squeezes it (e.g. a column under a building); and shear stress acts parallel to the area, sliding one layer past another (e.g. the force on a rivet). for the exam papers you mainly meet tensile and compressive stress in wires and rods, where the cross-sectional area is taken as the original area A₀. Distinguishing the direction of the force matters because the resulting deformation and failure mode differ.",
  },
  {
    heading: "Strain defined",
    body: "Strain is the fractional change in a dimension produced by a stress. For a wire stretched from original length L₀ to length L, the extension is e = L − L₀ and the tensile strain is strain = e / L₀. It measures how much the material has stretched relative to its own size, not in absolute units. A 2 m wire and a 20 m wire that each extend by 2 mm experience very different strains (10⁻³ versus 10⁻⁴) even though the absolute extensions are equal — strain captures this physically important difference, which is why it, not extension alone, appears in Young's modulus.",
  },
  {
    heading: "Why strain has no unit",
    body: "Strain is dimensionless (it has no unit) because it is a ratio of two lengths: e / L₀ gives length ÷ length, so the units cancel. The same is true of other strains — the ratio of a change in area to area, or a shear displacement to height. Being dimensionless, strain is a pure number and is often written as a decimal (e.g. 5 × 10⁻⁴) or as a percentage. This makes it directly comparable between materials of any size: a strain of 10⁻³ means 'one part in a thousand' whether the object is a millimetre or a kilometre long.",
  },
  {
    heading: "Young's modulus",
    body: "Young's modulus E is the constant of proportionality between tensile stress and tensile strain for a material in its elastic region: E = stress / strain = (F/A) / (e/L₀). It measures a material's stiffness independently of the specimen's shape — steel has E ≈ 2 × 10¹¹ Pa, aluminium ≈ 7 × 10¹⁰ Pa, and rubber ≈ 10⁶–10⁷ Pa. A high E means the material resists stretching strongly and extends little under load. Like stress, E is measured in pascals. Because it is a property of the material (not the object), comparing E values lets engineers choose the right substance for a job.",
  },
  {
    heading: "Worked example — Young's modulus",
    body: "A 2.0 m steel wire of cross-sectional area 1.0 × 10⁻⁶ m² is stretched by 1.0 mm when a 100 N load is hung from it. Stress = F/A = 100 / (1.0 × 10⁻⁶) = 1.0 × 10⁸ Pa. Strain = e/L₀ = (1.0 × 10⁻³) / 2.0 = 5.0 × 10⁻⁴. Young's modulus E = stress / strain = (1.0 × 10⁸) / (5.0 × 10⁻⁴) = 2.0 × 10¹¹ Pa — exactly the textbook value for steel. Note every length was converted to metres before use, and the area stayed in m² so the stress came out in pascals.",
  },
  {
    heading: "The stress–strain graph",
    body: "The stress–strain graph replaces the load–extension graph with a shape that depends only on the material, not on the specimen's length or thickness. It begins as a straight line through the origin (the elastic region, where Hooke's law holds and stress ∝ strain). This line ends at the limit of proportionality; beyond it the curve bends and, after the elastic limit / yield point, the material deforms plastically. Finally the curve reaches a maximum (the ultimate tensile strength) and then drops as the material necks and fractures. Reading this graph is a standard exam skill.",
  },
  {
    heading: "Gradient and area on the graph",
    body: "Two features of the stress–strain graph carry physical meaning. First, the gradient of the straight elastic portion equals Young's modulus E — this is why plotting stress against strain is so useful, since the slope directly gives the material's stiffness. Second, the area under the curve up to a given strain equals the elastic strain energy stored per unit volume (J m⁻³). In the linear region this area is ½ × stress × strain = ½ × (F/A) × (e/L₀), i.e. the energy density. These two facts let you read both stiffness and stored-energy density straight off the plot.",
  },
  {
    heading: "Worked example — finding extension from E",
    body: "Given E = 2.0 × 10¹¹ Pa for steel, find the extension of a 1.5 m wire of area 2.0 × 10⁻⁶ m² under a 300 N load. Rearrange E = (F/A)/(e/L₀) to e = (F L₀)/(E A). Substitute: e = (300 × 1.5) / (2.0 × 10¹¹ × 2.0 × 10⁻⁶) = 450 / (4.0 × 10⁵) = 1.125 × 10⁻³ m ≈ 1.1 mm. The wire stretches just over a millimetre — a tiny fraction of its length, reflecting steel's large Young's modulus. This inverse dependence on E and A, and direct dependence on F and L₀, is the practical everyday form of the modulus formula.",
  },
  {
    heading: "Brittle vs ductile behaviour",
    body: "Materials differ markedly in their stress–strain curves. Ductile materials (copper, mild steel, aluminium) show a long elastic region, a clear yield point, and a large plastic region before fracturing — they can be drawn into wires and absorb energy by deforming. Brittle materials (glass, cast iron, concrete) obey Hooke's law up to a point and then break suddenly with almost no plastic region and little warning. The area under the curve (toughness) is large for ductile metals and small for brittle ones. Knowing this difference guides material choice: ductile steel for bridges, brittle but cheap concrete for compression.",
  },
  {
    heading: "Ultimate tensile strength and breaking",
    body: "Beyond the elastic region the stress reaches a maximum called the ultimate tensile strength (UTS), the greatest stress the material can sustain. After the UTS the specimen 'necks' — its cross-section narrows locally — so the true stress keeps rising even as the engineering stress (based on original area) falls, until fracture. A material's UTS and its fracture strain together describe how strong and how stretchable it is. These are measured on a tensile testing machine and quoted in material data tables alongside Young's modulus; you are not usually asked to compute UTS, but you should be able to identify it on a graph.",
  },
  {
    heading: "Applications of stress, strain and E",
    body: "Stress, strain and Young's modulus underpin real engineering. Bridges, cables and building columns are sized so their working stress stays safely below the elastic limit with a safety factor. The sag of a stretched wire, the stretch of a climbing rope, and the flex of an aircraft wing are all predicted with E. In medicine, bone and tendon stiffness are characterised by their moduli. In exams, the typical task is to compute stress, strain or E from given F, A, L₀ and e, or to read gradient/area from a stress–strain graph — so master the three linked formulas and always convert lengths to metres first.",
  },
];
