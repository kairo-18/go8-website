import React from "react";
import cube from "/src/assets/values/cube.png";
import { motion } from "framer-motion";

// FadeIn animation function
const fadeIn = (direction, delay) => {
  return {
    hidden: {
      opacity: 0,
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        delay: delay,
        type: "spring",
        stiffness: 50,
        damping: 25,
      },
    },
  };
};

function Values() {
  return (
    <div
      id="about"
      className="OuterLayer bg-black sm:min-h-[75vh] w-full sm:flex-row flex flex-col px-5 sm:px-20 relative pt-15 mb-[5%] mt-10"
    >
      <div className="w-full sm:w-4/5 text-center sm:text-left flex flex-col content-between gap-20 z-2 sm:ml-[5%]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }} // Ensure correct viewport settings
          className="text-center sm:text-left"
        >
          <motion.h1
            className="text-[#2669FF] text-5xl font-bold font-['Smooch_Sans']"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }} // Fix placement
          >
            WHAT WE DO
          </motion.h1>

          <motion.h4
            className="text-white text-lg mt-5 max-w-[75%] sm:mx-0 mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true, amount: 0.2 }} // Fix placement
          >
            At GO8 Technology Inc., we specialize in providing cutting-edge IT
            solutions designed to meet the unique needs of small and
            medium-sized businesses. From streamlining operations to boosting
            productivity, we deliver innovative technologies and customized
            strategies that drive growth and efficiency. Whether it's developing
            software, optimizing workflows, or integrating digital tools, we
            empower businesses to thrive in an ever-evolving digital landscape.
          </motion.h4>
        </motion.div>

        {/* Mission and Vision fade in upon scroll */}
        <div className="mission-vision flex sm:flex-row flex-col flex-wrap gap-10 w-full max-w-[70%] z-2 mx-auto sm:mx-0">
          {/* Mission Section */}
          <motion.div
            variants={fadeIn("left", 0.3)} // Apply the fadeIn animation for mission
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mission group cursor-pointer p-5 rounded-lg pt-10 flex flex-col items-center justify-center h-64 shadow-none hover:shadow-none transition-shadow w-full sm:w-[45%] relative bg-transparent"
          >
            <div className="absolute top-[50px]">
              {/* Upward Arrow for Mission */}
              <motion.svg
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.2 }}
                className="h-6 w-6 text-[#2669ff] animate-bounce mx-auto"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 15l7-7 7 7"></path>
              </motion.svg>
            </div>
            <h1 className="text-center text-3xl font-bold text-white transition-all duration-500 relative group-hover:-translate-y-4">
              OUR MISSION
              <span
                className="block w-full h-1 mt-2 group-hover:mt-0 transition-all duration-500"
                style={{ backgroundColor: "#2669ff" }}
              ></span>
            </h1>
            <h4 className="text-center text-lg text-white opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-[-90px] transition-all duration-700 absolute top-full mt-3 max-w-[80%]">
              To empower businesses to thrive in the digital age, leveraging
              cutting-edge technologies towards growth, productivity, and
              efficiency.
            </h4>
          </motion.div>

          {/* Vision Section */}
          <motion.div
            variants={fadeIn("right", 0.5)} // Apply the fadeIn animation for vision
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="vision group cursor-pointer p-5 rounded-lg pt-10 flex flex-col items-center justify-center h-64 shadow-none hover:shadow-none transition-shadow w-full sm:w-[45%] relative bg-transparent"
          >
            <div className="absolute top-[50px]">
              {" "}
              {/* Adjust top value here */}
              {/* Upward Arrow for Vision */}
              <motion.svg
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.2 }}
                className="h-6 w-6 text-[#2669ff] animate-bounce mx-auto"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 15l7-7 7 7"></path>
              </motion.svg>
            </div>
            <h1 className="text-center text-3xl font-bold text-white transition-all duration-500 relative group-hover:-translate-y-4">
              OUR VISION
              <span
                className="block w-full h-1 mt-2 group-hover:mt-0 transition-all duration-500"
                style={{ backgroundColor: "#2669ff" }}
              ></span>
            </h1>
            <h4 className="text-center text-lg text-white opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-[-90px] transition-all duration-700 absolute top-full mt-3 max-w-[80%]">
              To be the foremost business solutions provider to small and medium
              scale corporations in the country and abroad.
            </h4>
          </motion.div>
        </div>
      </div>

      {/* bgAsset (cube) fade in on scroll */}
      <motion.div
        variants={fadeIn("left", 0.3)} // Fade-in from left with a delay of 0.3s
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        className="bgAsset absolute md:block hidden sm:top-[-5%] top-0 right-0 z-1 max-w-[60%] sm:max-w-[40%]"
      >
        <img src={cube} alt="Cube" className="w-full h-auto object-contain" />
      </motion.div>
    </div>
  );
}

export default Values;
