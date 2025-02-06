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
import projBg from "/src/assets/projects/proj-bg.png";
import { motion } from "framer-motion";
import Services from "./components/Services";
const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Values />
      <motion.div
        initial={{ y: -300, opacity: 0, zIndex: 0 }}
        whileInView={{ y: 0, opacity: 1, zIndex: 0 }}
        transition={{ duration: 2, ease: [0.87, 0, 0.13, 1] }}
        id="projects"
        className="w-full h-full bg-black text-white pt-10 overflow-x-clip"
        style={{
          backgroundImage: `url(${projBg})`,
          backgroundSize: "cover",
        }}
      >
        <h1 className="text-4xl text-left ml-[9%] mt-10 mb-20 font-bold text-[#2669FF]">
          OUR PROJECTS
        </h1>
        <div>
          <motion.div
            initial={{ x: -500, opacity: 0, zIndex: 0 }}
            whileInView={{ x: 0, opacity: 1, zIndex: 0 }}
            transition={{ duration: 2, ease: [0.87, 0, 0.13, 1] }}
            className="w-full overflow-x-clip"
          >
            <Project
              images={[arcus1, arcus2, arcus3]}
              title="Arcus"
              field="Game Development"
              description="Massively Multiplayer Online (MMO) Action Game concept, Arcus uses Bow and Arrows as weapons and blockchain technology to reward the players."
              reversed={false}
            />
          </motion.div>

          <motion.div
            initial={{ x: 500, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 2, ease: [0.87, 0, 0.13, 1] }}
            className="w-full overflow-x-clip"
          >
            <Project
              images={[aurum1, aurum2, aurum3]}
              title="AURUM NETWORK"
              field="Blockchain Development"
              description='Aurum Network ($AUN) is redefining financial empowerment by making gold the core pillar of modern wealth-building strategies. Through cutting-edge blockchain technology, Aurum transcends the traditional "buy and hold" approach to gold ownership, transforming it into a dynamic, multifunctional asset that drives financial freedom and innovation.'
              reversed={true}
            />
          </motion.div>
        </div>
      </motion.div>
      <Services />
      <Expertise />
      <Footer />
    </>
  );
};

export default App;
