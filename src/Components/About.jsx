import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ShopFeatures from "./ShopFeatures";
import heroImg from "../assets/hero.jpg";
import product1 from "../assets/product1.png";
import "./About.css";

function About() {
  return (
    <div className="about-wrapper">
      <Navbar />
      
      <div className="about-banner">
        <div className="about-banner-content">
          <h1>About Us</h1>
          <div className="about-breadcrumb">
            <span>Home</span> {'>'} <span>About</span>
          </div>
        </div>
      </div>

      <div className="about-container">
        
        <div className="about-section">
          <div className="about-text">
            <h2>Crafting Comfort For Your Home Since 2023</h2>
            <p>
              Welcome to Furniro, your ultimate destination for premium, stylish, and durable furniture. We believe that your home should be a reflection of your personality and a sanctuary of comfort. Our designs blend modern elegance with everyday functionality.
            </p>
            <p>
              Every piece in our collection is crafted with precision using high-quality materials, ensuring that it stands the test of time while elevating your interior aesthetics.
            </p>
          </div>
          <div className="about-image">
            <img src={heroImg} alt="About Furniro" />
          </div>
        </div>

        <div className="about-section reverse">
          <div className="about-text">
            <h2>Our Vision & Commitment</h2>
            <p>
              Our vision is to make luxurious and comfortable living spaces accessible to everyone. We work closely with master artisans and designers to bring exclusive prototypes that inspire interior beauty.
            </p>
            <p>
              From sustainable sourcing to exceptional customer service, we are committed to delivering an unmatched shopping experience. Join thousands of happy homeowners who trust Furniro for their living spaces.
            </p>
          </div>
          <div className="about-image">
            <img src={product1} alt="Furniro Craftsmanship" />
          </div>
        </div>

      </div>

      <ShopFeatures />
      <Footer />
    </div>
  );
}

export default About; // (Or export default About)