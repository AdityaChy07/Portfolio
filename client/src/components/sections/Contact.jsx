import { motion } from "framer-motion";
import { useState } from "react";
import api from "../../services/api";
import { toast } from "react-toastify";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaHome,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    setLoading(true);

    const response = await api.post("/contact", formData);

    toast.success(response.data.message);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

  } catch (error) {

    toast.error(
      error.response?.data?.message ||
      "Unable to send message."
    );

    console.error(error);

  } finally {

    setLoading(false);

  }
};

  return (
    <section
      id="contact"
      className="relative py-28 px-6 bg-[var(--bg-primary)] overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute -left-32 top-20 w-[450px] h-[450px] rounded-full bg-cyan-500/10 blur-[150px]"></div>

      <div className="absolute right-0 bottom-0 w-[450px] h-[450px] rounded-full bg-purple-500/10 blur-[150px]"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[8px] text-cyan-400 font-semibold">
            Contact
          </p>

          <h2 className="text-5xl md:text-6xl font-extrabold mt-4 text-[var(--text-primary)]">
            Let's Work Together
          </h2>

          <div className="w-28 h-1 bg-cyan-400 rounded-full mx-auto mt-6"></div>

          <p className="max-w-3xl mx-auto mt-8 text-lg leading-8 text-[var(--text-secondary)]">
            Whether you have an internship opportunity, a freelance project,
            or simply want to connect, I'd love to hear from you.
            Feel free to reach out anytime.
          </p>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* LEFT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >

            {/* Email */}

            <div className="rounded-3xl bg-white/10 backdrop-blur-xl border border-white/10 p-6 hover:border-cyan-400 transition-all duration-300">

              <div className="flex items-center gap-5">

                <div className="w-14 h-14 rounded-full bg-cyan-500 flex items-center justify-center">

                  <FaEnvelope className="text-black text-xl" />

                </div>

                <div>

                  <h3 className="text-xl font-bold text-[var(--text-primary)]">
                    Email
                  </h3>

                  <a
                    href="mailto:adityachy417@gmail.com"
                    className="text-[var(--text-secondary)] hover:text-cyan-400 transition"
                  >
                    adityachy417@gmail.com
                  </a>

                </div>

              </div>

            </div>

            {/* Phone */}

            <div className="rounded-3xl bg-white/10 backdrop-blur-xl border border-white/10 p-6 hover:border-cyan-400 transition-all duration-300">

              <div className="flex items-center gap-5">

                <div className="w-14 h-14 rounded-full bg-cyan-500 flex items-center justify-center">

                  <FaPhoneAlt className="text-black text-xl" />

                </div>

                <div>

                  <h3 className="text-xl font-bold text-[var(--text-primary)]">
                    Phone
                  </h3>

                  <a
                    href="tel:+919142668937"
                    className="text-[var(--text-secondary)] hover:text-cyan-400 transition"
                  >
                    +91 9142668937
                  </a>

                </div>

              </div>

            </div>

            {/* Current Location */}

            <div className="rounded-3xl bg-white/10 backdrop-blur-xl border border-white/10 p-6 hover:border-cyan-400 transition-all duration-300">

              <div className="flex items-center gap-5">

                <div className="w-14 h-14 rounded-full bg-cyan-500 flex items-center justify-center">

                  <FaMapMarkerAlt className="text-black text-xl" />

                </div>

                <div>

                  <h3 className="text-xl font-bold text-[var(--text-primary)]">
                    Current Location
                  </h3>

                  <p className="text-[var(--text-secondary)]">
                    Solan, Himachal Pradesh, India
                  </p>

                </div>

              </div>

            </div>

            {/* Permanent Address */}

            <div className="rounded-3xl bg-white/10 backdrop-blur-xl border border-white/10 p-6 hover:border-cyan-400 transition-all duration-300">

              <div className="flex items-center gap-5">

                <div className="w-14 h-14 rounded-full bg-cyan-500 flex items-center justify-center">

                  <FaHome className="text-black text-xl" />

                </div>

                <div>

                  <h3 className="text-xl font-bold text-[var(--text-primary)]">
                    Permanent Address
                  </h3>

                  <p className="text-[var(--text-secondary)]">
                    Darbhanga, Bihar, India - 846003
                  </p>

                </div>

              </div>

            </div>

            {/* Continue in Part 2 */}
                        {/* Social Links */}

            <div className="rounded-3xl bg-white/10 backdrop-blur-xl border border-white/10 p-6 hover:border-cyan-400 transition-all duration-300">

              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-6">
                Connect With Me
              </h3>

              <div className="flex gap-5">

                <motion.a
                  whileHover={{ scale: 1.1, y: -4 }}
                  href="https://github.com/AdityaChy07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full bg-slate-800 flex items-center justify-center text-2xl hover:bg-cyan-400 hover:text-black transition-all duration-300"
                >
                  <FaGithub />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.1, y: -4 }}
                  href="https://www.linkedin.com/in/adityachy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full bg-slate-800 flex items-center justify-center text-2xl hover:bg-cyan-400 hover:text-black transition-all duration-300"
                >
                  <FaLinkedin />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.1, y: -4 }}
                  href="https://www.instagram.com/aditya_chy19"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full bg-slate-800 flex items-center justify-center text-2xl hover:bg-cyan-400 hover:text-black transition-all duration-300"
                >
                  <FaInstagram />
                </motion.a>

              </div>

            </div>

            {/* Availability Card */}

            <div className="rounded-3xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-xl border border-cyan-400/20 p-6">

              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                🚀 Open to Opportunities
              </h3>

              <p className="leading-8 text-[var(--text-secondary)]">
                I'm actively looking for internship opportunities,
                freelance projects, and full-time Software Development
                Engineer roles where I can contribute, learn, and grow.
              </p>

            </div>

          </motion.div>

          {/* RIGHT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <form
              onSubmit={handleSubmit}
              className="rounded-3xl bg-white/10 backdrop-blur-xl border border-white/10 p-8 space-y-6"
            >

              <div>

                <label className="block mb-2 font-medium text-[var(--text-primary)]">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-slate-700 bg-slate-900/70 px-5 py-4 outline-none focus:border-cyan-400 transition"
                />

              </div>

              <div>

                <label className="block mb-2 font-medium text-[var(--text-primary)]">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-slate-700 bg-slate-900/70 px-5 py-4 outline-none focus:border-cyan-400 transition"
                />

              </div>

              <div>

                <label className="block mb-2 font-medium text-[var(--text-primary)]">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  placeholder="Enter subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-slate-700 bg-slate-900/70 px-5 py-4 outline-none focus:border-cyan-400 transition"
                />

              </div>

              <div>

                <label className="block mb-2 font-medium text-[var(--text-primary)]">
                  Message
                </label>

                <textarea
                  rows="6"
                  name="message"
                  placeholder="Write your message..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-slate-700 bg-slate-900/70 px-5 py-4 outline-none focus:border-cyan-400 transition resize-none"
                />

              </div>

              <motion.button
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 py-4 text-black font-bold hover:shadow-[0_0_30px_rgba(34,211,238,0.45)] transition-all duration-300 disabled:opacity-70"
              >
                {loading ? (
                  "Sending..."
                ) : (
                  <>
                    <FaPaperPlane />
                    Send Message
                  </>
                )}
              </motion.button>

            </form>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default Contact;