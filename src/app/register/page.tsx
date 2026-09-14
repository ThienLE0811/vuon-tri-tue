import type { Metadata } from "next";
import { RegisterForm } from "./register-form";

export const metadata: Metadata = {
  title: "Đăng ký tài khoản",
  description:
    "Tạo tài khoản học tập miễn phí trên Vườn Trí Tuệ để bắt đầu hành trình học tập vui nhộn và tích lũy điểm thưởng.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RegisterPage() {
  return (
    <main className="flex flex-1 items-center justify-center p-4">
      <RegisterForm />
    </main>
  );
}
