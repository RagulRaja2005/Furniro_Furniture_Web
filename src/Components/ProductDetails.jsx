import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FiHeart, FiShare2, FiFacebook, FiLinkedin, FiTwitter } from "react-icons/fi";

import Navbar from "./Navbar";
import ProductCard from "./ProductCard";
import Footer from "./Footer";
import { useCart } from "./Context/CartContext";

import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.jpg";

import "./ProductDetails.css";

function ProductDetails() {
  const { name } = useParams();
  const { addToCart, productsData } = useCart();

  const decodedName = name ? decodeURIComponent(name) : "";

  // Exact name-a match panrom
  const product = productsData.find((p) => p.name.toLowerCase() === decodedName.toLowerCase()) || productsData[0];

  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(product.image);

  useEffect(() => {
    setSelectedImage(product.image);
    setQuantity(1);
  }, [product]);

  const productImages = [
    product.image,
    product2,
    product3,
    product4
  ];

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleAddToCart = () => {
    const cleanPrice = parseInt(product.price.toString().replace(/,/g, ''));
    addToCart({
      id: product.id,
      name: product.name,
      price: cleanPrice,
      image: selectedImage
    }, quantity);
  };

  return (
    <div className="product-details-page">
      <Navbar />

      <div className="product-breadcrumb">
        <span>Home</span>
        <span>›</span>
        <span>Shop</span>
        <span>›</span>
        <span className="current-product">{product.name}</span>
      </div>

      <section className="product-main">
        <div className="product-gallery">
          <div className="product-thumbnails">
            {productImages.map((image, index) => (
              <button
                key={index}
                className={selectedImage === image ? "thumbnail active" : "thumbnail"}
                onClick={() => setSelectedImage(image)}
              >
                <img src={image} alt={`Thumbnail ${index + 1}`} />
              </button>
            ))}
          </div>

          <div className="product-main-image">
            <img src={selectedImage} alt={product.name} />
          </div>
        </div>

        <div className="product-information">
          <h1>{product.name}</h1>
          <h2>Rs. {product.price}</h2>

          <div className="product-rating">
            <div className="stars">★★★★★</div>
            <span>5 Customer Review</span>
          </div>

          <p className="product-description">
            {product.description || "Setting the bar as one of the loudest statements in the space, this product is a design masterpiece that blends comfort, elegance and modern style."}
          </p>

          <div className="product-option">
            <p>Size</p>
            <div className="size-options">
              <button className="size active">L</button>
              <button className="size">XL</button>
              <button className="size">XS</button>
            </div>
          </div>

          <div className="product-option">
            <p>Color</p>
            <div className="color-options">
              <button className="color purple"></button>
              <button className="color black"></button>
              <button className="color gold"></button>
            </div>
          </div>

          <div className="product-cart">
            <div className="quantity">
              <button onClick={decreaseQuantity}>−</button>
              <span>{quantity}</span>
              <button onClick={increaseQuantity}>+</button>
            </div>

            <button className="add-product-cart" onClick={handleAddToCart}>
              Add To Cart
            </button>

            <button className="compare-button">+ Compare</button>
          </div>

          <div className="product-meta">
            <p><span>SKU</span>: SS00{product.id}</p>
            <p><span>Category</span>: Furniture</p>
            <p><span>Tags</span>: Sofa, Chair, Home</p>
            <div className="share-product">
              <span>Share</span>
              <FiFacebook />
              <FiLinkedin />
              <FiTwitter />
              <FiShare2 />
            </div>
          </div>
        </div>
      </section>

      <section className="product-tabs">
        <div className="tabs">
          <button className="active">Description</button>
          <button>Additional Information</button>
          <button>Reviews [5]</button>
        </div>
        <div className="description-content">
          <p>Embodying the raw, wayward spirit of design, this product takes the unmistakable look and sound, unplugs the chords, and takes comfort to the next level.</p>
        </div>
      </section>

      <section className="related-products">
        <h2>Related Products</h2>
        <div className="related-products-grid">
          {productsData.slice(0, 4).map((prod) => (
            <ProductCard
              key={prod.id}
              image={prod.image}
              name={prod.name}
              description={prod.description}
              price={prod.price}
              oldPrice={prod.oldPrice}
              discount={prod.discount}
            />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default ProductDetails;