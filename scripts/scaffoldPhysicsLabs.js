/*
 * scaffoldPhysicsLabs.js
 * -----------------------
 * Adds coming-soon experiments to physics lab topics so every topic ends with
 * 2-3 experiments. Runs idempotently (re-run safe) and never touches existing
 * experiment files or index entries.
 *
 * Detection of a "real" experiment file:
 *   - is a `.js` file (not `.jsx`), not `index.js`, not `*-data.js`
 *   - default-exports an object that has `status`, `topicId` and `id`
 *   (detected by text regex so we never have to import React/JSX modules).
 *
 * Run: node scripts/scaffoldPhysicsLabs.js
 */
const fs = require("fs");
const path = require("path");

const BASE = path.join(__dirname, "..", "lab", "physics");

// Hand-authored practical titles per topic (slugs kept unique per topic).
// Maps topicId -> array of { idSuffix, title }. New experiment id = `${topicId}-${idSuffix}`.
const TITLES = {
  "p1-concepts-of-matter": [
    { s: "diffusion-states", t: "Comparing States of Matter by Diffusion" },
    { s: "brownian-motion", t: "Demonstrating Brownian Motion" },
  ],
  "p1-quantities-units": [
    { s: "dimensions", t: "Verifying Dimensions of Physical Quantities" },
    { s: "derived-volume-density", t: "Measuring Derived Quantities (Volume & Density)" },
  ],
  "p1-position-distance": [
    { s: "metre-rule", t: "Measuring Distance with a Metre Rule" },
    { s: "coordinate-grid", t: "Plotting Position Coordinates on a Grid" },
  ],
  "p1-mass-weight": [
    { s: "spring-balance", t: "Comparing Mass and Weight with a Spring Balance" },
    { s: "beam-balance", t: "Determining Mass using a Beam Balance" },
  ],
  "p1-time": [
    { s: "pendulum-period", t: "Measuring the Period of a Simple Pendulum" },
    { s: "free-fall-timing", t: "Timing Free-Fall with a Stopwatch" },
  ],
  "p1-fluid-at-rest": [
    { s: "archimedes", t: "Verifying Archimedes' Principle" },
    { s: "relative-density", t: "Determining Relative Density with a Hydrometer" },
  ],
  "p1-motion": [
    { s: "ticker-timer", t: "Demonstrating Types of Motion with a Ticker-Timer" },
    { s: "inclined-plane-friction", t: "Measuring Friction on an Inclined Plane" },
  ],
  "p1-speed-velocity": [
    { s: "ticker-speed", t: "Measuring Speed with a Ticker-Timer" },
    { s: "distance-time-graph", t: "Plotting Distance-Time Graphs" },
  ],
  "p1-acceleration": [
    { s: "ticker-acceleration", t: "Measuring Acceleration with a Ticker-Timer" },
    { s: "gravity-equations", t: "Verifying Equations of Motion under Gravity" },
  ],
  "p1-scalars-vectors": [
    { s: "force-board", t: "Resolving Forces with a Force Board" },
    { s: "resultant-graphical", t: "Finding the Resultant of Two Vectors Graphically" },
  ],
  "p1-equilibrium-forces": [
    { s: "principle-moments", t: "Verifying the Principle of Moments" },
    { s: "centre-of-gravity", t: "Determining Centre of Gravity of an Irregular Lamina" },
  ],
  "p1-shm": [
    { s: "loaded-spring", t: "Measuring the Period of a Loaded Spring" },
    { s: "forced-resonance", t: "Studying Resonance with Forced Vibrations" },
  ],
  "p1-newtons-laws": [
    { s: "second-law-trolley", t: "Verifying Newton's Second Law with a Trolley" },
    { s: "third-law-trolleys", t: "Demonstrating Newton's Third Law with Trolleys" },
  ],
  "p2-energy": [
    { s: "pendulum-transforms", t: "Tracing Energy Transformations in a Pendulum" },
    { s: "energy-sources", t: "Comparing Renewable and Non-Renewable Sources" },
  ],
  "p2-work-energy-power": [
    { s: "climbing-power", t: "Measuring the Power of a Climbing Student" },
    { s: "work-energy-theorem", t: "Verifying the Work-Energy Theorem with a Trolley" },
  ],
  "p2-heat-energy": [
    { s: "specific-heat", t: "Measuring Specific Heat Capacity of a Solid" },
    { s: "latent-fusion", t: "Determining Latent Heat of Fusion of Ice" },
  ],
  "p3-production-waves": [
    { s: "ripple-tank", t: "Generating Ripple-Tank Wavefronts" },
    { s: "slinky-propagation", t: "Demonstrating Wave Propagation with a Slinky" },
  ],
  "p3-types-waves": [
    { s: "transverse-longitudinal", t: "Identifying Transverse and Longitudinal Waves" },
    { s: "wave-equation", t: "Representing a Wave Mathematically" },
  ],
  "p3-properties-waves": [
    { s: "reflection-refraction", t: "Demonstrating Reflection and Refraction of Waves" },
    { s: "diffraction-gap", t: "Observing Diffraction at a Gap" },
  ],
  "p3-light-waves": [
    { s: "lens-focal-length", t: "Measuring Focal Length of a Convex Lens" },
    { s: "laws-reflection", t: "Verifying Laws of Reflection with a Plane Mirror" },
  ],
  "p3-electromagnetic-waves": [
    { s: "polarisation-microwave", t: "Demonstrating Polarisation of Microwaves" },
    { s: "em-regions", t: "Comparing Properties of Electromagnetic Wave Regions" },
  ],
  "p3-sound-waves": [
    { s: "resonance-tube", t: "Measuring Speed of Sound with a Resonance Tube" },
    { s: "tuning-fork-resonance", t: "Demonstrating Resonance with a Tuning Fork" },
  ],
  "p4-fields-properties": [
    { s: "magnet-field-map", t: "Mapping the Field around a Magnet" },
    { s: "grav-electric-compare", t: "Comparing Gravitational and Electric Fields" },
  ],
  "p4-gravitational-field": [
    { s: "pendulum-g", t: "Measuring g with a Simple Pendulum" },
    { s: "escape-velocity-model", t: "Modelling Escape Velocity Conceptually" },
  ],
  "p4-electric-field": [
    { s: "electrostatic-induction", t: "Demonstrating Electrostatic Induction" },
    { s: "field-lines-point", t: "Mapping Field Lines around Point Charges" },
  ],
  "p4-magnetic-field": [
    { s: "bar-magnet-map", t: "Mapping the Magnetic Field of a Bar Magnet" },
    { s: "make-electromagnet", t: "Making an Electromagnet" },
  ],
  "p4-electromagnetic-field": [
    { s: "induction-demo", t: "Demonstrating Electromagnetic Induction" },
    { s: "mutual-induction", t: "Showing Mutual Induction with Coils" },
  ],
  "p5-ac-circuits": [
    { s: "peak-rms", t: "Measuring Peak and RMS Values of an AC Supply" },
    { s: "lcr-resonance", t: "Studying Resonance in an LCR Circuit" },
  ],
  "p5-structure-atom": [
    { s: "photoelectric", t: "Demonstrating the Photoelectric Effect" },
    { s: "thermionic-emission", t: "Observing Thermionic Emission in a Valve" },
  ],
  "p5-structure-nucleus": [
    { s: "geiger-radioactivity", t: "Detecting Radioactivity with a Geiger Counter" },
    { s: "half-life-model", t: "Demonstrating Half-Life with a Model" },
  ],
  "p5-wave-particle": [
    { s: "electron-diffraction", t: "Observing Electron Diffraction" },
    { s: "duality-model", t: "Demonstrating Matter Duality with a Model" },
  ],
  "all-derived-dimensions": [
    { s: "pendulum-dimensions", t: "Dimensional Analysis of the Period of a Pendulum" },
    { s: "force-dimension", t: "Verifying the Dimension of Force" },
  ],
  "all-projectile": [
    { s: "range-45", t: "Measuring Range of a Projectile at 45 degrees" },
    { s: "trajectory-equation", t: "Verifying the Trajectory Equation of a Projectile" },
  ],
  "all-satellites-rockets": [
    { s: "orbit-model", t: "Modelling Satellite Orbits with a Centripetal Kit" },
    { s: "balloon-rocket", t: "Demonstrating Rocket Propulsion with a Balloon" },
  ],
  "all-elastic-solids": [
    { s: "hookes-law", t: "Verifying Hooke's Law with a Spring" },
    { s: "youngs-modulus", t: "Determining Young's Modulus of a Wire" },
  ],
  "all-fibre-optics": [
    { s: "total-internal-reflection", t: "Demonstrating Total Internal Reflection in a Fibre" },
    { s: "signal-loss-model", t: "Measuring Signal Loss in an Optical Fibre Model" },
  ],
  "all-laser": [
    { s: "collimation", t: "Demonstrating Laser Beam Collimation" },
    { s: "laser-vs-light", t: "Comparing Laser and Ordinary Light" },
  ],
  "all-magnetic-materials": [
    { s: "material-classification", t: "Classifying Materials as Ferro/Dia/Paramagnetic" },
    { s: "compass-uses", t: "Testing Uses of Magnets in a Compass" },
  ],
  "all-conduction-liquids": [
    { s: "electrolysis-water", t: "Electrolysis of Acidulated Water" },
    { s: "conductivity-compare", t: "Comparing Conductivity of Electrolyte Solutions" },
  ],
  "all-structure-of-matter": [
    { s: "gas-diffusion", t: "Demonstrating Diffusion in Gases" },
    { s: "kinetic-balloon", t: "Modelling Kinetic Theory with a Balloon" },
  ],
  "all-wave-particle": [
    { s: "diffraction-pattern", t: "Observing an Electron Diffraction Pattern" },
    { s: "dual-slit-model", t: "Demonstrating Duality with a Dual-Slit Model" },
  ],
};

