import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import vase from '../assets/vase.jpg.jpg';
import chair from '../assets/chair.jpg';
import shawl from '../assets/shawl.jpg';

// Sample product data
const products = [
  {
    title: 'Handcrafted Terracotta Vase',
    description:
      'A stunning terracotta vase, perfect for enhancing your home decor with traditional Indian craftsmanship.',
    price: 1999,
    category: 'Pottery',
    image: vase,
  },
  {
    title: 'Sheesham Wood Dining Chair',
    description:
      'Elegant Sheesham wood chair with a blend of rustic charm and modern design, ideal for dining areas.',
    price: 4499,
    category: 'Woodworking',
    image: chair,
  },
  {
    title: 'Handwoven Cotton Shawl',
    description:
      'A beautiful handwoven cotton shawl, showcasing vibrant patterns inspired by Indian traditions.',
    price: 999,
    category: 'Textiles',
    image: shawl,
  },
];

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [maxPrice, setMaxPrice] = useState('');
  const navigate = useNavigate(); // Initialize navigate function

  // Filter products by category and price
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === 'All' || product.category === selectedCategory;
    const matchesPrice = maxPrice === '' || product.price <= parseInt(maxPrice);
    return matchesCategory && matchesPrice;
  });

  // Handle the "Buy Now" button click
  const handleBuyNowClick = () => {
    // Check if the user is logged in
    const isLoggedIn = localStorage.getItem('token'); // Assuming token is stored in localStorage

    if (isLoggedIn) {
      // If logged in, navigate to the payment page
      navigate('/payment');
    } else {
      // If not logged in, navigate to the login page
      navigate('/login');
    }
  };

  return (
    <section className="py-12 bg-gradient-to-r from-gray-50 to-teal-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-primaryText mb-6">
            Our Products
          </h2>
          <p className="text-lg text-secondaryText">
            Browse through our collection of unique, handcrafted products made
            with love and precision by talented artisans.
          </p>
        </div>

        {/* Filters Section */}
        <div className="mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full md:w-auto p-2 border border-teal-300 rounded"
          >
            <option value="All">All Categories</option>
            <option value="Pottery">Pottery</option>
            <option value="Woodworking">Woodworking</option>
            <option value="Textiles">Textiles</option>
          </select>

          <input
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            placeholder="Max Price (₹)"
            className="w-full md:w-auto p-2 border border-teal-300 rounded"
          />
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <div
              key={index}
              className="product-card bg-white rounded-lg shadow-md p-6 text-left hover:shadow-lg transition-shadow"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-semibold text-primaryText">
                {product.title}
              </h3>
              <p className="mt-2 text-md text-secondaryText">
                {product.description}
              </p>
              <p className="mt-4 text-lg font-bold text-primaryAccent">
                ₹{product.price}
              </p>
              <span className="mt-2 inline-block bg-teal-100 text-teal-600 text-sm font-medium px-3 py-1 rounded">
                {product.category}
              </span>

              {/* Buy Now Button */}
              <button
                className="mt-6 w-full py-2 bg-primaryAccent hover:grey-100 hover:rounded text-black font-semibold rounded hover:bg-primaryText transition-colors"
                onClick={handleBuyNowClick} // Add onClick to redirect
              >
                BUY NOW
              </button>
            </div>
          ))}
        </div>

        {/* No Products Message */}
        {filteredProducts.length === 0 && (
          <div className="text-center text-secondaryText mt-8">
            <p>No products found matching the criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductsPage;
