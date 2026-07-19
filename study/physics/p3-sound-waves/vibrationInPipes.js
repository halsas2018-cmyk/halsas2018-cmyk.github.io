export default [
  {
    heading: "Air columns resonate in pipes",
    body: "Just as a string resonates, a column of air in a pipe can resonate at certain frequencies. A tuning fork or reed sets the air shaking, and when the pipe length suits the wavelength the air column resonates loudly. This is the physics behind every wind instrument. The pattern of vibration depends on whether the pipe is closed at one end or open at both, because the ends impose different boundary conditions.",
  },
  {
    heading: "Nodes and antinodes at the ends",
    body: "At a closed end the air cannot move, so there is a displacement node (and a pressure antinode); at an open end the air moves freely, giving a displacement antinode. These boundary conditions decide which wavelengths fit. A pipe's resonant wavelengths are simply those that place the right node or antinode pattern at its ends, and from λ the frequency follows from v = fλ.",
  },
  {
    heading: "Closed pipe fundamental: λ = 4L",
    body: "In a pipe closed at one end and open at the other, the fundamental mode has a node at the closed end and an antinode at the open end, so only a quarter of a wavelength fits in the length: L = λ/4, giving λ = 4L and f₁ = v / 4L. The closed end pins a node, which is why the wavelength is four times the length rather than twice.",
  },
  {
    heading: "Closed pipe has only odd harmonics",
    body: "Because one end is always a node and the other always an antinode, a closed pipe can only support odd multiples of the fundamental: fₙ = n·v/4L with n = 1, 3, 5, … There is no second harmonic — the first overtone is the third harmonic (three times the fundamental), then the fifth, and so on. This missing-even-harmonics pattern gives closed pipes a hollow, 'odd' timbre.",
  },
  {
    heading: "Open pipe fundamental: λ = 2L",
    body: "An open pipe has antinodes at both ends, so the fundamental fits half a wavelength: L = λ/2, giving λ = 2L and f₁ = v / 2L. Compared with a closed pipe of the same length, an open pipe's fundamental is twice as high in frequency (one octave higher), because it fits twice the wave into the same length.",
  },
  {
    heading: "Open pipe has all harmonics",
    body: "With antinodes at both ends an open pipe supports every harmonic: fₙ = n·v/2L for n = 1, 2, 3, … Both even and odd multiples are present, so a richer set of overtones gives the bright, full tone of instruments like the flute and organ flute stops. The all-harmonics series is the same pattern a string shows, just realised in an air column.",
  },
  {
    heading: "End correction",
    body: "The antinode at an open end actually lies just outside the pipe, because the air beyond the mouth also vibrates. The effective length is therefore slightly longer than the measured length: L_eff = L + e for a closed pipe (one open end) and L_eff = L + 2e for an open pipe (two open ends), where e is the end correction (roughly 0.6 × the pipe radius). It must be allowed for in accurate speed-of-sound work.",
  },
  {
    heading: "Measuring v with a resonance tube",
    body: "A resonance tube is a vertical tube of water whose air-column length is varied by raising the water. A tuning fork of known frequency f is struck above the mouth; as the length is changed the air resonates loudly at certain positions. Using the closed-pipe relation with end correction, v = 4f(L + e) at the first resonance (or from two resonances, v = 2fΔL, avoiding e). This is a standard laboratory measurement of sound speed.",
  },
  {
    heading: "Worked example — closed pipe note",
    body: "A closed pipe 0.30 m long contains air at 340 m/s. Ignoring end correction, its fundamental wavelength is λ = 4L = 1.20 m, so f₁ = v/λ = 340 / 1.20 ≈ 283 Hz. Its next allowed mode is the third harmonic, f₃ = 3f₁ ≈ 850 Hz; the second harmonic does not exist for a closed pipe. This shows how the odd-harmonic rule shapes the note.",
  },
  {
    heading: "Wind instruments as resonating columns",
    body: "Organ pipes, flutes, clarinets, trumpets, horns and saxophones are all driven resonating air columns. A flute is essentially an open pipe (all harmonics, bright tone); a clarinet behaves like a closed pipe (odd harmonics, darker tone) because it is effectively closed by the reed at one end. The player changes the effective length with holes or valves to play different notes across the harmonic series.",
  },
];
