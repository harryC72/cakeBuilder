import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import classes from "./Layout.module.css";
import Toolbar from "./Navigation/Toolbar";
import SideDrawer from "./Navigation/SideDrawer";

class Layout extends React.Component {

  state = {
    showSidedrawer : true
  }

sideDrawerClosedHandler = () => {
  this.setState({showSidedrawer : false })
  }

  render(){
    return (
      <Fragment>
        <Toolbar />
        <SideDrawer open={this.state.showSidedrawer} closed={this.sideDrawerClosedHandler} />
        <main className={classes.Content}>{this.props.children}</main>
      </Fragment>
    );

  }
 
};

Layout.propTypes = {};

export default Layout;
