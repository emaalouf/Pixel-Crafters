import React from 'react';
import { Link } from 'react-router-dom';
const AboutHero = () => {
    return (
        <div>
            <div className=" bg-gray-100 py-20">
                <div className="w-9/12 mx-auto flex flex-col lg:flex-row items-center justify-between space-y-10 lg:space-y-0">

                    <div className="lg:w-1/2">
                        <img src="about.png" alt="Digital Solution" className="w-[600 px] "
                        />
                    </div>


                    <div className="lg:w-1/2 text-left lg:text-left">
                        <h5 className="font-bold text-[#FFB800] mb-4">
                            Best Digital Agency Based on USA
                        </h5>
                        <h1 className="text-blue-950 text-4xl font-bold mb-6">
                            We are expert web agency
                            since 2003
                        </h1>
                        <p className="text-gray-600 mb-6 text-lg">
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
                        </p>

                        <p className="text-gray-600 mb-6 text-lg">
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                        </p>

                        <Link to="/contact">
                            <button className="bg-[#FFB800] text-blue-950 font-black px-6 py-3 rounded-full shadow-md hover:bg-blue-950 hover:text-white hover:transition hover:scale-105 cursor-pointer">
                                Contact Us
                            </button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutHero;