 import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";

function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full bg-black/50 backdrop-blur-md text-white px-8 py-5 flex justify-between items-center z-50"
    >

      <div className="flex items-center gap-2 text-2xl font-bold">
        <FaCode className="text-blue-500" />
        Gopalan
      </div>


      <div className="hidden md:flex gap-8">

        <a href="#" className="hover:text-blue-500">
          Home
        </a>

        <a href="#about" className="hover:text-blue-500">
          About
        </a>

        <a href="#skills" className="hover:text-blue-500">
          Skills
        </a>

        <a href="#projects" className="hover:text-blue-500">
          Projects
        </a>

        <a href="#contact" className="hover:text-blue-500">
          Contact
        </a>

      </div>

    </motion.nav>
  );
}

export default Navbar;