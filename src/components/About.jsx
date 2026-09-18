import { motion } from "framer-motion";
import { profile, skills } from "../data/portfolio";
import Stat from "./Stat";
export default function About() {
  return (
    <section
      id="about"
      className="relative border-t border-white/6 px-5 py-28 sm:px-8 lg:px-10 lg:py-40"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
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
          }}
          className="grid gap-12 lg:grid-cols-[.3fr_1fr]"
        >
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/35">
            01 — About
          </p>

          <div>
            <h2 className="max-w-4xl text-4xl font-light leading-tight tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              I build web apps that feel{" "}
              <em className="font-serif text-white/50">intentional </em>, not just
              assembled.
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-7 text-white/40">
              From intuitive front-end experiences to robust back-end systems, I
              build full-stack applications that are reliable, scalable, and
              built to solve real-world problems.
            </p>
          </div>
        </motion.div>

        <div className="mt-20 grid gap-10 lg:grid-cols-[1.2fr_.8fr]">
          {/* Bio */}
          <motion.div
            initial={{
              opacity: 0,
              x: -35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              margin: "-10% 0px",
            }}
            transition={{
              duration: 0.7,
            }}
            className="rounded-4xl border border-white/10 bg-white/2.5 p-7 backdrop-blur-xl sm:p-10"
          >
            <p className="max-w-2xl text-lg leading-8 text-white/55">
              {profile.bio}
            </p>

            <div className="mt-14 grid grid-cols-3 gap-5 border-t border-white/8 pt-8">
              <Stat number="02" label="Hackathon Winner" />

              <Stat number="20+" label="Projects Completed" />

              <Stat number="08" label="Core Skills" />
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{
              opacity: 0,
              x: 35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            <p className="mb-5 text-[10px] uppercase tracking-[0.2em] text-white/35">
              Toolbox
            </p>

            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.04,
                  }}
                  whileHover={{
                    y: -3,
                    scale: 1.03,
                  }}
                  className="rounded-full border border-white/10 bg-white/2.5 px-4 py-2.5 text-xs text-white/50 transition-colors hover:border-white/30 hover:text-white"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
