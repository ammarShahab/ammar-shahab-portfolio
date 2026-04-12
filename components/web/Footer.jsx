"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// ─── Social Links ──────────────────────────────────────────────────────────
const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/ammarShahab",
    hoverBg: "hover:bg-zinc-700",
    hoverRing: "hover:ring-zinc-500",
    hoverGlow: "hover:shadow-[0_8px_24px_rgba(113,113,122,0.5)]",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/md-ammar-shahab/",
    hoverBg: "hover:bg-blue-600",
    hoverRing: "hover:ring-blue-400",
    hoverGlow: "hover:shadow-[0_8px_24px_rgba(37,99,235,0.5)]",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/ammar.shahab.755217",
    hoverBg: "hover:bg-blue-500",
    hoverRing: "hover:ring-blue-300",
    hoverGlow: "hover:shadow-[0_8px_24px_rgba(59,130,246,0.5)]",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.269h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
      </svg>
    ),
  },
];

// ─── Nav Links ─────────────────────────────────────────────────────────────
const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Qualification", href: "#qualification" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 w-full mt-16">
      {/* ── Wave divider ── */}
      <div className="w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 48"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-12 fill-zinc-900 dark:fill-zinc-950"
          preserveAspectRatio="none"
        >
          <path d="M0,24 C240,48 480,0 720,24 C960,48 1200,0 1440,24 L1440,48 L0,48 Z" />
        </svg>
      </div>

      {/* ── Footer body ── */}
      <div className="bg-zinc-900 dark:bg-zinc-950 text-white px-6 pt-10 pb-8">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-2 text-center"
          >
            {/* ✅ Logo placeholder — replace src with your actual logo path */}
            <Image
              src="/logo-light.png"
              alt="Logo"
              width={48}
              height={48}
              className="object-contain invert dark:invert-0"
            />
            <p className="text-sm text-zinc-400 max-w-xs leading-relaxed">
              MERN Stack Developer — crafting seamless digital experiences.
            </p>
          </motion.div>
          {/* Nav links */}
          {/* <motion.nav
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-x-7 gap-y-2"
          >
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="
                  relative text-sm text-zinc-400 hover:text-violet-400
                  transition-colors duration-200
                  after:absolute after:-bottom-0.5 after:left-0
                  after:h-px after:w-0 after:bg-violet-400
                  after:transition-all after:duration-300
                  hover:after:w-full
                "
              >
                {label}
              </a>
            ))}
          </motion.nav> */}

          {/* ── Social icons ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-4"
          >
            {SOCIALS.map(
              ({ label, href, hoverBg, hoverRing, hoverGlow, icon }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`
                  group relative flex items-center justify-center
                  w-12 h-12 rounded-full
                  bg-zinc-800 text-zinc-400
                  ring-1 ring-zinc-700
                  transition-all duration-300
                  hover:text-white hover:ring-2
                  ${hoverBg} ${hoverRing} ${hoverGlow}
                `}
                >
                  {icon}

                  {/* Tooltip */}
                  <span
                    className="
                    absolute -top-10 left-1/2 -translate-x-1/2
                    px-2.5 py-1 rounded-lg text-[11px] font-semibold
                    bg-zinc-700 text-white whitespace-nowrap
                    opacity-0 -translate-y-1 scale-95
                    group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100
                    transition-all duration-200 pointer-events-none
                    after:content-[''] after:absolute after:top-full after:left-1/2
                    after:-translate-x-1/2 after:border-4
                    after:border-transparent after:border-t-zinc-700
                  "
                  >
                    {label}
                  </span>
                </motion.a>
              ),
            )}
          </motion.div>

          {/* Divider */}
          <div className="w-full h-px bg-zinc-800" />
        </div>
      </div>
    </footer>
  );
}
