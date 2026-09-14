import Link from "next/link";
import { notFound } from "next/navigation";
import { SUBJECTS } from "@/lib/subjects";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default async function GradePage({
  params,
}: {
  params: Promise<{ grade: string }>;
}) {
  const { grade: gradeParam } = await params;
  const grade = Number(gradeParam);

  if (!Number.isInteger(grade) || grade < 1 || grade > 5) {
    notFound();
  }

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-6 p-6">
      <div>
        <Link
          href="/"
          className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "-ml-3 mb-2")}
        >
          ← Chọn lớp khác
        </Link>
        <h1 className="text-2xl font-semibold">Lớp {grade} — Chọn môn học</h1>
      </div>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {SUBJECTS.map((subject) => (
          <Link key={subject.id} href={`/hoc/${grade}/${subject.id}`}>
            <Card className="cursor-pointer transition hover:-translate-y-0.5 hover:shadow-md">
              <CardHeader>
                <div
                  className={`flex size-16 items-center justify-center rounded-2xl text-4xl ${subject.color}`}
                >
                  {subject.emoji}
                </div>
                <CardTitle className="pt-2 text-base font-medium text-foreground">
                  {subject.label}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Xem danh sách bài học</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </section>
    </main>
  );
}
