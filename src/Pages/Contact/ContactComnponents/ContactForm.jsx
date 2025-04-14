import React from 'react';

const ContactForm = () => {
    return (
        <div className='bg-white rounded-xl shadow-xl py-12 px-8'>
            <div className=''>
                <div>
                    <h1 className='font-poppins text-blue-950 text-xl font-bold'>How can we help you?  </h1>
                    <p className='text-gray-600 py-4'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
                <div>
                    <form className="py-6 space-y-4 " onSubmit={(e) => e.preventDefault()}>
                        <div className="flex flex-col md:flex-row gap-4 ">
                            <input
                                type="text"
                                placeholder="Name"
                                className="input w-full bg-gray-100 text-[#3C3E41]"
                                name="name"
                                required
                                pattern="[A-Za-z\s]+"
                                title="Please enter letters only"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="input w-full bg-gray-100 text-[#3C3E41]"
                                name="email"
                                required
                            />
                        </div>
                        <div className="flex flex-col md:flex-row gap-4">
                            <input
                                type="tel"
                                placeholder="Phone"
                                className="input w-full bg-gray-100 text-[#3C3E41]"
                                name="phone"
                                required
                                pattern="[0-9]{7,15}"
                                title="Please enter a valid phone number (digits only, 7-15 digits)"
                            />
                            <input
                                type="text"
                                placeholder="Subject"
                                className="input w-full bg-gray-100 text-[#3C3E41]"
                                name="subject"
                                required
                            />
                        </div>
                        <div>
                            <textarea
                                className="textarea w-full bg-gray-100 text-[#3C3E41]"
                                rows="5"
                                placeholder="Message"
                                name="message"
                                required
                            ></textarea>
                        </div>
                        <div className="w-full ">
                            <button
                                type="submit"
                                className="w-full btn  sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl rounded-lg shadow-lg text-blue-950 bg-[#FFB800] border-0  hover:transition hover:scale-105 cursor-pointer">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;