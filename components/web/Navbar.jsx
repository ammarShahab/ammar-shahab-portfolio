"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle/ThemeToggle";
import Image from "next/image";

// Navigation links config — easy to extend
const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Qualification", href: "#qualification" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("Work");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Tighten nav shadow on scroll
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setIsMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      {/* ── Desktop & Tablet Navbar ── */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-7xl
          rounded-full px-6 py-3 flex items-center justify-between
          bg-white/60 backdrop-blur-2xl border border-white/40
          transition-shadow duration-300
          ${isScrolled ? "shadow-[0_8px_32px_rgba(99,14,212,0.10)]" : "shadow-[0_4px_24px_rgba(29,26,36,0.06)]"}`}
      >
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-extrabold tracking-tighter text-zinc-900 select-none"
        >
          {/* Ethereal<span className="text-violet-600">.</span> */}
          <Image
            src="/logo-light.png"
            alt="Logo"
            width={40}
            height={40}
            // fill
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                onClick={() => setActiveLink(label)}
                className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-200
                  ${
                    activeLink === label
                      ? "text-violet-600"
                      : "text-zinc-500 hover:text-zinc-900"
                  }`}
              >
                {/* Animated pill background for active link */}
                {activeLink === label && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-violet-50 border border-violet-100"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{label}</span>
              </Link>
            </li>
          ))}
        </ul>
        <ThemeToggle />
        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block bg-linear-to-br from-violet-600 to-purple-700
              text-white text-sm font-bold px-5 py-2.5 rounded-full
              shadow-[0_4px_16px_rgba(99,14,212,0.3)] hover:shadow-[0_6px_20px_rgba(99,14,212,0.4)]
              transition-shadow duration-300"
          >
            Download Resume
          </motion.button>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setIsMobileOpen((v) => !v)}
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-full bg-zinc-100 hover:bg-zinc-200 transition-colors"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={
                isMobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }
              }
              className="block w-4 h-px bg-zinc-700 rounded-full origin-center transition-transform"
            />
            <motion.span
              animate={
                isMobileOpen
                  ? { opacity: 0, scaleX: 0 }
                  : { opacity: 1, scaleX: 1 }
              }
              className="block w-4 h-px bg-zinc-700 rounded-full"
            />
            <motion.span
              animate={
                isMobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }
              }
              className="block w-4 h-px bg-zinc-700 rounded-full origin-center transition-transform"
            />
          </button>
        </div>
      </motion.nav>

      {/* ── Mobile Dropdown Menu ── */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.97 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-40 w-[88%] max-w-sm
              rounded-2xl bg-white/80 backdrop-blur-2xl border border-white/50
              shadow-[0_16px_48px_rgba(29,26,36,0.12)] p-4 md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    onClick={() => {
                      setActiveLink(label);
                      setIsMobileOpen(false);
                    }}
                    className={`flex items-center justify-between w-full px-4 py-3 rounded-xl text-sm font-semibold transition-colors
                      ${
                        activeLink === label
                          ? "bg-violet-50 text-violet-600"
                          : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
                      }`}
                  >
                    {label}
                    {activeLink === label && (
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-3 pt-3 border-t border-zinc-100">
              <button className="w-full bg-linear-to-br from-violet-600 to-purple-700 text-white text-sm font-bold py-3 rounded-xl shadow-md">
                Download Resume
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
