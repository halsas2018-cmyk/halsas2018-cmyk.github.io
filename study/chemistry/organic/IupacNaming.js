export default [
  {
    heading: "What IUPAC naming is",
    body: "IUPAC (International Union of Pure and Applied Chemistry) naming is the worldwide rule-based system that gives every organic compound a unique name from its structure. Instead of many trivial names, one set of rules lets any chemist read a name and redraw the molecule. exam papers questions regularly ask you to NAME a drawn structure or DRAW the structure from a given name, so the rules must be automatic.",
  },
  {
    heading: "The carbon-number root words",
    body: "The first part of every name states how many carbons are in the parent chain: meth- (1), eth- (2), prop- (3), but- (4), pent- (5), hex- (6), hept- (7), oct- (8), non- (9), dec- (10). These roots are combined with a suffix that shows the main bond type: -ane (all single bonds), -ene (one C=C), -yne (one C≡C). So C₂H₆ is eth-ane and C₂H₂ is eth-yne. Remember the roots are the language the rest of the name is built from.",
  },
  {
    heading: "Find the parent chain",
    body: "Step one is to pick the longest continuous carbon chain that contains the principal functional group (and, if present, the multiple bond). A branched chain is named as a substituted derivative of that parent. For example a four-carbon chain with a methyl side group is a substituted butane, not a pentane. Getting the parent wrong cascades into a wrong name, so count carefully around branches and rings.",
  },
  {
    heading: "Numbering the chain — lowest locants",
    body: "Once the parent is chosen, number it from the end that gives the principal functional group (–OH, –COOH, or the multiple bond) the LOWEST possible number. If there is a tie, give the lowest number to the first substituent encountered. So CH₃–CH(OH)–CH₃ is propan-2-ol (–OH on C2), NOT propan-1-ol. The locant is written as a digit directly before the part of the name it refers to, joined by a hyphen.",
  },
  {
    heading: "Substituents as prefixes",
    body: "Side branches (substituents) become prefixes before the parent name: methyl- (–CH₃), ethyl- (–C₂H₅), chloro- (–Cl), bromo- (–Br), hydroxy- (–OH as a side group), nitro- (–NO₂). When several are present, list them in ALPHABETICAL order ignoring any di-/tri- multipliers; separate multiple numbers by commas. Example: 2-bromopropane, not 1-methyl... when the same chain can be numbered either way, choose the lower locant.",
  },
  {
    heading: "Naming alkanes (worked examples)",
    body: "Straight-chain C₄H₁₀ is butane. A three-carbon chain with a methyl on C2 is 2-methylpropane (isobutane). For CH₃–C(CH₃)₂–CH₃, the longest chain is four carbons with two methyls on C2, so the name is 2,2-dimethylbutane. Notice the comma between '2,2' and the hyphen before 'dimethyl'. Counting branches and rechecking the parent length prevents the usual mistakes here.",
  },
  {
    heading: "Naming alkenes and alkynes",
    body: "For unsaturated compounds you MUST state where the multiple bond starts: CH₂=CH–CH₃ is prop-1-ene (the double bond begins at C1), and CH₃–CH=CH–CH₃ is but-2-ene. For alkynes, CH₃–C≡CH is prop-1-yne. If both a double bond and a substituent are present, the bond locant takes priority for the lowest number. Always draw the molecule first if unsure which end to number from.",
  },
  {
    heading: "Naming alcohols (alkanols)",
    body: "Alcohols use the suffix -ol, and the carbon bearing –OH gets the lowest number: CH₃CH₂OH is ethanol (ethan-1-ol), and CH₃–CH(OH)–CH₃ is propan-2-ol. When –OH is a side group on a bigger molecule it becomes the prefix hydroxy-. For diols/triols (two or three –OH groups) the suffixes -diol/-triol are used, e.g. ethane-1,2-diol (the antifreeze ethylene glycol). The -e of the alkane root is dropped before -ol.",
  },
  {
    heading: "Naming carboxylic acids and esters",
    body: "Carboxylic acids use the suffix -oic acid: HCOOH is methanoic acid, CH₃COOH is ethanoic acid, and (CH₃)₂CHCOOH is 2-methylpropanoic acid — the –COOH carbon counts as C1 automatically. Esters are named as alkyl alkanoate: ethanol + ethanoic acid gives ethyl ethanoate; methanol + propanoic acid gives methyl propanoate. The first word is the alcohol part (alkyl), the second is the acid part (alkanoate).",
  },
  {
    heading: "Naming amines",
    body: "Simple amines are named by adding -amine to the alkyl root: CH₃NH₂ is methylamine (methanamine) and C₂H₅NH₂ is ethylamine. If extra alkyl groups are on the nitrogen, use N- to locate them: CH₃NHCH₂CH₃ is N-methylethanamine. Amines are basic, so their salts are named as alkylammonium halides, e.g. CH₃NH₃⁺Cl⁻ is methylammonium chloride. At exam level, recognising –NH₂ and naming the simple primary amines is what is tested.",
  },
  {
    heading: "Common pitfalls to avoid",
    body: "Five recurring errors lose marks: (1) numbering from the wrong end so the principal group gets a higher number; (2) forgetting the bond locant in alkenes/alkynes; (3) writing the substituent list out of alphabetical order; (4) using a comma instead of a hyphen or vice-versa (commas separate numbers, hyphens join a number to a word); (5) treating –OH as the suffix when it is only a side group. Slow, step-by-step naming beats guessing every time.",
  },
  {
    heading: "Full worked example — structure to name",
    body: "Take CH₃–CH(Cl)–CH=CH₂. The longest chain with the double bond has 4 carbons → but-. Number from the right so the double bond is at C1: but-1-ene. Substituents: a chloro on C3. Alphabetically it is 3-chlorobut-1-ene. Check: parent = but, suffix = -1-ene, prefix = 3-chloro, ordered and hyphenated correctly. Practise this full routine on every drawing question and the name will follow mechanically.",
  },
];
