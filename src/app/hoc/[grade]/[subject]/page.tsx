import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { auth } from "@/auth";
import { connectDB } from "@/lib/db";
import LessonModel from "@/models/Lesson";
import ProgressModel from "@/models/Progress";
import { isSubjectId, subjectLabel, SUBJECTS } from "@/lib/subjects";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ grade: string; subject: string }>;
}): Promise<Metadata> {
  const { grade: gradeParam, subject } = await params;
  const grade = Number(gradeParam);

  if (!Number.isInteger(grade) || grade < 1 || grade > 5 || !isSubjectId(subject)) {
    return {
      title: "Môn học không tồn tại",
      robots: { index: false, follow: false },
    };
  }

  const label = subjectLabel(subject);
  const title = `Môn ${label} Lớp ${grade} – Danh sách bài học`;
  const description = `Tổng hợp toàn bộ bài học môn ${label} Lớp ${grade} bám sát chương trình chuẩn. Bài giảng trực quan, âm thanh sinh động kèm bài tập trắc nghiệm củng cố.`;

  return {
    title,
    description,
    openGraph: {
      title: `${title} | Vườn Trí Tuệ`,
      description,
      url: `/hoc/${grade}/${subject}`,
    },
  };
}

export default async function LessonListPage({
  params,
}: {
  params: Promise<{ grade: string; subject: string }>;
}) {
  const { grade: gradeParam, subject } = await params;
  const grade = Number(gradeParam);

  if (!Number.isInteger(grade) || grade < 1 || grade > 5 || !isSubjectId(subject)) {
    notFound();
  }

  const session = await auth();
  const userId = session?.user?.id;

  await connectDB();
  const lessons = await LessonModel.find({ grade, subjectId: subject })
    .sort({ order: 1 })
    .lean();

  const progressList = userId
    ? await ProgressModel.find({
        userId,
        lessonId: { $in: lessons.map((l) => l._id) },
        completed: true,
      }).lean()
    : [];
  const completedIds = new Set(progressList.map((p) => p.lessonId.toString()));

  const percent =
    lessons.length === 0 ? 0 : Math.round((completedIds.size / lessons.length) * 100);

  const subjectInfo = SUBJECTS.find((s) => s.id === subject);

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-6 p-6 py-10">
      {/* Back button & Subject heading */}
      <div className="flex flex-col gap-4">
        <div>
          <Link
            href={`/hoc/${grade}`}
            className="btn-3d btn-3d-white inline-flex items-center gap-2 px-4 py-2 text-sm font-bold"
          >
            <span>👈</span> Lớp {grade} — Chọn môn khác
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <div
            className={`flex size-14 items-center justify-center rounded-2xl border-2 border-b-4 text-3xl shadow-sm ${subjectInfo?.color}`}
          >
            {subjectInfo?.emoji}
          </div>
          <div>
            <span className="text-xs font-black uppercase tracking-wider text-slate-500">
              Chương trình Lớp {grade}
            </span>
            <h1 className="text-2xl font-black text-slate-800 sm:text-3xl">
              Môn {subjectLabel(subject)}
            </h1>
          </div>
        </div>

        {/* 3D Chunky Progress Bar */}
        <div className="rounded-3xl border-2 border-slate-200 border-b-4 bg-white p-4 shadow-sm">
          <div className="mb-2 flex items-center justify-between text-sm font-extrabold">
            <span className="text-slate-700">🌱 Tiến độ hoàn thành</span>
            <span className="rounded-full bg-emerald-100 px-3 py-0.5 text-xs font-black text-emerald-800">
              {completedIds.size}/{lessons.length} bài học ({percent}%)
            </span>
          </div>

          <div className="h-4 w-full overflow-hidden rounded-full border-2 border-slate-200 bg-slate-100 p-0.5 shadow-inner">
            <div
              className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 transition-all duration-500 ease-out"
              style={{ width: `${percent}%` }}
            />
          </div>
        </div>
      </div>

      {/* Lesson List */}
      {lessons.length === 0 ? (
        <div className="rounded-3xl border-2 border-dashed border-slate-300 bg-white/50 p-8 text-center">
          <p className="text-base font-bold text-slate-500">
            Chưa có bài học nào cho lớp này. Bạn hãy quay lại sau nhé! 🌿
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {lessons.map((lesson, index) => {
            const done = completedIds.has(lesson._id.toString());
            return (
              <Link
                key={lesson._id.toString()}
                href={`/hoc/${grade}/${subject}/${lesson._id}`}
                className={`group flex items-center justify-between gap-4 rounded-2xl border-2 bg-white p-4 shadow-sm transition-all duration-150 hover:-translate-y-1 hover:shadow-md active:translate-y-0.5 ${
                  done
                    ? "border-emerald-300 border-b-emerald-400 border-b-4 hover:border-emerald-400"
                    : "border-slate-200 border-b-slate-300 border-b-4 hover:border-slate-300"
                }`}
              >
                <div className="flex items-center gap-4">
                  {/* Step number badge */}
                  <div
                    className={`flex size-12 shrink-0 items-center justify-center rounded-2xl border-2 border-b-4 text-base font-black shadow-inner transition-transform group-hover:scale-105 ${
                      done
                        ? "border-emerald-600 bg-emerald-500 text-white"
                        : "border-slate-300 bg-slate-100 text-slate-700"
                    }`}
                  >
                    {done ? "⭐" : index + 1}
                  </div>

                  <div className="flex flex-col">
                    <span className="text-base font-extrabold text-slate-800 transition-colors group-hover:text-emerald-700 sm:text-lg">
                      {lesson.title}
                    </span>
                    {lesson.videoUrl && (
                      <span className="mt-0.5 inline-flex items-center gap-1 text-xs font-bold text-sky-600">
                        🎬 Có video hướng dẫn
                      </span>
                    )}
                  </div>
                </div>

                {/* Right status badge or button */}
                <div className="shrink-0">
                  {done ? (
                    <span className="inline-flex items-center gap-1 rounded-xl border-2 border-emerald-300 border-b-3 bg-emerald-100 px-3 py-1 text-xs font-black text-emerald-800 shadow-sm">
                      ✅ Đã học
                    </span>
                  ) : (
                    <span className="btn-3d btn-3d-white hidden px-3.5 py-1.5 text-xs font-black sm:inline-flex">
                      Học ngay 👉
                    </span>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </main>
  );
}
