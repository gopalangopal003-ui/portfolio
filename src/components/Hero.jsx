 import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-6 pt-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-xl text-gray-400">Hello, I'm</h3>

          <h1 className="text-6xl md:text-7xl font-bold text-blue-500 mt-2">
            Gopalan
          </h1>

          <h2 className="text-2xl mt-4">
            Computer Science Student
          </h2>

          <p className="mt-6 text-gray-400 leading-8">
            Passionate about Web Development, Java, React and Artificial
            Intelligence. I enjoy building modern websites and learning
            new technologies.
          </p>

          <div className="flex gap-4 mt-8">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full"
            >
              View Resume
            </a>

            <a
              href="#contact"
              className="border border-blue-500 hover:bg-blue-500 px-6 py-3 rounded-full"
            >
              Contact Me
            </a>
          </div>

          <div className="flex gap-6 mt-8 text-3xl">
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>

            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src="/profile.jpeg"
            alt="Gopalan"
            className="w-80 h-80 rounded-full object-cover border-4 border-blue-500 shadow-2xl"
          />
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;