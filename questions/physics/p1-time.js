// physics — Time
const questions = [
  {
    question: "Time is a?",
    options: [
      "A. Vector quantity",
      "B. Scalar quantity",
      "C. Force",
      "D. Direction"
    ],
    answer: "B",
    explanation: "Time has magnitude only and no direction, so it is a scalar.",
    subtopic: "Concept of time"
  },
  {
    question: "The SI unit of time is the?",
    options: [
      "A. Minute",
      "B. Hour",
      "C. Second",
      "D. Day"
    ],
    answer: "C",
    explanation: "The SI base unit of time is the second (s).",
    subtopic: "Concept of time"
  },
  {
    question: "Time can be described as the?",
    options: [
      "A. Measure of distance",
      "B. Interval between two events",
      "C. Measure of mass",
      "D. Measure of force"
    ],
    answer: "B",
    explanation: "Time is the duration or interval between two events.",
    subtopic: "Concept of time"
  },
  {
    question: "Which of the following is a fundamental quantity?",
    options: [
      "A. Speed",
      "B. Time",
      "C. Energy",
      "D. Volume"
    ],
    answer: "B",
    explanation: "Time is one of the seven SI fundamental quantities.",
    subtopic: "Concept of time"
  },
  {
    question: "One hour is equal to?",
    options: [
      "A. 60 seconds",
      "B. 3600 seconds",
      "C. 100 seconds",
      "D. 60 minutes in length only, not seconds"
    ],
    answer: "B",
    explanation: "1 hour = 60 minutes = 60 × 60 = 3600 seconds.",
    subtopic: "Concept of time"
  },
  {
    question: "A day has how many seconds?",
    options: [
      "A. 3600 s",
      "B. 86400 s",
      "C. 1440 s",
      "D. 2400 s"
    ],
    answer: "B",
    explanation: "1 day = 24 h = 24 × 3600 = 86400 s.",
    subtopic: "Concept of time"
  },
  {
    question: "Time is always?",
    options: [
      "A. Negative",
      "B. Positive (a duration)",
      "C. Zero",
      "D. A vector"
    ],
    answer: "B",
    explanation: "A time interval is a positive scalar quantity (a duration).",
    subtopic: "Concept of time"
  },
  {
    question: "The period of a motion is the?",
    options: [
      "A. Number of oscillations per second",
      "B. Time for one complete oscillation",
      "C. Maximum displacement",
      "D. Total distance"
    ],
    answer: "B",
    explanation: "Period is the time taken to complete one full cycle of motion.",
    subtopic: "Concept of time"
  },
  {
    question: "Frequency is the?",
    options: [
      "A. Time for one cycle",
      "B. Number of cycles per second",
      "C. Total time",
      "D. Period squared"
    ],
    answer: "B",
    explanation: "Frequency = number of complete oscillations per second (Hz).",
    subtopic: "Concept of time"
  },
  {
    question: "The relationship between period T and frequency f is?",
    options: [
      "A. T = f",
      "B. T = 1/f",
      "C. T = f²",
      "D. T = 2f"
    ],
    answer: "B",
    explanation: "Period and frequency are reciprocals: T = 1/f.",
    subtopic: "Concept of time"
  },
  {
    question: "A pendulum completes 10 oscillations in 20 s. Its period is?",
    options: [
      "A. 0.5 s",
      "B. 2 s",
      "C. 10 s",
      "D. 20 s"
    ],
    answer: "B",
    explanation: "Period = total time / number = 20/10 = 2 s.",
    subtopic: "Concept of time"
  },
  {
    question: "A pendulum has a period of 0.5 s. Its frequency is?",
    options: [
      "A. 0.5 Hz",
      "B. 2 Hz",
      "C. 5 Hz",
      "D. 0.25 Hz"
    ],
    answer: "B",
    explanation: "f = 1/T = 1/0.5 = 2 Hz.",
    subtopic: "Concept of time"
  },
  {
    question: "Which of the following is used to measure short time intervals in the lab?",
    options: [
      "A. Metre rule",
      "B. Stopwatch",
      "C. Thermometer",
      "D. Barometer"
    ],
    answer: "B",
    explanation: "A stopwatch (mechanical or digital) measures short time intervals accurately.",
    subtopic: "Measurement of time"
  },
  {
    question: "A mechanical stopwatch typically reads to an accuracy of?",
    options: [
      "A. 1 s",
      "B. 0.1 s or 0.01 s",
      "C. 1 minute",
      "D. 1 hour"
    ],
    answer: "B",
    explanation: "Stopwatches commonly read to 0.1 s (or 0.01 s for digital ones).",
    subtopic: "Measurement of time"
  },
  {
    question: "A digital stopwatch is generally more accurate than a mechanical one because it?",
    options: [
      "A. Is heavier",
      "B. Reads to smaller divisions",
      "C. Measures mass",
      "D. Uses a spring"
    ],
    answer: "B",
    explanation: "Digital stopwatches resolve time to smaller increments (e.g. 0.01 s).",
    subtopic: "Measurement of time"
  },
  {
    question: "The time taken for a pendulum to swing from one side to the other is?",
    options: [
      "A. The full period",
      "B. Half the period",
      "C. The frequency",
      "D. Zero"
    ],
    answer: "B",
    explanation: "A half-swing (one side to the other) is half of one complete period.",
    subtopic: "Measurement of time"
  },
  {
    question: "To find the period of a pendulum accurately, one should?",
    options: [
      "A. Time a single swing",
      "B. Time many swings and divide by the number",
      "C. Guess",
      "D. Use a ruler"
    ],
    answer: "B",
    explanation: "Timing many oscillations and averaging reduces reaction-time error.",
    subtopic: "Measurement of time"
  },
  {
    question: "A clock driven by a swinging pendulum relies on the?",
    options: [
      "A. Constant period of the pendulum",
      "B. Spring force only",
      "C. Magnetic field",
      "D. Electric current only"
    ],
    answer: "A",
    explanation: "A pendulum's nearly constant period allows it to keep regular time.",
    subtopic: "Measurement of time"
  },
  {
    question: "Reaction time error affects measurements made with a?",
    options: [
      "A. Stopwatch by hand",
      "B. Beam balance",
      "C. Metre rule",
      "D. Thermometer"
    ],
    answer: "A",
    explanation: "Human reaction delay introduces error when starting/stopping a stopwatch manually.",
    subtopic: "Measurement of time"
  },
  {
    question: "The unit of frequency is the?",
    options: [
      "A. Second",
      "B. Hertz",
      "C. Metre",
      "D. Newton"
    ],
    answer: "B",
    explanation: "Frequency is measured in hertz (Hz), equal to s⁻¹.",
    subtopic: "Concept of time"
  },
  {
    question: "Which instrument measures time most precisely in a school lab?",
    options: [
      "A. Sundial",
      "B. Digital stopwatch",
      "C. Hourglass",
      "D. Calendar"
    ],
    answer: "B",
    explanation: "A digital stopwatch measures to hundredths of a second, the most precise listed.",
    subtopic: "Measurement of time"
  },
  {
    question: "A stop clock (mechanical) is started and stopped by?",
    options: [
      "A. A spring only",
      "B. Pressing buttons",
      "C. Gravity",
      "D. Heat"
    ],
    answer: "B",
    explanation: "Mechanical stop clocks are controlled by pressing start/stop buttons.",
    subtopic: "Measurement of time"
  },
  {
    question: "Time interval is best defined as the?",
    options: [
      "A. Position of a clock",
      "B. Difference between two instants",
      "C. Speed of a clock",
      "D. Mass of a clock"
    ],
    answer: "B",
    explanation: "A time interval is the elapsed duration between two instants.",
    subtopic: "Concept of time"
  },
  {
    question: "An atomic clock is used for?",
    options: [
      "A. Measuring mass",
      "B. Very precise timekeeping",
      "C. Measuring length",
      "D. Measuring temperature"
    ],
    answer: "B",
    explanation: "Atomic clocks provide extremely accurate standard time/frequency.",
    subtopic: "Measurement of time"
  },
  {
    question: "60 seconds is equal to?",
    options: [
      "A. 1 minute",
      "B. 1 hour",
      "C. 1 day",
      "D. 0.6 minute"
    ],
    answer: "A",
    explanation: "60 seconds = 1 minute.",
    subtopic: "Concept of time"
  },
  {
    question: "The time for 50 oscillations of a pendulum is 25 s. The period is?",
    options: [
      "A. 0.5 s",
      "B. 2 s",
      "C. 25 s",
      "D. 50 s"
    ],
    answer: "A",
    explanation: "T = 25/50 = 0.5 s.",
    subtopic: "Concept of time"
  },
  {
    question: "Which of the following is NOT a unit of time?",
    options: [
      "A. Second",
      "B. Hour",
      "C. Metre",
      "D. Day"
    ],
    answer: "C",
    explanation: "Metre is a unit of length, not time.",
    subtopic: "Concept of time"
  },
  {
    question: "A ticker-timer marks dots at regular time intervals to measure?",
    options: [
      "A. Mass",
      "B. Speed and acceleration",
      "C. Temperature",
      "D. Volume"
    ],
    answer: "B",
    explanation: "A ticker-timer produces dots at fixed time intervals, used to study motion.",
    subtopic: "Measurement of time"
  },
  {
    question: "If a ticker-timer makes 50 dots per second, the time between dots is?",
    options: [
      "A. 0.02 s",
      "B. 0.5 s",
      "C. 2 s",
      "D. 50 s"
    ],
    answer: "A",
    explanation: "Interval = 1/50 = 0.02 s between successive dots.",
    subtopic: "Measurement of time"
  },
  {
    question: "Which quantity has the same unit as frequency?",
    options: [
      "A. Period",
      "B. s⁻¹ (per second)",
      "C. Second",
      "D. Minute"
    ],
    answer: "B",
    explanation: "Frequency is in hertz = s⁻¹ (per second).",
    subtopic: "Concept of time"
  },
  {
    question: "A stopwatch reads 12.50 s at the start and 45.30 s at the end. The interval is?",
    options: [
      "A. 32.80 s",
      "B. 57.80 s",
      "C. 12.50 s",
      "D. 45.30 s"
    ],
    answer: "A",
    explanation: "Interval = 45.30 − 12.50 = 32.80 s.",
    subtopic: "Measurement of time"
  },
  {
    question: "Time measurement by a sundial depends on?",
    options: [
      "A. The position of the Sun",
      "B. Atomic vibrations",
      "C. A spring",
      "D. Electricity"
    ],
    answer: "A",
    explanation: "A sundial tells time from the Sun's position (shadow cast).",
    subtopic: "Measurement of time"
  },
  {
    question: "Which error is reduced by timing many oscillations of a pendulum?",
    options: [
      "A. Zero error",
      "B. Reaction-time (human) error",
      "C. Parallax error",
      "D. Systematic error"
    ],
    answer: "B",
    explanation: "Averaging over many oscillations reduces the effect of human reaction time.",
    subtopic: "Measurement of time"
  },
  {
    question: "The second is defined in terms of?",
    options: [
      "A. The Earth's rotation",
      "B. Atomic transitions (caesium)",
      "C. A pendulum",
      "D. The Moon"
    ],
    answer: "B",
    explanation: "The SI second is defined by the frequency of radiation from caesium atoms.",
    subtopic: "Measurement of time"
  },
  {
    question: "A body moving with constant speed covers 100 m in 20 s. This uses the concept of?",
    options: [
      "A. Mass",
      "B. Time interval",
      "C. Volume",
      "D. Density"
    ],
    answer: "B",
    explanation: "The 20 s is a time interval over which motion occurs.",
    subtopic: "Concept of time"
  },
  {
    question: "Which of these increases the accuracy of a measured time interval?",
    options: [
      "A. Using a less precise clock",
      "B. Timing many repeats and averaging",
      "C. Estimating",
      "D. Ignoring reaction time"
    ],
    answer: "B",
    explanation: "Repeating and averaging reduces random errors like reaction time.",
    subtopic: "Measurement of time"
  },
  {
    question: "A watch reading 3:00 pm and another at 3:30 pm differ by?",
    options: [
      "A. 30 minutes",
      "B. 3 hours",
      "C. 30 seconds",
      "D. 3 minutes"
    ],
    answer: "A",
    explanation: "The elapsed time interval is 30 minutes.",
    subtopic: "Concept of time"
  },
  {
    question: "Period is measured in?",
    options: [
      "A. Hertz",
      "B. Seconds",
      "C. Metres",
      "D. Newtons"
    ],
    answer: "B",
    explanation: "Period is a time, so its unit is the second.",
    subtopic: "Concept of time"
  },
  {
    question: "A frequency of 5 Hz means?",
    options: [
      "A. 5 seconds per cycle",
      "B. 5 cycles per second",
      "C. 5 metres per second",
      "D. 5 newtons"
    ],
    answer: "B",
    explanation: "5 Hz = 5 complete oscillations each second.",
    subtopic: "Concept of time"
  },
  {
    question: "Which device uses the regular swing of a mass on a string to keep time?",
    options: [
      "A. Stopwatch",
      "B. Pendulum clock",
      "C. Sundial",
      "D. Barometer"
    ],
    answer: "B",
    explanation: "A pendulum clock uses a swinging pendulum with a fixed period.",
    subtopic: "Measurement of time"
  },
  {
    question: "Time is independent of?",
    options: [
      "A. The events it separates",
      "B. Direction",
      "C. The clock used",
      "D. The observer's position only"
    ],
    answer: "B",
    explanation: "Time is a scalar; it has no direction.",
    subtopic: "Concept of time"
  },
  {
    question: "The smallest time interval a typical school digital stopwatch can show is?",
    options: [
      "A. 1 s",
      "B. 0.01 s",
      "C. 1 minute",
      "D. 1 hour"
    ],
    answer: "B",
    explanation: "Digital stopwatches usually display to 0.01 s.",
    subtopic: "Measurement of time"
  },
  {
    question: "A mechanical wristwatch keeps time using a?",
    options: [
      "A. Pendulum",
      "B. Oscillating balance wheel / quartz",
      "C. Sundial",
      "D. Barometer"
    ],
    answer: "B",
    explanation: "Modern watches use a quartz oscillator or balance wheel, not a pendulum.",
    subtopic: "Measurement of time"
  },
  {
    question: "Which of the following is a derived quantity involving time?",
    options: [
      "A. Mass",
      "B. Speed",
      "C. Length",
      "D. Current"
    ],
    answer: "B",
    explanation: "Speed = distance/time is derived from length and time.",
    subtopic: "Concept of time"
  },
  {
    question: "The period of a simple pendulum depends mainly on its?",
    options: [
      "A. Mass",
      "B. Length",
      "C. Colour",
      "D. Volume"
    ],
    answer: "B",
    explanation: "For a simple pendulum, period depends on length (and g), not on mass.",
    subtopic: "Concept of time"
  },
  {
    question: "A clock gains time if it runs?",
    options: [
      "A. Slow",
      "B. Fast",
      "C. Backwards",
      "D. At the correct rate"
    ],
    answer: "B",
    explanation: "A clock that runs fast shows more elapsed time than actually passed (gains).",
    subtopic: "Measurement of time"
  },
  {
    question: "Which of the following best reduces parallax error when reading an analogue clock?",
    options: [
      "A. Reading from an angle",
      "B. Reading with eye in line with the hand",
      "C. Estimating",
      "D. Using a ruler"
    ],
    answer: "B",
    explanation: "Aligning the eye with the pointer avoids parallax (though less relevant for flat clocks).",
    subtopic: "Measurement of time"
  },
  {
    question: "One complete vibration of a tuning fork is called one?",
    options: [
      "A. Period",
      "B. Cycle",
      "C. Second",
      "D. Hertz"
    ],
    answer: "B",
    explanation: "One full vibration is one cycle; the time for it is the period.",
    subtopic: "Concept of time"
  },
  {
    question: "If 20 waves pass a point in 4 s, the frequency is?",
    options: [
      "A. 5 Hz",
      "B. 0.2 Hz",
      "C. 4 Hz",
      "D. 20 Hz"
    ],
    answer: "A",
    explanation: "f = number/time = 20/4 = 5 Hz.",
    subtopic: "Concept of time"
  },
  {
    question: "A stopwatch should be reset to zero before?",
    options: [
      "A. Measuring an interval",
      "B. Measuring mass",
      "C. Measuring length",
      "D. Measuring volume"
    ],
    answer: "A",
    explanation: "Resetting to zero ensures the measured interval starts correctly.",
    subtopic: "Measurement of time"
  },
  {
    question: "Time can be represented on a graph as the?",
    options: [
      "A. Vertical axis only",
      "B. Horizontal (independent) axis",
      "C. Title",
      "D. Diagonal"
    ],
    answer: "B",
    explanation: "Time is the independent variable, plotted on the horizontal axis.",
    subtopic: "Concept of time"
  },
  {
    question: "Which of the following is a correct statement about time?",
    options: [
      "A. It is a vector",
      "B. It is a scalar fundamental quantity",
      "C. Its SI unit is the hour",
      "D. It has direction"
    ],
    answer: "B",
    explanation: "Time is a scalar and one of the SI fundamental quantities; its unit is the second.",
    subtopic: "Concept of time"
  }
];

module.exports = questions;
