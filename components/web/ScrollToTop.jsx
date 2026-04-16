// components/web/ScrollToTop.jsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button after scrolling down 400px
  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.15, y: -4 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Scroll to top"
          className="
            fixed bottom-8 right-8 z-50
            w-12 h-12 rounded-full
            bg-linear-to-br from-violet-600 to-purple-700
            text-white flex items-center justify-center
            shadow-[0_8px_24px_rgba(99,14,212,0.4)]
            hover:shadow-[0_12px_32px_rgba(99,14,212,0.5)]
            transition-shadow duration-300
          "
        >
          {/* Up arrow icon */}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5"
          >
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>

          {/* Ripple ring animation */}
          <motion.span
            animate={{ scale: [1, 1.6, 1], opacity: [0.4, 0, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="
              absolute inset-0 rounded-full
              bg-violet-500/30
            "
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
