// import React from 'react';
// import { motion } from 'framer-motion';

// const HeroSection = () => {
//   return (
//     <>
//     <div class="absolute   top-[100px] left-0 h-full inset-y-0 w-full bg-[#030303] opacity-[0.39]">

//         </div>
//     <div
//       className="bg-hero bg-cover bg-center h-screen flex items-center justify-center text-center text-white"
//       style={{ backgroundImage: "url('/images/heroimage.png')" }}
//     >
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1.5 }}
//       >
//         {/* <h1 className="text-5xl font-bold text-center w-1/2 mx-auto">
//           Expertise in hedge cutting, ivy removal, shrub, and bush shaping
//         </h1> */}
//         <div class="text-center py-20">
//     <h1 className="text-5xl font-bold text-center w-1/2 mx-auto anchor-effect">
//       Expertise in hedge cutting, ivy removal, shrub, and bush shaping
//     </h1>
//   </div>
//         <motion.button
//           whileHover={{ scale: 1.1 }}
//           className="mt-8 bg-white text-[#5c7625] py-3 px-6  rounded-full shadow-lg transition-transform"
//         >
//           Get A Free Quote
//         </motion.button>
        
//       </motion.div>
      
//     </div>

//     </>
//   );
// };

// export default HeroSection;
import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <>
    {/* // Hero Section with background image and centered text content */}
    <section
      className="relative bg-cover bg-center h-screen flex items-center justify-center"
      style={{ backgroundImage: "url('/images/heroimage.png')" }}
    >
        
      <div className="text-center px-4 md:px-0 max-w-3xl mx-auto">
         {/* Hero Background Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
        {/* Hero Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="text-white leading-tight text-4xl md:text-6xl lg:text-7xl"
        >
          Expertise in Hedge Cutting, Ivy Removal, Shrub and Bush Shaping
        </motion.h1>

        {/* Subheading / CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="mt-8 bg-[#5c7625] text-white hover:bg-white hover:text-[#5c7625] border-4  border-x-white hover:border-[#5c7625] border-y-white font-bold py-3 px-6 rounded-full shadow-lg transition-transform"
          >
            Get a Free Quote
          </motion.button>
          
          
        
        </motion.div>
      </div>
    </section>
    
    </>
  );
};

export default HeroSection;
