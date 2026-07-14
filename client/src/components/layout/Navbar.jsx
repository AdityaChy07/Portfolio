import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { HiMenu, HiX } from "react-icons/hi";

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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/80 backdrop-blur-lg shadow-lg border-b border-slate-800"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}

        <div className="text-3xl font-bold cursor-pointer">
          Aditya
          <span className="text-cyan-400">.</span>
        </div>

        {/* Desktop Menu */}

        <ul className="hidden md:flex items-center gap-8">

          {navLinks.map((item) => (
            <li key={item.to}>

              <ScrollLink
                to={item.to}
                smooth={true}
                duration={500}
                offset={-80}
                spy={true}
                activeClass="text-cyan-400"
                className="cursor-pointer text-gray-300 hover:text-cyan-400 transition font-medium"
              >
                {item.name}
              </ScrollLink>

            </li>
          ))}

          <a
            href="/resume.pdf"
            download
            className="bg-cyan-500 hover:bg-cyan-600 text-black px-5 py-2 rounded-full font-semibold transition"
          >
            Resume
          </a>

        </ul>

        {/* Mobile Button */}

        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>

      </nav>

      {/* Mobile Menu */}

      {open && (
        <div className="md:hidden bg-slate-950 border-t border-slate-800">

          <ul className="flex flex-col items-center py-6 gap-6">

            {navLinks.map((item) => (
              <li key={item.to}>

                <ScrollLink
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={() => setOpen(false)}
                  className="cursor-pointer text-lg hover:text-cyan-400 transition"
                >
                  {item.name}
                </ScrollLink>

              </li>
            ))}

            <a
              href="/resume.pdf"
              download
              className="bg-cyan-500 text-black px-5 py-2 rounded-full font-semibold"
            >
              Download Resume
            </a>

          </ul>

        </div>
      )}
    </header>
  );
}

export default Navbar;