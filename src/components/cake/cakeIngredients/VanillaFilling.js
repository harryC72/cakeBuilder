import React from "react";
import PropTypes from "prop-types";
import vanillaFilling from "../../../assets/vanilla-filling.png";
import classes from "../CakeIngredient.module.css";

const VanillaFilling = props => {
  return (
    <div>
      <img
        className={classes.General}
        src={vanillaFilling}
        alt="vanilla filling"
      />
    </div>
  );
};

VanillaFilling.propTypes = {};

export default VanillaFilling;
