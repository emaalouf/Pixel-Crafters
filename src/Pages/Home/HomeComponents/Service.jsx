import React, { useState, useEffect } from 'react';
import { FaSearch, FaLink, FaChartLine, FaAmazon, FaBullhorn, FaEnvelopeOpenText } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Service = () => {
    const [servicesData, setServicesData] = useState([]);

    useEffect(() => {
        fetch('/service.json')
            .then((response) => response.json())
            .then((data) => setServicesData(data))

    }, []);

    const getIconComponent = (iconName) => {
        switch (iconName) {
            case 'website-audit':
                return <FaSearch />;
            case 'backlink':
                return <FaLink />;
            case 'seo':
                return <FaChartLine />;
            case 'affiliate':
                return <FaAmazon />;
            case 'paid-media':
                return <FaBullhorn />;
            case 'outreach':
                return <FaEnvelopeOpenText />;
            default:
                return <FaSearch />;
        }
    };

    return (
        <div className="bg-gray-100 py-20 px-4 sm:px-6 lg:px-8">
            <div className="sm:w-11/12 lg:w-9/12 mx-auto text-center">
                <div className='px-4 sm:px-10'>
                    <h1 className="text-blue-950 text-4xl font-bold">Our Digital Services</h1>
                    <p className="text-gray-600 text-lg py-10 lg:w-6/12 lg:mx-auto">
                        We offer a wide range of SEO and marketing services to grow your brand and increase your online visibility.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {servicesData.map((service, index) => (
                        <div
                            key={index}
                            className="bg-[#FFB800] hover:bg-blue-950 text-blue-950 hover:text-white p-6 sm:p-8 rounded-2xl shadow-lg text-center flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105 h-80 w-full max-w-[340px] mx-auto"
                        >
                            <div className="flex flex-col items-center justify-center h-full">
                                <div className="text-5xl  mb-4">
                                    {getIconComponent(service.icon)}
                                </div>
                                <h3 className="text-xl font-semibold">{service.title}</h3>
                                <p className=" mt-3 text-sm sm:text-base px-2">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                
            </div>
        </div>
    );
};

export default Service;
