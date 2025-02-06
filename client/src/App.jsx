import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Values from "./components/Values";
import Project from "./components/Project";
import Expertise from "./components/Expertise";
import Footer from "./components/Footer";
import arcus1 from "/src/assets/projects/arcus/arcus1.png";
import arcus2 from "/src/assets/projects/arcus/arcus2.png";
import arcus3 from "/src/assets/projects/arcus/arcus3.png";
import aurum1 from "/src/assets/projects/aurum/aurum1.png";
import aurum2 from "/src/assets/projects/aurum/aurum2.png";
import aurum3 from "/src/assets/projects/aurum/aurum3.png";
import projBg from "/src/assets/projects/grid-bg-4.png";
import { motion } from "framer-motion";
import Services from "./components/Services";
import Faq from "./components/Faq";
const App = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Consider screens less than 768px as small
    };

    // Call handleResize on initial load and window resize
    handleResize();
    window.addEventListener("resize", handleResize);

    // Cleanup on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Values />
      <motion.div
        initial={{ y: -300, opacity: 0, zIndex: 0 }}
        whileInView={{ y: 0, opacity: 1, zIndex: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 2, ease: [0.87, 0, 0.13, 1] }}
        id="projects"
        className="w-full h-full bg-white dark:bg-black text-black dark:text-white pt-10 overflow-x-hidden" // Changed overflow-x-clip to overflow-hidden
        style={{
          backgroundImage: `url(${projBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center", // Ensure the background image is centered
        }}
      >
        <h1 className="text-3xl md:text-4xl text-left ml-[5%] md:ml-[9%] mt-10 mb-10 md:mb-20 font-bold text-[#2669FF]">
          OUR PROJECTS
        </h1>
        <div className="space-y-10 md:space-y-0 px-4 w-full max-w-full">
          <motion.div
            initial={{ x: -300, opacity: 0, zIndex: 0 }}
            whileInView={{ x: 0, opacity: 1, zIndex: 0 }}
            transition={{ duration: 2, ease: [0.87, 0, 0.13, 1] }}
            viewport={{ once: true, amount: 0.1 }} // Increased threshold for small screens
            className="w-full max-w-full overflow-visible min-w-[200px] min-h-[40vh]" // Adjusted min-width and min-height
          >
            <Project
              images={[arcus1, arcus2, arcus3]}
              title="Arcus"
              field="Game Development"
              description="Massively Multiplayer Online (MMO) Action Game concept, Arcus uses Bow and Arrows as weapons and blockchain technology to reward the players."
              reversed={false}
            />
          </motion.div>

          <motion.div
            initial={{ x: 300, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 2, ease: [0.87, 0, 0.13, 1] }}
            viewport={{ once: true, amount: 0.1 }} // Increased threshold for small screens
            className="w-full max-w-full overflow-visible min-w-[200px] min-h-[40vh]" // Adjusted min-width and min-height
          >
            <Project
              images={[aurum1, aurum2, aurum3]}
              title="AURUM NETWORK"
              field="Blockchain Development"
              description='Aurum Network ($AUN) is redefining financial empowerment by making gold the core pillar of modern wealth-building strategies. Through cutting-edge blockchain technology, Aurum transcends the traditional "buy and hold" approach to gold ownership, transforming it into a dynamic, multifunctional asset that drives financial freedom and innovation.'
              reversed={!isSmallScreen}
            />
          </motion.div>
        </div>
      </motion.div>
      <Services />
      <Expertise />
      <Faq />
      <Footer />
    </>
  );
};

export default App;
