# Vườn Trí Tuệ

Web học tập cho học sinh tiểu học (Lớp 1-5). Xem chi tiết tính năng tại [docs/features_vuontritue.md](docs/features_vuontritue.md).

## Tech stack

- Next.js (App Router) + TypeScript
- MongoDB Atlas + Mongoose
- Auth.js (NextAuth v5) — đăng nhập bằng form (email/mật khẩu) hoặc Google OAuth
- Tailwind CSS + shadcn/ui

## Bắt đầu

1. Sao chép `.env.local.example` thành `.env.local` và điền:
   - `MONGODB_URI` — connection string từ MongoDB Atlas
   - `AUTH_SECRET` — tạo bằng lệnh `npx auth secret`
   - `AUTH_GOOGLE_ID` / `AUTH_GOOGLE_SECRET` — tạo tại [Google Cloud Console](https://console.cloud.google.com/apis/credentials)

2. Cài dependencies và chạy dev server:

   ```bash
   npm install
   npm run dev
   ```

3. Mở [http://localhost:3000](http://localhost:3000).

## Cấu trúc thư mục

```text
src/
  app/            # Next.js App Router (pages, API routes)
  auth.ts         # Cấu hình Auth.js đầy đủ (providers, callbacks, DB)
  auth.config.ts  # Cấu hình edge-safe dùng trong proxy.ts (middleware)
  proxy.ts        # Bảo vệ route (redirect /login nếu chưa đăng nhập)
  components/ui/  # shadcn/ui components
  lib/db.ts       # Kết nối MongoDB (Mongoose)
  models/         # Mongoose schemas: User, Lesson, Exercise, Progress, Submission
```
