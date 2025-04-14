import React from 'react';
import { Link } from "react-router-dom";
import { SlLocationPin } from "react-icons/sl";
import { MdMailOutline } from "react-icons/md";
import {
    FaWhatsapp,
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaLinkedin,
} from "react-icons/fa";

const FooterMain = () => {
    return (
        <div className="bg-blue-950 text-white text-sm">
            <div className="border-b border-[#FFB800]">
                <div className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto py-12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                      
                        <div className="flex flex-col gap-6">
                            <Link to="/">
                                <img src="/logoW.png" alt="Logo" className="w-32" />
                            </Link>
                            <p className="text-white">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae risus nec dui venenatis dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae risus nec dui venenatis dignissim.
                            </p>
                        </div>

        
                        <div>
                            <h3 className="font-semibold text-lg text-white mb-4 pb-2">
                                Quick Links
                            </h3>
                            <div className="flex flex-col gap-3">
                                <Link to="/about" className="hover:text-[#FFB800] transition">About</Link>
                                <Link to="/service" className="hover:text-[#FFB800] transition">Service</Link>
                                <Link to="/portfolio" className="hover:text-[#FFB800] transition">Portfolio</Link>
                            </div>
                        </div>

                       
                        <div>
                            <h3 className="font-semibold text-lg text-white mb-4 pb-2">
                                Company
                            </h3>
                            <div className="flex flex-col gap-3">
                                <Link to="/contact" className="hover:text-[#FFB800] transition">Contact</Link>
                                <Link to="/faq" className="hover:text-[#FFB800] transition">FAQs</Link>
                                <Link to="/" className="hover:text-[#FFB800] transition">Privacy Policy</Link>
                                <Link to="/" className="hover:text-[#fc2164] transition">Terms & Condition</Link>
                            </div>
                        </div>

                     
                        <div>
                            <h3 className="font-semibold text-lg text-white mb-4 pb-2">
                                Our Office
                            </h3>
                            <div className="flex flex-col gap-4">
                                <div className="flex items-start gap-3">
                                    <SlLocationPin className="text-[#FFB800] text-xl mt-1" />
                                    <p>South Banasree, Khilgoan, Dhaka, Bangladesh</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <FaWhatsapp className="text-[#FFB800] text-lg" />
                                    <a href="tel:+8801685981149" className="hover:text-[#fc2164] transition">
                                        +8801685981149
                                    </a>
                                </div>
                                <div className="flex items-center gap-3">
                                    <MdMailOutline className="text-[#FFB800] text-lg" />
                                    <a href="mailto:suzaul193@gmail.com" className="hover:text-[#fc2164] transition">
                                        suzaul193@gmail.com
                                    </a>
                                </div>

                            
                                <div className="mt-4">
                                    <h4 className="font-medium text-white mb-2">Follow Me</h4>
                                    <div className="flex gap-4">
                                        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="text-white hover:text-[#FFB800] transition">
                                            <FaFacebook className="text-xl" />
                                        </a>
                                        <a href="https://x.com/" target="_blank" rel="noreferrer" className="text-white hover:text-[#FFB800] transition">
                                            <FaTwitter className="text-xl" />
                                        </a>
                                        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="text-white hover:text-[#FFB800] transition">
                                            <FaInstagram className="text-xl" />
                                        </a>
                                        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="text-white hover:text-[#FFB800] transition">
                                            <FaLinkedin className="text-xl" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterMain;
