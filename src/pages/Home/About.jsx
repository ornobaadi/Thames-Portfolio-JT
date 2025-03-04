import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
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

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } },
    };

    return (
        <div id='about' className="py-20">
            <motion.div
                className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }} // Animate only once when in view
            >
                {/* Left Side: Image */}
                <motion.div
                    className="w-full lg:w-1/2 mb-8 lg:mb-0 flex justify-center lg:justify-start"
                    variants={imageVariants}
                >
                    <img
                        src="https://shthemes.net/demosd/thames/wp-content/uploads/2024/08/about-img-2.jpg"
                        alt="About Me"
                        className="rounded-lg shadow-2xl w-full max-w-md lg:max-w-full"
                    />
                </motion.div>

                {/* Right Side: Text Content */}
                <motion.div
                    className="w-full lg:w-1/2 lg:pl-12"
                    variants={containerVariants}
                >
                    <motion.h2
                        className="text-xl lg:text-2xl text-lime-600 font-bold mb-6 play-bold"
                        variants={itemVariants}
                    >
                        About Me
                    </motion.h2>
                    <motion.h3
                        className="text-2xl lg:text-7xl mb-4 play-bold"
                        variants={itemVariants}
                    >
                        I Develop System <br />
                        that Works
                    </motion.h3>
                    <motion.p
                        className="text-lg mb-6"
                        variants={itemVariants}
                    >
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        <br /><br />
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.
                    </motion.p>

                    {/* Personal Details */}
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                        variants={containerVariants}
                    >
                        {[
                            { label: 'Name', value: 'James Smith' },
                            { label: 'Age', value: '29 Years' },
                            { label: 'Role', value: 'System Engineer' },
                            { label: 'Education', value: 'PhD in Physics' },
                        ].map((detail, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                            >
                                <p className="text-lg font-bold">{detail.label}</p>
                                <p className="text-xl">{detail.value}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                    <motion.img
                        className="my-5"
                        src="https://shthemes.net/demosd/thames/wp-content/uploads/2024/08/signature-3.png"
                        alt="Signature"
                        variants={itemVariants}
                    />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default About;