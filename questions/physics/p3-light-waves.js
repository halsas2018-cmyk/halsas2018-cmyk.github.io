// physics — Light Waves
const questions = [
  {
    question: "A body that gives out its own light is called a",
    options: [
      "A. luminous object",
      "B. non-luminous object",
      "C. opaque object",
      "D. transparent object"
    ],
    answer: "A",
    explanation: "Luminous objects (the sun, a bulb) emit light of their own; non-luminous ones only reflect light.",
    subtopic: "Sources of light"
  },
  {
    question: "The sun is an example of a",
    options: [
      "A. non-luminous source",
      "B. natural luminous source",
      "C. reflected source",
      "D. cold source"
    ],
    answer: "B",
    explanation: "The sun produces its own light by nuclear fusion, so it is a natural luminous source.",
    subtopic: "Sources of light"
  },
  {
    question: "A polished metal surface is a",
    options: [
      "A. luminous source",
      "B. non-luminous object that reflects light",
      "C. source of heat only",
      "D. transparent body"
    ],
    answer: "B",
    explanation: "The metal does not emit its own light; we see it by light reflected from its surface.",
    subtopic: "Sources of light"
  },
  {
    question: "Which of the following is a man-made source of light?",
    options: [
      "A. The moon",
      "B. An electric lamp",
      "C. A planet",
      "D. A star"
    ],
    answer: "B",
    explanation: "An electric lamp is a man-made (artificial) luminous source; the moon and planets only reflect sunlight.",
    subtopic: "Sources of light"
  },
  {
    question: "A fluorescent tube produces light mainly by",
    options: [
      "A. heating a filament",
      "B. exciting gas which emits light",
      "C. reflecting sunlight",
      "D. burning fuel"
    ],
    answer: "B",
    explanation: "In a fluorescent/neon tube an electric discharge excites gas atoms that then emit visible light.",
    subtopic: "Sources of light"
  },
  {
    question: "Light travels in a straight line in a uniform medium. This is called",
    options: [
      "A. reflection",
      "B. rectilinear propagation",
      "C. refraction",
      "D. dispersion"
    ],
    answer: "B",
    explanation: "Rectilinear propagation means light travels in straight lines in a homogeneous medium.",
    subtopic: "Rectilinear propagation"
  },
  {
    question: "The formation of a sharp shadow is evidence that light",
    options: [
      "A. bends round corners",
      "B. travels in straight lines",
      "C. is longitudinal",
      "D. has no speed"
    ],
    answer: "B",
    explanation: "Sharp shadows form because light travels in straight lines and cannot bend round opaque objects.",
    subtopic: "Rectilinear propagation"
  },
  {
    question: "A pin-hole camera forms an image because of",
    options: [
      "A. refraction",
      "B. rectilinear propagation of light",
      "C. dispersion",
      "D. polarisation"
    ],
    answer: "B",
    explanation: "Light from each point travels straight through the pin-hole, forming an inverted image.",
    subtopic: "Rectilinear propagation"
  },
  {
    question: "An eclipse of the sun occurs when the moon comes between the",
    options: [
      "A. earth and the sun",
      "B. sun and the stars",
      "C. earth and the moon",
      "D. sun and the planets"
    ],
    answer: "A",
    explanation: "A solar eclipse happens when the moon blocks sunlight reaching the earth (rectilinear propagation).",
    subtopic: "Rectilinear propagation"
  },
  {
    question: "The umbra of a shadow is the region of",
    options: [
      "A. partial darkness",
      "B. total darkness",
      "C. bright light",
      "D. colour"
    ],
    answer: "B",
    explanation: "The umbra is the fully dark central part of a shadow where all light is blocked.",
    subtopic: "Rectilinear propagation"
  },
  {
    question: "The penumbra of a shadow is the region of",
    options: [
      "A. total darkness",
      "B. partial darkness",
      "C. full brightness",
      "D. colour only"
    ],
    answer: "B",
    explanation: "The penumbra is the lighter outer region where only some of the light source is blocked.",
    subtopic: "Rectilinear propagation"
  },
  {
    question: "For a plane mirror, the angle of incidence equals the angle of",
    options: [
      "A. refraction",
      "B. reflection",
      "C. dispersion",
      "D. diffraction"
    ],
    answer: "B",
    explanation: "The law of reflection: angle of incidence = angle of reflection, both measured from the normal.",
    subtopic: "Reflection (plane)"
  },
  {
    question: "The image formed by a plane mirror is",
    options: [
      "A. real and inverted",
      "B. virtual and laterally inverted",
      "C. real and enlarged",
      "D. inverted and diminished"
    ],
    answer: "B",
    explanation: "A plane mirror gives a virtual, upright, same-size image that is laterally (left-right) inverted.",
    subtopic: "Reflection (plane)"
  },
  {
    question: "The image in a plane mirror is the same size as the object because the magnification is",
    options: [
      "A. 2",
      "B. 1",
      "C. 0.5",
      "D. 3"
    ],
    answer: "B",
    explanation: "A plane mirror produces an image of equal size, so linear magnification = 1.",
    subtopic: "Reflection (plane)"
  },
  {
    question: "In a plane mirror, the image distance behind the mirror equals the",
    options: [
      "A. object distance in front",
      "B. focal length",
      "C. radius of curvature",
      "D. twice the object height"
    ],
    answer: "A",
    explanation: "For a plane mirror the image is as far behind the mirror as the object is in front (v = u).",
    subtopic: "Reflection (plane)"
  },
  {
    question: "The normal to a plane mirror surface is",
    options: [
      "A. parallel to the surface",
      "B. perpendicular to the surface",
      "C. curved",
      "D. at 45° to it"
    ],
    answer: "B",
    explanation: "The normal is the line drawn perpendicular to the mirror surface at the point of incidence.",
    subtopic: "Reflection (plane)"
  },
  {
    question: "A periscope uses two plane mirrors arranged at",
    options: [
      "A. 0°",
      "B. 45°",
      "C. 90° to each other only",
      "D. 180°"
    ],
    answer: "B",
    explanation: "Two mirrors at 45° reflect light through 90° twice, letting you see over obstacles.",
    subtopic: "Reflection (plane)"
  },
  {
    question: "The image formed by a plane mirror cannot be caught on a screen because it is",
    options: [
      "A. real",
      "B. virtual",
      "C. enlarged",
      "D. inverted"
    ],
    answer: "B",
    explanation: "A virtual image is formed by diverging reflected rays that appear to come from behind the mirror.",
    subtopic: "Reflection (plane)"
  },
  {
    question: "A concave mirror is also called a",
    options: [
      "A. converging mirror",
      "B. diverging mirror",
      "C. plane mirror",
      "D. flat mirror"
    ],
    answer: "A",
    explanation: "A concave (curved-in) mirror converges parallel rays to its focus, so it is a converging mirror.",
    subtopic: "Reflection (curved)"
  },
  {
    question: "A convex mirror is also called a",
    options: [
      "A. converging mirror",
      "B. diverging mirror",
      "C. concave mirror",
      "D. plane mirror"
    ],
    answer: "B",
    explanation: "A convex (curved-out) mirror spreads parallel rays apart, so it is a diverging mirror.",
    subtopic: "Reflection (curved)"
  },
  {
    question: "Parallel rays incident on a concave mirror are reflected to the",
    options: [
      "A. centre of curvature",
      "B. principal focus",
      "C. pole",
      "D. vertex only"
    ],
    answer: "B",
    explanation: "A concave mirror brings parallel rays to a focus at the principal focus F (distance f from the pole).",
    subtopic: "Reflection (curved)"
  },
  {
    question: "For a concave mirror, the focal length f and radius of curvature R are related by",
    options: [
      "A. R = f",
      "B. R = 2f",
      "C. f = 2R",
      "D. R = f/2"
    ],
    answer: "B",
    explanation: "The centre of curvature is twice the focal length away: R = 2f.",
    subtopic: "Reflection (curved)"
  },
  {
    question: "The mirror formula is",
    options: [
      "A. 1/f = 1/u + 1/v",
      "B. f = u + v",
      "C. 1/f = 1/u − 1/v",
      "D. f = uv"
    ],
    answer: "A",
    explanation: "For spherical mirrors (using sign convention), 1/f = 1/u + 1/v, with f = R/2.",
    subtopic: "Reflection (curved)"
  },
  {
    question: "An object placed beyond C of a concave mirror forms a real image that is",
    options: [
      "A. enlarged and virtual",
      "B. diminished and inverted",
      "C. same size and virtual",
      "D. enlarged and upright"
    ],
    answer: "B",
    explanation: "Beyond C, a concave mirror gives a real, inverted, diminished image between F and C.",
    subtopic: "Reflection (curved)"
  },
  {
    question: "A concave mirror is used as a shaving mirror when the object is placed",
    options: [
      "A. beyond C",
      "B. between F and the pole",
      "C. at C",
      "D. at infinity"
    ],
    answer: "B",
    explanation: "Inside the focus, a concave mirror gives a virtual, upright, magnified image — good for a shaving mirror.",
    subtopic: "Reflection (curved)"
  },
  {
    question: "A convex mirror always forms an image that is",
    options: [
      "A. real and enlarged",
      "B. virtual, upright and diminished",
      "C. real and inverted",
      "D. magnified and inverted"
    ],
    answer: "B",
    explanation: "A convex mirror always gives a virtual, upright, diminished image behind the mirror.",
    subtopic: "Reflection (curved)"
  },
  {
    question: "Convex mirrors are used as driving mirrors because they give a",
    options: [
      "A. magnified image",
      "B. wide field of view",
      "C. real image",
      "D. inverted image"
    ],
    answer: "B",
    explanation: "The diverging nature of a convex mirror provides a wide field of view for seeing more of the road.",
    subtopic: "Reflection (curved)"
  },
  {
    question: "When light passes from air into a glass block, it bends",
    options: [
      "A. away from the normal",
      "B. towards the normal",
      "C. backwards",
      "D. not at all"
    ],
    answer: "B",
    explanation: "Glass is optically denser than air, so the ray refracts towards the normal on entry.",
    subtopic: "Refraction (plane)"
  },
  {
    question: "Snell's law is written as",
    options: [
      "A. n₁ sin i = n₂ sin r",
      "B. sin i = sin r",
      "C. n₁/i = n₂/r",
      "D. n₁ + n₂ = 1"
    ],
    answer: "A",
    explanation: "Snell's law: n₁ sin i = n₂ sin r, linking the angles to the refractive indices of the two media.",
    subtopic: "Refraction (plane)"
  },
  {
    question: "The refractive index n of a medium is given by",
    options: [
      "A. n = c/v",
      "B. n = v/c",
      "C. n = c + v",
      "D. n = v²"
    ],
    answer: "A",
    explanation: "Absolute refractive index n = c/v, the ratio of light speed in vacuum to that in the medium.",
    subtopic: "Refraction (plane)"
  },
  {
    question: "Light travels slowest in a medium with",
    options: [
      "A. the lowest refractive index",
      "B. the highest refractive index",
      "C. the lowest density",
      "D. no index"
    ],
    answer: "B",
    explanation: "Higher n means lower speed (v = c/n), so light is slowest in the highest-index medium.",
    subtopic: "Refraction (plane)"
  },
  {
    question: "A ray of light passing from air into water is refracted because",
    options: [
      "A. its frequency changes",
      "B. its speed changes",
      "C. its colour changes",
      "D. its amplitude changes"
    ],
    answer: "B",
    explanation: "Refraction happens because the speed of light changes at the boundary; frequency stays the same.",
    subtopic: "Refraction (plane)"
  },
  {
    question: "The critical angle is the angle of incidence in the denser medium for which the refracted angle is",
    options: [
      "A. 0°",
      "B. 90°",
      "C. 45°",
      "D. 180°"
    ],
    answer: "B",
    explanation: "At the critical angle the refracted ray grazes the boundary (r = 90°); beyond it, total internal reflection occurs.",
    subtopic: "Refraction (plane)"
  },
  {
    question: "Total internal reflection occurs when light travels from",
    options: [
      "A. a less dense to a denser medium",
      "B. a denser to a less dense medium beyond the critical angle",
      "C. air to glass",
      "D. vacuum to water"
    ],
    answer: "B",
    explanation: "TIR needs travel from denser to less dense medium at an angle greater than the critical angle.",
    subtopic: "Refraction (plane)"
  },
  {
    question: "Optical fibres work by the principle of",
    options: [
      "A. refraction only",
      "B. total internal reflection",
      "C. dispersion",
      "D. diffraction"
    ],
    answer: "B",
    explanation: "Light is guided along a fibre by repeated total internal reflection at the core–cladding boundary.",
    subtopic: "Refraction (plane)"
  },
  {
    question: "A rectangular glass block makes a ray of light emerge",
    options: [
      "A. deviated by 90°",
      "B. parallel to the incident ray (laterally displaced)",
      "C. absorbed",
      "D. reversed"
    ],
    answer: "B",
    explanation: "Opposite parallel faces shift the ray sideways but the emergent ray is parallel to the incident ray.",
    subtopic: "Refraction (plane)"
  },
  {
    question: "Apparent depth is less than real depth for an object in water because of",
    options: [
      "A. reflection",
      "B. refraction",
      "C. diffraction",
      "D. dispersion"
    ],
    answer: "B",
    explanation: "Refraction at the water surface makes submerged objects appear shallower than they really are.",
    subtopic: "Refraction (plane)"
  },
  {
    question: "A convex lens is also called a",
    options: [
      "A. diverging lens",
      "B. converging lens",
      "C. plane lens",
      "D. concave lens"
    ],
    answer: "B",
    explanation: "A convex (thicker centre) lens converges parallel rays to a real focus, so it is converging.",
    subtopic: "Lenses"
  },
  {
    question: "A concave lens is also called a",
    options: [
      "A. converging lens",
      "B. diverging lens",
      "C. convex lens",
      "D. plane lens"
    ],
    answer: "B",
    explanation: "A concave (thinner centre) lens spreads rays apart, so it is a diverging lens.",
    subtopic: "Lenses"
  },
  {
    question: "Parallel rays pass through a convex lens and meet at the",
    options: [
      "A. optical centre",
      "B. principal focus",
      "C. pole",
      "D. vertex"
    ],
    answer: "B",
    explanation: "A convex lens focuses parallel incident rays to its principal focus F at distance f.",
    subtopic: "Lenses"
  },
  {
    question: "The lens formula is",
    options: [
      "A. 1/f = 1/u + 1/v",
      "B. f = u + v",
      "C. 1/f = 1/u − 1/v",
      "D. f = uv"
    ],
    answer: "A",
    explanation: "The thin-lens formula is 1/f = 1/u + 1/v (with the usual sign convention).",
    subtopic: "Lenses"
  },
  {
    question: "Linear magnification of a lens is given by",
    options: [
      "A. m = v/u",
      "B. m = u/v",
      "C. m = f/u",
      "D. m = v/f"
    ],
    answer: "A",
    explanation: "Magnification m = image height/object height = v/u (using sign convention).",
    subtopic: "Lenses"
  },
  {
    question: "An object placed beyond 2F of a convex lens forms a real image that is",
    options: [
      "A. enlarged and virtual",
      "B. diminished and inverted",
      "C. same size and upright",
      "D. enlarged and upright"
    ],
    answer: "B",
    explanation: "Beyond 2F, a convex lens gives a real, inverted, diminished image between F and 2F.",
    subtopic: "Lenses"
  },
  {
    question: "A convex lens used as a magnifying glass has the object placed",
    options: [
      "A. beyond 2F",
      "B. within the focal length",
      "C. at 2F",
      "D. at infinity"
    ],
    answer: "B",
    explanation: "Inside the focal length a convex lens gives a virtual, upright, magnified image — a magnifier.",
    subtopic: "Lenses"
  },
  {
    question: "A concave lens always forms an image that is",
    options: [
      "A. real and enlarged",
      "B. virtual, upright and diminished",
      "C. real and inverted",
      "D. magnified and inverted"
    ],
    answer: "B",
    explanation: "A concave lens always produces a virtual, upright, diminished image on the same side as the object.",
    subtopic: "Lenses"
  },
  {
    question: "The power of a lens is given by P =",
    options: [
      "A. 1/f (with f in metres, P in dioptres)",
      "B. f",
      "C. f²",
      "D. 1/f²"
    ],
    answer: "A",
    explanation: "Lens power P (dioptres) = 1/f where f is in metres; a shorter focal length means more power.",
    subtopic: "Lenses"
  },
  {
    question: "A converging lens of focal length 0.5 m has power",
    options: [
      "A. 0.5 D",
      "B. 2 D",
      "C. 5 D",
      "D. 0.2 D"
    ],
    answer: "B",
    explanation: "P = 1/f = 1/0.5 = 2 dioptres.",
    subtopic: "Lenses"
  },
  {
    question: "The splitting of white light into colours by a prism is called",
    options: [
      "A. reflection",
      "B. dispersion",
      "C. diffraction",
      "D. interference"
    ],
    answer: "B",
    explanation: "Dispersion is the separation of white light into a spectrum because each colour refracts differently.",
    subtopic: "Dispersion"
  },
  {
    question: "In a glass prism, violet light is deviated more than red light because violet has a",
    options: [
      "A. lower refractive index",
      "B. higher refractive index",
      "C. lower speed only",
      "D. longer wavelength"
    ],
    answer: "B",
    explanation: "Glass has a higher refractive index for violet, so violet bends more and sits at the spectrum's edge.",
    subtopic: "Dispersion"
  },
  {
    question: "The colour of light with the shortest wavelength in the visible spectrum is",
    options: [
      "A. red",
      "B. violet",
      "C. green",
      "D. yellow"
    ],
    answer: "B",
    explanation: "Violet has the shortest wavelength (~400 nm) and highest frequency of visible light.",
    subtopic: "Dispersion"
  },
  {
    question: "The colour of light with the longest wavelength in the visible spectrum is",
    options: [
      "A. red",
      "B. violet",
      "C. blue",
      "D. indigo"
    ],
    answer: "A",
    explanation: "Red has the longest wavelength (~700 nm) and lowest frequency of visible light.",
    subtopic: "Dispersion"
  },
  {
    question: "A rainbow is formed mainly by",
    options: [
      "A. reflection and dispersion in raindrops",
      "B. only diffraction",
      "C. only polarisation",
      "D. absorption"
    ],
    answer: "A",
    explanation: "Raindrops refract, internally reflect and disperse sunlight into the coloured arc of a rainbow.",
    subtopic: "Dispersion"
  },
  {
    question: "White light is composed of",
    options: [
      "A. one colour only",
      "B. all the visible colours mixed",
      "C. only red and blue",
      "D. only green"
    ],
    answer: "B",
    explanation: "White light is a mixture of all visible wavelengths (colours) which a prism can separate.",
    subtopic: "Dispersion"
  },
  {
    question: "A converging lens of focal length 10 cm forms a real image 30 cm from the lens. If the object distance is 15 cm, the magnification is",
    options: [
      "A. 0.5",
      "B. 2",
      "C. 3",
      "D. 1.5"
    ],
    answer: "B",
    explanation: "m = v/u = 30/15 = 2, so the image is twice the object size (and inverted).",
    subtopic: "Lenses"
  },
  {
    question: "The speed of light in a vacuum is approximately",
    options: [
      "A. 3 × 10⁸ m/s",
      "B. 340 m/s",
      "C. 1500 m/s",
      "D. 3 × 10⁶ m/s"
    ],
    answer: "A",
    explanation: "In vacuum, c ≈ 3 × 10⁸ m/s; it is slower in any material medium.",
    subtopic: "Sources of light"
  }
];

module.exports = questions;
