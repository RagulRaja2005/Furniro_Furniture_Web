import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ShopFeatures from "./ShopFeatures";
import { FiMapPin, FiPhone, FiClock } from "react-icons/fi";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-wrapper">
      <Navbar />
      
      {/* Banner */}
      <div className="contact-banner">
        <div className="contact-banner-content">
          <h1>Contact</h1>
          <div className="contact-breadcrumb">
            <span>Home</span> {'>'} <span>Contact</span>
          </div>
        </div>
      </div>

      <div className="contact-container">
        <div className="contact-header">
          <h2>Get In Touch With Us</h2>
          <p>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
        </div>

        <div className="contact-content">
          
          {/* Left Info Section */}
          <div className="contact-info">
            <div className="info-block">
              <FiMapPin className="info-icon" />
              <div className="info-text">
                <h3>Address</h3>
                <p>236 5th SE Avenue, New<br/>York NY10000, United<br/>States</p>
              </div>
            </div>

            <div className="info-block">
              <FiPhone className="info-icon" />
              <div className="info-text">
                <h3>Phone</h3>
                <p>Mobile: +(84) 546-6789<br/>Hotline: +(84) 456-6789</p>
              </div>
            </div>

            <div className="info-block">
              <FiClock className="info-icon" />
              <div className="info-text">
                <h3>Working Time</h3>
                <p>Monday-Friday: 9:00 - 22:00<br/>Saturday-Sunday: 9:00 - 21:00</p>
              </div>
            </div>
          </div>

          {/* Right Form Section */}
          <div className="contact-form">
            <div>
              <label>Your name</label>
              <input type="text" placeholder="Abc" />
            </div>
            <div>
              <label>Email address</label>
              <input type="email" placeholder="Abc@def.com" />
            </div>
            <div>
              <label>Subject</label>
              <input type="text" placeholder="This is an optional" />
            </div>
            <div>
              <label>Message</label>
              <textarea placeholder="Hi! i'd like to ask about"></textarea>
            </div>
            <button className="submit-btn">Submit</button>
          </div>

        </div>
      </div>

      <ShopFeatures />
      <Footer />
    </div>
  );
}

export default Contact;