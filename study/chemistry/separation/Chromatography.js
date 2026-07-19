export default [
  {
    heading: "What chromatography is",
    body: "Chromatography is a family of separation techniques that splits a mixture into its components by passing it through (or over) a stationary phase while a mobile phase carries it along. The components travel at different speeds because each interacts differently with the two phases — some are held back strongly by the stationary phase, others move freely with the mobile phase. This differential movement is what pulls the mixture apart into separate bands or spots. It is uniquely powerful because it can separate substances that have very similar boiling points or that are present in only tiny amounts. The name comes from the Greek for 'colour writing', because the first applications separated plant pigments into coloured bands.",
  },
  {
    heading: "The two phases and the principle",
    body: "Every chromatographic method has a stationary phase (a solid, or a liquid coated on a solid) that stays put, and a mobile phase (a liquid solvent or a gas) that moves through it. Separation depends on a balance between two processes: adsorption (components sticking to the stationary phase) and partition (components distributing between the mobile and stationary phases). A component that is strongly adsorbed or prefers the stationary phase lags behind; one that prefers the mobile phase races ahead. Because each substance has its own characteristic affinity, the mixture is resolved into its parts as the mobile phase advances. This same idea underlies every type from paper strips to industrial columns.",
  },
  {
    heading: "Paper chromatography",
    body: "In paper chromatography the stationary phase is a strip or sheet of porous filter paper (cellulose, which holds a film of water) and the mobile phase is a solvent such as water, ethanol or propanone. A small spot of the mixture is placed near the bottom of the paper, which is then stood in a shallow layer of solvent so the solvent climbs up by capillary action. As it rises, each component is carried at its own rate, producing a series of separated spots. The paper is removed before the solvent front reaches the top, marked, and dried. It is the simplest form and is ideal for separating inks, plant pigments and amino acids in school laboratories.",
  },
  {
    heading: "Thin-layer chromatography (TLC)",
    body: "Thin-layer chromatography works on the same principle but uses a glass or plastic plate coated with a thin layer of a stationary solid such as silica gel or alumina. A spot of the mixture is placed near the base, the plate is stood in a developing tank with a shallow solvent layer, and the solvent rises through the layer by capillary action. TLC is faster and gives sharper separation than paper chromatography, and the coating can be chosen to suit the substances (silica is polar, so it holds polar compounds back). The developed plate is dried and the spots are located, sometimes under ultraviolet light if they are colourless. It is widely used to check the purity of a product or to follow the progress of a reaction.",
  },
  {
    heading: "Column and adsorption chromatography",
    body: "In column chromatography the stationary phase is a powder (silica gel, alumina or activated charcoal) packed into a vertical glass column, and the mobile phase is a liquid eluent poured over the top. The mixture is loaded at the top; as the eluent flows down, components with weak attraction to the stationary phase wash through first, while strongly adsorbed ones are retained longer and emerge later. Collecting the outflow in separate fractions isolates each component in turn. It is the preparative sibling of TLC — used when you need to obtain pure amounts of a substance rather than just analyse it. Activated charcoal in particular is excellent at stripping coloured impurities from a solution.",
  },
  {
    heading: "Gas and high-performance liquid chromatography",
    body: "For very fine analysis, gas chromatography (GC) uses an inert carrier gas as the mobile phase and a long coiled column as the stationary phase, separating volatile substances as they vaporize and pass through. High-performance liquid chromatography (HPLC) is the liquid-phase equivalent, forcing solvent under high pressure through a tightly packed column for fast, sharp separations. Both are connected to detectors that produce a chromatogram — a graph of signal versus time with a peak for each component. The retention time of a peak identifies the substance and the peak area tells you how much is present. These instruments are standard in forensic, pharmaceutical and food-analysis laboratories.",
  },
  {
    heading: "The Rf value — what it means",
    body: "The retention factor, Rf, measures how far a substance travelled relative to the solvent and is defined as Rf = (distance moved by the substance) ÷ (distance moved by the solvent front). Because the solvent front is the reference, the Rf of a given substance is roughly constant under fixed conditions (same paper/plate, same solvent, same temperature). An Rf value of 0 means the spot did not move, and a value of 1 means it travelled as far as the solvent front. Rf is dimensionless (it has no unit) since it is a ratio of two distances. It is the key quantitative result you calculate from a chromatogram.",
  },
  {
    heading: "How to calculate and use Rf",
    body: "To find Rf, measure from the original spot line to the centre of the substance spot, and separately from the line to the solvent front, then divide the first by the second. For example, if a dye spot moved 4.0 cm and the solvent front moved 8.0 cm, Rf = 4.0 ÷ 8.0 = 0.50. You compare the measured Rf against the Rf of known standard substances run on the same plate under the same conditions to identify unknowns. A match in Rf is strong evidence (though not proof) that two spots are the same substance. Running standards alongside the sample on one plate removes errors from changing conditions.",
  },
  {
    heading: "A standard chromatography procedure",
    body: "Draw a pencil line near the bottom of the paper or plate (pencil, because ink would dissolve and run), and place tiny, concentrated spots of the mixture and any standards along it, keeping them small so they do not overlap. Stand the sheet in a covered tank with a shallow solvent layer below the spots, and let the solvent climb until near the top, then remove and immediately mark the solvent front in pencil before it evaporates. Dry the sheet, locate any colourless spots (by UV light or a locating reagent), and measure distances to compute Rf values. Covering the tank saturates the air with solvent vapour so the mobile phase does not evaporate from the paper too early. Precision in spotting and measuring is what makes the Rf values reproducible.",
  },
  {
    heading: "Real uses of chromatography",
    body: "Chromatography is used to separate the green and yellow pigments of a leaf, to split the several dyes hidden in a single black or brown ink, and to isolate and identify amino acids and sugars. In forensics it helps detect drugs and poisons in blood or urine, and in medicine it assays the purity of pharmaceuticals. Food scientists use it to check for banned colourings, and biologists use it to study plant and animal metabolites. Because it works on microscopic quantities, it is often the only way to analyse trace components. Its range from a school filter-paper strip to a hospital GC machine shows how one principle scales.",
  },
  {
    heading: "Factors that affect the separation",
    body: "The quality of a separation depends mainly on the solvent (mobile phase) chosen and the stationary phase used. A more polar solvent generally carries polar substances further, so changing the solvent mixture changes every Rf value and can turn an unseparated blur into clear spots. The stationary phase matters too: silica and alumina are polar and hold polar compounds back, while a non-polar coating lets them move. Temperature, the size of the applied spot, and how saturated the tank atmosphere is with solvent all shift the results. Mastering these variables is how a chromatographer tunes a method to separate a stubborn mixture.",
  },
  {
    heading: "Identifying unknowns by comparison",
    body: "The practical power of chromatography is identification: if an unknown spot has the same Rf as a known standard AND the same colour or staining behaviour when both are run side by side under identical conditions, they are very likely the same substance. Running the unknown and the standard on the SAME sheet removes doubt about changing conditions, since both experienced the same solvent and temperature. For stronger proof, a second run with a different solvent can be used to confirm the match. This compare-and-confirm approach is exactly how adulterated foods, counterfeit drugs and forensic samples are screened. The method turns a simple coloured streak into a reliable analytical test.",
  },
];
