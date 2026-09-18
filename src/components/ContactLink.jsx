import { motion } from "framer-motion";
import { ArrowUpRight } from "./Svgs";

export default function ContactLink({ icon, label, value, href }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      whileHover={{
        x: 5,
      }}
      className="group flex items-center gap-4 border-b border-white/8 py-5 transition-colors hover:border-white/25"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 text-white/50 transition-all duration-300 group-hover:border-white/30 group-hover:bg-white group-hover:text-black">
        {icon}
      </span>

      <span className="min-w-0 flex-1">
        <small className="block text-[9px] uppercase tracking-[0.18em] text-white/25">
          {label}
        </small>

        <strong className="mt-1 block truncate text-sm font-normal text-white/60 transition-colors group-hover:text-white">
          {value}
        </strong>
      </span>

      <span className="text-white/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white">
        <ArrowUpRight size={17} />
      </span>
    </motion.a>
  );
}
