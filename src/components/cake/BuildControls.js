import React from "react";
import classes from "./BuildControls.module.css";

const controls = [
  { label: "Topping", type: "topping" },
  { label: "Strawberry", type: "strawberry" },
  { label: "Vanilla-filling", type: "vanillaFilling" }
];

const BuildControls = () => {
  return <div className={classes.BuildControls} />;
};

export default BuildControls;
