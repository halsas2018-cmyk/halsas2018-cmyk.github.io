// Shared data + physics helpers for the Newton's Second Law (F = ma) practical.
// Prep + Lab import from here. Mirrors pendulum-data.js / titration/reagents.js.

export const G_DEFAULT = 9.8; // m/s² (reference only; this lab ignores friction)

export const NEWTONS_APPARATUS = [
  { id: "track", name: "Horizontal track", needed: true, icon: "➖" },
  { id: "trolley", name: "Trolley / cart", needed: true, icon: "🛒" },
  { id: "force", name: "Applied force (hanging mass)", needed: true, icon: "🪨" },
  { id: "stand", name: "Retort stand", needed: true, icon: "🏗️" },
  { id: "stopwatch", name: "Stopwatch", needed: true, icon: "⏱️" },
  { id: "goggles", name: "Safety goggles", needed: false, icon: "🥽" },
];

// Newton's Second Law: a = F / m  (m/s²)
export function accel(F, m) {
  if (!m || m <= 0) return 0;
  return F / m;
}

// Displacement from rest under constant acceleration: s = ½ a t²
export function displacement(a, t) {
  return 0.5 * a * t * t;
}

// Velocity from rest under constant acceleration: v = a t
export function velocity(a, t) {
  return a * t;
}

// Back-solve acceleration from a measured displacement + time: a = 2 s / t²
export function accelFromMeasure(s, t) {
  if (!t || t <= 0) return 0;
  return (2 * s) / (t * t);
}

export const MASS_CHOICES = [0.5, 1.0, 1.5, 2.0, 3.0]; // kg
export const FORCE_CHOICES = [1, 2, 4, 6, 10]; // N

// The on-screen track represents this real-world length (metres). The Lab maps
// pixels → metres using this constant so the animation stays physically honest.
export const TRACK_REAL_M = 2.0;
