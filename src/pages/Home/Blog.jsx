import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { FaCommentAlt, FaFolder, FaUserAlt } from 'react-icons/fa';

const BlogCard = ({ image, category, author, comments, title }) => {
    return (
        <motion.div
            className="card bg-base-100 shadow-xl overflow-hidden h-full"
            whileHover={{ scale: 1.03, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)" }}
            transition={{ duration: 0.3 }}
        >
            <figure className="h-64 overflow-hidden">
                <img src={image} alt={title} className="w-full h-full object-cover" />
            </figure>
            <div className="card-body p-6">
                <div className="flex flex-wrap gap-4 mb-2 text-sm">
                    <div className="flex items-center text-lime-500">
                        <span className="mr-1">
                            <FaFolder />
                        </span>
                        <Link className="hover:underline">{category}</Link>
                    </div>
                    <div className="flex items-center text-gray-500">
                        <span className="mr-1">
                            <FaUserAlt />
                        </span>
                        <Link className="hover:underline">{author}</Link>
                    </div>
                    <div className="flex items-center text-gray-500">
                        <span className="mr-1">
                            <FaCommentAlt />
                        </span>
                        <span>{comments} Comment{comments !== 1 ? 's' : ''}</span>
                    </div>
                </div>
                <h2 className="card-title text-xl font-bold mb-2">
                    <Link className="hover:text-lime-500 transition-colors">{title}</Link>
                </h2>
            </div>
        </motion.div>
    );
};

const Blog = () => {
    const allBlogPosts = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
            category: "Web Design",
            author: "Admin",
            comments: 1,
            title: "The world is not enough to live your life"
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
            category: "Web Design",
            author: "Admin",
            comments: 1,
            title: "So close no matter how far could be much more"
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
            category: "Web Design",
            author: "Admin",
            comments: 1,
            title: "Kobita tumi sopno charini hoye khobor nio na"
        },
        {
            id: 4,
            image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
            category: "Web Design",
            author: "Admin",
            comments: 1,
            title: "The world is not enough to live your life"
        },
        {
            id: 5,
            image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
            category: "Web Design",
            author: "Admin",
            comments: 1,
            title: "So close no matter how far could be much more"
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to get the visible posts based on the current index
    const getVisiblePosts = () => {
        const posts = [];
        for (let i = 0; i < 3; i++) {
            const index = (currentIndex + i) % allBlogPosts.length;
            posts.push(allBlogPosts[index]);
        }
        return posts;
    };

    // Handle next slide
    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % allBlogPosts.length);
    };

    // Handle previous slide
    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? allBlogPosts.length - 1 : prev - 1));
    };

    return (
        <section id='blog' className="py-16 px-4 md:px-8 max-w-[1520px] mx-auto">
            {/* Header */}
            <div className="mb-12 flex justify-between items-center">
                <div className='play-bold'>
                    <h4 className="text-lime-600 text-xl md:text-2xl mb-2">Get Updates</h4>
                    <h2 className="text-4xl md:text-7xl font-bold text-gray-800">Recent Blog</h2>
                </div>
                <div className="flex gap-2">
                    <button
                        className="btn btn-circle btn-outline"
                        onClick={handlePrev}
                    >
                        <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button
                        className="btn btn-circle btn-outline"
                        onClick={handleNext}
                    >
                        <ChevronRight className="h-6 w-6" />
                    </button>
                </div>
            </div>

            {/* Blog Grid with Smooth Transition */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-10 relative">
                <AnimatePresence mode="wait">
                    {getVisiblePosts().map((post, index) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, x: index === 0 ? -100 : index === 2 ? 100 : 0 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: index === 0 ? -100 : index === 2 ? 100 : 0 }}
                            transition={{ duration: 0.5 }}
                            className="w-full"
                        >
                            <BlogCard
                                image={post.image}
                                category={post.category}
                                author={post.author}
                                comments={post.comments}
                                title={post.title}
                            />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Blog;