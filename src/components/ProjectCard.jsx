import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "./Svgs";

export default function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 45,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: "-10% 0px",
      }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -4,
      }}
      className="group overflow-hidden rounded-3xl border border-white/10 bg-white/2 transition-colors duration-500 hover:border-white/20"
    >
      <div className="grid lg:grid-cols-[.8fr_1.2fr]">

        {/* =========================
            PROJECT VISUAL
        ========================== */}
        <div
          className="relative min-h-70 overflow-hidden border-b border-white/6 bg-black lg:min-h-95 lg:border-b-0 lg:border-r"
          style={{
            "--project-accent": project.accent,
          }}
        >
          {/* Accent glow */}
          <motion.div
            initial={{
              scale: 0.8,
              opacity: 0,
            }}
            whileInView={{
              scale: 1,
              opacity: 0.3,
            }}
            whileHover={{
              scale: 1.2,
              opacity: 0.45,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
            className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[70px]"
            style={{
              background:
                "radial-gradient(circle, var(--project-accent), transparent 70%)",
            }}
          />

          {/* Project image */}
          <motion.img
            src={project.image}
            alt={project.title}
            initial={{
              scale: 1.05,
              opacity: 0,
            }}
            whileInView={{
              scale: 1,
              opacity: 1,
            }}
            whileHover={{
              scale: 1.06,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute inset-0 h-full w-full object-contain"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/35 transition-colors duration-500 group-hover:bg-black/20" />

          {/* Accent overlay */}
          <div
            className="absolute inset-0 opacity-20 mix-blend-screen"
            style={{
              background:
                "radial-gradient(circle at center, var(--project-accent), transparent 65%)",
            }}
          />

          {/* Project number */}
          <div className="absolute left-6 top-6 z-10 text-[10px] tracking-[0.15em] text-white/50">
            {String(index + 1).padStart(2, "0")}
          </div>

          {/* Project type */}
          <div className="absolute right-6 top-6 z-10 max-w-[55%] text-right text-[9px] uppercase tracking-[0.18em] text-white/50">
            {project.type}
          </div>

          {/* Bottom gradient */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-black/70 to-transparent" />

          {/* Bottom line */}
          <div className="absolute bottom-6 left-6 right-6 z-10">
            <div className="h-px w-full bg-linear-to-r from-white/30 via-white/10 to-transparent" />
          </div>

          {/* Year */}
          <div className="absolute bottom-6 right-6 z-10 text-[9px] uppercase tracking-[0.18em] text-white/40">
            {project.year}
          </div>
        </div>

        {/* =========================
            PROJECT CONTENT
        ========================== */}
        <div className="flex flex-col justify-between p-7 sm:p-9 lg:p-10">

          <div>
            {/* Year / Stack */}
            <p className="text-[9px] uppercase tracking-[0.18em] text-white/30">
              {project.year} · {project.stack}
            </p>

            {/* Title */}
            <motion.h3
              className="mt-5 text-3xl font-light tracking-[-0.03em] transition-transform duration-500 group-hover:translate-x-1 sm:text-4xl"
            >
              {project.title}
            </motion.h3>

            {/* Description */}
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/40">
              {project.description}
            </p>

            {/* Tags */}
            <div className="mt-7 flex flex-wrap gap-2">
              {project.tags?.map((tag) => (
                <motion.span
                  key={tag}
                  whileHover={{
                    y: -2,
                  }}
                  className="rounded-full border border-white/10 px-3 py-1.5 text-[9px] uppercase tracking-[0.12em] text-white/35 transition-colors duration-300 hover:border-white/20 hover:text-white/70"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>

          {/* =========================
              FOOTER
          ========================== */}
          <div className="mt-10 flex items-center justify-between gap-6">

            <span className="hidden text-[9px] uppercase tracking-[0.16em] text-white/20 sm:block">
              {project.type}
            </span>

            <Link
              to={`${project.url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex items-center gap-3 text-xs uppercase tracking-[0.15em] text-white/50 transition hover:text-white"
            >
              View project

              <motion.span
                whileHover={{
                  rotate: 45,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-all duration-300 group-hover/link:border-white group-hover/link:bg-white group-hover/link:text-black"
              >
                <ArrowUpRight size={17} />
              </motion.span>
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  );
}