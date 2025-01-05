import React from 'react';
import pottery from '../assets/potteryset.jpg';
import basket from '../assets/eco-Friendly Basket.jpg';
import shawldesigns from '../assets/shawldesigns.jpg';

const ProductShowcase = () => {
  const products = [
    {
      image: pottery, // Replace with the actual image path
      title: 'Handcrafted Pottery Set',
      description: 'A beautiful set of handcrafted pottery, made with love by rural artisans.',
      link: '/shop/pottery', // Replace with the actual link to the product page
    },
    {
      image: basket,
      title: 'Eco-Friendly Basket',
      description: 'A sustainable basket perfect for home decoration and storage.',
      link: '/shop/basket',
    },
    {
      image: shawldesigns,
      title: 'Woolen Throws',
      description: 'Warm, cozy, and 100% handwoven woolen throws for your home.',
      link: '/shop/throws',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-primaryText">Featured Products</h2>
        <p className="mt-4 text-lg text-secondaryText">Explore our unique, handcrafted products that support rural artisans.</p>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {products.map((product, index) => (
          <div key={index} className="product-card bg-white p-6 rounded-lg shadow-lg">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-[300px] object-cover rounded-md"
            />
            <h3 className="mt-4 text-xl font-semibold">{product.title}</h3>
            <p className="mt-2 text-lg text-secondaryText">{product.description}</p>
            <a href={product.link} className="mt-4 inline-block px-6 py-3 bg-primaryAccent text-white rounded-full hover:bg-primaryText transition">
              Learn More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductShowcase;
