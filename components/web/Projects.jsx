"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";

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

const modalVariants = {
  hidden: { opacity: 0, scale: 0.94, y: 20 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    scale: 0.94,
    y: 20,
    transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
  },
};

const backdropVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.25 } },
};

// ─── Project Data ──────────────────────────────────────────────────────────
const PROJECTS = [
  {
    id: 1,
    name: "InvenFlow Pro",
    // tagline: "Stack Overflow-inspired community for developers",
    image: "/projects/InvenFlo Pro.png", // replace with your actual image
    stack: [
      "Next.js",
      "TypeScript",
      "Convex",
      "BetterAuth",
      "Shadcn",
      "React Hook Form",
      "Zod validation",
    ],
    description:
      "A full-stack inventory and order management system built for small to medium businesses. Manage products, categories, orders, and stock levels in real time.",
    liveLink:
      "https://inventory-management-sandy-iota.vercel.app/?jr_id=l_4383905717",
    githubLink: "https://github.com/ammarShahab/inventory-management",
    /* challenges: [
      "Implementing a robust reputation and voting system that prevents abuse while staying performant.",
      "Building a real-time notification engine using MongoDB change streams without overwhelming the database.",
      "Integrating OpenAI's API for AI-generated answer hints while keeping costs controlled through smart caching.",
    ], */
    improvements: [
      "Role-based access control (Admin / Staff)",
      "Export orders and reports to PDF / Excel",
      "Dark mode toggle",
      "Product image uploads",
      "Email notifications for low stock alerts",
      "Analytics charts (revenue trends, top pro1ducts)",
      "Multi-location inventory support",
    ],
  },
  {
    id: 2, // or whatever ID you need
    name: "Trust Life – Client Side",
    // tagline: "Comprehensive life insurance management platform",
    image: "/projects/trust-life-demo.png", // replace with actual image path
    stack: [
      "React",
      "Firebase Auth",
      "React Query",
      "Stripe",
      "Tailwind CSS",
      "React Hot Toast",
      "Axios",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase Auth",
    ],
    description:
      "Trust Life is a comprehensive life insurance management platform built with modern web technologies. It empowers users to explore, compare, and purchase various insurance policies with secure transactions and seamless user experience. Includes an admin panel for managing users, policies, and bookings.",
    liveLink: "https://b11-a12-trust-life-client.web.app/", // replace with actual URL
    githubLink:
      "https://github.com/ammarShahab/trust-Life-life-insurance-management-client", // replace or omit if not available
    improvements: [
      "Add multi-language support",
      "Implement automated policy renewal reminders via email/SMS",
      "Enhance admin dashboard with more analytics charts (policy sales, user growth)",
      "Integrate with more payment gateways (PayPal, Razorpay)",
    ],
  },
  {
    id: 3, // adjust ID as needed
    name: "TripNest – Travel Package Booking Platform",
    // tagline: "Explore, search, and book travel packages with ease",
    image: "/projects/trip-nest-1.png", // replace with actual image path
    stack: [
      "React.js",
      "Tailwind CSS",
      "DaisyUI",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase Auth",
      "Axios",
      "SweetAlert2",
      "React Multi Carousel",
      "Framer Motion",
    ],
    description:
      "TripNest enables travelers to explore, search, and book travel packages with an interactive and seamless experience. Users can book, add, manage, delete, and confirm travel packages. Includes search by package name, price-based filtering, and smooth carousels for package showcases.",
    liveLink: "https://a11-tripnest-client.web.app/", // replace with actual URL
    githubLink: "https://github.com/ammarShahab/tour-package", // replace or omit if not available
    improvements: [
      "Add user reviews and ratings for packages",
      "Implement wishlist / saved packages feature",
      "Integrate payment gateway (Stripe / PayPal) for online bookings",
      "Create admin dashboard to manage all bookings and users",
      "Implement email confirmations and reminders",
      "Add map integration to show package locations",
      "Improve mobile responsiveness and offline support",
    ],
  },
];

