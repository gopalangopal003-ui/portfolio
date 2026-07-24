 import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

function Projects() {

  const projects = [
    {
      title: "Weather Management System",
      description:
        "A weather application that provides weather details and helps users monitor weather conditions with a simple interface.",
      tech: "JavaScript | API | HTML | CSS"
    },

    {
      title: "HTML Web Project",
      description:
        "A responsive website developed using HTML and CSS with clean design and proper webpage structure.",
      tech: "HTML | CSS | Responsive Design"
    },

    {
      title: "Student Management System",
      description:
        "A Java based application used to manage student records with add, update and view operations.",
      tech: "Java | MySQL | OOP"
    }
  ];


  return (

    <section
      id="projects"
      className="min-h-screen bg-black text-white px-6 py-20"
    >

      <h2 className="text-5xl font-bold text-center mb-12">
        My <span className="text-blue-500">Projects</span>
      </h2>


      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        {projects.map((project,index)=>(

          <motion.div
            key={index}
            whileHover={{ scale:1.05 }}
            className="bg-gray-900 p-6 rounded-2xl"
          >

            <h3 className="text-2xl font-bold text-blue-500">
              {project.title}
            </h3>


            <p className="text-gray-400 mt-4">
              {project.description}
            </p>


            <p className="text-sm mt-4 text-gray-300">
              {project.tech}
            </p>


            <button className="mt-6 flex items-center gap-2 text-blue-400">
              <FaGithub />
              View Code
            </button>


          </motion.div>

        ))}

      </div>

    </section>

  );
}

export default Projects;