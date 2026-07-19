// Shared data + physics helpers for the Refraction of Light practical.
// Prep + Lab import from here. Mirrors titration/reagents.js and metals-data.js.

export const REFRACTION_APPARATUS = [
  { id: "raybox", name: "Ray box", needed: true, icon: "🔦" },
  { id: "block", name: "Glass block", needed: true, icon: "🟦" },
  { id: "protractor", name: "Protractor", needed: true, icon: "📐" },
  { id: "paper", name: "Plain paper", needed: true, icon: "📄" },
  { id: "stand", name: "Stand", needed: false, icon: "🏗️" },
  { id: "goggles", name: "Safety goggles", needed: false, icon: "🥽" },
];

// Refractive indices of common media.
export const MEDIA = [
  { id: "air", name: "Air", n: 1.0, color: "#e0f2fe" },
  { id: "water", name: "Water", n: 1.33, color: "#bfdbfe" },
  { id: "glass", name: "Glass", n: 1.5, color: "#a5b4fc" },
  { id: "diamond", name: "Diamond", n: 2.42, color: "#c4b5fd" },
];

export function mediaById(id) {
  return MEDIA.find((m) => m.id === id) || MEDIA[0];
}

// Snell's law:  n₁ sin θ₁ = n₂ sin θ₂
// Returns { theta2, tir, critical } where:
//   theta2   = refracted angle in degrees (or null when total internal reflection)
//   tir       = true if θ₁ exceeds the critical angle (dense → rarer)
//   critical  = critical angle in degrees (or null if n₁ <= n₂)
export function refract(n1, n2, theta1Deg) {
  const t1 = (theta1Deg * Math.PI) / 180;
  const sinT2 = (n1 * Math.sin(t1)) / n2;

  let critical = null;
  if (n1 > n2) {
    critical = (Math.asin(n2 / n1) * 180) / Math.PI;
  }

  if (sinT2 > 1) {
    return { theta2: null, tir: true, critical };
  }
  const theta2 = (Math.asin(sinT2) * 180) / Math.PI;
  return { theta2, tir: false, critical };
}

// Critical angle for a dense→rarer boundary (or null if not applicable).
export function criticalAngle(n1, n2) {
  if (n1 <= n2) return null;
  return (Math.asin(n2 / n1) * 180) / Math.PI;
}
