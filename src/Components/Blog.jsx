import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ShopFeatures from "./ShopFeatures";
import { FiUser, FiCalendar, FiTag, FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
// Using existing images as placeholders for blog posts
import product1 from "../assets/b1.jpg";
import product2 from "../assets/b2.jpg";
import product3 from "../assets/b3.jpg";
import "./Blog.css";

function Blog() {
  return (
    <div className="blog-wrapper">
      <Navbar />
      
      {/* Banner */}
      <div className="blog-banner">
        <div className="blog-banner-content">
          <h1>Blog</h1>
          <div className="blog-breadcrumb">
            <span>Home</span> {'>'} <span>Blog</span>
          </div>
        </div>
      </div>

      <div className="blog-container">
        
        {/* Left: Blog Posts */}
        <div className="blog-posts">
          
          <div className="blog-post">
            <img src={product1} alt="Blog Post 1" className="blog-post-img" />
            <div className="blog-meta">
              <span><FiUser /> Admin</span>
              <span><FiCalendar /> 14 Oct 2022</span>
              <span><FiTag /> Wood</span>
            </div>
            <h2>Going all-in with millennial design</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
            <Link to="#" className="read-more">Read more</Link>
          </div>

          <div className="blog-post">
            <img src={product2} alt="Blog Post 2" className="blog-post-img" />
            <div className="blog-meta">
              <span><FiUser /> Admin</span>
              <span><FiCalendar /> 14 Oct 2022</span>
              <span><FiTag /> Handmade</span>
            </div>
            <h2>Exploring new ways of decorating</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
            <Link to="#" className="read-more">Read more</Link>
          </div>

          <div className="blog-post">
            <img src={product3} alt="Blog Post 3" className="blog-post-img" />
            <div className="blog-meta">
              <span><FiUser /> Admin</span>
              <span><FiCalendar /> 14 Oct 2022</span>
              <span><FiTag /> Wood</span>
            </div>
            <h2>Handmade pieces that took time to make</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
            <Link to="#" className="read-more">Read more</Link>
          </div>

          {/* Pagination */}
          <div className="blog-pagination">
            <button className="active">1</button>
            <button>2</button>
            <button>3</button>
            <button className="next-btn">Next</button>
          </div>

        </div>

        {/* Right: Sidebar */}
        <div className="blog-sidebar">
          
          <div className="sidebar-search">
            <input type="text" />
            <FiSearch />
          </div>

          <div className="sidebar-section">
            <h3>Categories</h3>
            <ul className="categories-list">
              <li><span>Crafts</span> <span>2</span></li>
              <li><span>Design</span> <span>8</span></li>
              <li><span>Handmade</span> <span>7</span></li>
              <li><span>Interior</span> <span>1</span></li>
              <li><span>Wood</span> <span>6</span></li>
            </ul>
          </div>

          <div className="sidebar-section">
            <h3>Recent Posts</h3>
            <div className="recent-post-item">
              <img src={product1} alt="Recent 1" />
              <div className="recent-post-info">
                <h4>Going all-in with millennial design</h4>
                <span>03 Aug 2022</span>
              </div>
            </div>
            <div className="recent-post-item">
              <img src={product2} alt="Recent 2" />
              <div className="recent-post-info">
                <h4>Exploring new ways of decorating</h4>
                <span>03 Aug 2022</span>
              </div>
            </div>
            <div className="recent-post-item">
              <img src={product3} alt="Recent 3" />
              <div className="recent-post-info">
                <h4>Handmade pieces that took time to make</h4>
                <span>03 Aug 2022</span>
              </div>
            </div>
            <div className="recent-post-item">
              <img src={product1} alt="Recent 4" />
              <div className="recent-post-info">
                <h4>Modern home in Milan</h4>
                <span>03 Aug 2022</span>
              </div>
            </div>
            <div className="recent-post-item">
              <img src={product2} alt="Recent 5" />
              <div className="recent-post-info">
                <h4>Colorful office redesign</h4>
                <span>03 Aug 2022</span>
              </div>
            </div>
          </div>

        </div>

      </div>

      <ShopFeatures />
      <Footer />
    </div>
  );
}

export default Blog;