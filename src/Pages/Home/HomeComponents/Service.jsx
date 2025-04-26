import React from 'react';
import { FaCode, FaMobile, FaPaintBrush, FaChartLine, FaGlobe, FaRocket } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Service = () => {
    const services = [
        {
            icon: FaCode,
            title: "Web Development",
            titleAr: "تطوير المواقع",
            description: "Crafting bespoke web solutions that combine cutting-edge technology with elegant design, creating digital experiences that leave lasting impressions.",
            descriptionAr: "تصميم حلول ويب مخصصة تجمع بين التكنولوجيا المتطورة والتصميم الأنيق، لخلق تجارب رقمية تترك انطباعاً دائماً."
        },
        {
            icon: FaMobile,
            title: "App Development",
            titleAr: "تطوير التطبيقات",
            description: "Building sophisticated mobile applications that seamlessly blend innovation with intuitive user experiences, setting new standards in digital excellence.",
            descriptionAr: "تطوير تطبيقات جوال متطورة تدمج بسلاسة بين الابتكار وتجربة المستخدم البديهية، لتضع معايير جديدة في التميز الرقمي."
        },
        {
            icon: FaPaintBrush,
            title: "Branding & UI/UX",
            titleAr: "الهوية والتصميم",
            description: "Creating distinctive brand identities and user experiences that elevate your digital presence and resonate with your audience.",
            descriptionAr: "تصميم هويات علامات تجارية وتجارب مستخدم مميزة ترفع من حضورك الرقمي وتتوافق مع جمهورك."
        },
        {
            icon: FaChartLine,
            title: "Digital Marketing",
            titleAr: "التسويق الرقمي",
            description: "Implementing strategic digital marketing solutions that drive measurable growth and meaningful engagement with your target audience.",
            descriptionAr: "تنفيذ حلول تسويق رقمي استراتيجية تدفع النمو القابل للقياس والمشاركة الهادفة مع جمهورك المستهدف."
        },
        {
            icon: FaGlobe,
            title: "Global Solutions",
            titleAr: "حلول عالمية",
            description: "Leveraging our Beirut-based expertise with international standards to deliver solutions that transcend geographical boundaries.",
            descriptionAr: "الاستفادة من خبرتنا في بيروت مع المعايير الدولية لتقديم حلول تتجاوز الحدود الجغرافية."
        },
        {
            icon: FaRocket,
            title: "Innovation Hub",
            titleAr: "مركز الابتكار",
            description: "Pushing the boundaries of digital innovation, creating solutions that anticipate future trends and set new industry standards.",
            descriptionAr: "تجاوز حدود الابتكار الرقمي، وخلق حلول تتوقع الاتجاهات المستقبلية وتضع معايير جديدة في الصناعة."
        }
    ];

    return (
        <div className="bg-gradient-to-b from-gray-50 to-white py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-blue-950 mb-4">
                        Innovation & Impact
                    </h2>
                    <h2 className="text-4xl font-bold text-blue-950 mb-4" dir="rtl">
                        ابتكار وأثر ملموس
                    </h2>
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                        We innovate at the intersection of art and technology, creating digital experiences 
                        that elevate brands and leave lasting impressions. Our solutions anticipate future 
                        trends while delivering immediate impact.
                    </p>
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto mt-4" dir="rtl">
                        نبتكر في ملتقى الفن والتكنولوجيا، لنخلق تجارب رقمية ترفع من قيمة العلامات 
                        التجارية وتترك انطباعاً دائماً. حلولنا تتوقع الاتجاهات المستقبلية مع تحقيق 
                        أثر فوري.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
                        >
                            <div className="flex items-center mb-6">
                                <div className="text-4xl text-[#FFB800] mr-4">
                                    <service.icon />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-blue-950">{service.title}</h3>
                                    <h3 className="text-xl font-semibold text-blue-950" dir="rtl">{service.titleAr}</h3>
                                </div>
                            </div>
                            <p className="text-gray-600 mb-4">{service.description}</p>
                            <p className="text-gray-600" dir="rtl">{service.descriptionAr}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <Link to="/contact">
                        <button className="bg-[#FFB800] text-blue-950 px-8 py-3 rounded-full hover:bg-blue-950 hover:text-white transition-all duration-300 font-bold">
                            Start Your Digital Journey
                        </button>
                    </Link>
                    <Link to="/contact">
                        <button className="bg-[#FFB800] text-blue-950 px-8 py-3 rounded-full hover:bg-blue-950 hover:text-white transition-all duration-300 font-bold mt-4" dir="rtl">
                            ابدأ رحلتك الرقمية
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;
