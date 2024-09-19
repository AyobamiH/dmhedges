// import React from 'react';

// const ServicesPage = () => {
//   return (
//     <div className="bg-white">
//       {/* Page Title */}
//       <section className="py-16 text-center">
//         <h1 className="text-5xl font-bold text-gray-800">Our services</h1>
//         <div className="w-24 h-1 mx-auto mt-4 bg-gray-400"></div>
//       </section>

//       {/* Services Section */}
//       <section className="container mx-auto py-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {/* Service Item 1: Hedge Cutting */}
//           <div className="flex flex-col md:flex-row items-center justify-between">
//             <div className="w-full md:w-1/2 mb-6 md:mb-0">
//               <h2 className="text-3xl font-bold text-gray-800">Hedge Cutting</h2>
//               <p className="text-gray-600 mt-4">
//                 Hedge cutting is essential for maintaining the neat appearance of your outdoor space. Our professional services ensure precise and tidy results that enhance the overall look of your property.
//               </p>
//               <button className="mt-6 bg-red-500 text-white font-bold py-3 px-6 rounded-full">See projects</button>
//             </div>
//             <img className="w-full md:w-1/2 rounded-lg shadow-lg" src="/images/hedge-cutting.jpg" alt="Hedge Cutting" />
//           </div>

//           {/* Service Item 2: Ivy Removal */}
//           <div className="flex flex-col md:flex-row-reverse items-center justify-between">
//             <div className="w-full md:w-1/2 mb-6 md:mb-0">
//               <h2 className="text-3xl font-bold text-gray-800">Ivy Removal</h2>
//               <p className="text-gray-600 mt-4">
//                 Ivy removal is crucial to prevent damage to your property and maintain a clean and healthy environment. Our team specializes in safe and efficient ivy removal techniques to protect your landscape.
//               </p>
//               <button className="mt-6 bg-red-500 text-white font-bold py-3 px-6 rounded-full">See projects</button>
//             </div>
//             <img className="w-full md:w-1/2 rounded-lg shadow-lg" src="/images/ivy-removal.jpg" alt="Ivy Removal" />
//           </div>

//           {/* Service Item 3: Shrub Shaping */}
//           <div className="flex flex-col md:flex-row items-center justify-between">
//             <div className="w-full md:w-1/2 mb-6 md:mb-0">
//               <h2 className="text-3xl font-bold text-gray-800">Shrub Shaping</h2>
//               <p className="text-gray-600 mt-4">
//                 Shrub shaping involves sculpting bushes and shrubs to enhance their aesthetic appeal and promote healthy growth. Our experts use precise techniques to shape your shrubs according to your preferences.
//               </p>
//               <button className="mt-6 bg-red-500 text-white font-bold py-3 px-6 rounded-full">See projects</button>
//             </div>
//             <img className="w-full md:w-1/2 rounded-lg shadow-lg" src="/images/shrub-shaping.jpg" alt="Shrub Shaping" />
//           </div>
//         </div>
//       </section>

//       {/* Featured Projects Section */}
//       <section className="bg-gray-100 py-16">
//         <div className="container mx-auto text-center">
//           <h2 className="text-4xl font-bold text-gray-800 mb-6">Featured projects</h2>
//           <p className="text-gray-600 mb-12">
//             Here are some of our recent projects that demonstrate our expertise and commitment to quality.
//           </p>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {/* Project Item 1 */}
//             <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//               <img src="/images/project1.jpg" alt="Garden Transformation" className="w-full h-48 object-cover" />
//               <div className="p-6">
//                 <h3 className="text-2xl font-semibold">Garden Transformation</h3>
//                 <p className="text-gray-600 mt-2">
//                   A complete transformation of a neglected garden into a beautiful and functional space.
//                 </p>
//                 <button className="mt-4 bg-gray-800 text-white py-2 px-4 rounded">Read more</button>
//               </div>
//             </div>

//             {/* Project Item 2 */}
//             <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//               <img src="/images/project2.jpg" alt="Landscape" className="w-full h-48 object-cover" />
//               <div className="p-6">
//                 <h3 className="text-2xl font-semibold">Landscape</h3>
//                 <p className="text-gray-600 mt-2">
//                   A well-executed landscape project with sustainable plant choices and design.
//                 </p>
//                 <button className="mt-4 bg-gray-800 text-white py-2 px-4 rounded">Read more</button>
//               </div>
//             </div>

