// biology — Sense Organs (Sec C)
const questions = [
  {
    question: "Receptors are structures that respond to stimuli by generating?",
    options: [
      "A. Hormones",
      "B. Nerve impulses",
      "C. Enzymes",
      "D. Antibodies"
    ],
    answer: "B",
    explanation: "Receptors transform the energy of a stimulus into electrical nerve impulses sent to the brain.",
    subtopic: "Sense organs"
  },
  {
    question: "The transparent front part of the eye that refracts light is the?",
    options: [
      "A. Iris",
      "B. Cornea",
      "C. Retina",
      "D. Sclera"
    ],
    answer: "B",
    explanation: "The cornea is the clear outer covering that bends (refracts) incoming light into the eye.",
    subtopic: "Sense organs"
  },
  {
    question: "The coloured part of the eye that controls the size of the pupil is the?",
    options: [
      "A. Cornea",
      "B. Iris",
      "C. Lens",
      "D. Retina"
    ],
    answer: "B",
    explanation: "The iris is the pigmented muscular ring that adjusts pupil diameter to regulate light entry.",
    subtopic: "Sense organs"
  },
  {
    question: "The opening in the iris through which light enters the eye is the?",
    options: [
      "A. Lens",
      "B. Pupil",
      "C. Cornea",
      "D. Fovea"
    ],
    answer: "B",
    explanation: "The pupil is the central aperture of the iris through which light passes to the lens.",
    subtopic: "Sense organs"
  },
  {
    question: "The structure that focuses light onto the retina is the?",
    options: [
      "A. Cornea",
      "B. Lens",
      "C. Iris",
      "D. Sclera"
    ],
    answer: "B",
    explanation: "The flexible crystalline lens fine-focuses light onto the retina by changing its shape (accommodation).",
    subtopic: "Sense organs"
  },
  {
    question: "The light-sensitive layer at the back of the eye is the?",
    options: [
      "A. Cornea",
      "B. Retina",
      "C. Iris",
      "D. Conjunctiva"
    ],
    answer: "B",
    explanation: "The retina contains photoreceptor cells (rods and cones) that detect light and colour.",
    subtopic: "Sense organs"
  },
  {
    question: "The nerve that carries impulses from the eye to the brain is the?",
    options: [
      "A. Auditory nerve",
      "B. Optic nerve",
      "C. Olfactory nerve",
      "D. Vagus nerve"
    ],
    answer: "B",
    explanation: "The optic nerve transmits visual information from the retina to the brain.",
    subtopic: "Sense organs"
  },
  {
    question: "The point on the retina where the optic nerve leaves and where there are no receptor cells is the?",
    options: [
      "A. Fovea",
      "B. Blind spot",
      "C. Macula",
      "D. Lens"
    ],
    answer: "B",
    explanation: "At the blind spot (optic disc) there are no rods or cones, so it cannot detect light.",
    subtopic: "Sense organs"
  },
  {
    question: "The region of the retina with the greatest visual sharpness is the?",
    options: [
      "A. Blind spot",
      "B. Fovea",
      "C. Optic disc",
      "D. Sclera"
    ],
    answer: "B",
    explanation: "The fovea (in the macula) is densely packed with cones, giving the sharpest detailed vision.",
    subtopic: "Sense organs"
  },
  {
    question: "Photoreceptor cells sensitive to dim light are the?",
    options: [
      "A. Cones",
      "B. Rods",
      "C. Ganglion cells",
      "D. Bipolar cells"
    ],
    answer: "B",
    explanation: "Rods function in low light (scotopic vision) but do not detect colour.",
    subtopic: "Sense organs"
  },
  {
    question: "Photoreceptor cells responsible for colour vision and bright light are the?",
    options: [
      "A. Rods",
      "B. Cones",
      "C. Pigment cells",
      "D. Fibres"
    ],
    answer: "B",
    explanation: "Cones operate in bright light and provide colour vision; three types respond to different wavelengths.",
    subtopic: "Sense organs"
  },
  {
    question: "The ability of the eye to focus on near and distant objects is called?",
    options: [
      "A. Reflection",
      "B. Accommodation",
      "C. Refraction",
      "D. Adaptation"
    ],
    answer: "B",
    explanation: "Accommodation is the change in lens shape (thicker for near, thinner for far) to keep images focused.",
    subtopic: "Sense organs"
  },
  {
    question: "When viewing a near object, the ciliary muscle?",
    options: [
      "A. Relaxes and the lens flattens",
      "B. Contracts and the lens becomes rounder",
      "C. Has no effect",
      "D. Dilates the pupil only"
    ],
    answer: "B",
    explanation: "For near vision the ciliary muscle contracts, slackening the suspensory ligaments so the elastic lens becomes more convex.",
    subtopic: "Sense organs"
  },
  {
    question: "Short-sight (myopia) is a defect in which the image forms?",
    options: [
      "A. Behind the retina",
      "B. In front of the retina",
      "C. On the blind spot",
      "D. At the fovea only"
    ],
    answer: "B",
    explanation: "In myopia the eyeball is too long or the lens too strong, so distant objects focus in front of the retina.",
    subtopic: "Sense organs"
  },
  {
    question: "Short-sight is corrected by using a?",
    options: [
      "A. Convex lens",
      "B. Concave lens",
      "C. Plain glass",
      "D. Prism"
    ],
    answer: "B",
    explanation: "A concave (diverging) lens spreads light rays before they enter the eye so the image is pushed back onto the retina.",
    subtopic: "Sense organs"
  },
  {
    question: "Long-sight (hypermetropia) is corrected using a?",
    options: [
      "A. Concave lens",
      "B. Convex lens",
      "C. Coloured filter",
      "D. Bifocal only"
    ],
    answer: "B",
    explanation: "A convex (converging) lens helps focus near objects by adding refractive power so the image falls on the retina.",
    subtopic: "Sense organs"
  },
  {
    question: "Astigmatism is caused by?",
    options: [
      "A. A spherical cornea or lens",
      "B. An irregularly curved cornea or lens",
      "C. A detached retina",
      "D. Colour blindness"
    ],
    answer: "B",
    explanation: "Astigmatism results from an uneven curvature of the cornea or lens, producing blurred vision at all distances.",
    subtopic: "Sense organs"
  },
  {
    question: "The tough white outer protective layer of the eye is the?",
    options: [
      "A. Retina",
      "B. Sclera",
      "C. Iris",
      "D. Choroid"
    ],
    answer: "B",
    explanation: "The sclera is the opaque white outer coat that maintains the eye's shape and protects it.",
    subtopic: "Sense organs"
  },
  {
    question: "The middle pigmented layer of the eye that absorbs stray light is the?",
    options: [
      "A. Sclera",
      "B. Choroid",
      "C. Cornea",
      "D. Lens"
    ],
    answer: "B",
    explanation: "The choroid is the vascular, pigmented layer behind the retina that prevents internal reflection of light.",
    subtopic: "Sense organs"
  },
  {
    question: "The fluid filling the space between the cornea and the lens is the?",
    options: [
      "A. Vitreous humour",
      "B. Aqueous humour",
      "C. Plasma",
      "D. Synovial fluid"
    ],
    answer: "B",
    explanation: "The aqueous humour is the watery fluid in the front chamber that nourishes the cornea and lens.",
    subtopic: "Sense organs"
  },
  {
    question: "The jelly-like substance filling the main eyeball behind the lens is the?",
    options: [
      "A. Aqueous humour",
      "B. Vitreous humour",
      "C. Cytoplasm",
      "D. Mucus"
    ],
    answer: "B",
    explanation: "The vitreous humour is the transparent gel that supports the retina and gives the eye its shape.",
    subtopic: "Sense organs"
  },
  {
    question: "Colour blindness is usually due to the absence or defect of?",
    options: [
      "A. Rod cells",
      "B. Cone cells",
      "C. Bipolar cells",
      "D. Ganglion cells"
    ],
    answer: "B",
    explanation: "Most colour blindness arises from faulty or missing cone pigments, especially red-green cones.",
    subtopic: "Sense organs"
  },
  {
    question: "The part of the ear that collects sound waves is the?",
    options: [
      "A. Eardrum",
      "B. Pinna",
      "C. Cochlea",
      "D. Ossicles"
    ],
    answer: "B",
    explanation: "The pinna (external ear) funnels sound waves into the auditory canal.",
    subtopic: "Sense organs"
  },
  {
    question: "The membrane that vibrates when sound waves strike it is the?",
    options: [
      "A. Tympanic membrane",
      "B. Oval window",
      "C. Retina",
      "D. Iris"
    ],
    answer: "A",
    explanation: "The tympanic membrane (eardrum) vibrates in response to sound and passes vibrations to the ossicles.",
    subtopic: "Sense organs"
  },
  {
    question: "The three small bones of the middle ear are called the?",
    options: [
      "A. Ossicles",
      "B. Cochlea",
      "C. Semicircular canals",
      "D. Auditory nerve"
    ],
    answer: "A",
    explanation: "The malleus, incus and stapes (ossicles) transmit and amplify vibrations from the eardrum to the inner ear.",
    subtopic: "Sense organs"
  },
  {
    question: "The spiral structure in the inner ear that contains the organ of hearing is the?",
    options: [
      "A. Semicircular canal",
      "B. Cochlea",
      "C. Eustachian tube",
      "D. Pinna"
    ],
    answer: "B",
    explanation: "The cochlea houses the basilar membrane and hair cells that convert sound vibrations into nerve impulses.",
    subtopic: "Sense organs"
  },
  {
    question: "The nerve that carries hearing impulses to the brain is the?",
    options: [
      "A. Optic nerve",
      "B. Auditory nerve",
      "C. Olfactory nerve",
      "D. Trigeminal nerve"
    ],
    answer: "B",
    explanation: "The auditory (vestibulocochlear) nerve transmits sound and balance information from the inner ear to the brain.",
    subtopic: "Sense organs"
  },
  {
    question: "The structures of the inner ear concerned with balance are the?",
    options: [
      "A. Cochlea",
      "B. Semicircular canals",
      "C. Eardrum",
      "D. Ossicles"
    ],
    answer: "B",
    explanation: "The semicircular canals and vestibule detect head movement and position, maintaining balance (equilibrium).",
    subtopic: "Sense organs"
  },
  {
    question: "The tube connecting the middle ear to the throat, which equalises pressure, is the?",
    options: [
      "A. Eustachian tube",
      "B. Cochlea",
      "C. Oval window",
      "D. Auditory canal"
    ],
    answer: "A",
    explanation: "The Eustachian (auditory) tube links the middle ear to the pharynx and balances air pressure on the eardrum.",
    subtopic: "Sense organs"
  },
  {
    question: "In the cochlea, sound vibrations are detected by?",
    options: [
      "A. Rod cells",
      "B. Hair cells",
      "C. Cone cells",
      "D. Taste buds"
    ],
    answer: "B",
    explanation: "Hair cells on the basilar membrane bend in response to fluid waves and generate auditory nerve impulses.",
    subtopic: "Sense organs"
  },
  {
    question: "The taste buds are mainly located on the?",
    options: [
      "A. Teeth",
      "B. Tongue papillae",
      "C. Soft palate only",
      "D. Lips"
    ],
    answer: "B",
    explanation: "Taste receptors (taste buds) sit in the papillae on the tongue surface and detect dissolved chemicals.",
    subtopic: "Sense organs"
  },
  {
    question: "The basic taste sensed by the tongue does NOT include?",
    options: [
      "A. Sweet",
      "B. Sour",
      "C. Red",
      "D. Bitter"
    ],
    answer: "C",
    explanation: "The primary tastes are sweet, sour, salty, bitter and umami; 'red' is a colour, not a taste.",
    subtopic: "Sense organs"
  },
  {
    question: "The sense of smell is detected by receptors in the?",
    options: [
      "A. Taste buds",
      "B. Olfactory epithelium",
      "C. Retina",
      "D. Cochlea"
    ],
    answer: "B",
    explanation: "Olfactory receptor cells in the nasal epithelium detect odour molecules and send impulses via the olfactory nerve.",
    subtopic: "Sense organs"
  },
  {
    question: "Receptors for touch, pressure, temperature and pain are located mainly in the?",
    options: [
      "A. Liver",
      "B. Skin",
      "C. Kidney",
      "D. Lens"
    ],
    answer: "B",
    explanation: "The skin contains various sensory receptors for touch, pressure, heat, cold and pain.",
    subtopic: "Sense organs"
  },
  {
    question: "The skin receptor specialised for detecting light pressure/touch is the?",
    options: [
      "A. Pacinian corpuscle",
      "B. Meissner's corpuscle",
      "C. Rod cell",
      "D. Olfactory cell"
    ],
    answer: "B",
    explanation: "Meissner's corpuscles in the dermis respond to light touch; Pacinian corpuscles detect deep pressure/vibration.",
    subtopic: "Sense organs"
  },
  {
    question: "Deep pressure and vibration are detected by?",
    options: [
      "A. Meissner's corpuscle",
      "B. Pacinian corpuscle",
      "C. Cone cell",
      "D. Hair cell of cochlea"
    ],
    answer: "B",
    explanation: "Pacinian corpuscles lie deeper in the skin and sense strong pressure and vibration.",
    subtopic: "Sense organs"
  },
  {
    question: "Pain receptors in the skin are called?",
    options: [
      "A. Photoreceptors",
      "B. Nociceptors",
      "C. Chemoreceptors",
      "D. Thermoreceptors"
    ],
    answer: "B",
    explanation: "Nociceptors respond to potentially damaging stimuli and produce the sensation of pain.",
    subtopic: "Sense organs"
  },
  {
    question: "Temperature changes are detected by skin receptors known as?",
    options: [
      "A. Thermoreceptors",
      "B. Photoreceptors",
      "C. Baroreceptors",
      "D. Mechanoreceptors"
    ],
    answer: "A",
    explanation: "Separate warm and cold thermoreceptors in the skin monitor temperature changes.",
    subtopic: "Sense organs"
  },
  {
    question: "The lens is held in position by the?",
    options: [
      "A. Suspensory ligaments",
      "B. Optic nerve",
      "C. Iris muscle only",
      "D. Retina"
    ],
    answer: "A",
    explanation: "Suspensory ligaments (zonules) attach the lens to the ciliary body and hold it in place.",
    subtopic: "Sense organs"
  },
  {
    question: "When light is bright, the pupil becomes?",
    options: [
      "A. Larger",
      "B. Smaller",
      "C. Colourless",
      "D. Opaque"
    ],
    answer: "B",
    explanation: "In bright light the iris sphincter contracts, constricting the pupil to limit light entry and protect the retina.",
    subtopic: "Sense organs"
  },
  {
    question: "When light is dim, the pupil becomes?",
    options: [
      "A. Smaller",
      "B. Larger",
      "C. Closed",
      "D. Hardened"
    ],
    answer: "B",
    explanation: "In dim light the pupil dilates (widens) to allow more light to reach the retina.",
    subtopic: "Sense organs"
  },
  {
    question: "The fluid in the inner ear that moves and stimulates hair cells is the?",
    options: [
      "A. Endolymph",
      "B. Aqueous humour",
      "C. Vitreous humour",
      "D. Lymph"
    ],
    answer: "A",
    explanation: "Endolymph in the cochlear ducts and semicircular canals moves past hair cells to trigger impulses.",
    subtopic: "Sense organs"
  },
  {
    question: "Which sense organ is involved in maintaining body posture and balance?",
    options: [
      "A. Eye",
      "B. Ear (vestibular apparatus)",
      "C. Tongue",
      "D. Nose"
    ],
    answer: "B",
    explanation: "The vestibular apparatus (semicircular canals and vestibule) of the inner ear monitors balance and posture.",
    subtopic: "Sense organs"
  },
  {
    question: "A person who cannot distinguish red from green most likely has a defect in?",
    options: [
      "A. Rods",
      "B. Red and green cones",
      "C. The cornea",
      "D. The eardrum"
    ],
    answer: "B",
    explanation: "Red-green colour blindness is due to missing or defective red and/or green cone pigments.",
    subtopic: "Sense organs"
  },
  {
    question: "The ossicle that is in direct contact with the oval window is the?",
    options: [
      "A. Malleus",
      "B. Stapes",
      "C. Incus",
      "D. Pinna"
    ],
    answer: "B",
    explanation: "The stapes (stirrup) presses on the oval window of the cochlea, transmitting vibrations to the inner ear.",
    subtopic: "Sense organs"
  },
  {
    question: "Hearing loss caused by damage to the cochlea or auditory nerve is called?",
    options: [
      "A. Conductive deafness",
      "B. Sensorineural deafness",
      "C. Myopia",
      "D. Astigmatism"
    ],
    answer: "B",
    explanation: "Sensorineural deafness results from damage to the inner ear (cochlea) or the auditory nerve, not the conducting path.",
    subtopic: "Sense organs"
  },
  {
    question: "Conductive deafness involves a problem in the?",
    options: [
      "A. Cochlea",
      "B. Auditory nerve",
      "C. Outer or middle ear",
      "D. Brain cortex"
    ],
    answer: "C",
    explanation: "Conductive hearing loss arises when sound cannot pass efficiently through the outer or middle ear to the inner ear.",
    subtopic: "Sense organs"
  },
  {
    question: "Receptors that detect chemicals in food and air are classified as?",
    options: [
      "A. Mechanoreceptors",
      "B. Chemoreceptors",
      "C. Photoreceptors",
      "D. Thermoreceptors"
    ],
    answer: "B",
    explanation: "Taste and smell receptors are chemoreceptors because they respond to chemical molecules.",
    subtopic: "Sense organs"
  },
  {
    question: "The part of the brain that interprets signals from the senses is the?",
    options: [
      "A. Cerebellum",
      "B. Cerebral cortex",
      "C. Medulla",
      "D. Spinal cord"
    ],
    answer: "B",
    explanation: "The cerebral cortex contains the sensory areas that interpret impulses from the sense organs.",
    subtopic: "Sense organs"
  },
  {
    question: "The sensory cells of the retina are stimulated by?",
    options: [
      "A. Sound waves",
      "B. Light energy",
      "C. Pressure",
      "D. Chemicals only"
    ],
    answer: "B",
    explanation: "Rod and cone photoreceptors are activated by light, which they convert into nerve impulses.",
    subtopic: "Sense organs"
  }
];

module.exports = questions;
