import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { z } from "zod";
import { connectDB } from "@/lib/db";
import UserModel from "@/models/User";

const registerSchema = z.object({
  name: z.string().trim().min(1, "Vui lòng nhập tên").max(100),
  email: z.string().trim().toLowerCase().email("Email không hợp lệ"),
  password: z.string().min(6, "Mật khẩu phải có ít nhất 6 ký tự").max(100),
  grade: z.number().int().min(1).max(5).nullable().optional(),
});

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = registerSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Dữ liệu không hợp lệ" },
      { status: 400 }
    );
  }

  const { name, email, password, grade } = parsed.data;

  await connectDB();

  const existing = await UserModel.findOne({ email });
  if (existing) {
    return NextResponse.json({ error: "Email đã được đăng ký" }, { status: 409 });
  }

  const passwordHash = await bcrypt.hash(password, 10);
  await UserModel.create({ name, email, passwordHash, grade: grade ?? null });

  return NextResponse.json({ ok: true });
}
