import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="bg-slate-900 py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[6px] text-cyan-400 font-semibold">
            Contact
          </p>

          <h2 className="text-5xl font-bold mt-3">
            Let's Work Together
          </h2>

          <div className="w-28 h-1 bg-cyan-400 mx-auto mt-5 rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left */}

          <motion.div
            initial={{ opacity:0,x:-80 }}
            whileInView={{ opacity:1,x:0 }}
            transition={{ duration:.7 }}
            viewport={{ once:true }}
          >

            <h3 className="text-3xl font-bold mb-6">
              Get in Touch
            </h3>

            <p className="text-gray-400 leading-8 mb-10">
              Have a project idea, internship opportunity, or just want to
              connect? Feel free to send me a message.
            </p>

            <div className="space-y-8">

              <div className="flex items-center gap-5">
                <FaEnvelope className="text-cyan-400 text-2xl"/>
                <span>adityachy417@gmail.com</span>
              </div>

              <div className="flex items-center gap-5">
                <FaPhoneAlt className="text-cyan-400 text-2xl"/>
                <span>+91 9142668937</span>
              </div>

              <div className="flex items-center gap-5">
                <FaMapMarkerAlt className="text-cyan-400 text-2xl"/>
                <span>Darbhanga, India</span>
              </div>

            </div>

          </motion.div>

          {/* Right */}

          <motion.form
            initial={{ opacity:0,x:80 }}
            whileInView={{ opacity:1,x:0 }}
            transition={{ duration:.7 }}
            viewport={{ once:true }}
            className="space-y-6"
          >

            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4 outline-none focus:border-cyan-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4 outline-none focus:border-cyan-400"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4 outline-none focus:border-cyan-400"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4 outline-none focus:border-cyan-400"
            />

            <button
              className="bg-cyan-500 hover:bg-cyan-600 text-black px-8 py-4 rounded-full font-semibold flex items-center gap-3 transition"
            >
              <FaPaperPlane/>
              Send Message
            </button>

          </motion.form>

        </div>

      </div>
    </section>
  )
}

export default Contact;