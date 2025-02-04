import React, { useState, useEffect } from "react";
import cube from "/src/assets/values/cube.png";

function Values() {
    return (
        <div className="OuterLayer bg-black sm:h-[75vh] w-screen sm:flex-row flex flex-col pl-20 pr-20 relative pt-15 overflow-x-clip">
            <div className="w-full sm:w-4/5 text-center sm:text-left flex flex-col content-between gap-40 z-1">
                <div>
                    <h1 className="text-[#2669FF] text-3xl font-bold">
                        WHAT WE DO
                    </h1>
                    <h4 className="text-white text-lg mt-5">
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

                <div className="mission-vision flex sm:flex-row flex-col gap-20 ">
                    <div className="mission group cursor-pointer">
                        <h1 className="text-white text-center text-3xl group-hover:translate-y-[-25px] transition-transform duration-800 font-bold">
                            OUR MISSION
                        </h1>
                        <h4 className="text-white text-center text-lg translate-x-15 translate-y-15 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-[-15px] transition-opacity transition-transform duration-800 mt-1">
                            To empower businesses to thrive in the digital age,
                            leveraging cutting-edge technologies towards growth,
                            productivity, and efficiency.
                        </h4>
                    </div>

                    <div className="vision">
                        <div className="visioin group cursor-pointer">
                            <h1 className="text-white text-center text-3xl group-hover:translate-y-[-25px] transition-transform duration-800 font-bold">
                                OUR VISION
                            </h1>
                            <h4 className="text-white text-center text-lg translate-x-15 translate-y-15 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-[-15px] transition-opacity transition-transform duration-800 mt-1">
                                To be the foremost business solutions provider
                                to small and medium scale corporations in the
                                country and abroad.
                            </h4>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bgAsset absolute sm:top-[-200px] top-0 right-[-15%] z-0  h-[100%]">
                <img src={cube} alt="Cube" className="" />
            </div>
        </div>
    );
}

export default Values;
