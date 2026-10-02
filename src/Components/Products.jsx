import { useState } from "react";

import ProductCard from "./ProductCard";

import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.jpg";
import product5 from "../assets/product5.png";
import product6 from "../assets/product6.png";
import product7 from "../assets/product7.jpg";
import product8 from "../assets/product8.jpg";

import "./Products.css";


function Products() {

  const [showMore, setShowMore] = useState(false);


  const products = [

    {
      id: 1,
      image: product1,
      name: "Syltherine",
      description: "Stylish cafe chair",
      price: "2,500,000",
      oldPrice: "3,500,000",
      discount: 30
    },

    {
      id: 2,
      image: product2,
      name: "Leviosa",
      description: "Stylish cafe chair",
      price: "2,500,000"
    },

    {
      id: 3,
      image: product3,
      name: "Lolito",
      description: "Luxury big sofa",
      price: "7,000,000",
      oldPrice: "14,000,000",
      discount: 50
    },

    {
      id: 4,
      image: product4,
      name: "Respira",
      description: "Outdoor bar table and stool",
      price: "500,000"
    },

    {
      id: 5,
      image: product5,
      name: "Grifo",
      description: "Night lamp",
      price: "1,500,000"
    },

    {
      id: 6,
      image: product6,
      name: "Muggo",
      description: "Small mug",
      price: "150,000",
      discount: 20
    },

    {
      id: 7,
      image: product7,
      name: "Pingky",
      description: "Cute bed set",
      price: "7,000,000",
      oldPrice: "14,000,000",
      discount: 50
    },

    {
      id: 8,
      image: product8,
      name: "Potty",
      description: "Minimalist flower pot",
      price: "500,000"
    },


    /* MORE PRODUCTS */

    {
      id: 9,
      image: product1,
      name: "Syltherine",
      description: "Stylish cafe chair",
      price: "2,500,000"
    },

    {
      id: 10,
      image: product2,
      name: "Leviosa",
      description: "Stylish cafe chair",
      price: "2,500,000"
    },

    {
      id: 11,
      image: product3,
      name: "Lolito",
      description: "Luxury big sofa",
      price: "7,000,000"
    },

    {
      id: 12,
      image: product4,
      name: "Respira",
      description: "Outdoor bar table and stool",
      price: "500,000"
    }

  ];


  /*
    First 8 products

    Show More click pannina
    remaining products display aagum
  */

  const visibleProducts = showMore
    ? products
    : products.slice(0, 8);


  return (

    <section className="products-section">

      <div className="container">

        <h2 className="products-title">
          Our Products
        </h2>


        <div className="row g-4">

          {visibleProducts.map((product) => (

            <ProductCard
              key={product.id}
              id={product.id}
              image={product.image}
              name={product.name}
              description={product.description}
              price={product.price}
              oldPrice={product.oldPrice}
              discount={product.discount}
            />

          ))}

        </div>


        {/* SHOW MORE */}

        {!showMore && (

          <div className="show-more-container">

            <button
              className="show-more-btn"
              onClick={() => setShowMore(true)}
            >
              Show More
            </button>

          </div>

        )}

      </div>

    </section>

  );
}


export default Products;