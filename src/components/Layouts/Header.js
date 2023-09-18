import React, { useContext, useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import {
  Badge,
  Button,
  Container,
  Dropdown,
  Nav,
  NavDropdown,
  Navbar,
} from "react-bootstrap";
import Cart from "../cart/Cart";
import CartContext from "../../store/CartContext";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";
import AuthContext from "../../store/AuthContext";
import { ThemeCtx } from "../../store/ThemeCtx";

function Header() {
  const ctx = useContext(CartContext);
  const authCtx = useContext(AuthContext);
  const { theme, themeMode } = useContext(ThemeCtx);

  console.log(theme)
  const [showCart, setShowCart] = useState(false);

  let quantity = 0;
  ctx.items.forEach((item) => {
    quantity += Number(item.quantity);
  });

  const showingCart = () => {
    setShowCart(true);
  };
  const hideCart = () => {
    setShowCart(false);
  };
  const logoutHandler = () => {
    authCtx.logout();
  };
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="fixed-top"
      >
        <Container>
          <Navbar.Brand>
            <NavLink to="/">E-Commerce</NavLink>
          </Navbar.Brand>

          <Nav style={{ marginRight: "100px" }}>
            <Button onClick={themeMode} variant="dark">
              {theme === "day" ? "🌙" : "🌤️"}
            </Button>
          </Nav>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="d-flex justify-content-end flex-grow-1  ">
              <NavLink to="/Home">Home</NavLink>
              <NavLink to="/Store">Store</NavLink>
              <NavLink to="/About">About</NavLink>
              {!authCtx.isLogin && <NavLink to="/login">Login</NavLink>}
              {authCtx.isLogin && <NavLink to="/contact">Contact</NavLink>}
              {authCtx.isLogin && <h6 onClick={logoutHandler}>Logout</h6>}
            </Nav>
            <Nav>
              {authCtx.isLogin && (
                <Dropdown
                  drop="start"
                  onToggle={showingCart}
                  id="collapsible-nav-dropdown"
                >
                  <Dropdown.Toggle variant="dark">
                    <FaCartPlus />
                    <Badge bg="dark" text="info">
                      {quantity}
                    </Badge>
                  </Dropdown.Toggle>
                  {showCart && (
                    <Dropdown.Menu style={{ minWidth: "51vw" }}>
                      <Cart onClose={hideCart}></Cart>
                    </Dropdown.Menu>
                  )}
                </Dropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
