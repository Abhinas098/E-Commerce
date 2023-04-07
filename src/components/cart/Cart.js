import React from "react";
import CartItem from "./CartItem";
import './Cart.css'
import {
  Button,
  CloseButton,
  Col,
  Container,
  Row,
  Table,
} from "react-bootstrap";

const cartElements = [
  {
    id: "g1",
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 2,
  },
  {
    id: "g2",
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 3,
  },
  {
    id: "g3",
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },
];

const Cart = () => {
  const items = cartElements.map((item) => (
    <CartItem
      key={item.id}
      id={item.id}
      title={item.title}
      price={item.price}
      img={item.imageUrl}
      quantity={item.quantity}
    />
  ));

  return (
    <Container className='container'>
      <Row>
        <Col className='cart'>Cart</Col>
        <CloseButton />
      </Row>
      <Row>
        <Col>
          <Table>
            <thead>
              <tr>
                <th>ITEM</th>
                <th>PRICE</th>
                <th>QUANTITY</th>
              </tr>
            </thead>
            <tbody>{items}</tbody>
          </Table>
          <div style={{ float: "right" }}>
            <span>Total-</span>
            <span>$24.38</span>
          </div>
          <br />
          <div >
            <Button variant="info">Purchace</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
