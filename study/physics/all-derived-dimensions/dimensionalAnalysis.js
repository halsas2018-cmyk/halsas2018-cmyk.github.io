export default [
  {
    heading: "What dimensional analysis is",
    body: "Dimensional analysis is a method of checking and exploring physical relationships using the dimensions of the quantities involved rather than their numerical values. Every physical quantity can be expressed in terms of a few fundamental dimensions — mass [M], length [L], time [T], and for electrical work current [A] and temperature [K]. By writing an equation in dimensional form we can test whether it is physically sensible, recover the form of a relationship, and deduce the unit of a derived quantity. It is a powerful tool, but it cannot tell you about dimensionless constants such as ½ or π.",
  },
  {
    heading: "Fundamental quantities and base dimensions",
    body: "The starting point is the set of fundamental (base) quantities, which are independent and cannot be defined in terms of one another. In the SI system the base quantities are length [L], mass [M], time [T], electric current [A], thermodynamic temperature [K], amount of substance [N], and luminous intensity [J]. A dimension is written in square brackets: [length] = L, [mass] = M, [time] = T. All other quantities — called derived quantities — are built by combining these base dimensions through multiplication, division or powers.",
  },
  {
    heading: "Derived quantities and their dimensions",
    body: "A derived quantity is any quantity whose dimension is a product of powers of the base dimensions. Volume is length cubed, so [volume] = L³. Density is mass per volume, so [density] = M L⁻³. Speed is distance over time, [speed] = L T⁻¹; momentum is mass × velocity, [momentum] = M L T⁻¹. Building the dimensional formula of any quantity is simply a matter of writing its definition and substituting the dimensions of the parts. This is exactly how the SI derived unit (m³, kg m⁻³, m s⁻¹) is obtained from the base units.",
  },
  {
    heading: "Dimensions of common mechanical quantities",
    body: "Several mechanical dimensions are worth committing to memory because they recur constantly. Acceleration is the rate of change of velocity, so [a] = L T⁻². Force = mass × acceleration gives [F] = M L T⁻², whose unit is the newton (kg m s⁻²). Work and energy = force × distance, so [W] = M L² T⁻², unit joule. Power = energy/time, [P] = M L² T⁻³. Pressure = force/area, [p] = M L⁻¹ T⁻². Writing these out from their definitions once cements the method; you should be able to reconstruct any of them in an exam from memory.",
  },
  {
    heading: "Dimensional homogeneity — checking equations",
    body: "The principle of dimensional homogeneity states that every term in a physically meaningful equation must have the same dimensions. You cannot add or equate quantities of different kinds — you cannot add a length to a time, nor set a force equal to an energy. To test an equation, replace each symbol by its dimensional formula, expand, and compare the left-hand side with the right-hand side. If the dimensions agree the equation is dimensionally consistent; if they disagree the equation is certainly wrong. Homogeneity is a necessary condition, not a guarantee of correctness.",
  },
  {
    heading: "Worked example — checking s = ut + ½at²",
    body: "Consider the kinematic equation s = ut + ½at². The left side is displacement, so [s] = L. On the right, [ut] = (L T⁻¹)(T) = L, and [½at²] = (L T⁻²)(T²) = L. All three terms have dimension L, so the equation is dimensionally homogeneous and could be correct. Note the constant ½ is dimensionless and plays no part in the check — dimensional analysis can never confirm or deny a pure number. This is why a dimensionally correct equation may still be missing a constant factor.",
  },
  {
    heading: "Worked example — checking a suspect formula",
    body: "Suppose someone proposes that the speed v of a wave on a string depends on tension T and mass per unit length μ as v = T/μ. Test it: [T (tension)] = force = M L T⁻², [μ] = mass/length = M L⁻¹, so [T/μ] = (M L T⁻²)/(M L⁻¹) = L² T⁻². Taking the square root (since v should be a speed) gives [v] = L T⁻¹, which matches the dimension of velocity. The correct relation is in fact v = √(T/μ); dimensional analysis confirms the form but again cannot reveal the square root or any constant — that needs experiment or full derivation.",
  },
  {
    heading: "Deriving relationships by dimensions",
    body: "Dimensional analysis can also suggest the form of a relationship. If you suspect a quantity depends on several others, write it as a product with unknown powers, then match dimensions. For example, assume the period T of a swinging pendulum depends on its length l, the gravitational field g, and the mass m of the bob: T = k lᵃ gᵇ mᶜ. Substitute dimensions [T] = T, [l] = L, [g] = L T⁻², [m] = M, and solve for a, b, c by equating the powers of M, L and T on each side. The method isolates the powers but never the dimensionless constant k.",
  },
  {
    heading: "Worked example — pendulum period derivation",
    body: "For a pendulum, T = k lᵃ gᵇ mᶜ. In dimensions: T = Lᵃ (L T⁻²)ᵇ Mᶜ = Lᵃ⁺ᵇ T⁻²ᵇ Mᶜ. Equating powers: for M, c = 0 (period does not depend on mass — confirmed by experience); for T, 1 = −2b so b = −½; for L, 0 = a + b so a = ½. Therefore T = k l^{½} g^{−½} = k√(l/g). Dimensional analysis gives the exact dependence on l and g and proves mass cancels, but the constant k = 2π must come from solving the full equation of motion.",
  },
  {
    heading: "Obtaining derived units",
    body: "A further use is finding the unit of a quantity you have not met before. If a quantity X is defined by Y = X·Z, then [X] = [Y]/[Z], and its SI unit is the corresponding combination of base units. For instance the unit of Young's modulus (stress/strain) is N m⁻² = kg m⁻¹ s⁻², the pascal. Worked: viscosity η in Stokes' law F = 6πηrv gives [η] = [F]/([r][v]) = (M L T⁻²)/(L·L T⁻¹) = M L⁻¹ T⁻¹, unit kg m⁻¹ s⁻¹. Dimensional reasoning is the fastest way to reconstruct any unfamiliar derived unit.",
  },
  {
    heading: "Limitations of dimensional analysis",
    body: "Dimensional analysis has clear limits you must state in an exam. It cannot determine dimensionless constants (½, π, 2π) — these require theory or experiment. It cannot tell the difference between quantities that share the same dimensions (energy, torque and work are all M L² T⁻², yet they are physically distinct). It fails if the relationship involves sums of terms with different powers, or if a dimensionless trig/exponential function is involved. And it assumes the dependence is a simple product of powers. Use it as a check and a guide, never as a substitute for a full derivation.",
  },
  {
    heading: "Worked example — deriving centripetal force",
    body: "As a final example, derive the form of centripetal force F in terms of mass m, speed v and radius r: F = k mᵃ vᵇ rᶜ. Dimensions: M L T⁻² = Mᵃ (L T⁻¹)ᵇ Lᶜ = Mᵃ Lᵇ⁺ᶜ T⁻ᵇ. Equate: M → a = 1; T → −2 = −b so b = 2; L → 1 = b + c = 2 + c so c = −1. Hence F = k m v²/r. The full theory shows k = 1, giving the familiar F = mv²/r. This illustrates how dimensions recover the structure of a formula even when you cannot recall the constant.",
  },
];
