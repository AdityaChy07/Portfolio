import { motion } from "framer-motion";
import CountUp from "react-countup";

import {
  FaLaptopCode,
  FaProjectDiagram,
  FaCode,
  FaGraduationCap,
  FaAward,
} from "react-icons/fa";

function About() {
  const stats = [
    {
      icon: <FaProjectDiagram />,
      number: 10,
      suffix: "+",
      title: "Projects Completed",
    },
    {
      icon: <FaCode />,
      number: 12,
      suffix: "+",
      title: "Technologies",
    },
    {
      icon: <FaLaptopCode />,
      number: 100,
      suffix: "+",
      title: "Hours of Coding",
    },
  ];

  return (
    <section
      id="about"
      className="relative bg-slate-900 py-24 px-6 overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute w-80 h-80 bg-cyan-500/10 blur-[120px] rounded-full -top-20 -left-20"></div>

      <div className="absolute w-96 h-96 bg-purple-500/10 blur-[150px] rounded-full bottom-0 right-0"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[8px] text-cyan-400 font-semibold">
            About Me
          </p>

          <h2 className="text-5xl md:text-6xl font-bold mt-4">
            Know Who I Am
          </h2>

          <div className="w-28 h-1 bg-cyan-400 rounded-full mx-auto mt-6"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold mb-8">
              Full Stack MERN Developer
            </h3>

            <p className="text-gray-400 leading-8 mb-6">
              Hello! I'm{" "}
              <span className="text-cyan-400 font-semibold">
                Aditya Choudhary
              </span>
              , a passionate Full Stack Developer who enjoys creating modern,
              scalable and user-friendly web applications.
            </p>

            <p className="text-gray-400 leading-8 mb-6">
              I specialize in React.js, Node.js, Express.js, MongoDB,
              JavaScript and Tailwind CSS. Alongside web development,
              I continuously explore Artificial Intelligence,
              Machine Learning and Data Structures & Algorithms.
            </p>

            <p className="text-gray-400 leading-8">
              My goal is to become a Software Development Engineer (SDE),
              contribute to impactful products, and continuously improve my
              technical and problem-solving skills.
            </p>
          </motion.div>

          {/* Right Side */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {stats.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -10,
                  scale: 1.04,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="group relative overflow-hidden bg-slate-800/70 backdrop-blur-lg border border-slate-700 rounded-3xl p-8 text-center hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.35)] transition-all duration-500"
              >
                {/* Glow */}

                <div className="absolute inset-0 bg-cyan-400/5 opacity-0 group-hover:opacity-100 transition duration-500"></div>

                <div className="relative text-cyan-400 text-5xl flex justify-center mb-5">
                  {item.icon}
                </div>

             <h3 className="relative text-5xl font-bold text-cyan-400">
  {item.number}
  {item.suffix}
</h3>

                <p className="relative text-gray-400 mt-4">
                  {item.title}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
                {/* Bottom Cards */}

        <div className="grid md:grid-cols-2 gap-8 mt-24">

          {/* Education Card */}

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            className="group relative overflow-hidden bg-slate-800/70 backdrop-blur-lg border border-slate-700 rounded-3xl p-8 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.35)] transition-all duration-500"
          >
            {/* Glow */}

            <div className="absolute inset-0 bg-cyan-400/5 opacity-0 group-hover:opacity-100 transition duration-500"></div>

            <div className="relative flex items-center gap-4 mb-8">

              <div className="w-14 h-14 rounded-full bg-cyan-500 flex items-center justify-center">

                <FaGraduationCap className="text-black text-2xl" />

              </div>

              <h3 className="text-2xl font-bold">
                Education
              </h3>

            </div>

            <div className="relative space-y-4 text-gray-400 leading-8">

              <p>

                🎓 <span className="font-semibold text-white">

                  Bachelor of Technology

                </span>

              </p>

              <p>

                Computer Science & Engineering

                <br />

                <span className="text-cyan-400">

                  (Specialization in Full Stack Software Development)

                </span>

              </p>

              <p>

                Jaypee University of Information Technology (JUIT)

              </p>

              <p>

                Currently focusing on

                React.js, Node.js, Express.js,

                MongoDB, Data Structures & Algorithms,

                and Artificial Intelligence.

              </p>

            </div>

          </motion.div>

          {/* Achievement Card */}

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            className="group relative overflow-hidden bg-slate-800/70 backdrop-blur-lg border border-slate-700 rounded-3xl p-8 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.35)] transition-all duration-500"
          >
            {/* Glow */}

            <div className="absolute inset-0 bg-cyan-400/5 opacity-0 group-hover:opacity-100 transition duration-500"></div>

            <div className="relative flex items-center gap-4 mb-8">

              <div className="w-14 h-14 rounded-full bg-cyan-500 flex items-center justify-center">

                <FaAward className="text-black text-2xl" />

              </div>

              <h3 className="text-2xl font-bold">

                Achievements

              </h3>

            </div>

            <ul className="relative space-y-5 text-gray-400">

              <li className="flex gap-3">

                <span className="text-cyan-400">✔</span>

                Built multiple Full Stack MERN applications.

              </li>

              <li className="flex gap-3">

                <span className="text-cyan-400">✔</span>

                Developed AI-based Health Risk Assessment System.

              </li>

              <li className="flex gap-3">

                <span className="text-cyan-400">✔</span>

                Developed Campus Infrastructure Complaint Tracker.

              </li>

              <li className="flex gap-3">

                <span className="text-cyan-400">✔</span>

                Continuously improving through DSA practice and real-world projects.

              </li>

              <li className="flex gap-3">

                <span className="text-cyan-400">✔</span>

                Passionate about building scalable and responsive web applications.

              </li>

            </ul>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default About;