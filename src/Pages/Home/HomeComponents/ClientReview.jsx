import React, { useEffect, useState } from 'react';
import { FaStar } from "react-icons/fa";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ClientReview = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('/clientsreview.json')
            .then(res => res.json())
            .then(data => setReviews(data))

    }, []);


    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 4000,
        slidesToShow: 3, 
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,  
                settings: {
                    slidesToShow: 2, 
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768, 
                settings: {
                    slidesToShow: 1, 
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    };

    return (
        <div className="bg-[#FFB800] py-20 px-4 sm:px-6 lg:px-8">
            <div className='sm:w-10/12 lg:w-9/12 mx-auto text-center'>
                <div className="text-center">
                    <h1 className="text-blue-950 text-4xl font-bold mb-6">Client's Reviews</h1>
                    <p className="text-gray-600 text-lg mb-12">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    </p>

                    <Slider {...settings}>
                        {reviews.map((client, index) => (
                            <div key={index} className="bg-gray-100 p-8 shadow-xl flex flex-col items-center transition-all duration-300 hover:scale-105">
                                <div className="flex flex-col items-center">
                                    <img
                                        src={`/${client.image}`}
                                        alt={client.name}
                                        className="w-32 h-32 rounded-full mb-4 object-cover border-2 border-blue-950"
                                    />
                                    <h3 className="text-blue-950 font-semibold text-xl mb-2">{client.name}</h3>
                                    <p className="text-sm text-gray-500 py-2">{client.title}</p>

                                    <div className="flex justify-center items-center text-[#FFB800] mb-4 mt-2 text-xl gap-2">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar key={i} />
                                        ))}
                                    </div>

                                    <p className="text-gray-600 italic text-md mb-6">“{client.review}”</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default ClientReview;
