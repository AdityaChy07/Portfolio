import { motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaCode,
  FaBrain,
  FaChartBar,
  FaDocker,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiPython,
  SiCplusplus,
  SiMysql,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend Development",
    description:
      "Building responsive and user-focused interfaces with modern frontend technologies.",

    skills: [
      {
        name: "React.js",
        icon: <FaReact className="text-[#61DAFB]" />,
      },
      {
        name: "JavaScript",
        icon: <SiJavascript className="text-[#F7DF1E]" />,
      },
      {
        name: "HTML5",
        icon: <FaHtml5 className="text-[#E34F26]" />,
      },
      {
        name: "CSS3",
        icon: <FaCss3Alt className="text-[#1572B6]" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-[#06B6D4]" />,
      },
    ],
  },

  {
    title: "Backend Development",
    description:
      "Developing REST APIs, server-side applications and backend services.",

    skills: [
      {
        name: "Node.js",
        icon: <FaNodeJs className="text-[#68A063]" />,
      },
      {
        name: "Express.js",
        icon: <SiExpress />,
      },
      {
        name: "REST APIs",
        icon: <FaCode />,
      },
    ],
  },

  {
    title: "Programming Languages",
    description:
      "Programming fundamentals, problem solving and development using multiple languages.",

    skills: [
      {
        name: "C++",
        icon: <SiCplusplus className="text-[#00599C]" />,
      },
      {
        name: "C",
        icon: <FaCode />,
      },
      {
        name: "Python",
        icon: <SiPython className="text-[#3776AB]" />,
      },
      {
        name: "JavaScript",
        icon: <SiJavascript className="text-[#F7DF1E]" />,
      },
    ],
  },

  {
    title: "Database",
    description:
      "Working with document-based and relational databases for application data management.",

    skills: [
      {
        name: "MongoDB",
        icon: <SiMongodb className="text-[#47A248]" />,
      },
      {
        name: "SQL",
        icon: <SiMysql className="text-[#4479A1]" />,
      },
    ],
  },

  {
    title: "Tools & Platforms",
    description:
      "Development, API testing, version control and containerization tools.",

    skills: [
      {
        name: "Git",
        icon: <FaGitAlt className="text-[#F05032]" />,
      },
      {
        name: "GitHub",
        icon: <FaGithub />,
      },
      {
        name: "VS Code",
        icon: <FaCode />,
      },
      {
        name: "Postman",
        icon: <SiPostman className="text-[#FF6C37]" />,
      },
      {
        name: "Docker",
        icon: <FaDocker className="text-[#2496ED]" />,
      },
    ],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="bg-[var(--bg-primary)] px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
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
          className="mb-12 max-w-3xl sm:mb-16"
        >
          <p className="section-label">
            Technical Skills
          </p>

          <h2 className="section-title">
            Technologies I Work With
          </h2>

          <div className="accent-line"></div>

          <p className="section-description">
            A practical technology stack developed through academic work,
            personal projects, full-stack applications, machine learning
            experiments and continuous problem solving.
          </p>
        </motion.div>

        {/* =====================================================
            SKILL CATEGORIES
        ====================================================== */}

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">

          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
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
                margin: "-40px",
              }}
              className="rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)] p-6 shadow-[var(--shadow-sm)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--border-hover)] hover:shadow-[var(--shadow-md)] sm:p-7"
            >

              {/* Category Header */}

              <div className="flex items-start gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[var(--accent-soft)] text-[var(--accent)]">
                  {index === 0 && <FaReact />}
                  {index === 1 && <FaNodeJs />}
                  {index === 2 && <FaCode />}
                  {index === 3 && <FaDatabase />}
                  {index === 4 && <FaBrain />}
                  {index === 5 && <FaDocker />}
                </div>

                <div>

                  <h3 className="text-lg font-bold tracking-tight text-[var(--text-primary)]">
                    {category.title}
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-[var(--text-secondary)]">
                    {category.description}
                  </p>

                </div>

              </div>

              {/* Skills */}

              <div className="mt-6 flex flex-wrap gap-2.5">

                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--bg-secondary)] px-3 py-2 text-sm font-medium text-[var(--text-primary)] transition-colors duration-200 hover:border-[var(--border-hover)] hover:text-[var(--accent)]"
                  >
                    <span className="text-base">
                      {skill.icon}
                    </span>

                    <span>
                      {skill.name}
                    </span>
                  </div>
                ))}

              </div>

            </motion.div>
          ))}

        </div>

        {/* =====================================================
            CURRENTLY LEARNING
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
            delay: 0.15,
          }}
          viewport={{ once: true }}
          className="mt-10 rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)] p-6 shadow-[var(--shadow-sm)] sm:p-8"
        >

          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

            <div>

              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
                Currently Learning
              </p>

              <h3 className="mt-2 text-2xl font-bold tracking-tight text-[var(--text-primary)]">
                Continuously Expanding My Skill Set
              </h3>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--text-secondary)]">
                Currently strengthening Data Structures & Algorithms while
                exploring Artificial Intelligence, Machine Learning, Data
                Analytics, Docker and modern software engineering practices.
              </p>

            </div>

            <div className="flex flex-wrap gap-2">

              {[
                "DSA",
                "Data Analytics",
                "Docker",
                "System Design",
              ].map((item) => (
                <span
                  key={item}
                  className="tech-tag"
                >
                  {item}
                </span>
              ))}

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Skills;