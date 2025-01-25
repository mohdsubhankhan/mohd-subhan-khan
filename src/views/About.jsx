import React, { useContext } from "react";
import { techStack } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";

const About = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  
  return (
    <div id="about" className={darkMode ? "bg-white" : "bg-gray-900"}>
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 px-4 pt-24 pb-12">
        <h2
          className={`text-5xl font-bold px-4 md:px-0 text-center ${
            darkMode ? "text-black" : "text-white"
          }`}
        >
          About Me
        </h2>
        <div>
          <motion.div>
            <h4 className="mt-12 text-3xl font-semibold text-blue-500">
              A bit about me
            </h4>
            <p
              className={`mt-4 text-xl text-justify ${
                darkMode ? "text-gray-500" : "text-white"
              }`}
            >
              Hi there! 👋 I'm a passionate Full Stack Developer and UI/UX Designer with a knack for creating seamless digital experiences. With expertise in both frontend and backend development, I specialize in building intuitive and visually appealing user interfaces while ensuring robust functionality and performance on the server side.
              <br />
              I thrive on crafting designs that not only look great but also provide exceptional user experiences. My mission is to bridge the gap between aesthetics and functionality, bringing ideas to life with clean code and creative design.
              <br />
              When I’m not coding or designing, you’ll find me exploring the latest tech trends, brainstorming innovative solutions, or sketching wireframes for my next big project. Let’s create something amazing together!
            </p>
          </motion.div>
          <motion.div>
            <h4 className="mt-12 text-3xl font-semibold text-blue-500">
              Technologies and Tools
            </h4>
            <p
              className={`mt-4 text-xl text-justify ${
                darkMode ? "text-gray-500" : "text-white"
              }`}
            >
              Using a combination of cutting-edge technologies and reliable
              open-source software, I build user-focused, performant apps and
              websites for smartphones, tablets, and desktops.
            </p>
          </motion.div>
          <motion.div className="flex flex-wrap mt-8 justify-between">
            {techStack.map((el) => (
              <motion.div
              key={el.name}
                initial="hidden"
                whileInView="visible"
                variants={{
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: { type: "spring" },
                  },
                  hidden: { opacity: 1, y: 80 },
                }}
                className="py-2 px-4 bg-gray-50 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-105 cursor-pointer md:w-48 w-40"
              >
                <img alt="" src={el.link} className="w-12" />
                <h4 className="text-md ml-4">{el.name}</h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
