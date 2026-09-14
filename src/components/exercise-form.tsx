"use client";

import { useState, useTransition } from "react";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import {
  submitExercise,
  type SubmitExerciseResult,
} from "@/lib/actions/exercise";
import { fireCelebrationConfetti, fireSuperConfetti } from "@/lib/confetti";
import { playTing, playSuccessSound, playFanfare } from "@/lib/audio";
import { SpeechButton } from "@/components/speech-button";

interface ExerciseQuestion {
  id: string;
  content: string;
  options: string[];
}

interface ExerciseFormProps {
  exerciseId: string;
  path: string;
  questions: ExerciseQuestion[];
  subject?: string;
}

export function ExerciseForm({
  exerciseId,
  path,
  questions,
  subject,
}: ExerciseFormProps) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [result, setResult] = useState<SubmitExerciseResult | null>(null);
  const [isPending, startTransition] = useTransition();

  const speechLang = subject === "tieng-anh" ? "en-US" : "vi-VN";

  const allAnswered = questions.every((q) => answers[q.id]);

  const handleSelect = (questionId: string, option: string) => {
    if (result) return;
    playTing();
    setAnswers((prev) => ({ ...prev, [questionId]: option }));
  };

  const handleSubmit = () => {
    if (isPending || !allAnswered) return;

    startTransition(async () => {
      try {
        const graded = await submitExercise(exerciseId, answers, path);
        setResult(graded);

        if (graded.score === graded.totalQuestions && graded.totalQuestions > 0) {
          fireSuperConfetti();
          playFanfare();
          toast.success("Xuất sắc! Bạn đã trả lời đúng 100% tất cả các câu! 🏆");
        } else if (graded.score > 0) {
          fireCelebrationConfetti();
          playSuccessSound();
          toast.success(`Chúc mừng! Bạn làm đúng ${graded.score}/${graded.totalQuestions} câu! 🌟`);
        } else {
          toast.info("Bạn hãy xem lại giải thích và thử lại nhé! Cố lên nào! 💪");
        }
      } catch {
        toast.error("Có lỗi xảy ra, bạn hãy thử lại nhé!");
      }
    });
  };

  const handleRetry = () => {
    setAnswers({});
    setResult(null);
  };

  const gradedById = new Map(result?.questions.map((q) => [q.questionId, q]) ?? []);

  return (
    <div className="flex flex-col gap-5">
      {result && (
        <div className="rounded-3xl border-2 border-emerald-300 border-b-4 bg-emerald-50 p-5 text-center shadow-sm">
          <p className="text-lg font-black text-emerald-800 sm:text-xl">
            🎉 Bạn đạt {result.score}/{result.totalQuestions} câu đúng!
          </p>
        </div>
      )}

      {questions.map((question, index) => {
        const graded = gradedById.get(question.id);
        const selected = answers[question.id];

        return (
          <div
            key={question.id}
            className="rounded-3xl border-2 border-slate-200 border-b-4 bg-white p-5 shadow-sm"
          >
            <div className="mb-4 flex items-start justify-between gap-3">
              <p className="text-base font-extrabold text-slate-800 sm:text-lg">
                Câu {index + 1}. {question.content}
              </p>
              <SpeechButton
                text={question.content}
                lang={speechLang}
                label="Nghe 🔊"
                size="sm"
                className="shrink-0"
              />
            </div>

            <div className="flex flex-col gap-2.5">
              {question.options.map((option, optionIndex) => {
                const isSelected = selected === option;
                const isCorrectOption = graded && option === graded.correctAnswer;
                const isWrongSelected = graded && isSelected && !graded.correct;
                const letter = String.fromCharCode(65 + optionIndex);

                let stateClass =
                  "border-slate-200 border-b-3 bg-white hover:border-slate-300";
                let letterClass = "border-slate-300 bg-slate-100 text-slate-600";
                if (graded) {
                  if (isCorrectOption) {
                    stateClass = "border-emerald-400 border-b-3 bg-emerald-100";
                    letterClass = "border-emerald-500 bg-emerald-500 text-white";
                  } else if (isWrongSelected) {
                    stateClass = "border-rose-400 border-b-3 bg-rose-100";
                    letterClass = "border-rose-500 bg-rose-500 text-white";
                  } else {
                    stateClass = "border-slate-200 border-b-3 bg-white opacity-60";
                  }
                } else if (isSelected) {
                  stateClass = "border-sky-400 border-b-3 bg-sky-50";
                  letterClass = "border-sky-500 bg-sky-500 text-white";
                }

                return (
                  <button
                    key={option}
                    type="button"
                    disabled={!!result}
                    onClick={() => handleSelect(question.id, option)}
                    className={`flex items-center gap-3 rounded-2xl border-2 px-4 py-2.5 text-left text-sm font-bold text-slate-700 transition-all disabled:cursor-not-allowed sm:text-base ${stateClass}`}
                  >
                    <span
                      className={`flex size-7 shrink-0 items-center justify-center rounded-full border-2 text-xs font-black transition-colors sm:size-8 sm:text-sm ${letterClass}`}
                    >
                      {letter}
                    </span>
                    <span className="flex-1">{option}</span>
                    {graded && isCorrectOption && <span>✅</span>}
                    {isWrongSelected && <span>❌</span>}
                  </button>
                );
              })}
            </div>

            {graded && graded.explanation && (
              <p className="mt-3 rounded-xl bg-slate-50 p-3 text-sm font-medium text-slate-600">
                💡 {graded.explanation}
              </p>
            )}
          </div>
        );
      })}

      {result ? (
        <button
          type="button"
          onClick={handleRetry}
          className="btn-3d btn-3d-white w-full py-4 text-base font-black tracking-wide sm:text-lg"
        >
          Làm lại bài tập 🔄
        </button>
      ) : (
        <button
          type="button"
          onClick={handleSubmit}
          disabled={isPending || !allAnswered}
          className="btn-3d btn-3d-green w-full py-4 text-base font-black tracking-wide disabled:opacity-60 disabled:pointer-events-none sm:text-lg"
        >
          {isPending ? (
            <span className="flex items-center justify-center gap-2.5">
              <Loader2 className="size-5 animate-spin sm:size-6" />
              Đang chấm bài... ⏳
            </span>
          ) : (
            "Nộp bài 📝"
          )}
        </button>
      )}
    </div>
  );
}
