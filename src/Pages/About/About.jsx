import React from 'react';
import AboutHero from './AboutComponents/AboutHero';
import AboutFeatures from './AboutComponents/AboutFeatures';
import WorkProcess from "../Home/HomeComponents/WorkProcess";
import ClientReview from "../Home/HomeComponents/ClientReview";
import TrustedCompany from "../Home/HomeComponents/TrustedCompany";
import Team from "../Home/HomeComponents/Team";
import AboutAward from './AboutComponents/AboutAward';

const About = () => {
    return (
        <div>
            <div className=" relative bg-cover bg-center h-80 flex items-center justify-center" style={{ backgroundImage: "url('/section-bg.jpg')" }}>
                <div className="absolute inset-0 bg-blue-950 opacity-80"></div>
                <h1 className="text-5xl font-bold text-white drop-shadow-lg">About Us</h1>
            </div>
            <div>
                <AboutHero></AboutHero>
                <AboutFeatures></AboutFeatures>
                <AboutAward></AboutAward>
                <WorkProcess></WorkProcess>
                <Team></Team>
                <ClientReview></ClientReview>
                <TrustedCompany></TrustedCompany>
            </div>
        </div>
    );
};

export default About;