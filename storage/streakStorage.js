import * as FileSystem from "expo-file-system/legacy";

const PATH = `${FileSystem.documentDirectory}streak.json`;

export const DAILY_GOAL = 10; // questions per day for the daily-goal pill

function read() {
  return FileSystem.getInfoAsync(PATH)
    .then((info) => {
      if (!info.exists) return null;
      return FileSystem.readAsStringAsync(PATH).then((c) => JSON.parse(c || "{}"));
    })
    .catch(() => null);
}

function write(obj) {
  return FileSystem.writeAsStringAsync(PATH, JSON.stringify(obj)).catch(() => false);
}

function key(d = new Date()) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

const defaultState = { count: 0, lastDate: null, todayDate: null, todayCount: 0 };

export const streakStorage = {
  DAILY_GOAL,

  async getState() {
    return (await read()) || { ...defaultState };
  },

  // Call on every quiz/lab completion. Maintains a consecutive-day streak
  // (resets if a day was missed) and a per-day activity count.
  async recordActivity() {
    const s = (await read()) || { ...defaultState };
    const t = key();
    if (s.todayDate !== t) {
      s.todayDate = t;
      s.todayCount = 0;
    }
    s.todayCount += 1;
    if (s.lastDate !== t) {
      const y = new Date();
      y.setDate(y.getDate() - 1);
      s.count = s.lastDate === key(y) ? (s.count || 0) + 1 : 1;
      s.lastDate = t;
    }
    await write(s);
    return s;
  },

  // Best-ever streak length (for the stats strip / about screen).
  async getBest() {
    const all = await read();
    return (all && all.best) || 0;
  },

  async setBest(n) {
    const s = (await read()) || { ...defaultState };
    s.best = Math.max(s.best || 0, n);
    return write(s);
  },
};

export default streakStorage;
