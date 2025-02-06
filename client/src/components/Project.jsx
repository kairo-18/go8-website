import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Project(props) {
    const [imageIndex, setImageIndex] = useState(0);
    const [loading, setLoading] = useState(false); // State for loading images
    const [startTouch, setStartTouch] = useState(null);

    // Handle image change when swipe is detected
    const handleImageIndex = (direction) => {
        setLoading(true); // Start loading the next image
        setImageIndex((prevIndex) => (prevIndex + direction + props.images.length) % props.images.length);
    };

    // Handle touch start event to track swipe
    const handleTouchStart = (e) => {
        const touchStartX = e.touches[0].clientX;
        setStartTouch(touchStartX);
    };

    // Handle touch end event to detect swipe
    const handleTouchEnd = (e) => {
        const touchEndX = e.changedTouches[0].clientX;
        if (startTouch - touchEndX > 50) {
            // Swiped left
            handleImageIndex(1);
        } else if (touchEndX - startTouch > 50) {
            // Swiped right
            handleImageIndex(-1);
        }
    };

    const handleImageLoad = () => {
        setLoading(false); // Set loading to false when image is loaded
    };

    return (
        <div
            className={
                "flex " +
                (props.reversed ? " sm:flex-row-reverse " : " sm:flex-row ") +
                "flex-col items-center mt-10 mb-10 overflow-hidden"
            }
        >
            <div
                className="w-4/7 sm:h-[500px] overflow-hidden cursor-[url('/src/assets/projects/right-arrow-s.png'),_pointer]"
                onClick={() => handleImageIndex(1)} // Click to next image
                onTouchStart={handleTouchStart} // Start touch event
                onTouchEnd={handleTouchEnd} // End touch event
            >
                {loading && <div className="loading-spinner">Loading...</div>} {/* Optional loading spinner */}
                <img
                    className="w-full h-full object-cover scale-110 transition-all duration-300 hover:scale-100"
                    src={props.images[imageIndex]}
                    alt="Project"
                    key={imageIndex} // Ensures re-render on image index change
                    onLoad={handleImageLoad} // When image is loaded
                />
            </div>

            <div className={(props.reversed ? "mr-10 " : "ml-10 ") + "w-3/5 " + (props.reversed ? "text-right" : "text-left")}>
                <h1 className="text-6xl text-black dark:text-white font-bold font-[Smooch_Sans]">
                    {props.title}
                </h1>
                <h2 className="text-2xl font-semibold text-[#2669FF]">
                    {props.field}
                </h2>
                <p className="mt-5 ">{props.description}</p>
            </div>

        </div>
    );
}

export default Project;
