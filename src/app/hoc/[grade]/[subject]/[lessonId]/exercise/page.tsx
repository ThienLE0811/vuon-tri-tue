import Link from "next/link";
import { notFound } from "next/navigation";
import { Types } from "mongoose";
import { auth } from "@/auth";
import { connectDB } from "@/lib/db";
import LessonModel from "@/models/Lesson";
import ExerciseModel from "@/models/Exercise";
import SubmissionModel from "@/models/Submission";
import { subjectLabel } from "@/lib/subjects";
import { ExerciseForm } from "@/components/exercise-form";

export default async function ExercisePage({
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

  const exercise = await ExerciseModel.findOne({ lessonId }).lean();
  if (!exercise) notFound();

  const bestSubmission = await SubmissionModel.findOne({
    userId,
    exerciseId: exercise._id,
  })
    .sort({ score: -1 })
    .lean();

  const path = `/hoc/${grade}/${subject}/${lessonId}/exercise`;
  const questions = exercise.questions.map((q: (typeof exercise.questions)[number]) => ({
    id: q._id.toString(),
    content: q.content,
    options: q.options ?? [],
  }));

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-6 p-6 py-10">
      <div className="flex flex-col gap-4">
        <div>
          <Link
            href={`/hoc/${grade}/${subject}/${lessonId}`}
            className="btn-3d btn-3d-white inline-flex items-center gap-2 px-4 py-2 text-sm font-bold"
          >
            <span>👈</span> {lesson.title}
          </Link>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <span className="text-xs font-black uppercase tracking-wider text-slate-500">
              {subjectLabel(subject)} — Lớp {grade}
            </span>
            <h1 className="text-2xl font-black text-slate-800 sm:text-3xl">
              {exercise.title}
            </h1>
          </div>

          {bestSubmission && (
            <span className="inline-flex items-center gap-1.5 rounded-2xl border-2 border-amber-300 border-b-3 bg-amber-100 px-3.5 py-1 text-xs font-black text-amber-800 shadow-sm">
              <span>🏆</span> Điểm cao nhất: {bestSubmission.score}/
              {bestSubmission.totalQuestions}
            </span>
          )}
        </div>
      </div>

      <ExerciseForm
        exerciseId={exercise._id.toString()}
        path={path}
        questions={questions}
        subject={subject}
      />
    </main>
  );
}
