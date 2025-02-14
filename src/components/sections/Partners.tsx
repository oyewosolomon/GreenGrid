// src/components/Partners.tsx
import React from 'react';
import { motion } from 'framer-motion';

const Partners: React.FC = () => {
  const partners = [
    {
      name: "SolarTech",
      logo: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
    },
    {
      name: "WindPower Inc.",
      logo: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
    },
    {
      name: "EcoGrid",
      logo: "https://images.unsplash.com/photo-1624397640148-949b1732bb0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
    },
    {
      name: "GreenBattery",
      logo: "https://images.unsplash.com/photo-1624397640148-949b1732bb0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
    },
    {
      name: "RenewableX",
      logo: "https://images.unsplash.com/photo-1487611459768-bd414656ea10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
    },
    {
      name: "CleanEnergy Co.",
      logo: "https://images.unsplash.com/photo-1487611459768-bd414656ea10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
    
    },
  ];

  // Animation variants for Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.1, transition: { type: "spring", stiffness: 300 } },
  };

  return (
    <div className="py-20 bg-white" id='partners'>
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-bold text-green-900 text-center mb-12 animate-slide-in">
          Our Trusted Partners
        </h2>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              className="text-center flex flex-col justify-center items-center p-6 bg-green-50 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              variants={itemVariants}
              whileHover="hover"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-24 h-24 object-contain rounded-xl grayscale hover:grayscale-0 transition-all duration-300"
              />
              <div>
              {partner.name}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Partners;