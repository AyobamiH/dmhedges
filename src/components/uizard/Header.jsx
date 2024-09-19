import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full px-4 py-4 flex justify-between items-center bg-white shadow-md sticky top-0 z-50">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex items-center"
      >
        <img src="/images/leaf.svg" alt="Logo" className="w-8 h-8" />
        <span className="ml-2 text-xl hover:text-[#5c7625] font-bold text-[#3b4b18]">
          DM HEDGES <br/> Landscaping
        </span>
      </motion.div>

      {/* Hamburger Menu Icon (Mobile) */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-800 focus:outline-none"
        >
          {isOpen ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Navigation Links */}
      <nav
        className={`${
          isOpen ? 'block shadow-md' : 'hidden'
        } absolute top-full left-0 w-full bg-white md:static md:block md:w-auto`}
      >
        <ul className="flex flex-col md:flex-row md:space-x-6 items-center">
          {/* Home Link */}
          <li className="w-full md:w-auto">
            <Link
              to="/"
              className="block py-2 px-4 text-gray-800 hover:text-[#5c7625] transition"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          {/* Services Link */}
          <li className="w-full md:w-auto">
            <Link
              to="/services"
              className="block py-2 px-4 text-gray-800 hover:text-[#5c7625] transition"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
          </li>
          {/* About Link */}
          <li className="w-full md:w-auto">
            <HashLink
              smooth
              to="/#about"
              className="block py-2 px-4 text-gray-800 hover:text-[#5c7625] transition"
              onClick={() => setIsOpen(false)}
            >
              About
            </HashLink>
          </li>
          {/* Contact Button */}
          <li className="w-full md:w-auto mt-2 md:mt-0">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="/contact"
              className="block text-center bg-[#5c7625] text-white font-bold py-2 px-6 rounded-full shadow-lg transition-transform"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </motion.a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
