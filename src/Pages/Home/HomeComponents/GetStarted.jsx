import React from 'react';

const GetStarted = () => {
    return (
        <div>
            <div className=" relative bg-cover bg-center h-80 flex items-center justify-center" style={{ backgroundImage: "url('/GetStarted.png')" }}>
                <div className='text-center'>
                    <h1 className="text-4xl font-bold text-blue-950">Let’s make something great together!</h1>
                    <p className="text-gray-600 py-4 text-lg"> Our service is help you to grow your business soon. </p>
                    <div className="">
                        <button onClick={() => window.open("https://wa.me/8801685981149?text=Hi%20Suzaul%2C%20I%20would%20like%20to%20hire%20you.", "_blank")}
                            className="btn sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl rounded-lg text-blue-950 bg-[#FFB800] border-0  hover:transition hover:scale-105 cursor-pointer">Business Consulting</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default GetStarted;