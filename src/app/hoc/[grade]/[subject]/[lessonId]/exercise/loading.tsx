import { Loader2 } from "lucide-react";

export default function ExerciseLoading() {
  return (
    <div className="mx-auto flex min-h-[55vh] w-full max-w-3xl flex-1 flex-col items-center justify-center gap-4 p-6 text-center">
      <div className="flex size-20 items-center justify-center rounded-3xl border-3 border-sky-300 border-b-[6px] bg-gradient-to-br from-sky-100 to-sky-200 text-4xl shadow-md animate-bounce">
        📝
      </div>
      <div className="flex items-center gap-2.5">
        <Loader2 className="size-5 animate-spin text-sky-600 sm:size-6" />
        <span className="text-lg font-black text-slate-800 sm:text-xl">
          Đang chuẩn bị bài tập trắc nghiệm...
        </span>
      </div>
      <p className="text-xs font-bold text-slate-500 sm:text-sm">
        Bé hãy sẵn sàng trả lời nhé! 🌟
      </p>
    </div>
  );
}
