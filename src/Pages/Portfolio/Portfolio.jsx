import React from 'react';
import PortfolioGallery from './PortfolioComponents/PortfolioGallery';

const Portfolio = () => {
    return (
        <div>
            <div className=" relative bg-cover bg-center h-80 flex items-center justify-center" style={{ backgroundImage: "url('/section-bg.jpg')" }}>
                <div className="absolute inset-0 bg-blue-950 opacity-80"></div>
                <h1 className="text-5xl font-bold text-white drop-shadow-lg">Portfolio</h1>
            </div>
            <PortfolioGallery></PortfolioGallery>
        </div>
    );
};

export default Portfolio;