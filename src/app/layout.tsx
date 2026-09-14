import type { Metadata } from "next";
import { Nunito, Geist_Mono } from "next/font/google";
import { Providers } from "@/components/providers";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin", "vietnamese"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vườn Trí Tuệ",
  description: "Web học tập cho học sinh tiểu học",
  other: {
    "color-scheme": "light",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="vi"
      style={{ colorScheme: "light" }}
      className={`${nunito.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
