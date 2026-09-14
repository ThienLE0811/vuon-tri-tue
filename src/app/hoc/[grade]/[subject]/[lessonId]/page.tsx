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
import { markLessonComplete } from "@/lib/actions/progress";
import { Button, buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

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
  const path = `/hoc/${grade}/${subject}/${lessonId}`;

  return (
    <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col gap-6 p-6">
      <div>
        <Link
          href={`/hoc/${grade}/${subject}`}
          className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "-ml-3 mb-2")}
        >
          ← {subjectLabel(subject)} — Lớp {grade}
        </Link>
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-semibold">{lesson.title}</h1>
          {progress && <Badge>Đã học</Badge>}
        </div>
      </div>

      {lesson.videoUrl && (
        <div className="aspect-video w-full overflow-hidden rounded-lg border">
          <iframe
            src={lesson.videoUrl}
            title={lesson.title}
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}

      <article className="prose prose-neutral max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{lesson.content}</ReactMarkdown>
      </article>

      <form action={markLessonComplete.bind(null, lessonId, path)}>
        <Button type="submit" size="lg" disabled={!!progress}>
          {progress ? "Đã hoàn thành ✅" : "Đánh dấu đã học"}
        </Button>
      </form>
    </main>
  );
}
