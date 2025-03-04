import React from 'react';
import { motion } from 'framer-motion';
import { MonitorIcon, CpuIcon, Code2Icon, ShieldIcon } from 'lucide-react';

const Services = () => {
    const services = [
        {
            id: 1,
            title: "Web Development",
            description: "Ludantium totam rem aperia meaququae ab tatis et quasi architecto beatae vit dunt ut labore et dolore magna aliqua.",
            icon: <MonitorIcon className="w-10 h-10 text-lime-500" />
        },
        {
            id: 2,
            title: "Software Development",
            description: "Ludantium totam rem aperia meaququae ab tatis et quasi architecto beatae vit dunt ut labore et dolore magna aliqua.",
            icon: <CpuIcon className="w-10 h-10 text-lime-500" />
        },
        {
            id: 3,
            title: "System Development",
            description: "Ludantium totam rem aperia meaququae ab tatis et quasi architecto beatae vit dunt ut labore et dolore magna aliqua.",
            icon: <Code2Icon className="w-10 h-10 text-lime-500" />
        },
        {
            id: 4,
            title: "Security Analysis",
            description: "Ludantium totam rem aperia meaququae ab tatis et quasi architecto beatae vit dunt ut labore et dolore magna aliqua.",
            icon: <ShieldIcon className="w-10 h-10 text-lime-500" />
        }
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
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    const hoverVariants = {
        hover: { scale: 1.05, transition: { duration: 0.3 } },
    };

    return (
        <div id='service' className="py-16 relative overflow-hidden">
            {/* Background gradient effect */}
            <div className="absolute -left-36 -top-36 w-96 h-96 bg-gradient-to-br from-lime-100 to-teal-100 rounded-full opacity-50 blur-3xl"></div>
            <div className="absolute -right-36 -bottom-36 w-96 h-96 bg-gradient-to-tl from-lime-100 to-sky-100 rounded-full opacity-50 blur-3xl"></div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Title */}
                <motion.div
                    className="text-center mb-16 play-bold"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <p className="text-lime-600 text-xl md:text-2xl mb-2">Service</p>
                    <h2 className="text-4xl md:text-7xl font-bold text-gray-800">What I Do</h2>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {services.map((service) => (
                        <motion.div
                            key={service.id}
                            className="bg-white rounded-lg p-8 flex items-start gap-6 shadow-sm hover:shadow-md transition-shadow"
                            variants={itemVariants}
                            whileHover="hover"
                        >
                            <div className="flex-shrink-0">
                                {service.id === 1 && (
                                    <div className="w-14 h-14 flex items-center justify-center">
                                        <img src="https://shthemes.net/demosd/thames/wp-content/uploads/2024/08/service-icon-1.png" alt="" />
                                    </div>
                                )}
                                {service.id === 2 && (
                                    <div className="w-14 h-14 flex items-center justify-center">
                                        <img src="https://shthemes.net/demosd/thames/wp-content/uploads/2024/08/service-icon-2.png" alt="" />
                                    </div>
                                )}
                                {service.id === 3 && (
                                    <div className="w-14 h-14 flex items-center justify-center">
                                        <img src="https://shthemes.net/demosd/thames/wp-content/uploads/2024/08/service-icon-3.png" alt="" />
                                    </div>
                                )}
                                {service.id === 4 && (
                                    <div className="w-14 h-14 flex items-center justify-center">
                                        <img src="https://shthemes.net/demosd/thames/wp-content/uploads/2024/08/service-icon-4.png" alt="" />
                                    </div>
                                )}
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold text-gray-800 mb-3 play-bold">{service.title}</h3>
                                <p className="text-xl text-gray-600">{service.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Services;