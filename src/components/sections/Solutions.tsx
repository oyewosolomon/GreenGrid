// src/components/Solutions.tsx
import React from 'react';

const Solutions: React.FC = () => {
  const solutions = [
    {
      title: "Grid Balancing Services",
      description: "Ensure grid stability with real-time monitoring and predictive analytics.",
      icon: "⚡",
    },
    {
      title: "Energy Trading Tools",
      description: "Facilitate peer-to-peer energy trading and market participation.",
      icon: "💰",
    },
    {
      title: "Consumption Analytics",
      description: "Gain insights into energy usage patterns and reduce costs.",
      icon: "📊",
    },
    {
      title: "Integrated Renewable Systems",
      description: "Seamlessly manage solar, wind, and battery storage in one platform.",
      icon: "🌍",
    },
  ];

  return (
    <div className="py-20 bg-green-50" id='solutions'>
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-bold text-green-900 text-center mb-12 animate-slide-in">
          Comprehensive Renewable Energy Management Solutions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all animate-fade-in-up">
              <div className="text-4xl mb-4">{solution.icon}</div>
              <h3 className="text-xl font-bold text-green-900 mb-4">{solution.title}</h3>
              <p className="text-green-700">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solutions;