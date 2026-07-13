// biology — Nervous Coordination
const questions = [
  // ----- CNS -----
  {
    question: "Which part of the brain is responsible for conscious thought, reasoning, and voluntary actions?",
    options: [
      "A. Cerebellum",
      "B. Cerebrum",
      "C. Medulla oblongata",
      "D. Hypothalamus"
    ],
    answer: "B",
    explanation: "The cerebrum is the largest part of the brain and controls conscious thought, reasoning, memory, and voluntary actions.",
    subtopic: "CNS"
  },
  {
    question: "The cerebellum primarily functions to:",
    options: [
      "A. Regulate heartbeat",
      "B. Coordinate balance, posture and muscle movement",
      "C. Control breathing",
      "D. Relay impulses to the spinal cord"
    ],
    answer: "B",
    explanation: "The cerebellum coordinates balance, posture, and the fine control of skeletal muscle movement.",
    subtopic: "CNS"
  },
  {
    question: "Which part of the brain controls involuntary activities such as heartbeat, breathing, and blood pressure?",
    options: [
      "A. Cerebrum",
      "B. Cerebellum",
      "C. Medulla oblongata",
      "D. Thalamus"
    ],
    answer: "C",
    explanation: "The medulla oblongata in the hindbrain regulates vital involuntary functions including heartbeat, breathing, and blood pressure.",
    subtopic: "CNS"
  },
  {
    question: "The brain and spinal cord together make up the:",
    options: [
      "A. Peripheral nervous system",
      "B. Central nervous system",
      "C. Autonomic nervous system",
      "D. Somatic nervous system"
    ],
    answer: "B",
    explanation: "The central nervous system (CNS) consists of the brain and spinal cord, which integrate and coordinate information.",
    subtopic: "CNS"
  },
  {
    question: "Grey matter of the central nervous system consists mainly of:",
    options: [
      "A. Myelinated axons",
      "B. Cell bodies and unmyelinated fibres",
      "C. Schwann cells",
      "D. Cerebrospinal fluid"
    ],
    answer: "B",
    explanation: "Grey matter is made up largely of nerve cell bodies, dendrites, and unmyelinated nerve fibres.",
    subtopic: "CNS"
  },
  {
    question: "White matter is composed largely of:",
    options: [
      "A. Nerve cell bodies",
      "B. Myelinated axons",
      "C. Dendrites only",
      "D. Synapses"
    ],
    answer: "B",
    explanation: "White matter consists mainly of myelinated axons, which give it a pale colour and carry impulses between regions.",
    subtopic: "CNS"
  },
  {
    question: "The spinal cord is protected by the:",
    options: [
      "A. Skull",
      "B. Meninges only",
      "C. Vertebral column",
      "D. Rib cage"
    ],
    answer: "C",
    explanation: "The vertebral column (spine) is the bony structure that encloses and protects the spinal cord.",
    subtopic: "CNS"
  },
  {
    question: "The three membranes that cover and protect the brain and spinal cord are called the:",
    options: [
      "A. Ventricles",
      "B. Meninges",
      "C. Neurilemma",
      "D. Sulci"
    ],
    answer: "B",
    explanation: "The meninges (dura mater, arachnoid, pia mater) are the protective membranes surrounding the CNS.",
    subtopic: "CNS"
  },
  {
    question: "Cerebrospinal fluid functions to:",
    options: [
      "A. Transmit nerve impulses",
      "B. Cushion and protect the CNS and supply nutrients",
      "C. Form the myelin sheath",
      "D. Store neurotransmitters"
    ],
    answer: "B",
    explanation: "Cerebrospinal fluid cushions the brain and spinal cord against shock and helps supply nutrients and remove waste.",
    subtopic: "CNS"
  },
  {
    question: "The two halves of the cerebrum are connected by the:",
    options: [
      "A. Corpus callosum",
      "B. Medulla oblongata",
      "C. Thalamus",
      "D. Pons"
    ],
    answer: "A",
    explanation: "The corpus callosum is a band of nerve fibres that links the left and right cerebral hemispheres.",
    subtopic: "CNS"
  },
  {
    question: "The part of the brain that helps regulate body temperature and water balance is the:",
    options: [
      "A. Hypothalamus",
      "B. Cerebellum",
      "C. Medulla oblongata",
      "D. Pons"
    ],
    answer: "A",
    explanation: "The hypothalamus controls homeostasis, including body temperature, water balance, hunger, and osmoregulation.",
    subtopic: "CNS"
  },
  {
    question: "In the spinal cord, grey matter is located:",
    options: [
      "A. Around the outside",
      "B. In the centre (H / butterfly shape)",
      "C. Only in the brain",
      "D. Within the meninges"
    ],
    answer: "B",
    explanation: "In the spinal cord, grey matter forms a butterfly-shaped region in the centre, surrounded by white matter.",
    subtopic: "CNS"
  },
  {
    question: "The pons serves mainly to:",
    options: [
      "A. Control blood pressure",
      "B. Relay impulses between the cerebrum and cerebellum",
      "C. Coordinate balance",
      "D. Produce cerebrospinal fluid"
    ],
    answer: "B",
    explanation: "The pons is a hindbrain region that relays impulses between the cerebrum and cerebellum and helps regulate breathing.",
    subtopic: "CNS"
  },
  {
    question: "A blow to the head causing temporary brain dysfunction is termed a:",
    options: [
      "A. Stroke",
      "B. Concussion",
      "C. Paralysis",
      "D. Epilepsy"
    ],
    answer: "B",
    explanation: "A concussion is a temporary loss of brain function caused by a blow or jolt to the head.",
    subtopic: "CNS"
  },
  {
    question: "The fluid-filled cavities within the brain are the:",
    options: [
      "A. Ventricles",
      "B. Synapses",
      "C. Nodes of Ranvier",
      "D. Sulci"
    ],
    answer: "A",
    explanation: "The brain contains ventricles that are filled with cerebrospinal fluid.",
    subtopic: "CNS"
  },
  {
    question: "Which of the following protects the brain?",
    options: [
      "A. Skull",
      "B. Meninges",
      "C. Cerebrospinal fluid",
      "D. All of the above"
    ],
    answer: "D",
    explanation: "The brain is protected by the skull, the meninges, and the cushioning cerebrospinal fluid.",
    subtopic: "CNS"
  },
  {
    question: "The medulla oblongata is located at the:",
    options: [
      "A. Lower part of the brain, continuous with the spinal cord",
      "B. Front of the cerebrum",
      "C. Centre of the cerebellum",
      "D. Side of the pons"
    ],
    answer: "A",
    explanation: "The medulla oblongata is the lowest part of the brainstem, joining the brain to the spinal cord.",
    subtopic: "CNS"
  },
  // ----- PNS -----
  {
    question: "Nerves that arise from the brain are called:",
    options: [
      "A. Cranial nerves",
      "B. Spinal nerves",
      "C. Autonomic nerves",
      "D. Somatic nerves"
    ],
    answer: "A",
    explanation: "Cranial nerves emerge directly from the brain (mostly the brainstem) and supply the head and neck.",
    subtopic: "PNS"
  },
  {
    question: "Spinal nerves emerge from the:",
    options: [
      "A. Brain",
      "B. Spinal cord",
      "C. Cerebellum",
      "D. Hypothalamus"
    ],
    answer: "B",
    explanation: "Spinal nerves arise from the spinal cord and pass out between the vertebrae.",
    subtopic: "PNS"
  },
  {
    question: "Sensory (afferent) neurons carry nerve impulses:",
    options: [
      "A. From the CNS to effectors",
      "B. From receptors to the CNS",
      "C. Within the brain only",
      "D. From motor to sensory neurons"
    ],
    answer: "B",
    explanation: "Sensory neurons (afferent) conduct impulses from receptors towards the central nervous system.",
    subtopic: "PNS"
  },
  {
    question: "Motor (efferent) neurons conduct impulses:",
    options: [
      "A. From receptors to the CNS",
      "B. Between sensory neurons",
      "C. From the CNS to effectors",
      "D. Only across synapses"
    ],
    answer: "C",
    explanation: "Motor neurons (efferent) carry impulses away from the CNS to effectors such as muscles and glands.",
    subtopic: "PNS"
  },
  {
    question: "The somatic nervous system controls:",
    options: [
      "A. Heart and gut",
      "B. Involuntary glands",
      "C. Voluntary skeletal muscles",
      "D. Pupil dilation"
    ],
    answer: "C",
    explanation: "The somatic nervous system governs voluntary control of skeletal (striated) muscles.",
    subtopic: "PNS"
  },
  {
    question: "The autonomic nervous system controls:",
    options: [
      "A. Voluntary muscles",
      "B. Involuntary activities of internal organs",
      "C. Conscious thought",
      "D. Reflex arcs only"
    ],
    answer: "B",
    explanation: "The autonomic nervous system regulates involuntary functions of internal organs such as the heart and gut.",
    subtopic: "PNS"
  },
  {
    question: "The 'fight or flight' response is mediated by the:",
    options: [
      "A. Parasympathetic nervous system",
      "B. Sympathetic nervous system",
      "C. Somatic nervous system",
      "D. Sensory neurons"
    ],
    answer: "B",
    explanation: "The sympathetic nervous system prepares the body for activity: increased heart rate, dilated pupils, and redirected blood flow.",
    subtopic: "PNS"
  },
  {
    question: "The parasympathetic nervous system promotes:",
    options: [
      "A. Increased heart rate",
      "B. Rest and digest (conservation of energy)",
      "C. Pupil dilation",
      "D. Bronchodilation"
    ],
    answer: "B",
    explanation: "The parasympathetic division conserves energy, slowing the heart and stimulating digestion ('rest and digest').",
    subtopic: "PNS"
  },
  {
    question: "There are ___ pairs of cranial nerves in humans.",
    options: [
      "A. 10",
      "B. 12",
      "C. 31",
      "D. 24"
    ],
    answer: "B",
    explanation: "Humans have 12 pairs of cranial nerves.",
    subtopic: "PNS"
  },
  {
    question: "There are ___ pairs of spinal nerves in humans.",
    options: [
      "A. 12",
      "B. 24",
      "C. 31",
      "D. 36"
    ],
    answer: "C",
    explanation: "Humans have 31 pairs of spinal nerves.",
    subtopic: "PNS"
  },
  {
    question: "The peripheral nervous system consists of:",
    options: [
      "A. Brain and spinal cord",
      "B. All nerves outside the CNS (cranial and spinal nerves)",
      "C. Only the brain",
      "D. Only the spinal cord"
    ],
    answer: "B",
    explanation: "The PNS includes all the cranial and spinal nerves that lie outside the brain and spinal cord.",
    subtopic: "PNS"
  },
  {
    question: "In humans, the sympathetic ganglia are mostly located:",
    options: [
      "A. In the brain",
      "B. In the effector organs",
      "C. Close to the spinal cord (sympathetic chain)",
      "D. Only in the head"
    ],
    answer: "C",
    explanation: "Sympathetic ganglia form a chain alongside the spinal cord (the sympathetic trunk).",
    subtopic: "PNS"
  },
  {
    question: "The autonomic nervous system is divided into the sympathetic and the:",
    options: [
      "A. Somatic nervous system",
      "B. Parasympathetic nervous system",
      "C. Central nervous system",
      "D. Sensory nervous system"
    ],
    answer: "B",
    explanation: "The autonomic nervous system has two divisions: sympathetic and parasympathetic, which often have opposing effects.",
    subtopic: "PNS"
  },
  {
    question: "The term 'afferent' refers to neurons that are:",
    options: [
      "A. Motor",
      "B. Sensory",
      "C. Connecting",
      "D. Efferent"
    ],
    answer: "B",
    explanation: "Afferent neurons are sensory neurons that carry information towards the CNS.",
    subtopic: "PNS"
  },
  {
    question: "The term 'efferent' refers to neurons that are:",
    options: [
      "A. Sensory",
      "B. Motor",
      "C. Relay",
      "D. Receptor"
    ],
    answer: "B",
    explanation: "Efferent neurons are motor neurons that carry impulses away from the CNS to effectors.",
    subtopic: "PNS"
  },
  {
    question: "Voluntary actions are generally controlled by the:",
    options: [
      "A. Autonomic nervous system",
      "B. Sympathetic nervous system",
      "C. Somatic nervous system",
      "D. Parasympathetic nervous system"
    ],
    answer: "C",
    explanation: "The somatic nervous system controls voluntary actions involving skeletal muscles.",
    subtopic: "PNS"
  },
  {
    question: "Increased heart rate and dilated pupils during exercise result mainly from the:",
    options: [
      "A. Parasympathetic nervous system",
      "B. Sympathetic nervous system",
      "C. Somatic nervous system",
      "D. Sensory neurons"
    ],
    answer: "B",
    explanation: "Sympathetic activation produces the 'fight or flight' changes seen during exercise.",
    subtopic: "PNS"
  },
  {
    question: "The vagus nerve is a cranial nerve that mainly carries:",
    options: [
      "A. Motor fibres to skeletal muscle",
      "B. Sensory fibres from the skin only",
      "C. Parasympathetic fibres to the heart and gut",
      "D. Sympathetic fibres"
    ],
    answer: "C",
    explanation: "The vagus (10th cranial) nerve carries parasympathetic fibres that slow the heart and stimulate digestion.",
    subtopic: "PNS"
  },
  {
    question: "The somatic nervous system is under:",
    options: [
      "A. Involuntary control",
      "B. Conscious / voluntary control",
      "C. Autonomic control only",
      "D. Reflex control only"
    ],
    answer: "B",
    explanation: "The somatic nervous system is normally under conscious, voluntary control of skeletal muscles.",
    subtopic: "PNS"
  },
  // ----- reflex arc / reflex vs voluntary / conditioned reflex -----
  {
    question: "A typical motor neuron consists of a cell body, dendrite(s) and:",
    options: [
      "A. Synapse",
      "B. Axon",
      "C. Myelin only",
      "D. Receptor"
    ],
    answer: "B",
    explanation: "A neuron has a cell body, dendrites that receive impulses, and a long axon that conducts them away.",
    subtopic: "reflex arc / reflex vs voluntary / conditioned reflex"
  },
  {
    question: "The myelin sheath around an axon is formed by:",
    options: [
      "A. Nodes of Ranvier",
      "B. Schwann cells",
      "C. Dendrites",
      "D. Cell bodies"
    ],
    answer: "B",
    explanation: "In the PNS, Schwann cells wrap around axons to form the insulating myelin sheath.",
    subtopic: "reflex arc / reflex vs voluntary / conditioned reflex"
  },
  {
    question: "The gaps in the myelin sheath along an axon are called:",
    options: [
      "A. Synapses",
      "B. Nodes of Ranvier",
      "C. Dendrites",
      "D. Axons"
    ],
    answer: "B",
    explanation: "Nodes of Ranvier are the unmyelinated gaps between Schwann cells where impulses are regenerated.",
    subtopic: "reflex arc / reflex vs voluntary / conditioned reflex"
  },
  {
    question: "A synapse is a:",
    options: [
      "A. Type of neuron",
      "B. Junction between two neurons",
      "C. Part of the skull",
      "D. Fluid-filled cavity"
    ],
    answer: "B",
    explanation: "A synapse is the small gap/junction across which an impulse passes from one neuron to the next.",
    subtopic: "reflex arc / reflex vs voluntary / conditioned reflex"
  },
  {
    question: "In a reflex arc, the correct pathway is:",
    options: [
      "A. Receptor → motor → relay → sensory → effector",
      "B. Receptor → sensory → relay → motor → effector",
      "C. Effector → sensory → relay → motor → receptor",
      "D. Sensory → receptor → motor → relay → effector"
    ],
    answer: "B",
    explanation: "The reflex arc runs: receptor, sensory neuron, relay neuron, motor neuron, then effector.",
    subtopic: "reflex arc / reflex vs voluntary / conditioned reflex"
  },
  {
    question: "Within a single neuron, the nerve impulse travels in the direction:",
    options: [
      "A. Dendrite → cell body → axon",
      "B. Axon → cell body → dendrite",
      "C. Cell body → dendrite → axon",
      "D. Axon → dendrite → cell body"
    ],
    answer: "A",
    explanation: "Impulses are received by dendrites, pass through the cell body, and travel down the axon to the terminals.",
    subtopic: "reflex arc / reflex vs voluntary / conditioned reflex"
  },
  {
    question: "The relay (intermediate) neuron in a reflex arc is usually located in the:",
    options: [
      "A. Receptor",
      "B. Effector",
      "C. Central nervous system (spinal cord/brain)",
      "D. Peripheral nerve ending"
    ],
    answer: "C",
    explanation: "Relay neurons lie within the CNS (spinal cord or brain) and connect sensory and motor neurons.",
    subtopic: "reflex arc / reflex vs voluntary / conditioned reflex"
  },
  {
    question: "Reflex actions are best described as:",
    options: [
      "A. Rapid, automatic and involuntary",
      "B. Slow and voluntary",
      "C. Always learned",
      "D. Controlled by the cerebrum only"
    ],
    answer: "A",
    explanation: "Reflexes are quick, automatic, involuntary responses that protect the body and require no conscious thought.",
    subtopic: "reflex arc / reflex vs voluntary / conditioned reflex"
  },
  {
    question: "A conditioned reflex differs from a simple reflex because it is:",
    options: [
      "A. Learned through experience",
      "B. Inherited",
      "C. Always spinal",
      "D. Unconscious from birth"
    ],
    answer: "A",
    explanation: "A conditioned reflex is acquired by learning and association, unlike an innate simple reflex.",
    subtopic: "reflex arc / reflex vs voluntary / conditioned reflex"
  },
  {
    question: "Pavlov's experiments on dogs demonstrated the:",
    options: [
      "A. Stretch reflex",
      "B. Conditioned reflex",
      "C. Knee-jerk reflex",
      "D. Spinal reflex"
    ],
    answer: "B",
    explanation: "Pavlov showed dogs could learn to salivate to a bell, establishing the conditioned reflex.",
    subtopic: "reflex arc / reflex vs voluntary / conditioned reflex"
  },
  {
    question: "At a synapse, the nerve impulse is transmitted across the gap by:",
    options: [
      "A. Chemical neurotransmitters",
      "B. Electric current only",
      "C. Direct contact of axons",
      "D. The myelin sheath"
    ],
    answer: "A",
    explanation: "At a chemical synapse, neurotransmitters diffuse across the gap to trigger an impulse in the next neuron.",
    subtopic: "reflex arc / reflex vs voluntary / conditioned reflex"
  },
  {
    question: "The effectors in a reflex arc are usually:",
    options: [
      "A. Receptors",
      "B. Muscles or glands",
      "C. Sensory neurons",
      "D. The brain"
    ],
    answer: "B",
    explanation: "Effectors are muscles or glands that carry out the response at the end of the reflex arc.",
    subtopic: "reflex arc / reflex vs voluntary / conditioned reflex"
  },
  {
    question: "The knee-jerk (patellar) reflex is an example of a:",
    options: [
      "A. Conditioned reflex",
      "B. Spinal reflex",
      "C. Cranial reflex",
      "D. Voluntary action"
    ],
    answer: "B",
    explanation: "The knee-jerk reflex is a simple spinal reflex whose pathway passes through the spinal cord.",
    subtopic: "reflex arc / reflex vs voluntary / conditioned reflex"
  },
  {
    question: "The myelin sheath increases the speed of impulse conduction by:",
    options: [
      "A. Saltatory (jumping) conduction between nodes",
      "B. Blocking the impulse",
      "C. Storing neurotransmitters",
      "D. Reducing the axon diameter"
    ],
    answer: "A",
    explanation: "In myelinated fibres the impulse jumps between nodes of Ranvier, greatly increasing conduction speed.",
    subtopic: "reflex arc / reflex vs voluntary / conditioned reflex"
  },
  {
    question: "The cell body of a neuron contains the:",
    options: [
      "A. Nucleus",
      "B. Axon terminal",
      "C. Myelin sheath",
      "D. Synapse"
    ],
    answer: "A",
    explanation: "The cell body (soma) contains the nucleus and most organelles of the neuron.",
    subtopic: "reflex arc / reflex vs voluntary / conditioned reflex"
  }
];

module.exports = questions;
