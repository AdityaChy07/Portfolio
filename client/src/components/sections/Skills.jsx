import { motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaJava,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPython,
  SiCplusplus,
} from "react-icons/si";

const skills = [
  {
    name: "React",
    icon: <FaReact size={50} />,
    color: "text-cyan-400",
    category: "Frontend",
    percent: 90,
  },

  {
    name: "JavaScript",
    icon: <SiJavascript size={50} />,
    color: "text-yellow-400",
    category: "Frontend",
    percent: 92,
  },

  {
    name: "HTML5",
    icon: <FaHtml5 size={50} />,
    color: "text-orange-500",
    category: "Frontend",
    percent: 95,
  },

  {
    name: "CSS3",
    icon: <FaCss3Alt size={50} />,
    color: "text-blue-500",
    category: "Frontend",
    percent: 90,
  },

  {
    name: "Tailwind",
    icon: <SiTailwindcss size={50} />,
    color: "text-cyan-300",
    category: "Frontend",
    percent: 90,
  },

  {
    name: "Node.js",
    icon: <FaNodeJs size={50} />,
    color: "text-green-500",
    category: "Backend",
    percent: 85,
  },

  {
    name: "Express",
    icon: <SiExpress size={50} />,
    color: "text-white",
    category: "Backend",
    percent: 85,
  },

  {
    name: "MongoDB",
    icon: <SiMongodb size={50} />,
    color: "text-green-400",
    category: "Database",
    percent: 85,
  },

  {
    name: "Git",
    icon: <FaGitAlt size={50} />,
    color: "text-orange-500",
    category: "Tools",
    percent: 90,
  },

  {
    name: "GitHub",
    icon: <FaGithub size={50} />,
    color: "text-white",
    category: "Tools",
    percent: 90,
  },

  {
    name: "Python",
    icon: <SiPython size={50} />,
    color: "text-yellow-400",
    category: "Programming",
    percent: 80,
  },

  {
    name: "Java",
    icon: <FaJava size={50} />,
    color: "text-red-500",
    category: "Programming",
    percent: 80,
  },

  {
    name: "C++",
    icon: <SiCplusplus size={50} />,
    color: "text-blue-500",
    category: "Programming",
    percent: 80,
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-950 py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[6px] text-cyan-400 font-semibold">
            Skills
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Technologies I Work With
          </h2>

          <div className="w-28 h-1 bg-cyan-400 rounded-full mx-auto mt-5"></div>

        </motion.div>

        {/* Grid */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {skills.map((skill, index) => (

            <motion.div
              key={skill.name}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * .07,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="group relative bg-slate-900 rounded-3xl border border-slate-800 p-8 text-center overflow-hidden transition hover:border-cyan-400"
            >

              {/* Glow */}

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-cyan-500/10 blur-3xl"></div>

              <div className={`relative ${skill.color} flex justify-center mb-6`}>

                {skill.icon}

              </div>

              <h3 className="text-2xl font-semibold">

                {skill.name}

              </h3>

              <p className="text-gray-400 mt-2">

                {skill.category}

              </p>

              {/* Progress */}

              <div className="mt-8">

                <div className="flex justify-between mb-2">

                  <span>Skill</span>

                  <span>{skill.percent}%</span>

                </div>

                <div className="w-full h-3 bg-slate-700 rounded-full overflow-hidden">

                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{
                      width: `${skill.percent}%`,
                    }}
                    transition={{
                      duration: 1,
                    }}
                    viewport={{ once: true }}
                    className="h-full bg-cyan-400 rounded-full"
                  />

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;