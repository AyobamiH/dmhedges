import React from 'react';
import { motion } from 'framer-motion';

const OfferSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="py-12 bg-red-500 text-white text-center"
    >
      <h2 className="text-4xl font-bold">Get a 50% off today.</h2>
      <p className="mt-4">Get your 50% offer with no obligations.</p>
      <motion.button
        whileHover={{ scale: 1.1 }}
        className="mt-6 bg-white text-red-500 py-3 px-6 rounded-lg"
      >
        Get offer
      </motion.button>
    </motion.section>
  );
};

export default OfferSection;
