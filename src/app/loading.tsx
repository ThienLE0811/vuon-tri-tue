import { Loader2 } from "lucide-react";

export default function GlobalLoading() {
  return (
    <div className="flex min-h-[60vh] flex-1 flex-col items-center justify-center gap-5 p-6 text-center">
      <div className="relative flex size-24 items-center justify-center rounded-3xl border-3 border-emerald-300 border-b-[6px] bg-gradient-to-br from-emerald-100 to-emerald-200 text-5xl shadow-lg animate-bounce">
        🌱
      </div>
      <div className="flex items-center gap-3">
        <Loader2 className="size-6 animate-spin text-emerald-600" />
        <span className="text-xl font-black text-slate-800">
          Đang tải Vườn Trí Tuệ...
        </span>
      </div>
      <p className="text-sm font-bold text-slate-500">
        Con chờ một chút nhé! ✨
      </p>
    </div>
  );
}
