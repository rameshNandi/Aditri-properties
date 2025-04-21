"use client";
import React from "react";

const CommercialOptions = () => {
  return (
    <div className="w-full flex flex-col items-center px-4 py-12 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
        Choose from a wide variety of <br className="hidden md:block" />
        properties
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full h-[400px]">
        {/* Buy Option */}
        <div
          className="relative bg-gray-100 rounded-xl shadow-md p-8 flex flex-col justify-center bg-cover bg-center overflow-hidden"
          style={{ backgroundImage: `url('/home/commercial.jpg')` }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-white opacity-60 rounded-xl"></div>

          {/* Content */}
          <div className="relative z-10">
            <p className="text-sm font-semibold text-gray-200">
              BUY FOR COMMERCIAL USE
            </p>
            <h3 className="text-2xl font-bold text-white mt-2">
              Buy a Commercial property
            </h3>
            <p className="text-gray-100 mt-4">
              Explore from Office Spaces, Co-working spaces, Retail Shops, Land,
              Factories and more
            </p>
            <button className="mt-6 bg-blue-600 text-white font-semibold px-5 py-2 rounded hover:bg-blue-700 w-fit">
              Explore Buying Commercial
            </button>
          </div>
        </div>

        {/* Lease Option */}
        <div
          className="bg-gray-100 rounded-xl shadow-md p-8 flex flex-col justify-center bg-cover bg-center"
          style={{ backgroundImage: `url('/home/residential.jpg')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-white opacity-60 rounded-xl"></div>

          <div className="relative z-10">
            {/* Content */}
            <p className="text-sm font-semibold text-gray-200">
              BUY FOR RESIDENTIAL USE
            </p>
            <h3 className="text-2xl font-bold text-white mt-2">
              Lease a Residential property
            </h3>
            <p className="text-gray-100 mt-4">
              Discover houses, apartments, villas, and more residential
              properties available for lease in your area.
            </p>
          </div>
          <button className="mt-6 bg-orange-700 text-white font-semibold px-5 py-2 rounded hover:bg-red-700 w-fit">
            Explore Residential Leasing
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommercialOptions;
