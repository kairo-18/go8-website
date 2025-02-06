import React, { useState, useEffect } from "react";
import image1 from "../assets/expertise/1.png";
import image2 from "../assets/expertise/2.png";
import image3 from "../assets/expertise/3.png";
import image4 from "../assets/expertise/4.png";
import image5 from "../assets/expertise/5.png";
import image6 from "../assets/expertise/6.png";
import image7 from "../assets/expertise/7.png";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

function Expertise() {
  const slides = [
    {
      url: image1,
      title: "Enterprise Resource Planning",
    },
    {
      url: image2,
      title: "Telecom",
    },
    {
      url: image3,
      title: "Data Management System",
    },
    {
      url: image4,
      title: "Hotel and Restaurant Management",
    },
    {
      url: image5,
      title: "Financial Technology (FinTech)",
    },
    {
      url: image6,
      title: "Game Development",
    },
    {
      url: image7,
      title: "Blockchain",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  // Auto-scroll functionality
  useEffect(() => {
    const autoScroll = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(autoScroll); // Cleanup interval on unmount
  }, [currentIndex]); // Re-run effect when currentIndex changes

  return (
    <div className="w-full h-full bg-black text-white pt-5 overflow-x-clip">
      <h1 className="text-6xl text-left ml-[9%] mt-1 font-bold text-[#2669FF] font-[Smooch_Sans]">
        INDUSTRY EXPERTISE
      </h1>

      <div className="max-w-[1500px] h-[566px] w-full m-auto py-16 py-4 relative group">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-full rounded-2xl bg-center bg-cover duration-500 relative 
              before:absolute before:top-0 before:left-0 before:w-1/4 before:h-full 
              before:bg-gradient-to-r before:from-black before:to-transparent before:z-10 
              before:pointer-events-none 
              after:absolute after:top-0 after:right-0 after:w-1/4 after:h-full 
              after:bg-gradient-to-l after:from-black after:to-transparent after:z-10 
              after:pointer-events-none"
        >
          {/* Left Arrow */}
          <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 cursor-pointer z-10">
            <BsChevronCompactLeft size={30} onClick={prevSlide} />
          </div>

          {/* Right Arrow */}
          <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 cursor-pointer z-20">
            <BsChevronCompactRight size={30} onClick={nextSlide} />
          </div>

          <div className="flex top-4 justify-center py-2">
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className="text-2xl cursor-pointer"
              >
                <RxDotFilled
                  size={30}
                  className={`${slideIndex === currentIndex ? "text-[#2669FF]" : ""}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
