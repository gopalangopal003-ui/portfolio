 import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-black text-white flex items-center justify-center px-6 pt-24 overflow-hidden"
    >
      <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-blue-400 text-lg font-medium mb-3">
            👋 Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Gopalan
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold mt-4">
            <span className="text-blue-500">Java</span> &{" "}
            <span className="text-blue-500">React</span> Developer
          </h2>

          <p className="text-gray-400 text-lg leading-8 mt-6 max-w-xl">
            I'm a Computer Science student passionate about building modern
            web applications using Java, React.js and AI technologies.
            I enjoy turning ideas into practical and user-friendly projects.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4 mt-8">

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full font-semibold transition duration-300 hover:scale-105"
            >
              Download Resume
            </a>

            <a
              href="#projects"
              className="flex items-center gap-2 border border-blue-500 hover:bg-blue-600 px-6 py-3 rounded-full font-semibold transition duration-300 hover:scale-105"
            >
              View Projects
              <FaArrowRight />
            </a>

          </div>

          {/* SOCIAL LINKS */}
          <div className="flex gap-5 mt-8">

            <a
              href="https://github.com/gopalangopal003-ui"
              target="_blank"
              rel="noreferrer"
              className="text-3xl text-gray-400 hover:text-white transition duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="text-3xl text-gray-400 hover:text-blue-500 transition duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

          </div>
        </motion.div>

        {/* RIGHT SIDE - PROFILE IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center relative"
        >

          {/* Glow */}
          <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-blue-600/20 rounded-full blur-3xl"></div>

          {/* Image */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative"
          >
            <img
              src="/profile.jpeg"
              alt="Gopalan"
              className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-full border-4 border-blue-500 shadow-2xl"
            />
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}

export default Hero;