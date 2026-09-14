import type { Metadata } from "next";
import Link from "next/link";
import { auth } from "@/auth";
import { connectDB } from "@/lib/db";
import UserModel from "@/models/User";
import { UserMenu } from "@/components/user-menu";

export const metadata: Metadata = {
  title: "Vườn Trí Tuệ – Học tập trực tuyến cho học sinh Tiểu học & THCS",
  description:
    "Cùng khám phá thế giới bài học sinh động tại Vườn Trí Tuệ! Nền tảng học tập trực tuyến dành cho học sinh Tiểu học và Trung học cơ sở (THCS) với bài giảng tương tác và bài tập trắc nghiệm thú vị.",
  openGraph: {
    title: "Vườn Trí Tuệ – Học tập trực tuyến cho học sinh Tiểu học & THCS",
    description:
      "Khám phá bài học sinh động, rèn luyện tư duy và tích lũy điểm số mỗi ngày cùng Vườn Trí Tuệ.",
    url: "/",
  },
};

const GRADE_CONFIGS = [
  {
    grade: 1,
    tag: "Khởi đầu vui nhộn",
    icon: "🎈",
    bg: "bg-rose-500",
    hoverBg: "hover:bg-rose-400",
    border: "border-rose-700",
    shadow: "shadow-rose-200",
    circleBg: "bg-rose-600/60",
  },
  {
    grade: 2,
    tag: "Chăm chỉ tiến bước",
    icon: "⭐",
    bg: "bg-amber-500",
    hoverBg: "hover:bg-amber-400",
    border: "border-amber-700",
    shadow: "shadow-amber-200",
    circleBg: "bg-amber-600/60",
  },
  {
    grade: 3,
    tag: "Bứt phá tư duy",
    icon: "🌿",
    bg: "bg-emerald-500",
    hoverBg: "hover:bg-emerald-400",
    border: "border-emerald-700",
    shadow: "shadow-emerald-200",
    circleBg: "bg-emerald-600/60",
  },
  {
    grade: 4,
    tag: "Chinh phục thử thách",
    icon: "🚀",
    bg: "bg-blue-500",
    hoverBg: "hover:bg-blue-400",
    border: "border-blue-700",
    shadow: "shadow-blue-200",
    circleBg: "bg-blue-600/60",
  },
  {
    grade: 5,
    tag: "Về đích tự tin",
    icon: "👑",
    bg: "bg-purple-500",
    hoverBg: "hover:bg-purple-400",
    border: "border-purple-700",
    shadow: "shadow-purple-200",
    circleBg: "bg-purple-600/60",
  },
];

