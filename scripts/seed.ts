import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import { connectDB } from "@/lib/db";
import LessonModel from "@/models/Lesson";

const LESSONS = [
  {
    subjectId: "toan",
    grade: 1,
    order: 1,
    title: "Phép cộng trong phạm vi 10",
    videoUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
    content: `# Phép cộng trong phạm vi 10

Khi cộng hai số, con đếm thêm số thứ hai vào số thứ nhất.

**Ví dụ:** 3 + 5 = 8

Con hãy đếm thêm 5 từ số 3: *4, 5, 6, 7, 8*.`,
  },
  {
    subjectId: "toan",
    grade: 1,
    order: 2,
    title: "Phép trừ trong phạm vi 10",
    content: `# Phép trừ trong phạm vi 10

Khi trừ, con đếm lùi lại từ số bị trừ.

**Ví dụ:** 8 - 3 = 5`,
  },
  {
    subjectId: "tieng-viet",
    grade: 1,
    order: 1,
    title: "Bảng chữ cái Tiếng Việt",
    content: `# Bảng chữ cái Tiếng Việt

Tiếng Việt có 29 chữ cái: a, ă, â, b, c, d, đ, e, ê, g, h, i, k, l, m, n, o, ô, ơ, p, q, r, s, t, u, ư, v, x, y.`,
  },
  {
    subjectId: "tieng-anh",
    grade: 1,
    order: 1,
    title: "Colors — Màu sắc",
    content: `# Colors

- red — đỏ
- blue — xanh dương
- yellow — vàng
- green — xanh lá`,
  },
];

async function main() {
  await connectDB();

  for (const lesson of LESSONS) {
    await LessonModel.updateOne(
      { subjectId: lesson.subjectId, grade: lesson.grade, order: lesson.order },
      { $set: lesson },
      { upsert: true }
    );
  }

  console.log(`Seeded ${LESSONS.length} lessons.`);
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
