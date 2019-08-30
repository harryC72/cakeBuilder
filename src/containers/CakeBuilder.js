import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Cake from "../components/cake/Cake";
import BuildControls from "../components/cake/BuildControls";
import Modal from "../components/UI/Modal";
import OrderSummary from "../components/cake/OrderSummary";
import { thisTypeAnnotation } from "@babel/types";
import axios from "../axios-order";
import Spinner from "../components/UI/Spinner";

const _INGREDIENT_PRICES = {
  topping: 0.5,
  strawberry: 0.4,
  vanillaFilling: 1.4
};

export class CakeBuilder extends Component {
  state = {
    ingredients: {
      topping: 0,
      vanillaFilling: 0,
      strawberry: 0
    },
    totalprice: 4,
    purchasable: false,
    purchasing: false,
    loading: false
  };

  setPurchasable = ingredients => {
    let total = 0;
    for (let key in ingredients) {
      total += ingredients[key];
    }
    if (total > 0) {
      this.setState({ purchasable: true });
    } else {
      this.setState({ purchasable: false });
    }
  };

  purchasedHandler = () => {
    this.setState({ purchasing: true });
  };

  unPurchaseHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    this.setState({ loading: true });
    let order = {
      ingredients: this.state.ingredients,
      price: this.state.price,
      customer: {
        name: "Harry C",
        address: {
          street: "WildStreet 3",
          City: "Kansas City",
          Country: "US"
        },
        email: "harry@gmail.com",
        deliveryMethod: "fastest"
      }
    };
    axios
      .post("/orders.json", order)
      .then(response =>
        this.setState({
          loading: false,
          purchasing: false
        })
      )
      .catch(error =>
        this.setState({
          loading: false,
          purchasing: false
        })
      );
  };

  addIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = updatedCount;
    const priceAddition = _INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalprice;
    const newPrice = oldPrice + priceAddition;
    this.setState({ totalprice: newPrice, ingredients: updatedIngredients });
    this.setPurchasable(updatedIngredients);
  };

  removeIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount - 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = updatedCount;
    const priceAddition = _INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalprice;
    const newPrice = oldPrice - priceAddition;
    this.setState({ totalprice: newPrice, ingredients: updatedIngredients });
    this.setPurchasable(updatedIngredients);
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary = (
      <OrderSummary
        purchasedCancel={this.unPurchaseHandler}
        purchasedContinue={this.purchaseContinueHandler}
        ingredients={this.state.ingredients}
        totalPrice={this.state.totalprice}
      />
    );

    if (this.state.loading) {
      orderSummary = <Spinner />;
    }

    return (
      <Fragment>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.unPurchaseHandler}
        >
          {orderSummary}
        </Modal>
        <Cake ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdder={this.addIngredientHandler}
          ingredientRemover={this.removeIngredientHandler}
          disabled={disabledInfo}
          price={this.state.totalprice}
          disableOrderButton={this.state.purchasable}
          ordered={this.purchasedHandler}
        />
      </Fragment>
    );
  }
}

export default CakeBuilder;
