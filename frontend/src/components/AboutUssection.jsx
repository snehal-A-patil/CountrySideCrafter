import React from 'react';
import { motion } from 'framer-motion';

const AboutUsSection = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-teal-50 to-gray-50 text-black">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Section Title */}
        <motion.h2
          className="text-3xl font-extrabold text-black leading-tight mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Us
        </motion.h2>
        <motion.p
          className="mt-2 text-lg text-black max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          We are passionate about empowering artisans and bringing handcrafted products that tell a story to homes around the world.
        </motion.p>

        {/* Mission Section */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="text-left space-y-4"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-xl font-semibold text-black">Our Mission</h3>
            <p className="text-md text-black">
              Our mission is to support rural artisans by providing them with a platform to showcase their craft and connect with a global audience. We aim to create a sustainable marketplace for unique, handcrafted products.
            </p>
          </motion.div>

          {/* Image or Decorative Element */}
          <motion.div
            className="rounded-lg overflow-hidden shadow-lg hidden md:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h3 className="text-xl font-semibold text-black">The Story Behind Our Brand</h3>
            <p className="mt-4 text-md text-black max-w-3xl mx-auto">
              Founded by a group of passionate individuals, we saw an opportunity to bridge the gap between rural artisans and the global market. Our journey began with a simple goal – to help artisans reach a wider audience while preserving the rich cultural heritage of their crafts. Through our platform, we provide artisans with the tools they need to succeed in a modern, digital world.
            </p>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          className="mt-8 space-y-4 text-left"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-xl font-semibold text-black">Our Values</h3>
          <ul className="text-md text-black list-disc list-inside space-y-2">
            <li className="hover:text-teal-500 transition-colors duration-300">Empathy: Understanding the needs of rural artisans</li>
            <li className="hover:text-teal-500 transition-colors duration-300">Sustainability: Promoting eco-friendly products</li>
            <li className="hover:text-teal-500 transition-colors duration-300">Quality: Ensuring top-notch craftsmanship</li>
            <li className="hover:text-teal-500 transition-colors duration-300">Community: Supporting the growth of local economies</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsSection;
