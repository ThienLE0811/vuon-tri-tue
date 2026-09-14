"use server";

import { revalidatePath } from "next/cache";
import { auth } from "@/auth";
import { connectDB } from "@/lib/db";
import ProgressModel from "@/models/Progress";

export async function markLessonComplete(lessonId: string, path: string) {
  const session = await auth();
  if (!session?.user?.id) throw new Error("Chưa đăng nhập");

  await connectDB();
  await ProgressModel.findOneAndUpdate(
    { userId: session.user.id, lessonId },
    { completed: true, completedAt: new Date() },
    { upsert: true }
  );

  revalidatePath(path);
}
