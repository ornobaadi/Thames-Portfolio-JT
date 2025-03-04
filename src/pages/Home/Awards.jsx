import React from 'react';
import { motion } from 'framer-motion';

const Awards = () => {
    const awards = [
        {
            logo: "https://shthemes.net/demosd/thames/wp-content/uploads/2024/08/award-logo1.png",
            company: "LILY'S FLOWERS",
            award: "Best Developer Award",
            year: "2022",
            organization: "Developer Association",
            location: "New York, USA",
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore."
        },
        {
            logo: "https://shthemes.net/demosd/thames/wp-content/uploads/2024/08/award-logo2.png",
            company: "DONE COMPANY",
            award: "Developer of the Year",
            year: "2021",
            organization: "Dev Internatioal",
            location: "London, England",
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore."
        },
        {
            logo: "https://shthemes.net/demosd/thames/wp-content/uploads/2024/08/award-logo3.png",
            company: "avant garde",
            award: "Fastest Coder",
            year: "2019",
            organization: "Amazing Programmer",
            location: "Dhaka, Bangladesh",
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore."
        }
    ];

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
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
    };

    return (
        <section className="bg-green-50/50 py-16 md:py-32 px-4 md:px-8 lg:px-16">
            <div className="container mx-auto">
                {/* Section header */}
                <motion.div
                    className="text-center mb-8 md:mb-16 play-bold"
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <p className="text-lime-600 mb-2 text-xl lg:text-2xl">Success Stories</p>
                    <h2 className="text-4xl md:text-7xl font-bold text-gray-800">Awards & Achievements</h2>
                </motion.div>

                {/* Awards list */}
                <motion.div
                    className="space-y-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                >
                    {awards.map((award, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                        >
                            {/* Award item */}
                            <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-20 py-8">
                                {/* Logo */}
                                <div className="w-40 h-24 flex-shrink-0">
                                    <img
                                        src={award.logo}
                                        alt={`${award.company} logo`}
                                        className="w-full h-full object-contain"
                                    />
                                </div>

                                {/* Award details */}
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-gray-800 play-bold">{award.award}</h3>
                                    <p className="text-lg text-gray-600 mt-1">{award.year}</p>
                                </div>

                                {/* Organization */}
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-gray-800 play-bold">{award.organization}</h3>
                                    <p className="text-lg text-gray-600 mt-1">{award.location}</p>
                                </div>

                                {/* Description */}
                                <div className="flex-1">
                                    <p className="text-xl text-gray-600">{award.description}</p>
                                </div>
                            </div>

                            {/* Divider - except after last item */}
                            {index < awards.length - 1 && (
                                <hr className="border-gray-300" />
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Awards;