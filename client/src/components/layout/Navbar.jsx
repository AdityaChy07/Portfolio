import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { HiMenu, HiX } from "react-icons/hi";
import { FaMoon, FaSun } from "react-icons/fa";
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
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        scrolled
          ? "border-b border-[var(--border)] bg-[var(--navbar-bg)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <ScrollLink
          to="hero"
          smooth
          duration={500}
          offset={-80}
          onClick={closeMenu}
          className="cursor-pointer text-2xl font-bold tracking-tight text-[var(--text-primary)] sm:text-3xl"
        >
          Aditya<span className="text-[var(--accent)]">.</span>
        </ScrollLink>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((item) => (
            <ScrollLink
              key={item.to}
              to={item.to}
              smooth
              duration={500}
              offset={-80}
              spy
              activeClass="text-[var(--accent)]"
              className="cursor-pointer text-sm font-medium text-[var(--text-secondary)] transition-colors duration-200 hover:text-[var(--text-primary)]"
            >
              {item.name}
            </ScrollLink>
          ))}

          {/* Resume */}
          <a
            href="/resume.pdf"
            download
            className="rounded-lg border border-[var(--accent)] px-4 py-2 text-sm font-semibold text-[var(--accent)] transition-colors duration-200 hover:bg-[var(--accent)] hover:text-white"
          >
            Resume
          </a>

          {/* Theme */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--bg-surface)] text-[var(--text-secondary)] transition-colors duration-200 hover:border-[var(--border-hover)] hover:text-[var(--accent)]"
          >
            {theme === "dark" ? <FaSun size={15} /> : <FaMoon size={15} />}
          </button>
        </div>

        {/* Mobile / Tablet controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--bg-surface)] text-[var(--text-secondary)] transition-colors duration-200 hover:text-[var(--accent)]"
          >
            {theme === "dark" ? <FaSun size={15} /> : <FaMoon size={15} />}
          </button>

          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--bg-surface)] text-[var(--text-primary)]"
          >
            {open ? <HiX size={22} /> : <HiMenu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile / Tablet Menu */}
      {open && (
        <div className="border-t border-[var(--border)] bg-[var(--bg-secondary)] lg:hidden">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            <div className="flex flex-col gap-1">
              {navLinks.map((item) => (
                <ScrollLink
                  key={item.to}
                  to={item.to}
                  smooth
                  duration={500}
                  offset={-80}
                  spy
                  activeClass="text-[var(--accent)] bg-[var(--accent-soft)]"
                  onClick={closeMenu}
                  className="cursor-pointer rounded-lg px-4 py-3 text-sm font-medium text-[var(--text-secondary)] transition-colors duration-200 hover:bg-[var(--accent-soft)] hover:text-[var(--accent)]"
                >
                  {item.name}
                </ScrollLink>
              ))}

              <a
                href="/resume.pdf"
                download
                onClick={closeMenu}
                className="mt-2 rounded-lg bg-[var(--accent)] px-4 py-3 text-center text-sm font-semibold text-white transition-colors duration-200 hover:bg-[var(--accent-hover)]"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;