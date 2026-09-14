"use server";

import { revalidatePath } from "next/cache";
import { auth } from "@/auth";
import { connectDB } from "@/lib/db";
import ExerciseModel from "@/models/Exercise";
import SubmissionModel from "@/models/Submission";
import { bumpStreak } from "@/lib/streak";

export type GradedQuestion = {
  questionId: string;
  correct: boolean;
  correctAnswer: string;
  explanation: string;
};

export type SubmitExerciseResult = {
  score: number;
  totalQuestions: number;
  questions: GradedQuestion[];
};

export async function submitExercise(
  exerciseId: string,
  answers: Record<string, string>,
  path: string
): Promise<SubmitExerciseResult> {
  const session = await auth();

  await connectDB();
  const exercise = await ExerciseModel.findById(exerciseId).lean();
  if (!exercise) throw new Error("Không tìm thấy bài tập");

  let score = 0;
  const gradedQuestions: GradedQuestion[] = [];
  const submissionAnswers: { questionId: string; answer: string; correct: boolean }[] = [];

  for (const question of exercise.questions) {
    const questionId = question._id.toString();
    const givenAnswer = answers[questionId] ?? "";
    const correct = givenAnswer === question.correctAnswer;
    if (correct) score++;

    gradedQuestions.push({
      questionId,
      correct,
      correctAnswer: String(question.correctAnswer),
      explanation: question.explanation ?? "",
    });
    submissionAnswers.push({ questionId, answer: givenAnswer, correct });
  }

  if (session?.user?.id) {
    await SubmissionModel.create({
      userId: session.user.id,
      exerciseId,
      answers: submissionAnswers,
      score,
      totalQuestions: exercise.questions.length,
    });
    await bumpStreak(session.user.id);

    revalidatePath(path);
  }

  return { score, totalQuestions: exercise.questions.length, questions: gradedQuestions };
}
