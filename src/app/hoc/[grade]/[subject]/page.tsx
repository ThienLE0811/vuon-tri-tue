import Link from "next/link";
import { notFound } from "next/navigation";
import { auth } from "@/auth";
import { connectDB } from "@/lib/db";
import LessonModel from "@/models/Lesson";
import ProgressModel from "@/models/Progress";
import { isSubjectId, subjectLabel } from "@/lib/subjects";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
  const userId = session!.user.id;

  await connectDB();
  const lessons = await LessonModel.find({ grade, subjectId: subject })
    .sort({ order: 1 })
    .lean();

  const progressList = await ProgressModel.find({
    userId,
    lessonId: { $in: lessons.map((l) => l._id) },
    completed: true,
  }).lean();
  const completedIds = new Set(progressList.map((p) => p.lessonId.toString()));

  const percent =
    lessons.length === 0 ? 0 : Math.round((completedIds.size / lessons.length) * 100);

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-6 p-6">
      <div>
        <Link
          href="/"
          className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "-ml-3 mb-2")}
        >
          ← Trang chủ
        </Link>
        <h1 className="text-2xl font-semibold">
          {subjectLabel(subject)} — Lớp {grade}
        </h1>
        <div className="mt-3 flex items-center gap-3">
          <Progress value={percent} className="h-2 flex-1" />
          <span className="text-sm text-muted-foreground">{percent}% hoàn thành</span>
        </div>
      </div>

      {lessons.length === 0 ? (
        <p className="text-muted-foreground">Chưa có bài học nào cho lớp này.</p>
      ) : (
        <div className="flex flex-col gap-3">
          {lessons.map((lesson) => {
            const done = completedIds.has(lesson._id.toString());
            return (
              <Link key={lesson._id.toString()} href={`/hoc/${grade}/${subject}/${lesson._id}`}>
                <Card className="cursor-pointer transition hover:shadow-md">
                  <CardHeader className="flex-row items-center justify-between space-y-0">
                    <CardTitle className="text-base font-medium">{lesson.title}</CardTitle>
                    {done && <Badge>Đã học</Badge>}
                  </CardHeader>
                  {lesson.videoUrl && (
                    <CardContent className="pt-0 text-sm text-muted-foreground">
                      🎬 Có video
                    </CardContent>
                  )}
                </Card>
              </Link>
            );
          })}
        </div>
      )}
    </main>
  );
}
