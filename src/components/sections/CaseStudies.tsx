// src/components/CaseStudies.tsx
import React from 'react';

const CaseStudies: React.FC = () => {
  const caseStudies = [
    {
      title: "Utility Company X",
      challenge: "Grid instability due to intermittent renewable energy sources.",
      solution: "Implemented GreenGrid’s grid balancing and analytics tools.",
      result: "20% improvement in grid reliability and $2M in annual savings.",
    },
    {
      title: "Commercial Business Y",
      challenge: "High energy costs and carbon emissions.",
      solution: "Deployed solar and battery storage with GreenGrid’s management platform.",
      result: "30% reduction in energy costs and 50% lower carbon footprint.",
    },
  ];

  return (
    <div className="py-20 bg-green-50" id='case-studies'>
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-bold text-green-900 text-center mb-12 animate-slide-in">
          Transforming Renewable Energy Management
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all animate-fade-in-up">
              <h3 className="text-2xl font-bold text-green-900 mb-4">{study.title}</h3>
              <p className="text-green-700 mb-4"><strong>Challenge:</strong> {study.challenge}</p>
              <p className="text-green-700 mb-4"><strong>Solution:</strong> {study.solution}</p>
              <p className="text-green-700"><strong>Result:</strong> {study.result}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-all">
            Read More Success Stories
          </button>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;