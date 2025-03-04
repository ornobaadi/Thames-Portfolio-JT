import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
    { id: 2, title: "Light Bulb Idea", category: "Development", image: "https://shthemes.net/demosd/thames/wp-content/uploads/2024/08/portfolio-img2.jpg", span: "md:col-span-1 md:row-span-2" },
    { id: 1, title: "Pie Chart 3D", category: "Web Design", image: "https://shthemes.net/demosd/thames/wp-content/uploads/2024/08/portfolio-img1.jpg", span: "md:col-span-1 md:row-span-1" },
    { id: 3, title: "Chat Icon 3D", category: "Web Design", image: "https://shthemes.net/demosd/thames/wp-content/uploads/2024/08/portfolio-img3.jpg", span: "md:col-span-1 md:row-span-1" },
    { id: 4, title: "Balloon Gift", category: "Photography", image: "https://shthemes.net/demosd/thames/wp-content/uploads/2024/08/portfolio-img4.jpg", span: "md:col-span-1 md:row-span-2" },
    { id: 5, title: "Retro Record Player", category: "Photography", image: "https://shthemes.net/demosd/thames/wp-content/uploads/2024/08/portfolio-img5.jpg", span: "md:col-span-1 md:row-span-1" },
    { id: 6, title: "Clock on Chair", category: "Photography", image: "https://shthemes.net/demosd/thames/wp-content/uploads/2024/08/portfolio-img6.jpg", span: "md:col-span-1 md:row-span-1" },
    { id: 7, title: "Website Layout Designer", category: "Photography", image: "https://img.freepik.com/premium-vector/online-applications-concept-webpage-image-chart-with-mouse-arrow-realistics-web-elements_87561-625.jpg", span: "md:col-span-1 md:row-span-1" },
];

const categories = ["All", "Web Design", "Development", "Photography"];

const Portfolio = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredProjects = selectedCategory === "All"
        ? projects
        : projects.filter((project) => project.category === selectedCategory);

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
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
        <section id="works" className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-100 max-w-[1520px] mx-auto">
            <div className="text-center play-bold px-4">
                <motion.h3
                    className="text-lime-600 text-lg md:text-xl font-semibold"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    Portfolio
                </motion.h3>
                <motion.h1
                    className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 mt-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    My Works
                </motion.h1>
            </div>

            {/* Filtering Options */}
            <motion.div
                className="flex justify-center gap-2 md:gap-4 mt-6 md:mt-8 play-bold px-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
            >
                {categories.map((category) => (
                    <motion.button
                        key={category}
                        className={`px-3 md:px-5 py-1 md:py-2 rounded-full text-xs md:text-sm font-semibold transition ${selectedCategory === category ? "bg-lime-600 text-white" : "bg-gray-200 text-gray-800 hover:bg-lime-500 hover:text-white"
                            }`}
                        onClick={() => setSelectedCategory(category)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        {category}
                    </motion.button>
                ))}
            </motion.div>

            {/* Bento Grid */}
            <motion.div
                className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 px-4 md:px-6 mt-8 md:mt-12 auto-rows-[200px] md:auto-rows-[400px] play-bold"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {filteredProjects.map((project) => (
                    <motion.div
                        key={project.id}
                        className={`relative group rounded-xl overflow-hidden shadow-lg ${project.span}`}
                        variants={itemVariants}
                        whileHover="hover"
                    >
                        {/* Project Image */}
                        <motion.img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                            variants={hoverVariants}
                        />
                        {/* Hover Overlay */}
                        <motion.div
                            className="absolute inset-0 bg-lime-500/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-center items-center text-white p-3 md:p-6"
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                        >
                            <h4 className="text-base md:text-xl font-semibold text-center">{project.title}</h4>
                            <p className="text-xs md:text-sm uppercase mt-1">{project.category}</p>
                            <a href="#" className="mt-2 md:mt-3 bg-white/20 p-1.5 md:p-2 rounded-full hover:bg-white/30 transition">
                                <ExternalLink size={16} md:size={24} />
                            </a>
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Portfolio;