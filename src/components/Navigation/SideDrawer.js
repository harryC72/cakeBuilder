import React, { Fragment } from "react";
import Logo from "../Logo";
import Backdrop from "../UI/Backdrop";
import NavigationItems from "../Navigation/NavigationItems";
import classes from "./SideDrawer.module.css";

const SideDrawer = props => {

 

  return (
    <Fragment>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={classes.SideDrawer}>
        <Logo height="11%" marginBottom="32px" />
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Fragment>
  );
};

export default SideDrawer;
