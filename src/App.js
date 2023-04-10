import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Store from "./Pages/Store";
import CartProvider from "./store/CartProvider";
import Home from "./Pages/Home";
import About from "./Pages/About";
import LayOut from "./components/Layouts/LayOut";
import ContactUs from "./Pages/ContactUs";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayOut />}>
            <Route path="Home" element={<Home />} />
            <Route path="About" element={<About />} />
            <Route path="/" element={<Store />} />
            <Route path="contact" element={<ContactUs />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
