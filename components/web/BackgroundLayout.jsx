// components/BackgroundLayout.jsx
"use client";

export default function BackgroundLayout({ children }) {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-white dark:bg-zinc-950 transition-colors duration-300">
      {/* ── Background blobs ── */}
      <div
        aria-hidden
        className="
          pointer-events-none absolute -top-32 -right-32 w-140 h-140
          rounded-full blur-[120px]
          bg-violet-100/60 dark:bg-violet-900/20
        "
      />
      <div
        aria-hidden
        className="
          pointer-events-none absolute bottom-0 -left-24 w-100 h-100
          rounded-full blur-[100px]
          bg-purple-50/80 dark:bg-purple-950/30
        "
      />

      {/* ── Dot-grid texture ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30 dark:opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle, currentColor 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          color: "rgb(148 163 184)", // slate-400 visible in both modes
        }}
      />

      {/* ── Page content ── */}
      {children}
    </div>
  );
}
