export default [
  {
    heading: "The SI unit of time",
    body: "The SI unit of time is the second, symbol s. Longer and shorter intervals are built from it as multiples or sub-multiples: 1 minute = 60 s, 1 hour = 3600 s, 1 day = 86 400 s, while milliseconds (ms = 10⁻³ s), microseconds (µs = 10⁻⁶ s) and nanoseconds handle very short intervals. For physics calculations you should convert everything to seconds first, because the units of speed, acceleration and frequency all assume the second as their time base.",
  },
  {
    heading: "Everyday instruments — clocks and stopwatches",
    body: "For ordinary intervals we use clocks and stopwatches. A mechanical or digital stopwatch can measure to 0.01 s (centiseconds) or 0.1 s, and is the standard tool for timing a runner or a pendulum in school labs. Analogue stopwatches are read from a moving hand; digital ones show the value directly. The choice affects precision: a digital readout removes the guesswork of judging a hand between marks, but both are limited by human reaction time when starting and stopping.",
  },
  {
    heading: "The ticker-timer for short intervals and motion",
    body: "A ticker-timer marks dots on a paper tape at a fixed, known rate — most commonly 50 dots per second, i.e. one dot every 0.02 s. Because the rate is known, the spacing of the dots directly measures both time and speed: count the intervals and multiply by 0.02 s for the time, and measure the tape length for the distance. This makes the ticker-timer ideal for studying uniform and non-uniform motion in the lab, and it appears throughout the speed/velocity syllabus.",
  },
  {
    heading: "Worked example — ticker-timer timing",
    body: "A ticker-timer makes 50 dots per second, so each interval is 1/50 = 0.02 s. If a tape shows 25 dots between two points, there are 24 intervals between the first and last dot, giving a time of 24 × 0.02 = 0.48 s (if you count 25 intervals instead, it is 0.50 s — be clear whether you count dots or spaces). Either way the known dot rate turns a pattern of marks into a precise time measurement without any stopwatch.",
  },
  {
    heading: "Older methods — heartbeat, sand-clock and pendulum",
    body: "Before precise clocks, people measured time with the human heartbeat (counting pulses), the sand-clock or hourglass (timed flow of sand between chambers), and the swinging pendulum. The pendulum was special: a pendulum of fixed length has a nearly constant period, so its steady swing became the basis of the first accurately regulating clocks. These methods illustrate the core idea that any regular, repeating event can serve as a timer, even if not very precise.",
  },
  {
    heading: "The pendulum and accurate clocks",
    body: "Galileo noticed that a pendulum's period depends mainly on its length and hardly on the swing size, making it a reliable 'tick'. Huygens built the first pendulum clock around 1657, vastly improving timekeeping because the pendulum governed the escape mechanism instead of a crude falling weight. This principle — using a regular oscillator to regulate a clock — is the ancestor of every modern timepiece, from quartz watches to atomic standards.",
  },
  {
    heading: "Human reaction time and timing error",
    body: "When a person starts and stops a stopwatch, their reaction time (about 0.1–0.2 s) adds an uncertainty to the measurement, because the hand lags the eye. This is a systematic-ish error that affects both the start and stop, and it matters most for short intervals. To reduce its effect, repeat the timing and take the mean, or use an automatic device like a ticker-timer or light gate that removes the human from the loop entirely.",
  },
  {
    heading: "Precision, uncertainty and recording time",
    body: "Good timing records the unit (always seconds or a stated sub-multiple), the instrument used, and an honest uncertainty. For an analogue reading the uncertainty is about half the smallest division; for a digital stopwatch showing 0.01 s it is about ±0.01 s, plus the reaction-time contribution. Reporting '12.4 s ± 0.1 s' tells the reader both the value and how much to trust it — the same scientific discipline expected in every measurement in the syllabus.",
  },
  {
    heading: "Modern standards — quartz and atomic clocks",
    body: "Today, quartz clocks use the steady vibration of a quartz crystal and are accurate to about a second per month. The ultimate standard is the atomic clock, which counts the microwave oscillations of caesium-133 atoms and defines the second itself (9 192 631 770 periods). Atomic clocks drift by less than a second in millions of years and underpin GPS and global timekeeping. They are the modern fulfilment of the same principle as the pendulum: a regular oscillator marking equal intervals.",
  },
];
