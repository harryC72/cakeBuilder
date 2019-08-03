import React from "react";
import PropTypes from "prop-types";
import classes from "./Cake.module.css";
import CakeIngredient from "./CakeIngredient";

const cake = props => {
  console.log("props", props);
  let incomingIngredients = Object.keys(props.ingredients)
    .map(ingredient => {
      return [...Array(props.ingredients[ingredient])].map((_, i) => (
        <CakeIngredient key={ingredient + i} type={ingredient} />
      ));
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (incomingIngredients.length === 0) {
    incomingIngredients = <div>Please add topping and filling!</div>;
  }
  return (
    <div className={classes.Cake}>
      <CakeIngredient type="top-cake" />
      {incomingIngredients}
      <CakeIngredient type="bottom-cake" />
    </div>
  );
};

cake.propTypes = {};

export default cake;
