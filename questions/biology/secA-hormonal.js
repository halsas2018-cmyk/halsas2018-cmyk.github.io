// biology — Hormonal Coordination
const questions = [
  // ---------------- animal hormones ----------------
  {
    question: "Which gland is often referred to as the 'master gland' because it controls the activity of other endocrine glands?",
    options: [
      "A. Thyroid gland",
      "B. Adrenal gland",
      "C. Pituitary gland",
      "D. Pancreas"
    ],
    answer: "C",
    explanation: "The pituitary gland secretes tropic hormones that regulate other endocrine glands such as the thyroid and adrenal glands.",
    subtopic: "animal hormones"
  },
  {
    question: "Insulin is secreted by which cells of the pancreas?",
    options: [
      "A. Alpha cells",
      "B. Beta cells",
      "C. Delta cells",
      "D. Acinar cells"
    ],
    answer: "B",
    explanation: "Beta cells of the islets of Langerhans in the pancreas produce insulin, which lowers blood glucose.",
    subtopic: "animal hormones"
  },
  {
    question: "The hormone glucagon acts to:",
    options: [
      "A. Decrease blood glucose by promoting glycogen storage",
      "B. Increase blood glucose by converting glycogen to glucose",
      "C. Lower blood pressure",
      "D. Stimulate milk production"
    ],
    answer: "B",
    explanation: "Glucagon is secreted by alpha cells and raises blood glucose by stimulating glycogenolysis in the liver.",
    subtopic: "animal hormones"
  },
  {
    question: "A person with type 1 diabetes mellitus typically:",
    options: [
      "A. Produces too much insulin",
      "B. Has insulin resistance in body cells",
      "C. Produces little or no insulin",
      "D. Is always obese"
    ],
    answer: "C",
    explanation: "Type 1 diabetes is an autoimmune condition where beta cells are destroyed, so little or no insulin is produced.",
    subtopic: "animal hormones"
  },
  {
    question: "Type 2 diabetes mellitus is mainly characterized by:",
    options: [
      "A. Absence of the pancreas",
      "B. Insulin resistance of body cells",
      "C. Excess thyroxine",
      "D. Overproduction of ADH"
    ],
    answer: "B",
    explanation: "Type 2 diabetes involves insulin resistance where cells fail to respond properly to insulin, often with relative deficiency.",
    subtopic: "animal hormones"
  },
  {
    question: "Thyroxine is secreted by the:",
    options: [
      "A. Adrenal cortex",
      "B. Thyroid gland",
      "C. Pituitary gland",
      "D. Parathyroid gland"
    ],
    answer: "B",
    explanation: "The thyroid gland secretes thyroxine (T4), which regulates metabolic rate and growth.",
    subtopic: "animal hormones"
  },
  {
    question: "Iodine deficiency in the diet most directly leads to:",
    options: [
      "A. Diabetes mellitus",
      "B. Goitre (enlarged thyroid)",
      "C. Diabetes insipidus",
      "D. Gigantism"
    ],
    answer: "B",
    explanation: "Iodine is needed to make thyroxine; deficiency causes the thyroid to enlarge, producing a goitre.",
    subtopic: "animal hormones"
  },
  {
    question: "Which hormone is secreted by the adrenal medulla in response to stress?",
    options: [
      "A. Thyroxine",
      "B. Adrenaline (epinephrine)",
      "C. Insulin",
      "D. Estrogen"
    ],
    answer: "B",
    explanation: "The adrenal medulla releases adrenaline during the 'fight or flight' response to prepare the body for action.",
    subtopic: "animal hormones"
  },
  {
    question: "Adrenaline causes which of the following effects?",
    options: [
      "A. Decreased heart rate",
      "B. Increased heart rate and dilated airways",
      "C. Increased digestion",
      "D. Decreased blood glucose"
    ],
    answer: "B",
    explanation: "Adrenaline increases heart rate, dilates airways, and raises blood glucose to prepare for rapid action.",
    subtopic: "animal hormones"
  },
  {
    question: "Growth hormone (somatotropin) is secreted by the:",
    options: [
      "A. Thyroid gland",
      "B. Anterior pituitary",
      "C. Posterior pituitary",
      "D. Adrenal cortex"
    ],
    answer: "B",
    explanation: "Growth hormone is released by the anterior pituitary and stimulates growth and cell reproduction.",
    subtopic: "animal hormones"
  },
  {
    question: "Excessive secretion of growth hormone in childhood leads to:",
    options: [
      "A. Dwarfism",
      "B. Gigantism",
      "C. Cretinism",
      "D. Goitre"
    ],
    answer: "B",
    explanation: "Overproduction of growth hormone before the epiphyseal plates close causes excessive growth, known as gigantism.",
    subtopic: "animal hormones"
  },
  {
    question: "Antidiuretic hormone (ADH) functions mainly to:",
    options: [
      "A. Increase urine production",
      "B. Decrease water reabsorption in the kidney",
      "C. Increase water reabsorption in the kidney collecting ducts",
      "D. Stimulate thirst only"
    ],
    answer: "C",
    explanation: "ADH, released by the posterior pituitary, makes collecting ducts more permeable to water, reducing urine volume.",
    subtopic: "animal hormones"
  },
  {
    question: "Diabetes insipidus results from a deficiency of:",
    options: [
      "A. Insulin",
      "B. ADH (antidiuretic hormone)",
      "C. Glucagon",
      "D. Thyroxine"
    ],
    answer: "B",
    explanation: "Lack of ADH causes the kidneys to excrete large volumes of dilute urine, a condition called diabetes insipidus.",
    subtopic: "animal hormones"
  },
  {
    question: "Oxytocin in females stimulates:",
    options: [
      "A. Egg maturation only",
      "B. Uterine contraction during labour and milk ejection",
      "C. Breakdown of glycogen",
      "D. Thyroid activity"
    ],
    answer: "B",
    explanation: "Oxytocin from the posterior pituitary triggers uterine contractions at birth and the milk-ejection reflex.",
    subtopic: "animal hormones"
  },
  {
    question: "The primary male sex hormone responsible for secondary sexual characteristics is:",
    options: [
      "A. Estrogen",
      "B. Progesterone",
      "C. Testosterone",
      "D. Oxytocin"
    ],
    answer: "C",
    explanation: "Testosterone, produced by the testes, drives male secondary sexual characteristics and spermatogenesis.",
    subtopic: "animal hormones"
  },
  {
    question: "Estrogen and progesterone are mainly secreted by the:",
    options: [
      "A. Adrenal gland",
      "B. Ovary",
      "C. Thyroid",
      "D. Pituitary"
    ],
    answer: "B",
    explanation: "The ovarian follicles and corpus luteum secrete estrogen and progesterone, regulating the menstrual cycle.",
    subtopic: "animal hormones"
  },
  {
    question: "Parathyroid hormone functions to:",
    options: [
      "A. Lower blood calcium",
      "B. Raise blood calcium by acting on bone and kidney",
      "C. Lower blood glucose",
      "D. Stimulate the thyroid"
    ],
    answer: "B",
    explanation: "Parathyroid hormone increases blood calcium by promoting bone resorption and renal calcium reabsorption.",
    subtopic: "animal hormones"
  },
  {
    question: "Most endocrine hormones are regulated by:",
    options: [
      "A. Positive feedback only",
      "B. Negative feedback mechanisms",
      "C. Random secretion",
      "D. Nervous impulses exclusively"
    ],
    answer: "B",
    explanation: "Negative feedback keeps hormone levels within a narrow range by reducing secretion when levels are adequate.",
    subtopic: "animal hormones"
  },
  {
    question: "Compared with hormonal coordination, nervous coordination is generally:",
    options: [
      "A. Slower and longer-lasting",
      "B. Faster and more localized",
      "C. Always chemical via the blood",
      "D. Slower and more general"
    ],
    answer: "B",
    explanation: "Nerve impulses act rapidly and on specific targets, whereas hormones act more slowly and more broadly.",
    subtopic: "animal hormones"
  },
  {
    question: "Hormones are chemical messengers that are transported primarily by the:",
    options: [
      "A. Lymphatic system",
      "B. Bloodstream",
      "C. Nerve fibres",
      "D. Alimentary canal"
    ],
    answer: "B",
    explanation: "Endocrine hormones are released into the blood and carried to target organs distant from their source.",
    subtopic: "animal hormones"
  },
  {
    question: "The endocrine system differs from exocrine glands in that endocrine glands:",
    options: [
      "A. Have ducts",
      "B. Lack ducts and secrete into the blood",
      "C. Secrete enzymes only",
      "D. Are found only in the skin"
    ],
    answer: "B",
    explanation: "Endocrine glands are ductless and release hormones directly into the bloodstream, unlike exocrine glands.",
    subtopic: "animal hormones"
  },
  {
    question: "Calcitonin, which lowers blood calcium, is secreted by the:",
    options: [
      "A. Parathyroid glands",
      "B. Thyroid gland",
      "C. Adrenal glands",
      "D. Pituitary gland"
    ],
    answer: "B",
    explanation: "Thyroid C-cells secrete calcitonin, which opposes parathyroid hormone by lowering blood calcium.",
    subtopic: "animal hormones"
  },
  {
    question: "Cretinism in infants is caused by deficiency of:",
    options: [
      "A. Insulin",
      "B. Thyroid hormone",
      "C. Adrenaline",
      "D. Testosterone"
    ],
    answer: "B",
    explanation: "Congenital thyroid hormone deficiency causes cretinism, marked by stunted growth and mental retardation.",
    subtopic: "animal hormones"
  },
  {
    question: "Which of these is a tropic hormone from the anterior pituitary?",
    options: [
      "A. Insulin",
      "B. Thyroid-stimulating hormone (TSH)",
      "C. Adrenaline",
      "D. Testosterone"
    ],
    answer: "B",
    explanation: "TSH is a tropic hormone that stimulates the thyroid gland to secrete thyroxine.",
    subtopic: "animal hormones"
  },
  {
    question: "Which gland secretes cortisol and aldosterone?",
    options: [
      "A. Adrenal cortex",
      "B. Adrenal medulla",
      "C. Thyroid",
      "D. Pituitary"
    ],
    answer: "A",
    explanation: "The adrenal cortex produces steroid hormones including cortisol (stress) and aldosterone (salt balance).",
    subtopic: "animal hormones"
  },
  {
    question: "Aldosterone mainly regulates the balance of:",
    options: [
      "A. Calcium and phosphate",
      "B. Sodium and potassium",
      "C. Glucose and glycogen",
      "D. Oxygen and carbon dioxide"
    ],
    answer: "B",
    explanation: "Aldosterone promotes sodium reabsorption and potassium excretion in the kidney distal tubule.",
    subtopic: "animal hormones"
  },
  {
    question: "Which hormone prepares the uterus lining for implantation?",
    options: [
      "A. Testosterone",
      "B. Progesterone",
      "C. Glucagon",
      "D. ADH"
    ],
    answer: "B",
    explanation: "Progesterone maintains the thickened uterine endometrium in preparation for and during pregnancy.",
    subtopic: "animal hormones"
  },
  {
    question: "The release of FSH (follicle-stimulating hormone) is controlled by the:",
    options: [
      "A. Thyroid gland",
      "B. Anterior pituitary under hypothalamic regulation",
      "C. Adrenal medulla",
      "D. Pancreas"
    ],
    answer: "B",
    explanation: "The anterior pituitary releases FSH in response to GnRH from the hypothalamus to stimulate gamete production.",
    subtopic: "animal hormones"
  },
  {
    question: "Hyperthyroidism (overactive thyroid) commonly causes:",
    options: [
      "A. Weight gain and lethargy",
      "B. Weight loss, heat intolerance and a fast pulse",
      "C. Reduced metabolic rate",
      "D. Cold intolerance"
    ],
    answer: "B",
    explanation: "Excess thyroxine speeds metabolism, producing weight loss, heat intolerance, and tachycardia.",
    subtopic: "animal hormones"
  },
  // ---------------- plant hormones ----------------
  {
    question: "Which plant hormone is mainly responsible for apical dominance?",
    options: [
      "A. Abscisic acid",
      "B. Auxin",
      "C. Ethylene",
      "D. Cytokinin"
    ],
    answer: "B",
    explanation: "Auxin produced at the apical bud inhibits lateral bud growth, producing apical dominance.",
    subtopic: "plant hormones"
  },
  {
    question: "Phototropism (growth towards light) in shoots is primarily caused by:",
    options: [
      "A. Gibberellin at the tip",
      "B. Uneven auxin distribution causing faster growth on the shaded side",
      "C. Ethylene accumulation",
      "D. Abscisic acid"
    ],
    answer: "B",
    explanation: "Auxin migrates to the shaded side, stimulating elongation there so the shoot bends toward light.",
    subtopic: "plant hormones"
  },
  {
    question: "Roots show positive geotropism, meaning they grow:",
    options: [
      "A. Towards light",
      "B. Away from gravity",
      "C. In response to gravity (downwards)",
      "D. Randomly"
    ],
    answer: "C",
    explanation: "Positive geotropism means roots grow downward in the direction of the gravitational pull.",
    subtopic: "plant hormones"
  },
  {
    question: "Gibberellins are best known for promoting:",
    options: [
      "A. Leaf fall",
      "B. Stem elongation and seed germination",
      "C. Fruit ripening",
      "D. Abscission"
    ],
    answer: "B",
    explanation: "Gibberellins stimulate stem elongation, seed germination, and sometimes flowering.",
    subtopic: "plant hormones"
  },
  {
    question: "Cytokinins primarily promote:",
    options: [
      "A. Cell division and delay of leaf senescence",
      "B. Apical dominance",
      "C. Seed dormancy",
      "D. Fruit drop"
    ],
    answer: "A",
    explanation: "Cytokinins stimulate cell division (in roots) and retard ageing (senescence) of leaves.",
    subtopic: "plant hormones"
  },
  {
    question: "Abscisic acid (ABA) is associated with:",
    options: [
      "A. Promoting growth",
      "B. Seed dormancy and stomatal closure",
      "C. Cell division",
      "D. Gravitropism"
    ],
    answer: "B",
    explanation: "ABA induces seed dormancy and causes stomata to close during water stress.",
    subtopic: "plant hormones"
  },
  {
    question: "The gaseous plant hormone that promotes fruit ripening is:",
    options: [
      "A. Auxin",
      "B. Gibberellin",
      "C. Ethylene",
      "D. Cytokinin"
    ],
    answer: "C",
    explanation: "Ethylene is a gaseous hormone that triggers ripening, leaf abscission, and senescence.",
    subtopic: "plant hormones"
  },
  {
    question: "Rooting powder used in plant propagation usually contains:",
    options: [
      "A. Ethylene",
      "B. Auxin (e.g. IAA or synthetic auxin)",
      "C. Abscisic acid",
      "D. Gibberellin"
    ],
    answer: "B",
    explanation: "Rooting powders supply auxin to stimulate root formation on cuttings.",
    subtopic: "plant hormones"
  },
  {
    question: "Selective weed killers often exploit:",
    options: [
      "A. High doses of abscisic acid",
      "B. Auxin-like compounds that disrupt broad-leaved weeds",
      "C. Ethylene gas",
      "D. Cytokinins only"
    ],
    answer: "B",
    explanation: "Synthetic auxins applied at high dose cause uncontrolled growth in broad-leaved weeds, killing them.",
    subtopic: "plant hormones"
  },
  {
    question: "Shoots exhibit positive phototropism and negative geotropism, which means they grow:",
    options: [
      "A. Downwards and away from light",
      "B. Towards light and upwards (away from gravity)",
      "C. Randomly",
      "D. Towards gravity"
    ],
    answer: "B",
    explanation: "Shoots grow toward light (positive phototropism) and upward against gravity (negative geotropism).",
    subtopic: "plant hormones"
  },
  {
    question: "The plant growth response to touch or contact is called:",
    options: [
      "A. Phototropism",
      "B. Thigmotropism",
      "C. Geotropism",
      "D. Hydrotropism"
    ],
    answer: "B",
    explanation: "Thigmotropism is growth in response to mechanical contact, seen in tendrils of climbing plants.",
    subtopic: "plant hormones"
  },
  {
    question: "Which hormone counteracts apical dominance by promoting lateral bud growth?",
    options: [
      "A. Auxin",
      "B. Cytokinin",
      "C. Abscisic acid",
      "D. Ethylene"
    ],
    answer: "B",
    explanation: "Cytokinins applied to lateral buds can overcome auxin-mediated apical dominance.",
    subtopic: "plant hormones"
  },
  {
    question: "During drought, the hormone that causes stomata to close is:",
    options: [
      "A. Auxin",
      "B. Gibberellin",
      "C. Abscisic acid",
      "D. Ethylene"
    ],
    answer: "C",
    explanation: "ABA accumulates under water stress and triggers stomatal closure to reduce transpiration.",
    subtopic: "plant hormones"
  },
  {
    question: "Germination of cereal seeds is stimulated when gibberellin triggers the aleurone layer to secrete:",
    options: [
      "A. Auxin",
      "B. Amylase (to break down starch)",
      "C. Ethylene",
      "D. Cellulose"
    ],
    answer: "B",
    explanation: "Gibberellin induces aleurone to produce amylase, which digests stored starch into sugars for the embryo.",
    subtopic: "plant hormones"
  },
  {
    question: "Ethylene is unusual among plant hormones because it is:",
    options: [
      "A. A solid wax",
      "B. A gas",
      "C. A protein",
      "D. Insoluble in water"
    ],
    answer: "B",
    explanation: "Ethylene (C2H4) is a gaseous hormone, allowing it to diffuse readily between plant tissues and fruits.",
    subtopic: "plant hormones"
  },
  {
    question: "Which of the following is NOT a plant hormone?",
    options: [
      "A. Auxin",
      "B. Gibberellin",
      "C. Insulin",
      "D. Cytokinin"
    ],
    answer: "C",
    explanation: "Insulin is an animal hormone from the pancreas; auxin, gibberellin, and cytokinin are plant hormones.",
    subtopic: "plant hormones"
  },
  {
    question: "The bending of a plant root downward in response to gravity is an example of:",
    options: [
      "A. Positive phototropism",
      "B. Positive geotropism",
      "C. Negative phototropism",
      "D. Thigmotropism"
    ],
    answer: "B",
    explanation: "Roots growing downward with gravity demonstrate positive geotropism.",
    subtopic: "plant hormones"
  },
  {
    question: "Commercially, ethylene is used to:",
    options: [
      "A. Kill weeds",
      "B. Ripen fruits such as bananas during transport",
      "C. Promote dormancy",
      "D. Inhibit flowering"
    ],
    answer: "B",
    explanation: "Ethylene gas is applied to trigger uniform ripening of climacteric fruits like bananas.",
    subtopic: "plant hormones"
  },
  {
    question: "Auxin is naturally produced in the:",
    options: [
      "A. Root tips only",
      "B. Apical meristems (shoot tips)",
      "C. Xylem vessels",
      "D. Stomata"
    ],
    answer: "B",
    explanation: "Auxin (IAA) is synthesized mainly in young shoot apical meristems and transported downward.",
    subtopic: "plant hormones"
  },
  {
    question: "Abscission (leaf or fruit drop) is promoted by:",
    options: [
      "A. Auxin at high concentration",
      "B. Ethylene and abscisic acid",
      "C. Gibberellin only",
      "D. Cytokinin excess"
    ],
    answer: "B",
    explanation: "Ethylene and ABA promote the formation of the abscission layer leading to leaf and fruit drop.",
    subtopic: "plant hormones"
  },
  {
    question: "Which hormone is responsible for breaking seed dormancy in some plants?",
    options: [
      "A. Abscisic acid",
      "B. Gibberellin",
      "C. Ethylene inhibitor",
      "D. Auxin antagonist"
    ],
    answer: "B",
    explanation: "Gibberellin can break dormancy and stimulate germination by mobilizing food reserves.",
    subtopic: "plant hormones"
  },
  {
    question: "Compared with animal hormones, plant hormones are:",
    options: [
      "A. Always produced in specialized glands",
      "B. Produced in various tissues and act locally or at a distance",
      "C. Carried only by the phloem",
      "D. Never gaseous"
    ],
    answer: "B",
    explanation: "Plants lack discrete endocrine glands; hormones are made in many tissues and act nearby or systemically.",
    subtopic: "plant hormones"
  },
  {
    question: "A tropism that is a growth response to water is called:",
    options: [
      "A. Hydrotropism",
      "B. Phototropism",
      "C. Thigmotropism",
      "D. Geotropism"
    ],
    answer: "A",
    explanation: "Hydrotropism is directional growth of roots toward moisture in the soil.",
    subtopic: "plant hormones"
  },
  {
    question: "Removing the apical bud of a plant encourages bushier growth because it removes:",
    options: [
      "A. The source of gibberellin that kills lateral buds",
      "B. The source of auxin causing apical dominance",
      "C. Ethylene production",
      "D. Cytokinin synthesis"
    ],
    answer: "B",
    explanation: "Decapitation removes auxin from the apex, releasing lateral buds from inhibition and producing bushiness.",
    subtopic: "plant hormones"
  },
  {
    question: "Which plant hormone is most associated with delaying leaf ageing (senescence)?",
    options: [
      "A. Abscisic acid",
      "B. Cytokinin",
      "C. Ethylene",
      "D. Auxin (high dose)"
    ],
    answer: "B",
    explanation: "Cytokinins delay senescence and can keep detached leaves green longer.",
    subtopic: "plant hormones"
  },
  {
    question: "In the 'triple response' of etiolated seedlings, ethylene causes:",
    options: [
      "A. Elongation of the stem only",
      "B. Shortening and thickening of the stem with horizontal growth",
      "C. Root hair formation",
      "D. Stomatal opening"
    ],
    answer: "B",
    explanation: "Ethylene induces the triple response: slowed elongation, thickening, and horizontal bending of the seedling.",
    subtopic: "plant hormones"
  },
  {
    question: "A plant growing on a window sill bends toward the window because of:",
    options: [
      "A. Even auxin distribution",
      "B. Higher auxin on the shaded side stimulating faster elongation there",
      "C. More gibberellin on the lit side",
      "D. Ethylene on the lit side"
    ],
    answer: "B",
    explanation: "Light causes auxin to move to the shaded side, where greater elongation bends the shoot toward the window.",
    subtopic: "plant hormones"
  },
  {
    question: "Which statement about auxin is correct?",
    options: [
      "A. It promotes root growth at all concentrations",
      "B. It stimulates shoot cell elongation at low concentrations but inhibits roots at high concentrations",
      "C. It is a gaseous hormone",
      "D. It causes stomatal closure"
    ],
    answer: "B",
    explanation: "Auxin promotes shoot elongation at low concentration but high concentrations inhibit root growth and can kill weeds.",
    subtopic: "plant hormones"
  },
  {
    question: "Seed dormancy is maintained primarily by:",
    options: [
      "A. Gibberellin",
      "B. Abscisic acid",
      "C. Cytokinin",
      "D. Ethylene promoter"
    ],
    answer: "B",
    explanation: "ABA maintains seed dormancy and prevents premature germination under unfavourable conditions.",
    subtopic: "plant hormones"
  }
];

module.exports = questions;
