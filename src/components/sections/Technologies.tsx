// src/components/Technology.tsx
import React from 'react';

const Technology: React.FC = () => {
  const technologies = [
    {
      title: "AI-Powered Analytics",
      description: "Predictive insights for optimal energy management.",
      icon: "🤖",
    },
    {
      title: "IoT Integration",
      description: "Real-time monitoring of renewable assets.",
      icon: "📡",
    },
    {
      title: "Blockchain for Energy Trading",
      description: "Secure and transparent transactions.",
      icon: "🔗",
    },
    {
      title: "Scalable Cloud Platform",
      description: "Adaptable to any size of renewable energy operation.",
      icon: "☁️",
    },
  ];

  return (
    <div className="py-20 bg-white" id='technologies'>
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-bold text-green-900 text-center mb-12 animate-slide-in">
          Innovative Technology for a Sustainable Future
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <div key={index} className="bg-green-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all animate-fade-in-up">
              <div className="text-4xl mb-4">{tech.icon}</div>
              <h3 className="text-xl font-bold text-green-900 mb-4">{tech.title}</h3>
              <p className="text-green-700">{tech.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-all">
            See Our Technology in Action
          </button>
        </div>
      </div>
    </div>
  );
};

export default Technology;