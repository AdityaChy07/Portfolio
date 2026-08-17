import { Link as ScrollLink } from "react-scroll";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

const navLinks = [
  { name: "Home", to: "hero" },
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Projects", to: "projects" },
  { name: "Experience", to: "experience" },
  { name: "Contact", to: "contact" },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-secondary)]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

        {/* =====================================================
            TOP
        ====================================================== */}

        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">

          {/* Brand */}

          <div className="max-w-sm">

            <ScrollLink
              to="hero"
              smooth
              duration={500}
              offset={-80}
              className="cursor-pointer text-2xl font-bold tracking-tight text-[var(--text-primary)]"
            >
              Aditya<span className="text-[var(--accent)]">.</span>
            </ScrollLink>

            <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">
              Computer Science Engineering student and Full Stack Developer
              focused on building practical, responsive and scalable software
              applications.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--text-primary)]">
              Quick Links
            </h3>

            <div className="mt-4 grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-3 lg:grid-cols-2">

              {navLinks.map((item) => (
                <ScrollLink
                  key={item.to}
                  to={item.to}
                  smooth
                  duration={500}
                  offset={-80}
                  className="cursor-pointer text-sm text-[var(--text-secondary)] transition-colors duration-200 hover:text-[var(--accent)]"
                >
                  {item.name}
                </ScrollLink>
              ))}

            </div>

          </div>

          {/* Social */}

          <div>

            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--text-primary)]">
              Connect
            </h3>

            <div className="mt-4 flex gap-2">

              <a
                href="https://github.com/AdityaChy07"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--text-secondary)] transition-colors duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/adityachy/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--text-secondary)] transition-colors duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://www.instagram.com/aditya_chy19"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--text-secondary)] transition-colors duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                <FaInstagram />
              </a>

              <a
                href="mailto:adityachy417@gmail.com"
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--text-secondary)] transition-colors duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                <FaEnvelope />
              </a>

            </div>

          </div>

        </div>

        {/* =====================================================
            DIVIDER
        ====================================================== */}

        <div className="my-10 h-px bg-[var(--border)]"></div>

        {/* =====================================================
            BOTTOM
        ====================================================== */}

        <div className="flex flex-col gap-4 text-sm text-[var(--text-muted)] sm:flex-row sm:items-center sm:justify-between">

          <p>
            © {currentYear} Aditya Choudhary. All rights reserved.
          </p>

          <div className="flex items-center gap-1">
            <span>Built with</span>
            <span className="font-medium text-[var(--text-secondary)]">
              React
            </span>
            <span>•</span>
            <span className="font-medium text-[var(--text-secondary)]">
              Tailwind CSS
            </span>
          </div>

          {/* Back to top */}

          <ScrollLink
            to="hero"
            smooth
            duration={500}
            offset={-80}
            aria-label="Back to top"
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-[var(--border)] text-[var(--text-secondary)] transition-colors duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            <FaArrowUp className="text-xs" />
          </ScrollLink>

        </div>

      </div>
    </footer>
  );
}

export default Footer;