  import { motion } from "framer-motion";
import {
  FaJava,
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import { SiMysql } from "react-icons/si";

function Skills() {
  const skills = [
    {
      name: "Java",
      level: "Advanced",
      icon: <FaJava />,
    },
    {
      name: "React.js",
      level: "Intermediate",
      icon: <FaReact />,
    },
    {
      name: "JavaScript",
      level: "Intermediate",
      icon: <FaJs />,
    },
    {
      name: "HTML",
      level: "Advanced",
      icon: <FaHtml5 />,
    },
    {
      name: "CSS",
      level: "Advanced",
      icon: <FaCss3Alt />,
    },
    {
      name: "MySQL",
      level: "Intermediate",
      icon: <SiMysql />,
    },
  ];

  return (
    <section
      id="skills"
      className="relative bg-black text-white py-28 px-6 overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl" />

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
            My Expertise
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mt-3">
            Skills &{" "}
            <span className="text-blue-500">
              Technologies
            </span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-5 leading-7">
            Technologies I use to build modern applications and
            continuously improve my development skills.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              className="group relative"
            >

              {/* Glow behind card */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-70 blur transition duration-500" />

              {/* Card */}
              <div className="relative bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center overflow-hidden">

                {/* Top shine */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />

                {/* Icon Circle */}
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.15 }}
                  className="mx-auto w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-400/20 flex items-center justify-center shadow-[0_0_35px_rgba(59,130,246,0.15)]"
                >
                  <div className="text-5xl text-blue-400 group-hover:text-white transition duration-300">
                    {skill.icon}
                  </div>
                </motion.div>

                {/* Name */}
                <h3 className="text-xl font-bold mt-6">
                  {skill.name}
                </h3>

                {/* Level */}
                <p className="text-sm text-gray-500 mt-2">
                  {skill.level}
                </p>

                {/* Bottom indicator */}
                <div className="mt-6 h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{
                      width:
                        skill.level === "Advanced"
                          ? "90%"
                          : "75%",
                    }}
                    transition={{
                      duration: 1,
                      delay: 0.3 + index * 0.1,
                    }}
                    viewport={{ once: true }}
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                  />
                </div>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;