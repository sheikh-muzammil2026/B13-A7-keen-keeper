import React from 'react';
import { Link } from 'react-router';

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-[#F8FAFC] px-4 text-center">

            {/* 404 */}
            <h1 className="text-6xl md:text-9xl font-bold text-[#244D3F]">
                404
            </h1>

            {/* Title */}
            <h2 className="text-xl md:text-3xl font-semibold mt-4 text-gray-700">
                Page Not Found
            </h2>

            {/* Description */}
            <p className="text-gray-500 mt-2 max-w-md text-sm md:text-base">
                Sorry, the page you are looking for doesn’t exist or has been moved.
            </p>

            {/* Button */}
            <Link to="/">
                <button className="mt-6 px-6 py-3 bg-[#244D3F] text-white rounded-lg shadow hover:opacity-90 transition">
                    Go Back Home
                </button>
            </Link>

        </div>
    );
};

export default NotFound;

