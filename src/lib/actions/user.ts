"use server";

import { revalidatePath } from "next/cache";
import { auth } from "@/auth";
import { connectDB } from "@/lib/db";
import UserModel from "@/models/User";

export async function setGrade(grade: number) {
  const session = await auth();
  if (!session?.user?.id) throw new Error("Chưa đăng nhập");
  if (grade < 1 || grade > 5) throw new Error("Lớp không hợp lệ");

  await connectDB();
  await UserModel.findByIdAndUpdate(session.user.id, { grade });

  revalidatePath("/");
}
