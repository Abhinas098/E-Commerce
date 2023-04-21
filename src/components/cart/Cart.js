import React, { useContext } from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import CartContext from "../../store/CartContext";
import {
  Button,
  CloseButton,
  Col,
  Container,
  Row,
  Table,
} from "react-bootstrap";

const Cart = (props) => {
  const ctx = useContext(CartContext);
  const TotalAmount = ctx.totalAmount;
  const items = ctx.items.map((item) => (
    <CartItem
      key={item.id}
      id={item._id}
      title={item.title}
      price={item.price}
      img={item.imageUrl}
      quantity={item.quantity}
    />
  ));

  const onPurchase = () => {
    if (ctx.items.length === 0) {
      alert("Empty Cart!");
      props.onClose();
    } else {
      alert("Purchase Successful!");
      props.onClose();
    }
  };

  return (
    <Container className="container">
      <Row>
        <Col className="cart">Cart</Col>
        <CloseButton onClick={props.onClose} />
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
            <span>${TotalAmount}</span>
          </div>
          <br />
          <div>
            <Button onClick={onPurchase} variant="info">
              Purchase
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
