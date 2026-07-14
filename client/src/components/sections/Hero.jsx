import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Link as ScrollLink } from "react-scroll";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowDown,
  FaDownload,
  FaCode,
} from "react-icons/fa";

import profile from "../../assets/profile3.jpeg";

import AuroraBackground from "../ui/AuroraBackground";
import FloatingBackground from "../ui/FloatingBackground";
import AnimatedGradient from "../ui/AnimatedGradient";

function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden flex items-center bg-[var(--bg-primary)] px-6"
    >
      {/* Background */}

      <AnimatedGradient />
      <FloatingBackground />
      <AuroraBackground />

      {/* Decorative Glow */}

      <div className="absolute -top-40 -left-40 w-[550px] h-[550px] rounded-full bg-cyan-500/10 blur-[140px]"></div>

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-purple-500/10 blur-[130px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* ================= LEFT SIDE ================= */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* Availability Badge */}

          <motion.div
            animate={{
              y: [0, -6, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
            }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 backdrop-blur-xl mb-8"
          >
            <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></span>

            <span className="text-sm text-[var(--text-primary)]">
              Available for Internship & Freelance
            </span>
          </motion.div>

          {/* Greeting */}

          <p className="uppercase tracking-[7px] text-cyan-400 font-semibold">
            Welcome To My Portfolio
          </p>

          {/* Heading */}

          <h1 className="mt-6 text-5xl md:text-7xl font-extrabold leading-tight text-[var(--text-primary)]">

            Hi, I'm{" "}

            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Aditya
            </span>

          </h1>

          {/* Typing */}

          <div className="mt-8 text-2xl md:text-4xl font-semibold text-cyan-400 h-16">

            <TypeAnimation
              sequence={[
                "Full Stack MERN Developer",
                2000,
                "Frontend Developer",
                2000,
                "Backend Developer",
                2000,
                "React.js Developer",
                2000,
                "AI Enthusiast",
                2000,
              ]}
              speed={45}
              repeat={Infinity}
            />

          </div>

          {/* Description */}

          <p className="mt-8 max-w-xl leading-8 text-lg text-[var(--text-secondary)]">
            Passionate Full Stack Developer focused on building modern,
            scalable and high-performance web applications using React,
            Node.js, Express.js and MongoDB.
            I enjoy solving real-world problems with clean code,
            intuitive UI and exceptional user experience.
          </p>

          {/* Buttons */}

          <div className="flex flex-wrap gap-5 mt-10">

            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold hover:scale-105 hover:shadow-[0_0_35px_rgba(34,211,238,0.35)] transition-all duration-300"
            >
              <FaDownload />

              Download Resume

            </a>

            <ScrollLink
              to="contact"
              smooth={true}
              duration={600}
              offset={-70}
              className="cursor-pointer flex items-center gap-3 px-8 py-4 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300"
            >
              Contact Me
            </ScrollLink>

          </div>

          {/* Social Icons */}

          <div className="flex items-center gap-6 mt-12">

            <a
              href="https://github.com/AdityaChy07"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center hover:bg-cyan-400 hover:text-black hover:scale-110 transition-all duration-300"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/adityachy/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center hover:bg-cyan-400 hover:text-black hover:scale-110 transition-all duration-300"
            >
              <FaLinkedin size={20} />
            </a>

            <a
              href="https://www.instagram.com/aditya_chy19"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center hover:bg-cyan-400 hover:text-black hover:scale-110 transition-all duration-300"
            >
              <FaInstagram size={20} />
            </a>

          </div>

        </motion.div>

        {/* ================= RIGHT SIDE ================= */}
                <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">

            {/* Background Glow */}

            <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-[120px] animate-pulse"></div>

            <div className="absolute -inset-10 rounded-full border border-cyan-400/20 animate-pulse"></div>

            {/* Profile Image */}

            <motion.img
              whileHover={{
                scale: 1.03,
                rotate: 1,
              }}
              transition={{
                duration: 0.4,
              }}
              src={profile}
              alt="Aditya Choudhary"
              className="relative
              w-72
              h-72
              md:w-[430px]
              md:h-[430px]
              lg:w-[470px]
              lg:h-[470px]
              rounded-full
              object-cover
              border-4
              border-cyan-400
              shadow-[0_0_60px_rgba(34,211,238,0.45)]"
            />

            {/* React Badge */}

            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
              }}
              className="absolute top-10 -left-8 bg-white/10 backdrop-blur-xl border border-white/10 rounded-xl px-4 py-2 shadow-xl"
            >
              ⚛ React
            </motion.div>

            {/* Node Badge */}

            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
              className="absolute bottom-16 -right-10 bg-white/10 backdrop-blur-xl border border-white/10 rounded-xl px-4 py-2 shadow-xl"
            >
              🚀 Node.js
            </motion.div>

            {/* MongoDB Badge */}

            <motion.div
              animate={{
                x: [0, 10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 3.5,
              }}
              className="absolute top-1/2 -right-14 bg-white/10 backdrop-blur-xl border border-white/10 rounded-xl px-4 py-2 shadow-xl"
            >
              🍃 MongoDB
            </motion.div>

            {/* Experience Card */}

            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
              }}
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-4 shadow-2xl"
            >
              <div className="flex items-center gap-3">

                <div className="w-12 h-12 rounded-full bg-cyan-400 flex items-center justify-center">

                  <FaCode className="text-black text-xl" />

                </div>

                <div>

                  <h3 className="font-bold text-lg text-[var(--text-primary)]">
                    MERN Developer
                  </h3>

                  <p className="text-sm text-[var(--text-secondary)]">
                    Building Modern Web Apps
                  </p>

                </div>

              </div>

            </motion.div>

          </div>

        </motion.div>

      </div>

      {/* Scroll Indicator */}

      <motion.div
        animate={{
          y: [0, 12, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.8,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ScrollLink
          to="about"
          smooth={true}
          duration={600}
          offset={-70}
          className="cursor-pointer"
        >
          <div className="w-12 h-12 rounded-full border border-cyan-400 flex items-center justify-center bg-white/10 backdrop-blur-xl hover:bg-cyan-400 hover:text-black transition-all duration-300">
            <FaArrowDown />
          </div>
        </ScrollLink>
      </motion.div>

    </section>
  );
}

export default Hero;