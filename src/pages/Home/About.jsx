import React from 'react';

const About = () => {
    return (
        <div id='about' className="py-20">
            <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
                {/* Left Side: Image */}
                <div className="lg:w-1/2 mb-8 lg:mb-0">
                    <img
                        src="https://shthemes.net/demosd/thames/wp-content/uploads/2024/08/about-img-2.jpg" // Placeholder image URL
                        alt="About Me"
                        className="rounded-lg shadow-2xl w-2/3"
                    />
                </div>

                {/* Right Side: Text Content */}
                <div className="lg:w-1/2 lg:pl-12">
                    <h2 className="text-xl lg:text-2xl text-lime-600 font-bold mb-6 play-bold">
                        About Me
                    </h2>
                    <h3 className="text-2xl lg:text-7xl mb-4 play-bold">
                        I Develop System <br />
                        that Works
                    </h3>
                    <p className="text-lg mb-6">
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        <br /><br />
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.
                    </p>

                    {/* Personal Details */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <p className="text-lg font-bold">Name</p>
                            <p className="text-xl">James Smith</p>
                        </div>
                        <div>
                            <p className="text-lg font-bold">Age</p>
                            <p className="text-xl">29 Years</p>
                        </div>
                        <div>
                            <p className="text-lg font-bold">Role</p>
                            <p className="text-xl">System Engineer</p>
                        </div>
                        <div>
                            <p className="text-lg font-bold">Education</p>
                            <p className="text-xl">PhD in Physics</p>
                        </div>
                    </div>
                    <img className='my-5' src="https://shthemes.net/demosd/thames/wp-content/uploads/2024/08/signature-3.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;