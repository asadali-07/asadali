import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "./Svgs";
import { socials } from "../data/portfolio";
import ContactLink from "./ContactLink";

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-white/6 px-5 py-28 sm:px-8 lg:px-10 lg:py-40"
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 40,
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
        className="mx-auto grid max-w-7xl gap-14 rounded-4xl border border-white/10 bg-white/2.5 p-7 backdrop-blur-xl sm:p-10 lg:grid-cols-2 lg:p-14"
      >
        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/35">
            03 — Contact
          </p>

          <h2 className="mt-8 text-4xl font-light leading-[0.95] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            Have a good idea?
            <br />

            <em className="font-serif text-white/50">
              Let’s make it real.
            </em>
          </h2>
        </div>

        {/* No form */}
        <div className="flex flex-col justify-center">
          <ContactLink
            icon={<Mail size={18} />}
            label="Email"
            value={socials.email}
            href={`mailto:${socials.email}`}
          />

          <ContactLink
            icon={<Linkedin size={18} />}
            label="LinkedIn"
            value="Connect with me"
            href={socials.linkedin}
          />

          <ContactLink
            icon={<Github size={18} />}
            label="GitHub"
            value="See the code"
            href={socials.github}
          />
        </div>
      </motion.div>
    </section>
  );
}