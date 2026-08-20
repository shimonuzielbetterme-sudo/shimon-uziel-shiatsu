import { useEffect, useState } from "react";

/**
 * Full-screen first-visit reveal: a classic yin-yang sized to 80% of the
 * smaller viewport dimension, splitting along its curved dividing line.
 */
export function YinYangIntro() {
  const [mounted, setMounted] = useState(false);
  const [done, setDone] = useState(true);

  useEffect(() => {
    setMounted(true);
    const seen = sessionStorage.getItem("su-intro-seen");
    if (seen) return;
    setDone(false);
    sessionStorage.setItem("su-intro-seen", "1");
    const t = setTimeout(() => setDone(true), 3500);
    return () => clearTimeout(t);
  }, []);

  if (!mounted || done) return null;

  const size = "min(80vw, 80vh)";

  return (
    <div
      aria-hidden="true"
      className="yy-veil fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-black"
    >
      <div className="relative" style={{ width: size, height: size }}>
        {/* dark half */}
        <svg
          viewBox="0 0 100 100"
          className="yy-half yy-dark absolute inset-0 h-full w-full"
        >
          <path
            d="M50 0 A50 50 0 0 0 50 100 A25 25 0 0 0 50 50 A25 25 0 0 1 50 0 Z"
            fill="#080808"
            stroke="#ffffff"
            strokeWidth="0.7"
            strokeOpacity="0.45"
          />
          <circle cx="50" cy="25" r="6" fill="#ffffff" />
        </svg>
        {/* light half */}
        <svg
          viewBox="0 0 100 100"
          className="yy-half yy-light absolute inset-0 h-full w-full"
        >
          <path
            d="M50 0 A50 50 0 0 1 50 100 A25 25 0 0 1 50 50 A25 25 0 0 0 50 0 Z"
            fill="#ffffff"
          />
          <circle cx="50" cy="75" r="6" fill="#080808" />

        </svg>
      </div>
    </div>
  );
}
