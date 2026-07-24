import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

function Education() {

  const education = [
    {
      title: "B.E Computer Science Engineering",
      place: "SSM College of Engineering",
      year: "2023 - 2027"
    },
    {
      title: "Higher Secondary Education",
      place: "Higher Secondary School",
      year: "2021 - 2023"
    }
  ];


  return (
    <section
      id="education"
      className="min-h-screen bg-gray-950 text-white px-6 py-20"
    >

      <h2 className="text-5xl font-bold text-center mb-12">
        My <span className="text-blue-500">Education</span>
      </h2>


      <div className="max-w-4xl mx-auto space-y-8">

        {education.map((edu,index)=>(

          <motion.div
            key={index}
            initial={{opacity:0, x:-50}}
            whileInView={{opacity:1, x:0}}
            transition={{duration:0.6}}
            className="bg-gray-900 p-6 rounded-2xl flex gap-5"
          >

            <FaGraduationCap className="text-blue-500 text-4xl"/>

            <div>
              <h3 className="text-2xl font-bold">
                {edu.title}
              </h3>

              <p className="text-gray-400 mt-2">
                {edu.place}
              </p>

              <p className="text-blue-500 mt-2">
                {edu.year}
              </p>
            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Education;