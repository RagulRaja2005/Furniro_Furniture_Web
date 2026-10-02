import { createContext, useContext, useState } from "react";
import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.jpg";
import product5 from "../assets/product5.png";
import product6 from "../assets/product6.png";
import product7 from "../assets/product7.jpg";
import product8 from "../assets/product8.jpg";

const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const productsData = [
    { id: "1", image: product1, name: "Syltherine", description: "Stylish cafe chair", price: "2,500,000", oldPrice: "3,500,000", discount: 30 },
    { id: "2", image: product2, name: "Leviosa", description: "Stylish cafe chair", price: "2,500,000" },
    { id: "3", image: product3, name: "Lolito", description: "Luxury big sofa", price: "7,000,000", oldPrice: "14,000,000", discount: 50 },
    { id: "4", image: product4, name: "Respira", description: "Outdoor bar table", price: "500,000", discount: 20 },
    { id: "5", image: product5, name: "Grifo", description: "Night lamp", price: "1,500,000" },
    { id: "6", image: product6, name: "Muggo", description: "Small mug", price: "150,000", discount: 10 },
    { id: "7", image: product7, name: "Pingky", description: "Cute bed set", price: "7,000,000", oldPrice: "14,000,000", discount: 50 },
    { id: "8", image: product8, name: "Potty", description: "Minimalist flower pot", price: "500,000", discount: 10 },
    { id: "9", image: product1, name: "Asgaard sofa", description: "Luxury big sofa", price: "250,000", oldPrice: "350,000", discount: 15 }
  ];

  return (
    <ShopContext.Provider value={{ productsData, selectedProduct, setSelectedProduct }}>
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => useContext(ShopContext);