function isExperimentFile(name, fullPath) {
  if (!name.endsWith(".js")) return false;          // exclude .jsx
  if (name === "index.js") return false;
  if (/-data\.js$/.test(name)) return false;         // exclude shared data helpers
  const text = fs.readFileSync(fullPath, "utf8");
  return (
    /\bstatus\s*:/.test(text) &&
    /\btopicId\s*:/.test(text) &&
    /\bid\s*:/.test(text) &&
    /export\s+default/.test(text)
  );
}

function identFrom(filename) {
  return filename.replace(/\.js$/, "").replace(/-/g, "_");
}

function currentIndexOrder(indexPath) {
  // Return ordered list of "./<x>.js" import targets currently in index.js.
  const text = fs.readFileSync(indexPath, "utf8");
  const out = [];
  const re = /import\s+\w+\s+from\s+["']\.\/([^"']+)\.js["']/g;
  let m;
  while ((m = re.exec(text)) !== null) out.push(m[1]);
  return out;
}

function rewriteIndex(topicDir, orderedFileNames) {
  const imports = orderedFileNames
    .map((f) => `import ${identFrom(f)} from "./${f}";`)
    .join("\n");
  const arr = orderedFileNames.map((f) => `  ${identFrom(f)},`).join("\n");
  const content = `${imports}\n\nconst experiments = [\n${arr}\n];\n\nexport default experiments;\n`;
  fs.writeFileSync(path.join(topicDir, "index.js"), content);
}

