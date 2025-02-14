// src/components/Newsletter.tsx
import React from 'react';

const Newsletter: React.FC = () => {
  return (
    <div className="py-20 bg-green-900" id='newsletter'>
      <div className="container mx-auto px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-4 animate-slide-in">
          Stay Updated
        </h2>
        <p className="text-green-200 mb-8 animate-slide-in delay-200">
          Subscribe to our newsletter for the latest news and updates.
        </p>
        <form className="max-w-md mx-auto animate-fade-in-up">
          <div className="flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 p-3 rounded-lg focus:outline-none"
            />
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-all"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;