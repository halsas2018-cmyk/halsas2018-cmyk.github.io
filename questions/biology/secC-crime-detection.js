// biology — Crime Detection
const questions = [
  {
    question: "Forensic biology applies biological knowledge mainly to?",
    options: [
      "A. treating disease",
      "B. solving crimes",
      "C. farming",
      "D. manufacturing"
    ],
    answer: "B",
    explanation: "Forensic biology uses biological evidence (blood, DNA, hair) to investigate crimes.",
    subtopic: "Forensic Biology"
  },
  {
    question: "The unique pattern of ridges on fingertips used in crime detection is called?",
    options: [
      "A. dermis",
      "B. fingerprint",
      "C. retina",
      "D. genotype"
    ],
    answer: "B",
    explanation: "Fingerprints are the distinctive ridge patterns on fingertips, unique to individuals.",
    subtopic: "Fingerprinting"
  },
  {
    question: "No two individuals, except identical twins, have the same?",
    options: [
      "A. blood group",
      "B. fingerprint pattern",
      "C. height",
      "D. skin colour"
    ],
    answer: "B",
    explanation: "Fingerprint ridge patterns are unique to each person and are not determined solely by genes.",
    subtopic: "Fingerprinting"
  },
  {
    question: "The technique of DNA fingerprinting was developed by?",
    options: [
      "A. Watson and Crick",
      "B. Alec Jeffreys",
      "C. Mendel",
      "D. Pasteur"
    ],
    answer: "B",
    explanation: "Sir Alec Jeffreys developed DNA fingerprinting in 1984.",
    subtopic: "DNA Fingerprinting"
  },
  {
    question: "DNA fingerprinting analyses?",
    options: [
      "A. proteins",
      "B. repeated DNA sequences (STRs)",
      "C. ribosomes",
      "D. lipids"
    ],
    answer: "B",
    explanation: "It compares variable repeated sequences (short tandem repeats) between individuals.",
    subtopic: "DNA Fingerprinting"
  },
  {
    question: "In forensic analysis, a person's blood group can help?",
    options: [
      "A. narrow down or exclude a suspect",
      "B. determine their name",
      "C. cure a disease",
      "D. grow bacteria"
    ],
    answer: "A",
    explanation: "Blood grouping can include or exclude suspects but does not identify them uniquely.",
    subtopic: "Blood Group Analysis"
  },
  {
    question: "The most reliable biological evidence for individual identification is?",
    options: [
      "A. blood group",
      "B. DNA profile",
      "C. hair colour",
      "D. fingerprint shape only"
    ],
    answer: "B",
    explanation: "A DNA profile is highly individual-specific and is the gold standard for identification.",
    subtopic: "DNA Fingerprinting"
  },
  {
    question: "A blood sample at a crime scene can reveal the donor's?",
    options: [
      "A. name",
      "B. blood group",
      "C. exact age",
      "D. occupation"
    ],
    answer: "B",
    explanation: "Blood can be grouped (ABO/Rh) but does not state name, age or occupation directly.",
    subtopic: "Blood Group Analysis"
  },
  {
    question: "Which technique separates DNA fragments by size using an electric field?",
    options: [
      "A. PCR",
      "B. gel electrophoresis",
      "C. chromatography",
      "D. centrifugation"
    ],
    answer: "B",
    explanation: "In gel electrophoresis, charged DNA fragments migrate through a gel by size.",
    subtopic: "DNA Fingerprinting"
  },
  {
    question: "PCR is used in forensics to?",
    options: [
      "A. cut DNA",
      "B. amplify (copy) DNA",
      "C. stain proteins",
      "D. kill cells"
    ],
    answer: "B",
    explanation: "The polymerase chain reaction makes many copies of tiny DNA samples for analysis.",
    subtopic: "DNA Fingerprinting"
  },
  {
    question: "Fingerprints recovered at a scene may be?",
    options: [
      "A. latent (invisible)",
      "B. visible (inked)",
      "C. plastic (in soft material)",
      "D. any of the above"
    ],
    answer: "D",
    explanation: "Prints can be latent, visible, or plastic depending on how they were deposited.",
    subtopic: "Fingerprinting"
  },
  {
    question: "The scientific study of fingerprints is called?",
    options: [
      "A. dactyloscopy",
      "B. serology",
      "C. genomics",
      "D. toxicology"
    ],
    answer: "A",
    explanation: "Dactyloscopy is the branch of forensic science dealing with fingerprint identification.",
    subtopic: "Fingerprinting"
  },
  {
    question: "Which body fluid is most commonly analysed in forensic biology?",
    options: [
      "A. saliva",
      "B. blood",
      "C. sweat",
      "D. urine"
    ],
    answer: "B",
    explanation: "Blood is routinely collected and typed/DNA-profiled in forensic investigations.",
    subtopic: "Blood and Body Fluid Analysis"
  },
  {
    question: "Blood grouping in forensics is based on?",
    options: [
      "A. antigens present on red blood cells",
      "B. white cell count",
      "C. platelet size",
      "D. plasma protein colour"
    ],
    answer: "A",
    explanation: "ABO and Rh groups are determined by antigens on the red cell surface.",
    subtopic: "Blood Group Analysis"
  },
  {
    question: "DNA evidence can exclude a suspect with?",
    options: [
      "A. 100% certainty in every case",
      "B. a very high probability",
      "C. no certainty at all",
      "D. only if blood is used"
    ],
    answer: "B",
    explanation: "A non-match strongly excludes a suspect; reporting uses high statistical probability.",
    subtopic: "DNA Fingerprinting"
  },
  {
    question: "Mitochondrial DNA is especially useful when?",
    options: [
      "A. nuclear DNA is degraded or scarce",
      "B. blood is fresh",
      "C. only plant material exists",
      "D. no cells are present"
    ],
    answer: "A",
    explanation: "MtDNA is abundant per cell and survives in old or degraded samples better than nuclear DNA.",
    subtopic: "DNA Fingerprinting"
  },
  {
    question: "The probability that two unrelated people share the same DNA profile is?",
    options: [
      "A. high",
      "B. extremely low",
      "C. about 50%",
      "D. 100%"
    ],
    answer: "B",
    explanation: "Modern STR profiling makes random matches extraordinarily unlikely.",
    subtopic: "DNA Fingerprinting"
  },
  {
    question: "Forensic entomology studies?",
    options: [
      "A. insects",
      "B. plants",
      "C. bacteria",
      "D. fungi"
    ],
    answer: "A",
    explanation: "Insect succession on a corpse helps estimate the time since death.",
    subtopic: "Forensic Biology"
  },
  {
    question: "The presence of maggots on a corpse mainly helps determine?",
    options: [
      "A. the cause of death",
      "B. the time since death",
      "C. the victim's identity",
      "D. the blood group"
    ],
    answer: "B",
    explanation: "The developmental stage of maggots indicates how long a body has been decomposing.",
    subtopic: "Forensic Biology"
  },
  {
    question: "Semen at a crime scene can be detected using the?",
    options: [
      "A. acid phosphatase test",
      "B. blood grouping only",
      "C. X-ray",
      "D. ultrasound"
    ],
    answer: "A",
    explanation: "Acid phosphatase is an enzyme abundant in seminal fluid and is used as a screening test.",
    subtopic: "Blood and Body Fluid Analysis"
  },
  {
    question: "A person's fingerprint pattern may be a?",
    options: [
      "A. loop",
      "B. whorl",
      "C. arch",
      "D. any of the above"
    ],
    answer: "D",
    explanation: "The three main fingerprint pattern types are loops, whorls and arches.",
    subtopic: "Fingerprinting"
  },
  {
    question: "Identical twins share essentially the same?",
    options: [
      "A. fingerprints",
      "B. nuclear DNA",
      "C. blood group only",
      "D. height"
    ],
    answer: "B",
    explanation: "Monozygotic twins have nearly identical nuclear DNA, though fingerprints still differ.",
    subtopic: "DNA Fingerprinting"
  },
  {
    question: "Forensic serology is the study of?",
    options: [
      "A. serum and other body fluids",
      "B. bones",
      "C. hair colour",
      "D. teeth"
    ],
    answer: "A",
    explanation: "Serology analyses blood serum and body fluids for typing and identification.",
    subtopic: "Blood and Body Fluid Analysis"
  },
  {
    question: "Which of the following is NOT a valid forensic biology tool?",
    options: [
      "A. DNA profiling",
      "B. fingerprint analysis",
      "C. astrology",
      "D. blood grouping"
    ],
    answer: "C",
    explanation: "Astrology is not scientific and has no place in forensic investigation.",
    subtopic: "Forensic Biology"
  },
  {
    question: "The enzyme used to cut DNA at specific recognition sites is?",
    options: [
      "A. DNA ligase",
      "B. restriction endonuclease",
      "C. DNA polymerase",
      "D. helicase"
    ],
    answer: "B",
    explanation: "Restriction enzymes cleave DNA at specific sequences, producing fragments for analysis.",
    subtopic: "DNA Fingerprinting"
  },
  {
    question: "In gel electrophoresis, DNA fragments move toward the?",
    options: [
      "A. positive electrode",
      "B. negative electrode",
      "C. centre only",
      "D. neither electrode"
    ],
    answer: "A",
    explanation: "DNA is negatively charged and migrates toward the positive (anode) pole.",
    subtopic: "DNA Fingerprinting"
  },
  {
    question: "A DNA profile is also commonly called a?",
    options: [
      "A. DNA fingerprint",
      "B. genome",
      "C. chromosome",
      "D. gene"
    ],
    answer: "A",
    explanation: "The term DNA fingerprint refers to the individual-specific pattern produced.",
    subtopic: "DNA Fingerprinting"
  },
  {
    question: "Blood type can be determined from a?",
    options: [
      "A. dried bloodstain",
      "B. photograph of blood",
      "C. voice recording",
      "D. shadow"
    ],
    answer: "A",
    explanation: "Even dried stains retain cells/antigens that can be typed in the lab.",
    subtopic: "Blood Group Analysis"
  },
  {
    question: "In crime and paternity cases, DNA is preferred because it is?",
    options: [
      "A. unique to each individual",
      "B. identical in all people",
      "C. easy to fake",
      "D. always visible"
    ],
    answer: "A",
    explanation: "DNA varies between individuals, allowing precise inclusion or exclusion.",
    subtopic: "DNA Fingerprinting"
  },
  {
    question: "The branch of science dealing with crime detection using biology is?",
    options: [
      "A. pathology",
      "B. forensic biology",
      "C. anatomy",
      "D. physiology"
    ],
    answer: "B",
    explanation: "Forensic biology applies biological principles to legal investigations.",
    subtopic: "Forensic Biology"
  },
  {
    question: "Hair analysis can reveal?",
    options: [
      "A. drug use",
      "B. sometimes species and source",
      "C. the exact age of a person",
      "D. all of the above"
    ],
    answer: "D",
    explanation: "Hair can show drug exposure, species origin, and other characteristics.",
    subtopic: "Blood and Body Fluid Analysis"
  },
  {
    question: "Which of these does NOT affect how quickly DNA degrades?",
    options: [
      "A. temperature",
      "B. moisture",
      "C. time exposed",
      "D. the fingerprint pattern"
    ],
    answer: "D",
    explanation: "Fingerprint pattern is unrelated to DNA degradation, which depends on environment and time.",
    subtopic: "DNA Fingerprinting"
  },
  {
    question: "A control (reference) sample in forensic testing is?",
    options: [
      "A. from an unknown source",
      "B. a known reference standard",
      "C. a contaminated item",
      "D. discarded evidence"
    ],
    answer: "B",
    explanation: "A known reference sample is compared against evidence to interpret results.",
    subtopic: "Forensic Biology"
  },
  {
    question: "The ABO blood group system was discovered by?",
    options: [
      "A. Karl Landsteiner",
      "B. Mendel",
      "C. Darwin",
      "D. Fleming"
    ],
    answer: "A",
    explanation: "Landsteiner identified the ABO blood groups in 1900.",
    subtopic: "Blood Group Analysis"
  },
  {
    question: "A match of blood group between a suspect and scene evidence?",
    options: [
      "A. proves guilt",
      "B. only suggests a possibility",
      "C. is completely irrelevant",
      "D. proves innocence"
    ],
    answer: "B",
    explanation: "Blood group matches are not unique and can only support, not prove, involvement.",
    subtopic: "Blood Group Analysis"
  },
  {
    question: "Which microscope is useful for examining hair and textile fibres?",
    options: [
      "A. telescope",
      "B. light or electron microscope",
      "C. only the naked eye",
      "D. none"
    ],
    answer: "B",
    explanation: "Microscopes reveal structural detail of hair and fibres in forensic comparison.",
    subtopic: "Forensic Biology"
  },
  {
    question: "DNA found at a scene that does NOT match the suspect?",
    options: [
      "A. proves the suspect's guilt",
      "B. excludes the suspect as a source",
      "C. is useless",
      "D. confirms the suspect's identity"
    ],
    answer: "B",
    explanation: "A non-matching profile excludes that person as the donor of that sample.",
    subtopic: "DNA Fingerprinting"
  },
  {
    question: "Comparing DNA fragment patterns between samples is called?",
    options: [
      "A. DNA profiling",
      "B. cloning",
      "C. gene sequencing only",
      "D. protein synthesis"
    ],
    answer: "A",
    explanation: "DNA profiling compares fragment patterns to link or exclude individuals.",
    subtopic: "DNA Fingerprinting"
  },
  {
    question: "Biological evidence at a crime scene must be?",
    options: [
      "A. contaminated for reliability",
      "B. carefully collected and preserved",
      "C. ignored",
      "D. mixed with other samples"
    ],
    answer: "B",
    explanation: "Proper collection and chain of custody preserve evidentiary value.",
    subtopic: "Forensic Biology"
  },
  {
    question: "Blood spatter analysis mainly helps determine?",
    options: [
      "A. direction and force of an impact",
      "B. the blood group",
      "C. the victim's age",
      "D. the victim's gender"
    ],
    answer: "A",
    explanation: "The shape and distribution of spatter indicate the mechanics of an injury event.",
    subtopic: "Blood and Body Fluid Analysis"
  },
  {
    question: "Saliva can be used for DNA testing because it contains?",
    options: [
      "A. buccal (cheek) cells",
      "B. only red blood cells",
      "C. only water",
      "D. platelets"
    ],
    answer: "A",
    explanation: "Cheek cells shed into saliva provide nuclear DNA for profiling.",
    subtopic: "Blood and Body Fluid Analysis"
  },
  {
    question: "The uniqueness of a person's fingerprints is established during?",
    options: [
      "A. embryonic development",
      "B. birth only",
      "C. adulthood",
      "D. old age"
    ],
    answer: "A",
    explanation: "Ridge patterns form in the womb and are fixed for life, though they are not purely genetic.",
    subtopic: "Fingerprinting"
  },
  {
    question: "A limitation of fingerprint evidence is that prints may be?",
    options: [
      "A. unique to each person",
      "B. partial or smudged",
      "C. unchanging",
      "D. always reliable"
    ],
    answer: "B",
    explanation: "Poor-quality latent prints can be hard to match conclusively.",
    subtopic: "Fingerprinting"
  },
  {
    question: "Restriction Fragment Length Polymorphism (RFLP) was an early method of?",
    options: [
      "A. DNA profiling",
      "B. blood grouping",
      "C. protein synthesis",
      "D. cell division"
    ],
    answer: "A",
    explanation: "RFLP compared fragment lengths produced by restriction enzymes for identification.",
    subtopic: "DNA Fingerprinting"
  },
  {
    question: "The 'chain of custody' refers to?",
    options: [
      "A. documentation of who handled the evidence",
      "B. the DNA sequence",
      "C. a fingerprint ridge",
      "D. a blood type"
    ],
    answer: "A",
    explanation: "Chain of custody records every person who handled evidence to prove integrity.",
    subtopic: "Forensic Biology"
  },
  {
    question: "Which human cell contains nuclear DNA useful for profiling?",
    options: [
      "A. mature red blood cells",
      "B. white blood cells",
      "C. hair shaft (no root)",
      "D. nail clippings"
    ],
    answer: "B",
    explanation: "White blood cells have nuclei; mature red cells lack them, limiting DNA from blood alone.",
    subtopic: "DNA Fingerprinting"
  },
  {
    question: "Short Tandem Repeats (STRs) are used in modern?",
    options: [
      "A. DNA profiling",
      "B. blood typing by antigen",
      "C. microscopy",
      "D. bacterial culture"
    ],
    answer: "A",
    explanation: "STR analysis at multiple loci is the current standard for DNA identification.",
    subtopic: "DNA Fingerprinting"
  },
  {
    question: "Forensic botany is the study of?",
    options: [
      "A. plant material at crime scenes",
      "B. animals",
      "C. microbes only",
      "D. minerals"
    ],
    answer: "A",
    explanation: "Plant remains can place a suspect at a location or time of year.",
    subtopic: "Forensic Biology"
  },
  {
    question: "The reliability of DNA evidence depends on?",
    options: [
      "A. proper collection and analysis",
      "B. guessing",
      "C. the suspect's appearance",
      "D. the suspect's age"
    ],
    answer: "A",
    explanation: "Contamination or mishandling can ruin even the best DNA evidence.",
    subtopic: "DNA Fingerprinting"
  },
  {
    question: "Biological evidence such as blood should be?",
    options: [
      "A. stored wet at room temperature",
      "B. dried and properly packaged",
      "C. washed before storage",
      "D. burned"
    ],
    answer: "B",
    explanation: "Drying and cool, packaged storage prevents microbial degradation of samples.",
    subtopic: "Blood and Body Fluid Analysis"
  }
];

module.exports = questions;
