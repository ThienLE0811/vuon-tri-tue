export function Brand() {
  return (
    <div className="mb-6 flex flex-col items-center gap-1.5">
      <div className="flex size-14 items-center justify-center rounded-2xl bg-emerald-500 border-2 border-emerald-600 border-b-4 text-3xl shadow-md transition-transform hover:scale-105 active:translate-y-0.5">
        🌱
      </div>
      <div className="flex flex-col items-center">
        <span className="text-xl font-extrabold text-emerald-700 tracking-tight">
          Vườn Trí Tuệ
        </span>
        <span className="text-xs font-semibold text-emerald-600/80">
          Vui học mỗi ngày ✨
        </span>
      </div>
    </div>
  );
}
