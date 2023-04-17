
import "./Cart.css";
import React, { useContext ,useState, useEffect} from "react";
import CartContext from "../Store/card-context";


const Cart = (props) => {

  const cartctx = useContext(CartContext);


const totalAmount  =`${cartctx.totalamount.toFixed(2)}`




  const cartitemRemoveHandler=(id)=>{
           cartctx.removeitem(id);
  }
  const cartItemAddHandler=(item)=>{
     cartctx.additem({...item,amount:1})
  } 
   return (
    <section>
      <div className={"cart-row cart-header"}>
        <span className={"cart-item cart-header"}>Item</span>
        <span className={"cart-price cart-header"}>Price</span>
        <span className={"cart-quantity cart-header"}>Quantity</span>
      </div>
      <div className="cart-items">
         {cartctx.items && cartctx.items.map((items) => {
          return (
            <>
              <div className="cart-row" key={items.title}>
                <span className="cart-item cart-column">
                  <img className="cart-img" src={items.imageUrl} alt="" />
                  <span>{items.title}</span>
                </span>
                <span className="cart-price cart-column">{items.price}</span>
                <span className="cart-quantity cart-column">
                  <span className="cart-quantity">x {items.amount}</span>
                  <button onClick={cartitemRemoveHandler.bind(null, items.id)} >-</button>
                  <button onClick={cartItemAddHandler.bind(null, items)} className={'m-1'}>+</button>
                </span>
              </div>
            </>
          );
        })}
        <div className="cart-total">
          <span>
            <span className="total-title">
              <strong>Total Amount</strong>
            </span>
            ₹<span>{totalAmount}</span>
          </span>
        </div>
      </div>
    </section>
  );
};
export default Cart;
