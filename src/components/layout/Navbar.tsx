// src/components/Navbar.tsx
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-green-900 p-6 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          GreenGrid
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="block md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-white hover:text-green-400 transition-all">
            Home
          </a>
          <a href="#about" className="text-white hover:text-green-400 transition-all">
            About
          </a>
          <a href="#solutions" className="text-white hover:text-green-400 transition-all">
            Solutions
          </a>
          <a href="#case-studies" className="text-white hover:text-green-400 transition-all">
            Case Studies
          </a>
          <a href="#contact" className="text-white hover:text-green-400 transition-all">
            Contact
          </a>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <div className="md:hidden mt-4">
          <a href="#" className="block text-white py-2 hover:text-green-400 transition-all">
            Home
          </a>
          <a href="#about" className="block text-white py-2 hover:text-green-400 transition-all">
            About
          </a>
          <a href="#solutions" className="block text-white py-2 hover:text-green-400 transition-all">
            Solutions
          </a>
          <a href="#case-studies" className="block text-white py-2 hover:text-green-400 transition-all">
            Case Studies
          </a>
          <a href="#contact" className="block text-white py-2 hover:text-green-400 transition-all">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;