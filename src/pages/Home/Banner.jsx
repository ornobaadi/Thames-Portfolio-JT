import React from 'react';
import { Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const Banner = () => {
    return (
        <div id='home' className="w-full h-screen relative flex items-center">
            <div className="w-full flex flex-col-reverse lg:flex-row-reverse items-center">
                {/* Image on the right */}
                <div className="w-full h-[50vh] lg:h-screen lg:w-1/2 relative overflow-hidden">
                    <img
                        src="https://shthemes.net/demosd/thames/wp-content/uploads/2024/08/slider-img.jpg"
                        className="h-full w-full object-cover"
                        alt="Banner"
                    />
                    
                    {/* Social media icons overlaid on the right side of image */}
                    <div className="absolute top-90 right-8 flex flex-col space-y-2">
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
                    </div>
                </div>

                {/* Text content on the left */}
                <div className="w-full lg:w-1/2 text-center lg:text-left px-4 sm:px-8 lg:pl-16 lg:pr-8 py-8 lg:py-0 flex flex-col justify-center">
                    <div className="lg:ml-20 xl:ml-60">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 play-bold leading-none">
                            James
                            <br />
                            Smith
                        </h1>
                        <p className="text-xl md:text-2xl my-5 md:my-10 max-w-lg mx-auto lg:mx-0 opensans">
                            Senior Web Developer and designer from heart of New York
                        </p>
                        <div>
                            <button className="btn px-6 md:px-10 bg-lime-500 hover:bg-lime-600 text-white btn-xl play-bold py-2 md:py-3 rounded-md text-lg md:text-xl">
                                Say Hello
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;