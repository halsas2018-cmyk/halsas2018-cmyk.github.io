export default [
  {
    heading: "What corrosion is",
    body: "Corrosion is the gradual, unwanted destruction of a metal by chemical or electrochemical reaction with its surroundings. The most familiar case is rusting of iron, but corrosion also includes the tarnishing of silver, the greening of copper (patina), and the surface attack of aluminium or zinc. At its heart corrosion is a redox process: the metal is oxidised (it loses electrons and forms positive ions), and some other substance in the environment — usually oxygen or an acid — is reduced. Because the metal is consumed, corrosion weakens structures and wastes valuable material.",
  },
  {
    heading: "The reactivity series and corrosion tendency",
    body: "How easily a metal corrodes is largely predicted by its position in the reactivity series. Very reactive metals (K, Na, Ca) corrode almost instantly in air or water, while moderately reactive ones (Fe, Zn, Al) corrode only under the right conditions. Curiously, aluminium and some others form a thin, tight oxide layer that seals the surface and actually protects the metal underneath — a process called passivation. The least reactive metals (Au, Pt, Ag) barely corrode at all, which is why gold ornaments survive for centuries, though silver slowly tarnishes by reacting with sulphur compounds in the air.",
  },
  {
    heading: "Rusting needs BOTH water and oxygen",
    body: "A classic set of school experiments proves that iron rusts only when water and oxygen are both present: iron in dry air does not rust, iron fully under oil (no oxygen) does not rust, but iron partly in contact with both air and water rusts quickly. Water is not merely a solvent — it acts as the electrolyte that lets ions move between the anodic and cathodic regions of the metal surface. This is why coastal and humid regions see far more rust, and why a scratched car body rusts faster than a smooth painted one.",
  },
  {
    heading: "The electrochemistry of rusting",
    body: "Rusting is an electrochemical (redox) process occurring at microscopic anodes and cathodes on the iron surface. At an anodic region iron is oxidised: Fe → Fe²⁺ + 2e⁻. The electrons travel through the metal to a cathodic region where, in the presence of water and dissolved oxygen, they reduce oxygen: O₂ + 2H₂O + 4e⁻ → 4OH⁻. The Fe²⁺ and OH⁻ combine and are further oxidised by oxygen to form hydrated iron(III) oxide, Fe₂O₃·xH₂O — the reddish-brown flaky material we call rust. Crucially, rust is porous and flakes off, exposing fresh iron, so the attack continues unchecked.",
  },
  {
    heading: "Why rust is so destructive",
    body: "Rust (Fe₂O₃·xH₂O) occupies more volume than the iron it came from and is brittle and porous, so it offers no protection and continually exposes new metal. Because the process is self-sustaining once started, a small scratch can eat through a whole steel girder or car panel over time. Salt water speeds it up dramatically by improving electrical conduction between anodes and cathodes. This is why bridges, ships and underground pipes in marine or de-iced-road environments need constant, expensive maintenance.",
  },
  {
    heading: "The economic cost of corrosion",
    body: "Corrosion is one of the largest avoidable expenses in any industrial economy — estimates put the global cost at several percent of gross domestic product each year. It destroys buildings, vehicles, pipelines, ships and machinery, and much of that loss is paid for in replacement, repair and downtime. A great deal of engineering effort goes simply into slowing corrosion rather than into building new things. Understanding and preventing corrosion is therefore as much an economic skill as a chemical one.",
  },
  {
    heading: "Barrier methods of prevention",
    body: "The simplest defence is to keep water and oxygen away from the metal with a barrier coating. Painting, greasing, oiling or applying plastic or enamel seals the surface; if the coating stays intact the iron cannot rust. Galvanising (see next card) combines a barrier with redox protection, while tins and cans use a thin tin or chromium layer. The weakness of any barrier method is that a single scratch or chip lets rust begin at that point and spread underneath the coating.",
  },
  {
    heading: "Galvanising (zinc coating)",
    body: "Galvanising is coating iron or steel with a layer of zinc, usually by dipping in molten zinc. Zinc is more reactive than iron (it sits above Fe in the series), so even if the coating is scratched, the zinc corrodes preferentially and 'sacrifices' itself to protect the iron — this is sacrificial protection built into the coating. At the same time the zinc forms a tough, adherent oxide layer that also acts as a barrier. Galvanised steel is used for roofing sheets, fences, buckets and car bodies because it stays rust-free for decades even when scratched.",
  },
  {
    heading: "Sacrificial (cathodic) protection",
    body: "Where a coating is impractical, a more reactive metal can be attached to the iron to act as a 'sacrificial anode'. Blocks of magnesium, zinc or aluminium are bolted to ships' hulls, pipelines and storage tanks; because they are higher in the reactivity series they oxidise first, supplying electrons that keep the iron in its metallic state. The sacrificial block is consumed and must be replaced periodically, but the expensive iron structure is preserved. This cathodic protection is especially valuable underground and underwater, where painting alone fails.",
  },
  {
    heading: "Alloying and designing out corrosion",
    body: "A different strategy is to choose a metal or alloy that resists attack in the first place. Stainless steel resists rust because its chromium content forms a self-healing Cr₂O₃ layer; aluminium and titanium form similar protective oxides (passivation). Copper develops a stable green patina that actually shields it. By selecting the right alloy for the environment — rather than coating a vulnerable one — designers can make corrosion almost a non-issue, though such materials usually cost more initially.",
  },
  {
    heading: "Worked example — predicting protection",
    body: "Consider an iron pipe protected by a bolted magnesium block in seawater. Magnesium is above iron in the reactivity series, so it acts as the anode and is oxidised (Mg → Mg²⁺ + 2e⁻), while the iron receives those electrons and is forced to stay metallic (cathodic). The magnesium block corrodes away and is replaced on schedule, but the pipe does not rust. If instead you had attached a copper block, copper is BELOW iron, so the iron would become the sacrificial anode and rust even faster — a dangerous mistake that shows why the protecting metal must be more reactive than the one it guards.",
  },
];
