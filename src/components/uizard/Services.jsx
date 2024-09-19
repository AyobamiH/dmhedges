


import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Hedge Cutting',
    image: '/images/hedgecutting.jpeg',
    description:
      'Maintain the perfect look for your hedges with my precise hedge cutting services. Whether it\'s for privacy, aesthetics, or property boundaries, I ensure your hedges are trimmed to perfection.',
  },
  {
    title: 'Shrub and Bush Shaping',
    image: '/images/shrub-shaping.jpeg',
    description:
      'Enhance the natural beauty of your garden with my shrub and bush shaping services. I skillfully prune and shape to promote healthy growth and create stunning visual appeal.',
  },
  {
    title: 'Ivy Removal from Walls and Buildings',
    image: '/images/ivy-removal.jpeg',
    description:
      'Ivy can add character but may also cause structural damage if left unchecked. My ivy removal service safely eliminates unwanted growth while preserving the integrity of your buildings.',
  },
];

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="services" className="py-12 bg-white scroll-mt-20">
      <div className="container mx-auto text-center">
        {/* Section Header */}
        <section className="py-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#5c7625]">
            My Services
          </h2>
          <div className="w-24 h-1 mx-auto mt-4 bg-[#5c7625]"></div>
        </section>

        {/* Services List */}
        <div className="space-y-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className={`${
                index % 2 === 0 ? 'bg-[#5c7625]' : 'bg-white'
              } flex flex-col ${
                index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
              } max-w-6xl mx-auto rounded-xl shadow-lg overflow-hidden`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full mx-auto aspect-video  object-cover rounded-md"
                />
                
              </div>

              {/* Content */}
              <div
                className={`flex flex-col justify-center items-center text-center w-full md:w-1/2 p-6 md:p-8 ${
                  index % 2 === 0 ? 'text-white' : 'text-gray-800'
                }`}
              >
                {/* Title */}
                <h3 className="mt-4 text-2xl md:text-3xl font-bold">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-base md:text-lg leading-relaxed">
                  {service.description}
                </p>

                {/* Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className={`mt-6 ${
                    index % 2 === 0
                      ? 'bg-white text-[#5c7625]'
                      : 'bg-[#5c7625] text-white'
                  } px-6 py-3 rounded-full text-base font-semibold focus:outline-none`}
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
