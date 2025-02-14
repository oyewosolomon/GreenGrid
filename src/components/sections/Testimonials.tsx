// src/components/Testimonials.tsx
import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "GreenGrid Solutions transformed our energy management system. Their platform is intuitive and highly effective.",
      author: "John Doe, CEO of EcoEnergy",
    },
    {
      quote: "The grid balancing services have significantly improved our operational efficiency. Highly recommended!",
      author: "Jane Smith, CTO of GreenTech",
    },
    {
      quote: "We’ve reduced our energy costs by 30% thanks to GreenGrid’s consumption analytics tools.",
      author: "Michael Brown, Operations Manager at SolarWorks",
    },
  ];

  return (
    <div className="py-20 bg-green-50" id='testimonials'>
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-bold text-green-900 text-center mb-12 animate-slide-in">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all animate-fade-in-up">
              <p className="text-green-700 italic mb-4">"{testimonial.quote}"</p>
              <p className="text-green-900 font-semibold">- {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;