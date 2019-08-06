import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Cake from "../components/cake/Cake";
import BuildControls from "../components/cake/BuildControls";
import Modal from '../components/UI/Modal';
import OrderSummary from '../components/cake/OrderSummary';

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
    buying: false
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

  buyingHandler = () => {
    this.setState({buying: true});
  }

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

    return (
      <Fragment>
        <Modal>
          <OrderSummary ingredients={this.state.ingredients}/>
        </Modal>
        <Cake ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdder={this.addIngredientHandler}
          ingredientRemover={this.removeIngredientHandler}
          disabled={disabledInfo}
          price={this.state.totalprice}
          disableOrderButton={this.state.purchasable}
          ordered={this.buyingHandler}
        />
      </Fragment>
    );
  }
}

export default CakeBuilder;
