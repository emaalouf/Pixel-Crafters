import React, { useState, useEffect } from 'react';
import { FaMobileAlt, FaDesktop, FaPaintBrush, FaHeadset } from 'react-icons/fa';

const AboutFeatures = () => {
    const [featuresData, setFeaturesData] = useState([]);


    useEffect(() => {
        fetch('/features.json')
            .then((response) => response.json())
            .then((data) => setFeaturesData(data))
    }, []);
    return (
        <div className="bg-gray-100 py-20">
            <div className="sm:w-10/12 lg:w-9/12 mx-auto text-center">
                <div className='px-10'>
                    <h1 className="text-blue-950 text-4xl font-bold">Awesome features</h1>
                    <p className="text-gray-600 text-lg py-10 lg:w-6/12 lg:mx-auto">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout established fact that a reader will.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {featuresData.map((feature, index) => {
                        let Icon;
                        switch (feature.icon) {
                            case "FaMobileAlt":
                                Icon = FaMobileAlt;
                                break;
                            case "FaDesktop":
                                Icon = FaDesktop;
                                break;
                            case "FaPaintBrush":
                                Icon = FaPaintBrush;
                                break;
                            case "FaHeadset":
                                Icon = FaHeadset;
                                break;
                            default:
                                Icon = FaMobileAlt;
                        }

                        return (
                            <div key={index} className="bg-white hover:bg-[#FFB800] p-8 rounded-lg shadow-lg text-center flex flex-col justify-center items-center  hover:transition hover:scale-105">
                                <div className="text-3xl mb-4 text-blue-950 flex justify-center items-center">
                                    <Icon />
                                </div>
                                <h3 className="text-xl font-semibold text-blue-950">{feature.title}</h3>
                                <p className="text-gray-600 mt-4">{feature.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default AboutFeatures;