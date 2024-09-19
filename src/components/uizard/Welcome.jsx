import React from 'react';
import { motion } from 'framer-motion';
import { HashLink } from 'react-router-hash-link';


const WelcomeSection = () => {
  return (
    <div id="about" className=' scroll-mt-20'>
    <section  className="w-full bg-white py-16">
      <div className="max-w-4xl mx-auto text-center">
        {/* Welcome Heading */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-[#5c7625] mb-6"
        >
          About DM HEDGES
        </motion.h2>

        {/* Description Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="text-lg text-gray-700 mb-8 px-4 md:px-0"
        >
          At DM Hedges, I specialize in providing quality hedge trimming, shrub shaping, and garden maintenance services throughout Northamptonshire. As a local independent business, I am committed to ensuring you have a beautiful outdoor space you can be proud of. With great attention to detail, I take the time to understand your garden's unique needs.
        </motion.p>

        {/* Browse Services Button */}

        <HashLink smooth to="#services">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-[#5c7625] text-white font-bold py-3 px-6 rounded-full shadow-lg transition-transform"
          >
            Browse Our Services
          </motion.button>
        </HashLink>
      </div>
    </section>
    </div>
  );
};

export default WelcomeSection;


// import React from 'react';
// import { motion } from 'framer-motion';

// const WelcomeSection = () => {
//   return (
//     <section className="w-full bg-white py-16">
//       <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
//         {/* Owner's Image */}
//         <motion.img
//           src="/path-to-owner-image.jpg"
//           alt="Business Owner"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1.5 }}
//           className="w-72 h-72 object-cover rounded-full mb-8 md:mb-0 md:mr-12 shadow-lg"
//         />

//         {/* Welcome Text */}
//         <div className="text-center md:text-left">
//           <motion.h2
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1 }}
//             className="text-4xl font-bold text-gray-800 mb-6"
//           >
//             Welcome to DM HEDGES
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1.5 }}
//             className="text-lg text-gray-700 mb-8"
//           >
//             At DM Hedges, I specialize in providing quality hedge trimming, shrub shaping, and garden maintenance services throughout Northamptonshire. As a local independent business, I am committed to ensuring you have a beautiful outdoor space you can be proud of. With great attention to detail, I take the time to understand your garden's unique needs.
//           </motion.p>

//           {/* Browse Services Button */}
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             className="bg-red-500 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-transform"
//           >
//             Browse Our Services
//           </motion.button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WelcomeSection;
