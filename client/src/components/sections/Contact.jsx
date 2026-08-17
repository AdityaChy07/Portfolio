import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
  FaCheckCircle,
} from "react-icons/fa";
import { toast } from "react-toastify";

const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.subject.trim() ||
      !formData.message.trim()
    ) {
      toast.error("Please fill in all fields.");
      return;
    }

    setLoading(true);
    setSuccess(false);

    try {
      await axios.post(`${API_URL}/api/contact`, formData);

      setSuccess(true);

      toast.success("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    } catch (error) {
      console.error("Contact form error:", error);

      toast.error(
        error?.response?.data?.message ||
          "Unable to send message. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-[var(--bg-primary)] px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
          viewport={{
            once: true,
          }}
          className="mb-12 max-w-3xl sm:mb-16"
        >
          <p className="section-label">
            Contact
          </p>

          <h2 className="section-title">
            Let's Build Something Together
          </h2>

          <div className="accent-line"></div>

          <p className="section-description">
            Have a project idea, internship opportunity, collaboration
            proposal, or simply want to connect? Feel free to send me a
            message.
          </p>
        </motion.div>

        {/* =====================================================
            CONTACT GRID
        ====================================================== */}

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:gap-8">

          {/* =================================================
              CONTACT INFORMATION
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            viewport={{
              once: true,
            }}
            className="rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)] p-6 shadow-[var(--shadow-sm)] sm:p-8"
          >
            <p className="text-sm font-semibold text-[var(--accent)]">
              Get in touch
            </p>

            <h3 className="mt-2 text-2xl font-bold text-[var(--text-primary)]">
              Contact Information
            </h3>

            <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">
              I'm always open to discussing software development,
              interesting projects, internships, collaborations and
              new opportunities.
            </p>

            {/* Email */}

            <a
              href="mailto:adityachy417@gmail.com"
              className="mt-8 flex items-start gap-4 rounded-xl border border-[var(--border)] p-4 transition-colors duration-200 hover:border-[var(--accent)]"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--accent-soft)] text-[var(--accent)]">
                <FaEnvelope />
              </div>

              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                  Email
                </p>

                <p className="mt-1 break-all text-sm font-medium text-[var(--text-primary)]">
                  adityachy417@gmail.com
                </p>
              </div>
            </a>

            {/* Phone */}

            <a
              href="tel:+919142668937"
              className="mt-3 flex items-start gap-4 rounded-xl border border-[var(--border)] p-4 transition-colors duration-200 hover:border-[var(--accent)]"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--accent-soft)] text-[var(--accent)]">
                <FaPhone />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                  Phone
                </p>

                <p className="mt-1 text-sm font-medium text-[var(--text-primary)]">
                  +91 91426 68937
                </p>
              </div>
            </a>

            {/* Location */}

            <div className="mt-3 flex items-start gap-4 rounded-xl border border-[var(--border)] p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--accent-soft)] text-[var(--accent)]">
                <FaMapMarkerAlt />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                  Location
                </p>

                <p className="mt-1 text-sm font-medium text-[var(--text-primary)]">
                  Darbhanga, Bihar, India
                </p>

                <p className="mt-1 text-xs text-[var(--text-muted)]">
                  Currently studying in Himachal Pradesh
                </p>
              </div>
            </div>

            {/* Socials */}

            <div className="mt-8 border-t border-[var(--border)] pt-6">

              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                Connect with me
              </p>

              <div className="mt-4 flex gap-3">

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
                  href="mailto:adityachy417@gmail.com"
                  aria-label="Email"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--text-secondary)] transition-colors duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  <FaEnvelope />
                </a>

              </div>
            </div>
          </motion.div>

          {/* =================================================
              CONTACT FORM
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            viewport={{
              once: true,
            }}
            className="rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)] p-6 shadow-[var(--shadow-sm)] sm:p-8"
          >
            {success ? (
              <div className="flex min-h-[450px] flex-col items-center justify-center text-center">

                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--accent-soft)] text-3xl text-[var(--accent)]">
                  <FaCheckCircle />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-[var(--text-primary)]">
                  Message Sent Successfully
                </h3>

                <p className="mt-3 max-w-md text-sm leading-7 text-[var(--text-secondary)]">
                  Thank you for reaching out. I'll get back to you as soon
                  as possible.
                </p>

                <button
                  type="button"
                  onClick={() => setSuccess(false)}
                  className="mt-6 rounded-lg border border-[var(--border)] px-5 py-2.5 text-sm font-semibold text-[var(--text-primary)] transition-colors duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  Send Another Message
                </button>

              </div>
            ) : (
              <>
                <div className="mb-7">

                  <p className="text-sm font-semibold text-[var(--accent)]">
                    Send a message
                  </p>

                  <h3 className="mt-2 text-2xl font-bold text-[var(--text-primary)]">
                    Start a Conversation
                  </h3>

                </div>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >

                  {/* Name + Email */}

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-[var(--text-primary)]"
                      >
                        Name
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg-secondary)] px-4 py-3 text-sm text-[var(--text-primary)] outline-none placeholder:text-[var(--text-muted)] transition-colors duration-200 focus:border-[var(--accent)]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-[var(--text-primary)]"
                      >
                        Email
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg-secondary)] px-4 py-3 text-sm text-[var(--text-primary)] outline-none placeholder:text-[var(--text-muted)] transition-colors duration-200 focus:border-[var(--accent)]"
                      />
                    </div>

                  </div>

                  {/* Subject */}

                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-2 block text-sm font-medium text-[var(--text-primary)]"
                    >
                      Subject
                    </label>

                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What would you like to discuss?"
                      className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg-secondary)] px-4 py-3 text-sm text-[var(--text-primary)] outline-none placeholder:text-[var(--text-muted)] transition-colors duration-200 focus:border-[var(--accent)]"
                    />
                  </div>

                  {/* Message */}

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-[var(--text-primary)]"
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, opportunity or idea..."
                      className="w-full resize-none rounded-lg border border-[var(--border)] bg-[var(--bg-secondary)] px-4 py-3 text-sm leading-7 text-[var(--text-primary)] outline-none placeholder:text-[var(--text-muted)] transition-colors duration-200 focus:border-[var(--accent)]"
                    />
                  </div>

                  {/* Submit */}

                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[var(--accent)] px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[var(--accent-hover)] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                  >
                    {loading ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"></span>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane />
                        Send Message
                      </>
                    )}
                  </button>

                </form>
              </>
            )}
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Contact;