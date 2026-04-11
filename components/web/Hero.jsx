"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Stagger animation variants
const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

// Tech badges data
const TECH = ["React", "Next.js", "Tailwind", "Three.js"];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* ── Soft background blobs (non-distracting) ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-32 w-140 h-140
          rounded-full bg-violet-100/60 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 -left-24 w-100 h-100
          rounded-full bg-purple-50/80 blur-[100px]"
      />

      {/* ── Subtle dot-grid texture ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, #d4d0e0 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          opacity: 0.35,
        }}
      />

      <div
        className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-32 pb-20
        grid md:grid-cols-2 gap-16 items-center"
      >
        {/* ── Left: Text Content ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-7 order-2 md:order-1"
        >
          {/* Status badge */}
          <motion.div variants={fadeUp}>
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
              bg-violet-50 border border-violet-100 text-violet-600 text-xs font-bold uppercase tracking-widest"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
              Frontend Developer
            </span>
          </motion.div>

          {/* Headline */}
          <motion.div variants={fadeUp} className="space-y-2">
            <h1
              className="text-5xl md:text-[4.25rem] font-extrabold tracking-tighter leading-[1.08]
              text-zinc-900 font-[Manrope]"
            >
              Hey, I&apos;m{" "}
              <span className="relative inline-block">
                Luca
                {/* Underline accent */}
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 120 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.path
                    d="M2 6 C30 2, 90 2, 118 6"
                    stroke="#7c3aed"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
                  />
                </svg>
              </span>{" "}
              <motion.span
                animate={{ rotate: [0, 18, -10, 18, 0] }}
                transition={{ duration: 1.2, delay: 1.2, ease: "easeInOut" }}
                className="inline-block"
              >
                👋
              </motion.span>
            </h1>
          </motion.div>

          {/* Sub-headline */}
          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl text-zinc-500 max-w-lg leading-relaxed"
          >
            I&apos;m a frontend developer based in Italy. I&apos;ll help you
            build{" "}
            <span className="text-zinc-800 font-semibold">
              beautiful websites
            </span>{" "}
            your users will love.
          </motion.p>

          {/* CTA buttons */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
            <motion.button
              whileHover={{
                scale: 1.04,
                boxShadow: "0 12px 32px rgba(99,14,212,0.28)",
              }}
              whileTap={{ scale: 0.96 }}
              className="bg-linear-to-br from-violet-600 to-purple-700 text-white
                px-7 py-3.5 rounded-full font-bold text-base
                shadow-[0_6px_20px_rgba(99,14,212,0.22)] transition-shadow duration-300"
            >
              Get In Touch
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04, backgroundColor: "#f4f4f5" }}
              whileTap={{ scale: 0.96 }}
              className="bg-zinc-100 text-zinc-800 px-7 py-3.5 rounded-full
                font-bold text-base border border-zinc-200 transition-colors duration-200"
            >
              Browse Projects
            </motion.button>
          </motion.div>

          {/* Tech stack */}
          <motion.div
            variants={fadeUp}
            className="pt-6 border-t border-zinc-100 flex flex-col gap-3"
          >
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
              Expertise In
            </span>
            <div className="flex flex-wrap gap-5">
              {TECH.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + i * 0.08, duration: 0.5 }}
                  whileHover={{ color: "#7c3aed", scale: 1.05 }}
                  className="text-lg font-extrabold text-zinc-300 cursor-default
                    font-[Manrope] transition-colors duration-200"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* ── Right: Profile Image ── */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="show"
          className="relative order-1 md:order-2 flex justify-center items-center"
        >
          <div className="relative w-64 h-64 md:w-105 md:h-105">
            {/* Orbiting ring 1 */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-dashed border-violet-200"
              style={{ scale: 1.12 }}
            />

            {/* Orbiting ring 2 */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-dotted border-purple-100"
              style={{ scale: 1.22 }}
            />

            {/* Main image container */}
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.9,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative w-full h-full rounded-full overflow-hidden
                border-4 border-white shadow-[0_24px_64px_rgba(99,14,212,0.14)] z-10"
            >
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-7PvNNyB_-qz8Rs1-57caMAWKuGoFNktuno50FcoBsIR6FUEtTJrnG60cz9cacRf4FaNM3yMR6DkH22M9h6d1iaOmC0vtdhav6C_y00o2_fUm5GSoeOpYHO6UlNaWRdr28wzSDqz0BkCnIGEpJceos_MZF8FfEjWrAXUYCpsfi9BdmRG6_IrNG9zwRcSZENia7e-S4k6LD6Ar1SEa37IskgTtZKCLHK6vXPkJUkMkqqaA8efvvRjl70XwkTYyyb3uYkX_kssy3zCp"
                alt="Luca — Frontend Developer"
                className="w-full h-full object-cover"
                width={300}
                height={300}
              />
              {/* Subtle gradient overlay to blend edges */}
              <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/20" />
            </motion.div>

            {/* ── Floating Badge: Code icon ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
              transition={{
                opacity: { delay: 0.8, duration: 0.4 },
                scale: { delay: 0.8, duration: 0.4 },
                y: {
                  delay: 1.2,
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="absolute -top-3 -right-3 md:top-4 md:-right-8 z-20
                w-14 h-14 md:w-16 md:h-16 rounded-full
                bg-white border border-violet-100
                shadow-[0_8px_24px_rgba(99,14,212,0.15)]
                flex items-center justify-center"
            >
              <span className="material-symbols-outlined text-violet-600 text-2xl select-none">
                code
              </span>
            </motion.div>

            {/* ── Floating Badge: Available for work ── */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -bottom-4 -left-4 md:bottom-8 md:-left-12 z-20
                px-4 py-2.5 bg-white rounded-full border border-zinc-100
                shadow-[0_8px_24px_rgba(29,26,36,0.10)]
                flex items-center gap-2.5 whitespace-nowrap"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm font-bold text-zinc-800">
                Available for work
              </span>
            </motion.div>

            {/* ── Floating stat card ── */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 1.1,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-16 z-20
                px-4 py-3 bg-white rounded-2xl border border-zinc-100
                shadow-[0_8px_24px_rgba(29,26,36,0.08)]"
            >
              <p className="text-2xl font-extrabold text-zinc-900 font-[Manrope]">
                3+
              </p>
              <p className="text-xs text-zinc-400 font-medium mt-0.5">
                Years exp.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
