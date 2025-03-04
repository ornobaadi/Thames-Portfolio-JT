import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 80, // Adjust for navbar height
                behavior: "smooth",
            });
            setIsMobileMenuOpen(false); // Close mobile menu after clicking a link
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);

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
                        <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection("home"); }} className={`font-medium text-xl hover:text-lime-600 transition-colors ${scrolled ? 'text-black' : 'text-white'}`}>Home</a>
                        <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection("about"); }} className={`font-medium text-xl hover:text-lime-600 transition-colors ${scrolled ? 'text-black' : 'text-white'}`}>About</a>
                        <a href="#works" onClick={(e) => { e.preventDefault(); scrollToSection("works"); }} className={`font-medium text-xl hover:text-lime-600 transition-colors ${scrolled ? 'text-black' : 'text-white'}`}>Works</a>
                        <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection("service"); }} className={`font-medium text-xl hover:text-lime-600 transition-colors ${scrolled ? 'text-black' : 'text-white'}`}>Service</a>
                        <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }} className={`font-medium text-xl hover:text-lime-600 transition-colors ${scrolled ? 'text-black' : 'text-white'}`}>Contact</a>
                        <a href="#blog" onClick={(e) => { e.preventDefault(); scrollToSection("blog"); }} className={`font-medium text-xl hover:text-lime-600 transition-colors ${scrolled ? 'text-black' : 'text-white'}`}>Blog</a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="lg:hidden">
                        <button 
                            className={`transition-colors ${scrolled ? 'text-gray-800' : 'text-white'}`}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden mt-4">
                        <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection("home"); }} className={`block font-medium text-xl hover:text-lime-600 transition-colors ${scrolled ? 'text-black' : 'text-white'} py-2`}>Home</a>
                        <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection("about"); }} className={`block font-medium text-xl hover:text-lime-600 transition-colors ${scrolled ? 'text-black' : 'text-white'} py-2`}>About</a>
                        <a href="#works" onClick={(e) => { e.preventDefault(); scrollToSection("works"); }} className={`block font-medium text-xl hover:text-lime-600 transition-colors ${scrolled ? 'text-black' : 'text-white'} py-2`}>Works</a>
                        <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection("service"); }} className={`block font-medium text-xl hover:text-lime-600 transition-colors ${scrolled ? 'text-black' : 'text-white'} py-2`}>Service</a>
                        <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }} className={`block font-medium text-xl hover:text-lime-600 transition-colors ${scrolled ? 'text-black' : 'text-white'} py-2`}>Contact</a>
                        <a href="#blog" onClick={(e) => { e.preventDefault(); scrollToSection("blog"); }} className={`block font-medium text-xl hover:text-lime-600 transition-colors ${scrolled ? 'text-black' : 'text-white'} py-2`}>Blog</a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;