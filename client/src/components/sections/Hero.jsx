import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Link as ScrollLink } from "react-scroll";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaDownload,
  FaArrowRight,
  FaEnvelope,
} from "react-icons/fa";

import profile from "../../assets/profile3.jpeg";

function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center bg-[var(--bg-primary)] px-4 pb-20 pt-28 sm:px-6 sm:pt-32 lg:px-8 lg:pt-28"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
        {/* =====================================================
            LEFT CONTENT
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
        >
          {/* Small Label */}

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg-surface)] px-3 py-1.5 text-sm text-[var(--text-secondary)]">
            <span className="h-2 w-2 rounded-full bg-[var(--success)]"></span>

            Open to opportunities
          </div>

          {/* Main Heading */}

          <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.08] tracking-tight text-[var(--text-primary)] sm:text-5xl md:text-6xl lg:text-7xl">
            Hi, I'm{" "}
            <span className="text-[var(--accent)]">
              Aditya Kumar Anshu
            </span>
          </h1>

          {/* Role */}

          <div className="mt-6 min-h-[3rem] text-xl font-semibold text-[var(--text-secondary)] sm:text-2xl md:text-3xl">
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2200,
                "MERN Stack Developer",
                2200,
                "AI Engineer",
                2200,
                "Data Analytics Enthusiast",
                2200,
              ]}
              speed={45}
              repeat={Infinity}
            />
          </div>

          {/* Description */}

          <p className="mt-7 max-w-2xl text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
            I build clean, scalable and user-focused web applications using
            modern technologies. Currently pursuing B.Tech in Computer Science
            Engineering with specialization in Full Stack Software Development
            at Jaypee University of Information Technology.
          </p>

          <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
            I enjoy solving real-world problems through software and exploring
            Artificial Intelligence, Machine Learning and Data Analytics.
          </p>

          {/* CTA Buttons */}

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ScrollLink
              to="projects"
              smooth
              duration={500}
              offset={-80}
              className="group inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-[var(--accent)] px-6 py-3.5 font-semibold text-white transition-all duration-200 hover:bg-[var(--accent-hover)] hover:-translate-y-0.5"
            >
              View Projects

              <FaArrowRight className="text-sm transition-transform duration-200 group-hover:translate-x-1" />
            </ScrollLink>

            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-[var(--border-hover)] bg-transparent px-6 py-3.5 font-semibold text-[var(--text-primary)] transition-all duration-200 hover:border-[var(--accent)] hover:bg-[var(--accent-soft)] hover:text-[var(--accent)]"
            >
              <FaDownload className="text-sm" />

              Download Resume
            </a>
          </div>

          {/* Social Links */}

          <div className="mt-9 flex items-center gap-3">
            <a
              href="https://github.com/AdityaChy07"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--bg-surface)] text-[var(--text-secondary)] transition-all duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/adityachy/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--bg-surface)] text-[var(--text-secondary)] transition-all duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.instagram.com/aditya_chy19"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--bg-surface)] text-[var(--text-secondary)] transition-all duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              <FaInstagram />
            </a>

            <a
              href="mailto:adityachy417@gmail.com"
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--bg-surface)] text-[var(--text-secondary)] transition-all duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              <FaEnvelope />
            </a>
          </div>

          {/* Technology Row */}

          <div className="mt-10 border-t border-[var(--border)] pt-6">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--text-muted)]">
              Technologies
            </p>

            <div className="flex flex-wrap gap-2">
              {[
                "React.js",
                "JavaScript",
                "Node.js",
                "Express.js",
                "MongoDB",
                "Python",
                "Git",
                "REST APIs",
              ].map((tech) => (
                <span
                  key={tech}
                  className="tech-tag"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            RIGHT CONTENT
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.1,
            ease: "easeOut",
          }}
          className="flex justify-center lg:justify-end"
        >
          <div className="w-full max-w-sm sm:max-w-md">
            {/* Image Container */}

            <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)] p-2 shadow-[var(--shadow-lg)]">
              <img
                src={profile}
                alt="Aditya Choudhary"
                className="aspect-[4/5] w-full rounded-xl object-cover object-center"
              />
            </div>

            {/* Simple Stats */}

            <div className="mt-4 grid grid-cols-3 gap-3">
              <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-surface)] p-4 text-center">
                <p className="text-xl font-bold text-[var(--text-primary)] sm:text-2xl">
                  2024
                </p>

                <p className="mt-1 text-xs text-[var(--text-secondary)]">
                  B.Tech Started
                </p>
              </div>

              <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-surface)] p-4 text-center">
                <p className="text-xl font-bold text-[var(--text-primary)] sm:text-2xl">
                  MERN
                </p>

                <p className="mt-1 text-xs text-[var(--text-secondary)]">
                  Full Stack
                </p>
              </div>

              <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-surface)] p-4 text-center">
                <p className="text-xl font-bold text-[var(--text-primary)] sm:text-2xl">
                  AI
                </p>

                <p className="mt-1 text-xs text-[var(--text-secondary)]">
                  Exploring
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1,
          duration: 0.4,
        }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 sm:block"
      >
        <ScrollLink
          to="about"
          smooth
          duration={500}
          offset={-80}
          className="cursor-pointer text-xs font-medium uppercase tracking-[0.2em] text-[var(--text-muted)] transition-colors duration-200 hover:text-[var(--accent)]"
        >
          Scroll
        </ScrollLink>
      </motion.div>
    </section>
  );
}

export default Hero;