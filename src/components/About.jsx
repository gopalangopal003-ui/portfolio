import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-gray-950 text-white flex items-center px-6"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          About <span className="text-blue-500">Me</span>
        </h2>

        <p className="text-gray-400 text-lg leading-relaxed">
          Hi! I'm Gopalan, a Computer Science Engineering student at
          SSM College of Engineering. I am passionate about software
          development, Artificial Intelligence, and building modern web
          applications.

          I enjoy learning new technologies and creating projects that
          solve real-world problems.
        </p>

        <div className="mt-8 grid md:grid-cols-3 gap-5">

          <div className="bg-gray-900 p-5 rounded-xl">
            <h3 className="text-xl font-bold text-blue-500">
              Education
            </h3>
            <p className="text-gray-400 mt-2">
              B.E Computer Science
            </p>
          </div>

          <div className="bg-gray-900 p-5 rounded-xl">
            <h3 className="text-xl font-bold text-blue-500">
              Interest
            </h3>
            <p className="text-gray-400 mt-2">
              AI & Web Development
            </p>
          </div>

          <div className="bg-gray-900 p-5 rounded-xl">
            <h3 className="text-xl font-bold text-blue-500">
              Goal
            </h3>
            <p className="text-gray-400 mt-2">
              Full Stack Developer
            </p>
          </div>

        </div>

      </motion.div>
    </section>
  );
}

export default About;