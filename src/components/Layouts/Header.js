import React, { useContext } from "react";
import { FaCartPlus } from "react-icons/fa";
import { Badge, Container, Dropdown,Nav, Navbar } from "react-bootstrap";
import Cart from "../cart/Cart";
import CartContext from "../../store/CartContext";
import { NavLink } from "react-router-dom";
function Header() {
  const ctx = useContext(CartContext);

  let quantity = 0;
  ctx.items.forEach((item) => {
    quantity += Number(item.quantity);
  });
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <NavLink to="/">E-Commerce</NavLink>
          </Navbar.Brand>
          <NavLink to="Home">Home</NavLink>
          <NavLink to="/">Store</NavLink>
          <NavLink to="About">About</NavLink>
          <Nav>
            <Dropdown align="end">
              <Dropdown.Toggle variant="dark">
                <FaCartPlus />

                <Badge bg="dark" text="info">
                  {quantity}
                </Badge>
              </Dropdown.Toggle>
              <Dropdown.Menu style={{ minWidth: 370 }}>
                <Cart></Cart>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
