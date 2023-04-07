import React, { useContext } from "react";
import { FaCartPlus } from "react-icons/fa";
import { Badge, Container, Dropdown, Navbar } from "react-bootstrap";
import Cart from "../cart/Cart";
import CartContext from "../../store/CartContext";
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
            <a href="Store">E-Commerce</a>
          </Navbar.Brand>
          <a href="Home">Home</a>
          <a href="Store">Store</a>
          <a href="About">About</a>

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
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
