export default [
  {
    heading: "Studying strings with the sonometer",
    body: "A sonometer is a laboratory instrument for investigating how a stretched string vibrates. It is a hollow wooden box with a wire stretched over it; the wire passes over a movable bridge (setting its vibrating length L), over a pulley, and is pulled taut by hanging weights (setting the tension T). Its mass per unit length μ is fixed by the choice of wire. Plucking it shows how f depends on L, T and μ.",
  },
  {
    heading: "The fundamental frequency formula",
    body: "For a string fixed at both ends, the lowest (fundamental) frequency is f₀ = (1 / 2L) √(T / μ), where L is the vibrating length, T the tension and μ the mass per unit length (linear density). This single formula captures the whole behaviour of a taut string and is the starting point for every numerical problem on string vibration in the syllabus.",
  },
  {
    heading: "Inverse dependence on length",
    body: "From the formula, frequency is inversely proportional to length: halving L doubles the frequency (raises the pitch by one octave). This is why pressing a guitar string down at the middle produces a note an octave above the open string. Longer strings vibrate more slowly and sound lower; shorter strings vibrate faster and sound higher.",
  },
  {
    heading: "Dependence on the square root of tension",
    body: "Frequency is proportional to √T, so increasing the tension raises the pitch, but only as the square root. To double the frequency you must quadruple the tension. Piano and violin players exploit this: turning a tuning peg increases T and sharpens the note, while a looser string sounds flat. The square-root law means large tension changes are needed for big pitch shifts.",
  },
  {
    heading: "Dependence on linear density",
    body: "Frequency is inversely proportional to √μ, the mass per unit length. A thicker or denser wire (larger μ) vibrates more slowly and sounds lower; a thinner wire sounds higher. This is why bass strings on a piano and guitar are wound with heavy wire (large μ) while treble strings are thin. For the same length and tension, μ alone decides the pitch.",
  },
  {
    heading: "Harmonics and overtones on a string",
    body: "A string fixed at both ends can vibrate not only in its fundamental mode (half a wavelength fits in L) but also in higher modes where n half-wavelengths fit: fₙ = n (1/2L) √(T/μ), with n = 1, 2, 3, … These higher modes are the harmonics (n = 2 is the first overtone, an octave up; n = 3 is a twelfth up). The mix of these overtones gives the string its quality.",
  },
  {
    heading: "Worked example — fundamental frequency",
    body: "A sonometer wire has L = 0.50 m, tension T = 100 N and mass per unit length μ = 0.01 kg/m. Then f₀ = (1 / 2×0.50) √(100 / 0.01) = (1/1.0) √10000 = 100 Hz. So the string's fundamental note is 100 Hz. Changing L to 0.25 m would double this to 200 Hz, illustrating the inverse-length rule directly.",
  },
  {
    heading: "Worked example — changing the tension",
    body: "To raise the 100 Hz string of the previous example to 200 Hz, the frequency must double, so √(T/μ) must double and T must increase fourfold to 400 N. Equivalently, keeping T = 100 N and halving L to 0.25 m also doubles f. Both routes show the formula's predictions: pitch is controlled independently by length (via 1/L) and by tension (via √T).",
  },
  {
    heading: "Tuning and playing stringed instruments",
    body: "Guitar, violin, harp and piano all rely on these laws. Players shorten the vibrating length by pressing strings against frets or the fingerboard to play different notes, tighten pegs to tune tension, and use strings of different μ for different pitch ranges. A piano combines all three: fixed lengths, carefully set tensions, and wires of graded thickness across the keyboard.",
  },
  {
    heading: "Resonance boxes amplify the sound",
    body: "A sonometer's wooden box is itself a resonance box: the vibrating string drives the box, which has a natural frequency near that of the string and radiates sound much more efficiently than the thin wire alone. The same idea sits inside violins and guitars, where the body couples string energy to the air. Forced vibration of the box by the string is a direct demonstration of resonance in instruments.",
  },
];
