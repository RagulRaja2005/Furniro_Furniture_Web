import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ShopFeatures from "./ShopFeatures";
import sofa1 from "../assets/sofa1.png"; 
import sofa2 from "../assets/sofa2.png";
import "./Comparison.css";

function Comparison() {
  return (
    <div className="comparison-page">
      <Navbar />

      <div className="comparison-banner">
        <div className="comparison-banner-content">
          <h1>Product Comparison</h1>
          <div className="comparison-breadcrumb">
            <span>Home</span> {'>'} <span>Comparison</span>
          </div>
        </div>
      </div>

      <div className="comparison-container">
        
        {/* Top Products Section */}
        <div className="comparison-top-grid">
          <div className="top-col-1">
            <h2>Go to Product page for more Products</h2>
            <Link to="/shop">View More</Link>
          </div>

          <div className="compare-product-card">
            <img src={sofa1} alt="Asgaard Sofa" />
            <h3>Asgaard Sofa</h3>
            <p>Rs. 250,000.00</p>
            <div className="compare-rating">
              <span>4.7</span>
              <div className="stars">★★★★★</div>
              <span className="review-count">204 Review</span>
            </div>
          </div>

          <div className="compare-product-card">
            <img src={sofa2} alt="Outdoor Sofa Set" />
            <h3>Outdoor Sofa Set</h3>
            <p>Rs. 224,000.00</p>
            <div className="compare-rating">
              <span>4.2</span>
              <div className="stars">★★★★☆</div>
              <span className="review-count">145 Review</span>
            </div>
          </div>

          <div className="add-product-box">
            <h3>Add A Product</h3>
            <button className="add-product-btn">
              Choose a Product <span>▼</span>
            </button>
          </div>
        </div>

        <hr style={{ borderColor: '#E8E8E8', margin: '10px 0 50px 0' }} />

        {/* General Specs */}
        <div className="specs-section">
          <h3>General</h3>
          <div className="specs-grid">
            <div className="spec-label">Sales Package</div>
            <div className="spec-value">1 sectional sofa</div>
            <div className="spec-value">1 Three Seater, 2 Single Seater</div>
            <div></div>
          </div>
          <div className="specs-grid">
            <div className="spec-label">Model Number</div>
            <div className="spec-value">TFCBLIGRBL6SRHS</div>
            <div className="spec-value">DTUBLIGRBL568</div>
            <div></div>
          </div>
          <div className="specs-grid">
            <div className="spec-label">Secondary Material</div>
            <div className="spec-value">Solid Wood</div>
            <div className="spec-value">Solid Wood</div>
            <div></div>
          </div>
          <div className="specs-grid">
            <div className="spec-label">Configuration</div>
            <div className="spec-value">L-shaped</div>
            <div className="spec-value">L-shaped</div>
            <div></div>
          </div>
          <div className="specs-grid">
            <div className="spec-label">Upholstery Material</div>
            <div className="spec-value">Fabric + Cotton</div>
            <div className="spec-value">Fabric + Cotton</div>
            <div></div>
          </div>
          <div className="specs-grid">
            <div className="spec-label">Upholstery Color</div>
            <div className="spec-value">Bright Grey & Lion</div>
            <div className="spec-value">Bright Grey & Lion</div>
            <div></div>
          </div>
        </div>

        {/* Product Specs */}
        <div className="specs-section">
          <h3>Product</h3>
          <div className="specs-grid">
            <div className="spec-label">Filling Material</div>
            <div className="spec-value">Foam</div>
            <div className="spec-value">Matte</div>
            <div></div>
          </div>
          <div className="specs-grid">
            <div className="spec-label">Finish Type</div>
            <div className="spec-value">Bright Grey & Lion</div>
            <div className="spec-value">Bright Grey & Lion</div>
            <div></div>
          </div>
          <div className="specs-grid">
            <div className="spec-label">Adjustable Headrest</div>
            <div className="spec-value">No</div>
            <div className="spec-value">yes</div>
            <div></div>
          </div>
          <div className="specs-grid">
            <div className="spec-label">Maximum Load Capacity</div>
            <div className="spec-value">280 KG</div>
            <div className="spec-value">300 KG</div>
            <div></div>
          </div>
          <div className="specs-grid">
            <div className="spec-label">Origin of Manufacture</div>
            <div className="spec-value">India</div>
            <div className="spec-value">India</div>
            <div></div>
          </div>
        </div>

        {/* Dimensions Specs */}
        <div className="specs-section">
          <h3>Dimensions</h3>
          <div className="specs-grid">
            <div className="spec-label">Width</div>
            <div className="spec-value">265.32 cm</div>
            <div className="spec-value">265.32 cm</div>
            <div></div>
          </div>
          <div className="specs-grid">
            <div className="spec-label">Height</div>
            <div className="spec-value">76 cm</div>
            <div className="spec-value">76 cm</div>
            <div></div>
          </div>
          <div className="specs-grid">
            <div className="spec-label">Depth</div>
            <div className="spec-value">167.76 cm</div>
            <div className="spec-value">167.76 cm</div>
            <div></div>
          </div>
          <div className="specs-grid">
            <div className="spec-label">Weight</div>
            <div className="spec-value">45 KG</div>
            <div className="spec-value">65 KG</div>
            <div></div>
          </div>
          <div className="specs-grid">
            <div className="spec-label">Seat Height</div>
            <div className="spec-value">41.52 cm</div>
            <div className="spec-value">41.52 cm</div>
            <div></div>
          </div>
          <div className="specs-grid">
            <div className="spec-label">Leg Height</div>
            <div className="spec-value">5.46 cm</div>
            <div className="spec-value">5.46 cm</div>
            <div></div>
          </div>
        </div>

        {/* Warranty Specs */}
        <div className="specs-section">
          <h3>Warranty</h3>
          <div className="specs-grid">
            <div className="spec-label">Warranty Summary</div>
            <div className="spec-value">1 Year Manufacturing Warranty</div>
            <div className="spec-value">1.2 Year Manufacturing Warranty</div>
            <div></div>
          </div>
          <div className="specs-grid">
            <div className="spec-label">Warranty Service Type</div>
            <div className="spec-value">For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com</div>
            <div className="spec-value">For Warranty Claims or Any Product Related Issues Please Email at support@xyz.com</div>
            <div></div>
          </div>
          <div className="specs-grid">
            <div className="spec-label">Covered in Warranty</div>
            <div className="spec-value">Warranty Against Manufacturing Defect</div>
            <div className="spec-value">Warranty of the product is limited to manufacturing defects only.</div>
            <div></div>
          </div>
          <div className="specs-grid">
            <div className="spec-label">Not Covered in Warranty</div>
            <div className="spec-value">The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.</div>
            <div className="spec-value">The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.</div>
            <div></div>
          </div>
          <div className="specs-grid">
            <div className="spec-label">Domestic Warranty</div>
            <div className="spec-value">1 Year</div>
            <div className="spec-value">3 Months</div>
            <div></div>
          </div>
        </div>

        {/* Add to Cart Buttons Row */}
        <div className="compare-cart-row">
          <div></div>
          <div>
            <Link to="/cart">
              <button className="compare-add-cart">Add To Cart</button>
            </Link>
          </div>
          <div>
            <Link to="/cart">
              <button className="compare-add-cart">Add To Cart</button>
            </Link>
          </div>
          <div></div>
        </div>

      </div>

      <ShopFeatures />
      <Footer />
    </div>
  );
}

export default Comparison;