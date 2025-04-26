import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-blue-950 to-black">
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 container mx-auto px-4 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* English Content */}
          <div className="text-white space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Digital Craftsmanship for Every Ambition
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              We are a full-service digital agency offering world-class web development, 
              app development, branding, UI/UX, and digital marketing solutions. 
              Our bespoke approach combines luxury quality with accessibility, 
              serving clients from ambitious startups to established corporations.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/portfolio">
                <button className="bg-[#FFB800] text-blue-950 px-8 py-3 rounded-full hover:bg-white hover:text-blue-950 transition-all duration-300 font-bold">
                  Explore Our Work
                </button>
              </Link>
              <Link to="/contact">
                <button className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-blue-950 transition-all duration-300 font-bold">
                  Get Started
                </button>
              </Link>
            </div>
          </div>

          {/* Arabic Content */}
          <div className="text-white space-y-6 text-right" dir="rtl">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              إبداع رقمي متفرد لكل طموح
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              نحن وكالة رقمية متكاملة الخدمات تقدم حلولاً عالمية في تطوير المواقع، 
              تطوير التطبيقات، بناء الهوية، تصميم واجهة وتجربة المستخدم، والتسويق الرقمي. 
              ندمج بين الجودة الفاخرة والقدرة على الوصول، لنخدم عملاءنا من الشركات الناشئة 
              الطموحة إلى المؤسسات الكبرى الراسخة.
            </p>
            <div className="flex flex-wrap gap-4 pt-4 justify-end">
              <Link to="/portfolio">
                <button className="bg-[#FFB800] text-blue-950 px-8 py-3 rounded-full hover:bg-white hover:text-blue-950 transition-all duration-300 font-bold">
                  استعرض أعمالنا
                </button>
              </Link>
              <Link to="/contact">
                <button className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-blue-950 transition-all duration-300 font-bold">
                  ابدأ الآن
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
