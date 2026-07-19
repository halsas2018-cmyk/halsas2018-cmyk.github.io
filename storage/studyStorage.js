import * as FileSystem from "expo-file-system/legacy";
import { streakStorage } from "./streakStorage";

const FILE_PATH = `${FileSystem.documentDirectory}study_progress.json`;

function readAll() {
  return FileSystem.getInfoAsync(FILE_PATH)
    .then((info) => {
      if (!info.exists) return {};
      return FileSystem.readAsStringAsync(FILE_PATH).then((c) => JSON.parse(c || "{}"));
    })
    .catch(() => ({}));
}

function writeAll(obj) {
  return FileSystem.writeAsStringAsync(FILE_PATH, JSON.stringify(obj)).catch(() => false);
}

const keyOf = (subjectId, topicId, subtopic) =>
  `${subjectId}::${topicId}::${subtopic}`;

export const studyStorage = {
  // Returns { cardIndex, completed } for a subtopic (resume memory).
  async getProgress(subjectId, topicId, subtopic) {
    const all = await readAll();
    return all[keyOf(subjectId, topicId, subtopic)] || { cardIndex: 0, completed: false };
  },

  // Persist the furthest card the student has reached.
  async saveProgress(subjectId, topicId, subtopic, cardIndex) {
    const all = await readAll();
    const k = keyOf(subjectId, topicId, subtopic);
    const cur = all[k] || { cardIndex: 0, completed: false };
    all[k] = { ...cur, cardIndex: Math.max(0, cardIndex | 0), updatedAt: Date.now() };
    return writeAll(all);
  },

  async markComplete(subjectId, topicId, subtopic) {
    const all = await readAll();
    const k = keyOf(subjectId, topicId, subtopic);
    all[k] = { ...(all[k] || { cardIndex: 0 }), completed: true, completedAt: Date.now() };
    streakStorage.recordActivity().catch(() => {});
    return writeAll(all);
  },

  async unmarkComplete(subjectId, topicId, subtopic) {
    const all = await readAll();
    const k = keyOf(subjectId, topicId, subtopic);
    if (all[k]) all[k].completed = false;
    return writeAll(all);
  },

  // Whole store — used to compute per-topic / per-subject completion counts.
  async getAll() {
    return readAll();
  },
};
