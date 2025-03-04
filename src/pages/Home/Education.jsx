import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";

const Education = () => {
    const [showScrollButton, setShowScrollButton] = useState(false);

    // Education data
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

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3, // Stagger animations for children
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
    };

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
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row justify-between gap-10">
                    {/* Right Image */}
                    <motion.div
                        className="lg:w-5/12 flex items-center justify-center"
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <div className="rounded-lg overflow-hidden">
                            <img
                                src="https://shthemes.net/demosd/thames/wp-content/uploads/2024/08/education-img-2.jpg"
                                alt="Education"
                                className="w-full object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* Left Content */}
                    <motion.div
                        className="lg:w-5/12"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <motion.p
                            className="text-lime-600 text-xl md:text-2xl font-medium mb-2 play-bold"
                            variants={itemVariants}
                        >
                            Education
                        </motion.p>
                        <motion.h2
                            className="text-4xl md:text-7xl font-bold text-gray-800 mb-6 play-bold"
                            variants={itemVariants}
                        >
                            My Education
                        </motion.h2>
                        <motion.p
                            className="text-xl text-gray-600 mb-10"
                            variants={itemVariants}
                        >
                            Sed ut perspiciatis unde omnis iste natus kobita tumi sopno charini hoye
                            khbor nio na sit voluptatem accusantium dolore.
                        </motion.p>

                        {/* Education Timeline */}
                        <div className="space-y-8">
                            {educationData.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="flex"
                                    variants={itemVariants}
                                >
                                    {/* Icon */}
                                    <div className="mr-8">
                                        <div className="w-20 h-20 bg-lime-500 rounded-md flex items-center justify-center text-white">
                                            <FaGraduationCap size={32} />
                                        </div>
                                    </div>
                                    {/* Content */}
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-800 play-bold">{item.degree}</h3>
                                        <p className="text-gray-700 font-medium text-xl play-bold">
                                            {item.institution} <span className="text-gray-500 text-sm">({item.period})</span>
                                        </p>
                                        <p className="text-xl text-gray-600 mt-2">
                                            {item.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Conditional Scroll to top button */}
            {showScrollButton && (
                <motion.div
                    className="fixed bottom-6 right-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                >
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="w-12 h-12 cursor-pointer bg-lime-500 rounded-full flex items-center justify-center text-white shadow-lg"
                    >
                        <MdOutlineKeyboardDoubleArrowUp className='text-3xl' />
                    </button>
                </motion.div>
            )}
        </section>
    );
};

export default Education;