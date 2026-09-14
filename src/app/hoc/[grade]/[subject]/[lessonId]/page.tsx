import Link from "next/link";
import { notFound } from "next/navigation";
import { Types } from "mongoose";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { auth } from "@/auth";
import { connectDB } from "@/lib/db";
import LessonModel from "@/models/Lesson";
import ProgressModel from "@/models/Progress";
import { subjectLabel } from "@/lib/subjects";
import { CompleteLessonButton } from "@/components/complete-lesson-button";
import ExerciseModel from "@/models/Exercise";

export default async function LessonDetailPage({
  params,
}: {
  params: Promise<{ grade: string; subject: string; lessonId: string }>;
}) {
  const { grade, subject, lessonId } = await params;

  if (!Types.ObjectId.isValid(lessonId)) notFound();

  const session = await auth();
  const userId = session!.user.id;

  await connectDB();
  const lesson = await LessonModel.findById(lessonId).lean();
  if (!lesson) notFound();

  const progress = await ProgressModel.findOne({ userId, lessonId, completed: true }).lean();
  const exercise = await ExerciseModel.findOne({ lessonId }).lean();
  const path = `/hoc/${grade}/${subject}/${lessonId}`;

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-6 p-6 py-10">
      {/* Navigation & Header */}
      <div className="flex flex-col gap-4">
        <div>
          <Link
            href={`/hoc/${grade}/${subject}`}
            className="btn-3d btn-3d-white inline-flex items-center gap-2 px-4 py-2 text-sm font-bold"
          >
            <span>👈</span> {subjectLabel(subject)} — Lớp {grade}
          </Link>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3">
          <h1 className="text-2xl font-black text-slate-800 sm:text-3xl">
            {lesson.title}
          </h1>
          {progress && (
            <span className="inline-flex items-center gap-1.5 rounded-2xl border-2 border-emerald-300 border-b-3 bg-emerald-100 px-3.5 py-1 text-xs font-black text-emerald-800 shadow-sm">
              <span>🌟</span> Đã hoàn thành
            </span>
          )}
        </div>
      </div>

      {/* Video section */}
      {lesson.videoUrl && (
        <div className="aspect-video w-full overflow-hidden rounded-3xl border-3 border-slate-300 border-b-[6px] bg-slate-900 shadow-lg">
          <iframe
            src={lesson.videoUrl}
            title={lesson.title}
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}

      {/* Lesson Content in 3D Card */}
      <div className="rounded-3xl border-2 border-slate-200 border-b-5 bg-white p-6 shadow-sm sm:p-8">
        <article className="prose prose-slate max-w-none text-base font-medium leading-relaxed sm:text-lg">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{lesson.content}</ReactMarkdown>
        </article>
      </div>

      {/* Exercise link */}
      {exercise && (
        <Link
          href={`${path}/exercise`}
          className="btn-3d btn-3d-blue flex w-full items-center justify-center gap-2 py-4 text-base font-black tracking-wide sm:text-lg"
        >
          <span>📝</span> Làm bài tập trắc nghiệm
        </Link>
      )}

      {/* Complete Button with loading state & spam prevention */}
      <div className="pt-2">
        <CompleteLessonButton
          lessonId={lessonId}
          path={path}
          isCompleted={!!progress}
        />
      </div>
    </main>
  );
}
