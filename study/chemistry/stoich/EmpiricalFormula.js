export default [
  {
    heading: "Simplest ratio versus true formula",
    body: "The empirical formula is the simplest whole-number ratio of the atoms of each element in a compound. The molecular formula is the actual number of atoms present. They may be the same (e.g. H₂O) or the molecular formula may be a whole-number multiple of the empirical one (glucose: empirical CH₂O, molecular C₆H₁₂O₆). Always state which one you have calculated, because exam questions often ask for one specifically and they are not always identical.",
  },
  {
    heading: "From percentage composition",
    body: "To find the empirical formula from percentages, assume you have 100 g of the compound, so each percentage becomes a mass in grams. Divide each mass by that element's Ar to get moles, then divide all the mole values by the smallest to reach a simple whole-number ratio. Worked example: a compound is 40% C, 6.7% H, 53.3% O. Moles: C = 40/12 = 3.33, H = 6.7/1 = 6.7, O = 53.3/16 = 3.33. Divide by 3.33 → 1 : 2 : 1, giving CH₂O.",
  },
  {
    heading: "From given masses of elements",
    body: "When you are given the actual masses of elements in a sample, use the masses directly instead of assuming 100 g. Divide each mass by its Ar to get moles, then divide by the smallest mole value. Worked example: 3.0 g of carbon reacts with 0.50 g of hydrogen. Moles: C = 3.0/12 = 0.25, H = 0.50/1 = 0.50. Ratio 0.25 : 0.50 = 1 : 2, so the empirical formula is CH₂. This method is identical in spirit to the percentage method.",
  },
  {
    heading: "From combustion data",
    body: "For a compound containing C, H and maybe O, burn a known mass and measure the CO₂ and H₂O produced. All the carbon becomes CO₂, so moles of C = mass of CO₂ ÷ 44. All the hydrogen becomes H₂O, so moles of H = 2 × (mass of H₂O ÷ 18). Find oxygen by difference: mass of O = original mass − (mass of C + mass of H). Worked example: 0.80 g of a hydrocarbon gives 2.64 g CO₂ and 1.08 g H₂O → C = 2.64/44 = 0.06 mol, H = 2 × 1.08/18 = 0.12 mol → ratio 1 : 2 → CH₂.",
  },
  {
    heading: "Metal oxide from metal and oxygen",
    body: "A common practical type measures the mass of a metal before and after heating in air, where the gain in mass is the oxygen that combined. Divide each by its Ar and find the simplest ratio. Worked example: 2.4 g of magnesium forms 4.0 g of magnesium oxide, so oxygen = 1.6 g. Moles: Mg = 2.4/24 = 0.10, O = 1.6/16 = 0.10 → ratio 1 : 1 → MgO. The mass gain is a direct measure of the combined oxygen, so no separate oxygen sample is needed.",
  },
  {
    heading: "Rounding ratios carefully",
    body: "Only round a ratio to whole numbers after dividing by the smallest value, and watch for values close to halves or doubles. A ratio like 1 : 1.99 : 1 is really 1 : 2 : 1, not 1 : 1 : 1 — the 1.99 is just rounding error. If you get a 0.5, multiply the whole ratio by 2 (e.g. 1 : 0.5 : 1 becomes 2 : 1 : 2); a 0.33 or 0.67 means multiply by 3. Never round 1.5 down to 1 or you will get the wrong formula.",
  },
  {
    heading: "Getting the molecular formula",
    body: "Once you have the empirical formula, find its formula mass and divide the compound's molar mass (Mr) by it; the result is the multiplying factor. Multiply every subscript in the empirical formula by that factor. Worked example: empirical formula CH₂O has mass 12 + 2 + 16 = 30; if the Mr of the compound is 180, the factor is 180 ÷ 30 = 6, giving the molecular formula C₆H₁₂O₆. Without the Mr you can only ever report the empirical formula.",
  },
  {
    heading: "Hydrated salts and water of crystallisation",
    body: "Many salts form crystals that trap water molecules, written as CuSO₄·xH₂O. Heating drives off the water of crystallisation, and the mass lost is the mass of water. Find moles of anhydrous salt and moles of water, then their ratio gives x. Worked example: 2.50 g of CuSO₄·xH₂O leaves 1.60 g of CuSO₄ on heating, so water lost = 0.90 g. Moles: CuSO₄ = 1.60/159.5 = 0.0100, H₂O = 0.90/18 = 0.050 → ratio 1 : 5 → CuSO₄·5H₂O. The blue colour of hydrated copper(II) sulphate turning white on heating is the classic demonstration.",
  },
  {
    heading: "Worked example — full molecular formula",
    body: "A compound is 85.7% C and 14.3% H by mass, with Mr = 84. Assume 100 g: C = 85.7/12 = 7.14 mol, H = 14.3/1 = 14.3 mol. Ratio 7.14 : 14.3 = 1 : 2 → empirical formula CH₂ (mass 14). Factor = 84 ÷ 14 = 6 → molecular formula C₆H₁₂. Check: 6 × 12 + 12 × 1 = 84, which matches Mr. Always finish by checking that the molecular formula's mass equals the given Mr, and that its percentages match the originals.",
  },
  {
    heading: "Common mistakes to avoid",
    body: "Three errors recur in formula questions. First, forgetting to convert percentages or masses to moles before finding the ratio — you must compare mole amounts, not gram amounts. Second, rounding too early or rounding a 0.5 to 1 instead of doubling the ratio. Third, reporting only the empirical formula when the question gives an Mr and expects the molecular formula. Read the question, do the mole step, round correctly, then apply the Mr if it is given.",
  },
];
