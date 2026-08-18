import { motion } from "framer-motion";
import {
  FaCode,
  FaGraduationCap,
  FaLaptopCode,
  FaDatabase,
  FaBrain,
  FaChartLine,
} from "react-icons/fa";

const stats = [
  {
    number: "10+",
    label: "Projects",
    icon: <FaLaptopCode />,
  },
  {
    number: "10+",
    label: "Technologies",
    icon: <FaCode />,
  },
  {
    number: "250+",
    label: "Hours Coding",
    icon: <FaCode />,
  },
];

const focusAreas = [
  {
    icon: <FaCode />,
    title: "Full Stack Development",
    description:
      "Building responsive and scalable applications with React.js, Node.js, Express.js and modern JavaScript.",
  },
  {
    icon: <FaDatabase />,
    title: "Backend & Databases",
    description:
      "Designing REST APIs and working with MongoDB, authentication, data persistence and backend architecture.",
  },
  {
    icon: <FaBrain />,
    title: "AI & Machine Learning",
    description:
      "Exploring machine learning and building practical AI-based solutions using Python and related tools.",
  },
  {
    icon: <FaChartLine />,
    title: "Data Analytics",
    description:
      "Developing an interest in data analysis, visualization and extracting useful insights from data.",
  },
];

function About() {
  return (
    <section
      id="about"
      className="bg-[var(--bg-secondary)] px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
          className="mb-14 max-w-3xl sm:mb-16"
        >
          <p className="section-label">
            About Me
          </p>

          <h2 className="section-title">
            A Developer Focused on Building Useful Products
          </h2>

          <div className="accent-line"></div>

          <p className="section-description">
            I'm Aditya , a Computer Science Engineering student
            specializing in Full Stack Software Development. I enjoy turning
            ideas into reliable software and continuously improving my
            engineering, problem-solving and analytical skills.
          </p>
        </motion.div>

        {/* =====================================================
            MAIN ABOUT GRID
        ====================================================== */}

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">

          {/* LEFT - ABOUT TEXT */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold tracking-tight text-[var(--text-primary)] sm:text-3xl">
              Full Stack Developer with a Product Mindset
            </h3>

            <p className="mt-6 text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
              I enjoy building modern web applications that are responsive,
              maintainable and focused on solving real-world problems. My
              current development work is primarily centered around the MERN
              stack.
            </p>

            <p className="mt-5 text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
              Alongside full-stack development, I actively explore 
              Data Analytics and Data
              Structures & Algorithms.
            </p>

            <p className="mt-5 text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
              My long-term goal is to become a Software Development Engineer
              at a technology or product-based company while continuing to
              grow as a Full Stack Developer, AI Engineer and Data Analytics
              professional.
            </p>

            {/* Education */}

            <div className="mt-9 rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)] p-6 shadow-[var(--shadow-sm)] sm:p-7">

              <div className="flex items-start gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[var(--accent-soft)] text-[var(--accent)]">
                  <FaGraduationCap />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
                    Education
                  </p>

                  <h4 className="mt-1 text-lg font-bold text-[var(--text-primary)] sm:text-xl">
                    Bachelor of Technology
                  </h4>

                  <p className="mt-1 font-medium text-[var(--text-secondary)]">
                    Computer Science & Engineering
                  </p>

                  <p className="mt-1 text-sm text-[var(--text-muted)]">
                    Specialization in Full Stack Software Development (FSSD)
                  </p>

                  <p className="mt-3 text-sm font-medium text-[var(--text-primary)]">
                    Jaypee University of Information Technology (JUIT)
                  </p>

                  <p className="mt-1 text-sm text-[var(--text-muted)]">
                    2024 — Present
                  </p>
                </div>

              </div>

            </div>
          </motion.div>

          {/* RIGHT - STATS */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.08,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1"
          >
            {stats.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-5 rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)] p-5 shadow-[var(--shadow-sm)] transition-all duration-200 hover:-translate-y-1 hover:border-[var(--border-hover)] hover:shadow-[var(--shadow-md)]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[var(--accent-soft)] text-[var(--accent)]">
                  {item.icon}
                </div>

                <div>
                  <p className="text-2xl font-bold text-[var(--text-primary)]">
                    {item.number}
                  </p>

                  <p className="mt-1 text-sm text-[var(--text-secondary)]">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* =====================================================
            FOCUS AREAS
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.1,
          }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-20"
        >
          <div className="mb-8">
            <p className="section-label">
              What I Focus On
            </p>

            <h3 className="text-2xl font-bold tracking-tight text-[var(--text-primary)] sm:text-3xl">
              Areas I'm Developing
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {focusAreas.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.06,
                }}
                viewport={{ once: true }}
                className="rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)] p-6 shadow-[var(--shadow-sm)] transition-all duration-200 hover:-translate-y-1 hover:border-[var(--border-hover)] hover:shadow-[var(--shadow-md)]"
              >
                <div className="flex items-start gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[var(--accent-soft)] text-[var(--accent)]">
                    {item.icon}
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-[var(--text-primary)]">
                      {item.title}
                    </h4>

                    <p className="mt-2 text-sm leading-7 text-[var(--text-secondary)]">
                      {item.description}
                    </p>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default About;