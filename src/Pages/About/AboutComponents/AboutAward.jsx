import React from 'react';

const AboutAward = () => {
    return (
        <div>
            <div className=" bg-gray-100 py-20">
                <div className="w-9/12 mx-auto flex flex-col lg:flex-row items-center justify-between space-y-10 lg:space-y-0">

                    <div className="lg:w-1/2">
                        <img src="award.png" alt="Digital Solution" className=" lg:w-[400px] lg:ml-20"
                        />
                    </div>


                    <div className="lg:w-1/2 text-left lg:text-left">
                        <h5 className="font-bold text-[#FFB800] mb-4">
                            Award Winning Digital Agency
                        </h5>
                        <h1 className="text-blue-950 text-4xl font-bold mb-6">
                            International Awards 2024 <br />With 30 Years of Experience
                        </h1>
                        <p className="text-gray-600 mb-6 text-lg">
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
                        </p>

                        <p className="text-gray-600 mb-6 text-lg">
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutAward;