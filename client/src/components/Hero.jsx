import face from "../assets/hero/Face.png";
import hiveBg from "../assets/hero/transparent-hive.png";
import { motion } from "framer-motion";
import { fadeIn } from "../variants.js";

function Hero() {
  return (
    <div className="w-full h-full bg-white dark:bg-black flex flex-col md:flex-row mt-20 overflow-x-clip">
      {/* Left Image Section */}
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="hidden md:block md:w-3/5 md:ml-20"
      >
        <img src={face} alt="face.png" className="w-full h-auto z-0" />
      </motion.div>

      {/* Right Content Section */}
      <motion.div
        variants={fadeIn("right", 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-10 w-screen h-[80vh] p-10 relative z-10 mx-auto md:mt-0 md:ml-5"
        style={{
          backgroundImage: `url(${hiveBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <motion.div
          variants={fadeIn("up", 0.7)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-15 text-left max-w-2xl p-10 relative z-10 md:mt-5 md:p-5"
        >
          {/* Title */}
          <motion.h1
            variants={fadeIn("up", 0.9)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-12 text-4xl font-bold font-['Smooch_Sans'] text-center md:text-6xl md:text-left text-black dark:text-white"
          >
            EMPOWERING INNOVATIONS, <br /> TRANSFORMING POSSIBILITIES
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeIn("up", 1.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-2 text-lg font-['Montserrat'] text-gray-600 dark:text-gray-400 max-w-lg text-center md:text-left"
          >
            GO8 Technology Inc., founded in February 2022, is a forward-thinking
            company specializing in innovative IT solutions.
          </motion.p>

          {/* Get Started Button */}
          <motion.div
            variants={fadeIn("up", 1.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-5 flex items-center space-x-2 cursor-pointer w-fit mx-auto md:mx-0 md:text-left"
            onClick={() =>
              window.scrollBy({ top: window.innerHeight, behavior: "smooth" })
            }
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <span className="text-md font-['Montserrat'] text-black dark:text-white">
              Get Started
            </span>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-[#2669ff]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              whileHover={{ x: 5 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </motion.svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Hero;
