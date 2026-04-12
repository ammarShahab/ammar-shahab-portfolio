"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

// ─── Animation Variants ────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

// ─── Skill Pills ───────────────────────────────────────────────────────────
/* const SKILLS = [
  {
    label: "React",
    color:
      "bg-cyan-50   dark:bg-cyan-950/50  text-cyan-700   dark:text-cyan-300  border-cyan-200   dark:border-cyan-800/60",
  },
  {
    label: "Next.js",
    color:
      "bg-zinc-100  dark:bg-zinc-800     text-zinc-700   dark:text-zinc-200  border-zinc-200   dark:border-zinc-700",
  },
  {
    label: "TypeScript",
    color:
      "bg-blue-50   dark:bg-blue-950/50  text-blue-700   dark:text-blue-300  border-blue-200   dark:border-blue-800/60",
  },
  {
    label: "Tailwind",
    color:
      "bg-teal-50   dark:bg-teal-950/50  text-teal-700   dark:text-teal-300  border-teal-200   dark:border-teal-800/60",
  },
  {
    label: "Node.js",
    color:
      "bg-green-50  dark:bg-green-950/50 text-green-700  dark:text-green-300 border-green-200  dark:border-green-800/60",
  },
  {
    label: "Express.js",
    color:
      "bg-zinc-100  dark:bg-zinc-800     text-zinc-600   dark:text-zinc-300  border-zinc-200   dark:border-zinc-700",
  },
  {
    label: "MongoDB",
    color:
      "bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/60",
  },
  {
    label: "Firebase",
    color:
      "bg-orange-50 dark:bg-orange-950/50 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-800/60",
  },
  {
    label: "PostgreSQL",
    color:
      "bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800/60",
  },
  {
    label: "JWT",
    color:
      "bg-rose-50   dark:bg-rose-950/50  text-rose-700   dark:text-rose-300  border-rose-200   dark:border-rose-800/60",
  },
]; */

// ─── Stat Items ────────────────────────────────────────────────────────────
const STATS = [
  { value: "6mo", label: "Bootcamp" },
  { value: "4mo", label: "Internship" },
  { value: "10+", label: "Tech Stack" },
];

