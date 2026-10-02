import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ProductCard from "./ProductCard";
import { useCart } from "./Context/CartContext";
import { Link } from "react-router-dom";
import heroImg from "../assets/hero.jpg";
import "./Home.css";
import CartSidebar from "./CartSidebar";
import FurnitureGallery from "./FurnitureGallery";
import RoomCarousel from "./RoomeCarousel";


// Assets import

import diningImg from "../assets/dining.png";
import livingImg from "../assets/living.png";
import bedroomImg from "../assets/bedroom.png";
function Home() {
  const { productsData } = useCart();
  const [visibleCount, setVisibleCount] = useState(8); // First 8 products (4 + 4)

  return (
    <div className="home-page">
      <Navbar />

      {/* Hero Section */}
      <div className="home-hero">
        <div className="hero-box">
          <span>New Arrival</span>
          <h1>Discover Our New Collection</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
          <Link to="/shop" className="hero-btn">Buy Now</Link>
        </div>
      </div>

      {/* Browse The Range Section */}
  <section className="browse-range">
        <h2>Browse The Range</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="range-grid">
          <div className="range-item">
            <img src={diningImg} alt="Dining" />
            <h3>Dining</h3>
          </div>
          <div className="range-item">
            <img src={livingImg} alt="Living" />
            <h3>Living</h3>
          </div>
          <div className="range-item">
            <img src={bedroomImg} alt="Bedroom" />
            <h3>Bedroom</h3>
          </div>
        </div>
      </section>
      {/* Our Products Section (Exact 4 per row grid) */}
      <section className="our-products-section">
        <h2>Our Products</h2>
        
        <div className="home-products-grid">
          {productsData.slice(0, visibleCount).map((prod) => (
            <ProductCard
              key={prod.id}
              id={prod.id}
              image={prod.image}
              name={prod.name}
              description={prod.description}
              price={prod.price}
              oldPrice={prod.oldPrice}
              discount={prod.discount}
            />
          ))}
        </div>

        {/* Show More Button */}
        {visibleCount < productsData.length && (
          <div className="show-more-container">
            <button className="show-more-btn" onClick={() => setVisibleCount(productsData.length)}>
              Show More
            </button>
          </div>
        )}
      </section>
      <RoomCarousel/>
      <FurnitureGallery/>

      <Footer />
    </div>
  );
}

export default Home;