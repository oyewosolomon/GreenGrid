// src/components/AboutUs.tsx
import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-bold text-green-900 text-center mb-8 animate-slide-in">
          Driving the Transition to Clean Energy
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <p className="text-lg text-green-700 mb-6">
              At GreenGrid Solutions, we are committed to revolutionizing the way renewable energy is managed and utilized. Our platform seamlessly integrates solar, wind, and battery storage systems to deliver reliable, efficient, and sustainable energy solutions.
            </p>
            <p className="text-lg text-green-700 mb-6">
              With a global footprint managing <strong>5GW of renewable capacity</strong>, we empower utilities, businesses, and communities to achieve their sustainability goals.
            </p>
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-all">
              Learn More About Our Mission
            </button>
          </div>
          <div className="animate-slide-in-right">
            <img src="/images/about-us.jpg" alt="About Us" className="rounded-lg shadow-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;