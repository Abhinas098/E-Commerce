import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";

// React Bootstrap Configuration

import "../node_modules/react-bootstrap/dist/react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from "react-router-dom";
import CartProvider from "./store/CartProvider";
import { AuthCtxProvider } from "./store/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthCtxProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </AuthCtxProvider>
  </BrowserRouter>
);
