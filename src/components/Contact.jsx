 import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-black text-white py-28 px-6 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-10 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl" />

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
            Get In Touch
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mt-3">
            Let's{" "}
            <span className="text-blue-500">Connect</span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Have a project idea, opportunity or just want to say hello?
            Feel free to reach out.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10"
          >
            <div className="absolute top-0 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />

            <h3 className="text-3xl font-bold">
              Let's Work Together 🚀
            </h3>

            <p className="text-gray-400 leading-7 mt-5">
              I'm always interested in learning, building new projects and
              connecting with people in the technology community.
            </p>

            {/* Email */}
            <a
              href="mailto:gopalan.sasikumar2006@gmail.com"
              className="flex items-center gap-4 mt-8 p-4 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-blue-500 transition group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 text-xl group-hover:bg-blue-500 group-hover:text-white transition">
                <FaEnvelope />
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Email
                </p>

                <p className="text-sm md:text-base break-all">
                  gopalangopal003@gmail.com
                </p>
              </div>
            </a>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">

              {/* GitHub */}
              <a
                href="https://github.com/gopalangopal003-ui"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-xl hover:text-white hover:border-blue-500 hover:-translate-y-1 transition"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/gopalan-sasikumar-32b9822a4/"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-xl text-blue-400 hover:bg-blue-500 hover:text-white hover:-translate-y-1 transition"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>

            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10"
          >
            <form
              action="https://formsubmit.co/gopalangopal003@gmail.com"
              method="POST"
              className="space-y-5"
            >

              {/* FormSubmit Settings */}
              <input
                type="hidden"
                name="_subject"
                value="New Portfolio Contact Message"
              />

              <input
                type="hidden"
                name="_captcha"
                value="false"
              />

              <input
                type="hidden"
                name="_template"
                value="table"
              />

              {/* Name */}
              <div>
                <label className="text-sm text-gray-400">
                  Your Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                  className="w-full mt-2 px-4 py-3 rounded-xl bg-black/40 border border-white/10 outline-none focus:border-blue-500 transition text-white placeholder-gray-600"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-sm text-gray-400">
                  Your Email
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className="w-full mt-2 px-4 py-3 rounded-xl bg-black/40 border border-white/10 outline-none focus:border-blue-500 transition text-white placeholder-gray-600"
                />
              </div>

              {/* Message */}
              <div>
                <label className="text-sm text-gray-400">
                  Message
                </label>

                <textarea
                  name="message"
                  rows="5"
                  placeholder="Write your message..."
                  required
                  className="w-full mt-2 px-4 py-3 rounded-xl bg-black/40 border border-white/10 outline-none focus:border-blue-500 transition text-white placeholder-gray-600 resize-none"
                ></textarea>
              </div>

              {/* Send Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-semibold transition hover:scale-[1.02]"
              >
                Send Message
                <FaPaperPlane />
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Contact;