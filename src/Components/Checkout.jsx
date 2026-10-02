import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ShopFeatures from "./ShopFeatures";
import { useCart } from "./Context/CartContext";
import "./Checkout.css";

function Checkout() {
  const { cartItems, subtotal } = useCart();
  
  // Cart empty aana screenshot mathiri default ah kaata fallback data
  const itemsToShow = cartItems.length > 0 ? cartItems : [{ id: 'default', name: 'Asgaard sofa', price: '250,000.00', quantity: 1 }];
  const totalToShow = cartItems.length > 0 ? subtotal : 250000;

  return (
    <div className="checkout-wrapper">
      <Navbar />
      
      {/* Banner */}
      <div className="checkout-banner">
        <div className="checkout-banner-content">
          <h1>Checkout</h1>
          <div className="checkout-breadcrumb">
            <span>Home</span> {'>'} <span>Checkout</span>
          </div>
        </div>
      </div>
      
      <div className="checkout-container">
        
        {/* Left Column: Billing Details */}
        <div className="billing-section">
          <h2>Billing details</h2>
          
          <div className="form-row-2">
            <div className="form-group">
              <label>First Name</label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" />
            </div>
          </div>

          <div className="form-group">
            <label>Company Name (Optional)</label>
            <input type="text" />
          </div>

          <div className="form-group">
            <label>Country / Region</label>
            <select>
              <option>Sri Lanka</option>
              <option>India</option>
            </select>
          </div>

          <div className="form-group">
            <label>Street address</label>
            <input type="text" />
          </div>

          <div className="form-group">
            <label>Town / City</label>
            <input type="text" />
          </div>

          <div className="form-group">
            <label>Province</label>
            <select>
              <option>Western Province</option>
              <option>Tamil Nadu</option>
            </select>
          </div>

          <div className="form-group">
            <label>ZIP code</label>
            <input type="text" />
          </div>

          <div className="form-group">
            <label>Phone</label>
            <input type="text" />
          </div>

          <div className="form-group">
            <label>Email address</label>
            <input type="email" />
          </div>

          <div className="form-group" style={{marginTop: '20px'}}>
            <input type="text" placeholder="Additional information" />
          </div>
        </div>

        {/* Right Column: Order Summary */}
        <div className="order-section">
          <div className="order-summary-header">
            <span>Product</span>
            <span>Subtotal</span>
          </div>
          
          {itemsToShow.map((item, index) => (
            <div className="order-item-row" key={index}>
              <span className="product-name">{item.name} <span>x {item.quantity}</span></span>
              <span>Rs. {(parseInt((item.price || "0").toString().replace(/,/g, '')) * item.quantity).toLocaleString('en-US')}</span>
            </div>
          ))}

          <div className="order-subtotal-row">
            <span>Subtotal</span>
            <span>Rs. {totalToShow.toLocaleString('en-US')}</span>
          </div>

          <div className="order-total-row">
            <span>Total</span>
            <span className="total-price">Rs. {totalToShow.toLocaleString('en-US')}</span>
          </div>

          {/* Payment Section */}
          <div className="payment-options">
            <label className="radio-group active">
              <input type="radio" name="payment" defaultChecked />
              Direct Bank Transfer
            </label>
            <p className="payment-desc">
              Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
            </p>

            <label className="radio-group inactive">
              <input type="radio" name="payment" />
              Direct Bank Transfer
            </label>
            
            <label className="radio-group inactive" style={{marginBottom: '25px'}}>
              <input type="radio" name="payment" />
              Cash On Delivery
            </label>

            <p className="privacy-text">
              Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span>privacy policy.</span>
            </p>

            <button className="place-order-btn">Place order</button>
          </div>
        </div>

      </div>

      <ShopFeatures />
      <Footer />
    </div>
  );
}

export default Checkout;