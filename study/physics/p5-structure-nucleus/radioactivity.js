export default [
  {
    heading: "What radioactivity is",
    body: "Radioactivity is the spontaneous disintegration of an unstable atomic nucleus with the emission of radiation. It is a nuclear process that cannot be started, stopped, or speeded up by changing temperature, pressure, or chemical form. The rate depends only on the particular nuclide, so each radioactive isotope has its own fixed probability per second of decaying.",
  },
  {
    heading: "Alpha (α) emission",
    body: "An alpha particle is a helium nucleus: two protons and two neutrons (⁴₂He). Alpha decay lowers Z by 2 and A by 4, for example ²²⁶₈₈Ra → ²²²₈₆Rn + α. Because it is heavy, doubly charged, and slow, α radiation is strongly ionising but is stopped by a sheet of paper or the dead layer of skin and travels only a few centimetres in air.",
  },
  {
    heading: "Beta (β) emission",
    body: "A beta particle is a fast electron ejected from the nucleus when a neutron turns into a proton (β⁻: n → p + e⁻ + antineutrino). Beta decay changes Z by ±1 while A stays the same, for example ¹⁴₆C → ¹⁴₇N + β⁻. β particles are lighter and faster than α, so they are less ionising and penetrate further — a few millimetres of aluminium stops them.",
  },
  {
    heading: "Gamma (γ) radiation",
    body: "Gamma rays are high-energy photons emitted after α or β decay when the daughter nucleus drops from an excited state to a lower one. They carry no charge and no mass, so γ emission does not change Z or A. Being uncharged and very penetrating, γ rays need thick lead or concrete to attenuate them and are the most hazardous to internal organs.",
  },
  {
    heading: "Ionising power and detection",
    body: "Radiation is detected through the ionisation it produces. A Geiger–Müller (G–M) tube counts individual ionising events as a click rate on a scaler; photographic plates and film badges darken where exposed; cloud and bubble chambers make tracks visible. The choice of detector depends on whether you need a simple count rate (G–M) or a visual track (cloud chamber).",
  },
  {
    heading: "The random nature and decay law",
    body: "Radioactive decay is random for any single nucleus, but for a large sample the number decaying per second is proportional to how many remain: dN/dt = −λN, where λ is the decay constant. Integrating gives N = N₀e^(−λt), an exponential fall. This means a fixed fraction decays in each equal time interval, so the sample never quite reaches zero.",
  },
  {
    heading: "Half-life and decay constant",
    body: "The half-life T½ is the time for half the nuclei in a sample to decay; the decay constant λ is the probability per second that one nucleus decays. They are linked by T½ = ln 2 / λ ≈ 0.693/λ. Half-lives range from fractions of a second to billions of years, and a nuclide is effectively gone after about ten half-lives have passed.",
  },
  {
    heading: "Worked example — using half-life",
    body: "A sample has a half-life of 8 days and starts with 80 mg. After one half-life (8 d) 40 mg remain; after two (16 d) 20 mg; after three (24 d) 10 mg. Using N = N₀(½)^(t/T½), after 24 days N = 80 × (½)³ = 10 mg. A bone with one-quarter of the normal ¹⁴C is about two half-lives, or ~11 460 years old, since carbon-14 has T½ ≈ 5730 years.",
  },
  {
    heading: "Transformation of elements",
    body: "Because α or β decay changes Z, the nucleus becomes a different element — this is transmutation. Radium-226 decaying by α becomes radon-222; carbon-14 decaying by β becomes nitrogen-14. A chain of decays (a decay series, e.g. uranium-238 → lead-206) passes through several elements before reaching a stable end product.",
  },
  {
    heading: "Applications — medicine, industry, archaeology, agriculture",
    body: "Radioisotopes are used widely: in medicine as tracers (¹³¹I for the thyroid) and for cancer radiotherapy (cobalt-60 γ rays); in industry for thickness gauging and leak detection; in archaeology via carbon-14 dating; and in agriculture to breed pest-resistant crops and sterilise pests. Each use exploits a specific property — penetration, ionisation, or a known half-life.",
  },
  {
    heading: "Safety, hazards and background radiation",
    body: "Because ionising radiation damages living cells and DNA, sources are handled with shielding (lead, distance, and limited time), kept in labelled stores, and monitored with dosimeters. We are also exposed to natural background radiation from rocks, cosmic rays, and our own bodies. Safety rules exist because high or prolonged doses cause radiation sickness, cancer, or genetic damage.",
  },
];
