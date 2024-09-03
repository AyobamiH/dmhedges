
import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    text: 'DMHedges transformed our backyard into a beautiful oasis. Their team was professional, creative, and attentive to our needs.',
    image: '/sarah-johnson.jpg',
  },
  {
    id: 2,
    name: 'Michael Chen',
    text: "I've been using DMHedges for my garden maintenance for years. They always do an exceptional job and are a pleasure to work with.",
    image: '/michael-chen.jpg',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    text: "The organic gardening workshop I attended at DMHedges was incredibly informative. I learned so much and can't wait to apply it to my own garden!",
    image: '/emily-rodriguez.jpg',
  },
];

const CustomerTestimonials = () => {
  return (
    <section className="py-12 bg-green-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <div className="flex items-center mb-4">
                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                <h3 className="text-lg font-semibold">{testimonial.name}</h3>
              </div>
              <p className="text-gray-600 italic">{testimonial.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerTestimonials;