import React from 'react';

const WorkProcess = () => {
    return (
        <div
            className="bg-gray-100 py-20 px-4 sm:px-6 lg:px-8 bg-no-repeat bg-center bg-contain"
            style={{ backgroundImage: "url('/line.png')" }}
        >
            <div className='sm:w-10/12 lg:w-9/12 mx-auto text-center' >
                <div className="max-w-screen-xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-blue-950 mb-6">Work Process</h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-16">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout established fact that a reader will.
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md text-center transition-transform hover:scale-105">
                            <div className="w-16 h-16 flex items-center justify-center mx-auto rounded-full bg-[#FFB800] text-blue-950 text-2xl font-bold mb-5 shadow-md border-6 border-blue-950">
                                1
                            </div>
                            <h3 className="text-xl font-semibold text-blue-950">Plan & Create</h3>
                            <p className="text-gray-600 mt-3">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.
                            </p>
                        </div>
                        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md text-center transition-transform hover:scale-105">
                            <div className="w-16 h-16 flex items-center justify-center mx-auto rounded-full bg-[#FFB800] text-blue-950 text-2xl font-bold mb-5 shadow-md border-6 border-blue-950">
                                2
                            </div>
                            <h3 className="text-xl font-semibold text-blue-950">Develop & Testing</h3>
                            <p className="text-gray-600 mt-3">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.
                            </p>
                        </div>
                        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md text-center transition-transform hover:scale-105">
                            <div className="w-16 h-16 flex items-center justify-center mx-auto rounded-full bg-[#FFB800] text-blue-950 text-2xl font-bold mb-5 shadow-md border-6 border-blue-950">
                                3
                            </div>
                            <h3 className="text-xl font-semibold text-blue-950">Make Live</h3>
                            <p className="text-gray-600 mt-3">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkProcess;
