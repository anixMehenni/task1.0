import React from "react";
import _Aux from "../../../hoc/_Aux";
import Button from "../../UI/Button/Button";

const orderSummary = props => {
  //transform the ingredients object to an array
  const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span style={{ textTrabsform: "capitalize" }}>{igKey}</span>:{
          props.ingredients[igKey]
        }
      </li>
    );
  });
  return (
    <_Aux>
      <h3> Your Order</h3>
      <p> A delicious burger wit hthe following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p><strong>Total Price: £{props.price.toFixed(2)}</strong></p>
      <p>Continue to Checkout?</p>
      <Button clicked={props.danger} btnType={"Danger"}>Cancel</Button>
      <Button clicked={props.success} btnType={"Success"}>Continue</Button>
    </_Aux>
  );
};

export default orderSummary;
