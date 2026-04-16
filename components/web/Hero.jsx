"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useTypewriter, Cursor } from "react-simple-typewriter";

// ─── Animation Variants ────────────────────────────────────────────────────
const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
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

// ─── Data ──────────────────────────────────────────────────────────────────
const TECH = ["React", "Next.js", "Tailwind", "Three.js"];

export default function Hero() {
  // Add this inside your Hero component, before the return
  const [text] = useTypewriter({
    words: [
      "full-stack web apps.",
      "beautiful UI experiences.",
      "REST APIs.",
      "MongoDB databases.",
      "React & Next.js frontends.",
    ],
    loop: true,
    delaySpeed: 2000,
    deleteSpeed: 40,
    typeSpeed: 65,
  });

  // Add this data near the top of your file alongside other constants
  const SOCIALS = [
    {
      label: "GitHub",
      href: "https://github.com/ammarShahab",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
        </svg>
      ),
      hoverColor: "hover:text-zinc-900 dark:hover:text-zinc-100",
      hoverBg: "hover:bg-zinc-100 dark:hover:bg-zinc-800",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/md-ammar-shahab/",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      hoverColor: "hover:text-blue-600 dark:hover:text-blue-400",
      hoverBg: "hover:bg-blue-50 dark:hover:bg-blue-950/40",
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/ammar.shahab.755217/",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.269h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
        </svg>
      ),
      hoverColor: "hover:text-blue-500 dark:hover:text-blue-400",
      hoverBg: "hover:bg-blue-50 dark:hover:bg-blue-950/40",
    },
  ];

  return (
    <section
      className="
        relative min-h-screen flex items-center overflow-hidden
       
      "
    >
      {/* ── Main grid ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-32 pb-20 grid lg:grid-cols-2 gap-16 items-center">
        {/* ════════════════════
            LEFT — Text
        ════════════════════ */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-7 order-2 lg:order-1"
        >
          {/* Headline */}
          <motion.div variants={fadeUp} className="space-y-2">
            <h1
              className="
                text-5xl md:text-[3.25rem] font-extrabold tracking-tighter leading-[1.08]
                text-zinc-900 dark:text-zinc-50
              "
            >
              Hey, I&apos;m{" "}
              <span className="relative inline-block">
                Ammar
                {/* Animated SVG underline */}
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

          {/* Sub-headline with Typewriter */}
          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl max-w-lg leading-relaxed text-zinc-500 dark:text-zinc-400"
          >
            I&apos;m a{" "}
            <span className="font-semibold text-violet-600 dark:text-violet-400">
              MERN Stack Developer
            </span>{" "}
            based in Bangladesh. I build{" "}
            <span className="font-semibold text-zinc-800 dark:text-zinc-100 inline-block min-w-0">
              {text}
              <Cursor cursorStyle="|" cursorColor="#7c3aed" />
            </span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
            {/* Primary */}
            <Link href="#contact">
              <motion.button
                whileHover={{
                  scale: 1.04,
                  boxShadow: "0 12px 32px rgba(99,14,212,0.35)",
                }}
                whileTap={{ scale: 0.96 }}
                className="
                bg-linear-to-br from-violet-600 to-purple-700 text-white
                px-7 py-3.5 rounded-full font-bold text-base
                shadow-[0_6px_20px_rgba(99,14,212,0.22)] transition-shadow duration-300
              "
              >
                Get In Touch
              </motion.button>
            </Link>

            {/* Secondary */}
            <Link href="#projects">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="
                px-7 py-3.5 rounded-full font-bold text-base border transition-colors duration-200
                bg-zinc-100 text-zinc-800 border-zinc-200
                dark:bg-zinc-800 dark:text-zinc-100 dark:border-zinc-700
                hover:bg-zinc-200 dark:hover:bg-zinc-700
              "
              >
                Browse Projects
              </motion.button>
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={fadeUp}
            className="pt-6 border-t flex flex-col gap-4 border-zinc-100 dark:border-zinc-800"
          >
            {/* <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
              Find Me On
            </span> */}
            <div className="flex items-center gap-3">
              {SOCIALS.map(({ label, href, icon, hoverColor, hoverBg }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + i * 0.08, duration: 0.5 }}
                  whileHover={{ scale: 1.12 }}
                  whileTap={{ scale: 0.94 }}
                  className={`
          flex items-center gap-2 px-4 py-2.5 rounded-full
          border border-zinc-200 dark:border-zinc-700
          text-zinc-500 dark:text-zinc-400
          transition-all duration-200 group
          ${hoverColor} ${hoverBg}
        `}
                >
                  {icon}
                  {/* <span className="text-sm font-semibold">{label}</span> */}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* ════════════════════
            RIGHT — Image
        ════════════════════ */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="show"
          className="relative order-1 lg:order-2 flex justify-center items-center"
        >
          <div className="relative w-64 h-64 md:w-105 md:h-105">
            {/* Orbiting ring 1 */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-2 border-dashed border-violet-200 dark:border-violet-800/50"
              style={{ scale: 1.12 }}
            />

            {/* Orbiting ring 2 */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-dotted border-purple-100 dark:border-purple-900/50"
              style={{ scale: 1.22 }}
            />

            {/* Main image */}
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.9,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                relative w-full h-full  rounded-full overflow-hidden z-10
                border-4 border-white dark:border-zinc-800
                shadow-[0_24px_64px_rgba(99,14,212,0.14)]
                dark:shadow-[0_24px_64px_rgba(99,14,212,0.30)]
              "
            >
              <Image
                src="/Md. Ammar Shahab Profile.png"
                alt="Ammar"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/20 dark:ring-white/10" />
            </motion.div>

            {/* Floating badge — Code icon */}
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
              className="
                absolute -top-3 -right-3 md:top-4 md:-right-8 z-20
                w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center
                border
                bg-white border-violet-100 shadow-[0_8px_24px_rgba(99,14,212,0.15)]
                dark:bg-zinc-900 dark:border-violet-800/50 dark:shadow-[0_8px_24px_rgba(99,14,212,0.30)]
              "
            >
              <span className="material-symbols-outlined text-violet-600 dark:text-violet-400 text-2xl select-none">
                <svg
                  version="1.1"
                  id="designs"
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 32 32"
                >
                  {/* <style>{`.sketchy_een { fill: #630ED44D; }`}</style> */}
                  <path
                    className="fill-purple-600/30 dark:fill-gray-400"
                    d="M10.978,21.687C10.977,21.688,10.977,21.688,10.978,21.687c-0.016,0.036-0.031,0.072-0.046,0.107
	C10.947,21.759,10.962,21.723,10.978,21.687z M21.966,10.409c-0.422,0.804-0.849,1.605-1.298,2.395
	c-0.529,0.933-1.067,1.862-1.584,2.803c-0.194,0.348-0.394,0.693-0.569,1.051c-0.182,0.37-0.354,0.743-0.529,1.115
	c-0.364,0.763-0.743,1.519-1.129,2.27c-0.366,0.713-0.731,1.427-1.095,2.14c-0.186,0.366-0.372,0.733-0.537,1.107
	c-0.174,0.386-0.344,0.775-0.527,1.155c-0.185,0.378-0.694,0.481-1.051,0.308c-0.127-0.013-0.25-0.047-0.375-0.107
	c-0.761-0.36-1.51-0.743-2.256-1.137c-0.434-0.232-0.565-0.825-0.324-1.239c0.043-0.073,0.113-0.112,0.171-0.167
	c0.012-0.125,0.045-0.247,0.1-0.376c0.005-0.013,0.01-0.025,0.016-0.038c0.001-0.001,0.001-0.003,0.002-0.005
	c-0.001,0.001-0.001,0.002-0.002,0.004c0.01-0.024,0.02-0.049,0.031-0.073c-0.002,0.004-0.004,0.009-0.005,0.013
	c0.002-0.005,0.005-0.011,0.007-0.016c0-0.001,0.001-0.001,0.001-0.002c0.003-0.008,0.007-0.016,0.01-0.024
	c-0.004,0.009-0.007,0.017-0.011,0.026c0,0.001-0.001,0.002-0.001,0.003c0.018-0.042,0.035-0.084,0.053-0.126
	c-0.01,0.024-0.02,0.047-0.03,0.071c0.638-1.511,1.287-3.022,2.004-4.499c0.374-0.769,0.781-1.522,1.183-2.278
	c0.396-0.743,0.765-1.499,1.157-2.242c0.388-0.739,0.805-1.463,1.199-2.2c0.414-0.773,0.811-1.554,1.259-2.31
	c0.099-0.166,0.255-0.265,0.426-0.33c0.015-0.037,0.017-0.077,0.038-0.112c0.165-0.283,0.455-0.43,0.756-0.43
	c0.152,0,0.307,0.038,0.449,0.114c0.939,0.506,1.896,0.993,2.801,1.557c0.396,0.248,0.549,0.763,0.308,1.177
	C22.471,10.246,22.226,10.378,21.966,10.409z M10.977,21.688c0.006-0.013,0.011-0.027,0.017-0.04c0,0-0.001,0.001-0.001,0.001
	C10.988,21.663,10.983,21.675,10.977,21.688z M19.631,11.449c0.299-0.545,0.576-1.101,0.853-1.658
	c-0.449-0.242-0.897-0.484-1.348-0.721c-0.175,0.29-0.353,0.579-0.518,0.875c-0.182,0.324-0.348,0.656-0.523,0.981
	c-0.35,0.653-0.711,1.301-1.065,1.952c-0.404,0.745-0.773,1.509-1.159,2.262c-0.392,0.769-0.793,1.532-1.177,2.306
	c-0.718,1.447-1.354,2.939-1.986,4.426c-0.055,0.134-0.11,0.268-0.165,0.403c0.375,0.201,0.75,0.402,1.125,0.601
	c0.104-0.226,0.206-0.452,0.316-0.675c0.23-0.472,0.47-0.937,0.709-1.403c0.464-0.903,0.939-1.8,1.387-2.711
	c0.192-0.39,0.38-0.779,0.563-1.171c0.168-0.36,0.326-0.725,0.511-1.075c0.392-0.731,0.791-1.459,1.205-2.18
	C18.782,12.923,19.223,12.196,19.631,11.449z M10.481,19.268c0.088,0.184,0.141,0.427,0.066,0.612
	c-0.242,0.587-0.484,1.175-0.725,1.762c-0.092,0.222-0.188,0.4-0.406,0.526c-0.057,0.033-0.122,0.043-0.183,0.063
	c-0.243,0.328-0.696,0.431-1.057,0.228c-0.308-0.174-0.589-0.418-0.873-0.629c-0.258-0.194-0.516-0.392-0.775-0.583
	c-0.607-0.448-1.227-0.883-1.8-1.377c-0.561-0.483-1.113-0.979-1.678-1.458c-0.555-0.472-1.135-0.915-1.7-1.375
	c-0.08-0.065-0.137-0.162-0.176-0.266C1.07,16.627,1,16.463,1,16.287c0-0.236,0.096-0.422,0.246-0.595
	c0.448-0.52,0.909-1.021,1.401-1.501c0.406-0.394,0.849-0.747,1.287-1.103c0.927-0.753,1.843-1.516,2.785-2.247
	c0.22-0.17,0.442-0.337,0.663-0.506c0.046-0.036,0.093-0.072,0.139-0.108c-0.012,0.01-0.025,0.019-0.037,0.029
	c0.015-0.011,0.029-0.023,0.044-0.035c0.002-0.002,0.005-0.004,0.007-0.005c0.036-0.027,0.071-0.055,0.107-0.082
	c-0.035,0.027-0.07,0.053-0.105,0.081c0.31-0.244,0.621-0.49,0.935-0.728c0.102-0.076,0.247-0.108,0.386-0.109
	c0.067-0.016,0.135-0.027,0.204-0.027c0.077,0,0.153,0.01,0.228,0.031C9.514,9.444,9.672,9.586,9.8,9.776
	c0.378,0.558,0.715,1.143,1.123,1.677c0.031,0.041,0.036,0.1,0.053,0.151c0.209,0.061,0.392,0.199,0.501,0.389
	c0.116,0.194,0.146,0.431,0.086,0.651c-0.062,0.224-0.202,0.375-0.388,0.503c-0.116,0.08-0.232,0.163-0.344,0.249
	c-0.2,0.157-0.403,0.312-0.614,0.452c-0.174,0.115-0.346,0.226-0.513,0.348c-0.43,0.349-0.827,0.734-1.227,1.117
	c-0.29,0.278-0.579,0.556-0.868,0.834c0.363,0.315,0.728,0.629,1.082,0.953c0.441,0.404,0.882,0.807,1.35,1.177
	c0.033,0.025,0.067,0.051,0.1,0.076c0.174,0.126,0.304,0.256,0.364,0.47C10.547,18.97,10.528,19.123,10.481,19.268z M7.454,19.973
	c0.24,0.176,0.482,0.352,0.723,0.523c0.056,0.04,0.114,0.082,0.17,0.124c0.165-0.403,0.331-0.806,0.495-1.209
	c0.012-0.03,0.029-0.051,0.041-0.079c-0.406-0.336-0.802-0.683-1.199-1.033c-0.525-0.465-1.06-0.918-1.599-1.368
	c-0.105-0.04-0.204-0.1-0.289-0.185c-0.316-0.318-0.332-0.875,0-1.191c0.697-0.657,1.397-1.311,2.11-1.952
	c0.28-0.25,0.561-0.498,0.857-0.729c0.243-0.191,0.496-0.369,0.746-0.551c-0.008-0.011-0.018-0.018-0.026-0.029
	c-0.259-0.334-0.502-0.683-0.742-1.033c-0.387,0.279-0.769,0.565-1.15,0.85c-0.036,0.028-0.072,0.056-0.108,0.083
	c-0.877,0.681-1.716,1.415-2.566,2.129c-0.412,0.348-0.813,0.703-1.185,1.097c-0.276,0.291-0.534,0.595-0.797,0.896
	c0.467,0.391,0.933,0.782,1.394,1.179c0.558,0.482,1.108,0.975,1.68,1.439C6.484,19.291,6.975,19.624,7.454,19.973z M6.631,10.908
	c0.029-0.023,0.059-0.044,0.088-0.067c0.023-0.018,0.045-0.037,0.068-0.055C6.734,10.826,6.683,10.868,6.631,10.908z M7.535,10.216
	c-0.001,0.001-0.002,0.002-0.004,0.003c0.002-0.001,0.003-0.002,0.005-0.004C7.536,10.216,7.535,10.216,7.535,10.216z M7.531,10.219
	c-0.003,0.003-0.007,0.006-0.011,0.008c0.002-0.002,0.005-0.004,0.007-0.006C7.529,10.221,7.53,10.22,7.531,10.219z M30.757,17.099
	c-0.444,0.481-0.911,0.935-1.379,1.393c-0.482,0.474-0.957,0.951-1.453,1.409c-0.509,0.468-1.037,0.915-1.536,1.395
	c-0.542,0.52-1.081,1.045-1.618,1.569c-0.316,0.306-0.825,0.314-1.139,0c-0.047-0.047-0.074-0.107-0.107-0.163
	c-0.365-0.196-0.668-0.502-0.978-0.772c-0.314-0.276-0.633-0.542-0.955-0.805c-0.162-0.132-0.244-0.388-0.244-0.589
	c0-0.198,0.08-0.385,0.208-0.534c-0.045-0.253,0.005-0.522,0.207-0.693c1.077-0.913,2.161-1.824,3.043-2.933
	c0.012-0.016,0.024-0.033,0.036-0.05c-0.909-0.778-1.761-1.617-2.537-2.527c-0.152-0.178-0.25-0.364-0.25-0.603
	c0-0.228,0.09-0.446,0.25-0.605c0.047-0.047,0.111-0.075,0.17-0.109c0.018-0.044,0.021-0.093,0.048-0.134
	c0.306-0.466,0.609-0.933,0.917-1.401c0.185-0.28,0.488-0.451,0.803-0.451c0.027,0,0.055,0.008,0.082,0.011
	c0.142-0.111,0.311-0.179,0.486-0.179c0.202,0,0.404,0.075,0.552,0.229c0.841,0.871,1.652,1.768,2.522,2.614
	c0.807,0.785,1.622,1.566,2.454,2.326c0.076,0.069,0.132,0.154,0.169,0.245c0.091,0.041,0.178,0.09,0.248,0.16
	C31.093,16.236,31.069,16.757,30.757,17.099z M28.21,17.323c0.288-0.304,0.576-0.609,0.864-0.914
	c-0.364-0.341-0.723-0.689-1.09-1.03c-0.4-0.37-0.787-0.749-1.177-1.131c-0.684-0.669-1.351-1.355-2.02-2.04
	c-0.23,0.34-0.46,0.681-0.696,1.018c0.254,0.285,0.501,0.577,0.768,0.851c0.38,0.39,0.779,0.747,1.199,1.089
	c0.056,0.046,0.089,0.118,0.126,0.186c0.151,0.035,0.296,0.095,0.404,0.204c0.314,0.314,0.324,0.855,0,1.169
	c-0.068,0.066-0.13,0.136-0.19,0.209c-0.473,0.61-0.979,1.184-1.537,1.719c-0.568,0.547-1.153,1.073-1.747,1.591
	c0.168,0.143,0.339,0.284,0.503,0.431c0.179,0.158,0.352,0.322,0.534,0.476c0.019,0.013,0.04,0.023,0.059,0.035
	c0.861-0.806,1.732-1.6,2.579-2.42C27.276,18.298,27.746,17.814,28.21,17.323z"
                  />
                </svg>
              </span>
            </motion.div>

            {/* Floating badge — Available for work */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="
                absolute -bottom-4 -left-4 md:bottom-8 md:-left-12 z-20
                px-4 py-2.5 rounded-full flex items-center gap-2.5 whitespace-nowrap border
                bg-white border-zinc-100 shadow-[0_8px_24px_rgba(29,26,36,0.10)]
                dark:bg-zinc-900 dark:border-zinc-700/60 dark:shadow-[0_8px_24px_rgba(0,0,0,0.4)]
              "
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm font-bold text-zinc-800 dark:text-zinc-100">
                Available for work
              </span>
            </motion.div>

            {/* Floating card — Years exp */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 1.1,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                absolute top-1/2 -translate-y-1/2 -right-12 md:-right-8 z-20
                px-4 py-3 rounded-2xl border
                bg-white border-zinc-100 shadow-[0_8px_24px_rgba(29,26,36,0.08)]
                dark:bg-zinc-900 dark:border-zinc-700/60 dark:shadow-[0_8px_24px_rgba(0,0,0,0.4)]
              "
            >
              <p className="text-2xl font-extrabold text-zinc-900 dark:text-zinc-50">
                4+
              </p>
              <p className="text-xs font-medium mt-0.5 text-zinc-400 dark:text-zinc-500">
                Months exp.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
