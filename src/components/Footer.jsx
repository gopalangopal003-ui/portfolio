 import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="relative bg-black text-white border-t border-white/10 px-6 py-12 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-96 h-40 bg-blue-600/10 blur-3xl rounded-full" />

      <div className="relative max-w-6xl mx-auto">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Name */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold">
              Gopalan<span className="text-blue-500">.</span>
            </h2>

            <p className="text-gray-500 text-sm mt-2">
              Java & React Developer
            </p>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">

            <a
              href="https://github.com/gopalangopal003-ui"
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 rounded-xl border border-white/10 bg-white/[0.04] flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500 hover:-translate-y-1 transition duration-300"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 rounded-xl border border-white/10 bg-white/[0.04] flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-500 hover:-translate-y-1 transition duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="#home"
              className="w-11 h-11 rounded-xl bg-blue-600 flex items-center justify-center hover:bg-blue-700 hover:-translate-y-1 transition duration-300"
              aria-label="Back to top"
            >
              <FaArrowUp />
            </a>

          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-8 pt-6 text-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Gopalan. All rights reserved.
          </p>

          <p className="text-gray-700 text-xs mt-2">
            Built with React.js & Tailwind CSS 🚀
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;