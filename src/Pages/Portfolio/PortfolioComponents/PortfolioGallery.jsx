import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';

const PortfolioGallery = () => {
    const [categories, setCategories] = useState([]);
    const [items, setItems] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('all');


    useEffect(() => {
        fetch('/serviceCategory.json')
            .then((res) => res.json())
            .then((data) => setCategories(data));

        fetch('/portfolioItems.json')
            .then((res) => res.json())
            .then((data) => setItems(data));
    }, []);

    const filteredItems = selectedCategory === 'all'
        ? items
        : items.filter(item => item.category === selectedCategory);

    return (
        <div className='bg-gray-100 py-10'>
            <div className="px-4 py-10 max-w-7xl mx-auto">
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setSelectedCategory(cat.id)}
                            className={`px-8 py-2 rounded-lg border font-semibold transition
              ${selectedCategory === cat.id
                                    ? 'bg-blue-950 text-white'
                                    : 'bg-gray-200 text-blue-950 hover:bg-[#FFB800]'}`}
                        >
                            {cat.name}
                        </button>
                    ))}
                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredItems.map((item) => (
                        <div key={item.id} className="relative group overflow-hidden rounded-xl shadow-lg">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
                            />

                            <div className="absolute inset-0 bg-blue-950 bg-opacity-20 opacity-0 group-hover:opacity-80 transition duration-300 flex flex-col justify-center items-center text-white">
                                <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                                <p className="text-sm mb-3 capitalize">{item.category}</p>
                                <Link to={item.link} className="bg-[#FFB800] text-blue-950 p-2 rounded-full hover:scale-110 transition">
                                    <FaEye className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PortfolioGallery;
