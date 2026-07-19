// Shared data + helpers for the cell-structure practical (organelle identification).

export const ORGANELLES = {
  plant: [
    { id: "wall", name: "Cell wall", role: "Rigid outer layer giving support", q: "Which structure gives the plant cell its rigid box shape?" },
    { id: "membrane", name: "Cell membrane", role: "Controls what enters and leaves", q: "Which structure controls what enters and leaves the cell?" },
    { id: "nucleus", name: "Nucleus", role: "Controls the cell, holds DNA", q: "Which organelle controls the cell and contains DNA?" },
    { id: "chloroplast", name: "Chloroplast", role: "Makes food by photosynthesis", q: "Which organelle makes food in plant cells?" },
    { id: "vacuole", name: "Vacuole", role: "Stores water, keeps the cell firm", q: "Which structure stores water and helps keep the plant cell turgid?" },
  ],
  animal: [
    { id: "membrane", name: "Cell membrane", role: "Controls what enters and leaves", q: "Which structure controls what enters and leaves the cell?" },
    { id: "nucleus", name: "Nucleus", role: "Controls the cell, holds DNA", q: "Which organelle controls the cell and contains DNA?" },
    { id: "mitochondria", name: "Mitochondria", role: "Releases energy (respiration)", q: "Which organelle releases energy for the cell?" },
    { id: "cytoplasm", name: "Cytoplasm", role: "Jelly where reactions occur", q: "In which jelly-like region do most reactions happen?" },
  ],
};

export function quizFor(type) {
  const list = ORGANELLES[type] || ORGANELLES.plant;
  return list.slice(0, 3).map((o) => {
    const others = list.filter((x) => x.id !== o.id);
    const options = [o, others[0], others[1]].slice().sort((a, b) => (a.id > b.id ? 1 : -1));
    return { q: o.q, answer: o.id, options };
  });
}
