import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Values from "./components/Values";
import Project from "./components/Project";
import Footer from "./components/Footer";

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
            images={["/src/assets/projects/arcus/arcus1.png", "/src/assets/projects/arcus/arcus2.png", "/src/assets/projects/arcus/arcus3.png"]}
            title="Arcus"
            field="Game Development"
            description="Massively Multiplayer Online (MMO) Action Game concept, Arcus uses Bow and Arrows as weapons and blockchain technology to reward the players."
            reversed={false}
          />

          <Project
            images={["/src/assets/projects/aurum/aurum1.png", "/src/assets/projects/aurum/aurum2.png", "/src/assets/projects/aurum/aurum3.png"]}
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
