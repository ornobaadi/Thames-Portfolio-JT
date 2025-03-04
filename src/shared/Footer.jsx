import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="bg-white text-gray-800 py-12 border-t border-gray-200">
            <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Logo and Copyright Section */}
                    <div className="space-y-4">
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
                    </div>

                    {/* Newsletter Section */}
                    <div className="space-y-4">
                        <h6 className="text-lg font-semibold text-gray-900">Newsletter</h6>
                        <form>
                            <div className="flex flex-col sm:flex-row gap-2">
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="w-full sm:w-64 px-4 py-2 rounded-lg bg-gray-100 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-500"
                                />
                                <button
                                    type="submit"
                                    className="px-6 py-2 bg-lime-500 text-white rounded-lg hover:bg-lime-600 transition-colors"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Social Media Section */}
                    <div className="space-y-4">
                        <h6 className="text-lg font-semibold text-gray-900">Follow Us</h6>
                        <div className="flex space-x-4">
                            <Link
                                to="https://www.facebook.com/"
                                className="flex items-center justify-center rounded-full w-10 h-10 bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                            >
                                <FaFacebookF size={20} />
                            </Link>
                            <Link
                                to="https://www.x.com/"
                                className="flex items-center justify-center rounded-full w-10 h-10 bg-sky-500 text-white hover:bg-sky-600 transition-colors"
                            >
                                <FaTwitter size={20} />
                            </Link>
                            <Link
                                to="https://www.linkedin.com/"
                                className="flex items-center justify-center rounded-full w-10 h-10 bg-blue-400 text-white hover:bg-blue-500 transition-colors"
                            >
                                <FaLinkedinIn size={20} />
                            </Link>
                            <Link
                                to="https://www.instagram.com/"
                                className="flex items-center justify-center rounded-full w-10 h-10 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 text-white hover:opacity-80 transition-opacity"
                            >
                                <GrInstagram size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;