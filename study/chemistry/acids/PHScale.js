export default [
  {
    heading: "What pH actually measures",
    body: "pH is a compact way of writing the hydrogen-ion concentration of a solution. It is defined as pH = −log₁₀[H₃O⁺], where [H₃O⁺] is the molar concentration of hydroxonium ions in mol/dm³. A solution with [H₃O⁺] = 1.0 × 10⁻³ mol/dm³ therefore has pH = 3. Because it is a logarithm, the pH scale compresses an enormous range of concentrations into manageable numbers. Crucially, a LOW pH means a HIGH [H₃O⁺] — acidity increases as pH falls.",
  },
  {
    heading: "The pH scale from 0 to 14",
    body: "At 25 °C the pH scale runs roughly 0–14. A solution with pH < 7 is acidic, pH = 7 is neutral (pure water), and pH > 7 is alkaline (basic). Strong laboratory acids can have pH near 0 or even negative for very concentrated solutions, while strong alkalis can exceed pH 14. The scale is a continuum, not a fixed set of buckets — pH 6.5 is weakly acidic and pH 7.5 only weakly alkaline.",
  },
  {
    heading: "Each step is a tenfold change",
    body: "Because pH is logarithmic, every whole-number step means a tenfold change in [H₃O⁺]. For instance pH 3 has ten times the H₃O⁺ concentration of pH 4, and one hundred times that of pH 5. The same applies to alkalinity via [OH⁻]. This is why a 'small' drop from pH 7 to pH 6 represents the solution becoming ten times more acidic — seemingly tiny pH shifts can be chemically and biologically dramatic.",
  },
  {
    heading: "Linking pH to [H⁺] and [OH⁻]",
    body: "In water at 25 °C the ionic product Kw = [H₃O⁺][OH⁻] = 1.0 × 10⁻¹⁴. So if pH = 3 then [H₃O⁺] = 10⁻³ and [OH⁻] = 10⁻¹¹. The complementary pOH = −log[OH⁻], and pH + pOH = 14. A neutral solution has [H₃O⁺] = [OH⁻] = 10⁻⁷; in an acid [H₃O⁺] > [OH⁻], and in an alkali [OH⁻] > [H₃O⁺]. These relationships let you convert between any two of: pH, pOH, [H⁺], [OH⁻].",
  },
  {
    heading: "Measuring pH — instruments and methods",
    body: "Several methods exist. A pH meter gives a direct numerical reading using a glass electrode and is the most accurate. Universal indicator paper or solution produces a colour that you match to a chart, giving an approximate pH. Colorimetric methods compare a solution's colour against standards. Litmus only tells you 'acid' or 'alkali' and gives no number, so it is useless for measuring pH — reserve it for quick classification only.",
  },
  {
    heading: "Acid–base indicators and their ranges",
    body: "Indicators are weak organic acids or bases whose colour depends on pH. Methyl orange is red below pH ≈ 3.1 and yellow above ≈ 4.4 (useful for strong-acid/weak-base titrations), while phenolphthalein is colourless below pH ≈ 8.2 and pink above ≈ 10 (useful for strong-base titrations). The chosen indicator must change colour within the steep part of the titration curve. Universal indicator is a mixture that spans the whole scale with a spectrum of colours.",
  },
  {
    heading: "Why strong and weak acids show different pH",
    body: "For the SAME concentration, a strong acid has a lower pH than a weak acid because it ionises more fully. A 0.1 mol/dm³ solution of HCl (strong) gives [H₃O⁺] ≈ 0.1, so pH ≈ 1; a 0.1 mol/dm³ solution of CH₃COOH (weak) might give [H₃O⁺] ≈ 0.0013, so pH ≈ 2.9. Comparing measured pH at equal concentration is therefore a way to distinguish strong from weak acids experimentally.",
  },
  {
    heading: "Neutral is not always pH 7",
    body: "The statement 'neutral = pH 7' is only true at 25 °C. As temperature rises, the auto-ionisation of water increases, so Kw grows and the neutral pH falls slightly below 7 (e.g. about 6.1 at 100 °C) while the solution remains truly neutral because [H₃O⁺] still equals [OH⁻]. Neutrality is defined by [H₃O⁺] = [OH⁻], not by the number 7. In non-aqueous solvents the neutral point is different again.",
  },
  {
    heading: "pH in everyday life — soil, blood, urine",
    body: "pH governs countless natural processes. Most crops thrive in soil of pH 6–7.5; farmers add lime to raise acidic soil or sulphur to lower alkaline soil. Human blood is tightly buffered near pH 7.4 — even a shift to 7.0 or 7.8 is life-threatening. Urine pH varies with diet and health. Aquarium, swimming-pool and fermentation systems are all monitored by pH because organisms and reactions are exquisitely sensitive to it.",
  },
  {
    heading: "Acid rain and environmental pH",
    body: "Normal unpolluted rain is slightly acidic (pH ≈ 5.6) because dissolved CO₂ forms weak carbonic acid. Acid rain (pH below about 5.6) arises when sulfur and nitrogen oxides from burning fossil fuels form H₂SO₄ and HNO₃ in the atmosphere; it leaches nutrients from soil, acidifies lakes, and corrodes buildings and statues. Monitoring rainfall pH is a standard environmental indicator of industrial pollution.",
  },
  {
    heading: "Worked example — finding [H⁺] from pH",
    body: "Suppose a lemon-juice sample has pH = 2.4. Reversing the definition: [H₃O⁺] = 10^(−pH) = 10^(−2.4) ≈ 3.98 × 10⁻³ mol/dm³. Conversely, for a solution with [OH⁻] = 10⁻³ mol/dm³, pOH = 3 and pH = 14 − 3 = 11, so it is alkaline. Practise converting both ways — exam questions frequently ask for concentration from a given pH as well as pH from a given concentration.",
  },
];
