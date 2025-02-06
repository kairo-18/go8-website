import React, { useEffect } from "react";
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
      radius: window.innerWidth < 768 ? 120 : 250, // ✅ Responsive radius
      maxSpeed: "normal",
      initSpeed: "normal",
      keep: false,
    };

    document.querySelector(container).innerHTML = ""; // ✅ Clear old elements

    TagCloud(container, texts, options);
  }, []);

  return (
    <div className="text-sphere w-full overflow-hidden"> {/* ✅ Prevent overflow */}
      <span className="tagcloud text-white text-lg"></span>
    </div>
  );
};

const Services = () => {
  return (
    <div className="w-[90vw] h-[50vh] m-10 bg-black relative flex justify-between items-center overflow-hidden">
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
          max-width: 100%; /* ✅ Prevents overflow */
          max-height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background: url(${textSphereBg}) no-repeat center;
          background-size: contain;
          z-index: 1;
          overflow: hidden; /* ✅ Ensures extra content is clipped */
        }

        .tagcloud {
          display: inline-block;
          position: relative;
          font-weight: 600;
          letter-spacing: 0.0625rem;
          font-size: 1rem;
          line-height: 1.5;
          color: white;
        }

        .tagcloud--item {
          color: white;
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
