import React, { useContext } from "react";
import { productsArr } from "./AvailableProducts";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import CartContext from "../../store/CartContext";
import { useParams } from "react-router-dom";
import "./ProductDetail.css";

const ProductDetail = () => {
  const params = useParams();
  const id = params.id;

  const product = productsArr.find((element) => element.id === id);

  const ctx = useContext(CartContext);
  const AddItemHandler = (e) => {
    console.log({ ...product });
    ctx.addItem({ ...product, quantity: 1 });
  };

  if (!product) {
    return <p>No Product Found!</p>;
  }

  const onPurchase = () => {
    alert("Purchase Successful!");
  };

  return (
    <Container fluid="md" style={{ marginTop: "4rem" }}>
      <Row>
        <Col md="1" sm="1">
          <Card>
            <Card.Img src={product.imageUrl} alt={product.title} />
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src={product.imageUrl}
              alt={product.title}
            />
          </Card>
        </Col>

        <Col lg="4" sm="2">
          <Card className="d-flex p-2">
            <Card.Img
              variant="top"
              src={product.imageUrl}
              alt={product.title}
            />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>
                <span>${product.price}</span>
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Button
                style={{ float: "left" }}
                variant="secondary"
                onClick={AddItemHandler}
              >
                Add to cart
              </Button>
              <Button
                style={{ float: "right" }}
                onClick={onPurchase}
                variant="info"
              >
                Purchase
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs="5">
          <Row className="p-1">
            <Col className="p-1 m-1 ">
              <h1>Ratings & Reviews</h1>
              <h2>&#9733;&#9733;&#9733;&#9733;&#9733;</h2>
              <br />
            </Col>
            <Col xs="13">
              <h4>Abhinas</h4>
            </Col>
            <Col className="mb-4">Very Good Product</Col>
            <Col xs="13">
              <h4>Likun</h4>
            </Col>
            <Col className="mb-4">Overall Good</Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
