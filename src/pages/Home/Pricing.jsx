import { Check, X } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const Pricing = () => {
    const pricingPlans = [
        {
            title: "Hourly",
            price: 99,
            features: [
                "One-time contract",
                "Flexible Contract",
                "Source Files",
                "Support",
                "Updates",
            ],
            available: [true, true, true, false, false],
        },
        {
            title: "Project Basis",
            price: 69,
            features: [
                "One-time contract",
                "Flexible Contract",
                "Source Files",
                "Support",
                "Updates",
            ],
            available: [true, true, true, true, false],
        },
        {
            title: "Monthly",
            price: 39,
            features: [
                "One-time contract",
                "Flexible Contract",
                "Source Files",
                "Support",
                "Updates",
            ],
            available: [true, true, true, true, true],
        },
    ];

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
        hover: { scale: 1.05, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)" },
    };

    return (
        <div className="py-20">
            <div className="text-center play-bold">
                <motion.h3
                    className="text-lime-600 text-2xl md:text-3xl font-semibold"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    Let’s Start Working
                </motion.h3>
                <motion.h1
                    className="text-6xl lg:text-7xl font-bold text-gray-800 mt-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    Pricing Plans
                </motion.h1>
            </div>

            <motion.div
                className="flex flex-wrap justify-center gap-10 mt-12"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {pricingPlans.map((plan, index) => (
                    <motion.div
                        key={index}
                        className="bg-white shadow-lg rounded-2xl p-12 w-96 transition-transform transform hover:-translate-y-3 hover:shadow-2xl duration-300"
                        variants={itemVariants}
                        whileHover="hover"
                    >
                        <h2 className="text-2xl font-semibold text-gray-800 play-bold">{plan.title}</h2>
                        <hr className="my-4 border-gray-300" />
                        <h3 className="text-5xl font-bold text-lime-500 play-bold">
                            ${plan.price} 
                            <span className="text-lg text-gray-600"> / Per Hour</span>
                        </h3>

                        <ul className="mt-6 space-y-3 text-lg text-gray-600">
                            {plan.features.map((feature, i) => (
                                <li key={i} className="flex items-center">
                                    {plan.available[i] ? (
                                        <span className="text-lime-500 mr-3">
                                            <Check size={24} />
                                        </span>
                                    ) : (
                                        <span className="text-gray-400 mr-3">
                                            <X size={24} />
                                        </span>
                                    )}
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <button className="play-bold mt-8 py-8 w-full btn bg-lime-500 text-white text-lg font-semibold rounded-lg hover:bg-lime-600 transition-all duration-300">
                            Start Now
                        </button>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Pricing;