export default [
  {
    heading: "What 'work' means in physics",
    body: "In everyday language 'work' means any effort or activity. In physics it has a precise, narrower meaning: work is done only when a force causes a displacement of the body it acts on. If you hold a heavy bag stationary your muscles tire, but in physics you do NO work on the bag because it does not move. This definition turns the vague idea of effort into a quantity we can calculate, and it is the first step in linking forces to energy.",
  },
  {
    heading: "Work as a measure of energy transfer",
    body: "Work and energy are two sides of the same coin. When a force moves a body it transfers energy to that body (or takes energy away), and the amount transferred is exactly the work done. This is why work and energy share the same unit, the joule (J): one joule is the work done (and energy transferred) when a 1 N force moves a body 1 m in the force direction. Seeing work as 'energy in transit' explains why doing work on something changes its energy.",
  },
  {
    heading: "The general work formula W = Fs cosθ",
    body: "The full equation for work is W = F s cosθ, where F is the applied force, s is the displacement, and θ is the angle between the force and the displacement. Only the component of the force along the motion, F cosθ, actually does work. When force and motion are in the same direction θ = 0 and cosθ = 1, giving the simpler W = Fs. This general form is essential whenever a push or pull is not perfectly aligned with the movement.",
  },
  {
    heading: "Forces perpendicular to motion do no work",
    body: "Because work depends on cosθ, a force at right angles to the displacement (θ = 90°, cos90° = 0) does zero work no matter how large it is. A classic example is the centripetal force keeping a stone moving in a circle: it points inward while the stone moves tangentially, so it does no work and the stone's speed is unchanged. Likewise the normal reaction of a floor on a sliding box does no work — only the component along the motion matters.",
  },
  {
    heading: "Zero work when there is no displacement",
    body: "If a force acts but the body does not move, s = 0 and the work is zero regardless of how hard you push. A person pushing immovably against a wall, or a weightlifter holding a barbell at rest, does no work on the object in the physics sense. The human body still burns chemical energy to maintain the effort, but none of it is transferred to the load as mechanical work. This is the sharpest difference between everyday and scientific 'work'.",
  },
  {
    heading: "Positive, negative and zero work",
    body: "Work can be positive or negative depending on θ. When the force has a component in the direction of motion (θ < 90°) it does positive work and adds energy, speeding the body up. When the force opposes the motion (θ > 90°, e.g. friction, or gravity on a rising object) it does negative work, removing energy and slowing the body. The sign of W tells you whether that force is a source or a sink of mechanical energy for the body.",
  },
  {
    heading: "The joule and the newton-metre",
    body: "The SI unit of work and energy is the joule (J). From W = Fs we see 1 J = 1 N × 1 m, so the joule is equivalent to the newton-metre (N m). The newton-metre is used mainly for torque, but the two are dimensionally the same. For larger amounts, kilojoules (kJ = 10³ J) and megajoules (MJ = 10⁶ J) are convenient. Always write the unit with a result — a bare number is meaningless in physics.",
  },
  {
    heading: "Worked example: pushing horizontally",
    body: "A boy pushes a box with a steady horizontal force of 50 N so that it slides 4 m across a smooth floor. The force and displacement are in the same direction, so θ = 0 and W = Fs = 50 × 4 = 200 J. This 200 J of work is the energy his muscles transfer to the box, appearing as kinetic energy as it speeds up. The calculation is direct precisely because the push is aligned with the motion.",
  },
  {
    heading: "Worked example: pulling at an angle",
    body: "A child pulls a 20 kg trolley with a force of 40 N at 30° above the horizontal, moving it 10 m. The working component of the force is F cosθ = 40 × cos30° ≈ 40 × 0.866 = 34.6 N. The work done is W = (F cosθ) s = 34.6 × 10 = 346 J. The vertical component (40 sin30° = 20 N) lifts slightly but, being perpendicular to the horizontal motion, does no work along the path.",
  },
  {
    heading: "Summing work from several forces",
    body: "When several forces act on a body, the total work is the sum of the work done by each force separately, or equivalently the work done by the single resultant force. If a 50 N push and a 10 N friction act over 4 m in line, the push does +200 J and friction does −40 J, so the net work is +160 J. By the work-energy theorem, this net work equals the change in the body's kinetic energy — a bridge we use later to link work directly to speed.",
  },
  {
    heading: "Work done by gravity is path-independent",
    body: "Gravity does work W = mgh when a body of weight mg moves vertically through height h: positive if it falls, negative if it rises. Remarkably, the work done by gravity depends only on the vertical change in height, not on the path taken — sliding down a slope or dropping straight through the same height gives the same result. This special property makes gravity a 'conservative' force and underlies gravitational potential energy, which we develop next.",
  },
];
