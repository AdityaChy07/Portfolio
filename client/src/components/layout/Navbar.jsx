import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";

import { HiMenu, HiX } from "react-icons/hi";
import { FaMoon, FaSun } from "react-icons/fa";

import { motion } from "framer-motion";

import { useTheme } from "../../context/ThemeContext";

const navLinks = [
  { name: "Home", to: "hero" },
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Projects", to: "projects" },
  { name: "Experience", to: "experience" },
  { name: "Contact", to: "contact" },
];

function Navbar() {

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { theme, toggleTheme } = useTheme();

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (

    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-slate-950/80 backdrop-blur-xl border-b border-slate-800 shadow-xl"
          : "bg-transparent"
      }`}
    >

      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}

        <motion.h1
          whileHover={{
            scale: 1.08,
          }}
          className="text-3xl md:text-4xl font-extrabold cursor-pointer"
        >
          Aditya
          <span className="text-cyan-400">.</span>
        </motion.h1>

        {/* Desktop Menu */}

        <ul className="hidden lg:flex items-center gap-8">

          {navLinks.map((item) => (

            <li key={item.to}>

              <ScrollLink
                to={item.to}
                smooth={true}
                duration={600}
                offset={-80}
                spy={true}
                activeClass="text-cyan-400"
                className="relative cursor-pointer text-gray-300 hover:text-cyan-400 transition-all duration-300 font-medium after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-400 hover:after:w-full after:transition-all after:duration-300"
              >
                {item.name}
              </ScrollLink>

            </li>

          ))}

          {/* Resume */}

          <a
            href="/resume.pdf"
            download
            className="px-6 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold hover:scale-105 hover:shadow-[0_0_30px_rgba(34,211,238,0.35)] transition-all duration-300"
          >
            Resume
          </a>

          {/* Theme Toggle */}

          <button
            onClick={toggleTheme}
            className="w-11 h-11 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-all duration-300 hover:rotate-180"
          >
            {theme === "dark" ? (
              <FaSun className="text-yellow-400" />
            ) : (
              <FaMoon className="text-cyan-400" />
            )}
          </button>

        </ul>

        {/* Mobile Menu Button */}

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-3xl"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>

      </nav>
            {/* Mobile Menu */}

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden bg-slate-950/95 backdrop-blur-xl border-t border-slate-800"
        >
          <ul className="flex flex-col items-center gap-6 py-8">

            {navLinks.map((item) => (
              <li key={item.to}>

                <ScrollLink
                  to={item.to}
                  smooth={true}
                  duration={600}
                  offset={-80}
                  spy={true}
                  onClick={() => setOpen(false)}
                  className="cursor-pointer text-lg text-gray-300 hover:text-cyan-400 transition-all duration-300"
                >
                  {item.name}
                </ScrollLink>

              </li>
            ))}

            {/* Resume Button */}

            <a
              href="/resume.pdf"
              download
              onClick={() => setOpen(false)}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold hover:scale-105 transition-all duration-300"
            >
              Download Resume
            </a>

            {/* Theme Toggle */}

            <button
              onClick={toggleTheme}
              className="w-12 h-12 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-all duration-300 hover:rotate-180"
            >
              {theme === "dark" ? (
                <FaSun className="text-yellow-400 text-xl" />
              ) : (
                <FaMoon className="text-cyan-400 text-xl" />
              )}
            </button>

          </ul>
        </motion.div>
      )}

    </header>
  );
}

export default Navbar;