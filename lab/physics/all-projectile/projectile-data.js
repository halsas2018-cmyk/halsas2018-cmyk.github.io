// Shared data + physics helpers for the Projectile Motion practical.
// Prep + Lab import from here. Mirrors titration/reagents.js and metals-data.js.

export const G_DEFAULT = 9.8; // m/s²

export const PROJECTILE_APPARATUS = [
  { id: "launcher", name: "Projectile launcher", needed: true, icon: "🎯" },
  { id: "protractor", name: "Protractor", needed: true, icon: "📐" },
  { id: "ruler", name: "Metre rule", needed: true, icon: "📏" },
  { id: "stopwatch", name: "Stopwatch", needed: true, icon: "⏱️" },
  { id: "stand", name: "Retort stand", needed: false, icon: "🏗️" },
  { id: "goggles", name: "Safety goggles", needed: false, icon: "🥽" },
];

// Range, max height, time of flight for a projectile launched from the ground.
//   R = v² sin(2θ) / g
//   H = v² sin²θ / (2g)
//   T = 2 v sinθ / g
export function projectileMetrics(v, thetaDeg, g = G_DEFAULT) {
  const th = (thetaDeg * Math.PI) / 180;
  const s = Math.sin(th);
  const c = Math.cos(th);
  const range = (v * v * 2 * s * c) / g; // sin(2θ) = 2 sinθ cosθ
  const maxHeight = (v * v * s * s) / (2 * g);
  const timeOfFlight = (2 * v * s) / g;
  return { range, maxHeight, timeOfFlight };
}

// Sampled trajectory in metres: returns [{t, x, y}] from t=0..T (n points).
export function sampleTrajectory(v, thetaDeg, g = G_DEFAULT, n = 48) {
  const { timeOfFlight: T } = projectileMetrics(v, thetaDeg, g);
  const th = (thetaDeg * Math.PI) / 180;
  const vx = v * Math.cos(th);
  const vy = v * Math.sin(th);
  const pts = [];
  for (let i = 0; i <= n; i++) {
    const t = (T * i) / n;
    const x = vx * t;
    const y = vy * t - 0.5 * g * t * t;
    pts.push({ t, x, y });
  }
  return pts;
}

// Theoretical landing angle for the calculator display.
export function projectileSummary(v, thetaDeg, g = G_DEFAULT) {
  const m = projectileMetrics(v, thetaDeg, g);
  return m;
}
