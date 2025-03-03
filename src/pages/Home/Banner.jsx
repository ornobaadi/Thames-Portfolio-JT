import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-screen flex items-center">
            <div className="container mx-auto flex flex-col lg:flex-row-reverse items-center justify-between px-4">
                {/* Image on the right */}
                <img
                    src="https://shthemes.net/demosd/thames/wp-content/uploads/2024/08/slider-img.jpg"
                    className="max-h-[1200px] rounded-lg shadow-2xl lg:w-1/2"
                    alt="Banner"
                />

                {/* Text content on the left */}
                <div className="text-center lg:text-left lg:w-1/2 mt-8 lg:mt-0">
                    <h1 className="text-6xl lg:text-[180px] font-bold mb-4 play-bold">
                        James
                        <br />
                        Smith
                    </h1>
                    <p className="text-2xl my-10 opensans">
                        Senior Web Developer and designer from heart of New York
                    </p>
                    <button className="btn px-10 bg-lime-600 text-white btn-xl play-bold ">
                        Say Hello
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;