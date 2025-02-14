// src/components/FAQ.tsx
import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "How does GreenGrid Solutions integrate solar and wind energy?",
      answer: "Our platform uses advanced algorithms to balance energy production from solar and wind sources, ensuring optimal grid stability.",
    },
    {
      question: "Can I trade energy using your platform?",
      answer: "Yes, our energy trading tools allow peer-to-peer energy trading and participation in energy markets.",
    },
    {
      question: "What analytics tools do you provide?",
      answer: "We offer real-time consumption analytics to help you understand and optimize your energy usage.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="py-20 bg-green-50" id='faqs'>
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-bold text-green-900 text-center mb-12 animate-slide-in">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left text-green-900 font-semibold flex justify-between items-center"
              >
                <span>{faq.question}</span>
                <span className="text-green-600">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>
              {activeIndex === index && (
                <p className="mt-4 text-green-700">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;