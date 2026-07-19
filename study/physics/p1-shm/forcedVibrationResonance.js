export default [
  {
    heading: "Natural frequency",
    body: `Every free oscillator has a natural frequency f₀ — the frequency at which it oscillates when disturbed and then left alone (e.g. a pendulum's f = 1/(2π)√(g/l), or a mass–spring's f = (1/2π)√(k/m)). This is the frequency set by the system's own mass and stiffness, with no outside push. When you pluck a guitar string or release a pendulum, it rings at its natural frequency. Understanding f₀ is the key to understanding what happens when an external force joins in.`,
  },
  {
    heading: "Forced vibration",
    body: `A forced vibration occurs when a periodic external force drives a system to oscillate. The system no longer moves at its own natural frequency; instead it is forced to oscillate at the frequency of the driving force, f_d. Examples include a child being pushed on a swing (the push sets the rhythm), a loudspeaker cone driven by an electrical signal, and a bridge swaying under the rhythmic steps of walkers. After the initial transient, the steady oscillation happens at f_d, not f₀.`,
  },
  {
    heading: "Resonance — the key idea",
    body: `Resonance happens when the driving frequency f_d equals the system's natural frequency f₀. At this match, energy is fed into the system at exactly the right rhythm to reinforce each swing, so the amplitude of oscillation grows very large — far larger than at any other driving frequency. The system is said to be "in resonance." Away from f₀ the pushes sometimes oppose the motion and the amplitude stays small; at f₀ every push adds constructively, building amplitude rapidly.`,
  },
  {
    heading: "The resonance curve and the role of damping",
    body: `If you plot amplitude against driving frequency, you get a resonance curve: a peak centred on f₀. With little damping the peak is tall and narrow (sharp resonance) — the system is very sensitive to the driving frequency. With more damping the peak is shorter and broader — the maximum amplitude is reduced and resonance is less dramatic, but it is also less likely to be destructive. Damping therefore trades sensitivity for safety: it limits how large the resonant amplitude can become.`,
  },
  {
    heading: "Everyday and useful examples",
    body: `Resonance is exploited and avoided in daily life. A radio or TV tuner uses an electrical resonance circuit (an L–C circuit) that responds strongly only when the driving frequency matches the chosen station. Microwave ovens and MRI scanners rely on resonant absorption at specific frequencies. By contrast, resonance is dangerous: the Tacoma Narrows bridge collapsed in 1940 when wind-driven oscillations matched its natural frequency, and a wine glass can shatter if a singer sustains its resonant pitch.`,
  },
  {
    heading: "Why marching soldiers break step",
    body: `A column of soldiers marching in step applies a periodic force at a common frequency. If that frequency happens to match a bridge's natural frequency, resonance can build an amplitude large enough to damage the structure — which is exactly what happened in several historical bridge disasters. To prevent this, soldiers are ordered to "break step" (march out of sync) when crossing a bridge, so no single driving frequency can reinforce the bridge's natural oscillation. It is a simple, practical avoidance of destructive resonance.`,
  },
  {
    heading: "Resonance in other contexts",
    body: `Resonance appears across physics. In sound, a tuning fork or an air column in a resonance tube vibrates loudly only when driven at its natural frequency, used to find the speed of sound. In a.c. circuits, an L–C circuit resonates at f = 1/(2π√LC), the basis of radio tuning. Even the playground swing is a resonance demo: small pushes timed to the natural period build a large swing, while randomly timed pushes do not. The unifying rule is always f_d ≈ f₀ gives a big response.`,
  },
  {
    heading: "Designing with resonance in mind",
    body: `Engineers must either exploit or suppress resonance depending on the goal. Shock absorbers and rubber mounts add damping to buildings and vehicle suspensions so that earthquakes or bumps do not drive destructive resonance. Conversely, musical instruments are shaped to resonate at desired notes, and sensors use sharp resonance to detect a specific frequency. The practical lesson: know the system's natural frequency, then either tune the driving frequency to it (to amplify) or keep well away from it and damp it (to protect).`,
  },
  {
    heading: "Worked example — identifying resonance",
    body: `A system has natural frequency f₀ = 50 Hz. When driven at 30 Hz its amplitude is small; at 50 Hz its amplitude becomes very large — this is resonance, because f_d = f₀. Driving at 70 Hz again gives a small amplitude. If a damper is added, the peak at 50 Hz drops and broadens, so the amplitude at exactly 50 Hz is smaller but the response near 50 Hz is less sharply peaked. The rule f_d = f₀ for maximum amplitude holds regardless of damping; only the size and sharpness of the peak change with damping.`,
  },
];
