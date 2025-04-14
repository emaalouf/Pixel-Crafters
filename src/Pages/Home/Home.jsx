import React from 'react';
import Hero from './HomeComponents/Hero';
import Features from './HomeComponents/Features';
import Awards from './HomeComponents/Awards';
import Service from './HomeComponents/Service';
import Team from './HomeComponents/Team';
import Stats from './HomeComponents/Stats';
import WorkProcess from './HomeComponents/WorkProcess';
import ClientReview from './HomeComponents/ClientReview';
import TrustedCompany from './HomeComponents/TrustedCompany';
import GetStarted from './HomeComponents/GetStarted';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Features></Features>
            <Awards></Awards>
            <Service></Service>
            <Team></Team>
            <Stats></Stats>
            <WorkProcess></WorkProcess>
            <ClientReview></ClientReview>
            <TrustedCompany></TrustedCompany>
            <GetStarted></GetStarted>
        </div>
    );
};

export default Home;