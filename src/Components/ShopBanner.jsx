import { Link } from "react-router-dom";

import shopBanner from "../assets/shop-banner.jpg";

import "./ShopBanner.css";

function ShopBanner() {
  return (
    <section className="shop-banner">

      {/* Background Image */}
      <img
        src={shopBanner}
        alt="Shop"
        className="shop-banner-image"
      />

      {/* Overlay */}
      <div className="shop-banner-overlay"></div>

      {/* Content */}
      <div className="shop-banner-content">

        <h1>Shop</h1>

        <div className="shop-breadcrumb">

          <Link to="/">
            Home
          </Link>

          <span>›</span>

          <span>Shop</span>

        </div>

      </div>

    </section>
  );
}

export default ShopBanner;