import React from "react";
import face from "../assets/hero-assets/Face.png";
import hiveBg from "../assets/hero-assets/hive-bg.png";

function Hero() {
  const handleGetStartedClick = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  return (
    <div className="w-full h-full bg-black flex flex-col md:flex-row">
      <div className="hidden md:block md:w-1/3 md:ml-20">
        <img src={face} alt="face.png" className="w-full h-auto" />
      </div>

      <div
        className="mt-10 text-white max-w-2xl p-10 relative z-10 mx-auto md:mt-0 md:ml-5"
        style={{
          backgroundImage: `url(${hiveBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="mt-10 text-left text-white max-w-2xl p-10 relative z-10 md:mt-5 md:p-5">
          <h1 className="text-4xl font-bold font-['Smooch_Sans'] text-center md:text-6xl md:text-left">
            EMPOWERING INNOVATIONS, <br /> TRANSFORMING POSSIBILITIES
          </h1>
          <p className="mt-2 text-lg font-['Montserrat'] text-gray-500 max-w-lg text-center md:text-left">
            GO8 Technology Inc., founded in February 2022, is a forward-thinking
            company specializing in innovative IT solutions.
          </p>

          <div className="mt-5 text-center md:text-left">
            <span className="text-md font-['Montserrat'] text-white cursor-pointer"
              onClick={handleGetStartedClick}>
              Get Started
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-[#2669ff] ml-2 inline-block cursor-pointer"
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
