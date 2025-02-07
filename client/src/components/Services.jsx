import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import TagCloud from "TagCloud";
import { motion } from "framer-motion"; // Import motion from framer-motion
import textSphereBg from "../assets/core-services/text-sphere-bg.png";
import textSphereBgWhite from "../assets/core-services/text-sphere-bg-white.png";

const TextSphere = ({ setDescription }) => {
  useEffect(() => {
    const container = ".tagcloud";
    const tags = [
      "Hardware technology",
      "Digital Marketing",
      "Software Development",
      "IT Consulting",
      "Digital Cards Solution",
      "Strategic Consulting & Coaching",
    ];

    const descriptions = {
      "HARDWARE TECHNOLOGY":
        "Providing high-quality hardware solutions and support, tailored to enhance your business operations with reliable and efficient technology.",
      "DIGITAL MARKETING":
        "Crafting innovative digital marketing strategies to boost your online presence, engage your target audience, and drive measurable business growth.",
      "SOFTWARE DEVELOPMENT":
        "Designing and developing customized software solutions to address specific business challenges and enhance operational efficiency.",
      "IT CONSULTING":
        "Expert guidance to help businesses identify, implement, and optimize IT strategies that align with their goals, ensuring maximum efficiency and success in the digital space.",
      "DIGITAL CARDS SOLUTION":
        "Offering modern, secure, and innovative digital card solutions for businesses to streamline transactions and elevate customer experience.",
      "STRATEGIC CONSULTING & COACHING":
        "Delivering insights and personalized coaching to help businesses develop clear strategies, improve decision-making, and achieve sustainable success.",
    };

    const options = {
      radius: window.innerWidth < 768 ? 120 : 200,
      maxSpeed: "normal",
      initSpeed: "normal",
      keep: true,
    };

    document.querySelector(container).innerHTML = "";
    TagCloud(container, tags, options);

    // Ensure the tags are ready before adding event listeners
    requestAnimationFrame(() => {
      const tagItems = document.querySelectorAll(".tagcloud--item");

      const defaultDescription =
        "We provide a wide range of services to help you grow your business.";

      tagItems.forEach((item) => {
        item.addEventListener("mouseover", () => {
          const tag = item.innerText.trim();
          console.log("Hovered over:", tag);

          // Lookup description from the map, or use default if not found
          const descriptionText = descriptions[tag] || defaultDescription;

          setDescription(descriptionText); // Update the state with the description
          console.log("Description:", descriptionText); // Log the description to check it
        });

        item.addEventListener("mouseleave", () => {
          setDescription(defaultDescription); // Reset description when mouse leaves
        });
      });
    });
  }, [setDescription]);

  return (
    <div className="text-sphere w-full overflow-hidden">
      <span className="tagcloud text-lg"></span>
    </div>
  );
};

TextSphere.propTypes = {
  setDescription: PropTypes.func.isRequired,
};

const Services = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [description, setDescription] = useState(
    "We provide a wide range of services to help you grow your business."
  );

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
      <div className="absolute top-0 left-13 z-0">
        <img
          src={darkMode ? textSphereBg : textSphereBgWhite}
          alt="Text Sphere Background"
          className="w-full h-full object-cover"
        />
      </div>

      <TextSphere setDescription={setDescription} />
      <div className="text-left z-10 description-container">
        <h1 className="text-5xl font-bold text-[#2669FF] text-left mb-5  z-10 font-['Smooch_Sans']">
          CORE SERVICES
        </h1>

        <div className="text-left z-10">
          <motion.p
            className="text-2xl font-['Montserrat'] text-black dark:text-white"
            key={description} // Ensure the description changes trigger animation
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }} // Animation duration
          >
            {description}
          </motion.p>
        </div>
      </div>

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
          flex-direction: row;
        }

        .description-container {
          max-width: 50%;
          flex-shrink: 0;
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
