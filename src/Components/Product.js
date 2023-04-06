import React from "react";
import { Col, Container, Row, Card, Button } from "react-bootstrap";

const Product = () => {
  const productsArr = [
    {
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      title: "Blue Color",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  return (
    <Row>
      {productsArr.map(item => (
        <Col sm={6} key={item.title} className={"col d-flex justify-content-center mt-4"}>
          <Card style={{ width: '18rem' }} >
            <Card.Img className={ 'hover-zoom'}variant="top" src={item.imageUrl} style={{ width: '286px', height: '180px' }} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>Price ₹{item.price}</Card.Text>
              <Button>Add To CART</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Product;


