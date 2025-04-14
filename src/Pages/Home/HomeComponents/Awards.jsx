import React from 'react';
import { Link } from 'react-router-dom';

const Awards = () => {
    return (
        <div>
            <div className=" bg-gray-100 py-20">
                <div className="w-9/12 mx-auto flex flex-col lg:flex-row items-center justify-between space-y-10 lg:space-y-0">

                    <div className="lg:w-1/2">
                        <img src="success-team.png" alt="Digital Solution" className="w-[500px] h-auto rounded-lg shadow-xl"
                        />
                    </div>


                    <div className="lg:w-1/2 text-left lg:text-left">
                        <h5 className="font-bold text-[#FFB800] mb-4">
                            We Provide Digital Solution That Works
                        </h5>
                        <h1 className="text-blue-950 text-4xl font-bold mb-6">
                            Manage everything in one place
                        </h1>
                        <p className="text-gray-600 mb-6 text-lg">
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                        </p>
                        <h4 className="text-xl font-semibold text-blue-950 mb-4">
                            International Awards 2024
                            <br />
                            With 30 Years of Experience
                        </h4>
                        <p className="text-gray-600 mb-6 text-lg">
                            With 30 Years of Experience, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                        </p>
                        <Link to="/about">
                            <button className="bg-[#FFB800] text-blue-950 font-black px-6 py-3 rounded-full shadow-md hover:bg-blue-950 hover:text-white hover:transition hover:scale-105 cursor-pointer">
                                Know More
                            </button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Awards;