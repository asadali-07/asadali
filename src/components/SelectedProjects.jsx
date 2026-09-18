import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from "../data/portfolio";
import ProjectCard from "./ProjectCard";
import { ArrowUpRight } from "./Svgs";

export default function SelectedProjects() {
  return (
    <section
      id="projects-preview"
      className="border-t border-white/6 px-5 py-28 sm:px-8 lg:px-10 lg:py-40"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="mb-14 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"
        >
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/35">
            02 — Selected projects
          </p>

          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-white/50 transition hover:text-white"
          >
            See all projects

            <motion.span
              whileHover={{
                x: 3,
                y: -3,
              }}
            >
              <ArrowUpRight size={15} />
            </motion.span>
          </Link>
        </motion.div>

        <div className="space-y-6">
          {projects
            .slice(0, 3)
            .map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={index}
              />
            ))}
        </div>
      </div>
    </section>
  );
}
