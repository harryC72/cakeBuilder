import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "../Logo";
import NavigationItems from "./NavigationItems";

const Toolbar = () => {
  return (
    <header className={classes.Toolbar}>
      <div>MENU</div>
      <Logo height="80%" />
      <nav className={classes.DeskTopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default Toolbar;
