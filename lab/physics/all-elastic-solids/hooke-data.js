// Shared data + physics helpers for the Hooke's Law (Load vs Extension) practical.
// Prep + Lab import from here. Mirrors titration/reagents.js and pendulum-data.js.

// One "Add Load" click hangs one of these slotted masses on the spring (in newtons).
export const LOAD_STEP = 0.5; // N per added mass
export const MAX_LOADS = 8; // 8 × 0.5 N = 4.0 N before the spring breaks

// The spring obeys Hooke's law (load ∝ extension, slope = k) up to the
// limit of proportionality, then yields and stretches far more for each extra
// load (permanent deformation). The limit is a property of the chosen spring.
export function limitOfProportionality(k) {
  // A stiffer spring tolerates a slightly larger proportional load.
  return Math.min(2.5 + k / 200, 3.0); // N
}

// Extension (m) produced by a *cumulative* load, given the spring constant k
// and the load at which proportionality is lost (limitLoad).
//   region 1 (load <= limitLoad):  e = load / k
//   region 2 (load >  limitLoad):  e = limitLoad/k + (load-limitLoad) * YIELD/k
//     YIELD > 1 makes the spring visibly sag / deform permanently.
export function extensionFor(load, k, limitLoad, YIELD = 3) {
  const eProp = limitLoad / k;
  if (load <= limitLoad) return load / k;
  return eProp + (load - limitLoad) * (YIELD / k);
}

// Spring constant candidates offered in the prep wizard (N/m).
export const SPRING_CONSTANTS = [
  { id: "soft", label: "Soft spring — k = 20 N/m", k: 20 },
  { id: "medium", label: "Medium spring — k = 50 N/m", k: 50 },
  { id: "stiff", label: "Stiff spring — k = 100 N/m", k: 100 },
  { id: "verystiff", label: "Very stiff spring — k = 200 N/m", k: 200 },
];

export const HOOKE_APPARATUS = [
  { id: "stand", name: "Retort stand + clamp", needed: true, icon: "🏗️" },
  { id: "spring", name: "Helical spring", needed: true, icon: "🌀" },
  { id: "masses", name: "Slotted masses (0.5 N)", needed: true, icon: "⚖️" },
  { id: "ruler", name: "Metre ruler", needed: true, icon: "📏" },
  { id: "pointer", name: "Pointer / index", needed: true, icon: "📍" },
  { id: "goggles", name: "Safety goggles", needed: false, icon: "🥽" },
];

// Estimate k (N/m) from the recorded (extension, load) linear region:
// slope = load / extension. Returns the slope of the first segment plus the
// load at which the data first departs from a straight line (limit of
// proportionality). `points` = [{ extension, load }, ...] in order of increasing load.
export function analyse(points, referenceK) {
  if (!points || points.length < 2) {
    return { k: referenceK, limitLoad: null };
  }
  // Use the first two proportional points to read k (slope through origin).
  const a = points[0];
  const b = points[1];
  const k = b.extension > 0 ? b.load / b.extension : referenceK;

  // Find the first load where measured extension exceeds the straight-line
  // prediction (load / k) by more than 10%. That load is the limit of
  // proportionality.
  let limitLoad = null;
  for (let i = 1; i < points.length; i++) {
    const expected = points[i].load / k;
    const dev = expected > 0 ? points[i].extension / expected : 1;
    if (dev > 1.1) {
      limitLoad = points[i - 1] ? points[i - 1].load : points[i].load;
      break;
    }
  }
  return { k: parseFloat(k.toFixed(2)), limitLoad };
}
