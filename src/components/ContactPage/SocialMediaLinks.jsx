
// import React from "react";
// import { motion } from "framer-motion";
// import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

// const SocialMediaLinks = () => {
//   const socialLinks = [
//     { icon: FaFacebook, url: "https://facebook.com/dmhedgesgardening" },
//     { icon: FaTwitter, url: "https://twitter.com/dmhedgesgardening" },
//     { icon: FaInstagram, url: "https://instagram.com/dmhedgesgardening" },
//     { icon: FaLinkedin, url: "https://linkedin.com/company/dmhedgesgardening" },
//   ];

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="bg-white p-6 rounded-lg shadow-md"
//     >
//       <h2 className="text-2xl font-semibold mb-4">Connect With Us</h2>
//       <div className="flex justify-around">
//         {socialLinks.map((link, index) => (
//           <motion.a
//             key={index}
//             href={link.url}
//             target="_blank"
//             rel="noopener noreferrer"
//             whileHover={{ scale: 1.2, rotate: 360 }}
//             whileTap={{ scale: 0.9 }}
//             className="text-green-600 hover:text-green-800 transition duration-300"
//           >
//             <link.icon size={32} />
//           </motion.a>
//         ))}
//       </div>
//     </motion.div>
//   );
// };

// export default SocialMediaLinks;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const SocialIcons = () => {
  return (
    <div>
      <a href="https://www.facebook.com">
        <FontAwesomeIcon icon={faFacebookF} />
      </a>
      <a href="https://www.twitter.com">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a href="https://www.instagram.com">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
    </div>
  );
};

export default SocialIcons;

