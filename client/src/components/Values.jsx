import React from "react";
import cube from "/src/assets/values/cube.png";
import { motion } from "framer-motion";

function Values() {
    return (
        <div
            id="about"
            className="OuterLayer bg-black sm:min-h-[75vh] w-full sm:flex-row flex flex-col px-5 sm:px-20 relative pt-15 mb-[5%] mt-10"
        >
            <div className="w-full sm:w-4/5 text-center sm:text-left flex flex-col content-between gap-20 z-2 sm:ml-[5%]">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.2 }} // ✅ Ensure correct viewport settings
                    
                    className="text-center sm:text-left"
                >
                    <motion.h1
                        className="text-[#2669FF] text-3xl font-bold"
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true, amount: 0.2 }} // ✅ Fix placement
                    >
                        WHAT WE DO
                    </motion.h1>

                    <motion.h4
                        className="text-white text-lg mt-5 max-w-[75%] sm:mx-0 mx-auto"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true, amount: 0.2 }} // ✅ Fix placement
                    >
                        At GO8 Technology Inc., we specialize in providing
                        cutting-edge IT solutions designed to meet the unique
                        needs of small and medium-sized businesses. From
                        streamlining operations to boosting productivity, we
                        deliver innovative technologies and customized
                        strategies that drive growth and efficiency. Whether
                        it's developing software, optimizing workflows, or
                        integrating digital tools, we empower businesses to
                        thrive in an ever-evolving digital landscape.
                    </motion.h4>
                </motion.div>

                <div className="mission-vision flex sm:flex-row flex-col flex-wrap gap-10 w-full max-w-[90%] z-2 mx-auto sm:mx-0">
                    <motion.div
                        initial={{
                            background: [
                                "linear-gradient(135deg, rgba(38, 105, 255, 0.6), rgba(0, 212, 255, 0.6))",
                                "linear-gradient(135deg, rgba(0, 212, 255, 0.6), rgba(38, 105, 255, 0.6))",
                            ],
                        }}
                        animate={{
                            background: [
                                "linear-gradient(135deg, rgba(38, 105, 255, 0.6), rgba(0, 212, 255, 0.6))",
                                "linear-gradient(135deg, rgba(0, 212, 255, 0.6), rgba(38, 105, 255, 0.6))",
                            ],
                        }}
                        whileHover={{
                            background: [
                                "linear-gradient(to right, rgba(38, 105, 255, 1) -200%, rgba(0, 212, 255, 1) -100%, rgba(138, 43, 226, 1) 0%, rgba(0, 212, 255, 1) 100%)",
                                "linear-gradient(to right, rgba(38, 105, 255, 1) -100%, rgba(0, 212, 255, 1) 0%, rgba(138, 43, 226, 1) 100%, rgba(0, 212, 255, 1) 200%)",
                                "linear-gradient(to right, rgba(38, 105, 255, 1) 0%, rgba(0, 212, 255, 1) 100%, rgba(138, 43, 226, 1) 200%, rgba(0, 212, 255, 1) 300%)",
                            ],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut",
                        }}
                        className="mission group cursor-pointer p-5 rounded-lg pt-10 flex flex-col items-center justify-center h-64 shadow-lg hover:shadow-2xl transition-shadow w-full sm:w-[45%]"
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
                                "linear-gradient(135deg, rgba(38, 105, 255, 0.6), rgba(0, 212, 255, 0.6))",
                                "linear-gradient(135deg, rgba(0, 212, 255, 0.6), rgba(38, 105, 255, 0.6))",
                            ],
                        }}
                        animate={{
                            background: [
                                "linear-gradient(135deg, rgba(38, 105, 255, 0.6), rgba(0, 212, 255, 0.6))",
                                "linear-gradient(135deg, rgba(0, 212, 255, 0.6), rgba(38, 105, 255, 0.6))",
                            ],
                        }}
                        whileHover={{
                            background: [
                                "linear-gradient(to right, rgba(38, 105, 255, 1) -200%, rgba(0, 212, 255, 1) -100%, rgba(138, 43, 226, 1) 0%, rgba(0, 212, 255, 1) 100%)",
                                "linear-gradient(to right, rgba(38, 105, 255, 1) -100%, rgba(0, 212, 255, 1) 0%, rgba(138, 43, 226, 1) 100%, rgba(0, 212, 255, 1) 200%)",
                                "linear-gradient(to right, rgba(38, 105, 255, 1) 0%, rgba(0, 212, 255, 1) 100%, rgba(138, 43, 226, 1) 200%, rgba(0, 212, 255, 1) 300%)",
                            ],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut",
                        }}
                        className="vision group cursor-pointer bg-[#2669FF] p-5 rounded-lg pt-10 flex flex-col items-center justify-center h-64 w-full sm:w-[45%]"
                    >
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

            <div className="bgAsset absolute md:block hidden sm:top-[-5%] top-0 right-0 z-1 max-w-[60%] sm:max-w-[40%]">
                <img
                    src={cube}
                    alt="Cube"
                    className="w-full h-auto object-contain"
                />
            </div>
        </div>
    );
}

export default Values;