let expanded = 0;
let added = 0;

for (const topicId of Object.keys(TITLES)) {
  const topicDir = path.join(BASE, topicId);
  if (!fs.existsSync(topicDir)) {
    console.warn(`SKIP (no dir): ${topicId}`);
    continue;
  }
  const allJs = fs.readdirSync(topicDir).filter((f) => f.endsWith(".js"));
  const existingExps = allJs.filter((f) => isExperimentFile(f, path.join(topicDir, f)));

  if (existingExps.length >= 2) {
    console.log(`SKIP (>=2): ${topicId} (${existingExps.length})`);
    continue;
  }

  // How many to add to reach 3 (minimum 2 total). Add at most the titles available.
  const need = Math.min(3 - existingExps.length, TITLES[topicId].length);
  const newFiles = [];
  for (let i = 0; i < need; i++) {
    const { s, t } = TITLES[topicId][i];
    const id = `${topicId}-${s}`;
    const file = `${id}.js`;
    const full = path.join(topicDir, file);
    if (fs.existsSync(full)) {
      console.warn(`  exists, skip write: ${file}`);
    } else {
      const ident = identFrom(file);
      const content =
        `const ${ident} = {\n` +
        `  id: "${id}",\n` +
        `  topicId: "${topicId}",\n` +
        `  title: "${t}",\n` +
        `  status: "coming-soon",\n` +
        `};\n\n` +
        `export default ${ident};\n`;
      fs.writeFileSync(full, content);
      added++;
      console.log(`  + ${file} — "${t}"`);
    }
    newFiles.push(file);
  }

  // Rebuild index: preserve existing import order, append new ones.
  const idxPath = path.join(topicDir, "index.js");
  const existingOrder = currentIndexOrder(idxPath).filter((f) =>
    existingExps.includes(`${f}.js`)
  );
  const finalOrder = [...existingOrder];
  for (const f of newFiles) if (!finalOrder.includes(f.replace(/\.js$/, ""))) finalOrder.push(f.replace(/\.js$/, ""));

  // Safety: ensure every real experiment file is present in the index.
  for (const f of existingExps) {
    const base = f.replace(/\.js$/, "");
    if (!finalOrder.includes(base)) finalOrder.push(base);
  }
  for (const f of newFiles) {
    const base = f.replace(/\.js$/, "");
    if (!finalOrder.includes(base)) finalOrder.push(base);
  }

  rewriteIndex(topicDir, finalOrder.map((b) => `${b}.js`));
  expanded++;
  console.log(`DONE ${topicId}: total ${finalOrder.length} experiments`);
}

console.log(`\nSUMMARY: topics expanded = ${expanded}, experiments added = ${added}`);
