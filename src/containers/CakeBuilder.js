import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Cake from "../components/cake/Cake";

export class CakeBuilder extends Component {
  state = {
    ingredients: {
      topping: 0,
      vanillaFilling: 0,
      strawberry: 0
    }
  };

  render() {
    return (
      <Fragment>
        <Cake ingredients={this.state.ingredients} />
        <div>Build controls</div>
      </Fragment>
    );
  }
}

export default CakeBuilder;