// ─── Modal Component ───────────────────────────────────────────────────────
function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            variants={backdropVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              key="modal"
              variants={modalVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-violet-100 dark:border-violet-900/40 bg-white dark:bg-zinc-900 shadow-2xl"
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 hover:bg-violet-100 dark:hover:bg-violet-900/40 hover:text-violet-600 dark:hover:text-violet-400 transition-all duration-200"
              >
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
              </button>

              {/* Project image */}
              <div className="relative h-52 w-full overflow-hidden rounded-t-2xl bg-zinc-100 dark:bg-zinc-800">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <h2 className="text-xl font-extrabold text-white leading-tight">
                    {project.name}
                  </h2>
                  <p className="text-sm text-white/70 mt-0.5">
                    {project.tagline}
                  </p>
                </div>
              </div>

              <div className="p-6 space-y-6">
                {/* Tech Stack */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-violet-500 dark:text-violet-400 mb-3">
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-xs font-semibold bg-violet-50 dark:bg-violet-950/40 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-800/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-violet-500 dark:text-violet-400 mb-2">
                    Description
                  </h3>
                  <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {project.description}
                  </p>
                </div>

                {/* Challenges */}
                {/*  <div>
                  <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-violet-500 dark:text-violet-400 mb-3">
                    Challenges Faced
                  </h3>
                  <ul className="space-y-2">
                    {project.challenges.map((c, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-sm text-zinc-600 dark:text-zinc-400"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 flex-shrink-0 rounded-full bg-violet-400 dark:bg-violet-500" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div> */}

                {/* Future Plans */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-violet-500 dark:text-violet-400 mb-3">
                    Future Improvements
                  </h3>
                  <ul className="space-y-2">
                    {project.improvements.map((imp, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-sm text-zinc-600 dark:text-zinc-400"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 shrink-0rounded-full bg-emerald-400 dark:bg-emerald-500" />
                        {imp}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-2">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold bg-violet-600 hover:bg-violet-700 text-white transition-all duration-200 active:scale-95"
                  >
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
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold border border-violet-200 dark:border-violet-800/60 text-violet-700 dark:text-violet-300 hover:bg-violet-50 dark:hover:bg-violet-950/30 transition-all duration-200 active:scale-95"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

// ─── Project Card ──────────────────────────────────────────────────────────
function ProjectCard({ project, index, onOpen }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
    >
      {/* Image — alternates left/right */}
      <motion.div
        variants={isEven ? fadeLeft : fadeRight}
        className={`relative group rounded-2xl overflow-hidden border border-violet-100 dark:border-violet-900/40 shadow-[0_4px_30px_rgba(99,14,212,0.08)] dark:shadow-[0_4px_30px_rgba(99,14,212,0.15)] ${
          !isEven ? "md:order-2" : ""
        }`}
      >
        {/* Aspect ratio wrapper */}
        <div className="relative aspect-16/10 w-full bg-zinc-100 dark:bg-zinc-800">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-violet-900/0 transition-all duration-500" />
        </div>

        {/* Index badge */}
        <div className="absolute top-4 left-4 w-8 h-8 flex items-center justify-center rounded-full bg-violet-600 dark:bg-violet-500 text-white text-xs font-bold shadow-lg">
          {String(index + 1).padStart(2, "0")}
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        variants={isEven ? fadeRight : fadeLeft}
        className={`flex flex-col gap-4 ${!isEven ? "md:order-1" : ""}`}
      >
        {/* Stack pills */}
        <div className="flex flex-wrap gap-2">
          {project.stack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-full text-xs font-semibold bg-violet-50 dark:bg-violet-950/40 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-800/60"
            >
              {tech}
            </span>
          ))}
          {project.stack.length > 3 && (
            <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700">
              +{project.stack.length - 3} more
            </span>
          )}
        </div>

        {/* Name */}
        <div>
          <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 leading-tight">
            {project.name}
          </h3>
          <p className="text-sm text-violet-500 dark:text-violet-400 font-medium mt-1">
            {project.tagline}
          </p>
        </div>

        {/* Short description */}
        <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 line-clamp-3">
          {project.description}
        </p>

        {/* Divider */}
        <div className="h-px bg-violet-100 dark:bg-violet-900/40 w-16" />

        {/* Actions */}
        <div className="flex items-center gap-3 flex-wrap">
          <motion.button
            onClick={() => onOpen(project)}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-violet-600 hover:bg-violet-700 text-white shadow-[0_4px_14px_rgba(124,58,237,0.35)] hover:shadow-[0_6px_20px_rgba(124,58,237,0.45)] transition-all duration-300"
          >
            View Details
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
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </motion.button>

          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold border border-violet-200 dark:border-violet-800/60 text-violet-700 dark:text-violet-300 hover:bg-violet-50 dark:hover:bg-violet-950/30 transition-all duration-200"
          >
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
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
            Live
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Main Section ──────────────────────────────────────────────────────────
export default function Projects() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-80px" });
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <section id="projects" className="relative z-10 py-28 px-6">
        <div className="max-w-7xl mx-auto">
          {/* ── Section label ── */}
          <motion.div
            ref={headerRef}
            variants={fadeUp}
            initial="hidden"
            animate={isHeaderInView ? "show" : "hidden"}
            className="flex items-center gap-3 mb-6"
          >
            <span className="h-px w-10 bg-violet-400 dark:bg-violet-600" />
            <span className="text-xl font-bold uppercase tracking-[0.2em] text-violet-500 dark:text-violet-400">
              Projects
            </span>
          </motion.div>

          {/* ── Headline ── */}
          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate={isHeaderInView ? "show" : "hidden"}
            className="mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter leading-tight text-zinc-900 dark:text-zinc-50">
              Things I&apos;ve{" "}
              <span className="text-violet-500 dark:text-violet-400">
                Built
              </span>
            </h2>
            <p className="text-base text-zinc-500 dark:text-zinc-400 mt-3 max-w-xl">
              A curated collection of projects showcasing my experience with
              full-stack development, UI craft, and problem-solving.
            </p>
          </motion.div>

          {/* ── Project List ── */}
          <div className="flex flex-col gap-24 md:gap-32">
            {PROJECTS.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onOpen={setSelectedProject}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Modal ── */}
      <AnimatePresence mode="wait">
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
