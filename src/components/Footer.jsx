 import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-950 text-white py-8 text-center">

      <div className="flex justify-center gap-6 text-3xl mb-5">

        <a
          href="https://github.com/yourusername"
          target="_blank"
          className="text-blue-500 hover:text-white"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/yourusername"
          target="_blank"
          className="text-blue-500 hover:text-white"
        >
          <FaLinkedin />
        </a>

        <a
          href="mailto:yourmail@gmail.com"
          className="text-blue-500 hover:text-white"
        >
          <FaEnvelope />
        </a>

      </div>


      <p className="text-gray-400">
        © 2026 Gopalan. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;