import { connectDB } from "@/lib/db";
import UserModel from "@/models/User";

const VN_OFFSET_MS = 7 * 60 * 60 * 1000;

function vnDayNumber(date: Date): number {
  return Math.floor((date.getTime() + VN_OFFSET_MS) / (24 * 60 * 60 * 1000));
}

export async function bumpStreak(userId: string): Promise<number> {
  await connectDB();
  const user = await UserModel.findById(userId).select("streak lastStudyDate");
  if (!user) return 0;

  const today = vnDayNumber(new Date());
  const last = user.lastStudyDate ? vnDayNumber(user.lastStudyDate) : null;
  if (last === today) return user.streak ?? 0;

  user.streak = last !== null && today - last === 1 ? (user.streak ?? 0) + 1 : 1;
  user.lastStudyDate = new Date();
  await user.save();
  return user.streak;
}
