export default [
  {
    heading: "What a derived quantity is",
    body: "A derived quantity is formed by combining two or more fundamental quantities through multiplication, division or powers — never by adding different dimensions. Its unit is derived from the base units in exactly the same way. Because the bases are few, almost every quantity you meet (speed, density, force, energy) is derived. Recognising the recipe tells you both the quantity and its unit at once.",
  },
  {
    heading: "Volume and area as derived quantities",
    body: "Area is length × length, so its dimension is L² and its SI unit is m². Volume is length × length × length, giving dimension L³ and unit m³ — a cubic metre is a large box one metre on each side. These are the simplest derived quantities because only one base (length) is involved. They appear constantly, from the volume of a gas to the cross-section of a wire.",
  },
  {
    heading: "Density and speed as derived quantities",
    body: "Density is mass per unit volume, so its unit is kg ÷ m³ = kg m⁻³ (read 'kilogram per cubic metre'). Speed is distance per unit time, giving m ÷ s = m s⁻¹. These two are the syllabus's named examples and together show the pattern: substitute the base units into the defining equation and simplify. The unit travels directly from the formula, so you never need to memorise it separately.",
  },
  {
    heading: "Building any derived unit from its equation",
    body: "To find a derived unit, replace every quantity in its defining formula with its base units and simplify the algebra. For pressure p = F/A, first write force as m·a = kg·m·s⁻², then divide by m² to get kg m⁻¹ s⁻². This substitution method works for every derived quantity and is far safer than rote learning. It also reveals when two different quantities share the same unit (same dimension).",
  },
  {
    heading: "Dimensions — writing a quantity in base symbols",
    body: "The dimension of a quantity expresses it in the symbols M (mass), L (length), T (time), and similarly for current, temperature and amount. We write, for example, [velocity] = LT⁻¹ and [force] = MLT⁻², using square brackets to mean 'the dimension of'. Dimensions are about the NATURE of a quantity, not its numerical size, and they are the tool behind dimensional analysis.",
  },
  {
    heading: "Dimensions of common derived quantities",
    body: "Using the definitions: [acceleration] = LT⁻², [force] = MLT⁻², [work/energy] = ML²T⁻², [pressure] = ML⁻¹T⁻², [power] = ML²T⁻³, [momentum] = MLT⁻¹. Each follows by substituting base units into the formula. Memorising this short list lets you check equations and units quickly in an exam without re-deriving from scratch every time.",
  },
  {
    heading: "Use 1 — deriving a unit by dimensions",
    body: "Dimensional analysis obtains a derived unit straight from dimensions. Since [force] = MLT⁻², the unit is kg·m·s⁻², which is named the newton (N). Likewise [energy] = ML²T⁻² gives kg m² s⁻² = the joule (J). This is the rigorous route to a unit and confirms the substitution method gives the same result. It also shows why the newton and the joule are not 'new' units but packaged base combinations.",
  },
  {
    heading: "Use 2 — verifying an equation (homogeneity)",
    body: "A correct physical equation must be dimensionally homogeneous: every term has the same dimensions. To check s = ut + ½at², note [s] = L, [ut] = (LT⁻¹)(T) = L, and [½at²] = (LT⁻²)(T²) = L — all match, so the equation passes. This cannot prove an equation is exactly right (a missing ½ slips through) but it instantly catches wrong formulas. Always test each term separately.",
  },
  {
    heading: "Use 3 — deriving a relationship between quantities",
    body: "If a quantity depends on a few others, you can guess its form from dimensions. Suppose the period T of a pendulum depends on length l and g: write T ∝ lᵃgᵇ, so [T] = Lᵃ(LT⁻²)ᵇ = Lᵃ⁺ᵇ T⁻²ᵇ. Matching powers gives a+b = 0 and −2b = 1, so b = −½ and a = ½, yielding T ∝ √(l/g). Dimensional analysis supplies the powers; only experiment pins down the dimensionless constant 2π.",
  },
  {
    heading: "Limitations of dimensional analysis",
    body: "Dimensional analysis has real limits: it cannot find dimensionless constants (like 2π or ½), it cannot distinguish quantities with the same dimensions (e.g. work and torque are both ML²T⁻²), and it fails if you omit a relevant variable. It is a check and a guide, not a proof or a replacement for theory. Used wisely — to verify, to derive units, to suggest forms — it is one of the most useful tools in the syllabus.",
  }
];
