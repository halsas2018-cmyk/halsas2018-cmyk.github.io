// Shared data + biology helpers for the probability-in-genetics practical
// (monohybrid cross / Punnett square). Mirrors
// lab/biology/secA-cell-environment/cell-environment-data.js.

// Possible parental genotypes for a single trait.
//   T = tall (dominant allele), t = short (recessive allele).
export const GENOTYPES = ["TT", "Tt", "tt"];

export const TRAIT = {
  gene: "plant height",
  dominantAllele: "T",
  recessiveAllele: "t",
  dominantPhenotype: "tall",
  recessivePhenotype: "short",
};

// Split a genotype string into its two alleles, e.g. "Tt" -> ["T","t"].
export function splitGenotype(g) {
  return [g[0], g[1]];
}

// Gametes produced by one parent for a single trait: one allele per gamete.
export function gametes(g) {
  return splitGenotype(g);
}

// Build the 2x2 Punnett square from two parental genotypes.
export function buildSquare(p1, p2) {
  const p1g = gametes(p1);
  const p2g = gametes(p2);
  const cells = [];
  for (let r = 0; r < 2; r++) {
    const row = [];
    for (let c = 0; c < 2; c++) {
      row.push(p1g[r] + p2g[c]);
    }
    cells.push(row);
  }
  return { p1g, p2g, cells };
}

// Normalise a genotype so the dominant allele is written first (TT, Tt, tt).
export function normalizeGenotype(g) {
  const a = g.split("");
  a.sort((x, y) => {
    if (x === TRAIT.dominantAllele) return -1;
    if (y === TRAIT.dominantAllele) return 1;
    return 0;
  });
  return a.join("");
}

// Phenotype expressed by a genotype (a dominant allele masks the recessive one).
export function phenotypeOf(g) {
  return g.includes(TRAIT.dominantAllele)
    ? TRAIT.dominantPhenotype
    : TRAIT.recessivePhenotype;
}

// Count how many offspring have each genotype.
export function countGenotypes(cells) {
  const counts = { TT: 0, Tt: 0, tt: 0 };
  cells.flat().forEach((cell) => {
    const k = normalizeGenotype(cell);
    counts[k] = (counts[k] || 0) + 1;
  });
  return counts;
}

// Count how many offspring show each phenotype.
export function countPhenotypes(cells) {
  const counts = {};
  cells.flat().forEach((cell) => {
    const p = phenotypeOf(cell);
    counts[p] = (counts[p] || 0) + 1;
  });
  return counts;
}

// Human-readable genotype ratio, e.g. "1 TT : 2 Tt : 1 tt".
export function genotypeRatio(cells) {
  const c = countGenotypes(cells);
  const order = ["TT", "Tt", "tt"];
  return order
    .filter((k) => c[k] > 0)
    .map((k) => `${c[k]} ${k}`)
    .join(" : ");
}

// Human-readable phenotype ratio, e.g. "3 tall : 1 short".
export function phenotypeRatio(cells) {
  const c = countPhenotypes(cells);
  const d = c[TRAIT.dominantPhenotype] || 0;
  const r = c[TRAIT.recessivePhenotype] || 0;
  return `${d} ${TRAIT.dominantPhenotype} : ${r} ${TRAIT.recessivePhenotype}`;
}

// Build the multiple-choice options for the phenotype-ratio prediction.
// Returns an array of { label, correct } with the correct answer included.
export function phenotypeOptions(cells) {
  const correct = phenotypeRatio(cells);
  const pool = [
    "4 tall : 0 short",
    "3 tall : 1 short",
    "2 tall : 2 short",
    "1 tall : 3 short",
    "0 tall : 4 short",
  ];
  const distractors = pool.filter((x) => x !== correct).slice(0, 2);
  return [
    ...distractors.map((label) => ({ label, correct: false })),
    { label: correct, correct: true },
  ];
}

// A short explanation for the saved report.
export function punnettExplanation(p1, p2) {
  const { cells } = buildSquare(p1, p2);
  return (
    `Each parent (${p1} and ${p2}) produces gametes carrying ONE allele for plant height. ` +
    `A ${TRAIT.dominantAllele} allele is dominant over ${TRAIT.recessiveAllele}, so any offspring with at least one ${TRAIT.dominantAllele} is ${TRAIT.dominantPhenotype}. ` +
    `The 2x2 Punnett square combines the gametes: genotype ratio ${genotypeRatio(cells)}; ` +
    `phenotype ratio ${phenotypeRatio(cells)}.`
  );
}
