import type { Metadata } from "next";
import { Nunito, Geist_Mono } from "next/font/google";
import { Providers } from "@/components/providers";
import { SITE_NAME, SITE_URL, DEFAULT_DESCRIPTION, DEFAULT_KEYWORDS } from "@/lib/seo";
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
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Vườn Trí Tuệ – Học tập trực tuyến đa môn Tiểu học & THCS",
    template: "%s | Vườn Trí Tuệ",
  },
  description: DEFAULT_DESCRIPTION,
  keywords: DEFAULT_KEYWORDS,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Vườn Trí Tuệ – Học tập trực tuyến đa môn Tiểu học & THCS",
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: "/apple-icon.png",
        width: 512,
        height: 512,
        alt: "Vườn Trí Tuệ – Nền tảng học tập Tiểu học & THCS",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Vườn Trí Tuệ – Học tập trực tuyến đa môn Tiểu học & THCS",
    description: DEFAULT_DESCRIPTION,
    images: ["/apple-icon.png"],
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
    apple: "/apple-icon.png",
  },
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
      <body className="min-h-full flex flex-col bg-garden-pattern" suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
