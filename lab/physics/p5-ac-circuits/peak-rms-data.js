// Shared data + helpers for the peak / RMS voltage practical.
export const PEAK_DIV = 4; // peak of the trace, in graticule divisions
export const VOLTS_PER_DIV = [0.5, 1, 2, 5];

export function vPeak(voltsDiv) {
  return PEAK_DIV * voltsDiv;
}

export function vRms(voltsDiv) {
  return vPeak(voltsDiv) / Math.SQRT2;
}

// Multiple-choice options for the RMS value (one is correct).
export function rmsOptions(voltsDiv) {
  const correct = vRms(voltsDiv);
  const pool = [correct * 0.7, correct * 1.3, correct * 0.5, correct * 1.6];
  const opts = [correct, ...pool].map((v) => Math.round(v * 10) / 10);
  // de-dupe & shuffle deterministically
  const uniq = [...new Set(opts)];
  return uniq.sort((a, b) => a - b);
}
