import { GRADE1_EXTRA, type ExtraEntry } from "./grade1";
import { GRADE2_EXTRA } from "./grade2";
import { GRADE3_EXTRA } from "./grade3";
import { GRADE4_EXTRA } from "./grade4";
import { GRADE5_EXTRA } from "./grade5";
import { GRADE3_MORE } from "./grade3-more";
import { GRADE4_MORE } from "./grade4-more";
import { GRADE5_MORE } from "./grade5-more";

export type { ExtraEntry };

// Grade 1-2: 3 base + 2 extra = 5 questions per exercise.
// Grade 3-5: 3 base + 2 extra + 5 more = 10 questions per exercise.
export const ALL_EXTRA_QUESTIONS: ExtraEntry[] = [
  ...GRADE1_EXTRA,
  ...GRADE2_EXTRA,
  ...mergeMore(GRADE3_EXTRA, GRADE3_MORE),
  ...mergeMore(GRADE4_EXTRA, GRADE4_MORE),
  ...mergeMore(GRADE5_EXTRA, GRADE5_MORE),
];

function mergeMore(base: ExtraEntry[], more: ExtraEntry[]): ExtraEntry[] {
  return base.map((entry) => {
    const extra = more.find(
      (m) => m.subjectId === entry.subjectId && m.grade === entry.grade && m.order === entry.order
    );
    return extra ? { ...entry, questions: [...entry.questions, ...extra.questions] } : entry;
  });
}