export default function About() {
  const ref = useRef(null);
  // Trigger animations when section enters the viewport
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="about" className="relative z-10 py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* ── Section label ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="flex items-center gap-3 mb-16"
        >
          <span className="h-px w-10 bg-violet-400 dark:bg-violet-600" />
          <span className="text-xl font-bold uppercase tracking-[0.2em] text-violet-500 dark:text-violet-400">
            About Me
          </span>
        </motion.div>

        {/* ── Two-column grid ── */}
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* ══════════════════════════
              LEFT — SVG Illustration
          ══════════════════════════ */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="flex justify-center items-center order-2 md:order-1"
          >
            <div className="relative w-full max-w-md">
              {/* Glowing backdrop behind the SVG */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-100/80 to-purple-50/60 dark:from-violet-950/40 dark:to-purple-950/20 blur-2xl -z-10 scale-90" />

              {/* Card wrapper */}
              <div className="relative rounded-3xl border border-violet-100 dark:border-violet-900/40 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-sm p-8 shadow-[0_8px_40px_rgba(99,14,212,0.08)] dark:shadow-[0_8px_40px_rgba(99,14,212,0.20)]">
                {/* ── Developer SVG Illustration ── */}
                <svg
                  viewBox="0 0 400 380"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-auto"
                >
                  {/* Monitor frame */}
                  <rect
                    x="60"
                    y="30"
                    width="280"
                    height="200"
                    rx="16"
                    fill="#f5f3ff"
                    className="dark:fill-zinc-800"
                    stroke="#ddd6fe"
                    strokeWidth="2"
                  />
                  {/* Screen inner */}
                  <rect
                    x="76"
                    y="46"
                    width="248"
                    height="168"
                    rx="8"
                    fill="#1e1b4b"
                    className="dark:fill-zinc-950"
                  />

                  {/* Code lines on screen */}
                  {/* Line 1 - purple keyword */}
                  <rect
                    x="92"
                    y="64"
                    width="48"
                    height="7"
                    rx="3.5"
                    fill="#a78bfa"
                  />
                  {/* Line 1 - white text */}
                  <rect
                    x="148"
                    y="64"
                    width="72"
                    height="7"
                    rx="3.5"
                    fill="#e2e8f0"
                    opacity="0.7"
                  />
                  <rect
                    x="228"
                    y="64"
                    width="36"
                    height="7"
                    rx="3.5"
                    fill="#34d399"
                    opacity="0.8"
                  />

                  {/* Line 2 - indented */}
                  <rect
                    x="108"
                    y="81"
                    width="36"
                    height="7"
                    rx="3.5"
                    fill="#f472b6"
                    opacity="0.9"
                  />
                  <rect
                    x="152"
                    y="81"
                    width="56"
                    height="7"
                    rx="3.5"
                    fill="#e2e8f0"
                    opacity="0.5"
                  />
                  <rect
                    x="216"
                    y="81"
                    width="28"
                    height="7"
                    rx="3.5"
                    fill="#fbbf24"
                    opacity="0.8"
                  />

                  {/* Line 3 */}
                  <rect
                    x="108"
                    y="98"
                    width="52"
                    height="7"
                    rx="3.5"
                    fill="#60a5fa"
                    opacity="0.9"
                  />
                  <rect
                    x="168"
                    y="98"
                    width="40"
                    height="7"
                    rx="3.5"
                    fill="#e2e8f0"
                    opacity="0.5"
                  />

                  {/* Line 4 - purple */}
                  <rect
                    x="92"
                    y="115"
                    width="44"
                    height="7"
                    rx="3.5"
                    fill="#a78bfa"
                  />
                  <rect
                    x="144"
                    y="115"
                    width="64"
                    height="7"
                    rx="3.5"
                    fill="#34d399"
                    opacity="0.7"
                  />

                  {/* Line 5 */}
                  <rect
                    x="108"
                    y="132"
                    width="30"
                    height="7"
                    rx="3.5"
                    fill="#f472b6"
                    opacity="0.8"
                  />
                  <rect
                    x="146"
                    y="132"
                    width="80"
                    height="7"
                    rx="3.5"
                    fill="#e2e8f0"
                    opacity="0.45"
                  />

                  {/* Line 6 */}
                  <rect
                    x="108"
                    y="149"
                    width="60"
                    height="7"
                    rx="3.5"
                    fill="#60a5fa"
                    opacity="0.8"
                  />
                  <rect
                    x="176"
                    y="149"
                    width="32"
                    height="7"
                    rx="3.5"
                    fill="#fbbf24"
                    opacity="0.7"
                  />

                  {/* Line 7 */}
                  <rect
                    x="92"
                    y="166"
                    width="36"
                    height="7"
                    rx="3.5"
                    fill="#a78bfa"
                  />

                  {/* Cursor blink */}
                  <rect
                    x="136"
                    y="166"
                    width="3"
                    height="9"
                    rx="1.5"
                    fill="#a78bfa"
                    opacity="0.9"
                  >
                    <animate
                      attributeName="opacity"
                      values="0.9;0;0.9"
                      dur="1.2s"
                      repeatCount="indefinite"
                    />
                  </rect>

                  {/* Terminal bar */}
                  <rect
                    x="76"
                    y="185"
                    width="248"
                    height="29"
                    rx="0"
                    fill="#0f172a"
                  />
                  <rect
                    x="76"
                    y="185"
                    width="248"
                    height="29"
                    rx="0"
                    fill="url(#term-grad)"
                  />
                  <defs>
                    <linearGradient id="term-grad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#1e1b4b" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#000" stopOpacity="0.6" />
                    </linearGradient>
                  </defs>
                  <rect
                    x="92"
                    y="193"
                    width="36"
                    height="5"
                    rx="2.5"
                    fill="#34d399"
                    opacity="0.8"
                  />
                  <rect
                    x="136"
                    y="193"
                    width="68"
                    height="5"
                    rx="2.5"
                    fill="#e2e8f0"
                    opacity="0.4"
                  />

                  {/* Monitor stand */}
                  <rect
                    x="180"
                    y="230"
                    width="40"
                    height="28"
                    rx="4"
                    fill="#ddd6fe"
                    className="dark:fill-zinc-700"
                  />
                  <rect
                    x="155"
                    y="255"
                    width="90"
                    height="10"
                    rx="5"
                    fill="#c4b5fd"
                    className="dark:fill-zinc-600"
                  />

                  {/* ── Floating tech badges ── */}
                  {/* React badge */}
                  <g>
                    <rect
                      x="20"
                      y="50"
                      width="76"
                      height="28"
                      rx="14"
                      fill="#ecfeff"
                      stroke="#a5f3fc"
                      strokeWidth="1.2"
                    />
                    <circle
                      cx="38"
                      cy="64"
                      r="7"
                      fill="#22d3ee"
                      opacity="0.2"
                    />
                    <circle cx="38" cy="64" r="4" fill="#06b6d4" />
                    <text
                      x="50"
                      y="68.5"
                      fontSize="9"
                      fontWeight="700"
                      fill="#0891b2"
                      fontFamily="monospace"
                    >
                      React
                    </text>
                  </g>

                  {/* Node badge */}
                  <g>
                    <rect
                      x="308"
                      y="50"
                      width="76"
                      height="28"
                      rx="14"
                      fill="#f0fdf4"
                      stroke="#86efac"
                      strokeWidth="1.2"
                    />
                    <circle
                      cx="326"
                      cy="64"
                      r="7"
                      fill="#22c55e"
                      opacity="0.2"
                    />
                    <circle cx="326" cy="64" r="4" fill="#16a34a" />
                    <text
                      x="338"
                      y="68.5"
                      fontSize="9"
                      fontWeight="700"
                      fill="#15803d"
                      fontFamily="monospace"
                    >
                      Node
                    </text>
                  </g>

                  {/* MongoDB badge */}
                  <g>
                    <rect
                      x="20"
                      y="200"
                      width="88"
                      height="28"
                      rx="14"
                      fill="#f0fdf4"
                      stroke="#86efac"
                      strokeWidth="1.2"
                    />
                    <circle
                      cx="38"
                      cy="214"
                      r="7"
                      fill="#10b981"
                      opacity="0.2"
                    />
                    <circle cx="38" cy="214" r="4" fill="#059669" />
                    <text
                      x="50"
                      y="218.5"
                      fontSize="9"
                      fontWeight="700"
                      fill="#047857"
                      fontFamily="monospace"
                    >
                      MongoDB
                    </text>
                  </g>

                  {/* Next.js badge */}
                  <g>
                    <rect
                      x="296"
                      y="200"
                      width="88"
                      height="28"
                      rx="14"
                      fill="#fafafa"
                      stroke="#d1d5db"
                      strokeWidth="1.2"
                    />
                    <circle
                      cx="314"
                      cy="214"
                      r="7"
                      fill="#71717a"
                      opacity="0.2"
                    />
                    <circle cx="314" cy="214" r="4" fill="#3f3f46" />
                    <text
                      x="326"
                      y="218.5"
                      fontSize="9"
                      fontWeight="700"
                      fill="#27272a"
                      fontFamily="monospace"
                    >
                      Next.js
                    </text>
                  </g>

                  {/* ── Stats row ── */}
                  <g>
                    {/* bg pill */}
                    <rect
                      x="70"
                      y="296"
                      width="260"
                      height="60"
                      rx="16"
                      fill="#f5f3ff"
                      className="dark:fill-zinc-800"
                      stroke="#ddd6fe"
                      strokeWidth="1.5"
                    />

                    {/* stat 1 */}
                    <text
                      x="130"
                      y="320"
                      textAnchor="middle"
                      fontSize="18"
                      fontWeight="800"
                      fill="#7c3aed"
                      fontFamily="sans-serif"
                    >
                      6mo
                    </text>
                    <text
                      x="130"
                      y="336"
                      textAnchor="middle"
                      fontSize="9"
                      fill="#9ca3af"
                      fontFamily="sans-serif"
                      fontWeight="600"
                    >
                      Bootcamp
                    </text>

                    {/* divider */}
                    <line
                      x1="165"
                      y1="304"
                      x2="165"
                      y2="348"
                      className="stroke-purple-200"
                      strokeWidth="1"
                    />

                    {/* stat 2 */}
                    <text
                      x="200"
                      y="320"
                      textAnchor="middle"
                      fontSize="18"
                      fontWeight="800"
                      fill="#7c3aed"
                      fontFamily="sans-serif"
                    >
                      4mo
                    </text>
                    <text
                      x="200"
                      y="336"
                      textAnchor="middle"
                      fontSize="9"
                      fill="#9ca3af"
                      fontFamily="sans-serif"
                      fontWeight="600"
                    >
                      Internship
                    </text>

                    {/* divider */}
                    <line
                      x1="235"
                      y1="304"
                      x2="235"
                      y2="348"
                      stroke="#ddd6fe"
                      strokeWidth="1"
                    />

                    {/* stat 3 */}
                    <text
                      x="270"
                      y="320"
                      textAnchor="middle"
                      fontSize="18"
                      fontWeight="800"
                      fill="#7c3aed"
                      fontFamily="sans-serif"
                    >
                      10+
                    </text>
                    <text
                      x="270"
                      y="336"
                      textAnchor="middle"
                      fontSize="9"
                      fill="#9ca3af"
                      fontFamily="sans-serif"
                      fontWeight="600"
                    >
                      Technologies
                    </text>
                  </g>
                </svg>

                {/* Animated floating dot accents */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-violet-400 dark:bg-violet-600 opacity-70"
                />
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute -bottom-3 -left-3 w-4 h-4 rounded-full bg-purple-300 dark:bg-purple-700 opacity-60"
                />
              </div>
            </div>
          </motion.div>

          {/* ══════════════════════════
              RIGHT — Text Content
          ══════════════════════════ */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="flex flex-col gap-8 order-1 md:order-2"
          >
            {/* Headline */}
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
            >
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter leading-tight text-zinc-900 dark:text-zinc-50">
                Passionate about{" "}
                <span className="relative inline-block text-violet-600 dark:text-violet-400">
                  crafting
                  <svg
                    className="absolute -bottom-1 left-0 w-full"
                    viewBox="0 0 140 6"
                    fill="none"
                  >
                    <path
                      d="M2 4 C40 1, 100 1, 138 4"
                      stroke="#7c3aed"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      opacity="0.5"
                    />
                  </svg>
                </span>{" "}
                the web.
              </h2>
            </motion.div>

            {/* Paragraphs */}
            <div className="flex flex-col gap-5">
              {[
                "I’m a frontend-focused MERN stack developer with a strong foundation built through a six-month bootcamp and four months of hands-on internship experience. I specialize in building responsive, user-centric interfaces using HTML, CSS, Tailwind, JavaScript, React, Next.js, and TypeScript. I’ve also expanded into backend development with Node.js, Express.js, MongoDB, Firebase, and JWT authentication.",
                "Currently, I’m exploring PostgreSQL to strengthen my understanding of relational databases. I enjoy turning ideas into seamless digital experiences with clean UI and optimized performance. I focus on writing scalable, maintainable code that delivers real value.Beyond coding, I enjoy creative activities, sports, and staying updated with new technologies.",
              ].map((para, i) => (
                <motion.p
                  key={i}
                  custom={i + 1}
                  variants={fadeUp}
                  initial="hidden"
                  animate={isInView ? "show" : "hidden"}
                  className="text-base leading-relaxed text-zinc-500 dark:text-zinc-400"
                >
                  {para}
                </motion.p>
              ))}
            </div>

            {/* Skill pills */}
            {/*  <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              className="flex flex-col gap-3"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                Tech Stack
              </span>
              <div className="flex flex-wrap gap-2">
                {SKILLS.map(({ label, color }, i) => (
                  <motion.span
                    key={label}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={
                      isInView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.85 }
                    }
                    transition={{
                      delay: 0.6 + i * 0.05,
                      duration: 0.4,
                      ease: "easeOut",
                    }}
                    whileHover={{ scale: 1.08, y: -2 }}
                    className={`px-3 py-1.5 rounded-full text-xs font-bold border transition-transform duration-200 cursor-default ${color}`}
                  >
                    {label}
                  </motion.span>
                ))}
              </div>
            </motion.div> */}

            {/* CTA row */}
            <motion.div
              custom={5}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              className="flex flex-wrap gap-3 pt-2"
            >
              <Link href="#contact">
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(99,14,212,0.30)",
                  }}
                  whileTap={{ scale: 0.96 }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm
                  bg-gradient-to-br from-violet-600 to-purple-700 text-white
                  shadow-[0_4px_16px_rgba(99,14,212,0.22)] transition-shadow duration-300"
                >
                  Let&apos;s Work Together
                  <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.div>
              </Link>

              {/* <motion.a
                href="/resume.pdf"
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm
                  border border-zinc-200 dark:border-zinc-700
                  bg-white dark:bg-zinc-900
                  text-zinc-700 dark:text-zinc-200
                  hover:bg-zinc-50 dark:hover:bg-zinc-800
                  transition-colors duration-200"
              >
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M8 2v8M5 7l3 3 3-3M3 12h10"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Download Resume
              </motion.a> */}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
