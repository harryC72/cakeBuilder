import React, { Fragment } from "react";
import Button from "../UI/Button";

const OrderSummary = ({
  ingredients,
  purchasedCancel,
  purchasedContinue,
  totalPrice
}) => {
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
      <p>
        <strong>Total price: ${totalPrice.toFixed(2)}</strong>
      </p>
      <p>Continue to checkout?</p>
      <Button buttonType="Danger" clicked={purchasedCancel}>
        CANCEL
      </Button>
      <Button buttonType="Success" clicked={purchasedContinue}>
        CONTINUE
      </Button>
    </Fragment>
  );
};

export default OrderSummary;
