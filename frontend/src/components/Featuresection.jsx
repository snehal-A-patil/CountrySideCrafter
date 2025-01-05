import React from 'react';

const FeatureSection = () => {
  const features = [
    {
      title: 'Handcrafted Quality',
      description: 'Each product is crafted with care and precision by skilled artisans.',
      icon: '🔨',
    },
    {
      title: 'Sustainable Materials',
      description: 'We use eco-friendly materials in every product to protect the environment.',
      icon: '🌱',
    },
    {
      title: 'Global Impact',
      description: 'Supporting artisans from around the world and bringing their crafts to you.',
      icon: '🌍',
    },
  ];

  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold text-primaryText">Our Key Features</h2>
      <p className="mt-4 text-lg text-secondaryText">Discover the value we bring to you with our unique handcrafted products.</p>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {features.map((feature, index) => (
          <div key={index} className="feature-card bg-gray-100 p-6 rounded-lg shadow-md">
            <div className="text-5xl">{feature.icon}</div>
            <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
            <p className="mt-2 text-lg text-secondaryText">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
