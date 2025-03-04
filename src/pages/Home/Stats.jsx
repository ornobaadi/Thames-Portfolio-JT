import React from 'react';
import { motion } from 'framer-motion';

const Stats = () => {
    const statsData = [
        { number: '12', label: 'Years of Experience', suffix: '' },
        { number: '200', label: 'Worldwide Clients', suffix: '+' },
        { number: '3K', label: 'Total Projects', suffix: '+' },
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

    return (
        <section className="w-full bg-emerald-900 py-24">
            <motion.div
                className="container mx-auto px-4 play-bold"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }} // Animate only once when in view
            >
                <div className="flex flex-col md:flex-row justify-around items-center space-y-6 md:space-y-0 md:space-x-6 lg:space-x-12">
                    {statsData.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="flex items-center"
                            variants={itemVariants}
                        >
                            <div className="flex items-center">
                                <div className="flex">
                                    <span className="text-lime-400 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
                                        {stat.number}
                                    </span>
                                    <span className="text-lime-400 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                                        {stat.suffix}
                                    </span>
                                </div>
                                <p className="text-white text-sm sm:text-lg md:text-xl lg:text-2xl ml-3 mt-1 max-w-40">
                                    {stat.label}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Stats;