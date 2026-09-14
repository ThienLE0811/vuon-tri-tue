"use client";

import { useEffect, useState, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { Loader2 } from "lucide-react";

function RouteProgressInternal() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  // Reset when route changes successfully
  useEffect(() => {
    setIsLoading(false);
    setProgress(100);
    const timer = setTimeout(() => {
      setProgress(0);
    }, 300);
    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  // Animate progress bar while loading
  useEffect(() => {
    if (!isLoading) return;

    setProgress(20);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 85) return prev;
        return prev + 12;
      });
    }, 200);

    const safetyTimer = setTimeout(() => {
      setIsLoading(false);
      setProgress(0);
    }, 8000);

    return () => {
      clearInterval(interval);
      clearTimeout(safetyTimer);
    };
  }, [isLoading]);

  // Global listeners for internal navigation and custom events
  useEffect(() => {
    const handleRouteStart = () => setIsLoading(true);
    const handleRouteEnd = () => {
      setIsLoading(false);
      setProgress(100);
      setTimeout(() => setProgress(0), 300);
    };

    window.addEventListener("app:route-start", handleRouteStart);
    window.addEventListener("app:route-end", handleRouteEnd);

    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (
        !href ||
        href.startsWith("#") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        target.target === "_blank" ||
        e.ctrlKey ||
        e.metaKey ||
        e.shiftKey ||
        e.altKey
      ) {
        return;
      }

      try {
        const targetUrl = new URL(href, window.location.origin);
        const currentUrl = new URL(window.location.href);

        if (
          targetUrl.origin === currentUrl.origin &&
          targetUrl.pathname + targetUrl.search !== currentUrl.pathname + currentUrl.search
        ) {
          setIsLoading(true);
        }
      } catch {
        // Ignore invalid URL parse
      }
    };

    document.addEventListener("click", handleClick, { capture: true });

    return () => {
      window.removeEventListener("app:route-start", handleRouteStart);
      window.removeEventListener("app:route-end", handleRouteEnd);
      document.removeEventListener("click", handleClick, { capture: true });
    };
  }, []);

  if (!isLoading && progress === 0) return null;

  return (
    <>
      {/* Top 3D Progress Bar */}
      <div className="pointer-events-none fixed top-0 left-0 right-0 z-[9999] h-1.5 overflow-hidden bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-emerald-500 via-amber-400 to-emerald-400 shadow-sm transition-all duration-200 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Floating 3D Loading Pill at Top Right */}
      {isLoading && (
        <div className="pointer-events-none fixed top-4 right-4 z-[9999] flex items-center gap-2 rounded-2xl border-2 border-emerald-300 border-b-4 bg-white/95 px-3.5 py-1.5 text-xs font-black text-emerald-800 shadow-lg backdrop-blur-sm animate-in fade-in zoom-in-95 duration-150">
          <Loader2 className="size-4 animate-spin text-emerald-600" />
          <span>Đang chuyển trang... 🚀</span>
        </div>
      )}
    </>
  );
}

export function RouteProgress() {
  return (
    <Suspense fallback={null}>
      <RouteProgressInternal />
    </Suspense>
  );
}
