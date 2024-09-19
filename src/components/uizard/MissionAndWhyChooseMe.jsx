import React from 'react';
import { motion } from 'framer-motion';

const WhyChooseMeSection = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Why Choose Me?</h2>
          <ul className="space-y-6 text-left">
            <li className="text-lg font-semibold text-gray-800">
              Experience & Expertise: 
              <span className="font-normal"> With over [Number] years of experience in hedge cutting, ivy removal, and shrub shaping, I bring a wealth of knowledge to every project.</span>
            </li>
            <li className="text-lg font-semibold text-gray-800">
              Personalized Service: 
              <span className="font-normal"> I tailor my services to meet your unique needs.</span>
            </li>
            <li className="text-lg font-semibold text-gray-800">
              Reliability: 
              <span className="font-normal"> Punctual, professional, and dedicated to completing projects on time and within budget.</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseMeSection;
