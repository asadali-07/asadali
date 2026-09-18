import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from "../data/portfolio";
import ProjectCard from "../components/ProjectCard";
import { ArrowLeft } from "../components/Svgs";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Projects() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-black text-white">
      <section className="section-pad relative overflow-hidden px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-28 lg:px-12 lg:py-32">
        {/* Background glow */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.7,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
          className=" pointer-events-none absolute left-1/2 -top-45 h-80 w-[320px]  -translate-x-1/2 rounded-full blur-[90px] sm:-top-55 sm:w-105  md:h-125  md:w-125 lg:blur-[120px] "
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.08), transparent 70%)",
          }}
        />

        <motion.div
          className="relative z-10 mx-auto max-w-7xl"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {/* Back Home */}
          <motion.div variants={itemVariants}>
            <Link
              to="/#home"
              className=" group mb-12  inline-flex items-center  gap-3 text-[10px] uppercase tracking-[0.16em] text-white/40 transition-colors duration-300 hover:text-white sm:mb-14 sm:text-xs"
            >
              <span className=" flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 transition-all duration-300 group-hover:border-white/30 sm:h-10 sm:w-10">
                <ArrowLeft size={15} />
              </span>

              <span>Back home</span>
            </Link>
          </motion.div>

          {/* Kicker */}
          <motion.p
            variants={itemVariants}
            className=" mb-5 text-[9px] uppercase tracking-[0.25em] text-white/30 sm:text-[10px] "
          >
            Selected work
          </motion.p>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="max-w-5xl text-[3.25rem] font-light leading-[0.95] tracking-[-0.055em] xs:text-[3.5rem] sm:text-6xl md:text-7xl lg:text-[8rem] "
          >
            A few things I’ve{" "}
            <em className="font-serif font-normal text-white/50">made.</em>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="mt-7 max-w-2xl text-sm leading-7 text-white/40 sm:mt-8 sm:text-base sm:leading-7"
          >
            A collection of full-stack applications and web projects. Each
            project combines clean code, thoughtful design, and practical
            solutions to real-world problems.
          </motion.p>

          {/* Project count */}
          <motion.div
            variants={itemVariants}
            className="
              mt-8
              flex
              flex-wrap
              items-center
              gap-x-4
              gap-y-3
              text-[9px]
              uppercase
              tracking-[0.18em]
              text-white/25

              sm:mt-10
            "
          >
            <span>
              {projects.length} {projects.length === 1 ? "Project" : "Projects"}
            </span>

            <span className="h-px w-8 bg-white/10 sm:w-12" />

            <span>Selected work</span>
          </motion.div>
        </motion.div>
      </section>

      {/* =====================================
          ALL PROJECTS
      ====================================== */}

      <section className="section-pad px-5 pb-20 sm:px-8 sm:pb-24 md:px-10 lg:px-12 lg:pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="space-y-5 sm:space-y-6">
            {projects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* =====================================
          BOTTOM CTA
      ====================================== */}

      <section className="section-pad px-5 pb-20 sm:px-8 sm:pb-24 md:px-10 lg:px-12 lg:pb-32">
        <motion.div
          initial={{
            opacity: 0,
            y: 35,
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
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-7xl"
        >
          <div className="relative overflow-hidden rounded-3xl border border-white/10  bg-white/2 p-7 sm:p-10 md:p-12lg:p-16">
            {/* CTA Glow */}
            <div
              className="pointer-events-none absolute-right-20 -top-20 h-56 w-56 rounded-full blur-[80px] sm:-right-24 sm:-top-24 sm:h-72 sm:w-72 lg:-right-25 lg:-top-25 lg:h-75 lg:w-75 lg:blur-[100px] "
              style={{
                background:
                  "radial-gradient(circle, rgba(255,255,255,0.08), transparent 70%)",
              }}
            />

            <div className="relative z-10">
              <p className="text-[9px] uppercase tracking-[0.2em] text-white/30">
                Have a project in mind?
              </p>

              <h2 className=" mt-5 max-w-3xl text-3xl font-light leading-[1.05] tracking-[-0.04em] sm:text-4xl md:text-5xl lg:text-6xl">
                Let’s make something{" "}
                <em className="font-serif text-white/50">interesting.</em>
              </h2>

              <Link
                to="/#contact"
                className="group mt-8 inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.15em] text-white/50 transition-colors hover:text-white sm:text-xs"
              >
                <span>Get in touch</span>

                <motion.span
                  whileHover={{
                    rotate: 45,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-black"
                >
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 17L17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </motion.span>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
