import React, { useContext } from "react";
import { Button, Card, Row, Col } from "react-bootstrap";
import CartContext from "../../store/CartContext";
import { Link } from "react-router-dom";

const ProductItem = (props) => {
  const ctx = useContext(CartContext);
  const AddItemHandler = (e) => {
    ctx.addItem({ ...props, quantity: 1 });
  };
  return (
    <Row style={{ margin: "1rem" }}>
      <Col>
        <Card>
          <Link to={`Store/${props.id}`}>
            <Card.Img variant="top" src={props.image} alt={props.title} />
          </Link>
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Subtitle>
              <span>${props.price}</span>
            </Card.Subtitle>
            <Button onClick={AddItemHandler} variant="outline-success">
              Add to Cart
            </Button>{" "}
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default ProductItem;
