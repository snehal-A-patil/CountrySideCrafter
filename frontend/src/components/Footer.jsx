import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; // Social Media Icons

const Footer = () => {
  return (
    <footer className="bg-[#4E342E] text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-[#D7CCC8]">Country Side Crafter</h4>
            <p className="text-md mb-2 text-[#D7CCC8]">
              Crafted with care and passion, we bring unique handcrafted products to your doorstep. Discover the beauty of handmade creations from artisans around the world.
            </p>
            <p className="text-md text-[#BCAAA4]">© 2024 Country Side Crafter. All rights reserved.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-[#D7CCC8]">Quick Links</h4>
            <ul>
              <li>
                <a href="/about" className="text-md text-[#BCAAA4] hover:text-[#D7CCC8] transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-md text-[#BCAAA4] hover:text-[#D7CCC8] transition">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="text-md text-[#BCAAA4] hover:text-[#D7CCC8] transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-md text-[#BCAAA4] hover:text-[#D7CCC8] transition">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-[#D7CCC8]">Follow Us</h4>
            <div className="flex gap-4">
              <a href="example.com" className="text-[#BCAAA4] hover:text-[#D7CCC8] transition">
                <FaFacebookF size={24} />
              </a>
              <a href="example.com" className="text-[#BCAAA4] hover:text-[#D7CCC8] transition">
                <FaTwitter size={24} />
              </a>
              <a href="example.com" className="text-[#BCAAA4] hover:text-[#D7CCC8] transition">
                <FaInstagram size={24} />
              </a>
              <a href="example.com" className="text-[#BCAAA4] hover:text-[#D7CCC8] transition">
                <FaLinkedinIn size={24} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-[#D7CCC8]">Contact</h4>
            <p className="text-md text-[#BCAAA4]">Email: support@countrysidecrafter.com</p>
            <p className="text-md text-[#BCAAA4]">Phone: +91 123 456 7890</p>
            <p className="text-md text-[#BCAAA4]">Address: 123, Craft Street, Village Town, India</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 text-center">
          <p className="text-sm text-[#BCAAA4]">
            Designed with ❤️ by Country Side Crafter
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
