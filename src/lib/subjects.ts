export const SUBJECTS = [
  { id: "toan", label: "Toán", emoji: "🔢", color: "bg-primary/10 text-primary" },
  { id: "tieng-viet", label: "Tiếng Việt", emoji: "📖", color: "bg-secondary/10 text-secondary" },
  { id: "tieng-anh", label: "Tiếng Anh", emoji: "🇬🇧", color: "bg-accent/10 text-accent" },
] as const;

export type SubjectId = (typeof SUBJECTS)[number]["id"];

export function isSubjectId(value: string): value is SubjectId {
  return SUBJECTS.some((s) => s.id === value);
}

export function subjectLabel(id: string) {
  return SUBJECTS.find((s) => s.id === id)?.label ?? id;
}
