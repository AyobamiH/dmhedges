import React from 'react';
import { motion } from 'framer-motion';

const MissionSection = () => {
  return (
    <section className="w-full bg-gray-100 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-6">My Mission</h2>
          <p className="text-lg text-gray-700 mb-8">
            To provide exceptional landscaping services that exceed my clients' expectations while enhancing the natural beauty of their properties.
          </p>
          <ul className="space-y-4">
            <li className="text-lg font-semibold text-gray-800">
              Quality Craftsmanship: 
              <span className="font-normal"> I take pride in my attention to detail and commitment to excellence.</span>
            </li>
            <li className="text-lg font-semibold text-gray-800">
              Customer Satisfaction: 
              <span className="font-normal"> Your needs and preferences are my top priority.</span>
            </li>
            <li className="text-lg font-semibold text-gray-800">
              Environmental Stewardship: 
              <span className="font-normal"> I use eco-friendly practices to protect and nurture the environment.</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionSection;
