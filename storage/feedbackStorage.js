// Tracks first-launch + periodic re-prompting for the "leave feedback" sheet.
// Mirrors the legacy expo-file-system pattern used by the other storage modules.
import * as FileSystem from "expo-file-system/legacy";

const FILE = `${FileSystem.documentDirectory}feedback_state.json`;

function now() {
  return Date.now();
}

async function read() {
  try {
    const raw = await FileSystem.readAsStringAsync(FILE);
    return JSON.parse(raw);
  } catch (e) {
    return null;
  }
}

async function write(data) {
  try {
    await FileSystem.writeAsStringAsync(FILE, JSON.stringify(data));
  } catch (e) {}
}

export const feedbackStorage = {
  // Returns true when the feedback sheet should be shown on this launch, and
  // records the launch. First ever launch → true. After that, re-prompt at most
  // once a week or every 5 launches, whichever comes first.
  async shouldPrompt() {
    const s = await read();
    if (!s) return true; // very first launch
    const t = now();
    const launches = (s.launchCount || 0) + 1;
    const sinceLast = t - (s.lastPrompt || 0);
    const WEEK = 7 * 24 * 60 * 60 * 1000;
    return launches - (s.lastPromptLaunch || 0) >= 5 || sinceLast >= WEEK;
  },

  async recordLaunch() {
    const s = await read();
    const base = s || { launchCount: 0, lastPrompt: 0, lastPromptLaunch: 0 };
    base.launchCount = (base.launchCount || 0) + 1;
    await write(base);
    return base.launchCount;
  },

  async markPrompted() {
    const s = await read();
    const base = s || { launchCount: 0 };
    base.lastPrompt = now();
    base.lastPromptLaunch = base.launchCount || 0;
    await write(base);
  },
};

export default feedbackStorage;
