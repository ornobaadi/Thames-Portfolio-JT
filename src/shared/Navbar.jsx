import React from 'react';

const Navbar = () => {
    const links = <>
        <li><a>Home</a></li>
        <li><a>About</a></li>
        <li><a>Works</a></li>
        <li><a>Service</a></li>
        <li><a>Contact</a></li>
        <li><a>Blog</a></li>
    </>

    return (
        <div className="navbar bg-base-100 play max-w-[1540px] mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">
                    <img src="/logo.png" alt="" />
                </a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg">
                    {links}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;