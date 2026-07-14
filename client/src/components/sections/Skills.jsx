import { motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaFigma,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostman,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React.js",
        icon: <FaReact className="text-sky-400" />,
        level: 95,
      },
      {
        name: "JavaScript",
        icon: <SiJavascript className="text-yellow-400" />,
        level: 92,
      },
      {
        name: "HTML5",
        icon: <FaHtml5 className="text-orange-500" />,
        level: 95,
      },
      {
        name: "CSS3",
        icon: <FaCss3Alt className="text-blue-500" />,
        level: 90,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-cyan-400" />,
        level: 92,
      },
    ],
  },

  {
    title: "Backend",
    skills: [
      {
        name: "Node.js",
        icon: <FaNodeJs className="text-green-500" />,
        level: 88,
      },
      {
        name: "Express.js",
        icon: <SiExpress />,
        level: 85,
      },
      {
        name: "REST API",
        icon: "🚀",
        level: 86,
      },
    ],
  },

  {
    title: "Database",
    skills: [
      {
        name: "MongoDB",
        icon: <SiMongodb className="text-green-400" />,
        level: 88,
      },
    ],
  },

  {
    title: "Tools",
    skills: [
      {
        name: "Git",
        icon: <FaGitAlt className="text-orange-500" />,
        level: 90,
      },
      {
        name: "GitHub",
        icon: <FaGithub />,
        level: 92,
      },
      {
        name: "VS Code",
        icon: <VscVscode className="text-blue-400" />,
        level: 95,
      },
      {
        name: "Postman",
        icon: <SiPostman className="text-orange-400" />,
        level: 88,
      },
      {
        name: "Figma",
        icon: <FaFigma className="text-pink-500" />,
        level: 75,
      },
    ],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="relative py-28 px-6 bg-[var(--bg-primary)] overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute -left-40 top-20 w-[400px] h-[400px] rounded-full bg-cyan-500/10 blur-[140px]"></div>

      <div className="absolute right-0 bottom-0 w-[450px] h-[450px] rounded-full bg-purple-500/10 blur-[150px]"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <p className="uppercase tracking-[8px] text-cyan-400 font-semibold">
            My Skills
          </p>

          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight text-[var(--text-primary)] mt-4">
            Technologies I Work With
          </h2>

          <div className="w-28 h-1 bg-cyan-400 rounded-full mx-auto mt-6"></div>

          <p className="max-w-2xl mx-auto mt-8 text-lg leading-8 text-[var(--text-secondary)]">
            I enjoy building modern full-stack applications using
            the MERN stack, while continuously learning new
            technologies and improving my problem-solving skills.
          </p>

        </motion.div>

        {/* Categories */}

        <div className="grid lg:grid-cols-2 gap-10">

          {skillCategories.map((category, categoryIndex) => (

            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: categoryIndex * 0.15,
              }}
              viewport={{ once: true }}
              className="rounded-3xl bg-white/10 backdrop-blur-xl border border-white/10 p-8 shadow-xl hover:border-cyan-400 transition-all duration-500"
            >

              <h3 className="text-3xl font-bold text-cyan-400 mb-8">
                {category.title}
              </h3>

              <div className="space-y-6">

                {category.skills.map((skill) => (

                  <div key={skill.name}>

                    <div className="flex justify-between items-center mb-3">

                      <div className="flex items-center gap-3 text-lg font-semibold text-[var(--text-primary)]">

                        <span className="text-2xl">
                          {skill.icon}
                        </span>

                        <span>
                          {skill.name}
                        </span>

                      </div>

                      <span className="text-cyan-400 font-semibold">
                        {skill.level}%
                      </span>

                    </div>

                    {/* Continue in Part 2 */}
                                        {/* Progress Bar */}

                    <div className="w-full h-3 rounded-full bg-slate-700 overflow-hidden">

                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{
                          width: `${skill.level}%`,
                        }}
                        transition={{
                          duration: 1.2,
                          delay: 0.2,
                          ease: "easeOut",
                        }}
                        viewport={{ once: true }}
                        className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 shadow-[0_0_20px_rgba(34,211,238,0.5)]"
                      />

                    </div>

                  </div>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

        {/* Bottom Section */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
          viewport={{ once: true }}
          className="mt-24"
        >

          <div className="rounded-3xl bg-white/10 backdrop-blur-xl border border-white/10 p-10 text-center hover:border-cyan-400 transition-all duration-500">

            <h3 className="text-3xl font-bold text-[var(--text-primary)] mb-6">
              Always Learning 🚀
            </h3>

            <p className="max-w-3xl mx-auto leading-8 text-[var(--text-secondary)]">

              I enjoy learning new technologies and continuously improving my
              development skills. Along with Full Stack Development, I actively
              practice Data Structures & Algorithms and explore Artificial
              Intelligence, Machine Learning, and modern software engineering
              concepts.

            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-10">

              {[
                "React",
                "Node.js",
                "Express",
                "MongoDB",
                "Tailwind CSS",
                "JavaScript",
                "Git",
                "REST APIs",
                "Python",
                "AI/ML",
              ].map((item) => (

                <motion.span
                  key={item}
                  whileHover={{
                    scale: 1.08,
                    y: -3,
                  }}
                  className="px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 font-medium cursor-default transition-all duration-300"
                >
                  {item}
                </motion.span>

              ))}

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Skills;