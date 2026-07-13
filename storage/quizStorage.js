import * as FileSystem from 'expo-file-system/legacy';

const HISTORY_FILE_PATH = `${FileSystem.documentDirectory}quiz_history_log.json`;

export const quizStorage = {
  /**
   * Appends a safe, lightweight score summary to a persistent local JSON file
   */
  saveResult: async (topicId, score, total) => {
    try {
      let history = [];
      const fileInfo = await FileSystem.getInfoAsync(HISTORY_FILE_PATH);
      
      if (fileInfo.exists) {
        const fileContent = await FileSystem.readAsStringAsync(HISTORY_FILE_PATH);
        history = JSON.parse(fileContent);
      }

      const percentage = Math.round((score / total) * 100);
      const newRecord = {
        id: Date.now().toString(),
        topicId: topicId || "General Chemistry",
        score: score,
        total: total,
        percentage: percentage,
        date: new Date().toLocaleDateString(),
      };

      history.unshift(newRecord);
      await FileSystem.writeAsStringAsync(HISTORY_FILE_PATH, JSON.stringify(history));
      console.log("Persistent score entry written successfully.");
      return true;
    } catch (error) {
      console.log("Failed to write quiz result to disk file:", error);
      return false;
    }
  },

  /**
   * Retrieves all written performance arrays from local storage disk file
   */
  getAllResults: async () => {
    try {
      const fileInfo = await FileSystem.getInfoAsync(HISTORY_FILE_PATH);
      if (!fileInfo.exists) return [];
      
      const fileContent = await FileSystem.readAsStringAsync(HISTORY_FILE_PATH);
      return JSON.parse(fileContent);
    } catch (error) {
      console.log("Error reading logs from file:", error);
      return [];
    }
  }
};
