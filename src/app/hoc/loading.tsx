import { Loader2 } from "lucide-react";

export default function LearningLoading() {
  return (
    <div className="mx-auto flex min-h-[55vh] w-full max-w-3xl flex-1 flex-col items-center justify-center gap-4 p-6 text-center">
      <div className="flex size-20 items-center justify-center rounded-3xl border-3 border-amber-300 border-b-[6px] bg-gradient-to-br from-amber-100 to-amber-200 text-4xl shadow-md animate-bounce">
        📚
      </div>
      <div className="flex items-center gap-2.5">
        <Loader2 className="size-5 animate-spin text-amber-600 sm:size-6" />
        <span className="text-lg font-black text-slate-800 sm:text-xl">
          Đang mở bài học cho con...
        </span>
      </div>
      <p className="text-xs font-bold text-slate-500 sm:text-sm">
        Sắp xong rồi đây! 🚀
      </p>
    </div>
  );
}
