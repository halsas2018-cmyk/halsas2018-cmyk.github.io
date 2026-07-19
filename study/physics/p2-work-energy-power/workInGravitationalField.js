export default [
  {
    heading: "Lifting a body: work done against gravity",
    body: "To raise a body of mass m through a vertical height h at constant speed you must apply an upward force equal to its weight mg. The displacement is upward, so the work you do is W = force × distance = mg × h = mgh. This work is done AGAINST gravity, and gravity itself does −mgh (negative, because its force is downward while motion is up). The mgh you supply is not lost — it is stored as gravitational potential energy.",
  },
  {
    heading: "Deriving potential energy PE = mgh",
    body: "Gravitational potential energy is the energy a body has because of its position in a gravitational field. If we choose the ground as the zero level, lifting mass m through height h requires work mgh, so the body gains PE = mgh. By definition, the change in PE equals the work done against the gravitational force: ΔPE = mgΔh. This simple linear formula holds near Earth's surface where g is effectively constant.",
  },
  {
    heading: "Work done BY gravity on a falling body",
    body: "When a body falls through height h, gravity acts in the same direction as the motion, so it does POSITIVE work W = mgh. This positive work increases the body's kinetic energy — gravity is the source, the falling body the sink. The faster it falls the more KE it gains, and the amount gained is exactly the mgh that gravity did as work. This is the essence of energy transfer in a gravitational field.",
  },
  {
    heading: "PE lost equals KE gained",
    body: "Drop a mass from height h with zero initial speed. Gravity does work mgh, so by the work-energy theorem the KE gained is mgh. Since it started with PE = mgh and zero KE, it ends with zero PE and KE = mgh: PE lost = KE gained. In symbols, mgh = ½mv². This equality is the heart of gravitational energy problems and is used constantly to relate a height to a resulting speed.",
  },
  {
    heading: "Deriving kinetic energy KE = ½mv²",
    body: "Kinetic energy is the energy a body has because of its motion, and it is derived from the work-energy theorem. A constant net force F accelerates mass m from rest over distance s; the work done is W = Fs. With F = ma and v² = u² + 2as (u = 0) giving as = ½v², we get W = m(½v²) = ½mv². So the KE of a body of mass m moving at speed v is KE = ½mv². Examiners expect this derivation to be known.",
  },
  {
    heading: "Gravity's work is path-independent",
    body: "The work gravity does depends only on the vertical displacement h, not the route. Sliding a block down a 5 m slope that drops 2 m, or dropping it straight 2 m, both give the same gravitational work mgh (h = 2 m). This path-independence is the defining feature of a conservative force, and it is exactly why we can assign a unique potential energy mgh to each height regardless of how the body got there.",
  },
  {
    heading: "The zero of potential energy is a choice",
    body: "Only CHANGES in potential energy are physically meaningful; the absolute value depends on where you put the zero. We usually take the ground or a tabletop as PE = 0, but you may choose any reference level. What matters in every problem is ΔPE = mgΔh between two positions. Being free to set the zero simplifies calculation and is a point examiners sometimes test with 'explain your choice of zero'.",
  },
  {
    heading: "Worked example: lifting a load",
    body: "A labourer lifts a 15 kg bag of cement through 2 m. The work done against gravity is W = mgh = 15 × 10 × 2 = 300 J (g ≈ 10 m/s²). This 300 J is stored as gravitational potential energy in the raised bag. If he then drops it, gravity returns that 300 J as kinetic energy just before impact — conservation of energy in action.",
  },
  {
    heading: "Worked example: speed from a fall",
    body: "A 2 kg stone is dropped from a height of 5 m. Using PE lost = KE gained: mgh = ½mv², so v² = 2gh = 2 × 10 × 5 = 100, giving v = 10 m/s just before impact (the mass cancels). Equivalently, gravity did work mgh = 2 × 10 × 5 = 100 J, which became ½ × 2 × v² = v² J of KE. Notice the impact speed depends only on h and g, not on the mass.",
  },
  {
    heading: "Gravitational field as a conservative field",
    body: "Because gravity does zero net work on a body that returns to its starting height (it gains on the way down what it lost on the way up), it is called a conservative force. Conservative forces are precisely the ones for which potential energy can be defined. Friction is non-conservative: it always does negative work and turns mechanical energy irreversibly into heat, which is why total mechanical energy is only conserved when non-conservative forces are absent.",
  },
  {
    heading: "Weight and g near Earth",
    body: "The gravitational force on a body near Earth is its weight, W = mg, where g ≈ 9.8 m/s² (often 10 m/s² in the exam calculations). This force is what you work against when lifting and what does work when falling. Because g is taken constant over ordinary heights, mgh and ½mv² are excellent approximations for school-level problems; over satellite distances g changes and the simple forms no longer apply.",
  },
  {
    heading: "Energy tracking in a falling-then-bouncing object",
    body: "Trace a ball dropped from height h: at the top all energy is PE = mgh and KE = 0. Halfway down PE = ½mgh, KE = ½mgh, the total still mgh. At the bottom PE = 0, KE = mgh, moving fastest. After an imperfect bounce it reaches only height h' < h, because some KE became heat and sound — total energy is conserved but mechanical energy fell. This narrative makes the conservation principle visible.",
  },
];
