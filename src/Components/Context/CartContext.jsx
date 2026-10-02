import { createContext, useContext, useState } from "react";
import product1 from "../../assets/product1.png";
import product2 from "../../assets/product2.png";
import product3 from "../../assets/product3.png";
import product4 from "../../assets/product4.jpg";
import product5 from "../../assets/product5.png";
import product6 from "../../assets/product6.png";
import product7 from "../../assets/product7.jpg";
import product8 from "../../assets/product8.jpg";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Total 12 Products (Mela 4, Keezha 4, and "Show More" pannina baki 4 products)
  const productsData = [
    { id: "1", image: product1, name: "Syltherine", description: "Stylish cafe chair", price: "2,500,000", oldPrice: "3,500,000", discount: 30 },
    { id: "2", image: product2, name: "Leviosa", description: "Stylish cafe chair", price: "2,500,000" },
    { id: "3", image: product3, name: "Lolito", description: "Luxury big sofa", price: "7,000,000", oldPrice: "14,000,000", discount: 50 },
    { id: "4", image: product4, name: "Respira", description: "Outdoor bar table", price: "500,000", discount: 20 },
    { id: "5", image: product5, name: "Grifo", description: "Night lamp", price: "1,500,000" },
    { id: "6", image: product6, name: "Muggo", description: "Small mug", price: "150,000", discount: 10 },
    { id: "7", image: product7, name: "Pingky", description: "Cute bed set", price: "7,000,000", oldPrice: "14,000,000", discount: 50 },
    { id: "8", image: product8, name: "Potty", description: "Minimalist flower pot", price: "500,000", discount: 10 },
    { id: "9", image: product1, name: "Syltherine Pro", description: "Stylish cafe chair", price: "3,000,000", oldPrice: "4,000,000", discount: 25 },
    { id: "10", image: product2, name: "Leviosa Max", description: "Luxury chair set", price: "3,500,000" },
    { id: "11", image: product3, name: "Lolito Luxe", description: "Big comfort sofa", price: "9,000,000", oldPrice: "15,000,000", discount: 40 },
    { id: "12", image: product4, name: "Respira Pro", description: "Outdoor table set", price: "800,000", discount: 15 }
  ];

  const addToCart = (product, qty = 1) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + qty } : item
        );
      }
      return [...prevItems, { ...product, quantity: qty }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce((acc, item) => {
    const priceNum = parseInt(item.price.toString().replace(/,/g, ''));
    return acc + priceNum * item.quantity;
  }, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, subtotal, productsData, selectedProduct, setSelectedProduct }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);