import * as FileSystem from "expo-file-system/legacy";

const PATH = `${FileSystem.documentDirectory}notifications.json`;

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

const defaults = { enabled: false, hour: 19, minute: 0 };

export const notificationStorage = {
  // Daily-reminder settings: { enabled, hour, minute } (24h clock).
  async getSettings() {
    const s = (await read()) || {};
    return {
      enabled: !!s.enabled,
      hour: typeof s.hour === "number" ? s.hour : defaults.hour,
      minute: typeof s.minute === "number" ? s.minute : defaults.minute,
    };
  },
  async setSettings(settings) {
    const next = {
      enabled: !!settings.enabled,
      hour: settings.hour,
      minute: settings.minute,
    };
    await write(next);
    return next;
  },
};

export default notificationStorage;
