// physics — Work, Energy and Power
const questions = [
  {
    question: "Work is done when a force causes a body to move in the direction of the",
    options: [
      "A. force",
      "B. opposite to the force",
      "C. perpendicular to the force",
      "D. weight only"
    ],
    answer: "A",
    explanation: "Work is done only when there is displacement in the direction of the applied force.",
    subtopic: "Concept of work"
  },
  {
    question: "The SI unit of work is the",
    options: [
      "A. watt",
      "B. joule",
      "C. newton",
      "D. pascal"
    ],
    answer: "B",
    explanation: "Work is measured in joules (J), the same as energy.",
    subtopic: "Concept of work"
  },
  {
    question: "Work done by a constant force F moving a body through distance s in its direction is",
    options: [
      "A. F + s",
      "B. Fs",
      "C. F/s",
      "D. Fs²"
    ],
    answer: "B",
    explanation: "Work = force × distance in the direction of the force, W = Fs.",
    subtopic: "Concept of work"
  },
  {
    question: "A force of 20 N moves a body 5 m in its direction. The work done is",
    options: [
      "A. 4 J",
      "B. 100 J",
      "C. 25 J",
      "D. 1000 J"
    ],
    answer: "B",
    explanation: "W = Fs = 20 × 5 = 100 J.",
    subtopic: "Concept of work"
  },
  {
    question: "If a force is applied perpendicular to the direction of motion, the work done is",
    options: [
      "A. maximum",
      "B. zero",
      "C. Fs",
      "D. Fs²"
    ],
    answer: "B",
    explanation: "Work = Fs cosθ; with θ = 90°, cos90° = 0, so no work is done.",
    subtopic: "Concept of work"
  },
  {
    question: "A man carrying a heavy load and walking on a level road does",
    options: [
      "A. positive work",
      "B. zero work",
      "C. negative work",
      "D. maximum work"
    ],
    answer: "B",
    explanation: "The upward supporting force is perpendicular to horizontal motion, so no work is done against gravity.",
    subtopic: "Concept of work"
  },
  {
    question: "When the force and displacement are in opposite directions, the work done is",
    options: [
      "A. positive",
      "B. negative",
      "C. zero",
      "D. infinite"
    ],
    answer: "B",
    explanation: "With θ = 180°, cos180° = -1, so work is negative.",
    subtopic: "Concept of work"
  },
  {
    question: "Work done = Fs cosθ. If θ = 60°, the work is",
    options: [
      "A. Fs",
      "B. ½Fs",
      "C. Fs√3/2",
      "D. 2Fs"
    ],
    answer: "B",
    explanation: "cos60° = ½, so W = Fs cos60° = ½Fs.",
    subtopic: "Concept of work"
  },
  {
    question: "Energy is the capacity to do",
    options: [
      "A. work",
      "B. rest",
      "C. heat only",
      "D. sound only"
    ],
    answer: "A",
    explanation: "A body with energy can do work; energy is stored capacity to do work.",
    subtopic: "Concept of energy"
  },
  {
    question: "Kinetic energy of a body of mass m moving with speed v is",
    options: [
      "A. mv",
      "B. ½mv²",
      "C. mv²",
      "D. ½mv"
    ],
    answer: "B",
    explanation: "Kinetic energy = ½mv².",
    subtopic: "Concept of energy"
  },
  {
    question: "A 4 kg object moving at 5 m/s has kinetic energy",
    options: [
      "A. 20 J",
      "B. 50 J",
      "C. 100 J",
      "D. 10 J"
    ],
    answer: "B",
    explanation: "KE = ½ × 4 × 25 = 50 J.",
    subtopic: "Concept of energy"
  },
  {
    question: "If the speed of a body doubles, its kinetic energy",
    options: [
      "A. doubles",
      "B. becomes four times",
      "C. halves",
      "D. stays the same"
    ],
    answer: "B",
    explanation: "KE ∝ v², so doubling v multiplies KE by 4.",
    subtopic: "Concept of energy"
  },
  {
    question: "Gravitational potential energy near earth is given by",
    options: [
      "A. mgh",
      "B. ½mv²",
      "C. mg/h",
      "D. mh"
    ],
    answer: "A",
    explanation: "Gravitational PE = mgh where h is height above a reference level.",
    subtopic: "Concept of energy"
  },
  {
    question: "A 2 kg body raised 10 m (g = 10 m/s²) gains potential energy",
    options: [
      "A. 20 J",
      "B. 200 J",
      "C. 100 J",
      "D. 50 J"
    ],
    answer: "B",
    explanation: "PE = mgh = 2 × 10 × 10 = 200 J.",
    subtopic: "Concept of energy"
  },
  {
    question: "Work done against gravity in lifting a body equals its gain in",
    options: [
      "A. kinetic energy",
      "B. gravitational potential energy",
      "C. heat energy",
      "D. electrical energy"
    ],
    answer: "B",
    explanation: "Lifting a body stores energy as gravitational potential energy equal to the work done.",
    subtopic: "Work in gravitational field"
  },
  {
    question: "A boy of mass 50 kg climbs a height of 4 m (g = 10 m/s²). Work done against gravity is",
    options: [
      "A. 200 J",
      "B. 2000 J",
      "C. 500 J",
      "D. 20000 J"
    ],
    answer: "B",
    explanation: "W = mgh = 50 × 10 × 4 = 2000 J.",
    subtopic: "Work in gravitational field"
  },
  {
    question: "The work done in raising a 10 N weight by 2 m is",
    options: [
      "A. 5 J",
      "B. 20 J",
      "C. 12 J",
      "D. 0.2 J"
    ],
    answer: "B",
    explanation: "W = weight × height = 10 × 2 = 20 J.",
    subtopic: "Work in gravitational field"
  },
  {
    question: "To lift a 500 N load 10 m vertically requires work of",
    options: [
      "A. 50 J",
      "B. 5000 J",
      "C. 510 J",
      "D. 50000 J"
    ],
    answer: "B",
    explanation: "W = Fs = 500 × 10 = 5000 J.",
    subtopic: "Work in gravitational field"
  },
  {
    question: "Mechanical energy is the sum of",
    options: [
      "A. heat and light",
      "B. kinetic and potential energies",
      "C. chemical and nuclear",
      "D. mass and force"
    ],
    answer: "B",
    explanation: "Mechanical energy = kinetic energy + potential energy.",
    subtopic: "Mechanical energy"
  },
  {
    question: "A body at the top of a hill has energy mainly as",
    options: [
      "A. kinetic energy",
      "B. potential energy",
      "C. heat energy",
      "D. electrical energy"
    ],
    answer: "B",
    explanation: "At rest at height h, the body stores gravitational potential energy.",
    subtopic: "Mechanical energy"
  },
  {
    question: "A moving car at the bottom of a hill has energy mainly as",
    options: [
      "A. potential energy",
      "B. kinetic energy",
      "C. nuclear energy",
      "D. chemical energy"
    ],
    answer: "B",
    explanation: "A moving car on level ground has kinetic energy due to its motion.",
    subtopic: "Mechanical energy"
  },
  {
    question: "The principle of conservation of mechanical energy applies when",
    options: [
      "A. only conservative forces act",
      "B. friction is present",
      "C. air resistance dominates",
      "D. energy is destroyed"
    ],
    answer: "A",
    explanation: "Mechanical energy is conserved when only conservative forces (gravity, springs) act, with no dissipation.",
    subtopic: "Conservation of mechanical energy"
  },
  {
    question: "A 1 kg ball dropped from 5 m reaches the ground with speed (g = 10 m/s², ignore air)", options: [
      "A. 5 m/s",
      "B. 10 m/s",
      "C. 20 m/s",
      "D. 50 m/s"
    ],
    answer: "B",
    explanation: "mgh = ½mv² → v = √(2gh) = √(100) = 10 m/s.",
    subtopic: "Conservation of mechanical energy"
  },
  {
    question: "A 2 kg object slides down a frictionless incline losing 20 J of PE. Its KE gain is",
    options: [
      "A. 10 J",
      "B. 20 J",
      "C. 40 J",
      "D. 0 J"
    ],
    answer: "B",
    explanation: "With no friction, loss in PE equals gain in KE = 20 J.",
    subtopic: "Conservation of mechanical energy"
  },
  {
    question: "If a body of mass m is projected upward with speed u, its maximum height is",
    options: [
      "A. u/g",
      "B. u²/2g",
      "C. 2u²/g",
      "D. ug"
    ],
    answer: "B",
    explanation: "Using ½mu² = mgh_max → h_max = u²/2g.",
    subtopic: "Conservation of mechanical energy"
  },
  {
    question: "A stone of mass 0.5 kg thrown upward at 20 m/s reaches height (g = 10 m/s²)",
    options: [
      "A. 10 m",
      "B. 20 m",
      "C. 40 m",
      "D. 100 m"
    ],
    answer: "B",
    explanation: "h = u²/2g = 400/20 = 20 m.",
    subtopic: "Conservation of mechanical energy"
  },
  {
    question: "Power is defined as the",
    options: [
      "A. ability to do work",
      "B. rate of doing work",
      "C. product of force and distance",
      "D. energy stored"
    ],
    answer: "B",
    explanation: "Power = work done / time taken, the rate of energy transfer.",
    subtopic: "Power"
  },
  {
    question: "The SI unit of power is the",
    options: [
      "A. joule",
      "B. watt",
      "C. newton",
      "D. pascal"
    ],
    answer: "B",
    explanation: "Power is measured in watts (W), where 1 W = 1 J/s.",
    subtopic: "Power"
  },
  {
    question: "A machine does 600 J of work in 20 s. Its power is",
    options: [
      "A. 30 W",
      "B. 12000 W",
      "C. 0.03 W",
      "D. 620 W"
    ],
    answer: "A",
    explanation: "P = W/t = 600/20 = 30 W.",
    subtopic: "Power"
  },
  {
    question: "Power can also be expressed as",
    options: [
      "A. force × velocity",
      "B. force / velocity",
      "C. velocity / force",
      "D. force × time"
    ],
    answer: "A",
    explanation: "P = W/t = (Fs)/t = Fv, so power = force × velocity in the direction of motion.",
    subtopic: "Power"
  },
  {
    question: "A car exerts a constant force of 1000 N and moves at 20 m/s. Its power output is",
    options: [
      "A. 20 kW",
      "B. 50 W",
      "C. 2 kW",
      "D. 200 kW"
    ],
    answer: "A",
    explanation: "P = Fv = 1000 × 20 = 20000 W = 20 kW.",
    subtopic: "Power"
  },
  {
    question: "A 500 W bulb run for 10 s uses energy",
    options: [
      "A. 50 J",
      "B. 5000 J",
      "C. 510 J",
      "D. 50000 J"
    ],
    answer: "B",
    explanation: "E = Pt = 500 × 10 = 5000 J.",
    subtopic: "Power"
  },
  {
    question: "An electric motor lifts a 200 N load at 0.5 m/s. The power developed is",
    options: [
      "A. 100 W",
      "B. 400 W",
      "C. 50 W",
      "D. 200 W"
    ],
    answer: "A",
    explanation: "P = Fv = 200 × 0.5 = 100 W.",
    subtopic: "Power"
  },
  {
    question: "One horsepower is approximately equal to",
    options: [
      "A. 746 W",
      "B. 100 W",
      "C. 1000 W",
      "D. 74.6 W"
    ],
    answer: "A",
    explanation: "1 horsepower ≈ 746 watts.",
    subtopic: "Power"
  },
  {
    question: "A crane lifts a 1000 N load 20 m in 10 s. Its power is",
    options: [
      "A. 200 W",
      "B. 2000 W",
      "C. 20 W",
      "D. 1000 W"
    ],
    answer: "B",
    explanation: "W = Fs = 1000×20 = 20000 J; P = 20000/10 = 2000 W.",
    subtopic: "Power"
  },
  {
    question: "Efficiency of a machine is given by",
    options: [
      "A. input / output",
      "B. (useful output / input) × 100%",
      "C. output - input",
      "D. input + output"
    ],
    answer: "B",
    explanation: "Efficiency = (useful energy output / total energy input) × 100%.",
    subtopic: "Applications"
  },
  {
    question: "A machine has input power 1000 W and useful output 800 W. Its efficiency is",
    options: [
      "A. 80%",
      "B. 125%",
      "C. 20%",
      "D. 100%"
    ],
    answer: "A",
    explanation: "Efficiency = 800/1000 × 100% = 80%.",
    subtopic: "Applications"
  },
  {
    question: "No real machine can be 100% efficient because of",
    options: [
      "A. conservation of mass",
      "B. friction and heat losses",
      "C. too much input",
      "D. excess power"
    ],
    answer: "B",
    explanation: "Friction and other dissipative forces convert some input to wasted heat, so useful output is always less.",
    subtopic: "Applications"
  },
  {
    question: "A lever is an example of a simple machine that",
    options: [
      "A. creates energy",
      "B. multiplies force at the expense of distance",
      "C. destroys work",
      "D. increases power"
    ],
    answer: "B",
    explanation: "Levers trade force for distance, providing mechanical advantage without creating energy.",
    subtopic: "Applications"
  },
  {
    question: "The work done in pushing a 50 N block 4 m along a frictionless surface with a 50 N force is",
    options: [
      "A. 200 J",
      "B. 12.5 J",
      "C. 250 J",
      "D. 50 J"
    ],
    answer: "A",
    explanation: "W = Fs = 50 × 4 = 200 J.",
    subtopic: "Concept of work"
  },
  {
    question: "A force of 10 N acts at 30° to the direction of motion over 2 m. Work done is",
    options: [
      "A. 20 J",
      "B. 17.3 J",
      "C. 10 J",
      "D. 5 J"
    ],
    answer: "B",
    explanation: "W = Fs cosθ = 10 × 2 × cos30° = 20 × 0.866 = 17.3 J.",
    subtopic: "Concept of work"
  },
  {
    question: "A body of mass 10 kg moving at 2 m/s has kinetic energy",
    options: [
      "A. 10 J",
      "B. 20 J",
      "C. 40 J",
      "D. 100 J"
    ],
    answer: "B",
    explanation: "KE = ½ × 10 × 4 = 20 J.",
    subtopic: "Concept of energy"
  },
  {
    question: "The kinetic energy of a 1000 kg car at 20 m/s is",
    options: [
      "A. 100 kJ",
      "B. 200 kJ",
      "C. 400 kJ",
      "D. 20 kJ"
    ],
    answer: "B",
    explanation: "KE = ½ × 1000 × 400 = 200000 J = 200 kJ.",
    subtopic: "Concept of energy"
  },
  {
    question: "Work done in lifting a body equals the",
    options: [
      "A. kinetic energy gained",
      "B. gain in gravitational potential energy",
      "C. heat produced",
      "D. power used"
    ],
    answer: "B",
    explanation: "Lifting work is stored as gravitational potential energy mgh.",
    subtopic: "Work in gravitational field"
  },
  {
    question: "A 20 kg mass raised 5 m (g = 9.8 m/s²) gains PE of approximately",
    options: [
      "A. 98 J",
      "B. 980 J",
      "C. 196 J",
      "D. 1000 J"
    ],
    answer: "B",
    explanation: "PE = mgh = 20 × 9.8 × 5 ≈ 980 J.",
    subtopic: "Work in gravitational field"
  },
  {
    question: "In a swing (ignoring friction), the highest point has",
    options: [
      "A. maximum KE, minimum PE",
      "B. maximum PE, minimum KE",
      "C. zero PE",
      "D. maximum KE and PE"
    ],
    answer: "B",
    explanation: "At the highest point speed is minimum (KE min) and height is max (PE max).",
    subtopic: "Mechanical energy"
  },
  {
    question: "A 0.2 kg ball dropped from 20 m hits ground with speed (g = 10 m/s²)",
    options: [
      "A. 10 m/s",
      "B. 20 m/s",
      "C. 40 m/s",
      "D. 200 m/s"
    ],
    answer: "B",
    explanation: "v = √(2gh) = √(2×10×20) = √400 = 20 m/s.",
    subtopic: "Conservation of mechanical energy"
  },
  {
    question: "If a body's KE is 50 J and PE is 30 J, its mechanical energy is",
    options: [
      "A. 20 J",
      "B. 80 J",
      "C. 1500 J",
      "D. 50 J"
    ],
    answer: "B",
    explanation: "Mechanical energy = KE + PE = 50 + 30 = 80 J.",
    subtopic: "Conservation of mechanical energy"
  },
  {
    question: "A pump raises 200 kg of water 10 m in 20 s (g = 10 m/s²). Power output is",
    options: [
      "A. 100 W",
      "B. 1000 W",
      "C. 2000 W",
      "D. 40 W"
    ],
    answer: "B",
    explanation: "W = mgh = 200×10×10 = 20000 J; P = 20000/20 = 1000 W.",
    subtopic: "Power"
  },
  {
    question: "A 60 W lamp used for 5 minutes consumes energy",
    options: [
      "A. 300 J",
      "B. 18000 J",
      "C. 12 J",
      "D. 3000 J"
    ],
    answer: "B",
    explanation: "t = 300 s; E = Pt = 60 × 300 = 18000 J.",
    subtopic: "Power"
  },
  {
    question: "An engine does 3000 J of work in 1 minute. Its power is",
    options: [
      "A. 50 W",
      "B. 3000 W",
      "C. 180 kW",
      "D. 0.5 W"
    ],
    answer: "A",
    explanation: "t = 60 s; P = 3000/60 = 50 W.",
    subtopic: "Power"
  },
  {
    question: "The work-energy theorem states that net work done equals",
    options: [
      "A. change in potential energy",
      "B. change in kinetic energy",
      "C. total energy",
      "D. power used"
    ],
    answer: "B",
    explanation: "Net work done on an object equals its change in kinetic energy.",
    subtopic: "Concept of energy"
  },
  {
    question: "A 5 kg block initially at rest is acted on by a net force doing 100 J of work. Its final speed is",
    options: [
      "A. 4 m/s",
      "B. 6.32 m/s",
      "C. 20 m/s",
      "D. 10 m/s"
    ],
    answer: "B",
    explanation: "½mv² = 100 → v² = 200/5 = 40 → v ≈ 6.32 m/s.",
    subtopic: "Concept of energy"
  },
  {
    question: "A pulley system with mechanical advantage 4 lifts a 40 N load with effort",
    options: [
      "A. 160 N",
      "B. 10 N",
      "C. 40 N",
      "D. 4 N"
    ],
    answer: "B",
    explanation: "MA = load/effort → effort = 40/4 = 10 N (ideal, ignoring friction).",
    subtopic: "Applications"
  },
  {
    question: "Energy stored in winding a clock spring is",
    options: [
      "A. kinetic energy",
      "B. elastic potential energy",
      "C. heat energy",
      "D. electrical energy"
    ],
    answer: "B",
    explanation: "Winding deforms the spring, storing elastic potential energy.",
    subtopic: "Mechanical energy"
  },
  {
    question: "A 1000 W heater raises the temperature of water, converting electrical energy mainly to",
    options: [
      "A. light energy",
      "B. heat energy",
      "C. kinetic energy",
      "D. sound energy"
    ],
    answer: "B",
    explanation: "An electric heater converts electrical energy into heat (thermal) energy.",
    subtopic: "Applications"
  },
  {
    question: "Two bodies have the same kinetic energy. The one with greater mass has",
    options: [
      "A. greater speed",
      "B. smaller speed",
      "C. same speed",
      "D. zero speed"
    ],
    answer: "B",
    explanation: "For equal KE = ½mv², larger m means smaller v.",
    subtopic: "Concept of energy"
  }
];

module.exports = questions;
