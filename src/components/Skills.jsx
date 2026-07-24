 import { motion } from "framer-motion";
import { FaJava, FaReact, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";

function Skills() {

  const skills = [
    {
      name: "Java",
      icon: <FaJava />,
      level: "85%"
    },
    {
      name: "React",
      icon: <FaReact />,
      level: "75%"
    },
    {
      name: "JavaScript",
      icon: <FaJs />,
      level: "70%"
    },
    {
      name: "HTML",
      icon: <FaHtml5 />,
      level: "90%"
    },
    {
      name: "CSS",
      icon: <FaCss3Alt />,
      level: "85%"
    }
  ];

  return (
    <section
      id="skills"
      className="min-h-screen bg-gray-950 text-white px-6 py-20"
    >

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold text-center mb-12"
      >
        My <span className="text-blue-500">Skills</span>
      </motion.h2>


      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">

        {skills.map((skill, index) => (

          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-900 p-6 rounded-2xl shadow-lg"
          >

            <div className="flex justify-between items-center">

              <div className="flex items-center gap-4 text-2xl">

                <span className="text-blue-500">
                  {skill.icon}
                </span>

                <h3 className="font-semibold">
                  {skill.name}
                </h3>

              </div>


              <span className="text-blue-500 font-bold text-xl">
                {skill.level}
              </span>

            </div>


            <div className="mt-5 bg-gray-700 h-3 rounded-full overflow-hidden">

              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: skill.level }}
                transition={{ duration: 1 }}
                className="bg-blue-500 h-full rounded-full"
              />

            </div>


          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Skills;