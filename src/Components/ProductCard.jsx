import { Link } from "react-router-dom";
import { FiShare2, FiBarChart2, FiHeart } from "react-icons/fi";
import "./ProductCard.css";

function ProductCard({
  image,
  name,
  description,
  price,
  oldPrice,
  discount
}) {
  return (
    <div className="col-lg-3 col-md-6 col-12">
      <div className="product-card">

        {/* Image & Hover Overlay Container */}
        <div className="product-image-container">
          <Link to={`/product-details/${encodeURIComponent(name)}`}>
            <img src={image} alt={name} className="product-image" />
          </Link>

          {discount && (
            <span className="discount-badge">-{discount}%</span>
          )}

          {/* HOVER OVERLAY (Appears on mouse hover) */}
          <div className="product-overlay">
            <Link to={`/product-details/${encodeURIComponent(name)}`}>
              <button className="add-cart-btn">Add to cart</button>
            </Link>

            <div className="product-actions">
              <button onClick={(e) => e.preventDefault()}>
                <FiShare2 /> <span>Share</span>
              </button>
              <button onClick={(e) => e.preventDefault()}>
                <FiBarChart2 /> <span>Compare</span>
              </button>
              <button onClick={(e) => e.preventDefault()}>
                <FiHeart /> <span>Like</span>
              </button>
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="product-info">
          <Link to={`/product-details/${encodeURIComponent(name)}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <h3>{name}</h3>
          </Link>
          <p>{description}</p>
          <div className="price">
            <span>Rp {price}</span>
            {oldPrice && <del>Rp {oldPrice}</del>}
          </div>
        </div>

      </div>
    </div>
  );
}

export default ProductCard;