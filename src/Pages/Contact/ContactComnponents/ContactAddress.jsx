import React from 'react';
import { SlLocationPin } from "react-icons/sl";
import { MdMailOutline } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

const ContactAddress = () => {
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg text-center transition-transform hover:scale-105">
                    <div className="w-16 h-16 flex items-center justify-center mx-auto rounded-full bg-[#FFB800] text-blue-950 text-4xl font-bold mb-5 shadow-md border-3 border-blue-950">
                        <FaWhatsapp className="text-blue-950" />
                    </div>

                    <h3 className="text-xl font-semibold text-blue-950">Phone</h3>
                    <p className="text-gray-600 mt-3">+9617666666</p>

                </div>
                <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg text-center transition-transform hover:scale-105">
                    <div className="w-16 h-16 flex items-center justify-center mx-auto rounded-full bg-[#FFB800] text-blue-950 text-4xl font-bold mb-5 shadow-md border-3 border-blue-950">
                        <MdMailOutline className="text-blue-950" />
                    </div>
                    <h3 className="text-xl font-semibold text-blue-950">Email</h3>
                    <p className="text-gray-600 mt-3">digital@forofor.com</p>

                </div>
                <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg text-center transition-transform hover:scale-105">
                    <div className="w-16 h-16 flex items-center justify-center mx-auto rounded-full bg-[#FFB800] text-blue-950 text-4xl font-bold mb-5 shadow-md border-3 border-blue-950">
                        <SlLocationPin className="text-blue-950" />
                    </div>
                    <h3 className="text-xl font-semibold text-blue-950">Address</h3>
                    <p className="text-gray-600 mt-3">Beirut, Lebanon</p>

                </div>

            </div>
        </div>
    );
};

export default ContactAddress;