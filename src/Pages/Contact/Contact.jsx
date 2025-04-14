import React from 'react';
import ContactAddress from './ContactComnponents/ContactAddress';
import ContactForm from './ContactComnponents/ContactForm';

const Contact = () => {
    return (
        <div>
            <div className=" relative bg-cover bg-center h-80 flex items-center justify-center" style={{ backgroundImage: "url('/section-bg.jpg')" }}>
                <div className="absolute inset-0 bg-blue-950 opacity-80"></div>
                <h1 className="text-5xl font-bold text-white drop-shadow-lg">Contact Us</h1>
            </div>

            <div className='bg-gray-100 '>
                <div className='lg:w-8/12 mx-auto py-10'>
                    <div className='py-10'>
                        <ContactAddress></ContactAddress>
                    </div>
                    <div className='py-10'>
                        <ContactForm></ContactForm>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Contact;