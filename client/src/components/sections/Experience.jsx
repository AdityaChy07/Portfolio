import { motion } from "framer-motion";

import {
  FaGraduationCap,
  FaLaptopCode,
  FaRobot,
  FaBuilding,
  FaUtensils,
  FaTrophy,
  FaGlobe,
  FaBullseye,
} from "react-icons/fa";

const timeline = [
  {
    year: "2024",
    icon: <FaGraduationCap />,
    title: "Started B.Tech in Computer Science Engineering",
    subtitle:
      "Jaypee University of Information Technology (JUIT)",
    description:
      "Started my B.Tech journey in Computer Science Engineering with a specialization in Full Stack Software Development (FSSD), focusing on programming fundamentals, problem solving and software development.",
  },

  {
    year: "2026",
    icon: <FaLaptopCode />,
    title: "Started MERN Stack Development",
    subtitle: "Beginning of 4th Semester",
    description:
      "Started working with React.js, Node.js, Express.js and MongoDB, building full-stack applications while strengthening frontend, backend and API development skills.",
  },

  {
    year: "2026",
    icon: <FaRobot />,
    title: "AI Health Risk Assessment System",
    subtitle: "Machine Learning Project",
    description:
      "Developed a Health Risk Assessment System for Breast Cancer and Lung Cancer prediction using Python and Machine Learning techniques.",
  },

  {
    year: "2026",
    icon: <FaBuilding />,
    title: "Campus Infrastructure Complaint Tracker",
    subtitle: "Major MERN Project",
    description:
      "Built a role-based campus complaint management platform with authentication, dashboards, complaint tracking, notifications and MongoDB integration.",
  },

  {
    year: "2026",
    icon: <FaUtensils />,
    title: "Food Ordering System",
    subtitle: "Full Stack Project",
    description:
      "Developed a responsive food ordering platform with modern UI, authentication, menu management and order flow using MERN technologies.",
  },

  {
    year: "2026",
    icon: <FaTrophy />,
    title: "Cricket Tournament League Management",
    subtitle: "Web Application",
    description:
      "Designed and developed a responsive cricket tournament website featuring teams, fixtures, points table and tournament information.",
  },

  {
    year: "2026",
    icon: <FaGlobe />,
    title: "Modern Portfolio Website",
    subtitle: "Personal Project",
    description:
      "Designed and developed a responsive personal portfolio using React, Tailwind CSS, Framer Motion and a Node.js/Express backend.",
  },

  {
    year: "Future",
    icon: <FaBullseye />,
    title: "Software Engineering Career",
    subtitle: "Long-Term Goal",
    description:
      "My goal is to become a Software Development Engineer at a technology or product-based company and contribute to scalable, useful and impactful software products.",
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="bg-[var(--bg-secondary)] px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">

        {/* =====================================================
            SECTION HEADER
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
          viewport={{
            once: true,
          }}
          className="mb-14 max-w-3xl sm:mb-16"
        >
          <p className="section-label">
            My Journey
          </p>

          <h2 className="section-title">
            Learning & Development
          </h2>

          <div className="accent-line"></div>

          <p className="section-description">
            My journey from starting Computer Science Engineering to building
            full-stack applications and developing practical software
            engineering skills.
          </p>
        </motion.div>

        {/* =====================================================
            TIMELINE
        ====================================================== */}

        <div className="relative">

          {/* Desktop Center Line */}

          <div className="absolute bottom-0 left-5 top-0 w-px bg-[var(--border)] md:left-1/2 md:-translate-x-1/2"></div>

          <div className="space-y-10 md:space-y-14">

            {timeline.map((item, index) => (

              <motion.div
                key={`${item.year}-${item.title}`}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.06,
                  ease: "easeOut",
                }}
                viewport={{
                  once: true,
                  margin: "-50px",
                }}
                className={`relative flex md:items-center ${
                  index % 2 === 0
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                }`}
              >

                {/* =================================================
                    TIMELINE DOT
                ================================================== */}

                <div className="absolute left-5 top-7 z-10 flex h-3 w-3 -translate-x-1/2 items-center justify-center rounded-full border-2 border-[var(--bg-secondary)] bg-[var(--accent)] md:left-1/2">
                </div>

                {/* =================================================
                    CONTENT
                ================================================== */}

                <div
                  className={`ml-10 w-full md:ml-0 md:w-[44%] ${
                    index % 2 === 0
                      ? "md:mr-auto"
                      : "md:ml-auto"
                  }`}
                >

                  <article className="rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)] p-5 shadow-[var(--shadow-sm)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--border-hover)] hover:shadow-[var(--shadow-md)] sm:p-6">

                    {/* Year + Icon */}

                    <div className="flex items-center justify-between gap-4">

                      <span className="rounded-md bg-[var(--accent-soft)] px-3 py-1.5 text-xs font-semibold text-[var(--accent)]">
                        {item.year}
                      </span>

                      <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--bg-secondary)] text-sm text-[var(--accent)]">
                        {item.icon}
                      </div>

                    </div>

                    {/* Title */}

                    <h3 className="mt-5 text-xl font-bold tracking-tight text-[var(--text-primary)] sm:text-2xl">
                      {item.title}
                    </h3>

                    {/* Subtitle */}

                    <p className="mt-2 text-sm font-medium text-[var(--accent)]">
                      {item.subtitle}
                    </p>

                    {/* Description */}

                    <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)] sm:text-base">
                      {item.description}
                    </p>

                  </article>

                </div>

              </motion.div>

            ))}

          </div>
        </div>

        {/* =====================================================
            CAREER VISION
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          viewport={{
            once: true,
          }}
          className="mt-16 sm:mt-20"
        >

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)] p-6 shadow-[var(--shadow-sm)] sm:p-8 md:p-10">

            <div className="flex flex-col gap-6 md:flex-row md:items-start">

              {/* Icon */}

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[var(--accent-soft)] text-[var(--accent)]">
                <FaBullseye />
              </div>

              {/* Content */}

              <div>

                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
                  Career Vision
                </p>

                <h3 className="mt-2 text-2xl font-bold tracking-tight text-[var(--text-primary)] sm:text-3xl">
                  Building Towards Software Engineering
                </h3>

                <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--text-secondary)] sm:text-base">
                  I aspire to become a Software Development Engineer at a
                  technology or product-based company, where I can work on
                  challenging problems, build scalable applications and
                  continuously improve my software engineering skills.
                </p>

                {/* Goals */}

                <div className="mt-6 flex flex-wrap gap-2">

                  {[
                    "Software Development Engineer",
                    "Full Stack Development",
                    "Product Engineering",
                    "Problem Solving",
                    "Continuous Learning",
                  ].map((goal) => (

                    <span
                      key={goal}
                      className="tech-tag"
                    >
                      {goal}
                    </span>

                  ))}

                </div>

              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Experience;