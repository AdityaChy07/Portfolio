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
      "B.Tech in Computer Science Engineering with Specialization in Full Stack Software Development (FSSD). Started my engineering journey with a strong focus on programming fundamentals, problem solving, and software development.",
  },

  {
    year: "2026",
    icon: <FaLaptopCode />,
    title: "Started MERN Stack Development",
    subtitle: "Beginning of 4th Semester",
    description:
      "Started learning React.js, Node.js, Express.js and MongoDB. Built multiple full-stack applications while strengthening frontend and backend development skills.",
  },

  {
    year: "2026",
    icon: <FaRobot />,
    title: "AI Health Risk Assessment System",
    subtitle: "Machine Learning Project",
    description:
      "Developed an AI-powered Health Risk Assessment System for Breast Cancer and Lung Cancer prediction using Machine Learning models and Python.",
  },

  {
    year: "2026",
    icon: <FaBuilding />,
    title: "Campus Infrastructure Complaint Tracker",
    subtitle: "Major MERN Project",
    description:
      "Built a complete role-based Campus Infrastructure Complaint Tracker with authentication, dashboards, complaint tracking, notifications and MongoDB integration.",
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
    subtitle: "Sports Management Website",
    description:
      "Designed and developed a responsive cricket tournament management website featuring fixtures, teams, points table and tournament information.",
  },

  {
    year: "2026",
    icon: <FaGlobe />,
    title: "Modern Portfolio Website",
    subtitle: "Personal Branding",
    description:
      "Designed and developed a premium portfolio using React, Tailwind CSS, Framer Motion and Express.js with modern animations and responsive design.",
  },

  {
    year: "Future",
    icon: <FaBullseye />,
    title: "Career Vision",
    subtitle: "Dream Goal",
    description:
      "Aspire to become a Software Development Engineer in a product-based company while growing as a Full Stack Developer, AI Engineer and Data Analytics professional, building impactful products used by millions of people.",
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="relative py-28 px-6 bg-[var(--bg-primary)] overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute -left-32 top-24 w-[420px] h-[420px] rounded-full bg-cyan-500/10 blur-[140px]"></div>

      <div className="absolute right-0 bottom-0 w-[420px] h-[420px] rounded-full bg-purple-500/10 blur-[150px]"></div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <p className="uppercase tracking-[8px] text-cyan-400 font-semibold">
            My Journey
          </p>

          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight text-[var(--text-primary)] mt-4">
            Learning & Growth Timeline
          </h2>

          <div className="w-28 h-1 bg-cyan-400 rounded-full mx-auto mt-6"></div>

          <p className="max-w-3xl mx-auto mt-8 text-lg leading-8 text-[var(--text-secondary)]">
            Every project and every milestone has helped me grow as a developer.
            This journey reflects my continuous learning, practical experience,
            and long-term vision in software engineering.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative">

          {/* Vertical Line */}

          <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500 rounded-full"></div>

          {/* Timeline Items */}

          <div className="space-y-16">

            {timeline.map((item, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                }`}
              >
                                {/* Timeline Circle */}

                <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 z-20">

                  <motion.div
                    whileHover={{
                      scale: 1.15,
                      rotate: 10,
                    }}
                    className="w-14 h-14 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center text-black text-xl shadow-[0_0_25px_rgba(34,211,238,0.45)]"
                  >
                    {item.icon}
                  </motion.div>

                </div>

                {/* Timeline Card */}

                <motion.div
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className={`ml-20 md:ml-0 w-full md:w-[45%]
                  rounded-3xl
                  bg-white/10
                  backdrop-blur-xl
                  border
                  border-white/10
                  p-8
                  shadow-xl
                  hover:border-cyan-400
                  hover:shadow-[0_0_40px_rgba(34,211,238,0.35)]
                  transition-all
                  duration-500`}
                >

                  {/* Year */}

                  <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/15 text-cyan-400 text-sm font-semibold mb-5">

                    {item.year}

                  </span>

                  {/* Title */}

                  <h3 className="text-2xl font-bold text-[var(--text-primary)]">

                    {item.title}

                  </h3>

                  {/* Subtitle */}

                  <p className="text-cyan-400 font-medium mt-2">

                    {item.subtitle}

                  </p>

                  {/* Description */}

                  <p className="mt-5 leading-8 text-[var(--text-secondary)]">

                    {item.description}

                  </p>

                </motion.div>

              </motion.div>

            ))}

          </div>

        </div>

        {/* Career Vision */}

        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{
            once: true,
          }}
          className="mt-28"
        >

          <div className="rounded-3xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-xl border border-cyan-400/20 p-10 text-center hover:shadow-[0_0_45px_rgba(34,211,238,0.3)] transition-all duration-500">

            <h3 className="text-4xl font-extrabold text-[var(--text-primary)]">

              🎯 Career Vision

            </h3>

            <p className="mt-6 text-lg leading-8 text-[var(--text-secondary)] max-w-4xl mx-auto">

              I aspire to build scalable, innovative and impactful software
              products that solve real-world problems. My goal is to become a
              Software Development Engineer in a leading product-based company
              while continuously growing as a Full Stack Developer, AI Engineer
              and Data Analytics professional.

            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-10">

              {[
                "Software Development Engineer",
                "Full Stack Developer",
                "AI Engineer",
                "Data Analytics",
                "Problem Solver",
                "Continuous Learner",
              ].map((goal) => (

                <motion.span
                  key={goal}
                  whileHover={{
                    scale: 1.08,
                    y: -4,
                  }}
                  className="px-5 py-3 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 font-semibold cursor-default"
                >
                  {goal}
                </motion.span>

              ))}

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Experience;