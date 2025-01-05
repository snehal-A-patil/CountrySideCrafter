import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

// Sample cart data (replace with dynamic data from an API or database)
const initialCartItems = [
  {
    id: 1,
    name: 'Handcrafted Vase',
    price: 25, // Price in USD (replace with INR if needed)
    quantity: 1,
    image: '/path/to/vase.jpg', // Replace with the actual image path
  },
  {
    id: 2,
    name: 'Wooden Chair',
    price: 75,
    quantity: 1,
    image: '/path/to/chair.jpg',
  },
  {
    id: 3,
    name: 'Embroidered Shawl',
    price: 45,
    quantity: 1,
    image: '/path/to/shawl.jpg',
  },
];

const CartPage = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);

  // Function to handle quantity change
  const handleQuantityChange = (id, increment) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: item.quantity + increment > 0 ? item.quantity + increment : 1,
          }
        : item
    );
    setCartItems(updatedCartItems);
  };

  // Function to remove an item from the cart
  const handleRemoveItem = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
  };

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <h2 className="text-4xl font-extrabold text-primaryText mb-6 text-center">
          Your Cart
        </h2>

        {cartItems.length === 0 ? (
          <p className="text-lg text-secondaryText text-center">
            Your cart is empty. Start adding items to see them here!
          </p>
        ) : (
          <>
            {/* Cart Items */}
            <div className="grid grid-cols-1 gap-6 mb-8">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="cart-item bg-white rounded-lg shadow-md p-6 flex items-center gap-4"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-primaryText">
                      {item.name}
                    </h3>
                    <p className="text-md text-secondaryText">₹{item.price}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => handleQuantityChange(item.id, -1)}
                        className="px-2 py-1 text-white bg-primaryAccent rounded"
                      >
                        -
                      </button>
                      <span className="text-lg">{item.quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(item.id, 1)}
                        className="px-2 py-1 text-white bg-primaryAccent rounded"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FaTrashAlt size={20} />
                  </button>
                </div>
              ))}
            </div>

            {/* Total and Checkout */}
            <div className="bg-white rounded-lg shadow-md p-6 text-right">
              <h3 className="text-xl font-semibold text-primaryText mb-4">
                Total: ₹{totalPrice.toFixed(2)}
              </h3>
              <button className="px-6 py-2 text-white bg-primaryAccent rounded font-bold">
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default CartPage;
