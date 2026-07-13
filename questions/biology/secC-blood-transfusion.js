// biology — Blood Transfusion
const questions = [
  {
    question: "The ABO blood group system classifies blood based on?",
    options: [
      "A. antigens present on red blood cells",
      "B. white cell count",
      "C. platelet number",
      "D. plasma colour"
    ],
    answer: "A",
    explanation: "ABO groups depend on A and/or B antigens on the red cell surface.",
    subtopic: "Blood Groups"
  },
  {
    question: "A person with blood group A has?",
    options: [
      "A. A antigen on RBCs and anti-B antibody in plasma",
      "B. B antigen and anti-A antibody",
      "C. both A and B antigens",
      "D. no antigens"
    ],
    answer: "A",
    explanation: "Group A has A antigen and naturally occurring anti-B antibodies.",
    subtopic: "Blood Groups"
  },
  {
    question: "Blood group O individuals have?",
    options: [
      "A. both A and B antigens",
      "B. no A/B antigens but both anti-A and anti-B antibodies",
      "C. A antigen only",
      "D. B antigen only"
    ],
    answer: "B",
    explanation: "Group O lacks A and B antigens and carries both antibodies in plasma.",
    subtopic: "Blood Groups"
  },
  {
    question: "The universal donor blood group is?",
    options: [
      "A. AB",
      "B. O",
      "C. A",
      "D. B"
    ],
    answer: "B",
    explanation: "Group O red cells lack A and B antigens, so they are least likely to be rejected.",
    subtopic: "Blood Groups"
  },
  {
    question: "The universal recipient blood group is?",
    options: [
      "A. O",
      "B. AB",
      "C. A",
      "D. B"
    ],
    answer: "B",
    explanation: "Group AB has no anti-A or anti-B antibodies, so it can receive any ABO type.",
    subtopic: "Blood Groups"
  },
  {
    question: "A person with blood group A can safely receive blood from?",
    options: [
      "A. groups A and O",
      "B. group B only",
      "C. group AB only",
      "D. any group"
    ],
    answer: "A",
    explanation: "Group A can receive A (same antigen) or O (no antigen); B or AB would trigger anti-B.",
    subtopic: "Compatibility"
  },
  {
    question: "A person with blood group B can donate to?",
    options: [
      "A. group O only",
      "B. groups B and AB",
      "C. group A only",
      "D. everyone"
    ],
    answer: "B",
    explanation: "B cells carry B antigen, accepted by B and AB recipients.",
    subtopic: "Compatibility"
  },
  {
    question: "The Rhesus (Rh) factor is a?",
    options: [
      "A. protein on the red cell surface",
      "B. type of white cell",
      "C. kind of platelet",
      "D. plasma enzyme"
    ],
    answer: "A",
    explanation: "The Rh(D) antigen is a protein on red cells; presence makes one Rh positive.",
    subtopic: "Rhesus Factor"
  },
  {
    question: "A person who is Rh positive has?",
    options: [
      "A. the Rh(D) antigen",
      "B. no Rh antigen",
      "C. only anti-Rh antibodies",
      "D. type O blood"
    ],
    answer: "A",
    explanation: "Rh positive means the D antigen is present on red cells.",
    subtopic: "Rhesus Factor"
  },
  {
    question: "An Rh negative person normally?",
    options: [
      "A. has anti-Rh antibodies",
      "B. lacks anti-Rh antibodies unless sensitized",
      "C. always rejects Rh+ blood",
      "D. has the Rh antigen"
    ],
    answer: "B",
    explanation: "Rh- individuals do not make anti-D unless exposed to Rh+ blood.",
    subtopic: "Rhesus Factor"
  },
  {
    question: "Haemolytic disease of the newborn can occur when?",
    options: [
      "A. an Rh- mother carries an Rh+ fetus and becomes sensitized",
      "B. an Rh+ mother carries an Rh- fetus",
      "C. both parents are Rh-",
      "D. the mother is group O"
    ],
    answer: "A",
    explanation: "Maternal anti-D crosses the placenta and attacks fetal Rh+ red cells in later pregnancies.",
    subtopic: "Rhesus Factor"
  },
  {
    question: "To prevent HDN, Rh- mothers are given?",
    options: [
      "A. anti-D immunoglobulin",
      "B. antibiotics",
      "C. a vaccine against Rh",
      "D. insulin"
    ],
    answer: "A",
    explanation: "Anti-D destroys any fetal Rh+ cells in the mother before she makes her own antibodies.",
    subtopic: "Rhesus Factor"
  },
  {
    question: "Group O is called the universal donor because its red cells lack?",
    options: [
      "A. A and B antigens",
      "B. antibodies",
      "C. the Rh factor",
      "D. plasma"
    ],
    answer: "A",
    explanation: "Without A/B antigens, O cells rarely trigger ABO reactions in recipients.",
    subtopic: "Blood Groups"
  },
  {
    question: "Before a transfusion, donor and recipient blood are tested for?",
    options: [
      "A. compatibility (agglutination)",
      "B. colour",
      "C. smell",
      "D. weight"
    ],
    answer: "A",
    explanation: "Cross-matching checks that the cells do not agglutinate with recipient serum.",
    subtopic: "Compatibility"
  },
  {
    question: "Agglutination during cross-matching means the blood is?",
    options: [
      "A. compatible",
      "B. incompatible",
      "C. the same group always",
      "D. Rh negative"
    ],
    answer: "B",
    explanation: "Clumping of red cells indicates antibody-antigen reaction and incompatibility.",
    subtopic: "Compatibility"
  },
  {
    question: "A transfusion reaction is most often caused by?",
    options: [
      "A. incompatible blood",
      "B. correctly matched blood",
      "C. saline solution",
      "D. clean equipment"
    ],
    answer: "A",
    explanation: "Mismatched blood triggers agglutination and haemolysis, a medical emergency.",
    subtopic: "Transfusion Procedure"
  },
  {
    question: "Serum differs from plasma in that serum lacks?",
    options: [
      "A. water",
      "B. clotting factors such as fibrinogen",
      "C. proteins",
      "D. salts"
    ],
    answer: "B",
    explanation: "Serum is plasma minus the clotting proteins that form the clot.",
    subtopic: "Blood Groups"
  },
  {
    question: "A person with blood group B has?",
    options: [
      "A. B antigen and anti-A antibody",
      "B. A antigen and anti-B antibody",
      "C. both antigens",
      "D. no antibodies"
    ],
    answer: "A",
    explanation: "Group B carries B antigen and naturally occurring anti-A antibody.",
    subtopic: "Blood Groups"
  },
  {
    question: "The ABO blood group system was discovered by?",
    options: [
      "A. Karl Landsteiner",
      "B. Alexander Fleming",
      "C. Louis Pasteur",
      "D. Robert Koch"
    ],
    answer: "A",
    explanation: "Landsteiner identified the ABO groups in 1900, enabling safe transfusion.",
    subtopic: "Blood Groups"
  },
  {
    question: "Which of the following donor-recipient ABO combinations is safe?",
    options: [
      "A. O donor to AB recipient",
      "B. AB donor to O recipient",
      "C. A donor to B recipient",
      "D. B donor to A recipient"
    ],
    answer: "A",
    explanation: "O cells lack A/B antigens and are accepted by AB recipients.",
    subtopic: "Compatibility"
  },
  {
    question: "Emergency transfusion of O negative blood is given because it is?",
    options: [
      "A. the universal red-cell donor",
      "B. the universal recipient",
      "C. always Rh positive",
      "D. a rare group"
    ],
    answer: "A",
    explanation: "O negative red cells lack A, B and Rh(D) antigens, minimizing reactions.",
    subtopic: "Blood Groups"
  },
  {
    question: "Rh incompatibility mainly causes problems in?",
    options: [
      "A. the first pregnancy always",
      "B. later pregnancies after sensitization",
      "C. the father",
      "D. every Rh- person"
    ],
    answer: "B",
    explanation: "The first Rh+ pregnancy sensitizes; subsequent Rh+ fetuses are at risk.",
    subtopic: "Rhesus Factor"
  },
  {
    question: "Anti-D given to an Rh- mother works by?",
    options: [
      "A. destroying fetal Rh+ cells before she is sensitized",
      "B. increasing her antibody production",
      "C. changing her blood group",
      "D. curing the fetus"
    ],
    answer: "A",
    explanation: "Anti-D clears fetal cells so the mother's immune system never responds to Rh(D).",
    subtopic: "Rhesus Factor"
  },
  {
    question: "A person with genotype IAIB has blood group?",
    options: [
      "A. A",
      "B. B",
      "C. AB",
      "D. O"
    ],
    answer: "C",
    explanation: "IA and IB are codominant, producing both antigens (group AB).",
    subtopic: "Blood Groups"
  },
  {
    question: "A person with genotype ii has blood group?",
    options: [
      "A. A",
      "B. B",
      "C. AB",
      "D. O"
    ],
    answer: "D",
    explanation: "Two O alleles produce no A or B antigen, giving group O.",
    subtopic: "Blood Groups"
  },
  {
    question: "In the ABO system, the codominant alleles are?",
    options: [
      "A. IA and IB",
      "B. IA and i",
      "C. IB and i",
      "D. i and i"
    ],
    answer: "A",
    explanation: "IA and IB are both expressed when present together (group AB).",
    subtopic: "Blood Groups"
  },
  {
    question: "Which blood cells are typed to determine a person's ABO group?",
    options: [
      "A. red blood cells",
      "B. white blood cells",
      "C. platelets",
      "D. plasma cells"
    ],
    answer: "A",
    explanation: "ABO antigens are on red cells; typing uses anti-A and anti-B sera against them.",
    subtopic: "Blood Groups"
  },
  {
    question: "Cross-matching before transfusion is performed in the?",
    options: [
      "A. laboratory",
      "B. kitchen",
      "C. open field",
      "D. patient's home"
    ],
    answer: "A",
    explanation: "Trained laboratory staff test compatibility under controlled conditions.",
    subtopic: "Transfusion Procedure"
  },
  {
    question: "A transfusion of the wrong blood group can cause?",
    options: [
      "A. agglutination and haemolysis",
      "B. improvement in all cases",
      "C. no effect",
      "D. better hydration"
    ],
    answer: "A",
    explanation: "Mismatched antigens trigger clumping and destruction of donor red cells.",
    subtopic: "Transfusion Procedure"
  },
  {
    question: "Haemolysis means?",
    options: [
      "A. rupture of red blood cells",
      "B. blood clotting",
      "C. cell division",
      "D. cell growth"
    ],
    answer: "A",
    explanation: "Haemolysis is the bursting of red cells, releasing haemoglobin.",
    subtopic: "Transfusion Procedure"
  },
  {
    question: "Which component is often transfused separately to patients with bleeding problems?",
    options: [
      "A. platelets",
      "B. red cells only",
      "C. plasma only",
      "D. water"
    ],
    answer: "A",
    explanation: "Platelet concentrates help clot formation in thrombocytopenic patients.",
    subtopic: "Transfusion Procedure"
  },
  {
    question: "Blood collected for transfusion is usually stored?",
    options: [
      "A. at room temperature",
      "B. under refrigeration",
      "C. frozen solid",
      "D. boiled"
    ],
    answer: "B",
    explanation: "Whole blood and red cells are refrigerated (about 4°C) to preserve them.",
    subtopic: "Transfusion Procedure"
  },
  {
    question: "The Rh(D) antigen is also simply called?",
    options: [
      "A. RhD",
      "B. RhA",
      "C. RhB",
      "D. RhO"
    ],
    answer: "A",
    explanation: "The clinically important Rh antigen is designated D, hence Rh(D) or RhD.",
    subtopic: "Rhesus Factor"
  },
  {
    question: "A person with A+ blood can receive?",
    options: [
      "A. A+, A-, O+ and O-",
      "B. A+ only",
      "C. AB only",
      "D. O+ only"
    ],
    answer: "A",
    explanation: "A+ accepts A or O, and Rh+ or Rh- (since Rh- has no D antigen to reject).",
    subtopic: "Compatibility"
  },
  {
    question: "An AB- individual can receive red cells from?",
    options: [
      "A. AB+ only",
      "B. A-, B-, AB- and O-",
      "C. any group",
      "D. O+ only"
    ],
    answer: "B",
    explanation: "AB- lacks anti-A/B antibodies but is Rh-, so only Rh- donor types are safe.",
    subtopic: "Compatibility"
  },
  {
    question: "Among the ABO groups, the most common in many human populations is?",
    options: [
      "A. O",
      "B. AB",
      "C. B",
      "D. A (varies by population)"
    ],
    answer: "A",
    explanation: "Group O is frequently the most common ABO type worldwide.",
    subtopic: "Blood Groups"
  },
  {
    question: "Using anti-A and anti-B sera, if a blood sample agglutinates only with anti-A, the group is?",
    options: [
      "A. A",
      "B. B",
      "C. AB",
      "D. O"
    ],
    answer: "A",
    explanation: "Agglutination with anti-A only indicates A antigen present (group A).",
    subtopic: "Blood Groups"
  },
  {
    question: "If a sample agglutinates with both anti-A and anti-B sera, the group is?",
    options: [
      "A. A",
      "B. B",
      "C. AB",
      "D. O"
    ],
    answer: "C",
    explanation: "Both antigens are present, so the blood is group AB.",
    subtopic: "Blood Groups"
  },
  {
    question: "If a sample does NOT agglutinate with either anti-A or anti-B serum, the group is?",
    options: [
      "A. A",
      "B. B",
      "C. AB",
      "D. O"
    ],
    answer: "D",
    explanation: "No A or B antigen means group O.",
    subtopic: "Blood Groups"
  },
  {
    question: "Donating blood is safe because the body?",
    options: [
      "A. quickly replaces the lost volume",
      "B. cannot recover the loss",
      "C. loses protein permanently",
      "D. stops making cells"
    ],
    answer: "A",
    explanation: "Plasma volume is restored within days and red cells are regenerated.",
    subtopic: "Transfusion Procedure"
  },
  {
    question: "The typical volume of blood donated at one session is about?",
    options: [
      "A. 350-450 mL",
      "B. 2 litres",
      "C. 10 mL",
      "D. 5 litres"
    ],
    answer: "A",
    explanation: "A standard donation is roughly one unit (about 450 mL) of blood.",
    subtopic: "Transfusion Procedure"
  },
  {
    question: "Transfusion-transmitted infections are prevented mainly by?",
    options: [
      "A. screening donor blood",
      "B. ignoring history",
      "C. reusing equipment",
      "D. guessing"
    ],
    answer: "A",
    explanation: "Donors are screened and blood is tested for infections like HIV and hepatitis.",
    subtopic: "Transfusion Procedure"
  },
  {
    question: "Hepatitis and HIV can be transmitted by?",
    options: [
      "A. unsafe blood transfusion",
      "B. the air",
      "C. casual touch",
      "D. food"
    ],
    answer: "A",
    explanation: "These pathogens circulate in blood and can pass via contaminated transfusions.",
    subtopic: "Transfusion Procedure"
  },
  {
    question: "An autologous transfusion means using?",
    options: [
      "A. the patient's own stored blood",
      "B. donor blood",
      "C. animal blood",
      "D. saline only"
    ],
    answer: "A",
    explanation: "Autologous transfusion reduces rejection and infection risk by using the patient's own blood.",
    subtopic: "Transfusion Procedure"
  },
  {
    question: "Group AB is the universal recipient because it lacks?",
    options: [
      "A. anti-A and anti-B antibodies",
      "B. A and B antigens",
      "C. the Rh factor",
      "D. plasma"
    ],
    answer: "A",
    explanation: "Without anti-A/B antibodies, AB plasma will not attack donated A or B cells.",
    subtopic: "Compatibility"
  },
  {
    question: "The normal lifespan of a transfused red blood cell is about?",
    options: [
      "A. 120 days",
      "B. 1 day",
      "C. 1 year",
      "D. 10 days"
    ],
    answer: "A",
    explanation: "Red cells normally circulate for around 120 days before being recycled.",
    subtopic: "Transfusion Procedure"
  },
  {
    question: "An acute transfusion reaction may present with?",
    options: [
      "A. fever, chills and haemolysis",
      "B. sleepiness only",
      "C. increased hunger",
      "D. faster hair growth"
    ],
    answer: "A",
    explanation: "Fever, chills, and signs of haemolysis signal a possible transfusion reaction.",
    subtopic: "Transfusion Procedure"
  },
  {
    question: "Rh negative blood given to an Rh positive patient is usually?",
    options: [
      "A. safe because it lacks the D antigen",
      "B. always rejected",
      "C. toxic",
      "D. impossible"
    ],
    answer: "A",
    explanation: "Rh- cells have no D antigen, so they do not trigger anti-D in the recipient.",
    subtopic: "Rhesus Factor"
  },
  {
    question: "Before transfusion, the patient's identity is confirmed to prevent?",
    options: [
      "A. giving blood to the wrong person",
      "B. wasting plasma",
      "C. cooling the blood",
      "D. filtering the blood"
    ],
    answer: "A",
    explanation: "Correct patient identification is essential to avoid ABO-incompatible transfusion.",
    subtopic: "Transfusion Procedure"
  },
  {
    question: "Plasma from a group AB donor can be given to any ABO group because it?",
    options: [
      "A. lacks anti-A and anti-B antibodies",
      "B. contains the most antigens",
      "C. is always Rh-",
      "D. has no proteins"
    ],
    answer: "A",
    explanation: "AB plasma has no ABO antibodies, making it the universal plasma donor.",
    subtopic: "Compatibility"
  },
  {
    question: "The main purpose of adding anticoagulant to donated blood is to?",
    options: [
      "A. prevent clotting",
      "B. kill bacteria",
      "C. change the group",
      "D. remove plasma"
    ],
    answer: "A",
    explanation: "Anticoagulants keep collected blood liquid for storage and transfusion.",
    subtopic: "Transfusion Procedure"
  }
];

module.exports = questions;
