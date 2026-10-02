import { useState } from "react";
import {
  FiUser,
  FiSearch,
  FiHeart,
  FiShoppingCart
} from "react-icons/fi";
import { Link } from "react-router-dom";
import CartSidebar from "./CartSidebar";
import "./Navbar.css";

function Navbar() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          
          {/* Logo */}
          <div className="navbar-logo">
            <Link to="/">
              <img src="/src/assets/logo.png" alt="Furniro" />
            </Link>
            <h3>Furniro</h3>
          </div>

          {/* Menu Order: Home -> Shop -> About -> Contact -> Blog */}
          <div className="navbar-menu">
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/blog">Blog</Link>
          </div>

          {/* Icons */}
          <div className="navbar-icons">
            <Link to="/account"><FiUser /></Link>
            <Link to="/search"><FiSearch /></Link>
            <Link to="/wishlist"><FiHeart /></Link>
            <button
              type="button"
              className="navbar-cart-button"
              onClick={() => setCartOpen(true)}
            >
              <FiShoppingCart />
            </button>
          </div>

        </div>
      </nav>

      <CartSidebar
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
      />
    </>
  );
}

export default Navbar;