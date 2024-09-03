import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion'; // Assuming you're using Framer Motion for animations
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

const Footer = () => {
  const socialIcons = [
    { name: "Facebook", icon: faFacebookF, link: "https://facebook.com" },
    { name: "Twitter", icon: faTwitter, link: "https://twitter.com" },
    { name: "Instagram", icon: faInstagram, link: "https://instagram.com" },
    { name: "LinkedIn", icon: faLinkedinIn, link: "https://linkedin.com" },
  ];

  const quickLinks = [
    { name: "About Us", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Blog", link: "/blog" },
    { name: "Contact", link: "/contact" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", link: "/privacy-policy" },
    { name: "Terms of Service", link: "/terms-of-service" },
  ];

  return (
    <footer className="bg-green-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <motion.li
                  key={link.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={link.link}
                    className="hover:text-green-300 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <p>123 Garden Street, Green City, GC 12345</p>
            <p>Phone: (555) 123-4567</p>
            <p>Email: info@dmhedges.com</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialIcons.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-green-500 rounded-full hover:bg-green-600 transition-colors duration-200"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FontAwesomeIcon icon={social.icon} className="text-white" />
                </motion.a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter Signup</h3>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col space-y-2"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <motion.button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-green-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2023 DMHedges. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              {legalLinks.map((link) => (
                <motion.div
                  key={link.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={link.link}
                    className="hover:text-green-300 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
