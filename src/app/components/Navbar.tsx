'use client'
import React from 'react';

const Navbar = () => {
  return (
    <>
      <header className="absolute top-0 left-0 right-0 px-4 md:px-12 z-10 backdrop-blur-lg bg-white/70 border-b border-white/20 shadow-lg">
        <div className="max-w-[85rem] mx-auto px-8 sm:px-10 lg:px-12">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <a href="/" className="text-xl font-bold text-black">
                <img src={process.env.LOGO as string} alt="" />
              </a>
            </div>

            {/* Navigation Links */}
            <nav className="flex items-center space-x-6">
              <div className="flex space-x-6 text-gray-900 font-medium">
                <a href="#" className="hover:text-purple-600 transition-colors">Home</a>
                <a href="#" className="hover:text-purple-600 transition-colors">Schedule</a>
                <a href="#" className="hover:text-purple-600 transition-colors">Appointments</a>
                <a href="#" className="hover:text-purple-600 transition-colors">About</a>
                <a href="#" className="hover:text-purple-600 transition-colors">Contact</a>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
