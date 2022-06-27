import "./App.css";
import React, { useState } from "react";
import NavBar from "./components/general/NavBar";
import Footer from "./components/general/Footer";
import ProductPage from "./components/ProductPage";
import CartPage from "./components/CartPage";
import data from "./data/data";

function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const exists = cartItems.find((x) => x.id === product.id);
    if (exists) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exists, qty: exists.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <div className="App">
      <NavBar cartItemsCount={cartItems.length} />
      <ProductPage addToCart={addToCart} products={products} />
      <CartPage
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        cartItems={cartItems}
      />
      <Footer />
    </div>
  );
}

export default App;
