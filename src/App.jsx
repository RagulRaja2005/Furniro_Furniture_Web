import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Shop from "./Components/Shop";
import ProductDetails from "./Components/ProductDetails";
import Cart from "./Components/Cart";
import Comparison from "./Components/Comparison";
import Checkout from "./Components/Checkout";
import Contact from "./Components/Contact"; 
import Blog from "./Components/Blog";
import About from "./Components/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product-details/:name" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/comparison" element={<Comparison />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;