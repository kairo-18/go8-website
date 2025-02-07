import React, { useEffect, useState } from "react";
import TagCloud from "TagCloud";
import textSphereBg from "../assets/core-services/text-sphere-bg.png";
import textSphereBgWhite from "../assets/core-services/text-sphere-bg-white.png";

const TextSphere = () => {
  useEffect(() => {
    const container = ".tagcloud";
    const texts = [
      "Hardware technology",
      "Digital Marketing",
      "Software Development",
      "IT Consulting",
      "Digital Cards Solution",
      "Strategic Consulting & Coaching",
    ];

    const options = {
      radius: window.innerWidth < 768 ? 120 : 200,
      maxSpeed: "normal",
      initSpeed: "normal",
      keep: false,
    };

    document.querySelector(container).innerHTML = "";
    TagCloud(container, texts, options);
  }, []);

  return (
    <div className="text-sphere w-full overflow-hidden">
      <span className="tagcloud text-lg"></span>
    </div>
  );
};

const Services = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setDarkMode(isDark);
    };

    checkDarkMode();

    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="w-[90vw] h-[50vh] m-5 relative flex justify-between items-center overflow-hidden 
      bg-white dark:bg-black text-black dark:text-white mt-5"
      id="services"
    >
      {/* Background with blur effect */}
      <div className="absolute top-0 left-40 z-0">
        <img
          src={darkMode ? textSphereBg : textSphereBgWhite}
          alt="Text Sphere Background"
          className="w-full h-full object-cover"
        />
      </div>

      <TextSphere />
      <h1 className="text-5xl font-bold text-[#2669FF] absolute right-[20%] text-left mb-20 z-10 font-['Smooch_Sans']">
        CORE <br />
        SERVICES
      </h1>

      <style jsx="true">{`
        .text-sphere {
          position: relative;
          width: 70%;
          height: 100%;
          max-width: 100%;
          max-height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1;
          overflow: hidden;
        }

        .tagcloud {
          display: inline-block;
          position: relative;
          font-weight: 600;
          letter-spacing: 0.0625rem;
          font-size: 1rem;
          line-height: 1.5;
        }

        .tagcloud--item {
          text-transform: uppercase;
          font-size: 1rem;
          transition: color 0.3s ease;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
          text-align: center;
        }

        .tagcloud--item:hover {
          color: #2669ff;
        }
      `}</style>
    </div>
  );
};

export default Services;
