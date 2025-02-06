import React, { useState, useEffect } from "react";
import logo from "/src/assets/navbar-assets/go8-logo2.png";
import o8 from "/src/assets/navbar-assets/o8-logo.png";
import go from "/src/assets/navbar-assets/go8-logo.png";
import barsMenu from "/src/assets/navbar-assets/bars-menu.png";
import { motion } from "framer-motion";
import { useAnimate } from "framer-motion";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [scope, animate] = useAnimate();
    const [darkMode, setDarkMode] = useState(
        document.documentElement.classList.contains("dark")
    );

    function sequence() {
        animate([
            [scope.current, { rotate: -10 }],
            [scope.current, { scale: 1.1 }],
            [scope.current, { rotate: 10 }],
            [scope.current, { rotate: 0 }],
            [scope.current, { scale: 1 }],
        ]);
    }

    const handleMailClick = () => {
        window.open("mailto:rcarlos@cmdsi.com", "_blank");
    };

    const toggleDarkMode = () => {
        const html = document.documentElement;
        if (darkMode) {
            html.classList.remove("dark");
            html.classList.add("light");
            html.style.backgroundColor = "white";
        } else {
            html.classList.remove("light");
            html.classList.add("dark");
            html.style.backgroundColor = "black";
        }
        setDarkMode(!darkMode);
    };

    return (
        <div className="w-full flex text-black dark:text-white p-5 justify-between items-center bg-white dark:bg-black fixed z-50 top-0">
            {/* Logo Section */}
            <div className="logo font-bold ml-[10%] flex">
                <motion.img
                    initial={[{ scale: 0, rotate: 360, x: -60 }]}
                    animate={[{ scale: 1, rotate: 0, x: 0 }]}
                    transition={{ duration: 0.55 }}
                    src={go}
                    className="w-15 h-15 mt-[-7px]"
                />
                <img src={o8} className="w-15 h-10 mt-[0px] ml-[-15px]" />
            </div>

            {/* Navigation Links */}
            <ul className="hidden list-style-none gap-12 mr-[1%] lg:flex text-sm">
                {[
                    "about",
                    "projects",
                    "services",
                    "careers",
                    "affiliations",
                ].map((item) => (
                    <li key={item}>
                        <motion.a
                            href={`#${item}`}
                            whileHover={{
                                scale: 1.1,
                                color: "#2669ff",
                                transition: { duration: 0.3 },
                            }}
                            className="flex items-center"
                        >
                            <span className="text-[#2669ff] font-semibold">
                                /
                            </span>{" "}
                            {item.charAt(0).toUpperCase() + item.slice(1)}
                        </motion.a>
                    </li>
                ))}
            </ul>

            {/* Contact & Dark Mode Toggle */}
            <div className="flex items-center gap-2 sm:gap-4 mr-10">
                {/* Contact Us Button */}
                <motion.a
                    ref={scope}
                    whileHover={sequence}
                    onClick={handleMailClick}
                    className="flex text-xs sm:text-sm text-center font-semibold text-white dark:text-black p-1 sm:p-2 bg-gray-800 dark:bg-white rounded-lg sm:rounded-xl cursor-pointer"
                >
                    Contact Us
                </motion.a>

                {/* Dark Mode Toggle */}
                <button
                    onClick={toggleDarkMode}
                    className="p-1 sm:p-2 px-2 sm:px-4 text-xs sm:text-sm font-semibold bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded-lg sm:rounded-xl sm:mr-[5%] mr-[1%] cursor-pointer"
                >
                    {darkMode ? "Light Mode" : "Dark Mode"}
                </button>
            </div>
            {/* Mobile Menu */}
            {showMenu && (
                <ul className="list-style-none gap-12 absolute top-[100%] right-[5%] border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 p-5 z-50">
                    {[
                        "about",
                        "projects",
                        "services",
                        "careers",
                        "affiliations",
                    ].map((item) => (
                        <li key={item} className="hover:underline">
                            <a href={`#${item}`}>
                                <span className="text-[#2669FF] font-semibold">
                                    /
                                </span>{" "}
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            )}

            {/* Hamburger Menu Button */}
            <div id="hamburger-menu" className="lg:hidden absolute right-[5%]">
                <img
                    src={barsMenu}
                    className="w-6 transform active:scale-120 cursor-pointer filter dark:invert-0 invert"
                    onClick={() => setShowMenu(!showMenu)}
                />
            </div>
        </div>
    );
};

export default Navbar;
