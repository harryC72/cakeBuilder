import React from "react";
import logo from "../assets/images/cakeLogo.png";
import classes from "./Logo.module.css";

const Logo = props => {
  return (
    <div
      className={classes.Logo}
      style={{ height: props.height, marginBottom: props.marginBottom}}
    >
      <img src={logo} alt="logo" />
    </div>
  );
};

export default Logo;
