// src/components/Homepage.tsx
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex flex-col justify-center items-center text-center p-8 mt-20">
      <h1 className="text-6xl font-bold text-green-900 mb-4 animate-fade-in">
        Empowering a Sustainable Future
      </h1>
      <p className="text-xl text-green-700 mb-8 animate-fade-in delay-200">
        Integrating Solar, Wind, and Battery Storage for a Smarter, Greener Grid
      </p>
      <div className="flex gap-4 animate-fade-in delay-400">
        <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-all">
          Explore Our Solutions
        </button>
        <button className="bg-transparent border-2 border-green-600 text-green-600 px-6 py-3 rounded-lg hover:bg-green-600 hover:text-white transition-all">
          Request a Demo
        </button>
      </div>
      <div className="mt-16 animate-fade-in delay-600">
      <img
          src="https://images.unsplash.com/photo-1487611459768-bd414656ea10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Solar Panels and Wind Turbines"
          className="w-full max-w-4xl rounded-lg shadow-2xl"
        />
        </div>
    </div>
  );
};

export default Hero;