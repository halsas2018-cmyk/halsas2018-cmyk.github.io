import { SUBJECTS } from "../constants";
import registry from "./registry";
import { studyStorage } from "../storage/studyStorage";

// Reused everywhere for translucent tints without adding a gradient dependency.
export function hexToRgba(hex, alpha) {
  const h = (hex || "#000000").replace("#", "");
  const r = parseInt(h.substring(0, 2), 16);
  const g = parseInt(h.substring(2, 4), 16);
  const b = parseInt(h.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

// Lazy per-subject question bank (mirrors QuizScreen's loader — no top-level import).
const SUBJECT_QUESTION_MODULES = {
  chemistry: () => require("../questions/chemistry/index").default,
  biology: () => require("../questions/biology/index").default,
  physics: () => require("../questions/physics/index").default,
};
const _banks = {};
function getQUESTIONS(subjectId) {
  const key = (subjectId || "chemistry").toLowerCase();
  if (!_banks[key]) {
    const loader = SUBJECT_QUESTION_MODULES[key];
    _banks[key] = loader ? loader() : {};
  }
  return _banks[key];
}

export function getSubject(subjectId) {
  return (
    SUBJECTS.find((s) => s.id.toLowerCase() === (subjectId || "").toLowerCase()) ||
    SUBJECTS[0]
  );
}

export function getTopic(subjectId, topicId) {
  const sub = getSubject(subjectId);
  return (sub.topics || []).find(
    (t) => t.id.toLowerCase() === (topicId || "").toLowerCase()
  );
}

// Total subtopics across a subject (denominator for tracker progress).
export function countSubtopics(subjectId) {
  const sub = getSubject(subjectId);
  return (sub.topics || []).reduce(
    (n, t) => n + (t.subtopics ? t.subtopics.length : 1),
    0
  );
}

// ── Fuzzy matching between constants subtopic titles and bank `subtopic` labels ──
const STOP = new Set(["the", "of", "and", "in", "to", "a", "an", "for", "on", "with", "as", "by"]);
function norm(s) {
  return (s || "")
    .toLowerCase()
    .replace(/[–—‑]/g, "-")
    .replace(/[^a-z0-9 ]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}
function tokens(s) {
  return norm(s)
    .split(" ")
    .filter((w) => w.length > 2 && !STOP.has(w));
}
function matchSubtopic(qSub, constSub) {
  const a = norm(qSub);
  const b = norm(constSub);
  if (!a || !b) return false;
  if (a.includes(b) || b.includes(a)) return true;
  const ta = tokens(qSub);
  const tb = tokens(constSub);
  return ta.some((t) => tb.includes(t));
}

// Build the swipeable card deck for one subtopic.
// Primary source: human-authored content in study/<subject>/<topicId>/<sub>.js
// (reachable through the literal-require registry). Falls back to the question
// bank's explanations only for topics not yet authored.
export function buildCards(subjectId, topicId, subtopic) {
  const thunk = registry[`${subjectId}/${topicId}`];
  if (thunk) {
    const topicMap = thunk();
    const authored = topicMap[subtopic];
    if (authored && authored.length) {
      return authored.map((c, i) => ({ id: `${topicId}-${i}`, ...c, subtopic }));
    }
  }

  // Fallback (pre-authoring / missing subtopic): reuse bank explanations.
  const pool = getQUESTIONS(subjectId)[topicId] || [];
  const matched = pool.filter((q) => matchSubtopic(q.subtopic, subtopic));
  const cards = matched.map((q, i) => ({
    id: `${topicId}-${i}`,
    heading: "Key point",
    body: q.explanation || q.question || "",
    subtopic,
  }));
  if (cards.length === 0) {
    cards.push({
      id: `${topicId}-fallback`,
      heading: "Key point",
      body: `Review the key ideas of "${subtopic}". Work through past questions on this topic to lock it in.`,
      subtopic,
    });
  }
  return cards;
}

// Recommend the next uncompleted subtopic in syllabus order.
// Returns a Promise resolving to { subjectId, topicId, subtopic } or null
// (null = everything is complete). If subjectId is given, only that subject.
export function recommendNext(subjectId) {
  const subs = subjectId
    ? SUBJECTS.filter((s) => s.id.toLowerCase() === String(subjectId).toLowerCase())
    : SUBJECTS.filter((s) => !s.comingSoon);
  return studyStorage.getAll().then((all) => {
    for (const s of subs) {
      for (const t of s.topics || []) {
        const subs2 =
          t.subtopics && t.subtopics.length ? t.subtopics : [t.name || t.id];
        for (const st of subs2) {
          const k = `${s.id}::${t.id}::${st}`;
          if (!all[k] || !all[k].completed) {
            return { subjectId: s.id, topicId: t.id, subtopic: st };
          }
        }
      }
    }
    return null;
  });
}