//             {/* Project Item 3 */}
//             <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//               <img src="/images/project3.jpg" alt="Park Maintenance" className="w-full h-48 object-cover" />
//               <div className="p-6">
//                 <h3 className="text-2xl font-semibold">Park Maintenance</h3>
//                 <p className="text-gray-600 mt-2">
//                   Ongoing maintenance of public parks to ensure a clean and green environment.
//                 </p>
//                 <button className="mt-4 bg-gray-800 text-white py-2 px-4 rounded">Read more</button>
//               </div>
//             </div>
//           </div>

//           {/* View All Projects Button */}
//           <button className="mt-12 bg-red-500 text-white font-bold py-3 px-6 rounded-full">
//             View all projects
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ServicesPage;
// import React from 'react';

// const ServicesPage = () => {
//   return (
//     <div className="bg-white">
//       {/* Page Title */}
//       <section className="py-16 text-center">
//         <h1 className="text-5xl font-bold text-gray-800">My services</h1>
//         <div className="w-24 h-1 mx-auto mt-4 bg-gray-400"></div>
//       </section>

//       {/* Services Section */}
//       <section className="container mx-auto py-12">
//         <div className="grid grid-cols-1  gap-8">
//           {/* Service Item 1: Hedge Cutting */}
//           <div className="flex flex-col md:flex-row items-center justify-between mb-16">
//             <div className="w-full md:w-1/2 mb-6 md:mb-0">
//               <h2 className="text-3xl font-bold text-gray-800">Hedge Cutting</h2>
//               <p className="text-gray-600 mt-4">
//                 Hedge cutting is essential for maintaining the neat appearance of your outdoor space. Our professional services ensure precise and tidy results that enhance the overall look of your property.
//               </p>
//               <button className="mt-6 bg-red-500 text-white font-bold py-3 px-6 rounded-full">See projects</button>
//             </div>

//             {/* Image Section with Dotted Background */}
//                 <div className="relative w-full md:w-1/2">
//                     {/* Dotted Effect */}
//                     <div className="absolute -right-10 top-10 md:top-20">
//                     <svg
//                         width="120"
//                         height="120"
//                         viewBox="0 0 120 120"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                     >
//                         <circle cx="10" cy="10" r="10" fill="#c4c4c4" />
//                         <circle cx="40" cy="10" r="10" fill="#c4c4c4" />
//                         <circle cx="70" cy="10" r="10" fill="#c4c4c4" />
//                         <circle cx="100" cy="10" r="10" fill="#c4c4c4" />
//                         <circle cx="10" cy="40" r="10" fill="#c4c4c4" />
//                         <circle cx="40" cy="40" r="10" fill="#c4c4c4" />
//                         <circle cx="70" cy="40" r="10" fill="#c4c4c4" />
//                         <circle cx="100" cy="40" r="10" fill="#c4c4c4" />
//                         <circle cx="10" cy="70" r="10" fill="#c4c4c4" />
//                         <circle cx="40" cy="70" r="10" fill="#c4c4c4" />
//                         <circle cx="70" cy="70" r="10" fill="#c4c4c4" />
//                         <circle cx="100" cy="70" r="10" fill="#c4c4c4" />
//                         <circle cx="10" cy="100" r="10" fill="#c4c4c4" />
//                         <circle cx="40" cy="100" r="10" fill="#c4c4c4" />
//                         <circle cx="70" cy="100" r="10" fill="#c4c4c4" />
//                         <circle cx="100" cy="100" r="10" fill="#c4c4c4" />
//                     </svg>
//                     </div>

//                     {/* Ivy Removal Image */}
//                     <img
//                     src="/images/hedgecutting.jpeg"
//                     alt="Hedge Cutting"
//                     className="mx-auto  aspect-video object-cover rounded-lg"
//                     />
//                 </div>

            
//           </div>

//           {/* Service Item 2: Ivy Removal */}
//             <div className="flex flex-col md:flex-row-reverse items-center justify-between mb-16">
//                 <div className="w-full md:w-1/2 mb-6 md:mb-0">
//                     <h2 className="text-3xl font-bold text-gray-800">Ivy Removal</h2>
//                     <p className="text-gray-600 mt-4">
//                     Ivy removal is crucial to prevent damage to your property and maintain a clean and healthy environment. Our team specializes in safe and efficient ivy removal techniques to protect your landscape.
//                     </p>
                    
//                     <button className="mt-6 bg-red-500 text-white font-bold py-3 px-6 rounded-full">See projects</button>
//                 </div>

