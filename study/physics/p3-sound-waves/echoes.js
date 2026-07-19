export default [
  {
    heading: "What an echo is",
    body: "An echo is the repetition of a sound caused by reflection of the wave from a hard surface such as a cliff, wall or mountain. The original (direct) sound and the reflected sound travel by different paths, so the echo arrives later. If the surface is far enough away the two arrivals are heard as distinct; if it is close they merge and simply prolong the original sound.",
  },
  {
    heading: "The minimum distance for a separate echo",
    body: "The human ear cannot distinguish two sounds arriving less than about 0.1 s apart. For sound to return as a separate echo, the round trip 2d must take at least 0.1 s. At v = 340 m/s this requires 2d ≥ 34 m, so d ≥ 17 m. Reflecting surfaces closer than about 17 m produce reverberation rather than a distinct, separately heard echo.",
  },
  {
    heading: "The echo distance formula",
    body: "If a sound is emitted, reflects from a surface at distance d and returns, the total path length is 2d. With constant speed v and total time t, 2d = v·t, so the one-way distance is d = v·t/2. This simple relation is the basis of all echo-ranging: measure the time, know the speed, and the distance follows directly.",
  },
  {
    heading: "Worked example — cliff distance",
    body: "A boy shouts towards a cliff and hears the echo 1.2 s later. Taking v = 340 m/s, the round-trip distance is 2d = 340 × 1.2 = 408 m, so the cliff is d = 204 m away. Note the factor of 2: the sound travels to the cliff AND back, so halving the round-trip distance gives the true one-way separation from the boy to the cliff.",
  },
  {
    heading: "Sonar and ocean depth",
    body: "Ships use sonar (sound navigation and ranging) to map the seabed. A transducer sends a short ultrasonic pulse downward; it reflects off the bottom and the echo is timed. Because the speed of sound in seawater is known (about 1500 m/s), depth = v·t/2 gives the ocean depth continuously, letting vessels navigate safely and chart the sea floor.",
  },
  {
    heading: "Mineral exploration and medical ultrasound",
    body: "Reflection of sound waves is also used on land to locate mineral and oil deposits (seismic surveying with controlled sources) and in medicine to image the body. Ultrasound echoes from tissue boundaries are converted into scans; because the speed of sound in soft tissue is roughly constant, the echo times reveal the depth and shape of organs without surgery or ionising radiation.",
  },
  {
    heading: "Reverberation in enclosed spaces",
    body: "In a large hall, sound reflects repeatedly from walls, ceiling and floor, so many delayed copies overlap. This persistence of sound after the source stops is called reverberation. A little reverberation enriches music, but too much makes speech unintelligible. Architects control it with sound-absorbing panels, curtains and padded seats to give an auditorium an appropriate reverberation time.",
  },
  {
    heading: "Thunder as a natural echo effect",
    body: "Thunder is the sound of lightning's explosive heating of air. Because the lightning channel can be kilometres long and the sound reflects off hills, clouds and the ground, different parts of the rumble reach you by different paths and at different times. The delay between seeing the flash and hearing the thunder tells you how far away the strike was: roughly 3 s per kilometre.",
  },
];
