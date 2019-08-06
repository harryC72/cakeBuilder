import React, { Fragment } from "react";

const OrderSummary = ({ ingredients }) => {
  const ingredientSummary = Object.keys(ingredients).map(
    (ingredientKey, index) => {
      return (
        <li key={ingredientKey + index}>
          <span style={{ textTransform: "capitalize" }}>{ingredientKey}</span>:{" "}
          {ingredients[ingredientKey]}
        </li>
      );
    }
  );
  return (
    <Fragment>
      <h3>Your order</h3>
      <p>Here is your fantastic cake</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to checkout?</p>
    </Fragment>
  );
};

export default OrderSummary;
