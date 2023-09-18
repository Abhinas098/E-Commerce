import React, { useContext } from "react";
import { Button, Card, Row, Col } from "react-bootstrap";
import CartContext from "../../store/CartContext";
import { Link } from "react-router-dom";
import { ThemeCtx } from "../../store/ThemeCtx";


const ProductItem = (props) => {
  const ctx = useContext(CartContext);
  const {theme} =useContext(ThemeCtx)
  const AddItemHandler = (e) => {
    ctx.addItem({ ...props, quantity: 1 });
  };
  return (
    <Row style={{ margin: "1rem" }}>
      <Col>
        <Card>
          <Link to={`Store/${props.id}`}>
            <Card.Img variant="top" src={props.imageUrl} alt={props.title} />
          </Link>
          <Card.Body className={theme==='day'?"bg-light me-2":"bg-dark me-2"}>
            <Card.Title>{props.title}</Card.Title>
            <Card.Subtitle >
              <span>${props.price}</span>
            </Card.Subtitle>
            <Button onClick={AddItemHandler} variant={theme==='day'?'outline-dark':"outline-info"}>
              Add to Cart
            </Button>{" "}
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default ProductItem;
