import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Testimonials = () => {
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    const testimonials = [
        {
            id: 1,
            quote: "Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit volup tatem gotiraz bole ami ke",
            author: "Paul Harrison",
            company: "eThemeStudio",
            avatar: "https://randomuser.me/api/portraits/men/41.jpg"
        },
        {
            id: 2,
            quote: "Working with this team has transformed our business operations completely. Their attention to detail and commitment to excellence is unmatched in the industry.",
            author: "Sarah Johnson",
            company: "Innovate Tech",
            avatar: "https://randomuser.me/api/portraits/women/32.jpg"
        },
        {
            id: 3,
            quote: "The product exceeded our expectations in every way. User-friendly, powerful, and backed by excellent customer support that's always ready to help.",
            author: "Michael Chen",
            company: "Global Solutions",
            avatar: "https://randomuser.me/api/portraits/men/22.jpg"
        }
    ];

    // Auto rotation of testimonials
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [testimonials.length]);

    // Partner logos
    const partners = [
        { name: "BROG", logo: "https://shthemes.net/demosd/thames/wp-content/uploads/2024/08/brand-hover-img1.png" },
        { name: "Wagner", logo: "https://shthemes.net/demosd/thames/wp-content/uploads/2024/08/brand-hover-img2.png" },
        { name: "Vonica", logo: "https://shthemes.net/demosd/thames/wp-content/uploads/2024/08/brand-hover-img3.png" },
        { name: "Foxer", logo: "https://shthemes.net/demosd/thames/wp-content/uploads/2024/08/brand-hover-img4.png" },
        { name: "Katerio", logo: "https://shthemes.net/demosd/thames/wp-content/uploads/2024/08/brand-hover-img5.png" }
    ];

    // Animation variants
    const testimonialVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
    };

    const partnerVariants = {
        hover: { scale: 1.1, transition: { duration: 0.3 } },
    };

    return (
        <div className="bg-gray-50 py-16">
            <div className="container mx-auto px-4">
                {/* Testimonials Section */}
                <div className="flex flex-col lg:flex-row items-center gap-8 mb-16">
                    {/* Left Side - Testimonial Text */}
                    <motion.div
                        className="w-full lg:w-1/2"
                        variants={testimonialVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <div className="text-lime-600 text-xl md:text-2xl font-medium mb-2 play-bold">Testimonials</div>
                        <h2 className="text-4xl md:text-7xl font-bold text-gray-800 mb-8 play-bold">What People Say</h2>

                        <div className="carousel w-full">
                            {testimonials.map((testimonial, index) => (
                                <div key={testimonial.id} className={`carousel-item relative w-full ${index === activeTestimonial ? 'block' : 'hidden'}`}>
                                    <div className="mb-8">
                                        <div className="text-lime-500 text-4xl">"</div>
                                        <p className="text-2xl text-gray-600 italic mb-6">{testimonial.quote}</p>
                                        <div className="flex items-center">
                                            <img
                                                src={testimonial.avatar}
                                                alt={testimonial.author}
                                                className="w-12 h-12 rounded-full mr-4 object-cover"
                                            />
                                            <div>
                                                <h4 className="play-bold font-bold text-gray-800">{testimonial.author},</h4>
                                                <p className="text-gray-500">{testimonial.company}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Carousel Navigation */}
                        <div className="flex gap-2 mt-6">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    className={`btn btn-circle btn-xs ${index === activeTestimonial ? 'bg-lime-500' : 'btn-outline'}`}
                                    onClick={() => setActiveTestimonial(index)}
                                >
                                    <span className="sr-only">Testimonial {index + 1}</span>
                                </button>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Side - Testimonial Image */}
                    <motion.div
                        className="w-full lg:w-1/2"
                        variants={imageVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <div className="relative">
                            <img
                                src="https://shthemes.net/demosd/thames/wp-content/uploads/2024/08/testimonials-img-1.jpg"
                                alt="Our happy team"
                                className="w-full rounded-lg shadow-lg object-cover"
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Partners Section */}
                <div className="py-20 border-t border-gray-200">
                    <div className="flex flex-wrap justify-center lg:justify-between items-center gap-8 md:gap-12">
                        {partners.map((partner) => (
                            <motion.div
                                key={partner.name}
                                variants={partnerVariants}
                                whileHover="hover"
                            >
                                <Link to="#" className="grayscale-100 opacity-70 hover:opacity-90 hover:grayscale-0 transition-opacity">
                                    <img
                                        src={partner.logo}
                                        alt={partner.name}
                                        className="h-8 md:h-10"
                                    />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;