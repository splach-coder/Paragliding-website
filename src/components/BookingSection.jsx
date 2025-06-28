import React from 'react';

const BookingSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
      {/* Left - Image */}
      <div className="relative h-full min-h-[400px]">
        <img 
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1000&h=800&fit=crop&q=80" 
          alt="Ready to fly"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute bottom-8 left-8 text-white">
          <h2 className="text-3xl lg:text-4xl font-light tracking-wide">
            READY TO FLY?
          </h2>
        </div>
      </div>

      {/* Right - Booking Form */}
      <div className="bg-gray-50 p-6 lg:p-8 h-full">
        <h3 className="text-2xl font-light text-black mb-6 tracking-wide">
          BOOK YOUR FLIGHT
        </h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600 mb-2 tracking-wide">
              LOCATION
            </label>
            <select className="w-full p-3 border border-gray-300 bg-white text-black focus:outline-none focus:border-black">
              <option>Agafay Desert</option>
              <option>Atlas Mountains</option>
              <option>Ourika Valley</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm text-gray-600 mb-2 tracking-wide">
              DATE
            </label>
            <input 
              type="date"
              className="w-full p-3 border border-gray-300 bg-white text-black focus:outline-none focus:border-black"
            />
          </div>
          
          <div>
            <label className="block text-sm text-gray-600 mb-2 tracking-wide">
              EXPERIENCE LEVEL
            </label>
            <select className="w-full p-3 border border-gray-300 bg-white text-black focus:outline-none focus:border-black">
              <option>Beginner (Tandem Flight)</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </div>
          
          <button className="w-full py-3 bg-black text-white text-sm font-medium tracking-wide hover:bg-gray-800 transition-colors duration-300 mt-6">
            SEARCH FLIGHTS
          </button>
          
          <div className="text-center pt-4">
            <p className="text-sm text-gray-600">Starting from</p>
            <p className="text-xl font-light text-black">700 DHS / 67 €</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSection;