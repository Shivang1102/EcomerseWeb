import { Col, Container, Card, Button } from "react-bootstrap";
import Mealitemform from "./Mealitemform";
import CartContext from "../Store/card-context";
import React,{useContext} from "react";

const Productlist = (props) => {
    const cardctx = useContext(CartContext)
    const addToCartHandler = (amount) => {
        cardctx.additem({
          id: props.id,
          title: props.title,
          amount: amount,
          price: props.price,
          imageUrl: props.imageUrl,
        });
      };

  return (
    <Col
      sm={6}
      key={props.title}
      className={"col d-flex justify-content-center mt-4"}
    >
      <Card style={{ width: "18rem" }}>
        <Card.Img
          className={"hover-zoom"}
          variant="top"
          src={props.imageUrl}
          style={{ width: "286px", height: "180px" }}
        />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>Price ₹{props.price}</Card.Text>
          <Mealitemform onAddToCart={addToCartHandler} />
          {/* <Button>Add To CART</Button> */}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Productlist;
