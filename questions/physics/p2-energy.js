// physics — Energy
const questions = [
  {
    question: "Energy is defined as the",
    options: [
      "A. ability to do work",
      "B. rate of doing work",
      "C. product of force and time",
      "D. mass times velocity"
    ],
    answer: "A",
    explanation: "Energy is the capacity or ability of a body to do work.",
    subtopic: "Forms of energy"
  },
  {
    question: "The SI unit of energy is the",
    options: [
      "A. watt",
      "B. joule",
      "C. newton",
      "D. pascal"
    ],
    answer: "B",
    explanation: "Energy and work are measured in joules (J).",
    subtopic: "Forms of energy"
  },
  {
    question: "Which of the following is a form of mechanical energy?",
    options: [
      "A. Heat energy",
      "B. Chemical energy",
      "C. Kinetic energy",
      "D. Nuclear energy"
    ],
    answer: "C",
    explanation: "Kinetic and potential energies are the two forms of mechanical energy.",
    subtopic: "Forms of energy"
  },
  {
    question: "The energy possessed by a body due to its position is called",
    options: [
      "A. kinetic energy",
      "B. potential energy",
      "C. heat energy",
      "D. electrical energy"
    ],
    answer: "B",
    explanation: "Potential energy is stored energy due to position or configuration.",
    subtopic: "Forms of energy"
  },
  {
    question: "The energy possessed by a moving body is called",
    options: [
      "A. potential energy",
      "B. kinetic energy",
      "C. chemical energy",
      "D. elastic energy"
    ],
    answer: "B",
    explanation: "Kinetic energy is the energy a body has because of its motion.",
    subtopic: "Forms of energy"
  },
  {
    question: "Energy stored in a stretched spring is",
    options: [
      "A. kinetic energy",
      "B. elastic potential energy",
      "C. heat energy",
      "D. chemical energy"
    ],
    answer: "B",
    explanation: "Deforming elastic materials stores elastic potential energy.",
    subtopic: "Forms of energy"
  },
  {
    question: "The energy stored in the bonds of chemical compounds is",
    options: [
      "A. nuclear energy",
      "B. chemical energy",
      "C. thermal energy",
      "D. sound energy"
    ],
    answer: "B",
    explanation: "Chemical energy is stored in the chemical bonds between atoms and can be released in reactions.",
    subtopic: "Forms of energy"
  },
  {
    question: "Energy released during nuclear fission or fusion is",
    options: [
      "A. chemical energy",
      "B. nuclear energy",
      "C. mechanical energy",
      "D. electrical energy"
    ],
    answer: "B",
    explanation: "Nuclear energy comes from changes in the nucleus of atoms.",
    subtopic: "Forms of energy"
  },
  {
    question: "Heat energy is also referred to as",
    options: [
      "A. thermal energy",
      "B. light energy",
      "C. sound energy",
      "D. nuclear energy"
    ],
    answer: "A",
    explanation: "Heat (thermal) energy is the energy of randomly moving particles.",
    subtopic: "Forms of energy"
  },
  {
    question: "A battery stores energy primarily in the form of",
    options: [
      "A. kinetic energy",
      "B. chemical energy",
      "C. nuclear energy",
      "D. heat energy"
    ],
    answer: "B",
    explanation: "A battery stores chemical energy that is converted to electrical energy when used.",
    subtopic: "Forms of energy"
  },
  {
    question: "Light is a form of",
    options: [
      "A. mechanical energy",
      "B. radiant (electromagnetic) energy",
      "C. nuclear energy",
      "D. chemical energy"
    ],
    answer: "B",
    explanation: "Light is radiant energy carried by electromagnetic waves.",
    subtopic: "Forms of energy"
  },
  {
    question: "The energy transferred by a moving electric charge is",
    options: [
      "A. electrical energy",
      "B. magnetic energy",
      "C. sound energy",
      "D. elastic energy"
    ],
    answer: "A",
    explanation: "Electrical energy is carried by moving charges (current).",
    subtopic: "Forms of energy"
  },
  {
    question: "Sound energy is produced by",
    options: [
      "A. vibrations",
      "B. static charges",
      "C. nuclear reactions",
      "D. chemical bonds"
    ],
    answer: "A",
    explanation: "Sound is produced by vibrating objects and travels as a mechanical wave.",
    subtopic: "Forms of energy"
  },
  {
    question: "The main source of energy for the earth is the",
    options: [
      "A. moon",
      "B. sun",
      "C. earth's core",
      "D. wind"
    ],
    answer: "B",
    explanation: "The sun is the primary source of most of the earth's energy (solar, wind, fossil, hydro).",
    subtopic: "World energy resources"
  },
  {
    question: "Which of the following is a renewable energy resource?",
    options: [
      "A. Coal",
      "B. Crude oil",
      "C. Solar energy",
      "D. Natural gas"
    ],
    answer: "C",
    explanation: "Solar energy is renewable because it is naturally replenished and will not run out on human timescales.",
    subtopic: "World energy resources"
  },
  {
    question: "Which of the following is a non-renewable energy resource?",
    options: [
      "A. Wind",
      "B. Hydroelectric",
      "C. Natural gas",
      "D. Geothermal"
    ],
    answer: "C",
    explanation: "Natural gas is a fossil fuel and is non-renewable once consumed.",
    subtopic: "World energy resources"
  },
  {
    question: "Energy derived from the heat of the earth's interior is called",
    options: [
      "A. solar energy",
      "B. geothermal energy",
      "C. tidal energy",
      "D. biomass"
    ],
    answer: "B",
    explanation: "Geothermal energy harnesses heat from within the earth.",
    subtopic: "World energy resources"
  },
  {
    question: "Energy obtained from moving water is",
    options: [
      "A. tidal energy",
      "B. hydroelectric energy",
      "C. geothermal energy",
      "D. wind energy"
    ],
    answer: "B",
    explanation: "Hydroelectric power is generated from falling or flowing water (dams).",
    subtopic: "World energy resources"
  },
  {
    question: "Biomass energy is obtained from",
    options: [
      "A. burning of organic matter",
      "B. nuclear fission",
      "C. sunlight directly",
      "D. tidal waves"
    ],
    answer: "A",
    explanation: "Biomass energy comes from burning plant and animal organic material.",
    subtopic: "World energy resources"
  },
  {
    question: "Nuclear energy is commonly generated by the process of",
    options: [
      "A. fusion only",
      "B. fission of heavy nuclei",
      "C. combustion",
      "D. photosynthesis"
    ],
    answer: "B",
    explanation: "Most nuclear power plants generate energy by nuclear fission of uranium nuclei.",
    subtopic: "World energy resources"
  },
  {
    question: "A major disadvantage of fossil fuels is that they",
    options: [
      "A. are renewable",
      "B. produce greenhouse gases",
      "C. are too cheap",
      "D. cannot be stored"
    ],
    answer: "B",
    explanation: "Burning fossil fuels releases carbon dioxide and other greenhouse gases that contribute to global warming.",
    subtopic: "World energy resources"
  },
  {
    question: "Wind energy is converted to electrical energy by a",
    options: [
      "A. turbine coupled to a generator",
      "B. solar panel",
      "C. battery",
      "D. transformer"
    ],
    answer: "A",
    explanation: "Wind turns turbine blades connected to a generator that produces electricity.",
    subtopic: "World energy resources"
  },
  {
    question: "Which energy resource is derived from the gravitational pull of the moon and sun on the sea?",
    options: [
      "A. Geothermal",
      "B. Tidal",
      "C. Biomass",
      "D. Nuclear"
    ],
    answer: "B",
    explanation: "Tidal energy comes from the rise and fall of sea levels due to lunar and solar gravity.",
    subtopic: "World energy resources"
  },
  {
    question: "Energy from the sun reaches the earth mainly as",
    options: [
      "A. conduction",
      "B. radiation",
      "C. convection",
      "D. diffusion"
    ],
    answer: "B",
    explanation: "Solar energy travels through the vacuum of space by electromagnetic radiation.",
    subtopic: "World energy resources"
  },
  {
    question: "The energy crisis is largely due to",
    options: [
      "A. over-use of renewable sources",
      "B. depletion of non-renewable resources and rising demand",
      "C. too much sunlight",
      "D. excessive wind"
    ],
    answer: "B",
    explanation: "The crisis stems from heavy reliance on finite fossil fuels and growing global energy demand.",
    subtopic: "World energy resources"
  },
  {
    question: "One advantage of renewable energy resources is that they",
    options: [
      "A. produce more pollution",
      "B. are sustainable and cleaner",
      "C. are always cheap to build",
      "D. cannot be exhausted only by the sun"
    ],
    answer: "B",
    explanation: "Renewables are generally sustainable and produce less pollution than fossil fuels.",
    subtopic: "World energy resources"
  },
  {
    question: "The principle of conservation of energy states that energy",
    options: [
      "A. can be created but not destroyed",
      "B. can neither be created nor destroyed but only transformed",
      "C. is always lost as heat",
      "D. increases in an isolated system"
    ],
    answer: "B",
    explanation: "Energy cannot be created or destroyed; it can only change from one form to another.",
    subtopic: "Conservation of energy"
  },
  {
    question: "In a closed system, the total energy is",
    options: [
      "A. always increasing",
      "B. always decreasing",
      "C. constant",
      "D. zero"
    ],
    answer: "C",
    explanation: "The law of conservation of energy requires total energy in an isolated/closed system to remain constant.",
    subtopic: "Conservation of energy"
  },
  {
    question: "When a ball is thrown upwards, its kinetic energy is gradually converted to",
    options: [
      "A. heat energy only",
      "B. gravitational potential energy",
      "C. nuclear energy",
      "D. electrical energy"
    ],
    answer: "B",
    explanation: "As the ball rises, kinetic energy decreases and gravitational potential energy increases.",
    subtopic: "Conservation of energy"
  },
  {
    question: "A falling object loses potential energy and gains",
    options: [
      "A. kinetic energy",
      "B. chemical energy",
      "C. nuclear energy",
      "D. light energy"
    ],
    answer: "A",
    explanation: "During free fall, gravitational potential energy is converted to kinetic energy.",
    subtopic: "Conservation of energy"
  },
  {
    question: "In a pendulum, the sum of kinetic and potential energies (ignoring friction) is",
    options: [
      "A. zero",
      "B. constant",
      "C. increasing",
      "D. decreasing"
    ],
    answer: "B",
    explanation: "With negligible friction, mechanical energy is conserved so KE + PE remains constant.",
    subtopic: "Conservation of energy"
  },
  {
    question: "When mechanical energy appears 'lost' in practical systems it is usually converted to",
    options: [
      "A. nuclear energy",
      "B. heat due to friction",
      "C. light only",
      "D. mass"
    ],
    answer: "B",
    explanation: "Friction dissipates mechanical energy as heat, which is still conserved overall.",
    subtopic: "Conservation of energy"
  },
  {
    question: "A 2 kg object moving at 3 m/s has kinetic energy",
    options: [
      "A. 6 J",
      "B. 9 J",
      "C. 12 J",
      "D. 18 J"
    ],
    answer: "B",
    explanation: "KE = ½mv² = 0.5 × 2 × 9 = 9 J.",
    subtopic: "Conservation of energy"
  },
  {
    question: "A body of mass 5 kg raised 4 m gains gravitational potential energy (g = 10 m/s²)",
    options: [
      "A. 20 J",
      "B. 50 J",
      "C. 200 J",
      "D. 100 J"
    ],
    answer: "C",
    explanation: "PE = mgh = 5 × 10 × 4 = 200 J.",
    subtopic: "Conservation of energy"
  },
  {
    question: "If 100 J of electrical energy is used by a bulb and 90 J appears as heat, the light energy produced is",
    options: [
      "A. 10 J",
      "B. 90 J",
      "C. 100 J",
      "D. 190 J"
    ],
    answer: "A",
    explanation: "By conservation, 100 J = 90 J heat + light, so light = 10 J.",
    subtopic: "Conservation of energy"
  },
  {
    question: "Energy efficiency is defined as",
    options: [
      "A. total input energy / useful output energy",
      "B. useful output energy / total input energy",
      "C. input energy minus output energy",
      "D. waste energy / input energy"
    ],
    answer: "B",
    explanation: "Efficiency = (useful energy output / total energy input) × 100%.",
    subtopic: "Conservation of energy"
  },
  {
    question: "A machine with 80% efficiency converts 500 J of input to useful output of",
    options: [
      "A. 400 J",
      "B. 625 J",
      "C. 100 J",
      "D. 500 J"
    ],
    answer: "A",
    explanation: "Useful output = 0.8 × 500 = 400 J.",
    subtopic: "Conservation of energy"
  },
  {
    question: "The energy of a system cannot be measured directly, but its",
    options: [
      "A. change can be measured as work done",
      "B. mass can be ignored",
      "C. temperature is always zero",
      "D. speed is constant"
    ],
    answer: "A",
    explanation: "Energy changes are measured through work done or heat transferred.",
    subtopic: "Conservation of energy"
  },
  {
    question: "When a car brakes, its kinetic energy is mainly converted to",
    options: [
      "A. potential energy",
      "B. heat in the brakes",
      "C. light",
      "D. sound only"
    ],
    answer: "B",
    explanation: "Braking dissipates kinetic energy as heat through friction in the brake pads.",
    subtopic: "Conservation of energy"
  },
  {
    question: "The work-energy theorem states that the work done on a body equals its change in",
    options: [
      "A. potential energy only",
      "B. kinetic energy",
      "C. mass",
      "D. momentum"
    ],
    answer: "B",
    explanation: "Net work done on a body equals the change in its kinetic energy.",
    subtopic: "Conservation of energy"
  },
  {
    question: "An object of mass 1 kg falling freely from rest through 5 m gains kinetic energy (g = 10 m/s²)",
    options: [
      "A. 5 J",
      "B. 50 J",
      "C. 10 J",
      "D. 500 J"
    ],
    answer: "B",
    explanation: "Loss in PE = mgh = 1 × 10 × 5 = 50 J = gain in KE.",
    subtopic: "Conservation of energy"
  },
  {
    question: "Which of the following is NOT a renewable resource?",
    options: [
      "A. Solar",
      "B. Wind",
      "C. Coal",
      "D. Hydro"
    ],
    answer: "C",
    explanation: "Coal is a fossil fuel and is non-renewable.",
    subtopic: "World energy resources"
  },
  {
    question: "The energy from the sun is produced by",
    options: [
      "A. chemical combustion",
      "B. nuclear fusion",
      "C. nuclear fission",
      "D. geothermal processes"
    ],
    answer: "B",
    explanation: "The sun generates energy by nuclear fusion of hydrogen into helium.",
    subtopic: "World energy resources"
  },
  {
    question: "Concerning energy transformation, which statement is true?",
    options: [
      "A. Energy can be created from nothing",
      "B. Energy can be destroyed",
      "C. Energy can be transformed from one form to another",
      "D. Useful energy always increases"
    ],
    answer: "C",
    explanation: "Energy transforms between forms but the total is conserved.",
    subtopic: "Conservation of energy"
  },
  {
    question: "A stretched bow stores energy which is released as",
    options: [
      "A. heat energy",
      "B. kinetic energy of the arrow",
      "C. light energy",
      "D. electrical energy"
    ],
    answer: "B",
    explanation: "Elastic potential energy in the drawn bow becomes kinetic energy of the arrow.",
    subtopic: "Forms of energy"
  },
  {
    question: "To conserve energy in daily life, one should",
    options: [
      "A. leave lights on",
      "B. use energy-efficient appliances",
      "C. waste fuel",
      "D. ignore insulation"
    ],
    answer: "B",
    explanation: "Energy-efficient appliances reduce unnecessary consumption and waste.",
    subtopic: "Conservation of energy"
  },
  {
    question: "The total mechanical energy of a system is the sum of",
    options: [
      "A. heat and light",
      "B. kinetic and potential energies",
      "C. chemical and nuclear",
      "D. mass and velocity"
    ],
    answer: "B",
    explanation: "Mechanical energy = kinetic energy + potential energy.",
    subtopic: "Conservation of energy"
  },
  {
    question: "Which device converts chemical energy directly to electrical energy?",
    options: [
      "A. Electric motor",
      "B. Battery",
      "C. Generator",
      "D. Heater"
    ],
    answer: "B",
    explanation: "A battery converts stored chemical energy into electrical energy.",
    subtopic: "Forms of energy"
  },
  {
    question: "In a hydroelectric dam, the stored potential energy of water is converted mainly to",
    options: [
      "A. chemical energy",
      "B. electrical energy",
      "C. nuclear energy",
      "D. light energy"
    ],
    answer: "B",
    explanation: "Falling water turns turbines that drive generators producing electrical energy.",
    subtopic: "World energy resources"
  },
  {
    question: "A 10 J light bulb that is 20% efficient produces useful light energy of",
    options: [
      "A. 2 J",
      "B. 8 J",
      "C. 10 J",
      "D. 20 J"
    ],
    answer: "A",
    explanation: "Useful light = 0.20 × 10 = 2 J (the rest is heat).",
    subtopic: "Conservation of energy"
  },
  {
    question: "Energy transformation in a photosynthesis process is",
    options: [
      "A. light to chemical energy",
      "B. chemical to light energy",
      "C. heat to kinetic energy",
      "D. nuclear to thermal energy"
    ],
    answer: "A",
    explanation: "Plants convert light (solar) energy into stored chemical energy via photosynthesis.",
    subtopic: "Forms of energy"
  },
  {
    question: "The law of conservation of energy implies that a perpetual motion machine of the first kind is",
    options: [
      "A. possible",
      "B. impossible",
      "C. efficient",
      "D. renewable"
    ],
    answer: "B",
    explanation: "A machine that creates energy from nothing violates conservation and is impossible.",
    subtopic: "Conservation of energy"
  },
  {
    question: "When a spring is compressed, work done on it is stored as",
    options: [
      "A. kinetic energy",
      "B. elastic potential energy",
      "C. heat energy",
      "D. electrical energy"
    ],
    answer: "B",
    explanation: "Work done in compressing a spring is stored as elastic potential energy.",
    subtopic: "Forms of energy"
  },
  {
    question: "Which of these is an example of transformation to sound energy?",
    options: [
      "A. A glowing bulb",
      "B. A ringing bell",
      "C. A charging battery",
      "D. A still pond"
    ],
    answer: "B",
    explanation: "A ringing bell vibrates and transfers energy as sound waves.",
    subtopic: "Forms of energy"
  },
  {
    question: "The energy in food is a form of",
    options: [
      "A. nuclear energy",
      "B. chemical energy",
      "C. kinetic energy",
      "D. thermal energy"
    ],
    answer: "B",
    explanation: "Food stores chemical energy that the body releases during metabolism.",
    subtopic: "Forms of energy"
  }
];

module.exports = questions;
