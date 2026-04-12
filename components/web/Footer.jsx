"use client";

import { motion } from "framer-motion";

// ─── Social Links ──────────────────────────────────────────────────────────
const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/your-username",
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
    href: "https://linkedin.com/in/your-username",
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
    href: "https://facebook.com/your-username",
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
            <span className="text-2xl font-extrabold tracking-tighter">
              Ammar<span className="text-violet-400">.</span>
            </span>
            <p className="text-sm text-zinc-400 max-w-xs leading-relaxed">
              MERN Stack Developer — crafting seamless digital experiences.
            </p>
          </motion.div>

          {/* Nav links */}
          <motion.nav
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
          </motion.nav>

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

          {/* Bottom bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-between w-full gap-2 text-xs text-zinc-500"
          >
            <span>© {year} Md. Ammar Shahab. All rights reserved.</span>
            <span className="flex items-center gap-1.5">
              Built with
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-zinc-400">
                <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0z" />
              </svg>
              Next.js &amp;
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-cyan-500">
                <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
              </svg>
              Tailwind CSS
            </span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
