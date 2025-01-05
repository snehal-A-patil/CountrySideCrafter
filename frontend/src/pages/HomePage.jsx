import React, { useEffect, useState } from "react";
import ProductGrid from "../components/ProductGrid";
import SellerProfiles from "../components/SellerProfiles";
import HeroCarousel from "../components/HeroCarousel";
import FeatureSection from "../components/Featuresection";
import ProductShowcase from "../components/productshowcase";
import TestimonialSection from "../components/TestimonialSection";
import AboutUsSection from "../components/AboutUssection";
// import 'index.css';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [sellers, setSellers] = useState([]);

  // Fetch data from the backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const productRes = await fetch("/api/products");
        const sellerRes = await fetch("/api/sellers");
        setProducts(await productRes.json());
        setSellers(await sellerRes.json());
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <HeroCarousel/>
      <AboutUsSection/>
      <FeatureSection/>
      <ProductShowcase/>
      <TestimonialSection/>
     
    </div>
  );
};

export default HomePage;
