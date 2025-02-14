// src/components/Resources.tsx
import React from 'react';

const Resources: React.FC = () => {
  const resources = [
    {
      title: "Whitepaper: The Future of Grid Balancing",
      link: "#",
    },
    {
      title: "Webinar: Optimizing Renewable Energy Systems",
      link: "#",
    },
    {
      title: "Blog: Latest Trends in Renewable Energy",
      link: "#",
    },
  ];

  return (
    <div className="py-20 bg-green-50" id='resources'>
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-bold text-green-900 text-center mb-12 animate-slide-in">
          Insights and Tools for Renewable Energy Success
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all animate-fade-in-up">
              <h3 className="text-xl font-bold text-green-900 mb-4">{resource.title}</h3>
              <a href={resource.link} className="text-green-600 hover:text-green-700 underline">
                Download
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources;