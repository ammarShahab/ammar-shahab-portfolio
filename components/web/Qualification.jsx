"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

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

// ─── Data ──────────────────────────────────────────────────────────────────
const EXPERIENCE = [
  {
    company: "Digi5",
    role: "Full-Stack Developer (Intern)",
    period: "Sep 2025 - Jan 2026",
    description:
      "Developed a CMS-based marketing platform using React and Laravel.",
    skills: ["React", "Tailwind", "Laravel", "MySQL"],
  },
];

const EDUCATION = [
  {
    degree: "M.Pharm",
    field: "Master of Pharmacy",
    institution: "State University of Bangladesh",
    year: "2017",
    /* description:
      "Advanced pharmaceutical studies with focus on drug development and clinical research.", */
  },
  {
    degree: "B.Pharm",
    field: "Bachelor of Pharmacy",
    institution: "University of Asia Pacific",
    year: "2009",
    // description:
    //   "Foundation in pharmaceutical sciences, chemistry, and healthcare systems.",
  },
];

export default function Qualification() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="qualification" className="relative z-10 py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* ── Section label ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="flex items-center gap-3 mb-6"
        >
          <span className="h-px w-10 bg-violet-400 dark:bg-violet-600" />
          <span className="text-xl font-bold uppercase tracking-[0.2em] text-violet-500 dark:text-violet-400">
            Qualification
          </span>
        </motion.div>

        {/* ── Headline ── */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="text-center mb-4"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter leading-tight text-zinc-900 dark:text-zinc-50">
            My personal journey
          </h2>
          {/* <p className="text-base text-zinc-500 dark:text-zinc-400 mt-3">
            My personal journey
          </p> */}
        </motion.div>

        {/* ── Category Labels ── */}
        <motion.div
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="flex justify-center gap-12 mb-16 mt-12"
        >
          {/* Experience Label */}
          <div className="flex items-center gap-3">
            <svg
              className="w-6 h-6 text-violet-600 dark:text-violet-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
            <span className="text-lg font-bold text-zinc-900 dark:text-zinc-50">
              Experience
            </span>
          </div>

          {/* Education Label */}
          <div className="flex items-center gap-3">
            <svg
              className="w-6 h-6 text-violet-600 dark:text-violet-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>
            <span className="text-lg font-bold text-zinc-900 dark:text-zinc-50">
              Education
            </span>
          </div>
        </motion.div>

        {/* ══════════════════════════
            UNIFIED TIMELINE
        ══════════════════════════ */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-violet-200 via-violet-300 to-violet-100 dark:from-violet-900 dark:via-violet-800 dark:to-violet-900/50" />

            {/* ── EXPERIENCE ITEMS (Left Side) ── */}
            {EXPERIENCE.map((exp, index) => (
              <motion.div
                key={`exp-${index}`}
                custom={index + 2}
                variants={fadeLeft}
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
                className="relative grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
              >
                {/* Left side - Content */}
                <div className="md:text-right md:pr-12">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -4 }}
                    transition={{ duration: 0.3 }}
                    className="relative rounded-2xl border border-violet-100 dark:border-violet-900/40 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-sm p-6 shadow-[0_4px_20px_rgba(99,14,212,0.08)] dark:shadow-[0_4px_20px_rgba(99,14,212,0.15)]"
                  >
                    {/* Glowing dot */}
                    <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-violet-600 dark:bg-violet-400 shadow-[0_0_20px_rgba(124,58,237,0.6)] -right-9 hidden md:block" />

                    <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-1">
                      {exp.company}
                    </h3>
                    <p className="text-sm font-semibold text-violet-600 dark:text-violet-400 mb-1">
                      {exp.role}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 mb-4 md:justify-end">
                      <svg
                        className="w-3.5 h-3.5"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                      >
                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                      </svg>
                      {exp.period}
                    </div>
                    <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 mb-4">
                      {exp.description}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 md:justify-end">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 rounded-full text-xs font-semibold bg-violet-50 dark:bg-violet-950/40 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-800/60"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Right side - Empty spacer */}
                <div />
              </motion.div>
            ))}

            {/* ── EDUCATION ITEMS (Right Side) ── */}
            {EDUCATION.map((edu, index) => (
              <motion.div
                key={`edu-${index}`}
                custom={index + EXPERIENCE.length + 2}
                variants={fadeRight}
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
                className="relative grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
              >
                {/* Left side - Empty spacer */}
                <div />

                {/* Right side - Content */}
                <div className="md:pl-12">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -4 }}
                    transition={{ duration: 0.3 }}
                    className="relative rounded-2xl border border-violet-100 dark:border-violet-900/40 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-sm p-6 shadow-[0_4px_20px_rgba(99,14,212,0.08)] dark:shadow-[0_4px_20px_rgba(99,14,212,0.15)]"
                  >
                    {/* Glowing dot */}
                    <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-violet-600 dark:bg-violet-400 shadow-[0_0_20px_rgba(124,58,237,0.6)] -left-9 hidden md:block" />

                    <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-semibold text-violet-600 dark:text-violet-400 mb-1">
                      {edu.field}
                    </p>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">
                      {edu.institution}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 mb-4">
                      <svg
                        className="w-3.5 h-3.5"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                      >
                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                      </svg>
                      {edu.year}
                    </div>
                    <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {edu.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
