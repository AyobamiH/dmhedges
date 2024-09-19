

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Contact = () => {
  // Form state management
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  // Validation function
  const validateForm = () => {
    const errors = {};
    if (!name) errors.name = 'Name is required.';
    if (!email) {
      errors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid.';
    }
    if (!description) errors.description = 'Please describe your project.';
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      navigate('/contact'); // Navigate to /contact if form is valid
    }
  };

  return (
    <div>
      {/* Heading Section */}
      

      
        <section className="max-w-screen-xl mx-auto  text-left mt-12 px-4 md:px-0">
        <h1 className="text-4xl md:text-5xl text-[#45591b] hover:text-[#5c7625] font-bold mb-4 leading-snug">
          Got a question? <br /> Let me know!
        </h1>
      </section>
      <div className="w-full h-[1px] mx-auto mt-4 bg-[#5c7625] opacity-50"></div>
      {/* Form and Image Section */}
      <section className="max-w-screen-xl mx-auto mt-16 px-4 sm:px-8 md:px-16 lg:px-0 flex flex-col lg:flex-row items-start">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 lg:mr-8 mb-8 lg:mb-0">
          <img
            src="/images/contactimage.png"
            alt="Landscape"
            className="rounded-lg shadow-md object-cover w-full h-full"
          />
        </div>

        {/* Form Container */}
        <div className="w-full lg:w-1/2 bg-[#5c7625] text-white mb-12 p-6 md:p-8 rounded-lg">
          <form onSubmit={handleSubmit} className="flex flex-col justify-between h-full">
            {/* Form Fields */}
            <div>
              <div className="mb-4">
                <label className="block text-white mb-2">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`w-full text-[#5c7625] p-4 border ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  } rounded-lg`}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-2">{errors.name}</p>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-white mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full text-[#5c7625] p-4 border ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  } rounded-lg`}
                  placeholder="you@company.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-2">{errors.email}</p>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-white mb-2">
                  Describe your project
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className={`w-full text-[#5c7625] p-4 border ${
                    errors.description ? 'border-red-500' : 'border-gray-300'
                  } rounded-lg`}
                  rows="4"
                  placeholder="Tell us about your project"
                />
                {errors.description && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.description}
                  </p>
                )}
              </div>
            </div>

            {/* Service Interests */}
            <div className="mb-2">
              <label className="block  text-white mb-2">
                Which service interests you?
              </label>
              <div className="flex flex-wrap items-center -mx-2">
                {['Hedge Cutting', 'Shrub Shaping', 'Ivy Removal', 'Maintenance'].map(
                  (service, index) => (
                    <label
                      key={index}
                      className="flex items-center mb-2 w-1/2 px-2"
                    >
                      <input
                        type="checkbox"
                        className="form-checkbox text-[#5c7625]"
                      />
                      <span className="ml-2">{service}</span>
                    </label>
                  )
                )}
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              type="submit"
              className="bg-white text-[#5c7625] py-3 px-6 w-full mt-4 rounded-full shadow-lg transition-transform font-semibold"
            >
              Contact Now
            </motion.button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';

// const Contact = () => {
//   // Form state management
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     description: '',
//     services: [],
//   });
//   const [errors, setErrors] = useState({});
//   const navigate = useNavigate();

//   // Validation function
//   const validateForm = () => {
//     const errors = {};
//     if (!formData.name) errors.name = 'Name is required.';
//     if (!formData.email) {
//       errors.email = 'Email is required.';
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       errors.email = 'Email is invalid.';
//     }
//     if (!formData.description) errors.description = 'Please describe your project.';
//     setErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   // Handle form input changes
//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     if (type === 'checkbox') {
//       setFormData((prevData) => {
//         const services = checked
//           ? [...prevData.services, value]
//           : prevData.services.filter((service) => service !== value);
//         return { ...prevData, services };
//       });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       // Backend integration
//       try {
//         const response = await fetch('/api/contact', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(formData),
//         });

//         if (response.ok) {
//           // Navigate to a success page or display a success message
//           navigate('/thank-you');
//         } else {
//           // Handle server errors
//           const errorData = await response.json();
//           setErrors({ server: errorData.message || 'An error occurred. Please try again.' });
//         }
//       } catch (error) {
//         // Handle network errors
//         setErrors({ server: 'An error occurred. Please try again.' });
//       }
//     }
//   };

//   return (
//     <div>
//       {/* Heading Section */}
//       <section className="max-w-screen-xl mx-auto text-left mt-12 px-4 md:px-0">
//         <h1 className="text-4xl md:text-5xl text-[#45591b] hover:text-[#5c7625] font-bold mb-4 leading-snug">
//           Got a question? <br /> Let me know!
//         </h1>
//       </section>
//       <div className="w-full h-[1px] mx-auto mt-4 bg-[#5c7625] opacity-50"></div>

