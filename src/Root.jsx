import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import FooterScrollTop from './Components/Footer/FooterComponents/FooterScrollTop';


const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        <FooterScrollTop></FooterScrollTop>
        </div>
    );
};

export default Root;