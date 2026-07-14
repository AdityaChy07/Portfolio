import { motion } from "framer-motion";
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
      number: "10+",
      title: "Projects",
    },
    {
      icon: <FaCode />,
      number: "12+",
      title: "Technologies",
    },
    {
      icon: <FaLaptopCode />,
      number: "100+",
      title: "Hours of Coding",
    },
  ];

  return (
    <section
      id="about"
      className="bg-slate-900 py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[6px] text-cyan-400 font-semibold">
            About Me
          </p>

          <h2 className="text-5xl font-bold mt-3">
            Know Who I Am
          </h2>

          <div className="w-28 h-1 bg-cyan-400 mx-auto mt-5 rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
          >

            <h3 className="text-4xl font-bold mb-8">
              Full Stack Developer
            </h3>

            <p className="text-gray-400 leading-8 mb-6">
              Hello! I'm <span className="text-cyan-400 font-semibold">Aditya Choudhary</span>, a passionate Full Stack Developer who enjoys building modern, scalable, and responsive web applications.
            </p>

            <p className="text-gray-400 leading-8 mb-6">
              I specialize in React.js, Node.js, Express.js, MongoDB, Tailwind CSS, and JavaScript. I also enjoy learning AI/ML and solving Data Structures & Algorithms problems.
            </p>

            <p className="text-gray-400 leading-8">
              My goal is to become a Software Development Engineer (SDE) and contribute to impactful products while continuously improving my skills.
            </p>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6"
          >

            {stats.map((item, index) => (

              <div
                key={index}
                className="bg-slate-800 border border-slate-700 rounded-2xl p-8 text-center hover:border-cyan-400 transition hover:-translate-y-2 duration-300"
              >

                <div className="text-cyan-400 text-5xl flex justify-center mb-5">
                  {item.icon}
                </div>

                <h3 className="text-4xl font-bold">
                  {item.number}
                </h3>

                <p className="text-gray-400 mt-3">
                  {item.title}
                </p>

              </div>

            ))}

          </motion.div>

        </div>

        {/* Bottom Cards */}

        <div className="grid md:grid-cols-2 gap-8 mt-20">

          <motion.div
            initial={{ opacity:0,y:50 }}
            whileInView={{ opacity:1,y:0 }}
            transition={{ duration:.6 }}
            viewport={{ once:true }}
            className="bg-slate-800 border border-slate-700 rounded-2xl p-8 hover:border-cyan-400 transition"
          >

            <div className="flex items-center gap-4 mb-6">

              <FaGraduationCap className="text-cyan-400 text-4xl"/>

              <h3 className="text-2xl font-bold">
                Education
              </h3>

            </div>

            <p className="text-gray-400 leading-8">

              🎓 Bachelor of Technology (Computer science and engineering witch specialization in FSSD)

              <br />

              Currently pursuing B.Tech from (JUIT), while focusing on Full Stack Development, Data Structures & Algorithms, and AI.

            </p>

          </motion.div>

          <motion.div
            initial={{ opacity:0,y:50 }}
            whileInView={{ opacity:1,y:0 }}
            transition={{ duration:.8 }}
            viewport={{ once:true }}
            className="bg-slate-800 border border-slate-700 rounded-2xl p-8 hover:border-cyan-400 transition"
          >

            <div className="flex items-center gap-4 mb-6">

              <FaAward className="text-cyan-400 text-4xl"/>

              <h3 className="text-2xl font-bold">
                Achievements
              </h3>

            </div>

            <ul className="space-y-4 text-gray-400">

              <li>✔ Built multiple MERN Stack Projects</li>

              <li>✔ Learning AI & Machine Learning</li>

              <li>✔ Strong problem-solving skills</li>

              <li>✔ Passionate about modern web technologies</li>

            </ul>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default About;