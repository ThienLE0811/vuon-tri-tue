"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Brand } from "@/components/brand";
import { toast } from "sonner";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") ?? "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const isAnyLoading = loading || googleLoading;

  async function handleGoogleSignIn() {
    if (isAnyLoading) return;
    setGoogleLoading(true);
    try {
      await signIn("google", { callbackUrl });
    } catch {
      setGoogleLoading(false);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (isAnyLoading) return;
    setLoading(true);

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    setLoading(false);

    if (result?.error) {
      toast.error("Email hoặc mật khẩu không đúng");
      return;
    }

    router.push(callbackUrl);
    router.refresh();
  }

  return (
    <div className="flex w-full max-w-sm flex-col items-center">
      <Brand />
      <Card className="w-full rounded-3xl border-2 border-slate-200 border-b-5 bg-white shadow-md">
        <CardHeader>
          <CardTitle className="text-2xl font-black text-slate-800">Đăng nhập</CardTitle>
          <CardDescription className="font-semibold text-slate-500">
            Vào học cùng Vườn Trí Tuệ nhé! 🌟
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button
            type="button"
            variant="3d-outline"
            size="3d-default"
            className="w-full flex items-center justify-center gap-2"
            disabled={isAnyLoading}
            onClick={handleGoogleSignIn}
          >
            {googleLoading ? (
              <>
                <Loader2 className="size-4 animate-spin" />
                <span>Đang kết nối Google...</span>
              </>
            ) : (
              <span>Đăng nhập với Google</span>
            )}
          </Button>

          <div className="flex items-center gap-2">
            <Separator className="flex-1" />
            <span className="text-xs font-bold text-slate-400">hoặc</span>
            <Separator className="flex-1" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="font-bold text-slate-700">Email</Label>
              <Input
                id="email"
                type="email"
                required
                disabled={isAnyLoading}
                className="rounded-xl border-2 border-slate-200 focus-visible:border-emerald-500 disabled:opacity-60"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="font-bold text-slate-700">Mật khẩu</Label>
              <PasswordInput
                id="password"
                required
                disabled={isAnyLoading}
                className="rounded-xl border-2 border-slate-200 focus-visible:border-emerald-500 disabled:opacity-60"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button
              type="submit"
              variant="3d-primary"
              size="3d-default"
              className="w-full flex items-center justify-center gap-2"
              disabled={isAnyLoading}
            >
              {loading ? (
                <>
                  <Loader2 className="size-4 animate-spin" />
                  <span>Đang đăng nhập...</span>
                </>
              ) : (
                <span>Đăng nhập ngay 🚀</span>
              )}
            </Button>
          </form>

          <p className="text-center text-sm font-bold text-slate-500">
            Chưa có tài khoản?{" "}
            <Link href="/register" className="text-emerald-700 underline underline-offset-4 hover:text-emerald-800">
              Đăng ký
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

export default function LoginPage() {
  return (
    <main className="flex flex-1 items-center justify-center p-4">
      <Suspense>
        <LoginForm />
      </Suspense>
    </main>
  );
}
