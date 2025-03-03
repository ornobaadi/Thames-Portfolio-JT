import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import React from 'react';

const Footer = () => {
    return (
        <div>
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
                        <a>
                            <Facebook />
                        </a>
                        <a>
                            <Twitter />
                        </a>
                        <a>
                            <Linkedin />
                        </a>
                        <a>
                            <Instagram />
                        </a>
                    </div>
                </nav>
            </footer>

        </div>
    );
};

export default Footer;