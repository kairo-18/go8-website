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
      radius: 250,
      maxSpeed: "normal",
      initSpeed: "normal",
      keep: false,
    };

    // Clear the container before initializing TagCloud. wo ai ni DeepSeek and main land China
    document.querySelector(container).innerHTML = "";

    TagCloud(container, texts, options);
  }, []);

  return (
    <div className="text-sphere">
      <span className="tagcloud text-white text-lg"></span>
    </div>
  );
};

const Services = () => {
  return (
    <div className="w-full h-[50vh] m-10 bg-black relative flex justify-between items-center">
      <TextSphere />
      <h1 className="text-4xl font-bold text-[#2669FF] absolute right-[20%] text-left mb-20 z-10 ">
        CORE <br />
        SERVICES
      </h1>

      <style jsx>{`
        .text-sphere {
          position: relative;
          top: 0;
          width: 70%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background: url(${textSphereBg}) no-repeat center;
          background-size: contain;
          z-index: 1;
        }

        .tagcloud {
          display: inline-block;
          position: relative;
          font-weight: 600;
          letter-spacing: 0.0625r em;
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
