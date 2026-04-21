import React from 'react';
import { Link } from 'react-router';

const NotFound = () => {
    return (
         <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-4">
      
      {/* Big 404 */}
      <h1 className="text-7xl md:text-9xl font-bold text-gray-800">
        404
      </h1>

      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-semibold mt-4 text-gray-700">
        Page Not Found
      </h2>

      {/* Description */}
      <p className="text-gray-500 mt-2 text-center max-w-md">
        Sorry, the page you are looking for doesn’t exist or has been moved.
      </p>

      {/* Button */}
      <Link to="/">
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
          Go Back Home
        </button>
      </Link>

    </div>
    );
};

export default NotFound;