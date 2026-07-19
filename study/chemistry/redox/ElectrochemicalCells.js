export default [
  {
    heading: "What an electrochemical (voltaic) cell is",
    body: "An electrochemical cell — also called a voltaic or galvanic cell — converts the chemical energy of a spontaneous redox reaction directly into electrical energy. It consists of two half-cells, each containing a metal electrode dipped in a solution of its own ions, connected so that electrons flow through an external wire while ions complete the circuit internally. The Daniell cell, made from zinc and copper half-cells, is the classic classroom example that powers a small bulb from the reaction Zn + Cu²⁺ → Zn²⁺ + Cu. Unlike an electrolytic cell, it generates electricity; it does not consume it.",
  },
  {
    heading: "Half-cells and electrode potentials",
    body: "A half-cell is one half of the redox pair: for example a zinc rod in Zn²⁺(aq), or a copper rod in Cu²⁺(aq). On its own a half-cell has a tendency to lose or gain electrons, expressed as its electrode potential. The cell's voltage arises because the two half-cells have different tendencies, so electrons are pushed from the more electron-rich one to the other through the wire. Measuring these tendencies against a common reference (the standard hydrogen electrode) gives the table of standard electrode potentials, E°, you use to predict cell voltages.",
  },
  {
    heading: "The Daniell cell in detail",
    body: "The Daniell cell pairs a zinc electrode in ZnSO₄(aq) with a copper electrode in CuSO₄(aq). Zinc is more reactive, so it tends to lose electrons more strongly than copper, and this difference is what drives the cell. The two solutions are kept separate (often in two beakers) and joined by a salt bridge so the ions can move but the solutions do not mix. In use, the zinc electrode slowly dissolves as Zn → Zn²⁺ and copper metal plates onto the copper electrode as Cu²⁺ → Cu, while a current flows in the external circuit.",
  },
  {
    heading: "Anode, cathode and the direction of flow",
    body: "By definition the anode is where oxidation occurs and the cathode is where reduction occurs — in a voltaic cell the anode is the negative terminal and the cathode the positive one. In the Daniell cell Zn is oxidised at the anode (Zn → Zn²⁺ + 2e⁻) and Cu²⁺ is reduced at the cathode (Cu²⁺ + 2e⁻ → Cu). Electrons therefore flow through the wire from the zinc anode to the copper cathode, and the conventional current flows the opposite way. Remembering 'AN OX' (anode = oxidation) and 'RED CAT' (reduction = cathode) prevents the usual confusion.",
  },
  {
    heading: "The salt bridge",
    body: "A salt bridge is usually a strip of filter paper soaked in a salt solution (commonly KNO₃ or KCl) or a U-tube of agar gel, connecting the two half-cell solutions. Its job is to complete the electrical circuit by allowing ions to migrate: anions drift toward the anode compartment and cations toward the cathode, preventing charge building up that would stop the reaction. The salt chosen must not react with either half-cell solution. Without a salt bridge the cell would quickly polarise and the current would cease.",
  },
  {
    heading: "Cell notation and cell diagrams",
    body: "A cell is written in a compact shorthand with a single vertical line '|' for a phase boundary and a double line '||' for the salt bridge. The Daniell cell is written Zn(s) | Zn²⁺(aq) || Cu²⁺(aq) | Cu(s), with the more negative (anode) half-cell on the left. By convention oxidation is shown on the left and reduction on the right. Being able to draw the cell diagram and write this notation is explicitly required in the syllabus, and it lets you read off which electrode is which at a glance.",
  },
  {
    heading: "Standard electrode potentials",
    body: "The standard electrode potential, E°, is the voltage of a half-cell measured under standard conditions (1 mol dm⁻³, 298 K, 1 atm) against the standard hydrogen electrode, which is arbitrarily assigned 0.00 V. A more positive E° means the half-cell has a greater tendency to gain electrons (to be reduced) and is therefore a stronger oxidising agent. The standard hydrogen electrode itself is Pt | H₂(g) | H⁺(aq). Only metal/metal-ion systems are needed for the exam papers, which keeps the table short and memorable.",
  },
  {
    heading: "Cell e.m.f. and predicting spontaneity",
    body: "The cell e.m.f. (voltage) is E°cell = E°cathode − E°anode, that is the more positive electrode potential minus the less positive one; a positive value means the reaction is spontaneous and the cell works. A larger difference gives a larger voltage, and the more positive half-cell is always the cathode (where reduction happens). For example, since Cu²⁺/Cu (+0.34 V) is more positive than Zn²⁺/Zn (−0.76 V), copper is reduced and the Daniell cell gives about 1.10 V. If E°cell would be negative, the written reaction is non-spontaneous and would run the other way.",
  },
  {
    heading: "Primary, secondary and fuel cells",
    body: "Cells are classified by whether their chemistry can be reversed. Primary cells (such as the dry Leclanché cell in a torch) are used once — the reaction is not practically reversible. Secondary cells (such as the lead–acid battery in a car and lithium-ion cells) can be recharged because an external current drives the reaction backwards, restoring the reactants. Fuel cells generate electricity continuously as long as fuel (often H₂) and oxygen are supplied, with water as the only product. The distinction matters for both exam questions and real-world battery choice.",
  },
  {
    heading: "Common cell examples",
    body: "The lead–acid cell uses Pb and PbO₂ electrodes in sulfuric acid; on discharge both become PbSO₄ and it delivers about 2 V per cell, reversible on charging. The dry cell has a zinc case (anode) and a carbon rod (cathode) with a moist paste, giving about 1.5 V and being non-rechargeable. The hydrogen–oxygen fuel cell combines H₂ and O₂ to make water and electricity, with no polluting exhaust. Knowing one example of each type — and that they all rest on the same half-cell principle — covers the applications part of the syllabus.",
  },
];
