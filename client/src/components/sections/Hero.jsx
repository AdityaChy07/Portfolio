import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowDown,
} from "react-icons/fa";
import profile from "../../assets/profile.jpeg";

function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-slate-950 overflow-hidden flex items-center"
    >
      {/* Background Glow */}
      <div className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>

      <div className="absolute w-80 h-80 bg-purple-500/20 rounded-full blur-3xl bottom-10 right-10 animate-pulse"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center px-6 relative z-10">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <p className="text-cyan-400 uppercase tracking-[5px] mb-4">
            Welcome To My Portfolio
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Hi, I'm <span className="text-cyan-400">Aditya</span>
          </h1>

          <div className="text-2xl md:text-4xl font-semibold mt-6 h-16">

            <TypeAnimation
              sequence={[
                "MERN Stack Developer",
                2000,
                "Frontend Developer",
                2000,
                "Backend Developer",
                2000,
                "AI Enthusiast",
                2000,
              ]}
              speed={40}
              repeat={Infinity}
            />

          </div>

          <p className="text-gray-400 mt-8 text-lg leading-8 max-w-xl">
            Passionate Full Stack Developer specializing in React, Node.js,
            Express.js, MongoDB and modern UI development. I build scalable,
            responsive and user-friendly web applications.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">

            <a
              href="/resume.pdf"
              download
              className="bg-cyan-500 hover:bg-cyan-600 text-black px-8 py-4 rounded-full font-semibold transition"
            >
              Download Resume
            </a>

            <a
              href="#contact"
              className="border border-cyan-400 px-8 py-4 rounded-full hover:bg-cyan-500 hover:text-black transition"
            >
              Contact Me
            </a>

          </div>

          <div className="flex gap-6 mt-10 text-3xl">

            <a href="https://github.com/" target="_blank" rel="noreferrer">
              <FaGithub className="hover:text-cyan-400 transition" />
            </a>

            <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
              <FaLinkedin className="hover:text-cyan-400 transition" />
            </a>

            <a href="https://instagram.com/" target="_blank" rel="noreferrer">
              <FaInstagram className="hover:text-cyan-400 transition" />
            </a>

          </div>

        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, scale: .8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: .8 }}
          className="flex justify-center"
        >

          <div className="relative">

            <div className="absolute inset-0 rounded-full bg-cyan-500 blur-3xl opacity-30 animate-pulse"></div>

            <img
              src={profile}
              alt="Aditya"
              className="relative w-80 h-80 md:w-[450px] md:h-[450px] rounded-full object-cover border-4 border-cyan-400 shadow-2xl"
            />

          </div>

        </motion.div>

      </div>

      {/* Scroll Down */}
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-cyan-400 text-3xl"
      >
        <FaArrowDown />
      </motion.div>

    </section>
  );
}

export default Hero;