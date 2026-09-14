"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brand } from "@/components/brand";
import { toast } from "sonner";

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Mật khẩu nhập lại không khớp");
      return;
    }

    setLoading(true);

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      toast.error(data.error ?? "Đăng ký thất bại");
      setLoading(false);
      return;
    }

    const result = await signIn("credentials", { email, password, redirect: false });
    setLoading(false);

    if (result?.error) {
      toast.error("Đăng ký thành công, vui lòng đăng nhập");
      router.push("/login");
      return;
    }

    router.push("/");
    router.refresh();
  }

  return (
    <main className="flex flex-1 items-center justify-center p-4">
      <div className="flex w-full max-w-sm flex-col items-center">
        <Brand />
        <Card className="w-full rounded-3xl border-2 border-slate-200 border-b-5 bg-white shadow-md">
          <CardHeader>
            <CardTitle className="text-2xl font-black text-slate-800">Đăng ký</CardTitle>
            <CardDescription className="font-semibold text-slate-500">
              Tạo tài khoản để bắt đầu học nhé! 🌟
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="font-bold text-slate-700">Tên của bé</Label>
                <Input
                  id="name"
                  required
                  placeholder="Ví dụ: Bé Bo"
                  className="rounded-xl border-2 border-slate-200 focus-visible:border-emerald-500"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="font-bold text-slate-700">Email</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  className="rounded-xl border-2 border-slate-200 focus-visible:border-emerald-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="font-bold text-slate-700">Mật khẩu</Label>
                <PasswordInput
                  id="password"
                  required
                  minLength={6}
                  className="rounded-xl border-2 border-slate-200 focus-visible:border-emerald-500"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password" className="font-bold text-slate-700">Nhập lại mật khẩu</Label>
                <PasswordInput
                  id="confirm-password"
                  required
                  minLength={6}
                  className="rounded-xl border-2 border-slate-200 focus-visible:border-emerald-500"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <Button type="submit" variant="3d-primary" size="3d-default" className="w-full" disabled={loading}>
                {loading ? "Đang đăng ký..." : "Tạo tài khoản ngay 🚀"}
              </Button>
            </form>

            <p className="text-center text-sm font-bold text-slate-500">
              Đã có tài khoản?{" "}
              <Link href="/login" className="text-emerald-700 underline underline-offset-4 hover:text-emerald-800">
                Đăng nhập
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
