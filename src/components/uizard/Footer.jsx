// import React from 'react';

// const Footer = () => {
//   return (
//     <>
//       {/* Footer */}
//       <footer className="w-full text-white bg-[#5c7625] mt-20 py-12">
//         <div className="max-w-screen-lg mx-auto flex justify-between text-sm">
//           <div>
//             <p className="font-bold">DM</p>
//             <p>2021 © DM HEDGES All rights reserved.</p>
//           </div>
//           <div className="flex space-x-8">
//             <div className="space-y-1">
//               <p>Professional</p>
//               <p>Expert</p>
//               <p>Discover</p>
//               <p>Get In</p>
//             </div>
//             <div className="space-y-1">
//               <p>Facebook</p>
//               <p>Instagram</p>
//               <p>Twitter</p>
//               <p>LinkedIn</p>
//             </div>
//             <div className="space-y-1">
//               <p>Privacy Policy</p>
//               <p>Terms Of Service</p>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// };

// export default Footer;



import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="w-full bg-[#5c7625] text-white py-8">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start">
          {/* Logo and Description */}

          <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex items-center mb-8"
      >
        <img src="/images/whiteleaf.svg" alt="Logo" className="w-8 h-8" />
        <span className="ml-2 text-xl  font-bold text-[#fff]">
         DM HEDGES <br/> Landscaping
        </span>
      </motion.div>
          

          {/* Navigation Links */}
          <div className="flex flex-col sm:flex-row sm:justify-between md:w-2/3">
            {/* Column 1 */}
            <div className="mb-6 sm:mb-0 sm:w-1/3">
              <p className="font-semibold mb-2">Services</p>
              <ul className="space-y-1">
                <li>Hedge Cutting</li>
                <li>Shrub Shaping</li>
                <li>Ivy Removal</li>
                <li>Garden Maintenance</li>
              </ul>
            </div>
            {/* Column 2 */}
            <div className="mb-6 sm:mb-0 sm:w-1/3">
              <p className="font-semibold mb-2">Follow Us</p>
              <ul className="space-y-1">
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>LinkedIn</li>
              </ul>
            </div>
            {/* Column 3 */}
            <div className="sm:w-1/3">
              <p className="font-semibold mb-2">Legal</p>
              <ul className="space-y-1">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Contact</li>
                <li>FAQ</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-white opacity-50"></div>

        {/* Bottom Section */}
        <div className="text-center text-sm">
          <span> © {new Date().getFullYear()} </span>
          <p className="flex items-center justify-center">
            Designed by{' '}
            <a
              href="https://www.facebook.com/friendlylocaldeveloper"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:underline ml-1 flex items-center"
            >
              <FontAwesomeIcon icon={faFacebook} className="mr-1" />
              Ayobami John Haastrup
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
