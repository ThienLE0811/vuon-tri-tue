import confetti from "canvas-confetti";

/**
 * Bắn pháo hoa giấy chúc mừng sinh động cho học sinh
 */
export function fireCelebrationConfetti() {
  // Bắn đợt 1 ở giữa
  confetti({
    particleCount: 80,
    spread: 70,
    origin: { y: 0.65 },
    colors: ["#22c55e", "#f59e0b", "#3b82f6", "#ec4899", "#8b5cf6"],
  });

  // Bắn đợt 2 từ 2 bên hông sau 250ms
  setTimeout(() => {
    confetti({
      particleCount: 50,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.7 },
      colors: ["#22c55e", "#f59e0b", "#3b82f6", "#f43f5e"],
    });
    confetti({
      particleCount: 50,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.7 },
      colors: ["#22c55e", "#f59e0b", "#3b82f6", "#f43f5e"],
    });
  }, 250);
}

/**
 * Đại tiệc pháo hoa rực rỡ khi đạt điểm tối đa (100%)
 */
export function fireSuperConfetti() {
  const duration = 2.5 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

  function randomInRange(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  const interval: ReturnType<typeof setInterval> = setInterval(() => {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 40 * (timeLeft / duration);

    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.1, 0.4), y: Math.random() - 0.2 },
      colors: ["#22c55e", "#f59e0b", "#3b82f6", "#ec4899", "#a855f7"],
    });
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.6, 0.9), y: Math.random() - 0.2 },
      colors: ["#22c55e", "#f59e0b", "#3b82f6", "#ec4899", "#a855f7"],
    });
  }, 250);
}
