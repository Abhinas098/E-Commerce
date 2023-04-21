import React, { useContext, useEffect } from "react";
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
import CartContext from "./store/CartContext";

function App() {
  const ctx = useContext(AuthContext);
  const history = useHistory();
  const cartCtx = useContext(CartContext);
  useEffect(() => {
    if (ctx.isLogin) {
      const email = localStorage.getItem("email");
      fetch(
        `https://crudcrud.com/api/1021f448eee94cd6a08d3665296f461f/${email}`
      )
        .then((res) => {
          return res.json().then((data) => {
            for (const key in data) {
              // cartCtx.items.push({ ...data[key] });
              cartCtx.getItem({ ...data[key]});
              console.log(data[key]._id);
            }
          });
        })
        .catch((err) => alert(err.message));
    }
  }, [ctx.isLogin]);

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
