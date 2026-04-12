// components/web/ThemeToggle.jsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch — only render after mount
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className="
        relative flex items-center
        w-14 h-7 rounded-full p-1
        bg-zinc-200 dark:bg-zinc-700
        border border-zinc-300 dark:border-zinc-600
        transition-colors duration-500
        focus-visible:outline-none focus-visible:ring-2
        focus-visible:ring-violet-500 focus-visible:ring-offset-2
      "
    >
      {/* ── Track icons ── */}

      {/* Sun icon — left side */}
      <span className="absolute left-1.5 flex items-center justify-center">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-3.5 h-3.5 text-amber-500"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      </span>

      {/* Moon icon — right side */}
      <span className="absolute right-1.5 flex items-center justify-center">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-3.5 h-3.5 text-violet-400"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      </span>

      {/* ── Sliding thumb ── */}
      <motion.span
        layout
        animate={{ x: isDark ? 28 : 0 }} // ← slides right on dark, left on light
        transition={{ type: "spring", stiffness: 500, damping: 35 }}
        className="
          relative z-10
          w-5 h-5 rounded-full
          bg-white dark:bg-zinc-900
          shadow-[0_1px_4px_rgba(0,0,0,0.2)]
          flex items-center justify-center
        "
      >
        {/* Icon inside thumb — changes with theme */}
        {isDark ? (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="w-3 h-3 text-violet-400"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        ) : (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="w-3 h-3 text-amber-500"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
          </svg>
        )}
      </motion.span>
    </button>
  );
}
