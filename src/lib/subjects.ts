export const SUBJECTS = [
  {
    id: "toan",
    label: "Toán",
    emoji: "🔢",
    subtitle: "Con số & Phép tính diệu kỳ",
    color: "bg-blue-100 text-blue-600 border-blue-300",
    cardBorder: "border-blue-200 hover:border-blue-400 border-b-blue-400",
    btnClass: "btn-3d btn-3d-blue",
  },
  {
    id: "tieng-viet",
    label: "Tiếng Việt",
    emoji: "📖",
    subtitle: "Bảng chữ cái & Tập đọc vui",
    color: "bg-amber-100 text-amber-700 border-amber-300",
    cardBorder: "border-amber-200 hover:border-amber-400 border-b-amber-400",
    btnClass: "btn-3d btn-3d-amber",
  },
  {
    id: "tieng-anh",
    label: "Tiếng Anh",
    emoji: "🇬🇧",
    subtitle: "Từ vựng & Phát âm chuẩn",
    color: "bg-emerald-100 text-emerald-700 border-emerald-300",
    cardBorder: "border-emerald-200 hover:border-emerald-400 border-b-emerald-400",
    btnClass: "btn-3d btn-3d-green",
  },
] as const;

export type SubjectId = (typeof SUBJECTS)[number]["id"];

export function isSubjectId(value: string): value is SubjectId {
  return SUBJECTS.some((s) => s.id === value);
}

export function subjectLabel(id: string) {
  return SUBJECTS.find((s) => s.id === id)?.label ?? id;
}
