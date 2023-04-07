import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { Badge, Container, Dropdown, Navbar } from "react-bootstrap";
import Cart from "../cart/Cart";
function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <a href="Store">E-Commerce</a>
          </Navbar.Brand>
          <a href="Home">Home</a>
          <a href="Store">Store</a>
          <a href="About">About</a>

          <Dropdown align="end">
            <Dropdown.Toggle variant="dark">
              <FaCartPlus />

              <Badge bg="dark" text="info">
                3
              </Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ minWidth: 370 }}>
              <Cart></Cart>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
