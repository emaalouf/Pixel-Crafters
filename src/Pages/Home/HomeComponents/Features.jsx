import React from 'react';
import { FaCode, FaMobileAlt, FaPaintBrush, FaChartLine, FaGlobe, FaUsers } from 'react-icons/fa';

const Features = () => {
    const features = [
        {
            icon: FaCode,
            title: "Web Development",
            titleAr: "تطوير المواقع",
            description: "Bespoke web solutions crafted with precision and elegance, delivering exceptional user experiences.",
            descriptionAr: "حلول ويب مصممة بدقة وأناقة، تقدم تجارب مستخدم استثنائية."
        },
        {
            icon: FaMobileAlt,
            title: "App Development",
            titleAr: "تطوير التطبيقات",
            description: "Sophisticated mobile applications that combine innovation with intuitive design.",
            descriptionAr: "تطبيقات جوال متطورة تجمع بين الابتكار والتصميم البديهي."
        },
        {
            icon: FaPaintBrush,
            title: "Branding & UI/UX",
            titleAr: "الهوية والتصميم",
            description: "Luxury branding and user experience design that elevates your digital presence.",
            descriptionAr: "تصميم هوية وتجربة مستخدم فاخرة ترفع من حضورك الرقمي."
        },
        {
            icon: FaChartLine,
            title: "Digital Marketing",
            titleAr: "التسويق الرقمي",
            description: "Strategic digital marketing solutions that drive growth and engagement.",
            descriptionAr: "حلول تسويق رقمي استراتيجية تدفع النمو والمشاركة."
        },
        {
            icon: FaGlobe,
            title: "Global Reach",
            titleAr: "وصول عالمي",
            description: "Beirut-based expertise with international standards and global perspective.",
            descriptionAr: "خبرة بيروتية بمعايير دولية ورؤية عالمية."
        },
        {
            icon: FaUsers,
            title: "Inclusive Excellence",
            titleAr: "تميز شامل",
            description: "Luxury services accessible to all, from startups to enterprises.",
            descriptionAr: "خدمات فاخرة متاحة للجميع، من الشركات الناشئة إلى المؤسسات."
        }
    ];

    return (
        <div className="bg-gradient-to-b from-white to-gray-50 py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-blue-950 mb-4">
                        Comprehensive Luxury Services
                    </h2>
                    <h2 className="text-4xl font-bold text-blue-950 mb-4" dir="rtl">
                        خدمات شاملة بفخامة
                    </h2>
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                        We combine high-end, sophisticated solutions with an approachable style, 
                        ensuring each client receives VIP treatment regardless of size.
                    </p>
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto mt-4" dir="rtl">
                        ندمج بين الحلول المتطورة والراقية وأسلوب ودي، 
                        مما يضمن حصول كل عميل على معاملة VIP بغض النظر عن الحجم.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} 
                             className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                            <div className="flex items-center mb-4">
                                <div className="text-3xl text-[#FFB800] mr-4">
                                    <feature.icon />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-blue-950">{feature.title}</h3>
                                    <h3 className="text-xl font-semibold text-blue-950" dir="rtl">{feature.titleAr}</h3>
                                </div>
                            </div>
                            <p className="text-gray-600">{feature.description}</p>
                            <p className="text-gray-600 mt-2" dir="rtl">{feature.descriptionAr}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Features;
