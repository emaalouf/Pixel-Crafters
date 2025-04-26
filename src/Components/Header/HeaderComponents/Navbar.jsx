import React from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";

const Navbar = () => {
    
    
    return (
        <div>
            <div className=' w-full'>
                <div className='sm:w-10/12 lg:w-9/12 mx-auto py-2'>
                    <div className="navbar ">
                        <div className="navbar-start">
                            <div className="dropdown">
                                <div tabIndex={0} role="button" className="lg:hidden mr-6">

                                    <GiHamburgerMenu className='text-2xl text-blue-950' />
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content bg-white text-blue-950 font-bold space-y-4  mt-7 w-75 h-screen px-20  md:px-10 py-6 -ml-18  shadow-md gap-2 ">
                                    <Link to="/" onClick={() => document.activeElement.blur()} className="relative group px-1 hover:text-[#FFB800] transition-transform duration-500">
                                        <span>Home</span>
                                        <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-blue-950 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                                    </Link>
                                    <Link to="/about"  onClick={() => document.activeElement.blur()}className="relative group px-1 hover:text-[#FFB800] transition-transform duration-500">
                                        <span>About</span>
                                        <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-blue-950 to-[#616262] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                                    </Link>
                                    <Link to="/service" onClick={() => document.activeElement.blur()} className="relative group px-1 hover:text-[#FFB800] transition-transform duration-500">
                                        <span>Service</span>
                                        <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-blue-950 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                                    </Link>
                                    <Link to="/portfolio" onClick={() => document.activeElement.blur()}className="relative group px-1 hover:text-[#FFB800] transition-transform duration-500">
                                        <span>Portfolio</span>
                                        <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-blue-950 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                                    </Link>

                                    <Link to="/contact" onClick={() => document.activeElement.blur()} className="relative group px-1 hover:text-[#FFB800] transition-transform duration-500">
                                        <span>Contact Us</span>
                                        <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-blue-950 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                                    </Link>

                                    <div className='flex items-center font-semibold  text-blue-950 gap-4 text-2xl  py-4' >
                                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                            <FaFacebookF className=' bg-blue-950 text-white rounded-full w-8 h-8 p-2 hover:transition hover:scale-110 hover:bg-[#FFB800] hover:text-blue-950' />
                                        </a>
                                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                            <FaTwitter className=' bg-blue-950 text-white rounded-full w-8 h-8 p-2 hover:transition hover:scale-110 hover:bg-[#FFB800] hover:text-blue-950' />
                                        </a>
                                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                            <FaInstagram className=' bg-blue-950 text-white rounded-full w-8 h-8 p-2 hover:transition hover:scale-110 hover:bg-[#FFB800] hover:text-blue-950' />
                                        </a>
                                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                            <RiLinkedinFill className=' bg-blue-950 text-white rounded-full w-8 h-8 p-2 hover:transition hover:scale-110 hover:bg-[#FFB800] hover:text-blue-950' />
                                        </a>
                                    </div>

                                </ul>
                            </div>
                            <div className='flex justify-center items-center gap-8'>
                                {/* <Link to="/"><img src="/logo.png" alt="Logo" className="w-32 " /></Link> */}
                            </div>
                        </div>
                        <div className="navbar-center hidden lg:flex gap-6 text-blue-950 font-bold">
                            <Link to="/" className="relative group px-1 hover:text-[#FFB800] transition-transform duration-500">
                                <span>Home</span>
                                <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-blue-950 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                            </Link>
                            <Link to="/about" className="relative group px-1 hover:text-[#FFB800] transition-transform duration-500">
                                <span>About</span>
                                <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-blue-950 to-[#616262] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                            </Link>
                            <Link to="/service" className="relative group px-1 hover:text-[#FFB800] transition-transform duration-500">
                                <span>Service</span>
                                <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-blue-950 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                            </Link>
                            <Link to="/portfolio" className="relative group px-1 hover:text-[#FFB800] transition-transform duration-500">
                                <span>Portfolio</span>
                                <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-blue-950 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                            </Link>

                            <Link to="/contact" className="relative group px-1 hover:text-[#FFB800] transition-transform duration-500">
                                <span>Contact Us</span>
                                <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-blue-950 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                            </Link>


                        </div>

                        <div className="navbar-end gap-6">
                            <button onClick={() => window.open("https://wa.me/8801685981149?text=Hi%20Suzaul%2C%20I%20would%20like%20to%20hire%20you.", "_blank")}
                                className="btn  sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl rounded-lg text-blue-950 bg-[#FFB800] border-0  hover:transition hover:scale-105 cursor-pointer">Business Consulting</button>
                        </div>

                    </div>
                </div >
            </div >
        </div>
    );
};

export default Navbar;