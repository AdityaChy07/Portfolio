import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaHeart,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-10">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center">
          Aditya<span className="text-cyan-400">.</span>
        </h2>

        <p className="text-center text-gray-400 mt-4">
          Full Stack Developer | MERN Stack | AI Enthusiast
        </p>

        <div className="flex justify-center gap-8 mt-8 text-2xl">

          <a href="#" className="hover:text-cyan-400 transition">
            <FaGithub/>
          </a>

          <a href="#" className="hover:text-cyan-400 transition">
            <FaLinkedin/>
          </a>

          <a href="#" className="hover:text-cyan-400 transition">
            <FaInstagram/>
          </a>

        </div>

        <div className="border-t border-slate-800 mt-10 pt-6">

          <p className="text-center text-gray-500 flex justify-center items-center gap-2">

            Made with
            <FaHeart className="text-red-500"/>
            by Aditya Choudhary

          </p>

        </div>

      </div>

    </footer>
  )
}

export default Footer;