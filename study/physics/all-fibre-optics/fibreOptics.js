export default [
  {
    heading: "What an optical fibre is",
    body: "An optical fibre is a thin strand of ultra-pure glass or plastic that carries information as pulses of light over long distances. Light entering one end is kept inside by repeated total internal reflection and emerges with little loss. Bundles of fibres form the backbone of the internet, telephone and cable-TV networks.",
  },
  {
    heading: "Total internal reflection — the guiding principle",
    body: "Total internal reflection (TIR) occurs when light in a denser medium strikes the boundary with a less dense medium beyond the critical angle: instead of refracting out, all the light reflects back inside. In a fibre the ray zig-zags down the core by TIR, never escaping, so the signal is guided around bends. TIR requires the core's index to exceed the cladding's.",
  },
  {
    heading: "Critical angle (worked example)",
    body: "The critical angle c is the angle in the denser medium at which the refracted ray runs along the boundary; beyond it TIR occurs, sin c = n₂/n₁ with n₁ > n₂. For a core n₁ = 1.50 and cladding n₂ = 1.48, sin c = 0.987, so c ≈ 80.6°. Any ray hitting the wall beyond 80.6° from the normal is totally reflected.",
  },
  {
    heading: "Core and cladding",
    body: "A fibre has two concentric parts: the core (higher index, e.g. 1.50) that carries the light, and the cladding (lower index, e.g. 1.48) that traps it by TIR. The small index step creates the guiding; without cladding, light would leak from the core surface. The cladding also protects the core from scratches and contamination that scatter light.",
  },
  {
    heading: "Acceptance angle and numerical aperture",
    body: "Not every ray entering the fibre end is guided; only those within the acceptance cone are. The acceptance angle θₐ is the maximum half-angle at the fibre face for which the ray meets the wall beyond the critical angle. It links to the numerical aperture NA = √(n₁² − n₂²) = n₀ sin θₐ; for n₁ = 1.50, n₂ = 1.48: NA ≈ 0.244, so θₐ ≈ 14°.",
  },
  {
    heading: "Step-index vs graded-index fibres",
    body: "In a step-index fibre the core has one uniform refractive index and the cladding a lower one, giving a sudden step; rays bounce in straight zig-zags. A graded-index fibre has the index gradually decreasing from centre to edge, curving rays back smoothly like a lens. Graded-index design reduces modal dispersion.",
  },
  {
    heading: "Single-mode vs multimode fibres",
    body: "A multimode fibre has a wide core (tens of micrometres) that lets many light paths, or modes, travel at once — cheaper but prone to dispersion over distance. A single-mode fibre has a very narrow core (≈9 μm) allowing essentially one path, so pulses stay sharp over many kilometres and it carries the highest bandwidth. Long-haul cables use single-mode.",
  },
  {
    heading: "Why the cladding matters (the escape cone)",
    body: "The cladding sets the critical angle and therefore the escape cone — rays outside this cone would refract out and be lost. By keeping n₂ just below n₁, the fibre accepts only a narrow, well-guided set of rays, balancing easy coupling against low loss. The cladding must also be low-loss glass so the small light in it does not absorb the signal.",
  },
  {
    heading: "Attenuation (signal loss)",
    body: "As light travels it weakens — attenuation — mainly from absorption by impurities (especially residual water) and Rayleigh scattering. Modern silica fibres lose below 0.2 dB/km, so a signal crosses tens of kilometres before amplification. Low attenuation is why fibres outdo copper, which loses far more per kilometre at high frequencies.",
  },
  {
    heading: "Dispersion and pulse broadening",
    body: "Dispersion spreads a light pulse so successive bits overlap, limiting data rate. Modal dispersion (multimode only) arises because different ray paths have different lengths; chromatic dispersion arises because different wavelengths travel at slightly different speeds. Graded-index cores and single-mode fibre reduce modal, narrow lasers reduce chromatic dispersion.",
  },
  {
    heading: "Applications of fibre optics",
    body: "Optical fibres carry telephone, internet and cable-TV traffic across cities and oceans because they offer huge bandwidth and tiny loss. Medically, fibre bundles form endoscopes piping light and images out so doctors can view inside the body. They also serve as sensors and as conduits for high-power laser beams in surgery and industry.",
  },
  {
    heading: "Advantages over copper cables",
    body: "Compared with copper, fibres carry vastly more data, lose far less signal per kilometre, are immune to interference and electrical noise, and are lighter and thinner. They do not conduct electricity, so they are safe near high-voltage equipment and cannot spark in explosive atmospheres. Their drawbacks are precise splicing and costlier transmitters and receivers.",
  },
];
