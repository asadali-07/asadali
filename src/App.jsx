import { useEffect, useState } from "react";
import {
  Link,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { motion } from "framer-motion";

import Projects from "./pages/Projects";
import { projects, profile, skills, socials } from "./data/portfolio";
import { ArrowUpRight, Menu, X ,Github,Linkedin,Mail} from "./components/Svgs";
import Hero from "./components/Hero";
import About from "./components/About";
import SiteFooter from "./components/SiteFooter";
import HomePage from "./pages/Home";
import SiteHeader from "./components/SiteHeder";



/* =========================================================
   PAGE TRANSITIONS
========================================================= */

const pageVariants = {
  initial: {
    opacity: 0,
    y: 15,
  },

  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },

  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.25,
    },
  },
};

/* =========================================================
   HASH SCROLL
========================================================= */

function useHashScroll() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({
        top: 0,
        behavior: "instant",
      });

      return;
    }

    const id = location.hash.substring(1);

    const timer = setTimeout(() => {
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 80);

    return () => clearTimeout(timer);
  }, [location.pathname, location.hash]);
}


function App() {
  useHashScroll();

  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white selection:bg-white selection:text-black">
      <SiteHeader />

      <Routes>
        <Route
          path="/"
          element={
            <motion.div
              key="home"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <HomePage />
            </motion.div>
          }
        />

        <Route
          path="/projects"
          element={
            <motion.div
              key="projects"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Projects />
            </motion.div>
          }
        />
      </Routes>

      <SiteFooter />
    </div>
  );
}


export default App;