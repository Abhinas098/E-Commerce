import React from "react";

import { Container, Navbar } from "react-bootstrap";

function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" >
        <Container>
          <Navbar.Brand>
            <a href='Store'>E-Commerce</a>
          </Navbar.Brand>
          <a href='Home'>Home</a>
          <a href='Store'>Store</a>
          <a href='About'>About</a>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;