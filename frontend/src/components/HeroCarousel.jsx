import React from "react";
import Slider from "react-slick"; // Importing the slick carousel
import pottery1 from '../../src/assets/pottery1.jpg';
import crafting from '../assets/crafting.jpg';
import painting from '../assets/painting.jpg';
import carousel1 from '../assets/carousel1.jpg';

const HeroCarousel = () => {
  const settings = {
    dots: true, // Shows dot navigation
    infinite: true, // Infinite loop for slides
    speed: 500, // Transition speed
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at once
    autoplay: true, // Auto-scroll the carousel
    autoplaySpeed: 3000, // Time between auto scroll
  };

  return (
    <div className="hero-carousel">
      <Slider {...settings}>
        {/* Slide 1 */}
        <div className="relative">
        <img
  src={carousel1}
  alt="Empowering Rural Artisans"
  className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover" // Dynamic height depending on screen size
/>

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <h2 className="text-4xl font-bold">Empowering Rural Artisans</h2>
            <p className="mt-2 text-lg">Discover handcrafted products that tell a story.</p>
            <button className="mt-4 px-6 py-3 bg-primaryAccent text-white rounded-full hover:bg-primaryText transition">
              Explore Now
            </button>
          </div>
        </div>
        {/* Slide 2 */}
        <div className="relative">
          <img
            src={pottery1} // Replace with actual image path or URL
            alt="Crafted with Love"
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <h2 className="text-4xl font-bold">Crafted with Love</h2>
            <p className="mt-2 text-lg">Shop unique, handmade products directly from artisans.</p>
            <button className="mt-4 px-6 py-3 bg-primaryAccent text-white rounded-full hover:bg-primaryText transition">
              Shop Now
            </button>
          </div>
        </div>
        {/* Slide 3 */}
        <div className="relative">
          <img
            src={painting} // Replace with actual image path or URL
            alt="Support Local Communities"
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <h2 className="text-4xl font-bold">Support Local Communities</h2>
            <p className="mt-2 text-lg">Help empower rural entrepreneurs with every purchase.</p>
            <button className="mt-4 px-6 py-3 bg-primaryAccent text-white rounded-full hover:bg-primaryText transition">
              Learn More
            </button>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default HeroCarousel;
