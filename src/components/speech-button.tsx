"use client";

import { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";

interface SpeechButtonProps {
  text: string;
  lang?: "vi-VN" | "en-US";
  label?: string;
  size?: "sm" | "default";
  className?: string;
}

export function SpeechButton({
  text,
  lang = "vi-VN",
  label,
  size = "sm",
  className = "",
}: SpeechButtonProps) {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    return () => {
      // Dọn dẹp âm thanh khi component unmount
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const handleSpeak = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    // Nếu đang phát thì dừng lại ngay
    if (isSpeaking) {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
      setIsSpeaking(false);
      return;
    }

    // Làm sạch ký tự markdown và khoảng trắng
    const cleanText = text
      .replace(/[#*`_~>[\]()]/g, " ")
      .replace(/https?:\/\/\S+/g, "")
      .replace(/\s+/g, " ")
      .trim();

    if (!cleanText) return;

    const targetLang = lang.startsWith("vi") ? "vi" : "en";

    // 1. Ưu tiên phát qua API Google TTS (giọng chuẩn tự nhiên tiếng Việt / tiếng Anh)
    try {
      if (audioRef.current) {
        audioRef.current.pause();
      }

      const ttsUrl = `/api/tts?text=${encodeURIComponent(cleanText.slice(0, 200))}&lang=${targetLang}`;
      const audio = new Audio(ttsUrl);
      audioRef.current = audio;

      audio.onplay = () => setIsSpeaking(true);
      audio.onended = () => {
        setIsSpeaking(false);
        audioRef.current = null;
      };

      audio.onerror = () => {
        // 2. Dự phòng: Dùng Web Speech API nếu gọi API gặp sự cố
        playFallbackSpeech(cleanText, lang);
      };

      audio.play().catch(() => {
        playFallbackSpeech(cleanText, lang);
      });
    } catch {
      playFallbackSpeech(cleanText, lang);
    }
  };

  const playFallbackSpeech = (cleanText: string, targetLang: string) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      setIsSpeaking(false);
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = targetLang;
    utterance.rate = 0.9;
    utterance.pitch = 1.05;

    // Tìm giọng đọc khớp ngôn ngữ nếu trình duyệt có sẵn
    const voices = window.speechSynthesis.getVoices();
    const matchedVoice = voices.find((v) =>
      targetLang.startsWith("vi")
        ? v.lang.toLowerCase().includes("vi")
        : v.lang.toLowerCase().includes("en")
    );
    if (matchedVoice) {
      utterance.voice = matchedVoice;
    }

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
  };

  const isSmall = size === "sm";

  return (
    <button
      type="button"
      onClick={handleSpeak}
      title={isSpeaking ? "Bấm để dừng đọc" : "Bấm để nghe đọc to"}
      className={`inline-flex items-center gap-1.5 rounded-full border-2 transition-all select-none active:scale-95 ${
        isSpeaking
          ? "border-amber-400 bg-amber-100 text-amber-900 border-b-3 shadow-md animate-pulse"
          : "border-slate-200 border-b-3 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50 shadow-xs"
      } ${isSmall ? "px-2.5 py-1 text-xs font-black" : "px-3.5 py-1.5 text-sm font-black"} ${className}`}
    >
      {isSpeaking ? (
        <VolumeX className={isSmall ? "size-3.5 text-amber-700" : "size-4 text-amber-700"} />
      ) : (
        <Volume2 className={isSmall ? "size-3.5 text-emerald-600" : "size-4 text-emerald-600"} />
      )}
      {label ? (
        <span>{label}</span>
      ) : (
        <span>{isSpeaking ? "Đang đọc..." : "Nghe 🔊"}</span>
      )}
    </button>
  );
}
