  import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBars,
  FaTimes,
  FaArrowRight,
  FaDownload,
} from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  // Resume Download Function
  const downloadResume = async () => {
    try {
      const response = await fetch("/resume.pdf");

      if (!response.ok) {
        throw new Error("Resume PDF not found");
      }

      const blob = await response.blob();

      const blobUrl = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = "Gopalan-Resume.pdf";

      document.body.appendChild(link);
      link.click();

      document.body.removeChild(link);

      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Resume download error:", error);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 pt-5">
      <div className="max-w-7xl mx-auto">

        {/* Outer Glow */}
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-blue-500/30 via-purple-500/20 to-blue-500/30 blur-sm" />

          {/* Navbar */}
          <div className="relative bg-black/70 backdrop-blur-2xl border border-white/10 rounded-2xl">

            {/* Top Shine */}
            <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

            <div className="px-5 md:px-7 py-4">

              <div className="flex items-center justify-between">

                {/* Logo */}
                <a
                  href="#home"
                  className="flex items-center gap-3 group"
                >
                  <div className="relative">

                    <div className="absolute inset-0 bg-blue-500 rounded-xl blur-md opacity-40 group-hover:opacity-70 transition" />

                    <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-bold text-white text-lg">
                      G
                    </div>

                  </div>

                  <div className="hidden sm:block">
                    <h1 className="font-bold text-white tracking-wide">
                      Gopalan
                    </h1>

                    <p className="text-[10px] text-gray-500 tracking-[0.2em] uppercase">
                      Developer
                    </p>
                  </div>
                </a>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-1">

                  {links.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="relative px-4 py-2 text-sm text-gray-400 hover:text-white rounded-lg transition-all duration-300 group"
                    >
                      <span className="absolute inset-0 rounded-lg bg-white/[0.04] opacity-0 group-hover:opacity-100 transition duration-300" />

                      <span className="relative z-10">
                        {link.name}
                      </span>

                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] rounded-full bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-5 transition-all duration-300" />
                    </a>
                  ))}

                </div>

                {/* Desktop Resume Download */}
                <button
                  type="button"
                  onClick={downloadResume}
                  className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-purple-600 text-white text-sm font-semibold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <FaDownload className="text-xs" />
                  Resume
                </button>

                {/* Mobile Menu Button */}
                <button
                  type="button"
                  onClick={() => setIsOpen(!isOpen)}
                  className="lg:hidden w-10 h-10 rounded-xl border border-white/10 bg-white/[0.04] flex items-center justify-center text-gray-300 hover:text-white hover:border-blue-500/50 transition"
                  aria-label="Toggle menu"
                >
                  {isOpen ? <FaTimes /> : <FaBars />}
                </button>

              </div>

              {/* Mobile Menu */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="lg:hidden overflow-hidden"
                  >

                    <div className="mt-5 pt-5 border-t border-white/10">

                      <div className="flex flex-col gap-2">

                        {links.map((link, index) => (
                          <motion.a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            initial={{ opacity: 0, x: -15 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              delay: index * 0.05,
                            }}
                            className="flex items-center justify-between px-4 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-white/[0.05] transition"
                          >
                            <span>{link.name}</span>

                            <FaArrowRight className="text-xs text-blue-500" />
                          </motion.a>
                        ))}

                        {/* Mobile Resume Download */}
                        <button
                          type="button"
                          onClick={() => {
                            downloadResume();
                            setIsOpen(false);
                          }}
                          className="flex items-center justify-center gap-2 mt-3 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 font-semibold text-sm w-full"
                        >
                          <FaDownload className="text-xs" />
                          Download Resume
                        </button>

                      </div>

                    </div>

                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>
        </motion.div>

      </div>
    </nav>
  );
}

export default Navbar;