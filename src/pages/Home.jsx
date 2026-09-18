import Hero from "../components/Hero";
import About from "../components/About";
import SelectedProjects from "../components/SelectedProjects";
import Contact from "../components/Contact";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <SelectedProjects />
      <Contact />
    </main>
  );
}