import { Check, X } from "lucide-react";
import React from "react";

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

    return (
        <div className="py-20">
            <div className="text-center play-bold">
                <h3 className="text-lime-600 text-2xl md:text-3xl font-semibold">
                    Let’s Start Working
                </h3>
                <h1 className="text-6xl lg:text-7xl font-bold text-gray-800 mt-3">
                    Pricing Plans
                </h1>
            </div>

            <div className="flex flex-wrap justify-center gap-10 mt-12">
                {pricingPlans.map((plan, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-lg rounded-2xl p-12 w-96 transition-transform transform hover:-translate-y-3 hover:shadow-2xl duration-300"
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
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Pricing;
