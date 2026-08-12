 import { motion } from "framer-motion";
import {
  FaCode,
  FaLaptopCode,
  FaBrain,
  FaRocket,
} from "react-icons/fa";

function About() {
  const highlights = [
    {
      icon: <FaCode />,
      title: "Java Developer",
      text: "Building applications with Java and object-oriented programming.",
    },
    {
      icon: <FaLaptopCode />,
      title: "Web Developer",
      text: "Creating responsive and modern websites using React and web technologies.",
    },
    {
      icon: <FaBrain />,
      title: "AI Enthusiast",
      text: "Exploring artificial intelligence and modern AI technologies.",
    },
    {
      icon: <FaRocket />,
      title: "Continuous Learner",
      text: "Always learning new technologies and improving development skills.",
    },
  ];

  return (
    <section
      id="about"
      className="relative bg-black text-white py-28 px-6 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 uppercase tracking-[0.3em] text-sm font-semibold">
            Get To Know Me
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mt-3">
            About{" "}
            <span className="text-blue-500">Me</span>
          </h2>
        </motion.div>

        {/* Main About Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 overflow-hidden"
        >
          {/* Top Glow */}
          <div className="absolute top-0 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />

          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Text */}
            <div>
              <h3 className="text-3xl font-bold mb-6">
                Passionate About{" "}
                <span className="text-blue-500">
                  Technology
                </span>
              </h3>

              <p className="text-gray-400 leading-8 mb-5">
                I'm a Computer Science student passionate about software
                development, web technologies and artificial intelligence.
                I enjoy building practical applications that solve real-world
                problems.
              </p>

              <p className="text-gray-400 leading-8">
                My current focus is on strengthening my Java and React
                development skills while exploring modern AI technologies.
                I believe in continuous learning and turning ideas into
                useful projects.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8">

                <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-4 text-center">
                  <h4 className="text-2xl font-bold text-blue-400">
                    3+
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">
                    Projects
                  </p>
                </div>

                <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-4 text-center">
                  <h4 className="text-2xl font-bold text-blue-400">
                    5+
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">
                    Technologies
                  </p>
                </div>

                <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-4 text-center">
                  <h4 className="text-2xl font-bold text-blue-400">
                    ∞
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">
                    Learning
                  </p>
                </div>

              </div>
            </div>

            {/* Highlight Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                  }}
                  className="group relative"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-60 blur transition duration-500" />

                  <div className="relative bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-2xl p-6 h-full">

                    <div className="text-3xl text-blue-400 group-hover:text-white transition duration-300">
                      {item.icon}
                    </div>

                    <h4 className="text-lg font-bold mt-4">
                      {item.title}
                    </h4>

                    <p className="text-sm text-gray-500 leading-6 mt-2">
                      {item.text}
                    </p>

                  </div>
                </motion.div>
              ))}

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default About;