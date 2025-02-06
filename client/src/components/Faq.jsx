import React, { useState } from 'react';

const Faq = () => {
    const [activeIndexLeft, setActiveIndexLeft] = useState(null);
    const [activeIndexRight, setActiveIndexRight] = useState(null);

    const toggleLeft = (index) => {
        setActiveIndexLeft(activeIndexLeft === index ? null : index);
    };

    const toggleRight = (index) => {
        setActiveIndexRight(activeIndexRight === index ? null : index);
    };

    const leftSections = [
        { title1: 'Game Developer (Unity)',  description1: 'Full-time',  description2: 'On-site', content: 'for section 1' },
        { title2: 'Junior Web Developer',    description3: 'Intern',     description4: 'On-site', content: 'Content for section 2' },
    ];

    const rightSections = [
        { title: 'What types of IT solutions does GO8 Technology Inc. offer?',                  button1: '+',    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
        { title: 'Who can benefit from your services?',                                         button2: '+',    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
        { title: 'How does GO8 Technology Inc. ensure its solutions meet my business needs?',   button3: '+',    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
    ];

    return (
        <div className="flex flex-col md:flex-row justify-around p-10">
            <div className="w-full md:w-1/2 p-5">
                <h2 className="text-2xl text-white font-bold mb-5 border-b-2 border-b-blue-600">CAREERS</h2>
                {leftSections.map((section, index) => (
                    <div key={index} className="mb-4">
                        <div className="w-full text-left bg-transparent ">
                            <div className="Career flex flex-col bg-transparent text-white border-gray-500">
                                <div className="Title text-lg">{section.title1}</div>
                                <div className="Description1 text-sm pl-3">{section.description1}</div>
                                <div className="Description2 text-sm pl-3">{section.description2}</div>
                            </div>
                            <div className="Career flex flex-col bg-transparent border-b-2 text-white border-gray-700">
                                <div className="Title text-lg">{section.title2}</div>
                                <div className="Description3 text-sm pl-3">{section.description3}</div>
                                <div className="Description4 text-sm pl-3 pb-3">{section.description4}</div>
                            </div>
                        </div>
                        
                    </div>
                ))}
            </div>
            <div className="w-full md:w-1/2 p-5">
                <h2 className="text-2xl text-white font-bold mb-5 border-b-2 border-b-blue-600">FAQ</h2>
                {rightSections.map((section, index) => (
                    <div key={index} className="mb-4">
                        <button
                            className="w-full text-left p-4 bg-gray-200 rounded transition duration-300 ease-in-out transform hover:bg-gray-300 hover:scale-105"
                            onClick={() => toggleRight(index)}
                        >
                            {section.title}
                        </button>
                        {activeIndexRight === index && (
                            <div className="p-4 bg-gray-100 rounded mt-2 transition duration-300 ease-in-out transform">
                                {section.content}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Faq;
