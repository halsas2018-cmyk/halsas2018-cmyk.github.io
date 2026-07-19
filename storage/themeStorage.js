import * as FileSystem from "expo-file-system/legacy";

const PATH = `${FileSystem.documentDirectory}theme.json`;

export const THEME_MODES = ["system", "light", "dark"];

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

export const themeStorage = {
  // Persisted appearance preference: 'system' | 'light' | 'dark'.
  async getMode() {
    const s = (await read()) || {};
    return THEME_MODES.includes(s.mode) ? s.mode : "system";
  },
  async setMode(mode) {
    if (!THEME_MODES.includes(mode)) mode = "system";
    await write({ mode });
    return mode;
  },
};

export default themeStorage;
