import React, { useState, useEffect } from "react";
import logo from "/src/assets/navbar-assets/go8-logo2.png";
import o8 from "/src/assets/navbar-assets/o8-logo.png";
import go from "/src/assets/navbar-assets/go8-logo.png";
import barsMenu from "/src/assets/navbar-assets/bars-menu.png";
import { motion } from "framer-motion";
import { useAnimate } from "framer-motion";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

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
    <div className="w-full flex text-black dark:text-white p-3 justify-between items-center bg-white dark:bg-black fixed z-50 top-0">
      {/* Logo Section */}
      <div className="logo font-bold ml-[10%] flex items-center">
        <motion.img
          initial={[{ scale: 0, rotate: 360, x: -60 }]}
          animate={[{ scale: 1, rotate: 0, x: 0 }]}
          transition={{ duration: 0.55 }}
          src={go}
          className="w-30 h-30 mt-[-5px] object-contain"
        />
        <img
          src={o8}
          className="w-20 h-20 object-contain ml-[-20px] mt-[0px]"
        />
      </div>

      {/* Navigation Links */}
      <ul className="hidden list-style-none gap-12 mr-[1%] lg:flex text-sm">
        {["about", "projects", "services", "careers", "affiliations"].map(
          (item) => (
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
                <span className="text-[#2669ff] font-semibold">/</span>{" "}
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </motion.a>
            </li>
          )
        )}
      </ul>

      {/* Contact & Dark Mode Toggle */}
      <div className="flex items-center gap-2 sm:gap-4 mr-10">
        {/* Contact Us Button */}
        <motion.a
          ref={scope}
          whileHover={sequence}
          onClick={handleMailClick}
          className="flex items-center justify-center text-sm sm:text-base font-semibold text-white dark:text-black px-4 py-2 sm:px-5 sm:py-3 bg-gray-800 dark:bg-white rounded-lg sm:rounded-xl cursor-pointer"
        >
          Contact Us
        </motion.a>

        {/* Dark Mode Toggle */}
        <motion.button
          onClick={toggleDarkMode}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded-lg sm:rounded-xl cursor-pointer"
        >
          <motion.div
            key={darkMode}
            initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {darkMode ? (
              <BsSunFill className="w-6 h-6 sm:w-7 sm:h-7" />
            ) : (
              <BsMoonFill className="w-6 h-6 sm:w-7 sm:h-7" />
            )}
          </motion.div>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <ul className="list-style-none gap-12 absolute top-[100%] right-[5%] border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 p-5 z-50">
          {["about", "projects", "services", "careers", "affiliations"].map(
            (item) => (
              <li key={item} className="hover:underline">
                <a href={`#${item}`}>
                  <span className="text-[#2669FF] font-semibold">/</span> {item}
                </a>
              </li>
            )
          )}
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
