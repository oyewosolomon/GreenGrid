// src/components/ContactUs.tsx
import React from 'react';

const ContactUs: React.FC = () => {
  return (
    <div className="py-20 bg-green-50">
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-bold text-green-900 text-center mb-12 animate-slide-in">
          Let’s Build a Sustainable Future Together
        </h2>
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all animate-fade-in-up">
          <form>
            <div className="mb-6">
              <label className="block text-green-700 mb-2">Name</label>
              <input type="text" className="w-full p-2 border border-green-300 rounded-lg" />
            </div>
            <div className="mb-6">
              <label className="block text-green-700 mb-2">Email</label>
              <input type="email" className="w-full p-2 border border-green-300 rounded-lg" />
            </div>
            <div className="mb-6">
              <label className="block text-green-700 mb-2">Message</label>
              <textarea className="w-full p-2 border border-green-300 rounded-lg" rows={5} />
            </div>
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-all">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;