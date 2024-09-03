
import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setIsScrolled(true);
        controls.start({
          height: 60,
          backgroundColor: "rgba(255, 255, 255, 0.9)",
        });
      } else {
        setIsScrolled(false);
        controls.start({
          height: 80,
          backgroundColor: "rgba(255, 255, 255, 1)",
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <motion.header
      className="fixed top-0 left-0 w-full z-50"
      initial={{ height: 80, backgroundColor: "rgba(255, 255, 255, 1)" }}
      animate={controls}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <motion.img
            src="/logo.svg"
            alt="DMHedges Logo"
            className="h-12 w-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          />
        </Link>

        <nav className="hidden md:flex space-x-6">
          {["About", "Services", "Testimonials", "FaQ"].map((item) => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link
                to={`/${item.toLowerCase()}`}
                className="text-green-800 hover:text-green-600 transition-colors duration-300"
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          

          {/* <motion.div
            className="relative"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link to="/cart" className="text-green-800 hover:text-green-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </Link>
          </motion.div> */}

          <motion.div
  className="relative"
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
>
  <Link to="/contact" className="text-green-800 hover:text-green-600 flex items-center space-x-2 p-4 bg-green-100 rounded-lg shadow-lg">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M2 8.5C2 7.12 3.12 6 4.5 6h15c1.38 0 2.5 1.12 2.5 2.5v7c0 1.38-1.12 2.5-2.5 2.5h-15C3.12 18 2 16.88 2 15.5v-7zM4.5 8a.5.5 0 00-.5.5v7c0 .28.22.5.5.5h15a.5.5 0 00.5-.5v-7a.5.5 0 00-.5-.5h-15zM4 8h16v1H4V8zm0 2h16v1H4v-1zm0 2h16v1H4v-1z"
      />
    </svg>
    <span>Contact Us</span>
  </Link>
</motion.div>

        </div>
      </div>
    </motion.header>
  );
};

export default Header;
