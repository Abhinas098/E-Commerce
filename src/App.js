import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import "./App.css";
import Store from "./Pages/Store";
import Home from "./Pages/Home";
import About from "./Pages/About";
import LayOut from "./components/Layouts/LayOut";
import ContactUs from "./Pages/ContactUs";
import ProductDetail from "./components/products/ProductDetail";

function App() {
  return (
    <>
      <LayOut>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/Store" />
          </Route>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/Store" exact>
            <Store />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
          <Route path="/Store/:id">
            <ProductDetail />
          </Route>
        </Switch>
      </LayOut>
    </>
  );
}

export default App;