//                 {/* Image Section with Dotted Background */}
//                 <div className="relative w-full md:w-1/2">
//                     {/* Dotted Effect */}
//                     <div className="absolute -left-10 top-10 md:top-20">
//                     <svg
//                         width="120"
//                         height="120"
//                         viewBox="0 0 120 120"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                     >
//                         <circle cx="10" cy="10" r="10" fill="#c4c4c4" />
//                         <circle cx="40" cy="10" r="10" fill="#c4c4c4" />
//                         <circle cx="70" cy="10" r="10" fill="#c4c4c4" />
//                         <circle cx="100" cy="10" r="10" fill="#c4c4c4" />
//                         <circle cx="10" cy="40" r="10" fill="#c4c4c4" />
//                         <circle cx="40" cy="40" r="10" fill="#c4c4c4" />
//                         <circle cx="70" cy="40" r="10" fill="#c4c4c4" />
//                         <circle cx="100" cy="40" r="10" fill="#c4c4c4" />
//                         <circle cx="10" cy="70" r="10" fill="#c4c4c4" />
//                         <circle cx="40" cy="70" r="10" fill="#c4c4c4" />
//                         <circle cx="70" cy="70" r="10" fill="#c4c4c4" />
//                         <circle cx="100" cy="70" r="10" fill="#c4c4c4" />
//                         <circle cx="10" cy="100" r="10" fill="#c4c4c4" />
//                         <circle cx="40" cy="100" r="10" fill="#c4c4c4" />
//                         <circle cx="70" cy="100" r="10" fill="#c4c4c4" />
//                         <circle cx="100" cy="100" r="10" fill="#c4c4c4" />
//                     </svg>
//                     </div>

//                     {/* Ivy Removal Image */}
//                     <img
//                     src="/images/ivy-removal.jpeg"
//                     alt="Ivy Removal"
//                     className="mx-auto  aspect-video object-cover rounded-lg"
//                     />
//                 </div>
//             </div>

//           {/* Service Item 3: Shrub Shaping */}
//           <div className="flex flex-col md:flex-row items-center justify-between mb-16">
//             <div className="w-full md:w-1/2 mb-6 md:mb-0">
//               <h2 className="text-3xl font-bold text-gray-800">Shrub Shaping</h2>
//               <p className="text-gray-600 mt-4">
//                 Shrub shaping involves sculpting bushes and shrubs to enhance their aesthetic appeal and promote healthy growth. Our experts use precise techniques to shape your shrubs according to your preferences and landscape design.
//               </p>
//               <button className="mt-6 bg-red-500 text-white font-bold py-3 px-6 rounded-full">See projects</button>
//             </div>

//             {/* Image Section with Dotted Background */}
//             <div className="relative w-full md:w-1/2">
//             {/* Shrub Shaping Image */}
//               <img
//                 src="/images/shrub-shaping.jpeg"
//                 alt="Shrub Shaping"
//                 className="mx-auto object-cover aspect-video rounded-lg shadow-lg"
//               />
            
//               {/* Dotted Effect */}
//               <div className=" absolute  -right-10 top-10 md:top-20 ">
//                 <svg
//                   width="120"
//                   height="120"
//                   viewBox="0 0 120 120"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <circle cx="10" cy="10" r="10" fill="#c4c4c4" />
//                   <circle cx="40" cy="10" r="10" fill="#c4c4c4" />
//                   <circle cx="70" cy="10" r="10" fill="#c4c4c4" />
//                   <circle cx="100" cy="10" r="10" fill="#c4c4c4" />
//                   <circle cx="10" cy="40" r="10" fill="#c4c4c4" />
//                   <circle cx="40" cy="40" r="10" fill="#c4c4c4" />
//                   <circle cx="70" cy="40" r="10" fill="#c4c4c4" />
//                   <circle cx="100" cy="40" r="10" fill="#c4c4c4" />
//                   <circle cx="10" cy="70" r="10" fill="#c4c4c4" />
//                   <circle cx="40" cy="70" r="10" fill="#c4c4c4" />
//                   <circle cx="70" cy="70" r="10" fill="#c4c4c4" />
//                   <circle cx="100" cy="70" r="10" fill="#c4c4c4" />
//                   <circle cx="10" cy="100" r="10" fill="#c4c4c4" />
//                   <circle cx="40" cy="100" r="10" fill="#c4c4c4" />
//                   <circle cx="70" cy="100" r="10" fill="#c4c4c4" />
//                   <circle cx="100" cy="100" r="10" fill="#c4c4c4" />
//                 </svg>
//               </div>

              
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ServicesPage;


