// physics — Sound Waves
const questions = [
  {
    question: "Sound is produced by a body that is",
    options: [
      "A. at rest",
      "B. vibrating",
      "C. heated",
      "D. charged"
    ],
    answer: "B",
    explanation: "A sounding body vibrates, creating compressions and rarefactions in the surrounding medium.",
    subtopic: "Sources"
  },
  {
    question: "Which of the following can be a source of sound?",
    options: [
      "A. A stationary unmagnetised iron block",
      "B. A vibrating tuning fork",
      "C. A still pond",
      "D. A cold stone"
    ],
    answer: "B",
    explanation: "Only a vibrating object (e.g. a tuning fork) acts as a sound source.",
    subtopic: "Sources"
  },
  {
    question: "A loudspeaker produces sound by",
    options: [
      "A. rotating",
      "B. a diaphragm vibrating to and fro",
      "C. glowing",
      "D. heating air"
    ],
    answer: "B",
    explanation: "The cone oscillates rapidly, compressing and rarefying air to launch sound waves.",
    subtopic: "Sources"
  },
  {
    question: "The human voice is produced mainly by vibration of the",
    options: [
      "A. eardrum",
      "B. vocal cords",
      "C. teeth",
      "D. skull"
    ],
    answer: "B",
    explanation: "Air forced past the vibrating vocal cords produces the raw sound of the voice.",
    subtopic: "Sources"
  },
  {
    question: "Sound cannot travel through",
    options: [
      "A. air",
      "B. water",
      "C. a vacuum",
      "D. steel"
    ],
    answer: "C",
    explanation: "Sound is mechanical and needs a material medium; it cannot propagate through a vacuum.",
    subtopic: "Transmission"
  },
  {
    question: "Sound travels fastest in",
    options: [
      "A. a gas",
      "B. a liquid",
      "C. a solid",
      "D. a vacuum"
    ],
    answer: "C",
    explanation: "Particles in solids are close and stiff, so sound propagates fastest in solids.",
    subtopic: "Transmission"
  },
  {
    question: "Sound travels slowest in",
    options: [
      "A. a solid",
      "B. a liquid",
      "C. a gas",
      "D. a metal"
    ],
    answer: "C",
    explanation: "Gases are least dense/stiff, so the speed of sound is lowest in gases.",
    subtopic: "Transmission"
  },
  {
    question: "Sound waves in air are",
    options: [
      "A. transverse",
      "B. longitudinal",
      "C. electromagnetic",
      "D. stationary only"
    ],
    answer: "B",
    explanation: "In air, sound is a longitudinal wave of compressions and rarefactions.",
    subtopic: "Transmission"
  },
  {
    question: "The regions of high pressure in a sound wave are called",
    options: [
      "A. rarefactions",
      "B. compressions",
      "C. crests",
      "D. nodes"
    ],
    answer: "B",
    explanation: "Compressions are the high-pressure (density) parts of a longitudinal sound wave.",
    subtopic: "Transmission"
  },
  {
    question: "The regions of low pressure in a sound wave are called",
    options: [
      "A. compressions",
      "B. rarefactions",
      "C. crests",
      "D. antinodes"
    ],
    answer: "B",
    explanation: "Rarefactions are the low-pressure parts of a longitudinal sound wave.",
    subtopic: "Transmission"
  },
  {
    question: "The approximate speed of sound in air at room temperature is",
    options: [
      "A. 340 m/s",
      "B. 3 × 10⁸ m/s",
      "C. 1500 m/s",
      "D. 34 m/s"
    ],
    answer: "A",
    explanation: "In air near 20 °C, the speed of sound is about 340 m/s.",
    subtopic: "Speed of sound"
  },
  {
    question: "The speed of sound in water is about",
    options: [
      "A. 340 m/s",
      "B. 1500 m/s",
      "C. 3 × 10⁸ m/s",
      "D. 500 m/s"
    ],
    answer: "B",
    explanation: "Sound travels faster in water (~1500 m/s) than in air because water is denser/stiffer.",
    subtopic: "Speed of sound"
  },
  {
    question: "As the temperature of air rises, the speed of sound",
    options: [
      "A. decreases",
      "B. increases",
      "C. stays the same",
      "D. becomes zero"
    ],
    answer: "B",
    explanation: "Warmer air has faster-moving molecules, so the speed of sound increases with temperature.",
    subtopic: "Speed of sound"
  },
  {
    question: "If a thunder is heard 3 s after the flash is seen, the storm is about",
    options: [
      "A. 1020 m away",
      "B. 340 m away",
      "C. 3 m away",
      "D. 100 m away"
    ],
    answer: "A",
    explanation: "Light is near-instant; distance ≈ v×t = 340 × 3 = 1020 m.",
    subtopic: "Speed of sound"
  },
  {
    question: "The speed of sound is NOT affected by the",
    options: [
      "A. medium",
      "B. temperature of the medium",
      "C. loudness (amplitude)",
      "D. state of matter"
    ],
    answer: "C",
    explanation: "Speed depends on the medium and temperature, not on the sound's loudness or pitch.",
    subtopic: "Speed of sound"
  },
  {
    question: "An echo is produced by",
    options: [
      "A. refraction",
      "B. reflection of sound from a hard surface",
      "C. diffraction",
      "D. dispersion"
    ],
    answer: "B",
    explanation: "An echo is the reflection of sound from a distant hard surface back to the listener.",
    subtopic: "Echoes"
  },
  {
    question: "To hear a distinct echo, the reflecting surface must be at least about",
    options: [
      "A. 17 m away",
      "B. 1 m away",
      "C. 100 m away only",
      "D. 0.1 m away"
    ],
    answer: "A",
    explanation: "At 340 m/s, a surface ~17 m away gives the ~0.1 s delay the ear needs to separate echo from original.",
    subtopic: "Echoes"
  },
  {
    question: "Sonar uses echoes to measure",
    options: [
      "A. temperature",
      "B. distance to an object under water",
      "C. light intensity",
      "D. mass"
    ],
    answer: "B",
    explanation: "Sonar times the echo of ultrasound to find depth/distance (d = vt/2).",
    subtopic: "Echoes"
  },
  {
    question: "If a sound pulse travels to a wall and back in 0.2 s at 340 m/s, the wall is",
    options: [
      "A. 68 m away",
      "B. 34 m away",
      "C. 17 m away",
      "D. 340 m away"
    ],
    answer: "B",
    explanation: "Total distance = vt = 340×0.2 = 68 m; one-way distance = 68/2 = 34 m.",
    subtopic: "Echoes"
  },
  {
    question: "A repeated reflection of sound in an enclosure causing persistence of sound is called",
    options: [
      "A. an echo only",
      "B. reverberation",
      "C. diffraction",
      "D. resonance"
    ],
    answer: "B",
    explanation: "Reverberation is the multiple reflection of sound that makes it linger in a hall.",
    subtopic: "Echoes"
  },
  {
    question: "Noise is sound that is",
    options: [
      "A. pleasant and regular",
      "B. irregular and unpleasant",
      "C. a pure tone",
      "D. always silent"
    ],
    answer: "B",
    explanation: "Noise consists of irregular, non-periodic vibrations perceived as harsh or unpleasant.",
    subtopic: "Noise & music"
  },
  {
    question: "Music is sound that is",
    options: [
      "A. irregular",
      "B. regular, periodic and pleasant",
      "C. always loud",
      "D. always silent"
    ],
    answer: "B",
    explanation: "Musical notes come from periodic vibrations with a definite pitch, perceived as pleasant.",
    subtopic: "Noise & music"
  },
  {
    question: "A pure musical note is represented by a",
    options: [
      "A. random waveform",
      "B. regular sinusoidal waveform",
      "C. square only",
      "D. straight line"
    ],
    answer: "B",
    explanation: "A pure tone has a single frequency and a smooth sinusoidal (periodic) waveform.",
    subtopic: "Noise & music"
  },
  {
    question: "The loudness of a sound depends mainly on its",
    options: [
      "A. frequency",
      "B. amplitude",
      "C. speed",
      "D. wavelength"
    ],
    answer: "B",
    explanation: "Loudness is related to the wave's amplitude (and intensity); bigger amplitude = louder.",
    subtopic: "Characteristics"
  },
  {
    question: "The pitch of a sound depends mainly on its",
    options: [
      "A. amplitude",
      "B. frequency",
      "C. speed",
      "D. wavelength in air only"
    ],
    answer: "B",
    explanation: "Pitch is how high or low a note sounds; it is set by the frequency (higher f = higher pitch).",
    subtopic: "Characteristics"
  },
  {
    question: "The quality (timbre) of a note depends on its",
    options: [
      "A. amplitude only",
      "B. waveform / number of overtones",
      "C. speed only",
      "D. medium only"
    ],
    answer: "B",
    explanation: "Timbre is set by the waveform and the mix of harmonics, letting us tell instruments apart.",
    subtopic: "Characteristics"
  },
  {
    question: "The unit of loudness level is the",
    options: [
      "A. hertz",
      "B. decibel",
      "C. metre",
      "D. watt"
    ],
    answer: "B",
    explanation: "Sound level is measured in decibels (dB), a logarithmic scale of intensity.",
    subtopic: "Characteristics"
  },
  {
    question: "The unit of pitch/frequency is the",
    options: [
      "A. decibel",
      "B. hertz",
      "C. metre",
      "D. newton"
    ],
    answer: "B",
    explanation: "Frequency (and thus pitch) is measured in hertz (Hz), cycles per second.",
    subtopic: "Characteristics"
  },
  {
    question: "A high-pitched sound has a",
    options: [
      "A. low frequency",
      "B. high frequency",
      "C. low amplitude",
      "D. long wavelength"
    ],
    answer: "B",
    explanation: "Higher pitch corresponds to higher frequency (and shorter wavelength).",
    subtopic: "Characteristics"
  },
  {
    question: "For a stretched string, the fundamental frequency is proportional to",
    options: [
      "A. the square root of tension",
      "B. the length only",
      "C. the amplitude",
      "D. the colour"
    ],
    answer: "A",
    explanation: "f ∝ √(T/μ)/L, so fundamental frequency rises with the square root of tension T.",
    subtopic: "Vibration in strings"
  },
  {
    question: "For a stretched string, increasing its length lowers the frequency because",
    options: [
      "A. f is inversely proportional to L",
      "B. f is proportional to L",
      "C. amplitude drops",
      "D. speed rises"
    ],
    answer: "A",
    explanation: "f = (1/2L)√(T/μ); doubling L halves the fundamental frequency.",
    subtopic: "Vibration in strings"
  },
  {
    question: "The fundamental frequency of a string fixed at both ends has a wavelength equal to",
    options: [
      "A. L",
      "B. 2L",
      "C. L/2",
      "D. 4L"
    ],
    answer: "B",
    explanation: "The first harmonic fits half a wavelength on the string, so λ = 2L.",
    subtopic: "Vibration in strings"
  },
  {
    question: "The second harmonic of a string fixed at both ends has wavelength",
    options: [
      "A. 2L",
      "B. L",
      "C. L/2",
      "D. 4L"
    ],
    answer: "B",
    explanation: "The second harmonic has a full wavelength along the string, so λ = L (frequency 2f₁).",
    subtopic: "Vibration in strings"
  },
  {
    question: "A string vibrating in three segments is producing its",
    options: [
      "A. fundamental",
      "B. second overtone (third harmonic)",
      "C. first harmonic",
      "D. sub-harmonic"
    ],
    answer: "B",
    explanation: "Three segments = third harmonic = second overtone, with frequency 3f₁.",
    subtopic: "Vibration in strings"
  },
  {
    question: "Pressing a guitar string at a fret shortens the vibrating length, which",
    options: [
      "A. lowers the pitch",
      "B. raises the pitch",
      "C. makes it silent",
      "D. changes only the loudness"
    ],
    answer: "B",
    explanation: "Shorter L means higher f (f ∝ 1/L), so the note sounds higher.",
    subtopic: "Vibration in strings"
  },
  {
    question: "Tightening a string (increasing tension) makes it produce a",
    options: [
      "A. lower note",
      "B. higher note",
      "C. silent note",
      "D. same note, only louder"
    ],
    answer: "B",
    explanation: "Higher tension raises f (f ∝ √T), so the pitch goes up.",
    subtopic: "Vibration in strings"
  },
  {
    question: "Resonance occurs when a system is driven at its",
    options: [
      "A. lowest frequency",
      "B. natural frequency",
      "C. highest amplitude only",
      "D. zero frequency"
    ],
    answer: "B",
    explanation: "Resonance is the large-amplitude response when the driving frequency matches the natural frequency.",
    subtopic: "Resonance"
  },
  {
    question: "A soldier marching in step across a bridge can be dangerous because of",
    options: [
      "A. friction",
      "B. resonance",
      "C. echo",
      "D. diffraction"
    ],
    answer: "B",
    explanation: "Rhythmic marching can match the bridge's natural frequency and build up a destructive resonant oscillation.",
    subtopic: "Resonance"
  },
  {
    question: "A tuning fork forced to vibrate by a nearby fork of the same frequency shows",
    options: [
      "A. echo",
      "B. resonance",
      "C. dispersion",
      "D. diffraction"
    ],
    answer: "B",
    explanation: "The second fork resonates because the driving frequency equals its natural frequency.",
    subtopic: "Resonance"
  },
  {
    question: "The natural frequency of an air column depends on its",
    options: [
      "A. colour",
      "B. length and whether ends are open or closed",
      "C. amplitude",
      "D. temperature of the room only"
    ],
    answer: "B",
    explanation: "Pipe resonance frequencies are set by length and end conditions (open or closed).",
    subtopic: "Resonance"
  },
  {
    question: "For a pipe closed at one end, the fundamental has a wavelength",
    options: [
      "A. 2L",
      "B. 4L",
      "C. L",
      "D. L/2"
    ],
    answer: "B",
    explanation: "A closed pipe's fundamental fits a quarter wavelength, so λ = 4L.",
    subtopic: "Vibration in pipes"
  },
  {
    question: "For a pipe open at both ends, the fundamental has a wavelength",
    options: [
      "A. 4L",
      "B. 2L",
      "C. L",
      "D. L/4"
    ],
    answer: "B",
    explanation: "An open pipe's fundamental fits half a wavelength, so λ = 2L.",
    subtopic: "Vibration in pipes"
  },
  {
    question: "A closed pipe can only produce",
    options: [
      "A. all harmonics",
      "B. odd harmonics (1st, 3rd, 5th…)",
      "C. even harmonics only",
      "D. no harmonics"
    ],
    answer: "B",
    explanation: "A pipe closed at one end resonates only at odd harmonics (f, 3f, 5f…).",
    subtopic: "Vibration in pipes"
  },
  {
    question: "An open pipe produces",
    options: [
      "A. only odd harmonics",
      "B. all harmonics (1st, 2nd, 3rd…)",
      "C. no harmonics",
      "D. only the fundamental"
    ],
    answer: "B",
    explanation: "Both ends open allows all harmonics (f, 2f, 3f…) to resonate.",
    subtopic: "Vibration in pipes"
  },
  {
    question: "The fundamental frequency of a closed pipe of length L is",
    options: [
      "A. v/(2L)",
      "B. v/(4L)",
      "C. v/L",
      "D. 2v/L"
    ],
    answer: "B",
    explanation: "With λ = 4L, f₁ = v/λ = v/(4L).",
    subtopic: "Vibration in pipes"
  },
  {
    question: "The fundamental frequency of an open pipe of length L is",
    options: [
      "A. v/(4L)",
      "B. v/(2L)",
      "C. v/L",
      "D. 4v/L"
    ],
    answer: "B",
    explanation: "With λ = 2L, f₁ = v/(2L); an open pipe sounds an octave above an equal closed pipe.",
    subtopic: "Vibration in pipes"
  },
  {
    question: "A pipe of length 0.5 m, closed at one end, has fundamental frequency (v = 340 m/s)",
    options: [
      "A. 170 Hz",
      "B. 340 Hz",
      "C. 85 Hz",
      "D. 680 Hz"
    ],
    answer: "A",
    explanation: "f₁ = v/(4L) = 340/(4×0.5) = 340/2 = 170 Hz.",
    subtopic: "Vibration in pipes"
  },
  {
    question: "A pipe open at both ends, length 0.5 m, has fundamental frequency (v = 340 m/s)",
    options: [
      "A. 170 Hz",
      "B. 340 Hz",
      "C. 85 Hz",
      "D. 680 Hz"
    ],
    answer: "B",
    explanation: "f₁ = v/(2L) = 340/(2×0.5) = 340 Hz.",
    subtopic: "Vibration in pipes"
  },
  {
    question: "Wind instruments (flute, organ) work by setting up",
    options: [
      "A. standing waves in air columns",
      "B. standing waves in strings",
      "C. echoes only",
      "D. electromagnetic waves"
    ],
    answer: "A",
    explanation: "Blowing into a pipe excites resonant standing waves in the air column, producing notes.",
    subtopic: "Vibration in pipes"
  },
  {
    question: "A short pipe produces a note of",
    options: [
      "A. lower frequency",
      "B. higher frequency",
      "C. same frequency as a long pipe",
      "D. no frequency"
    ],
    answer: "B",
    explanation: "Shorter air column → shorter λ → higher resonant frequency (higher pitch).",
    subtopic: "Vibration in pipes"
  },
  {
    question: "The phenomenon where a singer breaks a glass by matching its natural frequency is",
    options: [
      "A. diffraction",
      "B. resonance",
      "C. refraction",
      "D. dispersion"
    ],
    answer: "B",
    explanation: "Matching the glass's natural frequency builds resonant vibrations large enough to shatter it.",
    subtopic: "Resonance"
  },
  {
    question: "Ultrasound refers to sound waves with frequency",
    options: [
      "A. below 20 Hz",
      "B. above 20 kHz",
      "C. between 20 Hz and 20 kHz",
      "D. exactly 20 Hz"
    ],
    answer: "B",
    explanation: "Ultrasound is above the human hearing range (>20 kHz) and is used in imaging.",
    subtopic: "Characteristics"
  },
  {
    question: "Infrasound refers to sound waves with frequency",
    options: [
      "A. above 20 kHz",
      "B. below 20 Hz",
      "C. between 20 Hz and 20 kHz",
      "D. exactly 20 kHz"
    ],
    answer: "B",
    explanation: "Infrasound is below the audible range (<20 Hz), e.g. from earthquakes and large machines.",
    subtopic: "Characteristics"
  },
  {
    question: "The normal human hearing range is about",
    options: [
      "A. 2 Hz to 2 kHz",
      "B. 20 Hz to 20 kHz",
      "C. 20 kHz to 200 kHz",
      "D. 0 Hz to 20 Hz"
    ],
    answer: "B",
    explanation: "A typical young ear hears roughly 20 Hz to 20 kHz.",
    subtopic: "Characteristics"
  }
];

module.exports = questions;
