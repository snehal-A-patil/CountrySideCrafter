import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to check if the user is logged in
  const checkLoginStatus = () => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  };

  // Check if the user is logged in when the component mounts
  useEffect(() => {
    checkLoginStatus(); // Initial check on mount

    // Listen for changes to localStorage
    window.addEventListener("storage", checkLoginStatus);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("storage", checkLoginStatus);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user"); // Remove user data from localStorage
    setIsLoggedIn(false); // Update the state
  };

  return (
    <nav className="bg-white text-[#4E342E] shadow-md sticky top-0">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="/">CountrySideCrafter</a>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <a href="/" className="rounded hover:text-[#4E342E]">
            Home
          </a>
          <a href="/artisans" className="hover:text-[#4E342E]">
            Artisans
          </a>
          <a href="/products" className="hover:text-[#4E342E]">
            Products
          </a>
          <a href="/events" className="hover:text-[#4E342E]">
            Events
          </a>
        </div>

        {/* Search Bar & Icons (Cart, Profile, and Login) */}
        <div className="flex items-center space-x-6">
          <div className="space-x-3 flex">
            <a href="/cart" className="hover:text-primaryAccent">
              🛒
            </a>
            <a href="/profile" className="hover:text-primaryAccent">
              👤
            </a>
          </div>

          {/* Conditionally render Login or Logout based on user's authentication status */}
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-[#4E342E] text-white rounded hover:bg-grey-200"
            >
              Logout
            </button>
          ) : (
            <a
              href="/login"
              className="px-4 py-2 bg-[#4E342E] text-white rounded hover:bg-grey-200"
            >
              Login
            </a>
          )}
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button className="text-2xl">☰</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
