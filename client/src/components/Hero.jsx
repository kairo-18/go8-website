import face from "../assets/hero-assets/Face.png";
import hiveBg from "../assets/hero-assets/hive-bg.png";
import { motion } from "framer-motion";
import { fadeIn, smoothScroll } from "../variants.js";

function Hero() {
  return (
    <div className="w-full h-full bg-black flex flex-col md:flex-row">
      <motion.div
        variants={fadeIn("left", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="hidden md:block md:w-1/3 md:ml-20"
      >
        <img src={face} alt="face.png" className="w-full h-auto" />
      </motion.div>

      <motion.div
        variants={fadeIn("right", 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="mt-10 text-white max-w-2xl p-10 relative z-10 mx-auto md:mt-0 md:ml-5"
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
          viewport={{ once: false, amount: 0.7 }}
          className="mt-15 text-left text-white max-w-2xl p-10 relative z-10 md:mt-5 md:p-5"
        >
          <motion.h1
            variants={fadeIn("up", 0.9)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="mt-12 text-4xl font-bold font-['Smooch_Sans'] text-center md:text-6xl md:text-left"
          >
            EMPOWERING INNOVATIONS, <br /> TRANSFORMING POSSIBILITIES
          </motion.h1>

          <motion.p
            variants={fadeIn("up", 1.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="mt-2 text-lg font-['Montserrat'] text-gray-500 max-w-lg text-center md:text-left"
          >
            GO8 Technology Inc., founded in February 2022, is a forward-thinking
            company specializing in innovative IT solutions.
          </motion.p>

          <motion.div
            variants={fadeIn("up", 1.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="mt-5 flex items-center space-x-2 cursor-pointer md:text-left"
            onClick={() =>
              window.scrollBy({ top: window.innerHeight, behavior: "smooth" })
            }
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <span className="text-md font-['Montserrat'] text-white">
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
