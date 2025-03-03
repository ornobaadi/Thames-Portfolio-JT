import React from 'react';

const Stats = () => {
    const statsData = [
        { number: '12', label: 'Years of Experience', suffix: '' },
        { number: '200', label: 'Worldwide Clients', suffix: '+' },
        { number: '3K', label: 'Total Projects', suffix: '+' }
    ];

    return (
        <section className="w-full bg-emerald-900 py-24">
            <div className="container mx-auto px-4 play-bold">
                <div className="flex flex-col md:flex-row justify-around items-center space-y-10 md:space-y-0 md:space-x-16 lg:space-x-32">
                    {statsData.map((stat, index) => (
                        <div key={index} className="flex items-center">
                            <div className="flex items-center">
                                <div className="flex">
                                    <span className="text-lime-400 text-6xl md:text-7xl lg:text-8xl font-bold">
                                        {stat.number}
                                    </span>
                                    <span className="text-lime-400 text-4xl md:text-5xl lg:text-6xl font-bold">
                                        {stat.suffix}
                                    </span>
                                </div>
                                <p className="text-white text-lg md:text-4xl ml-3 mt-1 max-w-40">
                                    {stat.label}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;