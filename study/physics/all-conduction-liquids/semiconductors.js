export default [
  {
    heading: "Band theory: conductors, semiconductors and insulators",
    body: "Band theory explains conductivity by the allowed electron energy levels in a solid. An insulator's valence band is full and separated from the empty conduction band by a large gap (≈5–10 eV), so electrons cannot move. A conductor has overlapping bands; a semiconductor has a small gap (≈1 eV Si, ≈0.7 eV Ge), so a few electrons cross at room temperature.",
  },
  {
    heading: "What a semiconductor is",
    body: "A semiconductor's conductivity lies between a metal's and an insulator's and, unlike a metal, rises with temperature. The common ones are silicon (Si) and germanium (Ge), Group IV elements with four valence electrons in a covalent lattice. Their small band gap lets thermal energy promote a usable number of electrons into the conduction band.",
  },
  {
    heading: "Charge carriers: electrons and holes",
    body: "Conduction in a semiconductor uses two carriers: electrons that have jumped to the conduction band, and holes — the empty valence-band sites they leave behind — which act as positive charge carriers. Under a field, electrons drift one way and holes the other, both adding to the current. In a pure crystal electrons equal holes.",
  },
  {
    heading: "Intrinsic semiconductors",
    body: "An intrinsic semiconductor is pure, with no added impurities; its conductivity comes only from thermally generated electron–hole pairs. Because carriers grow rapidly with temperature, intrinsic Si is a poor conductor when cold and far better when warm. This is why pure crystals are grown under controlled conditions.",
  },
  {
    heading: "Doping — n-type semiconductors",
    body: "Doping adds a tiny fraction of impurity atoms to control conductivity. Adding a Group V element such as phosphorus (five valence electrons) to silicon leaves one extra weakly-bound electron per impurity; this donor electron is freed, so the majority carriers become negative electrons. The n-type material has more electrons than holes; donor ions are fixed and positive.",
  },
  {
    heading: "Doping — p-type semiconductors",
    body: "Doping silicon with a Group III element such as boron (three valence electrons) creates a missing bond — a hole — at each impurity site. These acceptor atoms capture an electron, so the majority carriers are positive holes and the material is p-type. The acceptor ions are fixed and negative; conductivity is carried mainly by holes.",
  },
  {
    heading: "The p–n junction and depletion layer",
    body: "Joining p-type and n-type material forms a p–n junction. Near the boundary electrons from the n-side fill holes on the p-side, leaving a depletion region of fixed positive ions (n-side) and negative ions (p-side) with no mobile carriers. This built-in barrier (≈0.7 V Si, ≈0.3 V Ge) opposes diffusion — the heart of every diode.",
  },
  {
    heading: "Forward and reverse biasing",
    body: "Forward bias connects the p-side to the positive terminal and the n-side to the negative, narrowing the depletion region and letting current flow once the barrier is overcome. Reverse bias widens the depletion region and blocks current, allowing only a tiny leakage. This makes the diode a valve, passing current in one direction only.",
  },
  {
    heading: "I–V characteristics and the diode",
    body: "A diode's current–voltage graph is highly non-linear: almost no current flows in reverse bias, while forward current rises sharply once the threshold (≈0.7 V for Si) is passed. This makes the diode a non-ohmic device, unlike a metal resistor. In a circuit it clips, blocks or steers current — the non-ohmic behaviour the exam syllabus lists.",
  },
  {
    heading: "Half-wave rectification",
    body: "Rectification converts AC into DC. A single diode in series with the load passes only the positive halves of the AC cycle and blocks the negative halves, giving pulsating DC — half-wave rectification. It wastes half the supply and has large ripple; a smoothing capacitor across the load evens the pulses into steadier DC.",
  },
  {
    heading: "Full-wave rectification",
    body: "Full-wave rectification uses four diodes in a bridge to redirect both halves of the AC cycle into the same direction at the load, doubling the output frequency and halving ripple. The bridge rectifier is the standard AC-to-DC converter in phone chargers and power supplies. A capacitor and regulator then give smooth, stable DC.",
  },
  {
    heading: "Applications of semiconductor devices",
    body: "Beyond rectifiers, semiconductor junctions enable LEDs, photodiodes and solar cells, transistors, and integrated circuits. Solar cells convert sunlight to electricity by the photovoltaic effect at a p–n junction — a renewable-energy application in the exam syllabus. Doping and patterning these materials makes compact electronics possible.",
  },
];
