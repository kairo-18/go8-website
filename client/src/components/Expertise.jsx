import { useState, useEffect } from "react";
import image1 from "../assets/expertise/9.png";
import image2 from "../assets/expertise/10.png";
import image3 from "../assets/expertise/11.png";
import image4 from "../assets/expertise/12.png";
import image5 from "../assets/expertise/13.png";
import image6 from "../assets/expertise/14.png";
import image7 from "../assets/expertise/15.png";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const Expertise = () => {
  const slides = [
    { url: image1, title: "Enterprise Resource Planning" },
    { url: image2, title: "Telecom" },
    { url: image3, title: "Data Management System" },
    { url: image4, title: "Hotel and Restaurant Management" },
    { url: image5, title: "Financial Technology (FinTech)" },
    { url: image6, title: "Game Development" },
    { url: image7, title: "Blockchain" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Auto-slide functionality

  useEffect(() => {
    const autoScroll = setInterval(nextSlide, 3000);
    return () => clearInterval(autoScroll);
  }, [currentIndex]);

  return (
    <div className="w-full h-full bg-white dark:bg-black pt-5 overflow-hidden">
      <h1 className="text-6xl text-left ml-[9%] mt-1 font-bold text-[#2669FF] font-[Smooch_Sans]">
        INDUSTRY EXPERTISE
      </h1>

      <div className="relative group max-w-[1500px] h-[566px] mx-auto py-16">
        <div className="w-full h-full relative overflow-hidden">
          {/* Slides container */}
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="w-full h-full flex-shrink-0 rounded-2xl"
              >
                <img
                  src={slide.url}
                  alt={slide.title}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            ))}
          </div>

          {/* Left Arrow */}
          <div
            className="absolute top-1/2 left-5 text-2xl rounded-full p-2 bg-black/20 cursor-pointer z-10 transform -translate-y-1/2"
            onClick={prevSlide}
          >
            <BsChevronCompactLeft size={30} />
          </div>

          {/* Right Arrow */}
          <div
            className="absolute top-1/2 right-5 text-2xl rounded-full p-2 bg-black/20 cursor-pointer z-10 transform -translate-y-1/2"
            onClick={nextSlide}
          >
            <BsChevronCompactRight size={30} />
          </div>

          {/* Slide Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {slides.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`cursor-pointer p-1 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-[#2669FF] scale-125"
                    : "bg-black opacity-50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