// import React from 'react';
// import { motion } from 'framer-motion';

// const services = [
//   {
//     title: "Hedge Cutting",
//     description:
//       "Hedge cutting is essential for maintaining the neat appearance of your outdoor space. Our professional services ensure precise and tidy results that enhance the overall look of your property.",
//     image: "/images/hedgecutting.jpeg",
//     reverse: false,
//   },
//   {
//     title: "Ivy Removal",
//     description:
//       "Ivy removal is crucial to prevent damage to your property and maintain a clean and healthy environment. Our team specializes in safe and efficient ivy removal techniques to protect your landscape.",
//     image: "/images/ivy-removal.jpeg",
//     reverse: true,
//   },
//   {
//     title: "Shrub Shaping",
//     description:
//       "Shrub shaping involves sculpting bushes and shrubs to enhance their aesthetic appeal and promote healthy growth. Our experts use precise techniques to shape your shrubs according to your preferences and landscape design.",
//     image: "/images/shrub-shaping.jpeg",
//     reverse: false,
//   },
// ];

// const ServicesPage = () => {
//   return (
//     <div className="bg-white">
//       {/* Page Title */}
//       <section className="py-16 text-center">
//         <h1 className="text-5xl font-bold text-gray-800">Our services</h1>
//         <div className="w-24 h-1 mx-auto mt-4 bg-gray-400"></div>
//       </section>

//       {/* Services Section */}
//       <section className="container mx-auto py-12">
//         <div className="grid grid-cols-1 gap-8">
//           {/* Loop through services array */}
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className={`flex flex-col md:flex-row ${
//                  index % 2 === 0 ? "  bg-white rounded-xl py-6" : "bg-[#5c7625]"
//               } items-center justify-between mb-16 flex flex-row-reverse max-w-full mx-auto  shadow-lg`}
//             >

               
//                 <div className="w-full md:w-1/2 mb-6 md:mb-0 py-4 px-16  items-center">
//                     <h2 className={`${ index % 2 === 0 ? 'text-[#5c7625]' : 'text-white'}  mt-6 mx-auto text-gray-800 text-3xl font-bold py-4  px-16`}>{service.title}
//                     </h2>
//                     <p className={`${ index % 2 === 0 ? 'text-[#5c7625]' : 'text-white' }  mt-4  px-16`}>{service.description}</p>
//                     <motion.button
//                         whileHover={{ scale: 1.1 }}
//                         className={` ${ index % 2 === 0 ? " bg-[#5c7625] text-white":
//                         "bg-white text-[#5c7625]  "} mt-4  px-16 h-12  border-0 box-border rounded-full bg-[#5c762] text-base font-bold leading-tight focus:outline-none cursor-pointer`}>
//                         Learn more
//                     </motion.button>
//                 </div>

//               {/* Image Section with Dotted Background */}
//               <div className="relative w-full md:w-1/2">
//                 {/* Dotted Effect */}
//                 <div
//                   className={`absolute ${
//                     service.reverse ? "-left-10" : "-right-10"
//                   } top-10 md:top-20`}
//                 >
//                   <svg
//                     width="120"
//                     height="120"
//                     viewBox="0 0 120 120"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <circle cx="10" cy="10" r="10" fill="#c4c4c4" />
//                     <circle cx="40" cy="10" r="10" fill="#c4c4c4" />
//                     <circle cx="70" cy="10" r="10" fill="#c4c4c4" />
//                     <circle cx="100" cy="10" r="10" fill="#c4c4c4" />
//                     <circle cx="10" cy="40" r="10" fill="#c4c4c4" />
//                     <circle cx="40" cy="40" r="10" fill="#c4c4c4" />
//                     <circle cx="70" cy="40" r="10" fill="#c4c4c4" />
//                     <circle cx="100" cy="40" r="10" fill="#c4c4c4" />
//                     <circle cx="10" cy="70" r="10" fill="#c4c4c4" />
//                     <circle cx="40" cy="70" r="10" fill="#c4c4c4" />
//                     <circle cx="70" cy="70" r="10" fill="#c4c4c4" />
//                     <circle cx="100" cy="70" r="10" fill="#c4c4c4" />
//                     <circle cx="10" cy="100" r="10" fill="#c4c4c4" />
//                     <circle cx="40" cy="100" r="10" fill="#c4c4c4" />
//                     <circle cx="70" cy="100" r="10" fill="#c4c4c4" />
//                     <circle cx="100" cy="100" r="10" fill="#c4c4c4" />
//                   </svg>
//                 </div>

