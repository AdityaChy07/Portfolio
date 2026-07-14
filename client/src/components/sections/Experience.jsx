import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaCertificate,
  FaTrophy,
} from "react-icons/fa";

const timeline = [
  {
    icon: <FaGraduationCap />,
    title: "Bachelor of Technology (CSE)",
    organization: "Your College Name",
    duration: "2024 - Present",
    description:
      "Currently pursuing B.Tech in Computer Science while strengthening Full Stack Development and Data Structures & Algorithms.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Full Stack Developer",
    organization: "Personal Projects",
    duration: "2025 - Present",
    description:
      "Developed multiple MERN stack applications with authentication, dashboards, REST APIs, and responsive UI.",
  },
  {
    icon: <FaCertificate />,
    title: "Professional Learning",
    organization: "Online Platforms",
    duration: "Ongoing",
    description:
      "Learning React, Node.js, Express.js, MongoDB, Tailwind CSS, Python, Machine Learning, and System Design.",
  },
  {
    icon: <FaTrophy />,
    title: "Achievements",
    organization: "Projects & Coding",
    duration: "2025 - Present",
    description:
      "Built real-world projects, improved problem-solving skills, and continuously expanded technical knowledge.",
  },
];

function Experience() {
  return (
    <section id="experience" className="bg-slate-950 py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[6px] text-cyan-400 font-semibold">
            Journey
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Education & Experience
          </h2>

          <div className="w-28 h-1 bg-cyan-400 rounded-full mx-auto mt-5"></div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-1 bg-cyan-500 h-full rounded-full"></div>

          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -100 : 100,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.6,
              }}
              viewport={{ once: true }}
              className={`mb-16 flex ${
                index % 2 === 0
                  ? "md:justify-start"
                  : "md:justify-end"
              }`}
            >
              <div className="relative w-full md:w-[45%]">

                {/* Circle */}
                <div className="hidden md:flex absolute top-8 -right-14 w-12 h-12 rounded-full bg-cyan-500 text-black items-center justify-center text-xl font-bold shadow-lg">
                  {item.icon}
                </div>

                {index % 2 !== 0 && (
                  <div className="hidden md:flex absolute top-8 -left-14 w-12 h-12 rounded-full bg-cyan-500 text-black items-center justify-center text-xl">
                    {item.icon}
                  </div>
                )}

                {/* Card */}
                <div className="bg-slate-900 border border-slate-800 hover:border-cyan-400 rounded-2xl p-8 shadow-lg hover:shadow-cyan-500/20 transition">

                  <span className="text-cyan-400 text-sm font-semibold">
                    {item.duration}
                  </span>

                  <h3 className="text-2xl font-bold mt-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 mt-1 font-medium">
                    {item.organization}
                  </p>

                  <p className="text-gray-300 mt-5 leading-8">
                    {item.description}
                  </p>

                </div>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;