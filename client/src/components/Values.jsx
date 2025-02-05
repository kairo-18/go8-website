import React, { useState, useEffect } from "react";
import cube from "/src/assets/values/cube.png";
import { motion } from "framer-motion";

function Values() {
    return (
        <div
            id="about"
            className="OuterLayer bg-black sm:h-[75vh] w-screen sm:flex-row flex flex-col pl-20 pr-20 relative pt-15 overflow-x-clip mb-[5%]"
        >
            <div className="w-full sm:w-4/5 text-center sm:text-left flex flex-col content-between gap-20 z-1 ml-[5%]">
                <div>
                    <h1 className="text-[#2669FF] text-3xl font-bold">
                        WHAT WE DO
                    </h1>
                    <h4 className="text-white text-lg mt-5 w-3/4">
                        At GO8 Technology Inc., we specialize in providing
                        cutting-edge IT solutions designed to meet the unique
                        needs of small and medium-sized businesses. From
                        streamlining operations to boosting productivity, we
                        deliver innovative technologies and customized
                        strategies that drive growth and efficiency. Whether
                        it's developing software, optimizing workflows, or
                        integrating digital tools, we empower businesses to
                        thrive in an ever-evolving digital landscape.
                    </h4>
                </div>

                <div className="mission-vision flex sm:flex-row flex-col gap-20 w-3/4">
                    <motion.div
                        initial={{
                            background: [
                                "linear-gradient(135deg, #2669FF, #00D4FF)", // Bright cyan for high contrast
                                "linear-gradient(135deg, #00D4FF, #2669FF)", // Reverse the colors for a pulsing effect
                            ],
                        }}
                        animate={{
                            background: [
                                "linear-gradient(135deg, #2669FF, #00D4FF)", // Pulse effect with contrasting colors
                                "linear-gradient(135deg, #00D4FF, #2669FF)", // Reverse the pulse effect
                            ],
                        }}
                        whileHover={{
                            background: [
                                "linear-gradient(to right, #2669FF -200%, #00D4FF -100%, #8A2BE2 0%,   #00D4FF 100%)",
                                "linear-gradient(to right, #2669FF -100%, #00D4FF 0%,    #8A2BE2 100%, #00D4FF 200%)",
                                "linear-gradient(to right, #2669FF 0%,    #00D4FF 100%,  #8A2BE2 200%, #00D4FF 300%)",
                            ],
                        }}
                        transition={{
                            duration: 2, // Controls the speed of the pulse animation
                            repeat: Infinity, // Ensure it repeats indefinitely
                            repeatType: "reverse", // Ensures the pulse goes back and forth
                            ease: "easeInOut", // Smooth animation effect
                        }}
                        className="mission group cursor-pointer p-5 rounded-lg pt-10 flex flex-col items-center justify-center h-64 shadow-lg hover:shadow-2xl transition-shadow"
                    >
                        <h1 className="text-white text-center text-3xl group-hover:translate-y-[-25px] transition-transform duration-800 font-bold">
                            OUR MISSION
                        </h1>
                        <h4 className="text-white text-center text-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-[-15px] transition-opacity transition-transform duration-800 mt-2">
                            To empower businesses to thrive in the digital age,
                            leveraging cutting-edge technologies towards growth,
                            productivity, and efficiency.
                        </h4>
                    </motion.div>
                    <motion.div 
                    initial={{
                        background: [
                            "linear-gradient(135deg, #2669FF, #00D4FF)", // Bright cyan for high contrast
                            "linear-gradient(135deg, #00D4FF, #2669FF)", // Reverse the colors for a pulsing effect
                        ],
                    }}
                    animate={{
                        background: [
                            "linear-gradient(135deg, #2669FF, #00D4FF)", // Pulse effect with contrasting colors
                            "linear-gradient(135deg, #00D4FF, #2669FF)", // Reverse the pulse effect
                        ],
                    }}
                    whileHover={{
                        background: [
                            "linear-gradient(to right, #2669FF -200%, #00D4FF -100%, #8A2BE2 0%,   #00D4FF 100%)",
                            "linear-gradient(to right, #2669FF -100%, #00D4FF 0%,    #8A2BE2 100%, #00D4FF 200%)",
                            "linear-gradient(to right, #2669FF 0%,    #00D4FF 100%,  #8A2BE2 200%, #00D4FF 300%)",
                        ],
                    }}
                    transition={{
                        duration: 2, // Controls the speed of the pulse animation
                        repeat: Infinity, // Ensure it repeats indefinitely
                        repeatType: "reverse", // Ensures the pulse goes back and forth
                        ease: "easeInOut", // Smooth animation effect
                    }}
                    className="vision group cursor-pointer bg-[#2669FF] p-5 rounded-lg pt-10 flex flex-col items-center justify-center h-64">
                        <h1 className="text-white text-center text-3xl group-hover:translate-y-[-25px] transition-transform duration-800 font-bold">
                            OUR VISION
                        </h1>
                        <h4 className="text-white text-center text-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-[-15px] transition-opacity transition-transform duration-800 mt-2">
                            To be the foremost business solutions provider to
                            small and medium scale corporations in the country
                            and abroad.
                        </h4>
                    </motion.div>
                </div>
            </div>

            <div className="bgAsset absolute sm:top-[-200px] top-0 right-[-15%] z-1  h-[100%]">
                <img src={cube} alt="Cube" className="" />
            </div>
        </div>
    );
}

export default Values;
