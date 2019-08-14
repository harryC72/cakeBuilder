import React, { Fragment } from "react";
import Button from "../UI/Button";

class OrderSummary extends React.Component {
  render() {
    const {
      ingredients,
      totalPrice,
      purchasedCancel,
      purchasedContinue
    } = this.props;

    const ingredientSummary = Object.keys(ingredients).map(
      (ingredientKey, index) => {
        return (
          <li key={ingredientKey + index}>
            <span style={{ textTransform: "capitalize" }}>{ingredientKey}</span>
            : {this.props.ingredients[ingredientKey]}
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
  }
}

export default OrderSummary;
