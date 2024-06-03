import React from "react";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Wishlist from "./pages/wishlist";
import Header from "./components/header/Header";
import Cart from "./pages/cart";
import SinglePage from "./pages/singlePage/SinglePage";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/product/:id" element={<SinglePage />} />

        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
