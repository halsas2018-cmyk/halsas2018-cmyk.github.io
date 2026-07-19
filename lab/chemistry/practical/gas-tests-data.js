// Shared data + helpers for the gas-tests practical (CO2, O2, H2, NH3).

export const GASES = [
  { id: "o2", name: "Oxygen (O₂)", test: "Glowing splint", result: "relights a glowing splint", color: "#60a5fa", note: "Oxygen relights a glowing (not burning) splint." },
  { id: "co2", name: "Carbon dioxide (CO₂)", test: "Limewater", result: "turns limewater milky", color: "#cbd5e1", note: "CO₂ turns clear limewater milky/cloudy." },
  { id: "h2", name: "Hydrogen (H₂)", test: "Lighted splint", result: "gives a squeaky 'pop'", color: "#f472b6", note: "Hydrogen gives a squeaky 'pop' with a lighted splint." },
  { id: "nh3", name: "Ammonia (NH₃)", test: "Damp red litmus", result: "turns damp red litmus blue", color: "#a3e635", note: "Ammonia is alkaline — turns damp red litmus blue." },
];
