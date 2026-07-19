export default [
  {
    heading: "Peak value",
    body: "The peak (maximum or amplitude) value of an a.c. quantity is the largest magnitude reached during a cycle — the height of the sine wave from the centre line to a crest. It occurs twice per cycle, once positive and once negative. Because the quantity is zero or small for most of the cycle, the peak is not representative of the 'typical' size. Peak values are used for rating insulation and the voltage-withstand of components.",
  },
  {
    heading: "What r.m.s. means",
    body: "The root-mean-square (r.m.s.) value is defined so that an a.c. quantity delivers the same heating (power) in a resistor as an equal d.c. value would. You square the waveform, take its mean over a cycle, then take the square root — hence 'root of the mean of the square'. For a sine wave this gives V_rms = V₀/√2 ≈ 0.707 V₀, and identically I_rms = I₀/√2. It represents the useful, power-equivalent strength of the a.c.",
  },
  {
    heading: "Why heating depends on the square",
    body: "For a resistor, instantaneous power is p = i²R, so average power depends on the mean of i². For i = I₀ sin(ωt), the mean of sin² over a cycle is ½, so ⟨i²⟩ = I₀²/2 and the r.m.s. current is √(I₀²/2) = I₀/√2. Heating is governed by the square, never by the (zero) average of the wave itself. This is precisely why r.m.s., not average, is the meaningful measure for power.",
  },
  {
    heading: "Mains is always quoted in r.m.s.",
    body: "Mains electricity is always quoted in r.m.s.: Nigerian and most international supplies are about 230–240 V r.m.s. at 50 Hz. The corresponding peak is V₀ = V_rms × √2 ≈ 240 × 1.414 ≈ 339 V. Appliances, fuses and circuit breakers are rated using r.m.s. values because they are sized by heating and power, not by the transient peak. Quoting peak instead would overestimate the effective voltage by about 41%.",
  },
  {
    heading: "Peak vs r.m.s. — why the distinction matters",
    body: "Confusing peak with r.m.s. causes serious errors: treating the 339 V peak as the working voltage overstates heating and power by a factor of two; treating 240 V as the peak understates it. Fuse ratings, power calculations and insulation design all assume r.m.s. unless stated otherwise. Always check whether a stated voltage is 'peak' or 'r.m.s.' before calculating — exam questions sometimes give one and ask for the other.",
  },
  {
    heading: "How instruments read a.c.",
    body: "A moving-iron or hot-wire a.c. meter reads r.m.s. directly regardless of waveform shape, because the hot-wire responds to i² heating. An oscilloscope shows the actual waveform, so it measures the peak directly; you then convert with the 1/√2 factor to obtain r.m.s. A d.c. meter cannot be used directly on a.c. Without the r.m.s. concept, comparing an a.c. supply with a d.c. supply of 'equal strength' would be impossible.",
  },
  {
    heading: "R.m.s. depends only on amplitude",
    body: "The r.m.s. value depends only on the wave's amplitude, not on its phase or frequency (for a given waveform shape). Two sine waves of the same peak but different frequencies have the same V_rms; two of the same peak but shifted in phase also share V_rms. This makes r.m.s. a stable, comparable quantity across circuits. Only the waveform shape changes the factor (½ for sine, different for square or triangle waves).",
  },
  {
    heading: "Worked example — peak to r.m.s. and back",
    body: "An a.c. supply has a peak voltage of 311 V. Its r.m.s. value is V_rms = 311/√2 ≈ 311/1.414 ≈ 220 V — the standard mains value. Conversely, for 240 V r.m.s. mains the peak is V₀ = 240√2 ≈ 339 V. If the peak current is 14.1 A then I_rms = 14.1/√2 ≈ 10.0 A, and the heating power in a resistor is I_rms²R (for example 100R watts). These conversions are routine in every a.c. calculation.",
  },
];
