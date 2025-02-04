import React, {useState, useEffect} from "react";

function Project(props) {
    const [imageIndex, setImageIndex] = useState(0);

    const handleImageIndex = () => {
        setImageIndex((imageIndex + 1) % props.images.length);
    };

    return (
        <div
            className={
                "flex " +
                (props.reversed ? " sm:flex-row-reverse " : " sm:flex-row ") +
                "flex-col items-center mt-10 mb-10 shadow-2xl overflow-hidden"
            }
        >
            <div className="w-4/7 sm:h-[500px] overflow-hidden cursor-[url('/src/assets/projects/right-arrow-s.png'),_pointer]" onClick={() => {handleImageIndex()}}>
                <img
                    className="w-full h-full object-cover scale-110 transition-all duration-300 hover:scale-100"
                    src={props.images[imageIndex]}
                    alt="Project"
                />
            </div>

            <div className={(props.reversed ? "mr-10 " : "ml-10 ") + "w-3/5 " + (props.reversed ? "text-right" : "text-left")}>
                <h1 className="text-6xl text-white font-bold font-[Smooch_Sans]">
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
