import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';
import { Link } from 'react-router-dom';

const Footer = () => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    const hoverVariants = {
        hover: { scale: 1.1, transition: { duration: 0.3 } },
    };

    return (
        <motion.div
            className="bg-white text-gray-800 py-12 border-t border-gray-200"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Logo and Copyright Section */}
                    <motion.div className="space-y-4" variants={itemVariants}>
                        <img src="/logo.png" alt="Logo" className="h-12" />
                        <p className="text-gray-600">
                            All Rights Reserved © {new Date().getFullYear()}{' '}
                            <a
                                href="https://github.com/ornobaadi"
                                className="font-bold hover:text-lime-500 transition-colors"
                            >
                                Ornob Aadi
                            </a>
                        </p>
                    </motion.div>

                    {/* Newsletter Section */}
                    <motion.div className="space-y-4" variants={itemVariants}>
                        <h6 className="text-lg font-semibold text-gray-900">Newsletter</h6>
                        <form>
                            <div className="flex flex-col sm:flex-row gap-2">
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="w-full sm:w-64 px-4 py-2 rounded-lg bg-gray-100 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-500"
                                />
                                <motion.button
                                    type="submit"
                                    className="px-6 py-2 bg-lime-500 text-white rounded-lg hover:bg-lime-600 transition-colors"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Subscribe
                                </motion.button>
                            </div>
                        </form>
                    </motion.div>

                    {/* Social Media Section */}
                    <motion.div className="space-y-4" variants={itemVariants}>
                        <h6 className="text-lg font-semibold text-gray-900">Follow Us</h6>
                        <div className="flex space-x-4">
                            {[
                                { icon: <FaFacebookF size={20} />, color: "bg-blue-600 hover:bg-blue-700", link: "https://www.facebook.com/" },
                                { icon: <FaTwitter size={20} />, color: "bg-sky-500 hover:bg-sky-600", link: "https://www.x.com/" },
                                { icon: <FaLinkedinIn size={20} />, color: "bg-blue-400 hover:bg-blue-500", link: "https://www.linkedin.com/" },
                                { icon: <GrInstagram size={20} />, color: "bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 hover:opacity-80", link: "https://www.instagram.com/" },
                            ].map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.link}
                                    className={`flex items-center justify-center rounded-full w-10 h-10 text-white transition-colors ${social.color}`}
                                    variants={hoverVariants}
                                    whileHover="hover"
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default Footer;