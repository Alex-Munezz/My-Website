import React from 'react';
import AM from './images/AM.png';

const Navbar = () => {
  return (
    <nav className="bg-transparent py-4 px-8 flex justify-between items-center">
      <div className="flex items-center">
        <img src={AM} alt="Alex Murithi Logo" className="w-16 h-auto" />
      </div>
      <div className="flex space-x-6">
        <a href="#about" className="text-white hover:text-gray-300">About</a>
        <a href="#skills" className="text-white hover:text-gray-300">Skills</a>
        <a href="#contact" className="text-white hover:text-gray-300">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
