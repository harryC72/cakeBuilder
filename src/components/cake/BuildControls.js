import React from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl";

const controls = [
  { label: "Topping", type: "topping" },
  { label: "Strawberry", type: "strawberry" },
  { label: "Vanilla-filling", type: "vanillaFilling" }
];

const BuildControls = props => (
  <div className={classes.BuildControls}>
    <p>
      Current price:<strong> {props.price.toFixed(2)}</strong>
    </p>
    {controls.map(control => (
      <BuildControl
        key={control.label}
        label={control.label}
        added={() => props.ingredientAdder(control.type)}
        removed={() => props.ingredientRemover(control.type)}
        disabled={props.disabled[control.type]}
      />
    ))}
    <button
      disabled={!props.disableOrderButton}
      className={classes.OrderButton}
      onClick={props.ordered}
    >
      ORDER NOW
    </button>
  </div>
);

export default BuildControls;
