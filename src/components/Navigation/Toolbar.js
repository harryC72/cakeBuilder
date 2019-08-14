import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "../Logo";
import NavigationItems from "./NavigationItems";
import ToggleButton from "../UI/DrawerToggle";

const Toolbar = props => {
  return (
    <header className={classes.Toolbar}>
      <ToggleButton clicked={props.clicked}/>
      <Logo height="80%" />
      <nav className={classes.DeskTopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default Toolbar;
