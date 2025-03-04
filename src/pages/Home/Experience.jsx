import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollButton(window.scrollY > 600);
        };

        window.addEventListener('scroll', handleScroll);

        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row-reverse justify-between gap-10">
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
                                src="https://shthemes.net/demosd/thames/wp-content/uploads/2024/08/work-img.jpg"
                                alt="Experience"
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
                            Experience
                        </motion.p>
                        <motion.h2
                            className="text-4xl md:text-7xl font-bold text-gray-800 mb-6 play-bold"
                            variants={itemVariants}
                        >
                            My Experience
                        </motion.h2>
                        <motion.p
                            className="text-xl text-gray-600 mb-10"
                            variants={itemVariants}
                        >
                            Sed ut perspiciatis unde omnis iste natus kobita tumi sopno charini hoye
                            khbor nio na sit voluptatem accusantium dolore.
                        </motion.p>

                        {/* Experience Timeline */}
                        <div className="space-y-8">
                            {experienceData.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="flex"
                                    variants={itemVariants}
                                >
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

export default Experience;