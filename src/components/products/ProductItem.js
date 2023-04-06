import React from 'react'

import { Button, Card,Row,Col } from 'react-bootstrap'

const ProductItem = (props) => {
    return (
        <Row style={{margin:'1rem'}}>
            <Col>
                <Card>
                    <Card.Img variant='top' src={props.image} alt={props.title} />
                    <Card.Body>
                        <Card.Title>{props.title}</Card.Title>
                        <Card.Subtitle><span>${props.price}</span></Card.Subtitle>
                        <Button variant="outline-success">Add to Cart</Button>{' '}
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default ProductItem