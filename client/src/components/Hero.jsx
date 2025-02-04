import React from "react";
import face from "../assets/hero-assets/Face.png";
import hiveBg from "../assets/hero-assets/hive-bg.png";

function Hero() {
  return (
    <div className="w-full h-full bg-black flex">
      <img src={face} alt="face.png" className="w-auto h-auto ml-10 bg-black" />

      {/* Text container with background image */}
      <div
        className="mt-10  ml-20 text-white max-w-2xl p-10 relative z-10"
        style={{
          backgroundImage: `url(${hiveBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="mt-10 text-left ml-[-13%] text-white max-w-2xl p-10 relative z-10">
          <h1 className="text-6xl font-bold font-['Smooch_Sans']">
            EMPOWERING INNOVATIONS, <br /> TRANSFORMING POSSIBILITIES
          </h1>
          <p className="mt-2 text-lg font-['Montserrat'] text-gray-500 max-w-lg">
            GO8 Technology Inc., founded in February 2022, is a forward-thinking
            company specializing in innovative IT solutions.
          </p>

          <div className="mt-5 ml-2">
            <span className="text-md font-['Montserrat'] text-white">
              Get Started
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-[#2669ff] ml-2 inline-block"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
