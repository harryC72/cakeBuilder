import React from "react";
import logo from "../assets/images/cakeLogo.png";
import classes from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={classes.Logo}>
      <img src={logo} alt="logo" />
    </div>
  );
};

export default Logo;
