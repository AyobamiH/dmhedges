import React from 'react';
import { motion } from 'framer-motion';

const stories = [
  { title: 'Attract new clients', description: 'Witness a 20% increase...', logo: '/images/servicestoryone.png' },
  { title: 'Boost in garden care', description: 'Achieve a 30% boost...', logo: 'images/servicestorytwo.png' },
  { title: 'Enhance your landscape', description: 'Partner with us...', logo: '/images/servicestorythree.png' },
];

const ServiceStories = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Service Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <img src={story.logo} alt={story.title} className="w-full h-40 object-cover rounded-md" />
              <h3 className="mt-6 text-xl font-semibold">{story.title}</h3>
              <p className="mt-4">{story.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceStories;
