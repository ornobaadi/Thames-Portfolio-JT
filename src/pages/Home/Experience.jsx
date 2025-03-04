import React, { useState, useEffect } from 'react';
import { FaBriefcase } from 'react-icons/fa';
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";

const Experience = () => {
    const [showScrollButton, setShowScrollButton] = useState(false);
    
    // Experience data
    const experienceData = [
        {
            position: "Senior System Engineer",
            company: "eThemeStudio",
            period: "2018 - Running",
            description: "Ludantium totam rem aperia meaque ipsa quae ab illo inven tore veritatis et quasi architecto beatae vitae."
        },
        {
            position: "Data Architect",
            company: "Easy Computers",
            period: "2015 - 2018",
            description: "Ludantium totam rem aperia meaque ipsa quae ab illo inven tore veritatis et quasi architecto beatae vitae."
        },
        {
            position: "Web Developer",
            company: "eThemeStudio",
            period: "2012 - 2015",
            description: "Ludantium totam rem aperia meaque ipsa quae ab illo inven tore veritatis et quasi architecto beatae vitae."
        }
    ];

    // Handle scroll event to show/hide the button
    useEffect(() => {
        const handleScroll = () => {
            setShowScrollButton(window.scrollY > 600);
        };
        
        window.addEventListener('scroll', handleScroll);
        
        // Initial check
        handleScroll();
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section className="py-16 px-60 bg-white">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row-reverse justify-between gap-10">
                    {/* Left Content */}
                    <div className="lg:w-5/12">
                        <p className="text-lime-600 text-xl md:text-2xl font-medium mb-2 play-bold">Experience</p>
                        <h2 className="text-4xl md:text-7xl font-bold text-gray-800 mb-6 play-bold">My Experience</h2>
                        <p className="text-xl text-gray-600 mb-10">
                            Sed ut perspiciatis unde omnis iste natus kobita tumi sopno charini hoye
                            khbor nio na sit voluptatem accusantium dolore.
                        </p>

                        {/* Experience Timeline */}
                        <div className="space-y-8">
                            {experienceData.map((item, index) => (
                                <div key={index} className="flex">
                                    {/* Icon */}
                                    <div className="mr-8">
                                        <div className="w-20 h-20 bg-lime-500 rounded-md flex items-center justify-center text-white">
                                            <FaBriefcase size={32} />
                                        </div>
                                    </div>
                                    {/* Content */}
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-800 play-bold">{item.position}</h3>
                                        <p className="text-gray-700 text-xl play-bold">
                                            {item.company} <span className="text-gray-500 text-sm">({item.period})</span>
                                        </p>
                                        <p className="text-xl text-gray-600 mt-2">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="lg:w-5/12 flex items-center justify-center">
                        <div className="rounded-lg overflow-hidden">
                            <img
                                src="https://shthemes.net/demosd/thames/wp-content/uploads/2024/08/work-img.jpg"
                                alt="Experience"
                                className=" object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Conditional Scroll to top button */}
            {showScrollButton && (
                <div className="fixed bottom-6 right-6">
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="w-12 h-12 cursor-pointer bg-lime-500 rounded-full flex items-center justify-center text-white shadow-lg"
                    >
                        <MdOutlineKeyboardDoubleArrowUp className='text-3xl' />
                    </button>
                </div>
            )}
        </section>
    );
};

export default Experience;