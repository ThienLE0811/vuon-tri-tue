import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SUBJECTS } from "@/lib/subjects";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ grade: string }>;
}): Promise<Metadata> {
  const { grade: gradeParam } = await params;
  const grade = Number(gradeParam);

  if (!Number.isInteger(grade) || grade < 1 || grade > 5) {
    return {
      title: "Khối lớp không tồn tại",
      robots: { index: false, follow: false },
    };
  }

  const title = `Lớp ${grade} – Danh sách môn học`;
  const description = `Chương trình học tập Lớp ${grade} trên Vườn Trí Tuệ. Khám phá kho môn học phong phú với các bài giảng trực quan và bài tập tương tác hấp dẫn!`;

  return {
    title,
    description,
    openGraph: {
      title: `${title} | Vườn Trí Tuệ`,
      description,
      url: `/hoc/${grade}`,
    },
  };
}

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
    <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col gap-8 p-6 py-10">
      {/* Top navigation & Title */}
      <div className="flex flex-col gap-4">
        <div>
          <Link
            href="/"
            className="btn-3d btn-3d-white inline-flex items-center gap-2 px-4 py-2 text-sm font-bold"
          >
            <span>👈</span> Chọn lớp khác
          </Link>
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center rounded-xl bg-emerald-100 px-3 py-1 text-xs font-black text-emerald-800 border-2 border-emerald-300 border-b-3">
              LỚP {grade} 🎒
            </span>
          </div>
          <h1 className="text-3xl font-black tracking-tight text-slate-800 sm:text-4xl">
            Bạn muốn học môn nào hôm nay?
          </h1>
          <p className="text-base font-semibold text-slate-600">
            Chọn một môn học yêu thích để bắt đầu khám phá các bài giảng nhé!
          </p>
        </div>
      </div>

      {/* 3D Subject Cards */}
      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {SUBJECTS.map((subject) => (
          <Link
            key={subject.id}
            href={`/hoc/${grade}/${subject.id}`}
            className={`group relative flex flex-col justify-between rounded-3xl border-3 ${subject.cardBorder} bg-white p-6 shadow-sm transition-all duration-150 hover:-translate-y-2 hover:shadow-xl active:translate-y-0.5`}
          >
            <div className="flex flex-col items-center text-center">
              {/* 3D Icon container */}
              <div
                className={`flex size-20 items-center justify-center rounded-3xl border-3 border-b-[6px] text-5xl shadow-sm transition-transform duration-200 group-hover:scale-110 ${subject.color}`}
              >
                {subject.emoji}
              </div>

              <h2 className="mt-5 text-2xl font-black text-slate-800">
                {subject.label}
              </h2>
              <p className="mt-1.5 text-sm font-semibold text-slate-500">
                {subject.subtitle}
              </p>
            </div>

            {/* 3D Action button */}
            <div className="mt-6 w-full">
              <span
                className={`flex w-full items-center justify-center rounded-2xl py-3 text-sm font-black shadow-sm transition-all ${subject.btnClass}`}
              >
                Vào học ngay 🚀
              </span>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
