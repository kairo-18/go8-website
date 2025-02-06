import React, { useEffect, useState } from "react";
import TagCloud from "TagCloud";
import textSphereBg from "../assets/core-services/text-sphere-bg.png";

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
  const [darkMode, setDarkMode] = useState(
    document.documentElement.classList.contains("dark")
  );

  const toggleDarkMode = () => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.remove("dark");
      html.classList.add("light");
    } else {
      html.classList.remove("light");
      html.classList.add("dark");
    }
    setDarkMode(!darkMode);
  };

  return (
    <div className="w-[90vw] h-[50vh] m-5 relative flex justify-between items-center overflow-hidden bg-white dark:bg-black text-black dark:text-white mt-50" id="services">
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
          background: url(${textSphereBg}) no-repeat center;
          background-size: contain;
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