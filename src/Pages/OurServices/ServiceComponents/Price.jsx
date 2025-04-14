import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Price = () => {
    const [prices, setPrices] = useState([]);

    useEffect(() => {
        fetch('/price.json')
            .then((res) => res.json())
            .then((data) => setPrices(data));
    }, []);

    return (
        <div className="bg-blue-950 py-16 px-4">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-white mb-4">Our Pricing Plans</h2>
                <p className="text-white  text-lg mb-12 max-w-2xl mx-auto">
                    Choose the plan that best suits your needs. All plans come with premium support.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {prices.map((plan) => (
                        <div key={plan.id} className="bg-white rounded-2xl shadow-lg p-8 hover:transition hover:scale-105">
                            <h3 className="text-2xl font-semibold text-blue-950 mb-2">{plan.title}</h3>
                            <p className="text-gray-500 mb-4">{plan.billing}</p>
                            <p className="text-4xl font-bold text-blue-950 mb-6">{plan.price}</p>

                            <ul className="text-gray-700 mb-6 space-y-2">
                                {plan.features.map((feature, index) => (
                                    <li key={index}>✔ {feature}</li>
                                ))}
                            </ul>

                            <Link
                                to="/contact"
                                className="inline-block bg-blue-950 text-white py-2 px-6 rounded-full font-semibold hover:bg-blue-950 hover:transition hover:scale-105"
                            >
                                Order Now
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Price;
