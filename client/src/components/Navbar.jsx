import React from "react";
import logo from "/src/assets/navbar-assets/go8-logo2.png";
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
    <div className="w-full h-full flex text-white p-5 justify-between items-center bg-black">
      <div className="logo font-bold ml-[10%] flex">
        <img src={logo} className="w-25 h-11 mt-[-7px]" />
      </div>
      <ul className="hidden list-style-none gap-12 mr-[1%] lg:flex text-sm">
        <li className="hover:transform hover:translate-0.5">
          <a href="#about">
            <span className="text-[#2669ff] font-semibold">/</span>
            About Us
          </a>
        </li>
        <li>
          <a href="#projects">
            <span className="text-[#2669ff] font-semibold">/</span>
            Projects
          </a>
        </li>
        <li>
          <a href="#services">
            <span className="text-[#2669FF] font-semibold">/</span>
            Core Services
          </a>
        </li>
        <li>
          <a href="#careers">
            <span className="text-[#2669FF] font-semibold">/</span>
            Careers
          </a>
        </li>
        <li>
          <a href="#news">
            <span className="text-[#2669FF] font-semibold">/</span>
            News and Articles
          </a>
        </li>
      </ul>

      <motion.a
        ref={scope}
        whileHover={sequence}
        href="mailto:rcarlos@cmdsi.com"
        className="flex text-sm font-semibold text-black p-3 bg-white rounded-xl mr-[5%]"
      >
        Contact Us
      </motion.a>

      {showMenu && (
        <ul className="list-style-none gap-12 absolute top-[10%] right-[5%] border-1 border-gray-300 p-5 z-50">
          <li className=" hover:underline">
            <a href="#about">
              <span className="text-[#2669FF] font-semibold">/</span>
              about
            </a>
          </li>
          <li className=" hover:underline">
            <a href="#projects">
              <span className="text-[#2669FF] font-semibold">/</span>
              projects
            </a>
          </li>
          <li className=" hover:underline">
            <a href="#services">
              <span className="text-[#2669FF] font-semibold">/</span>
              services
            </a>
          </li>
          <li className=" hover:underline">
            <a href="#careers">
              <span className="text-[#2669FF] font-semibold">/</span>
              careers
            </a>
          </li>
          <li className=" hover:underline">
            <a href="#news">
              <span className="text-[#2669FF] font-semibold">/</span>
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
