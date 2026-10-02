import { FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useCart } from "./Context/CartContext";
import "./CartSidebar.css";

function CartSidebar({ isOpen, onClose }) {
  const { cartItems, removeFromCart, subtotal } = useCart();

  if (!isOpen) {
    return null;
  }

  return (
    <div className="cart-sidebar-wrapper">
      <div className="cart-sidebar-overlay" onClick={onClose}></div>

      <aside className="cart-sidebar">
        <div className="cart-sidebar-header">
          <h2>Shopping Cart</h2>
          <button type="button" className="cart-close-btn" onClick={onClose}>
            <FiX />
          </button>
        </div>

        <div className="cart-header-line"></div>

        <div className="cart-items">
          {cartItems.length === 0 && (
            <p className="cart-empty">Your cart is empty.</p>
          )}

          {cartItems.map((item) => (
            <div className="cart-product" key={item.id}>
              <div className="cart-product-image">
                <img src={item.image} alt={item.name} />
              </div>

              <div className="cart-product-details">
                <h3>{item.name}</h3>
                <div className="cart-product-price">
                  <span className="cart-quantity">{item.quantity}</span>
                  <span className="cart-x">X</span>
                  <span className="cart-price">
                    Rs. {item.price.toLocaleString("en-US")}.00
                  </span>
                </div>
              </div>

              <button
                type="button"
                className="cart-product-remove"
                onClick={() => removeFromCart(item.id)}
              >
                <FiX />
              </button>
            </div>
          ))}
        </div>

        <div className="cart-subtotal">
          <span>Subtotal</span>
          <strong>Rs. {subtotal.toLocaleString("en-US")}.00</strong>
        </div>

        <div className="cart-bottom-line"></div>

        <div className="cart-sidebar-buttons">
          <Link
            to="/cart"
            className="cart-sidebar-btn cart-btn"
            onClick={onClose}
          >
            Cart
          </Link>

          <Link
            to="/checkout"
            className="cart-sidebar-btn checkout-btn"
            onClick={onClose}
          >
            Checkout
          </Link>

          <Link
            to="/comparison"
            className="cart-sidebar-btn comparison-btn"
            onClick={onClose}
          >
            Comparison
          </Link>
        </div>
      </aside>
    </div>
  );
}

export default CartSidebar;