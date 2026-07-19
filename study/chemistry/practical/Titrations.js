export default [
  {
    heading: "What a titration is and why it is used",
    body: "A titration is a quantitative laboratory method for finding the concentration of one solution by reacting it, a little at a time, with a solution of known concentration. The solution of known concentration (the standard solution) is the titrant; it is delivered from a burette into a fixed, measured volume of the unknown (the analyte) in a conical flask. The moment the reaction is exactly complete is the equivalence point, which the experimenter observes as a colour change called the endpoint. Because the volumes and one concentration are known, titration lets you calculate unknown concentrations, molar masses, percentage purity and even waters of crystallization.",
  },
  {
    heading: "The apparatus and how to use it",
    body: "A typical acid–base titration uses a burette (a long graduated tube with a tap, readable to 0.05 cm³) for the titrant, a pipette (usually 20.0 or 25.0 cm³) to deliver an exact volume of analyte, and a conical flask to hold the mixture. A white tile is placed under the flask so the colour change is easy to see, and a funnel sits in the burette top only while filling. The conical flask is swirled continuously to mix the reactants thoroughly. Using the right tool for each job matters: a pipette gives a precise fixed volume, while the burette measures the variable volume added.",
  },
  {
    heading: "Preparing and using a standard solution",
    body: "A standard solution has a concentration known exactly, prepared by weighing a pure solute accurately and dissolving it in a volumetric flask to a precise final volume. For a titration you make a standard solution of either the acid or the base, then use it to find the other. The mass must be weighed to the nearest 0.01 g and the solution made up exactly to the mark, with the meniscus read at eye level. Any error in the standard solution propagates straight into every result you calculate from it, so this step demands the greatest care.",
  },
  {
    heading: "Indicators and how they work",
    body: "An indicator is a weak organic acid or base (an organic dye) that has one colour in acidic solution and a different colour in alkaline solution. It works because the acid form (HIn) and its conjugate base form (In⁻) are differently coloured, and the observed colour depends on their relative amounts — which in turn depends on the pH. Near the equivalence point the pH changes very rapidly, so a tiny extra drop of titrant flips the indicator from one form to the other and produces a sharp colour change. The choice of indicator therefore depends on the pH at which the equivalence point occurs.",
  },
  {
    heading: "Choosing the right indicator",
    body: "Methyl orange changes over about pH 3.1–4.4 (red in acid, yellow in alkali) and suits a strong acid titrated against a weak base. Phenolphthalein changes over about pH 8.2–10.0 (colourless in acid, pink in alkali) and is ideal for a strong acid–strong base titration and for a weak acid–strong base titration. For a strong acid–strong base pair either indicator works because the pH jump at equivalence spans both ranges. Using the wrong indicator — for example methyl orange for a weak acid–strong base titration — makes the endpoint arrive far from the true equivalence point and ruins the result.",
  },
  {
    heading: "The titration procedure step by step",
    body: "First rinse the pipette with the analyte solution (not water) and the burette with the titrant, then fill the burette and expel air from its tip. Pipette a fixed volume of analyte into the conical flask, add two or three drops of the chosen indicator, and record the initial burette reading. Add titrant slowly with swirling, slowing to drop-by-drop near the endpoint, and record the final reading; the difference is one titre. Repeat until you obtain at least two concordant titres (readings within 0.10 cm³ of each other) and average only those for the calculation.",
  },
  {
    heading: "Reading the burette and avoiding parallax",
    body: "A burette is read from the top down, so the volume delivered equals the final reading minus the initial reading. Always read the bottom of the meniscus at eye level; looking from above or below (parallax error) shifts every reading by a fraction of a division. Take readings to the nearest 0.05 cm³ — estimate the second decimal place between the marked graduations. A 'rough' first titration simply finds the approximate endpoint quickly, after which you should run subsequent titrations more slowly for an accurate titre.",
  },
  {
    heading: "The core titration calculation",
    body: "The link between the two solutions is the balanced equation, which gives the mole ratio in which they react. From the standard side you compute moles = concentration × volume, converting the volume from cm³ to dm³ by dividing by 1000. Using the mole ratio you find the moles of the unknown, then its concentration = moles ÷ volume. Write the equation first, every time — the ratio (1:1, 1:2, 2:1 and so on) is what connects the two solutions, and getting it wrong is the commonest calculation error.",
  },
  {
    heading: "Worked example — finding an unknown concentration",
    body: "Suppose 25.0 cm³ of 0.100 mol dm⁻³ NaOH is neutralised by an average of 22.50 cm³ of HCl of unknown concentration, and the equation is NaOH + HCl → NaCl + H₂O (ratio 1:1). Moles of NaOH = 0.100 × 0.0250 = 0.00250 mol, so moles of HCl = 0.00250 mol also. The HCl concentration = 0.00250 ÷ (22.50/1000) = 0.111 mol dm⁻³. Notice the volume is converted to dm³ before multiplying, and the 1:1 ratio means the mole counts are equal.",
  },
  {
    heading: "Purity and water-of-crystallisation calculations",
    body: "Titration can find the percentage purity of an impure acid or base: titrate a weighed sample, work out the moles of pure substance that reacted, convert to mass, and divide by the original mass × 100. For a hydrated salt such as Na₂CO₃·xH₂O, titrate to find the moles of anhydrous salt present in a known mass; the difference between that and the total mass gives the water, from which x is found by a mole ratio. These calculations simply extend the basic c × V → moles approach with an extra mass step, and they are favourite exam questions because they test titration skill and stoichiometry together.",
  },
  {
    heading: "Back titrations",
    body: "A back titration is used when the sample does not dissolve readily or the reaction with the titrant is too slow for a direct titration. You add a known, excess amount of a standard reagent that reacts with the sample, then titrate the leftover excess with a second standard solution. Subtracting the excess from the amount added tells you how much reacted with the sample, and from that you find the sample's content. This indirect method is essential for solids like chalk (CaCO₃) or antacid tablets that would otherwise be impossible to titrate directly.",
  },
  {
    heading: "Redox titrations",
    body: "Not all titrations are acid–base; redox titrations follow the same volume-by-volume principle but the reaction transfers electrons. Common exam papers systems are acidified MnO₄⁻ against Fe²⁺ (the purple permanganate decolourises until the endpoint, where a faint pink persists), acidified MnO₄⁻ against C₂O₄²⁻ (oxalate), and iodine against thiosulfate S₂O₃²⁻ (the blue starch–iodine colour disappears). No indicator is needed for permanganate because it is self-indicating. As with acid–base titrations, concordant titres and the balanced half-equations provide the mole ratio for the calculation.",
  },
];
