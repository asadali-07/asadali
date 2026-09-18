import { motion } from "framer-motion";
import { profile } from "../data/portfolio";
import { ArrowUpRight } from "./Svgs";
export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-5 pb-20 pt-32 sm:px-8 lg:px-10"
    >
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
          duration: 1.5,
        }}
        className="pointer-events-none absolute left-[5%] top-[15%] h-72 w-72 rounded-full bg-white/4 blur-[100px]"
      />

      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute bottom-[5%] right-[5%] h-96 w-96 rounded-full bg-white/2.5 blur-[120px]"
      />

      {/* Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_.85fr]">
          {/* Copy */}
          <div>
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.15,
                duration: 0.6,
              }}
              className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-[10px] uppercase tracking-[0.18em] text-white/50 backdrop-blur-xl"
            >
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
              Available for Full-Time Roles
            </motion.div>

            <div className="overflow-hidden text-[clamp(3.5rem,9vw,8rem)] font-light leading-[0.85] tracking-[-0.055em]">
              {[
                {
                  text: "Building",
                  className: "",
                },
                {
                  text: "Scalable",
                  className: "text-white/25",
                },
                {
                  text: "Web Solutions.",
                  className: "italic text-white",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{
                    opacity: 0,
                    y: 90,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.25 + index * 0.1,
                    duration: 0.9,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={item.className}
                >
                  {item.text}
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.7,
                duration: 0.7,
              }}
              className="mt-10 max-w-xl text-base leading-7 text-white/45 sm:text-lg"
            >
              I’m <span className="text-white">{profile.name}</span>, a{" "}
              {profile.role} focused on building modern web applications,
              scalable systems, and seamless user experiences across the full
              stack.
            </motion.p>

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.85,
                duration: 0.6,
              }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <a
                href="/files/Resume.pdf"
                download
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-black transition-all duration-300 hover:-translate-y-1 hover:bg-white/90"
              >
                Download resume
                <ArrowUpRight size={17} />
              </a>

              <a
                href="#projects-preview"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 px-6 py-3.5 text-sm text-white/70 transition-all duration-300 hover:border-white/40 hover:bg-white/4 hover:text-white"
              >
                View selected work
              </a>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 1.1,
              }}
              className="mt-12 flex flex-wrap items-center gap-4 text-[10px] uppercase tracking-[0.18em] text-white/30"
            >
              <span>Based in {profile.location}</span>

              <span className="h-px w-10 bg-white/10" />

              <span>React · Node.js · Express · MongoDB</span>
            </motion.div>
          </div>

          {/* Portrait */}
          <div className="relative mx-auto w-full max-w-md lg:ml-auto">
            <motion.div
              animate={{
                y: [0, -18, 0],
                x: [0, 8, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/6 blur-[90px]"
            />

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.85,
                rotate: -5,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: 0,
              }}
              transition={{
                delay: 0.45,
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                scale: 1.02,
                rotateY: 4,
                rotateX: -3,
              }}
              className="relative overflow-hidden rounded-4xl border border-white/10 bg-white/[0.035] p-3 shadow-2xl backdrop-blur-xl"
            >
              <div className="relative aspect-4/5 overflow-hidden rounded-3xl bg-white/4">
                <img
                  src={profile.image}
                  alt={`${profile.name} portrait`}
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 right-5">
                  <div className="mb-1 text-[10px] uppercase tracking-[0.18em] text-white/40">
                    Currently
                  </div>

                  <div className="text-sm text-white">
                    Open to Full-Stack Developer roles.
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating labels */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -left-5 top-12 rounded-full border border-white/10 bg-black/70 px-4 py-2 text-[9px] tracking-[0.18em] text-white/50 backdrop-blur-xl"
            >
              01 / CODE
            </motion.div>

            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute -right-5 bottom-16 rounded-full border border-white/10 bg-black/70 px-4 py-2 text-[9px] tracking-[0.18em] text-white/50 backdrop-blur-xl"
            >
              02 / CREATE
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
