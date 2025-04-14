import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { FaSmile, FaMapMarkedAlt, FaBriefcase, FaHeadset } from 'react-icons/fa';

const iconMap = {
    "Happy Customers": <FaSmile className="text-4xl text-[#FFB800]" />,
    "Amazing Tours": <FaMapMarkedAlt className="text-4xl text-[#FFB800]" />,
    "In Business": <FaBriefcase className="text-4xl text-[#FFB800]" />,
    "Support Cases": <FaHeadset className="text-4xl text-[#FFB800]" />
};

const Stats = () => {
    const [stats, setStats] = useState([]);
    const { ref, inView } = useInView({ triggerOnce: true });

    useEffect(() => {
        fetch('/stats.json')
            .then(res => res.json())
            .then(data => setStats(data))
    }, []);

    return (
        <div
            className="bg-blue-950 text-white py-20 px-4 sm:px-6 lg:px-8"
            ref={ref}
        >
            <div className="max-w-screen-xl mx-auto">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
                    {stats.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center gap-2"
                        >
                            {iconMap[item.title] || null}
                            <h2 className="text-4xl pt-4 font-bold text-[#FFB800]">
                                {inView ? (
                                    <CountUp end={item.number} duration={2} separator="," />
                                ) : (
                                    0
                                )}
                            </h2>
                            <p className="mt-1 text-white text-base sm:text-lg">{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Stats;
