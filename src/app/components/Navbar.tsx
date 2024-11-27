import React from 'react';

const Navbar = () => {
  return (
    <>
      <header className="px-4 md:px-12 z-10 bg-white/30 backdrop-blur-lg border border-white/20 shadow-lg">
        <div className="max-w-[85rem] mx-auto px-8 sm:px-10 lg:px-12">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <a href="/" className="text-xl font-bold text-black dark:text-white">Fortuna AI</a>
            </div>

            {/* Navigation Links */}
            <div className="flex items-center space-x-6">
              <div className="flex space-x-6 text-gray-900 dark:text-gray-200 font-medium">
                <a href="#" className="hover:text-blue-600 transition-colors">Dashboard</a>
                <a href="#" className="hover:text-blue-600 transition-colors">About</a>
                <a href="#" className="hover:text-blue-600 transition-colors">Projects</a>
                <a href="#" className="hover:text-blue-600 transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
