export default [
  {
    heading: "Energy levels (shells)",
    body: "Electrons occupy energy levels, or shells, around the nucleus, labelled by the principal quantum number n = 1, 2, 3, 4 … (also called K, L, M, N). The first shell (n = 1) is closest to the nucleus and lowest in energy; higher shells are farther out and higher in energy. An electron in a higher shell has more energy and is held less tightly. The maximum number of electrons in a shell is 2n², so shell 1 holds 2, shell 2 holds 8, shell 3 holds 18, and shell 4 holds 32.",
  },
  {
    heading: "Sub-shells and orbitals",
    body: "Each shell is split into sub-energy levels called sub-shells, labelled s, p, d (and f). Think of a sub-shell as a set of orbitals — regions of space where an electron is most likely to be found. The first shell has only one sub-shell, 1s; the second has 2s and 2p; the third has 3s, 3p and 3d. The sub-shell an electron sits in determines the shape of its probability cloud and, together with the shell, its energy.",
  },
  {
    heading: "Shapes of s and p orbitals",
    body: "An s orbital is spherical, centred on the nucleus, and the same in every direction. A p sub-shell contains three p orbitals, each a dumbbell shape lying along a different axis (pₓ, p_y, p_z), so a p sub-shell holds 6 electrons total. (d orbitals have more complex cloverleaf shapes and hold 10, but for the exam the syllabus asks you to know the shapes of s and p only.) Sketching these shapes helps explain directionality in bonding.",
  },
  {
    heading: "Orbital capacities",
    body: "An orbital can hold at most two electrons. Therefore: an s sub-shell (1 orbital) holds 2 electrons; a p sub-shell (3 orbitals) holds 6; a d sub-shell (5 orbitals) holds 10; an f sub-shell (7 orbitals) holds 14. The shell capacities follow: shell 1 = 1s² = 2; shell 2 = 2s² 2p⁶ = 8; shell 3 = 3s² 3p⁶ 3d¹⁰ = 18. Adding the sub-shell totals gives the 2n² limit.",
  },
  {
    heading: "Aufbau principle (filling order)",
    body: "The Aufbau (German for 'building up') principle states that electrons fill the LOWEST-energy orbitals first. Energy order is not simply by shell number; the rule of thumb is the (n + l) rule, which gives: 1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p, 5s, 4d … Notice 4s fills BEFORE 3d because the 4s orbital is slightly lower in energy than 3d. Always write configurations in this filling order, not numerical shell order.",
  },
  {
    heading: "Pauli exclusion principle",
    body: "The Pauli exclusion principle says no two electrons in an atom can have the same set of quantum numbers; in practice this means an orbital holds at most two electrons, and those two must have OPPOSITE spins (one 'up', one 'down'). This is why every orbital caps at two electrons and why paired electrons are drawn with opposite arrows (↑↓). It prevents all electrons collapsing into the 1s orbital.",
  },
  {
    heading: "Hund's rule of maximum multiplicity",
    body: "Hund's rule states that when filling orbitals of EQUAL energy (e.g. the three 2p orbitals), electrons occupy them singly with parallel spins FIRST, before any pairing occurs. So for 2p² you get ↑ _ ↑ (one electron in each of two p orbitals), not ↑↓ _ _. Pairing only happens once all equal-energy orbitals contain one electron. This minimises electron–electron repulsion and is why partially filled p/d sub-shells look 'spread out'.",
  },
  {
    heading: "Why 4s fills before 3d",
    body: "The apparent oddity that 4s is written before 3d follows from the (n + l) rule: for 4s, n + l = 4 + 0 = 4; for 3d, n + l = 3 + 2 = 5. Lower (n + l) means lower energy, so 4s fills first. When atoms LOSE electrons to form ions, the 4s electrons are removed before 3d electrons because once 3d is occupied it lies lower in energy. This reversal is a frequent exam trap — remember fill 4s-first, but ionise 4s-first too.",
  },
  {
    heading: "Worked example — oxygen (Z = 8)",
    body: "Oxygen has 8 electrons. Fill in order: 1s² 2s² 2p⁴. The 2p sub-shell gets four electrons: by Hund's rule, three go in singly (↑ ↑ ↑ across the three p orbitals), then the fourth pairs in one of them (↑↓ ↑ ↑). So the 2p configuration is not all in one orbital. This unpaired-electron pattern explains why oxygen is paramagnetic and forms two bonds.",
  },
  {
    heading: "Worked example — a first-row transition metal (Fe, Z = 26)",
    body: "Iron: 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁶. The 4s fills before 3d, giving two 4s electrons, then six go into 3d. By Hund's rule the 3d⁶ is ↑↓ ↑ ↑ ↑ ↑ (one pair, four singles). Iron commonly forms Fe²⁺ by losing the two 4s electrons → [Ar] 3d⁶, and Fe³⁺ by losing 4s² + one 3d → [Ar] 3d⁵ (a particularly stable half-filled shell). This is why transition metals show variable oxidation states.",
  },
  {
    heading: "Abbreviated (noble-gas core) configurations",
    body: "Writing the full configuration of, say, calcium (Z = 20) as 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² is long. We abbreviate by replacing the filled inner shells with the previous noble gas in brackets: Ca = [Ar] 4s². For iron, Fe = [Ar] 4s² 3d⁶. The noble-gas core ([He], [Ne], [Ar], [Kr] …) represents the stable inner electrons, and only the valence (outer) electrons are written out. This makes the chemistry-relevant electrons obvious.",
  },
  {
    heading: "Common pitfalls and exam traps",
    body: "Watch for these: (1) writing 3d before 4s in the filling order — wrong; 4s comes first. (2) putting three electrons in one p orbital while another is empty — violates Hund's rule. (3) forgetting Pauli and writing three electrons in one orbital. (4) Mixing up the shell-maximum (2n²) with the sub-shell capacity. (5) When drawing orbital diagrams, show single arrows parallel before pairing. Practise the first 30 elements until the order is automatic.",
  },
];
