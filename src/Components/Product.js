import React from "react";
import {  Row } from "react-bootstrap";


import Productlist from "./Productlist";
const Product = (props) => {
  

  const productsArr = [
    {
      id: "m1",
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      id: "m2",
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      id: "m3",
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      id: "m4",
      title: "Blue Color",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  return (
    <Row>
      {productsArr.map((item) => (
        <Productlist
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          imageUrl={item.imageUrl}
        />
      ))}
    </Row>
  );
};

export default Product;
