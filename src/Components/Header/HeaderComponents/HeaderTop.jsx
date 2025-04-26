import React from 'react';
import { FaHome } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { ImClock } from "react-icons/im";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";


const HeaderTop = () => {
    return (
        <div>
            <div className='bg-blue-950 hidden lg:block xl:block'>
                <div className='w-9/12 mx-auto'>
                    <div className='flex justify-between  items-center py-3'>
                        <div className='flex items-center font-semibold  gap-3 text-white '>
                            <FaHome />
                            <a href="tel:+961766666666" className="hover:text-[#FFB800] transition">
                                <p>+961 76666666</p>
                            </a>

                        </div>
                        <div className='flex items-center font-semibold  gap-3 text-white'>
                            <MdEmail />
                            <a href="mailto:digital@forofor.com" className="hover:text-[#FFB800] transition">
                                <p>digital@forofor.com</p>
                            </a>

                        </div>
                        <div className='flex items-center font-semibold  gap-3 text-white'>
                            <ImClock />
                            <p>Mon to sat Open: 9am - 6pm </p>
                        </div>
                        <div className='flex items-center font-semibold  gap-3 text-blue-950' >
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                <FaFacebookF className=' bg-white rounded-full w-8 h-8 p-2 hover:transition hover:scale-110 hover:bg-[#FFB800]' /> </a>
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                <FaTwitter className=' bg-white rounded-full w-8 h-8 p-2 hover:transition hover:scale-110 hover:bg-[#FFB800]' /></a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className=' bg-white rounded-full w-8 h-8 p-2 hover:transition hover:scale-110 hover:bg-[#FFB800]' /></a>

                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                <RiLinkedinFill className=' bg-white rounded-full w-8 h-8 p-2 hover:transition hover:scale-110 hover:bg-[#FFB800]' /></a>




                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderTop;