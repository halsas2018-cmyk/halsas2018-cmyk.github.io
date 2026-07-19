// Shared data + helpers for the Parallelogram / Triangle of Forces lab.
export const FORCE_APPARATUS = [
  { id: "table", name: "Force table", needed: true, icon: "🟡" },
  { id: "pulleys", name: "Pulleys (×3)", needed: true, icon: "🛞" },
  { id: "weights", name: "Weight hangers", needed: true, icon: "⚖️" },
  { id: "protractor", name: "Protractor", needed: false, icon: "📐" },
];

// Resultant of two forces P (along 0°) and Q (at angle θ, measured CCW from +x).
export function resultant(P, Q, thetaDeg) {
  const t = (thetaDeg * Math.PI) / 180;
  const rx = P + Q * Math.cos(t);
  const ry = Q * Math.sin(t);
  const mag = Math.sqrt(rx * rx + ry * ry);
  let angleDeg = (Math.atan2(ry, rx) * 180) / Math.PI;
  if (angleDeg < 0) angleDeg += 360;
  return { rx, ry, mag, angleDeg };
}
