import * as FileSystem from 'expo-file-system/legacy';

const LAB_REPORTS_PATH = `${FileSystem.documentDirectory}lab_reports.json`;

export const labStorage = {
  // Saves a full lab report object (caller builds id/date) to the phone disk
  saveReport: async (report) => {
    try {
      let reports = [];
      const info = await FileSystem.getInfoAsync(LAB_REPORTS_PATH);
      if (info.exists) {
        reports = JSON.parse(await FileSystem.readAsStringAsync(LAB_REPORTS_PATH));
      }
      reports.unshift(report);
      await FileSystem.writeAsStringAsync(LAB_REPORTS_PATH, JSON.stringify(reports));
      console.log("Lab report saved to phone memory.");
      return true;
    } catch (e) {
      console.log("Failed to save lab report:", e);
      return false;
    }
  },

  getAllReports: async () => {
    try {
      const info = await FileSystem.getInfoAsync(LAB_REPORTS_PATH);
      if (!info.exists) return [];
      return JSON.parse(await FileSystem.readAsStringAsync(LAB_REPORTS_PATH));
    } catch (e) {
      return [];
    }
  },

  deleteReport: async (id) => {
    try {
      const info = await FileSystem.getInfoAsync(LAB_REPORTS_PATH);
      if (!info.exists) return false;
      let reports = JSON.parse(await FileSystem.readAsStringAsync(LAB_REPORTS_PATH));
      reports = reports.filter((r) => r.id !== id);
      await FileSystem.writeAsStringAsync(LAB_REPORTS_PATH, JSON.stringify(reports));
      return true;
    } catch (e) {
      return false;
    }
  },
};
