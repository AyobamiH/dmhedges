/**
 * This code was generated by Builder.io.
 */
import React from "react";
import { motion } from "framer-motion";

const TermsOfService = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <motion.div
      className="min-h-screen bg-green-50 py-12 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-3xl mx-auto">
        <motion.h1
          className="text-3xl font-bold text-green-800 mb-8"
          {...fadeInUp}
        >
          Terms of Service
        </motion.h1>

        <motion.section {...fadeInUp} className="mb-8">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            1. Acceptance of Terms
          </h2>
          <p className="text-gray-700">
            By accessing or using our website, you agree to be bound by these
            Terms of Service and all applicable laws and regulations. If you do
            not agree with any part of these terms, you may not use our
            services.
          </p>
        </motion.section>

        <motion.section {...fadeInUp} className="mb-8">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            2. Use of Services
          </h2>
          <p className="text-gray-700">
            You agree to use our services only for lawful purposes and in
            accordance with these Terms. You are prohibited from violating or
            attempting to violate the security of the website, including
            accessing data not intended for you or logging into a server or
            account you are not authorized to access.
          </p>
        </motion.section>

        <motion.section {...fadeInUp} className="mb-8">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            3. Intellectual Property
          </h2>
          <p className="text-gray-700">
            The content, organization, graphics, design, and other matters
            related to the website are protected under applicable copyrights,
            trademarks, and other proprietary rights. Copying, redistributing,
            use or publication of any such matters or any part of the website is
            prohibited without our express permission.
          </p>
        </motion.section>

        <motion.section {...fadeInUp} className="mb-8">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            4. User Accounts
          </h2>
          <p className="text-gray-700">
            If you create an account on our website, you are responsible for
            maintaining the security of your account and for all activities that
            occur under the account. You must immediately notify us of any
            unauthorized uses of your account or any other breaches of security.
          </p>
        </motion.section>

        <motion.section {...fadeInUp} className="mb-8">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            5. Limitation of Liability
          </h2>
          <p className="text-gray-700">
            We will not be liable for any damages of any kind arising from the
            use of this website, including, but not limited to direct, indirect,
            incidental, punitive, and consequential damages.
          </p>
        </motion.section>

        <motion.section {...fadeInUp} className="mb-8">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            6. Governing Law
          </h2>
          <p className="text-gray-700">
            These Terms shall be governed and construed in accordance with the
            laws of [Your Jurisdiction], without regard to its conflict of law
            provisions.
          </p>
        </motion.section>

        <motion.section {...fadeInUp} className="mb-8">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            7. Changes to Terms
          </h2>
          <p className="text-gray-700">
            We reserve the right to modify these terms at any time. We will
            notify users of any changes by posting the new Terms of Service on
            this page and updating the "Last Updated" date.
          </p>
        </motion.section>

        <motion.section {...fadeInUp} className="mb-8">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            8. Contact Information
          </h2>
          <p className="text-gray-700">
            If you have any questions about these Terms, please contact us at
            terms@dmhedges.com.
          </p>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default TermsOfService;
