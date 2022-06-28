import "./App.css";
import React, { useState } from "react";
import NavBar from "./components/general/NavBar";
import Footer from "./components/general/Footer";
import ProductPage from "./components/ProductPage";
import SingleProductPage from "./components/SingleProductPage";
import CartPage from "./components/CartPage";
import data from "./data/data";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const [switchAdmin, setSwitchAdmin] = useState(false);

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
    <Router>
      <div className="App">
        <NavBar
          cartItemsCount={cartItems.length}
          getSwitchAdmin={(status) => setSwitchAdmin(status)}
        />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <ProductPage
                addToCart={addToCart}
                products={products}
                switchAdmin={switchAdmin}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <CartPage
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                cartItems={cartItems}
              />
            }
          />
          <Route
            path="products/:productId"
            element={<SingleProductPage addToCart={addToCart} />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
