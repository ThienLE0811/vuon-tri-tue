import Link from "next/link";
import { auth, signOut } from "@/auth";
import { setGrade } from "@/lib/actions/user";
import { SUBJECTS } from "@/lib/subjects";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const GRADES = [1, 2, 3, 4, 5];

export default async function HomePage() {
  const session = await auth();
  const user = session!.user;

  return (
    <main className="flex flex-1 flex-col items-center gap-8 p-6">
      <header className="flex w-full max-w-3xl items-center justify-between">
        <div>
          <p className="text-lg font-semibold">Xin chào, {user.name}! 👋</p>
          <p className="text-sm text-muted-foreground">
            {user.grade ? `Lớp ${user.grade}` : "Chưa chọn lớp"}
          </p>
        </div>
        <form
          action={async () => {
            "use server";
            await signOut({ redirectTo: "/login" });
          }}
        >
          <Button variant="outline" size="sm" type="submit">
            Đăng xuất
          </Button>
        </form>
      </header>

      {!user.grade ? (
        <section className="flex w-full max-w-3xl flex-col items-center gap-4 pt-8">
          <h1 className="text-xl font-semibold">Con đang học lớp mấy? 🎒</h1>
          <div className="flex flex-wrap justify-center gap-3">
            {GRADES.map((grade) => (
              <form key={grade} action={setGrade.bind(null, grade)}>
                <Button type="submit" size="lg" variant="outline" className="h-16 w-16 text-2xl">
                  {grade}
                </Button>
              </form>
            ))}
          </div>
        </section>
      ) : (
        <section className="grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
          {SUBJECTS.map((subject) => (
            <Link key={subject.id} href={`/hoc/${user.grade}/${subject.id}`}>
              <Card className="cursor-pointer transition hover:shadow-md">
                <CardHeader>
                  <CardTitle className="text-4xl">{subject.emoji}</CardTitle>
                  <CardDescription className="text-base font-medium text-foreground">
                    {subject.label}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Xem danh sách bài học</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </section>
      )}
    </main>
  );
}
