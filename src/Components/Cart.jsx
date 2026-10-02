import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ShopFeatures from "./ShopFeatures";
import { useCart } from "./Context/CartContext";
import { FiTrash } from "react-icons/fi";
import { Link } from "react-router-dom";
import product1 from "../assets/product1.png"; // Default image
import "./Cart.css";

function Cart() {
  const { cartItems, removeFromCart, subtotal } = useCart();

  // Cart empty-a irunthalum Figma design mathiriye default-a oru item kaatta
  const defaultItem = [{
    id: 'default',
    image: product1,
    name: 'Asgaard sofa',
    price: '250,000.00',
    quantity: 1
  }];

  const itemsToShow = cartItems.length > 0 ? cartItems : defaultItem;
  const totalToShow = cartItems.length > 0 ? subtotal : 250000;

  return (
    <div className="cart-page-wrapper">
      <Navbar />
      
      <div className="cart-banner">
        <div className="cart-banner-content">
          <h1>Cart</h1>
          <div className="cart-breadcrumb">
            <span>Home</span> {'>'} <span>Cart</span>
          </div>
        </div>
      </div>
      
      <div className="cart-page-container">
        <div className="cart-items-section">
          <table className="cart-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {itemsToShow.map((item) => (
                <tr key={item.id}>
                  <td>
                    <div className="cart-item-info">
                      <img src={item.image} alt={item.name} className="cart-item-img" />
                      <span className="cart-item-name">{item.name}</span>
                    </div>
                  </td>
                  <td className="cart-item-price">
                    Rs. {typeof item.price === 'string' ? item.price : item.price.toLocaleString('en-US')}
                  </td>
                  <td>
                    <span className="cart-item-qty">{item.quantity}</span>
                  </td>
                  <td className="cart-item-subtotal">
                    Rs. {(parseInt((item.price || "0").toString().replace(/,/g, '')) * item.quantity).toLocaleString('en-US')}
                  </td>
                  <td>
                    <FiTrash 
                      className="delete-icon" 
                      onClick={() => {
                        if(item.id !== 'default') removeFromCart(item.id)
                      }} 
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="cart-totals-section">
          <h2>Cart Totals</h2>
          <div className="totals-row">
            <span>Subtotal</span>
            <span className="totals-subtotal-val">Rs. {totalToShow.toLocaleString('en-US')}</span>
          </div>
          <div className="totals-row">
            <span>Total</span>
            <span className="totals-total-val">Rs. {totalToShow.toLocaleString('en-US')}</span>
          </div>
          <Link to="/checkout">
            <button className="checkout-btn-cart">Check Out</button>
          </Link>
        </div>
      </div>

      <ShopFeatures />
      <Footer />
    </div>
  );
}

export default Cart;