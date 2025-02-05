import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Values from "./components/Values";
import Project from "./components/Project";
import Footer from "./components/Footer";
import arcus1 from '/src/assets/projects/arcus/arcus1.png';
import arcus2 from '/src/assets/projects/arcus/arcus2.png';
import arcus3 from '/src/assets/projects/arcus/arcus3.png';
import aurum1 from '/src/assets/projects/aurum/aurum1.png';
import aurum2 from '/src/assets/projects/aurum/aurum2.png';
import aurum3 from '/src/assets/projects/aurum/aurum3.png';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Values />
      <div className="w-full h-full bg-black text-white pt-10">
        <h1 className="text-4xl text-left ml-[5%] mt-10 mb-20 font-bold text-[#2669FF]">Our Projects</h1>
        <div>
          <Project
            images = {[arcus1, arcus2, arcus3]}
            title="Arcus"
            field="Game Development"
            description="Massively Multiplayer Online (MMO) Action Game concept, Arcus uses Bow and Arrows as weapons and blockchain technology to reward the players."
            reversed={false}
          />

          <Project
            images = {[aurum1, aurum2, aurum3]}
            title="Arcus"
            field="Game Development"
            description="Massively Multiplayer Online (MMO) Action Game concept, Arcus uses Bow and Arrows as weapons and blockchain technology to reward the players."
            reversed={true}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
