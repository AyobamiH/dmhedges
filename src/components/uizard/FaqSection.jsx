import React, { useState } from 'react';
import { motion } from 'framer-motion';

const faqs = [
  { question: 'What services do you offer?', answer: 'We offer a variety of professional hedge services...' },
  { question: 'How can I book a service?', answer: 'You can book a service by contacting us...' },
  { question: 'Do you serve my area?', answer: 'We serve a wide range of areas. Please contact us to...' },
  { question: 'Is there a free consultation?', answer: 'Yes, we offer free consultations...' },
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-12  ">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#5c7625] mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-[#5c7625] p-6 rounded-lg mx-auto  max-w-5xl shadow-lg cursor-pointer"
              onClick={() => toggleFaq(index)}
            >
              <h3 className="text-xl text-white font-semibold">{faq.question}</h3>
              {activeIndex === index && <p className="w-fit mt-4 bg-green-200">{faq.answer}</p>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
