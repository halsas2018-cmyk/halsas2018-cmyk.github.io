export default [
  {
    heading: "The wave equation v = fλ",
    body: "The single most useful wave formula links speed, frequency and wavelength: v = f × λ, where v is speed in m/s, f frequency in Hz and λ wavelength in metres. It says the distance a wave covers in one second equals how many waves are made per second times how long each one is. The same relationship can be written as v = λ / T using the period. Memorise it, nearly every wave calculation uses it.",
  },
  {
    heading: "Where the equation comes from",
    body: "In one full period T the wave advances by exactly one wavelength λ, because one cycle is born each period. Speed is distance over time, so v = λ / T. Since frequency is the number of cycles per second, f = 1/T, substituting gives v = fλ. This derivation shows the formula is just 'speed = distance ÷ time' applied to one wave cycle. It also confirms the units work out.",
  },
  {
    heading: "What each symbol means",
    body: "In v = fλ, v is the wave speed in metres per second (m/s), f the frequency in hertz (Hz, or 1/s), and λ the wavelength in metres (m). The period T, in seconds, is the alternative to f via T = 1/f. All four quantities are linked, so knowing any two fixes the other two. Keeping the units consistent, especially λ in metres not centimetres, prevents the common calculation errors.",
  },
  {
    heading: "Frequency comes from the source, speed from the medium",
    body: "When a wave crosses from one medium into another, its speed v changes because the medium changed, but its frequency f stays fixed by the source. The wavelength λ must then adjust so that v = fλ still holds, which is why λ changes at a boundary. This is the physical basis of refraction: light slows in glass, so its wavelength shortens while its colour, the frequency, is unchanged.",
  },
  {
    heading: "Worked example 1 — find the speed",
    body: "A water wave has frequency 50 Hz and wavelength 2.0 m. Using v = fλ, the speed is v = 50 × 2.0 = 100 m/s. The wave therefore advances 100 metres every second. This is the straightest use of the formula: multiply the two given quantities and keep the unit m/s. Always state the unit with the answer.",
  },
  {
    heading: "Worked example 2 — find the wavelength",
    body: "A sound wave travels through air at 340 m/s and has frequency 170 Hz. Rearranging v = fλ gives λ = v / f = 340 / 170 = 2.0 m. So the distance between successive compressions in the air is 2 metres. Notice the frequency was unchanged by the medium; only the wavelength resulted. This is typical of sound in a room.",
  },
  {
    heading: "Worked example 3 — find the frequency",
    body: "Ripples move across a pond at 0.25 m/s and the distance between neighbouring crests is 5 cm. Convert the wavelength to metres: λ = 0.05 m. Then f = v / λ = 0.25 / 0.05 = 5 Hz, so five crests pass a point each second. Converting centimetres to metres first is the step students most often forget. The period would be T = 1/5 = 0.20 s.",
  },
  {
    heading: "The period form v = λ / T",
    body: "Because T = 1/f, the wave equation is equally valid as v = λ / T. This is handy when a question gives the period directly instead of frequency. For example, if λ = 3.0 m and T = 0.010 s, then v = 3.0 / 0.010 = 300 m/s, and the frequency is f = 1/T = 100 Hz. Both forms describe the same physics; pick the one matching your data.",
  },
  {
    heading: "Checking units keeps you honest",
    body: "The formula's units must balance: Hz × m = (1/s) × m = m/s, which is exactly the unit of speed, so v = fλ is dimensionally correct. If your calculation yields m/s from Hz and cm, you likely forgot to convert centimetres to metres. Dimensional checking is a quick way to catch mistakes before they become graded errors. Make unit conversion a reflex on every wave problem.",
  },
  {
    heading: "Worked example 4 — using the period form",
    body: "A wave has wavelength 3.0 m and period 0.010 s. Its speed is v = λ / T = 3.0 / 0.010 = 300 m/s. Its frequency is f = 1/T = 1 / 0.010 = 100 Hz, and checking with v = fλ gives 100 × 3.0 = 300 m/s, consistent. This double-check confirms the answer. Problems phrased in periods reward using the T form directly rather than converting first.",
  },
];
