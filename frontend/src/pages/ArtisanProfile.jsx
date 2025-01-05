import React from 'react';
import { FaPaintBrush, FaTree, FaSocks } from 'react-icons/fa'; // Import icons from react-icons

const artisans = [
  {
    name: 'Ayesha Khan',
    craft: 'Pottery',
    bio: 'Ayesha creates beautiful handcrafted pottery inspired by traditional techniques passed down through generations.',
    // icon: <FaPaintBrush size={50} className="text-primaryAccent mx-auto" />, // Icon for pottery
  },
  {
    name: 'Raj Kumar',
    craft: 'Woodworking',
    bio: 'Raj specializes in wooden furniture, blending rustic charm with modern design to create functional art.',
    // icon: <FaTree size={50} className="text-primaryAccent mx-auto" />, // Icon for woodworking
  },
  {
    name: 'Leela Devi',
    craft: 'Textiles',
    bio: 'Leela’s handcrafted textiles are known for their vibrant colors and intricate embroidery, representing rich cultural heritage.',
    // icon: <FaSocks size={50} className="text-primaryAccent mx-auto" />, // Icon for textiles
  },
];

const ArtisanProfile = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-gray-50 to-teal-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Header */}
        <h2 className="text-4xl font-extrabold text-black mb-6">
          Meet the Artisans
        </h2>
        <p className="text-lg text-black mb-12">
          Discover the incredible artisans behind our handcrafted products. Each piece tells a story of passion, tradition, and craftsmanship.
        </p>

        {/* Artisans Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {artisans.map((artisan, index) => (
            <div
              key={index}
              className="artisan-card bg-[#F5E0C3] rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow"
            >
              {/* Icon */}
              {/* <div className="mb-4">{artisan.icon}</div> */}
              {/* Name and Craft */}
              <h3 className="text-2xl font-semibold text-[#5D4037] mb-2">{artisan.name}</h3>
              <p className="text-lg text-[#795548] font-bold mb-4">{artisan.craft}</p>
              {/* Bio */}
              <p className="text-md text-[#4E342E] leading-relaxed">{artisan.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArtisanProfile;
