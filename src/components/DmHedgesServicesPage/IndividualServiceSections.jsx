/**
 * This code was generated by Builder.io.
 */
import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Landscape Design",
    description:
      "Our landscape design service brings your vision to life. We work closely with you to create a custom outdoor space that reflects your style and meets your needs. From concept to completion, our expert designers will guide you through the process, considering factors such as soil type, climate, and your personal preferences.",
    image: "/images/landscape-design.jpg",
  },
  {
    title: "Garden Maintenance",
    description:
      "Keep your garden looking its best with our comprehensive maintenance services. We offer regular lawn care, pruning, weeding, fertilizing, and pest control. Our team of experienced gardeners will ensure your outdoor space remains healthy and beautiful throughout the seasons.",
    image: "/images/garden-maintenance.jpg",
  },
  {
    title: "Irrigation Systems",
    description:
      "Efficient watering is crucial for a thriving garden. Our irrigation system services include design, installation, and maintenance of state-of-the-art watering solutions. We use smart technology to optimize water usage, saving you money and helping the environment.",
    image: "/images/irrigation-systems.jpg",
  },
  {
    title: "Hardscaping",
    description:
      "Enhance your outdoor living space with our hardscaping services. We design and construct durable, beautiful features such as patios, walkways, retaining walls, and outdoor kitchens. Our skilled craftsmen use high-quality materials to create functional and aesthetically pleasing hardscape elements that complement your landscape.",
    image: "/images/hardscaping.jpg",
  },
];

const IndividualServiceSections = () => {
  return (
    <section className="mb-12">
      {services.map((service, index) => (
        <motion.div
          key={service.title}
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.2 }}
          className="mb-12 flex flex-col md:flex-row items-center"
        >
          <div
            className={`md:w-1/2 ${
              index % 2 === 0 ? "md:pr-6" : "md:order-2 md:pl-6"
            }`}
          >
            <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition duration-300"
            >
              Learn More
            </motion.button>
          </div>
          <motion.div
            className={`md:w-1/2 mt-6 md:mt-0 ${
              index % 2 === 0 ? "md:order-2" : ""
            }`}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={service.image}
              alt={service.title}
              className="rounded-lg shadow-md"
            />
          </motion.div>
        </motion.div>
      ))}
    </section>
  );
};

export default IndividualServiceSections;
