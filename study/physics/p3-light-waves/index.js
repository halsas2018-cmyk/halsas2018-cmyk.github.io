import sourcesOfLight from "./sourcesOfLight.js";
import rectilinearPropagation from "./rectilinearPropagation.js";
import reflectionPlane from "./reflectionPlane.js";
import reflectionCurved from "./reflectionCurved.js";
import refractionPlane from "./refractionPlane.js";
import refractionCurved from "./refractionCurved.js";
import lenses from "./lenses.js";
import dispersion from "./dispersion.js";

// Keys MUST match the subtopic strings in constants.js exactly.
export default {
  "Sources of light": sourcesOfLight,
  "Rectilinear propagation": rectilinearPropagation,
  "Reflection (plane)": reflectionPlane,
  "Reflection (curved)": reflectionCurved,
  "Refraction (plane)": refractionPlane,
  "Refraction (curved)": refractionCurved,
  "Lenses": lenses,
  "Dispersion": dispersion,
};
