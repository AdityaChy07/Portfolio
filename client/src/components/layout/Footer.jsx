import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowUp,
  FaHeart,
  FaDownload,
} from "react-icons/fa";

const links = [
  { name: "Home", to: "hero" },
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Projects", to: "projects" },
  { name: "Journey", to: "experience" },
  { name: "Contact", to: "contact" },
];

function Footer() {
  return (
    <footer className="bg-[var(--bg-primary)] border-t border-white/10 mt-24">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-12">

          {/* Left */}

          <div>

            <h2 className="text-4xl font-extrabold text-[var(--text-primary)]">

              Aditya

              <span className="text-cyan-400">.</span>

            </h2>

            <p className="mt-6 leading-8 text-[var(--text-secondary)]">

              Passionate Full Stack Developer focused on building
              scalable web applications, solving real-world
              problems and continuously learning AI,
              Data Analytics and modern technologies.

            </p>

            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-3 mt-8 bg-cyan-400 hover:bg-cyan-500 text-black px-6 py-3 rounded-full font-semibold transition"
            >

              <FaDownload />

              Download Resume

            </a>

          </div>

          {/* Middle */}

          <div>

            <h3 className="text-2xl font-bold mb-6 text-[var(--text-primary)]">

              Quick Links

            </h3>

            <ul className="space-y-4">

              {links.map((item) => (

                <li key={item.to}>

                  <ScrollLink
                    to={item.to}
                    smooth={true}
                    duration={600}
                    offset={-70}
                    className="cursor-pointer text-[var(--text-secondary)] hover:text-cyan-400 transition"
                  >
                    {item.name}
                  </ScrollLink>

                </li>

              ))}

            </ul>

          </div>
                    {/* Right */}

          <div>

            <h3 className="text-2xl font-bold mb-6 text-[var(--text-primary)]">

              Connect

            </h3>

            <div className="flex gap-5">

              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://github.com/AdityaChy07"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-slate-800 flex justify-center items-center hover:bg-cyan-400 hover:text-black transition"
              >
                <FaGithub />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://www.linkedin.com/in/adityachy/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-slate-800 flex justify-center items-center hover:bg-cyan-400 hover:text-black transition"
              >
                <FaLinkedin />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://www.instagram.com/aditya_chy19"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-slate-800 flex justify-center items-center hover:bg-cyan-400 hover:text-black transition"
              >
                <FaInstagram />
              </motion.a>

            </div>

            <p className="mt-8 text-[var(--text-secondary)]">

              Email

              <br />

              <span className="text-cyan-400">

                adityachy417@gmail.com

              </span>

            </p>

          </div>

        </div>

        <div className="border-t border-white/10 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">

          <p className="text-[var(--text-secondary)] flex items-center gap-2">

            © {new Date().getFullYear()} Aditya Choudhary

            <FaHeart className="text-red-500" />

            Built using React, Tailwind CSS & Express.js

          </p>

          <ScrollLink
            to="hero"
            smooth={true}
            duration={600}
            className="cursor-pointer w-12 h-12 rounded-full bg-cyan-400 flex justify-center items-center text-black hover:scale-110 transition"
          >

            <FaArrowUp />

          </ScrollLink>

        </div>

      </div>

    </footer>
  );
}

export default Footer;