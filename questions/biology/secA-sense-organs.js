// biology — Sense Organs
const questions = [
  // ---------- EYE ----------
  {
    question: "Which part of the eye refracts light most strongly and is transparent at the front?",
    options: [
      "A. Cornea",
      "B. Iris",
      "C. Lens",
      "D. Sclera"
    ],
    answer: "A",
    explanation: "The cornea is the transparent front portion of the eye and provides most of the eye's refractive (light-bending) power.",
    subtopic: "eye"
  },
  {
    question: "The coloured part of the eye that controls the size of the pupil is the?",
    options: [
      "A. Cornea",
      "B. Iris",
      "C. Choroid",
      "D. Retina"
    ],
    answer: "B",
    explanation: "The iris is the pigmented muscular ring that contracts or relaxes to alter pupil size and regulate light entry.",
    subtopic: "eye"
  },
  {
    question: "The fluid that fills the space between the cornea and the lens is called the?",
    options: [
      "A. Vitreous humour",
      "B. Aqueous humour",
      "C. Lymph",
      "D. Synovial fluid"
    ],
    answer: "B",
    explanation: "The aqueous humour is the watery fluid in the anterior chamber between the cornea and the lens.",
    subtopic: "eye"
  },
  {
    question: "Which structure of the eye changes shape to focus light on the retina?",
    options: [
      "A. Cornea",
      "B. Pupil",
      "C. Lens",
      "D. Iris"
    ],
    answer: "C",
    explanation: "The elastic crystalline lens changes curvature (accommodation) to focus images of near and far objects onto the retina.",
    subtopic: "eye"
  },
  {
    question: "The tough, white outer protective layer of the eye is the?",
    options: [
      "A. Choroid",
      "B. Sclera",
      "C. Retina",
      "D. Conjunctiva"
    ],
    answer: "B",
    explanation: "The sclera is the opaque, white, fibrous outer coat that maintains the eye's shape and protects internal parts.",
    subtopic: "eye"
  },
  {
    question: "The layer of the eye richly supplied with blood vessels and pigment is the?",
    options: [
      "A. Sclera",
      "B. Cornea",
      "C. Choroid",
      "D. Conjunctiva"
    ],
    answer: "C",
    explanation: "The choroid is the vascular, pigmented middle layer that nourishes the retina and absorbs stray light.",
    subtopic: "eye"
  },
  {
    question: "Photoreceptor cells of the retina that function best in bright light and detect colour are?",
    options: [
      "A. Rods",
      "B. Cones",
      "C. Bipolar cells",
      "D. Ganglion cells"
    ],
    answer: "B",
    explanation: "Cones are cone-shaped photoreceptors concentrated in the fovea; they operate in bright light and mediate colour vision.",
    subtopic: "eye"
  },
  {
    question: "Photoreceptor cells that function well in dim light but do not detect colour are?",
    options: [
      "A. Cones",
      "B. Rods",
      "C. Ganglion cells",
      "D. Bipolar cells"
    ],
    answer: "B",
    explanation: "Rods are more sensitive to low light than cones but provide only monochrome (black-and-white) vision.",
    subtopic: "eye"
  },
  {
    question: "The region of sharpest vision on the retina, containing only cones, is the?",
    options: [
      "A. Blind spot",
      "B. Fovea (yellow spot)",
      "C. Optic disc",
      "D. Choroid"
    ],
    answer: "B",
    explanation: "The fovea (yellow spot) is the retina's point of highest visual acuity, densely packed with cones.",
    subtopic: "eye"
  },
  {
    question: "The point on the retina where the optic nerve leaves and where there are no receptor cells is the?",
    options: [
      "A. Fovea",
      "B. Blind spot (optic disc)",
      "C. Choroid",
      "D. Macula"
    ],
    answer: "B",
    explanation: "The optic disc (blind spot) lacks rods and cones, so an image focused there is not perceived.",
    subtopic: "eye"
  },
  {
    question: "During accommodation for NEAR objects, the ciliary muscles?",
    options: [
      "A. Relax and the lens becomes flat",
      "B. Contract and the lens becomes more rounded",
      "C. Relax and the pupil dilates",
      "D. Contract and the suspensory ligaments tighten"
    ],
    answer: "B",
    explanation: "To focus on near objects, the ciliary muscles contract, slackening the suspensory ligaments so the elastic lens becomes thicker and more rounded.",
    subtopic: "eye"
  },
  {
    question: "For viewing DISTANT objects, the suspensory ligaments are?",
    options: [
      "A. Slack and the lens is rounded",
      "B. Taut and the lens is flattened",
      "C. Torn",
      "D. Relaxed and the lens is rounded"
    ],
    answer: "B",
    explanation: "For distant vision the ciliary muscles relax, tightening the suspensory ligaments which pull the lens flat and thin.",
    subtopic: "eye"
  },
  {
    question: "The transparent membrane covering the front of the sclera and cornea is the?",
    options: [
      "A. Conjunctiva",
      "B. Choroid",
      "C. Iris",
      "D. Retina"
    ],
    answer: "A",
    explanation: "The conjunctiva is the thin transparent mucous membrane lining the inside of the eyelids and covering the sclera.",
    subtopic: "eye"
  },
  {
    question: "Short-sightedness (myopia) is corrected by a?",
    options: [
      "A. Convex lens",
      "B. Concave lens",
      "C. Cylindrical lens",
      "D. Bifocal lens"
    ],
    answer: "B",
    explanation: "Myopia is corrected with a diverging (concave) lens that spreads rays so the image falls on the retina.",
    subtopic: "eye"
  },
  {
    question: "Long-sightedness (hypermetropia) is corrected using a?",
    options: [
      "A. Concave lens",
      "B. Convex lens",
      "C. Plain glass",
      "D. Cylindrical lens"
    ],
    answer: "B",
    explanation: "Hypermetropia is corrected with a converging (convex) lens that adds focusing power so near images reach the retina.",
    subtopic: "eye"
  },
  {
    question: "Astigmatism results from an irregular curvature of the?",
    options: [
      "A. Retina",
      "B. Optic nerve",
      "C. Cornea or lens",
      "D. Iris"
    ],
    answer: "C",
    explanation: "Astigmatism is caused by an uneven curvature of the cornea or lens, producing a distorted image corrected by a cylindrical lens.",
    subtopic: "eye"
  },
  {
    question: "The ability to focus on objects at different distances by changing lens shape is called?",
    options: [
      "A. Reflex action",
      "B. Accommodation",
      "C. Adaptation",
      "D. Refraction"
    ],
    answer: "B",
    explanation: "Accommodation is the process by which the lens changes shape to keep images focused on the retina.",
    subtopic: "eye"
  },
  {
    question: "The nerve that carries visual impulses from the retina to the brain is the?",
    options: [
      "A. Auditory nerve",
      "B. Optic nerve",
      "C. Olfactory nerve",
      "D. Vestibular nerve"
    ],
    answer: "B",
    explanation: "The optic nerve transmits nerve impulses generated by the retina to the visual centres of the brain.",
    subtopic: "eye"
  },
  {
    question: "The jelly-like fluid that fills the main cavity of the eye behind the lens is the?",
    options: [
      "A. Aqueous humour",
      "B. Vitreous humour",
      "C. Plasma",
      "D. Tears"
    ],
    answer: "B",
    explanation: "The vitreous humour is the jelly-like substance filling the posterior chamber, helping maintain the eye's shape.",
    subtopic: "eye"
  },
  {
    question: "The opening through which light enters the eye is the?",
    options: [
      "A. Iris",
      "B. Pupil",
      "C. Cornea",
      "D. Lens"
    ],
    answer: "B",
    explanation: "The pupil is the central aperture of the iris through which light passes to the lens and retina.",
    subtopic: "eye"
  },
  {
    question: "The condition in which the lens of the eye becomes opaque, causing blurred vision, is?",
    options: [
      "A. Glaucoma",
      "B. Cataract",
      "C. Myopia",
      "D. Astigmatism"
    ],
    answer: "B",
    explanation: "A cataract is the clouding (opacity) of the lens, which can be treated by surgical lens replacement.",
    subtopic: "eye"
  },
  {
    question: "The pupil size is adjusted by muscles of the?",
    options: [
      "A. Ciliary muscles",
      "B. Iris",
      "C. Suspensory ligaments",
      "D. Cones"
    ],
    answer: "B",
    explanation: "Smooth muscles of the iris (circular and radial) adjust pupil diameter in response to light intensity.",
    subtopic: "eye"
  },
  {
    question: "The ability of the two eyes to produce a single three-dimensional image is called?",
    options: [
      "A. Accommodation",
      "B. Binocular vision",
      "C. Refraction",
      "D. Adaptation"
    ],
    answer: "B",
    explanation: "Binocular vision uses both eyes together to give depth perception and a single fused image.",
    subtopic: "eye"
  },
  {
    question: "Rods in the human retina are most densely concentrated?",
    options: [
      "A. In the fovea",
      "B. Around the periphery of the retina",
      "C. Only in the blind spot",
      "D. In the cornea"
    ],
    answer: "B",
    explanation: "Rods predominate at the retinal periphery, supporting peripheral and night vision rather than sharp central vision.",
    subtopic: "eye"
  },
  {
    question: "Which vitamin deficiency is most associated with poor night vision (night blindness)?",
    options: [
      "A. Vitamin C",
      "B. Vitamin A",
      "C. Vitamin D",
      "D. Vitamin K"
    ],
    answer: "B",
    explanation: "Vitamin A is needed to form rhodopsin (visual purple) in rods; its deficiency impairs night vision.",
    subtopic: "eye"
  },
  {
    question: "In the human eye, the image formed on the retina is?",
    options: [
      "A. Erect and real",
      "B. Inverted and real",
      "C. Erect and virtual",
      "D. Inverted and virtual"
    ],
    answer: "B",
    explanation: "The lens forms a real, inverted (upside-down) image on the retina; the brain reinterprets it as upright.",
    subtopic: "eye"
  },
  {
    question: "The bending of light as it passes from one medium to another in the eye is called?",
    options: [
      "A. Reflection",
      "B. Refraction",
      "C. Diffraction",
      "D. Dispersion"
    ],
    answer: "B",
    explanation: "Refraction is the bending of light rays as they pass through the cornea and lens of differing densities.",
    subtopic: "eye"
  },
  {
    question: "Tears secreted by the lacrimal glands help to?",
    options: [
      "A. Focus light on the retina",
      "B. Clean, lubricate and prevent infection of the eye",
      "C. Change pupil size",
      "D. Form the vitreous humour"
    ],
    answer: "B",
    explanation: "Tears wash the cornea, keep it moist, and contain lysozyme that kills bacteria.",
    subtopic: "eye"
  },
  {
    question: "Which cells in the retina connect photoreceptors to the optic nerve?",
    options: [
      "A. Cones only",
      "B. Bipolar and ganglion cells",
      "C. Rods only",
      "D. Scleral cells"
    ],
    answer: "B",
    explanation: "Impulses pass from rods/cones to bipolar cells, then to ganglion cells whose axons form the optic nerve.",
    subtopic: "eye"
  },
  {
    question: "When moving from bright light into a dark room, the pupil?",
    options: [
      "A. Constricts",
      "B. Dilates",
      "C. Stays the same",
      "D. Disappears"
    ],
    answer: "B",
    explanation: "In dim light the radial muscles of the iris contract, dilating the pupil to admit more light.",
    subtopic: "eye"
  },
  {
    question: "The light-sensitive layer lining the back of the eye is the?",
    options: [
      "A. Sclera",
      "B. Retina",
      "C. Choroid",
      "D. Conjunctiva"
    ],
    answer: "B",
    explanation: "The retina contains the photoreceptor rods and cones that detect light and begin visual processing.",
    subtopic: "eye"
  },
  {
    question: "Presbyopia, common in old age, is the loss of?",
    options: [
      "A. Colour vision",
      "B. Lens elasticity leading to difficulty focusing near objects",
      "C. Night vision only",
      "D. Peripheral vision"
    ],
    answer: "B",
    explanation: "With age the lens hardens and loses elasticity, reducing accommodation and near-focus ability (corrected with convex/bifocal lenses).",
    subtopic: "eye"
  },
  {
    question: "The suspensory ligaments of the eye connect the lens to the?",
    options: [
      "A. Iris",
      "B. Ciliary body",
      "C. Retina",
      "D. Optic nerve"
    ],
    answer: "B",
    explanation: "The suspensory (zonule) fibres attach the lens circumference to the ciliary body, transmitting its tension.",
    subtopic: "eye"
  },
  {
    question: "Which of the following is NOT a function of the conjunctiva?",
    options: [
      "A. Protecting the front of the eye",
      "B. Secreting mucus to moisten the eye",
      "C. Refracting light strongly",
      "D. Allowing blood vessels to nourish the sclera"
    ],
    answer: "C",
    explanation: "Refraction is mainly done by the cornea and lens; the conjunctiva is a protective/moistening membrane, not a major refracting surface.",
    subtopic: "eye"
  },
  // ---------- EAR ----------
  {
    question: "The outer flap of the ear that collects sound waves is the?",
    options: [
      "A. Tympanic membrane",
      "B. Pinna",
      "C. Cochlea",
      "D. Auditory canal"
    ],
    answer: "B",
    explanation: "The pinna (auricle) is the visible external part that funnels sound waves into the auditory canal.",
    subtopic: "ear"
  },
  {
    question: "Sound waves travel from the pinna through the auditory canal to strike the?",
    options: [
      "A. Cochlea",
      "B. Eardrum (tympanic membrane)",
      "C. Semicircular canals",
      "D. Ossicles"
    ],
    answer: "B",
    explanation: "The eardrum (tympanic membrane) vibrates when sound waves reach it via the auditory canal.",
    subtopic: "ear"
  },
  {
    question: "The three small bones of the middle ear, in the order sound passes through them, are?",
    options: [
      "A. Incus, malleus, stapes",
      "B. Malleus, incus, stapes",
      "C. Stapes, incus, malleus",
      "D. Malleus, stapes, incus"
    ],
    answer: "B",
    explanation: "The ossicles are the malleus (hammer), incus (anvil) and stapes (stirrup), transmitting vibrations to the oval window.",
    subtopic: "ear"
  },
  {
    question: "The stirrup-shaped ossicle that fits into the oval window of the cochlea is the?",
    options: [
      "A. Malleus",
      "B. Incus",
      "C. Stapes",
      "D. Pinna"
    ],
    answer: "C",
    explanation: "The stapes is the last ossicle; its footplate presses on the oval window to pass vibrations into the inner ear.",
    subtopic: "ear"
  },
  {
    question: "The spiral, fluid-filled structure of the inner ear where sound is converted to nerve impulses is the?",
    options: [
      "A. Semicircular canals",
      "B. Cochlea",
      "C. Eustachian tube",
      "D. Pinna"
    ],
    answer: "B",
    explanation: "The cochlea contains the organ of Corti with hair cells that transduce vibrations into auditory nerve impulses.",
    subtopic: "ear"
  },
  {
    question: "The sensory cells in the cochlea that detect sound vibrations are the?",
    options: [
      "A. Rods and cones",
      "B. Hair cells",
      "C. Bipolar cells",
      "D. Olfactory cells"
    ],
    answer: "B",
    explanation: "Cochlear hair cells bend in response to fluid waves and generate the nerve signals for hearing.",
    subtopic: "ear"
  },
  {
    question: "The Eustachian tube connects the middle ear to the?",
    options: [
      "A. Inner ear",
      "B. Throat (pharynx)",
      "C. Cochlea",
      "D. Pinna"
    ],
    answer: "B",
    explanation: "The Eustachian (auditory) tube equalises air pressure in the middle ear with the atmosphere via the pharynx.",
    subtopic: "ear"
  },
  {
    question: "The structures of the inner ear responsible for balance and equilibrium are the?",
    options: [
      "A. Cochlea only",
      "B. Semicircular canals and vestibule",
      "C. Ossicles",
      "D. Eustachian tube"
    ],
    answer: "B",
    explanation: "The semicircular canals and the vestibule (utricle/saccule) detect rotational and positional changes for balance.",
    subtopic: "ear"
  },
  {
    question: "The nerve that carries hearing and balance impulses to the brain is the?",
    options: [
      "A. Optic nerve",
      "B. Auditory (vestibulocochlear) nerve",
      "C. Olfactory nerve",
      "D. Trigeminal nerve"
    ],
    answer: "B",
    explanation: "The vestibulocochlear (auditory) nerve carries impulses from both the cochlea (hearing) and the balance organs.",
    subtopic: "ear"
  },
  {
    question: "The tympanic membrane is another name for the?",
    options: [
      "A. Oval window",
      "B. Eardrum",
      "C. Pinna",
      "D. Cochlea"
    ],
    answer: "B",
    explanation: "The tympanic membrane, or eardrum, separates the outer ear from the middle ear and vibrates with sound.",
    subtopic: "ear"
  },
  {
    question: "The function of the oval window is to?",
    options: [
      "A. Collect sound from the air",
      "B. Transfer vibrations from the stapes into the fluid of the cochlea",
      "C. Equalise pressure",
      "D. Detect head rotation"
    ],
    answer: "B",
    explanation: "The oval window is the membrane where stapes vibrations enter the cochlear fluid, coupling air-borne to fluid-borne sound.",
    subtopic: "ear"
  },
  {
    question: "Which part of the ear equalises pressure to prevent eardrum damage when altitude changes?",
    options: [
      "A. Cochlea",
      "B. Eustachian tube",
      "C. Semicircular canals",
      "D. Pinna"
    ],
    answer: "B",
    explanation: "The Eustachian tube opens to the throat to balance middle-ear pressure with outside air pressure.",
    subtopic: "ear"
  },
  {
    question: "The malleus is connected to the eardrum and is also called the?",
    options: [
      "A. Stirrup",
      "B. Hammer",
      "C. Anvil",
      "D. Pinna"
    ],
    answer: "B",
    explanation: "The malleus (hammer) is the first ossicle, attached to the tympanic membrane, passing vibrations to the incus.",
    subtopic: "ear"
  },
  {
    question: "Sound is detected as a result of vibrations being changed into nerve impulses in the?",
    options: [
      "A. Pinna",
      "B. Eardrum",
      "C. Cochlea",
      "D. Auditory canal"
    ],
    answer: "C",
    explanation: "Only the cochlea's hair cells perform transduction of mechanical vibration into electrical nerve impulses.",
    subtopic: "ear"
  },
  {
    question: "The incus is commonly known as the?",
    options: [
      "A. Hammer",
      "B. Anvil",
      "C. Stirrup",
      "D. Pinna"
    ],
    answer: "B",
    explanation: "The incus (anvil) is the middle ossicle, linking the malleus to the stapes.",
    subtopic: "ear"
  },
  {
    question: "The semicircular canals detect?",
    options: [
      "A. Sound pitch only",
      "B. Rotational movement of the head",
      "C. Air pressure",
      "D. Light intensity"
    ],
    answer: "B",
    explanation: "Fluid movement in the semicircular canals when the head rotates stimulates hair cells signalling angular acceleration.",
    subtopic: "ear"
  },
  {
    question: "The main function of the pinna is to?",
    options: [
      "A. Amplify sound in the inner ear",
      "B. Collect and direct sound waves into the ear canal",
      "C. Maintain balance",
      "D. Equalise pressure"
    ],
    answer: "B",
    explanation: "The pinna funnels sound waves toward the auditory canal, aiding sound localisation.",
    subtopic: "ear"
  },
  {
    question: "When the stapes vibrates the oval window, it sets up waves in the fluid of the?",
    options: [
      "A. Semicircular canals",
      "B. Cochlea",
      "C. Eustachian tube",
      "D. Auditory canal"
    ],
    answer: "B",
    explanation: "Oval-window motion displaces cochlear perilymph, stimulating the basilar membrane and hair cells.",
    subtopic: "ear"
  },
  {
    question: "Which of these is part of the MIDDLE ear?",
    options: [
      "A. Cochlea",
      "B. Pinna",
      "C. Ossicles",
      "D. Semicircular canals"
    ],
    answer: "C",
    explanation: "The middle ear contains the ossicles (malleus, incus, stapes); the pinna is outer and cochlea/canals are inner.",
    subtopic: "ear"
  },
  {
    question: "Deafness caused by damage to the cochlea or auditory nerve is termed?",
    options: [
      "A. Conductive deafness",
      "B. Sensorineural deafness",
      "C. Temporary deafness",
      "D. Pressure deafness"
    ],
    answer: "B",
    explanation: "Sensorineural deafness arises from inner-ear or nerve damage; conductive deafness involves the outer/middle ear.",
    subtopic: "ear"
  },
  {
    question: "Conductive hearing loss involves a problem in the?",
    options: [
      "A. Cochlea",
      "B. Auditory nerve",
      "C. Outer or middle ear",
      "D. Brain"
    ],
    answer: "C",
    explanation: "Conductive loss blocks sound transmission through the pinna, canal, eardrum or ossicles before the inner ear.",
    subtopic: "ear"
  },
  {
    question: "The auditory canal is lined with wax-producing glands and serves to?",
    options: [
      "A. Transmit nerve impulses",
      "B. Channel sound to the eardrum and protect it",
      "C. Maintain balance",
      "D. Equalise pressure"
    ],
    answer: "B",
    explanation: "The canal directs sound to the tympanic membrane and its wax traps dust and inhibits infection.",
    subtopic: "ear"
  },
  {
    question: "The vestibule of the inner ear contains the utricle and saccule which detect?",
    options: [
      "A. Sound frequency",
      "B. Linear acceleration and head position (gravity)",
      "C. Air pressure",
      "D. Light direction"
    ],
    answer: "B",
    explanation: "The utricle and saccule sense linear movement and static head position relative to gravity.",
    subtopic: "ear"
  },
  {
    question: "The chain of ossicles amplifies the force of vibrations because the eardrum area is larger than the?",
    options: [
      "A. Pinna",
      "B. Oval window",
      "C. Cochlea",
      "D. Auditory canal"
    ],
    answer: "B",
    explanation: "Force is concentrated from the large eardrum area onto the smaller oval window, boosting pressure in the inner ear.",
    subtopic: "ear"
  },
  {
    question: "Which structure is shared in function with both hearing and balance?",
    options: [
      "A. Pinna",
      "B. Auditory nerve",
      "C. Eardrum",
      "D. Auditory canal"
    ],
    answer: "B",
    explanation: "The vestibulocochlear nerve carries both auditory (cochlea) and vestibular (balance) impulses to the brain.",
    subtopic: "ear"
  },
  {
    question: "The fluid found inside the cochlea is the?",
    options: [
      "A. Endolymph and perilymph",
      "B. Aqueous humour",
      "C. Vitreous humour",
      "D. Blood plasma"
    ],
    answer: "A",
    explanation: "The cochlear ducts contain endolymph and perilymph, whose movements stimulate the hair cells.",
    subtopic: "ear"
  },
  {
    question: "The process by which the ear converts sound waves into nerve impulses is an example of?",
    options: [
      "A. Transpiration",
      "B. Transduction",
      "C. Translation",
      "D. Transmission"
    ],
    answer: "B",
    explanation: "Sensory transduction converts the mechanical energy of sound into electrical nerve signals.",
    subtopic: "ear"
  }
];

module.exports = questions;
