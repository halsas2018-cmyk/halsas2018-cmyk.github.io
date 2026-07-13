// biology — Irritability
const questions = [
  {
    question: "In biology, irritability refers to the ability of an organism to:",
    options: [
      "A. Reproduce",
      "B. Respond to stimuli",
      "C. Grow in size",
      "D. Excrete waste"
    ],
    answer: "B",
    explanation: "Irritability (sensitivity) is the capacity to detect and respond to changes.",
    subtopic: "Irritability"
  },
  {
    question: "A change in the internal or external environment that evokes a response in an organism is called a:",
    options: [
      "A. Receptor",
      "B. Stimulus",
      "C. Effector",
      "D. Hormone"
    ],
    answer: "B",
    explanation: "A stimulus is any detectable change that triggers a response.",
    subtopic: "Irritability"
  },
  {
    question: "Which of the following is an example of a stimulus?",
    options: [
      "A. A muscle contracting",
      "B. Light from the sun",
      "C. A gland secreting",
      "D. A nerve impulse"
    ],
    answer: "B",
    explanation: "Light is an environmental change (stimulus) that organisms can detect.",
    subtopic: "Irritability"
  },
  {
    question: "A structure that detects a stimulus is called a:",
    options: [
      "A. Effector",
      "B. Receptor",
      "C. Hormone",
      "D. Synapse"
    ],
    answer: "B",
    explanation: "Receptors (e.g. sense organs) receive and convert stimuli into signals.",
    subtopic: "Irritability"
  },
  {
    question: "A structure that carries out a response is called an:",
    options: [
      "A. Receptor",
      "B. Effector",
      "C. Stimulus",
      "D. Neuron"
    ],
    answer: "B",
    explanation: "Effectors (muscles or glands) produce the actual response.",
    subtopic: "Irritability"
  },
  {
    question: "The growth movement of a plant part in response to light is called:",
    options: [
      "A. Geotropism",
      "B. Phototropism",
      "C. Hydrotropism",
      "D. Thigmotropism"
    ],
    answer: "B",
    explanation: "Phototropism is directional growth toward or away from light.",
    subtopic: "Irritability"
  },
  {
    question: "A shoot growing towards light exhibits:",
    options: [
      "A. Negative phototropism",
      "B. Positive phototropism",
      "C. Negative geotropism only",
      "D. Hydrotropism"
    ],
    answer: "B",
    explanation: "Growth toward the light source is positive phototropism.",
    subtopic: "Irritability"
  },
  {
    question: "The growth response of a plant to gravity is termed:",
    options: [
      "A. Phototropism",
      "B. Geotropism (gravitropism)",
      "C. Chemotropism",
      "D. Thigmotropism"
    ],
    answer: "B",
    explanation: "Geotropism is growth directed by gravity.",
    subtopic: "Irritability"
  },
  {
    question: "Plant roots growing downwards in response to gravity show:",
    options: [
      "A. Negative geotropism",
      "B. Positive geotropism",
      "C. Positive phototropism",
      "D. Thigmotropism"
    ],
    answer: "B",
    explanation: "Roots grow with gravity, so they are positively geotropic.",
    subtopic: "Irritability"
  },
  {
    question: "The directional growth of a plant root towards water is called:",
    options: [
      "A. Hydrotropism",
      "B. Geotropism",
      "C. Phototropism",
      "D. Chemotropism"
    ],
    answer: "A",
    explanation: "Hydrotropism is growth in response to water concentration.",
    subtopic: "Irritability"
  },
  {
    question: "The coiling of a tendril around a support in response to touch is an example of:",
    options: [
      "A. Thigmotropism",
      "B. Hydrotropism",
      "C. Phototropism",
      "D. Chemotropism"
    ],
    answer: "A",
    explanation: "Thigmotropism is growth in response to mechanical contact.",
    subtopic: "Irritability"
  },
  {
    question: "The growth of a pollen tube towards the ovule, directed by chemicals, is an example of:",
    options: [
      "A. Hydrotropism",
      "B. Chemotropism",
      "C. Thigmotropism",
      "D. Geotropism"
    ],
    answer: "B",
    explanation: "Chemotropism is directional growth guided by a chemical gradient.",
    subtopic: "Irritability"
  },
  {
    question: "Which term describes growth towards a stimulus?",
    options: [
      "A. Negative tropism",
      "B. Positive tropism",
      "C. Nastic movement",
      "D. Taxis"
    ],
    answer: "B",
    explanation: "Positive tropism means growth toward the direction of the stimulus.",
    subtopic: "Irritability"
  },
  {
    question: "Which term describes growth away from a stimulus?",
    options: [
      "A. Positive tropism",
      "B. Negative tropism",
      "C. Taxis",
      "D. Reflex"
    ],
    answer: "B",
    explanation: "Negative tropism is growth away from the stimulus source.",
    subtopic: "Irritability"
  },
  {
    question: "The movement of a whole, freely moving organism towards light is called:",
    options: [
      "A. Phototropism",
      "B. Phototaxis",
      "C. Geotropism",
      "D. Nastism"
    ],
    answer: "B",
    explanation: "Phototaxis is directional locomotion toward (or away from) light.",
    subtopic: "Irritability"
  },
  {
    question: "The movement of sperm towards an egg, or bacteria towards a chemical, is an example of:",
    options: [
      "A. Chemotaxis",
      "B. Phototaxis",
      "C. Geotaxis",
      "D. Hydrotropism"
    ],
    answer: "A",
    explanation: "Chemotaxis is movement directed by a chemical attractant.",
    subtopic: "Irritability"
  },
  {
    question: "Which of the following shows phototaxis?",
    options: [
      "A. A root growing downward",
      "B. Euglena swimming towards light",
      "C. A tendril coiling",
      "D. A leaf folding"
    ],
    answer: "B",
    explanation: "Euglena moves directionally toward light, a classic phototactic response.",
    subtopic: "Irritability"
  },
  {
    question: "Plant responses to stimuli are generally:",
    options: [
      "A. Rapid and nervous",
      "B. Slow and usually involve growth",
      "C. Always electrical",
      "D. Always hormonal only"
    ],
    answer: "B",
    explanation: "Most plant responses are growth-based (tropisms) and therefore slow.",
    subtopic: "Irritability"
  },
  {
    question: "Animal responses to stimuli are usually:",
    options: [
      "A. Slow growth movements",
      "B. Rapid, via nervous and hormonal systems",
      "C. Always tropisms",
      "D. Always nastic"
    ],
    answer: "B",
    explanation: "Animals typically respond quickly using nerves and hormones.",
    subtopic: "Irritability"
  },
  {
    question: "The folding of the leaves of Mimosa pudica when touched is an example of:",
    options: [
      "A. Thigmotropism",
      "B. Thigmonasty",
      "C. Phototropism",
      "D. Chemotaxis"
    ],
    answer: "B",
    explanation: "This touch response is non-directional (nastic), not a directed growth.",
    subtopic: "Irritability"
  },
  {
    question: "Which plant hormone is mainly responsible for shoot phototropism?",
    options: [
      "A. Gibberellin",
      "B. Auxin",
      "C. Ethylene",
      "D. Abscisic acid"
    ],
    answer: "B",
    explanation: "Auxin redistributes to the shaded side, promoting elongation there.",
    subtopic: "Irritability"
  },
  {
    question: "In a positively phototropic shoot, auxin accumulates on the:",
    options: [
      "A. Illuminated side",
      "B. Shaded side",
      "C. Root tip only",
      "D. Whole plant equally"
    ],
    answer: "B",
    explanation: "Auxin moves to the shaded side, elongating cells there and bending the shoot to light.",
    subtopic: "Irritability"
  },
  {
    question: "The daily closing of leaves at night (sleep movements) is an example of:",
    options: [
      "A. Phototropism",
      "B. Nyctinasty",
      "C. Chemotaxis",
      "D. Geotropism"
    ],
    answer: "B",
    explanation: "Nyctinasty is a nastic response to the alternation of light and dark.",
    subtopic: "Irritability"
  },
  {
    question: "In animals, the cells that transmit impulses are called:",
    options: [
      "A. Effectors",
      "B. Neurons (nerve cells)",
      "C. Receptors only",
      "D. Hormones"
    ],
    answer: "B",
    explanation: "Neurons conduct electrical impulses throughout the nervous system.",
    subtopic: "Irritability"
  },
  {
    question: "Muscles and glands that produce responses in animals are classified as:",
    options: [
      "A. Receptors",
      "B. Effectors",
      "C. Stimuli",
      "D. Neurons"
    ],
    answer: "B",
    explanation: "Muscles and glands are effectors that act on nervous or hormonal signals.",
    subtopic: "Irritability"
  },
  {
    question: "The response of a plant to the length of day and night is called:",
    options: [
      "A. Phototropism",
      "B. Photoperiodism",
      "C. Geotropism",
      "D. Nastism"
    ],
    answer: "B",
    explanation: "Photoperiodism controls processes such as flowering via day length.",
    subtopic: "Irritability"
  },
  {
    question: "Which of the following is a nastic (non-directional) movement rather than a tropism?",
    options: [
      "A. Root growing toward gravity",
      "B. Shoot bending toward light",
      "C. Venus flytrap closing on contact",
      "D. Pollen tube growing to ovule"
    ],
    answer: "C",
    explanation: "The flytrap's snap is a triggered nastic movement, not directional growth.",
    subtopic: "Irritability"
  },
  {
    question: "The detection of sound in humans is carried out by receptors located in the:",
    options: [
      "A. Eye",
      "B. Ear",
      "C. Skin",
      "D. Tongue"
    ],
    answer: "B",
    explanation: "The ear contains receptors that detect sound vibrations.",
    subtopic: "Irritability"
  },
  {
    question: "Receptors for the sense of smell detect:",
    options: [
      "A. Light",
      "B. Chemical substances",
      "C. Sound waves",
      "D. Gravity"
    ],
    answer: "B",
    explanation: "Olfactory receptors respond to chemical molecules in the air.",
    subtopic: "Irritability"
  },
  {
    question: "A rapid, automatic, involuntary response to a stimulus is called a:",
    options: [
      "A. Tropism",
      "B. Reflex action",
      "C. Hormone release",
      "D. Nastic movement"
    ],
    answer: "B",
    explanation: "A reflex is a fast, stereotyped response via a reflex arc.",
    subtopic: "Irritability"
  },
  {
    question: "In a simple reflex arc, the impulse passes through the:",
    options: [
      "A. Brain only",
      "B. Spinal cord",
      "C. Heart",
      "D. Liver"
    ],
    answer: "B",
    explanation: "Reflex arcs are mediated by the spinal cord for speed.",
    subtopic: "Irritability"
  },
  {
    question: "Chemical messengers secreted into the blood that coordinate responses are called:",
    options: [
      "A. Neurons",
      "B. Hormones",
      "C. Receptors",
      "D. Effectors"
    ],
    answer: "B",
    explanation: "Hormones are chemical coordinators transported in the bloodstream.",
    subtopic: "Irritability"
  },
  {
    question: "Compared with nervous responses, hormonal responses are generally:",
    options: [
      "A. Faster and shorter-lived",
      "B. Slower and longer-lasting",
      "C. Always electrical",
      "D. Restricted to one organ"
    ],
    answer: "B",
    explanation: "Hormonal (endocrine) responses travel via blood and act more slowly but persist.",
    subtopic: "Irritability"
  },
  {
    question: "The directional movement of an organism away from light is called:",
    options: [
      "A. Positive phototaxis",
      "B. Negative phototaxis",
      "C. Positive geotaxis",
      "D. Chemotaxis"
    ],
    answer: "B",
    explanation: "Movement away from a light source is negative phototaxis.",
    subtopic: "Irritability"
  },
  {
    question: "Roots showing negative phototropism grow:",
    options: [
      "A. Towards light",
      "B. Away from light",
      "C. Towards gravity only",
      "D. In a circle"
    ],
    answer: "B",
    explanation: "Roots are negatively phototropic, growing away from light underground.",
    subtopic: "Irritability"
  },
  {
    question: "Statoliths (starch-filled amyloplasts) in plant cells help detect:",
    options: [
      "A. Light direction",
      "B. Gravity",
      "C. Chemical gradients",
      "D. Touch"
    ],
    answer: "B",
    explanation: "Sedimenting amyloplasts sense gravity, underpinning geotropism.",
    subtopic: "Irritability"
  },
  {
    question: "The response of a plant to contact with a solid object, causing tendril coiling, is:",
    options: [
      "A. Thigmotropism",
      "B. Phototropism",
      "C. Hydrotropism",
      "D. Chemotropism"
    ],
    answer: "A",
    explanation: "Thigmotropism is touch-induced directional growth (e.g. tendrils).",
    subtopic: "Irritability"
  },
  {
    question: "White blood cells moving towards bacteria at an infection site exhibit:",
    options: [
      "A. Phototaxis",
      "B. Positive chemotaxis",
      "C. Geotropism",
      "D. Thigmonasty"
    ],
    answer: "B",
    explanation: "They follow chemical signals from bacteria — a chemotactic response.",
    subtopic: "Irritability"
  },
  {
    question: "Which of the following best distinguishes a taxis from a tropism?",
    options: [
      "A. Taxis is growth; tropism is movement",
      "B. Taxis is movement of a whole organism; tropism is growth of a part",
      "C. They are the same",
      "D. Tropism applies only to animals"
    ],
    answer: "B",
    explanation: "Taxis are locomotory; tropisms are directional growth responses.",
    subtopic: "Irritability"
  },
  {
    question: "The eye contains photoreceptors that respond specifically to:",
    options: [
      "A. Sound",
      "B. Light",
      "C. Chemicals",
      "D. Pressure only"
    ],
    answer: "B",
    explanation: "Rods and cones in the retina detect light stimuli.",
    subtopic: "Irritability"
  },
  {
    question: "In humans, the receptor for taste is located on the:",
    options: [
      "A. Nose",
      "B. Tongue",
      "C. Ear",
      "D. Skin"
    ],
    answer: "B",
    explanation: "Taste buds on the tongue detect chemical stimuli (tastes).",
    subtopic: "Irritability"
  },
  {
    question: "The skin acts as a receptor for all of the following EXCEPT:",
    options: [
      "A. Touch",
      "B. Temperature",
      "C. Sound",
      "D. Pain"
    ],
    answer: "C",
    explanation: "The skin detects touch, temperature and pain, not sound (detected by the ear).",
    subtopic: "Irritability"
  },
  {
    question: "The sunflower turning to face the sun is primarily an example of:",
    options: [
      "A. Phototropism",
      "B. Photoperiodism",
      "C. Geotropism",
      "D. Hydrotropism"
    ],
    answer: "A",
    explanation: "The directional bending toward light is phototropic growth.",
    subtopic: "Irritability"
  },
  {
    question: "A stimulus that originates from outside the organism is described as:",
    options: [
      "A. Internal",
      "B. External",
      "C. Endocrine",
      "D. Nastic"
    ],
    answer: "B",
    explanation: "External stimuli come from the organism's environment.",
    subtopic: "Irritability"
  },
  {
    question: "Which of the following is an internal stimulus?",
    options: [
      "A. Bright light",
      "B. A loud sound",
      "C. A drop in blood sugar level",
      "D. High temperature"
    ],
    answer: "C",
    explanation: "Blood sugar changes occur inside the body and trigger responses.",
    subtopic: "Irritability"
  },
  {
    question: "The Venus flytrap and Mimosa illustrate that plant responses can be:",
    options: [
      "A. Always slow growth",
      "B. Rapid non-growth (nastic) movements",
      "C. Always hormonal",
      "D. Only phototropic"
    ],
    answer: "B",
    explanation: "These plants show fast turgor-driven nastic movements, not slow growth.",
    subtopic: "Irritability"
  },
  {
    question: "The shoot of a seedling bending toward a window is best explained by:",
    options: [
      "A. Even auxin distribution",
      "B. Unequal auxin distribution causing faster growth on the shaded side",
      "C. Gravity pulling it",
      "D. Water loss"
    ],
    answer: "B",
    explanation: "Auxin accumulates on the shaded side, elongating those cells and bending the shoot toward light.",
    subtopic: "Irritability"
  },
  {
    question: "Coordination in animals involving electrical impulses travelling along neurons is the:",
    options: [
      "A. Endocrine system",
      "B. Nervous system",
      "C. Excretory system",
      "D. Digestive system"
    ],
    answer: "B",
    explanation: "The nervous system uses electrical impulses in neurons for coordination.",
    subtopic: "Irritability"
  },
  {
    question: "Plants lack a nervous system; their responses to stimuli are mainly coordinated by:",
    options: [
      "A. Neurons",
      "B. Plant hormones (e.g. auxin)",
      "C. The spinal cord",
      "D. Reflex arcs"
    ],
    answer: "B",
    explanation: "Plants rely on hormones like auxin rather than nerves for coordination.",
    subtopic: "Irritability"
  },
  {
    question: "The main difference between nervous and hormonal coordination is that nervous impulses are:",
    options: [
      "A. Slower and chemical",
      "B. Faster and electrical",
      "C. Always long-lasting",
      "D. Carried by the blood only"
    ],
    answer: "B",
    explanation: "Nervous messages are rapid electrical impulses; hormones are slower chemical signals.",
    subtopic: "Irritability"
  }
];

module.exports = questions;
