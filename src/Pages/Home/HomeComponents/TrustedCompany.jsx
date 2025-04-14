import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TrustedCompany = () => {
    const [logos, setLogos] = useState([]);

    useEffect(() => {
        fetch('/trustedcompany.json')
            .then(res => res.json())
            .then(data => setLogos(data))
            .catch(err => console.error("Failed to load company logos:", err));
    }, []);

    const settings = {
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    };

    return (
        <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-screen-xl mx-auto text-center">
                <h2 className="text-blue-950 text-3xl font-bold mb-10 pb-4">
                    Trusted By 1k+ Company Around The World!
                </h2>
                <Slider {...settings}>
                    {logos.map((logo, index) => (
                        <div key={index} className="px-4">
                            <img
                                src={`/${logo.image}`}
                                alt={`Company ${index + 1}`}
                                className="mx-auto h-10 object-contain grayscale hover:grayscale-0 transition duration-300"
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default TrustedCompany;
