// src/components/GlobalImpact.tsx
import React from 'react';

const GlobalImpact: React.FC = () => {
  return (
    <div className="py-20 bg-white" id='global-impart'>
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-bold text-green-900 text-center mb-12 animate-slide-in">
          Managing 5GW of Renewable Energy Worldwide
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center animate-fade-in-up">
            <h3 className="text-6xl font-bold text-green-600">15+</h3>
            <p className="text-green-700">Countries Served</p>
          </div>
          <div className="text-center animate-fade-in-up delay-200">
            <h3 className="text-6xl font-bold text-green-600">2.5M</h3>
            <p className="text-green-700">Tons of CO2 Reduced Annually</p>
          </div>
          <div className="text-center animate-fade-in-up delay-400">
            <h3 className="text-6xl font-bold text-green-600">500+</h3>
            <p className="text-green-700">Projects Implemented</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalImpact;