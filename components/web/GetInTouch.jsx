"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";

// ─── Animation Variants ────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

// ─── Contact Info Items ────────────────────────────────────────────────────
const CONTACT_ITEMS = [
  {
    label: "Email",
    value: "ashahab007@gmail.com", // ← replace
    href: "mailto:yourname@gmail.com",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "+880 1762545131", // ← replace
    href: "tel:+8801700000000",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    value: "+880 1762545131", // ← replace
    href: "https://wa.me/8801762545131", // ← replace
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
];

// ─── Input Field Component ─────────────────────────────────────────────────
function FormField({ label, id, type = "text", placeholder, rows, required }) {
  const isTextarea = rows !== undefined;
  const baseClass =
    "w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700/60 text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 outline-none focus:border-violet-400 dark:focus:border-violet-500 focus:ring-2 focus:ring-violet-400/20 dark:focus:ring-violet-500/20 transition-all duration-200 resize-none";

  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="text-xs font-semibold text-zinc-600 dark:text-zinc-400 uppercase tracking-wider"
      >
        {label} {required && <span className="text-violet-500">*</span>}
      </label>
      {isTextarea ? (
        <textarea
          id={id}
          name={id}
          rows={rows}
          placeholder={placeholder}
          required={required}
          className={baseClass}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          placeholder={placeholder}
          required={required}
          className={baseClass}
        />
      )}
    </div>
  );
}

// ─── Main Section ──────────────────────────────────────────────────────────
export default function GetInTouch() {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      );
      setStatus("success");
      formRef.current.reset();
      // Auto-reset after 5s
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      console.error(err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section ref={sectionRef} id="contact" className="relative z-10 py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* ── Section label ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="flex items-center gap-3 mb-6"
        >
          <span className="h-px w-10 bg-violet-400 dark:bg-violet-600" />
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-violet-500 dark:text-violet-400">
            Contact
          </span>
        </motion.div>

        {/* ── Headline ── */}
        <motion.div
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter leading-tight text-zinc-900 dark:text-zinc-50">
            Get In{" "}
            <span className="text-violet-500 dark:text-violet-400">Touch</span>
          </h2>
          <p className="text-base text-zinc-500 dark:text-zinc-400 mt-3 max-w-xl">
            Have a project in mind or just want to say hello? I&apos;d love to
            hear from you. Fill out the form or reach out directly.
          </p>
        </motion.div>

        {/* ── Two-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* ─── Left: Contact Info (2 cols) ─────────────────────── */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {/* Info cards */}
            {CONTACT_ITEMS.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                custom={i}
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
                whileHover={{ scale: 1.02, y: -3 }}
                transition={{ duration: 0.25 }}
                className="group flex items-center gap-4 p-5 rounded-2xl border border-violet-100 dark:border-violet-900/40 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-sm shadow-[0_4px_20px_rgba(99,14,212,0.06)] dark:shadow-[0_4px_20px_rgba(99,14,212,0.12)] hover:border-violet-300 dark:hover:border-violet-700 hover:shadow-[0_6px_24px_rgba(124,58,237,0.15)] dark:hover:shadow-[0_6px_24px_rgba(124,58,237,0.2)] transition-all duration-300"
              >
                {/* Icon bubble */}
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-violet-50 dark:bg-violet-950/40 text-violet-600 dark:text-violet-400 border border-violet-100 dark:border-violet-800/40 group-hover:bg-violet-100 dark:group-hover:bg-violet-900/40 transition-colors duration-300">
                  {item.icon}
                </div>

                <div className="min-w-0">
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-zinc-400 dark:text-zinc-500 mb-0.5">
                    {item.label}
                  </p>
                  <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 truncate group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-200">
                    {item.value}
                  </p>
                </div>

                {/* Arrow indicator */}
                <div className="ml-auto flex-shrink-0 text-zinc-300 dark:text-zinc-600 group-hover:text-violet-400 dark:group-hover:text-violet-500 transition-colors duration-200">
                  <svg
                    className="w-4 h-4 -rotate-45"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </div>
              </motion.a>
            ))}

            {/* Decorative quote */}
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              className="mt-2 p-5 rounded-2xl border border-dashed border-violet-200 dark:border-violet-800/50 bg-violet-50/50 dark:bg-violet-950/20"
            >
              <p className="text-sm italic text-zinc-500 dark:text-zinc-400 leading-relaxed">
                &ldquo;I&apos;m always open to discussing new projects, creative
                ideas, or opportunities to be part of your vision.&rdquo;
              </p>
              <p className="text-xs font-semibold text-violet-500 dark:text-violet-400 mt-3">
                — Your Name
              </p>
            </motion.div>
          </motion.div>

          {/* ─── Right: Contact Form (3 cols) ────────────────────── */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="lg:col-span-3"
          >
            <div className="rounded-2xl border border-violet-100 dark:border-violet-900/40 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-sm p-8 shadow-[0_4px_30px_rgba(99,14,212,0.08)] dark:shadow-[0_4px_30px_rgba(99,14,212,0.15)]">
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 mb-6">
                Send a Message
              </h3>

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="flex flex-col gap-5"
              >
                {/* Name + Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FormField
                    label="Name"
                    id="user_name"
                    placeholder="John Doe"
                    required
                  />
                  <FormField
                    label="Email"
                    id="user_email"
                    type="email"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <FormField
                  label="Subject"
                  id="subject"
                  placeholder="Project inquiry / just saying hi"
                  required
                />

                <FormField
                  label="Message"
                  id="message"
                  placeholder="Tell me about your project, idea, or just say hello..."
                  rows={5}
                  required
                />

                {/* Submit button */}
                <motion.button
                  type="submit"
                  disabled={status === "sending"}
                  whileHover={
                    status !== "sending" ? { scale: 1.02, y: -2 } : {}
                  }
                  whileTap={status !== "sending" ? { scale: 0.97 } : {}}
                  transition={{ duration: 0.2 }}
                  className={`
                    relative w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl text-sm font-semibold
                    transition-all duration-300 overflow-hidden
                    ${
                      status === "success"
                        ? "bg-emerald-500 text-white shadow-[0_4px_14px_rgba(16,185,129,0.35)]"
                        : status === "error"
                          ? "bg-red-500 text-white"
                          : "bg-violet-600 hover:bg-violet-700 text-white shadow-[0_4px_14px_rgba(124,58,237,0.35)] hover:shadow-[0_6px_20px_rgba(124,58,237,0.45)]"
                    }
                    disabled:opacity-70 disabled:cursor-not-allowed
                  `}
                >
                  {status === "sending" && (
                    <svg
                      className="w-4 h-4 animate-spin"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                      />
                    </svg>
                  )}
                  {status === "success" && (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                  {status === "error" && (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                  {status === "idle" && (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                  )}
                  {status === "idle" && "Send Message"}
                  {status === "sending" && "Sending..."}
                  {status === "success" && "Message Sent!"}
                  {status === "error" && "Failed — Try Again"}
                </motion.button>

                {/* Status note */}
                {status === "success" && (
                  <motion.p
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-xs text-emerald-600 dark:text-emerald-400 font-medium"
                  >
                    Thanks! I&apos;ll get back to you as soon as possible.
                  </motion.p>
                )}
                {status === "error" && (
                  <motion.p
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-xs text-red-500 dark:text-red-400 font-medium"
                  >
                    Something went wrong. You can also email me directly at{" "}
                    <a href="mailto:yourname@gmail.com" className="underline">
                      ashahab007@gmail.com
                    </a>
                  </motion.p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
