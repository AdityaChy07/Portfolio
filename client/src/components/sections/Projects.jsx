import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
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
      className="relative bg-slate-900 py-24 px-6 overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute w-96 h-96 bg-cyan-500/10 blur-[140px] rounded-full top-0 left-0"></div>

      <div className="absolute w-96 h-96 bg-purple-500/10 blur-[150px] rounded-full bottom-0 right-0"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Heading */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[8px] text-cyan-400 font-semibold">
            Portfolio
          </p>

          <h2 className="text-5xl md:text-6xl font-bold mt-4">
            Featured Projects
          </h2>

          <div className="w-28 h-1 bg-cyan-400 rounded-full mx-auto mt-6"></div>
        </motion.div>

        {/* Project Grid */}

        <div className="grid lg:grid-cols-3 gap-10">

          {projects.map((project, index) => (

            <Tilt
              key={index}
              glareEnable={true}
              glareMaxOpacity={0.25}
              scale={1.03}
              tiltMaxAngleX={12}
              tiltMaxAngleY={12}
              transitionSpeed={1500}
            >

              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.6,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                }}
                className="group relative overflow-hidden bg-slate-800/80 backdrop-blur-lg border border-slate-700 rounded-3xl hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,0.35)] transition-all duration-500"
              >
                {/* Card Glow */}

                <div className="absolute inset-0 bg-cyan-400/5 opacity-0 group-hover:opacity-100 transition duration-500"></div>

                {/* Image */}

                <div className="relative overflow-hidden">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-60 object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
                  />

                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-cyan-400 text-black px-4 py-1 rounded-full flex items-center gap-2 text-sm font-semibold shadow-lg">
                      <FaStar />
                      Featured
                    </div>
                  )}
                </div>

                {/* Card Content */}

                <div className="relative p-7">

                  <p className="text-cyan-400 text-sm font-medium uppercase tracking-wider">
                    {project.category}
                  </p>

                  <h3 className="text-2xl font-bold mt-3">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 leading-7 mt-4">
                    {project.description}
                  </p>

                  {/* Continue in Part 2 */}
                                    {/* Tech Stack */}

                  <div className="flex flex-wrap gap-2 mt-6">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}

                  <div className="flex justify-between items-center mt-8">

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white hover:text-cyan-400 hover:scale-105 transition-all duration-300"
                    >
                      <FaGithub className="text-xl" />
                      <span>GitHub</span>
                    </a>

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-black px-5 py-2 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
                    >
                      Live Demo
                      <FaExternalLinkAlt />
                    </a>

                  </div>

                </div>

              </motion.div>

            </Tilt>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;