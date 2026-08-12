 import { motion } from "framer-motion";
import { FaGraduationCap, FaCalendarAlt } from "react-icons/fa";

function Education() {
  const education = [
    {
      year: "2023 – 2027",
      title: "SSM College of Engineering",
      degree: "B.E. Computer Science and Engineering",
      description:
        "Currently pursuing my degree in Computer Science and Engineering, focusing on programming, web development, software development and emerging technologies.",
      tags: ["Java", "React.js", "Web Development", "AI"],
    },
    {
      year: "2021 – 2023",
      title: "Higher Secondary Education (HSC)",
      degree: "Higher Secondary Certificate",
      description:
        "Completed my Higher Secondary education and developed a strong foundation in computer science, mathematics and problem solving.",
      tags: ["HSC", "Mathematics", "Computer Science"],
    },
  ];

  return (
    <section
      id="education"
      className="relative bg-black text-white py-28 px-6 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl" />

      <div className="relative max-w-5xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 uppercase tracking-[0.3em] text-sm font-semibold">
            My Journey
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mt-3">
            Education
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            My academic journey and the foundation behind my development
            skills.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">

          {/* Timeline Line */}
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-transparent md:-translate-x-1/2" />

          <div className="space-y-12">

            {education.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 60,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                className="relative flex items-start"
              >

                {/* Timeline Icon */}
                <div className="absolute left-0 md:left-1/2 -translate-x-0 md:-translate-x-1/2 z-10">
                  <div className="w-11 h-11 rounded-full bg-blue-600 border-4 border-black flex items-center justify-center shadow-[0_0_25px_rgba(59,130,246,0.6)]">
                    <FaGraduationCap className="text-white" />
                  </div>
                </div>

                {/* Card */}
                <div className="ml-16 md:ml-0 md:w-[70%] md:mx-auto">
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="group relative"
                  >

                    {/* Glow */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-60 blur transition duration-500" />

                    <div className="relative bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10">

                      {/* Date */}
                      <div className="flex items-center gap-2 text-blue-400 text-sm font-medium">
                        <FaCalendarAlt />
                        <span>{item.year}</span>
                      </div>

                      {/* Institution */}
                      <h3 className="text-2xl md:text-3xl font-bold mt-5">
                        {item.title}
                      </h3>

                      {/* Degree */}
                      <h4 className="text-lg text-blue-400 mt-2">
                        {item.degree}
                      </h4>

                      {/* Description */}
                      <p className="text-gray-400 leading-7 mt-5">
                        {item.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mt-6">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-sm px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                    </div>
                  </motion.div>
                </div>

              </motion.div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}

export default Education;     