//                 {/* Service Image */}
//                 <img
//                   src={service.image}
//                   alt={service.title}
//                   className="mx-auto object-cover aspect-video rounded-lg shadow-lg"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ServicesPage;


import React from 'react';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
const services = [
  {
    title: "Hedge Cutting",
    description:
      "Hedge cutting is essential for maintaining the neat appearance of your outdoor space. Our professional services ensure precise and tidy results that enhance the overall look of your property.",
    image: "/images/hedgecutting.jpeg",
    reverse: false,
  },
  {
    title: "Ivy Removal",
    description:
      "Ivy removal is crucial to prevent damage to your property and maintain a clean and healthy environment. Our team specializes in safe and efficient ivy removal techniques to protect your landscape.",
    image: "/images/ivy-removal.jpeg",
    reverse: true,
  },
  {
    title: "Shrub Shaping",
    description:
      "Shrub shaping involves sculpting bushes and shrubs to enhance their aesthetic appeal and promote healthy growth. Our experts use precise techniques to shape your shrubs according to your preferences and landscape design.",
    image: "/images/shrub-shaping.jpeg",
    reverse: false,
  },
];

const ServicesPage = () => {
    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-white scroll-mt-20">
      {/* Page Title */}
      <section className="py-16 text-center">
        <h1 className="text-5xl font-bold text-[#5c7625]">My Services</h1>
        <div className="w-24 h-1 mx-auto mt-4 bg-[#5c7625]"></div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto py-12">
        <div className="grid grid-cols-1 gap-8">
          {/* Loop through services array */}
          {services.map((service, index) => (
            <motion.div
              key={index}
              
              whileHover={{ scale: 1.05 }}
              className={`flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:flex-row-reverse bg-white text-[#5c7625]" : "bg-[#5c7625] text-white"
              } items-center justify-between mb-16 max-w-5xl mx-auto shadow-lg`}
            >
                
              <div
                className={`w-full md:w-1/2 mb-6 md:mb-0 py-4 px-8 text-center ${
                  service.reverse ? "text-white" : "text-[#5c7625]"
                }`}
              >
                <h2 className="text-3xl mt-6 font-bold py-4  mx-auto ">{service.title}</h2>
                <p className="mt-4  px-16">{service.description}</p>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className={`${
                    index % 2 === 0 ? "bg-[#5c7625] text-white" : "bg-white text-[#5c7625]"
                  } mt-6 py-3 px-12 border-0 rounded-full font-bold focus:outline-none cursor-pointer`}
                >
                  Learn more
                </motion.button>
              </div>

              {/* Image Section with Dotted Background */}
              <div className="relative w-full md:w-1/2">
                {/* Dotted Effect */}
                <div
                  className={`absolute ${
                    index % 2 === 0 ? "-left-10" : "-right-10"
                  } top-10 md:top-20`}
                >
                  <svg
                    width="120"
                    height="120"
                    viewBox="0 0 120 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="10" cy="10" r="10" fill="#c4c4c4" />
                    <circle cx="40" cy="10" r="10" fill="#c4c4c4" />
                    <circle cx="70" cy="10" r="10" fill="#c4c4c4" />
                    <circle cx="100" cy="10" r="10" fill="#c4c4c4" />
                    <circle cx="10" cy="40" r="10" fill="#c4c4c4" />
                    <circle cx="40" cy="40" r="10" fill="#c4c4c4" />
                    <circle cx="70" cy="40" r="10" fill="#c4c4c4" />
                    <circle cx="100" cy="40" r="10" fill="#c4c4c4" />
                    <circle cx="10" cy="70" r="10" fill="#c4c4c4" />
                    <circle cx="40" cy="70" r="10" fill="#c4c4c4" />
                    <circle cx="70" cy="70" r="10" fill="#c4c4c4" />
                    <circle cx="100" cy="70" r="10" fill="#c4c4c4" />
                    <circle cx="10" cy="100" r="10" fill="#c4c4c4" />
                    <circle cx="40" cy="100" r="10" fill="#c4c4c4" />
                    <circle cx="70" cy="100" r="10" fill="#c4c4c4" />
                    <circle cx="100" cy="100" r="10" fill="#c4c4c4" />
                  </svg>
                </div>

                {/* Service Image */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="mx-auto object-cover aspect-video rounded-lg shadow-lg"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
