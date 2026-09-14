export const SUBJECTS = [
  { id: "toan", label: "Toán", emoji: "🔢" },
  { id: "tieng-viet", label: "Tiếng Việt", emoji: "📖" },
  { id: "tieng-anh", label: "Tiếng Anh", emoji: "🇬🇧" },
] as const;

export type SubjectId = (typeof SUBJECTS)[number]["id"];

export function isSubjectId(value: string): value is SubjectId {
  return SUBJECTS.some((s) => s.id === value);
}

export function subjectLabel(id: string) {
  return SUBJECTS.find((s) => s.id === id)?.label ?? id;
}
