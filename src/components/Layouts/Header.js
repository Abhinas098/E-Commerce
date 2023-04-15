import React, { useContext, useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { Badge, Container, Dropdown, Navbar } from "react-bootstrap";
import Cart from "../cart/Cart";
import CartContext from "../../store/CartContext";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

function Header() {
  const ctx = useContext(CartContext);
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
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container className={classes.header}>
          <Navbar.Brand>
            <NavLink to="/">E-Commerce</NavLink>
          </Navbar.Brand>
          <NavLink to="/Home">Home</NavLink>
          <NavLink to="/Store">Store</NavLink>
          <NavLink to="/About">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>

          <Dropdown onToggle={showingCart} align="end">
            <Dropdown.Toggle variant="dark">
              <FaCartPlus />
              <Badge bg="dark" text="info">
                {quantity}
              </Badge>
            </Dropdown.Toggle>
            {showCart && (
              <Dropdown.Menu style={{ minWidth: 500 }}>
                <Cart onClose={hideCart}></Cart>
              </Dropdown.Menu>
            )}
          </Dropdown>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
