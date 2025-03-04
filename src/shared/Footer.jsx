
import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='max-w-[1520px] mx-auto'>
            <footer className="footer sm:footer-horizontal p-10">
                <aside>
                    <img src="/logo.png" alt="" />
                    <p>
                        All Rights Reserved <span className='font-bold hover:text-lime-500'>
                            <a href="https://github.com/ornobaadi">Ornob Aadi</a>
                        </span> © {new Date().getFullYear()}
                        <br />
                    </p>
                </aside>
                <form>
                    <h6 className="footer-title">Newsletter</h6>
                    <fieldset className="w-80">
                        <div className="join">
                            <input
                                type="text"
                                placeholder="Enter your email address"
                                class="input input-bordered join-item" />
                            <button className="btn bg-lime-500 join-item">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
                <nav>
                    <h6 className="footer-title">Social</h6>
                    <div className="grid grid-flow-col gap-4">
                        <Link to="https://www.facebook.com/" className="flex items-center justify-center rounded-full w-10 h-10 bg-blue-600 text-white">
                            <FaFacebookF size={20} />
                        </Link>
                        <Link to="https://www.x.com/" className="flex items-center justify-center rounded-full w-10 h-10 bg-sky-500 text-white">
                            <FaTwitter size={20} />
                        </Link>
                        <Link to="https://www.linkedin.com/" className="flex items-center justify-center rounded-full w-10 h-10 bg-blue-400 text-white">
                            <FaLinkedinIn size={20} />
                        </Link>
                        <Link to="https://www.instagram.com/" className="flex items-center justify-center rounded-full w-10 h-10 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 text-white">
                            <GrInstagram size={20} />
                        </Link>
                    </div>
                </nav>
            </footer>

        </div>
    );
};

export default Footer;