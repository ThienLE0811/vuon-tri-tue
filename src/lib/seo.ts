export const SITE_NAME = "Vườn Trí Tuệ";
export const SITE_URL =
  process.env.NEXT_PUBLIC_APP_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://vuontritue.vn");

export const DEFAULT_DESCRIPTION =
  "Nền tảng học tập trực tuyến thông minh và sinh động dành cho học sinh Tiểu học và Trung học cơ sở (THCS). Khám phá kho bài giảng đa môn học bám sát chương trình chuẩn với giọng đọc diễn cảm, hình ảnh trực quan và bài tập trắc nghiệm tương tác phong phú.";

export const DEFAULT_KEYWORDS = [
  "Vườn Trí Tuệ",
  "học trực tuyến tiểu học",
  "học trực tuyến THCS",
  "học trực tuyến cấp 2",
  "học đa môn trực tuyến",
  "bài giảng các môn học",
  "toán tiểu học và thcs",
  "tiếng việt ngữ văn",
  "tiếng anh học sinh",
  "khoa học tự nhiên",
  "lịch sử và địa lý",
  "tin học học sinh",
  "bài tập trắc nghiệm online",
  "nền tảng học tập thông minh",
];

/**
 * Remove markdown syntax (headers, links, bold, code, bullets) to get clean plain text
 * suitable for SEO meta descriptions.
 */
export function stripMarkdown(md: string): string {
  if (!md) return "";
  return md
    .replace(/!\[.*?\]\(.*?\)/g, "") // images
    .replace(/\[([^\]]+)\]\(.*?\)/g, "$1") // links
    .replace(/#{1,6}\s+/g, "") // headings
    .replace(/(\*\*|__)(.*?)\1/g, "$2") // bold
    .replace(/(\*|_)(.*?)\1/g, "$2") // italic
    .replace(/`{1,3}(.*?)`{1,3}/g, "$1") // code
    .replace(/>\s+/g, "") // blockquotes
    .replace(/[-*+]\s+/g, "") // list bullets
    .replace(/\s+/g, " ") // normalize whitespace
    .trim();
}

/**
 * Clean and truncate text to a safe length for meta descriptions (150-160 chars).
 */
export function cleanDescription(text: string, maxLength = 160): string {
  const plain = stripMarkdown(text);
  if (!plain) return DEFAULT_DESCRIPTION;
  if (plain.length <= maxLength) return plain;
  return plain.slice(0, maxLength - 1).trim() + "…";
}
