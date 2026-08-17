import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaStar,
} from "react-icons/fa";

import complaintImg from "../../assets/projects/complaint-tracker.png";
import portfolioImg from "../../assets/projects/portfolio.png";
import aiImg from "../../assets/projects/health-ai.png";

const projects = [
  {
    title: "Campus Infrastructure Complaint Tracker",
    category: "Full Stack MERN",
    image: complaintImg,
    featured: true,

    description:
      "Role-based complaint management system with secure authentication, dashboards, notifications, complaint tracking and role-based access control.",

    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Tailwind CSS",
    ],

    github:
      "https://github.com/AdityaChy07/Campus-Infrastructure-Complaint-Tracker",

    live:
      "https://campus-infrastructure-complaint-tra.vercel.app/",
  },

  {
    title: "Modern Portfolio",
    category: "Frontend",
    image: portfolioImg,
    featured: true,

    description:
      "Modern portfolio website built with React, Tailwind CSS, Framer Motion and premium UI animations.",

    tech: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
    ],

    github:
      "https://github.com/AdityaChy07/Portfolio",

    live: "#",
  },

  {
    title: "AI Health Risk Assessment",
    category: "Machine Learning",
    image: aiImg,
    featured: false,

    description:
      "Machine Learning based Health Risk Assessment System for Breast Cancer and Lung Cancer prediction.",

    tech: [
      "Python",
      "Flask",
      "Machine Learning",
      "Pandas",
    ],

    github: "#",

    live: "#",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="bg-[var(--bg-primary)] px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">

        {/* =====================================================
            SECTION HEADER
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16"
        >
          <p className="section-label">
            Portfolio
          </p>

          <h2 className="section-title">
            Featured Projects
          </h2>

          <div className="accent-line"></div>

          <p className="section-description">
            A selection of projects where I applied full-stack development,
            machine learning, and problem-solving skills to build practical
            solutions.
          </p>
        </motion.div>

        {/* =====================================================
            PROJECT GRID
        ====================================================== */}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">

          {projects.map((project, index) => (

            <motion.article
              key={project.title}
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              viewport={{
                once: true,
                margin: "-40px",
              }}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)] shadow-[var(--shadow-sm)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--border-hover)] hover:shadow-[var(--shadow-md)]"
            >

              {/* =================================================
                  IMAGE
              ================================================== */}

              <div className="relative aspect-video overflow-hidden bg-[var(--bg-secondary)]">

                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  loading={index === 0 ? "eager" : "lazy"}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />

                {project.featured && (
                  <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-md border border-[var(--border)] bg-[var(--bg-secondary)]/95 px-3 py-1.5 text-xs font-semibold text-[var(--accent)] backdrop-blur-sm">
                    <FaStar className="text-xs" />
                    Featured
                  </div>
                )}

              </div>

              {/* =================================================
                  CONTENT
              ================================================== */}

              <div className="flex flex-1 flex-col p-5 sm:p-6">

                {/* Category */}

                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
                  {project.category}
                </p>

                {/* Title */}

                <h3 className="mt-2 text-xl font-bold tracking-tight text-[var(--text-primary)] sm:text-2xl">
                  {project.title}
                </h3>

                {/* Description */}

                <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)] sm:text-base">
                  {project.description}
                </p>

                {/* Tech Stack */}

                <div className="mt-5 flex flex-wrap gap-2">

                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="tech-tag"
                    >
                      {item}
                    </span>
                  ))}

                </div>

                {/* =================================================
                    PROJECT LINKS
                ================================================== */}

                <div className="mt-auto pt-7">

                  <div className="flex flex-wrap items-center gap-3 border-t border-[var(--border)] pt-5">

                    {/* GitHub */}

                    <a
                      href={
                        project.github !== "#"
                          ? project.github
                          : undefined
                      }
                      target={
                        project.github !== "#"
                          ? "_blank"
                          : undefined
                      }
                      rel={
                        project.github !== "#"
                          ? "noopener noreferrer"
                          : undefined
                      }
                      onClick={(e) => {
                        if (project.github === "#") {
                          e.preventDefault();
                        }
                      }}
                      className={`inline-flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-semibold transition-colors duration-200 ${
                        project.github === "#"
                          ? "cursor-not-allowed border-[var(--border)] text-[var(--text-muted)]"
                          : "border-[var(--border)] text-[var(--text-primary)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
                      }`}
                    >
                      <FaGithub />

                      {project.github === "#"
                        ? "GitHub Soon"
                        : "GitHub"}
                    </a>

                    {/* Live Demo */}

                    <a
                      href={
                        project.live !== "#"
                          ? project.live
                          : undefined
                      }
                      target={
                        project.live !== "#"
                          ? "_blank"
                          : undefined
                      }
                      rel={
                        project.live !== "#"
                          ? "noopener noreferrer"
                          : undefined
                      }
                      onClick={(e) => {
                        if (project.live === "#") {
                          e.preventDefault();
                        }
                      }}
                      className={`inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors duration-200 ${
                        project.live === "#"
                          ? "cursor-not-allowed border border-[var(--border)] bg-transparent text-[var(--text-muted)]"
                          : "bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)]"
                      }`}
                    >
                      <FaExternalLinkAlt className="text-xs" />

                      {project.live === "#"
                        ? "Live Soon"
                        : "Live Demo"}
                    </a>

                  </div>

                </div>

              </div>

            </motion.article>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;