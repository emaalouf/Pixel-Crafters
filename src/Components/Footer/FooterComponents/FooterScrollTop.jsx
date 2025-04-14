import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const FooterScrollTop = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        visible && (
            <button
                onClick={scrollToTop}
                className="fixed bottom-6 right-6 z-50 bg-[#FFB800] text-blue-950 px-4 py-3 rounded-md shadow-md hover:bg-[#FFB800] hover:text-blue-950 cursor-pointe ver:transition hover:scale-105  duration-300 flex items-center gap-2"
            >
                <FaArrowUp className="text-lg" />
            </button>
        )
    );
};

export default FooterScrollTop;
