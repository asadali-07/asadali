import { motion } from "framer-motion";
import { profile } from "../data/portfolio";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/6 px-5 py-8 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-[10px] uppercase tracking-[0.14em] text-white/25 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3">
          <motion.span
            whileHover={{
              rotate: 8,
            }}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-[9px] text-white/50"
          >
            AA
          </motion.span>

          <span>
            {profile.name} — portfolio
          </span>
        </div>

        <span>
          © {year}. Built with ❤️ by {profile.name}.
        </span>
      </div>
    </footer>
  );
}