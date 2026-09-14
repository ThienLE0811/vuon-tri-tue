import type { Metadata } from "next";
import Link from "next/link";
import { auth } from "@/auth";
import { connectDB } from "@/lib/db";
import SubmissionModel from "@/models/Submission";

export const metadata: Metadata = {
  title: "Bảng xếp hạng – Top học sinh chăm chỉ",
  description:
    "Vinh danh những bạn nhỏ chăm chỉ và có thành tích học tập xuất sắc nhất trên Vườn Trí Tuệ. Cùng thi đua học tập và rèn luyện kiến thức mỗi ngày!",
  openGraph: {
    title: "Bảng xếp hạng – Top học sinh chăm chỉ | Vườn Trí Tuệ",
    description:
      "Vinh danh những bạn nhỏ chăm chỉ và có thành tích xuất sắc nhất trên Vườn Trí Tuệ.",
    url: "/bang-xep-hang",
  },
};

type LeaderboardRow = {
  userId: unknown;
  name: string;
  totalScore: number;
  exercisesAttempted: number;
};

const MEDALS = ["🥇", "🥈", "🥉"];

function firstName(fullName: string) {
  const trimmed = fullName.trim();
  return trimmed.split(/\s+/)[0] || trimmed;
}

export default async function LeaderboardPage() {
  const session = await auth();
  const userId = session?.user?.id;

  let rows: LeaderboardRow[] = [];
  if (userId) {
    await connectDB();
    rows = await SubmissionModel.aggregate<LeaderboardRow>([
      {
        $group: {
          _id: { userId: "$userId", exerciseId: "$exerciseId" },
          bestScore: { $max: "$score" },
        },
      },
      {
        $group: {
          _id: "$_id.userId",
          totalScore: { $sum: "$bestScore" },
          exercisesAttempted: { $sum: 1 },
        },
      },
      { $sort: { totalScore: -1, exercisesAttempted: -1 } },
      { $lookup: { from: "users", localField: "_id", foreignField: "_id", as: "user" } },
      { $unwind: "$user" },
      { $project: { _id: 0, userId: "$_id", name: "$user.name", totalScore: 1, exercisesAttempted: 1 } },
    ]);
  }

  const myIndex = rows.findIndex((row) => String(row.userId) === userId);
  const myRow = myIndex >= 0 ? rows[myIndex] : null;
  const myRank = myIndex >= 0 ? myIndex + 1 : null;
  const top = rows.slice(0, 50);

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-6 p-6 py-10">
      {/* Back button & heading */}
      <div className="flex flex-col gap-4">
        <div>
          <Link
            href="/"
            className="btn-3d btn-3d-white inline-flex items-center gap-2 px-4 py-2 text-sm font-bold"
          >
            <span>👈</span> Trang chủ
          </Link>
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-xs font-black uppercase tracking-wider text-slate-500">
            Toàn trường
          </span>
          <h1 className="text-2xl font-black text-slate-800 sm:text-3xl">🏆 Bảng xếp hạng</h1>
          <p className="text-base font-semibold text-slate-600">Ai là người chăm học nhất?</p>
        </div>
      </div>

      {!userId ? (
        <div className="flex flex-col items-center gap-4 rounded-3xl border-3 border-amber-300 border-b-[6px] bg-white p-8 text-center shadow-lg">
          <div className="flex size-16 items-center justify-center rounded-2xl border-2 border-amber-300 border-b-4 bg-amber-100 text-3xl shadow-sm">
            🔒
          </div>
          <div className="space-y-1">
            <h2 className="text-xl font-black text-slate-800">
              Đăng nhập để xem Bảng Vàng nhé!
            </h2>
            <p className="text-sm font-semibold text-slate-500">
              Bạn hãy đăng nhập tài khoản để xem thứ hạng của mình và thi đua cùng các bạn nhé! ✨
            </p>
          </div>
          <Link
            href="/login?callbackUrl=/bang-xep-hang"
            className="btn-3d btn-3d-green px-6 py-3 text-base font-black"
          >
            Đăng nhập ngay 🚀
          </Link>
        </div>
      ) : (
        <>
          {!myRow ? (
            <div className="rounded-3xl border-2 border-dashed border-slate-300 bg-white/50 p-8 text-center">
              <p className="text-base font-bold text-slate-500">
                Bạn chưa có điểm nào — làm bài tập đầu tiên để lên bảng nhé! 📝
              </p>
            </div>
          ) : myRank !== null && myRank > 50 ? (
            <LeaderboardRow
              rank={myRank}
              row={myRow}
              isMe
              highlightLabel="Vị trí của bạn"
            />
          ) : null}

          {top.length > 0 ? (
            <div className="flex flex-col gap-3">
              {top.map((row, index) => (
                <LeaderboardRow
                  key={String(row.userId)}
                  rank={index + 1}
                  row={row}
                  isMe={String(row.userId) === userId}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border-2 border-dashed border-slate-300 bg-white/50 p-8 text-center">
              <p className="text-base font-bold text-slate-500">
                Chưa có bạn nào trên bảng xếp hạng. Hãy là người đầu tiên nhé! 🌟
              </p>
            </div>
          )}
        </>
      )}
    </main>
  );
}

function LeaderboardRow({
  rank,
  row,
  isMe,
  highlightLabel,
}: {
  rank: number;
  row: LeaderboardRow;
  isMe: boolean;
  highlightLabel?: string;
}) {
  const medal = MEDALS[rank - 1];

  let badgeClass = "border-slate-300 bg-slate-100 text-slate-700";
  if (rank === 1) badgeClass = "border-amber-500 bg-amber-400 text-white";
  else if (rank === 2) badgeClass = "border-slate-400 bg-slate-300 text-white";
  else if (rank === 3) badgeClass = "border-orange-500 bg-orange-400 text-white";

  return (
    <div
      className={`flex items-center justify-between gap-4 rounded-2xl border-2 bg-white p-4 shadow-sm ${
        isMe
          ? "border-emerald-300 border-b-4 border-b-emerald-400"
          : "border-slate-200 border-b-4 border-b-slate-300"
      }`}
    >
      <div className="flex items-center gap-4">
        <div
          className={`flex size-12 shrink-0 items-center justify-center rounded-2xl border-2 border-b-4 text-base font-black shadow-inner ${badgeClass}`}
        >
          {medal ?? rank}
        </div>

        <div className="flex flex-col">
          <span className="text-base font-extrabold text-slate-800 sm:text-lg">
            {firstName(row.name)}
            {isMe && <span className="ml-1.5 text-xs font-bold text-emerald-600">(Bạn)</span>}
          </span>
          {highlightLabel && (
            <span className="text-xs font-bold text-amber-600">{highlightLabel}</span>
          )}
        </div>
      </div>

      <div className="flex shrink-0 flex-col items-end">
        <span className="rounded-xl bg-emerald-100 px-3 py-1 text-xs font-black text-emerald-800">
          {row.totalScore} điểm
        </span>
        <span className="mt-1 text-[11px] font-bold text-slate-400">
          {row.exercisesAttempted} bài
        </span>
      </div>
    </div>
  );
}
