import React from "react";
import { useEffect, useState } from "react";
import go8 from "../assets/footer/GO8 Azure 1.png";
import facebook from "../assets/footer/Facebook.png";
import tiktok from "../assets/footer/TikTok.png";
import youtube from "../assets/footer/YouTube.png";
import facebookWhite from "../assets/footer/FacebookWhite.png";
import tiktokWhite from "../assets/footer/TikTokWhite.png";
import youtubeWhite from "../assets/footer/YouTubeWhite.png";
import image7 from "../assets/footer/image 7.png";
import image8 from "../assets/footer/image 8.png";
import image9 from "../assets/footer/image 9.png";
import image10 from "../assets/footer/image 10.png";
import image11 from "../assets/footer/image 11.png";
import image12 from "../assets/footer/image 12.png";
import image13 from "../assets/footer/image 13.png";

function Footer() {
  const images = [image7, image8, image9, image10, image11, image12, image13];
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };
    checkDarkMode();
    window.addEventListener("resize", checkDarkMode);
    return () => window.removeEventListener("resize", checkDarkMode);
  }, []);

  return (
    <div
      className="bg-gray-200 dark:bg-gray-900 text-black dark:text-white"
      id="affiliations"
    >
      {/* Company Logos Section */}
      <div className="logos">
        <div className="logos-slide">
          {[...images, ...images].map((img, index) => (
            <img key={index} src={img} alt={`logo-${index}`} />
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <footer className="Outer-Footer lg:h-full md:flex-row items-center flex flex-col justify-between p-4 sm:p-6 lg:p-8 gap-6 sm:gap-8 lg:gap-10">
        {/* Logo and Company Name */}
        <div className="Logo-Name flex items-center justify-center sm:justify-start mb-4 sm:mb-0">
          <img src={go8} alt="GO8 Logo" className="w-16 h-16 sm:w-20 sm:h-20" />
          <h1 className="text-lg sm:text-xl font-bold ml-3">
            GO 8 Technology Inc.
          </h1>
        </div>

        {/* Contact Section */}
        <div className="Call-Send flex flex-col gap-4 sm:gap-6 content-center items-center sm:items-start">
          <div className="CallUs">
            <h1 className="font-semibold text-sm sm:text-lg">Call Us</h1>
            <h1 className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
              09123456789
            </h1>
          </div>
          <div className="SendUs">
            <h1 className="font-semibold text-sm sm:text-lg">
              Send Us a Message
            </h1>
            <h1 className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
              information@go8.com
            </h1>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="FollowUs text-center sm:text-left mt-4 sm:mt-0">
          <h1 className="font-semibold text-sm sm:text-lg mb-2">Follow Us</h1>
          <div className="SocialMediaLogo flex justify-center sm:justify-start gap-3 sm:gap-4">
            <img
              src={isDarkMode ? facebookWhite : facebook}
              alt="Facebook"
              className="w-6 h-6 sm:w-8 sm:h-8"
            />
            <img
              src={isDarkMode ? tiktokWhite : tiktok}
              alt="TikTok"
              className="w-6 h-6 sm:w-8 sm:h-8"
            />
            <img
              src={isDarkMode ? youtubeWhite : youtube}
              alt="YouTube"
              className="w-6 h-6 sm:w-8 sm:h-8"
            />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
