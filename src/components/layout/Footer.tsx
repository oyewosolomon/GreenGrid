// src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-900 text-white py-12">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">GreenGrid</h3>
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