export default async function HomePage() {
  const session = await auth();
  const user = session?.user;

  let streak = 0;
  if (user?.id) {
    await connectDB();
    const dbUser = await UserModel.findById(user.id).select("streak");
    streak = dbUser?.streak ?? 0;
  }

  return (
    <div className="relative flex min-h-full flex-1 flex-col overflow-x-clip">
      {/* Decorative ambient blurred color spots */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 size-80 rounded-full bg-emerald-300/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-36 -right-20 size-72 rounded-full bg-amber-300/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 left-1/3 size-96 rounded-full bg-sky-300/20 blur-3xl"
      />

      {/* Header bar */}
      <header className="relative z-10 mx-auto mt-3 flex w-full max-w-5xl items-center justify-between rounded-3xl border-2 border-slate-200/80 border-b-4 bg-white/90 px-5 py-3 shadow-sm backdrop-blur-md">
        <Link href="/" className="flex items-center gap-2.5 transition-transform hover:scale-105 active:scale-95">
          <div className="flex size-10 items-center justify-center rounded-2xl border-2 border-emerald-600 border-b-4 bg-emerald-500 text-2xl shadow-sm">
            🌱
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-black tracking-tight text-emerald-700">
              Vườn Trí Tuệ
            </span>
            <span className="text-[10px] font-bold text-emerald-600/80">
              Học tập thông minh
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-3">
          <Link
            href="/bang-xep-hang"
            className="btn-3d btn-3d-white gap-1.5 px-3.5 py-2 text-sm font-bold"
            aria-label="Bảng xếp hạng"
          >
            <span>🏆</span>
            <span className="hidden sm:inline">Bảng xếp hạng</span>
          </Link>
          {user ? (
            <UserMenu name={user.name ?? ""} />
          ) : (
            <div className="flex items-center gap-2">
              <Link
                href="/login"
                className="btn-3d btn-3d-white px-3.5 py-2 text-sm font-bold"
              >
                Đăng nhập
              </Link>
              <Link
                href="/register"
                className="btn-3d btn-3d-green px-3.5 py-2 text-sm font-bold"
              >
                Đăng ký
              </Link>
            </div>
          )}
        </div>
      </header>

      {/* Main Hero & Grade selector */}
      <main className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center gap-10 px-6 py-12 text-center">
        {/* Friendly mascot & welcoming speech */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <div className="inline-flex items-center gap-2 rounded-full border-2 border-amber-300 border-b-4 bg-amber-100 px-4 py-1.5 text-xs font-black text-amber-900 shadow-sm">
              <span>✨</span>{" "}
              {user ? `Chào mừng ${user.name} đến với Vườn Trí Tuệ!` : "Chào mừng đến với Vườn Trí Tuệ!"}
            </div>
            {streak > 0 && (
              <div className="inline-flex items-center gap-1.5 rounded-full border-2 border-orange-300 border-b-4 bg-orange-100 px-4 py-1.5 text-xs font-black text-orange-800 shadow-sm">
                <span>🔥</span> {streak} ngày liên tục
              </div>
            )}
          </div>

          <div className="relative">
            <div className="flex size-24 items-center justify-center rounded-3xl border-3 border-amber-300 border-b-[6px] bg-gradient-to-br from-amber-100 to-amber-200 text-5xl shadow-lg transition-transform hover:scale-110 active:scale-95">
              🎒
            </div>
            <div className="absolute -bottom-2 -right-2 flex size-8 items-center justify-center rounded-full border-2 border-emerald-500 border-b-3 bg-emerald-400 text-sm shadow-md">
              🌱
            </div>
          </div>

          <div className="max-w-md space-y-2">
            <h1 className="text-3xl font-black tracking-tight text-slate-800 sm:text-4xl">
              Hôm nay bạn muốn học lớp mấy?
            </h1>
            <p className="text-base font-semibold text-slate-600">
              Hãy chọn khối lớp để bắt đầu hành trình khám phá những bài học thú vị nhé! 👋
            </p>
          </div>
        </div>

        {/* 3D Grade Selector Buttons Grid */}
        <div className="grid w-full max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 sm:gap-6">
          {GRADE_CONFIGS.map((item) => (
            <Link
              key={item.grade}
              href={`/hoc/${item.grade}`}
              className={`group relative flex flex-col items-center justify-between rounded-3xl border-3 ${item.border} border-b-[8px] ${item.bg} ${item.hoverBg} p-5 text-white shadow-lg ${item.shadow} transition-all duration-150 hover:-translate-y-1.5 active:translate-y-1 active:border-b-[3px]`}
            >
              {/* Little emoji badge in corner */}
              <div className="absolute top-3 right-3 text-lg transition-transform group-hover:scale-125">
                {item.icon}
              </div>

              {/* Big tactile number in glowing circle */}
              <div className="mt-2 flex size-20 items-center justify-center rounded-2xl border-2 border-white/40 border-b-4 bg-white/20 text-4xl font-black text-white shadow-inner backdrop-blur-xs transition-transform group-hover:scale-105">
                {item.grade}
              </div>

              <div className="mt-4 flex flex-col items-center gap-1">
                <span className="text-xl font-black tracking-wide text-white drop-shadow-xs">
                  Lớp {item.grade}
                </span>
                <span className="rounded-full bg-black/15 px-2.5 py-0.5 text-[11px] font-bold text-white/90">
                  {item.tag}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom encouraging card */}
        <div className="inline-flex items-center gap-3 rounded-2xl border-2 border-emerald-300 border-b-4 bg-emerald-50 px-5 py-3 text-sm font-extrabold text-emerald-800 shadow-sm">
          <span className="text-xl">🌟</span>
          <span>Mỗi ngày hoàn thành một bài học để cây trí tuệ phát triển vững vàng nhé!</span>
        </div>
      </main>
    </div>
  );
}
