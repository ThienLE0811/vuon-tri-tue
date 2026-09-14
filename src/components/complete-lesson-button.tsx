"use client";

import { useTransition } from "react";
import { markLessonComplete } from "@/lib/actions/progress";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { fireCelebrationConfetti } from "@/lib/confetti";
import { playFanfare } from "@/lib/audio";

interface CompleteLessonButtonProps {
  lessonId: string;
  path: string;
  isCompleted: boolean;
}

export function CompleteLessonButton({
  lessonId,
  path,
  isCompleted,
}: CompleteLessonButtonProps) {
  const [isPending, startTransition] = useTransition();

  if (isCompleted) {
    return (
      <div className="flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-emerald-300 border-b-4 bg-emerald-100 py-4 text-base font-black text-emerald-800 shadow-sm sm:text-lg">
        <span>🎉</span> Bé đã hoàn thành bài học này rồi!
      </div>
    );
  }

  const handleComplete = () => {
    if (isPending) return;

    startTransition(async () => {
      try {
        await markLessonComplete(lessonId, path);
        fireCelebrationConfetti();
        playFanfare();
        toast.success("Tuyệt vời! Bé đã hoàn thành bài học! 🌟");
      } catch {
        toast.error("Có lỗi xảy ra, con hãy thử lại nhé!");
      }
    });
  };

  return (
    <button
      type="button"
      onClick={handleComplete}
      disabled={isPending}
      className="btn-3d btn-3d-green flex w-full items-center justify-center gap-2.5 py-4 text-base font-black tracking-wide sm:text-lg disabled:opacity-75 disabled:pointer-events-none disabled:cursor-not-allowed"
    >
      {isPending ? (
        <>
          <Loader2 className="size-5 animate-spin sm:size-6" />
          <span>Đang lưu tiến độ... ⏳</span>
        </>
      ) : (
        <>
          <span>Đánh dấu đã học xong ⭐</span>
        </>
      )}
    </button>
  );
}
