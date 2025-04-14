import React from 'react';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
  {
    image: 'Hero-Slider-1.jpg',
    heading: 'Welcome to Our World',
    subheading: 'Explore, Dream, Discover',
    button: 'Get Started',
  },
  {
    image: 'Hero-Slider-2.jpg',
    heading: 'Build Your Vision',
    subheading: 'With Modern Solutions',
    button: 'Get Started',
  },
  {
    image: 'Hero-Slider-1.jpg',
    heading: 'Innovation That Inspires',
    subheading: 'Future is Now',
    button: 'Get Started',
  },
];

const Hero = () => {

  return (
    <div>
      <div className="w-full h-[500px] md:h-[600px]">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          loop={true}
          className="w-full h-full custom-swiper "
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">
                <img
                  src={slide.image}
                  alt={`slide-${index}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center px-4">
                  <h2 className="text-4xl md:text-5xl font-bold mb-2">{slide.heading}</h2>
                  <p className="text-lg md:text-2xl py-4 mb-4 font-poppins">{slide.subheading}</p>
                  <Link to="/contact">
                    <button className="bg-[#FFB800] text-blue-950 px-6 py-2 rounded-full hover:bg-blue-950 hover:text-white hover:transition hover:scale-105 cursor-pointer font-black">
                      {slide.button}
                    </button>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
