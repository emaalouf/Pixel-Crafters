import React from 'react';
import HeaderTop from './HeaderComponents/HeaderTop';
import Navbar from './HeaderComponents/Navbar';



const Header = () => {
    return (
        <div >
            <HeaderTop></HeaderTop>
            <div className="sticky top-0 left-0 w-full z-50 bg-white shadow-lg">
                <Navbar ></Navbar>
            </div>
        </div>
    );
};

export default Header;