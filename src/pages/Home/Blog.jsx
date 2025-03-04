import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Folder } from 'lucide-react';
import { FaCommentAlt, FaFolder, FaUserAlt } from 'react-icons/fa';

const BlogCard = ({ image, category, author, comments, title }) => {
    return (
        <div className="card bg-base-100 shadow-xl overflow-hidden h-full">
            <figure className="h-64 overflow-hidden">
                <img src={image} alt={title} className="w-full h-full object-cover" />
            </figure>
            <div className="card-body p-6">
                <div className="flex flex-wrap gap-4 mb-2 text-sm">
                    <div className="flex items-center text-lime-500">
                        <span className="mr-1">
                        <FaFolder />
                        </span>
                        <Link className="hover:underline">
                            {category}
                        </Link>
                    </div>
                    <div className="flex items-center text-gray-500">
                        <span className="mr-1">
                        <FaUserAlt />
                        </span>
                        <Link className="hover:underline">
                            {author}
                        </Link>
                    </div>
                    <div className="flex items-center text-gray-500">
                        <span className="mr-1">
                        <FaCommentAlt />
                        </span>
                        <span>{comments} Comment{comments !== 1 ? 's' : ''}</span>
                    </div>
                </div>
                <h2 className="card-title text-xl font-bold mb-2">
                    <Link className="hover:text-lime-500 transition-colors">
                        {title}
                    </Link>
                </h2>
            </div>
        </div>
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

    // State for animation
    const [isAnimating, setIsAnimating] = useState(false);
    const [slideDirection, setSlideDirection] = useState('right');
    const [currentSlide, setCurrentSlide] = useState(0);
    const [visiblePosts, setVisiblePosts] = useState([]);
    
    // Number of cards to show at once
    const cardsPerPage = 3;

    // Initialize visible posts
    useEffect(() => {
        updateVisiblePosts(currentSlide);
    }, []);

    // Update visible posts based on current slide index
    const updateVisiblePosts = (startIndex) => {
        const posts = [];
        for (let i = 0; i < cardsPerPage; i++) {
            // Calculate index with wrapping (for infinite scroll)
            const index = (startIndex + i) % allBlogPosts.length;
            posts.push(allBlogPosts[index]);
        }
        setVisiblePosts(posts);
    };

    // Handle next slide
    const handleNext = () => {
        if (isAnimating) return;
        
        setIsAnimating(true);
        setSlideDirection('right');
        
        setTimeout(() => {
            const nextSlide = (currentSlide + 1) % allBlogPosts.length;
            setCurrentSlide(nextSlide);
            updateVisiblePosts(nextSlide);
            setIsAnimating(false);
        }, 300);
    };

    // Handle previous slide
    const handlePrev = () => {
        if (isAnimating) return;
        
        setIsAnimating(true);
        setSlideDirection('left');
        
        setTimeout(() => {
            const prevSlide = currentSlide === 0 ? allBlogPosts.length - 1 : currentSlide - 1;
            setCurrentSlide(prevSlide);
            updateVisiblePosts(prevSlide);
            setIsAnimating(false);
        }, 300);
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
                        disabled={isAnimating}
                    >
                        <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button 
                        className="btn btn-circle btn-outline"
                        onClick={handleNext}
                        disabled={isAnimating}
                    >
                        <ChevronRight className="h-6 w-6" />
                    </button>
                </div>
            </div>

            {/* Blog Grid with Animation */}
            <div className="relative overflow-hidden">
                <div 
                    className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10 transition-transform duration-300 ${
                        isAnimating 
                            ? slideDirection === 'right' 
                                ? 'translate-x-[-8px] opacity-80' 
                                : 'translate-x-[8px] opacity-80'
                            : 'translate-x-0 opacity-100'
                    }`}
                >
                    {visiblePosts.map((post, index) => (
                        <div key={`${post.id}-${index}`} className="h-full play">
                            <BlogCard
                                image={post.image}
                                category={post.category}
                                author={post.author}
                                comments={post.comments}
                                title={post.title}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;