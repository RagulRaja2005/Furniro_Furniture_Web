import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ShopFeatures from "./ShopFeatures";
import ProductCard from "./ProductCard";
import { useCart } from "./Context/CartContext";
import shopBanner from "../assets/shop-banner.jpg";
import { FiSliders } from "react-icons/fi";
import { BsViewList } from "react-icons/bs";
import { TfiLayoutGrid2 } from "react-icons/tfi";
import "./Shop.css";

function Shop() {
  const { productsData } = useCart();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16; // Figma layout padi oru page-ku 16 items

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = productsData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="shop-page">
      <Navbar />

      {/* Shop Banner */}
      <div className="shop-banner" style={{ backgroundImage: `url(${shopBanner})` }}>
        <div className="shop-banner-content">
          <h1>Shop</h1>
          <div className="shop-breadcrumb">
            <span>Home</span> {'>'} <span>Shop</span>
          </div>
        </div>
      </div>

      {/* Filter and Control Bar (Screenshot design matched) */}
      <div className="shop-filter-bar">
        <div className="filter-left">
          <button className="filter-btn"><FiSliders /> Filter</button>
          <TfiLayoutGrid2 className="filter-icon" />
          <BsViewList className="filter-icon" />
          <span className="results-text">Showing 1–16 of {productsData.length * 4} results</span>
        </div>

        <div className="filter-right">
          <div className="show-control">
            <span>Show</span>
            <input type="number" defaultValue="16" readOnly />
          </div>
          <div className="sort-control">
            <span>Short by</span>
            <select defaultValue="default">
              <option value="default">Default</option>
              <option value="price">Price</option>
            </select>
          </div>
        </div>
      </div>

      {/* Products Grid Section (4 per row) */}
      <div className="shop-container">
        <div className="shop-products-grid">
          {currentProducts.map((prod) => (
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

        {/* Pagination Buttons (1, 2, 3, Next) */}
        <div className="shop-pagination">
          <button className={`page-btn ${currentPage === 1 ? 'active' : ''}`} onClick={() => setCurrentPage(1)}>1</button>
          <button className={`page-btn ${currentPage === 2 ? 'active' : ''}`} onClick={() => setCurrentPage(2)}>2</button>
          <button className={`page-btn ${currentPage === 3 ? 'active' : ''}`} onClick={() => setCurrentPage(3)}>3</button>
          <button className="page-btn next-btn" onClick={() => setCurrentPage(prev => prev < 3 ? prev + 1 : 1)}>Next</button>
        </div>
      </div>

      <ShopFeatures />
      <Footer />
    </div>
  );
}

export default Shop;