//       {/* Form and Image Section */}
//       <section className="max-w-screen-xl mx-auto mt-16 px-4 sm:px-8 md:px-16 lg:px-0 flex flex-col lg:flex-row items-start">
//         {/* Image Section */}
//         <div className="w-full lg:w-1/2 lg:mr-8 mb-8 lg:mb-0">
//           <picture>
//             <source srcSet="/images/contactimage.webp" type="image/webp" />
//             <source srcSet="/images/contactimage.jpg" type="image/jpeg" />
//             <img
//               src="/images/contactimage.png"
//               alt="Beautiful garden landscape"
//               className="rounded-lg shadow-md object-cover w-full h-full"
//             />
//           </picture>
//         </div>

//         {/* Form Container */}
//         <div className="w-full lg:w-1/2 bg-[#5c7625] text-white mb-12 p-6 md:p-8 rounded-lg">
//           {errors.server && (
//             <div className="bg-red-500 text-white p-4 rounded mb-4">
//               {errors.server}
//             </div>
//           )}
//           <form onSubmit={handleSubmit} className="flex flex-col justify-between h-full">
//             {/* Form Fields */}
//             <div>
//               <div className="mb-4">
//                 <label htmlFor="name" className="block text-white mb-2">
//                   Name
//                 </label>
//                 <input
//                   id="name"
//                   name="name"
//                   type="text"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className={`w-full text-[#5c7625] p-4 border ${
//                     errors.name ? 'border-red-500' : 'border-gray-300'
//                   } rounded-lg`}
//                   placeholder="Your name"
//                   aria-invalid={errors.name ? 'true' : 'false'}
//                   aria-describedby={errors.name ? 'name-error' : undefined}
//                 />
//                 {errors.name && (
//                   <p id="name-error" className="text-red-500 text-sm mt-2">
//                     {errors.name}
//                   </p>
//                 )}
//               </div>
//               <div className="mb-4">
//                 <label htmlFor="email" className="block text-white mb-2">
//                   Email
//                 </label>
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className={`w-full text-[#5c7625] p-4 border ${
//                     errors.email ? 'border-red-500' : 'border-gray-300'
//                   } rounded-lg`}
//                   placeholder="you@company.com"
//                   aria-invalid={errors.email ? 'true' : 'false'}
//                   aria-describedby={errors.email ? 'email-error' : undefined}
//                 />
//                 {errors.email && (
//                   <p id="email-error" className="text-red-500 text-sm mt-2">
//                     {errors.email}
//                   </p>
//                 )}
//               </div>
//               <div className="mb-4">
//                 <label htmlFor="description" className="block text-white mb-2">
//                   Describe your project
//                 </label>
//                 <textarea
//                   id="description"
//                   name="description"
//                   value={formData.description}
//                   onChange={handleChange}
//                   className={`w-full text-[#5c7625] p-4 border ${
//                     errors.description ? 'border-red-500' : 'border-gray-300'
//                   } rounded-lg`}
//                   rows="4"
//                   placeholder="Tell us about your project"
//                   aria-invalid={errors.description ? 'true' : 'false'}
//                   aria-describedby={errors.description ? 'description-error' : undefined}
//                 />
//                 {errors.description && (
//                   <p id="description-error" className="text-red-500 text-sm mt-2">
//                     {errors.description}
//                   </p>
//                 )}
//               </div>
//             </div>

//             {/* Service Interests */}
//             <div className="mb-4">
//               <fieldset>
//                 <legend className="block text-white mb-2">
//                   Which service interests you?
//                 </legend>
//                 <div className="flex flex-wrap items-center -mx-2">
//                   {['Hedge Cutting', 'Shrub Shaping', 'Ivy Removal', 'Maintenance'].map(
//                     (service, index) => (
//                       <label
//                         key={index}
//                         className="flex items-center mb-2 w-1/2 px-2"
//                       >
//                         <input
//                           type="checkbox"
//                           name="services"
//                           value={service}
//                           onChange={handleChange}
//                           className="form-checkbox text-[#5c7625]"
//                         />
//                         <span className="ml-2">{service}</span>
//                       </label>
//                     )
//                   )}
//                 </div>
//               </fieldset>
//             </div>

//             {/* Submit Button */}
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               type="submit"
//               className="bg-white text-[#5c7625] py-3 px-6 w-full mt-4 rounded-full shadow-lg transition-transform font-semibold"
//             >
//               Contact Now
//             </motion.button>
//           </form>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Contact;
