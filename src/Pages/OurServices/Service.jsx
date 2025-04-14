import React from 'react';
import ServiceSection from './ServiceComponents/ServiceSection';
import WhyChoose from './ServiceComponents/WhyChoose';
import Price from './ServiceComponents/Price';
import GetStarted from "../Home/HomeComponents/GetStarted";

const Service = () => {
    return (
        <div>
            <div className=" relative bg-cover bg-center h-80 flex items-center justify-center" style={{ backgroundImage: "url('/section-bg.jpg')" }}>
                <div className="absolute inset-0 bg-blue-950 opacity-80"></div>
                <h1 className="text-5xl font-bold text-white drop-shadow-lg">Services</h1>
            </div>
            <ServiceSection></ServiceSection>
            <WhyChoose></WhyChoose>
            <Price></Price>
           <GetStarted></GetStarted>
        </div>
    );
};

export default Service;