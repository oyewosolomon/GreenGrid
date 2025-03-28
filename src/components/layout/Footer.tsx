// src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-900 text-white py-12">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle fill="none" stroke="#ffffff" stroke-width="2" stroke-miterlimit="10" cx="32" cy="32" r="31"></circle> <line fill="none" stroke="#ffffff" stroke-width="2" stroke-miterlimit="10" x1="32" y1="5" x2="17" y2="5"></line> <line fill="none" stroke="#ffffff" stroke-width="2" stroke-miterlimit="10" x1="32" y1="11" x2="9" y2="11"></line> <line fill="none" stroke="#ffffff" stroke-width="2" stroke-miterlimit="10" x1="32" y1="17" x2="5" y2="17"></line> <line fill="none" stroke="#ffffff" stroke-width="2" stroke-miterlimit="10" x1="32" y1="23" x2="2" y2="23"></line> <line fill="none" stroke="#ffffff" stroke-width="2" stroke-miterlimit="10" x1="32" y1="29" x2="1" y2="29"></line> <line fill="none" stroke="#ffffff" stroke-width="2" stroke-miterlimit="10" x1="32" y1="63" x2="32" y2="1"></line> <line fill="none" stroke="#ffffff" stroke-width="2" stroke-miterlimit="10" x1="32" y1="35" x2="1" y2="35"></line> <line fill="none" stroke="#ffffff" stroke-width="2" stroke-miterlimit="10" x1="32" y1="41" x2="2" y2="41"></line> <line fill="none" stroke="#ffffff" stroke-width="2" stroke-miterlimit="10" x1="32" y1="47" x2="5" y2="47"></line> <line fill="none" stroke="#ffffff" stroke-width="2" stroke-miterlimit="10" x1="32" y1="53" x2="9" y2="53"></line> <line fill="none" stroke="#ffffff" stroke-width="2" stroke-miterlimit="10" x1="32" y1="59" x2="17" y2="59"></line> </g></svg>
         
              GreenGrid</h3>
            <p className="text-green-200">Empowering a sustainable future with intelligent renewable energy management.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-green-200 hover:text-white">About</a></li>
              <li><a href="#" className="text-green-200 hover:text-white">Solutions</a></li>
              <li><a href="#" className="text-green-200 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-green-200">Email: info@greengridsolutions.com</p>
            <p className="text-green-200">Phone: +234 (800) 123-4567</p>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;