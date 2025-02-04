import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Values from "./components/Values";
import Footer from "./components/Footer";
import CoreServices from "./components/CoreServices";

const App = () => {
  return (
    <>
      
      <Navbar />
      <Hero />
      <Values />
      <Footer />
    </>
  );
};

export default App;
