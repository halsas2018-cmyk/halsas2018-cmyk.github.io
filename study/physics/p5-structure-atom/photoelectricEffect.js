export default [
  {
    heading: "The photoelectric observation",
    body: "When ultraviolet or visible light shines on a clean metal surface, electrons are ejected from it — a phenomenon called the photoelectric effect. These emitted electrons are called photoelectrons, and the effect is detected as a tiny electric current in a vacuum tube. Crucially, ejection happens only for light above a certain frequency, regardless of how long the light shines. This observation, first noted by Hertz and studied by Lenard, could not be explained by the classical wave theory of light.",
  },
  {
    heading: "Why classical wave theory failed",
    body: "Classical physics treated light as a continuous wave whose energy depended on intensity, or brightness. It therefore predicted that a dim light should eventually eject electrons if shone long enough, and that brighter light should give faster electrons. Experiment contradicted both: no electrons are emitted below a threshold frequency no matter how bright, and above it the electron energy depends on frequency, not brightness. These contradictions forced a radical new view of light.",
  },
  {
    heading: "Einstein's photon explanation",
    body: "In 1905 Einstein proposed that light itself is quantized into packets called photons, each carrying energy E = h f. A single photon can be absorbed wholly by a single electron; if that energy exceeds the electron's binding energy it escapes the metal. This explained instantly why frequency sets the threshold and why brightness (more photons) only increases the number emitted. Einstein's idea confirmed the particle nature of light and won him the Nobel Prize.",
  },
  {
    heading: "Work function and threshold frequency",
    body: "The work function φ is the minimum energy needed to liberate an electron from a particular metal's surface, and it differs from metal to metal (about 2 eV for sodium, about 4.5 eV for zinc). The threshold frequency f₀ is the minimum frequency whose photons carry exactly this energy: h f₀ = φ, so f₀ = φ/h. Light below f₀ cannot eject electrons no matter how intense, because each photon is individually too weak. Above f₀, every photon has enough energy and electrons are emitted immediately.",
  },
  {
    heading: "Einstein's photoelectric equation",
    body: "The maximum kinetic energy of a photoelectron is the photon energy minus the work function: K_max = h f − φ. Any photon energy beyond φ becomes the electron's kinetic energy; energy below φ is insufficient for emission. Rearranging gives the stopping potential V_s via e V_s = K_max, letting experimenters measure K_max electrically. This equation predicted and matched the observed straight-line graph of K_max against frequency, with slope h and intercept −φ.",
  },
  {
    heading: "Intensity versus frequency",
    body: "Once the frequency is above threshold, increasing the light's intensity increases the NUMBER of photons arriving per second, so MORE electrons are emitted per second (a larger current) — but each electron leaves with the SAME maximum speed. Raising the frequency instead gives each photon more energy, so each photoelectron leaves FASTER. This distinction — intensity controls quantity, frequency controls energy — is the clearest evidence for the photon picture.",
  },
  {
    heading: "Worked example",
    body: "For a metal with work function φ = 2.0 eV exposed to light of frequency f = 1.0 × 10¹⁵ Hz: photon energy E = h f = (6.63 × 10⁻³⁴)(1.0 × 10¹⁵) = 6.63 × 10⁻¹⁹ J ≈ 4.14 eV. K_max = 4.14 − 2.0 = 2.14 eV, so electrons leave with about 2.14 eV of kinetic energy. The threshold frequency is f₀ = φ/h ≈ 4.8 × 10¹⁴ Hz; light below this would eject nothing. This shows how the equation is applied numerically in the exam problems.",
  },
  {
    heading: "The dual nature of light",
    body: "The photoelectric effect proves light behaves as particles (photons), yet interference and diffraction prove it behaves as waves. Light therefore has a dual nature: it is neither purely wave nor purely particle, but exhibits whichever property the experiment reveals. A photon's momentum is p = h/λ, linking its particle and wave descriptions. This wave–particle duality extends to matter too (electrons show diffraction) and is a central theme of modern physics.",
  },
  {
    heading: "Applications of the photoelectric effect",
    body: "Photocells and solar panels convert light directly into electricity by letting photons liberate electrons, powering calculators, satellites and homes. Light meters in cameras use the effect to set exposure automatically, and photoelectric sensors guard burglar alarms and automatic doors. In television camera tubes, the effect converted an optical image into an electrical signal. Any device that turns light into a current relies on this quantum effect discovered over a century ago.",
  },
];
