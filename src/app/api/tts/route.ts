import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const text = searchParams.get("text");
  const lang = searchParams.get("lang") || "vi";

  if (!text || text.trim().length === 0) {
    return new NextResponse("Missing text parameter", { status: 400 });
  }

  // Cắt text tối đa 200 ký tự cho mỗi request Google TTS
  const sanitizedText = text
    .replace(/[#*`_~>[\]()]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 200);

  const ttsUrl = `https://translate.google.com/translate_tts?ie=UTF-8&tl=${lang}&client=tw-ob&q=${encodeURIComponent(
    sanitizedText
  )}`;

  try {
    const response = await fetch(ttsUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      },
    });

    if (!response.ok) {
      return new NextResponse("Failed to fetch audio from TTS provider", {
        status: response.status,
      });
    }

    const audioBuffer = await response.arrayBuffer();

    return new NextResponse(audioBuffer, {
      headers: {
        "Content-Type": "audio/mpeg",
        "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
      },
    });
  } catch (error) {
    console.error("TTS fetch error:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
