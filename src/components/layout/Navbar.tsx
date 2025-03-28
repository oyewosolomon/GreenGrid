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
        <div className="text-white text-2xl gap-3 font-bold flex items-center">
          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle fill="none" stroke="#ffffff" stroke-width="2" stroke-miterlimit="10" cx="32" cy="32" r="31"></circle> <line fill="none" stroke="#ffffff" stroke-width="2" stroke-miterlimit="10" x1="32" y1="5" x2="17" y2="5"></line> <line fill="none" stroke="#ffffff" stroke-width="2" stroke-miterlimit="10" x1="32" y1="11" x2="9" y2="11"></line> <line fill="none" stroke="#ffffff" stroke-width="2" stroke-miterlimit="10" x1="32" y1="17" x2="5" y2="17"></line> <line fill="none" stroke="#ffffff" stroke-width="2" stroke-miterlimit="10" x1="32" y1="23" x2="2" y2="23"></line> <line fill="none" stroke="#ffffff" stroke-width="2" stroke-miterlimit="10" x1="32" y1="29" x2="1" y2="29"></line> <line fill="none" stroke="#ffffff" stroke-width="2" stroke-miterlimit="10" x1="32" y1="63" x2="32" y2="1"></line> <line fill="none" stroke="#ffffff" stroke-width="2" stroke-miterlimit="10" x1="32" y1="35" x2="1" y2="35"></line> <line fill="none" stroke="#ffffff" stroke-width="2" stroke-miterlimit="10" x1="32" y1="41" x2="2" y2="41"></line> <line fill="none" stroke="#ffffff" stroke-width="2" stroke-miterlimit="10" x1="32" y1="47" x2="5" y2="47"></line> <line fill="none" stroke="#ffffff" stroke-width="2" stroke-miterlimit="10" x1="32" y1="53" x2="9" y2="53"></line> <line fill="none" stroke="#ffffff" stroke-width="2" stroke-miterlimit="10" x1="32" y1="59" x2="17" y2="59"></line> </g></svg>
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