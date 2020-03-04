import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">OSRS Grand Exchange</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
