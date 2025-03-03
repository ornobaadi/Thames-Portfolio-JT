import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    
    // Add scroll event listener
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };
        
        window.addEventListener('scroll', handleScroll);
        
        // Clean up event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);
    
    return (
        <div className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : ''}`}>
            <div className="max-w-[1540px] mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <a href="/" className="flex items-center">
                        <img src="/logo.png" alt="Thames" className="h-10" />
                    </a>
                    
                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex space-x-8 play-bold">
                        <a href="#" className={`font-medium text-xl hover:text-lime-600 transition-colors ${scrolled ? 'text-black' : 'text-white'}`}>Home</a>
                        <a href="#" className={`font-medium text-xl hover:text-lime-600 transition-colors ${scrolled ? 'text-black' : 'text-white'}`}>About</a>
                        <a href="#" className={`font-medium text-xl hover:text-lime-600 transition-colors ${scrolled ? 'text-black' : 'text-white'}`}>Works</a>
                        <a href="#" className={`font-medium text-xl hover:text-lime-600 transition-colors ${scrolled ? 'text-black' : 'text-white'}`}>Service</a>
                        <a href="#" className={`font-medium text-xl hover:text-lime-600 transition-colors ${scrolled ? 'text-black' : 'text-white'}`}>Contact</a>
                        <a href="#" className={`font-medium text-xl hover:text-lime-600 transition-colors ${scrolled ? 'text-black' : 'text-white'}`}>Blog</a>
                    </div>
                    
                    {/* Mobile menu button */}
                    <div className="lg:hidden">
                        <button className={`transition-colors ${scrolled ? 'text-gray-800' : 'text-white'}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;