import React from "react";
import logo from "/src/assets/navbar-assets/go8-logo2.png";
import o8 from "/src/assets/navbar-assets/o8-logo.png";
import go from "/src/assets/navbar-assets/go8-logo.png";
import barsMenu from "/src/assets/navbar-assets/bars-menu.png";
import { useState } from "react";
import { motion } from "framer-motion";
import { useAnimate } from "framer-motion";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [scope, animate] = useAnimate();

    function sequence() {
        animate([
            [scope.current, { rotate: -10 }],
            [scope.current, { scale: 1.1 }],
            [scope.current, { rotate: 10 }],
            [scope.current, { rotate: 0 }],
            [scope.current, { scale: 1 }],
        ]);
    }

    return (
        <div className="w-full flex text-white p-5 justify-between items-center bg-black fixed z-50 top-0">
            <div className="logo font-bold ml-[10%] flex">
                <motion.img
                initial={[
                  { scale: 0, rotate: 360, x: -60},
                ]}
                animate={[
                  { scale: 1, rotate: 0, x: 0},
                ]}
                transition={
                  { duration: 0.55}
                }
                src={go} className="w-15 h-15 mt-[-7px]" />
                <img src={o8} className="w-15 h-10 mt-[0px] ml-[-15px]" />
            </div>
            <ul className="hidden list-style-none gap-12 mr-[1%] lg:flex text-sm">
                <li>
                    <motion.a
                        href="#about"
                        whileHover={{
                            scale: 1.1,
                            color: "#2669ff",
                            transition: { duration: 0.3 },
                        }}
                        className="flex items-center"
                    >
                        <span className="text-[#2669ff] font-semibold">/</span>
                        About Us
                    </motion.a>
                </li>
                <li>
                    <motion.a
                        href="#projects"
                        whileHover={{
                            scale: 1.1,
                            color: "#2669ff",
                            transition: { duration: 0.3 },
                        }}
                        className="flex items-center"
                    >
                        <span className="text-[#2669ff] font-semibold">/</span>
                        Projects
                    </motion.a>
                </li>
                <li>
                    <motion.a
                        href="#services"
                        whileHover={{
                            scale: 1.1,
                            color: "#2669FF",
                            transition: { duration: 0.3 },
                        }}
                        className="flex items-center"
                    >
                        <span className="text-[#2669FF] font-semibold">/</span>
                        Core Services
                    </motion.a>
                </li>
                <li>
                    <motion.a
                        href="#careers"
                        whileHover={{
                            scale: 1.1,
                            color: "#2669FF",
                            transition: { duration: 0.3 },
                        }}
                        className="flex items-center"
                    >
                        <span className="text-[#2669FF] font-semibold">/</span>
                        Careers
                    </motion.a>
                </li>
                <li>
                    <motion.a
                        href="#news"
                        whileHover={{
                            scale: 1.1,
                            color: "#2669FF",
                            transition: { duration: 0.3 },
                        }}
                        className="flex items-center"
                    >
                        <span className="text-[#2669FF] font-semibold">/</span>
                        News and Articles
                    </motion.a>
                </li>
            </ul>

            <motion.a
                ref={scope}
                whileHover={sequence}
                href="mailto:rcarlos@cmdsi.com"
                className="flex text-sm font-semibold text-black p-3 bg-white rounded-xl sm:mr-[5%] mr-[10%]"
            >
                Contact Us
            </motion.a>

            {showMenu && (
                <ul className="list-style-none gap-12 absolute top-[10%] right-[5%] border-1 border-gray-300 p-5 z-50">
                    <li className=" hover:underline">
                        <a href="#about">
                            <span className="text-[#2669FF] font-semibold">
                                /
                            </span>
                            about
                        </a>
                    </li>
                    <li className=" hover:underline">
                        <a href="#projects">
                            <span className="text-[#2669FF] font-semibold">
                                /
                            </span>
                            projects
                        </a>
                    </li>
                    <li className=" hover:underline">
                        <a href="#services">
                            <span className="text-[#2669FF] font-semibold">
                                /
                            </span>
                            services
                        </a>
                    </li>
                    <li className=" hover:underline">
                        <a href="#careers">
                            <span className="text-[#2669FF] font-semibold">
                                /
                            </span>
                            careers
                        </a>
                    </li>
                    <li className=" hover:underline">
                        <a href="#news">
                            <span className="text-[#2669FF] font-semibold">
                                /
                            </span>
                            news
                        </a>
                    </li>
                </ul>
            )}

            <div id="hamburger-menu" className="lg:hidden absolute right-[5%]">
                <img
                    src={barsMenu}
                    className="w-6 transform active:scale-120"
                    onClick={() => setShowMenu(!showMenu)}
                />
            </div>
        </div>
    );
};

export default Navbar;
