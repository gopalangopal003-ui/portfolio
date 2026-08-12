  import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "Weather Management System",
      description:
        "A weather application that fetches real-time weather information and displays temperature, humidity, weather conditions and forecast data.",
      tech: ["Java", "Spring Boot", "REST API", "JSON"],
      github: "https://github.com/gopalangopal003-ui",
      demo: "#",
    },
    {
      title: "HTML & CSS Website",
      description:
        "A responsive website developed using HTML and CSS with a clean layout, modern design and user-friendly interface.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/gopalangopal003-ui",
      demo: "#",
    },
    {
      title: "Java Application",
      description:
        "A Java-based application developed to practice object-oriented programming, problem solving and core Java concepts.",
      tech: ["Java", "OOP", "MySQL"],
      github: "https://github.com/gopalangopal003-ui",
      demo: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-black text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-blue-500 font-semibold mb-2">
            WHAT I'VE BUILT
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            My Projects
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Here are some of the projects I've worked on while learning
            software development and modern web technologies.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-blue-500 transition duration-300"
            >

              {/* Number */}
              <div className="text-blue-500 text-sm font-bold mb-5">
                0{index + 1}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-500 transition">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-7 mb-6">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((technology) => (
                  <span
                    key={technology}
                    className="text-sm bg-blue-500/10 text-blue-400 border border-blue-500/20 px-3 py-1 rounded-full"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 border border-gray-700 px-4 py-2 rounded-lg hover:border-blue-500 hover:text-blue-500 transition"
                >
                  <FaGithub />
                  GitHub
                </a>

                <a
                  href={project.demo}
                  className="flex items-center gap-2 bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  <FaExternalLinkAlt />
                  Demo
                </a>

              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Projects;