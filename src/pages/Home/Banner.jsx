import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const Banner = () => {
    // Animation variants
    const textVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } },
    };

    const socialVariants = {
        hidden: { opacity: 0, x: 20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut', delay: 0.5 } },
    };

    return (
        <div id='home' className="w-full h-screen relative flex items-center">
            <div className="w-full flex flex-col-reverse lg:flex-row-reverse items-center">
                {/* Image on the right */}
                <motion.div
                    className="w-full h-[50vh] lg:h-screen lg:w-1/2 relative overflow-hidden"
                    variants={imageVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <img
                        src="https://shthemes.net/demosd/thames/wp-content/uploads/2024/08/slider-img.jpg"
                        className="h-full w-full object-cover"
                        alt="Banner"
                    />

                    {/* Social media icons overlaid on the right side of image */}
                    <motion.div
                        className="absolute top-90 right-8 flex flex-col space-y-2"
                        variants={socialVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <a href="#" className="text-white w-15 h-15 rounded-md flex items-center justify-center transition-all duration-300 hover:bg-lime-500">
                            <FaFacebookF />
                        </a>
                        <a href="#" className="text-white w-15 h-15 rounded-md flex items-center justify-center transition-all duration-300 hover:bg-lime-500">
                            <Twitter size={20} />
                        </a>
                        <a href="#" className="text-white w-15 h-15 rounded-md flex items-center justify-center transition-all duration-300 hover:bg-lime-500">
                            <FaLinkedinIn />
                        </a>
                        <a href="#" className="text-white w-15 h-15 rounded-md flex items-center justify-center transition-all duration-300 hover:bg-lime-500">
                            <Youtube size={20} />
                        </a>
                    </motion.div>
                </motion.div>

                {/* Text content on the left */}
                <motion.div
                    className="w-full lg:w-1/2 text-center lg:text-left px-4 sm:px-8 lg:pl-16 lg:pr-8 py-8 lg:py-0 flex flex-col justify-center"
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <div className="lg:ml-20 xl:ml-60">
                        <motion.h1
                            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 play-bold leading-none"
                            whileHover={{ scale: 1.05 }}
                        >
                            James
                            <br />
                            Smith
                        </motion.h1>
                        <motion.p
                            className="text-xl md:text-2xl my-5 md:my-10 max-w-lg mx-auto lg:mx-0 opensans"
                            whileHover={{ scale: 1.02 }}
                        >
                            Senior Web Developer and designer from heart of New York
                        </motion.p>
                        <div>
                            <motion.button
                                className="btn px-6 md:px-10 bg-lime-500 hover:bg-lime-600 text-white btn-xl play-bold py-2 md:py-3 rounded-md text-lg md:text-xl"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                Say Hello
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Banner;