import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classes from "./Layout.module.css";
import Toolbar from "./Navigation/Toolbar";

const layout = props => {
  return (
    <Fragment>
      <Toolbar />
      <main className={classes.Content}>{props.children}</main>
    </Fragment>
  );
};

layout.propTypes = {};

export default layout;
