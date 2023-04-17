import React, { useContext } from "react";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";

import "./App.css";
import Store from "./Pages/Store";
import Home from "./Pages/Home";
import About from "./Pages/About";
import LayOut from "./components/Layouts/LayOut";
import ContactUs from "./Pages/ContactUs";
import ProductDetail from "./components/products/ProductDetail";
import AuthContext from "./store/AuthContext";
import AuthForm from "./components/Auth/AuthForm";

function App() {
  const ctx = useContext(AuthContext);
  const history = useHistory();
  return (
    <>
      <LayOut>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/Home" />
          </Route>

          {!ctx.isLogin && (
            <Route path="/login">
              <AuthForm />
            </Route>
          )}
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/Store" exact>
            {ctx.isLogin && <Store />}
            {!ctx.isLogin && <Redirect to="./login" />}
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
          <Route path="/Store/:id">
            {!ctx.isLogin ? history.goBack() : <ProductDetail />}
          </Route>
          <Route path="*">
            <Redirect to="./" />
          </Route>
        </Switch>
      </LayOut>
    </>
  );
}

export default App;
