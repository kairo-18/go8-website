import React, { useState, useEffect } from 'react';

const Faq = () => {
    const [activeIndexLeft, setActiveIndexLeft] = useState(null);
    const [activeIndexRight, setActiveIndexRight] = useState(null);
    const [darkMode, setDarkMode] = useState(document.documentElement.classList.contains("dark"));

    useEffect(() => {
        setDarkMode(document.documentElement.classList.contains("dark"));
    }, []);

    const toggleLeft = (index) => {
        setActiveIndexLeft(activeIndexLeft === index ? null : index);
    };

    const toggleRight = (index) => {
        setActiveIndexRight(activeIndexRight === index ? null : index);
    };

    const leftSections = [
        { title1: 'Game Developer (Unity)', description1: 'Full-time', description2: 'On-site', content: 'for section 1' },
        { title2: 'Junior Web Developer', description3: 'Intern', description4: 'On-site', content: 'Content for section 2' },
    ];

    const rightSections = [
        { title: 'What types of IT solutions does GO8 Technology Inc. offer?', content: 'We provide a wide range of IT solutions, including software development, workflow optimization, digital tool integration, and customized strategies to enhance business productivity and efficiency.' },
        { title: 'Who can benefit from your services?', content: 'Our services are designed primarily for small and medium-sized enterprises looking to streamline their operations, adopt innovative technologies, and achieve sustainable growth in the digital age.' },
        { title: 'How does GO8 Technology Inc. ensure its solutions meet my business needs?', content: 'We take a personalized approach by understanding your business goals and challenges. Our team then designs and implements tailored IT solutions that align with your objectives, ensuring maximum impact and value.' },
    ];

    return (
        <div className="flex flex-col md:flex-row justify-around p-10 bg-white text-black dark:bg-black dark:text-white" id='careers'>
            <div className="w-full md:w-1/2 p-5">
                <h2 className="text-2xl font-bold mb-5 border-b-2 border-blue-600 dark:border-blue-400">CAREERS</h2>
                {leftSections.map((section, index) => (
                    <div key={index} className="mb-4">
                        <div className="w-full text-left bg-transparent">
                            <div className="Career flex flex-col bg-transparent border-gray-300 dark:border-gray-700">
                                <div className="Title text-lg">{section.title1}</div>
                                <div className="Description1 text-sm pl-3">{section.description1}</div>
                                <div className="Description2 text-sm pl-3">{section.description2}</div>
                            </div>
                            <div className="Career flex flex-col bg-transparent border-b-2 border-gray-300 dark:border-gray-700">
                                <div className="Title text-lg">{section.title2}</div>
                                <div className="Description3 text-sm pl-3">{section.description3}</div>
                                <div className="Description4 text-sm pl-3 pb-3">{section.description4}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="w-full md:w-1/2 p-5">
                <h2 className="text-2xl font-bold mb-5 border-b-2 border-blue-600 dark:border-blue-400">FAQ</h2>
                {rightSections.map((section, index) => (
                    <div key={index} className="mb-4">
                        <button
                            className="w-full text-left p-4 bg-gray-200 text-black rounded flex justify-between items-center transition duration-300 ease-in-out transform hover:bg-gray-300 dark:bg-black dark:text-white dark:hover:bg-gray-700"
                            onClick={() => toggleRight(index)}
                        >
                            {section.title}
                            <span className="text-xl">{activeIndexRight === index ? '-' : '+'}</span>
                        </button>
                        {activeIndexRight === index && (
                            <div className="p-4 bg-gray-100 text-black rounded mt-2 transition duration-300 ease-in-out transform dark:bg-black dark:text-white">
                                {section.content}
                            </div>
                        )}
                        <div className="border-b-2 border-gray-300 dark:border-gray-700 mt-2"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Faq;
