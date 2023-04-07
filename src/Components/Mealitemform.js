import { Button } from "react-bootstrap";
import React, { useRef } from "react";

const Mealitemform = (props) => {
  const amountinputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredamount = amountinputRef.current.value;

    const enteredamountNumber = +enteredamount;
    if (
      enteredamount.trim().length === 0 ||
      enteredamountNumber < 1 ||
      enteredamountNumber > 5
    ) {
      return;
    }

    props.onAddToCart(enteredamountNumber);
  };
  return (
    <form onSubmit={submitHandler}>
      <input
        ref={amountinputRef}
        label="Amount"
        id="amount"
        type="number"
        min="1"
        max="5"
        step=" 1"
        defaultValue="1"
        style={{ width: 40 }}
      />
      <button style={{backgroundColor:'#4CAF50'}}>+Add</button>
      {/* {!amountIsValid && <p>Please enter a valid amount(1-5)</p>} */}
    </form>
  );
};

export default Mealitemform;
