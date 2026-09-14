import Link from "next/link";
import { auth } from "@/auth";
import { UserMenu } from "@/components/user-menu";

const GRADE_STYLES = [
  "border-primary bg-primary/10 text-primary",
  "border-secondary bg-secondary/10 text-secondary",
  "border-accent bg-accent/10 text-accent",
  "border-primary bg-primary/10 text-primary",
  "border-secondary bg-secondary/10 text-secondary",
];

const GRADES = [1, 2, 3, 4, 5];

export default async function HomePage() {
  const session = await auth();
  const user = session!.user;

  return (
    <div className="relative flex min-h-full flex-1 flex-col overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 size-72 rounded-full bg-primary/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-32 -right-20 size-64 rounded-full bg-accent/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 left-1/3 size-80 rounded-full bg-secondary/10 blur-3xl"
      />

      <header className="relative z-10 flex items-center justify-between border-b border-border/60 bg-white/70 px-6 py-4 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🌱</span>
          <span className="font-semibold text-primary">Vườn Trí Tuệ</span>
        </div>

        <UserMenu name={user.name ?? ""} />
      </header>

      <main className="relative z-10 flex flex-1 flex-col items-center justify-center gap-8 px-6 pb-32 text-center">
        <span className="text-6xl">🎒</span>
        <div className="space-y-2">
          <h1 className="text-3xl font-extrabold text-foreground">Con muốn học lớp mấy?</h1>
          <p className="text-muted-foreground">
            Chào {user.name}, chọn lớp để bắt đầu hành trình khám phá nhé! 👋
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {GRADES.map((grade, i) => (
            <Link
              key={grade}
              href={`/hoc/${grade}`}
              className="group flex flex-col items-center gap-2"
            >
              <div
                className={`flex size-24 items-center justify-center rounded-full border-4 text-4xl font-extrabold shadow-sm transition-all duration-200 group-hover:-translate-y-1 group-hover:shadow-lg ${GRADE_STYLES[i]}`}
              >
                {grade}
              </div>
              <span className="text-sm font-medium text-muted-foreground">Lớp {grade}</span>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
