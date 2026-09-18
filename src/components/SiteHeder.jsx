import { useState } from "react";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "./Svgs";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const links = [
    {
      label: "Home",
      href: "/#home",
    },
    {
      label: "About",
      href: "/#about",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Contact",
      href: "/#contact",
    },
  ];

  const go = (href) => {
    setOpen(false);

    if (href.startsWith("/#")) {
      const hash = href.substring(1);

      if (location.pathname !== "/") {
        navigate(href);
      } else {
        window.history.pushState({}, "", href);

        requestAnimationFrame(() => {
          document.querySelector(hash)?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        });
      }

      return;
    }

    navigate(href);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <motion.header
        initial={{
          y: -30,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="fixed left-0 right-0 top-0 z-50 border-b border-white/6 bg-black/75 backdrop-blur-xl"
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          {/* Logo */}
          <button
            onClick={() => go("/#home")}
            className="group flex items-center gap-3"
            aria-label="Go to home"
          >
            <motion.span
              whileHover={{
                rotate: 8,
                scale: 1.05,
              }}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-[10px] font-medium tracking-widest transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-black"
            >
              AA
            </motion.span>

            <motion.span
              whileHover={{
                rotate: 0.5,
                scale: 1.05,
              }}
              className="hidden text-sm font-medium tracking-[0.2em] sm:block italic"
            >
              Asad Ali
              <span className="text-white/40">.</span>
            </motion.span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <button
                key={link.label}
                onClick={() => go(link.href)}
                className="group relative px-4 py-2 text-xs uppercase tracking-[0.18em] text-white/45 transition-colors duration-300 hover:text-white"
              >
                {link.label}

                <motion.span
                  initial={{
                    scaleX: 0,
                  }}
                  whileHover={{
                    scaleX: 1,
                  }}
                  className="absolute bottom-0 left-4 right-4 h-px origin-left bg-white"
                />
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen((value) => !value)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/70 transition hover:border-white/30 hover:text-white md:hidden"
            aria-label="Toggle navigation"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile navigation */}
        <motion.div
          initial={false}
          animate={{
            height: open ? "auto" : 0,
            opacity: open ? 1 : 0,
          }}
          transition={{
            duration: 0.3,
          }}
          className="overflow-hidden border-t border-white/6 bg-black md:hidden"
        >
          <nav className="flex flex-col px-5 py-5">
            {links.map((link, index) => (
              <motion.button
                key={link.label}
                onClick={() => go(link.href)}
                initial={{
                  opacity: 0,
                  x: -15,
                }}
                animate={{
                  opacity: open ? 1 : 0,
                  x: open ? 0 : -15,
                }}
                transition={{
                  delay: open ? index * 0.05 : 0,
                }}
                className="flex items-center justify-between border-b border-white/6 py-4 text-left text-sm uppercase tracking-[0.18em] text-white/60 hover:text-white"
              >
                {link.label}

                <ArrowUpRight size={16} />
              </motion.button>
            ))}
          </nav>
        </motion.div>
      </motion.header>
    </>
  );
}
