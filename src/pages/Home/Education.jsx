import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
    const educationData = [
        {
            degree: "Masters in Computer Science",
            institution: "New York University",
            period: "2012 - 2016",
            description: "Ludantium totam rem aperia meaque ipsa quae ab illo inven tore veritatis et quasi architecto beatae vitae."
        },
        {
            degree: "Bachelor in Computer Engineering",
            institution: "Dhaka University",
            period: "2008 - 2011",
            description: "Ludantium totam rem aperia meaque ipsa quae ab illo inven tore veritatis et quasi architecto beatae vitae."
        },
        {
            degree: "Diploma in Graphic Design",
            institution: "Bangla College",
            period: "2006 - 2008",
            description: "Ludantium totam rem aperia meaque ipsa quae ab illo inven tore veritatis et quasi architecto beatae vitae."
        }
    ];

    return (
        <section className="py-16 px-4 bg-white">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row justify-between gap-10">
                    {/* Left Content */}
                    <div className="lg:w-5/12">
                        <p className="text-lime-600 text-xl md:text-2xl font-medium mb-2 play-bold">Education</p>
                        <h2 className="text-4xl md:text-7xl font-bold text-gray-800 mb-6 play-bold">My Education</h2>
                        <p className="text-gray-600 mb-10">
                            Sed ut perspiciatis unde omnis iste natus kobita tumi sopno charini hoye
                            khbor nio na sit voluptatem accusantium dolore.
                        </p>

                        {/* Education Timeline */}
                        <div className="space-y-8">
                            {educationData.map((item, index) => (
                                <div key={index} className="flex">
                                    {/* Icon */}
                                    <div className="mr-4">
                                        <div className="w-16 h-16 bg-lime-500 rounded-md flex items-center justify-center text-white">
                                            <FaGraduationCap size={32} />
                                        </div>
                                    </div>
                                    {/* Content */}
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-800 play-bold">{item.degree}</h3>
                                        <p className="text-gray-700 font-medium text-xl play-bold">
                                            {item.institution} <span className="text-gray-500 text-sm">({item.period})</span>
                                        </p>
                                        <p className="text-gray-600 mt-2">
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
                                src="https://shthemes.net/demosd/thames/wp-content/uploads/2024/08/education-img-2.jpg"
                                alt="Education"
                                className="w-4/5 object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll to top button */}
            <div className="fixed bottom-6 right-6">
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="w-12 h-12 bg-lime-500 rounded-full flex items-center justify-center text-white shadow-lg"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                </button>
            </div>
        </section>
    );
};

export default Education;