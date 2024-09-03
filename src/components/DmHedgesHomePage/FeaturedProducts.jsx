/**
 * This code was generated by Builder.io.
 */
import React from "react";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    name: "Organic Fertilizer",
    price: "$19.99",
    image: "/fertilizer.jpg",
  },
  { id: 2, name: "Pruning Shears", price: "$24.99", image: "/shears.jpg" },
  { id: 3, name: "Garden Hose", price: "$34.99", image: "/hose.jpg" },
  { id: 4, name: "Flower Seeds Mix", price: "$9.99", image: "/seeds.jpg" },
];

const FeaturedProducts = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600">{product.price}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full transition duration-300"
                >
                  Add to Cart
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
