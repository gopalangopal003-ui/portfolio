import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {

  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-white px-6 py-20"
    >

      <motion.h2
        initial={{opacity:0,y:40}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.6}}
        className="text-5xl font-bold text-center mb-12"
      >
        Contact <span className="text-blue-500">Me</span>
      </motion.h2>


      <div className="max-w-3xl mx-auto bg-gray-900 p-8 rounded-2xl">


        <p className="text-gray-400 text-center text-lg">
          Feel free to connect with me for projects,
          internships and opportunities.
        </p>


        <div className="flex justify-center gap-8 mt-8 text-4xl">

          <a
            href="#"
            className="text-blue-500 hover:text-white"
          >
            <FaGithub />
          </a>


          <a
            href="#"
            className="text-blue-500 hover:text-white"
          >
            <FaLinkedin />
          </a>


          <a
            href="#"
            className="text-blue-500 hover:text-white"
          >
            <FaEnvelope />
          </a>


        </div>


      </div>


    </section>
  );
}

export default Contact;